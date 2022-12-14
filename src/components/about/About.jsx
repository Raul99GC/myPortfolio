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
                <p className='about__description-text'>Hola! mi nombre es Raul Cordoba, soy desarollador Front-end, Back-end y amante de las tortugas, me encanta hacer nuevos proyectos que me desafien en capacidades analitica y tecnologicas, espero algun dia contribuir a la comunidad de desarollo web con mis conocimientos adquiridos</p>
                <div className="about__button-cv">
                  <a href="https://1drv.ms/u/s!ApcZ8hPpL2nrdscb7svK-JR1SI8?e=xTW190" className="button" target="_blank">Descargar CV</a>
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