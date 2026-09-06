import React from 'react'
import {
  Truck,
  RotateCcw,
  Store
} from "lucide-react";

function Services() {
  return (
    <div className='flex justify-evenly items-center bg-background h-20'>
      <div className='flex justify-center items-center gap-1'> <Truck size={30}/> <p>Free & Fast Shipping</p></div>
      <div className='flex justify-center items-center gap-1'> <RotateCcw size={30}/> <p>10 Days Easy Returns & Exchanges</p></div>
      <div className='flex justify-center items-center gap-1'> <Store size={30}/> <p>15+ Stores Pan India</p></div>
    </div>
  )
}

export default Services
