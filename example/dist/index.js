"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_request_1 = require("@myria/api-request");
const env_config_1 = require("./env.config");
class LeaderboardBenchTestScript {
    constructor() {
        this.env = new env_config_1.EnvConfig();
        const { developerApiKey, clientApiKey, adminApiKey, userAccessToken } =
            this.env;
        this.config = {
            developerApiKey,
            clientApiKey,
            adminApiKey,
            userAccessToken,
            debug: true,
            timeoutResponse: 9000,
        };
        this.resourceApiService = new api_request_1.API.ResourceApiService(
            this.config,
        );
    }
}
(async () => {
    try {
        const leaderboardApi = new LeaderboardBenchTestScript();
        const { leaderboardUrl, developerApiKey } = leaderboardApi.env;
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl);
        const res = await leaderboardApi.resourceApiService.get("");
        console.log(res === null || res === void 0 ? void 0 : res.data);
        await api_request_1.Util.waitTime(1000);
        const leaderboardId = 79;
        const url = `/v1/leaderboards/${leaderboardId}/scores`;
        console.log(`---> leaderboardUrl = ${leaderboardUrl}`);
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl + url);
        const res2 = await leaderboardApi.resourceApiService.post(
            url,
            {
                items: [
                    {
                        score: 19,
                        userId: "User_05",
                    },
                ],
            },
            {
                "x-api-developer-key": developerApiKey,
            },
        );
        console.log(
            JSON.stringify(
                res2 === null || res2 === void 0 ? void 0 : res2.data,
            ),
        );
        await api_request_1.Util.waitTime(1000);
    } catch (e) {
        console.log(JSON.stringify(e));
        throw e;
    }
})();
//# sourceMappingURL=index.js.map
