'use client'
import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import Link from 'next/link'
import '../../styles/globals.css'

function Navigation() {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          <div className='logo'>
            Henry Price
          </div>
          <ul className='navbar'>
            <li className='nav-item'>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link href="/tools">
                Tools
              </Link>
            </li>
          </ul>
          {/* SearchBar component can be added here */}
        </div>
      </div>
    </nav>
  )
}
export default Navigation