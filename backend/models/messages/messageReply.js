// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: contactreply.js
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const messagetReplySchema = new Schema(
  {
    message_from_app_form: {
      type: ObjectId,
      ref: "MessageFromAppForm",
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
    confirm_reply: {
      type: Number,
      index: true
    },
    sender_subject: {
      type: String,
      trim: true,
      // required: true,
      maxlength: 60,
    },
    sender_message: {
      type: String,
      trim: true,
      // required: true,
      maxlength: 500,
    },
  },
  { timestamps: true }
);
// Export Mongoose model 'contactreply' with 'contactReplySchema' and 'contactreply' COLLECTION in Mongo Atlas
module.exports = mongoose.model("MessageReply", messagetReplySchema, "messageReply");
