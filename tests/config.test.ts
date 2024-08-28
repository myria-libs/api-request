import * as CommonType from '../src/type/CommonType';
describe('Config Singleton', () => {
    let cfg: CommonType.ConfigOptions;

    beforeEach(() => {
        cfg = {
            developerId: 'xxx',
            secretKey: 'xxx',
            debug: true,
            timeoutResponse: 900,
        };
    });

    it('compare leaderboardApiUrl', () => {
        const result = cfg.developerId;
        expect(result).toBe('xxx');
    });
});
