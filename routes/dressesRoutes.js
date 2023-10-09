const express = require('express');
const dressesRoutes = express.Router();
const { prisma } = require('../config/prisma.js');
const { getAllDressesController } = require('../controllers/dressesController.js');

dressesRoutes.get('/', getAllDressesController)



module.exports = { dressesRoutes }