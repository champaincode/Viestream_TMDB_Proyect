const express = require("express")
const router = express.Router()
const User = require("./user")
const Favorito = require("./favoritos")

router.use("/user", User)
router.use("/favoritos", Favorito)


module.exports = router