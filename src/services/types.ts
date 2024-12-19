export type Color = `#${string}`

export interface ColorPalette {
  id: number
  name: string
  colors: Color[]
}

export type newPalette = Omit<ColorPalette, 'id'>
