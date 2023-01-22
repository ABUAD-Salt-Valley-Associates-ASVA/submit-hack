import React from 'react'
import Avatar from "../assets/user-account-4715753.png";
import { RxExit } from "react-icons/rx"
import {HiBars3} from "react-icons/hi2"

function Sidebar() {
  return (
      <div>
          <div className='h-screen w-1/5 hidden  bg-gray-300 md:flex flex-col gap items-center '>
              {/* profile picture */}
              <div className='w-24 my-8 grid place-content-center bg-white h-24 rounded-full'>
                <img src= {Avatar} alt="avatar" className='w-20'  />
              </div>
              <ul className='flex flex-col justify-between'>
                  <div className=''>
                      <a href="" className=''>
                          <li className='text-center capitalize mb-5 p-5 px-8 border border-[#1B3B70]'> create election </li>
                      </a>
                      <a href="">
                          <li className='text-center capitalize p-5 px-8 border border-[#1B3B70]'> participate in election </li>
                      </a>
                  </div>
                  <a href=""  className='mt-32'>
                      <li className='flex gap-3 '> <RxExit className='self-center' /> Log out  </li>
                  </a>
              </ul>
          </div>
          <HiBars3 className='text-2xl mt-8 ml-4 md:hidden block text-white' />
      </div>
  )
}

export default Sidebar