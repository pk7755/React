import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
     <div className='flex justify-between font-bold p-5 bg-cyan-500 text-lg text-white '>
            <h3>Pradyumna</h3>
            <div className='flex justify-evenly gap-40'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/courses'>Courses</Link>
                <Link to='/products'>Products</Link>
            </div>
     </div>

  )
}

export default Navbar