import React from "react";
import { useState, useEffect } from "react";
// components

export default function CardProfile() {
  const [profile, setProfile] = useState([""]);
  
  useEffect(() => {
    
      fetch('http://localhost:8080/api/users/me',  {headers : {'Authorization' : localStorage.getItem('JWTtoken')}}
      )
          .then(response => {
            if(!response.ok) {
              throw Error('could not fetch tge data for that ressource :( ')
            }
            return response.json()})
          .then(data => {
            setProfile(data);
            })
          .catch (err => {
            console.log(err.message)
          })
       
        
}, []);


  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/team-2-800x800.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {profile.username}
            </h3>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
              <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              Biographie
            </h3>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {profile.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
