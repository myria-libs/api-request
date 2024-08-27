"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
/**
 * Centralize your configuration in Config class
 * @class
 */
class Config {
    /**
     * private constructor follow singleton design pattern
     *
     *  @param {ConfigOptions} options - optional config object to initialize once if you want
     */
    constructor(options) {
        this.leaderboardApiUrl = options === null || options === void 0 ? void 0 : options.leaderboardApiUrl;
        this.developerId = options === null || options === void 0 ? void 0 : options.developerId;
        this.secretKey = options === null || options === void 0 ? void 0 : options.secretKey;
        this.debug = options === null || options === void 0 ? void 0 : options.debug;
    }
    /**
     * Single entry point to let consumer initial or access the shared access with singleton pattern
     *
     *  @param {ConfigOptions} configOptions - optional config object to initialize once if you want
     * @returns {Config} - Return the exiting or create a new one
     */
    static getInstance(configOptions) {
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
    setDeveloperId(developerId) {
        this.developerId = developerId;
        return this;
    }
    /**
     * Set the secretKey
     *  @param {string} secretKey - The Myria developer secret key
     * @returns {Config} - Return the current instance
     */
    setSecretKey(secretKey) {
        this.secretKey = secretKey;
        return this;
    }
    /**
     * Set the debug
     *  @param {boolean} debug - Whether turn on the log to debug or not
     * @returns {Config} - Return the current instance
     */
    setDebug(debug) {
        this.debug = debug;
        return this;
    }
    // Getters
    /**
     * Get the leaderboardApiUrl
     * @returns {string} - Return the current leaderboardApiUrl
     */
    getLeaderboardApiUrl() {
        return this.leaderboardApiUrl || "";
    }
    /**
     * Get the developerId
     * @returns {string} - Return the current developerId
     */
    getDeveloperId() {
        return this.developerId;
    }
    /**
     * Get the secretKey
     * @returns {string} - Return the current secretKey
     */
    getSecretKey() {
        return this.secretKey;
    }
    /**
     * Get the debug
     * @returns {boolean} - Return the current debug mode
     */
    getDebug() {
        return this.debug;
    }
    /**
     * Get the timeoutResponse
     * @returns {int} - Return the time response
     */
    get timeoutResponse() {
        return 90000;
    }
}
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9Db25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBS0E7OztHQUdHO0FBQ0gsTUFBYSxNQUFNO0lBUWY7Ozs7T0FJRztJQUNILFlBQW9CLE9BQXVCO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsaUJBQWlCLENBQUM7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxhQUE2QjtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxXQUFtQjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVksQ0FBQyxTQUFpQjtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxLQUFjO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxVQUFVO0lBQ1Y7OztPQUdHO0lBQ0gsb0JBQW9CO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsY0FBYztRQUNWLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxlQUFlO1FBQ2YsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztDQUNKO0FBdkdELHdCQXVHQyJ9