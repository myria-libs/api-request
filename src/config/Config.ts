/**
 * Config module.
 * @module Config
 */
import { ConfigOptions } from "../type";
/**
 * Centralize your configuration in Config class
 * @class
 */
export class Config {
    private static instance: Config;

    private developerId: string | undefined;
    private secretKey: string | undefined;
    private debug: boolean | undefined;

    /**
     * private constructor follow singleton design pattern
     *
     *  @param {ConfigOptions} options - optional config object to initialize once if you want
     */
    private constructor(options?: ConfigOptions) {
        this.developerId = options?.developerId;
        this.secretKey = options?.secretKey;
        this.debug = options?.debug;
    }

    /**
     * Single entry point to let consumer initial or access the shared access with singleton pattern
     *
     *  @param {ConfigOptions} configOptions - optional config object to initialize once if you want
     * @returns {Config} - Return the exiting or create a new one
     */
    public static getInstance(configOptions?: ConfigOptions): Config {
        if (!Config.instance) {
            Config.instance = new Config(configOptions);
        }
        return Config.instance;
    }

    /**
     * Set the developerId
     *  @param {string} developerId - The Myria developer id
     * @returns {Config} - Return the current instance
     */
    setDeveloperId(developerId: string): Config {
        this.developerId = developerId;
        return this;
    }

    /**
     * Set the secretKey
     *  @param {string} secretKey - The Myria developer secret key
     * @returns {Config} - Return the current instance
     */
    setSecretKey(secretKey: string): Config {
        this.secretKey = secretKey;
        return this;
    }

    /**
     * Set the debug
     *  @param {boolean} debug - Whether turn on the log to debug or not
     * @returns {Config} - Return the current instance
     */
    setDebug(debug: boolean): Config {
        this.debug = debug;
        return this;
    }

    /**
     * Get the developerId
     * @returns {string} - Return the current developerId
     */
    getDeveloperId(): string | undefined {
        return this.developerId;
    }

    /**
     * Get the secretKey
     * @returns {string} - Return the current secretKey
     */
    getSecretKey(): string | undefined {
        return this.secretKey;
    }

    /**
     * Get the debug
     * @returns {boolean} - Return the current debug mode
     */
    getDebug(): boolean | undefined {
        return this.debug;
    }

    /**
     * Get the timeoutResponse
     * @returns {int} - Return the time response
     */
    get timeoutResponse(): number {
        return 90000;
    }
}
