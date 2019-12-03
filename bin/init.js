const fs = require('fs')
const fse = require('fs-extra')
const path = require('path')

module.exports = async () => {
  await fse.copy(path.join(__dirname, '..', 'boilerplate', 'api') , process.env.PWD + "/api")
  await fse.copy(path.join(__dirname, '..', 'boilerplate', 'knexfile.js') , process.env.PWD + "/knexfile.js")
}