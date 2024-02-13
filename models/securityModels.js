const mongoose=require("mongoose")

const securitySchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        phoneno:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("security",securitySchema)