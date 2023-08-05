import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import How from '../How/How.jsx';
import Projects from '../Projects/Projects.jsx';
import Contact from '../Contact/Contact.jsx';
import NavbarBottom from '../NavbarBottom/NavbarBottom.jsx';
import './Main.scss';

const Main = ({ data }) => {
  return(
    <div id='main'>
      <Home data={data}/>
      <About data={data} />
      <Skills data={data} />
      <How data={data} />
      <Projects data={data} />
      <Contact data={data} />
      <NavbarBottom data={data} />
    </div>
  )
};

export default Main;
