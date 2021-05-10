'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.status(200).send('Welcome, Jessi');
});

app.listen(PORT, () => console.log('Up on', PORT));
