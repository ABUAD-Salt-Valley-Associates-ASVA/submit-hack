import React from 'react'
import Footer from '../components/Footer'
import login from "../assets/login-2969410.png"

function Login() {
  return (
    <main className='grid place-content-center h-screen w-full gap-5'>
      <div  className='flex justify-center'>
        <img src={login} alt="login" className='w-32' />
      </div>
      <form action=""  className='grid place-content-center gap-5'>
        <input className='p-2 px-14 bg-transparent border rounded-md' type= "email" placeholder= "email" />
        <input className='p-2 px-14 bg-transparent border rounded-md' type= "password" placeholder= "password" />
        <input className='p-2 px-14 bg-transparent border rounded-md' type="text" placeholder="confirm password" />
        <button className='bg-[#2494C8] py-2 rounded-sm'> Sign up</button>

      </form>
      <Footer />
    </main>
  )
}

export default Login