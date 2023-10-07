const express = require('express');
const subscribeRoutes = express.Router();
const { prisma } = require('../config/prisma.js');
const { getAllSubscribeController } = require('../controllers/subscribeController.js');


subscribeRoutes.post('/', getAllSubscribeController)

module.exports = { subscribeRoutes }