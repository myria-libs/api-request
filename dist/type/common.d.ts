/**
 * Type module.
 * @memberof Type
 */
/**
 * Centralize configuration required variables for our sdk
 */
export interface ConfigOptions {
    developerApiKey: string;
    clientApiKey: string;
    adminApiKey: string;
    userAccessToken: string;
    debug: boolean;
    timeoutResponse: number;
}
