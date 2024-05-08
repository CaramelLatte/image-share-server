const express = require("express");
const PostsRouter = express.Router();
// const dotenv = require("dotenv");
// dotenv.config();

PostsRouter.route("/:id").get((req, res) => {
    res.status(200).json(req.params.id)
});


module.exports = PostsRouter;