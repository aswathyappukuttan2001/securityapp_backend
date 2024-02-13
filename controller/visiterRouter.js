const express=require("express")
const router=express.Router()
const visitorModels = require("../models/visitorModels")


    
router.get("/view",async(req,res)=>{
    let data1=await visitorModels.find()
    res.json(data1)
    })

router.post("/add",async(req,res)=>{
    let data = req.body
    let visitor=new visitorModels(data)
    let result=await visitor.save()
    res.json({

       status:"success"
      })
})




module.exports=router