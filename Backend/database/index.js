const { Pool } = require('pg');
const env = require('dotenv');
const models = require('./models');

env.config();

const pool = new Pool({
  connectionString: process.env.DB_URI_TEST,
});

const poolConnect = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await models(client);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
  } finally {
    client.release();
  }
};

poolConnect();

module.exports = pool;
