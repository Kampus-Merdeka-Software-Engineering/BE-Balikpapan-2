const { prisma } = require('../config/prisma');

const createSubscribeService = async(body)=>{
  const { email } = body;
  console.log(body);
  const createdSubscriber = await prisma.emailSubscriber.create({
    data: {
      email
    }
  });
  return createdSubscriber
}

module.exports = {createSubscribeService}