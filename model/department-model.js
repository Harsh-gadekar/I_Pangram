
let mysql = require('../helper/mysql');

let getDepartment =async ()=>{
    let query = `SELECT * FROM department`;
    
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

let addDepartment = async (data) => {
    let { dept_name,dept_desc} = data;
     
    let query = `INSERT INTO department ( dept_name,dept_desc) VALUES ( '${dept_name}', '${dept_desc}')`;
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


let updateDepartment =async(deptId, deptData)=>{
    let{ dept_name,dept_desc} = deptData;
    let query = `UPDATE department SET dept_name = '${dept_name}' , dept_desc = '${dept_desc}' WHERE id = '${deptId}' `
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

let deleteDepartment = async(id)=>{
    let query = `DELETE FROM department  WHERE id = ${id}`;
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
module.exports={getDepartment,addDepartment,updateDepartment,deleteDepartment}