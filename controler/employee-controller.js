
let empModel = require('../model/employee-model')

let getEmpDetails= async(req,res)=>{
    try{
        let Data = await empModel.getempdetail();
        res.send(Data)
        
    }catch(err){
        res.send(err);
    }
}

let addEmpDetails = async(req,res)=>{
    console.log("This is req body--", req.body);
    try{
        let data = await empModel.addempdetail(req.body);
        res.send(data)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

let updateEmpDetails = async(req,res)=>{
    let empId = req.params.cid;
    let empData = req.body;
    try{
        let empdata = await empModel.updateEmpdetail(empId , empData);
        res.send(empdata)
    }catch(err){
        res.send(err);
        console.log(err);
    }
   }

let deleteEmpDetails = async(req,res)=>{
    
    try{
        let data = await empModel.deleteEmpDetail( req.params.cid);
        res.send(data)
        
    }catch(err){
        res.send(err);
        console.log(err);
    }
   }
    

module.exports={getEmpDetails,addEmpDetails,updateEmpDetails,deleteEmpDetails}