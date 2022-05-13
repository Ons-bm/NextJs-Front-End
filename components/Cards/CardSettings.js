import React from "react";

// components

export default function CardSettings(setUpdatedProfile) {

  const updateBio = async (event) => {
    // event.preventDefault();
    // Get data from the form.
    const data = {
        bio : event.target.bio.value
  }
             fetch('http://localhost:8080/api/users/me' , { method : 'PUT',
             headers : {
               'Content-Type': 'application/json',
               'Authorization' : localStorage.getItem('JWTtoken')
             },
             body : JSON.stringify(data)})
            
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
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">My Account</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={updateBio} id="update-profile-form">
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Change Biographie
                  </label>
                  <textarea
                  name="bio"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    placeholder="Feel Free enlighting us ... :D"
                  ></textarea>
                  
                </div>
                <div className="flex justify-center">
                <button
                    className=" bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
