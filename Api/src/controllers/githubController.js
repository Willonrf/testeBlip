const githubService = require("../services/githubService");

const getUserRepos = async (req, res, next) => {
  try {
    const { username, sort, direction, perPage, page } = req.body;

    if (!username) {
      return res.status(400).json({ error: "O campo 'username' é obrigatório." });
    }

    const params = {
      username: username,
      sort: sort || "created",
      direction: direction || "desc",
      perPage: perPage || 30,
      page: page || 1,
    };

    const repos = await githubService.fetchUserRepos(params);

    if (!repos.length) {
      return res.status(404).json({ message: "No repositories found for this user." });
    }

    res.status(200).json(repos);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserRepos };