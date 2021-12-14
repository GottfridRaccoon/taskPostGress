let pg = require("pg")
let pool = new pg.Pool({
	user: "postgres",
	password: "2192",
	host: "localhost",
	port: 5432,
	database: "task"
})
module.exports = pool
