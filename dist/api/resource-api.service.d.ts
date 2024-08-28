import { ConfigOptions } from '../type/CommonType';
import BaseApiService from './base-api.service';
export declare class ResourceApiService extends BaseApiService {
    constructor(configOptions: ConfigOptions);
    setUrl(url: string): void;
}
