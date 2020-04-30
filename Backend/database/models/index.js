/* eslint-disable no-undef */
const users = require('./users');
const politicalParty = require('./politicalParties');
const politicalOffice = require('./politicalOffice');
const candidate = require('./candidate');

module.exports = async (client) => {
  try {
    await client.query(users.CREATE_TABLE);
    await client.query(politicalOffice.CREATE_TABLE);
    await client.query(politicalParty.CREATE_TABLE);
    await client.query(candidate.CREATE_TABLE);

    Console.log('Table Created');
  } catch (err) {
    Console.log(err);
  }
};
