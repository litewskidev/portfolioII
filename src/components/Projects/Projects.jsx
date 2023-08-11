import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import './Projects.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsTriggerRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    const projectsTrigger = projectsTriggerRef.current;
    const projectsSection = projectsSectionRef.current;

      gsap.to(projectsSection, {x: "-400vw", ease: "power0",
        scrollTrigger: {
          trigger: projectsTrigger,
          start: "1% 1%",
          end: "500% 1%",
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
            <h1>PROJECTS?</h1>
            <p>REACT & JAVASCRIPT</p>
          </div>
          <div className='projects__title__pattern'>
            <img src={process.env.PUBLIC_URL + '/assets/shapes/lines.webp'} alt='lines pattern'/>
          </div>
        </div>
        <div className='projects__inner' ref={projectsSectionRef}>
          <div className='scroll__section one'>
            <h3>No.1</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={1} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section two'>
            <h3>No.2</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={2} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section three'>
            <h3>No.3</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={3} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section four'>
            <h3>No.4</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={4} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section five'>
            <h3>No.5</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={5} setId={setProjectId} />
            </div>
          </div>
          <div className='projects__underlay'>
            <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background' />
          </div>
        </div>
        <div id='project-modal' className='project__modal'>
        <div className='project__modal__inner'>
          <ProjectModal id={projectId} setId={setProjectId}/>
        </div>
      </div>
      </div>
    </section>
  )
};

export default Projects;
