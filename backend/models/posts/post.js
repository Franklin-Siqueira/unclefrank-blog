// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: posts.js
 *
 *  MongoDB model
 *
 * Dependency: mongoose
 */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
//
// Add:  comments and author references
//
const postSchema = new mongoose.Schema({
  post_author_id: {
     type: ObjectId,
     ref: "User"
  },
  post_category: {
    type: ObjectId,
    ref: "Category",
    required: false,
  },
  post_title: {
		type: String,
		trim: true,
		required: true,
		maxlength: 100
	},
  post_text: {
		type: String,
		trim: true,
		required: true,
		maxlength: 1000
	},
  post_shares: {
		type: Number,
    default: 0
	},
  post_likes: {
		type: Number,
    default: 0
	},
  publish_status: {
		type: Boolean,
		defaultValue: false, // Confirmed = true - Not confirmed = false
	}},
  { timestamps: true
	}
);
// const Post = mongoose.model("Post", postSchema);
module.exports = mongoose.model("Post", postSchema);
