import { gsap } from 'gsap';
import './ArtyHero.scss';

const ArtyHero = ({ data }) => {
  const handleGetToKnow = () => {
    gsap.to(window, {duration: 1, scrollTo: "#about", ease: "power1.out"});
  };

  return(
    <section id='home' className='arty__hero__wrapper'>
      <div className='arty__hero__container'>
        <div className='arty__hero__main'>
          <div className='arty__hero__main__top'>
            <div className='main__top__left'>
              <h1>{data.home?.title}<br />adrian</h1>
            </div>
            <div className='main__top__right'>
              <img src={process.env.PUBLIC_URL + '/assets/arty/1.webp'} alt='middle face part'/>
            </div>
          </div>
          <div className='arty__hero__main__center'>
            <div className='main__center__left'>
              <img src={process.env.PUBLIC_URL + '/assets/arty/2.webp'} alt='bottom face part' />
              <div className='arty__hero__image__overlay'>
                <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid overlay' />
              </div>
            </div>
            <div className='main__center__right'>
              <h1>{data.home?.subtitle}</h1>
            </div>
          </div>
          <div className='arty__hero__main__bottom'>
            <div className='main__bottom__left'>
              <p>front-end developer<br />{data.home?.based}</p>
              <button onClick={handleGetToKnow}>{data.home?.button}</button>
            </div>
            <div className='arty__hero__social'>
              <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
              <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ArtyHero;
