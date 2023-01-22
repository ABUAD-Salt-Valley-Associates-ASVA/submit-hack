import React from 'react'
import securedImage from "../assets/concept-of-remote-team-1785598.png"
import ethereum from "../assets/ethereum-2879620.png"
import aeternity from "../assets/aeternity-2879633.png"
import metamask from "../assets/metamask-5326393.png"

function Hero() {
  return (
    <div style={{width: "100%"}} className='mt-20 animate-wiggle  grid place-content-center w-full'>
      <div className='md:flex-row flex flex-col-reverse gap-20 md:gap-12 text-center m-auto md:w-5/6 w-[90%]'>
        <div className='flex '>
          <div className=' md:text-left	'>
            <h1 className='md:text-4xl text-xl font-bold uppercase text-white my-3'>Easy Online Election with security</h1>
            <p className='text-gray-400 '>empor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa. Lorem donec massa sapien faucibus et molestie ac feugiat. Ultrices mi tempus imperdiet nulla malesuada. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. A pellentesque sit amet porttitor eget dolor. Quisque id diam vel quam elementum pulvinar etiam non. Est placerat in egestas erat imperdiet sed euismod. Est lorem ipsum dolor sit amet consectetur. Morbi tristique senectus et netus et</p>
          </div>
        </div>
        <div className='relative flex'>
          <img className='duration-1000' src={securedImage} alt="secured-image" />
          <div className=' left-20 absolute w-60 grid  bg-white place-content-center py-5 top-72 z-20 rounded-full'>
            <p className='m-auto z-50 px-5 capitalize '> number of voters: $value  number of election: $value  </p>
          </div>
        </div>
      </div>
      <div id='technology' className='flex  my-12 justify-between w-1/2 m-auto'>
          <a href="#">
            <img className='w-32 animate-bounce hover:rotate-[27deg]' src= {ethereum} alt="ethereum" />

        </a>
        <a href="#">
          <img className='w-32 animate-bounce hover:rotate-[27deg]' src={aeternity} alt="aeternity" />

        </a>
        <a href="#">
          <img className='w-32 animate-bounce hover:rotate-[27deg]' src={metamask} alt="metamask" /></a>
      </div>

    </div>
  )
}

export default Hero