const mongoose=require("mongoose")

const roomSchema=new mongoose.Schema({
    roomNumber:{
        type:Number,
        required:true,
        unique:true
    },
    rentAmount:{
        type:Number,
        required:true
    },
    depositAmount:{
        type:Number,
        default:0
    },
    isOccupied:{
        type:Boolean,
        default:false
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tenant",
        default:null
    }
},{timestamps:true})

module.exports=mongoose.model("Room",roomSchema)