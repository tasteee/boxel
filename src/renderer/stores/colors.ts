import { datass } from 'datass'
import { arrayHelpers } from '@/modules/array'
import throttle from 'just-throttle'

const DEFULT_COLOR_PALETTE = [
  '#00261C',
  '#044D29',
  '#168039',
  '#45BF55',
  '#96ED89',
  '#00813C',
  '#043E1C',
  '#66D188',
  '#A3F8BA'
]
const DEFAULT_ACTIVE_COLOR = '#168039'
const DEFAULT_COLOR_HISTORY = ['#168039']

class Colors {
  active = datass.string(DEFAULT_ACTIVE_COLOR)
  palette = datass.array<string>(DEFULT_COLOR_PALETTE)
  history = datass.array<string>(DEFAULT_COLOR_HISTORY)

  setActiveColor = throttle((color: string) => {
    this.active.set(color)
  }, 200)

  addColorToHistory = (color: string) => {
    const newHistory = [color, ...this.history.state]
    const uniqueHistory = Array.from(new Set(newHistory))
    const trimmedHistory = arrayHelpers.withMaxLength(uniqueHistory, 14)
    this.history.set(trimmedHistory)
  }

  removeColorFromHistory = (color: string) => {
    const newHistory = arrayHelpers.withoutItems(this.history.state, color)
    this.history.set(newHistory)
  }

  addColorToPalette = (color: string) => {
    // TODO: Toast if color already exists.
    const newPalette = [...this.palette.state, color]
    const uniquePalette = Array.from(new Set(newPalette))
    this.palette.set(uniquePalette)
  }

  removeColorFromPalette = (color: string) => {
    const newPalette = arrayHelpers.withoutItems(this.palette.state, color)
    this.palette.set(newPalette)
  }

  replacePalette = (colors: string[]) => {
    const uniqueColors = Array.from(new Set(colors))
    this.palette.set(uniqueColors)
  }

  clearPalette = () => {
    this.palette.set([])
  }
}

const $colors = new Colors()
export type ColorsT = typeof $colors
export { $colors }

globalThis.$colors = $colors
