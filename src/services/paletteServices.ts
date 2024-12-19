import { ColorPalette } from './types'
import palettes from './colorsData.json'

const allPalettes: ColorPalette[] = palettes as ColorPalette[]

export const getAllPalettes = (): ColorPalette[] => allPalettes
