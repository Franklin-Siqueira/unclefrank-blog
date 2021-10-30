// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export class MessageFromAppFormMD {
  // public id!: number;
  public confirm_email!: number;
  public confirm_reply!: number;
  public sender_name!: string;
  public sender_email!: string;
  public sender_subject!: string;
  public sender_message!: string;
  public sender_referrer!: string;
  // public createdAt!: Date;
  // public updatedAt!: Date;
}
// confirm_email_read: {
//   type: Number,
//   index: true
// },
// confirm_email_reply: {
//   type: Number,
//   index: true
// },
// sender_name: {
//   type: String,
//   trim: true,
//   required: true,
//   maxlength: 30,
//   index: true
// },
// sender_email: {
//   type: String,
//   trim: true,
//   required: true,
//   maxlength: 50,
//   index: true
// },
// sender_subject: {
//   type: String,
//   trim: true,
//   // required: true,
//   maxlength: 60,
// },
// sender_message: {
//   type: String,
//   trim: true,
//   // required: true,
//   maxlength: 500,
// },
// sender_referrer: {
//   type: String,
//   trim: true,
// },
// },
// { timestamps: true }
/*

  Fro Mongo Atlas

*/
// [
//   {
//     _id: { $oid: '617a42b404863f7b03616388' },
//     sender_name: 'Franklin Carrilho Siqueira (17)',
//     sender_email: 'franklinsiqueira@yahoo.com',
//     sender_subject:
//       "Franklin Carrilho Siqueira (17)'s message from the UncleFrank's APP",
//     sender_message:
//       'Franklin Carrilho Siqueira (17) Franklin Carrilho Siqueira (17) Franklin Carrilho Siqueira (17)',
//     sender_referrer: '',
//     updatedAt: { $date: { $numberLong: '1635402420028' } },
//     createdAt: { $date: { $numberLong: '1635402420028' } },
//     confirm_email_read: { $numberInt: '0' },
//     confirm_email_reply: { $numberInt: '0' },
//     __v: { $numberInt: '0' },
//   },
// ];
// [
//   {
//     _id: { $oid: '617ae06afca5990ca010a00e' },
//     sender_name: 'Franklin Carrilho Siqueira 19',
//     sender_email: 'franklinsiqueira@yahoo.com',
//     sender_subject:
//       "Franklin Carrilho Siqueira 19's message from the UncleFrank's APP",
//     sender_message:
//       'Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19 Franklin Carrilho Siqueira 19',
//     sender_referrer: '',
//     confirm_email_read: { $numberInt: '0' },
//     confirm_email_reply: { $numberInt: '0' },
//     createdAt: { $date: { $numberLong: '1635442795527' } },
//     updatedAt: { $date: { $numberLong: '1635442795527' } },
//     __v: { $numberInt: '0' },
//   },
// ];
