const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  return res.json({
    message: 'Hellow World',
  });
});

app.listen(8082, () => {
  console.log('App listening on port 8082!');
});
