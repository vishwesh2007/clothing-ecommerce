import React, { useContext } from 'react'
import { ShopContext } from '../context/Products'
function Topsearchlist({product}) {
  const {currency} = useContext(ShopContext)
  return (
    <div className='cursor-pointer hover:bg-[#fafafa]/90 h-fit bg-[#ffffff] p-1 flex border-[0.5px] gap-2 rounded border-[#dadada]'>
      <div className='rounded-l flex justify-center items-center'>
        <img src={product.image} className='h-35' alt="" />
      </div>
      <div className='flex flex-col w-35 justify-center'>
        <p className="text-[10px] truncate">{product.name}</p>
        <p className="text-[10px] font-bold text-[6px]">{currency}{product.price}</p>
        <p className="text-[10px] font-bold border-[0.5px] border-[#dadada] text-[#555555] p-1">Member Price : {currency}{product.price-product.price*0.20}</p>
      </div>
    </div>
  )
}

export default Topsearchlist
