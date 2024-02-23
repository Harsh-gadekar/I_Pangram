const express = require('express')
const app = express()                                       
const bodyParser = require('body-parser')                 
const port = 4000
app.use(bodyParser.urlencoded({extented: false}))      
app.use(bodyParser.json()) 
const dotenv = require("dotenv").config();
const cors = require('cors');
app.use(cors())

const empRouter = require('./router/employee');
const deptRouter = require('./router/department');
const userRouter = require('./router/user-router');

app.use('/employee', empRouter);
app.use('/department', deptRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

