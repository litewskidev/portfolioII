import { useDispatch } from 'react-redux';
import { fetchLangEng, fetchLangPl } from '../../redux/languageRedux';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './NavbarTop.scss';
gsap.registerPlugin(ScrollTrigger);

const NavbarTop = ({ data }) => {
  const dispatch = useDispatch();

  const handlePl = e => {
    e.preventDefault();
    dispatch(fetchLangPl());
    const engBtn = document.querySelector('#lang-eng');
    engBtn.classList.remove('clickedEng');
    e.target.classList.add('clickedPl');
  };

  const handleEng = e => {
    e.preventDefault();
    dispatch(fetchLangEng());
    const plBtn = document.querySelector('#lang-pl');
    plBtn.classList.remove('clickedPl');
    e.target.classList.add('clickedEng');
  };

  const handleContactScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 2, scrollTo: "#contact", ease: "power1"});
  };

  return(
    <div id='navbar-top'>
      <div className='navbar__top__wrapper'>
        <div className='navbar__top__logo'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/terminal-solid.svg'} alt='logo'/>
        </div>
        <div className='navbar__top__info'>
          <div className='navbar__top__contact' onClick={handleContactScroll}>
            <p>{data.contact?.title}</p>
          </div>
          <div className='navbar__top__language__switch'>
            <div id='lang-pl' className='navbar__top__language__pl' onClick={handlePl}>PL</div>
            <div id='lang-eng' className='navbar__top__language__eng clickedEng' onClick={handleEng}>EN</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavbarTop;
