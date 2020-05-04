module.exports = {
  CREATE_TABLE: `DROP TABLE IF EXISTS users CASCADE;
  CREATE TABLE IF NOT EXISTS users(
        id serial PRIMARY KEY,
        firstname VARCHAR(150) NOT NULL,
        lastname VARCHAR(150) NOT NULL,
        othername VARCHAR(150),
        email VARCHAR(150) UNIQUE NOT NULL,
        password VARCHAR(150) NOT NULL,
        phoneNumber VARCHAR(150),
        passportUrl VARCHAR(150),
        isAdmin BOOLEAN NOT NULL
  )`,
};
