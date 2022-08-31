import React from 'react'
import "./App.css"
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'
import { useState } from 'react'
import {signOut} from 'firebase/auth'
import {auth} from './Firebase'


function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem('isAuth'))

  const logoutBtn=()=>{
signOut(auth).then(()=>{
  localStorage.clear()
 setIsAuth(false)
 window.location.pathname='/login'
})
  }
  return (
<BrowserRouter>
<nav className='navbar'>
 <Link to='/'>Home</Link>
 {!isAuth? <Link to ='/login'>Login</Link>:
 <>
  <button onClick={logoutBtn}>logout</button>
  <Link to='/createPost'>CreatePost</Link>
 </>
}
 
</nav>
<Routes>






<Route path='/' element={<Home isAuth={isAuth}/>}/>
<Route path='/createPost' isAuth={isAuth} element={<CreatePost/>}/>
<Route path='/login' element={<Login setIsAuth={setIsAuth} isAuth={isAuth}/>}/>
</Routes>
</BrowserRouter>

  )
}

export default App