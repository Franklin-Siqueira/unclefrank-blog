// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const formidable = require("formidable");
const fs = require("fs");
const Post = require("../model/Post");
const { errorHandler } = require("../../helpers/dbErrorHandler");

/**
 *
 * @param {*} req
 * @param {*} res
 */
exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    //
    if (err) {
      return res.status(400).json({ error: "Couldn't upload image..." });
    }
    // check for all fields
    const {
      name, description, cost, price, category, quantity, shipping,
    } = fields;
    //
    if (!name ||
      !description ||
      !cost ||
      !price ||
      !category ||
      !quantity ||
      !shipping) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Instantiate a New Post
    let post = new Post(fields);
    // 1kb = 1000 and 1mb = 1000000
    if (files.image) {
      // console.log("FILES PHOTO: ", files.photo);
      if (files.image.size > 1000000) {
        return res
          .status(400)
          .json({ error: "Image should be less than 1mb in size" });
      }
      post.image.data = fs.readFileSync(files.image.path);
      post.image.contentType = files.image.type;
    }
    // Method for Saving New Product Object Instance
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({ error: errorHandler(err) });
      }
      // Success!!!
      res.json(result);
    });
  });
};
