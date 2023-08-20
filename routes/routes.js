const express=require('express');
const path=require('path')
const router=express.Router();
const data = require('../data/data')

router.get('/',(req,res)=>{
    const user={
        name:"rudra",
        age:20,
        city:"azamgarh"
    }
    // res.sendFile(path.join(__dirname,'../template/index.html'))
    res.render('home',{user})

})
router.get('/data/:slug',(req,res)=>{
//   myblog=data.filter((e)=>{
//    return e.slug==req.params.slug
//   });
//   console.log(myblog)
   res.sendFile(path.join(__dirname,'../template/data.html'))

})
module.exports=router;