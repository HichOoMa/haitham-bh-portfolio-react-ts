import Home from './components/home/home.tsx'
import About from './components/about/about.tsx'
import Navbar from './components/navbar/navbar.tsx'
import Projects from './components/projects/projects.tsx'

import './App.css'
import Contact from './components/contact/contact.tsx'

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <main style={{display: 'flex', flexDirection: 'column'}}>
          <Home />
          <About />
          <Projects />
          <Contact />
      </main>
    </>
  )
}

export default App
