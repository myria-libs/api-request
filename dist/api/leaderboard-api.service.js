"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardApiService = void 0;
const base_api_service_1 = __importDefault(require("./base-api.service"));
class LeaderboardApiService extends base_api_service_1.default {
    constructor(configService) {
        super(configService.getLeaderboardApiUrl(), configService);
        this.apiKey = configService.getSecretKey();
    }
    setApiKey(value) {
        this.apiKey = value;
    }
    async isAvailable() {
        try {
            const response = await this.get(this.context, "", undefined, {
                "x-api-key": this.apiKey,
            });
            if (response === null || response === void 0 ? void 0 : response.data.data) {
                return true;
            }
            return false;
        }
        catch (error) {
            const { correlationId, logger } = this.context;
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
exports.LeaderboardApiService = LeaderboardApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZGVyYm9hcmQtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2xlYWRlcmJvYXJkLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDBFQUFnRDtBQUdoRCxNQUFhLHFCQUFzQixTQUFRLDBCQUFjO0lBRXJELFlBQVksYUFBcUI7UUFDN0IsS0FBSyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBQ0QsS0FBSyxDQUFDLFdBQVc7UUFDYixJQUFJLENBQUM7WUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFO2dCQUN6RCxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDM0IsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDL0MsTUFBTSxHQUFHLEdBQUcsc0RBQXNELENBQUM7WUFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDVCxHQUFHO2dCQUNILGFBQWE7Z0JBQ2IsS0FBSzthQUNSLENBQUMsQ0FBQztZQUVILE1BQU0sS0FBSyxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0NBQ0o7QUEvQkQsc0RBK0JDIn0=