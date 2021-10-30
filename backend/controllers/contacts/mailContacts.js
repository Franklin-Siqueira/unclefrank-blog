// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const contacts = require("./../../models");
const { errorHandler } = require("../../helpers/dbErrorHandler");

/**
 * Lists ALL contacts
 *
 * @param {*} req
 * @param {*} res
 */
exports.mailContacts = (req, res) => {
  contacts.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    //
    // console.log(data);
    res.json(data);
  });
};
