const express= require('express')
const router=express.Router()
router.get('/',(req,res)=>{
    var num1=parseInt(req.query.num1);
    var num2=parseInt(req.query.num2);
    res.send(num1+num2);


})

module.exports=router
