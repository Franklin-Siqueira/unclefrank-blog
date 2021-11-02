// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export class Post {
  public id!: { $oid: string };
  public postCategory!: { $oid: string };
  public authorId!: { $oid: string };
  public postTitle!: string;
  public postContents!: string;
  public createdAt!: { $date: string };
  public updatedAt!: { $date: string };
  public scheduled!: Boolean;
  public postedAtOrScheduleTo!: { $date: string };
}
/*

Fake data created @ mockaroo.com

{
  "postsFour": [
    {
      "id": {
        "$oid": "61807ca7fc13ae48360007ee"
      },
      "postCategory": {
        "$oid": "61807ca7fc13ae48360007ef"
      },
      "authorId": {
        "$oid": "61807ca7fc13ae48360007f0"
      },
      "postTitle": "tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis",
      "postContents": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      "scheduled": false,
      "postedAtOrScheduleTo": {
        "$date": "2021-02-23T07:11:51.000Z"
      },
      "createdAt": {
        "$date": "2021-10-23T07:57:41.000Z"
      },
      "updatedAt": {
        "$date": "2021-08-18T21:05:29.000Z"
      }
    },
    {...
*/
