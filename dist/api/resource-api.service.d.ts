import BaseApiService from './base-api.service';
import { Config } from '../config';
export declare class ResourceApiService extends BaseApiService {
    constructor(configService: Config);
    setUrl(url: string): void;
}
