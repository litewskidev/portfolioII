import './Footer.scss';

const Footer = () => {
  return(
    <footer id='footer'>
      <a href='https://github.com/litewskidev' target="_blank" rel='noreferrer'>
        <div className='footer__wrapper'>
          <p>&#169;</p>
          <p>Adrian Litewski</p>
        </div>
      </a>
    </footer>
  );
};

export default Footer;
