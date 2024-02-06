var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')

router.post('/login', function () {
    controller.login
})

module.exports = router;