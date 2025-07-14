const mongoose=require("mongoose")
const { relative } = require("path")
const memberSchema=new mongoose.Schema({
    name:String,
    relation:String,
    aadhar:String,
    documentUrl:String
})

const tenantSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:String,
    aadhar:String,
    address:String,
    joiningData:{
        type:Date,
        default:Date.now
    },
    deposit:Number,
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },
    members:[memberSchema],
    isActive:{
        type:Boolean,
        default:true
    },
    vacateData:Date
},{timestamps:true})

module.exports=mongoose.model('Tenant',tenantSchema)