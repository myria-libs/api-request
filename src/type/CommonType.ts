/**
 * Type module.
 * @memberof Type
 */
/**
 * Centralize configuration required variables for our sdk
 */
export interface ConfigOptions {
    leaderboardApiUrl: string;
    developerId: string;
    secretKey: string;
    debug: boolean;
    timeoutResponse: number;
}
