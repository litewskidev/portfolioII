import gsap from 'gsap';
import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const tl = gsap.timeline();
    const projectsTrigger = projectsTriggerRef.current;
    const boxOne = boxOneRef.current;
    const boxTwo = boxTwoRef.current;
    const boxThree = boxThreeRef.current;
    const boxFour = boxFourRef.current;
    const boxFive = boxFiveRef.current;
    const boxSix = boxSixRef.current;
  }, []);

  return(
    <section id='projects'>
      <div className='projects__wrapper' ref={projectsTriggerRef}>
        <div className='projects__container'>
          <div className='projects__col'>
            <div className='projects__box small' ref={boxOneRef}>
              <Mockup id={1} />
              <div className='projects__box__overlay'>
                <MockupOverlay id={1} />
              </div>
            </div>
            <div className='projects__box small' ref={boxTwoRef}>
              <Mockup id={2} />
              <div className='projects__box__overlay'>
                <MockupOverlay id={2} />
              </div>
            </div>
          </div>
          <div className='projects__col'>
            <div className='projects__box big' ref={boxThreeRef}>
              <Mockup id={3} />
              <div className='projects__box__overlay'>
                <MockupOverlay id={3} />
              </div>
            </div>
            <div className='projects__box medium' ref={boxFourRef}>
              <Mockup id={4} />
              <div className='projects__box__overlay'>
                <MockupOverlay id={4} />
              </div>
            </div>
          </div>
          <div className='projects__col'>
            <div className='projects__box medium' ref={boxFiveRef}>
              <Mockup id={5} />
              <div className='projects__box__overlay'>
                <MockupOverlay id={5} />
              </div>
            </div>
            <div className='projects__box big' ref={boxSixRef}>
              <Mockup id={6} />
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
