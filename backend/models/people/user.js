// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 *
 * File Name: user.js
 * Type: MongoDB document model
 *
 *
 *
 * Requirements: mongoose | crypto | uuid
 *
 */

const mongoose = require("mongoose");
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
//
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      index: true
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      index: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxlength: 64,
      index: true
    },
    hashed_password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0
    },
    salt:  String
  },
  { timestamps: true }
);

/**
 * Create a virtual field for password (encryption)
 */
userSchema.virtual("password")
	// set and get
	.set(function(password){
		this._password = password;
		this.salt = uuidv4();
		this.hashed_password = this.encryptPassword(password);
		})
	.get(function(){
		return this._password;
    });

/**
 * Methods
 */
userSchema.methods = {
  // Authentication method
  authenticate: function(plainText){
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  // EncryptPassword method
  encryptPassword: function(password){
    if(!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
      } catch(err){
        return "";
        }
      }
    };

// TRY IT NEXT...
// const User = mongoose.model("user", userSchema, "user");
// module.exports = User;

// Export Mongo model 'user' with 'userSchema' and 'user' COLLECTION in Mongo Atlas
module.exports = mongoose.model("User", userSchema, "user");


