import BaseApiService from './base-api.service';
import { Config } from '../config';

export class ResourceApiService extends BaseApiService {
    constructor(
        configService: Config,
    ) {
        super('', configService);
    }

    public setUrl(url: string): void {
        const detectUrl = new URL(url);
        const basUrl = detectUrl.protocol + '//' + detectUrl.hostname;
        this.baseURL = basUrl;
    }
}
