import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import { useEffect } from "react";
function Profile() {

    const userID  = localStorage.getItem("UserID")
    const [namefromDB , setNamefromDB] = useState("");
    const [emailfromDB , setEmailfromDB] = useState("");

    useEffect(()=>{
        const getUser = async ()=>{
            try {
                await axios.post("http://localhost:3000/user/getuser",{
                    _id : userID
                })
                .then((res)=>{
                    console.log(res.data.user);
                    setNamefromDB(res.data.user.fullname);
                    setEmailfromDB(res.data.user.email);

                })
            } catch (error) {
                console.log("Error in Profile : ", error);
            }
        }

        getUser()
    },[])

  return (
    <>
      <Navbar />
      <div className=" mt-16">
        <div class="flex items-center h-screen w-full justify-center">
          <div class="max-w-xs">
            <div class="bg-white shadow-xl rounded-lg py-3">
              <div class="photo-wrapper p-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>

              <div class="p-2 space-y-5">
                <label htmlFor="name" className="ml-5">Name</label>
                <input
                  id="name"
                  className="bg-white  items-center ml-3 outline-none"
                  type="text"
                  placeholder={namefromDB}
                  readOnly
                />

                <br/>
                <label htmlFor="phone" className="ml-5">Phone +91</label>
                <input
                  id="phone"
                  className="bg-white  items-center ml-3 "
                  type="tel"
                  maxLength={10}
                  
                  placeholder="phone"
                />


                <br/>
                <label htmlFor="email" className="ml-5">Email</label>
                <input
                  id="email"
                  className="bg-white items-center ml-3 outline-none"
                  type="email"                  
                  placeholder={emailfromDB}
                  readOnly
                />


                <br/>
                <label htmlfor="dob" className="ml-5">DOB </label>
                <input 
                    className="bg-white ml-3 "
                    type="date" 
                    id="dob"  
                    min="1950-01-01" 
                    max="2024-04-14" 
                />

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
