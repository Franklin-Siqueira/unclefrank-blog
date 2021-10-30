// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const jwt = require("jsonwebtoken");
const user = require("../../models/people/user");

/**
 *
 * signin
 *
 * @param {*} req
 * @param {*} res
 */
exports.signin = (req, res) => {
  // Find user by e-mail
  const { email, password } = req.body;
  user.findOne({ email }, (err, user) => {
    if (!user) {
      // User NOT found
      return res.status(400).json({
        error: "E-mail not found! Please, try signing up...",
      });
    } else if (err) {
      // Unknown error
      return res.status(400).json({
        error: "An error occurred! Please, try again later...",
      });
    } else if (!user.authenticate(password)) {
      // User found! checking password...
      // Checks e-mail/password with authenticate method in the user model
      // SEE: models/user.js
      return res.status(400).json({
        error: "module: ./server/controllers/auth.js -> E-mail and password don't match!",
      });
    }
    // if (!user.authenticate(password)){
    // 	return res.status(400).json({
    // 		error: "module: ./server/controllers/auth.js -> E-mail and password don't match!"
    // 	});
    // }
    // Generate a connected token with user id and secret
    // jwt.sign({payload},{secretOrPrivateKey},[{options}, {CALLBACK}])...
    // Also: checks authentication:
    // jwt.verify(token,secretOrPublicKey,[{options}, {CALLBACK}])...
    //
    const persistToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //
    // Persist token as "t" (randomly created name) in cookie with expiration date
    //
    res.cookie("t", persistToken, { expire: new Date() + 9999 });
    // res.cookie("t", persistToken( user._id ), { expire: new Date() + 9999 });

    // Return response with user and token to frontend client
    const { _id, name, email, role } = user;
    console.log("E-mail and password has a match!");
    return res.json({ persistToken, user: { _id, name, email, role } });
  });
};
// Check if it's useful
// const persistToken = (userId) => {
//   return jwt.sign({ _id: userId}, process.env.JWT_SECRET);
// }
