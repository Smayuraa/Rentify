const Tenant=require("../models/Tenant")
const Room=require("../models/Room")

//Register new tenant
exports.registerTenant=async(req,res)=>{
  try {
    const tenant=new Tenant(req.body)
    await tenant.save()

    await Room.findByIdAndUpdate(req.body.room,{
        isOccupied:true,
        assignedTo:tenant._id
    })
    res.status(201).json(tenant)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}
//get all tenants

exports.getAllTenants=async(req,res)=>{
    try {
       const tenants=await Tenant.find().populate('room')
       res.json(tenants) 
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

//get one tenants

exports.getTenants=async(req,res)=>{
    try {
       const tenants=await Tenant.findById(req.params.id).populate('room')
       res.json(tenants) 
    } catch (error) {
        res.status(500).json({error:'Tenant not found'})
    }
}

//Vacate tenant

exports.vacateTenant=async(req,res)=>{
    try {
        const tenant=await Tenant.findByIdAndUpdate(req.params.id,{
            isActive:false,
            vacateData:new Date()
        },{new:true})

        //free the room
        await Room.findByIdAndUpdate(tenant.room,{
            isOccupied:false,
            assignedTo:null
        })

        res.json(tenant)
    } catch (error) {
        res.status(400).json({error:err.message})
    }
}