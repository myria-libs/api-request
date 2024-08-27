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
            if (error.response.status === common_1.HttpStatus.FORBIDDEN) {
                this.context.logger.fatal({
                    ...error.response.data,
                    correlationId: this.context.correlationId,
                }, "Request to api");
                throw new common_1.ForbiddenException({
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
    async get(url, query, headers) {
        try {
            const headerRequest = this.buildHeaders(this.context, headers);
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
    async post(url, data, headers) {
        try {
            const response = await axios_1.default.post(url, data, {
                headers: this.buildHeaders(this.context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async put(url, data, headers) {
        try {
            const response = await axios_1.default.put(url, data, {
                headers: this.buildHeaders(this.context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    async delete(url, data, headers) {
        try {
            const response = await axios_1.default.delete(url, {
                headers: this.buildHeaders(this.context, headers),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1hcGkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYmFzZS1hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQVF3QjtBQUN4QixrREFLZTtBQUdmLG1DQUFvQztBQU1wQyxNQUE4QixjQUFjO0lBT3hDLFlBQVksT0FBMkIsRUFBRSxhQUFxQjtRQUMxRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gsYUFBYSxFQUFFLElBQUEsbUJBQVUsR0FBRTtZQUMzQixNQUFNLEVBQUUsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLENBQUM7U0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFTyxvQkFBb0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBQSxtQkFBVSxHQUFFLENBQUM7SUFDOUMsQ0FBQztJQUNNLFdBQVcsQ0FBQyxLQUFVO1FBQ3pCLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsQ0FBQztZQUMvQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLG1CQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FDckI7b0JBQ0ksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7b0JBQ3RCLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWE7aUJBQzVDLEVBQ0QsZ0JBQWdCLENBQ25CLENBQUM7Z0JBQ0YsTUFBTSxJQUFJLDBCQUFpQixDQUFDO29CQUN4QixNQUFNO29CQUNOLFVBQVU7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