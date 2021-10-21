require('dotenv').config();

const express = require('express');

const app = express(); // create express app

const port = process.env.PORT;

const path = require('path');

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Ca marche youpi
// start express server on port 5000
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server front prod is running on http://localhost:${port}`);
});
