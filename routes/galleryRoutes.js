const express = require('express');
const galleryRoutes = express.Router();
const { prisma } = require('../config/prisma.js');
const { getAllGalleryController } = require('../controllers/galleryController.js');

galleryRoutes.get('/', getAllGalleryController)



module.exports = { galleryRoutes }
