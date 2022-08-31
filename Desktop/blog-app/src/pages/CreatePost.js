import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { db,auth } from "../Firebase";

function CreatePost({isAuth}) {
  const [title,setTitle]=useState('')
  const [posts, setPosts]=useState('')

  const postsCollectionReference=collection(db,'posts')
  let navigate=useNavigate()

  const createNewPosts=async ()=>{
    await addDoc(postsCollectionReference,
      {title:title,posts:posts,auth:{name:auth.currentUser.displayName ,id:auth.currentUser.uid }})
 navigate('/')
    }

//     useEffect(()=>{

// if(!isAuth){
// navigate('/login')}
//     })

  return (
    <div>
      <h2>Add Post</h2>
      <div>
        <label>Title:</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="title" type="text" />
      </div>
      <div>
        <label>Post:</label>
        <textarea onChange={(e)=>{setPosts(e.target.value)}} placeholder="post.." />
      </div>
      <button onClick={createNewPosts}>Submit post</button>
    </div>
  );
}

export default CreatePost;
