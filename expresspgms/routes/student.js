const Express=require('express')
const router=Express.Router();

router.get('/add',(req,res)=>{
    var getName=req.query.name;
    var getRoll=req.query.rollno;
    res.send("Name:"+getName+"Roll:"+getRoll)
})



module.exports=router

