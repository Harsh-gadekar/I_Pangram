
let mysql = require('../helper/mysql');

let getempdetail =async ()=>{
    let query = `SELECT * FROM employees`;
    
   return new Promise((resolve, reject)=>{
      mysql.connection.query(query, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          console.log('The solution is: ', results);
          resolve(results);
        } 
      });
    });
}

let addempdetail = async (data) => {
    let { emp_name, emp_dept, emp_email, emp_phone, emp_address} = data;
     
    let query = `INSERT INTO employees (  emp_name, emp_dept, emp_email, emp_phone, emp_address) VALUES ( '${emp_name}', '${emp_dept}', '${emp_email}', '${emp_phone}', '${emp_address}' )`;
    console.log(query)
    return new Promise((resolve, reject) => {
        mysql.connection.query(query, function (error, results, fields) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
                console.log(results);
            }
        });
    });
};


let updateEmpdetail =async(empId, empData)=>{
    let{ emp_name, emp_dept, emp_email, emp_phone, emp_address} = empData;
    let query = `UPDATE employees SET emp_name = '${emp_name}' , emp_dept = '${emp_dept}', emp_email = '${emp_email}', emp_phone = '${emp_phone}' ,  emp_address = '${emp_address}' WHERE id = '${empId}' `
    console.log(query);
    return new Promise((resolve,reject)=>{
        mysql.connection.query(query,function(error,results,fields){
            if(error){
                reject(error)
            }else{
                resolve(results);
                console.log(results);
            }
        });
    });
}

let deleteEmpDetail = async(id)=>{
    let query = `DELETE FROM employees  WHERE id = ${id}`;
        console.log(query);
        return new Promise((resolve, reject)=>{
            mysql.connection.query(query, function (error, results, fields) {
                if (error) {
                reject(error);
                console.log(error);
                } else {
                console.log('The solution is: ', results);
                resolve(results);
                } 
            });
        });
}
module.exports={getempdetail,addempdetail,updateEmpdetail,deleteEmpDetail}