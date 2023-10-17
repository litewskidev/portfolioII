import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Enter.scss';

const Enter = () => {
  const enterWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const enterWrapper = enterWrapperRef.current;

    gsap.to(enterWrapper, {y: '100%', duration: 1.5, delay: .1, ease: "sine.in"});
  }, []);

  setTimeout(() => {
    enterWrapperRef.current.classList.add('enter__off');
    }, 1600);

  return(
    <div id='enter' className='enter__wrapper' ref={enterWrapperRef}>
      <div className='enter__container'>
        <div className='enter__box'></div>
      </div>
    </div>
  );
};

export default Enter;
