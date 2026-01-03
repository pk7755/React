'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const destinations = ['Paris', 'Tokyo', 'NewYork']
    const router = useRouter()
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className=' text-white text-3xl'>Choose Your Destination</div>
      <div className=''>
        {destinations.map((dest,idx) => {
                        return <div key={idx} onClick={() =>{
                router.push(`/destinations/${dest}`)
            }} className='p-10 bg-white text-black  rounded-2xl m-3 flex justify-center cursor-pointer active:scale-95 w-50 hover:bg-cyan-300 text-xl font-bold'>{dest}</div>
        })}
        
      </div>
    </div>
  )
}

export default page