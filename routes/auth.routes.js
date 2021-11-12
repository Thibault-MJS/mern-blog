const express = require('express');
const router = express.Router();
const {registerController} = require('../controllers/auth.controller');

// Route d'inscription

router.post('/register', registerController);

module.exports = router;