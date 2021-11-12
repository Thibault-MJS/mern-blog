const express = require('express');
const router = express.Router();
const {registerController} = require('../controllers/auth.controller');
const {verifyRegisterData} = require('../middleware/auth.middleware');

// Route d'inscription

router.post('/register', verifyRegisterData, registerController);

module.exports = router;