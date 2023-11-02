import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Footer.scss';
gsap.registerPlugin(ScrollToPlugin);

const Footer = ({ data }) => {
  const handleAboutScroll = () => {
    gsap.to(window, {duration: 1.5, scrollTo: "#about", ease: "power1.out"});
  };

  const handleProjectsScroll = () => {
    gsap.to(window, {duration: 1.5, scrollTo: "#projects", ease: "power1.out"});
  };

  const handleHomeScroll = () => {
    gsap.to(window, {duration: 1.5, scrollTo: "#hero", ease: "power1.out"});
  };

  let cvHref;
  if(data?.lang === 'en') {
    cvHref = '/assets/files/CV-EN.pdf'
  } else {
    cvHref = '/assets/files/CV-PL.pdf'
  }

  return(
    <footer id='footer'>
      <div className='footer__wrapper'>
        <div className='footer__container'>
          <div className='footer__start'>
            <div className='footer__start__logo'>
              <a href="mailto:contact@litewskidev.usermd.net">contact@litewskidev.usermd.net</a>
            </div>
          </div>
          <div className='footer__end'>
            <nav className='footer__end__links__container'>
              <div className='footer__end__links'>
                <div>
                  <button onClick={handleHomeScroll}>{data.navbar?.home}</button>
                </div>
                <div>
                  <button onClick={handleProjectsScroll}>{data.navbar?.projects}</button>
                </div>
                <div>
                  <button onClick={handleAboutScroll}>{data.navbar?.about}</button>
                </div>
              </div>
            </nav>
            <div className='footer__end__socials'>
              <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
              <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
              <div className='hero2__title__social__cv cv__white'>
                <a href={process.env.PUBLIC_URL + cvHref} download='CV-Adrian-Litewski'><img src={process.env.PUBLIC_URL + '/assets/icons/cv-icon.svg'} alt='cv icon' /></a>
              </div>
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
