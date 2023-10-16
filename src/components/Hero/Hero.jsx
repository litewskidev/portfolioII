import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './Hero.scss';

const Hero = ({ data }) => {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDescRef = useRef(null);
  const homeBasedRef = useRef(null);
  const heroSocialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const heroImg = heroImgRef.current;
    const heroTitle = heroTitleRef.current;
    const heroDesc = heroDescRef.current;
    const homeBased = homeBasedRef.current;
    const heroSocial = heroSocialRef.current;

    tl.fromTo(heroImg, {x: '-100%'}, {x: 0, delay: .8, duration: 1, ease: 'sine.in'})
    .fromTo(heroTitle, {opacity: 0}, {opacity: 1, duration: 1.5, ease: 'sine.in'})
    .fromTo(heroDesc, {opacity: 0}, {opacity: 1, duration: 1.5, ease: 'sine.in'}, '<')
    .fromTo(homeBased, {opacity: 0}, {opacity: 1, duration: 1.5, ease: 'sine.in'}, '<')
    .fromTo(heroSocial, {y: '10%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'sine.in'})
  }, []);

  const handleGetToKnow = () => {
    gsap.to(window, {duration: 1, scrollTo: "#about", ease: "power1.out"});
  };

  let cvHref;
  if(data?.lang === 'en') {
    cvHref = '/assets/files/CV-EN.pdf'
  } else {
    cvHref = '/assets/files/CV-PL.pdf'
  }

  return(
    <section id='hero'>
      <div className='hero2__wrapper'>
        <div className='hero2__container'>
          <div className='hero2__header'>
            <div className='hero2__header__left' ref={homeBasedRef}>
              <p>( {data.home?.from}</p>
              <p>{data.home?.based} )</p>
            </div>
            <div className='hero2__header__right'>
              <img src={process.env.PUBLIC_URL + '/assets/arty/hero.webp'} alt='face' ref={heroImgRef}/>
            </div>
          </div>
          <div className='hero2__title'>
            <div className='hero2__title__name' ref={heroTitleRef}>
              <h1>adrian litewski</h1>
            </div>
            <div className='hero2__title__social' ref={heroSocialRef}>
              <a href='https://www.linkedin.com/in/adrian-litewski-litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linkedin icon' /></a>
              <a href='https://github.com/litewskidev' target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' /></a>
              <div className='hero2__title__social__cv'>
                <a href={process.env.PUBLIC_URL + cvHref} download='CV'>CV</a>
              </div>
            </div>
          </div>
          <div className='hero2__desc' ref={heroDescRef}>
            <div className='hero2__desc__prof'>
              <h2><span>ウェブ開発者</span> web developer</h2>
            </div>
            <div className='hero2__desc__button'>
              <button onClick={handleGetToKnow}>{data.home?.button}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
