export interface PartyBuildingDetail {
  slug: string
  titleKey: string
  date: string
  source: string
  views: string
  mainImage: string
  contentImages: string[]
  paragraphs: string[]
}

export const partyBuildingCards: PartyBuildingDetail[] = [
  {
    slug: 'party-2',
    titleKey: 'partyBuilding.card2.title',
    mainImage: '/media/party2.jpg',
    date: '2023-07-03',
    source: 'partyBuilding.card2.source',
    views: '566',
    contentImages: ['/party2-1.png', '/party2-2.jpg','/party2-3.jpg', '/party2-4.jpg','/party2-5.jpg'],
    paragraphs: [
      'partyBuilding.card2.description[0]',
      'partyBuilding.card2.description[1]'
    ]
  },
  {
    slug: 'party-3',
    titleKey: 'partyBuilding.card3.title',
    mainImage: '/media/party3.png',
    date: '2022-04-05',
    source: 'partyBuilding.card3.source',
    views: '668',
    contentImages: [],
    paragraphs: [
      'partyBuilding.card3.description[0]',
      'partyBuilding.card3.description[1]',
      'partyBuilding.card3.description[2]'
    ]
  },
  {
    slug: 'party-4',
    titleKey: 'partyBuilding.card4.title',
    mainImage: '/media/party4.png',
    date: '2021-07-05',
    source: 'partyBuilding.card4.source',
    views: '4979',
    contentImages: ['/party4-1.png', '/party4-2.jpg','/party4-3.jpg', '/party4-4.jpg'],
    paragraphs: [
      'partyBuilding.card4.description[0]',
      'partyBuilding.card4.description[1]'
    ]
  },
 
]