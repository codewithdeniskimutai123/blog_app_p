import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import {useState, useEffect} from "react";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AppLayout = () => {

  useEffect(() => {
    if(localStorage.getItem("dark") === null){
      localStorage.setItem("dark", "false")
    }
  },[])

  const[darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true")

  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("dark", newDarkMode ? "true": "false")
    
  }

  return (
    <div className={darkMode ? "dark":"" }>
        <main className='w-full bg-[#ffffff] dark:bg-[#181A2A]'>

            <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode}/>
            <ToastContainer />
            <Outlet/>
            <Footer/>

        </main>
    </div>
  )
}

export default AppLayout