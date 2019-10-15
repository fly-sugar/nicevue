var express = require('express');
var app = express();
app.get('/', (req,res) => {
  res.send("启动了服务")
});
app.listen('3000',() => {
  console.log('3000服务成功启动')
})
