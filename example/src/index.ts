
import { waitTime } from "./utils/wait-time";
import {Type, API} from "@myria/api-request"
import { EnvConfig } from "./env.config";
import { UserLeaderboardScores } from "./types";
class LeaderboardBenchTestScript {
    public config: Type.ConfigOptions
    public env: EnvConfig

    public resourceApiService: API.ResourceApiService
    
    constructor( ) {
        this.env = new EnvConfig()
        this.config =  <Type.ConfigOptions>{
            developerId:  this.env.developerId,
            secretKey: this.env.apiKey,
            debug: true,
            timeoutResponse : 9000
        };
        this.resourceApiService = new API.ResourceApiService(this.config)

    }
}



(async () => {
    try {
        const leaderboardApi =  new LeaderboardBenchTestScript();
        const {leaderboardUrl,apiKey} = leaderboardApi.env
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl)
        const res = await leaderboardApi.resourceApiService.get("")
        console.log(res?.data)
        await waitTime(1000)


        // leaderboard score
        const leaderboardId = 44
        const url = `/v1/leaderboards/${leaderboardId}/scores`
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl + url)
        const res2 = await leaderboardApi.resourceApiService.post(url, <UserLeaderboardScores>{
            items: [{
                "score": 19,
                "userId": "User_05",
              }]
        }, {
            "x-api-developer-key" : apiKey
        })
        console.log(JSON.stringify(res2?.data))
        await waitTime(1000)
    } catch (e) {
        console.log(JSON.stringify(e))
        throw e
    }
})();