import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Projects from '../Projects/Projects.jsx';
import NavbarBottom from '../NavbarBottom/NavbarBottom.jsx';
import './Main.scss';

const Main = () => {
  return(
    <div id='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <NavbarBottom />
    </div>
  )
};

export default Main;
