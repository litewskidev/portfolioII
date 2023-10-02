import ArtyHero from '../ArtyHero/ArtyHero.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';
import How from '../How/How.jsx';
import QuoteTwo from '../QuoteTwo/QuoteTwo.jsx';
import Motto from '../Motto/Motto.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import './Main.scss';
import NewHero from '../NewHero/NewHero.jsx';

const Main = ({ data }) => {
  return(
    <main id='main'>
      <NewHero data={data} />
      <About data={data} />
      <Projects data={data}/>
      <Skills data={data} />
      <How data={data} />
      <QuoteTwo />
      <Motto data={data} />
      <Contact data={data} />
      <Footer />
    </main>
  )
};

export default Main;
