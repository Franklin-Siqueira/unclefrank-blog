// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

const Post = require("../../models/");

/**
 * @title listCategories
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.postPaginator = (req, res, next) => {
  //
  /**
   * Here ‘+’ is used to convert the string data to number as otherwise,
   * it will throw an error on assigning a number type variable to string value.
   * We are using an ItemService class to interact with the backend
   * as it is considered as a good practice to use a separate service class
   * to perform the interaction with the backend server.
   */
  const pageSize = +req.query.pageSize;
  const currentPage = +req.query.page;
  let fetchedPosts;
  const postQuery = Post.find();

  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  postQuery
    .then((posts) => {
      fetchedPosts = posts;
      Post.count().then((count) => {
        res.send({
          message: "Fetched Successfully",
          posts: fetchedPosts,
          maxCount: count,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Unable to fetch posts",
      });
    });
};
