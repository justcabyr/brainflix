import './Hero.scss';

function Hero({ item }) {
  const { video } = item;

  return (
    <div className='hero'>
        <video className='hero__video'  src={video} controls></video>
    </div>
  )
}

export default Hero;
