import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from 'react-router-dom'
import logo from "../assets/padlock-4428147.png"

function Navbar() {
    const [openNav, setOpenNav] = React.useState(false)

    const handleNav = () => {
        setOpenNav(!openNav)
    }
  return (
      <nav className='flex w-full md:px-16 px-10 h-20 mb-8 z-50 backdrop-blur-md  fixed left-0 top-0 right-0  justify-between items-center'>
          {/* logo */}
          <div className='grid grid-cols-2 justify-center'>
              <Link to= "/"><span className='text-white text-2xl uppercase flex self-center'>logo</span></Link>
          </div>
          {/* nav items */}
          <ul className='md:flex hidden gap-12 items-center'>
              <a href="#technology">
                  <li className='hover:text-black transition-all duration-500 uppercase ease-in-out text-gray-400 cursor-pointer'> Technologies</li>

              </a>
              <a href="#how-it-works">
                  <li className='hover:text-black transition-all duration-500 uppercase ease-in-out text-gray-400 cursor-pointer'> How to use this</li>
              </a>
           </ul>
          {/* buttons */}

          <div className=' md:flex  hidden items-center gap-12'>
              <Link to= "/signup">
                  <a className='p-2 px-5 hover:rounded-md border-2 cursor-pointer hover:shadow-md text-gray-200 '>Sign up</a>
              </Link>
              <Link to="/login">
                  <a className='p-2 px-5 hover:rounded-md border-2 cursor-pointer hover:shadow-md text-gray-200 '>Login</a>
              </Link>
          </div>
          <AiOutlineMenu className='block md:hidden text-xl cursor-pointer text-white' />
    </nav>
  )
}

export default Navbar