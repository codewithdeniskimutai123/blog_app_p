import Badge from '@/ui_components/Badge'
import React from 'react'
import banner from '../images/detailBanner.jpg'
import BlogWriter from '@/ui_components/BlogWriter'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getBlog } from '@/services/apiBlog'
import Spinner from '@/ui_components/Spinner'
import { BASE_URL } from '@/ui_components/api'

const DetailedPage = () => {

    const { slug } = useParams()

    const {isPending, isError, error, data:blog} = useQuery({
       queryKey: ['blogs', slug],
       queryFn: () => getBlog(slug)
    })
if(isPending){
    return <Spinner/>
}
  return (
    <div className='container px-40 py-9'>
        <Badge blog={blog}/>

        <div className='flex justify-center items-center'>
            <h2>
                {blog.title}
            </h2>
        </div>

        <BlogWriter blog={blog}/>

        <div className='w-full h-[350px] overflow-hidden rounded-sm'>
            <img src={`${BASE_URL}${blog.featured_image}`} className='w-full h-full object-cover rounded-sm'/>
        </div>

        <p className='text-[16px] leading-[2rem] text-justify text-[#3B3CFA] dark:text-[#BABABF]'>
            {blog.content}
        </p>

    </div>
  )
}

export default DetailedPage