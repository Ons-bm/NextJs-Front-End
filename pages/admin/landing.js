import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// components

import Navbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {

  const [messages, setMessages] = useState([""]);
  const [addedMessage, setAddedMessage] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
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
        }, 1000)
setAddedMessage(false)
});

const createMessage = async (event) => {
  event.preventDefault();
  // Get data from the form.
  const data = {
      title : event.target.title.value,
      content : event.target.content.value
}
           fetch('http://localhost:8080/api/messages/new' , { method : 'POST',
           headers : {
             'Content-Type': 'application/json',
             'Authorization' : localStorage.getItem('JWTtoken')
           },
           body : JSON.stringify(data)})
          
        .then(response => {
            if(!response.ok) {
              throw Error('could not fetch the data for that ressource :( ')
            }else{
              setAddedMessage(true);
            }
            return response.json()})

          .catch (err => {
            console.log(err.message)
          })
          document.getElementById("create-message-form").reset();
}

const handleLike = (id) => {
  fetch('http://localhost:8080/api/messages/'+id+'/vote/like' , { method : 'POST',
  headers : {
    'Content-Type': 'application/json',
    'Authorization' : localStorage.getItem('JWTtoken')
  }})
 
.then(response => {
   if(!response.ok) {
     throw Error('could not fetch the data for that ressource :( ')
   }
   return response.json()})

 .catch (err => {
   console.log(err.message)
 })
}

const handleDislike = (id) => {
  fetch('http://localhost:8080/api/messages/'+id+'/vote/dislike' , { method : 'POST',
  headers : {
    'Content-Type': 'application/json',
    'Authorization' : localStorage.getItem('JWTtoken')
  }})
 
.then(response => {
   if(!response.ok) {
     throw Error('could not fetch the data for that ressource :( ')
   }
   return response.json()})

 .catch (err => {
   console.log(err.message)
 })
}
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Giant News-Wall
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Over here we will be watching all peoples new posts
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                
              </div>

              <div className="w-full md:w-12 px-6 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">What's new mate</h6>
                    <form onSubmit={createMessage} id="create-message-form">
                    <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-Message"
                    >
                      Message Title
                    </label>
                    <input
                    name="title"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="exemple: My wonderfull title"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                   
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-Message"
                    >
                      Message
                    </label>
                    <input
                    name="content"
                      type="text"
                      className="border-0 px-3 py-6 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="How are you doing today ? tell us😊"
                    />
                  </div>
                  
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </section>

        
        <section className="pb-20 relative block bg-blueGray-800">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                All Posts
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-8/12 px-4">
              {messages.map((message, id) => {
                return (
                  <div key={id} className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    {/*Waiting for mapping */}
                    <h4 className="text-2xl font-semibold">
                    {message.title}
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    {message.content}
                    </p>
                   
                    <div className="relative w-full mb-3">
                    <a
                    className="bg-lightBlue-600  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                    onClick={() => handleLike(message.id)}
                    type="button"
                  >
                    <i className="fa fa-thumbs-up" style={{color: 'white'}}></i>
                  </a>
                  <p className=" w-8 h-8 mr-1 mb-1 inline-flex  items-center justify-center">{message.likes}</p>
                  <a
                  className="bg-lightBlue-600  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                  onClick={() => handleDislike(message.id)}
                  type="button"
                >
                  <i className="fa fa-thumbs-down" style={{color: 'white'}}></i>
                </a>
                  </div>
                    </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


        {/*Implementors */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">This Web Application Founders</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  A highly motivated developers worked on developping this web application.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://lh3.googleusercontent.com/a-/AOh14GgMa0QtGyROGStkcqwD4C4s_MKAF12u8-q6V_NC=s83-c-mo"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ben Mabrouk Ons</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Full Stack <br></br> Web Developer
                    </p>
                    <div className="mt-6">
                      <a
                        className="bg-lightBlue-600  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.facebook.com/ons.benmabrouk.372"
                        target={"_blank"}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="bg-lightBlue-400  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.linkedin.com/in/ons-ben-mabrouk-499904197/"
                        target={"_blank"}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        className="bg-pink-500  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.instagram.com/ons.benmabrouk/"
                        target={"_blank"}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        className="bg-black  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://github.com/Ons-bm"
                        target={"_blank"}
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                  alt="..."
                  src="https://lh3.googleusercontent.com/a-/AOh14Gh_XOXTapsAGuPpOuTdFmTM1egSmFdESWgZouYJkg=s83-c-mo"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Bouzir Mohamed Ali</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Full Stack Js <br></br> Web Developer
                    </p>
                    <div className="mt-6">
                        <a
                        className="bg-lightBlue-600  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.facebook.com/Daly.Bzr/"
                        target={"_blank"}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="bg-lightBlue-400  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.linkedin.com/in/bouzir-mohamed-ali/"
                        target={"_blank"}
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        className="bg-pink-500  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://www.instagram.com/med_ali_bz/"
                        target={"_blank"}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        className="bg-black  text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 inline-flex items-center justify-center"
                        href="https://github.com/MohamedAliBouzir"
                        target={"_blank"}
                      >
                        <i className="fab fa-github"></i>
                      </a>
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
