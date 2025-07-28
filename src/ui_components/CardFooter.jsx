import React from 'react'
import { BASE_URL } from './api'
import { formatDate } from '@/services/formatDate'
import pic from '../images/pic.jpg'
import { Link } from 'react-router-dom'

const CardFooter = ({blog}) => {
  return (
    <Link to={`/profile/${blog?.author?.username || blog?.author?.first_name || blog?.author?.last_name || ""}`}>
    <div className='flex items-center gap-4'>
        <span className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                <img
                    src={blog?.author?.profile_picture ? `${BASE_URL}${blog.author.profile_picture}` : pic}
                    alt="Author"
                    className="w-full h-full rounded-full object-cover"
                    />
            </div>

            <small className='text-[#97989F] text-[12px] font-semibold'>
                 {blog.author?.first_name || blog.author?.username || "Unknown"} {blog.author?.last_name || ""}
            </small>
        </span>

        <small className='text-[#97989A] text-[12px] font-semibold ml-3'>
            {formatDate(blog.publish_date)}
        </small>
    </div>
    </Link>
  )
}

export default CardFooter