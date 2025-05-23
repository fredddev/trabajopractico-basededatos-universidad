const db = require('../config/db');

async function callGetAllUsersProcedure() {
  const [rows] = await db.query('CALL ViajesConMasDeMilKg()');
  return rows[0]; // El primer resultado contiene los datos
}

module.exports = {
  callGetAllUsersProcedure,
};
