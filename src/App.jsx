
import { useState } from 'react'
import './App.css'
import NavBtn from './components/shared/NavBtn'
import NavMenu from './components/menu/NavMenuScreen'
import TitleName from './components/shared/TitleName'

function App() {

   const [btMenu, setBtMenu] = useState(false)

   const navBottom = () => {
      if (btMenu) {
         setBtMenu(false)
      } else {
         setBtMenu(true)
      }

   }

   return (

      <div className="App">

         <header className='header-desktop'>
            <TitleName />
            <NavMenu />
         </header>
         <header className="header-mobile">
            <div className="header-mobile__container">
               <NavBtn />
               <TitleName />
            </div>
         </header>
         <main>

         </main>
      </div>
   )
}

export default App
