import React, { useContext } from 'react'
import Post from './Post'
import { PostLists as PostListData } from '../store/PostList'
import WelcomeMess from './WelcomeMess'

const PostList = () => {
  
 const {postList,addInitialPost} = useContext(PostListData)

 const handleGetPostClick = async () => {
  const data = await fetch('https://dummyjson.com/posts')
  const json = await data.json()
 console.log(json)
  await addInitialPost(json.posts)

// fetch('https://dummyjson.com/posts')
// .then((res)=> res.json())
// .then((data) => {
//   addInitialPost(data.posts)
// })
 
 }

  return (
    <div>
    {
      postList.length === 0 && <WelcomeMess onGetPostClick={handleGetPostClick}/>
    }
    {
      postList.map((post) => <Post key={post.id} post={post}/>)
    }
      
       
    </div>
  )
}

export default PostList