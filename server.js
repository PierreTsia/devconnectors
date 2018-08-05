const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profiles = require("./routes/api/profiles");
const posts = require("./routes/api/posts");

const app = express();

//BodyParser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(bodyParser.json());

//DB config

const db = require("./config/keys").mongoURI;

//Mongoose connect

mongoose
  .connect(
    db,
    { useNewUrlParser: true },
  )
  .then(() => console.log("MongoDB connected"))
  .catch(error => console.log(error));

//Routes

app.get("/", (req, res) => res.send("Hello"));

app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
