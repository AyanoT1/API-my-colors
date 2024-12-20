import { Color, newPaletteEntry } from './types'
import palettes from './services/colorsData.json'

function isString (str: any): boolean {
  return typeof str === 'string' || str instanceof String
}

function parseName (nameFromRequest: any): string {
  if (!isString(nameFromRequest)) {
    throw new Error('Incorrect or missing name')
  }

  const parsedName = (nameFromRequest as string).toLocaleLowerCase()

  if (parsedName.length > 50) {
    throw new Error('Attribute name is way too long')
  } else if (parsedName.length < 3) {
    throw new Error('Attribute name is way too short')
  } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(parsedName)) {
    throw new Error('Attribute name must not contain special characters and be in dash-case')
  } else if (palettes.map(c => c.name).includes(parsedName)) {
    throw new Error(`${parsedName} name is already in use`)
  }

  return parsedName
}

function isColor (param: any): boolean {
  if (!isString(param)) {
    throw new Error('All colors must be strings')
  }

  return /^#[0-9A-F]{6}$/i.test(param)
}

function parseColors (colorArrayEntry: any): Color[] {
  if (!(colorArrayEntry instanceof Array)) {
    throw new Error('Attribute colors is required and it must be an array of colors')
  }

  const colorArray = colorArrayEntry

  if (colorArray.length > 20) {
    throw new Error('Max size of the palette is 20')
  } if (colorArray.length < 1) {
    throw new Error('Color array must not be empty')
  } else if (colorArray.reduce((acc: boolean, c) => acc || !isColor(c), false)) {
    throw new Error('All colors must be represented as hexadecimals with 6 characters like #FFFFFF')
  }

  return colorArray as Color[]
}

export function toNewPaletteEntry (object: any): newPaletteEntry {
  const newEntry: newPaletteEntry = {
    name: parseName(object.name),
    colors: parseColors(object.colors)
  }

  return newEntry
}
