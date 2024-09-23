 //DesktopNavigation.js
import '../../../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'



 const DesktopNavigation = () =>{
     return(
        <nav className='desktopNav'>
            <div className='nav-container'>
                <div className='nav'>
                    <div className='nav-content'>
                <ul className='navbar'>
                  <li className='nav-item' > 
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className='nav-item' >
                    <Link href="/about">
                      About
                    </Link>
                  </li>
                  <li className='nav-item' >
                    <Link href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className='nav-item' >
                    <Link href="/tools">
                      Tools
                    </Link>
                  </li>
                </ul>
                {/* SearchBar component can be added here */}
              </div>
                </div>
            </div>
        </nav>
     )
 }

 export default DesktopNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
