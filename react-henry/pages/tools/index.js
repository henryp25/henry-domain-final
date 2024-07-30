import React from 'react'
import Link from 'next/link'
import '../../styles/globals.css'
import '../../styles/tools.css'






function Tools() {





  return (
    <div className='toolsContainer'>
      <div className='tools-Content'>
        <h1>List of Tools </h1>
        <p>I have created overtime to improve knowledge and test skills</p>
      </div>
      <div className='toolList'>
        <ul>
            <li className='toolLink'>
              <Link href="/currency-converter">Currency Convertor</Link>
              <p>
                  A simple currency converter to convert between different currencies
              </p>
            </li>
            <li className='toolLink'>
              <Link href="/movie-app">Movie Data Base</Link>
              <p>
              A simple movie app to browse information on various films.
              </p>
            </li>
          </ul>
      </div>
      {/* <div class="toolPagination">
        <ul> 
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <div class="bar"></div>
        </ul>
      </div> */}
        
    </div>
  )
}

export default Tools