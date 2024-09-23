'use client'
import React from 'react'
import {useState, useCallback, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Link from 'next/link'
import Image from 'next/image'
import '../../../styles/globals.css'

function Navigation() {
  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          <div className='logo'>
            <Image src='images/logo.svg' width={50} height={50} alt='logo'  />
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
    </div>
  )
}
export default Navigation