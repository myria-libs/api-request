import { Config } from '../src/config';

describe('Config Singleton', () => {
    let cfg: Config;

    beforeEach(() => {
        cfg = Config.getInstance({
            developerId: 'xxx',
            secretKey: 'xxx',
            debug: true,
            leaderboardApiUrl: "http://localhost", 
            timeoutResponse : 900
        });
    });

    it('compare leaderboardApiUrl', () => {
        const result = cfg.getLeaderboardApiUrl();
        expect(result).toBe('http://localhost');
    });

});
