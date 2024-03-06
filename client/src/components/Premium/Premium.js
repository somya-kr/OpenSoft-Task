import React from 'react'
import Card from './Card'
import Navbar from '../Navbar'
import {useState, useEffect} from 'react'
import axios from 'axios'


function Premium() {
    const [username, setUsername] = useState(null);
  const accessToken = localStorage.getItem('accessToken')
  useEffect(()=>{
    const auth = async() =>{
      if(!accessToken){
        setUsername(null);
        return;
      }
      const response = await axios.post("https://url-shortner-backend-teal.vercel.app/workspace", {}, {
          headers: {
              'Authorization': accessToken
          }
      })
      setUsername(response.data.fullname)
    };
    auth();
  }, [accessToken])
    return (
        <>
            <div className="bg-[url('../src/images/background.jpg')] min-h-screen bg-cover flex flex-col text-white">
                <Navbar username={username} togglePresent = {username? true: false}/>
                <div className="w-full justify-center items-center inline-flex mt-2 flex-col">

                    <h1 class="mb-10 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get  <span className="text-transparent font-bold" style={{ backgroundImage: 'linear-gradient(to right, #462523 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)', WebkitBackgroundClip: 'text' }}>Premium</span> Now</h1>



                    <div class="flex flex-wrap justify-center items-center mt-2">
                        <div class="w-full md:w-auto md:flex md:flex-row md:justify-center md:space-x-4">
                            <div class="md:flex-shrink-0">
                                <Card period="Month" price="5" number="5" />
                            </div>
                            <div class="md:flex-shrink-0">
                                <Card period="6 Months" price="25" number="4.16" />
                            </div>
                            <div class="md:flex-shrink-0">
                                <Card period="Year" price="40" number="3.33" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Premium

