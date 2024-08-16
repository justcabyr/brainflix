import './Hero.scss';

function Hero({ item }) {
  const { video, title } = item;
  const videoUrl = `${video}?api_key=apiKey`;

  return (
    <div className="hero">
      <p>The title states {title}</p>
      <video className="hero__video" src={videoUrl} controls></video>
    </div>
  );
}

export default Hero;
