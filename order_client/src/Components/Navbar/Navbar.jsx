import React from 'react'
import assets from '../../assets'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav dir='rtl' className=''>
      <img src={assets.logo} alt="logo" />
      <ul>
        <li><Link></Link></li>
        <li><Link></Link></li>
        <li><Link></Link></li>
        <li><Link></Link></li>
        <li><Link></Link></li>
        <li><Link></Link></li>
      </ul>
    </nav>
  )
}
