const { prisma } = require('../config/prisma');

const getGalleryService = async()=>{
  const galleries = await prisma.gallery.findMany()
  return galleries
}

module.exports = {getGalleryService}
// async function getUsers() {
//   try {
//     const user = await prisma.user.findMany();
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// }


// async function createUser(user) {
//   try {
//     const createdUser = await prisma.user.create({
//       data: {
//         email: user.email,
//         username: user.username,
//         password: user.password,
//       }
//     })
//     return createdUser;
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// async function getUserById(userId) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         id: Number(userId)
//       }
//     })
//     return user
//   } catch (error) {
//     throw new Error(error)
//   }
// }

// async function updateUserById(userId, updatedUser) {
//   try {
//     const userUpdate = await prisma.user.update({
//       where: {
//         id: Number(userId)
//       },
//       data: {
//         email: updatedUser.email,
//         username: updatedUser.username,
//         password: updatedUser.password,
//       }
//     })
//     return userUpdate;
//   } catch(error) {
//     throw new Error(error)
//   }
// }

// async function deleteUserById(userId) {
//   try {
//     const deletedUser = await prisma.user.delete({
//       where: {
//         id: Number(userId)
//       }
//     })
//     return deletedUser;
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = {
//   getUsers,
//   createUser,
//   getUserById,
//   updateUserById,
//   deleteUserById,
// };