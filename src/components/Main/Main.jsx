import './Main.scss';
import Comments from '../Comments/Comments';
import VideoCard from '../VideoCard/VideoCard';
import Article from '../Article/Article';
import jsonData from '../../assets/data/video-details.json';
import { useState } from 'react';

function Main() {
  const [selectedVideo, setSelectedVideo] = useState(jsonData[0]);
  
  const list = jsonData.filter((p) => p.id !== selectedVideo.id);
  
  return (
    <section>
      <h1 className="app__title">Videos</h1>
      <div className="app__content">
        <nav className="nav">
          <ul className="nav__list">
            {list.map((video) => (
              <VideoCard key={video.id} video={video} handleSelect={setSelectedVideo} />
            ))}
          </ul>
        </nav>
        <Article item={selectedVideo} />
      </div>

      <Comments />
    </section>
  );
}

export default Main;
