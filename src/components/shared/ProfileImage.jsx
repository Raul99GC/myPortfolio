import React from 'react'
import './assets/styles/ProfileImage.css'
import profileImage from './assets/images/profile-image.png'


export const ProfileImage = () => {
  return (
    <div className="profile-img">
        <img src={profileImage} alt="" className="profile-img__image" />
    </div>
  )
}
