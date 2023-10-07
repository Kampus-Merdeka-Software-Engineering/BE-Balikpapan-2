const { getGalleryService } = require('../services/galleryService.js');

const getAllGalleryController = async (req, res) => {
    const galleries = await getGalleryService()
    res.status(200).json(galleries);
}

module.exports = { getAllGalleryController }