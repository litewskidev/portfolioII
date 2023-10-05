import { gsap } from 'gsap';
import './NewHero.scss';

const NewHero = ({ data }) => {

  const handleGetToKnow = () => {
    gsap.to(window, {duration: 1, scrollTo: "#about", ease: "power1.out"});
  };

  return(
    <section id='home' className='hero__wrapper'>
    <div className='hero__container'>
      <div className='hero__main'>
        <div className='hero__main__top'>
          <div className='main__top__left'>
            <p>web<br />adrian</p>
            <p>dev</p>
            <p>eloper</p>
          </div>
          <div className='main__top__right'>
            <img src={process.env.PUBLIC_URL + '/assets/arty/7.webp'} alt='face' />
          </div>
        </div>
        <div className='hero__main__bottom'>
          <div className='main__bottom__left'>
            <p>{data.home?.based}</p>
            <button onClick={handleGetToKnow}>{data.home?.button}</button>
          </div>
          <div className='hero__social'>
            <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
            <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default NewHero;
