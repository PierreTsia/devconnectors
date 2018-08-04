const express = require("express");

const router = express.Router();

//@route GET to api/profiles/test
//@description Tests profiles route
//@ access Public
router.get("/test", (req, res) => res.json({ message: "Profiles works" }));

module.exports = router;
