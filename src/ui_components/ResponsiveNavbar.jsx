import React from 'react'
import { NavLink } from 'react-router-dom'

const ResponsiveNavbar = ({isAuthenticated, username, logout} ) => {
  return (
    <nav className='container px-4 py-6 block md:hidden dark:text-[#ffffff]'>
         <ul className="flex items-center justify-center gap-9 text-[#383c4A]  flex-col dark:text-[#ffffff] backdrop-blur-lg">
            {/* <NavLink to="/profile" className={({isActive})=> isActive? "active": ""}>
            <li>hi, kim</li>
            </NavLink> */}
          {isAuthenticated ? <>
              <li>Hi, {username}</li>
              <li onClick={logout} className="cursor-pointer">Logout</li>
          </>:
          <>
                <NavLink to="/signin" className={({isActive})=> isActive? "active": ""}>
                  <li>Login</li>
                  </NavLink>

                  <NavLink to="/signup" className={({isActive})=> isActive? "active": ""}>
                  <li>Register</li>
                  </NavLink>
          </>
          }
          <NavLink to="/create" className={({isActive})=> isActive? "active": ""}>
            <li>Create Post</li>
            </NavLink>
            
     

        </ul>
    </nav>
  )
}

export default ResponsiveNavbar