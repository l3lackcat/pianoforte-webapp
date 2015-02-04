'use strict';

var express = require('express');
var controller = require('./branch.controller');

var router = express.Router();

router.get('/findAll', controller.findAll);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);

module.exports = router;