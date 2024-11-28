const express = require("express");
const githubController = require("../controllers/githubController");

const router = express.Router();

router.post("/repos", githubController.getUserRepos);

module.exports = router;
