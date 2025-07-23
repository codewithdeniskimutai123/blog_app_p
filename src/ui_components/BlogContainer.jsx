import React from 'react'
import BlogCard from './BlogCard'
import Spinner from './Spinner'

// continue from spinning 2:16
const BlogContainer = ({isPending, blogs}) => {
  if(isPending){
    return <Spinner/>
  }

  return (
    <section className='container px-4 py-6'>
        <h2 className='font-semibold text-xl mb-6 dark:text-white text-center'>
            Latest Posts
        </h2>


        <div className='flex flex-wrap items-center justify-center gap-6'>
             {blogs.map((blog) => <BlogCard key={blog.id} blog={blog} /> )}
             
             

        </div>
    </section>

  )
}

export default BlogContainer