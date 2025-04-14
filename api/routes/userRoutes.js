const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para obter todos os utilizadores
router.get('/', userController.getAllUsers);

// Rota para criar um novo utilizador
router.post('/', userController.createUser);

module.exports = router;
