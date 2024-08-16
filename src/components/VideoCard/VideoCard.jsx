import './VideoCard.scss';
function VideoCard({ video, handleSelect }) {
    console.log('video', video);
  return (
    <li
      className="video__card-list"
      onClick={() => {
        handleSelect(video);
      }}
    >
      <img className="video__thumbnail" src={video.image} alt={video.title} />
      {video.title}
    </li>
  );
}

export default VideoCard;
