const router = require('express').Router()

router.use('/api', require('./groceryController.js'))

module.exports = router