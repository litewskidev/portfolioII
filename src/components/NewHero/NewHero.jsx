import { gsap } from 'gsap';
import { useEffect } from 'react';
import './NewHero.scss';

const NewHero = ({ data }) => {
  const handleGetToKnow = () => {
    gsap.to(window, {duration: 1.5, scrollTo: "#about", ease: "power1.out"});
  };

  useEffect(()=> {
    const texts = gsap.utils.toArray(".logo__text");

    gsap.fromTo(texts, {x: "100%"}, {x: 0, duration: 1, delay: .3, ease: "power1.out",
    stagger: {
      each: .1,
      from: 0
    }
    });
  }, []);

  return(
    <section id='home' className='hero__wrapper'>
      <div className='hero__container'>
        <div className='hero__main__top'>
          <div className='main__top__left'>
            <p className='logo__text'>web</p>
            <p className='logo__text'>adri<span>a</span>n</p>
            <p className='logo__text'>dev</p>
            <p className='logo__text'>eloper</p>
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
    </section>
  );
};

export default NewHero;
