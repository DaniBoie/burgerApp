const db = require('./connection.js')

const orm = {}

orm.create = (table, data, cb) => {
  db.query(`INSERT INTO ${table} SET ?`, data, (err, fields) => {
    if (err){console.log(err)}
    cb(fields.insertId)
  })
}

// orm.create('groceries', {name: 'Pork Patties', quantity: 15, cost: 10.00}, id => {
//   console.log(id)
// })

orm.read = (table, cb) => {
  db.query(`SELECT * FROM ${table}`, (err, data) => {
    if (err) {console.log(err)}
    cb(data)
  })
}

// orm.read('groceries', groceries => {
//   console.log(groceries)
// })

orm.update = (table, updates, where, cb) => {
  db.query(`UPDATE ${table} SET ? WHERE ?`, [updates, where], err => {
    if (err){console.log(err)}
    cb()
  })
}

// orm.update('groceries', {name: 'Doritos'}, {id: 8}, () => {
//   console.log('Updated!')
// })

orm.delete = (table, where,cb) => {
  db.query(`DELETE FROM ${table} WHERE ?`, where, err => {
    if (err) {console.log(err)}
    cb()
  })
}

// orm.delete('groceries', {id: 11}, () => {
//   console.log('Deleted!')
// })

module.exports = orm