import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios,{AxiosResponse,AxiosRequestConfig} from './axios';

const baseUrl = 'https://api.wmdb.tv/api/v1/top';

interface Data{
  type:string,
  skip:number,
  limit:number,
  lang:string,
  name:string
}
let data:Data = {
  type:'Imdb',
  skip:0,
  limit:50,
  lang:'Cn',
  name:"loser"
}
axios.interceptors.request.use((config:AxiosRequestConfig)=>{
  config.params.name += 1
  return config;
})

axios({
  method:'get',
  url:baseUrl,
  params:data,
}).then((res:AxiosResponse)=>{
  console.log(res);

})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
