import { createContext, useContext, useEffect, useState } from "react";
import runChat from "../config/gemini";
import axios from "axios"
export const Context = createContext()

const ContextProvider = (props) =>{
    const [newpassword, setNewPassword] = useState(null)
    const [newemail, setNewEmail] = useState(null)
    const [newuser, setNewUser] = useState(null)
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const [ready, setReady] = useState(false)


    const delayPara = (index, nextWord) =>{
        setTimeout(() => {
            setResultData(prev=> prev+nextWord)
        }, 75*index);
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) =>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await runChat(input)
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for(let i=0; i <responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i]
            delayPara(i,nextWord+" ")
        }
        setLoading(false)
        setInput("")

    }

    

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,resultData,
        input,
        setInput,
        newChat,
        newuser,
        setNewUser,
        ready,
        setReady,
        newemail,
        newpassword
    }
    useEffect(() => {
        if(!newuser){
          console.log("use effect")
            axios.get('http://localhost:3000/api/profile').then(({data}) =>{
                console.log(data)
            setNewUser(data.username)
            setNewEmail(data.email)
            setNewPassword(data.id)
          })
        }
      }, [])

  

    

    

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;