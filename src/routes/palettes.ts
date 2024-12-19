import express from 'express'
import { getAllPalettes } from '../services/paletteServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(getAllPalettes())
})

export default router
