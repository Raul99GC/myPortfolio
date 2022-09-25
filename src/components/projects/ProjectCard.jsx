import React from 'react'
import './assets/styles/ProyectCard.css'

import imgkk from './assets/imgs/pokedex.png'
import linkIcon from './assets/imgs/link-icon.svg'
import linkGithub from './assets/imgs/github-icon.svg'

const ProjectCard = ({ project }) => {
   return (
      <div className='project-card'>
         <div className="project-card__container  ">
            <a className='project-card__link-img' style={{ "--lik-img": "url('src/components/projects/assets/imgs/link-icon.svg')" }} href={project.linkDeploy} target="_blank">
               <img src={project.img} alt="proyect imagen" className="project-card-img" />
               
            </a>

            <div className="project-card__inf flex--column">
               <h4 className="project-card__title">{project.name}</h4>

               <p className="project-card__description">
                  {project.information}
               </p>

               <p className="project-card__tags">
                  {project.tags}
               </p>
            </div>

            <ul className='project-card__links flex'>
               <li className='project-card__link flex'>
                  <a href={project.linkDeploy} className='project-card__a' target="_blank">
                     <img className='project-card__icon' src={linkIcon} alt='Deploy' />
                  </a>
               </li>
               <li className='project-card__link'>
                  <a href={project.linkGit} className='project-card__a project-card__a--text' target="_blank">
                     <img className='project-card__icon' src={linkGithub} alt="Github" />
                  </a>
               </li>
            </ul>

         </div>
      </div>
   )
}

export default ProjectCard