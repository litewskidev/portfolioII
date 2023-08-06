import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsTriggerRef = useRef(null);
  const projectsSectionRef = useRef(null);

  useEffect(() => {
    const projectsTrigger = projectsTriggerRef.current;
    const projectsSection = projectsSectionRef.current;

      gsap.to(projectsSection, {x: "-300vw", ease: "power0",
        scrollTrigger: {
          trigger: projectsTrigger,
          start: "1% 1%",
          end: "400% 1%",
          scrub: 1,
          pin: projectsTrigger
        }
      })
  }, []);

  return(
    <section id='projects' className='projects__outer'>
      <div id='projects-container' ref={projectsTriggerRef}>
        <div className='projects__title__container'>
          <div className='projects__title'>
            <h1>PROJECTS</h1>
            <p>REACT & JAVASCRIPT</p>
          </div>
          <div className='projects__title__pattern'>
            <img src={process.env.PUBLIC_URL + '/assets/shapes/kreski.webp'}/>
          </div>
        </div>
        <div className='projects__inner' ref={projectsSectionRef}>
          <div className='scroll__section one'>
            <div className='section__one__info'>
              <h3>No.1</h3>
            </div>
          </div>
          <div className='scroll__section two'>
            <h3>No.2</h3>
          </div>
          <div className='scroll__section three'>
            <h3>No.3</h3>
          </div>
          <div className='scroll__section four'>
            <h3>No.4</h3>
          </div>
          <div className='projects__underlay'>
            <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Projects;
