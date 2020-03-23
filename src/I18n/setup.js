import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { ptBR, en } from './translation'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    defaultNS: 'core',
    fallbackLng: 'pt-BR',
    resources: {
      'pt-BR': ptBR,
      en,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      useSuspense: true,
    },
    detection: {
      caches: ['localStorage'],
      order: ['querystring', 'localStorage'],
      lookupQuerystring: 'lng',
    },
  })

export default i18n

export function initializeI18n() {
  return i18n
}