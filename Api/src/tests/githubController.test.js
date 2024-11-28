const githubService = require("../services/githubService");
const githubController = require("../controllers/githubController");

jest.mock("../services/githubService");

describe("GitHub Controller", () => {
  it("should return repositories when user exists", async () => {
    const req = { params: { username: "Willonrf" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    const mockRepos = [
      { id: 1, name: "Repo1", url: "http://repo1.com" },
    ];

    githubService.fetchUserRepos.mockResolvedValue(mockRepos);

    await githubController.getUserRepos(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockRepos);
  });

  it("should return 404 if user not found", async () => {
    const req = { params: { username: "unknown" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    githubService.fetchUserRepos.mockImplementation(() => {
      throw new Error("User not found");
    });

    await githubController.getUserRepos(req, res, next);

    expect(next).toHaveBeenCalledWith(new Error("User not found"));
  });
});