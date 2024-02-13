const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRouter=require("./controller/securityRouter")
const visitorRouter=require("./controller/visiterRouter")

const app=express()

app.use(express.json())
app.use(cors())

app.use("/security",securityRouter)
app.use("/visitor",visitorRouter)


mongoose.connect("mongodb+srv://AswathyAppukuttan:aswathy2001@cluster0.9azl2ct.mongodb.net/visitDb?retryWrites=true&w=majority",
{
  useNewUrlParser:true
}
)


app.listen(3001,()=>{
    console.log("server running")
})