// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 * json-server.index.js
 *
 * Key Feature:
 * Remark - For DEVELOPMENT PURPOSES ONLY!
 * Run server with multiple MOCK DATA JSON files.
 *
 * From:
 * https://github.com/mabihan/json-server-multiple-files/blob/master/json-server.index.js
 *
 */

require("dotenv").config();
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
//
const jsonServer = require("json-server");
//
const express = require('express');
const cors = require('cors');

/**
 *
 * remote server config
 *
 * rServer
 * rPort
 * rRouter
 */

const RSERVER_API = require('./routes/api');
const rServer =  express();
const rPORT = process.env.RSERVER_PORT;

rServer.use(cors());
rServer.use(express.json({limit: "50mb"}));
// Create link to Angular build directory (from Heroku...)
const distDir = __dirname + "/dist/";
rServer.use(express.static(distDir));
//
rServer.use('/api', RSERVER_API);
// app.use(express.static(__dirname + '/aocar/src'));
//
// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });
rServer.get('/*', (req, res) => {
  // res.sendFile(path.join(__dirname + '/dist/unclefranklin-blog/index.html'));
  res.sendFile(path.resolve('./test.html'));
});
// app.listen(PORT, () => {
//   console.log('Server is running on port ' + process.env.PORT || PORT);
// });
rServer.listen(rPORT, () => {
  console.log('\nEXPRESS Server (rServer) is running on port ' + rPORT);
});

/**
 *
 * json-server config (DEV)
 *
 * jServer
 * jPort
 * jRouter
 */

const jServer = jsonServer.create();
const jPort = process.env.JSONSERVER_PORT;

let endpoints = [];
let obj = {};
let files = fs.readdirSync(path.resolve(__dirname, "./mockDB/"));

console.log("\nIndexing JSON files (jServer)...\n");

files.forEach((file) => {
  if (file.indexOf(".json") > -1) {
    jsonObject = JSON.parse(fs.readFileSync("./mockDB/" + file));

    if (isJson(fs.readFileSync("./mockDB/" + file))) {
      Object.keys(jsonObject).forEach(function (idx) {
        endpoints.push(idx);
      });
      console.log("🗒    JSON file loaded : " + file);
      _.extend(obj, require(path.resolve(__dirname, "./mockDB/", file)));
    }
  }
});
// Routing to jRouter
const objOrdered = {};
Object.keys(obj)
  .sort()
  .forEach(function (key) {
    objOrdered[key] = obj[key];
  });
const jRouter = jsonServer.router(objOrdered);
// Connecting the dots
jServer.use(jsonServer.defaults());
jServer.use(jRouter);
jServer.listen(jPort, () => {
  console.log("\nJSON Server (jServer) is running at http://localhost:" + jPort + "\n");
  endpoints.sort();
  for (var i = 0; i < endpoints.length; i++) {
    console.info(
      "🥁    Endpoint : http://localhost:" + jPort + "/" + endpoints[i]
    );
  }
  console.log("\nIt's up to you now... Everything's on ports: " + process.env.JSONSERVER_PORT + " | " + rPORT + "!\n");
});

/**
 *
 * Converts to JSON
 *
 * @param {*} str
 * @returns
 */
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
