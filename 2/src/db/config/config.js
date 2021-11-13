require("dotenv").config()

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME + '_development',
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALEC,
		logging: false
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALEC,
	},
};
