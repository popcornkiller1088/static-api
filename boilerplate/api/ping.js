const router = require('express').Router()
const { resolve } = require('path')
const { db } = require('@popcornkiller/static-api')

router.get('/', async (req, res) => {
  const data = await db('post')
  res.json(data)
})

module.exports = router