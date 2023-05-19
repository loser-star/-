import Axios from "./axios";
import { AxiosInstance } from "./types";
import {CancelToken,isCancel} from './cancel';
// 可以创建一个axios实例
// 定义一个类的时候，一个类的原型，Axios.prototype 一个类的实例
function createInstance() :AxiosInstance{

    let context:Axios<any> = new Axios();
    let instance = Axios.prototype.request.bind(context);

    instance = Object.assign(instance, Axios.prototype, context);

    return instance as AxiosInstance;


  }


  let axios = createInstance();
  axios.CancelToken = new CancelToken();
  axios.isCancel = isCancel;
  export default axios;

  export * from './types';