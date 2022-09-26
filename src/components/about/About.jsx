import React from 'react'
import './assets/styles/About.css'

import TitleName from '../shared/TitleName'
import profileImage from '/profile-image.png'
import { Buttons } from '../shared/Buttons'


const About = () => {
  return (
    <section className='about flex' id='about-section'>
      <div className="about__container flex--column">

        <div className="about__title">
          <TitleName inf={'Sobre mi'} />
        </div>

        <div className="about__inf-container flex">
          <div className="about__prof-img-box flex">
            <div className="profile-img profile-img--big">
              <img src={profileImage} alt="" className="profile-img__image" />
            </div>
          </div>


          <div className="about__description">
            <div className="about__description-box">

              <div className="about__inf_column-left">
                <p className='about__description-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet odit mollitia a provident, accusamus amet. Sit cumque, possimus non, et omnis numquam exercitationem iusto veritatis ipsum harum magnam animi?</p>
                <div className="about__button-cv">
                  <a href="https://1drv.ms/b/s!ApcZ8hPpL2nreeSu-UJRgUKvitg?e=tohQgR" className="button" target="_blank">Descargar CV</a>
                </div>
              </div>
              <div className="about__inf_column-rigth">
                <div className="about__stats">
                  <div className="about__progress-content about__progress-content--no-margin">
                    <p className='about__stats-p'>Develoment</p>
                    <progress className={`about__progress -- `} style={{ "--color-progress": "#ff81a5" }} max={100} value={70} />
                  </div>
                </div>
                <div className="about__progress-content">
                  <p className='about__stats-p'>FRONT-END</p>
                  <progress className={`about__progress `} style={{ "--color-progress": "#77d8cb" }} max={100} value={80} />
                </div>
                <div className="about__progress-content">
                  <p className='about__stats-p'>BACK-END</p>
                  <progress className={`about__progress `} style={{ "--color-progress": "#ff2cfb" }} max={100} value={75} />
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className="about__info-box">

        </div>
      </div>
    </section>
  )
}

export default About