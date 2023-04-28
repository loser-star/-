const express = require('express')
const app = express()
app.get('/jsonp', function(req, res) {
  let { wd, cb } = req.query
  console.log(cb)
  res.end(`${cb}('我不爱你')`)
}
)
app.listen(3000, function() {
  console.log('server listen 3000')
})