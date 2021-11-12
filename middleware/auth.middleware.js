const express = require('express');
const db = require('../utils/db');

module.exports = {
  /**
   * Middleware qui vérifie les données lors de l'inscription de l'utilisateur
   * 
   * @param {express.Request} req 
   * @param {express.Response} res
   * @param {express.NextFunction} next
   */
  verifyRegisterData: (req, res, next) => {
    const {username, email, password} = req.body;
    const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    // Vérification des données
    if (!username || username.length < 12) return res.status(401).send({ error: `invalid username` });
    if (!email || !regexEmail.test(email)) return res.status(401).send({ error: `invalid email format (user@host.com)` });
    if (!password || password.length < 8) return res.status(401).send({ error: `invalid password` });

    next();
  }
}