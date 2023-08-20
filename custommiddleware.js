const express = require('express');
const path = require('path');
const app=express();
const port =2000

const custommiddleware=(req,res,next)=>{               // custom middleware
    console.log(req);
    next()    // use next for execute next middleware
}
// app.use(custommiddleware)

app.use(express.static(path.join(__dirname,"public")))
app.get('/hello/:name',(req,res)=>{
    res.send('hello express'+ req.params.name)
});
app.get('/index',(req,res)=>{
 
    res.json({'rudra':101})
});

app.listen(port,()=>{
    console.log(`your port are running on ${port}`)
});