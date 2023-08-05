import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.scss';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactFrameRef = useRef(null);
  const contactFrameTriggerRef = useRef(null);

  useEffect(() => {
    const contactFrame = contactFrameRef.current;
    const contactFrameTrigger = contactFrameTriggerRef.current;

    gsap.to(contactFrame, {rotate: 5, ease: "power0",
      scrollTrigger: {
        trigger: contactFrameTrigger,
        start: "1% 60%",
        end: "1% 40%",
        scrub: 0.3,
        markers: false
      }})
    }, []);

  return(
    <div id='contact' className='contact__wrapper'>
      <p>WHERE?</p>
      <form className='contact__form'>
        <input className='contact__form__text' type='text' placeholder='NAME'></input>
        <input className='contact__form__text' type='email' placeholder='E-MAIL'></input>
        <input className='contact__form__message' type='text' placeholder='MESSAGE' ref={contactFrameTriggerRef}></input>
        <img src={process.env.PUBLIC_URL + '/assets/test/frame1.png'} ref={contactFrameRef}/>
        <button type='submit'>SEND</button>
      </form>
    </div>
  )
};

export default Contact;
