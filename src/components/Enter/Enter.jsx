import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Enter.scss';

const Enter = () => {
  const enterWrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const boxs = gsap.utils.toArray(".enter__box");
    const enterWrapper = enterWrapperRef.current;

    tl.to(boxs, {rotateY: 90, duration: 0.3, delay: 0.5,
    stagger: {
      each: 0.03,
      from: 0,
      ease: "none"
    }
  }).to(enterWrapper, {display: "none", delay: 0.6}, "<");
  }, []);

  return(
    <div id='enter' className='enter__wrapper' ref={enterWrapperRef}>
      <div className='enter__container'>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
        <div className='enter__box'></div>
      </div>
    </div>
  )
};

export default Enter;
