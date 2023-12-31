import './Skills.scss';

const Skills = ({ data }) => {
  return(
    <section id='skills'>
      <div className='skills__wrapper'>
        <div className='skills__title'>
          <div>
            <p>{data.skills?.title}</p>
          </div>
        </div>
        <div className='skills__container'>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/js.svg'} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/typescript.svg'} alt="TypeScript" />
            <p>TYPESCRIPT</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/react.svg'} alt="React" />
            <p>React</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/redux.svg'} alt="Redux" />
            <p>Redux</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/node-js.svg'} alt="Node" />
            <p>Node</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/expressjs.svg'} alt="Express" />
            <p>Express</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/mongodb.svg'} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/firebase.svg'} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/html5.svg'} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/css3-alt.svg'} alt="CSS3" />
            <p>CSS3</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/sass.svg'} alt="SASS" />
            <p>SASS</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/greensock.svg'} alt="GSAP" />
            <p>GSAP</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/responsive-design.svg'} alt="RWD" />
            <p>RWD</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/git.svg'} alt="Git" />
            <p>Git</p>
          </div>
          <div className='skills__box'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/visual-studio.svg'} alt="Visual Studio" />
            <p>VS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
