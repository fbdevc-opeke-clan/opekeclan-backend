module.exports = {
  CREATE_TABLE: `DROP TABLE IF EXISTS political_office CASCADE;
  CREATE TABLE IF NOT EXISTS political_office(
        id serial PRIMARY KEY,
        type VARCHAR(150) NOT NULL,
        name VARCHAR(150) NOT NULL
    )`,
};
