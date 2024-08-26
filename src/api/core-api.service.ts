import { Config } from "../config";
import BaseApiService from "./base-api.service";
import { RequestContext } from "./context";

export class LeaderboardApiService extends BaseApiService {
    public apiKey: string | undefined;
    constructor(configService: Config) {
        super(configService.getLeaderboardApiUrl(), configService);
    }

    setApiKey(value: string): void {
        this.apiKey = value;
    }
    async isAvailable(context: RequestContext): Promise<boolean> {
        try {
            const response = await this.get(context, "", undefined, {
                "x-api-key": this.apiKey,
            });
            if (response?.data.data) {
                return true;
            }
            return false;
        } catch (error) {
            const { correlationId, logger } = context;
            const msg = "Exception error in LeaderboardApiService.isAvailable";
            logger.error({
                msg,
                correlationId,
                error,
            });

            throw error;
        }
    }
}
