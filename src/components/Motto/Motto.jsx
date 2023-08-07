import { gsap } from 'gsap';
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

    gsap.fromTo(mottoTitle, {y: "-=100%", x: "100%"}, {y: 0, x:0, ease: "power0",
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
      <div className='motto__title__box' >
        <img src={process.env.PUBLIC_URL + "/assets/images/hand21920.webp"} alt='metal hand' ref={mottoTitleRef}/>
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
