import { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const Contact = ({ data }) => {
  const contactModalRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_USER_ID);
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
      contactModalRef.current.classList.add('send');
      setTimeout(() => {
        contactModalRef.current.classList.remove('send');
      }, 5000);
    })
    .catch(err => {console.log(err.text)});
    setName('');
    setEmail('');
    setMessage('');
  };

  return(
    <section id='contact' className='contact__wrapper'>
      <div className='contact__container'>
        <div className='contact__image'>
          <img src={process.env.PUBLIC_URL + '/assets/images/hand21920.webp'} alt='hand'/>
        </div>
        <div className='contact__info'>
          <div className='contact__desc'>
            <h1>{data.contact?.title}</h1>
            <p>{data.contact?.info2}</p>
            <p>何か特別なものを作りましょう</p>
          </div>
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
            placeholder={data.contact?.placeholders?.email}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            ></input>
            <textarea className='contact__form__message'
            type='text'
            placeholder={data.contact?.placeholders?.msg}
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            ></textarea>
            <button type='submit'>{data.contact?.button}</button>
          </form>
        </div>
      </div>
      <div className='contact__modal' ref={contactModalRef}>
        <p>{data.contact?.modal}</p>
      </div>
    </section>
  );
};

export default Contact;
