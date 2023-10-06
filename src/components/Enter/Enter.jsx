import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Enter.scss';

const Enter = () => {
  const enterWrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const boxes = gsap.utils.toArray(".enter__box");
    const enterWrapper = enterWrapperRef.current;

    tl.to(boxes, {x: '-100%', duration: .4, delay: .1, ease: "expo.out",
      stagger: {
        each: .1,
        from: 0
      }
    });

    setTimeout(() => {
    enterWrapper.classList.add('enter__off');
    }, 1450);
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
      </div>
    </div>
  );
};

export default Enter;
