import React from 'react'
import './assets/styles/NavSosialMedia.css'

export const NavSocialMedia = () => {
  return (
    <nav className='nav-social flex'>
      <ul className='nav-social__content flex'>
        <li className='nav-social__items'>
          <a target="_blank" href="https://www.linkedin.com/in/raul-cordoba-gines-b98010242/" className="nav-social__a">
            <i className='bx bxl-linkedin-square nav-social__icon'></i>
          </a>
        </li>
        <li className='nav-social__items'>
          <a target="_blank" href="https://github.com/Raul99GC" className="nav-social__a">
            <i className='bx bxl-github nav-social__icon' ></i>
          </a>
        </li>
        <li className='nav-social__items'>
          <a target="_blank" href="https://www.instagram.com/9raulcg9/" className="nav-social__a">
            <i className='bx bxl-instagram-alt nav-social__icon'></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}
