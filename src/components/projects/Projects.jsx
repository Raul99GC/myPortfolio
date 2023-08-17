import React from 'react'
import TitleName from '../shared/TitleName'
import './assets/styles/Projects.css'

import quotes from './assets/imgs/quotes.png'
import rickAndMorty from './assets/imgs/rick-and-morty.png'
import crud from './assets/imgs/crud_website.png'
import pokedex from './assets/imgs/pokedex.png'
import ProjectCard from './ProjectCard'

const Projects = () => {

  const projects = [
    {
      name: 'Magic Money Mages (HACKATON)',
      information: `Landing page principalmente enfocada para mostrar el NFT Magic Money Mages para la hackaton de Etherfuse de solana en la cual podras ver los tokens que puedes obtener.`,
      img: pokedex,
      tags: "#front-end #html #css #javascript #react #Nextjs, #wallet-adapter #solana/web3 #react-router #react-use #web3 #solana/web3.js #nodemailer ",
      linkDeploy: "https://magics-money-mages.vercel.app/",
      linkGit: "https://github.com/RaulCGVulc/Magic-Nft-Vercel"

    },
    {
      name: 'Pokedex',
      information: `pagina web basada en la famosa serie llamada Pokemon, se muestra todos los Pokemones con una breve descripción y sus estadísticas. Esta creado con las tecnologias HTML, CSS, React, Axios, Reactredux, React-Routes-Dom y uso de API`,
      img: pokedex,
      tags: "#front-end #html #css #javascript #react #redux #react-router",
      linkDeploy: "https://pokedexrcg.netlify.app/#/login",
      linkGit: "https://github.com/Raul99GC/Pokedex"

    },
    {
      name: 'Rick and Morty',
      information: 'pagina basada en la famosa serie llamada Rick and Morty en la cual se puede obtener una previsualizacion de la mayoria de los personajes haciendo un filtrado atraves de la barra de navegacion poniendo el numero de universo que quieras saber, se hace uso una API de la misma.',
      img: rickAndMorty,
      tags: "#front-end #html #css #javascript #react",
      linkDeploy: "https://rick-and-morty-app-rcg.netlify.app/",
      linkGit: "https://github.com/Raul99GC/Rick-and-morty-app"
    },
    {
      name: 'Crud website',
      information: `pagina en la cual ponemos a prueba los conocimientos sobre API' en donde podemos registrar, editar, crear y eliminar usuarios.`,
      img: crud,
      tags: "#front-end #html #css #javascript #react",
      linkDeploy: "https://crud-users-rcg.netlify.app/",
      linkGit: "https://github.com/Raul99GC/curd-users"
    },

    {
      name: 'Quotes card',
      information: 'pagina en la que se muestra diferentes frases de diferentes autores completamente aleatorias, cuenta con un boton si se oprime se cambiara de frase junto con su color de fondo que igual mente es completamente aleatorio.',
      img: quotes,
      tags: "#front-end #html #css #javascript #react",
      linkDeploy: "https://quotes-raulcg.netlify.app/",
      linkGit: "https://github.com/Raul99GC/quotes-academlo"
    },
  ]

  return (
    <section className='projects flex' id='projects-section'>

      <div className="projects__container">
        <div className="projects__title">
          <TitleName
            inf={'Proyectos'}
          />
        </div>

        <div className="projects__content flex--column">

          {
            projects.map(project => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Projects