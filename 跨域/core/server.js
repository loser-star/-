const express = require("express");
const app = express();
const port = 3000;
// app.use(express.static("public"));

// 设置白名单
const whiteList = ["http://localhost:3000", "http://localhost:3001"];
app.use(function (req, res, next) {
  const origin = req.headers.origin;
  console.log(req.headers);
  if (whiteList.includes(origin)) {
    // 设置哪个源可以访问我
    res.setHeader("Access-Control-Allow-Origin", origin);
    // 允许携带哪个头访问我
    res.setHeader("Access-Control-Allow-Headers", "name");
    // 允许哪个方法访问我
    res.setHeader("Access-Control-Allow-Methods", "PUT");
    // 允许携带cookie
    res.setHeader("Access-Control-Allow-Credentials", true);
    // 预检的存活时间
    res.setHeader("Access-Control-Max-Age", 6);
    // 允许返回的头
    res.setHeader("Access-Control-Expose-Headers", "name");
    if (req.method === "OPTIONS") {
      res.end(); // OPTIONS请求不做任何处理
    }
  }
  next();
});
// 允许全部跨域
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // 允许所有来源访问
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type"); // 允许访问的头信息字段
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); // 允许访问的方式
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get("/api", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
