const express = require("express");
const { getUsersdata, setUserdata } = require("../controllers/userController");
const router = express.Router()


router.route("/").get(getUsersdata).post(setUserdata)


module.exports = router;