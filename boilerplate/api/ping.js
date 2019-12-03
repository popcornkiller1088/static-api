const router = require('express').Router()

router.get('/', async (req, res) => {
  res.json('pong')
})

module.exports = router