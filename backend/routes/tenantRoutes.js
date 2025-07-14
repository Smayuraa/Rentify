const express=require('express')
const router=express.Router()

const tenantController=require("../controllers/tenantController")

router.post("/",tenantController.registerTenant)
router.get("/",tenantController.getAllTenants)
router.get("/:id",tenantController.getAllTenants)
router.put('/vacate/:id',tenantController.vacateTenant)

module.exports=router