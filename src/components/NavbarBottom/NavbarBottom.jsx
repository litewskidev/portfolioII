import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './NavbarBottom.scss';
gsap.registerPlugin(ScrollToPlugin);

const NavbarBottom = ({ data }) => {

  const handleHomeScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo: "#home", ease: "power1"});
  };

  const handleAboutScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 1.5, scrollTo: "#about", ease: "power1"});
  }

  const handleSkillsScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#skills", ease: "power1"});
  }

  const handleProjectsScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 0.5, scrollTo: "#projects", ease: "power1"});
  }

  return(
    <div id='navbar-bottom'>
      <div className='navbar__bottom__wrapper'>
        <p onClick={handleHomeScroll}>{data.navbar?.home}</p>
        <p>/</p>
        <p onClick={handleAboutScroll}>{data.navbar?.about}</p>
        <p>/</p>
        <p onClick={handleSkillsScroll}>{data.navbar?.skills}</p>
        <p>/</p>
        <p onClick={handleProjectsScroll}>{data.navbar?.projects}</p>
      </div>
    </div>
  )
};

export default NavbarBottom;
