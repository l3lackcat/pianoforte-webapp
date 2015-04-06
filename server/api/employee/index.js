'use strict';

var express = require('express');
var controller = require('./employee.controller');

var router = express.Router();

router.get('/findAll', controller.findAll);
router.post('/findAllByBranch', controller.findAllByBranch);
router.post('/update', controller.update);
// router.post('/:id', controller.show);
router.post('/', controller.create);
// router.put('/:id/employee', controller.update);
// router.patch('/:id', controller.update);

module.exports = router;