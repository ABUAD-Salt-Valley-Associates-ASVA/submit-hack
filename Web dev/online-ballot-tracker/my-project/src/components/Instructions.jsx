import React from 'react'

function Instructions() {
  return (
      <div id='how-it-works' className='my-8 w-5/6 m-auto'>
          <h2 className='md:text-5xl text-xl font-semibold my-5 md:my-12 text-gray-200'> How the election works </h2>
          <div className='flex flex-col md:flex-row'>
              <div>
                  <div className='flex gap-4 '>
                    <div className='bg-white w-8 h-8 md:w-12 md:h-12  grid place-content-center rounded-full'>
                            <span className='text-blue-400'>1</span>
                    </div>
                        <h1 className='text-white self-center '>Design your perfect ballot in minutes</h1></div>
                    <div className='flex gap-4 text-white'>
                        <div className='bg-white w-8 h-8 mt-4 md:w-12 md:h-12 grid place-content-center rounded-full'>
                            <span className='text-blue-400'>2</span>
                        </div>
                        <h1 className='text-white mt-4 self-center'>Design your perfect ballot in minutes</h1></div>
                    <div className='flex gap-4 text-white mt-4'>
                    <div className='bg-white w-8 h-8 mt-4 md:w-12 md:h-12 grid place-content-center rounded-full'>
                            <span className='text-blue-400'>3</span>
                        </div>
                        <h1 className='text-white self-center mt-4'>Design your perfect ballot in minutes</h1></div>
                    <div className='flex gap-4 text-white mt-4'>
                    <div className='bg-white w-8 h-8 md:w-12 md:h-12 grid place-content-center rounded-full'>
                            <span className='text-blue-400'>4</span>
                        </div>
                        <h1 className='text-white self-center mb-12'>Design your perfect ballot in minutes</h1>
                    </div>
              </div>
              {/* <div> Scribhow image as a link </div> */}
          </div>
    </div>
  )
}

export default Instructions