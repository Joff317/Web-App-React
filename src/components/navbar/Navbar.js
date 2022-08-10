import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import '../../App.css'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li><Link to="/" className='text-link'>Home</Link></li>
          <li><Link to="/about" className='text-link'>About</Link></li>
          <li><Link to="/works" className='text-link'>Works</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;