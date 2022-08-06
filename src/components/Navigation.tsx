import React from 'react'
import {Link} from 'react-router-dom'



function Navigation() {
  return (
    <nav className='h-[50px] flex items-center justify-between px-5 bg-gray-500 text-white'>
      <span className='font-bold'>
        React 2022
      </span>

      <span>
        <Link className='mr-2' to="/">Products</Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  )
}

export default Navigation