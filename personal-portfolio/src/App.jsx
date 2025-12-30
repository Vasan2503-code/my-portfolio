import './App.css'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Projects from './Components/Projects.jsx'
import ContactMe from './Components/ContactMe.jsx'
import Resume from './Components/Resume.jsx'
// import {BrowserRouter ,routes ,route} from <react-dom></react-dom>
function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <AboutMe/>  
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Resume/>
    </>
  )
}

export default App
