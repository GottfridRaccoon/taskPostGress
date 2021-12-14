let Router = require('express')
let router = new Router()
const usercontroller = require("../controller/controller")
router.post("/user", usercontroller.createUser)
router.get("/user", usercontroller.getUsers)
router.get("/user/:uid", usercontroller.getUser)
router.put("/user", usercontroller.updateUser)
router.delete("/user/:uid", usercontroller.deleteUser)
router.post("/login", )

module.exports = router