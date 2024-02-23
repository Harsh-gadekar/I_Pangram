
let deptModel = require('../model/department-model')

let getDepartmentDetail = async(req,res)=>{
    try{
        let Data = await deptModel.getDepartment();
        res.send(Data)
        
    }catch(err){
        res.send(err);
    }
}

let addDepartmentDetail = async(req,res)=>{
    console.log("This is req body--", req.body);
    try{
        let data = await deptModel.addDepartment(req.body);
        res.send(data)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

let updateDepartmentDetail = async(req,res)=>{
    let deptId = req.params.cid;
    let deptData = req.body;
    try{
        let empdata = await deptModel.updateDepartment(deptId , deptData);
        res.send(empdata)
    }catch(err){
        res.send(err);
        console.log(err);
    }
   }

let deleteDepartment = async(req,res)=>{
    
    try{
        let data = await deptModel.deleteDepartment( req.params.cid);
        res.send(data)
        
    }catch(err){
        res.send(err);
        console.log(err);
    }
   }
    

module.exports={getDepartmentDetail,addDepartmentDetail,updateDepartmentDetail,deleteDepartment}