const Rent =require("../models/Rent")

//Add new rent payment
exports.addRent=async(req,res)=>{
    try {
        const rent=new Rent(req.body)
        await rent.save()
        res.status(201).json(rent)
    } catch (error) {
        res.status(400).json({error:err.message})
    }
}

//get rent history

exports.getRentByTenant=async(req,res)=>{
try {
    const rent=await Rent.find({tenant:req.params.tenantId}).sort({paidOn:-1})
    res.json(rent)
} catch (error) {
    res.status(500).json({error:err.message})
}
}

//get all rent
exports.getAllRents=async(req,res)=>{
    try {
        const rents=await Rent.find().populate('tenant room')
        res.json(rents)
    } catch (error) {
        res.status(500).json({error:err.message})
    }
}