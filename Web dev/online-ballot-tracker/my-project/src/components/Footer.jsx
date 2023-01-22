import React from 'react'

function Footer() {
    const date = new Date()
    const currentDate = date.getFullYear()

  return (
      <div>
          <p className='text-white text-center'>copy right &copy; {currentDate} </p>
    </div>
  )
}

export default Footer