import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import '../../styles/globals.css'

function Navigation() {
  return (
    <nav class='nav'>
      <div className='max-w- mx-auto  border border-red-400'>
        <div className='flex justify-between mx-auto'>
            <div class='logo'>
              Henry Price
            </div>
            <div>
              <ul className='flex justify-center space-x-4 text-3xl'>
                  <li className='hover:text-slate-100'>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className='hover:text-slate-100'>
                    <Link href="/about">
                      About
                    </Link>
                  </li>
              </ul>
            </div>
            <div className='flex justify-center' class='searchBar'>
              <SearchBar />
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navigation