import React from 'react'
import './assets/styles/Buttons.css'
import { Link } from "react-scroll";

export const Buttons = ({ word, link }) => {

  return (

    <Link
      to={link}
      spy={true}
      smooth={true}
      duration={500}
      className="button"
    >
      {word}
    </Link>

  )
}
