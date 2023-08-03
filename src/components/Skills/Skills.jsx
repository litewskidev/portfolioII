import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.scss';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsContainerRef = useRef(null);
  const skillsDrippingRef = useRef(null);
  const skillsTitleRef = useRef(null);

  useEffect(() => {
    const skillsContainer = skillsContainerRef.current;
    const skillsDripping = skillsDrippingRef.current;
    const skillsTitle = skillsTitleRef.current;

    gsap.fromTo(skillsDripping, {y: "-=90%"}, {y: 0, scrollTrigger: {
      markers: false,
      trigger: "#skills",
      start: "20% bottom",
      end: "30% center",
      scrub: 0.2,
    }})

    gsap.fromTo(skillsTitle, {y: 0}, {y: "100%", scrollTrigger: {
      markers: false,
      trigger: skillsContainer,
      start: "top 50%",
      end: "center 30%",
      scrub: 0.2,
    }})

    gsap.fromTo(".skills__box", {scale: 0, opacity: 0}, { scale: 1, opacity: 1, duration: 1,
      stagger: {
        from: "start",
        axis: "x",
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: skillsContainer,
        scrub: 0.2,
        start: "top 45%",
        end: "bottom 60%",
        markers: false,
      }
    });
  }, [])

  return(
    <div id='skills'>
      <div className='skills__dripping' ref={skillsDrippingRef}>
        <img src={process.env.PUBLIC_URL + '/assets/images/dripping3.webp'} alt='paint drip'/>
      </div>
      <h1>HOW?</h1>
      <h1 ref={skillsTitleRef}>HOW?</h1>
      <div className='skills__container' ref={skillsContainerRef}>
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
