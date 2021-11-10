const express = require('express');
const app = express();
require('dotenv').config();

// Importations des différentes routes
const authRoutes = require('./routes/auth.routes');

// Ajout des middlewares pour la gestion sur URL et du JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ajout des différentes routes

app.use('/api/auth/', authRoutes);

app.listen(process.env.API_PORT);