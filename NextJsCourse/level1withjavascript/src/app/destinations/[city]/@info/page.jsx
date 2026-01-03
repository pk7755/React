'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {city} = useParams()
  return (
    <div className='text-white w-[50%] m-10'>
        {city} is the best city.
    </div>
  )
}

export default page