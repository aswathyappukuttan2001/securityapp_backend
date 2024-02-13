const mongoose=require("mongoose")

const securitySchema=new mongoose.Schema(
    {
        name:String,
        employeeid:String,
        address:String,
        phoneno:String,
        emailid:String,
        password:String
    }
)

module.exports=mongoose.model("security",securitySchema)