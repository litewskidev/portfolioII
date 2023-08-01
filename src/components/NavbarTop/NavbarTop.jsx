import './NavbarTop.scss';

const NavbarTop = () => {
  return(
    <div id='navbar-top'>
      <div className='navbar__top__wrapper'>
        <div className='navbar__top__logo'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/terminal-solid.svg'} alt='logo'/>
        </div>
        <div className='navbar__top__info'>
          <div className='navbar__top__language__switch'>
            <div id='lang-pl' className='navbar__top__language__pl clickedPl'>PL</div>
            <div id='lang-eng' className='navbar__top__language__eng'>EN</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavbarTop;
