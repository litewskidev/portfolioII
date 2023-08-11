import { shallowEqual, useSelector } from 'react-redux';
import './ProjectModal.scss';
import { getProject } from '../../redux/projectsRedux';

const ProjectModal = ({ id, setId }) => {

  const project = useSelector(state => getProject(state, id), shallowEqual);

  const handleClose = () => {
    setId(null);
    const modal = document.querySelector('#project-modal')
    modal.classList.remove('show');
  };

  return(
    <section id='project-modalshow' className='project__modalshow__wrapper'>
      <div className='project__modalshow__title'>
        <p>{project[0]?.title}</p>
      </div>
      <div className='project__modalshow__button'>
        <button onClick={handleClose}>X</button>
      </div>
    </section>
  )
};

export default ProjectModal;
