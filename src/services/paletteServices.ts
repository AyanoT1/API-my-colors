import { ColorPalette } from '../types'
import palettes from './colorsData.json'

const allPalettes: ColorPalette[] = palettes as ColorPalette[]

export const getAllPalettes = (): ColorPalette[] => allPalettes

export function getPaletteById (id: number): ColorPalette | undefined {
  const result = allPalettes.find(d => d.id === id)
  return (result != null) ? result : undefined
}

export function getPaletteByName (name: string): ColorPalette | undefined {
  const result = allPalettes.find(d => d.name === name)
  return (result != null) ? result : undefined
}
