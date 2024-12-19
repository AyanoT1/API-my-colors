import express from 'express'
import paletteRouter from './routes/palettes'

const app = express()
app.use(express.json())

const PORT = 4000

app.use('/api/palettes', paletteRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
