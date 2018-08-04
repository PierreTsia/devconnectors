const express = require("express");

//@route GET to api/users/test
//@description Tests users route
//@ access Public
const router = express.Router();

router.get("/test", (req, res) => res.json({ message: "Users works" }));

module.exports = router;
