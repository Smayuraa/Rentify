const Rent =require("../models/Rent")
const {Parser}=require('json2csv')
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

//CSV Reports
exports.generateRentReport = async (req, res) => {
  try {
    const rents = await Rent.find().populate('tenant room');

    const fields = ['tenant.name', 'room.roomNumber', 'month', 'amountPaid', 'paidOn'];
    const opts = { fields };

    const formattedData = rents
      .filter(r => r.tenant && r.room) // ✅ Ignore broken entries
      .map(r => ({
        'tenant.name': r.tenant.name,
        'room.roomNumber': r.room.roomNumber,
        'month': r.month,
        'amountPaid': r.amountPaid,
        'paidOn': r.paidOn.toISOString().split('T')[0]
      }));

    const parser = new Parser(opts);
    const csv = parser.parse(formattedData);

    res.header('Content-Type', 'text/csv');
    res.attachment('rent-report.csv');
    return res.send(csv);

  } catch (error) {
    console.error("CSV Export Error:", error);
    res.status(500).json({ error: error.message });
  }
};