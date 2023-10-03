const express = require('express');
const userController = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.get('/', userController.getUsers);

userRoutes.post('/', userController.createUser);

userRoutes.get('/:userId', userController.getUserById);

userRoutes.put('/:userId', userController.updateUserById);

userRoutes.delete('/:userId', userController.deleteUserById);

module.exports = { userRoutes };
