const express = require('express')
const router = express.Router()
const AllApi = require('../controlls/product')

router.route('/').get(AllApi)

module.exports = router