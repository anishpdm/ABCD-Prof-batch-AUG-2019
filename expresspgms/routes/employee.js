const express= require('express')
const router=express.Router()
router.post('/add',(req,res)=>{
    console.log(req.body)
    var getName=req.body.name;
    var getAge=req.body.age;
    console.log("Name:"+getName+", Age:"+getAge)
    res.send("Name:"+getName+", Age:"+getAge)
    

})

module.exports=router