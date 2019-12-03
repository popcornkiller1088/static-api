const { resolve } = require('path')
exports.db = require('knex')(require(resolve(process.env.PWD + '/knexfile')))