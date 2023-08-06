import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './How.scss';
gsap.registerPlugin(ScrollTrigger);

const How = ({ data }) => {
  const qrCodeRef = useRef(null);
  const howTriggerRef = useRef(null);

  useEffect(() => {
    const howTrigger = howTriggerRef.current;
    const qrCode = qrCodeRef.current;

    gsap.fromTo(qrCode, {y: "200%", opacity: 0}, {y: 0, opacity: 1, ease: "power1",
      scrollTrigger: {
        trigger: howTrigger,
        scrub: 1,
        start: "30% 95%",
        end: "1% 25%"
      }
    });
  }, []);

  return(
    <div id='how' className='how__wrapper'>
      <div className='how__info' ref={howTriggerRef}>
        <p>{data.how?.info}</p>
        <div className='how__qr' ref={qrCodeRef}>
          <a href='https://github.com/litewskidev' target="_blank" rel='noreferrer'><img src={process.env.PUBLIC_URL + '/assets/icons/githubqr.svg'} alt='github'/></a>
        </div>
      </div>
      <div className='how__image'>
        <img src={process.env.PUBLIC_URL + '/assets/images/persona1920.webp'} alt='persona art'/>
        <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay' />
      </div>
      <div className='how__underlay'>
        <img src={process.env.PUBLIC_URL + 'assets/images/dust1-1920.webp'} alt='overlay dust'/>
      </div>
    </div>
  )
};

export default How;
