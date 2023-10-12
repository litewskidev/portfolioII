import './About.scss';

const About = ({ data }) => {
  return(
    <section id='about'>
      <div className='about__wrapper'>
        <div className='about__title'>
          <h1>者</h1>
        </div>
        <div className='about__info__container'>
          <div className='about__info'>
            <p>{data.about?.one}</p>
            <p>{data.about?.two}</p>
          </div>
        </div>
        <div className='about__image'>
          <div className='about__image__inner'>
            <img src={process.env.PUBLIC_URL + '/assets/images/persona1920.webp'} alt='persona art'/>
            <p>すべてを行うのを待って何もしないよりは、何かをした方が良いのです。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
