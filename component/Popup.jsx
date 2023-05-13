import React from 'react'

const Popup = () => {
  return (
    
    <>
        <div className='popup absolute bg-[#793779] w-[50%] mx-auto my-auto translate-x-[50%] translate-y-[-50%] shadow-xl shadow-gray-700 rounded-lg'>
          <button className='absolute p-3 top-1 right-2 shadow-md shadow-[#493f2c] ' >Cancle</button>
            <h2 className='w-full rounded-lg p-2 border-[#1d1c1c] border-2 border-b-5 '>Hello</h2>
            <p className='p-4' >Message </p>
        </div>
    </>
  )
}

export default Popup