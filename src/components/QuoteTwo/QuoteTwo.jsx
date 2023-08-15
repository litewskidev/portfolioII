import './QuoteTwo.scss';

const QuoteTwo = () => {
  return(
    <section id='quote-two' className='quote__two__wrapper'>
      <img src={process.env.PUBLIC_URL + '/assets/images/grid.webp'} alt='grid background'/>
    </section>
  )
};

export default QuoteTwo;
