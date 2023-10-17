import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTriggerRef = useRef(null);
  const kanjiRef = useRef(null);

  useLayoutEffect(() => {
    const aboutTrigger = aboutTriggerRef.current;
    const kanji = kanjiRef.current;

    gsap.to(kanji, {y: '85vh', color: '#B64C39',
    scrollTrigger: {
      trigger: aboutTrigger,
      start: '5% 0%',
      end: '100% 0%',
      scrub: .1
    }});
  }, []);

  return(
    <section id='about'>
      <div className='about__wrapper' ref={aboutTriggerRef}>
        <div className='about__title'>
          <h1 ref={kanjiRef}>者</h1>
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
