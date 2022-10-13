const githubDeploymentPlugin = require(".");

jest.mock("./actions", () => ({
  createDeployment: jest.fn(),
  updateDeployment: jest.fn(),
}));

describe("githubDeploymentPlugin", () => {
  describe("onPreBuild", () => {
    it("throws without various environment variables defined", async () => {
      const { onPreBuild } = githubDeploymentPlugin();
      const options = {
        netlifyConfig: { build: { environment: {} } },
        utils: { build: {} },
      };
      try {
        await onPreBuild(options);
      } catch (err) {
        expect(err.message).toContain("Could not determine deployment URL");
      }
    });
  });
});
