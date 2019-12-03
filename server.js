const express = require('express')
const app = express()
const path = require('path')
const recursive = require('recursive-readdir')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// app.use(cors())
app.use(cookieParser())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

function ignoreFunc (file, stats) {
  if (!stats.isDirectory() && file) {
    if (file.substr(-2) !== 'js') {
      return true
    }
  }
  return stats.isDirectory() && path.basename(file) === 'middleware'
}

const serverRecursive = async () => {
  const files = await recursive(process.env.PWD + '/api', [ignoreFunc])

  for (let i = 0; i < files.length; i++) {
    const file = files[i]

    app.use(file.replace(process.env.PWD , '').slice(0, -3), require(file))
  }

  app.listen(3000, () => console.log('static api app listening on port 3000!'))
}

module.exports = serverRecursive