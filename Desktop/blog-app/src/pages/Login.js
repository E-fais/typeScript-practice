import React from 'react'
import {auth,provider } from '../Firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router'


function Login({setIsAuth,isAuth}) {
  let navigate=useNavigate()
const signIn=()=>{
  signInWithPopup(auth,provider).then((result)=>{
    localStorage.setItem('isAuth',true
  )
    setIsAuth(true)
navigate('/todo')
   
  })
}
  return (
    <div>
<h3>Login With Google Account</h3>
<button onClick={signIn}>Go to login page</button>
{console.log(isAuth)}

    </div>
  )
}

export default Login