"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceApiService = void 0;
const base_api_service_1 = __importDefault(require("./base-api.service"));
class ResourceApiService extends base_api_service_1.default {
    constructor(configService) {
        super('', configService);
    }
    setUrl(url) {
        const detectUrl = new URL(url);
        const basUrl = detectUrl.protocol + '//' + detectUrl.hostname;
        this.baseURL = basUrl;
    }
}
exports.ResourceApiService = ResourceApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL3Jlc291cmNlLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDBFQUFnRDtBQUdoRCxNQUFhLGtCQUFtQixTQUFRLDBCQUFjO0lBQ2xELFlBQ0ksYUFBcUI7UUFFckIsS0FBSyxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFaRCxnREFZQyJ9