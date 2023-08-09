import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import Quote from '../Quote/Quote.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';
import How from '../How/How.jsx';
import Motto from '../Motto/Motto.jsx';
import Contact from '../Contact/Contact.jsx';
import NavbarBottom from '../NavbarBottom/NavbarBottom.jsx';
import './Main.scss';
import QuoteTwo from '../QuoteTwo/QuoteTwo.jsx';
import NewHero from '../NewHero/NewHero.jsx';
import ColorHero from '../ColorHero/ColorHero.jsx';
import ArtyHero from '../ArtyHero/ArtyHero.jsx';

const Main = ({ data }) => {
  return(
    <div id='main'>
      <ArtyHero />
      <About data={data} />
      <Quote />
      <Projects />
      <Skills data={data} />
      <How data={data} />
      <QuoteTwo />
      <Motto data={data} />
      <Contact data={data} />
      <NavbarBottom data={data} />
    </div>
  )
};

export default Main;
