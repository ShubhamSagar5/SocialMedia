import { useContext, useRef } from "react"

import { PostLists } from "../store/PostList"

const CreatePost = () => {
  
  const {addPostList} = useContext(PostLists)

    const userIdElement = useRef()
    const postTitleElement = useRef()
    const postBodyElement = useRef()
    const reactionsElement= useRef()
    const tagsElement = useRef()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      const userId = userIdElement.current.value
      const postTitle = postTitleElement.current.value
      const postbody = postBodyElement.current.value 
      const reaction = reactionsElement.current.value 
      const tags = tagsElement.current.value.split(' ')
    
      addPostList(userId,postTitle,postbody,reaction,tags)
      
      userIdElement.current.value =''
      postTitleElement.current.value =''
      postBodyElement.current.value = ''
      reactionsElement.current.value = ''
      tagsElement.current.value= ''
      
    }
    return (
<form class="create-post" onSubmit={handleSubmit}>
<div class="mb-3">
    <label for="userId" class="form-label">Enter Your ID</label>
    <input type="text" ref={userIdElement} class="form-control" id="userId" aria-describedby="emailHelp" placeholder="Enter Your User ID"/>
    
  </div>
 <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How are You Feeling Today"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Post Content</label>
    <textarea type="text" ref={postBodyElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tell us More about it"/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Number Of Reactions</label>
    <input type="text" ref={reactionsElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="How Many People Reacted"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Enter Your HashTags Here</label>
    <input type="text" ref={tagsElement} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Please Enter tags using space"/>
    
  </div>

  <button type="submit" class="btn btn-primary">Post</button>
</form>
    )
}

export default CreatePost