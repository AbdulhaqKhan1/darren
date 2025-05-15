import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

const App = () => {
  return (
     <main>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>

  )
}

export default App