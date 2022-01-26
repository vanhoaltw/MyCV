import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from './translations/en.json'
import vi from './translations/vi.json'


i18n
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: en
      },
      vi: {
        translations: vi
      }
    },
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      useSuspense: false
    }
  });

export default i18n;