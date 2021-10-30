// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

/**
 * Send e-mail messages using mailJet
 */

const mailjet = require("node-mailjet").connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_API_PWD
);
const request = mailjet.post("send", { version: process.env.MAILJET_API_VER }).request({
  Messages: [
    {
      From: {
        Email: process.env.MAILJET_API_FROM,
        Name: process.env.MAILJET_API_NAME,
      },
      To: [
        {
          Email: "franklin.cs@outlook.com",
          Name: "Franklin",
        },
      ],
      Subject: "Greetings from Mailjet.",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: "AppGettingStartedTest",
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
