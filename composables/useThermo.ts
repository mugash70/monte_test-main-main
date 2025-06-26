
import { ref } from 'vue'

export const useThermo = () => {
  const thermoItemsKeys = ref([
    {
      slug: 'mengtai-beiyuan-2x660mw-thermal-power-plant',
      image: '/media/thermal4.jpg',
      titleKey: 'thermalPower.card1.title',
      contentKeys: [
        'thermalPower.card1.content.paragraph1',
        'thermalPower.card1.content.paragraph2',
        'thermalPower.card1.content.paragraph3',
        'thermalPower.card1.content.paragraph4'
      ]
    },
    {
      slug: 'mengtai-beijiao-2x330mw-thermal-power-plant',
      image: '/media/thermal1.jpg',
      titleKey: 'thermalPower.card2.title',
      contentKeys: [
        'thermalPower.card2.content.paragraph1',
        'thermalPower.card2.content.paragraph2',
        'thermalPower.card2.content.paragraph3'
      ]
    },
    {
      slug: 'mengtai-thermal-power-4x25mw',
      image: '/media/thermal2.jpg',
      titleKey: 'thermalPower.card3.title',
      contentKeys: [
        'thermalPower.card3.content.paragraph1',
        'thermalPower.card3.content.paragraph2',
        'thermalPower.card3.content.paragraph3'
      ]
    },
    {
      slug: 'jungar-road-2x300mw-coal-gangue-thermal-power-plant',
      image: '/media/thermal3.jpg',
      titleKey: 'thermalPower.card4.title',
      contentKeys: []
    }
  ])

  const getThermoBySlug = (slug: string) =>
    thermoItemsKeys.value.find((item) => item.slug === slug) || null

  return { thermoItemsKeys, getThermoBySlug }
}
