const { Pool } = require('pg');
require('env2')('.env');

let DB_URL = '';
let sslValue = false;
if (process.env.NODE_ENV === 'production') {
  sslValue = { rejectUnauthorized: false };
  DB_URL = process.env.DB;
}
else if (process.env.NODE_ENV === 'development') DB_URL = process.env.DEV_DB;
else if (process.env.NODE_ENV === 'test') DB_URL = process.env.TEST_DB;
else throw new Error('No DB_URL found!');

const options = {
  connectionString: DB_URL,
  ssl: sslValue,
};

module.exports = new Pool(options);


//\i 'C:\\Users\\hp\\Desktop\\Doctory\\server\\database\\config\\build.sql';