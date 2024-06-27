export const UkLanguage = {
  Home: 'Home',
  About: 'About',
  Services: 'Services',
  ContactUs: 'Contact Us',
} as const

export type LanguageType = { [K in keyof typeof UkLanguage]: string }
