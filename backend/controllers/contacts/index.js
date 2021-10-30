// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: mailcontacts.js
 *
 * Remarks: Send e-mail to a destination using Nodemailer,
 *          then save data to DB
 */

const { mailContacts } = require("./mailContacts");
const { updateContact } = require("./updateContact");
//
module.exports = { mailContacts, updateContact }
