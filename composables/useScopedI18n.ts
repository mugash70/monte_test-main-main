
import { useI18n } from 'vue-i18n'

export const useScopedI18n = (namespace: string, getTranslations: (locale: string) => any) => {
  const { t, locale } = useI18n()

  const scopedT = (key: string) => t(`${namespace}.${key}`)

  const getTranslation = () => getTranslations(locale.value)

  return {
    t: scopedT,
    locale,
    getTranslation,
  }
}
