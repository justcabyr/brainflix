import './Hero.scss';

function Hero({ item }) {
  const { video } = item;
  const videoUrl = `${video}?api_key=apiKey`;

  return (
    <div className="hero">
      <video className="hero__video" src={videoUrl} controls></video>
    </div>
  );
}

export default Hero;
