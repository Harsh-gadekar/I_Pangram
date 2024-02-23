let mysql = require('../helper/mysql');
const md5 = require('md5');
const jwt = require("jsonwebtoken");


let getdata =async ()=>{
  let query = `SELECT * FROM user`;
  
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

let adduser = async (data) => {
    let { first_name, last_name, email, password, phone, address} = data;
    let md5Pass = md5(password); 
    let query = `INSERT INTO user ( first_name, last_name, email, password, phone, address) VALUES ( '${first_name}', '${last_name}', '${email}', '${md5Pass}', '${phone}', '${address}' )`;
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

let loginUserdata = (userDetail) => {

    let {email, password} = userDetail;
    console.log(email)

    let md5Pass = md5(password);
    console.log(md5Pass)  
    let query = `SELECT * FROM user WHERE email = '${email}' AND password = '${md5Pass}' `;
    console.log(query);

    
    let promise = new Promise((resolve, reject)=>{
        
      mysql.connection.query(query, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          console.log('The solution is: ', results);

          try{
            if(results.length == 0){
              reject("Email Id and password not match");
             } else {
  
              const { id, email, first_name } = results[0]; // es6 feature Use destructuring 
                  console.log("our token key - ", process.env.TOKEN_KEY);
                  const token = jwt.sign(  
                    { uid: id, email:email, fname: first_name }, // this is token  
                    process.env.TOKEN_KEY, //secret key  from .env 
                    { expiresIn: "2h"}
                  );
                  results[0].token = token;       
                  console.log(token);
                }
                  
                resolve(results);
                
        } catch (err){
            resolve(err+'login faiild');
            console.log(err+'login faiild')
          }
                    
        } 
      });
    });
    return promise;
}

module.exports = {getdata,loginUserdata ,adduser}