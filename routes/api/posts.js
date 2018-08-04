const express = require("express");

const router = express.Router();

//@route GET to api/posts/test
//@description Tests post route
//@ access Public
router.get("/test", (req, res) => res.json({ message: "Posts works" }));

module.exports = router;
