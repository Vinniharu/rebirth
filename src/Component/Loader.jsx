import React from 'react'

const Loader = () => {
  return (
    <span className='flex items-center justify-center w-[10rem] h-[10rem]'>
      <img src="/Pr.png" alt="Loader" className='w-[10rem] animate-pulse'/>
    </span>
  )
}

export default Loader