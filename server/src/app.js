import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import videos from './routes/videos.js';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   console.log('Request received:', req.method, req.url);
//   next(); // Passes control to the next middleware or route handler
// });

app.use('/videos', videos);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
