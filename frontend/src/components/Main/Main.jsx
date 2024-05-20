
import {React,useContext} from 'react'
import { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {UserContext} from '../../context/Context.js'
import {Context} from '../../context/Context.jsx'
import { Link, useNavigate } from "react-router-dom";
import Profile from '../../Usercomponents/Profile.jsx'



  

const Main = () => {
  // const {newuser} = useContext(Context)
  
  const navigate = useNavigate();
  const{ 
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newuser,
    setNewUser
} = useContext(Context)

    const [account, setAccount] = useState(false)
    const setAccountState = () =>{
      setAccount(!account)
    }


  return (
    <UserContext.Provider>
    <div className='main'>
      <div className="nav">
        <p>Purushottam.AI</p>
        <img onClick={setAccountState} style={{cursor:"pointer"}} src={assets.user_icon} alt="" />
      </div>
      {account? 
      <div style={{background: "-webkit-linear-gradient(60deg, #F7F1ED, #FEBE80)"}} className=' absolute right-0 mr-6  p-6 rounded-xl mt-4'>
        <div className="flex gap-2">
        <Link to={('/profile')} className='border bg-white py-2 px-3 rounded-xl'>
          <span className='text-black text-md'>PROFILE</span>
        </Link>
        <Link to={'/login'} className='border bg-white  py-2 px-3 rounded-xl'>
          <span className='text-black text-md'>LOGOUT</span>
        </Link>
      </div> 
      </div>
        : null }
      <div className="main-container">

        {!showResult ? <>
        
          <div className="greet">
            <p><span>Hello {newuser}.</span></p>
            <p>What are you exploring today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        :<div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p className='text-white'>{recentPrompt}</p>
              </div>
              <div className="result-data bg-white rounded-xl">
                <img src={assets.newgemini} alt="" />
                {loading? <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div> : <p dangerouslySetInnerHTML={{__html:resultData}}></p> }
                
              </div>
          </div>}
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />: null}
                </div>
            </div>
            <p style={{color: "black", marginLeft: "148px"}} className="bottom-info">
                Purushottam may display inaccurate info, including about people, so double check before using.
            </p>
        </div>
      </div>
    </div>
    </UserContext.Provider>
  )
}

export default Main
