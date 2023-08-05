import { Linear, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './How.scss';
gsap.registerPlugin(ScrollTrigger);

const How = () => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    const qrCode = qrCodeRef.current;

    gsap.fromTo(qrCode, {y: "200%", opacity: 0}, {y: 0, opacity: 1, ease:Linear.easeNone,
      scrollTrigger: {
        trigger: qrCode,
        scrub: 0.3,
        start: "1% 95%",
        end: "1% 55%"
      }
    });
  }, []);

  return(
    <div id='how' className='how__wrapper'>
      <div className='how__info'>
        <p>I create web applications using React and JSES6. Always care about clear code, cool design, responsiveness and user experience.</p>
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
        <img src={process.env.PUBLIC_URL + 'assets/test/dust-overlay-1.png'}/>
      </div>
    </div>
  )
};

export default How;
