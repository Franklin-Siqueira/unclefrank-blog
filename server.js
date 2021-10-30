// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: server.js
 *
 * Servers initialization file
 *
*/

const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser'); // DEPRECATED
const cors = require('cors');
require('dotenv').config();
//
// const PORT = process.env.PORT || 8080;
const api = require('./server/routes/api');
//
const app = express();
//
app.use(cors());
app.use(express.json({limit: "50mb"}));
//
// Create link to Angular build directory (from Heroku...)
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
//
app.use('/api', api);
// app.use(express.static(__dirname + '/unclefranklin-blog/src'));
//
// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/unclefranklin-blog/index.html'));
});
// app.listen(PORT, () => {
//   console.log('Server is running on port ' + process.env.PORT || PORT);
// });
app.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
// On the terminal: run -> node server
