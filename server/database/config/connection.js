require('env2')('.env');
const {Pool} = require("pg");

let DB_URL = ""

if(process.env.NODE_ENV === 'production') {
    DB_URL = process.env.DB
} else if (process.env.NODE_ENV === 'development') {
    DB_URL = process.env.DEV_DB
} else if (process.env.NODE_ENV === 'test') {
    DB_URL = process.env.TEST_DB
} else {
throw new Error('No DB_URL found!')
}


const options = {
    connectionString: DB_URL,

    ssl: {
      rejectUnauthorized: false,
    },
  };




  module.exports = new Pool(options);