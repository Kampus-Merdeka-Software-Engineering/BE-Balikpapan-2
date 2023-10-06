const { prisma } = require('../config/prisma.js')

const getAllGalleryController = async (req, res) => {
    const galleries = await prisma.gallery.findMany();
    res.status(200).json(galleries);
}

module.exports = { getAllGalleryController }