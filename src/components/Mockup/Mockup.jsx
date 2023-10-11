import { shallowEqual, useSelector } from 'react-redux';
import { getProject } from '../../redux/projectsRedux.js';
import './Mockup.scss';

const Mockup = ({ id }) => {
  const project = useSelector(state => getProject(state, id), shallowEqual);

  return(
    <div className='mockup__wrapper'>
      <div className='mockup__image'>
        <img src={process.env.PUBLIC_URL + project[0].moc1} alt='project mockup'/>
      </div>
    </div>
  );
};

export default Mockup;
