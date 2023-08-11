import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Quote.scss'
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Quote = () => {
  const quoteTriggerRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const quoteTrigger = quoteTriggerRef.current;
    const quote = quoteRef.current;

    gsap.fromTo(quote, {x:0}, {x: "-=40%", ease: "power0",
      scrollTrigger: {
        trigger: quoteTrigger,
        scrub: 2,
        start: "1% 85%",
        end: "top top"

      }
    })
  }, [])
  return(
    <section id='quote' className='quote__wrapper' ref={quoteTriggerRef}>
      <div className='quote__header' ref={quoteRef}>
        <h1>&#8275;</h1>
        <h1>Experience is the name everyone gives to their mistakes</h1>
        <h1>&#8275;</h1>
        <h1>Confusion is part of programming</h1>
        <h1>&#8275;</h1>
        <h1>The best ideas come as jokes. Make your thinking as funny as possible</h1>
        <h1>&#8275;</h1>
        <h1>In order to be irreplaceable, one must always be different</h1>
        <h1>&#8275;</h1>
        <h1>Experience is the name everyone gives to their mistakes</h1>
        <h1>&#8275;</h1>
        <h1>Confusion is part of programming</h1>
        <h1>&#8275;</h1>
        <h1>The best ideas come as jokes. Make your thinking as funny as possible</h1>
        <h1>&#8275;</h1>
        <h1>In order to be irreplaceable, one must always be different</h1>
        <h1>&#8275;</h1>
      </div>
    </section>
  )
};

export default Quote;
