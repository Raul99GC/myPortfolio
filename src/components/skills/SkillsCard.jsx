import React from 'react'
import './styles/SkillsCard.css'
import pruebas from './imgs/css-svg.svg'

const SkillsCard = ({ skill }) => {

  return (
    <div className='skill-card'>
      <img src={skill.img} style={skill.styles} className="skill-card__icon"></img>
      <div className="skill-card__name-box">
        <p style={skill.styles} className='skill-card__name flex'>{skill.name}</p>
      </div>
    </div>
  )
}

export default SkillsCard