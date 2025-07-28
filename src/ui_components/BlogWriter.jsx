import React from 'react'
import { BASE_URL } from './api'
import { Link } from 'react-router-dom'
const BlogWriter = ({blog}) => {
  return (
    <Link to="/profile">
    <div className='flex gap-4 items-center'>
        <span className='flex gap-2 items-center'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                <img src={`${BASE_URL}${blog.author.profile_picture}`} className='rounded-full w-full h-full object-cover'/>
            </div>

            <small className='text-[#696A75] text-[14px]'>
                denis kimutai
            </small>
        </span>

        <small className='text-[#696A75] text-[14px] ml-3'>
            12 November, 2024
        </small>



    </div>
    </Link>
    
  )
}

export default BlogWriter