import { Link } from 'react-router-dom';
import './VideoCard.scss';
function VideoCard({ video }) {
  return (
    <Link className="video" to={`/videos/${video.id}`}>
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
