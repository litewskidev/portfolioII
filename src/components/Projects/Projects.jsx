import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsTriggerRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [projectId, setProjectId] = useState(1);

  useEffect(() => {
    const projectsTrigger = projectsTriggerRef.current;
    const projectsSection = projectsSectionRef.current;

      gsap.to(projectsSection, {x: "-600vw", ease: "power0",
        scrollTrigger: {
          trigger: projectsTrigger,
          start: "0% 0%",
          end: "600% 0%",
          scrub: 1,
          pin: projectsTrigger
        }
      })
  }, []);

  const handleCheckSkillsScroll = e => {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: "#skills", ease: "power1"});
  };

  return(
    <section id='projects' className='projects__outer' ref={projectsTriggerRef}>
      <div id='projects-container'>
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
          <div id='two' className='scroll__section two'>
            <h3>No.2</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={2} setId={setProjectId} />
            </div>
          </div>
          <div id='three' className='scroll__section three'>
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
          <div className='scroll__section six'>
            <h3>No.6</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={6} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section seven'>
            <h3>No.7</h3>
            <div className='scroll__section__project'>
              <ProjectCard id={7} setId={setProjectId} />
            </div>
            <nav className='scroll__section__navBtn'>
              <button onClick={handleCheckSkillsScroll}>check my skills & toolbox</button>
            </nav>
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
