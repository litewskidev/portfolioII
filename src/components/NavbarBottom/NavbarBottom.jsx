import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './NavbarBottom.scss';
gsap.registerPlugin(ScrollToPlugin);

const NavbarBottom = ({ data }) => {

  const handleHomeScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 1.25, scrollTo: "#home", ease: "power1"});
  };

  const handleAboutScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#about", ease: "power1"});
  }


  const handleProjectsScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 0.75, scrollTo: "#projects", ease: "power1"});
  }

  const handleSkillsScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 0.5, scrollTo: "#skills", ease: "power1"});
  }

  const handleMottoScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 0.25, scrollTo: "#motto", ease: "power1"});
  }

  return(
    <div id='navbar-bottom'>
      <div className='navbar__bottom__wrapper'>
        <p className='cursor__nav' onClick={handleHomeScroll}>{data.navbar?.home}</p>
        <p>/</p>
        <p className='cursor__nav' onClick={handleAboutScroll}>{data.navbar?.about}</p>
        <p>/</p>
        <p className='cursor__nav' onClick={handleProjectsScroll}>{data.navbar?.projects}</p>
        <p>/</p>
        <p className='cursor__nav' onClick={handleSkillsScroll}>{data.navbar?.skills}</p>
        <p>/</p>
        <p className='cursor__nav' onClick={handleMottoScroll}>{data.navbar?.motto}</p>
      </div>
    </div>
  )
};

export default NavbarBottom;
