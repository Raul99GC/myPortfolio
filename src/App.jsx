
import { useState } from 'react'
import './App.css'
import NavBtn from './components/shared/NavBtn'
import NavMenu from './components/menu/NavMenuScreen'
import TitleName from './components/shared/TitleName'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import ContactMe from './components/contact/ContactMe'
import { useEffect } from 'react'

function App() {
   const [btMenu, setBtMenu] = useState(false)

   const clickMain = () => {
      if(btMenu) {
         setBtMenu(false)
      }
   }

   
   return (

      <div className="App">

         <header className={`header-desktop ${btMenu ? 'btn-on' : 'btn-off'} `}>
            <TitleName
               inf={'Raul C.G'}
            />
            <NavMenu />
         </header>
         <header className={`header-mobile ${btMenu ? 'content-off' : 'content-on'} `}>
            <div className="header-mobile__container">
               <NavBtn
                  setBtMenu={setBtMenu}
                  btMenu={btMenu}
               />
               <TitleName
                  inf={'Raul C.G'}
               />
            </div>
         </header>
         <main onClick={clickMain} className={`main ${btMenu ? 'content-off' : 'content-on'}`}>
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
            <div className="spacer"></div>
         </main>
      </div>
   )
}

export default App
