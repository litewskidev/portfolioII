import { shallowEqual, useSelector } from 'react-redux';
import { getFetchedLang, getProjectDesc } from '../../redux/languageRedux';
import { getProject } from '../../redux/projectsRedux';
import './MockupOverlay.scss';

const MockupOverlay = ({ id }) => {
  const project = useSelector(state => getProject(state, id), shallowEqual);
  const projectDesc = useSelector(state => getProjectDesc(state, id));
  const data = useSelector(getFetchedLang);

  return(
    <div className='mockupoverlay__wrapper'>
      <div className='mockupoverlay__container'>
        <div className='mockupoverlay__title'>
          <p>{project[0].title}</p>
        </div>
        <div className='mockupoverlay__desc'>
          {projectDesc?.map(desc => (
            <p key={desc.id}>{desc.desc}</p>
          ))}
        </div>
        <div className='mockupoverlay__links'>
          <div className='mockupoverlay__link__el'>
            <a href={project[0].web} target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/link-solid.svg'} alt='link'/>{data.projects?.live}</a>
          </div>
          <div className='mockupoverlay__link__el'>
            <a href={project[0].git} target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github'/>{data.projects?.repo}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupOverlay;
