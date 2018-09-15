const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

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

//passport Middleware
app.use(passport.initialize({}));

// Passport Config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
app.use("/api/posts", posts);

//server static assets if in  production
if (process.env.NODE_ENV === "production") {
  //set the statuc folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));
