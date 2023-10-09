const { getDressesService } = require('../services/dressesService.js');

const getAllDressesController = async (req, res) => {
    const dresses = await getDressesService()
    res.status(200).json(dresses);
}

module.exports = { getAllDressesController }