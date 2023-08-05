import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.scss';
gsap.registerPlugin(ScrollTrigger);

const Skills = ({ data }) => {
  const skillsTriggerRef = useRef(null);
  const skillsTitleRef = useRef(null);

  useEffect(() => {
    const skillsTrigger = skillsTriggerRef.current;
    const skillsTitle = skillsTitleRef.current;

    gsap.fromTo(skillsTitle, {y: 0}, {y: "100%", scrollTrigger: {
      markers: false,
      trigger: skillsTrigger,
      start: "1% 50%",
      end: "50% 30%",
      scrub: 0.3,
    }})

    gsap.fromTo(".skills__box", {scale: 0, opacity: 0}, { scale: 1, opacity: 1, duration: 1,
      stagger: {
        from: "start",
        axis: "x",
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: skillsTrigger,
        scrub: 0.3,
        start: "1% 50%",
        end: "70% 70%",
        markers: false,
      }
    });
  }, [])

  return(
    <div id='skills' ref={skillsTriggerRef}>
      <h1>{data.skills?.title}</h1>
      <h1 ref={skillsTitleRef}>{data.skills?.title}</h1>
      <div className='skills__container'>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/js.svg'} alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/node-js.svg'} alt="Node" />
          <p>Node</p>
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
          <img src={process.env.PUBLIC_URL + '/assets/icons/typescript.svg'} alt="TypeScript" />
          <p>TypeScript</p>
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
          <img src={process.env.PUBLIC_URL + '/assets/icons/firebase.svg'} alt="Firebase" />
          <p>Firebase</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/expressjs.svg'} alt="Express" />
          <p>Express</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/git.svg'} alt="Git" />
          <p>Git</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/responsive-design.svg'} alt="RWD" />
          <p>RWD</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/bootstrap.svg'} alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/framer.svg'} alt="Framer" />
          <p>Framer</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/visual-studio.svg'} alt="Visual Studio" />
          <p>VS</p>
        </div>
        <div className='skills__box'>
          <img src={process.env.PUBLIC_URL + '/assets/icons/greensock.svg'} alt="GSAP" />
          <p>GSAP</p>
        </div>
      </div>
    </div>
  )
};

export default Skills;
