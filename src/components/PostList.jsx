import React, { useContext } from 'react'
import Post from './Post'
import { PostLists as PostListData } from '../store/PostList'

const PostList = () => {
  
 const {postList} = useContext(PostListData)


  return (
    <div>
    {
      postList.map((post) => <Post key={post.id} post={post}/>)
    }
      
       
    </div>
  )
}

export default PostList