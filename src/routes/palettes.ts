import express from 'express'
import { getAllPalettes, getPaletteById } from '../services/paletteServices'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(getAllPalettes())
})

router.get('/id/:id', (req, res) => {
  const palette = getPaletteById(+req.params.id)
  if (palette !== undefined) {
    res.send(palette)
  } else {
    res.status(400).send({ error: 'Palette not found' })
  }
})

export default router
