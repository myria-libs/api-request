import { Type, API, Util } from '@myria/api-request';
import { EnvConfig } from './env.config';
import { UserLeaderboardScores } from './types';
class LeaderboardBenchTestScript {
    public config: Type.ConfigOptions;
    public env: EnvConfig;

    public resourceApiService: API.ResourceApiService;

    constructor() {
        this.env = new EnvConfig();
        const { developerApiKey, clientApiKey, adminApiKey, userAccessToken } =
            this.env;
        this.config = <Type.ConfigOptions>{
            developerApiKey,
            clientApiKey,
            adminApiKey,
            userAccessToken,
            debug: true,
            timeoutResponse: 9000,
        };
        this.resourceApiService = new API.ResourceApiService(this.config);
    }
}

(async () => {
    try {
        const leaderboardApi = new LeaderboardBenchTestScript();
        const { leaderboardUrl, developerApiKey } = leaderboardApi.env;
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl);
        const res = await leaderboardApi.resourceApiService.get('');
        console.log(res?.data);
        await Util.waitTime(1000);

        // leaderboard score
        const leaderboardId = 79;
        const url = `/v1/leaderboards/${leaderboardId}/scores`;
        console.log(`---> leaderboardUrl = ${leaderboardUrl}`);

        leaderboardApi.resourceApiService.setUrl(leaderboardUrl + url);
        const res2 = await leaderboardApi.resourceApiService.post(
            url,
            <UserLeaderboardScores>{
                items: [
                    {
                        score: 19,
                        userId: 'User_05',
                    },
                ],
            },
            {
                'x-api-developer-key': developerApiKey,
            },
        );
        console.log(JSON.stringify(res2?.data));
        await Util.waitTime(1000);
    } catch (e) {
        console.log(JSON.stringify(e));
        throw e;
    }
})();
