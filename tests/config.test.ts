import * as CommonType from "../src/type";
describe("Config Singleton", () => {
    let cfg: CommonType.ConfigOptions;

    beforeEach(() => {
        cfg = {
            developerApiKey: "xxx",
            adminApiKey: "xxx",
            clientApiKey: "xxx",
            userAccessToken: "xxx",
            debug: true,
            timeoutResponse: 900,
        };
    });

    it("compare leaderboardApiUrl", () => {
        const result = cfg.developerApiKey;
        expect(result).toBe("xxx");
    });
});
