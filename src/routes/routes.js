const express = require("express")
const app = express()
const router = express.Router()

const RegisterController = require("../controller/RegisterController")

router.get("/", RegisterController.create)

module.exports = router