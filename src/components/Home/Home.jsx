import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.scss';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const homeWrapperRef = useRef(null);
  const heroWrapperRef = useRef(null);
  const heroImgOneRef = useRef(null);
  const heroImgTwoRef = useRef(null);
  const heroImgThreeRef = useRef(null);
  const heroImgFourRef = useRef(null);
  const heroImgFiveRef = useRef(null);
  const heroTextOneRef = useRef(null);
  const heroTextTwoRef = useRef(null);
  const heroTextThreeRef = useRef(null);
  const heroSocialRef  = useRef(null);
  const homeOverlayRef = useRef(null);
  const homeUnderlayRef = useRef(null);



  useEffect(() => {
    const tl = gsap.timeline();
    const homeWrapper = homeWrapperRef.current;
    const heroWrapper = heroWrapperRef.current;

    const heroImgOne = heroImgOneRef.current;
    const heroImgTwo = heroImgTwoRef.current;
    const heroImgThree = heroImgThreeRef.current;
    const heroImgFour = heroImgFourRef.current;
    const heroImgFive = heroImgFiveRef.current;

    const homeOverlay = homeOverlayRef.current;

    const heroTextOne = heroTextOneRef.current;
    const heroTextTwo = heroTextTwoRef.current;
    const heroTextThree = heroTextThreeRef.current;

    const homeUnderlay = homeUnderlayRef.current;

    const heroSocial = heroSocialRef.current;


    tl.to(homeWrapper, {opacity: 1, delay: 0.2, duration: 1, ease: "power0"})
    .to([homeOverlay, ".overlay__title"], {opacity: 1, duration: 1, ease: "power1"}, "<")
    .fromTo(heroImgOne, {x: "-=40%"}, {x:0, opacity: 1, duration: 0.3, ease: "power2"})
    .fromTo(heroImgTwo, {x: "40%"}, {x:0, opacity: 1, duration: 0.3, ease: "power3"})
    .fromTo(heroImgFour, {x: "30%"}, {x:0, opacity: 1, duration: 0.3, ease: "power1"})
    .fromTo(heroImgFive, {x: "-=40%"}, {x:0, opacity: 1, duration: 0.3, ease: "power2"})
    .fromTo(heroTextOne, {y: "5%"}, {y: 0, opacity: 1, duration: 0.3, delay: 0.3, ease: "power1"})
    .fromTo(heroTextTwo, {y: "5%"}, {y: 0, opacity: 1, duration: 0.3, delay: 0.2, ease: "power1"})
    .fromTo(heroImgThree, {x: "30%"}, {x:0, opacity: 1, delay: 0.5, duration: 0.3, ease: "power1"})
    .fromTo(heroTextThree, {x: "30%"}, {x: 0, opacity: 1, duration: 0.3, ease: "power1"}, "<")
    .to(homeUnderlay, {scale:1, duration: 0.8, ease: "power3"})
    .fromTo(heroSocial, {y: "-=20%"}, {y: 0, delay: 0.2, opacity: 1, duration: 1, ease: "power3"})
    .to(heroWrapper, {className: "home__hero glow", ease: "power0"})


  }, [])

  return(
    <div id='home'>
      <div className='home__wrapper' ref={homeWrapperRef}>
        <div className='home__hero' ref={heroWrapperRef}>
          <div className='home__hero__title'>
            <h1 ref={heroTextOneRef}>HI. I'M </h1>
            <h1 ref={heroTextTwoRef}>ADRIAN</h1>
            <h2 ref={heroTextThreeRef}>& I CREATE WEBSITES</h2>
            <div className='home__hero__social' ref={heroSocialRef}>
              <img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} />
              <img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} />
              <img src={process.env.PUBLIC_URL + '/assets/icons/facebook.svg'} />
            </div>
            <div className='home__overlay overlay__title'>
              <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} />
            </div>
          </div>
          <div className='home__hero__image'>
            <div className='home__hero__image__box hero__image__one' ref={heroImgOneRef}>
              <img src={process.env.PUBLIC_URL + '/assets/photos/normal1.webp'} />
            </div>
            <div className='home__hero__image__box hero__image__two' ref={heroImgTwoRef}>
              <img src={process.env.PUBLIC_URL + '/assets/photos/normal2.webp'} />
            </div>
            <div className='home__hero__image__box hero__image__three' ref={heroImgThreeRef}>
              <img src={process.env.PUBLIC_URL + '/assets/photos/normal3.webp'} />
            </div>
            <div className='home__hero__image__box hero__image__four' ref={heroImgFourRef}>
              <img src={process.env.PUBLIC_URL + '/assets/photos/normal4.webp'} />
            </div>
            <div className='home__hero__image__box hero__image__five' ref={heroImgFiveRef}>
              <img src={process.env.PUBLIC_URL + '/assets/photos/normal5.webp'} />
            </div>
          </div>
          <div className='home__overlay' ref={homeOverlayRef}>
            <img src={process.env.PUBLIC_URL + '/assets/images/overlay.webp'} />
          </div>
        </div>
        <div className='home__underlay' ref={homeUnderlayRef}>
          <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} />
        </div>
      </div>
    </div>
  )
};

export default Home;
