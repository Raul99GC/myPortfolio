import React from 'react'
import './assets/styles/NavMenu.css'
import { Link } from 'react-scroll'


const NavMenu = () => {
  return (
    <>


      <nav className='nav'>
        <ul className='nav-menu'>
          <li className='nav-menu__item'>
            <Link
              to="home-section"
              spy={true}
              smooth={true}
              duration={300}
              className='nav-menu__link'
            >
              <i className='bx bxs-home nav-menu__icon'></i> Home
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              duration={300}
              className='nav-menu__link'
            >
              <i className='bx bxs-user-circle nav-menu__icon'></i> About
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link
              to="skills-section"
              spy={true}
              smooth={true}
              duration={500}
              className='nav-menu__link'
            >
              <i className='bx bxs-user-circle nav-menu__icon'></i> Skills
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link
              to="projects-section"
              spy={true}
              smooth={true}
              duration={300}
              className='nav-menu__link'
            >
              <i className='bx bxs-layer nav-menu__icon' ></i> Projects
            </Link>
          </li>
          <li className='nav-menu__item'>
            <Link
              to="contact-section"
              spy={true}
              smooth={true}
              duration={300}
              className='nav-menu__link'
            >
              <i className='bx bxs-contact nav-menu__icon' ></i> Contact
            </Link>
          </li>
        </ul>
      </nav>

    </>

  )
}

export default NavMenu