import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { sanityFetch } from '@/sanity/lib/client'
import { GENERAL_CONFIG_QUERY } from '@/sanity/lib/queries'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function hexToHsl(hex?: string | null) {
  if (!hex) {
    throw new Error('Invalid HEX value!')
  }
  // Remove o símbolo '#' se presente
  const hexWithoutHash = hex.replace(/^#/, '')

  // Converte o valor HEX para valores de R, G e B
  const r = Number.parseInt(hexWithoutHash.slice(0, 2), 16) / 255
  const g = Number.parseInt(hexWithoutHash.slice(2, 4), 16) / 255
  const b = Number.parseInt(hexWithoutHash.slice(4, 6), 16) / 255

  // Calcula os valores de mínimo e máximo
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  // Calcula a luminância
  const luminance = (max + min) / 2

  let hue = 0
  let saturation = 0

  if (max !== min) {
    const delta = max - min
    saturation = luminance > 0.5 ? delta / (2 - max - min) : delta / (max + min)

    switch (max) {
      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0)
        break
      case g:
        hue = (b - r) / delta + 2
        break
      case b:
        hue = (r - g) / delta + 4
        break
    }

    hue *= 60
  }

  return {
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    l: Math.round(luminance * 100),
  }
}

async function generateTWColors() {
  const generalConfig = await sanityFetch({
    query: GENERAL_CONFIG_QUERY,
  })

  return {
    eventColors: generalConfig?.eventColors,
    baseColor: generalConfig?.baseColor,
    textColor: generalConfig?.textColor,
    radius: generalConfig?.roundingOfComponents,
  }
}

export const generateStyleObject = async () => {
  const { eventColors, radius, baseColor, textColor } = await generateTWColors()
  const base = hexToHsl(baseColor!)
  const text = hexToHsl(textColor!)
  const primary = hexToHsl(eventColors?.primaryColor?.hex!)
  const secondary = hexToHsl(eventColors?.secondaryColor?.hex!)
  const borderRadius = radius!

  const textMap: Record<typeof borderRadius, string> = {
    pill: '100px',
    rounded: '0.5rem',
    square: '0px',
  }

  const style = {
    '--background': `${base.h} ${base.s}% ${base.l}%`,
    '--card': `${base.h} ${base.s}% ${base.l}%`,
    '--popover': `${base.h} ${base.s}% ${base.l}%`,
    '--primary-foreground': `${base.h} ${base.s}% ${base.l}%`,
    '--destructive-foreground': `${base.h} ${base.s}% ${base.l}%`,

    '--primary': `${primary.h} ${primary.s}% ${primary.l}%`,

    '--muted-foreground': `${text.h} ${text.s}% 45%`,

    '--secondary': `${secondary.h} ${secondary.s}% 93%`,
    '--muted': `${secondary.h} ${secondary.s}% 93%`,
    '--accent': `${secondary.h} ${secondary.s}% 93%`,

    '--foreground': `${text.h} ${text.s}% ${text.l}%`,
    '--card-foreground': `${text.h} ${text.s}% ${text.l}%`,
    '--popover-foreground': `${text.h} ${text.s}% ${text.l}%`,
    '--secondary-foreground': `${text.h} ${text.s}% ${text.l}%`,
    '--accent-foreground': `${text.h} ${text.s}% ${text.l}%`,

    '--radius': textMap[borderRadius],
  }

  return style
}
