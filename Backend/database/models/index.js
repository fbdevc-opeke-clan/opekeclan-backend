/* eslint-disable no-console */
import users from './users';
import politicalParty from './politicalParties';
import politicalOffice from './politicalOffice';
import candidate from './candidate';

module.exports = async (client) => {
  try {
    await client.query(users.CREATE_TABLE);
    await client.query(politicalOffice.CREATE_TABLE);
    await client.query(politicalParty.CREATE_TABLE);
    await client.query(candidate.CREATE_TABLE);

    console.log('Table Created');
  } catch (err) {
    console.log(err);
  }
};
