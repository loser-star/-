// import {observable} from './observable'
const {observable} = require('./observable')
const {autorun} = require('./autorun')
let o = observable({a:1,b:2,c:3,d:{e:4,f:5,g:{h:6}}})
let res = observable({a:1,b:2,c:3})
console.log(res.a);

