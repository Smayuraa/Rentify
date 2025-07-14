const Room=require("../models/Room")

//add new room
exports.addRoom=async(req,res)=>{
try {
    const room=new Room(req.body)
    await room.save()
    res.status(201).json(room)
} catch (error) {
    res.status(400).json({error:err.message})
}
}

//get all rooms

exports.getAllRooms=async(req,res)=>{
   try {
    const rooms= await Room.find().populate("assignedTo")
   res.json(rooms)
   } catch (error) {
      res.status(500).json({error:error.message})
   }
}

//update

exports.updateRoom=async(req,res)=>{
    try {
        const room=await Room.findByIdAndUpdate(req.params.id, req.body,{ new:true})
        res.json(room)
    } catch (error) {
        res.status(400).json({error:err.message})
    }
}

//delete
exports.deleteRoom=async(req,res)=>{
    try {
        const room=await Room.findByIdAndDelete(req.params.id)
        res.json({message:"Room deleted successfully"})
    } catch (error) {
        res.status(400).json({error:err.message})
    }
}

//vacate room
exports.vacateRoom=async(req,res)=>{
    try {
        const room=await Room.findByIdAndUpdate(req.params.id,{
            isOccupied:false,
            assignedTo:null
        },{new:true})
        res.json(room)
    } catch (error) {
        res.status(400).json({error:err.message})
    }
}
