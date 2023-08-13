import { shallowEqual, useSelector } from 'react-redux';
import './ProjectModal.scss';
import { getProject } from '../../redux/projectsRedux';

const ProjectModal = ({ id, setId }) => {

  const project = useSelector(state => getProject(state, id), shallowEqual);

  const handleClose = e => {
    e.preventDefault();
    const modal = document.querySelector('#project-modal')
    modal.classList.remove('show');
  };

  return(
    <section id='project-modalshow' className='project__modalshow__wrapper'>
      <div className='project__modalshow__button'>
        <button onClick={handleClose}>X</button>
      </div>
      <div className='project__modalshow__container'>
        <div className='project__modalshow__title'>
          <p>{project[0]?.title}</p>
        </div>
        <div className='project__modalshow__moc'>
          <div className='project__modalshow__moc__image'>
            <img src={process.env.PUBLIC_URL + project[0]?.moc2} alt='project mockup'/>
          </div>
          <div className='project__modalshow__moc__image'>
            <img src={process.env.PUBLIC_URL + project[0]?.moc1} alt='project mockup' />
          </div>
        </div>
      </div>
      <div className='project__modalshow__bottom'>
        <div className='project__modalshow__bottom__left'>
          <p>{project[0]?.desc}</p>
        </div>
        <div className='project__modalshow__bottom__right'>
          <div className='project__modalshow__techs'>
            {project[0]?.techs.map(tech => (
              <div key={tech} className='projects__modalshow__tech__box'>
                <img src={process.env.PUBLIC_URL + tech} alt='tech icon' />
              </div>
            ))}
          </div>
          <div className='project__modalshow__link'>
            <a href={project[0]?.web} target='_blank' rel='noreferrer'>
              <p>TAKE A LOOK &#171;</p>
            </a>
            <div className='project__modalshow__link__github'>
              <a href={project[0]?.git} target="_blank" rel='noreferrer'>&#187;<img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github'/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ProjectModal;
