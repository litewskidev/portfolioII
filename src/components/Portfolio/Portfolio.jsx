import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllProjects } from '../../redux/projectsRedux';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';
import './Portfolio.scss';

const Portfolio = ({ data }) => {

  const [projectId, setProjectId] = useState(1);
  const projects = useSelector(getAllProjects);

  return(
    <section id='portfolio'>
      <div className='portfolio__wrapper'>
        <div className='portfolio__title'>
          <p>PORTFOLIO</p>
        </div>
        <div className='portfolio__container'>
          {projects.map((project) => (
            <div id='project-container' className='portfolio__project__container' key={project.id}>
              <ProjectCard id={project.id} setId={setProjectId} />
            </div>
          ))}
        </div>
      </div>
      <div id='project-modal' className='project__modal'>
          <div className='project__modal__inner'>
            <ProjectModal id={projectId} data={data} />
          </div>
        </div>
    </section>
  );
};

export default Portfolio;
