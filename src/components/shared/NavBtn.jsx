import React from 'react'
import './assets/styles/NavBtn.css'

const NavBtn = ({setBtMenu, btMenu}) => {

  const navBottom = () => {
    if (btMenu) {
       setBtMenu(false)
       console.log(btMenu)
    } else {
       setBtMenu(true)
       console.log(btMenu)
    }

 }

  return (
    <button className='nav-btn' onClick={navBottom}>
        <i className='bx bx-menu nav-btn-hamburger'></i>
    </button>
  )
}

export default NavBtn