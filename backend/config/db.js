const mongoose=require("mongoose");

const connectDB=async()=>{
try {
     await mongoose.connect("mongodb://127.0.0.1:27017/rentify")
  console.log("mongoDb connected successfully")
}
 catch (error) {
    console.error("mongoDb Connection error:",error)
}
}

module.exports=connectDB