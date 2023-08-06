import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollTest.scss';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const ScrollTest = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
      const section = sectionRef.current;
      const trigger = triggerRef.current;

      gsap.fromTo(section, {x: 0, y:0}, {x: "-300vw", y: 0,
        scrollTrigger: {
          trigger: trigger,
          start: "0% 0%",
          end: "400% 0%",
          scrub: 1,
          pin: true
        }
      })
  }, []);

  return(
    <section id='yo' className='scroll__test__outer'>
      <div ref={triggerRef}>
        <div className='scroll__test__inner' ref={sectionRef}>
          <div className='scroll__section one'>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
            <h3>Section 1</h3>
          </div>
          <div className='scroll__section two'>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
            <h3>Section 2</h3>
          </div>
          <div className='scroll__section three'>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
            <h3>Section 3</h3>
          </div>
          <div className='scroll__section four'>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ScrollTest;
