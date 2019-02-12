const express = require('express')
const app = express();
const PORT = 3000
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
  console.log(req.query);
  /*
   1.微信服务器在验证开发者服务器是否有效时，发送的是GET请求，内容如下：
     { signature: '68b8c351ecf767290d44be3e14cfc413880c32ef',   //微信服务器经过特殊加密后的字符串
        echostr: '4791809595966652295',  //微信服务器返回的一个随机字符串
        timestamp: '1549959043', //时间戳
        nonce: '2065812434' }   //微信服务器返回的一个随机数字
   */


})

app.listen(PORT,(err)=>{
  if(!err){
    console.log(`服务器启动了，端口号是${PORT}`)
  }else {
    console.log(err);
  }
})