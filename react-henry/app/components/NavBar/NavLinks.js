'use client'
import React from 'react'
import {useState, useCallback, useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Link from 'next/link'
import Image from 'next/image'
import '../../../styles/globals.css'

function Navlinks({onclick}) {

  return (
    <div className='nav'>
      <div className='nav-container'>
        <div className='nav-content'>
          
          <ul className='navbar'>
            <li className='nav-item' onClick={onclick}> 
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='nav-item' onClick={onclick}>
              <Link href="/about">
                About
              </Link>
            </li>
            <li className='nav-item' onClick={onclick}>
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li className='nav-item' onClick={onclick}>
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
export default Navlinks