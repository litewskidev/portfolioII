import './ColorHero.scss';

const ColorHero = () => {
  return(
    <div className='color__hero__wrapper'>
      <div className='color__hero__container'>
        <div className='color__hero__top__section'>
          <img className='top__section__image__one' src={process.env.PUBLIC_URL + '/assets/test/color/5.webp'}/>
          <img className='top__section__image__two' src={process.env.PUBLIC_URL + '/assets/test/color/4.webp'}/>
          <img className='top__section__image__three' src={process.env.PUBLIC_URL + '/assets/test/color/1.webp'}/>
          <img className='top__section__image__four' src={process.env.PUBLIC_URL + '/assets/test/color/6.webp'}/>
          <img className='top__section__image__five' src={process.env.PUBLIC_URL + '/assets/test/color/7.webp'}/>
        </div>
        <div className='color__hero__bottom__section'>
          <div className='bottom__section__title'>
            <p>HI. I'M ADRIAN</p>
            <p>& I CREATE WEBSITES</p>
          </div>
          <div className='bottom__section__subtitle'>
            <p>Front-End Developer based in Gdańsk / Poland</p>
          </div>
        </div>
        <div className='color__hero__social__section'>
          <div className='color__hero__action__btn'>
            <button>GET TO KNOW ME</button>
          </div>
          <div className='color__hero__social__links'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linked in icon' />
            <img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' />
            <img src={process.env.PUBLIC_URL + '/assets/icons/facebook.svg'} alt='facebook icon' />
          </div>
        </div>
        <div className='color__hero__underlay'>
          <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} />
        </div>
      </div>
    </div>
  )
};

export default ColorHero;
