// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: events.js
 *
 * image - Event image/illustration URL
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const eventSchema = new Schema(
  {
    _id: Number,
    user: {
      type: ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
      index: true
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    image: String,
    date: Date,
  },
  { timestamps: true }
);
// Export Mongoose model 'event' with 'eventSchema' and 'event' COLLECTION in Mongo Atlas
module.exports = mongoose.model("Event", eventSchema, "event");
