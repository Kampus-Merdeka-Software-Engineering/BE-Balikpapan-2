const express = require('express');
const subscribeRoutes = express.Router();
const { prisma } = require('../config/prisma.js');
const { createSubscribeController } = require('../controllers/subscribeController.js');


subscribeRoutes.post('/', createSubscribeController)

module.exports = { subscribeRoutes }