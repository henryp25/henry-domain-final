import React from 'react'
import Link from 'next/link'
import '../../styles/globals.css'

function Tools() {
  return (
    <div className='toolsContainer'>
    <div className='tools-Content'>
      <h1>List of Tools </h1>
      <p>I have created overtime to improve knowledge and test skills</p>
    </div>
        <ul>
          <li className='toolLink'>
            <Link href="/currency-converter">Currency Convertor</Link>
            <p>
              Description
              <p>
                A simple currency converter to convert between different currencies
              </p>

            </p>
          </li>
        </ul>
    </div>
  )
}

export default Tools