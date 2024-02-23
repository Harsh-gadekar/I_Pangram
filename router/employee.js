let express = require('express');
let router = express.Router();
let empcontroller = require('../controler/employee-controller')
const valid = require('../helper/validation')

router.get('/readEmpDetail',empcontroller.getEmpDetails);
router.post('/addEmpDetail',  empcontroller.addEmpDetails);
router.put('/updateEmpDetail/:cid',empcontroller.updateEmpDetails);
router.delete('/deleteEmpDetail/:cid', empcontroller.deleteEmpDetails );


module.exports = router;