import './Main.scss';
import Comments from '../Comments/Comments';
import VideoCard from '../VideoCard/VideoCard';
import Article from '../Article/Article';
import AddComment from '../AddComment/AddComment';
import axios from 'axios';
import { apiUrl } from '../../utils/config';
import { useEffect, useState } from 'react';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
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
      // console.log('videoList', data);
      setVideoList(data);
    };
    getVideoList();
  }, []);

  useEffect(() => {
    const getVideo = async () => {
      const { data } = await axios.get(`${apiUrl}/videos/${selectedVideoId}?api_key=apiKey`);
      console.log('video', data);
      setSelectedVideo(data);
    };

    getVideo();
  }, [selectedVideoId]);

  const list = videoList.filter((video) => video.id !== selectedVideoId);

  return (
    <>
      <Header />
      <Hero item={selectedVideo} />
      <section className="main">
        <div className="app__content">
          <Article item={selectedVideo} />
        </div>
        <AddComment />
        <Comments item={selectedVideo} />

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
