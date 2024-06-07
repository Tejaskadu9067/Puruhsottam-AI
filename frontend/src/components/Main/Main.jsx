import { React, useContext, useEffect} from "react";
import { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { UserContext } from "../../context/Context.js";
import { Context } from "../../context/Context.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Main = () => {





  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newuser,
  } = useContext(Context);

  const [account, setAccount] = useState(false);
  const setAccountState = () => {
    setAccount(!account);
  };
  
  


  


  // console.log(storageArray)

  // useEffect(() => {
    
  // }, [newRecentPrompt, newResultData]);




    
  

    

  

  return (
    <UserContext.Provider>
      <div className="main bg-white">
        <div className="nav bg-indigo-500">
          <p className="text-white  rounded-lg">Purushottam.AI</p>
          <div onClick={setAccountState} className="flex p-1  cursor-pointer rounded-xl gap-2">
            <img
            className="size-"
              onClick={setAccountState}
              style={{ cursor: "pointer" }}
              src={assets.user_icon}
              alt=""
            />
          </div>
        </div>
        {account ? (
          <div className=" absolute right-0 mr-6  p-6 rounded-xl mt-4 bg-indigo-500">
            <div className="flex gap-2">
  <Link
    to={"/profile"}
    className="flex items-center justify-center border bg-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
    <span className="text-black text-md">PROFILE</span>
  </Link>
  <Link
    to={"/login"}
    className="flex items-center justify-center bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
      />
    </svg>
    <span className="text-white text-md">LOGOUT</span>
  </Link>
</div>

          </div>
        ) : null}
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello {newuser}.</span>
                </p>
                <p className="text-zinc-500">What are you exploring today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
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
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p className="text-black text-xl">{recentPrompt}</p>
              </div>
              <div className="result-data p-8 bg-zinc-100 rounded-xl">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-18 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>

                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box ml-6 bg-zinc-100">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div>
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <p
              style={{ color: "black", marginLeft: "148px" }}
              className="bottom-info"
            >
              Purushottam may display inaccurate info, including about people,
              so double check before using.
            </p>
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default Main;
