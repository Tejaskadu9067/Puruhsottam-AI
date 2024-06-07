import React, { useContext, useState } from "react";
import { Context } from "../context/Context.jsx";
import { Link } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";




export default function Profile() {
  const { prevPrompts, newuser, newemail, newpassword } = useContext(Context);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [photo, setPhoto] = useState("");
  const [pic, setpic] = useState("")
  const [bio, setBio] = useState("");
  const [newBio, setNewBio] = useState(bio);
  

  const uploadPhoto = (e) => {
    const files = e.target.files;
    const data = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
  
    axios
      .post("http://localhost:3000/upload", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        const data = response;
        setPhoto(data); // Update photo state after response
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
      });
  };
  
  // Outside the component, handle pic state update
  let photolink 
  useEffect(() => {
    let path = photo.data;
    if (path !== undefined) {
      let newpath = path.replace(/..\\frontend\\uploads\\/, '');
      setpic(newpath);
      photolink = newpath
    }
  }, [photo]);

  const handleEditBio = () => {
    if (isEditingBio) {
      setBio(newBio);
    }
    setIsEditingBio(!isEditingBio);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 p-8 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Info Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 relative">
          <Link
            to="/home"
            className="absolute left-4 top-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-2"
          >
            Back
          </Link>
          <img
            className="rounded-full w-32 h-32 mx-auto mb-8 border-4 border-indigo-500"
            src={"../../uploads/" + photolink}
            alt=""
          />
       
          <label className="flex h-16 cursor-pointer items-center justify-center gap-1 border bg-transparent rounded-2xl mb-2 p-2 text-2xl text-gray-600">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
          Upload
        </label>
          

          <div className="space-y-4 text-center">
            <div className="text-lg font-semibold">{newuser}</div>
            <div className="text-sm text-gray-500">{newemail}</div>
            <div className="text-sm text-gray-500">{newpassword}</div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-indigo-500">Bio</h2>
            {isEditingBio ? (
              <textarea
                className="mt-2 w-full p-2 border rounded-lg text-gray-700"
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
              />
            ) : (
              <p className="mt-2 text-gray-700">{bio}</p>
            )}
            <button
              onClick={handleEditBio}
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-2"
            >
              {isEditingBio ? "Save Bio" : "Edit Bio"}
            </button>
          </div>
        </div>

        {/* Recent Chats Section */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-500">
            Recent Chats
          </h2>
          <div className="space-y-4 h-80 overflow-y-auto">
            {prevPrompts.map((item, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow">
                {item.slice(0, 22)} ...
              </div>
            ))}
          </div>
        </div>

        {/* User Stats Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-500">
            User Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
              <div className="text-lg font-semibold">Total Chats</div>
              <div className="text-2xl font-bold">{prevPrompts.length}</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
              <div className="text-lg font-semibold">Followers</div>
              <div className="text-2xl font-bold">75</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
              <div className="text-lg font-semibold">Following</div>
              <div className="text-2xl font-bold">60</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow text-center">
              <div className="text-lg font-semibold">Likes</div>
              <div className="text-2xl font-bold">300</div>
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-500">
            Settings
          </h2>
          <div className="space-y-4">
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-4">
              Change Password
            </button>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-4">
              Update Email
            </button>
            <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg p-4">
              Manage Subscriptions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
