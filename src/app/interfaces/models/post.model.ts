// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export class Post {
  public id!: string;
  public postCategory!: string;
  public authorId!: string;
  public postTitle!: string;
  public postContents!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
  public scheduled!: Boolean;
  public postedAtOrScheduleTo!: Date;
}
/*
      "id": {
        "$oid": "617a7446fc13ae26d8000037"
      },
      "postCategory": {
        "$oid": "617a7446fc13ae26d8000038"
      },
      "authorId": {
        "$oid": "617a7446fc13ae26d8000039"
      },
      "postTitle": "Suspendisse accumsan tortor quis turpis.",
      "postContents": "Vestibulum ac est lacinia nisi venenatis tristique.",
      "createdAt": {
        "$date": "2021-03-31T22:03:08.000Z"
      },
      "updatedAt": {
        "$date": "2021-03-14T06:47:13.000Z"
      },
      "scheduled": false,
      "postedAtOrScheduleTo": {
        "$date": "2021-07-06T04:32:54.000Z"
      }
    },
 */
