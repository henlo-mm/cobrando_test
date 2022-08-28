const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '172.17.0.2', //host en Docker
  //host: 'localhost',
  database: 'cobrando_test',
  password: '123',
  port: 5432,
})

module.exports = pool;