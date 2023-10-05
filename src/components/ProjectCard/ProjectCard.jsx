import { shallowEqual, useSelector } from 'react-redux';
import { getProject } from '../../redux/projectsRedux.js';
import './ProjectCard.scss';
import { getProjectDesc } from '../../redux/languageRedux.js';

const ProjectCard = ({ id, setId }) => {
  const project = useSelector(state => getProject(state, id), shallowEqual);
  const projectDesc = useSelector(state => getProjectDesc(state, id));

  const handleMore = (e) => {
    e.preventDefault();
    setId(id);
    const modal = document.querySelector('#project-modal');
    modal.classList.add('show');
  };

  return(
    <section id='project-card' className='project__card__wrapper'>
      <div id='card-container' className='project__card__container'>
        <div className='project__card__images'>
          <div className='project__card__img img__1'>
            <img src={process.env.PUBLIC_URL + project[0].moc1} />
          </div>
          <div className='project__card__img img__2'>
            <img src={process.env.PUBLIC_URL + project[0].moc2} />
          </div>
        </div>
        <div className='project__card__info'>
          <div className='project__card__info__inner'>
            <div className='project__card__title'>
              <p>{project[0].title}</p>
            </div>
            <div className='project__card__desc'>
              {projectDesc?.map(desc => (
                <p key={desc.id}>{desc.desc}</p>
              ))}
            </div>
          </div>
          <div className='project__card__links__container'>
            <div className='project__card__link'>
              <a href={project[0].web} target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/link-solid.svg'} alt='link'/></a>
            </div>
            <div className='project__card__link'>
              <a href={project[0].git} target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github'/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectCard;
