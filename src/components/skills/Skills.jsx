import React from 'react'
import './styles/Skills.css'
import SkillsCard from './SkillsCard'

import TitleName from '../shared/TitleName'




const Skills = () => {

    const tecnologies = [
        {
            name: 'HTML',
            styles: {
                "--color-hover-img": "#e56027",
                "--color-hover": "invert(47%) sepia(41%) saturate(2430%) hue-rotate(344deg) brightness(92%) contrast(95%)",
                "--img-path":`url('src/components/skills/imgs/html-svg.svg')` ,
            }
        },
        {
            name: 'CSS',
            styles: {
                "--color-hover-img": "#3091f2",
                "--color-hover": "invert(67%) sepia(76%) saturate(5755%) hue-rotate(192deg) brightness(102%) contrast(90%)",
                "--img-path":`url('src/components/skills/imgs/css-svg.svg')`,
            },
        },
        {
            name: 'JavaScript',
            styles: {
                "--color-hover-img": "#ead41c",
                "--color-hover": "invert(98%) sepia(38%) saturate(4350%) hue-rotate(340deg) brightness(95%) contrast(92%)",
                "--img-path":`url('src/components/skills/imgs/javascript-svg.svg')`,
            }
        },
        {
            name: 'React',
            styles:{ 
                "--color-hover-img": "#5ccfee",
                "--color-hover": "invert(68%) sepia(61%) saturate(372%) hue-rotate(149deg) brightness(96%) contrast(95%)",
                "--img-path":`url('src/components/skills/imgs/react-svg.svg')` 
            },
        },
        {
            name: 'Redux',
            styles: {
                "--color-hover-img": "#7045b2",
                "--color-hover": "invert(30%) sepia(76%) saturate(1261%) hue-rotate(239deg) brightness(82%) contrast(87%)",
                "--img-path":`url('src/components/skills/imgs/redux-svg.svg')`  ,
            },
        },
        {
            name: 'Git',
            styles: {
                "--color-hover-img": "#e4392c",
                "--color-hover": "invert(23%) sepia(86%) saturate(3902%) hue-rotate(352deg) brightness(99%) contrast(80%)",
                "--img-path":`url('src/components/skills/imgs/git-svg.svg')` ,
            },
        },
        {
            name: 'GitHub',
            styles: {
                "--color-hover-img": "#23272e",
                "--color-hover": "invert(10%) sepia(3%) saturate(4220%) hue-rotate(180deg) brightness(94%) contrast(86%)",
                "--img-path":`url('src/components/skills/imgs/github-svg.svg')` ,
            },
        },
        {
            name: 'Java',
            styles:{ 
                "--color-hover-img": "#4d7a9a",
                "--color-hover": "invert(39%) sepia(63%) saturate(320%) hue-rotate(162deg) brightness(99%) contrast(87%)",
                "--img-path":`url('src/components/skills/imgs/java-svg.svg')` ,
            }
        },
        {
            name: 'Sequelize',
            styles: {
                "--color-hover-img": "#42a7e3",
                "--color-hover": "invert(39%) sepia(63%) saturate(320%) hue-rotate(162deg) brightness(99%) contrast(87%)",
                "--img-path":`url('src/components/skills/imgs/sequelize.svg')` ,
            }
        },
        {
            name: 'SQL',
            styles: {
                "--color-hover-img": "#e1772f",
                "--color-hover": "invert(58%) sepia(10%) saturate(3392%) hue-rotate(339deg) brightness(92%) contrast(92%)",
                "--img-path":`url('src/components/skills/imgs/sql-svg.svg')` ,
            },
        },
        {
            name: 'Postgres',
            styles: {
                "--color-hover-img": "#30628a",
                "--color-hover": "invert(29%) sepia(79%) saturate(386%) hue-rotate(164deg) brightness(100%) contrast(91%)",
                "--img-path":`url('src/components/skills/imgs/postgresql-svg.svg')` ,
            },
        },
        {
            name: 'NodeJs',
            styles: {
                "--color-hover-img": "#89bb3c",
                "--color-hover": "invert(65%) sepia(33%) saturate(755%) hue-rotate(42deg) brightness(96%) contrast(89%)",
                "--img-path":`url('src/components/skills/imgs/nodejs-svg.svg')` ,
            },
        },
    ]



  return (
    <div className='skills'>
        <div className="skills__container">
            <div className="skills__title">
                <TitleName  
                    inf ={'Tecnologias'}
                />
            </div>

            <div className="skills__content">
                <div className="skills__content-box">
                    {
                        tecnologies.map(skill =>(
                            <SkillsCard 
                                key={skill.name}
                                skill={skill}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
  )
}

export default Skills