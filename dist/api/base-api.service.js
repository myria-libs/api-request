"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const crypto_1 = require("crypto");
class BaseApiService {
    constructor(baseURL, configService) {
        this.baseURL = baseURL;
        this.configService = configService;
        this.context = {
            correlationId: (0, crypto_1.randomUUID)(),
            logger: new common_1.Logger("BaseApiService"),
        };
    }
    refreshCorrelationId() {
        this.context.correlationId = (0, crypto_1.randomUUID)();
    }
    handleError(error) {
        if (error.response) {
            const { status, statusText } = error === null || error === void 0 ? void 0 : error.response;
            if (error.response.status === common_1.HttpStatus.NOT_FOUND) {
                this.context.logger.fatal({
                    ...error.response.data,
                    correlationId: this.context.correlationId,
                }, "Request to api");
                throw new common_1.NotFoundException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            if (error.response.status === common_1.HttpStatus.BAD_REQUEST) {
                this.context.logger.fatal({
                    ...error.response.data,
                    correlationId: this.context.correlationId,
                }, "Request to api");
                throw new common_1.BadRequestException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            if (error.response.status === common_1.HttpStatus.UNAUTHORIZED) {
                this.context.logger.fatal({
                    ...error.response.data,
                    correlationId: this.context.correlationId,
                }, "Request to api");
                throw new common_1.UnauthorizedException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            throw new common_1.InternalServerErrorException({
                status,
                statusText,
                apiErrors: error.response.data,
            });
        }
        if (error.code === "ECONNREFUSED") {
            throw new common_1.InternalServerErrorException({
                message: "Connection refused",
            });
        }
        this.context.logger.fatal({
            error,
            correlationId: this.context.correlationId,
        }, "Request to api");
        throw new common_1.InternalServerErrorException(error);
    }
    async get(context, url, query, headers) {
        try {
            this.context = context;
            const headerRequest = this.buildHeaders(context, headers);
            const response = await axios_1.default.get(url, {
                params: query,
                headers: headerRequest,
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async post(context, url, data, headers) {
        try {
            this.context = context;
            const response = await axios_1.default.post(url, data, {
                headers: this.buildHeaders(context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async put(context, url, data, headers) {
        try {
            this.context = context;
            const response = await axios_1.default.put(url, data, {
                headers: this.buildHeaders(context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async delete(context, url, data, headers) {
        try {
            this.context = context;
            const response = await axios_1.default.delete(url, {
                headers: this.buildHeaders(context, headers),
                timeout: this.configService.timeoutResponse,
                baseURL: this.baseURL,
                data,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    buildHeaders(context, headers) {
        if (!headers) {
            return {};
        }
        this.refreshCorrelationId();
        headers["x-correlation-id"] = context.correlationId;
        const { headers: headerParams } = context;
        if (headerParams) {
            if (headerParams["x-signature"]) {
                headers["x-signature"] = String(headerParams["x-signature"]);
            }
            if (headerParams["x-timestamp"]) {
                headers["x-timestamp"] = String(headerParams["x-timestamp"]);
            }
            if (headerParams["stark-key"]) {
                headers["stark-key"] = String(headerParams["stark-key"]);
            }
        }
        context.logger.debug(JSON.stringify({
            headers,
            message: "Header config before request to out side",
        }));
        return headers || {};
    }
}
exports.default = BaseApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYmFzZS1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQU93QjtBQUN4QixrREFLZTtBQUdmLG1DQUFvQztBQU1wQyxNQUE4QixjQUFjO0lBT3hDLFlBQVksT0FBMkIsRUFBRSxhQUFxQjtRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gsYUFBYSxFQUFFLElBQUEsbUJBQVUsR0FBRTtZQUMzQixNQUFNLEVBQUUsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLENBQUM7U0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBQSxtQkFBVSxHQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNTLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsQ0FBQztZQUMvQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLG1CQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDckI7b0JBQ0ksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7aUJBQzVDLEVBQ0QsZ0JBQWdCLENBQ25CLENBQUM7Z0JBQ0YsTUFBTSxJQUFJLDBCQUFpQixDQUFDO29CQUN4QixNQUFNO29CQUNOLFVBQVU7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