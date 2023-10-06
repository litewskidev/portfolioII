import './E404.scss';

const E404 = ({ data }) => {
  return(
    <div id='e404'>
      <div className='e404__wrapper'>
        <h1>E404</h1>
        <p>{data.e404?.info1} <span>{window.location.pathname}</span> {data.e404?.info2}</p>
        <a href='https://portfolio.litewskidev.usermd.net'>Go back</a>
      </div>
    </div>
  );
};

export default E404;
