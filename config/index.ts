import type { Metadata } from 'next'

export const siteConfig: Metadata = {
  title: 'OPREMI ME: Preoblikujte svojo sobo z Umetno Inteligenco',
  description: 'Naložite slike svoje sobe ter izberite želeni način in slog. Umetna inteligenca bo ustvarila prilagojene oblikovalske ideje na podlagi vaših vnosov.',
  keywords: [
    'notranji dezajn',
    'oblikovanje prostora',
    'notranji design',
    'sobni oblikovalec',
    'sobni generator',
    'dnevna soba ideje',
    'generator pohistva',
    'oblikovalec pohistva',
    'notranji prostori',
  ] as Array<string>,
  authors: {
    name: 'Prepad d.o.o.',
    url: 'https://prepad.si',
  },
} as const
