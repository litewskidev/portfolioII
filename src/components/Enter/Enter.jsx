import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Enter.scss';

const Enter = () => {
  const enterWrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const enterWrapper = enterWrapperRef.current;

    tl.to(enterWrapper, {y: '100%', duration: 1.5, delay: .1, ease: "sine.out"
    });

    setTimeout(() => {
    enterWrapper.classList.add('enter__off');
    }, 1600);
  }, []);

  return(
    <div id='enter' className='enter__wrapper' ref={enterWrapperRef}>
      <div className='enter__container'>
        <div className='enter__box'></div>
      </div>
    </div>
  );
};

export default Enter;
