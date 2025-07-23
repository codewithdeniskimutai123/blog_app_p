import { Button } from "@/components/ui/button"
import Navbar from "./ui_components/Navbar"
import Footer from "./ui_components/Footer"
import DetailedPage from "./pages/DetailedPage"
import Hero from "./ui_components/Hero"
import ProfilePage from "./ui_components/ProfilePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui_components/AppLayout"
import HomePage from "./pages/HomePage"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SignUpPage from "./pages/SignUpPage"
import CreatePostPage from "./pages/CreatePostPage"
import LoginPage from "./pages/LoginPage"
import ProtectedRoutes from "./ui_components/ProtectedRoutes"
import PageNotFound from "./ui_components/PageNotFound"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    
   <BrowserRouter>
      <Routes>
            <Route path="/" element={<AppLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="/blogs/:slug" element={<DetailedPage/>}/>
            {/* <Route path="profile" element={<ProfilePage/>}/> */}
            <Route path="signup" element={<SignUpPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>

            <Route path="create" element={<ProtectedRoutes><CreatePostPage/></ProtectedRoutes>}/>
            <Route path="signin" element={<LoginPage/>}/>


            
            
            
            </Route>
      </Routes>
   </BrowserRouter>
   </QueryClientProvider>
  )

}
// 4:04,starting with jwt

export default App

// 2:23. correcting the detail page on click of a blog. having issues with url, now looking for issues