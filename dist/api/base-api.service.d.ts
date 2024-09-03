import {
    AxiosRequestHeaders,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios";
import { ConfigOptions, RequestContext } from "../type";
export interface QueryParams {
    [key: string]: string | number | undefined;
}
export declare abstract class BaseApiService {
    baseURL: string | undefined;
    context: RequestContext;
    configOptions: ConfigOptions;
    constructor(baseURL: string | undefined, configOptions: ConfigOptions);
    private refreshCorrelationId;
    handleError(error: any): void;
    get(
        url: string,
        query?: QueryParams,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined>;
    post(
        url: string,
        data: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined>;
    put(
        url: string,
        data: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined>;
    delete(
        url: string,
        data?: any,
        headers?: AxiosRequestHeaders | RawAxiosRequestHeaders,
    ): Promise<AxiosResponse<any, any> | undefined>;
    private buildHeaders;
}
