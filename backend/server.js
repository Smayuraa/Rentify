const express=require('express')
const connectDB=require('./config/db')
const roomRoutes=require('./routes/roomRoutes')
const tenantRoutes=require('./routes/tenantRoutes')

const app=express()
connectDB()
app.use(express.json())
app.use('/api/rooms',roomRoutes)
app.use('/api/tenants',tenantRoutes)

app.get("/",(req,res)=>{   
    res.send("working")
})

app.listen(3000,()=>{
    console.log("server is running on 3000")
})