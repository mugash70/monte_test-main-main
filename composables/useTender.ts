import { ref } from 'vue'

export const useTender = () => {


  const bid = ref([
    {
      slug: 'announcement-bidding-third-party-review-agency-fire-renovation-project-design-ordos-mengtai-fanjiacun-coal-industry',
      date: '2025-05-30', 
      descriptionKey: 'offline.bid.description',
      source: 'offline.bid.source',
      views: 'offline.bid.views',
      projectName: 'offline.bid.project',
      organizer: 'offline.bid.organizer',
      tenderOpeningLocation: 'offline.bid.location',
      releaseTime: 'offline.bid.release',
      openingTime: 'offline.bid.opening',
      files: [
        { url: '/pdfs/sample.docx' },
      ],
    },
  ])

  const notice = ref([
 
    {
      slug: 'announcement-on-the-bidding-of-carbon-emission-quota-index-procurement-of-beijiao-thermal-power-branch-of-inner-mongolia-mengtai-group-co-ltd',
      date: '2025-05-27',
      descriptionKey: 'offline.notice.description',
      source: 'offline.notice.source',
      views: 'offline.notice.views',
      projectName: 'offline.notice.project',
      organizer: 'offline.notice.organizer',
      tenderOpeningLocation: 'offline.notice.location',
      releaseTime: 'offline.notice.release',
      openingTime: 'offline.notice.opening',
      files: [
        { url: '/pdfs/sample.pdf' },
      ],
    }
 
  ])

  const getNoticeBySlug = (slug: string) => notice.value.find(notice => notice.slug === slug) || null
  const getBidBySlug = (slug: string) => bid.value.find(bid => bid.slug === slug) || null

  return { notice,bid,getNoticeBySlug,getBidBySlug }
}
