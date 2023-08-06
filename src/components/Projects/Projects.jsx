import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
      const section = sectionRef.current;
      const trigger = triggerRef.current;

      gsap.fromTo(section, {x: 0}, {x: "-300vw", ease: "power0",
        scrollTrigger: {
          trigger: trigger,
          start: "1% 1%",
          end: "400% 1%",
          scrub: 0.1,
          pin: true
        }
      })
  }, []);

  return(
    <section id='projects' className='projects__outer'>
      <div ref={triggerRef}>
        <div className='projects__inner' ref={sectionRef}>
          <div className='scroll__section one'>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
          </div>
          <div className='scroll__section two'>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
          </div>
          <div className='scroll__section three'>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
          </div>
          <div className='scroll__section four'>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;
