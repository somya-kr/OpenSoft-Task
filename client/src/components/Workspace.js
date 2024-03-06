import React, { useEffect, useState } from "react";
import UrlTextBox from "./Maindashboard/UrlTextBox";
import TeamList from "./TeamList";
import GoUpArrow from "./GoUpArrow/GoUpArrow";
import Navbar from "./Navbar";
import UrlTable from "./UrlTable";
import axios from "axios";

const Workspace = () => {
  const [username, setUsername] = useState('Dummy');
  const accessToken = localStorage.getItem('accessToken')
  useEffect(()=>{
    const auth = async() =>{
      const accessToken = localStorage.getItem('accessToken')
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
    <div className="bg-black text-white pb-2">

      {/* top-arrow */}
      <GoUpArrow />

      {/* navbar */}
      <Navbar username={username} transparencyNavbar = {false}/>

      {/* link shortener */}
      <div className="flex justify-center mt-4">
        <UrlTextBox />
      </div>

      {/* teams section */}
      <div className="mt-4 mb-14">
        <div className="text-4xl ml-4">TEAMS</div>
        <TeamList />
      </div>

      {/* urls list */}
      <div className="mt-4">
        <div className="text-4xl ml-4 mb-8">URLS</div>
        <UrlTable />
      </div>
    </div>
  );
};

export default Workspace;
