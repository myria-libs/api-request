
import { waitTime } from "../../src/utils/wait-time";
import {Config, LeaderboardApi} from "@myria/api-request"
class LeaderboardBenchTestScript {
    private config: Config

    public leaderboardApiService: LeaderboardApi.LeaderboardApiService
    
    constructor( ) {
        this.config = Config.getInstance({
            developerId: '0xbedeee64ca182867d1f1bbab1e6340143e200e282d8610ce138eb80d82a0da',
            secretKey: '2bae1124a99465fcce77dbb663fbfcc60159c1ac56f96ff7baa13cde83336e47',
            debug: true,
            leaderboardApiUrl: "https://staging.myriaverse-leaderboard-api.nonprod-myria.com", 
            timeoutResponse : 9000
        });
        this.leaderboardApiService = new LeaderboardApi.LeaderboardApiService(this.config)
    }
}



(async () => {
    try {
        const leaderboardApi =  new LeaderboardBenchTestScript();
        const res = await leaderboardApi.leaderboardApiService.isAvailable()
        console.log(res)
        await waitTime(1000)
    } catch (e) {
        throw e
    }
})();