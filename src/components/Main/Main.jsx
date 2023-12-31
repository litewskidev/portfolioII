import Hero from '../Hero/Hero.jsx';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects.jsx';
import Skills from '../Skills/Skills.jsx';
import Contact from '../Contact/Contact.jsx';
import Footer from '../Footer/Footer.jsx';
import './Main.scss';

const Main = ({ data }) => {
  return(
    <main id='main'>
      <Hero data={data} />
      <About data={data} />
      <Projects />
      <Skills data={data} />
      <Contact data={data} />
      <Footer data={data}/>
    </main>
  );
};

export default Main;
