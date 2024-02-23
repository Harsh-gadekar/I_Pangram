const userModel = require('../model/user-model')


let getPostDetail = async(req,res)=>{
    try{
        let Data = await userModel.getdata();
        res.send(Data)
        
    }catch(err){
        res.send(err);
    }
}

let adduserdetail= async(req,res)=>{
    console.log("This is req body--", req.body);
    try{
        let data = await userModel.adduser(req.body);
        res.send(data)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}


let  userLogin= async (req, res)=> {
  
    let userData = req.body;
   
   try{
    let data = await userModel.loginUserdata(userData);
    res.send(data);

   }catch (err){
    res.send(err);
    console.log(err)
   }
  }

  module.exports = {getPostDetail, userLogin, adduserdetail};