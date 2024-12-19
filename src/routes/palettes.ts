import express from 'express'

const router = express.Router()

router.get('/', (_, res) => {
  console.log('workin')
  res.send('Working on it chief')
})

export default router
