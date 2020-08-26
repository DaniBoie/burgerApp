const router = require('express').Router()
const db = require('../config/connection.js')
const grocery = require('../models/grocery.js')

router.get('/groceries', (req,res) => {
  grocery.getAll(groceries => {
    res.json(groceries)
  })
})

router.post('/groceries', (req,res) => {
  grocery.createOne(req.body, id => {
    res.json({id})
  })
})

router.put('/groceries/:id', (req, res) => {
  grocery.updateOne(req.body, {id: req.params.id}, () => {
    res.sendStatus(200)
  })
})

router.delete('/groceries/:id', (req, res) => {
  grocery.deleteOne({id:req.params.id}, () => {
    res.sendStatus(200)
  })
})

module.exports = router