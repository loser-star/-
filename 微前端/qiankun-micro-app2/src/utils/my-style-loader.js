const { isQiankun } = require("./isQiankun.js");
const myStyleLoader = function (source) {
  console.log("myStyleLoader", isQiankun);
  if (!isQiankun) {
    return source;
  }
  return source.replace(/:root/g, ":host");
};
module.exports = myStyleLoader;
