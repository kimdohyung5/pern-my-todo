
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres", 
    password:"1111",
    host:'localhost',
    port:5432,
    database:"perntodo"
});

console.log("pool is caled --------------------------------------")

module.exports = pool;