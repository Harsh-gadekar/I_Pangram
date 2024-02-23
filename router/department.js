let express = require('express');
let router = express.Router();
let deptcontroller = require('../controler/department-controller')
 const valid = require('../helper/validation')

router.get('/readDepartment',deptcontroller.getDepartmentDetail);
router.post('/addDepartment', valid.DepartmentValidation, deptcontroller.addDepartmentDetail);
router.put('/updateDepartment/:cid', deptcontroller.updateDepartmentDetail);
router.delete('/deleteDepartment/:cid', deptcontroller.deleteDepartment );


module.exports = router;