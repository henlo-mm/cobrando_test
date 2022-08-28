const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'cobrando_test',
  password: '123',
  port: 5432,
})

module.exports = pool;