import express from 'express';
import { getVideos, getVideoById, addVideo } from '../models/videos.js';

const router = express.Router();

router
  .route('/')
  .get((_req, res) => {
    res.json(getVideos());
  })
  .post((req, res) => {
    console.log(req.body);
    res.json(addVideo());
    // try {
    //   const player = addPlayer(req.body);
    //   res.status(201).json(player);
    // } catch (error) {
    //   res.status(500).send(`Couldn't add player: ${error}`);
    // }
  });

router.route('/:id').get((req, res) => {
  const player = getVideoById(req.params.id);
  res.json(player);
});

export default router;
