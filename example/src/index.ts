
import { waitTime } from "../../src/utils/wait-time";
import {Config, LeaderboardApi} from "@myria/api-request"
import { EnvConfig } from "./env.config";
class LeaderboardBenchTestScript {
    public config: Config
    public env: EnvConfig

    public resourceApiService: LeaderboardApi.ResourceApiService
    
    constructor( ) {
        this.env = new EnvConfig()
        this.config = Config.getInstance({
            developerId:  this.env.developerId,
            secretKey: this.env.apiKey,
            debug: true,
            timeoutResponse : 9000
        });
        this.resourceApiService = new LeaderboardApi.ResourceApiService(this.config)

    }
}



(async () => {
    try {
        const leaderboardApi =  new LeaderboardBenchTestScript();
        const {leaderboardUrl} = leaderboardApi.env
        leaderboardApi.resourceApiService.setUrl(leaderboardUrl)
        const res = await leaderboardApi.resourceApiService.get("")
        console.log(res?.data)
        await waitTime(1000)
    } catch (e) {
        throw e
    }
})();