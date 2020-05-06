/* eslint-disable no-console */
import { Pool } from 'pg';
import 'dotenv/config';

import models from './models';

let connect;

if (process.env.NODE_ENV === 'test') {
  connect = {
    connectionString: process.env.DATABASE_TEST_URL,
  };
}

connect = {
  connectionString: process.env.DATABASE_DEV_URL,
};

const pool = new Pool(connect);

pool.on('connect', () => {
  console.log(`successfully connected to ${process.env.NODE_ENV === 'test' ? 'test' : 'development'} database`);
});

const poolConnect = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await models(client);
    await client.query('COMMIT');
  } catch (err) {
    await client.query('ROLLBACK');
    console.log(err);
  } finally {
    client.release();
  }
};

poolConnect();

module.exports = pool;
