import { generateTWColors } from './generate-tw-colors'
import { hexToHsl } from './hex-to-hsl'

export const generateStyleObject = async () => {
  const { radius, primaryColor } = await generateTWColors()
  const primary = hexToHsl(primaryColor?.hex)
  const borderRadius = radius!

  const textMap: Record<typeof borderRadius, string> = {
    pill: '100px',
    rounded: '0.5rem',
    square: '0px',
  }

  const style = {
    '--primary': `${primary.h} ${primary.s}% ${primary.l}%`,
    '--radius': textMap[borderRadius],
  }

  return style
}
