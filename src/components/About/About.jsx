import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTitleRef = useRef(null);
  const aboutTriggerRef = useRef(null)

  useEffect(() => {
    const aboutTrigger =  aboutTriggerRef.current
    const aboutTitle = aboutTitleRef.current;

    gsap.fromTo(aboutTitle, {y: "-=100%"}, {y: 0, scrollTrigger: {
      trigger: aboutTrigger,
      start: "1% 80%",
      end: "1% 1%",
      scrub: 1,
    }})
  }, [])

  return(
    <section id='about' ref={aboutTriggerRef}>
      <div className='about__wrapper'>
        <div className='about__title__container' ref={aboutTitleRef}>
          <img className='about__title__hand' src={process.env.PUBLIC_URL + '/assets/images/hand1920.webp'} alt='metal hand' />
          <p className='about__title__info'>{data.about?.title}</p>
        </div>
        <div className='about__info__container'>
          <div className='about__info__right'>
            <p>{data.about?.one}</p>
          </div>
        </div>
        <div className='about__underlay'>
          <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background'/>
        </div>
      </div>
    </section>
  )
};

export default About;
