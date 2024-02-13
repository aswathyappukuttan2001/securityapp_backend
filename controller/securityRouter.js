const express=require("express")
const router=express.Router()
const bcrypt= require("bcryptjs")
const securityModels = require("../models/securityModels")


hashPasswardGenertor=async (pass)=>{
    const salt= await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

    
router.get("/view",async(req,res)=>{
    let data1=await securityModels.find()
    res.json(data1)
    })

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password

    const hashedPassword=await hashPasswardGenertor(password)
    data.password=hashedPassword
    let security=new securityModels(data)
    let result=await security.save(data)
    res.json({

       status:"success"
      })
})

router.post("/signin",async(req,res)=>{
    let input =req.body
    let email=req.body.email

    let data=await securityModels.findOne({"email":email})
    if(!data)
    { 
        return res.json({

            status:"invalid user"
        })
    }
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match){
        return res.json ({

            status:"invalid password"
        })
    }
    res.json({

        status:"success"
    })



})


module.exports=router