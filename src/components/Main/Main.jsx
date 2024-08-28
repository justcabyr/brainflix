import './Main.scss';
import CommentCard from '../CommentCard/CommentCard';
import VideoCard from '../VideoCard/VideoCard';
import Article from '../Article/Article';
import AddComment from '../AddComment/AddComment';
import axios from 'axios';
import { apiUrl } from '../../utils/config';
import { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import { useParams } from 'react-router-dom';

function Main() {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoList, setVideoList] = useState([]);

  let currentVideoId, selectedVideoId;
  if (videoList.length > 0) {
    currentVideoId = videoList[0].id || null;
  }
  selectedVideoId = id ?? currentVideoId;

  useEffect(() => {
    const getVideoList = async () => {
      const { data } = await axios.get(`${apiUrl}/videos?api_key=apiKey`);
      setVideoList(data);
    };
    getVideoList();
  }, []);

  useEffect(() => {
    const getVideo = async () => {
      const { data } = await axios.get(`${apiUrl}/videos/${selectedVideoId}?api_key=apiKey`);
      setSelectedVideo(data);
      document.title = data.title
    };

    getVideo();
  }, [selectedVideoId]);

  const list = videoList.filter((video) => video.id !== selectedVideoId);

  return (
    <>
      <Hero item={selectedVideo} />
      <section className="main">
        <div className="app__content">
          <Article item={selectedVideo} />
          <AddComment />
          {selectedVideo.comments?.map((comment) => (
            <CommentCard key={comment.id} comment={comment}/>
          ))}
        </div>

        <nav className="nav">
          <span className="nav__title">NEXT VIDEOS</span>
          <ul className="nav__list">
            {list.map((video) => (
              <VideoCard key={video.id} video={video} handleSelect={setSelectedVideo} />
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default Main;
