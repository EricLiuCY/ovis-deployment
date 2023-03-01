export interface language {
  id: string
  title: string
  isDefault?: string
}

export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
  { id: 'zhs', title: 'Chinese Simplified' },
  { id: 'zht', title: 'Chinese Traditional' },
]

export const baseLanguage = supportedLanguages.find((l) => l.isDefault) as language
