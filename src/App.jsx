import { Button } from "@/components/ui/button"
import Navbar from "./ui_components/Navbar"
import Footer from "./ui_components/Footer"
import DetailedPage from "./pages/DetailedPage"
import Hero from "./ui_components/Hero"
import ProfilePage from "./ui_components/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui_components/AppLayout"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import CreatePostPage from "./pages/CreatePostPage"
import LoginPage from "./pages/LoginPage"
import ProtectedRoutes from "./ui_components/ProtectedRoutes"
import PageNotFound from "./ui_components/PageNotFound"
import { useEffect, useState } from "react"
import { getUsername } from "./services/apiBlog"
import { useQuery } from "@tanstack/react-query"


const App = () => {
  const [username, setUserName] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const {data} = useQuery({
    queryKey: ["username"],
    queryFn: getUsername
  })

useEffect(function() {
  if(data){
    setUserName(data.username)
    setIsAuthenticated(true)
  }
}, [data] )


  return (
    
    
   <BrowserRouter>
      <Routes>
            <Route path="/" element={<AppLayout isAuthenticated={isAuthenticated} username={username} setUserName={setUserName} setIsAuthenticated={setIsAuthenticated}/>}>
            <Route index element={<HomePage/>}/>
            <Route path="profile/:username" element={<ProfilePage authUsername={username}/>}/>

            <Route path="/blogs/:slug" element={<DetailedPage username={username} isAuthenticated={isAuthenticated}/>}/>
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>

            <Route path="create" element={<ProtectedRoutes><CreatePostPage isAuthenticated={isAuthenticated}/></ProtectedRoutes>}/>
            <Route path="signin" element={<LoginPage setIsAuthenticated={setIsAuthenticated} setUserName={setUserName}/>}/>


            
            
            
            </Route>
      </Routes>
   </BrowserRouter>
  )

}

export default App

// 10:48 on user profile, make sure the userprofile links are working