import { Switch } from "@/components/ui/switch"
import { FaHamburger } from "react-icons/fa";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({darkMode, handleDarkMode}) => {

  const[showNavBar, setShowNavBar] = useState(false)


  function showNav(){
    setShowNavBar(!showNavBar)
  }
  return (
    <>
    <nav className="container p-4 flex justify-between items-center gap-6 sticky backdrop-blur-lg top-0 z-10 bg-[white] dark:bg-[#141624] border-b-2 border-black-sm">
        <Link to="/" className="text-[#141624] text-2xl dark:text-[#ffffff]">
            DevFolio
        </Link>

        <ul className="flex items-center justify-end gap-9 text-[#383c4A] lg:flex-1 max-md:hidden dark:text-[#ffffff] backdrop-blur-lg">
            {/* <NavLink to="/profile" className={({isActive})=> isActive? "active": ""}>
            <li>hi, kim</li>
            </NavLink> */}

           <NavLink to="/signin" className={({isActive})=> isActive? "active": ""}>
            <li>Login</li>
            </NavLink>

            <NavLink to="/signup" className={({isActive})=> isActive? "active": ""}>
            <li>Register</li>
            </NavLink>

            <NavLink to="/create" className={({isActive})=> isActive? "active": ""}>
            <li>Create Post</li>
            </NavLink>

            
        </ul>

        <Switch onCheckedChange={handleDarkMode} checked={darkMode}/>
        <FaHamburger onClick={showNav} className='text-2xl cursor-pointer lg:hidden block dark:text-white'/>
    </nav>
    { showNavBar && <ResponsiveNavbar/> }
</>
  )
}

export default Navbar