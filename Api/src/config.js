const dotenv = require("dotenv");

dotenv.config();

if (!process.env.GITHUB_TOKEN) {
  console.warn("Warning: GITHUB_TOKEN is not set. You might hit rate limits on GitHub API.");
}

const config = {
  port: process.env.PORT || 3000,
  githubToken: process.env.GITHUB_TOKEN || null,
};

module.exports = config;