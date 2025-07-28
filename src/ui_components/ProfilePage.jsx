import React, { useState } from 'react'
import Hero from './Hero'
import BlogContainer from './BlogContainer'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getUserInfo } from '@/services/apiBlog'
import Spinner from './Spinner'
import Model from './Model'
import SignUpPage from '@/pages/SignUpPage'

const ProfilePage = ({authUsername}) => {

  const[showModel, setShowModel] = useState(false)

  function toggleModel(){
    setShowModel((curr) => !curr)
  }

  const {username} = useParams()


  const {isPending, data} = useQuery({
    queryKey: ["users", username],
    queryFn: ({queryKey}) =>  getUserInfo(queryKey[1])
  })
  const blogs = data?.author_posts
  if(isPending){
    return <Spinner/>
  }

  return (
    <>
    <Hero userInfo={data} authUsername={authUsername} toggleModel={toggleModel} />
    
    <BlogContainer blogs={blogs} title={`${username}'s Posts`}/>

    {showModel && <Model toggleModel={toggleModel}>
      <SignUpPage userInfo={data} updateForm={true} toggleModel={toggleModel}/>
    </Model>}
    
    </>
    
  )
}

export default ProfilePage