'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg from '@/assets/paris.avif'
import tokyoImg from '@/assets/tokyo.avif'
import newYorkImg from '@/assets/New_york.avif'
import Image from 'next/image'

const page = () => {
    const param = useParams()
  return (
    <div className="text-white w-[50%]">
        {param.city} is a becutifull city.
        {
            param.city == 'Paris' &&  <Image className='mt-5' src={parisImg} width={800} height={400} alt='paris image'/>
        
        }
        {
            param.city == 'Tokyo' &&  <Image className='mt-5' src={tokyoImg} width={800} height={400} alt='tokyo image'/>
        }
        {
            param.city == 'NewYork' &&  <Image className='mt-5' src={newYorkImg} width={800} height={400} alt='new york image'/>
        }
       
    </div>
  )
}

export default page