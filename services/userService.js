const userRepository = require('../repositories/userRepository');

async function getUsers() {
  return await userRepository.callGetAllUsersProcedure();
}

module.exports = {
  getUsers,
};