import { shallowEqual, useSelector } from 'react-redux';
import { getProjectDesc } from '../../redux/languageRedux';
import './MockupOverlay.scss';
import { getProject } from '../../redux/projectsRedux';

const MockupOverlay = ({ id }) => {
  const project = useSelector(state => getProject(state, id), shallowEqual);
  const projectDesc = useSelector(state => getProjectDesc(state, id));

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
            <a href={project[0].web} target='_blank' rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/link-solid.svg'} alt='link'/>Live View</a>
          </div>
          <div className='mockupoverlay__link__el'>
            <a href={project[0].git} target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github'/>Repository</a>
          </div>
        </div>
      </div>
      <div className='mockupoverlay__call'>
        <p>もっと見る</p>
      </div>
    </div>
  );
};

export default MockupOverlay;
