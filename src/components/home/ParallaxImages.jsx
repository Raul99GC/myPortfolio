import React from 'react'
import './assets/styles/ParallaxImages.css'
import imgCoin from './assets/imgs/./coin.png'
import imgDiamon from './assets/imgs/diamond.png'
import imgGameConsole from './assets/imgs/game-console.png'
import imgGamerOver from './assets/imgs/game-over.png'
import imgXbox from './assets/imgs/gamepad-Xbox.png'
import imgHeart from './assets/imgs/heart.png'
import imgGamePad from './assets/imgs/minecraft.png'
import imgSkull from './assets/imgs/skull.png'
import imgStar from './assets/imgs/star.png'
import imgSword from './assets/imgs/sword.png'
import imgUploading from './assets/imgs/uploading.png'
import imgWorms from './assets/imgs/worms.png'

import { useEffect } from 'react'
import { useRef } from 'react'


const ParallaxImages = (props) => {

  const mouseMov = (e) => {
    console.log(e)
  }
  
  useEffect(() => {
    
  }, [])
  

  return (
    <>
        <img src={imgCoin} alt="" className='imgParallax imgParallax--1' data-speed= "-5"/>
        <img src={imgDiamon} alt="" className='imgParallax imgParallax--2' />
        <img src={imgGameConsole} alt="" className='imgParallax imgParallax--3' />
        <img src={imgGamerOver} alt="" className='imgParallax imgParallax--4' />
        <img src={imgXbox} alt="" className='imgParallax imgParallax--5' />
        <img src={imgHeart} alt="" className='imgParallax imgParallax--6' />
        <img src={imgGamePad} alt="" className='imgParallax imgParallax--7' />
        <img src={imgSkull} alt="" className='imgParallax imgParallax--8' />
        <img src={imgStar} alt="" className='imgParallax imgParallax--9' />
        <img src={imgSword} alt="" className='imgParallax imgParallax--10' /> 
        <img src={imgUploading} alt="" className='imgParallax imgParallax--11' /> 
        <img src={imgWorms} alt="" className='imgParallax imgParallax--12' />
    </>

  )
}

export default ParallaxImages