import {
    HttpStatus,
    NotFoundException,
    BadRequestException,
    UnauthorizedException,
    InternalServerErrorException,
    Logger,
} from "@nestjs/common";
import axios, {
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios";
import { Config } from "../config";
import { RequestContext } from "./context";
import { randomUUID } from "crypto";

export interface QueryParams {
    [key: string]: string | number | undefined;
}

export default abstract class BaseApiService {
    public baseURL: string | undefined;

    public context: RequestContext;

    public configService: Config;

    constructor(baseURL: string | undefined, configService: Config) {
        this.baseURL = baseURL;
        this.configService = configService;
        this.context = {
            correlationId: randomUUID(),
            logger: new Logger("BaseApiService"),
        };
    }

    private refreshCorrelationId() {
        this.context.correlationId = randomUUID();
    }
    public handleError(error: any): void {
        if (error.response) {
            const { status, statusText } = error?.response;
            if (error.response.status === HttpStatus.NOT_FOUND) {
                this.context.logger.fatal(
                    {
                        ...error.response.data,
                        correlationId: this.context.correlationId,
                    },
                    "Request to api",
                );
                throw new NotFoundException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            if (error.response.status === HttpStatus.BAD_REQUEST) {
                this.context.logger.fatal(
                    {
                        ...error.response.data,
                        correlationId: this.context.correlationId,
                    },
                    "Request to api",
                );
                throw new BadRequestException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            if (error.response.status === HttpStatus.UNAUTHORIZED) {
                this.context.logger.fatal(
                    {
                        ...error.response.data,
                        correlationId: this.context.correlationId,
                    },
                    "Request to api",
                );
                throw new UnauthorizedException({
                    status,
                    statusText,
                    apiErrors: error.response.data,
                });
            }
            throw new InternalServerErrorException({
                status,
                statusText,
                apiErrors: error.response.data,
            });
        }
        if (error.code === "ECONNREFUSED") {
            throw new InternalServerErrorException({
                message: "Connection refused",
            });
        }

        this.context.logger.fatal(
            {
                error,
                correlationId: this.context.correlationId,
            },
            "Request to api",
        );
        throw new InternalServerErrorException(error);
    }

    public async get(
        url: string,
        query?: QueryParams,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined> {
        try {
            const headerRequest = this.buildHeaders(this.context, headers)
            const response = await axios.get(url, {
                params: query,
                headers: headerRequest,
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    public async post(
        url: string,
        data: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined> {
        try {
            const response = await axios.post(url, data, {
                headers: this.buildHeaders(this.context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    public async put(
        url: string,
        data: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined> {
        try {
            const response = await axios.put(url, data, {
                headers: this.buildHeaders(this.context, headers),
                baseURL: this.baseURL,
                timeout: this.configService.timeoutResponse,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    public async delete(
        url: string,
        data?: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<any> {
        try {
            const response = await axios.delete(url, {
                headers: this.buildHeaders(this.context, headers),
                timeout: this.configService.timeoutResponse,
                baseURL: this.baseURL,
                data,
            });
            return response;
        } catch (error) {
            this.handleError(error);
        }
    }

    private buildHeaders(
        context: RequestContext,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): AxiosRequestHeaders {
        if (!headers) {
            return <AxiosRequestHeaders>{};
        }
        this.refreshCorrelationId();


        headers["x-correlation-id"] = context.correlationId;

        const { headers: headerParams } = <AxiosRequestConfig>context;

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

        context.logger.debug(
            JSON.stringify({
                headers,
                message: "Header config before request to out side",
            }),
        );
        return <AxiosRequestHeaders>headers || {};
    }
}
