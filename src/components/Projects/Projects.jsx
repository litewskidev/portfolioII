import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import ProjectModal from '../ProjectModal/ProjectModal.jsx';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = ( {data} ) => {
  const projectsTriggerRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const [projectId, setProjectId] = useState(1);

  useEffect(() => {
    const projectsTrigger = projectsTriggerRef.current;
    const projectsSection = projectsSectionRef.current;

      gsap.to(projectsSection, {x: "-600vw", ease: "none",
        scrollTrigger: {
          trigger: projectsTrigger,
          start: "0% 0%",
          end: "600% 0%",
          scrub: 1,
          pin: projectsTrigger
        }
      });
  }, []);

  return(
    <section id='projects' className='projects__outer' ref={projectsTriggerRef}>
      <div id='projects-container'>
        <div className='projects__title__container'>
          <div className='projects__title'>
            <h1>{data.projects?.title}</h1>
            <p>REACT & JAVASCRIPT</p>
          </div>
          <div className='projects__title__pattern'>
            <img src={process.env.PUBLIC_URL + '/assets/shapes/lines.webp'} alt='lines pattern'/>
          </div>
        </div>
        <div className='projects__inner' ref={projectsSectionRef}>
          <div className='scroll__section one'>
            <p>{data.projects?.number}.1</p>
            <div className='scroll__section__project'>
              <ProjectCard id={7} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section two'>
            <p>{data.projects?.number}.2</p>
            <div className='scroll__section__project'>
              <ProjectCard id={1} setId={setProjectId} />
            </div>
          </div>
          <div id='two' className='scroll__section three'>
            <p>{data.projects?.number}.3</p>
            <div className='scroll__section__project'>
              <ProjectCard id={2} setId={setProjectId} />
            </div>
          </div>
          <div id='three' className='scroll__section four'>
            <p>{data.projects?.number}.4</p>
            <div className='scroll__section__project'>
              <ProjectCard id={3} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section five'>
            <p>{data.projects?.number}.5</p>
            <div className='scroll__section__project'>
              <ProjectCard id={4} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section six'>
            <p>{data.projects?.number}.6</p>
            <div className='scroll__section__project'>
              <ProjectCard id={5} setId={setProjectId} />
            </div>
          </div>
          <div className='scroll__section seven'>
            <p>{data.projects?.number}.7</p>
            <div className='scroll__section__project'>
              <ProjectCard id={6} setId={setProjectId} />
            </div>
          </div>
          <div className='projects__underlay'>
            <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background' />
          </div>
        </div>
        <div id='project-modal' className='project__modal'>
        <div className='project__modal__inner'>
          <ProjectModal id={projectId} data={data} />
        </div>
      </div>
      </div>
    </section>
  )
};

export default Projects;
