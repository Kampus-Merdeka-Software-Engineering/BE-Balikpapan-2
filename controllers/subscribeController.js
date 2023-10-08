const { createSubscribeService } = require('../services/subscribeService.js');

const createSubscribeController = async (req, res) => {
    const createdSubscriber = await createSubscribeService(req.body)
    if (!createdSubscriber) {
      res.status(400).json({
        message : "Failed to Subscribe"
      })
    }
    res.status(201).json({
      message: "Thank you for subscribing!",
      data : createdSubscriber
    });
  }


module.exports = { createSubscribeController }