
import {React,useContext} from 'react'
import { useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'

const Main = () => {
  const{ 
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput} = useContext(Context)

    const [account, setAccount] = useState(false)
    const setAccountState = () =>{
      setAccount(!account)
    }


  return (
    <div className='main'>
      <div className="nav">
        <p>Purushottam AI</p>
        <img onClick={setAccountState} style={{cursor:"pointer"}} src={assets.user_icon} alt="" />
      </div>
      {account? <div className="login">
        <img className='profile-image' src={assets.user_icon} alt="" />
        <p className="profile-text">Hello, Developer!</p>
        
          <div className="inner-login">
            <img src={assets.gallery_icon} alt="" /> 
            <p>Profile</p> 
          </div>
          <div className="inner-login">
            <img src={assets.history_icon} alt="" /> 
            <p>Profile</p> 
          </div>
        
        
          <div className="inner-login">
            <img src={assets.message_icon} alt="" /> 
            <p>Profile</p> 
          </div>
          <div className="inner-login">
            <img src={assets.bulb_icon} alt="" /> 
            <p>Profile</p> 
          </div>
        
        
        
        
       </div> : null }
      <div className="main-container">

        {!showResult ? <>
        
          <div className="greet">
            <p><span>Hello, Developer</span></p>
            <p>How can i help you today?</p>
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
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
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
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />: null}
                </div>
            </div>
            <p style={{color: "white", marginLeft: "148px"}} className="bottom-info">
                Purushottam may display inaccurate info, including about people, so double check before using.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
