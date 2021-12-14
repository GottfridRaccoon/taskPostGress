
const { query } = require('express')
const db = require('../db')
let jsonWebtoken = require('../jwt')
class UserController {


	async createUser(req, res) {
		let { email, pass, nickname } = req.body
		console.log(email, pass)
		const newPerson = await db.query("INSERT INTO Users (email,pass,nickname) VALUES($1,$2,$3) RETURNING *", [email, pass, nickname])
		res.json(newPerson)

		//res.json("ok")
	}
	async getUsers(req, res) {
		const users = await db.query("select * from Users")
		res.json(users.rows)
	}
	async getUser(req, res) {
		const id = req.params.uid
		const user = await db.query("select * from Users where uid = $1", [id])
		res.json(user.rows[0])

	}
	async updateUser(req, res) {
		const { uid, email, pass, nickname } = req.body
		const user = await db.query(`Update Users set email='${email}', pass= '${pass}', "nickname"= '${nickname}' WHERE uid='${uid}' RETURNING *`)
		res.json(user.rows[0])
	}
	async deleteUser(req, res) {
		const id = req.params.uid
		const user = await db.query("Delete from Users where uid = $1", [id])
		res.json(user.rows[0])

	}
	async getUser(req, res) {
		let { nickname, pass } = req.body
		const user = await db.query("select * from Users where email = $1, pass = $2", [nickname, pass])
		res.json(user.rows[0])

	}
}
module.exports = new UserController()