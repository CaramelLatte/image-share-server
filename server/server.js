const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "/../build/");
const port = process.env.PORT || 5000;
const logger = require("morgan");
let bp = require("body-parser");
const webpack = require('webpack')

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(express.static(publicPath));

const PostsRouter = require("./routes/PostsRouter")
app.use("/posts", PostsRouter)
app.use(express.static(path.join(__dirname, "/../build/")))

const AccountRouter = require("./routes/AccountRouter");
app.use("/accounts", AccountRouter);
app.use(express.static(path.join(__dirname, "/../build/")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/", "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
