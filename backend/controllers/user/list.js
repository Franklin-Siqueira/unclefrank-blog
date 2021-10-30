// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

//
exports.list = (req, res) => {
  User.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    //
    console.log(data);
    res.json(data);
  });
};
