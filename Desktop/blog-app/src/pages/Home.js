import React, { useEffect, useState } from 'react'
import {getDocs,collection, doc,deleteDoc} from 'firebase/firestore'
import {auth, db} from '../Firebase'

function Home({isAuth}) {
  const [postLists,setPostLists]=useState([])
  
  const postsCollectionReference=collection(db,'posts')
  
  
 

 
  useEffect(()=>{

    const getCollections= async ()=>{
      const data= await getDocs(postsCollectionReference)
      setPostLists(data.docs.map((obj)=>({...obj.data(),id:obj.id})))
    }
    getCollections()

}
  
,[])



const deletePost=async (id)=>{
  const postDoc=doc(db,'posts',id)
  await deleteDoc(postDoc)
  window.location.reload()
}
  return (

    <div>
      <h1>HOME</h1>
      
      
          <div>

{
postLists.map((post)=>{
  return(
    <div>
     <h1>{post.title}</h1> 
      <div>
      <h2>{post.posts} </h2>
       {post.auth.name}
        </div>
      {isAuth && post.auth.id===auth.currentUser.uid && <button onClick={()=>{deletePost(post.id)}}>Delete Post</button>}  
    </div>
  )

})}
          </div>
        
     
     </div>

  )
}

export default Home