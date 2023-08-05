import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTitleRef = useRef(null);
  const aboutInfoLeftRef = useRef(null);
  const aboutInfoRightRef = useRef(null);
  const aboutTriggerRef = useRef(null)

  useEffect(() => {
    const aboutTrigger =  aboutTriggerRef.current
    const aboutTitle = aboutTitleRef.current;
    const aboutInfoLeft = aboutInfoLeftRef.current;
    const aboutInfoRight = aboutInfoRightRef.current;

    const tl = gsap.timeline();

    tl.fromTo(aboutTitle, {y: "-=150%"}, {y: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "1% 90%",
      end: "10% 20%",
      scrub: 0.3,
    }})
    .fromTo(aboutInfoLeft, {x: "-=100%"}, {x: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "15% 60%",
      end: "30% 30%",
      scrub: 0.3,
    }})
    .fromTo(aboutInfoRight, {x: "100%"}, {x: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "15% 60%",
      end: "30% 30%",
      scrub: 0.3,
    }})
  }, [])



  return(
    <div id='about' ref={aboutTriggerRef}>
      <div className='about__wrapper'>
        <div className='about__title' ref={aboutTitleRef}>
          <img className='about__title__hand' src={process.env.PUBLIC_URL + '/assets/images/hand1920.webp'} alt='metal hand' />
          <p className='about__title__info'>{data.about?.title}</p>
        </div>
        <div className='about__info__container'>
          <div className='about__info__left' ref={aboutInfoLeftRef}>
            <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience</p>
          </div>
          <div className='about__info__right' ref={aboutInfoRightRef}>
            <p>{data.about?.one}</p>
          </div>
        </div>
        <div className='about__underlay'>
          <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background'/>
        </div>
      </div>
    </div>
  )
};

export default About;
