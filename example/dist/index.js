"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wait_time_1 = require("./utils/wait-time");
const api_request_1 = require("@myria/api-request");
const env_config_1 = require("./env.config");
class LeaderboardBenchTestScript {
    constructor() {
        this.env = new env_config_1.EnvConfig();
        this.config = {
            developerId: this.env.developerId,
            secretKey: this.env.apiKey,
            debug: true,
            timeoutResponse: 9000
        };
        this.resourceApiService = new api_request_1.API.ResourceApiService(this.config);
    }
}
(async () => {
    try {
        const leaderboardApi = new LeaderboardBenchTestScript();
        const { leaderboardUrl, apiKey } = leaderboardApi.env;
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl);
        const res = await leaderboardApi.resourceApiService.get("");
        console.log(res === null || res === void 0 ? void 0 : res.data);
        await (0, wait_time_1.waitTime)(1000);
        const leaderboardId = 44;
        const url = `/v1/leaderboards/${leaderboardId}/scores`;
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl + url);
        const res2 = await leaderboardApi.resourceApiService.post(url, {
            items: [{
                    "score": 19,
                    "userId": "User_05",
                }]
        }, {
            "x-api-developer-key": apiKey
        });
        console.log(JSON.stringify(res2 === null || res2 === void 0 ? void 0 : res2.data));
        await (0, wait_time_1.waitTime)(1000);
    }
    catch (e) {
        console.log(JSON.stringify(e));
        throw e;
    }
})();
//# sourceMappingURL=index.js.map