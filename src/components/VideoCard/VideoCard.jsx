import './VideoCard.scss';
function VideoCard({ video, handleSelect }) {
  return (
    <div className="video">
      <div
        className="video__card-list"
        onClick={() => {
          handleSelect(video);
        }}
      >
        <img className="video__thumbnail" src={video.image} alt={video.title} />
        <div className="video__details">
          <h3 className="video__title">{video.title}</h3>
          <span className="video__channel">{video.channel}</span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
