const router = require('express').Router()
const grocery = require('../models/grocery.js')

router.get('/', (req, res) => {
  grocery.getAll(groceries => {
    res.render('index', {groceries})
  })
})

module.exports = router