import './App.css'
import AboutMe from './Components/aboutme';
import Education from './Components/Education';
import Footer from './Components/footer';
import Navbar from "./Components/navbar";
import Project from './Components/projects';
import Technologies from './Components/technologies';

function App() {

  return (
<>
  <Navbar/>
  <AboutMe/>
  <Project/>
  <Technologies/>
  <Education/>
  <Footer/>
</>
  )
}

export default App
