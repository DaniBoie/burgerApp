const orm = require('../config/orm.js')

const model = {}

model.getAll = (cb) => {
  orm.read('groceries', groceries => {
    cb(groceries)
  })
}

model.createOne = (grocery, cb) => {
  orm.create('groceries', grocery, id => cb(id))
}

model.updateOne = (updates, where, cb) => {
  orm.update('groceries', updates, where, () => cb())
}

model.deleteOne = (where, cb) => {
  orm.delete('groceries', where, () => cb())
}

module.exports = model