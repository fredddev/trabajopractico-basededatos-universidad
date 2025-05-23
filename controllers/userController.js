const userService = require('../services/userService');

async function getUsers(req, res) {
  try {    
    const users = await userService.getUsers();    
    res.render('index/algo', { users }); // Envía los datos a la vista EJS
  } catch (error) {
    res.status(500).send('Error fetching users: ' + error.message);
  }
}

module.exports = {
  getUsers,
};
