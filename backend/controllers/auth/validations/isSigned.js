// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const expressJwt = require("express-jwt");

/**
 *
 * isSigned
 */
exports.isSigned = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["RS256"],
  userProperty: "auth",
});
