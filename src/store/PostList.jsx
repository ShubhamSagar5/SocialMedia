import { createContext, useReducer } from "react";

export const PostLists = createContext({
  postList: [],
  addPostList: () => {},
  deletePost: () => {},
  addInitialPost: () => {}
});

const postListReducer = (currentPostList, action) => {
  
  let newPostList = currentPostList
  if(action.type === 'DELETE_POST'){
    newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
  }
  else if (action.type === 'ADD_POST'){
    newPostList = [action.payload,...currentPostList]
  }
  else if (action.type === "ADD_INITIAL_POST"){
    newPostList = action.payload.posts
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [PostList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId,postTitle,postbody,reaction,tags) => {
    console.log(userId,postTitle)
    dispatchPostList({
      type:'ADD_POST',
      payload:  {
        id: Date.now(),
        title: postTitle,
        body: postbody,
        reactions: reaction,
        userId: "user-9",
        tags: tags,
      },
    })
  };

  const addInitialPost = (posts) => {
    // console.log(userId,postTitle)
    dispatchPostList({
      type:'ADD_INITIAL_POST',
      payload:  {
        posts
      },
    })
  };

  const deletePost = (postId) => {
   dispatchPostList({
    type:'DELETE_POST',
    payload:{
      postId,
    }
   })
  };

  return (
    <PostLists.Provider
      value={{
        postList: PostList,
        addPostList: addPost,
        deletePost: deletePost,
        addInitialPost:addInitialPost
      }}
    >
      {children}
    </PostLists.Provider>
  );
};

const DEFAULT_VALUE_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot.Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass hogaye Bhai ",
    body: "4 saal ki masti ke baad bhi ho gaye hain pass. Hard to belive",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Mumbai", "Enjoying"],
  },
];
export default PostListProvider;
