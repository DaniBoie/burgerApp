const router = require('express').Router()
const orm = require('../config/orm')
const db = require('../config/connection.js')

router.get('/groceries', (req,res) => {
  orm.read('groceries', groceries => {
  res.send(groceries)
  })
})

router.post('/groceries', (req,res) => {
  orm.create(table, data)
  res.sendStatus(200)
})

router.put('/groceries', (req, res) => {
  orm.update(table,update,where)
  res.sendStatus(200)
})

router.delete('/groceries', (req, res) => {
  orm.delete(table, where)
  res.sendStatus(200)
})

module.exports = router