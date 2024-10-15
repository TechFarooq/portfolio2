import React, { useState } from 'react';
import './navbar.css'
import logo from '../../assets/letter-u.png';
import {Link} from 'react-scroll';
import contacting from '../../assets/user.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false);
  return (
    <nav className='navbar'>
        <img src={logo} alt='logo'className='logo'/>
        <div className='desktopMenu'> 
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='desktopMenuListItem'>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenubtn' onClick={()=>{
          document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contacting} alt=''className='desktopMenuImg'/>Contact me</button>
            <img src={menu} alt='logo'className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}> 
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className='ListItem'onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
           <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-80} duration={500} className='ListItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar