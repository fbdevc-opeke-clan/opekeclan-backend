module.exports = {
  CREATE_TABLE: `DROP TABLE IF EXISTS candidate CASCADE;
  CREATE TABLE IF NOT EXISTS candidate(
        id serial PRIMARY KEY,
        officeId INTEGER REFERENCES political_office(id),
        partyId INTEGER REFERENCES political_party(id),
        userId INTEGER REFERENCES users(id)
    )`,
};
