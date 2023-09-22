const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "NV3C)d*QZDM.x:o2Gl6tB}Zb_i:>",
    host: "postgresql-service",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;