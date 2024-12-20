export type Color = `#${string}`

export interface ColorPalette {
  id: number
  name: string
  colors: Color[]
}

export type newPaletteEntry = Omit<ColorPalette, 'id'>
