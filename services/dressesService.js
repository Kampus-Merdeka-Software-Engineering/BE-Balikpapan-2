const { prisma } = require('../config/prisma');

const getDressesService = async()=>{
  const dresses = await prisma.gallery.findMany()
  return dresses
}

module.exports = {getDressesService}