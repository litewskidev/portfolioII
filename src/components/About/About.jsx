import { gsap } from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';
gsap.registerPlugin(ScrollTrigger);

const About = ({ data }) => {
  const aboutTitleRef = useRef(null);
  const aboutTriggerRef = useRef(null);

  return(
    <section id='about' ref={aboutTriggerRef}>
      <div className='about__wrapper'>
        <div className='about__info__container'>
          <div className='about__title' ref={aboutTitleRef}>
            <p>{data.about?.title}</p>
          </div>
          <div className='about__info'>
            <div className='about__info__inner'>
              <p>{data.about?.one}</p>
              <p>{data.about?.two}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
