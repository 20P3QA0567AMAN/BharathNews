import React from 'react'
import NavbarCSS from './NavBar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  
    return (
      <div>
        <nav className={NavbarCSS.navbar}>
            <div className={NavbarCSS.navLeft}><span>Bharat</span> News</div>
            <div className={NavbarCSS.navRight}>
                <Link className={NavbarCSS.navRightItem} to='/general'>Home</Link>
                <Link className={NavbarCSS.navRightItem} to='/business'>Business</Link>
                <Link className={NavbarCSS.navRightItem} to='/entertainment'>Entertainment</Link>
                <Link className={NavbarCSS.navRightItem} to='/general'>General</Link>
                <Link className={NavbarCSS.navRightItem} to='/health'>Health</Link>
                <Link className={NavbarCSS.navRightItem} to='/science'>Science</Link>
                <Link className={NavbarCSS.navRightItem} to='/sports'>Sports</Link>
                <Link className={NavbarCSS.navRightItem} to='/technology'>Technology</Link>   
            </div>
            
        </nav>
      </div>
    )
  
}

export default NavBar
