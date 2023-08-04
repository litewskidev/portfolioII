import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutDrippingRef = useRef(null);
  const aboutTitleRef = useRef(null);
  const aboutInfoLeftRef = useRef(null);
  const aboutInfoRightRef = useRef(null);
  const aboutTriggerRef = useRef(null)

  useEffect(() => {
    const aboutTrigger =  aboutTriggerRef.current
    const aboutDripping = aboutDrippingRef.current;
    const aboutTitle = aboutTitleRef.current;
    const aboutInfoLeft = aboutInfoLeftRef.current;
    const aboutInfoRight = aboutInfoRightRef.current;

    const tl = gsap.timeline();
    tl.fromTo(aboutDripping, {y: "-=100%"}, {y: 0,
    scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "20% 99%",
      end: "30% 50%",
      scrub: 0.2,
    }})
    .fromTo(aboutTitle, {y: "-=150%"}, {y: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "20% 65%",
      end: "50% 20%",
      scrub: 0.2,
    }})
    .fromTo(aboutInfoLeft, {x: "-=100%"}, {x: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "15% 60%",
      end: "40% 30%",
      scrub: 0.2,
    }})
    .fromTo(aboutInfoRight, {x: "100%"}, {x: 0, scrollTrigger: {
      markers: false,
      trigger: aboutTrigger,
      start: "15% 60%",
      end: "40% 30%",
      scrub: 0.2,
    }})
  }, [])



  return(
    <div id='about' ref={aboutTriggerRef}>
      <div className='about__wrapper'>
        <div className='about__dripping' ref={aboutDrippingRef }>
          <img src={process.env.PUBLIC_URL + '/assets/images/dripping3.webp'} alt='paint drips' />
        </div>
        <div className='about__title' ref={aboutTitleRef}>
          <img className='about__title__hand' src={process.env.PUBLIC_URL + '/assets/images/hand1920.webp'} alt='metal hand' />
          <p className='about__title__info'>WHO?</p>
        </div>
        <div className='about__info__container'>
          <div className='about__info__left' ref={aboutInfoLeftRef}>
            <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience</p>
          </div>
          <div className='about__info__right' ref={aboutInfoRightRef}>
            <p>My adventure with programming began about a year ago. Over time, it turned into a real passion. I love writing code and I strive to be able to devote as much time to it as possible</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
