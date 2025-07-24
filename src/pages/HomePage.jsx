import BlogContainer from "@/ui_components/BlogContainer"
import Header from "@/ui_components/Header"
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { getBlogs } from '../services/apiBlog.js'
import PagePagination from "@/ui_components/PagePagination.jsx"
import { useState } from "react"

const HomePage = () => {
  const[page, setPage] = useState(1)
  const numOfBlogsPerPage = 2

  const {isPending, isError, error, data} = useQuery({
    queryKey: ['blogs', page],
    queryFn: () => getBlogs(page), placeholderData: keepPreviousData
  })
console.log(data)
const blogs = data?.results || []
const numOfPages = Math.ceil(data?.count / numOfBlogsPerPage)

function handleSetPage(val){
  setPage(val)
}
function increasePageValue(){
  setPage(curr => (curr < numOfPages ? curr + 1 : curr));
}

function decreasePageValue(){
  setPage(curr => (curr > 1 ? curr - 1 : curr));
}


  return (
    <>
    <Header/>
    <BlogContainer isPending={isPending} blogs={blogs}/>
    <PagePagination numOfPages={numOfPages}
     handleSetPage={handleSetPage}
    page={page}
    increasePageValue={increasePageValue} 
    decreasePageValue={decreasePageValue}/>
  </>
  )
}

export default HomePage