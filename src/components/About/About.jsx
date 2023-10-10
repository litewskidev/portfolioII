import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTitleRef = useRef(null);
  const aboutTriggerRef = useRef(null);

  useEffect(() => {
    const title = aboutTitleRef.current;
    const trigger = aboutTriggerRef.current;

    gsap.fromTo(title, { y: '100%' }, { scrollTrigger: {
      trigger: trigger,
      start: '0% 70%'
    },
    y: 0,
    duration: .5,
    ease: 'power1.out'
    });
  }, []);

  return(
    <section id='about'>
      <div className='about__wrapper'>
        <div className='about__title' ref={aboutTitleRef}>
          <h1>{data.about?.title}<span>{data.about?.title2}</span>{data.about?.title3}</h1>
        </div>
        <div className='about__info__container'>
          <div className='about__info' ref={aboutTriggerRef}>
            <p>{data.about?.one}</p>
            <p>{data.about?.two}</p>
          </div>
        </div>
        <div className='about__image'>
          <p>すべてを行うのを待って何もしないよりは、何かをした方が良いのです。</p>
          <img src={process.env.PUBLIC_URL + '/assets/images/persona1920.webp'} alt='persona art'/>
        </div>
      </div>
    </section>
  );
};

export default About;
