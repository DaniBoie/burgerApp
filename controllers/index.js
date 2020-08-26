const router = require('express').Router()

router.use('/api', require('./groceryController.js'))
router.use('/',require('./viewController.js'))

module.exports = router