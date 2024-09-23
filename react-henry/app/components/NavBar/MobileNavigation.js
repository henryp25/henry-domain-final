
import '../../../styles/globals.css'
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

 const DesktopNavigation = () =>{
     const [showMenu, setShowMenu] = useState(false)

    const onclick = () => {
        setShowMenu(!showMenu)
        console.log('clicked')
    }
    const Hamburger = <TiThMenuOutline className="HamburgerMenu" size="30px" color="black" onClick={onclick}/>
     return(
        <nav className='mobileNav'>

          <div className='nav'>
            {Hamburger}
            {showMenu &&         
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
              </div>
        }
          </div>
        </nav>
     )
 }

 export default DesktopNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
