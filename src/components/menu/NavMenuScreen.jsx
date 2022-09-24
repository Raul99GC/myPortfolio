import React from 'react'
import './assets/styles/NavMenu.css'


const NavMenu = () => {
  return (
    <>


      <nav className='nav'>
        <ul className='nav-menu'>
          <li className='nav-menu__item'><a className='nav-menu__link' href="#"><i className='bx bxs-home nav-menu__icon'></i> Home</a></li>
          <li className='nav-menu__item'><a className='nav-menu__link' href="#"><i className='bx bxs-user-circle nav-menu__icon'></i> About</a></li>
          <li className='nav-menu__item'><a className='nav-menu__link' href="#"><i className='bx bxs-user-circle nav-menu__icon'></i> Skills</a></li>
          <li className='nav-menu__item'><a className='nav-menu__link' href="#"><i className='bx bxs-layer nav-menu__icon' ></i> Projects</a></li>
          <li className='nav-menu__item'><a className='nav-menu__link' href="#"><i className='bx bxs-contact nav-menu__icon' ></i> Contact</a></li>
        </ul>
      </nav>

    </>

  )
}

export default NavMenu