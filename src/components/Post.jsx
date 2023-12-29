import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostLists } from '../store/PostList';

const Post = ({post}) => {
  
 const {deletePost} = useContext(PostLists)
  
  return (
    <div>
        <div class="card post-card" style={{width: "30rem"}}>
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title">{post.title}
    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' onClick={() => deletePost(post.id)}>
    <MdDelete />
    </span>
    </h5>
    <p class="card-text">{post.body}</p>
    {
      post.tags.map((tag)=>(
        <span className='badge text-bg-primary hashtag'>{tag}</span>
      ))
    }
    <div className='alert alert-success reaction' role='alert'>
      This Post Is Reacted By {post.reactions} people
    </div>
  </div>
</div>
    </div>
  )
}

export default Post