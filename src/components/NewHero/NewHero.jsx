import './NewHero.scss';

const NewHero = () => {
  return(
    <div className='new__hero__wrapper'>
      <div className='new__hero__container'>
        <div className='new__hero__title'>
          <p>FRONT-END DEVELOPER</p>
        </div>
        <div className='new__hero__image'>
          <div className='new__hero__image__pattern'></div>
          <div className='new__hero__image__img'>
            <img src={process.env.PUBLIC_URL + '/assets/photos/face.webp'} alt='face' />
            <div className='new__hero__pattern__two'></div>
          </div>
        </div>
        <div className='new__hero__info'>
          <div className='new__hero__info__name'>
            <p>ADRIAN</p>
            <p>LITEWSKI</p>
          </div>
          <div className='new__hero__info__social'>
            <img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt='linked in icon' />
            <img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt='github icon' />
            <img src={process.env.PUBLIC_URL + '/assets/icons/facebook.svg'} alt='facebook icon' />
          </div>
        </div>
      </div>
      <div className='new__hero__pattern'></div>
    </div>
  )
};

export default NewHero;
