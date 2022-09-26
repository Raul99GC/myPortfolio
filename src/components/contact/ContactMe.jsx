import React from 'react'
import './assets/styles/ContactMe.css'
import emailjs from '@emailjs/browser'
import TitleName from '../shared/TitleName'
import imgsvg from './assets/imgs/Inbox cleanup-amico.svg'

const ContactMe = () => {

   const sendEmail = event => {
      event.preventDefault()
      emailjs.sendForm('service_1tg61ak', 'template_n7zf4vi', event.target, 'hpmOcMvqc3lHAylfP')
         .then(res => console.log(res))
         .catch(err => console.log(err))

   }

   const a = () => {

   }


   return (
      <section className='contact-me'>
         <div className="contact-me__container">
            <div className="contact-me__title">
               <TitleName
                  inf={'Contactame '}
               />
            </div>
            <div className="contact-me__content flex--column">


               <div className="contact-me__box-img">
                  <img src={imgsvg} alt="" className='contact-me__img' />
               </div>
               <form className='contact-me__form flex--column' onSubmit={a} action="">
                  <div className="contact-me__input-container">
                     <input className='contact-me__input' type="text" name='user_name' placeholder='Su Nombre' />
                  </div>
                  <div className="contact-me__input-container" >
                     <input className='contact-me__input' type="text" name='user_email' placeholder='Su Email' />
                  </div>
                  <div className="contact-me__input-container">
                     <textarea className='contact-me__input contact-me__input--textarea' name='user_message' placeholder='Su Mensaje' />
                  </div>

                  <div className="contact-me__botton-box">
                     <button className='contact-me__botton'>Enviar</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   )
}

export default ContactMe