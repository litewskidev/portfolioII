import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/projectsRedux.js';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Portfolio.scss';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {

  const [projectId, setProjectId] = useState(1);
  const projects = useSelector(getAllProjects);

  const portfolioTitleRef = useRef(null);
  const portfolioTriggerRef = useRef(null);

  useEffect(() => {
    const title = portfolioTitleRef.current;
    const trigger = portfolioTriggerRef.current;

    gsap.fromTo(title, { y: '100%' }, { scrollTrigger: {
      trigger: trigger,
      start: '0% 70%'
    },
    y: 0,
    duration: 1,
    ease: 'power1.out'
    });
  }, []);

  return(
    <section id='portfolio'>
      <div className='portfolio__wrapper'>
        <div className='portfolio__title' ref={portfolioTitleRef}>
          <h1>PORTFO<span>L</span>IO</h1>
        </div>
        <div className='portfolio__container' ref={portfolioTriggerRef}>
          {projects.map((project) => (
            (projects.indexOf(project) % 2 === 0) ? (
              <div id='project-container' className='portfolio__project__container' key={project.id}>
                <ProjectCard id={project.id} setId={setProjectId} cardClass={'project__card__container__odd'} />
              </div>
            ) : (
              <div id='project-container' className='portfolio__project__container' key={project.id}>
                <ProjectCard id={project.id} setId={setProjectId} cardClass={'project__card__container'} />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
