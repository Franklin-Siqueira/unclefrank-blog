// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// const router = express.Router();
// used for authorization purposes...
// const = require("jsonwebtoken");
// const = require("express-jwt");
//
// const = require("../models/user");
//
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "Signed Out Successfully!" });
};
