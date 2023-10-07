const { getSubscribeService } = require('../services/subscribeService.js');

const getAllSubscribeController = async (req, res) => {
    const { email } = req.body;
    const subscriber = await getSubscribeService()
    res.status(201).json({
    message: "Thank you for subscribing!",
    subscriber
  });
}

module.exports = { getAllSubscribeController }