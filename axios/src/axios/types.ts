import AxiosInterceptorManager from './axiosInterceptorManager';
export type Methods = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'delete' | 'DELETE' | 'options' | 'OPTIONS' | 'head' | 'HEAD' | 'patch' | 'PATCH';
export interface AxiosRequestConfig{
  url?: string;
  method?: Methods;
  params?: any;
  headers?: Record<string,any>;
  data?: any;
  timeout?: number;
  transformRequrest?:(data:any,hedaers:any)=>any;
  transformResponse?:(data:any)=>any;
  CancelToken?:any;
}
export interface AxiosInstance{
  <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>>;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  },
  CancelToken?:any;
  isCancel?:any;

}


export interface AxiosResponse<T = any>{
  data: T;
  status: number;
  statusText: string;
  headers?: Record<string,any>;
  config?: AxiosRequestConfig;
  request?: XMLHttpRequest;
}