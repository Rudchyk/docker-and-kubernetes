const express = require('express');
const redis = require('redis');

const app = express();
const PORT = 8081;
const VISITS_KEY = 'visits';

(async () => {
  const client = redis.createClient({
    url: 'redis://redis-server:6379',
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  await client.set(VISITS_KEY, 0);

  app.get('/', async (req, res) => {
    const value = await client.get(VISITS_KEY);
    await client.set(VISITS_KEY, parseInt(value) + 1);
    res.send(`Number of visits is ${value}`);
  });

  app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}/`);
  });
})();
