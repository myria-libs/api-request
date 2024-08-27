import { Config } from "../config";
import BaseApiService from "./base-api.service";
export declare class LeaderboardApiService extends BaseApiService {
    apiKey: string | undefined;
    constructor(configService: Config);
    setApiKey(value: string): void;
    isAvailable(): Promise<boolean>;
}
