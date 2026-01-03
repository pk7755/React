'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className='bg-white flex items-center justify-between py-5 px-10 lg:whitespace-nowrap '>

        <div className='font-bold text-bold text-3xl'>
            🌍 Travel Guides
        </div>
        <div className='flex lg:gap-20 flex-col lg:flex-row'>
            <Link href={'/'} className={pathName=="/" ? "text-blue-500" : ""} >Home</Link>
            <Link href={'/about'} className={pathName=="/about" ? "text-blue-500" : ""} >About</Link>
            <Link href={'/destinations'}  className={pathName=="/destinations" ? "text-blue-500" : ""}>Destinations</Link>
            <Link href={'/contact'}  className={pathName=="/contact" ? "text-blue-500" : ""}>Contact Us</Link>
        </div>
    </div>
  )
}

export default Navbar