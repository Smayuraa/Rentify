const express=require('express')
const connectDB=require('./config/db')
const roomRoutes=require('./routes/roomRoutes')

const app=express()
connectDB()
app.use(express.json())
app.use('/api/rooms',roomRoutes)

app.get("/",(req,res)=>{   
    res.send("working")
})

app.listen(3000,()=>{
    console.log("server is running on 3000")
})