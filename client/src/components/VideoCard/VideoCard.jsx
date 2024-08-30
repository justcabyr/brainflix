import { Link } from 'react-router-dom';
import './VideoCard.scss';
function VideoCard({ video }) {
    const handleClick = () => {
      // Update the document title to the video's title
      document.title = video.title;
    };
  return (
    <Link className="video" to={`/videos/${video.id}`} onClick={handleClick}>
      <div className="video__card-list">
        <img className="video__thumbnail" src={video.image} alt={video.title} />
        <div className="video__details">
          <h3 className="video__title">{video.title}</h3>
          <span className="video__channel">{video.channel}</span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
