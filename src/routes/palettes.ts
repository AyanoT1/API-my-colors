import express from 'express'
import { addPalette, getAllPalettes, getPaletteById, getPaletteByName } from '../services/paletteServices'
import { toNewPaletteEntry } from '../utils'

const router = express.Router()

router.get('/', (_, res) => {
  res.send(getAllPalettes())
})

router.get('/id/:id', (req, res) => {
  const palette = getPaletteById(+req.params.id)
  if (palette !== undefined) {
    res.send(palette)
  } else {
    res.status(400).send({ error: `Palette of id: ${req.params.id} not found` })
  }
})

router.get('/name/:name', (req, res) => {
  const palette = getPaletteByName(req.params.name)
  if (palette !== undefined) {
    res.send(palette)
  } else {
    res.status(400).send({ error: `Palette of name: ${req.params.name} not found` })
  }
})

router.post('/', (req, res) => {
  try {
    const newPaletteEntry = toNewPaletteEntry(req.body)

    const addedPaletteEntry = addPalette(newPaletteEntry)

    res.json(addedPaletteEntry)
  } catch (error) {
    res.status(400).send((error as Error).message)
  }
})

export default router
