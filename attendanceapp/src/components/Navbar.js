import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '20px 0px' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
    </ul>
  )
}

export default Navbar