import React from "react";
import { useState, useEffect } from "react";

import Navbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {

  const [profile, setProfile] = useState([""]);
  const [messages, setMessages] = useState([""]);
  
  useEffect(() => {
   
      fetch('http://localhost:8080/api/users/me',  {headers : {'Authorization' : localStorage.getItem('JWTtoken')}}
      )
          .then(response => {
            if(!response.ok) {
              throw Error('could not fetch the data for that ressource :( ')
            }
            return response.json()})
          .then(data => {
            setProfile(data);
            })
          .catch (err => {
            console.log(err.message)
          })
        
       
          fetch('http://localhost:8081/getAllMessages',  {Authorization : localStorage.getItem('JWTtoken')}
          )
              .then(response => {
                if(!response.ok) {
                  throw Error('could not fetch tge data for that ressource :( ')
                }
                return response.json()})
              .then(data => {
                setMessages(data);
                })
              .catch (err => {
                console.log(err.message)
              })
           
        
}, []);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {profile.username}
                  </h3>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h6 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Biographie
                  </h6>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {profile.bio}
                      </p>
                    </div>
                  </div>
                </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                    <h6 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Publications
                  </h6>

                  {messages.map((message) => { 
                    return(
                      <>
                   { message.UserId == profile.id ? (
                 
                      <div key={message.id} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                      <div className="flex-auto p-5 lg:p-10">
                        {/*Waiting for mapping */}
                        <h4 className="text-2xl font-semibold">
                          {profile.username}
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                          {message.title}
                        </p>
                        <div className="relative w-full mb-3">
                          <p
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          >
                         {message.content}
                          </p>
                        </div>
                        </div>
                        </div>
                        ) : null}
                        </>
  )})}
                 
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
