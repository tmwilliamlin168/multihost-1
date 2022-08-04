import dotenv from 'dotenv';
import express from 'express';
import vhost from 'vhost';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(
  vhost(
    `*.${process.env.HOST}`,
    express().get('/', (req, res) => res.send(`Your host is ${req.hostname}`)),
  ),
);
app.get('/', (req, res) => res.send('Root / default'));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
