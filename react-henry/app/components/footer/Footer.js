import React from 'react'
import Link  from 'next/link'
import '../../../styles/globals.css'

function footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-container'>
                <ul className='footer-list'>
                    <li>
                        <Link href="https://www.linkedin.com/in/henry-price-9ab362b4/" target="_blank">LinkedIn</Link>
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