import React from 'react'
import { NavLink } from 'react-router-dom'

const ResponsiveNavbar = () => {
  return (
    <nav className='container px-4 py-6 block md:hidden dark:text-[#ffffff]'>
        <ul className='flex items-center justify-center gap-6 text-[#383c4A] lg:flex-1 flex-col dark:text-[#ffffff]'>
            <li>hi, kim</li>
            <NavLink to="/signin" className={({isActive})=> isActive? "active": ""}>
            <li>Logout</li>
            </NavLink>
            <NavLink to="/signin" className={({isActive})=> isActive? "active": ""}>
            <li>Login</li>
            </NavLink>
            <NavLink to="/signin" className={({isActive})=> isActive? "active": ""}>
            <li>Register</li>
            </NavLink>

            
            <li className="font-semibold">Create Post</li>
        </ul>
    </nav>
  )
}

export default ResponsiveNavbar