import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Footer.scss';
gsap.registerPlugin(ScrollToPlugin);

const Footer = ({ data }) => {

  const handleAboutScroll = () => {
    gsap.to(window, {duration: 1, scrollTo: "#about", ease: "power1.out"});
  };

  const handleProjectsScroll = () => {
    gsap.to(window, {duration: 1, scrollTo: "#projects", ease: "power1.out"});
  };

  const handleHomeScroll = () => {
    gsap.to(window, {duration: 1, scrollTo: "#hero", ease: "power1.out"});
  };

  return(
    <footer id='footer'>
      <div className='footer__wrapper'>
        <div className='footer__container'>
          <div className='footer__start'>
            <div className='footer__start__logo'>
              <p>\\&gt;</p>
              <a href="mailto:litewskidev@gmail.com">litewskidev@gmail.com</a>
            </div>
          </div>
          <div className='footer__end'>
            <nav className='footer__end__links__container'>
              <ul className='footer__end__links'>
                <li>
                  <button onClick={handleProjectsScroll}>{data.navbar?.projects}</button>
                </li>
                <li>
                  <button onClick={handleAboutScroll}>{data.navbar?.about}</button>
                </li>
                <li>
                  <button onClick={handleHomeScroll}>{data.navbar?.home}</button>
                </li>
              </ul>
            </nav>
            <div className='footer__end__socials'>
              <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
              <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
            </div>
          </div>
        </div>
        <div className='footer__copy'>
          <p>著作権 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
