import NavLinks from "./NavLinks";
import '../../../styles/globals.css'
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";

 const DesktopNavigation = () =>{
     const [showMenu, setShowMenu] = useState(false)

    const onclick = () => {
        setShowMenu(!showMenu)
        console.log('clicked')
    }
    const Hamburger = <TiThMenuOutline className="HamburgerMenu" size="30px" color="black" onClick={onclick}/>
     return(
        <nav className='mobileNav'>
            {Hamburger}
            {showMenu && <NavLinks  onclick={onclick} />}
        </nav>
     )
 }

 export default DesktopNavigation;

 // Note that NavBar.css and NavLinks.js are imported here
