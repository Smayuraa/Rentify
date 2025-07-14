const express=require('express')
const connectDB=require('./config/db')
const roomRoutes=require('./routes/roomRoutes')
const tenantRoutes=require('./routes/tenantRoutes')
const rentRoutes=require("./routes/rentRoutes")

const app=express()
connectDB()
app.use(express.json())
app.use('/api/rooms',roomRoutes)
app.use('/api/tenants',tenantRoutes)
app.use('/api/rent',rentRoutes)

app.get("/",(req,res)=>{   
    res.send("working")
})

app.listen(3000,()=>{
    console.log("server is running on 3000")
})