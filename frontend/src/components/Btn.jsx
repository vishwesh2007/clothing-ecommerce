import React from 'react'

function Btn({name,onClick}) {
  return (
    <div onClick={onClick} className='cursor-pointer select-none w-auto border-1 h-7 border-[#dadada] text-[10px]  rounded-[50px] flex justify-center items-center bg-[#ffffff] ease-in-out duration-150 hover:bg-[#fafafa]'>
      <p className='text-[#555555] p-4 flex justify-center items-center'>{name}</p>
    </div>
  )
}

export default Btn
