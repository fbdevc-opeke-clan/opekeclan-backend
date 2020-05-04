module.exports = {
  CREATE_TABLE: `DROP TABLE IF EXISTS political_party CASCADE;
  CREATE TABLE IF NOT EXISTS political_party(
          id serial PRIMARY KEY,
          name VARCHAR(150) NOT NULL,
          hqAddress VARCHAR(150) NOT NULL,
          logoUrl VARCHAR(150)
    )`,
};
