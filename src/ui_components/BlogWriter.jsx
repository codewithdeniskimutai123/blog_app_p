import React from 'react'
import { BASE_URL } from './api'
import { Link } from 'react-router-dom'
import { formatDate } from '@/services/formatDate'
const BlogWriter = ({blog}) => {
  return (
    <Link to={`/profile/${blog?.author?.username || blog?.author?.first_name || blog?.author?.last_name || ""}`}>
    <div className='flex gap-4 items-center'>
        <span className='flex gap-2 items-center'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                <img src={`${BASE_URL}${blog.author.profile_picture}`} className='rounded-full w-full h-full object-cover'/>
            </div>

            <small className='text-[#696A75] text-[14px]'>
                {blog.author?.first_name || blog.author?.username || "Unknown"} {blog.author?.last_name || ""}
            </small>
        </span>

        <small className='text-[#696A75] text-[14px] ml-3'>
           {formatDate(blog.publish_date)}
        </small>



    </div>
    </Link>
    
  )
}

export default BlogWriter