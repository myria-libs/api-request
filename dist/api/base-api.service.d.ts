import { AxiosRequestHeaders, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import { Config } from "../config";
import { RequestContext } from "./context";
export interface QueryParams {
    [key: string]: string | number | undefined;
}
export default abstract class BaseApiService {
    protected baseURL: string | undefined;
    protected context: RequestContext;
    protected configService: Config;
    constructor(baseURL: string | undefined, configService: Config);
    private refreshCorrelationId;
    protected handleError(error: any): void;
    protected get(context: RequestContext, url: string, query?: QueryParams, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    protected post(context: RequestContext, url: string, data: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    protected put(context: RequestContext, url: string, data: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<AxiosResponse<any, any> | undefined>;
    protected delete(context: RequestContext, url: string, data?: any, headers?: AxiosRequestHeaders | RawAxiosRequestHeaders): Promise<any>;
    private buildHeaders;
}
