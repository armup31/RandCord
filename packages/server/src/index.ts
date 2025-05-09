// packages/server/src/index.ts
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is alive!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});