const express = require('express');
const userControllers  = require('../controllers/userControllers')

const router = express.Router();


router.post("/registerUser",userControllers.registerUser)
// router.delete("/delete", userControllers.delete)

module.exports = router;