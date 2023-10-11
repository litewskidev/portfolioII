import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTitleRef = useRef(null);
  const aboutTriggerRef = useRef(null);

  useEffect(() => {
    const aboutTitle = aboutTitleRef.current;
    const aboutTrigger = aboutTriggerRef.current;

    gsap.fromTo(aboutTitle, { y: 0 }, { scrollTrigger: {
      trigger: aboutTrigger,
      start: '1% 35%',
      toggleActions: "play none none reverse"
    },
    y: '-50%',
    ease: 'sine.out',
    duration: 1
    });
  }, []);

  return(
    <section id='about'>
      <div className='about__wrapper'>
        <div className='about__title' ref={aboutTriggerRef}>
          <div ref={aboutTitleRef}>
            <p>私のこと</p>
            <p>{data.about?.title}</p>
          </div>
        </div>
        <div className='about__info__container'>
          <div className='about__info'>
            <p>{data.about?.one}</p>
            <p>{data.about?.two}</p>
          </div>
        </div>
        <div className='about__image'>
          <div className='about__image__inner'>
            <img src={process.env.PUBLIC_URL + '/assets/images/persona1920.webp'} alt='persona art'/>
            <p>すべてを行うのを待って何もしないよりは、何かをした方が良いのです。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
