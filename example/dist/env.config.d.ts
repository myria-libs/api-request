export declare enum ENVIRONMENT {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    LOCAL = 'local',
}
export declare class EnvConfig {
    private int;
    private bool;
    get env(): string;
    get clientApiKey(): string;
    get developerApiKey(): string;
    get adminApiKey(): string;
    get userAccessToken(): string;
    get leaderboardUrl(): string;
}
