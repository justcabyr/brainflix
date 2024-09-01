import videoList from '../../data/video-details.json' assert { type: 'json' };
import { uuid } from 'uuidv4';
import fs from 'fs';

export const getVideos = () => {
  return videoList[1];
};

export const getVideoById = (id) => {
  return videoList.find((video) => video.id === id);
};

let newVideo = {
  id: uuid(),
  title: 'Entering the false mood',
  channel: 'Mohan Muruge',
  image: 'http://localhost:8080/images/Upload-video-preview.jpg',
  description:
    'Through rare footage, interviews, and historical accounts, this video paints a vivid picture of the indomitable human spirit, pushing the boundaries of endurance and scientific discovery in one of the most remote places on the planet. Brace yourself for an awe-inspiring journey into the heart of Antarctica, where exploration meets the untamed beauty of the frozen frontier',
  views: '0',
  likes: '0',
  duration: `${Math.floor(Math.random() * 20)}:${Math.floor(Math.random() * 60)}`,
  video: 'http://localhost:8080/videos/BrainStation_Sample_Video.mp4',
  timestamp: Date.now(),
  comments: [],
};

const path = './data/video-details.json';

export const addVideo = () => {
  // Read the JSON file
  const data = fs.readFileSync(path, 'utf8');
  const jsonData = JSON.parse(data);

  // Add the new video object to the array
  jsonData.push(newVideo);

  console.log('here');

  // Write the updated data back to the JSON file
  fs.writeFileSync(path, JSON.stringify(jsonData, null, 2), 'utf8');

  return { message: 'Video added' };
};
