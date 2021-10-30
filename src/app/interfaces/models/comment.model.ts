// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

export class Comment {
  public id?: string;
  public userId?: string;
  public referredId?: string;     // Origin - may be orignal post or comment
  public commentContents?: string;
  public commentTimeStamp?: Date;
}
/**
  {
      "id": "UFBIUWFBIRWFIWbcb",
      "userId": "befiwufbwfbscsk",
      "referredId": "befiwufbwfbscsk",
      "commentContents": "Este é um título para postagem! Este é um título para postagem! Este é um título para postagem! Este é um título para postagem!"
      "timeStamp": "",
    },
 */
