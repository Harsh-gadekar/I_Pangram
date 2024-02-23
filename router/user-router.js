let express = require('express');
let router = express.Router();
let userController = require('../controler/user-controller')
let auth = require('../helper/auth')
let valid = require('../helper/validation')


router.post('/login', userController.userLogin);
router.post('/signup', valid.userValidation, userController.adduserdetail);
router.get('/getuser',userController.getPostDetail);


module.exports = router;
