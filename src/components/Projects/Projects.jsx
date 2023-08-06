import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.scss';
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ data }) => {
  const projectsTitleRef = useRef(null);

  useEffect(() =>{
    const projectsTitle = projectsTitleRef.current;

    gsap.fromTo(projectsTitle, {x: '100%'}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: projectsTitle,
        scrub: 1,
        start: "1% 50%",
        end: "1% 15%"
      }
    });
  }, []);

  return(
    <div id='projects' className='projects__wrapper'>
      <div className='projects__title__box' ref={projectsTitleRef}>
        <h1>{data.projects?.title}</h1>
        <img src={process.env.PUBLIC_URL + "/assets/images/hand2_1920_z1.webp"} alt='metal hand' />
        <img src={process.env.PUBLIC_URL + "/assets/images/hand2_1920_z2.webp"} alt='metal hand' />
      </div>
      <div className='projects__underlay'>
        <img src={process.env.PUBLIC_URL + '/assets/images/wall1920.webp'} alt='red wall background'/>
      </div>
    </div>
  )
};

export default Projects;
