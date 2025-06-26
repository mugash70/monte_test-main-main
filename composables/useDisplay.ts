
import { useDisplay } from 'vuetify'

export const useScreen = () => {
  const { mobile } = useDisplay()
  return { isMobile: mobile }
}
