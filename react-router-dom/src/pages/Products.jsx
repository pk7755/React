import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
   <div >
    <div className='flex justify-center font-bold text-xl p-5 gap-10 '>
      <Link className='bg-cyan-500 px-10 py-3 rounded-3xl cursor-pointer active:scale-95' to='/products/mens' >Men's</Link>
      <Link className='bg-cyan-500 px-10 py-3 rounded-3xl cursor-pointer active:scale-95' to='/products/womens' >Women's</Link>
      <Link className='bg-cyan-500 px-10 py-3 rounded-3xl cursor-pointer active:scale-95' to='/products/kids' >Kid's</Link>
    </div>
      <Outlet />
    </div>
  )
}

export default Products