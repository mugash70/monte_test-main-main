import { ref } from 'vue'

export const useCoal = () => {
  const coalItems = ref([
    { slug: 'manlailiang-coal-mine',
      image: '/media/coalindustry7.jpg', titleKey: 'coalIndustry.developmentProject.card1.title' ,  contentKeys: [
       'coalIndustry.developmentProject.card1.paragraph1', 'coalIndustry.developmentProject.card1.paragraph2', 'coalIndustry.developmentProject.card1.paragraph3'
  ]
},
    { slug: 'fanjiacun-coal-mine',
      image: '/media/coalindustry8.jpg', titleKey: 'coalIndustry.developmentProject.card2.title', contentKeys:  [     'coalIndustry.developmentProject.card2.paragraph1', 'coalIndustry.developmentProject.card2.paragraph2', 
  ]},
    { slug: 'xinxin-coal-mine',
      image: '/media/coalindustry9.jpg', titleKey: 'coalIndustry.developmentProject.card3.title',contentKeys: [
       'coalIndustry.developmentProject.card3.paragraph1', 'coalIndustry.developmentProject.card3.paragraph2',
        
   ] }
  ])

  const getCoalBySlug = (slug: string) => coalItems.value.find(coalItems => coalItems.slug === slug) || null
  return { coalItems, getCoalBySlug }
}