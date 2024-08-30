export const getVideos = () => {
    console.log('get videos')
  return [{ name: 'video 1' }, { name: 'video 2' }];
};

export const getVideoById = (id) => {
  console.log('id', id);
  return { name: `video 1 ${id}` };
};
