import React from 'react'
import Link  from 'next/link'
import '../../../styles/globals.css'

function footer() {
  return (
    <>
        <footer className='nav'>
            <div>
                <ul className='flex justify-center space-x-7 ' >
                    <li>
                        <Link href="https://www.linkedin.com/in/henry-price-1a9b2b1b9/" target="_blank">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="/sitemap"> Sitemap</Link>
                    </li>
                </ul>
            </div>
        </footer>
        </>

  )
}

export default footer