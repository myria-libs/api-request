export declare enum ENVIRONMENT {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    LOCAL = "local"
}
export declare class EnvConfig {
    private int;
    private bool;
    get env(): string;
    get apiKey(): string;
    get developerId(): string;
    get leaderboardUrl(): string;
}
