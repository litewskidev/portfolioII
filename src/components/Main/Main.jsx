import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import How from '../How/How.jsx';
import Contact from '../Contact/Contact.jsx';
import NavbarBottom from '../NavbarBottom/NavbarBottom.jsx';
import Projects from '../Projects/Projects.jsx';
import Motto from '../Motto/Motto.jsx';
import './Main.scss';

const Main = ({ data }) => {
  return(
    <div id='main'>
      <Home data={data}/>
      <About data={data} />
      <Projects />
      <Skills data={data} />
      <How data={data} />
      <Motto data={data} />
      <Contact data={data} />
      <NavbarBottom data={data} />
    </div>
  )
};

export default Main;
