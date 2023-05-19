import { AxiosRequestConfig, AxiosResponse } from "./types";
import AxiosInterceptorManager,{Interceptor} from './axiosInterceptorManager';

let defaults:AxiosRequestConfig = {
  method: "get",
  timeout: 0,
  headers: {
    common: {
      Accept: "application/json,text/plain,*/*"
    }
  },
  transformRequrest: function (data: any, headers: any): any {
    headers["common"]["Content-Type"] = "application/json";
    return JSON.stringify(data);
  },

  transformResponse:(response:any) => {
    return response.data;
  }

};

let getStyleMethods = ["get", "head", "delete", "options"];
getStyleMethods.forEach(method => {
  defaults.headers![method] = {};
});

let postStyleMethods = ["post", "put", "patch"];
postStyleMethods.forEach(method => {
  defaults.headers![method] = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
});

let allMethods = [...getStyleMethods, ...postStyleMethods];

export default class Axios<T> {
  public defaults: AxiosRequestConfig = defaults;
  public interceptors = {
    request: new AxiosInterceptorManager<AxiosRequestConfig>(),
    response: new AxiosInterceptorManager<AxiosResponse<T>>()
  }
  request(config: AxiosRequestConfig): Promise< AxiosRequestConfig |AxiosResponse<T>> {
    console.log("Axios.request");
    config.headers = {...this.defaults.headers,...config.headers};
    if(config.transformRequrest && config.data){
      config.data = config.transformRequrest(config.data,config.headers);
    }
    
    const chain :Interceptor<any>[] = [{
      onFulfilled:this.dispatchRequest,
      onRejected:undefined
    }]

    this.interceptors.request.interceptor.forEach(interceptor => {
      interceptor && chain.unshift(interceptor);
    })
    this.interceptors.response.interceptor.forEach(interceptor => {
      interceptor && chain.push(interceptor);
      
    })
    let promise:Promise<any> = Promise.resolve(config);
    while(chain.length){
      const {onFulfilled,onRejected} = chain.shift()!;
      promise = promise.then(onFulfilled,onRejected);
    }

   return promise
  }
  // 定义一个派发请求的方法
  dispatchRequest<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    console.log("Axios.dispatchRequest");
    return new Promise<AxiosResponse<T>>((resolve, reject) => {
      let { method,url,params,headers,data,timeout } = config;
      const request = new XMLHttpRequest();
      
      if(params) {
        let paramsStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        url += (url!.indexOf('?') === -1 ? '?' : '&') + paramsStr; 
        }

      request.open(method!, url!, true);
      request.responseType = "json";
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status >= 200 && request.status <= 300) {
            let response:AxiosResponse<T> = { 
              data: request.response?request.response:request.responseText,
              status: request.status,
              statusText: request.statusText,
              config,
              request: request
            } 
            console.log(request);
            
            if(config.transformResponse){
              response = config.transformResponse(response);
            }
            resolve(response);
          } else {
           reject(`Error: Request failed with status code ${request.status}`);
          }
        }
      };

      if(headers){
        for(let key in headers) {
          if(key === 'common' || allMethods.includes(key)){
            if(key === 'common' || key === config.method){
              for(let key2 in headers[key]){
                request.setRequestHeader(key2,headers[key][key2]);
              }
            }
        }
      }
    }
      let body:string | null = null;
      if(data) {
        request.send(data);
        body = JSON.stringify(data);
      }
      if(timeout){
        request.timeout = timeout;
        request.ontimeout = function(){
          reject(`Timeout of ${timeout} ms exceeded`);
        }
      }

      if(config.CancelToken){
        config.CancelToken.then((message:string)=>{
          request.abort();
          reject(message);
        })
      }
      

      request.onerror = function () {
        reject("net::ERR_INTERNET_DISCONNECTED");
      };

      request.send(body);
    });
  }
}