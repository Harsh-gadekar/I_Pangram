const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'harsh111',
  password : 'harsh@111', 
  database : 'ipangram_db'
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected with mysql as id ' + connection.threadId);
});

module.exports = {connection}