const axios = require("axios");
const config = require("../config.js");
const fetchUserRepos = async (params) => {
  const GITHUB_API_URL = `https://api.github.com/users/${params.username}/repos?sort=${params.sort}&direction=${params.direction}&per_page=${params.perPage}`;
  console.log(`GITHUB_API_URL: ${GITHUB_API_URL}`);
  const GITHUB_TOKEN = config.githubToken;
  console.log(`GITHUB_TOKEN: ${GITHUB_TOKEN}`);
  
  try {
    const userResponse = await axios.get(`https://api.github.com/users/${params.username}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
      },
    });
    const avatarUrl = userResponse.data.avatar_url;
    console.log(`Avatar URL: ${avatarUrl}`);
    const reposResponse = await axios.get(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
      },
    });
    return reposResponse.data.map((repo) => ({
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      language: repo.language,
      ownerAvatarUrl: avatarUrl,
    }));
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch repositories");
  }
};

module.exports = { fetchUserRepos };