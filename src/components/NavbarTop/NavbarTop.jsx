import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { fetchLangEng, fetchLangPl } from '../../redux/languageRedux.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './NavbarTop.scss';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const NavbarTop = ({ data }) => {
  const dispatch = useDispatch();

  const langEnRef = useRef(null);
  const langPlRef = useRef(null);
  const dropdownBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  const handlePl = e => {
    e.preventDefault();
    dispatch(fetchLangPl());
    const engBtn = langEnRef.current;
    engBtn.classList.remove('clickedEng');
    e.target.classList.add('clickedPl');
  };

  const handleEng = e => {
    e.preventDefault();
    dispatch(fetchLangEng());
    const plBtn = langPlRef.current;
    plBtn.classList.remove('clickedPl');
    e.target.classList.add('clickedEng');
  };

  const toggleDropdown = e => {
    e.preventDefault();
    const dropdownBtn = dropdownBtnRef.current;
    const dropdown = dropdownRef.current;
    dropdownBtn.classList.toggle('on');
    dropdown.classList.toggle('show');
  };

  const handleHomeScroll = () => {
    gsap.to(window, {duration: 2, scrollTo: "#home", ease: "power1.out"});
  };

  const handleAboutScroll = () => {
    gsap.to(window, {duration: 2, scrollTo: "#about", ease: "power1.out"});
  };

  const handleProjectsScroll = () => {
    gsap.to(window, {duration: 2, scrollTo: "#projects", ease: "power1.out"});
  };

  const handleSkillsScroll = () => {
    gsap.to(window, {duration: 2, scrollTo: "#skills", ease: "power1.out"});
  };

  const handleContactScroll = () => {
    gsap.to(window, {duration: 2, scrollTo: "#contact", ease: "power1.out"});
  };

  return(
    <header id='navbar-top'>
      <div className='navbar__top__wrapper'>
        <div className='navbar__top__container'>
          <div className='navbar__top__dropdown__btn' ref={dropdownBtnRef} onClick={toggleDropdown}>
            <div className='dropdown__btn__inner firstHam'></div>
            <div className='dropdown__btn__inner secondHam'></div>
            <div className='dropdown__btn__inner thirdHam'></div>
          </div>
          <div className='navbar__top__logo'>
            <img src={process.env.PUBLIC_URL + '/assets/logo/ldlogo.webp'} alt='logo'/>
          </div>
          <nav className='navbar__links__container'>
            <ul className='navbar__links'>
              <li>
                <p onClick={handleHomeScroll}>HOME</p>
              </li>
              <li>
                <p onClick={handleAboutScroll}>WHO</p>
              </li>
              <li>
                <p onClick={handleProjectsScroll}>WHAT</p>
              </li>
              <li>
                <p onClick={handleSkillsScroll}>HOW</p>
              </li>
              <li>
                <p onClick={handleContactScroll}>{data.contactTop?.title}</p>
              </li>
            </ul>
          </nav>
          <div className='navbar__top__info'>
            <div className='navbar__top__language__switch'>
              <div id='lang-pl' className='navbar__top__language__pl' ref={langPlRef} onClick={handlePl}>PL</div>
              <div id='lang-eng' className='navbar__top__language__eng clickedEng' ref={langEnRef} onClick={handleEng}>EN</div>
            </div>
          </div>
        </div>

        {/* DROPDOWN */}
        <div id='dropdown'>
          <nav className='dropdown__container' ref={dropdownRef}>
            <ul className='dropdown__links'>
              <li>
                <p onClick={handleHomeScroll}>HOME</p>
              </li>
              <li>
                <p onClick={handleAboutScroll}>WHO</p>
              </li>
              <li>
                <p onClick={handleProjectsScroll}>WHAT</p>
              </li>
              <li>
                <p onClick={handleSkillsScroll}>HOW</p>
              </li>
              <li>
                <p onClick={handleContactScroll}>{data.contactTop?.title}</p>
              </li>
              <li>
                <img src={process.env.PUBLIC_URL + '/assets/logo/ldlogo.webp'} alt='logo'/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
};

export default NavbarTop;
