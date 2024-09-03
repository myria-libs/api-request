import { ConfigOptions } from "../type";
import { BaseApiService } from "./base-api.service";
export declare class ResourceApiService extends BaseApiService {
    constructor(configOptions: ConfigOptions);
    setUrl(url: string): void;
}
