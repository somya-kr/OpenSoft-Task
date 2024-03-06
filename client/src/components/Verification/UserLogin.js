import axios from 'axios';
import React, { useEffect, useState, createContext, useContext } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsError, setIsError] = useState(false);
  const [err, setErr] = useState("")

  const user = {
    email: email,
    password: password
  }
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/register')
  }


  const handleLoginClick = async (event) => {
    event.preventDefault()
    
    try {
      const response = await axios.post(`https://url-shortner-backend-teal.vercel.app/login`, user)
      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      navigate('/workspace');
    } catch (error) {
      setIsError(true);
      setErr(error.response.data.error)
      console.log(error)
    }
  }


  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <div>
      <div className="bg-[url('../src/images/background.jpg')] min-h-screen bg-cover flex flex-col">
        <div className="w-full justify-center items-center inline-flex mt-2 flex-col">
          <div className="grow shrink basis-0 self-stretch justify-between items-center inline-flex ml-4">
            <div className="text-center text-cyan-500 text-[2.307rem] font-extrabold font-['Inter'] hover:cursor-pointer" onClick={handleLogoClick}>Slinkly</div>
          </div>
        </div>
        <div className="bg-gray-500 bg-opacity-25 rounded-3xl w-[80%] sm:w-[40%] ml-20 mt-10 mb-10 p-14 pr-9 pl-9 flex-initial">
          <div className="m-1 ml-5">
            <h3 className="text-cyan-300 font-mono text-5xl " >WELCOME BACK!</h3>
            <div className="mt-4">
              <span className="text-cyan-100 font-serif text-md">
                Don't have an account?
                <button onClick={handleRegisterClick} className="text-cyan-300 ml-1"> Sign Up </button>
              </span>
            </div>
          </div>
          <div>
            <form action=''>
              <div className="p-3 mt-[3rem]">
                <span className="text-cyan-300 text-xl font-mono">Email ID</span>
                <div className=" mt-2 mr-0"><input type='text' className="bg-white/20 text-cyan-100 text-base font-light px-2 font-['Inter'] leading-7 rounded-lg w-[95%] h-9" onChange={e => setEmail(e.target.value)}></input></div>
              </div>
            
              <div className="p-3 mt-2">
                <span className="text-cyan-300 text-xl font-mono">Password</span>
                <div className=" mt-2 mr-0"><input type='password' className="bg-white/20 text-cyan-100 text-base font-light px-2 font-['Inter'] leading-7 rounded-lg w-[95%] h-9" onChange={e => setPassword(e.target.value)}></input></div>
              </div>
              {IsError ? <div className='px-4 text-red-500'>{err}</div>: <div></div>}
              <button className="text-white bg-cyan-500 py-1 px-[6rem] rounded-md align-middle block mx-auto mt-[4rem]" onClick={handleLoginClick}> Login </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserLogin
