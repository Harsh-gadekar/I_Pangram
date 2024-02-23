const Joi = require('joi');

let EmployeeValidation =(req,res,next)=>{
   let schema = Joi.object({
       
        emp_name:Joi.string().required(), 
        emp_dept:Joi.string().required(), 
        email : Joi.required(), 
        password:Joi.string().required(), 
        phone:Joi.number().integer().required(), 
        address:Joi.string().required(), 
        
  });
  validationRequest(req, res, next, schema);
}
let DepartmentValidation =(req,res,next)=>{
    let schema = Joi.object({
        dept_name:Joi.string().required(),
        dept_desc:Joi.string().required(),
      });

      validationRequest(req, res, next, schema);
}

function userValidation(req, res, next) {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.required(),
        password: Joi.string().required(),
        phone: Joi.number().integer().required(),
        address: Joi.string().required(),
        
        
    });
    validationRequest(req, res, next, schema);
}



function validationRequest(req, res, next, schema){
    const option = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const {error, value} = schema.validate(req.body, option);
    if(error){
        res.send(error);
    }else{
        req.body = value;
        next();
    }
}

module.exports={ EmployeeValidation, DepartmentValidation, userValidation }