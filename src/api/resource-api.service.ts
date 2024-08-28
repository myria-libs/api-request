import { ConfigOptions } from '../type/CommonType';
import BaseApiService from './base-api.service';

export class ResourceApiService extends BaseApiService {
    constructor(
        configOptions: ConfigOptions,
    ) {
        super('', configOptions);
    }

    public setUrl(url: string): void {
        const detectUrl = new URL(url);
        const basUrl = detectUrl.protocol + '//' + detectUrl.hostname;
        this.baseURL = basUrl;
    }
}
