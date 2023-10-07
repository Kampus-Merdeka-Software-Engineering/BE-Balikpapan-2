const { prisma } = require('../config/prisma');

const getSubscribeService = async()=>{
    const subscriber = await prisma.emailSubscriber.create({
        data: {
          email : email
        }
      });
    return subscriber
    }

module.exports = {getSubscribeService}