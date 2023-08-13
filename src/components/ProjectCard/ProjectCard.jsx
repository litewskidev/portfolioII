import { shallowEqual, useSelector } from 'react-redux';
import './ProjectCard.scss';
import { getProject } from '../../redux/projectsRedux.js';

const ProjectCard = ({ id, setId }) => {

  const project = useSelector(state => getProject(state, id), shallowEqual);

  const handleMore = () => {
    setId(id);
    const modal = document.querySelector('#project-modal')
    modal.classList.add('show');
  };

  return(
    <section className='project__card__wrapper'>
      <div className='projects__card__container'>
        <div className='projects__card__inner'>
          <div className='projects__card__image'>
            <img src={process.env.PUBLIC_URL + project[0].img} alt='projects card cover'/>
          </div>
          <div className='projects__card__serial'>
            <p>0015/005/0023</p>
          </div>
        </div>
        <div className='flex__card__inner__info'>
          <div>
            <div className='projects__card__title'>
              <p>{project[0].title}</p>
            </div>
            <div className='projects__card__btn'>
              <button onClick={handleMore}>LEARN MORE</button>
            </div>
          </div>
          <div className='projects__card__link'>
            <a href={project[0].web} target='_blank' rel='noreferrer'>
              <p>TAKE A LOOK</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectCard;
