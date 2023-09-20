import { shallowEqual, useSelector } from 'react-redux';
import { getProject } from '../../redux/projectsRedux.js';
import './ProjectCard.scss';
import { getFetchedLang } from '../../redux/languageRedux.js';

const ProjectCard = ({ id, setId }) => {
  const data = useSelector(getFetchedLang);
  const project = useSelector(state => getProject(state, id), shallowEqual);

  const handleMore = e => {
    e.preventDefault();
    setId(id);
    const modal = document.querySelector('#project-modal');
    modal.classList.add('show');
  };

  return(
    <section id='project-card' className='project__card__wrapper'>
      <div className='projects__card__container'>
        <div className='projects__card__inner'>
          <div className='projects__card__image'>
            <img src={process.env.PUBLIC_URL + project[0].img} alt='projects card cover'/>
          </div>
          <div className='projects__card__serial'>
            <p>{project[0].date}</p>
          </div>
        </div>
        <div className='flex__card__inner__info'>
          <div className='flex__card__inner'>
            <div className='projects__card__title'>
              <h1>{project[0].title}</h1>
            </div>
            <div className='projects__card__btn'>
              <button onClick={handleMore}>&#187; {data.projects?.button} &#171;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectCard;
