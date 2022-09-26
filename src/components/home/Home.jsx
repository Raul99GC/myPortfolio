import React from 'react'
import './assets/styles/Home.css'

import TitleName from '../shared/TitleName'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavSocialMedia } from '../shared/NavSocialMedia'
import { Buttons } from '../shared/Buttons'
import { MouseScroll } from './MouseScroll'
import ParallaxImages from './ParallaxImages'
import { useRef } from 'react'
import profileImage from '/profile-image.png'
import { Link } from "react-scroll";


const Home = () => {

  const [counter, setcounter] = useState(0)
  const [coordinatedX, setCoordinatedX] = useState(0)
  const [coordinatedY, setCoordinatedY] = useState(0)
  const parallax = useRef()


  const PHRASES = [
    "Desarollador...",
    "Desarollador Front end",
    "Desarollador Back end",
    "Desarrollador Full stack",
    "amante de las tortugas 🐢",
    "un papucho",
  ]

  useEffect(() => {
    if (counter >= PHRASES.length - 1) {
      setTimeout(() => {
        setcounter(0)
      }, 3000);
    } else {
      setTimeout(() => {
        setcounter(counter + 1)
      }, 3000);
    }

  }, [counter])

  const mouseMov = (e) => {
    setCoordinatedX(e.clientX)
    setCoordinatedY(e.clientY)
  }

  useEffect(() => {
    const sensitivity = 400
    parallax.current.style.transform = `translate(${-coordinatedX / sensitivity}%, ${-coordinatedY / sensitivity}%)`
  }, [coordinatedX, coordinatedY])


  return (
    <section className='home ' id='home-section'>
      <div ref={parallax} className="parallax-container">
        <ParallaxImages />
      </div>
      <div onMouseMoveCapture={mouseMov} className="home__slider flex--column">
        <div className="profile-img">
          <img src={profileImage} alt="" className="profile-img__image" />
        </div>
        <div className="home__title">
          <TitleName
            inf={'Raul C.G'}
          />
        </div>
        <div className="home_inf-box">
          <p className='home__inf-static'>Soy</p>
          <div className="home__phrases">
            <span className='home__phrase'>{PHRASES[counter]}</span>
          </div>
        </div>
        <NavSocialMedia />
        <div className="home__botton flex">
          <Buttons
            word={'contratame'}
            link={'contact-section'}
          />
        </div>

        <Link
            to="about-section"
            spy={true}
            smooth={true}
            duration={100}
            className="home__scroll flex--column"
        >
            <div className="mouse__wheel"></div>
            <p className='home__p-scroll'>ir a abajo</p>
          <MouseScroll />
        </Link>
      </div>
    </section>
  )
}

export default Home