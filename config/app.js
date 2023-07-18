require("dotenv").config();

const config = {

	run_port: process.env.RUN_PORT,
	db: {
		db_type: process.env.DB_TYPE,
		db_host: process.env.DB_HOST,
		db_name: process.env.DB_NAME,
		db_user_name: process.env.DB_USER_NAME,
		db_pass: process.env.DB_PASS,
	}
}

module.exports = {config}
