const express = require('express');
const path = require('path');
const app=express();
const port =7000

app.use(express.static(path.join(__dirname,"public")))

app.get('/hello',(req,res)=>{
    res.send('hello express')
});
app.get('/index',(req,res)=>{
    // res.send('./index')
    // res.sendFile(path.join(__dirname,'index.html'))
    // res.status(500);
    res.json({'rudra':101})
});

app.listen(port,()=>{
    console.log(`your port are running on ${port}`)
});