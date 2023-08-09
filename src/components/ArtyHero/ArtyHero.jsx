import './ArtyHero.scss';

const ArtyHero = () => {
  return(
    <div className='arty__hero__wrapper'>
      <div className='arty__hero__container'>
        <div className='arty__hero__main'>
          <div className='arty__hero__main__top'>
            <div className='main__top__left'>
              <p>hi. i'm adrian</p>
            </div>
            <div className='main__top__right'>
              <img src={process.env.PUBLIC_URL + '/assets/test/arty/2of3.webp'} alt='middle face part'/>
            </div>
          </div>
          <div className='arty__hero__main__center'>
            <div className='main__center__left'>
              <img src={process.env.PUBLIC_URL + '/assets/test/arty/3of3.webp'} alt='bottom face part' />
              <div className='arty__hero__image__overlay'>
                <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid overlay' />
              </div>
            </div>
            <div className='main__center__right'>
                <p>i create websites</p>
            </div>
          </div>
          <div className='arty__hero__main__bottom'>
            <div className='main__bottom__left'>
              <p>front-end developer <br />based in gdańsk / poland</p>
              <button>get to know me</button>
            </div>
            <div className='arty__hero__social'>
              <img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linked in icon' />
              <img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' />
              <img src={process.env.PUBLIC_URL + '/assets/icons/facebook.svg'} alt='facebook icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='arty__hero__underlay'>
        <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='background grid' />
      </div>
    </div>
  )
};

export default ArtyHero;
