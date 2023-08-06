import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Motto.scss';
gsap.registerPlugin(ScrollTrigger);

const Motto = ({ data }) => {
  const mottoTitleRef = useRef(null);
  const mottoTriggerRef = useRef(null)

  useEffect(() =>{
    const mottoTitle = mottoTitleRef.current;
    const mottoTrigger = mottoTriggerRef.current;

    gsap.fromTo(mottoTitle, {x: '100%'}, {x: 0, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: mottoTrigger,
        scrub: 1,
        start: "1% 50%",
        end: "1% 15%"
      }
    });
  }, []);

  return(
    <div id='motto' className='motto__wrapper' ref={mottoTriggerRef}>
      <div className='motto__title__box' ref={mottoTitleRef}>
        <h1>{data.motto?.title}</h1>
        <img src={process.env.PUBLIC_URL + "/assets/images/hand2_1920_z1.webp"} alt='metal hand' />
        <img src={process.env.PUBLIC_URL + "/assets/images/hand2_1920_z2.webp"} alt='metal hand' />
      </div>
      <div className='motto__underlay'>
        <img src={process.env.PUBLIC_URL + '/assets/images/wall1920.webp'} alt='red wall background'/>
      </div>
      <div className='motto__info'>
        <p>{data.motto?.quote}<br />- Winston</p>
      </div>
    </div>
  )
};

export default Motto;
