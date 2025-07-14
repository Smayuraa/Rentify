const mongoose=require('mongoose')

const rentSchema=new mongoose.Schema({
    tenant:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Tenant',
    required:true
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Tenant",
        required:true
    },
    month:{
        type:String,
        required:true
    },
    amountPaid:{
        type:Number,
        required:true
    },
    paidOn:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

module.exports=mongoose.model("Rent",rentSchema)