"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceApiService = void 0;
const base_api_service_1 = require("./base-api.service");
class ResourceApiService extends base_api_service_1.BaseApiService {
    constructor(configOptions) {
        super("", configOptions);
    }
    setUrl(url) {
        const detectUrl = new URL(url);
        const basUrl = detectUrl.protocol + "//" + detectUrl.hostname;
        this.baseURL = basUrl;
    }
}
exports.ResourceApiService = ResourceApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL3Jlc291cmNlLWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlEQUFvRDtBQUVwRCxNQUFhLGtCQUFtQixTQUFRLGlDQUFjO0lBQ2xELFlBQVksYUFBNEI7UUFDcEMsS0FBSyxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDckIsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBQ0o7QUFWRCxnREFVQyJ9
