const express = require('express')
const db = require('./db')
const Cities = require('./model/cities')
const app = express()
const PORT = 3000;


;(async()=>{
  //等待数据库连接完毕
  await db;

  //获取所有省份信息
  app.get('/getAllProvince',(req,res)=>{
    Cities.find({level:1},{province:1,name:1,_id:0},(err,data)=>{
      if(!err){
        res.json({state:1,data})
      }else{
        console.log(err)
        res.json({state:0,data:'网络不稳定，稍后再试！'})
      }
    })
  })

})()





app.listen(PORT,(err)=>{
  if(!err){
    console.log(`服务器已经启动了，端口号为${PORT}`)
  }else{
    console.log(err);
  }
})