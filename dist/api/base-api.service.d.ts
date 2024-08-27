import { AxiosRequestHeaders, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import { Config } from "../config";
import { RequestContext } from "./context";
export interface QueryParams {
    [key: string]: string | number | undefined;
}
export default abstract class BaseApiService {
    baseURL: string | undefined;
    context: RequestContext;
    configService: Config;
    constructor(baseURL: string | undefined, configService: Config);
    private refreshCorrelationId;
    handleError(error: any): void;
    get(url: string, query?: QueryParams, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    post(url: string, data: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    put(url: string, data: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    delete(url: string, data?: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<any>;
    private buildHeaders;
}
