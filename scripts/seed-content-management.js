import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding content management data...')

  // Seed Join Us data
  console.log('📝 Seeding Join Us data...')
  
  // Campus Recruitment
  await prisma.joinUs.upsert({
    where: { slug: 'group-management-trainee-en' },
    update: {},
    create: {
      slug: 'group-management-trainee-en',
      title: 'Group Management Trainee',
      description: 'Join our management trainee program and develop your career with us',
      content: JSON.stringify([
        'Comprehensive rotation plan across different departments',
        'Mentorship program with senior executives',
        'Professional development opportunities',
        'Competitive salary and benefits package'
      ]),
      type: 'campus',
      category: 'Full-time',
      location: 'Ordos City',
      salary: '7-15K/month',
      contact: 'Mr. Qiao',
      contactNumber: '04773898646',
      requirements: JSON.stringify([
        'Bachelor\'s degree or above',
        'Strong communication skills',
        'Leadership potential',
        'Willingness to relocate'
      ]),
      responsibilities: JSON.stringify([
        'Participate in rotation program',
        'Learn business operations',
        'Support various departments',
        'Develop management skills'
      ]),
      locale: 'en',
      published: true
    }
  })

  // Staff Style
  await prisma.joinUs.upsert({
    where: { slug: 'staff-culture-en' },
    update: {},
    create: {
      slug: 'staff-culture-en',
      title: 'Our Staff Culture',
      description: 'Discover the vibrant culture and values that drive our team',
      content: JSON.stringify([
        'Innovation and creativity are at the heart of everything we do',
        'We foster a collaborative and inclusive work environment',
        'Professional development and growth opportunities',
        'Work-life balance and employee wellbeing'
      ]),
      type: 'staff-style',
      locale: 'en',
      published: true
    }
  })

  // Seed Party Building data
  console.log('🏛️ Seeding Party Building data...')
  
  await prisma.partyBuilding.upsert({
    where: { slug: 'party-leadership-development-en' },
    update: {},
    create: {
      slug: 'party-leadership-development-en',
      title: 'Party Leadership Development Program',
      description: 'Strengthening party leadership and organizational development',
      content: JSON.stringify([
        'Our party building efforts focus on developing strong leadership capabilities',
        'We emphasize the importance of ideological education and practical application',
        'Regular training sessions and workshops enhance party member engagement',
        'Community outreach programs demonstrate our commitment to social responsibility'
      ]),
      mainImage: '/media/party1.jpg',
      contentImages: JSON.stringify(['/media/party1-2.jpg', '/media/party1-3.jpg']),
      source: 'Party Committee',
      views: 156,
      locale: 'en',
      published: true
    }
  })

  await prisma.partyBuilding.upsert({
    where: { slug: 'community-service-initiative-en' },
    update: {},
    create: {
      slug: 'community-service-initiative-en',
      title: 'Community Service Initiative',
      description: 'Engaging with local communities through volunteer programs',
      content: JSON.stringify([
        'Our party members actively participate in community service activities',
        'Educational support programs for local schools and institutions',
        'Environmental protection and sustainability initiatives',
        'Supporting elderly care and social welfare programs'
      ]),
      mainImage: '/media/party2.jpg',
      source: 'Community Relations',
      views: 89,
      locale: 'en',
      published: true
    }
  })

  // Seed Development History data
  console.log('📅 Seeding Development History data...')
  
  await prisma.developmentHistory.upsert({
    where: { year_locale: { year: 2024, locale: 'en' } },
    update: {},
    create: {
      year: 2024,
      title: '2024 Achievements',
      description: 'Major milestones and achievements in 2024',
      achievements: JSON.stringify([
        'Monte Technology acquired 100% equity of Swiss Menziken Aluminium',
        'Expanded international operations to European markets',
        'Achieved record-breaking production capacity',
        'Implemented advanced sustainability initiatives'
      ]),
      locale: 'en',
      published: true
    }
  })

  await prisma.developmentHistory.upsert({
    where: { year_locale: { year: 2023, locale: 'en' } },
    update: {},
    create: {
      year: 2023,
      title: '2023 Achievements',
      description: 'Significant developments and growth in 2023',
      achievements: JSON.stringify([
        'The Mengtai APT European New Materials Innovation Center was unveiled',
        'Company awarded Advanced Collective of Respecting Teachers in Ordos City',
        'Mengtai Agriculture rated as typical enterprise in autonomous region campaign',
        'Monte Aluminum named top ten technological innovation enterprise in Ordos'
      ]),
      locale: 'en',
      published: true
    }
  })

  // Seed Collaborative Projects data
  console.log('🤝 Seeding Collaborative Projects data...')
  
  await prisma.collaborativeProject.upsert({
    where: { slug: 'new-materials-project-en' },
    update: {},
    create: {
      slug: 'new-materials-project-en',
      title: 'New Materials Development',
      description: 'Advanced aluminum alloy materials and composites for various industries',
      content: JSON.stringify([
        'High-performance aluminum alloy materials for automotive and aerospace',
        'Focus on 6061, 6082, 2024, 7050, 7075 alloy grades',
        'Carbon fiber and composite materials development',
        'Applications in new energy vehicles, electronics, and transportation'
      ]),
      type: 'new-materials',
      image: '/media/project1.jpg',
      contactEmail: 'mtgjmtmy@mengtaigroup.com',
      contactPhone: '15847700664',
      contactName: 'Project Manager',
      address: 'No. 35 Yimei North Road, Ordos, Inner Mongolia, China',
      locale: 'en',
      published: true
    }
  })

  await prisma.collaborativeProject.upsert({
    where: { slug: 'new-energy-project-en' },
    update: {},
    create: {
      slug: 'new-energy-project-en',
      title: 'New Energy Solutions',
      description: 'Hydrogen fuel cells, battery technology, and electric vehicle development',
      content: JSON.stringify([
        'Hydrogen fuel cell technology development',
        'Advanced battery management systems',
        'Electric vehicle research and manufacturing',
        'Renewable energy integration solutions'
      ]),
      type: 'new-energy',
      image: '/media/project2.jpg',
      contactEmail: 'mtgjmtmy@mengtaigroup.com',
      contactPhone: '15847700664',
      contactName: 'Energy Division',
      address: 'No. 35 Yimei North Road, Ordos, Inner Mongolia, China',
      locale: 'en',
      published: true
    }
  })

  console.log('✅ Content management data seeded successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
