let jwt = require("jsonwebtoken");
require('dotenv').config()
class JSONWebToken {
	auth(uname) {
		const user = { name: uname }
		const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
		return accessToken
	}
}
module.exports = new JSONWebToken()
