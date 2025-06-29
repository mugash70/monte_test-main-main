import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding news and media materials...')

  // Create sample news articles
  const newsArticles = [
    {
      slug: 'monte-group-expansion-2024',
      title: 'Monte Group Announces Major Expansion Plans for 2024',
      description: 'Monte Group reveals ambitious expansion strategy focusing on sustainable aluminum production and renewable energy initiatives.',
      content: `
        <p>Monte Group, a leading aluminum production company, has announced comprehensive expansion plans for 2024 that will significantly increase production capacity while maintaining environmental sustainability standards.</p>
        
        <p>The expansion includes:</p>
        <ul>
          <li>Construction of a new state-of-the-art aluminum smelting facility</li>
          <li>Investment in renewable energy infrastructure</li>
          <li>Implementation of advanced recycling technologies</li>
          <li>Creation of 500 new jobs across multiple locations</li>
        </ul>
        
        <p>"This expansion represents our commitment to meeting growing global demand for sustainable aluminum products while maintaining our environmental responsibilities," said CEO Ao Fengting.</p>
      `,
      image: '/media/news2.png',
      source: 'Monte Group Press Release',
      locale: 'en',
      published: true
    },
    {
      slug: 'environmental-sustainability-initiative',
      title: 'Monte Group Launches Environmental Sustainability Initiative',
      description: 'New comprehensive program aims to reduce carbon footprint by 40% over the next five years through innovative technologies and practices.',
      content: `
        <p>Monte Group has launched an ambitious environmental sustainability initiative designed to significantly reduce the company's carbon footprint and environmental impact.</p>
        
        <p>Key components of the initiative include:</p>
        <ul>
          <li>Transition to 100% renewable energy sources by 2027</li>
          <li>Implementation of advanced waste reduction technologies</li>
          <li>Water conservation and recycling programs</li>
          <li>Reforestation projects in local communities</li>
        </ul>
      `,
      image: '/media/news4.jpg',
      source: 'Environmental Department',
      locale: 'en',
      published: true
    },
    {
      slug: 'technology-innovation-award',
      title: 'Monte Group Receives Technology Innovation Award',
      description: 'Company recognized for breakthrough aluminum recycling technology that increases efficiency by 35% while reducing energy consumption.',
      content: `
        <p>Monte Group has been honored with the prestigious Technology Innovation Award for its groundbreaking aluminum recycling technology.</p>
        
        <p>The award-winning technology features:</p>
        <ul>
          <li>35% increase in recycling efficiency</li>
          <li>25% reduction in energy consumption</li>
          <li>Significant reduction in waste production</li>
          <li>Enhanced product quality and consistency</li>
        </ul>
      `,
      image: '/media/news7.jpg',
      source: 'Technology Awards Committee',
      locale: 'en',
      published: true
    }
  ]

  for (const article of newsArticles) {
    await prisma.news.create({
      data: article
    })
  }

  // Create sample media materials
  const mediaItems = [
    {
      title: 'Monte Group Corporate Overview Video',
      description: 'Comprehensive overview of Monte Group operations, facilities, and commitment to sustainability.',
      type: 'video',
      filename: 'corporate-overview.mp4',
      originalName: 'Monte Group Corporate Overview.mp4',
      path: '/media/media1.mp4',
      thumbnailPath: '/media/media1l.png',
      size: 52428800, // 50MB
      mimeType: 'video/mp4',
      duration: 180, // 3 minutes
      dimensions: '1920x1080',
      locale: 'en',
      published: true
    },
    {
      title: 'Aluminum Production Process Documentary',
      description: 'Behind-the-scenes look at our state-of-the-art aluminum production facilities and processes.',
      type: 'video',
      filename: 'production-process.mp4',
      originalName: 'Aluminum Production Process.mp4',
      path: '/media/media2.mp4',
      thumbnailPath: '/media/media2l.png',
      size: 73400320, // 70MB
      mimeType: 'video/mp4',
      duration: 240, // 4 minutes
      dimensions: '1920x1080',
      locale: 'en',
      published: true
    },
    {
      title: 'Monte Group Facility Aerial View',
      description: 'Stunning aerial photography showcasing the scale and modern design of our production facilities.',
      type: 'image',
      filename: 'facility-aerial.jpg',
      originalName: 'Monte Group Facility Aerial View.jpg',
      path: '/media/facility-aerial.jpg',
      size: 2048000, // 2MB
      mimeType: 'image/jpeg',
      dimensions: '3840x2160',
      locale: 'en',
      published: true
    },
    {
      title: 'Sustainability Report 2024',
      description: 'Comprehensive annual sustainability report detailing environmental initiatives and achievements.',
      type: 'pdf',
      filename: 'sustainability-report-2024.pdf',
      originalName: 'Monte Group Sustainability Report 2024.pdf',
      path: '/pdfs/sustainability-report-2024.pdf',
      size: 5242880, // 5MB
      mimeType: 'application/pdf',
      locale: 'en',
      published: true
    }
  ]

  for (const item of mediaItems) {
    await prisma.mediaMaterial.create({
      data: item
    })
  }

  console.log('✅ Seeding completed successfully!')
  console.log(`Created ${newsArticles.length} news articles`)
  console.log(`Created ${mediaItems.length} media materials`)
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
