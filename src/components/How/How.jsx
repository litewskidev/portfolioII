import { Linear, gsap } from 'gsap';
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

    gsap.fromTo(qrCode, {y: "200%", opacity: 0}, {y: 0, opacity: 1, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: howTrigger,
        scrub: 0.3,
        start: "30% 95%",
        end: "1% 25%",
        markers: false
      }
    });
  }, []);

  return(
    <div id='how' className='how__wrapper'>
      <div className='how__info' ref={howTriggerRef}>
        <p>{data.how?.info}</p>
        <div className='how__qr' ref={qrCodeRef}>
          <img src={process.env.PUBLIC_URL + '/assets/icons/githubqr.svg'} alt='github'/>
          <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} alt='old overlay'/>
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
