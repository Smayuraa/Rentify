const express=require('express')
const  router=express.Router()
const rentController=require("../controllers/rentController")

router.post("/",rentController.addRent)
router.get("/:tenantId",rentController.getRentByTenant)
router.get("/",rentController.getAllRents)

module.exports=router