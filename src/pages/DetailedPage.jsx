import Badge from '@/ui_components/Badge'
import React, { useState } from 'react'
import banner from '../images/detailBanner.jpg'
import BlogWriter from '@/ui_components/BlogWriter'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBlog, getBlog } from '@/services/apiBlog'
import Spinner from '@/ui_components/Spinner'
import { BASE_URL } from '@/ui_components/api'
import { HiPencilAlt } from "react-icons/hi"
import { MdDelete } from "react-icons/md"
import Model from '@/ui_components/Model'
import CreatePostPage from './CreatePostPage'
import { toast } from 'react-toastify'

const DetailedPage = ({username,isAuthenticated}) => {

    const { slug } = useParams()
    const [showModel, setShowModel] = useState(false)
    const navigate = useNavigate()

    function toggleModel(){
        setShowModel(curr => !curr)
    }

    const {isPending, isError, error, data:blog} = useQuery({
       queryKey: ['blogs', slug],
       queryFn: () => getBlog(slug)
    })

   const blogID = blog?.id

 const deleteMutation = useMutation({
    mutationFn: (id) => deleteBlog(id),
    onSuccess: () => {
        navigate("/")
        toast.success("Blog deleted successfully!!")
    },
    onError: (err) => {
        console.log(err)
        toast.error(err.message, "Blog failed to delete")
    }
 })

 function handleDeleteBlog(){
    const popUp = window.confirm("Are you sure you want to delete this post?")
    if(!popUp){
        return;
    }
    else{
        deleteMutation.mutate(blogID)
    }

 }



if(isPending){
    return <Spinner/>
}
  return (
    <>
    <div className='container px-40 py-9'>
        <Badge blog={blog}/>

        <div className='flex justify-between items-center dark:text-white'>
            <h2 >
                {blog.title}
            </h2>

            {isAuthenticated && username === blog.author.username && 
            <span className='flex justify-between items-center gap-4 '>

                <HiPencilAlt className='text-3xl cursor-pointer  ' onClick={toggleModel} />

                <MdDelete className='text-3xl cursor-pointer' onClick={handleDeleteBlog}/>

            </span>
            
            
            }

            
        </div>

        <BlogWriter blog={blog}/>

        <div className='w-full h-[350px] overflow-hidden rounded-sm'>
            <img src={`${BASE_URL}${blog.featured_image}`} className='w-full h-full object-cover rounded-sm'/>
        </div>

        <p className='text-[16px] leading-[2rem] text-justify text-[#3B3CFA] dark:text-[#BABABF]'>
            {blog.content}
        </p>

    </div>

    {showModel && <Model>
        <CreatePostPage blog={blog}/>
    </Model>}
    </>
  )
}

export default DetailedPage