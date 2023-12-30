import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostLists as PostListData } from '../store/PostList'
import WelcomeMess from './WelcomeMess'
import Loader from './Loader'

const PostList = () => {
  
 const {postList,addInitialPost} = useContext(PostListData)
const [loading,setLoading] = useState(false)

 useEffect(()=>{
  const controller = new AbortController()
  const signal = controller.signal
  handleGetPostClick(signal)
  
  return () => {
    console.log("Cleaning up Useeffect")
    controller.abort()
  }
 },[])

 const handleGetPostClick = async (signal) => {
  setLoading(true)
  const data = await fetch('https://dummyjson.com/posts',{signal})
  const json = await data.json()
//  console.log(json)
  await addInitialPost(json.posts)
  setLoading(false)

// fetch('https://dummyjson.com/posts')
// .then((res)=> res.json())
// .then((data) => {
//   addInitialPost(data.posts)
// })
 
 }

  return (
    <div>
   {loading && <Loader/>}
    {
     !loading && postList.length === 0 && <WelcomeMess />
    }
    {
     !loading && postList.map((post) => <Post key={post.id} post={post}/>)
    }
      
       
    </div>
  )
}

export default PostList