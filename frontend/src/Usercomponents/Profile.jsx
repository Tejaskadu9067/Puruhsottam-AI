import React, { useContext, useState } from "react";
import {Context} from "../context/Context.jsx"
import { Link } from "react-router-dom";



export default function Profile() {
  const{prevPrompts} = useContext(Context)
    const{ newuser, newemail, newpassword} = useContext(Context)

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 p-24 w-screen h-screen   bg-white text-black fixed">
        
      <div className="text-white bg-indigo-400 p-4 rounded-xl">
      <Link to={('/home')} className="absolute left-0 top-0 mt-4 ml-3 bg-black text-white rounded-xl p-4">Back</Link>
      <img className="rounded-[80%] w-[50%] mb-8 ml-[25%] border border-white"
          src="https://wallpaperaccess.com/full/3881621.jpg"
          alt=""
        />
        <div className="border p-4 rounded-2xl bg-white text-black mb-2  cursor-pointer "><b>Username:</b> {newuser} </div>
        <div className="border p-4 rounded-2xl bg-white text-black mb-2  cursor-pointer "><b>Email:</b> {newemail} </div>
        <div className="border p-4 rounded-2xl bg-white text-black mb-2  cursor-pointer "><b>Password:</b> {newpassword} </div>
        <div></div>
      </div>
      <div className="rounded-xl bg-indigo-400 p-4">
        
        <span className="text-2xl text-white">Recent Chats:</span>
        <div className=" overflow-y-scroll">
        {prevPrompts.map((item) => {
          return <p className="p-4 mt-2 bg-white text-black rounded-xl">{item.slice(0,18)} ...</p>
        })}
        </div>
        
      
      </div>
    </div>
  );
}
