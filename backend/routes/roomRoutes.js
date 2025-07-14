const express=require("express")
const router=express.Router()
const roomController=require("../controllers/roomController")

router.post('/',roomController.addRoom)
router.get('/',roomController.getAllRooms)
router.put('/:id',roomController.updateRoom)
router.delete('/:id',roomController.deleteRoom)
router.patch('/vacate/:id',roomController.vacateRoom)

module.exports=router