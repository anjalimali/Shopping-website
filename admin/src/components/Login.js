import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginuser } from '../slice/userslice'

function Login() {
  const [login ,setLogin] = useState({email:'',password:''})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  function handlechange(e) {
    setLogin({...login,[e.target.name]:e.target.value})
  }

  function handlesubmit(e) {
    e.preventDefault()
    dispatch(loginuser(login))
    navigate('/dashbord')
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your email' name='email' onChange={handlechange} />
        <input type="password" name="password" placeholder='Enter your password' id="" onChange={handlechange}/>
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default Login