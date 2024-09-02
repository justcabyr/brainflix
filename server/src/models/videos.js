import videoList from '../../data/video-details.json' assert { type: 'json' };
import { uuid } from 'uuidv4';
import fs from 'fs';

export const getVideos = () => {
  return videoList;
};

export const getVideoById = (id) => {
  return videoList.find((video) => video.id === id);
};

const path = './data/video-details.json';

export const addVideo = (newVideo) => {
  // Read the JSON file
  const data = fs.readFileSync(path, 'utf8');
  const jsonData = JSON.parse(data);

  // Add the new video object to the array
  newVideo.id = uuid();
  newVideo.image = 'http://localhost:8088/images/sample-image.jpg';
  newVideo.channel = 'Mohan Muruge';
  newVideo.views = '0';
  newVideo.likes = '0';
  newVideo.duration = `${Math.floor(Math.random() * 20)}:${Math.floor(Math.random() * 60)}`;
  newVideo.video = 'http://localhost:8088/videos/brainstation-sample-video.mp4';
  newVideo.timestamp = Date.now();
  newVideo.comments = [];

  jsonData.push(newVideo);

  // Write the updated data back to the JSON file
  fs.writeFileSync(path, JSON.stringify(jsonData, null, 2), 'utf8');

  return { message: 'Video added' };
};
