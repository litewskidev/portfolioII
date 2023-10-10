import { gsap } from 'gsap';
import { useEffect } from 'react';
import './NewHero.scss';

const NewHero = ({ data }) => {
  const handleGetToKnow = () => {
    gsap.to(window, {duration: .5, scrollTo: "#about", ease: "power1.out"});
  };

  useEffect(()=> {
    const texts = gsap.utils.toArray(".logo__text");

    gsap.fromTo(texts, {x: "100%"}, {x: 0, duration: .5, delay: .3, ease: "power1.out",
    stagger: {
      each: .15,
      from: 0
    }
    });
  }, []);

  return(
    <section id='home' className='hero__wrapper'>
      <div className='hero__container'>
        <div className='hero__info__social'>
          <div className='hero__info__social__pattern'></div>
          <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
          <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
          <div className='hero__info__social__pattern'></div>
        </div>
        <div className='hero__main__top'>
          <div className='main__top__left'>
            <p className='logo__text'>web</p>
            <p className='logo__text'>adrian</p>
            <p className='logo__text'><span>dev</span></p>
            <p className='logo__text'>eloper</p>
          </div>
          <div className='main__top__right'>
            <img src={process.env.PUBLIC_URL + '/assets/arty/7.webp'} alt='face' />
          </div>
        </div>
      </div>
      <div className='hero__info__details'>
        <p><span>ウェブ開発者</span> {data.home?.based}</p>
        <div className='hero__info__button'>
          <button onClick={handleGetToKnow}>{data.home?.button}</button>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
