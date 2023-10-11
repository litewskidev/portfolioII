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
    const portfolioTitle = portfolioTitleRef.current;
    const portfolioTrigger = portfolioTriggerRef.current;

    gsap.fromTo(portfolioTitle, { y: 0 }, { scrollTrigger: {
      trigger: portfolioTrigger,
      start: '1% 35%',
      toggleActions: "play none none reverse"
    },
    y: '-50%',
    ease: 'sine.out',
    duration: 1
    });
  }, []);

  return(
    <section id='portfolio'>
      <div className='portfolio__wrapper'>
        <div className='portfolio__title' ref={portfolioTriggerRef}>
          <div  ref={portfolioTitleRef}>
            <p>ポートフォリオ</p>
            <p>PORTFOLIO</p>
          </div>
        </div>
        <div className='portfolio__container'>
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
