/**
 * Config module.
 * @module Config
 */
import { ConfigOptions } from "../type";
/**
 * Centralize your configuration in Config class
 * @class
 */
export declare class Config {
    private static instance;
    private leaderboardApiUrl;
    private developerId;
    private secretKey;
    private debug;
    /**
     * private constructor follow singleton design pattern
     *
     *  @param {ConfigOptions} options - optional config object to initialize once if you want
     */
    private constructor();
    /**
     * Single entry point to let consumer initial or access the shared access with singleton pattern
     *
     *  @param {ConfigOptions} configOptions - optional config object to initialize once if you want
     * @returns {Config} - Return the exiting or create a new one
     */
    static getInstance(configOptions?: ConfigOptions): Config;
    /**
     * Set the developerId
     *  @param {string} developerId - The Myria developer id
     * @returns {Config} - Return the current instance
     */
    setDeveloperId(developerId: string): Config;
    /**
     * Set the secretKey
     *  @param {string} secretKey - The Myria developer secret key
     * @returns {Config} - Return the current instance
     */
    setSecretKey(secretKey: string): Config;
    /**
     * Set the debug
     *  @param {boolean} debug - Whether turn on the log to debug or not
     * @returns {Config} - Return the current instance
     */
    setDebug(debug: boolean): Config;
    /**
     * Get the leaderboardApiUrl
     * @returns {string} - Return the current leaderboardApiUrl
     */
    getLeaderboardApiUrl(): string | undefined;
    /**
     * Get the developerId
     * @returns {string} - Return the current developerId
     */
    getDeveloperId(): string | undefined;
    /**
     * Get the secretKey
     * @returns {string} - Return the current secretKey
     */
    getSecretKey(): string | undefined;
    /**
     * Get the debug
     * @returns {boolean} - Return the current debug mode
     */
    getDebug(): boolean | undefined;
    /**
     * Get the timeoutResponse
     * @returns {int} - Return the time response
     */
    get timeoutResponse(): number;
}
