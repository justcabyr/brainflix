import express from 'express';
import { getVideos, getVideoById } from '../models/videos.js';

const router = express.Router();

router.route('/').get((_req, res) => {
  console.log('here', _req.method);
    res.json(getVideos());
});

router.route('/:id').get((req, res) => {
  const player = getVideoById(req.params.id);
  res.json(player);
});

export default router;
