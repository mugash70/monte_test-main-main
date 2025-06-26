export interface StaffStyleDetail {
  slug: string
  titleKey: string
  date: string
  source: string
  views: string
  mainImage: string
  contentImages: string[]
  paragraphs: string[]
}

export const staffStyleCards: StaffStyleDetail[] = [
  {
    slug: 'monte-2024-ordos-marathon-official-training-camp-concludes-successfully',
    titleKey: 'staffStyle.card1.title',
    mainImage: '/media/staff1.png',
    date: '2024-06-29',
    source: 'staffStyle.card1.source',
    views: '345',
    contentImages: [],
    paragraphs: [
      'staffStyle.card1.description[0]',
      'staffStyle.card1.description[1]',
      'staffStyle.card1.description[2]',
      'staffStyle.card1.description[3]'
    ]
  },
  {
    slug: 'staff2',
    titleKey: 'staffStyle.card2.title',
    mainImage: '/media/staff2.jpg',
    date: '2023-07-03',
    source: 'staffStyle.card2.source',
    views: '566',
    contentImages: ['/staff2-2.png', '/staff2-3.png','/staff2-4.jpg', '/staff2-5.pmg','/staff2-6.png'],
    paragraphs: [
      'staffStyle.card2.description[0]',
      'staffStyle.card2.description[1]',
      'staffStyle.card2.description[2]',
      'staffStyle.card2.description[3]',
      'staffStyle.card2.description[4]',
    ]
  },
  {
    slug: 'staff3',
    titleKey: 'staffStyle.card3.title',
    mainImage: '/media/staff3.jpg',
    date: '2022-04-05',
    source: 'staffStyle.card3.source',
    views: '668',
    contentImages: [],
    paragraphs: [
      'staffStyle.card3.description[0]',
      'staffStyle.card3.description[1]',
      'staffStyle.card3.description[2]',
       'staffStyle.card3.description[3]'
    ]
  },
  {
    slug: 'staff4',
    titleKey: 'staffStyle.card2.title',
    mainImage: '/media/staff4.jpg',
    date: '2021-07-05',
    source: 'staffStyle.card4.source',
    views: '4979',
    contentImages: ['/party4-1.png', '/party4-2.jpg','/party4-3.jpg', '/party4-4.jpg'],
    paragraphs: [
      'staffStyle.card4.description[0]',
      'staffStyle.card4.description[1]'
    ]
  }
 
]