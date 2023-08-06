import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
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
        scrub: 1
      }
    });
  }, []);

  useEffect(() =>
    emailjs.init(process.env.REACT_APP_USER_ID)
  , []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
      from_name: name,
      message: message,
      from_email: email,
    })
    .then(res => {console.log(res.text)})
    .catch(err => {console.log(err.text)});

    setName('');
    setEmail('');
    setMessage('');
  };

  return(
    <div id='contact' className='contact__wrapper'>
      <p>{data.contact?.title}</p>
      <form className='contact__form' onSubmit={handleSubmit}>

        <input className='contact__form__text'
        type='text'
        placeholder={data.contact?.placeholders?.name}
        value={name}
        onChange={e => setName(e.target.value)}
        required
        ></input>

        <input className='contact__form__text'
        type='email'
        placeholder='EMAIL'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        ></input>

        <textarea className='contact__form__message'
        type='text'
        placeholder={data.contact?.placeholders?.msg}
        ref={contactFrameTriggerRef}
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        ></textarea>

        <img src={process.env.PUBLIC_URL + '/assets/images/frame1920.webp'} alt='old frame' ref={contactFrameRef}/>
        <button type='submit'>{data.contact?.button}</button>
      </form>
    </div>
  )
};

export default Contact;
