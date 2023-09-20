import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
import './Contact.scss';
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ data }) => {
  const contactFrameRef = useRef(null);
  const contactFrameTriggerRef = useRef(null);
  const contactModalRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const contactFrame = contactFrameRef.current;
    const contactFrameTrigger = contactFrameTriggerRef.current;

    gsap.to(contactFrame, {rotation: 5, ease: "none",
      scrollTrigger: {
        trigger: contactFrameTrigger,
        start: "0% 60%",
        end: "0% 40%",
        scrub: 1
      }
    });

    emailjs.init(process.env.REACT_APP_USER_ID)
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
      from_name: name,
      message: message,
      from_email: email
    })
    .then(res => {
      console.log(res.text);
      contactModalRef.current.classList.add('sent');
      setTimeout(() => {
        contactModalRef.current.classList.remove('sent');
      }, 5000);
    })
    .catch(err => {console.log(err.text)});

    setName('');
    setEmail('');
    setMessage('');
  };

  return(
    <section id='contact' className='contact__wrapper'>
      <h1>{data.contact?.title}</h1>
      <p>{data.contact?.info}</p>
      <p>{data.contact?.info2}</p>
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
      <p>litewskidev@gmail.com</p>
      <div className='contact__modal' ref={contactModalRef}>
        <p>Thanks for contacting me! I will be in touch with you shortly.</p>
      </div>
    </section>
  )
};

export default Contact;
