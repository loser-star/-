
interface onFulfilled<V>{
  (value:V):V | Promise<V>;
}
interface onRejected{
  (error:any):any;
}


export interface Interceptor <V>{
  onFulfilled?: onFulfilled<V>;
  onRejected?: onRejected;
}

export default class AxiosInterceptorManager<V> {
  public interceptor:Array<Interceptor<V> | null> = []
  // 用来存储拦截器
  use(onFulfilled?:onFulfilled<V>,onRejected?:onRejected):number{
    this.interceptor.push({
      onFulfilled,
      onRejected
    })
    return this.interceptor.length - 1;
  }

  eject(id:number):void{
    if(this.interceptor[id]){
      this.interceptor[id] = null;
    }
  }
}