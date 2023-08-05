import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.scss';
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ data }) => {
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
      <p>{data.contact?.title}</p>
      <form className='contact__form'>
        <input className='contact__form__text' type='text' placeholder={data.contact?.placeholders?.name}></input>
        <input className='contact__form__text' type='email' placeholder='EMAIL'></input>
        <input className='contact__form__message' type='text' placeholder={data.contact?.placeholders?.msg} ref={contactFrameTriggerRef}></input>
        <img src={process.env.PUBLIC_URL + '/assets/images/frame1920.webp'} alt='old frame' ref={contactFrameRef}/>
        <button type='submit'>{data.contact?.button}</button>
      </form>
    </div>
  )
};

export default Contact;
