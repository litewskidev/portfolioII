import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Mockup from '../Mockup/Mockup.jsx';
import MockupOverlay from '../MockupOverlay/MockupOverlay.jsx';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsTriggerRef = useRef(null);
  const boxOneRef = useRef(null);
  const boxTwoRef = useRef(null);
  const boxThreeRef = useRef(null);
  const boxFourRef = useRef(null);
  const boxFiveRef = useRef(null);
  const boxSixRef = useRef(null);

  useLayoutEffect(() => {
    const projectsTrigger = projectsTriggerRef.current;
    const boxOne = boxOneRef.current;
    const boxTwo = boxTwoRef.current;
    const boxThree = boxThreeRef.current;
    const boxFour = boxFourRef.current;
    const boxFive = boxFiveRef.current;
    const boxSix = boxSixRef.current;

    gsap.fromTo(boxOne, {x: '-3%', y: '-3%'}, {x: 0, y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});

    gsap.fromTo(boxTwo, {x: '-3%', y: '3%'}, {x: 0, y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});

    gsap.fromTo(boxThree, {y: '-3%'}, {y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});

    gsap.fromTo(boxFour, {y: '3%'}, {y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});

    gsap.fromTo(boxFive, {x: '3%', y: '-3%'}, {x: 0, y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});

    gsap.fromTo(boxSix, {x: '3%', y: '3%'}, {x: 0, y: 0, duration: 1.7, ease: 'sine.in',
      scrollTrigger: {
        trigger: projectsTrigger,
        start: '0% 25%',
        toggleActions: "play none none reverse"
    }});
  }, []);

  return(
    <section id='projects'>
      <div className='projects__wrapper' ref={projectsTriggerRef}>
        <div className='projects__container'>
          <div className='projects__col'>
            <div className='projects__box small orange' ref={boxOneRef}>
              <div className='projects__box__mockup'>
                <Mockup id={1} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={1} />
              </div>
            </div>
            <div className='projects__box small red' ref={boxTwoRef}>
              <div className='projects__box__mockup'>
                <Mockup id={2} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={2} />
              </div>
            </div>
          </div>
          <div className='projects__col'>
            <div className='projects__box big blue' ref={boxThreeRef}>
              <div className='projects__box__mockup'>
                <Mockup id={3} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={3} />
              </div>
            </div>
            <div className='projects__box medium green' ref={boxFourRef}>
              <div className='projects__box__mockup'>
                <Mockup id={4} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={4} />
              </div>
            </div>
          </div>
          <div className='projects__col'>
            <div className='projects__box medium white' ref={boxFiveRef}>
              <div className='projects__box__mockup'>
                <Mockup id={5} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={5} />
              </div>
            </div>
            <div className='projects__box big grey' ref={boxSixRef}>
              <div className='projects__box__mockup'>
                <Mockup id={6} />
              </div>
              <div className='projects__box__overlay'>
                <MockupOverlay id={6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
