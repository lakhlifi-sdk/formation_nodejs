const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router();
router.get('/', UserController.findAll);
router.post('/', UserController.create);
//router.patch('/:id', UserController.update);
//router.delete('/:id', UserController.destroy);
module.exports = router 
