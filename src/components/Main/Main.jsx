import NewHero from '../NewHero/NewHero.jsx';
import About from '../About/About.jsx';
import Skills from '../Skills/Skills.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import './Main.scss';

const Main = ({ data }) => {
  return(
    <main id='main'>
      <NewHero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Portfolio />
      <Contact data={data} />
      <Footer />
    </main>
  );
};

export default Main;
