// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: messageFromAppFormMD.js
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { ObjectId } = mongoose.Schema;
const message_from_app_form = new Schema(
  {
    confirm_email_read: {
      type: Number,
      index: true
    },
    confirm_email_reply: {
      type: Number,
      index: true
    },
    sender_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 60,
      index: true
    },
    sender_email: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50,
      index: true
    },
    sender_subject: {
      type: String,
      trim: true,
      // required: true,
      maxlength: 120,
    },
    sender_message: {
      type: String,
      trim: true,
      // required: true,
      maxlength: 500,
    },
    sender_referrer: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
// Export Mongoose model 'contact' with 'contactSchema' and 'contact' COLLECTION in Mongo Atlas
module.exports = mongoose.model("MessageFromAppForm", message_from_app_form, "message");
