import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import How from '../How/How.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import './Main.scss';

const Main = () => {
  return(
    <div id='main'>
      <Home />
      <About />
      <Skills />
      <How />
      <Projects />
      <Contact />
    </div>
  )
};

export default Main;
