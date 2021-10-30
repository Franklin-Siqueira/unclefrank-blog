// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Contacts = require("./../../models");

/**
 * Update contact information
 *
 * @param {*} req
 * @param {*} res
 */
exports.updateContact = (req, res) => {
  Contacts.findOneAndUpdate(
    { _id: req._id },
    { $set: req.body },
    { new: true },
    (err, contact) => {
      if (err) {
        return res.status(400).json({ error: "Authorization required..." });
      }
      //
      // user.hashed_password = undefined;
      // user.salt = undefined;
      res.json(contact);
    }
  );
};
