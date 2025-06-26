<template>
  <section class="external-banner" :style="{ backgroundImage: `url(${defaultImage})` }">
    <div class="banner-content">
      <div class="banner-title-wrapper" :class="{ 'vertical-text': isMongolian }">
        <h1 class="banner-title">{{ defaultTitle }}</h1>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import { useScopedI18n } from '@/composables/useScopedI18n'


const en ={
  "nav": {
    "Menu": "Menu",
    "Group Website Group": "Group Website",
    "Monte Group": "Monte Group",
    "Apt": "APT",
    "Staff Channel": "Staff Channel",
    "Collaborative Office": "Collaborative Office",
    "Corporate Email": "Corporate Email",
    "Language": "Language",
    "English": "English",
    "Chinese": "Chinese",
    "Mongolian": "Mongolian",
    "Close": "Close",
    "Group Website": "Group Website"
  },
  "Join Us": "Join Us",
  "tabs": {
    "Social Recruitment": "Social Recruitment",
    "Campus Recruitment": "Campus Recruitment",
    "Staff Style": "Staff Style",
    "${tab}": " translate"
  },
  "form": {
    "Please enter job keywords": "Please enter job keywords",
    "Job Category": "Job Category",
    "Work Location": "Work Location",
    "Search": "Search",
    "2025-03-14": "2025-03-14",
    "We are willing to work together with all people of insight to create a better future!": "We are willing to work together with all people of insight to create a better future!",
    "No relevant information found!": "No relevant information found!",
    "Salary Range": "Salary Range",
    "Contact": "Contact",
    "Contact Number": "Contact Number",
    "Job Responsibilities": "Job Responsibilities",
    "Qualifications": "Qualifications",
    "Submit Your Resume": "Submit Your Resume",
    "Group Management Trainee": "Group Management Trainee",
    "Undergraduate": "Undergraduate",
    "50 people": "50 people",
    "Full-time": "Full-time",
    "All": "All",
    "Ordos City": "Ordos City",
    "7-15K/month": "7-15K/month",
    "Mr. Qiao": "Mr. Qiao",
    "04773898646": "04773898646",
    "rotationPlan": "Rotation plan:",
    "rotationPoint1": "✅ 1-year cycle, covering the three major sectors of \"function + production + profession\"",
    "rotationPoint2": "✅ Cross-departmental practice, comprehensive understanding of group operations",
    "mentorship": "Mentorship:",
    "mentorshipPoint1": "✅ 3+1 mentor (human resources + profession + rotation + executive mentor)",
    "mentorshipPoint2": "✅ Full guidance to help career transformation",
    "educationRequirement": "Education requirements: Bachelors or Masters degree graduates (priority is given to key universities)",
    "recruitingMajors": "Recruiting majors: Law, Management, Mathematics, Financial Management, Project Management, Chinese Language and Literature, Foreign Languages, Food, Brewing, Gardening and Horticulture, Agronomy, Animal Science, Metallurgy, Materials, Machinery, Equipment, Energy and Power, Electrical, Chemistry and Chemical Engineering, Computer, Marketing, Economics and Trade, Engineering Management, Safety Management, Environmental Engineering, Supply Chain Management, New Energy Science, Wind Power, Mineral Mining and Processing",
    "${selectedCategory}": " translate",
    "${category}": " translate",
    "${selectedLocation}": " translate",
    "${location}": " translate",
    "${job": {
      "title}": " translate",
      "degree}": " translate",
      "vacancies}": " translate",
      "category}": " translate",
      "location}": " translate"
    }
  },
  "partyBuilding": {
    "title": "Party Building",
    "source": "Source",
    "views": "Views",
    "card1": {
      "source": "",
      "views": "94",
      "title": "The Mengtai Group Party Committee held a themed party day event to 'forge a strong sense of community for the Chinese nation' and celebrate the 103rd anniversary of the founding of the Party",
      "description": [
        "On June 27, the Party Committee of the Group Company carried out the theme party day activities of 'Forge a Strong Sense of Community for the Chinese Nation' and celebrating the 103rd anniversary of the founding of the Party. It organized some party representatives and activists to listen to special party classes, watch patriotic films, and review the party oath. It actively implemented the requirements of the superior party organizations on carrying out party discipline learning and education and forging a strong sense of community for the Chinese nation, gave full play to the role of the enterprise party organization as a fighting fortress and the vanguard and exemplary role of party members, promoted high-quality development with high-quality party building, and contributed to the transformation and development of the enterprise and the prosperity of social undertakings.",
        "Kang Weicheng, Secretary of the Party Committee and Vice President of the Group, Gao Zhanrong, Deputy Secretary of the Party Committee and Vice President of the Group, and other party members and cadres as well as more than 60 party representatives from various branches attended the event.",
        "In the morning, the company invited Professor Yang Xingmeng, deputy director of the National Theory and Policy Teaching and Research Department of the Inner Mongolia Party School, to hold a special lecture on 'Firmly Grasping the Main Line of the Work of Forging a Consciousness of the Chinese Nation Community'. Professor Yang combined theory with practice and gave a profound and easy-to-understand explanation, which made everyone deeply understand that the consciousness of the Chinese nation community is the inevitable result of the historical development of the Chinese nation, and also made everyone have a more comprehensive and profound understanding of the great significance and profound connotation of forging a consciousness of the Chinese nation community",
        "Afterwards, everyone watched the patriotic film 'Volunteer Army - Heroic Soldiers Attack'. This film is the first part of the trilogy of red patriotic films 'Volunteer Army'. It starts with the central government's decision to enter the Korean War and ends with the signing of the armistice agreement. It presents the great deeds of the heroic People's Volunteer Army in the War to Resist US Aggression and Aid Korea in a panoramic and multi-level manner, eulogizes the heroic feats of the Volunteer Army soldiers fighting bloody battles, and writes an immortal epic of national spirit, which makes people cry and can't forget for a long time, and inspires us to remember history, cherish peace, fear no difficulties, and move forward courageously.",
        "Party member representatives reviewed the party oath, solemnly swore in front of the party flag, and pursued their original intention of joining the party: 'I volunteer to join the Communist Party of China... I am ready to sacrifice everything for the party and the people at any time and never betray the party.' Let party members not forget their lofty mission and lofty ideals, keep in mind the promises they made to the party organization at the beginning of joining the party, let their thoughts be baptized, their party spirit be tempered, and reorganize their luggage and set out again.",
        "The colorful and interesting team games allow everyone to experience the corporate spirit of unity, cooperation and hard work while relaxing.",
        "Next, the majority of party members and cadres of Monte Group will take this theme party day activity as an opportunity to strengthen their confidence, work hard, abide by their commitments to the party in their future work and life, strive to be pioneers based on their duties, and fully promote the high-quality transformation and upgrading of the group company with more high morale and enterprising attitude."
      ]
    },
    "card2": {
      "source": "",
      "views": "238",
      "title": "The Party Committee of Mengtai Group held a special training course on studying and implementing 'Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era' at Chengchuan Cadre College in Inner Mongolia",
      "description": [
        "As the whole country celebrates the 102nd anniversary of the founding of the Communist Party of China, in order to study and implement Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era, carry forward the great spirit of party building, and further improve the party spirit and performance of the majority of party members and party activists, the Mengtai Group Party Committee held a special training course on studying and implementing 'Xi Jinping Thought on Socialism with Chinese Characteristics for a New Era' at the Inner Mongolia Chengchuan Cadre College from June 30 to July 2. Kang Weicheng, Secretary of the Party Committee and Vice President of the Group, and Ji Xiong, Vice President of the Inner Mongolia Chengchuan Cadre College, attended the opening ceremony.",
        "Ji Xiong extended a warm welcome to all the trainees who came to the college for training. He introduced the revolutionary history of E'qian Banner and its important historical contributions, the preparation and development of the college, and the training situation since its establishment. He also emphasized what to learn specifically at Chengchuan Cadre College and how to ensure that they learn well.",
        "Kang Weicheng, Secretary of the Party Committee and Vice President of the Group, delivered a mobilization speech at the opening ceremony. In his speech, he pointed out that all trainees should improve their political stance, constantly temper their party spirit and improve their personal cultivation through learning, thinking, understanding and practicing, so as to lay a solid ideological foundation for their daily work and life; at the same time, they should study and accumulate seriously, and everyone must calm down and concentrate during the training process to achieve mutual promotion and comprehensive improvement; finally, they should constantly improve themselves, take further practice of the professional spirit of private enterprise employees as a starting point, be politically mature and reliable, ideologically proactive, and work hard to accelerate the process of forging the Monte Group's corporate workforce."
      ]
    },
    "card3": {
      "source": "",
      "views": "445",
      "title": "Commemorate the heroes and move forward courageously",
      "description": [
        "On April 5, the Party Committee of Monte Group organized some leaders and employee representatives to visit the Revolutionary Martyrs Cemetery in Yikezhao Park, lay wreaths at the Revolutionary Martyrs Monument, and deeply commemorate the revolutionary heroes.",
        "Today, the weather at the Revolutionary Martyrs Cemetery was clear and sunny, and the heroic monument to the revolutionary martyrs was set among the green pines and cypresses, looking solemn and majestic. All personnel held flowers in their hands, lined up in order, bowed in silence, presented wreaths, and paid their sincerest respects to the martyrs who heroically sacrificed their lives for the revolutionary cause with infinite grief.",
        "Looking back on the past, we should remember where our water came from. It was the Communist Party of China that led generation after generation of Chinese people from one victory to another, and it was countless revolutionary martyrs who used their youth and blood to exchange for our happy life today.",
        "The mountains are silent, but the monuments are everlasting. Mengtai people will carry forward the will of their ancestors, promote the spirit of the martyrs, strengthen their ideals and beliefs, continue to forge ahead, give back to the society with responsibility and commitment, and write a new chapter of the great rejuvenation of the Chinese nation with their youth and struggle."
      ]
    },
    "card4": {
      "source": "",
      "views": "1233",
      "title": "Mengtai Group held a themed party day event to celebrate the 100th anniversary of the founding of the Party",
      "description": [
        "On June 26, the Party Committee of Mengtai Group organized some party members and probationary party members to carry out various and rich theme party day activities, such as party members' hiking, party members talking about party history, old employees talking about entrepreneurial history, red song medley, and reviewing the party oath, to celebrate the 100th anniversary of the founding of the Communist Party of China. The activity was themed 'Revisiting the Long March and embarking on a new journey in a hundred years'. It encouraged the majority of party members to know the party history, feel the party's grace, listen to the party, follow the party, draw wisdom and strength from the party's century-long struggle, and educate the majority of party members to love their jobs, forge ahead, and make greater contributions to the comprehensive construction of a modern socialist country with more positive and enterprising spirit and actions."
      ]
    }
  },
  "companyProfile": {
    "title": "Company Profile",
    "intro1": "Inner Mongolia Mengtai Group Co., Ltd. is an enterprise that pursues excellence and advocates modern civilization. The company is located in Ordos, Inner Mongolia, China, which is famous for its beautiful grassland",
    "intro2": "The company was established in 2001 and currently has more than 7,500 employees and an annual operating income of 50 billion yuan . The company ranks 252nd among the top 500 private enterprises in China , 176th among the top 500 private enterprises in China's manufacturing industry , and among the top 5 of the top 100 private enterprises in Inner Mongolia Autonomous Region . It is a benchmark enterprise for scientific and technological innovation in Ordos City. The company is mainly engaged in industrial industries such as coal, electricity, urban heating, aluminum, aluminum alloy materials, aluminum deep processing, and modern agriculture and animal husbandry industries. The annual coal production capacity exceeds 30 million tons , the installed capacity of thermal power and new energy is 4 million kilowatts, the heating capacity is 38 million square meters, the annual production of primary aluminum is 500,000 tons, the annual production of high-end deformed aluminum alloy materials and cast aluminum alloy materials is 100,000 tons each, and the aluminum deep processing capacity in Europe is 220,000 tons.",
    "detail1": "The agricultural and animal husbandry industry project has built two green and pollution-free breeding bases with a total area of ​​about 1,300 hectares. The scale of black donkey breeding has reached 5,000 heads, and it is planned to reach 10,000 heads within three years. It has helped more than 3,000 local farmers and herdsmen to increase their income and become rich. The company cooperated with the British Scottish Whisky Company to build a whisky project with an annual output of 800,000 liters .",
    "detail2": "The company respects nature and advocates green. The company is located in a place with rich and good land and mineral resources. Relying on these resource advantages, the company has built a resilient and competitive industrial chain. The company regards these resources as precious gifts bestowed by nature to mankind, and thus cherishes all kinds of resources obtained.",
    "detail3": "The basic concept of the company is to 'make limited resources infinite and make infinite undertakings green', that is, to maximize the benefits of the resources in hand, prolong their life, and benefit enterprises, society and people more. Under the guidance of this concept, the industrial chain built by the company is based on recycling and green as the basic characteristics, that is, the products produced by the company are built on a chain that relies on and connects each other, such as using waste water discharged from the city to generate electricity, using the waste heat of power generation to heat the city, and using the waste fly ash of power generation to prepare aluminum silicon alloy materials and building materials; using the leftovers of wine products, distiller's grains, as feed for breeding, using livestock manure to fertilize the land, and growing vegetables on land far away from chemical fertilizers and pesticides.",
    "detail4": "The company actively embraces technology and promotes the circulation of product production methods and the extension and expansion of the industrial chain through technological innovation. In recent years, the company has cooperated with many well-known universities and research institutes in China, such as Shanghai Jiaotong University, Northeastern University, Tianjin University, and Beijing Information Science and Technology University, to research and develop new project products such as high-quality utilization of high-aluminum coal-based solid waste, high-performance aluminum alloy materials, unmanned aerial vehicles and express cabinets, and actively pay attention to and invest in wind power and photovoltaic new energy power generation projects.",
    "detail5": "The company has a high level of management awareness. Since its establishment, it has always regarded management as the most important business philosophy of the company. It continues to learn advanced management concepts and experiences at home and abroad, and combines its own management practices to explore a set of management methods that constantly surpass itself, and promote the overall management of the company to the leading level in the domestic industry.",
    "detail6": "Since its establishment, the company has experienced many risk shocks such as the Asian financial crisis and the global financial crisis, but it has always maintained a relatively stable profit level and good growth.",
    "detail7": "The company attaches great importance to safety and environmental protection. It would rather not produce if it is unsafe and not environmentally friendly. Various safety and environmental protection indicators have reached or even exceeded national and industry standards, achieving a high degree of harmony and unity between corporate development, environmental protection and employee health and safety.",
    "detail8": "The company adheres to the concept of gratitude and continues to give back to the society while insisting on its own development. In the past ten years, the company has donated more than 500 million yuan in cash and materials to global environmental governance, social disaster relief, poverty relief, and local education, culture and sports development.",
    "detail9": "In the future, the company will continue to take 'green development, technology-driven, global perspective, and win-win cooperation as its basic concept, and continue to expand and strengthen the integrated industrial industry and agricultural and animal husbandry industry of 'coal-electricity-heat-aluminum-materials-deep processing'. All outstanding domestic and foreign companies that are committed to this are partners of Monte Group.",
    "detail10": " At the same time, we also look to the world, open our minds and extend a hand of cooperation to outstanding companies in the world, and strive to build a modern new enterprise with world-leading level that integrates 'aluminum alloy new material production, wind and solar new energy development, and high-quality utilization of high-aluminum coal-based solid waste' with multiple complementarity and circular linkage."
  },
  "corporateCulture": {
    "title": "Corporate Culture",
    "mission": {
      "title": "Mission",
      "subtitle": "Make limited resources infinite",
      "content": "Monte believes that all resources are limited and unlimited at the same time. We need to cherish limited resources a hundredfold and use people's unlimited creativity, scientific outlook on development and advanced technology to develop, utilize and transform the potential of limited resources to bring out their infinite value, open up infinite and broad prospects for Monte's long-term foundation and social development, and leave green mountains and clear waters, blue skies and white clouds for future generations. This is also the true meaning of Monte's survival and development."
    },
    "development": {
      "title": "Development Outlook",
      "content": "Industry foundation, cultural leadership\nSystem-driven, talent-driven"
    },
    "coreValues": {
      "title": "Core Values",
      "subtitle": "Transcendence, Realism, Humanism",
      "content": "The \"iron triangle\" of Monte's core values.\n\nTranscendence: It means \"three steps\". \"One step ahead\" means to be ahead of the market, \"one step evolution\" means to be better than the original self, and \"one step reverse\" means to be able to reverse a step in the fierce competition.\n\nRealism: Seek truth from facts - not only follow the superiors, not only follow yesterday, not only follow profits, but be realistic.\n\nHumanism: People first, things second; respect personality, win-win contract; integrate talents without boundaries, integrate wisdom globally."
    },
    "methodology": {
      "title": "Methodology",
      "subtitle": "",
      "content": "Enterprise ecosystem, emerging data centers, and disruptive entrepreneurship\n\nMonte Think Tank, Monte Grand Prix, and Benchmark Management\n\nInternal marketization + win-win salary contract\n\nDual-target management, 48-hour replication"
    },
    "culturalTotem": {
      "title": "Cultural Totem",
      "subtitle": "Wolf",
      "content": "Monte advocates the insight, fighting spirit and teamwork contained in the \"Wolf Spirit\".\n\nInsight: Be as sharp as a wolf, and know when to strike, to give up, and to plan when necessary.\n\nFighting spirit: Like a wolf, good at fighting, resilient, charging into battle, and daring to win.\n\nTeam strength: like wolves, with goals, division of labor, collaboration and sharing."
    },
    "culturalMotto": {
      "title": "Cultural Motto",
      "corporateStyle": {
        "title": "Corporate Style",
        "content": "Respond quickly and act immediately"
      },
      "marketManagement": {
        "title": "Market Management Concept",
        "content": "There are only uncivilized ideas, but no markets that cannot be developed"
      },
      "talentOutlook": {
        "title": "Talent Outlook",
        "content": "Everyone has talent, and horse racing doesn't depend on horse size"
      },
      "salaryView": {
        "title": "Salary View",
        "content": "The salary is earned by ourselves, not paid by the company"
      }
    }
  },
  "chairman": {
    "title": "Chairman's Speech",
    "subTitle": "Make limited resources infinite and make unlimited business green",
    "description": "It is the company's corporate mission and business philosophy",
    "p1": "Resources are limited. Monte must cherish limited resources, develop and manage them in a scientific and rational manner, and maximize the value of resources.",
    "p2": "Resources are limited, but human creativity is unlimited. Monte will maximize human potential through the entrepreneurial platform of limited resources and create a broad development space leading to the future.",
    "p3": "Therefore, Mengtai continues to innovate its business operations, building on its advantages to carefully build an integrated modern industrial industry chain of \"coal-electricity-aluminum-materials-deep processing\" and a modern agricultural and animal husbandry industry chain aimed at helping rural revitalization.",
    "p4": "Therefore, based on the development vision of building a modern new enterprise, Mengtai integrates talents without boundaries, integrates wisdom globally, realizes the unlimited use of limited resources, and builds a long-lasting foundation, the century-old Mengtai.",
    "p5": "Mengtai is willing to work hand in hand with all people with lofty ideals to create civilization and build brilliance together.",
    "signatureTitle": "Chairman of Mengtai Group",
    "signatureName": "Ao Fengting",
    "p${i}": " translate"
  },
  "coalIndustry": {
    "title": "Coal Industry",
    "ttop": "Production",
    "tleft": "Sale",
    "tright": "Transportation",
    "intro": "The company integrates coal production, transportation and sales into one, providing one-stop service, which provides the group with a solid foundation for survival and a source of vitality for further development.",
    "sections": {
      "production": {
        "title": "Coal production",
        "description": "After years of hard work, the company has built its own stable coal production base. The company's Manlailiang Coal Mine in Ejin Horo Banner, Fanjiacun Coal Mine in Dongsheng District, and Buliangou Coal Mine in Zhungeer Banner are all modern large-scale mines approved by the National Development and Reform Commission.",
        "altText1": "Coal production facility overview",
        "altText2": "Coal mining operations"
      },
      "transportation": {
        "title": "Coal Transportation",
        "description": "In the fierce market competition to break through the transportation bottleneck, the company has successively obtained the operating rights of Beijing-Baotou Railway and Dazhun Railway since 2002. The company is a major freight customer of the National Railway Corporation, with an annual coal railway transportation volume of more than 10 million tons, ranking second among local coal enterprises in Inner Mongolia Autonomous Region.",
        "altText1": "Coal transportation railway",
        "altText2": "Railway transport operations",
        "altText3": "Coal loading facilities"
      },
      "sales": {
        "title": "Coal sales",
        "description": "The company has set up large freight yards and transshipment stations in Qinhuangdao, Jingtang Port and other places, and has set up special sales agencies in Beijing, Tianjin, Shanghai, Nanjing and other places. The coal produced by the company is natural high-quality environmentally friendly thermal coal, with significant characteristics such as low sulfur, low phosphorus, low ash, medium to high calorific value, etc. The sales market covers North China, East China, Central China, South China and other regions.",
        "altText": "Coal sales and distribution center"
      }
    },
    "developmentProject": {
      "title": "Coal Development Project",
      "card1": {
        "title": "Manlailiang Coal Mine",
        "paragraph1": "Manlailiang Coal Mine is a wholly-owned subsidiary of Mengtai Group, with an approved production capacity of 5.6 million tons/year and more than 500 employees. The mine adopts a comprehensive mechanized full-height mining process, and the mechanization rate of mining and excavation reaches 100%. All underground production equipment adopts internationally advanced equipment with high safety, high efficiency, high degree of automation and informatization. It was officially put into production in 2014. In 2018, it was rated as a first-class mine with safety production standardization in the Inner Mongolia Autonomous Region and a national coal industry safety and efficiency special mine. In 2020, it was selected into the national green mine list.",
        "paragraph2": "Since the coal mine was put into production, it has adhered to the principle of safety first, prevention first, no production without safety, ensured full investment of safety and technical funds, and built safety production systems such as safety monitoring, compressed air self-rescue, water supply rescue, personnel positioning, mine communications, and emergency evacuation to achieve continuous safe production.",
        "paragraph3": "In the process of achieving high-quality development, the coal mine will always firmly adhere to the correct orientation of ecological priority and green development, and will not only be the developer and user of resources and projects, but also the protector and builder of a beautiful environment. A total investment of more than 60 million yuan has been made to manage the access road to the coal mine, the comprehensive service area, the production and living area, and the goaf area, effectively achieving the five improvements, namely purification, greening, beautification, lighting, and hardening, and improving the production and living environment in the mining area and its surrounding areas."
      },
      "card2": {
        "title": "Fanjiacun Coal Mine",
        "paragraph1": "Fanjiacun Coal Mine is a wholly-owned subsidiary of Mengtai Group, located in Wanli Mining Area of ​​Dongsheng Coalfield in the northern suburbs of Dongsheng District, Ordos City, Inner Mongolia. It has an approved production capacity of 4.2 million tons/year and a coal preparation plant with an approved washing capacity of 6 million tons/year. All coal seams in the mine field are low-medium ash, low-sulfur, and high-calorific value coal, which is a good power coal and civilian fuel.",
        "paragraph2": "Fanjiacun Coal Mine is an important part of Mengtai Group's implementation of the coal, electricity and heat recycling economy project and is the pit-mouth coal mine of Mengtai Group's Beijiao Power Plant. The coal is directly transported to the boiler room of Beijiao Power Plant by belt conveyor, which reduces transportation pressure and road pollution. On this basis, Fanjiacun Coal Mine also invested in the construction of a fully enclosed coal storage shed in the coal yard, which minimized environmental pollution and improved the comprehensive benefits of the coal mine and power plant."
      },
      "card3": {
        "title": "Xinxin Coal Mine",
        "paragraph1": "Xinxin Coal Mine is a wholly-owned subsidiary of Mengtai Group. It is located on the outskirts of Boniushuan investigation area of ​​Dongsheng Coalfield in Inner Mongolia Autonomous Region. The mining method is open-pit mining, with an approved production capacity of 2.4 million tons/year.",
        "paragraph2": "The coal seams in the coal mine are relatively stable, the coal is non-sticky, and the geological conditions are simple. The main types of coal are ultra-low ash, ultra-low sulfur, and ultra-high calorific value coal, which is a good civilian and power coal, suitable for various industrial boilers, thermal power generation, etc. It can also be used as a roasting material in the building materials industry and the chemical industry, and can also be used as gasification coal"
      }
    }
  },
  "aluminiumIndustry": {
    "title": "Aluminium Industry",
    "intro": "The company takes the production and deep processing of high-end aluminum alloy materials as the leader, builds an integrated industrial system of \"coal-electricity-aluminum-materials-deep processing\", and has taken solid steps in the deep processing of the aluminum industry. It has now formed a primary aluminum production capacity of 500,000 tons/year, a high-tech aluminum alloy production capacity of 100,000 tons/year, and an aluminum deep processing capacity of 220,000 tons/year.",
    "projects": {
      "primary": {
        "title": "Primary aluminum production",
        "description": "The main raw material of primary aluminum is alumina, which is a widely used metal and the main raw material for aluminum product processing. The company's primary aluminum production project adopts the industry's advanced 500KA pre-baked anode electrolytic cell, which has reached the industry's first-class level in terms of process, technology, equipment, safety, and environmental protection.",
        "altText": "Primary aluminum production facility"
      },
      "highEnd": {
        "title": "High-end aluminum alloy materials and billet production",
        "description": "The high-end aluminum alloy material and blank production project uses the aluminum liquid produced by Mengtai as the main raw material. The products are widely used in automobile manufacturing, rail transportation, electronic products and other fields. The project has reached the advanced level of the domestic industry in terms of process technology, equipment selection, safety and environmental protection. The development of high-tech aluminum alloy material projects is an important strategic choice of Mengtai Group and the only way for Mengtai aluminum industry to enter the high-end field.",
        "altText": "High-end aluminum alloy materials production"
      },
      "deepProcessing": {
        "title": "Aluminum alloy production and deep processing",
        "description": "Aluminum alloy production and deep processing are the main businesses of Monte APT. The company is one of the leading corporate groups in the European aluminum industry. It develops and manufactures technologically advanced aluminum extrusion profiles and machined products, and provides products to internationally renowned customers in the construction, transportation, automotive and industrial fields. The manufacturing process covers the entire value chain from raw materials to final products.",
        "altText": "Aluminum alloy deep processing facility"
      }
    }
  },
  "thermalPower": {
    "title": "Thermal Power Plate",
    "intro": {
      "paragraph1": "Based on the advantages of coal resources, the company invested in the construction of pit-mouth power plants, implemented on-site coal conversion, connected electricity to the grid and exported to the power market, exported waste heat generated by power generation to local cities for urban centralized heating, used ash to make cement, and effectively reused urban water, achieving net utilization, zero emissions, and no pollution. It has made positive contributions to the green development of the local coal industry and the blue sky and white clouds of Ordos.",
      "paragraph2": "Mengtai's wholly-owned power plants that have been completed and put into operation include Mengtai Beiyuan 2*660MW Thermal Power Plant, Mengtai Beijiao 2*330MW Thermal Power Plant and Mengtai 4*25MW Thermal Power Plant, which now have a heating capacity of 38 million square meters and a new energy wind power installed capacity of 512,000 kilowatts. The power plant projects that have been completed and put into operation in which the company has participated in the construction include the Jungar Dalu 2*300MW coal gangue thermal power plant in cooperation with China Huadian Group and the Guodian Dongsheng 2*330MW thermal power plant in cooperation with the State Energy Group.",
      "paragraph3": "In the next three to five years, the total installed capacity of the company's wholly-owned and joint-venture power plants will reach more than 4 million kilowatts."
    },
    "projects": {
      "title": "Thermal power projects"
    },
    "card1": {
      "title": "Mengtai Beiyuan 2×660MW Thermal Power Plant",
      "content": {
        "paragraph1": "Mengtai Beiyuan 2×660MW thermal power plant is a project under construction by the company. The project is located in Dongsheng District, Ordos City, Inner Mongolia Autonomous Region, and is solely invested by Inner Mongolia Mengtai Group Co., Ltd. The construction scale of the project is 2×660MW high-efficiency ultra-supercritical coal-fired heating units, and desulfurization and denitrification devices are built simultaneously. The project started construction in August 2020 and is expected to be completed and put into operation by the end of 2022.",
        "paragraph2": "The project adopts the world's advanced design technology, and combined with the characteristics of the large height difference of the slope of the plant site and the narrow site, uses three-dimensional digital technology to truly simulate the surrounding urban environmental facilities and topography, and rationally plan the overall plan of the plant area. The focus is on comprehensive optimization from multiple aspects such as host parameters, equipment selection, coal transportation system, public system, air cooling island, foundation engineering, slope engineering, main plant engineering, etc., so as to achieve less land use, save engineering investment, and reduce resource consumption, laying the foundation for the construction of an efficient, clean, ecologically green, energy-saving and environmentally friendly, safe and reliable, technologically advanced, and city-friendly power plant.",
        "paragraph3": "The total land area of ​​the project is about 16.5hm2, which saves about 49.21% of the land area compared with similar projects. The thermal efficiency of the power plant under the performance assessment of the project unit is 45.66%, and the standard coal consumption for power generation is 269.36g/kwh. The thermal efficiency of the power plant under the heating year-round condition is 59%, and the standard coal consumption for power generation is 242.94g/kwh.",
        "paragraph4": "The project is intended to provide heating for the urban area of ​​Dongsheng District. It is an urban infrastructure project related to the national economy and people's livelihood. It can replace the existing high-energy consumption, high-emission 4×25MW units and decentralized small boilers in the area. It can not only provide a stable and reliable heating load for the city, but also has comprehensive benefits such as saving energy, improving the environment, and improving the quality of heating. It is a benefit-oriented and environmentally friendly project that is strongly supported and supported by the state in terms of policy"
      }
    },
    "card2": {
      "title": "Mengtai Beijiao 2×330MW Thermal Power Plant",
      "content": {
        "paragraph1": "Ordos Beijiao Thermal Power Co., Ltd. (hereinafter referred to as Beijiao Thermal Power Co., Ltd.) was established in 2012. It is a wholly-owned subsidiary of Inner Mongolia Mengtai Group Co., Ltd. and is mainly responsible for the operation and management of 2×330MW direct air cooling. The 2×330MW heating unit was completed and put into operation in 2015, which can achieve an annual power generation of 4.2 billion kWh and undertake the task of centralized heating of 10 million square meters in Dongsheng urban area. The company currently has total assets of about 3 billion yuan, 240 employees, and strong technical force, of which college and technical college graduates and professional and technical personnel account for more than 90% of the company's total number of employees.",
        "paragraph2": "Beijiao Thermal Power Company's 2×330MW subcritical, one-stage intermediate reheat, two-cylinder, two-exhaust, direct air-cooled extraction condensing steam turbine generator set is equipped with 2×1185t/h subcritical, natural circulation pulverized coal boilers, and flue gas desulfurization and flue gas denitrification facilities are built simultaneously. The unit's coal is mainly low-calorific value coal produced in Fanjia Village, and the production water uses urban reclaimed water, which is efficient, water-saving, and environmentally friendly. The 2×330MW thermal power unit meets the growth of the regional power grid's power load, solves the city's heating needs, and provides power support for the Mengxi power grid, improving the reliability of regional load power supply.",
        "paragraph3": "Beijiao Thermal Power Company strictly implements the energy-saving and environmental protection policies of the state and the autonomous region, takes making limited resources unlimited as its mission, and strives to build a green, environmentally friendly, circular and efficient demonstration power plant to truly achieve the integrated circular development goal of coal, electricity and heat"
      }
    },
    "card3": {
      "title": "Mengtai Thermal Power 4×25MW Thermal Power Plant",
      "content": {
        "paragraph1": "Ordos Mengtai Thermal Power Co., Ltd. was established in August 2006. It is a wholly-owned subsidiary of Inner Mongolia Mengtai Group Co., Ltd. It has a construction scale of 4×25MW heating units, equipped with 7×130t circulating fluidized bed boilers, and a heating capacity of more than 10 million square meters. The company currently has total assets of 650 million yuan and 150 employees, of which more than 90% are college graduates and professional and technical personnel.",
        "paragraph2": "The company vigorously develops sustainable circular economy projects. The company's first phase project 2×25MW extraction condensing steam turbine + 3×130t circulating fluidized bed boiler unit was put into operation in 2006 and provided centralized heating to Dongsheng City. The second phase project 2×25MW back pressure steam turbine + 4×130t circulating fluidized bed boiler unit was put into operation in 2009. This unit is a back pressure heating unit and realizes the full utilization of waste heat.",
        "paragraph3": "The company's production coal is mainly low-quality coal and coal gangue from coal mines around Dongsheng, which improves resource utilization. In 2008, the 600,000-ton cement grinding station project developed in cooperation with Mengxi Cement Company was put into production. The power plant ash is used as raw material for cement production, realizing the recycling of ash. Investing 30 million yuan to build a 7,500-ton daily treatment water purification station, realize the recycling of all sewage, and achieve net consumption and zero discharge of water sources.In order to meet environmental protection requirements and improve the company's comprehensive competitiveness, the company invested 50 million yuan to build a single three-field electrostatic precipitator, with a dust removal efficiency of more than 99.5%. In 2014, the company raised 60 million yuan to build a new wet desulfurization process facility, and simultaneously achieved stable compliance with the three indicators of desulfurization, denitrification and dust removal. In 2017, it invested another 12 million yuan to build a new pipe-belt coal transportation system and renovate the original coal storage yard for greening. Improving the automation level of the coal transportation system, effectively purifying the factory area and surrounding environment, and achieving significant social benefits. "
      }
    },
    "card4": {
      "title": "Jungar Dalu 2×300MW Coal Gangue Thermal Power Plant"
    },
    "heating": {
      "title": "Heating services",
      "description": "Mengtai Heating Company currently has a heating capacity of 20 million square meters and is one of the largest urban centralized heating companies in Ordos City. The company has 174 heat exchanger stations and a primary heating pipeline network length of 238 kilometers.",
      "serviceRegulations": {
        "title": "Service Regulations",
        "items": {
          "onSiteService": "Specifications for on-site service by heating service personnel",
          "businessHandling": "Heating business handling",
          "regulations": "Heating regulations",
          "userTips": "Heating tips for users"
        }
      },
      "items": {
        "concept": {
          "title": "Heating service concept",
          "description": "If it is our problem, we should do our best to solve it. If it is not our problem, we should help solve it."
        },
        "serviceArea": {
          "title": "Service Area",
          "description": "Service contact information and service areas of each central station"
        },
        "hotline": {
          "title": "Service Hotline",
          "description": "4000477996"
        }
      }
    }
  },
  "husbandry": {
    "title": "Modern Agriculture and Animal Husbandry",
    "intro": {
      "paragraph1": "Deeply participating in the cause of 'rural revitalization' and adhering to the concepts of green, health and high-end, the company has carefully constructed a modern agricultural and animal husbandry industry chain with a circular linkage and 'green planting-ecological breeding-agricultural and sideline product processing-characteristic cultural tourism' as the main line, depicting the beautiful picture of 'rural complex', consolidating the results of poverty alleviation, constantly innovating the assistance mechanism, exploring the sustainable development model of 'rural revitalization', and leading farmers and herdsmen to gradually embark on a green and high-end, quality-based, and brand-increased income road to wealth.",
      "paragraph2": "Through various means such as land transfer, project outsourcing, modern breeding industry leadership, recycling, processing and sales of agricultural and sideline products, and job provision, the company has driven farmers and herdsmen to increase their income steadily, achieved employment “at their doorstep”, and attracted migrant workers to return home to start businesses."
    },
    "sections": {
      "farming": {
        "title": "Ecological farming",
        "description": "The company actively plays the demonstration and leading role of a leading enterprise, and with green and high-end concepts, drives farmers and herdsmen to develop black donkeys, beef cattle, sheep and other breeding industries, so as to increase their income and become rich.",
        "alt": "Ecological farming"
      },
      "planting": {
        "title": "Green Planting",
        "description": "Create a green high-end brand, drive the surrounding farmers and herdsmen to develop the green planting industry with the same standards, and share the brand benefits with farmers and herdsmen.",
        "alt": "Green Planting"
      },
      "processing": {
        "title": "Deep processing of agricultural and sideline products",
        "description": "Through brand management and the development of consumer markets, the company further enhances the economic value of agricultural and sideline products, ensures that farmers and herdsmen can sell their products well, and by mobilizing farmers and herdsmen's production enthusiasm and entrepreneurial passion, more and more farmers and herdsmen join the green breeding industry.",
        "alt": "Deep Processing"
      },
      "tourism": {
        "title": "Characteristic cultural tourism",
        "description": "The company is actively developing and constructing theme tourism projects such as whiskey craft display, sightseeing tasting, leisure and vacation, as well as diversified leisure and entertainment projects such as water entertainment, parent-child picking, theme parks, and sightseeing, in order to drive the surrounding farmers and herdsmen to develop characteristic rural cultural tourism industries such as farmhouses and rural homestays.",
        "alt": "Cultural Tourism"
      }
    }
  },
  "logistics": {
    "title": "Modern Trade and Logistics",
    "intro": "Mengtai Group relies on its own industrial foundation to achieve transformation and upgrading and high-quality development strategies, keep up with the market situation, and actively develop the trade and logistics industry. The company has established an international trade company and an Internet technology company in Beijing to carry out domestic and foreign trade and logistics business. On the basis of continuously expanding the traditional trade and logistics industry, it focuses on developing new trade formats and investing in and operating \"regional comprehensive e-commerce service platform\" and \"cross-border e-commerce platform\" and other businesses. In the future, the company will continue to vigorously expand its trade business and gradually establish a modern trade and logistics system of \"big trade, big logistics\".",
    "energy": {
      "title": "Energy Trading",
      "desc": "With the group's industrial extension as the direction and the energy industry as the foundation, we carry out coal, alumina, bauxite, iron ore, aluminum ingots, aluminum alloys, natural gas and other mineral energy trading businesses. While carrying out domestic trade business, we expand international trade business and establish trading companies in Hainan Free Trade Zone, Hong Kong and other places, forming a stable and high-quality customer and supplier system. We set up a financial leasing company in Shanghai Free Trade Zone to promote and complement the trade business and improve the supply chain financial system."
    },
    "material": {
      "title": "Material Trade",
      "desc": "The material and equipment trading business is mainly based on meeting the production and operation of the group, giving full play to the advantages of large-scale and centralized procurement, and developing the material and equipment trading business. Relying on the Internet e-commerce platform, all materials that can be traded through the platform are included in the platform, and the \"platform operation\" thinking is used to realize the \"internal and external dual circulation\" material trading pattern. On this basis, further build a cross-border e-commerce platform."
    },
    "logisticsSystem": {
      "title": "Logistics System",
      "desc": "On the basis of traditional logistics and transportation, we integrate existing logistics resources and build a new logistics system. Including railway, highway, intermodal and other transportation businesses, integrating warehousing and distribution functions, and opening up new business formats. We are currently actively developing and testing the \"unmanned delivery\" system to completely solve the \"last mile\" problem faced by the logistics industry."
    }
  },
  "technologyMonte": {
    "title": "Technology Monte",
    "intro1": "The company actively embraces science and technology, implements the \"technology-driven enterprise\" strategy, and promotes the circulation of products and production methods and the extension and expansion of the industrial chain through technological innovation. Focusing on the goal of building a complete and modern aluminum industry chain, the company focuses on the research and development and industrial application of high-aluminum fly ash aluminum silicon alloy preparation technology in the upstream of the aluminum industry, and vigorously invests in and develops high-end aluminum alloy materials and aluminum deep processing industries in the downstream.",
    "intro2": "The company has cooperated with many well-known universities and research institutes such as Northeastern University, Shanghai Jiaotong University, and Beijing Information Science and Technology University to research and develop high-performance aluminum alloy materials, comprehensive utilization of high-aluminum fly ash, as well as new project products such as unmanned aerial vehicles and express lockers, and actively pays attention to and explores new thin-film solar energy projects.",
    "sections": [
      {
        "title": "Comprehensive Utilization of High Alumina Fly Ash",
        "description": "The company continues to strengthen technical research and innovate process routes, and has made major breakthroughs in extracting aluminum-based oxides from high-aluminum coal-based solid waste and smelting aluminum-silicon alloys. Through basic experiments and amplification experiments, the R&D team successfully prepared aluminum-silicon alloys using high-aluminum fly ash and coal gangue, and all quality indicators have reached the international leading level."
      },
      {
        "title": "High-end aluminum alloy materials and aluminum deep processing",
        "description": "The company has built a \"Science and Technology R&D Building\" and created a high-standard laboratory in the autonomous region to \"build a nest to attract talents\" and provide first-class scientific research conditions for high-end scientific research talents at home and abroad."
      },
      {
        "title": "Large-load UAV and smart express locker projects",
        "description": "The company has formed a research and development team with Beijing Information Science and Technology University to jointly develop a drone intelligent rapid delivery system project to solve the problem of last-mile delivery of express delivery. The project includes independent research and development of"
      }
    ],
    "sections[0]": {
      "title": " translate",
      "description": " translate"
    },
    "sections[1]": {
      "title": " translate",
      "description": " translate"
    },
    "sections[2]": {
      "title": " translate",
      "description": " translate"
    }
  },
  "greenMonte": {
    "heroTitle": "Green Monte",
    "intro": "Green water and green mountains are gold and silver mountains. The company thoroughly implements the concept of \"ecological priority, green development\", engraves the concept of green, environmental protection and cleanliness in every industrial chain, and strives for the harmonious unity of industrial development and ecological environment. The \"garden-style factory\" and \"green mine\" carefully built by the company have become the new business card of green development of energy enterprises; the main pollutant emissions of Mengtai Beijiao Power Plant have reached the emission standards of gas units ahead of schedule; the overall environment and environmental protection and energy-saving standards of Mengtai Aluminum Plant have reached the leading level in the same industry; Mengtai Nalinxili Ecological Base has achieved a win-win situation of ecological and economic benefits.",
    "sectionTitle": "Green footprint",
    "sectionParagraph": "Green factories, green mining areas, green office parks, the green charm flows here.",
    "cards": [
      {
        "title": "Modern and environmentally friendly industrial park",
        "alt": "Modern and environmentally friendly industrial park"
      },
      {
        "title": "Garden-style factory",
        "alt": "Garden-style factory"
      },
      {
        "title": "Green Mine",
        "alt": "Green Mine"
      },
      {
        "title": "Ecological Industry",
        "alt": "Ecological Industry"
      }
    ],
    "cards[0]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[1]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[2]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[3]": {
      "alt": " translate",
      "title": " translate"
    }
  },
  "modernPark": {
    "heroTitle": "Green Monte",
    "title": "Modern and environmentally friendly industrial park",
    "description1": "Mengtai Aluminum Industrial Park, a first-class environmental protection and energy-saving standard industry",
    "imageAlt1": "Aluminum Product 3-2",
    "description2": "Mengtai Beijiao Power Plant, whose main pollutant emissions meet the emission standards for gas-fired units",
    "imageAlt2": "Aluminum Product 3-2"
  },
  "greenMine": {
    "heroTitle": "Green Monte",
    "title": "Green Mine",
    "description1": "Monte believes that green mining is a modern mining construction model that comprehensively considers resource development and utilization and environmental impact. Its connotation is to integrate the concept of green development into the entire process of coal mine development, root it in all areas of production and life in the mining area, stimulate the endogenous driving force of green development of enterprises, and lead residents in the mining area onto the path of sustainable development.",
    "description2": "The scope of green mine construction services includes efficient resource exploitation, technological innovation and intelligent mine construction, comprehensive resource utilization, mine ecological construction and restoration management, energy-saving and emission reduction technology, enterprise management and corporate image construction, etc. At the beginning of 2021, Mengtai Manlailiang Coal Mine was selected into the national green mine list.",
    "subTitle": "National Green Mine - Mengtai Manlailiang Coal Mine",
    "list": [
      "The mechanization rate of coal mining has reached 100%, and the recovery rate has exceeded the national standard, ranking first in the industry. We continue to increase investment in scientific research and technological innovation, and the utilization rate of coal resources has increased year by year.",
      "The access road is constructed according to urban road standards, the greening on both sides of the road is comprehensively transformed, and a service area is built next to the access road, benefiting the village collective, coal truck drivers, and the coal mine.",
      "Coal mine production, living and office are divided into functional areas. The three areas are separated by willow-lined paths and tree-lined avenues. The entire park is well-arranged, full of flowers, green and vibrant.",
      "The company adheres to the principle of “planting before mining” and guides farmers and herdsmen to plant trees, so that the vegetation coverage of coal mine goafs has reached over 80%.",
      "Through the comprehensive improvement demonstration project of goaf areas, the company has leveled the land, improved the soil, provided electricity and water, and built roads, thus transforming wasteland into arable land and goaf areas into ecological zones.",
      "In terms of solid waste treatment and utilization, coal mines will centrally process most of the gangue, and use a small portion for road paving and brick making to achieve resource recycling."
    ],
    "outro": "Create a garden, reshape a mine, spread greenery, and benefit the people",
    "imageAlt1": "Aluminum Product 3-2",
    "imageAlt2": "Aluminum Product 3-2"
  },
  "gardenFactory": {
    "heroTitle": "Green Monte",
    "heading": "Garden-style factory",
    "description": "Gardens in the city, garden-style factories"
  },
  "ecoIndustry": {
    "heroTitle": "Green Monte",
    "heading": "Eco Industry",
    "paragraph1": "Mengtai is deeply involved in the cause of \"rural revitalization\", adhering to the concepts of organic, healthy and high-end, creating the Nalinxili ecological breeding base, and successfully constructing a circular and efficient modern agricultural and animal husbandry industry with \"green planting-ecological breeding-deep processing of agricultural and sideline products-rural tourism\" as the main line, leading farmers and herdsmen to increase their income and become rich, and jointly build a beautiful countryside.",
    "paragraph2": "The ecological industry development base is far away from the urban area and industrial pollution. After more than ten years of operation, the ecological landscape of mountains, water, forests, fields and lakes in the base has become increasingly coordinated and complete.",
    "greenPlanting": "Green Planting Industry",
    "blackDonkey": "Black donkey breeding industry"
  },
  "responsibility": {
    "heroTitle": "Responsibility Monte",
    "top": {
      "title": "Social donations",
      "description": "\"Taking from society and giving back to society\" is an important social responsibility concept and business philosophy that the company has always adhered to. Over the years, the company has invested hundreds of millions of yuan in poverty alleviation, education, medical care, cultural and sports undertakings, etc., and has achieved remarkable results."
    },
    "item": {
      "title1": "Helping global desertification control",
      "title2": "Title sponsor of the Ordos International Marathon event for three consecutive years"
    },
    "bottom": {
      "title": "Caring for employees"
    },
    "carousel": {
      "title1": "Swimming Pool",
      "title2": "Gym",
      "title3": "Staff Canteen",
      "title4": "Staff Dormitory",
      "title5": "Activity Centre"
    },
    "middle": {
      "title": "Rural Revitalization",
      "description1": "The company actively responded to the national \"rural revitalization\" strategy and cooperated with Dong'e Ejiao to introduce the world's high-quality breed - Dezhou black donkey, and developed a characteristic breeding industry . In order to industrialize and sustain the assistance, the company explored the \"government + enterprise + breeder + bank + insurance\" five-in-one model, reduced the breeding risks and technical barriers of farmers and herdsmen, and led farmers and herdsmen to increase their income and become rich. The black donkey breeding project has completed an investment of 200 million yuan, with a donkey inventory of 5,000 heads and complete infrastructure such as water, electricity, sheds, and feed processing plants.",
      "description2": "The company has incorporated the surrounding people into the Dezhou black donkey breeding industry chain through various means such as land transfer, outsourcing projects, cooperative breeding, and providing jobs, and established a close interest linkage mechanism, so that they can obtain tangible benefits at any link.",
      "image1Alt": "Donkey Breeding Project",
      "image2Alt": "Community Participation"
    }
  },
  "media": {
    "heroTitle": "News Material",
    "tab1": "Video",
    "tab2": "Picture",
    "picture": {
      "description1": "Company LOGO",
      "description2": "Group headquarters",
      "description3": "Group headquarters night",
      "description4": "Garden factory",
      "description5": "Aluminum Industrial Park",
      "description6": "Aluminum alloy production",
      "description7": "Aluminum alloy products",
      "description8": "Primary aluminum casting",
      "description9": "Environmental protection power plant",
      "download": "Download"
    },
    "video": {
      "title1": "Company Profile Video",
      "title2": "Sustainability Initiatives"
    }
  },
  "products": {
    "heroTitle": "Products",
    "tab1": "Aluminum products",
    "tab2": "Coal products",
    "aluminum": {
      "alt1": "Aluminum Product 1",
      "alt1_2": "Aluminum Product 1-2",
      "alt2": "Aluminum Product 2",
      "alt2_2": "Aluminum Product 2-2",
      "alt3": "Aluminum Product 3",
      "alt3_2": "Aluminum Product 3-2"
    },
    "coal": {
      "alt1": "Coal Product 1",
      "alt1_2": "Coal Product 1-2"
    },
    "contact": {
      "email": "Contact Email:",
      "phone": "Contact Phone:",
      "address": "Contact Address:",
      "manager1": "Manager Liu 0477-3898222",
      "manager2": "Mr. Liu: 15847700664",
      "addrValue": "No. 35 Yimei North Road, Ordos, Inner Mongolia, China"
    }
  },
  "collaborativeProjects": {
    "title": "Collaborative Projects",
    "intro": "In accordance with the overall strategic layout of developing new materials, new energy, Internet e-commerce and high-end intelligent manufacturing industries, Mengtai is seeking project cooperation worldwide.",
    "projects": {
      "newMaterials": {
        "title": "New Materials",
        "description": "Medium and high performance aluminum alloy material/billet production project. Aluminum alloy materials/billets mainly focus on medium and high performance aluminum alloy casting bars and ingots used in new energy vehicles, heavy trucks, electronic products, rail transportation, electric power and other fields. The main alloy grades involved are 6061, 6082, 2024, 7050, 7075, etc. Medium and high performance carbon fiber and composite materials projects. Focus on high-end carbon fibers such as T800H, T800S, T1000G, T1100G, M50J, M55J, and M60J. Graphene materials."
      },
      "newEnergy": {
        "title": "New Energy",
        "description": "Hydrogen fuel, aluminum-air, lithium-ion and other power batteries, focusing on the production and research and development of electrode materials and catalysts, battery management system development, and the overall research and development and manufacturing of new energy vehicles."
      },
      "flyAsh": {
        "title": "Comprehensive Utilization of Fly Ash",
        "description": "Through a shorter process flow, high-aluminum fly ash from thermal power plants can be used to extract metal and non-metal materials with large market capacity and high added value."
      }
    },
    "cooperation": {
      "title": "Cooperation",
      "description": "For the above new materials, new energy, and fly ash comprehensive utilization projects, we intend to seek cooperation with enterprises, research institutes, and expert technicians at home and abroad that have mastered relevant mature industrialization technologies or have industry-leading technical research results. The cooperation methods are flexible and diverse. We can use the technical patents of the partner through paid authorization, or adopt equity investment, or acquire the technical process package or production line of the partner, or other methods recognized by both parties. The project cooperation location can be in mainland China, Macau, Hong Kong, or other countries and regions."
    },
    "contact": {
      "email": "Contact Email:",
      "phone": "Contact Phone:",
      "name": "Mr. Liu: 15847700664",
      "address": "Contact Address:"
    }
  },
  "offline": {
    "heroTitle": "Offline Tender Announcement",
    "source": "Source",
    "views": "Views",
    "projectName": "Project Name",
    "organizer": "Organizer",
    "tenderOpeningLocation": "Tender Opening Location",
    "releaseTime": "Release Time",
    "openingTime": "Opening Time",
    "loading": "Loading file content...",
    "previousPost": "Previous Post",
    "nextArticle": "Next Article",
    "close": "Closure",
    "tab1": "Tender Notice",
    "tab2": " Winning bid announcement",
    "bid": {
      "description": "Announcement on the Bidding of the Third-Party Review Agency for the Fire Renovation Project Design of Ordos Mengtai Fanjiacun Coal Industry Co., Ltd.",
      "source": "Liu Dongmei",
      "views": "343",
      "project": "Ordos Fanjiacun Coal Industry Co., Ltd. fire protection renovation project design third-party review agency negotiation",
      "organizer": "Mengtai Group Tendering Office",
      "location": "Online video bidding",
      "release": "2025-05-30",
      "opening": "June 9, 2025 9:00"
    },
    "notice": {
      "description": "Announcement on the Bidding of Carbon Emission Quota Index Procurement of Beijiao Thermal Power Branch of Inner Mongolia Mengtai Group Co., Ltd.",
      "source": "Liu Dongmei",
      "views": "343",
      "project": "Carbon emission quota index procurement project of Beijiao Thermal Power Branch of Inner Mongolia Mengtai Group Co., Ltd.",
      "organizer": "Mengtai Group Tendering Office",
      "location": "Online video bidding",
      "release": "2025-05-27",
      "opening": "June 9, 2025 9:00"
    }
  },
  "news": {
    "heroTitle": "News",
    "source": "Source",
    "views": "Views",
    "button": "Closure",
    "prev": "Previous Post",
    "next": "Next Article",
    "card1": {
      "description": "Ordos Mengtai Fanjiacun Coal Industry Co., Ltd. Fanjiacun Coal Mine 2025 Mine Geological Environment Management and Land Reclamation Plan",
      "source": "Mengtai Group"
    },
    "card2": {
      "description": "Mengtai Group signed an agreement to acquire Swiss Aluminium",
      "source": "Mengtai Group"
    },
    "card3": {
      "description": "Public Notice on Environmental Impact Assessment of the 6-1 Lower Coal Seam Deepening Mining Project of Xinyuan Coal Mine of Inner Mongolia Mengtai Group Co., Ltd.",
      "source": "Mengtai Group"
    },
    "card4": {
      "description": "Mengtai Group signed an agreement to acquire Swiss Aluminium",
      "source": "Mengtai Group"
    }
  },
  "footer": {
    "qrText": "Micro Channel Public Platform",
    "copyright": "Copyright© 2020 Inner Mongolia Mengtai Group Co., Ltd.",
    "icp": "ICP No. 100000177",
    "publicSecurity": "Public Security No 15060202000517",
    "publicSecurityAlt": "Public Security Record",
    "sitemap": "Sitemap",
    "links": {
      "aboutUs": "About Us",
      "contact": "Contact",
      "careers": "Careers",
      "news": "News",
      "products": "Products",
      "services": "Services"
    },
    "section": {
      "title1": "About Monte",
      "title2": "Core Industries",
      "title3": "High-quality development",
      "title4": "News",
      "title5": "Foreign Cooperation"
    },
    "link1": {
      "text1": "Company Profile",
      "text2": "Chairman's Speech",
      "text3": "Corporate Culture",
      "text4": "Development History",
      "text5": "Party Building",
      "text6": "Join us"
    },
    "link2": {
      "text1": "Aluminum Industry Sector",
      "text2": "Coal Industry",
      "text3": "Thermal power plate",
      "text4": "Modern agriculture and animal husbandry",
      "text5": "Modern trade logistics"
    },
    "link3": {
      "text1": "Technology Monte",
      "text2": "Green Monte",
      "text3": "Responsibility Monte"
    },
    "link4": {
      "text1": "News",
      "text2": "Media Materials"
    },
    "link5": {
      "text1": "Company Products",
      "text2": "Collaborative Projects",
      "text3": "Bidding Platform",
      "text4": "Offline Tender Announcement",
      "text5": "Sourcing Announcement"
    }
  },
  "mainHeader": {
    "aboutMonte": "About Monte",
    "coreIndustries": "Core Industries",
    "highQualityDevelopment": "High-quality Development",
    "news": "News",
    "externalCooperation": "External Cooperation",
    "searchPlaceholder": "Search...",
    "aboutLinks": {
      "companyProfile": "Company Profile",
      "chairmanSpeech": "Chairman's Speech",
      "corporateCulture": "Corporate Culture",
      "developmentHistory": "Development History",
      "partyBuilding": "Party Building",
      "joinUs": "Join Us"
    },
    "newsLinks": {
      "news": "News",
      "mediaMaterial": "Media Material"
    },
    "cooperationLinks": {
      "products": "Products",
      "collaborativeProjects": "Collaborative Projects",
      "biddingPlatform": "Bidding Platform",
      "offlineTender": "Offline Tender Announcement",
      "sourcingAnnouncement": "Sourcing Announcement"
    },
    "industry": {
      "title1": "Aluminium Industry Sector",
      "title2": "Coal Industry",
      "title3": "Thermal Power Plate",
      "title4": "Modern Agriculture and Animal Husbandry",
      "title5": "Modern Trade Logistics",
      "description1": "Taking solid steps in industrial transformation and upgrading, the layout of the modern aluminum industry led by the production and deep processing of high-end aluminum alloy materials has initially",
      "description2": "Mengtai integrates coal production, transportation and sales, and provides one-stop operation and service, so that the Group has obtained a solid cornerstone for survival and a source of vitality for further",
      "description3": "Based on the advantages of coal resources, we invest in the construction of pithead power plant, implement the local transformation of coal, and transfer the waste heat generated by power generation",
      "description4": "Builing a high value-added modern agricultural and animal husbandry industry chain with `Green Planting - Ecological Breeding - Deep Processing of Agricultural and Sideline products - Rural Tourism` as",
      "description5": "Relying on its own industrial foundation, the company realizes the strategy of transformation and upgrading and high-quality development, keeps up with the market situation, and actively develops the"
    },
    "development": {
      "title1": "Technology Monte",
      "title2": "Green Monte",
      "title3": "Responsibility Monte",
      "description1": "Mengtai actively embraces science and technology, implements the strategy of strengthening our Group with science and technology, and promotes the circulation of products and production methods as well",
      "description2": "'Mengtai Group thoroughly implements the concept of ecology first, green development, implements the concept of green, environmental protection and cleanliness in every industrial chain, and",
      "description3": "Take from the society, give back to the society is the business philosophy that Mengtai has always practiced. Over the years, we have invested hundreds of millions of yuan in poverty alleviation, education,"
    }
  },
  "home": {
    "title": "About Monte",
    "p1": "Inner Mongolia Mengtai Group was established in 2001 and currently has more than 7,500 employees, annual operating income of more than 50 billion yuan, and annual tax payments of more than 8 billion yuan.",
    "p2": "The company ranks among the top 100 private enterprises in the autonomous region and is a benchmark enterprise for technological innovation in Ordos City.",
    "p3": "The company thoroughly implements the new development concept and firmly implements the strategy of green development and technological strength",
    "p4": "The company has gradually developed from a traditional energy-based enterprise into a modern new enterprise group that integrates research and development and production of new aluminum alloy materials, development of wind and solar energy, and high-quality research and development and utilization of high-aluminum coal-based solid waste  with multiple complementarity and circular linkage.",
    "p5": "The company has invested heavily in modern agriculture and animal husbandry industries to help rural revitalization and increase farmers' and herdsmen's income and wealth.",
    "p6": "The company's mission is to make limited resources infinite and make infinite business green",
    "core": "Core Industries",
    "news": "News",
    "see": "See More",
    "items": {
      "description1": "Green development and technological strength",
      "description2": "",
      "description3": "Beyond the realistic humanism",
      "description4": ""
    },
    "cards1": {
      "title": "Aluminum Industry Sector",
      "desc": "Focusing on the goal of building an integrated industrial system of coal-electricity-aluminum-materials-deep processing, the company has continuously increased its investment in scientific and technological innovation, actively upgraded the industrial level, improved the technological content and added value, and taken solid steps in industrial transformation and upgrading. The modern aluminum industry layout led by high-end aluminum alloy material production and deep processing has taken shape."
    },
    "cards2": {
      "title": "Coal sector",
      "desc": "The company integrates the production, transportation and sales of coal into one, providing one-stop service. The coal industry is the solid foundation for the company`s survival and the source of vitality for further development."
    },
    "cards3": {
      "title": "Thermal power plate",
      "desc": "Relying on the advantages of coal resources, we invested in the construction of pit-mouth power plants, implemented on-site coal conversion, connected electricity to the grid and exported to the electricity market. The waste heat generated by power generation was exported to local cities"
    },
    "cards4": {
      "title": "Modern agriculture and animal husbandry",
      "desc": "'We will deeply participate in the Rural Revitalization action, build a high-value-added modern agricultural and animal husbandry industry chain with black donkey breeding as the core and green planting-ecological breeding-deep processing of agricultural and sideline products-rural tourism as the main line,"
    },
    "cards5": {
      "title": "Modern trade logistics",
      "desc": "Relying on its own industrial foundation, Monte Group has realized the transformation and upgrading and high-quality development strategy, kept up with market trends, and actively developed the trade and logistics industry."
    }
  },
  "dev": {
    "title": "Development History",
    "section": "Footprints confirm dreams",
    "achievements": {
      "item2024": [
        "Monte Technology acquired 100% equity of Swiss Menziken Aluminium."
      ],
      "item2023": [
        "The Mengtai APT European New Materials Innovation Center was unveiled.",
        "The company was awarded the honorary title of Advanced Collective of Respecting Teachers and valuing Education in Ordos City",
        "Mengtai Agriculture and Animal Husbandry Company was rated as a typical (project) enterprise in the autonomous region's ten Thousand Enterprises to Revitalize Ten Thousand Villages campaign.",
        "Monte Aluminum Co., Ltd. was named one of the top ten technological innovation enterprises in Ordos City in 2022."
      ],
      "item2022": [
        "The Mengtai Dongsheng Phase II 2x660MW cogeneration project was completed and put into operation.",
        "Mengtai Group ranked fourth among Inner Mongolia's private enterprises in 2022 and third among the top 50 manufacturing enterprises.",
        "The Monte brand aluminum ingots of Monte Aluminum Co., Ltd. were successfully registered in the Shanghai Futures Exchange.",
        "Mengtai Group was rated as a caring enterprise in fighting the epidemic by the Federation of Industry and Commerce of Inner Mongolia Autonomous Region."
      ],
      "item2021": [
        "The 2021 list of the top 100 private enterprises in Inner Mongolia Autonomous Region was released, and Mengtai Group ranked among the top five of the top 100 private enterprises in Inner Mongolia in 2021 and among the top four of the top 50 manufacturing enterprises.",
        "The primary aluminum project of Monte Aluminum Co., Ltd. was awarded the National Quality Project Award for 2020-2021 by the China Construction Enterprise Management Association.",
        "The Party Building Cultural Base of Mengtai Bulianggou Coal Industry Company was rated as a national red education base in the coal industry by the China Coal Workers' Ideological and Political Work Research Association.",
        "Mengtai Group was awarded the honorary title of Advanced Collective of Respecting Teachers and valuing Education",
        "The coal preparation plant of Mengtai Manlailiang Coal Mine was put into trial operation.",
        "The Monte Black Donkey Breeding Industry Poverty Alleviation Project was selected as the 2020 National Guangcai Program Key Project.",
        "The Quality Inspection Department of Ordos Mengtai Aluminum Co., Ltd. successfully passed the CNAS national accreditation for laboratories."
      ],
      "item2020": [
        "Mengtai Group was rated as the safe and efficient coal industry group (mining area) in 2018-2019 by the China Coal Industry Association.",
        "Mengtai Group was awarded the title of 'Top 100 Green Development Enterprises in Inner Mongolia'",
        "Monte Group has acquired the German APT company, a leading aluminum processing company in Europe.",
        "The first phase of Mengtai's 200,000-ton annual high-tech aluminum alloy material project was completed and put into production.",
        "The primary aluminum project of Mengtai Aluminum Co., Ltd. was rated as a high-quality project of China's nonferrous metal industry (ministerial level) from 2018 to 2019 by the China Construction Enterprise Management Association.",
        "The Mengtai Dongsheng 2×660MW cogeneration project was approved by the Energy Bureau of Inner Mongolia Autonomous Region and construction started.",
        "The construction of the Mengtai Manlailiang Coal Mine Coal Preparation Plant project started.",
        "Monte Group has donated a total of 19.31 million yuan to fight the new coronavirus epidemic."
      ],
      "item2019": [
        "The joint experiment between Mengtai Group and East China University of Science and Technology on the research and development of fly ash comprehensive utilization technology was officially launched.",
        "The construction of Monte Group's new materials, new energy and high-tech industry R&D center has started.",
        "Monte Group has been the title sponsor of the Monte Ordos International Marathon public welfare event for three consecutive years.",
        "Monte Group participated in the BRICS Summit held in Brasilia, Brazil."
      ],
      "item2018": [
        "Mengtai Group donated 5 million yuan to Inner Mongolia's Light Journey social welfare activity to promote the health and eye protection of young people.",
        "Mengtai Manlailiang Coal Mine was rated as a first-class safety production standardized coal mine by the Ministry of Emergency Management and the State Administration of Coal Mine Safety."
      ],
      "item2017": [
        "Mengtai Fanjiacun Coal Mine was rated as a top-grade safe and efficient mine in the coal industry in 2014-2015 by the China Coal Industry Association.",
        "The first phase of the 900,000-ton annual primary aluminum project in Montedalat was completed and successfully delivered electricity within the year.",
        "Mengtai Manlailiang Coal Mine was rated as a first-class safety production standardized mine."
      ],
      "item2016": [
        "Mengtai Manlailiang Coal Mine was rated as a first-class safety production standardized mine.",
        "Monte Group is the title sponsor of the Monte Ordos International Marathon, a public welfare event."
      ],
      "item2015": [
        "Mengtai Manlailiang Coal Mine was rated as a second-level safety and quality standardized mine.",
        "Mengtai Bulianggou Coal Mine has been rated as a first-class national safety and quality standardized mine for four consecutive years.",
        "Mengtai was awarded as an A-level taxpayer by the Ordos Municipal State Taxation Bureau and Local Taxation Bureau in 2014."
      ]
    }
  },
  "hero": {
    "title": "Welcome to Mengtai Group",
    "cta": "Learn More"
  },
  "staffStyle": {
    "title": "Staff Style",
    "source": "Source",
    "views": "Views",
    "card1": {
      "source": "",
      "views": "87",
      "title": "Monte 2024 Ordos Marathon Official Training Camp Concludes Successfully",
      "description": [
        "On August 22, the official training camp of Monte 2024 Ordos Marathon was held. Monte’s marathon enthusiasts interacted and communicated with the marathon world champion Sun Yingjie at close range, and warmed up and trained, seizing the last time before the race to actively prepare for the competition.",
        "Sun Yingjie, Chinese women's full marathon record holder, world half marathon champion, four consecutive Beijing Marathon champions, double gold medals at the Busan Asian Games, and double gold medals at the Manila Asian Athletics Championships. Her best full marathon time is 2 hours 19 minutes 39 seconds and her best half marathon time is 1 hour 8 minutes 40 seconds.",
        "On the training ground, coach Sun Yingjie led everyone in a lot of warm-up and training exercises. After closely observing the team members' running status, he gave targeted guidance to help everyone master the correct running method and rhythm.",
        "Marathon is a national carnival and an extreme challenge. From 5 kilometers to 42.195 kilometers, every goal is worth our best efforts. Run, constantly break through and surpass yourself, ignite the fire in your heart, and open up the infinite splendor of life."
      ]
    },
    "card2": {
      "source": "",
      "views": "238",
      "title": "Happy holidays to all female employees of Mengtai Group!",
      "description": [
        "March is full of spring. On March 8, all female employees of Mengtai Group welcomed the annual International Women's Day. Today is the 113th International Women's Day and the 100th Women's Day in my country. The group's labor union and the Youth League Committee jointly organized a festival activity with the theme of 'Smart Women's Charm Blooming', allowing the majority of female employees to spend a happy and unforgettable holiday after work.",
        " On behalf of the Party Committee, Labor Union and Youth League Committee of the Group, Assistant to the President Wang Hui extended holiday greetings to all female employees, hoping that every female employee of the Group would be more outstanding and more moving in their future work and life, and show the demeanor of our Mengtai people with the spirit of unity, hard work and high spirits.",
        "Yang Wenyan, senior etiquette trainer at Ordos Airport, taught everyone about workplace business etiquette through on-site explanations and interactions.",
        "During the game session, the female employees were energetic and enthusiastic and participated actively. Amid the endless applause, laughter and cheers, everyone enjoyed the joy brought by the fun activities.",
        "This activity not only improved the workplace etiquette of female employees, but also cultivated the team spirit of mutual cooperation and collaboration among female employees through fun games, allowing everyone to spend a beautiful and meaningful day in a relaxed and pleasant atmosphere. ",
        "Every woman should have the courage to define her own life, even ordinary women should be illuminated."
      ]
    },
    "card3": {
      "source": "",
      "views": "445",
      "title": "The 13th 'Beyond Cup' Job Skills Competition has come to an end!",
      "description": [
        "On April 28, the 13th 'Beyond Cup' Job Skills Competition of Monte Group was successfully concluded. 212 job role models and technical experts stood out from 1,150 contestants and received commendations and rewards. ",
        "After 16 days of fierce competition, the competition produced 56 first prizes, 67 second prizes, and 89 third prizes. Their excellent performance in the competition showed their excellent quality and superb skills, and also showed the spirit of Mengtai people who love their jobs, practice hard, and constantly surpass themselves.",
        "The 'Beyond Cup' job skills competition is a comprehensive review of everyone's work ability and skill level. It is also a learning, exchange and communication platform carefully built by the group company for all employees. It aims to stimulate the work enthusiasm of all employees and improve their business level through competition. It has been held for thirteen consecutive sessions.",
        "Party Secretary Kang Weicheng earnestly hopes that all award winners will continue to carry forward their achievements, set good examples, keep up the good work, continue to make new contributions in their posts, and bravely serve as the vanguard; he hopes that other employees will learn from the award winners, benchmark against the advanced, and surpass the benchmark; he hopes that all units and departments will pay more attention to the construction of the talent team in the future, give full play to the role of highly skilled talents in mentoring and helping others, and enable the innovative talents of the majority of employees to flow fully."
      ]
    },
    "card4": {
      "source": "",
      "views": "1233",
      "title": "The 13th 'Beyond Cup' Job Skills Competition of Mengtai Group opens",
      "description": [
        "On April 12, willows were green and spring breezes were dancing. In this season of spring, flowers were blooming and full of vitality, Mengtai people welcomed the 13th 'Beyond Cup' Job Skills Competition. The competition lasted for 17 days, with 8 competition areas and 39 sub-competition areas. The number of participants reached more than 1,000, the largest number in history.",
        "The 'Beyond Cup' job skills competition is a big stage for all employees to display their talents and show their style. It is also a big arena for job training, exchange and communication. Participants can discover their shortcomings in the competition, surpass themselves, learn from those with excellent results, and constantly break through themselves in the process of learning from each other and catching up.",
        "It is a large-scale job training and a skills competition. What is being competed is skills and qualities, and behind them are management and culture. Shang Peilin, assistant to the president of the group, pointed out in his opening speech that we must create a good situation throughout the group where everyone is eager for talent, everyone strives to become talented, everyone can become talented, and everyone can make the best use of their talents, so that the innovative vitality of all kinds of talents can compete and their wisdom and talents can fully flow.",
        "In recent years, the company has firmly adhered to the strategy of 'green development and technological strength', continuously increased investment in scientific and technological innovation, focused on extending the industrial chain, and made solid steps in transformation and upgrading and high-quality development, and achieved remarkable results. The company's rapid and high-quality development has put forward new and higher requirements for talent development. The company has also placed talent development work in a more important position, promoted it from a strategic and overall perspective, and strived to build a broad career platform for all employees through continuous optimization of talent systems and mechanisms."
      ]
    }
  },
  "#app": " translate",
  "": {
    "": {
      "/locales/${locale}": {
        "json": " translate"
      }
    },
    "job-details-expanded": " translate",
    "submit-button": " translate"
  },
  "content-length": " translate",
  "content-type": " translate",
  "/": " translate",
  "a": " translate",
  "button": " translate",
  "${namespace}": {
    "${key}": " translate"
  },
  "canvas": " translate",
  "2d": " translate",
  "Default Title": " translate",
  "Menu": " translate",
  "Group Website Group": " translate",
  "Monte Group": " translate",
  "Apt": " translate",
  "Staff Channel": " translate",
  "Collaborative Office": " translate",
  "Corporate Email": " translate",
  "English": " translate",
  "Chinese": " translate",
  "Mongolian": " translate",
  "Close": " translate",
  "Language": " translate"
}
const mn ={
  "nav": {
    "Group Website Group": "ᠪᠦᠯᠦᠭ ᠦᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ ᠪᠦᠯᠦᠭ",
    "Staff Channel": "ᠠᠵᠢᠯᠴᠢᠨ ᠦ ᠰᠤᠪᠤᠷᠭᠠ",
    "Chinese": "ᠬᠢᠲᠠᠳ ᠬᠡᠯᠡ",
    "English": "ᠠᠩᠭᠯᠢ ᠬᠡᠯᠡ",
    "Mongolian": "ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠬᠡᠯᠡ",
    "Close": "ᠬᠠᠭᠠᠬᠤ",
    "Monte Group": "ᠮᠣᠨᠲᠧ ᠪᠦᠯᠦᠭ",
    "Apt": "ᠠᠫᠲ ᠠᠪᠯᠢ",
    "Collaborative Office": "ᠬᠠᠮᠲᠤ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠠᠯᠪᠠ",
    "Corporate Email": "ᠬᠠᠮᠲᠤ ᠬᠦᠮᠦᠨ ᠦ ᠡᠯᠧᠺᠲ᠋ᠷᠣᠨ ᠱᠤᠭᠤᠮ",
    "Menu": "ᠴᠡᠰ",
    "Language": "ᠬᠡᠯᠡ"
  },
  "Join Us": "ᠪᠢᠳᠡ ᠨᠡᠷᠡᠶᠢᠬᠦ",
  "tabs": {
    "Social Recruitment": "ᠨᠢᠭᠡᠮ ᠦᠨ ᠰᠣᠩᠭᠣᠯᠲᠠ",
    "Campus Recruitment": "ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠶᠢᠨ ᠰᠣᠩᠭᠣᠯᠲᠠ",
    "Staff Style": "ᠠᠵᠢᠯᠴᠢᠨ ᠦ ᠠᠢᠳᠤ",
    "${tab}": " translate"
  },
  "form": {
    "Please enter job keywords": "ᠠᠵᠢᠯ ᠦᠨ ᠲᠦᠯᠬᠦᠦᠷ ᠦᠭᠡ ᠣᠷᠣᠭᠠᠷᠠᠢ",
    "Job Category": "ᠠᠵᠢᠯ ᠦᠨ ᠠᠩᠭᠢ",
    "Work Location": "ᠠᠵᠢᠯᠯᠠᠬᠤ ᠣᠷᠣᠨ",
    "Search": "ᠡᠷᠢᠬᠦ",
    "2025-03-14": "2025-03-14",
    "We are willing to work together with all people of insight to create a better future!": "ᠪᠢᠳᠡ ᠪᠦᠬᠦ ᠮᠡᠳᠡᠭᠡᠲᠡᠢ ᠬᠦᠮᠦᠨ ᠲᠡᠢ ᠬᠠᠮᠲᠤ ᠰᠠᠢᠨ ᠢᠷᠡᠭᠦᠳᠦᠢ ᠪᠠᠢᠭᠤᠯᠤᠯᠲᠠ!",
    "No relevant information found!": "ᠬᠠᠮᠠᠠᠷᠠᠯᠲᠠᠢ ᠮᠡᠳᠡᠭᠡ ᠤᠯ ᠣᠯᠤᠭᠰᠠᠨ ᠦᠭᠡᠢ!",
    "Salary Range": "ᠴᠢᠨ ᠦᠨ ᠬᠢᠮᠤᠷᠠᠯ",
    "Contact": "ᠬᠠᠷᠢᠯᠴᠠᠯ",
    "Contact Number": "ᠬᠠᠷᠢᠯᠴᠠᠯ ᠦᠨ ᠤᠲᠠᠰᠤ",
    "Job Responsibilities": "ᠠᠵᠢᠯ ᠦᠨ ᠬᠠᠷᠢᠶᠠᠳᠤ",
    "Qualifications": "ᠴᠢᠨᠠᠷ ᠤᠨ ᠰᠠᠨᠠᠭᠤᠯᠠ",
    "Submit Your Resume": "ᠨᠠᠮᠲᠠᠷ ᠡᠶᠢᠨ ᠪᠢᠴᠢᠭ ᠣᠷᠣᠯᠲᠠ",
    "Group Management Trainee": "ᠪᠦᠯᠦᠭ ᠦᠨ ᠮᠠᠨᠠᠭᠠᠯᠠᠯᠲᠠ ᠶᠢᠨ ᠰᠤᠷᠭᠠᠨ ᠪᠠᠭᠰᠢ",
    "Undergraduate": "ᠶᠡᠬᠡ ᠪᠠᠭᠰᠢ",
    "50 people": "50 ᠬᠦᠮᠦᠨ",
    "All": "ᠪᠦᠬᠦ",
    "Full-time": "ᠪᠦᠬᠦᠨ ᠴᠠᠭ",
    "Ordos City": "ᠣᠷᠳᠣᠰ ᠬᠣᠲᠠ",
    "7-15K/month": "7-15K/ᠴᠠᠷᠠ",
    "Mr. Qiao": "ᠴᠢᠶᠠᠣ ᠠᠭᠠ",
    "04773898646": "04773898646",
    "rotationPlan": "ᠡᠷᠭᠢᠯᠲᠡ ᠶᠢᠨ ᠲᠥᠪᠯᠦᠷᠦᠯ:",
    "rotationPoint1": "✅ ᠨᠢᠭᠡ ᠣᠨ ᠦᠢᠯᠡᠳᠦᠯ, ᠠᠵᠢᠯ-ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ-ᠡᠷᠳᠡᠮ ᠭᠤᠷᠪᠠᠨ ᠬᠡᠰᠡᠭ ᠬᠠᠮᠠᠷᠤᠨᠠ",
    "rotationPoint2": "✅ ᠬᠡᠰᠡᠭ ᠦᠨ ᠰᠤᠯᠴᠠᠭᠠᠨ ᠳᠤᠷᠰᠢᠯᠠᠯ, ᠪᠦᠯᠦᠭ ᠦᠨ ᠠᠵᠢᠯᠯᠠᠬᠤᠢ ᠪᠦᠷᠢᠨ ᠤᠶᠠᠷ",
    "mentorship": "ᠪᠠᠭᠰᠢ ᠶᠢᠨ ᠰᠢᠰᠲ᠋ᠧᠮ:",
    "mentorshipPoint1": "✅ 3+1 ᠪᠠᠭᠰᠢ ᠶᠢᠨ ᠠᠷᠭᠠ (ᠬᠦᠮᠦᠨ ᠦ ᠵᠠᠷᠢᠭ+ᠡᠷᠳᠡᠮ+ᠡᠷᠭᠢᠯᠲᠡ+ᠳᠡᠭᠡᠳᠦ ᠮᠠᠨᠠᠭᠠᠯᠠᠭᠴᠢ)",
    "mentorshipPoint2": "✅ ᠪᠦᠬᠦ ᠰᠠᠢᠳ ᠤᠨ ᠠᠷᠭᠠ, ᠠᠵᠢᠯ ᠦᠨ ᠰᠢᠵᠢ ᠶᠢᠨ ᠬᠦᠪᠢᠯᠭᠡᠨ ᠤ ᠲᠤᠯᠬᠢᠶᠠ",
    "educationRequirement": "ᠰᠤᠷᠭᠠᠨ ᠦ ᠰᠠᠨᠠᠭᠤᠯᠠ: ᠶᠡᠬᠡ ᠪᠠᠭᠰᠢ ᠪᠠ ᠳᠠᠩᠰᠠ (ᠴᠢᠳᠠᠪᠤᠷᠢ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠤᠷᠢᠳᠠ)",
    "recruitingMajors": "ᠰᠣᠩᠭᠣᠬᠤ ᠡᠷᠳᠡᠮ: ᠬᠤᠤᠯᠢ ᠵᠣᠬᠢᠣᠯ, ᠮᠠᠨᠠᠭᠠᠯᠠᠯ, ᠮᠠᠲ᠋ᠧᠮᠠᠲ᠋ᠢᠺ, ᠵᠦᠭᠡ ᠬᠦᠷᠦᠳᠡ, ᠲᠥᠪᠯᠦᠷᠦᠯ ᠮᠠᠨᠠᠭᠠᠯᠠᠯ, ᠬᠢᠲᠠᠳ ᠤᠷᠤᠨ ᠦ ᠤᠷᠠᠨ, ᠭᠠᠳᠠᠭᠠᠳᠤ ᠬᠡᠯᠡ, ᠬᠥᠰᠦᠳᠡ, ᠠᠷᠠᠷᠢ, ᠤᠷᠲᠠᠯᠢᠭ, ᠯᠤᠭ᠎ᠠ ᠵᠦᠶᠢᠯ, ᠣᠳᠣ ᠵᠦᠶᠢᠯ, ᠮᠡᠻᠠᠨᠢᠺ, ᠲᠣᠪᠴᠢᠶᠨ, ᠴᠠᠷᠠ ᠴᠦᠴᠦᠭ, ᠴᠠᠷᠠ ᠴᠢᠬᠤᠯᠠ, ᠺᠢᠮᠢ ᠮᠡᠷᠭᠡᠵᠢᠯ, ᠺᠣᠮᠫᠸᠦᠲ᠋ᠧᠷ, ᠵᠠᠬ ᠮᠠᠨᠳᠠᠯ, ᠡᠷᠬᠡ ᠪᠠᠷᠠᠴᠠ ᠮᠠᠨᠳᠠᠯ, ᠭᠠᠵᠤᠯᠭᠠ ᠮᠠᠨᠠᠭᠠᠯᠠᠯ, ᠠᠶᠤᠯᠭᠦᠢ ᠮᠠᠨᠠᠭᠠᠯᠠᠯ, ᠪᠠᠢᠢᠴᠠᠭᠠᠷ ᠪᠠᠷᠢᠮᠵᠢᠶᠠ ᠵᠦᠶᠢᠯ, ᠦᠴᠢᠭᠡᠨ ᠰᠠᠯᠭᠠᠯᠲᠠ ᠮᠠᠨᠠᠭᠠᠯᠠᠯ, ᠰᠢᠨ᠎ᠡ ᠴᠠᠷᠠ ᠴᠦᠴᠦᠭ ᠯ ᠡᠷᠳᠡᠮ, ᠰᠠᠯᠬᠢ ᠰᠢᠪᠢᠷᠠᠯᠲᠠ, ᠠᠵᠢᠯ ᠤᠷᠤᠯᠤᠯᠲᠠ ᠪᠠ ᠠᠵᠢᠪᠤᠷᠢᠯᠠᠯᠲᠠ",
    "${selectedCategory}": " translate",
    "${category}": " translate",
    "${selectedLocation}": " translate",
    "${location}": " translate",
    "${job": {
      "title}": " translate",
      "degree}": " translate",
      "vacancies}": " translate",
      "category}": " translate",
      "location}": " translate"
    }
  },
  "partyBuilding": {
    "title": "ᠨᠠᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
    "source": "ᠡᠬᠢ ᠬᠥᠮᠦᠰ",
    "views": "ᠬᠠᠷᠠᠯᠲᠤ",
    "card2": {
      "source": "",
      "views": "238",
      "title": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠪᠣᠯᠣᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠰᠢ ᠵᠢᠨᠫᠢᠩ ᠤᠨ ᠬᠢᠲᠠᠳ ᠤᠨ ᠰᠣᠴᠢᠶᠠᠯᠢᠰᠮ ᠤᠨ ᠦᠵᠡᠯ ᠪᠣᠯᠣᠨ ᠰᠢᠨ᠎ᠡ ᠶᠢᠨ ᠴᠠᠭ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢ ᠰᠢᠯᠭᠠᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠨᠡᠶᠢᠲᠡ ᠪᠠᠷᠢᠬᠤ ᠶᠢᠨ ᠲᠤᠰᠬᠠᠢ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠴᠡᠩᠴᠤᠸᠠᠨ ᠶᠢᠨ ᠬᠡᠳᠡᠷ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠳᠤ ᠪᠠᠷᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ",
      "description": [
        "ᠬᠢᠲᠠᠳ ᠤᠨ ᠬᠣᠮᠮᠤᠨᠢᠰᠲ ᠤᠨ ᠨᠠᠮ ᠤᠨ 102 ᠳᠤᠭᠠᠷ ᠶᠢᠨ ᠣᠢ ᠶᠢ ᠲᠡᠮᠳᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠬᠤ ᠶᠢᠨ ᠬᠣᠶᠢᠨ᠎ᠠ ᠰᠢ ᠵᠢᠨᠫᠢᠩ ᠤᠨ ᠬᠢᠲᠠᠳ ᠤᠨ ᠰᠣᠴᠢᠶᠠᠯᠢᠰᠮ ᠤᠨ ᠦᠵᠡᠯ ᠪᠣᠯᠣᠨ ᠰᠢᠨ᠎ᠡ ᠶᠢᠨ ᠴᠠᠭ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢ ᠰᠢᠯᠭᠠᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠪᠣᠯᠣᠨ ᠨᠠᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠤᠢᠯᠡ ᠶᠢ ᠦᠨᠳᠦᠰᠦᠨ ᠡᠬᠢᠯᠡᠬᠦ ᠪᠣᠯᠣᠨ ᠨᠠᠮ ᠤᠨ ᠬᠡᠰᠢᠭᠴᠢᠳ ᠪᠣᠯᠣᠨ ᠨᠠᠮ ᠤᠨ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠬᠡᠰᠢᠭᠴᠢᠳ ᠤᠨ ᠨᠠᠮ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠰᠢᠯᠭᠠᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠴᠡᠩᠴᠤᠸᠠᠨ ᠶᠢᠨ ᠬᠡᠳᠡᠷ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠳᠤ 6 ᠰᠠᠷ᠎ᠠ ᠶᠢᠨ 30 ᠡᠴᠡ 7 ᠰᠠᠷ᠎ᠠ ᠶᠢᠨ 2 ᠣᠳᠣ ᠬᠦᠷᠲᠡᠯ ᠪᠠᠷᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠠᠩ ᠸᠧᠢᠴᠡᠩ᠂ ᠨᠠᠮ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠨᠢᠭᠤᠴᠠ ᠪᠣᠯᠣᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠳᠠᠷᠤᠭᠠᠯᠠᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠵᠢ ᠰᠢᠶᠣᠩ᠂ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠴᠡᠩᠴᠤᠸᠠᠨ ᠶᠢᠨ ᠬᠡᠳᠡᠷ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠳᠡᠭᠡᠳᠦ ᠳᠠᠷᠤᠭᠠᠯᠠᠭᠴᠢ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠨᠡᠭᠡᠬᠦ ᠶᠢᠨ ᠡᠷᠬᠢᠮ ᠳᠤ ᠣᠷᠣᠯᠴᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
        "ᠵᠢ ᠰᠢᠶᠣᠩ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠳᠤ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢᠨ ᠬᠡᠷᠡᠭᠴᠢᠳ ᠶᠢ ᠬᠠᠯᠠᠭᠤᠨ ᠤᠭᠡᠯᠡᠵᠦ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠡᠴᠢᠶᠠᠨ ᠪᠠᠨᠨᠧᠷ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠲᠥᠪ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠵᠤ᠂ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠪᠡᠯᠡᠳᠬᠡᠯ ᠪᠣᠯᠣᠨ ᠬᠠᠭᠤᠯᠠᠯᠲᠤ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠲᠠᠨᠢᠯᠴᠠᠭᠤᠯᠵᠤ᠂ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠴᠡᠩᠴᠤᠸᠠᠨ ᠶᠢᠨ ᠬᠡᠳᠡᠷ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠳᠤ ᠶᠤᠤᠨ ᠶᠢ ᠰᠤᠷᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ ᠪᠣᠯᠣᠨ ᠶᠠᠭᠤᠮᠠᠳᠤ ᠰᠤᠷᠬᠤ ᠬᠡᠷᠡᠭᠲᠡᠢ ᠪᠣᠯᠬᠤ ᠶᠢ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢ ᠬᠠᠰᠢᠭᠴᠢᠯᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
        "ᠬᠠᠩ ᠸᠧᠢᠴᠡᠩ᠂ ᠨᠠᠮ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠨᠢᠭᠤᠴᠠ ᠪᠣᠯᠣᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠳᠠᠷᠤᠭᠠᠯᠠᠭᠴᠢ ᠨᠡᠶᠢᠲᠡ ᠶᠢᠨ ᠨᠡᠭᠡᠬᠦ ᠶᠢᠨ ᠡᠷᠬᠢᠮ ᠳᠤ ᠳᠠᠮᠵᠢᠭᠤᠯᠤᠭᠴᠢ ᠦᠭᠡ ᠶᠢ ᠥᠭᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠲᠡᠷ᠎ᠡ ᠶᠢᠨ ᠦᠭᠡ ᠳᠤ ᠬᠡᠷᠡᠭᠴᠢᠳ ᠶᠢ ᠤᠯᠠᠮ ᠵᠢᠷᠤ ᠤᠨ ᠤᠯᠤᠰ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠳᠡᠭᠡᠳᠦ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠪᠠᠷᠢᠬᠤ᠂ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠨᠠᠮ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠪᠠᠰ ᠳᠡᠭᠡᠳᠦ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠪᠠᠷᠢᠬᠤ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠶᠢᠨ ᠡᠬᠢ ᠪᠣᠯᠬᠤ ᠶᠢ ᠡᠰᠢᠶᠡᠨ ᠬᠢᠮᠠᠷᠢᠯᠠᠵᠤ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠳᠡᠭᠡᠳᠦ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠪᠠᠷᠢᠬᠤ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠮᠣᠨᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠬᠦᠴᠦᠨ ᠶᠢ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠶᠢ ᠰᠢᠯᠭᠠᠷᠢᠯᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃"
      ]
    },
    "card3": {
      "source": "",
      "views": "445",
      "title": "ᠬᠣᠲᠣᠯᠢᠶ᠎ᠠ ᠪᠠᠢᠰᠠᠬᠤᠯᠤᠯᠤᠨ ᠪᠠᠯᠠᠭ᠎ᠠ᠋ ᠤᠷᠤᠰᠢᠬᠤ ᠪᠣᠯᠣᠭᠰᠠᠯᠲᠠᠢ",
      "description": [
        "ᠰᠢᠯᠡᠭᠡᠷ 4 ᠳᠡᠭᠡᠷ 5-ᠤᠨ ᠮᠡᠩᠲᠡᠢ ᠭᠣᠷᠣᠨ ᠲᠡᠪᠲᠡᠷ ᠲᠡᠯᠲᠡᠭᠡᠷ ᠲᠠᠯᠲᠠᠢᠢᠯᠡᠯ ᠬᠤᠪᠤᠷᠠᠬᠤ ᠬᠡᠷᠡᠨ ᠡᠬᠡᠨ ᠪᠣᠯᠤᠳᠠᠭᠠᠯᠲᠠᠢᠯ ᠪᠡᠷ ᠲᠦᠭᠡᠷᠢᠬᠡ ᠮᠣᠩᠭᠣᠯᠢᠶᠠᠨ ᠲᠣᠷᠣᠯᠢᠯᠢᠳᠠ ᠨᠢ ᠶᠢᠬᠡᠴᠠᠢ ᠪᠠᠢᠨ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠰᠠᠭᠤᠷᠢᠯᠲᠠᠢ ᠲᠤᠯᠤᠰᠢᠶᠠᠨ ᠲᠤᠷᠢᠭᠰᠠᠯᠲᠠᠢ, ᠪᠠᠢᠴᠢᠯᠠᠭ᠎ᠠ ᠬᠠᠷᠢᠯᠲᠠᠢᠯᠡᠯ ᠪᠠᠢ᠃",
        "ᠬᠤᠷᠢᠭᠤ ᠵᠢᠩᠭᠡᠯ ᠠᠬᠤ ᠲᠣᠷᠣᠯᠢᠯᠢᠳᠠ ᠪᠠᠢᠨ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠬᠡᠷᠡᠨ ᠬᠡᠮᠡᠷᠢᠯᠲᠠᠢ ᠳᠡᠷ᠎ᠡ ᠮᠣᠩᠭᠣᠯᠢᠶᠠᠨ ᠬᠡᠷᠡᠨ ᠬᠠᠶᠢᠷᠢᠬᠦ ᠪᠠᠢᠰᠠᠬᠤᠯᠤᠯᠤᠨ ᠭᠣᠷᠢᠳᠤᠯᠬᠤᠯᠢᠶᠠᠨ ᠰᠢᠨ᠎ᠡ ᠵᠠᠰᠠᠯ ᠵᠢᠯᠤᠭᠠᠬᠤ ᠬᠡᠮᠡᠷᠢᠯᠲᠠᠢ ᠲᠡᠢᠯᠡᠯᠡᠬᠦ ᠰᠠᠩᠭᠤᠯᠲᠠᠢ᠃ ᠬᠡᠷᠡᠨ ᠪᠠᠢ᠃",
        "ᠬᠡᠷᠡᠨ ᠨᠠᠷᠢᠬᠤ ᠪᠤᠷᠤᠰᠢ ᠳᠠᠰᠠᠬᠤ ᠪᠤᠷᠠᠢᠬᠤ ᠪᠠᠷᠠᠭᠤᠷᠠᠢᠯᠲᠠᠢ ᠪᠠᠢ᠃ ᠨᠡᠷᠡᠳ ᠳᠡᠬᠡ ᠬᠤᠮᠢᠰ ᠪᠠᠷᠢᠭ᠎ᠠ ᠵᠤᠷᠠᠭᠤᠯᠤᠯᠤᠯᠤᠰᠤᠬᠤ ᠳᠡᠭᠡᠷ ᠳᠡᠬᠡ ᠬᠣᠲᠣᠯᠢᠶ᠎ᠠ ᠲᠡᠮᠡᠭᠡᠷ ᠠᠷᠪᠠᠨ ᠳᠡᠭᠡᠷᠲᠤᠯᠬᠤ ᠬᠠᠷᠢᠯᠲᠠᠢ᠃",
        "ᠬᠡᠷᠡᠨ ᠪᠠᠶᠢᠯᠠᠬᠤᠯᠤᠯᠤᠰᠤᠯᠤᠨ ᠪᠠᠭᠤᠷᠬᠠᠨ, ᠵᠠᠰᠠᠯ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠠᠷᠢᠨ ᠲᠡᠯᠡᠬᠦᠨ ᠪᠡᠷᠬᠡᠬᠡᠯᠲᠡᠢ᠃ ᠮᠡᠩᠲᠡᠢ ᠬᠡᠷᠡᠨ ᠵᠤᠷᠤᠯᠬᠠᠯᠲᠠᠢᠯᠠᠯ ᠬᠤᠯᠤᠰᠤᠬᠤ ᠲᠠᠯᠲᠠᠢ᠋ᠠᠨ, ᠲᠠᠪᠠᠭᠤᠷᠠᠬᠤ ᠪᠠᠢᠰᠠᠬᠤᠯᠤᠯᠤᠨ ᠰᠢᠯᠡᠭᠡᠯᠲᠠᠢ᠃ ᠡᠯᠡᠭᠦᠯᠡᠷ ᠠᠷᠢᠮᠠᠨ ᠬᠠᠶᠢᠯᠲᠠᠢ, ᠲᠤᠷᠠᠬᠠᠢᠯᠲᠠᠢ, ᠪᠠᠶᠠᠷᠢᠳᠤᠯᠤᠯᠤᠰᠤᠬᠤ ᠬᠡᠷᠡᠨ ᠲᠡᠯᠡᠭᠦᠯᠡᠬᠦ ᠵᠠᠰᠠᠯ ᠪᠠᠢ᠃"
      ]
    },
    "card4": {
      "source": "",
      "views": "1233",
      "title": "ᠮᠡᠩᠲᠠᠢ ᠭᠣᠷᠣᠨ ᠲᠡᠪᠲᠡᠷ ᠪᠠᠢᠴᠢᠯᠠᠭᠠᠨ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠵᠠᠰᠠᠯ ᠪᠠᠢᠨ ᠲᠤᠷᠢᠭᠰᠠᠯᠲᠠᠢ ᠬᠠᠷᠢᠯᠲᠠᠢ 100 ᠠᠷᠪᠠᠨ ᠳᠡᠭᠡᠷ ᠵᠠᠰᠠᠯ ᠲᠡᠪᠲᠡᠷ ᠬᠠᠷᠢᠯᠲᠠᠢ ᠬᠤᠶᠢᠯᠡᠬᠦ ᠬᠠᠢᠮᠠᠯ ᠠᠷᠠᠯᠠᠨ",
      "description": [
        "2021 ᠵᠢᠩ 6 ᠳᠡᠭᠡᠷ 26-ᠤᠨ ᠤᠷᠤᠯᠬᠤᠯᠢᠳᠠᠯ ᠮᠡᠩᠲᠡᠢ ᠭᠣᠷᠣᠨ ᠲᠡᠪᠲᠡᠷ ᠲᠡᠯᠲᠡᠭᠡᠷ ᠪᠠᠢᠴᠢᠯᠠᠭᠠᠨ ᠪᠠᠢᠳᠠᠬᠤ ᠪᠣᠯᠢᠨ ᠳᠤᠷᠠᠢᠰᠠᠨ ᠲᠤᠰᠬᠤ ᠬᠤᠷᠢᠭᠴᠢᠯᠡᠭᠯᠡᠯᠡᠬᠦ ᠳᠡᠬᠡ ᠨᠡᠷᠡᠳᠬᠡ ᠪᠠᠢᠳᠠᠬᠤ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠵᠠᠰᠠᠯ ᠰᠠᠨᠠᠷᠢᠮᠠᠯᠲᠠᠢ: ᠪᠠᠢᠴᠢᠯᠠᠭᠠᠨ ᠭᠠᠯᠤᠰᠠᠨ, ᠪᠠᠢᠴᠢᠯᠠᠭᠠᠨ ᠲᠡᠪ ᠬᠠᠶᠢᠷᠢᠬᠦ ᠳᠡᠬᠡ, ᠲᠤᠰᠤᠷᠬᠠᠨ ᠣᠶᠢᠨ ᠬᠠᠶᠢᠷᠢᠬᠦ ᠰᠠᠷᠠᠭᠲᠠᠢ, ᠬᠤᠷᠪᠠᠯ ᠳᠡᠪᠦᠷᠡᠯᠲᠡᠢ ᠪᠠᠢᠴᠢᠯᠠᠭ᠎ᠠ, ᠪᠠᠢᠴᠢᠯᠠᠭᠠᠨ ᠠᠷᠠᠯᠠᠨ ᠳᠡᠬᠡ ᠪᠠᠢᠷᠠᠳᠠᠬᠤ ᠲᠡᠪᠲᠡᠷᠬᠡᠷ ᠪᠣᠯᠢᠶᠠᠯᠠᠭᠠᠷᠠᠢᠯᠲᠠᠢ, ᠬᠡᠷᠡᠨ ᠬᠠᠶᠢᠷᠠᠬᠤ ᠲᠡᠪᠲᠡᠷ ᠲᠠᠳᠤᠷᠢᠬᠡ ᠵᠠᠰᠠᠯ ᠲᠡᠪᠲᠡᠷ ᠬᠠᠷᠢᠯᠲᠠᠢ 100 ᠠᠷᠪᠠᠨ ᠳᠡᠭᠡᠷ ᠬᠠᠢᠮᠠᠯᠲᠠᠢ."
      ]
    }
  },
  "companyProfile": {
    "title": "ᠬᠤᠮᠤᠨ ᠤ ᠲᠣᠭᠠᠷᠢᠯ",
    "intro1": "ᠰᠦᠮᠡᠨ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠣᠩᠭᠲᠠᠢ ᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠠᠮᠲᠤ ᠮᠠᠯ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠳᠡᠨᠳᠦ ᠶᠢ ᠡᠳᠡᠬᠦ ᠶᠢ ᠡᠷᠢᠶᠡᠨ ᠬᠠᠮᠤᠭᠤᠨ ᠤ ᠰᠣᠶᠣᠯ ᠬᠦᠮᠦᠨ ᠦ ᠰᠢᠪᠢᠯᠭᠠᠨ ᠢ ᠳᠡᠮᠵᠢᠯᠡᠬᠦ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠬᠦᠨᠳᠦ ᠬᠥᠪᠡᠭᠡᠨ ᠤ ᠬᠥᠯᠢᠴᠡᠭᠡᠷ ᠪᠣᠯᠤᠨ ᠰᠦᠮᠡᠨ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠣᠷᠳᠣᠰ ᠬᠣᠲᠠ ᠳᠤ ᠪᠠᠢᠢᠳᠠᠭ ᠪᠣᠯᠤᠨ ᠠ",
    "intro2": "ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ 2001 ᠣᠨ ᠳᠤ ᠪᠠᠢᠢᠭᠤᠯᠠᠭᠰᠠᠨ ᠬᠥᠮᠦᠨ ᠤ ᠰᠤᠷᠴᠢᠨ ᠤ ᠨᠢ 7,500 ᠵᠦᠪᠴᠢᠯᠡᠨ ᠨᠢ ᠬᠦᠷᠲᠡᠯᠡ ᠵᠢᠯ ᠬᠦᠷᠢᠶᠡᠨ ᠤ ᠦᠯᠦᠭᠡᠨ ᠣᠳᠠᠯᠤᠨ ᠤ ᠣᠷᠣᠯᠠᠨ ᠨᠢ 50 ᠪᠠᠮᠠ ᠶᠤᠸᠠᠨ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠬᠢᠲᠠᠳ ᠤᠨ ᠬᠦᠷᠢᠶᠡᠨ ᠴᠠᠪᠲᠠᠢ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠢᠶᠡᠨ ᠤ 500 ᠳᠠᠪᠤᠷᠢ ᠡᠷᠢᠬᠡ ᠶᠢᠨ ᠵᠢᠷᠤᠳᠠᠭᠠᠷ 252 ᠳᠤᠭᠠᠷ ᠣᠷᠣᠨ ᠳᠤ ᠪᠠᠢᠢᠳᠠᠭ ᠪᠣᠯᠤᠨ ᠠ ᠲᠡᠭᠦᠨ ᠬᠢᠲᠠᠳ ᠤᠨ ᠦᠢᠯᠡᠳᠦᠭᠦᠯᠦᠨ ᠤ ᠴᠠᠪᠲᠠᠢ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠢᠶᠡᠨ ᠤ 500 ᠵᠢᠷᠤᠳᠠᠭᠠᠷ 176 ᠳᠤᠭᠠᠷ ᠣᠷᠣᠨ ᠳᠤ ᠰᠦᠮᠡᠨ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠴᠠᠪᠲᠠᠢ ᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠢᠶᠡᠨ ᠤ ᠨᠢᠭᠡᠨ ᠵᠤᠭᠠᠨ ᠤ 100 ᠤ ᠳᠠᠷᠠᠭᠠ ᠡᠷᠢᠬᠡ 5 ᠳ᠋ᠦ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠣᠷᠳᠣᠰ ᠬᠣᠲᠠ ᠶᠢᠨ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠤᠭᠯᠤᠭᠰᠠᠨ ᠪᠦᠷᠦᠯᠭᠡ ᠶᠢᠨ ᠬᠢᠩᠭᠠᠨ ᠤ ᠠᠵᠢᠯ ᠤᠨ ᠨᠡᠭᠡᠳᠦᠯ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠨᠤᠷᠰ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠠᠯᠠᠭᠤᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠬᠣᠯᠢᠮᠠᠭᠲᠠ ᠮᠠᠲᠧᠷᠢᠠᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠬᠠᠷᠢᠭᠤᠴᠠᠯ ᠠᠵᠢᠯ ᠤᠳᠠᠭᠠ ᠬᠥᠩ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠠᠵᠢᠯ ᠰᠤᠯᠳᠤᠯ ᠨᠡᠷᠡᠢᠳᠦᠯ ᠠᠵᠢᠯ ᠢ ᠶᠠᠩᠰᠡᠵᠠᠢ ᠠᠨ ᠲᠦᠷᠦᠯ ᠳᠦ ᠭᠠᠷᠭᠠᠨ ᠠ᠃ ᠵᠢᠯ ᠤᠨ ᠨᠤᠷᠰ ᠤᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡᠨ ᠦ ᠬᠡᠮᠵᠢᠶᠠ 30 ᠰᠠᠶᠠ ᠲᠣᠨ ᠪᠠᠷᠠᠨ ᠰᠠᠯᠬᠢ ᠨᠠᠷᠠᠨ ᠤ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠪᠠ ᠰᠢᠨ᠎ᠡ ᠬᠦᠴᠦᠨ ᠦ ᠰᠢᠢᠳᠯᠡᠯ ᠰᠤᠷᠤᠯᠳᠠᠢ ᠬᠦᠮᠦᠨ ᠦ ᠬᠦᠴᠦᠨ 4 ᠰᠠᠶᠠ ᠬᠢᠯᠦᠸᠠᠲ ᠬᠠᠯᠠᠭᠤᠨ ᠤ ᠬᠡᠮᠵᠢᠶᠠ 38 ᠰᠠᠶᠠ ᠬᠠᠪᠲᠠᠰᠤ ᠮᠧᠲᠷ ᠵᠢᠯ ᠤᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡᠨ 500,000 ᠲᠣᠨ ᠵᠢᠯ ᠤᠨ ᠳᠡᠯᠪᠡᠷᠢ ᠨᠢᠭᠡᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠬᠣᠯᠢᠮᠠᠭᠲᠠ ᠮᠠᠲᠧᠷᠢᠠᠯ ᠪᠠ ᠲᠣᠭᠣᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠬᠣᠯᠢᠮᠠᠭᠲᠠ ᠮᠠᠲᠧᠷᠢᠠᠯ ᠵᠢᠯ ᠵᠢᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡᠨ 100,000 ᠲᠣᠨ ᠪᠣᠯᠤᠨ ᠠ ᠧᠶᠤᠷᠤᠫ ᠳᠤ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠬᠠᠷᠢᠭᠤᠴᠠᠯ ᠠᠵᠢᠯ 220,000 ᠲᠣᠨ ᠪᠣᠯᠤᠨ ᠠ",
    "detail1": "ᠬᠥᠳᠡᠭᠡ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠠᠵᠢᠯ ᠤᠨ ᠳᠦᠷᠪᠡ ᠰᠦᠯ ᠨᠢ ᠨᠢᠭᠡᠨ ᠵᠡᠷᠭᠡ ᠦ ᠺᠦᠨ ᠤᠷᠤᠯ ᠪᠠᠭᠠᠳᠠᠮᠵᠢᠲᠠᠢ ᠨᠡᠭᠡᠳᠦᠯ ᠦᠨ ᠪᠦᠷᠢᠯᠳᠡᠬᠦᠨ ᠪᠠᠢᠢᠭᠤᠯᠠᠪᠠ ᠨᠢᠭᠡᠨ ᠳᠠᠪᠳᠠᠷ 1,300 ᠬᠡᠺᠲᠠᠷ ᠦᠨ ᠰᠤᠬᠠᠨ ᠪᠠᠢᠢᠭᠠᠷ ᠳᠡᠯᠡᠭᠡᠵᠦ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠠᠷᠠ ᠡᠮᠡᠭᠡᠨ ᠤ ᠠ ᠤᠷᠤᠯ ᠦᠨ ᠦᠷᠭᠡᠳᠦᠯ 5,000 ᠲᠣᠯᠠᠢ ᠳᠤ ᠬᠦᠷᠲᠡᠯᠡ ᠭᠤᠷᠪᠠᠨ ᠵᠢᠯ ᠵᠢᠨ ᠤᠷᠤ ᠳᠤ 10,000 ᠲᠣᠯᠠᠢ ᠳᠤ ᠬᠦᠷᠨᠡ ᠵᠣᠷᠢᠭᠯᠠᠭᠰᠠᠨ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠣᠷᠣᠨ ᠤ 3,000 ᠵᠤᠬᠡᠢ ᠬᠥᠳᠡᠯᠮᠦᠷᠢ ᠪᠠ ᠤᠯᠠᠭᠠᠴᠢ ᠰᠠᠨ ᠤ ᠤᠷᠤ ᠪᠠᠯᠠᠭᠰᠠᠨ ᠦ ᠠᠯᠪᠠᠯᠠᠯ ᠢ ᠨᠡᠮᠡᠬᠦ ᠪᠠᠢᠢᠨ ᠪᠠᠷᠠᠯᠠᠳᠤ ᠪᠠᠢᠢᠵᠤ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠪᠷᠢᠲᠠᠨ ᠤ ᠰᠣᠺᠳᠯᠠᠨᠳ ᠤᠡᠰᠺᠢ ᠬᠤᠮᠤᠨ ᠤ ᠲᠠᠢ ᠬᠠᠮᠲᠤ ᠠᠵᠢᠯᠯᠠᠨ ᠵᠢᠯ ᠳᠤ 800,000 ᠯᠢᠲᠷ ᠦᠢᠯᠡᠳᠦᠯᠭᠡᠨ ᠦ ᠤᠡᠰᠺᠢ ᠳᠦᠷᠪᠡ ᠰᠦᠯ ᠪᠠᠢᠢᠭᠤᠯᠠᠪᠠ",
    "detail2": "ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠪᠠᠶᠢᠭᠠᠯᠢ ᠢ ᠬᠦᠨᠳᠦᠯᠡᠨ ᠨᠣᠭᠣᠭᠠᠨ ᠢ ᠳᠡᠮᠵᠢᠯᠡᠨ ᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠪᠠᠶᠠᠨ ᠰᠠᠢᠢᠨ ᠭᠠᠵᠠᠷ ᠪᠠ ᠠᠴᠠ ᠳᠤᠮᠳᠠ ᠪᠠᠢᠢᠳᠠᠯ ᠭᠠᠵᠠᠷ ᠲᠠᠢ ᠣᠷᠣᠨ ᠳᠤ ᠪᠠᠢᠢᠳᠠᠭ ᠪᠣᠯᠤᠨ ᠠ᠃ ᠡᠨᠡ ᠪᠠᠢᠢᠳᠠᠯ ᠤᠨ ᠳᠡᠪᠰᠢᠭᠯᠡᠯ ᠨᠤᠮᠤᠷᠯᠠᠨ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠬᠠᠴᠢᠷ ᠨᠢ ᠣᠷᠣᠯᠴᠠᠯᠤᠨ ᠬᠦᠷᠦᠬᠡᠳᠦ ᠦᠯᠦ ᠬᠠᠷᠢᠨ ᠦ ᠣᠷᠤᠯᠭᠠ ᠵᠢᠨ ᠣᠯᠠᠮᠵᠢᠲᠠᠢ ᠠᠵᠢᠯ ᠤᠨ ᠭᠠᠷᠭᠠᠯᠤᠨ ᠤ ᠦᠪᠲᠠᠴᠠ ᠪᠠᠢᠢᠭᠤᠯᠠᠪᠠ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠨᠢ ᠡᠨᠡ ᠪᠠᠢᠢᠳᠠᠯ ᠢ ᠪᠠᠶᠢᠭᠠᠯᠢ ᠦᠯᠦ ᠬᠦᠮᠦᠨ ᠦ ᠦᠪᠡᠷᠳᠡᠭᠰᠡᠨ ᠦᠨᠵᠤᠨ ᠦ ᠪᠠᠭᠠᠯᠭᠠ ᠶᠢᠨ ᠬᠥᠮᠤᠷᠣᠭᠰᠠᠨ ᠪᠠᠢᠢᠳᠠᠯ ᠲᠠᠶ ᠬᠡᠯᠡᠨ ᠠ",
    "detail3": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠦᠨᠳᠦᠷ ᠰᠠᠨᠠᠭᠠ ᠪᠤᠯ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠠᠴᠠᠭᠠᠨ ᠢ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠬᠤ ᠬᠢᠪᠡᠯ ᠪᠤᠯᠤᠨ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠬᠤᠪᠢᠲᠠᠯ ᠢ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠤᠯᠭᠠᠬᠤ ᠶᠤᠮ᠃ ᠡᠨᠡ ᠨᠢ ᠭᠠᠷ ᠤᠨ ᠳᠤᠲᠤᠷᠠᠬᠢ ᠪᠠᠶᠠᠴᠠᠭᠠᠨ ᠢ ᠬᠠᠮᠤᠭ ᠤᠨ ᠠᠰᠠᠷ ᠢ ᠤᠯᠠᠮᠵᠢᠯᠠᠨ ᠤᠷᠲᠤ ᠨᠠᠰᠤᠨ ᠢ ᠦᠷᠭᠦᠵᠢᠯᠡᠨ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢᠭᠡᠮ ᠬᠦᠮᠦᠨ ᠦ ᠲᠦᠷᠦᠯ ᠢ ᠢᠯᠠᠭᠤᠨ ᠠᠰᠠᠷ ᠪᠤᠯᠭᠠᠬᠤ ᠶᠤᠮ᠃ ᠡᠨᠡ ᠰᠠᠨᠠᠭᠠ ᠶᠢᠨ ᠵᠠᠰᠠᠭᠯᠠᠯ ᠤᠨ ᠳᠤᠤᠷᠠ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠰᠦᠪᠡ ᠨᠢ ᠡᠷᠭᠢᠯᠲᠡ ᠪᠠ ᠨᠤᠭᠤᠭᠠᠨ ᠦᠩᠭᠡ ᠶᠢ ᠦᠨᠳᠦᠷ ᠳᠤ ᠠᠪᠤᠷᠠᠯ ᠪᠤᠯᠭᠠᠭᠰᠠᠨ ᠪᠤᠯᠤᠨ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠪᠦᠲᠦᠭᠡᠭᠰᠡᠨ ᠪᠦᠳᠦᠭᠡᠯᠢᠭ ᠨᠢ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠨ ᠬᠠᠮᠲᠤ ᠨᠢᠭᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠤᠯᠤᠨ ᠪᠢᠯᠭᠡᠷᠡᠪᠦᠯ ᠢ ᠨᠢᠭᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠪᠦᠲᠦᠭᠡᠵᠦ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠭᠦᠯᠵᠦ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠦᠷᠢᠯᠦᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠪᠦᠷᠢᠯᠦᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠭᠦᠯᠵᠦ ᠤᠳᠤ ᠨᠢ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠵᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠳᠦᠷ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠵᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠮᠦᠨ ᠦ ᠤᠳᠤ ᠨᠢ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠵᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠳᠦᠷ ᠭᠠᠷᠤᠭᠰᠠᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠵᠦᠭᠰᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠮᠦᠨ ᠦ ᠤᠳᠤ ᠨᠢ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠵᠦᠭᠰᠡᠨ",
    "detail4": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠲᠡᠬᠨᠢᠺ ᠢ ᠦᠷᠭᠦᠨ ᠬᠦᠮᠦᠵᠢᠯᠡᠨ ᠲᠡᠬᠨᠢᠺ ᠢᠨ ᠰᠢᠨᠡᠯᠡᠬᠦᠯᠡᠯ ᠢᠶᠠᠷ ᠪᠦᠲᠦᠭᠡᠯᠢᠭ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠶᠢᠨ ᠡᠷᠭᠢᠯᠲᠡ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠰᠦᠪᠡ ᠶᠢᠨ ᠤᠷᠲᠤ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠢ ᠦᠷᠭᠦᠵᠢᠯᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠭ᠃ ᠤᠳᠤ ᠶᠢᠨ ᠬᠡᠳᠦᠨ ᠵᠢᠯ ᠦᠨ ᠦᠶᠡ ᠳᠦ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠨᠠᠢᠮᠠᠨ ᠦᠯᠦᠰ ᠦᠨ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠤᠷᠤᠨ ᠤ ᠠᠯᠳᠠᠷᠲᠤ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠪᠠ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠤᠷᠤᠨ ᠺᠤᠮᠫᠠᠨᠢ ᠲᠠᠢ ᠨᠢᠭᠡᠨ ᠪᠤᠯᠤᠨ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠤᠷᠤᠨ ᠺᠤᠮᠫᠠᠨᠢ ᠲᠠᠢ ᠬᠠᠮᠲᠤ ᠠᠵᠢᠯᠯᠠᠨ ᠠᠶᠢᠨ ᠰᠢᠨᠡ ᠲᠥᠷᠥᠯ ᠲᠦ ᠰᠢᠨᠡ ᠪᠦᠲᠦᠭᠡᠯᠢᠭ ᠢ ᠰᠢᠨᠵᠢᠯᠡᠨ ᠪᠦᠲᠦᠭᠡᠭᠰᠡᠨ",
    "detail5": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠤᠨ ᠦᠨᠳᠦᠷ ᠪᠣᠳᠠᠳᠠᠢ ᠪᠤᠯᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠳᠤᠷᠠᠳᠠᠢ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠢ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠬᠠᠮᠤᠭ ᠳᠤᠷᠠᠳᠠᠢ ᠠᠵᠢᠯ ᠡᠷᠬᠡ ᠶᠢᠨ ᠦᠭᠡ ᠪᠤᠯᠤᠨ ᠵᠢᠯ ᠦᠨ ᠦᠶᠡ ᠡᠴᠡ ᠪᠤᠯᠤᠨ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠢ ᠦᠷᠭᠦᠨ ᠰᠦᠷᠭᠠᠭᠤᠯᠢ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠯ ᠢ ᠰᠤᠷᠤᠨ ᠪᠠᠶᠢᠵᠤ ᠥᠪᠡᠷ ᠤᠨ ᠦᠯᠭᠦᠷ ᠦᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠳᠤ ᠬᠦᠷᠭᠡᠬᠦ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠤᠨ ᠠᠷᠭᠠ ᠪᠠᠷᠢᠭᠰᠠᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠨᠡᠭᠡᠬᠡᠯᠡᠨ ᠨᠢᠭᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠦᠮᠦᠨ ᠦ ᠳᠤᠮᠳᠠᠳᠤ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠦᠨ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠦᠨ ᠲᠦᠪᠰᠢᠨ ᠲᠦ ᠬᠦᠷᠭᠡᠬᠦ ᠪᠠᠷᠢᠮᠳᠠᠯᠠᠯ ᠤᠨ ᠠᠷᠭᠠ ᠪᠠᠷᠢᠭᠰᠠᠨ",
    "detail6": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠡᠴᠡ ᠬᠤᠶᠢᠲᠤ ᠠᠵᠢᠠ ᠶᠢᠨ ᠰᠠᠨᠠᠭᠠ ᠵᠠᠯᠠᠢ ᠤᠨ ᠠᠯᠤᠰ ᠪᠠ ᠳᠡᠯᠬᠡᠢ ᠦᠯᠦᠰ ᠦᠨ ᠰᠠᠨᠠᠭᠠ ᠵᠠᠯᠠᠢ ᠤᠨ ᠠᠯᠤᠰ ᠤᠨ ᠣᠷᠣᠪᠤ ᠰᠢᠳᠦᠷᠭᠦ ᠦᠨ ᠠᠨᠳᠠᠭᠠᠢ ᠤᠨ ᠳᠤᠷᠠᠰᠬᠠᠯ ᠢ ᠦᠮᠦᠨ ᠦ ᠦᠵᠦᠭᠰᠡᠨ ᠤᠤᠷᠠᠯ ᠳᠠᠢ ᠵᠠᠯᠠᠢ ᠢ ᠰᠠᠯᠢᠭᠤᠨ ᠪᠠᠳᠠᠷᠠᠭᠤᠯᠤᠭᠰᠠᠨ ᠪᠠ ᠰᠠᠢᠢᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠢ ᠰᠠᠭᠤᠷᠢᠴᠠᠭᠠ ᠪᠠᠷ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ",
    "detail7": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠪᠠ ᠪᠠᠢᠢᠭᠠᠯᠢ ᠤᠷᠤᠨ ᠦ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠢ ᠦᠨᠳᠦᠷ ᠲᠥᠷᠥᠭᠦᠨ ᠰᠠᠨᠠᠭᠠᠨ ᠪᠤᠯᠤᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠭᠡᠢ ᠪᠠᠢᠢᠭᠠᠯᠢ ᠤᠷᠤᠨ ᠦ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠦᠭᠡᠢ ᠪᠠᠰᠠ ᠪᠦᠲᠦᠭᠡᠯᠢᠭ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠦᠭᠡᠢ ᠬᠡᠮᠡᠨᠡ ᠪᠣᠯᠭᠠᠬᠠ ᠤᠭᠦᠢ᠃ ᠶᠠᠩᠵᠤ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠪᠠ ᠪᠠᠢᠢᠭᠠᠯᠢ ᠤᠷᠤᠨ ᠦ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠲᠠᠮᠤᠳᠠᠢ ᠨᠢ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠦ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢᠨ ᠳᠦᠷᠢᠮ ᠢ ᠬᠦᠷᠭᠡᠬᠦ ᠪᠠᠷᠠ ᠵᠢᠮ ᠣᠯᠣᠪᠠ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤ ᠦᠷᠭᠦᠵᠢᠯ ᠪᠠᠢᠢᠭᠠᠯᠢ ᠤᠷᠤᠨ ᠦ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠪᠠ ᠠᠵᠢᠯᠠᠳ ᠤᠨ ᠡᠷᠦᠭᠡ ᠦ ᠬᠦᠪᠡ ᠦᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠤᠨ ᠪᠠᠭᠤᠳᠠᠢ ᠯᠠᠪᠳᠠᠯ ᠢ ᠨᠡᠭᠡᠭᠡᠨ ᠠᠵᠢᠯᠯᠠᠯ᠃",
    "detail8": "ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠳᠠᠯᠠᠨ ᠰᠡᠳᠬᠢᠯ ᠤᠨ ᠤᠷᠤᠨ ᠦ ᠪᠣᠳᠠᠳᠠᠢ ᠰᠠᠨᠠᠭᠠ ᠲᠦ ᠨᠢᠭᠡᠨ ᠪᠠᠶᠢᠵᠤ ᠣᠸᠷᠢᠰᠤᠭᠠᠢ ᠦᠷᠭᠦᠵᠢᠯ ᠢ ᠪᠠᠳᠠᠷᠠᠭᠤᠯᠤᠭᠰᠠᠨ ᠱᠢᠮᠲᠡ ᠨᠢᠭᠡᠮ ᠤᠨ ᠪᠡᠯᠡᠳᠬᠡᠯ ᠳᠦ ᠳᠤᠤᠷᠠᠯᠠᠭ᠍ᠠ ᠮᠤ ᠦᠨᠡᠨ ᠤ ᠳᠦ ᠲᠥᠯᠥᠭᠡᠯᠡᠯᠲᠡ ᠲᠣᠣᠰᠣᠭᠠᠢ ᠪᠠᠶᠢᠲᠠᠯ ᠪᠠᠷ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠤᠨ ᠪᠣᠯᠤᠨ ᠨᠢᠭᠡᠮ ᠦᠨ ᠪᠠᠢᠢᠯᠭᠠᠨ ᠦ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠨᠢᠭᠡᠮ ᠦᠨ ᠲᠦᠷᠦᠯᠬᠢ ᠰᠢᠢᠲᠬᠡᠯ ᠲᠠᠪᠤᠨ ᠵᠤᠭᠤᠴᠠᠢ ᠨᠠᠴᠠ ᠣᠴᠤᠭᠰᠠᠨ ᠢᠷᠭᠡᠯ ᠣᠨᠴᠤᠭᠰᠠᠨ ᠨᠦᠲᠦᠭ ᠠᠶᠢᠮᠠᠭ ᠦᠨ ᠰᠦᠪᠣᠤᠯ ᠦ ᠦᠷᠭᠦᠵᠢᠯ ᠤᠨ ᠳᠤ ᠪᠤᠷᠠᠳᠤ ᠪᠣᠯᠪᠠ᠃",
    "detail9": "ᠦᠳᠦᠷ ᠤᠨ ᠦᠶᠡ ᠳᠦ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠨᠢ ᠨᠤᠭᠤᠭᠠᠨ ᠦᠷᠭᠦᠵᠢᠯ ᠲᠡᠬᠨᠢᠺ ᠢᠨ ᠪᠤᠲᠤᠬᠤᠯᠭᠠ ᠳᠡᠯᠬᠡᠢ ᠦᠯᠦᠰ ᠦᠨ ᠴᠠᠳᠠᠪᠤᠷᠢ ᠤᠴᠤᠷ ᠴᠢᠬᠢᠪᠠ ᠤᠨ ᠬᠠᠮᠳᠤ ᠠᠵᠢᠯᠯᠠᠯ ᠢ ᠦᠨᠳᠦᠷ ᠪ ᠰᠠᠨᠠᠭᠠ ᠰᠠᠷᠤᠯ ᠪᠠᠷᠤᠯ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠦᠨ ᠣᠯᠠᠨ ᠪᠣᠯᠤᠨ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠦᠨ ᠨᠢᠭᠡᠨᠪᠦᠯᠴᠢᠨ ᠦᠲᠡᠭᠡᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ ᠦᠮᠦᠰ ᠤᠨ ᠢᠷᠠᠭᠤ ᠪᠦᠲᠦᠷᠭᠡᠭᠦᠯᠦᠯ ᠤᠨ ᠯᠠᠪᠳᠠᠯ ᠢ ᠦᠯᠦᠮᠵᠢᠨ ᠤᠷᠲᠤ᠎ᠠ ᠬᠣᠶᠠᠷ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠤᠯᠤᠰ ᠦᠨ ᠤᠷᠣᠨ ᠥᠷᠭᠡᠳᠡ ᠦᠨ ᠲᠦᠷᠡᠯ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠦᠭᠦᠳᠡ ᠬᠤᠭᠤᠴᠠᠭᠠᠨ ᠤᠳ ᠮᠣᠨᠲᠧ ᠪᠦᠯ᠌ᠡᠷᠦᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠨ ᠬᠠᠮᠵᠢᠯᠠᠯ ᠤᠨ ᠬᠠᠪᠤᠷᠢ ᠮᠡᠳᠦ᠃",
    "detail10": "ᠮᠦᠯ ᠦᠨ ᠲᠦᠷᠦᠯ ᠦᠷᠡ ᠨᠢ ᠰᠢᠷ ᠪᠢ ᠪᠠᠰᠠ ᠳᠡᠯᠬᠡᠢ ᠦᠯᠦᠰ ᠦ ᠴᠠᠳᠠᠪᠤᠷᠢ ᠶᠢ ᠬᠠᠷᠠᠵᠤ ᠣᠸᠷᠢᠰᠤ ᠶᠢ ᠡᠭᠦᠳᠦᠨ ᠥᠰᠦᠭᠦᠯᠵᠦ ᠤ ᠤᠨᠮᠧᠰᠡᠯ ᠦᠦᠳᠦᠷ ᠨᠤᠭᠤᠭᠠᠨ ᠡᠯᠢᠬᠦ ᠰᠢᠨ᠋ᠡ ᠮᠠᠲ᠋ᠧᠷᠢᠠᠯ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠰᠠᠯᠠᠪᠤᠷᠢ ᠪᠠ ᠺᠨᠢ ᠶᠢ ᠰᠢᠨᠡ ᠪᠦᠲᠦᠭᠡᠨ ᠦᠷᠭᠦᠯᠵᠢᠯ ᠦᠨ ᠯᠠᠪᠳᠠᠯ ᠤᠨ ᠢᠳᠡᠪᠬᠢᠲᠡᠢ ᠣᠯᠣᠨ ᠠᠷ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠦᠨ ᠠᠮᠢᠳᠤᠭᠠᠷ ᠪᠡᠯᠭᠡᠳᠦ ᠺᠢᠨ ᠨᠦᠯᠦᠮᠵᠢᠯᠦᠯ ᠦᠨ ᠤᠬᠠᠭᠠᠨ ᠦᠨᠡᠩᠬᠢ ᠪᠠᠶᠢᠯᠭᠠ ᠵᠢᠨ ᠢᠯᠠᠭᠤ ᠦᠨᠡᠨ ᠤ ᠨᠡᠮᠡᠯᠲᠡ ᠶᠢᠨ ᠨᠢᠭᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠪᠦᠲᠦᠭᠡᠨ ᠨᠢᠭᠡᠨ ᠪᠦᠷᠢᠯᠳᠤᠬᠤᠨ ᠢ ᠪᠤᠭᠤᠷᠠᠴᠠᠯ ᠦᠨ ᠪᠤᠷᠢᠶᠠᠢ ᠯᠡᠵᠦ ᠦᠨᠡᠨ ᠤ ᠯᠠᠪᠳᠠᠯ ᠦᠨ ᠰᠠᠭᠤᠷᠢᠨ ᠪᠦᠯᠦᠮ᠃"
  },
  "corporateCulture": {
    "title": "ᠬᠠᠮᠲᠤ ᠰᠣᠶᠣᠯ",
    "mission": {
      "title": "ᠡᠷᠬᠡᠮ ᠵᠣᠷᠬᠡᠯ",
      "subtitle": "ᠬᠢᠰᠭᠠᠷ ᠨᠦᠭᠡᠴᠡᠨ ᠪᠣᠯᠭᠤᠯᠤᠭ᠎ᠠ ᠬᠤᠷᠢᠯᠲᠠᠢ",
      "content": "ᠮᠣᠨᠲᠧ ᠪᠣᠯ ᠨᠦᠭᠡᠴᠡ ᠬᠤᠷᠢᠯᠲᠠᠢ ᠵᠢᠯ ᠵᠠᠯᠠᠬᠤᠷᠢ ᠪᠠᠢᠴᠢᠯᠠᠯᠵᠠᠢ ᠬᠠᠮᠲᠤ ᠪᠠᠷ᠎ᠠᠯ ᠪᠠᠢᠴᠢᠯᠠᠯᠵᠠᠢ ᠪᠤᠷᠤᠰᠢᠭᠤᠯᠤᠰᠤᠯᠤᠭᠠᠢ ᠵᠠᠢᠯᠠᠭᠤᠯᠭᠤᠯᠤᠭ᠎ᠠ ᠤᠷᠤᠯᠤᠯᠤᠭᠤᠯᠤᠭᠠᠢ ᠰᠤᠷᠤᠭᠰᠤ ᠲᠡᠭᠡᠷᠡᠭᠰᠤᠯᠤᠭᠤᠯᠤᠭᠠᠢ ᠬᠣᠷᠣᠯᠣᠯᠭᠠᠢ ᠲᠡᠭᠡᠷᠡᠭᠰᠤ ᠬᠠᠯᠲᠤᠷᠢᠯᠡᠳ ᠰᠤᠮᠤᠷᠢᠭ᠎ᠠ ᠵᠢᠷᠣᠬᠤᠯᠢᠶᠠᠷ ᠬᠡᠰᠡᠨ ᠬᠠᠯᠠᠬᠤ ᠬᠡᠯᠡᠭᠲᠡᠢ ᠵᠣᠰᠣᠷ ᠦᠨᠳᠦᠰᠦᠯᠢ ᠲᠦᠷᠦᠮᠦᠭᠡᠷ ᠪᠤᠷᠤᠰᠢᠭᠤᠯᠤᠯᠠᠢ ᠲᠤᠪᠤᠳ ᠤᠨᠤᠭᠤᠯᠤᠯᠤᠭᠠᠢ ᠵᠢᠯ ᠬᠣᠷᠣᠯᠣᠯᠭᠠᠢ ᠰᠤᠷᠤᠭᠰᠤᠯᠤᠭᠠᠢ ᠨᠠᠷᠢᠯᠠᠨ ᠵᠢᠯᠭᠤᠳ ᠵᠢᠯ ᠡᠷᠡᠨᠭᠡᠷ ᠪᠤᠷᠤᠯᠤᠭᠠᠢ"
    },
    "development": {
      "title": "ᠬᠡᠷᠡᠯᠡᠯᠲᠡᠢ ᠲᠡᠭᠡᠷᠡᠭᠰᠦᠯ",
      "content": "ᠶᠢᠨᠠᠭᠤᠷᠢᠯᠲᠡᠭᠦᠷᠡᠯᠲᠡᠢ ᠪᠠᠶᠠᠷᠠᠳᠤ, ᠰᠣᠶᠣᠯ ᠳᠡᠭᠡᠷᠬᠦᠯᠦᠭᠡᠷᠢᠯᠲᠡᠢ\nᠰᠢᠲᠡᠮᠲᠡᠯ ᠵᠣᠰᠣᠷ ᠬᠣᠷᠣᠯᠣᠯᠭᠠᠢ, ᠲᠠᠯᠠᠨᠲ ᠬᠣᠷᠣᠯᠣᠯᠭᠠᠢ"
    },
    "coreValues": {
      "title": "ᠬᠡᠷᠡᠯ ᠲᠣᠭ᠎ᠠᠯ",
      "subtitle": "ᠰᠣᠷᠣᠯᠲᠣᠭᠠᠷᠢᠯᠲᠠᠢ, ᠰᠤᠷᠪᠠᠨᠲᠤ, ᠬᠤᠷᠤᠯᠠᠨ ᠬᠠᠷᠠᠪ",
      "content": "ᠮᠣᠨᠲᠧ ᠬᠡᠷᠡᠯ ᠲᠣᠭ᠎ᠠᠯᠴᠢᠯᠢᠭᠡᠷ ᠲᠡᠷᠭᠡᠯᠬᠦ ᠲᠡᠭᠡᠷᠡᠭᠰᠦᠯ.\n\nᠰᠣᠷᠣᠯᠲᠣᠭᠠᠷᠢᠯᠲᠠᠢ: \"ᠳᠡᠭᠦᠯᠬᠡᠷ ᠲᠡᠭᠡᠷᠡᠭ\" ᠰᠣᠷᠢᠭᠤᠯᠬᠤ ᠪᠠᠷᠢᠯᠭᠤᠯᠤᠭᠠᠢ, \"ᠰᠤᠷᠪᠤᠯᠬᠤ ᠪᠠᠷᠢᠯᠭᠤᠯᠤᠭᠠᠢ\" ᠬᠠᠮᠲᠤᠷᠢᠯᠡᠳ ᠰᠣᠷᠣᠯᠲᠣᠭᠠᠷᠢᠯᠲᠠᠢ.\n\nᠰᠤᠷᠪᠠᠨᠲᠤ: ᠬᠡᠷᠡᠯ ᠠᠯᠲᠠᠷᠢᠭᠰᠤᠯᠤᠭᠠᠢ – ᠵᠠᠷᠢᠯᠠᠬᠤ ᠬᠠᠮᠲᠤᠯᠤᠭᠤᠯᠤᠭᠠᠢ, ᠳᠠᠪᠠᠷᠠᠭᠤᠯᠤᠭᠠᠢ.\n\nᠬᠤᠷᠤᠯᠠᠨ ᠬᠠᠷᠠᠪ: ᠰᠠᠷᠢᠨ ᠬᠠᠯᠠᠬᠤ, ᠪᠠᠷᠢᠯᠭᠤᠯᠤᠭᠠᠢ; ᠰᠠᠯᠳᠠᠯᠲᠤᠭᠤᠯᠤᠭᠠᠢ ᠪᠠᠷᠢᠯᠭᠤᠯᠤᠭᠠᠢ."
    },
    "methodology": {
      "title": "ᠰᠢᠮᠢᠯᠭᠡᠷᠡᠨ ᠳᠡᠯᠡᠭ",
      "subtitle": "",
      "content": "ᠪᠠᠷᠠᠬᠤ ᠶᠢᠨᠠᠭᠤᠷᠢᠯᠲᠡᠭᠦᠷᠡᠯᠲᠡᠢ, ᠰᠢᠨᠢᠳᠡᠯ ᠳᠡᠭᠡᠷᠬᠦᠯᠦᠭᠡᠷᠢᠯᠲᠡᠢ, ᠳᠡᠪᠷᠲᠡᠪᠳᠡᠷ ᠵᠣᠰᠣᠷ ᠵᠢᠷᠣᠬᠤᠯᠢᠶᠠᠷ\n\nᠮᠣᠨᠲᠧ ᠲᠦᠩᠬᠡ ᠲᠠᠭᠰᠠᠨ, ᠮᠣᠨᠲᠧ ᠭᠷᠠᠨ ᠪᠷᠠᠢᠰ, ᠪᠡᠨᠵᠮᠷᠬᠡᠨ ᠮᠠᠨᠭᠢᠭᠡᠷᠲᠡᠯ\n\nᠵᠤᠰᠢᠯ ᠪᠠᠬᠠᠭᠠᠳᠤᠷᠢᠯᠠᠯ ᠵᠣᠰᠣᠷ + ᠵᠤᠰᠢᠯ ᠡᠶᠢᠯᠠᠬᠤ ᠱᠢᠶᠢᠷ\n\nᠪᠠᠬᠤᠯᠤ ᠪᠠᠳᠠᠯᠲᠠᠢ ᠮᠠᠨᠭᠢᠷᠲᠡᠯ, ᠴᠠᠭᠰᠤᠯᠴᠢ ᠪᠠᠳᠠᠯᠲᠠᠢ"
    },
    "culturalTotem": {
      "title": "ᠰᠤᠯᠲᠤᠷ ᠤᠨ ᠲᠣᠲᠡᠮ",
      "subtitle": "ᠴᠢᠨᠣ (狼)",
      "content": "ᠮᠤᠩᠲᠡ ᠴᠢᠨᠣ ᠶᠢᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠮᠡᠳᠡᠯᠡᠯ, ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠣᠯᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ᠃\n\nᠮᠡᠳᠡᠯᠡᠯ: ᠴᠢᠨᠣ ᠶᠢᠨ ᠮᠢᠨᠳᠡ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠪᠣᠯᠤᠨ, ᠬᠡᠷᠡᠭ ᠢ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠮᠡᠳᠡᠬᠦ, ᠬᠤᠷᠤᠮ ᠬᠠᠭᠤᠷᠬᠤ ᠮᠡᠳᠡᠬᠦ, ᠮᠣᠨ ᠬᠡᠷᠡᠭᠲᠡᠢ ᠴᠠᠭ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠲᠥᠯᠥᠪᠯᠡᠬᠦ ᠮᠡᠳᠡᠬᠦ᠃\n\nᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ: ᠴᠢᠨᠣ ᠶᠢᠨ ᠮᠢᠨᠳᠡ, ᠲᠡᠮᠳᠡᠭᠯᠡᠬᠦ ᠲᠠᠯᠠᠪᠠᠢ ᠪᠣᠯᠤᠨ, ᠲᠥᠮᠦᠷ ᠦᠨ ᠬᠦᠴᠦᠨ, ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠲᠠᠯᠠᠪᠠᠢ ᠬᠤᠷᠤᠬᠤ, ᠮᠣᠨ ᠬᠠᠮᠤᠭᠤᠯᠤᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ᠃\n\nᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠬᠦᠴᠦᠨ: ᠴᠢᠨᠣ ᠶᠢᠨ ᠮᠢᠨᠳᠡ, ᠵᠣᠷᠢᠯᠭ᠎ᠠ ᠪᠣᠯᠤᠨ, ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠬᠤᠷᠤᠮ, ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠪᠣᠯᠤᠨ ᠬᠤᠪᠢ ᠬᠤᠷᠤᠬᠤ᠃"
    },
    "culturalMotto": {
      "title": "ᠰᠤᠯᠲᠤᠷ ᠤᠨ ᠮᠣᠲᠲᠣ",
      "corporateStyle": {
        "title": "ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ",
        "content": "ᠬᠤᠷᠤᠮ ᠬᠤᠷᠤᠮ ᠤᠨ ᠬᠠᠷᠢᠬᠤ ᠪᠣᠯᠤᠨ ᠳᠡᠭᠡᠷ᠎ᠡ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ"
      },
      "marketManagement": {
        "title": "ᠵᠠᠬᠠᠰᠢ ᠶᠢᠨ ᠮᠡᠨᠡᠵᠢᠮᠡᠨᠲ ᠤᠨ ᠦᠵᠡᠯ",
        "content": "ᠵᠢᠷᠤᠮ ᠰᠢᠪᠢᠯᠢᠵᠠᠴᠢᠶ᠎ᠠ ᠦᠵᠡᠯ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠭᠡᠴᠦ ᠬᠣᠭᠣᠯᠠᠬᠤ ᠪᠣᠯᠤᠮᠵᠢ ᠵᠠᠬᠠᠰᠢ ᠦᠭᠡᠢ "
      },
      "talentOutlook": {
        "title": "ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠦᠵᠡᠯ",
        "content": "ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠲᠠᠢ, ᠮᠣᠷᠢ ᠶᠢᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠮᠣᠷᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠳᠡᠭᠡᠷ᠎ᠡ ᠦᠭᠡᠢ "
      },
      "salaryView": {
        "title": "ᠴᠡᠯᠡᠬᠦ ᠶᠢᠨ ᠦᠵᠡᠯ",
        "content": "ᠴᠡᠯᠡᠬᠦ ᠨᠢ ᠥᠪᠡᠷ ᠢᠶᠡᠨ ᠬᠤᠳᠠᠯᠳᠤᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠥᠭᠬᠦ ᠦᠭᠡᠢ"
      }
    }
  },
  "chairman": {
    "title": "ᠳᠠᠷᠤᠭᠠ ᠶᠢᠨ ᠦᠭᠡ",
    "subTitle": "ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠠᠯᠢᠭ ᠢ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠤ ᠦᠭᠡᠢ ᠪᠣᠯᠭᠠᠨ᠂ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠤ ᠦᠭᠡᠢ ᠠᠵᠢᠯ ᠰᠠᠬᠢᠭᠤᠯᠤᠨ ᠨᠣᠭᠣᠭᠠᠨ ᠪᠣᠯᠭᠠᠬᠤ",
    "description": "ᠡᠨᠡ ᠪᠣᠯ ᠺᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠺᠣᠷᠫᠣᠷᠠᠴᠢ ᠵᠣᠷᠢᠯᠭᠠ ᠪᠠ ᠠᠵᠢᠯ ᠰᠠᠬᠢᠭᠤᠯᠤᠨ ᠦᠵᠡᠯ ᠦᠨ ᠦᠪᠡᠷ ᠬᠡᠷᠡᠭ",
    "p1": "ᠪᠠᠶᠠᠯᠢᠭ ᠨᠢ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ᠃ ᠮᠣᠨᠲᠧ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠠᠯᠢᠭ ᠢ ᠤᠰᠠᠳᠠᠯ ᠳᠤ ᠬᠠᠳᠠᠭᠠᠯᠠᠭᠳᠠᠢ᠂ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠦᠬᠠᠭᠠᠵᠤ ᠰᠠᠢᠢᠨ ᠠᠷᠭᠠ ᠪᠠᠷ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠭᠵᠢᠭᠦᠯᠦᠭᠡᠳᠦ᠂ ᠪᠠᠶᠠᠯᠢᠭ ᠤᠨ ᠦᠨᠡ ᠪᠡ ᠬᠠᠮᠤᠭ ᠶᠡᠬᠡ ᠬᠡᠮᠵᠢᠶᠡᠯ ᠦᠨ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠷᠭᠡᠬᠦ ᠬᠡᠷᠡᠭᠲᠡᠢ᠃",
    "p2": "ᠪᠠᠶᠠᠯᠢᠭ ᠨᠢ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ᠂ ᠭᠡᠪᠡᠴ ᠬᠦᠮᠦᠨ ᠤ ᠪᠦᠲᠦᠭᠡᠬᠦ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠨᠢ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠤ ᠦᠭᠡᠢ᠃ ᠮᠣᠨᠲᠧ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠠᠯᠢᠭ ᠤᠨ ᠠᠵᠢᠯ ᠰᠠᠬᠢᠭᠤᠯᠤᠨ ᠲᠡᠷᠢᠭᠦᠨ ᠵᠢ ᠠᠰᠢᠭᠯᠠᠵᠤ ᠬᠦᠮᠦᠨ ᠤ ᠴ᠋ᠠᠳᠠᠪᠠᠷᠢ ᠶᠢ ᠬᠠᠮᠤᠭ ᠶᠡᠬᠡ ᠬᠡᠮᠵᠢᠶᠡᠯ ᠦᠨ ᠬᠦᠷᠭᠡᠭᠡᠳ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠷᠬᠦ ᠪᠣᠯᠤᠨ᠂ ᠢᠷᠡᠭᠡᠳᠤᠢ ᠦᠨ ᠬᠤᠷᠠᠭᠠᠨ ᠳᠤ ᠲᠤᠷᠠᠭᠠᠵᠤ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠦᠷᠭᠡᠨ ᠰᠠᠭᠤᠷᠢᠵᠠᠢ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠭᠡᠷ᠃",
    "p3": "ᠢᠢ ᠡᠴᠡ ᠨᠢᠭᠡᠨᠲᠡ᠂ ᠮᠧᠩ ᠲᠠᠢ ᠠᠵᠢᠯ ᠰᠠᠬᠢᠭᠤᠯᠤᠨ ᠠᠵᠢᠯᠯᠠᠬᠤᠢ ᠢ ᠦᠳᠡᠦ ᠦᠳᠡᠦ ᠨᠡᠭᠡᠭᠡᠲᠡᠢ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠲᠡᠭᠤᠰ ᠢ ᠴᠢᠩᠭᠠᠳᠠᠵᠤ᠂ ᠦᠪᠡᠷ ᠤᠨ ᠡᠷᠬᠢᠯᠦᠭᠡ ᠳ᠋ᠤ ᠰᠢᠭᠦᠳᠦᠨ ᠢᠯᠭᠠᠵᠤ \"ᠨᠣᠭᠣᠭᠠᠨ-ᠴᠠᠬᠢᠯᠭᠠᠨ-ᠭᠠᠪᠤᠷ-ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ-ᠭᠦᠪ ᠪᠦᠯᠦᠭ ᠤᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ\" ᠤᠨ ᠨᠢᠢᠰᠦᠯ ᠴᠣᠷᠣᠯᠳᠠᠢ ᠦᠵᠦᠮᠴᠢᠨ ᠦ ᠠᠵᠢᠯ ᠠᠴᠠ ᠤᠨ ᠨᠡᠭᠡᠳ ᠮᠦᠷᠨ ᠳᠦ ᠪᠠ ᠬᠦᠳᠡᠭᠡ ᠠᠵᠠᠬᠤ ᠨᠦᠲᠤᠭ ᠤᠨ ᠱᠢᠨᠡᠭᠡᠨ ᠮᠠᠨᠳᠤᠯ ᠳᠤ ᠲᠤᠰᠤᠷᠤᠯ ᠰᠢᠪᠲᠠᠭᠠᠨ ᠦ ᠨᠦᠲᠤᠭ ᠤᠨ ᠮᠣᠳᠧᠷᠨ ᠲᠠᠷᠢᠮᠠᠯ ᠮᠠᠯ ᠠᠯᠢᠶ ᠤᠨ ᠠᠵᠢᠯ ᠠᠴᠠ ᠤᠨ ᠨᠡᠭᠡᠳ ᠮᠦᠷᠨ ᠦ ᠴᠢᠯᠦᠯᠳᠡ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠪᠣᠰᠭᠣᠪᠠ᠃",
    "p4": "ᠢᠢ ᠡᠴᠡ ᠨᠢᠭᠡᠨᠲᠡ᠂ ᠮᠣᠳᠧᠷᠨ ᠰᠢᠨ᠎ᠡ ᠠᠵᠢᠯ ᠠᠴᠠ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠭᠠᠷᠭᠠᠯᠳᠠ ᠶᠢᠨ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠬᠠᠷᠠᠭᠠᠨ ᠦ ᠨᠢᠨᠳᠠᠢ ᠳ᠋ᠤ ᠰᠢᠭᠦᠳᠦᠨ ᠢᠯᠭᠠᠵᠤ᠂ ᠮᠧᠩ ᠲᠠᠢ ᠬᠤᠭ ᠴᠠᠭᠠᠭᠠᠷ ᠤᠭᠤᠢ ᠦᠨ ᠡᠳᠦᠷ ᠦᠨ ᠰᠦᠰᠭᠡ ᠢ ᠨᠢᠢᠴᠦᠯᠦᠨ ᠢᠯᠭᠠᠵᠤ᠂ ᠨᠣᠮᠢᠨ ᠤᠨ ᠶᠡᠬᠡ ᠬᠡᠮᠵᠢᠶᠡᠯ ᠤ ᠪᠦᠨᠢᠢᠨ ᠰᠦᠰᠭᠡ ᠢ ᠨᠢᠢᠴᠦᠯᠦᠨ ᠢᠯᠭᠠᠵᠤ᠂ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠰᠠᠨ ᠪᠠᠶᠠᠯᠢᠭ ᠤᠨ ᠬᠢᠵᠠᠭᠠᠷᠯᠠᠭᠤ ᠦᠭᠡᠢ ᠠᠰᠢᠭᠯᠠᠯᠳᠠ ᠶᠢ ᠮᠦᠷᠦᠳᠦᠯ ᠬᠦᠷᠭᠡᠬᠦ ᠪᠣᠯᠤᠨ᠂ ᠤᠷᠲᠤ ᠨᠠᠰᠲᠠᠢ ᠰᠦᠳ ᠰᠢᠭᠦᠳᠡᠢ ᠪᠠᠭᠰᠢ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠭᠡᠯᠡ᠂ ᠤᠷᠳᠤᠨ ᠭᠡᠰᠦᠳ ᠪᠠᠰᠠ ᠤᠨ ᠮᠧᠩ ᠲᠠᠢ ᠪ᠎ᠤᠶᠢᠢ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠪᠣᠯᠭᠠᠪᠠ᠃",
    "p5": "ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠭᠦᠳᠡ ᠡᠷᠬᠡᠮ ᠲᠠᠢ ᠤᠭᠤᠷ ᠲᠡᠢ ᠪᠦᠬᠦ ᠬᠦᠮᠦᠨ ᠲᠠᠢ ᠭᠠᠷᠤᠨ ᠢ ᠨᠢᠵᠤᠷᠦᠯᠡᠵᠤ ᠡᠪᠲᠡᠨ ᠡᠬᠯᠡᠯ ᠤᠨ ᠲᠤᠬᠠᠢ ᠤᠨ ᠨᠢᠷᠤᠭᠰᠤᠯ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠰᠢᠪᠲᠠᠭᠠᠨ ᠪᠦᠳᠦᠷᠢᠬᠡᠬᠦ ᠤᠪᠤᠷ ᠠᠨ ᠲᠡᠢ᠃",
    "signatureTitle": "ᠮᠧᠩ ᠲᠠᠢ ᠪᠣᠯ ᠡᠷᠢᠶᠡᠨ ᠤ ᠳᠠᠷᠤᠭᠠ",
    "signatureName": "ᠠᠣ ᠹᠧᠩ ᠲᠢᠩ",
    "p${i}": " translate"
  },
  "coalIndustry": {
    "title": "ᠨᠤᠭᠤᠷᠠᠨ ᠠᠵᠢᠯᠯᠠᠬᠤ",
    "ttop": "ᠦᠢᠯᠡᠳᠦᠯᠭᠡ",
    "tleft": "ᠪᠤᠷᠠᠯᠳᠠ",
    "tright": "ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠭᠡ",
    "intro": "ᠺᠣᠮᠫᠠᠨᠢ ᠨᠤᠭᠤᠷᠠᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡ᠂ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠭᠡ᠂ ᠪᠤᠷᠠᠯᠳᠠ ᠵᠢᠨ ᠨᠢᠭᠡ ᠪᠦᠬᠦ ᠵᠢ ᠨᠢᠭᠡᠳᠦᠯ ᠬᠠᠷᠢᠭᠤᠯᠬᠤ ᠪᠠ ᠨᠢᠭᠡ ᠠᠮᠭᠠᠯᠠᠨ ᠦᠢᠯᠡᠴᠢᠯᠡᠯᠲᠠ ᠪᠠᠷ ᠦᠭᠡᠢ ᠬᠦᠷᠭᠡᠭᠰᠡᠨ ᠪᠠᠶᠢᠨᠠ᠂ ᠡᠨᠡ ᠨᠢ ᠤᠯᠤᠰ ᠲᠤ ᠨᠠᠮ ᠵᠢᠨ ᠠᠮᠠᠷᠠᠬᠤ ᠬᠠᠢᠤᠭᠤᠯᠤᠨ ᠦᠨᠳᠦᠰᠦ ᠪᠠ ᠤᠷᠠᠯᠠᠰᠢ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠡᠷᠬᠢᠮ ᠶᠤᠮ᠃",
    "sections": {
      "production": {
        "title": "ᠨᠤᠭᠤᠷᠠᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡ",
        "description": "ᠣᠯᠠᠨ ᠵᠢᠯ ᠬᠢᠴᠢᠶᠡᠯ ᠪᠣᠯᠬᠣ ᠬᠦᠴᠦᠨ ᠬᠤᠷᠠᠰᠢ ᠪᠠᠷ ᠺᠣᠮᠫᠠᠨᠢ ᠦᠪᠡᠷ ᠦᠨ ᠲᠦᠪ ᠪᠠᠶᠢᠨ ᠨᠤᠭᠤᠷᠠᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡ ᠦᠨ ᠰᠢᠨ ᠰᠤᠷᠢ ᠪᠡᠷ ᠪᠣᠰᠣᠭᠠᠵᠠᠢ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠧᠵᠢᠨ ᠬᠣᠷᠣ ᠬᠣᠰᠢᠭᠤ ᠶᠢᠨ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠨᠤᠭᠤᠷᠠᠨ ᠤᠴᠢᠷᠠᠯ᠂ ᠲᠦᠩᠰᠢᠶᠡᠩ ᠲᠣᠭᠣᠷᠢᠭ ᠤᠨ ᠦᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠨᠤᠭᠤᠷᠠᠨ ᠤᠴᠢᠷᠠᠯ᠂ ᠵᠤᠨᠭᠠᠷ ᠬᠣᠰᠢᠭᠤ ᠶᠢᠨ ᠪᠤᠯᠢᠶᠠᠩᠭᠣᠤ ᠨᠤᠭᠤᠷᠠᠨ ᠤᠴᠢᠷᠠᠯ ᠨᠢ ᠦᠨᠳᠦᠰᠦᠨ ᠦ ᠡᠷᠬᠡ ᠦᠯᠦᠰ ᠦᠨ ᠨᠠᠮ ᠦᠨ ᠬᠦᠭᠵᠢᠯ ᠺᠣᠮᠢᠰᠰᠢ ᠪᠠᠳᠤᠯᠠᠪᠠ ᠬᠤᠨᠠᠯ ᠰᠢᠨ ᠲᠡᠬᠨᠦᠯ ᠦᠨ ᠶᠡᠬᠡ ᠬᠡᠮᠵᠢᠭᠡ ᠶᠢᠨ ᠤᠷᠤᠯ ᠤᠴᠢᠷᠠᠯ ᠨᠤᠮ᠃",
        "altText1": "ᠨᠤᠭᠤᠷᠠᠨ ᠦᠢᠯᠡᠳᠦᠯᠭᠡ ᠪᠠᠢᠭᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯ ᠬᠠᠷᠠᠭᠠᠯᠪᠤᠷᠢ",
        "altText2": "ᠨᠤᠭᠤᠷᠠᠨ ᠪᠤᠯᠠᠭᠠᠬᠤ ᠠᠵᠢᠯ ᠠᠭᠠᠯᠳᠠ"
      },
      "transportation": {
        "title": "ᠨᠤᠭᠤᠷᠠᠨ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠭᠡ",
        "description": "ᠲᠤᠰᠠᠯᠠᠭᠠᠨ ᠲᠡᠯᠢᠶᠡᠷ ᠥᠷᠰᠦᠯᠳᠦᠭᠡ ᠳᠦ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠭᠡ ᠶᠢᠨ ᠬᠣᠯᠪᠠᠬᠤ ᠥᠷᠦᠨ ᠤᠪᠤᠳᠠᠭᠠᠨ ᠤᠪᠤᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠲᠤᠯᠠ ᠠᠷᠠᠳ ᠤᠨ ᠳᠠᠷᠠᠭᠠ ᠺᠣᠮᠫᠠᠨᠢ 2002 ᠣᠨ ᠦ ᠦᠯᠦᠭᠦᠷ ᠳᠤᠰ ᠪᠧᠶᠢᠵᠢᠩ-ᠪᠣᠭᠳᠤ ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ ᠪᠠ ᠳᠠᠵᠦᠨ ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ ᠶᠢᠨ ᠵᠠᠯᠠᠨ ᠬᠦᠬᠦᠷᠡᠭᠴᠢ ᠶᠢᠨ ᠡᠷᠬᠡ ᠡᠳᠡᠯᠡ ᠶᠢ ᠳᠠᠷᠠᠭᠰᠢ ᠰᠢ ᠣᠯᠵᠠᠮᠴᠢᠯᠠᠪᠠ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠦᠨᠳᠦᠰᠦᠨ ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ ᠺᠣᠷᠫᠣᠷᠠᠴᠢ ᠶᠢᠨ ᠨᠣᠮᠢᠨ ᠠᠴᠢᠯᠠᠮᠵᠢ ᠬᠦᠬᠦᠷᠡᠭᠴᠢ ᠶᠤᠮ᠂ ᠵᠢᠯ ᠳᠤ ᠨᠤᠭᠤᠷᠠᠨ ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠡᠬᠦ ᠬᠡᠮᠵᠢᠭᠡ 10 ᠰᠠᠶᠠ ᠲᠤᠨ ᠠᠰᠠ ᠪᠠᠯ᠂ ᠥᠪᠦᠷ ᠮᠣᠩᠭᠤᠯ ᠥᠪᠡᠷᠲᠡᠭᠡᠨ ᠵᠠᠰᠠᠭ ᠤᠨ ᠨᠤᠲᠤᠭ ᠤᠨ ᠨᠤᠭᠤᠷᠠᠨ ᠠᠵᠢᠯᠯᠠᠬᠤ ᠠᠳᠠᠭᠤᠨ ᠤ ᠳᠦᠮᠳᠠ ᠳᠤᠭᠤᠷ ᠳᠦᠭᠠᠷ ᠤᠷᠤᠨ ᠤ ᠰᠠᠯᠠᠭᠠᠨ ᠪᠠᠢᠷᠢ ᠡᠵᠡᠯᠡᠨᠡ᠃",
        "altText1": "ᠨᠤᠭᠤᠷᠠᠨ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠭᠡ ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ",
        "altText2": "ᠨᠤᠷᠬᠠᠢ ᠬᠣᠳᠠᠯᠠ ᠦᠯᠬᠦᠵᠦᠭᠦᠯᠡ ᠠᠵᠢᠯ ᠠᠭᠠᠯᠳᠠ",
        "altText3": "ᠨᠤᠭᠤᠷᠠᠨ ᠦᠯᠬᠦᠷᠡᠬᠦ ᠪᠠᠢᠭᠤᠯᠤᠮᠵᠢ"
      },
      "sales": {
        "title": "ᠨᠤᠭᠤᠷᠠᠨ ᠪᠤᠷᠠᠯᠳᠠ",
        "description": "ᠺᠣᠮᠫᠠᠨᠢ ᠴᠢᠨᠬᠤᠸᠠᠩᠳᠠᠤ᠂ ᠵᠢᠩᠲᠠᠩ ᠭᠠᠩ ᠵᠡᠷᠭᠡ ᠭᠠᠵᠠᠷ ᠳᠤ ᠶᠡᠬᠡ ᠠᠴᠢᠯᠠᠮᠵᠢ ᠲᠤᠷᠠᠯ ᠪᠠ ᠳᠡᠯᠦᠭᠦᠷᠡᠭᠦᠯᠦᠯᠳᠡ ᠤᠷᠤᠨ ᠪᠠᠢᠭᠤᠯᠪᠠ᠂ ᠪᠧᠶᠢᠵᠢᠩ᠂ ᠲᠢᠠᠨᠵᠢᠨ᠂ ᠰᠢᠠᠩᠬᠠᠢ᠂ ᠨᠠᠨᠵᠢᠩ ᠵᠡᠷᠭᠡ ᠭᠠᠵᠠᠷ ᠳᠤ ᠦᠭᠡᠢ ᠰᠣᠨᠢᠷᠬᠠᠯ ᠪᠤᠷᠠᠯᠳᠠ ᠴᠦᠷᠦᠭ ᠰᠢᠨ ᠪᠠᠢᠭᠤᠯᠪᠠᠢ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠦᠢᠯᠡᠳᠦᠯᠦᠯ ᠤᠨ ᠨᠤᠭᠤᠷᠠᠨ ᠨᠢ ᠪᠠᠢᠭᠠᠯᠢ ᠰᠠᠷᠢᠨ ᠠᠬᠤᠪᠠ-ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠳᠠᠯᠠᠨ ᠨᠤᠭᠤᠷᠠᠨ ᠪᠠᠯ᠂ ᠪᠠᠭᠠ ᠬᠦᠷᠦᠩ᠂ ᠪᠠᠭᠠ ᠫᠣᠰᠫᠣᠷ᠂ ᠪᠠᠭᠠ ᠦᠪᠡᠰᠦ᠂ ᠳᠤᠮᠳᠠ ᠦᠨᠳᠦᠷ ᠳᠠᠯᠠᠨ ᠴᠠᠳᠠᠨ ᠬᠦᠷ ᠵᠡᠷᠭᠡ ᠢᠯᠠᠭᠠᠷᠠᠯ ᠰᠢᠷᠭᠠᠬᠤ ᠰᠦᠷ ᠤᠷᠤᠯᠢᠯᠠᠭᠠᠨ ᠤ ᠰᠦᠷᠭᠡ ᠳᠦᠭᠠᠷ᠃ ᠪᠤᠷᠠᠯᠳᠠ ᠶᠢᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠨᠢ ᠬᠣᠶᠢᠳᠠ ᠺᠢᠲᠠᠳ᠂ ᠳᠦᠯᠦᠭᠡᠳᠦ ᠺᠢᠲᠠᠳ᠂ ᠵᠡᠭᠦᠳᠦ ᠺᠢᠲᠠᠳ᠂ ᠤᠮᠠᠷᠠᠳᠠ ᠺᠢᠲᠠᠳ ᠵᠡᠷᠭᠡ ᠭᠠᠵᠠᠷ ᠢ ᠬᠠᠮᠠᠷᠠᠨᠠ᠃",
        "altText": "ᠨᠤᠭᠤᠷᠠᠨ ᠪᠤᠷᠠᠯᠳᠠ ᠪᠠ ᠲᠦᠭᠦᠩᠷᠤᠭ ᠲᠦᠪ"
      }
    },
    "developmentProject": {
      "title": "ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠬᠥᠭᠵᠢᠯᠦᠯᠦᠨ ᠦ ᠲᠥᠰᠥᠯ",
      "card1": {
        "title": "ᠮᠠᠨᠯᠠᠶᠢᠯᠢᠶᠠᠩ ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠤᠯᠤᠰ",
        "paragraph1": "ᠮᠠᠨᠯᠠᠶᠢᠯᠢᠶᠠᠩ ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠤᠯᠤᠰ ᠪᠣᠯ ᠮᠧᠩᠲᠠᠶ ᠪᠦᠯᠦᠭ ᠦᠨ ᠪᠦᠬᠦ ᠡᠬᠢᠯᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ, ᠵᠢᠯ ᠦᠨ 5.6 ᠰᠠᠶᠢ ᠲᠣᠨᠨᠠ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠴᠢᠳᠠᠯ ᠲᠠᠶ, 500 ᠠᠴᠠ ᠢᠯᠡᠦ ᠠᠵᠢᠯᠴᠢᠨ ᠲᠠᠶ. ᠤᠯᠤᠰ ᠪᠣᠯ ᠪᠦᠬᠦ ᠮᠡᠬᠠᠨᠢᠵᠠᠴᠢ ᠶᠢᠨ ᠪᠦᠬᠦ ᠥᠨᠳᠥᠷ ᠦᠨ ᠤᠯᠤᠯᠤᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠬᠢᠴᠢᠶᠡᠯ ᠢ ᠬᠡᠷᠡᠭᠯᠡᠨ᠎ᠠ, ᠤᠯᠤᠯᠤᠭᠤᠯᠬᠤ ᠪᠠ ᠬᠤᠳᠠᠯᠳᠤᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠮᠡᠬᠠᠨᠢᠵᠠᠴᠢ ᠶᠢᠨ ᠬᠤᠪᠢ 100% ᠲᠠᠶ. ᠪᠦᠬᠦ ᠭᠠᠵᠠᠷ ᠦᠨ ᠳᠣᠲᠣᠷ ᠦᠨ ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠭᠴᠢ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠨᠢ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠲᠠᠶ, ᠥᠨᠳᠥᠷ ᠠᠶᠤᠯ ᠦᠭᠡᠶ, ᠥᠨᠳᠥᠷ ᠦᠷ ᠦᠨᠲᠡ, ᠥᠨᠳᠥᠷ ᠠᠦᠲᠣᠮᠠᠲ ᠪᠠ ᠢᠨᠹᠣᠷᠮᠠᠴᠢ ᠶᠢᠨ ᠵᠢᠷᠢᠮ ᠲᠠᠶ. 2014 ᠣᠨ ᠳᠠᠬᠢ ᠠᠯᠪᠠᠨ ᠦ ᠬᠡᠷᠡᠭ ᠳᠦ ᠣᠷᠤᠯᠤᠭᠰᠠᠨ. 2018 ᠣᠨ ᠳᠠᠬᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠪᠥ� rᠲᠡᠭᠡᠨ ᠵᠠᠰᠠᠬᠤ ᠶᠢᠨ ᠠᠶᠤᠯ ᠦᠨ ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠲᠠᠨᠳᠠᠷᠲ ᠳᠠᠬᠢ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠵᠢᠷᠢᠮ ᠦᠨ ᠤᠯᠤᠰ ᠪᠣᠯᠤᠨ, ᠬᠢᠲᠠᠳ ᠤᠨ ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠦᠶᠢᠯᠳᠪᠡᠷᠢ ᠶᠢᠨ ᠠᠶᠤᠯ ᠦᠨ ᠪᠠ ᠦᠷ ᠦᠨᠲᠡ ᠶᠢᠨ ᠲᠤᠰ ᠤᠯᠤᠰ ᠶᠢᠨ ᠤᠯᠤᠰ ᠪᠣᠯᠤᠨ. 2020 ᠣᠨ ᠳᠠᠬᠢ ᠬᠢᠲᠠᠳ ᠤᠨ ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ ᠦᠨ ᠵᠢᠭᠰᠠᠯᠲᠠ ᠳᠦ ᠰᠣᠩᠭᠣᠭᠳᠠᠪᠠ.",
        "paragraph2": "ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠤᠯᠤᠰ ᠪᠣᠯ ᠠᠯᠪᠠᠨ ᠦ ᠬᠡᠷᠡᠭ ᠳᠦ ᠣᠷᠤᠯᠤᠭᠰᠠᠨ᠎ᠠᠴᠠ ᠬᠣᠶᠢᠬᠢ, ᠠᠶᠤᠯ ᠦᠨ ᠡᠬᠢᠨ ᠴᠢᠮᠠᠭ, ᠤᠷᠢᠳᠤᠨ ᠰᠡᠷᠡᠮᠵᠢᠯᠦᠯᠬᠦ, ᠠᠶᠤᠯ ᠦᠭᠡᠶ ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠬᠦ ᠦᠭᠡᠶ ᠶᠢᠨ ᠦᠨᠡᠮᠡᠯ ᠢ ᠪᠠᠷᠢᠮᠵᠢᠯᠠᠵᠤ, ᠠᠶᠤᠯ ᠦᠨ ᠪᠠ ᠲᠡᠬᠨᠢᠺ ᠦᠨ ᠬᠥᠮᠥᠨ᠎ᠡ ᠶᠢᠨ ᠬᠤᠷᠠᠯᠤᠭᠴᠢ ᠶᠢ ᠪᠦᠷᠢᠶᠡᠨ ᠬᠠᠮᠤᠷᠢᠯᠤᠨ, ᠠᠶᠤᠯ ᠦᠨ ᠬᠠᠮᠤᠭ ᠦᠨ ᠰᠢᠰᠲᠧᠮ, ᠬᠠᠭᠤᠷᠢ ᠠᠶᠤᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠢᠯᠤᠭᠴᠢ, ᠤᠰᠤᠨ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠢᠯᠤᠭᠴᠢ, ᠬᠦᠮᠦᠨ ᠦᠨ ᠪᠠᠶᠢᠷ ᠦᠨ ᠬᠣᠯᠪᠣᠭᠤᠯᠤᠯᠲᠠ, ᠤᠯᠤᠰ ᠦᠨ ᠬᠣᠯᠪᠣᠭᠤᠯᠤᠯᠲᠠ, ᠪᠠ ᠣᠨᠳᠣᠨ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠢᠯᠤᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠰᠲᠧᠮ ᠤᠳ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ, ᠲᠡᠶᠢᠮᠦ ᠡᠬᠢᠨ ᠴᠢᠮᠠᠭ ᠦᠨ ᠠᠶᠤᠯ ᠦᠨ ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠬᠦ ᠢ ᠬᠢᠬᠤ.",
        "paragraph3": "ᠥᠨᠳᠥᠷ ᠴᠠᠨᠠᠷ ᠦᠨ ᠬᠥᠭᠵᠢᠯᠦᠯᠦᠨ ᠦ ᠬᠢᠴᠢᠶᠡᠯ ᠳᠦ, ᠨᠦᠦᠷᠰᠦ ᠶᠢᠨ ᠤᠯᠤᠰ ᠪᠣᠯ ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠡᠬᠢᠨ ᠴᠢᠮᠠᠭ ᠦᠨ ᠪᠠ ᠨᠣᠭᠣᠭᠠᠨ ᠦᠨ ᠬᠥᠭᠵᠢᠯᠦᠯᠦᠨ ᠦ ᠦᠨᠡᠮᠡᠯ ᠢ ᠪᠠᠷᠢᠮᠵᠢᠯᠠᠵᠤ, ᠨᠥᠬᠥᠴᠢᠯ ᠦᠨ ᠬᠥᠭᠵᠢᠯᠦᠯᠦᠨ ᠦ ᠪᠠ ᠬᠡᠷᠡᠭᠯᠡᠯᠴᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠷᠲᠠ ᠪᠣᠯᠤᠨ, ᠮᠥᠨ ᠰᠠᠶᠢᠬᠠᠨ ᠪᠠᠶᠢᠭᠠᠯ ᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠢᠯᠤᠭᠴᠢ ᠪᠠ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠴᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠷᠲᠠ ᠪᠣᠯᠤᠨ᠎ᠠ. ᠨᠢᠶᠢᠲᠡ 60 ᠰᠠᠶᠢ ᠶᠦᠸᠠᠨ ᠦᠨ ᠬᠤᠷᠠᠯᠤᠭᠴᠢ ᠶᠢ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠤᠯᠤᠰ ᠦᠨ ᠣᠷᠣᠯᠲᠠ ᠶᠢᠨ ᠵᠠᠮ, ᠨᠢᠭᠤᠯᠤᠮ ᠦᠨ ᠬᠢᠴᠢᠶᠡᠯ ᠦᠨ ᠲᠠᠯᠪᠠᠶ, ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠬᠦ ᠪᠠ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠲᠠᠯᠪᠠᠶ, ᠪᠠ ᠬᠣᠶᠣᠭᠤᠯ ᠦᠨ ᠲᠠᠯᠪᠠᠶ ᠳᠦ ᠬᠠᠮᠤᠷᠢᠯᠤᠨ, ᠲᠥᠪᠡᠨ ᠦᠨ ᠰᠠᠶᠢᠵᠢᠷᠤᠯᠤᠯᠲᠠ, ᠨᠣᠭᠣᠭᠠᠨ ᠬᠢᠬᠤ, ᠰᠠᠶᠢᠬᠠᠨ ᠬᠢᠬᠤ, ᠭᠡᠷᠡᠯᠲᠦᠯᠬᠦ, ᠪᠠ ᠬᠠᠲᠤᠭᠤᠯᠬᠤ ᠶᠢ ᠬᠢᠬᠤ, ᠮᠥᠨ ᠤᠯᠤᠰ ᠦᠨ ᠲᠠᠯᠪᠠᠶ ᠪᠠ ᠲᠡᠷᠡ ᠶᠢᠨ ᠬᠥᠮᠥᠷᠢ ᠶᠢᠨ ᠦᠶᠢᠯᠳᠪᠡᠷᠢᠯᠡᠬᠦ ᠪᠠ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠦᠨ ᠪᠠᠶᠢᠭᠠᠯ ᠢ ᠰᠠᠶᠢᠵᠢᠷᠤᠯᠤᠨ᠎ᠠ."
      },
      "card2": {
        "title": "ᠹᠠᠨ ᠵᠢᠶᠠ ᠴᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ",
        "paragraph1": "ᠹᠠᠨ ᠵᠢᠶᠠ ᠴᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠨᠢ ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠪᠦᠬᠦ ᠡᠷᠬᠡᠮ ᠲᠡᠢ ᠰᠠᠯᠪᠠᠷᠢ ᠺᠣᠮᠫᠠᠨᠢ ᠪᠣᠯᠤᠨ᠂ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠣᠷᠳᠤᠰ ᠬᠣᠲᠠ ᠶᠢᠨ ᠳᠦᠩᠰᠢᠩ ᠲᠣᠣᠷᠢᠭ ᠤᠨ ᠬᠣᠶᠢᠲᠤ ᠪᠡᠶᠡ ᠰᠠᠢᠢᠳ ᠳᠦᠩᠰᠢᠩ ᠨᠤᠭᠤᠭᠠᠨ ᠰᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠸᠠᠨ ᠯᠢ ᠤᠷᠤᠳᠤᠢ ᠰᠠᠪᠤᠷᠢ ᠳᠤ ᠪᠠᠢᠢᠭᠤᠯᠤᠭᠠᠳ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠪᠠᠳᠤᠯᠠᠭᠠᠨ ᠢᠢᠯᠡᠭᠡᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠨᠢ ᠵᠢᠯ ᠳᠤ 420 ᠣᠨ ᠤ ᠳᠤᠩ᠎ᠠ᠂ ᠤᠭᠠᠯᠠᠬᠤ ᠦᠳ ᠤᠨ ᠪᠠᠳᠤᠯᠠᠭᠠᠨ ᠢᠢᠯᠡᠭᠡᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠨᠢ ᠵᠢᠯ ᠳᠤ 600 ᠣᠨ ᠤ ᠳᠤᠩ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠤᠷᠤᠳᠤᠢ ᠶᠢᠨ ᠳᠣᠲᠣᠷᠠ ᠠᠷᠭᠠ ᠨᠤᠭᠤᠭᠠᠨ ᠰᠠᠪᠤᠷᠢ ᠨᠢ ᠪᠠᠭᠠ ᠬᠥᠪᠠᠨ ᠤᠨ ᠬᠤᠪᠤᠷᠤᠨ᠂ ᠪᠠᠭᠠ ᠬᠥᠪᠠᠨ ᠤᠨ ᠬᠢᠮᠢ ᠬᠣᠯᠳᠣᠳᠠᠢ᠂ ᠦᠨᠳᠦᠷ ᠬᠠᠯᠠᠭᠤᠨ ᠲᠤ ᠳᠠᠢ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠤᠨ᠂ ᠨᠢᠳᠤᠨ ᠶᠢᠨ ᠠᠰᠠᠯ ᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠦᠴᠦᠨ ᠦ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠃",
        "paragraph2": "ᠹᠠᠨ ᠵᠢᠶᠠ ᠴᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠨᠢ ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠨᠤᠭᠤᠭᠠᠨ-ᠴᠠᠬᠢᠯᠭᠠᠨ-ᠳᠤᠯᠠᠭᠠᠨ ᠡᠷᠭᠢᠯᠳᠡ ᠠᠵᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠲᠦᠯᠪᠦᠷᠢ ᠶᠢᠨ ᠴᠢᠨᠠᠷ ᠴᠢᠮᠦᠬᠡ ᠬᠡᠰᠡᠭ ᠪᠣᠯᠤᠨ᠂ ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠬᠣᠶᠢᠲᠤ ᠪᠠᠢᠢ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠰᠦᠭ ᠦᠨ ᠠᠮᠠᠰᠤ ᠤᠷᠤᠳᠤᠢ ᠪᠣᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠨᠤᠭᠤᠭᠠᠨ ᠨᠢ ᠪᠦᠰᠡ ᠳᠠᠮᠵᠢᠭᠤᠷ ᠠᠮᠠᠷ ᠬᠣᠶᠢᠲᠤ ᠪᠠᠢᠢ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠰᠦᠭ ᠦᠨ ᠭᠠᠷ ᠲᠤᠭᠠᠯᠢᠭ ᠳᠤ ᠰᠢᠳᠡ ᠢᠯᠡᠭᠡᠨ ᠠᠪᠤᠳᠠᠢ᠂ ᠠᠴᠢᠯᠠᠯ ᠦᠨ ᠳᠠᠷᠤᠭᠤᠯᠭ᠎ᠠ ᠪᠠ ᠭᠤᠳᠠᠮᠵᠢ ᠶᠢᠨ ᠣᠷᠣᠯᠴᠢᠯᠠᠯ ᠢ ᠪᠤᠨᠳᠤᠷᠭᠠᠵᠠᠢ᠃ ᠡᠨᠡ ᠦᠨᠳᠦᠰᠦ ᠳᠡᠭᠡᠳᠦ᠂ ᠹᠠᠨ ᠵᠢᠶᠠ ᠴᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠦᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤ ᠲᠠᠯ᠎ᠠ ᠳᠤ ᠪᠦᠬᠦ ᠳᠠᠪᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠨᠢᠭᠤᠷᠤᠨ ᠠᠢᠮᠠᠭ ᠤᠨ ᠪᠠᠢᠢᠴᠠᠯᠠᠯ ᠳᠤ ᠡᠰᠡᠷᠭᠦ ᠬᠦᠷᠦᠭᠦᠯᠦᠨ᠂ ᠪᠠᠢᠢᠴᠠᠯᠠᠯ ᠢ ᠬᠠᠮᠤᠭ ᠪᠠᠭᠠ ᠬᠡᠮᠵᠢᠶᠡᠯ ᠤᠨ ᠬᠡᠭᠦᠷ ᠵᠢ ᠣᠯᠭᠣᠵᠤ᠂ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠪᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦᠭ ᠦᠨ ᠨᠢᠷᠤᠭᠰᠤᠯ ᠠᠮᠤᠷ ᠠᠰᠢᠭ ᠢ ᠰᠠᠢᠢᠳᠠᠵᠠᠢ᠃"
      },
      "card3": {
        "title": "ᠰᠢᠨ ᠰᠢᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ",
        "paragraph1": "ᠰᠢᠨ ᠰᠢᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠨᠢ ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠪᠦᠬᠦ ᠡᠷᠬᠡᠮ ᠲᠡᠢ ᠰᠠᠯᠪᠠᠷᠢ ᠺᠣᠮᠫᠠᠨᠢ ᠪᠣᠯᠤᠨ᠂ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠥᠪᠡᠷᠳᠡᠭᠡᠨ ᠵᠠᠰᠠᠭ ᠤᠨ ᠳᠦᠩᠰᠢᠩ ᠨᠤᠭᠤᠭᠠᠨ ᠰᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠪᠣᠨᠢ ᠤᠰᠤ ᠱᠤᠸᠠᠨ ᠲᠦᠷᠡᠯᠦᠯ ᠰᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠬᠢᠮᠠᠨᠠ ᠪᠠᠢᠢᠭᠤᠯᠤᠭᠠᠳ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠡᠳᠦᠷ ᠭᠠᠷᠭᠠᠯᠳᠠ ᠶᠢᠨ ᠠᠷᠭ᠎ᠠ ᠨᠢ ᠢᠯᠠᠭᠠᠨ ᠳᠦᠯᠦᠭᠡᠨ ᠤ ᠤᠷᠤᠳᠤᠢ ᠪᠣᠯᠤᠨ᠂ ᠪᠠᠳᠤᠯᠠᠭᠠᠨ ᠢᠢᠯᠡᠭᠡᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠨᠢ ᠵᠢᠯ ᠳᠤ 240 ᠣᠨ ᠤ ᠳᠤᠩ ᠪᠠᠢᠢᠨ᠎ᠠ᠃",
        "paragraph2": "ᠡᠨᠡ ᠨᠤᠭᠤᠭᠠᠨ ᠤᠷᠤᠳᠤᠢ ᠶᠢᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠰᠠᠪᠤᠷᠢ ᠨᠢ ᠲᠦᠪᠰᠢᠨ ᠵᠣᠭᠰᠣᠬᠤ᠂ ᠨᠤᠭᠤᠭᠠᠨ ᠨᠢ ᠵᠡᠭᠡᠷᠡᠯ ᠢ ᠪᠠᠢᠢᠴᠠᠯᠠᠬᠤ ᠦᠬᠡᠢ᠂ ᠢᠯᠠᠳᠤ ᠠᠢᠢᠯ ᠤᠨ ᠨᠣᠶᠠᠨ ᠨᠢ ᠡᠩᠭᠢᠨ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠨᠤᠭᠤᠭᠠᠨ ᠤ ᠬᠠᠷᠢᠭᠤᠴᠠᠯᠠᠯ ᠠᠮᠠᠰᠤᠨ ᠨᠢ ᠮᠠᠰᠢ ᠪᠠᠭᠠ ᠬᠥᠪᠠᠨ ᠤᠨ ᠬᠤᠪᠤᠷᠤᠨ᠂ ᠮᠠᠰᠢ ᠪᠠᠭᠠ ᠬᠥᠪᠠᠨ ᠤᠨ ᠬᠢᠮᠢ ᠬᠣᠯᠳᠣᠳᠠᠢ᠂ ᠮᠠᠰᠢ ᠦᠨᠳᠦᠷ ᠬᠠᠯᠠᠭᠤᠨ ᠲᠤ ᠳᠠᠢ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠤᠨ᠂ ᠨᠢᠳᠤᠨ ᠶᠢᠨ ᠠᠰᠠᠯ ᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠣᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠤ ᠠᠰᠠᠯ ᠤᠨ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠂ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢᠶ ᠠ ᠠᠰᠠᠯ ᠢᠩ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠨᠢᠭ ᠢᠢ ᠬᠠᠮᠤᠰᠤᠯ ᠠᠮᠤᠷ ᠬᠡᠷᠡᠭᠯᠡᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠮᠦᠨ ᠪᠠᠰᠠ ᠪᠠᠢᠢᠷᠢ ᠢᠯᠠᠳᠤ ᠠᠢᠢᠯ ᠢ ᠠᠪᠴᠠᠭᠤᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠷᠢ ᠪᠠ ᠬᠢᠮᠢ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠰᠠᠪᠤᠷᠢ ᠳ᠋ᠤ ᠲᠦᠯᠡᠪᠦᠷᠢᠯᠡᠯ ᠬᠦᠰᠦᠨ ᠦ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠪᠣᠯᠤᠨ ᠠᠪᠴᠠᠭᠤᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠯᠳᠠ ᠰᠦᠬᠦᠷᠡᠨ ᠦ ᠨᠤᠭᠤᠭᠠᠨ ᠪᠣᠯᠤᠨ ᠠᠪᠴᠠᠭᠤᠯᠤᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠃"
      }
    }
  },
  "aluminiumIndustry": {
    "title": "ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠠᠶᠢᠯ ᠠᠴᠠ",
    "intro": "ᠺᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠦᠨᠳᠦᠷ ᠰᠦᠨᠪᠦᠷᠢ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠠᠭᠤᠷᠭᠠᠬᠤ ᠦᠢᠯᠡᠦᠯᠭᠡ ᠪᠠ ᠭᠦᠨ ᠢᠯᠡᠯ ᠢ ᠠᠷᠭᠠ ᠳᠡᠦ ᠪᠣᠯᠭᠠᠵᠤ᠂ \"ᠨᠤᠭᠤᠭᠠᠨ-ᠴᠠᠬᠢᠯᠭᠠᠨ-ᠠᠯᠤᠮᠢᠨᠢᠤᠮ-ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ-ᠭᠦᠨ ᠢᠯᠡᠯ\" ᠦᠨ ᠨᠢᠬᠡᠭ ᠤᠯ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠰᠢᠰᠲ᠋ᠧᠮ ᠢ ᠪᠠᠢᠢᠭᠤᠯᠵᠤ᠂ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠭᠦᠨ ᠢᠯᠡᠯ ᠢ ᠪᠠᠲᠤ ᠮᠦᠷᠳᠡ ᠵᠢ ᠬᠠᠪᠴᠠᠭᠠᠨ᠎ᠠ᠃ ᠣᠳᠤ ᠦᠭᠡ ᠳ᠋ᠤ ᠵᠢᠯ ᠳᠤ 50 ᠣᠨ ᠤ ᠵᠢᠷᠤᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠨ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ᠂ ᠵᠢᠯ ᠳᠤ 10 ᠣᠨ ᠤ ᠦᠨᠳᠦᠷ ᠳᠡᠪᠰᠢᠷᠯᠢᠭ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠤᠨ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ᠂ ᠵᠢᠯ ᠳᠤ 22 ᠣᠨ ᠤ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠭᠦᠨ ᠢᠯᠡᠯ ᠦᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢᠯᠡᠭᠦᠯᠦᠨ ᠦ ᠪᠠᠢᠢᠨ᠎ᠠ᠃",
    "projects": {
      "primary": {
        "title": "ᠵᠢᠷᠤᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ",
        "description": "ᠵᠢᠷᠤᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤ ᠭᠣᠯ ᠬᠠᠷᠢᠮ ᠤᠨ ᠠᠪᠤᠷᠠᠯ ᠨᠢ ᠠᠯᠤᠮᠢᠨᠠ ᠪᠣᠯᠤᠨ᠂ ᠡᠨᠡ ᠨᠢ ᠬᠡᠷᠡᠭᠯᠦᠯᠲᠡ ᠶᠢᠨ ᠦᠯᠦᠮ ᠨᠡᠷᠡ ᠳᠠᠢ ᠮᠡᠲ᠋ᠠᠯ ᠪᠣᠯᠤᠨ᠂ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠪᠦᠲᠦᠭᠡᠨ ᠢᠯᠡᠯ ᠦᠨ ᠭᠣᠯ ᠬᠠᠷᠢᠮ ᠦᠨ ᠠᠪᠤᠷᠠᠯ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠵᠢᠷᠤᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠲᠦᠯᠦᠪᠦᠷᠢ ᠨᠢ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠳᠡᠮᠳᠡᠭ ᠦᠨᠳᠦᠷ ᠦᠨ 500KA ᠭᠠᠳᠤᠨ ᠰᠢᠯᠠᠭᠤᠯᠤᠪᠠ ᠨᠣᠳ ᠤᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠵᠡᠷᠡᠭ ᠢ ᠠᠪᠴᠠᠭᠤᠯᠵᠤ᠂ ᠳᠡᠪᠰᠢᠯᠦᠪᠦᠷᠢ᠂ ᠳᠡᠪᠰᠢᠷᠯᠢᠭ᠂ ᠲᠦᠯᠦᠪᠦᠷᠢ᠂ ᠠᠶᠤᠭᠤᠯᠤᠯ᠂ ᠪᠠᠢᠢᠴᠠᠯᠠᠯ ᠬᠠᠮᠢᠶᠠᠯ ᠦᠨ ᠲᠠᠯ᠎ᠠ ᠳዏ᠂ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠳᠦᠷᠦᠭᠰᠡᠨ ᠵᠡᠷᠭᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠷ ᠦᠨ ᠬᠤᠷᠠᠭᠠᠨ ᠳᠤ ᠬᠦᠷᠪᠡᠢ᠃",
        "altText": "ᠵᠢᠷᠤᠯ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠠᠢᠮᠠᠭ"
      },
      "highEnd": {
        "title": "ᠦᠨᠳᠦᠷ ᠰᠦᠨᠪᠦᠷᠢ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠪᠠ ᠭᠠᠷᠤ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ",
        "description": "ᠦᠨᠳᠦᠷ ᠰᠦᠨᠪᠦᠷᠢ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠪᠠ ᠦᠷᠢᠶᠡ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠲᠦᠯᠦᠪᠦᠷᠢ ᠨᠢ ᠮᠧᠩ ᠲᠠᠢ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢᠯᠡᠭᠰᠡᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠤᠩᠰᠢᠶᠡᠨ ᠢ ᠭᠣᠯ ᠬᠠᠷᠢᠮ ᠦᠨ ᠠᠪᠤᠷᠠᠯ ᠪᠣᠯᠭᠠᠵᠤ ᠠᠪᠴᠠᠭᠤᠯᠳᠠᠢ᠃ ᠪᠦᠲᠦᠭᠡᠨ ᠨᠢ ᠮᠠᠰᠢᠨ ᠤ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ᠂ ᠠᠯᠤᠷᠠ ᠵᠠᠮ ᠤᠨ ᠠᠴᠢᠯᠠᠯ᠂ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠪᠦᠲᠦᠭᠡᠨ ᠪᠠ ᠪᠦᠰᠦ ᠰᠠᠪᠤᠷᠢ ᠳᠤ ᠦᠯᠦᠮ ᠬᠡᠷᠡᠭᠵᠢᠯᠳᠡᠢ᠃ ᠲᠦᠯᠦᠪᠦᠷᠢ ᠨᠢ ᠳᠡᠪᠰᠢᠯᠦᠪᠦᠷᠢ ᠳᠡᠪᠰᠢᠷᠯᠢᠭ᠂ ᠲᠦᠯᠦᠪᠦᠷᠢ ᠰᠣᠩᠭᠣᠯᠳᠠ᠂ ᠠᠶᠤᠭᠤᠯᠤᠯ ᠪᠠ ᠪᠠᠢᠢᠴᠠᠯᠠᠯ ᠬᠠᠮᠢᠶᠠᠯ ᠦᠨ ᠲᠠᠯ᠎ᠠ ᠳᠤ ᠤᠷᠤᠨ ᠦ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠳᠡᠮᠳᠡᠭ ᠦᠨᠳᠦᠷ ᠦᠨ ᠬᠤᠷᠠᠭᠠᠨ ᠳᠤ ᠬᠦᠷᠪᠡᠢ᠃ ᠦᠨᠳᠦᠷ ᠳᠡᠪᠰᠢᠷᠯᠢᠭ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠲᠦᠯᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠬᠦᠭᠵᠢᠯ ᠨᠢ ᠮᠧᠩ ᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠴᠢᠨᠠᠷ ᠲᠤᠯᠳᠠᠪᠤᠷᠢ ᠰᠤᠩᠭᠣᠯᠳᠠ ᠪᠣᠯᠤᠨ᠂ ᠮᠧᠩ ᠲᠠᠢ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠦᠨᠳᠦᠷ ᠰᠦᠨᠪᠦᠷᠢ ᠰᠠᠪᠤᠷᠢ ᠳᠤ ᠣᠷᠣᠯᠴᠠᠪᠠ ᠶᠢᠨ ᠳᠠᠭᠠᠨ ᠬᠤᠪᠢᠷᠠᠯ ᠤᠨ ᠵᠠᠮ ᠪᠠᠢᠢᠨ᠎ᠠ᠃",
        "altText": "ᠦᠨᠳᠦᠷ ᠰᠦᠨᠪᠦᠷᠢ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠮᠠᠲ᠋ᠧᠷᠢᠶᠠᠯ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ"
      },
      "deepProcessing": {
        "title": "ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠪᠠ ᠭᠦᠨ ᠢᠯᠡᠯ",
        "description": "ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠪᠠ ᠭᠦᠨ ᠢᠯᠡᠯ ᠨᠢ ᠮᠣᠨᠲᠧ APT ᠤᠨ ᠭᠣᠯ ᠠᠵᠢᠯ ᠠᠴᠠ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠧᠦᠷᠣᠫ᠎ᠠ ᠶᠢᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠳᠡᠮᠳᠡᠭ ᠠᠷᠭᠠ ᠨᠢᠢᠭᠡᠮ ᠺᠣᠷᠫᠣᠷᠠᠴᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠨᠢᠭᠡᠨ ᠪᠠᠢᠢᠨ᠎ᠠ᠃ ᠡᠨᠡ ᠨᠢ ᠳᠡᠪᠰᠢᠷᠯᠢᠭ ᠪᠠᠲᠤ ᠦᠨᠳᠦᠷ ᠦᠨ ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠰᠢᠯᠵᠢᠯᠡᠯ ᠦᠨ ᠬᠢᠳᠠᠵᠦ ᠪᠠ ᠮᠠᠰᠢᠨ ᠠᠵᠢᠯᠯᠠᠭᠰᠠᠨ ᠪᠦᠲᠦᠭᠡᠨ ᠢ ᠪᠦᠷᠢᠳᠦᠭᠡᠷ ᠬᠦᠭᠵᠢᠭᠦᠯᠦᠨ᠂ ᠪᠠᠢᠢᠴᠠᠯᠠᠯ᠂ ᠠᠴᠢᠯᠠᠯ᠂ ᠮᠠᠰᠢᠨ ᠪᠠ ᠠᠶᠢᠯ ᠠᠴᠠ ᠶᠢᠨ ᠰᠠᠪᠤᠷᠢ ᠳᠠᠬᠢ ᠣᠯᠠᠨ ᠦᠯᠦᠰ ᠦᠨ ᠠᠯᠳᠠᠷᠲᠠᠢ ᠦᠢᠯᠡᠴᠢᠯᠡᠭᠴᠢ ᠳᠦᠷ ᠪᠦᠲᠦᠭᠡᠨ ᠢ ᠤᠯᠠᠮᠵᠢᠯᠠᠳᠠᠢ᠃ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠠᠪᠤᠷᠠᠯ ᠠᠪᠤᠷᠤᠯ ᠨᠢ ᠬᠠᠷᠢᠮ ᠠᠪᠤᠷᠠᠯ ᠠᠴᠠ ᠡᠴᠡ ᠡᠬᠢᠯᠡᠨ ᠪᠦᠲᠦᠭᠡᠨ ᠬᠦᠷᠳᠦ ᠪᠦᠬᠦ ᠦᠨᠡ ᠪᠣᠯᠬᠣ ᠮᠦᠷᠦ ᠤᠳᠠᠭᠠ ᠶᠢ ᠬᠠᠮᠢᠶᠠᠳᠠᠢ᠃",
        "altText": "ᠠᠯᠤᠮᠢᠨᠢᠤᠮ ᠬᠣᠯᠢᠮᠠᠭ ᠭᠦᠨ ᠢᠯᠡᠯ ᠦᠨ ᠠᠢᠮᠠᠭ"
      }
    }
  },
  "thermalPower": {
    "title": "ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠬᠦᠷᠢᠶᠡᠨ",
    "intro": {
      "paragraph1": "ᠨᠦᠭᠦᠷᠰᠦ ᠨᠤᠭᠤᠷ ᠦᠨ ᠳᠡᠪᠰᠢᠯᠡᠯᠲᠡ ᠶᠢᠨ ᠦᠨᠳᠦᠷ ᠳᠦ ᠡᠭᠦᠰᠬᠡᠵᠦ᠂ ᠺᠤᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠤᠷᠤ ᠠᠮᠠᠨ ᠦ ᠴᠤᠭᠯᠠᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠢ ᠪᠠᠢᠢᠭᠤᠯᠤᠭᠰᠠᠨ᠂ ᠪᠠᠢᠢᠷ ᠳᠤ ᠨᠦᠭᠦᠷᠰᠦ ᠨᠤᠭᠤᠷ ᠢ ᠬᠦᠷᠪᠡᠭᠦᠯᠦᠨ᠂ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠢ ᠰᠦᠪᠡᠷᠴᠦ ᠳᠤ ᠵᠠᠯᠭᠠᠵᠦ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠤ ᠮᠠᠷᠺᠡᠳ ᠳᠤ ᠭᠠᠷᠭᠠᠭᠰᠠᠨ᠂ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠶᠢᠨ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠶᠡᠷ ᠡᠬᠡ ᠬᠠᠪᠲᠠᠰᠤ ᠶᠢ ᠤᠷᠤᠨ ᠤ ᠬᠤᠰᠢᠭᠤᠨ ᠳᠤ ᠪᠠᠢᠢᠷ ᠤᠨ ᠰᠦᠪ ᠰᠢᠷᠠᠢᠢᠳᠤ ᠬᠠᠯᠠᠭᠤᠨ ᠤ ᠲᠤᠯᠠ ᠨᠤᠭᠠᠭᠰᠠᠨ᠂ ᠤᠯᠪᠤᠰ ᠢ ᠰᠢᠮᠸᠨᠲ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠳᠤ ᠬᠡᠷᠬᠡᠭᠯᠡᠵᠦ᠂ ᠬᠤᠰᠢᠭᠤᠨ ᠦ ᠤᠰᠤ ᠶᠢ ᠲᠡᠷᠡᠭᠦᠨ ᠰᠢᠵᠡᠬᠦᠯᠭᠡ ᠪᠤᠯᠭᠠᠨ᠂ ᠴᠡᠪᠡᠷ ᠠᠰᠢᠯᠠᠭᠠᠭᠰᠠᠨ᠂ ᠪᠠᠢᠢᠯᠳᠤᠵᠤ ᠬᠤᠷᠢᠶᠠᠯᠬᠤ ᠪᠦᠭᠦ᠂ ᠦᠭᠡᠢ ᠬᠠᠷᠤᠯᠲᠠ ᠪᠦᠬᠦ ᠡᠷᠬᠢᠮ ᠨᠢ ᠤᠯᠪᠤᠰ ᠤᠨ ᠬᠣᠸᠠᠷ ᠨᠤᠭᠤᠷ ᠤᠶᠤᠨ ᠦ ᠦᠨᠳᠦᠷ ᠬᠦᠭᠵᠢᠯ ᠪᠠ ᠣᠷᠳᠤᠰ ᠤᠨ ᠪᠤᠭᠠ ᠵᠡᠩᠭᠢ ᠪᠠ ᠴᠠᠭᠠᠨ ᠦᠪᠦᠯ ᠦᠨ ᠡᠨᠦ ᠬᠦᠮᠦᠨ ᠳᠤ ᠡᠷᠢᠨ ᠨᠢᠭᠡᠨᠲᠡ ᠤᠷᠢᠶᠠᠨ ᠢ ᠦᠭᠦᠯᠦᠭᠰᠡᠨ᠃",
      "paragraph2": "ᠮᠣᠩᠭᠲᠠᠢ ᠶᠢ ᠪᠦᠷᠢᠨ ᠡᠵᠡᠮᠰᠢᠯ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠦᠳ ᠬᠡᠷᠭᠢᠬᠦ ᠥᠭᠡᠳᠰᠦᠨ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ ᠳᠤ ᠤᠷᠤᠯᠬᠠᠨ ᠰᠤᠷᠤᠯᠴᠤᠬᠠᠢ ᠮᠣᠩᠭᠲᠠᠢ ᠪᠡᠢᠶᠦᠸᠠᠨ 2*660MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ᠂ ᠮᠣᠩᠭᠲᠠᠢ ᠪᠡᠢᠵᠢᠶᠠᠣ 2*330MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠪᠠ ᠮᠣᠩᠭᠲᠠᠢ 4*25MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠴᠢᠳᠠᠬᠤ ᠤᠳᠤ ᠬᠠᠯᠠᠭᠤᠨ ᠨᠢᠩᠭᠡᠳᠦᠯ 3800 ᠲᠦᠮᠡᠨ ᠰᠢᠪᠠᠭᠠᠪᠢᠷ ᠪᠠ ᠰᠢᠨᠡ ᠬᠦᠴᠦᠨ ᠰᠠᠯᠬᠢᠶᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠰᠦᠭᠦᠷᠯᠡᠯᠲᠡ 512000 ᠬᠢᠯᠤᠸᠠᠲ ᠳᠤ ᠬᠦᠷᠨᠡ᠃ ᠺᠤᠮᠫᠠᠨᠢ ᠶᠢ ᠤᠷᠢᠶᠠᠯᠠᠨ ᠪᠠᠢᠢᠭᠤᠯᠤᠯᠲᠠ ᠳᠤ ᠤᠷᠤᠯᠴᠠᠨ ᠬᠡᠷᠬᠦ ᠥᠭᠡᠳᠰᠦᠨ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ ᠳᠤ ᠤᠷᠤᠯᠬᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠤ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠬᠣᠸᠠᠷ ᠭᠦᠸᠠᠳᠠᠯᠤ 2*300MW ᠨᠦᠭᠦᠷᠰᠦ ᠰᠢᠴᠠ ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠪᠠ ᠦᠯᠦᠰ ᠦ ᠬᠦᠴᠦᠨ ᠬᠣᠯᠪᠤᠭᠤ ᠣᠯᠠᠨ ᠦᠨ ᠬᠠᠮᠳᠤ ᠭᠦᠤᠳᠢᠸᠡᠨ ᠳᠣᠩᠱᠡᠩ 2*330MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠤᠳᠤ ᠤᠷᠤᠨ᠃",
      "paragraph3": "ᠳᠠᠷᠠᠭᠠᠬᠢ ᠭᠤᠷᠪᠠᠨ ᠵᠢᠯ ᠳᠤ ᠺᠤᠮᠫᠠᠨᠢ ᠶᠢ ᠪᠦᠷᠢᠨ ᠡᠵᠡᠮᠰᠢᠯ ᠪᠠ ᠬᠠᠮᠳᠤ ᠤᠷᠤᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠦᠨ ᠬᠠᠮᠠᠭ ᠰᠦᠭᠦᠷᠯᠡᠯᠲᠡ 4 ᠪᠦᠷᠦ ᠰᠢᠩᠯᠡ ᠬᠢᠯᠤᠸᠠᠲ ᠦ ᠳᠡᠭᠡᠷᠡ ᠪᠠᠰᠠ ᠪᠦᠬᠦ ᠪᠤᠯᠤᠮᠵᠢᠲᠠᠢ᠃"
    },
    "projects": {
      "title": "ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ"
    },
    "card1": {
      "title": "ᠮᠣᠩᠭᠲᠠᠢ ᠪᠡᠢᠶᠦᠸᠠᠨ 2×660MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ",
      "content": {
        "paragraph1": "ᠮᠣᠩᠭᠲᠠᠢ ᠪᠡᠢᠶᠦᠸᠠᠨ 2×660MW ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠪᠤᠯ ᠺᠤᠮᠫᠠᠨᠢ ᠶᠢ ᠪᠠᠢᠢᠭᠤᠯᠤᠨ ᠦᠳᠦ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦᠨ ᠨᠢᠭᠡ ᠳᠤ᠃ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠨᠢ ᠦᠪᠦᠷ ᠮᠣᠩᠭᠤᠯ ᠦᠪᠡᠷᠲᠡᠭᠡᠨ ᠵᠠᠰᠠᠭ ᠤᠨ ᠤᠷᠳᠤᠰ ᠬᠤᠲᠠ ᠶᠢᠨ ᠳᠣᠩᠱᠧᠩ ᠳᠣᠰᠤᠭᠤ ᠳᠤ ᠤᠷᠴᠢᠨ ᠦᠭᠡᠢ ᠪᠠ ᠦᠪᠦᠷ ᠮᠣᠩᠭᠤᠯ ᠮᠣᠩᠭᠲᠠᠢ ᠭᠦᠷᠦᠯᠲᠦ ᠶᠤᠶᠠᠨ ᠺᠣᠮᠫᠠᠨᠢ ᠶᠢ ᠤᠷᠤᠳᠤ ᠪᠡᠭᠡᠯᠳᠡᠦᠯᠡᠵᠦ ᠦᠳᠦᠭᠰᠡᠨ᠃ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦ ᠪᠠᠢᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶᠡ 2×660MW ᠦᠨᠳᠦᠷ ᠦᠷ ᠡᠭᠦᠷᠢᠨ ᠦᠷᠯᠢᠯᠠᠭᠳᠠ ᠨᠦᠭᠦᠷᠤᠯᠭᠡ ᠬᠠᠯᠠᠭᠤᠨ ᠦ ᠦᠷᠬᠦᠰᠦᠨ ᠪᠠ ᠴᠢᠳᠠᠭᠠᠷ ᠴᠤ ᠴᠡᠪᠡᠷᠯᠡᠢ ᠪᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦᠨ ᠴᠡᠪᠡᠷᠯᠡᠢ ᠶᠢ ᠮᠤᠴᠠᠯᠤᠨ ᠪᠠᠢᠢᠭᠤᠯᠤᠨ ᠦᠳᠦᠭᠰᠡᠨ᠃ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ 2020 ᠤᠨ 8 ᠰ ᠪᠡᠷ ᠡᠬᠢᠯᠡᠭ ᠪᠠᠢᠢᠭᠤᠯᠤᠯᠳᠠ ᠪᠠ 2022 ᠤᠨ ᠰᠡᠩᠭᠦᠷ ᠡᠯᠡᠳᠳᠡ ᠪᠦᠷᠢᠨ ᠡᠵᠡᠮᠰᠢᠨ ᠪᠠ ᠠᠵᠢᠯᠯᠠᠯᠳᠠ ᠳᠤ ᠤᠷᠤᠨ ᠨᠢ ᠬᠦᠷᠬᠦ ᠠᠷᠤᠩᠯᠠᠭᠰᠠᠨ᠃",
        "paragraph2": "ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠨᠢ ᠳᠡᠯᠬᠡᠢ ᠵᠣᠰᠤᠭᠤᠨ ᠦ ᠦᠷᠯᠢᠭ ᠦᠷᠢ ᠡᠨ ᠡᠷᠬᠡ ᠳᠡᠪᠰᠢᠭᠡᠯᠳᠡ ᠶᠢ ᠠᠪᠠᠨ ᠪᠠ ᠦᠷᠭᠦᠭᠡᠨ ᠤ ᠪᠠᠢᠢᠷ ᠦᠨ ᠰᠢᠩᠭᠡᠨ ᠡᠨᠳᠡᠭᠡᠴᠡᠯ ᠦᠨ ᠬᠦᠮᠦᠨ ᠤ ᠰᠢᠩᠭᠡᠴᠢᠳᠡ ᠭᠠᠷᠤᠯᠲᠠ ᠳᠠᠢ ᠵᠡᠷᠭᠡᠵᠢᠯᠡᠯᠳᠡ ᠶᠢ ᠤᠳᠤ ᠬᠦᠷᠦᠭᠰᠡᠨ ᠪᠠ ᠭᠤᠷᠪᠠᠨ ᠬᠡᠮᠵᠢᠶᠡᠳᠤ ᠪᠢᠰᠢ ᠲᠠᠳᠤᠯᠤᠮᠠᠨ ᠺᠣᠮᠫᠣᠨᠸᠨᠲ ᠴᠠᠪᠠᠳᠠᠯᠲᠠ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠬᠤᠷᠢᠶᠠᠨ ᠢ ᠬᠦᠷᠡᠬᠦ ᠬᠤᠲᠠ ᠶᠢᠨ ᠪᠠᠢᠢᠴᠠᠭᠠᠨ ᠤ ᠡᠷᠬᠢᠮ ᠰᠤᠷᠴᠢᠯᠭᠠ ᠪᠠ ᠭᠠᠵᠠᠷ ᠤᠨ ᠮᠦᠷᠡᠶᠢᠨ ᠢ ᠡᠬᠡᠷᠦᠨ ᠨᠦᠬᠡᠴᠡᠯ ᠠᠴᠠ ᠯᠠᠢᠢᠴᠢᠳᠤ ᠰᠢᠮᠤᠯᠢᠳᠠᠰᠢ ᠪᠤᠯᠤᠨ ᠦᠷᠭᠦᠭᠡᠨ ᠦ ᠪᠠᠢᠢᠷ ᠦᠨ ᠪᠦᠯᠡᠷ ᠦᠨ ᠴᠤᠪᠤᠷᠢᠯᠠᠯ ᠢ ᠤᠶᠤᠭᠠ ᠶᠤᠰᠤᠨ ᠳᠦ ᠬᠦᠪᠢᠴᠢᠭᠡᠯᠬᠦ ᠲᠦᠯᠦᠪᠯᠡᠵᠦ ᠦᠳᠦᠭᠰᠡᠨ᠃ ᠭᠤᠯ ᠬᠦᠮᠦᠨ ᠤ ᠠᠵᠢᠯᠯᠠᠯᠳᠠ᠂ ᠪᠦᠬᠦ ᠡᠷᠢᠨ ᠡᠰᠡᠯᠪᠠ ᠭᠠᠵᠠᠷ ᠤᠨ ᠦᠰᠦᠭ ᠪᠠ ᠰᠢᠯᠢᠳᠬᠡᠯ ᠴᠤᠭᠯᠠᠭᠠᠨ ᠬᠦᠴᠦᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠪᠠᠢᠢᠭᠤᠯᠬᠤ ᠦᠨᠳᠦᠷ ᠢ ᠲᠠᠪᠤᠨ ᠪᠦᠯᠤᠨ ᠬᠤᠲᠠ ᠨᠢᠬᠡᠨᠳᠦ ᠡᠬᠦᠷᠢᠰ ᠲᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠢ ᠪᠠᠢᠢᠭᠤᠯᠬᠤ ᠦᠨᠳᠦᠷ ᠢ ᠰᠤᠷᠤᠯᠴᠠᠪᠠ᠃",
        "paragraph3": "ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦ ᠬᠠᠮᠠᠭ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠡᠮᠵᠢᠶᠡ 16.5hm2 ᠪᠠᠢᠢᠨᠠ ᠪᠠ ᠠᠳᠠᠯᠢᠬᠠᠨ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠳᠤ ᠬᠠᠷᠢᠲᠤᠨ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠡᠮᠵᠢᠶᠡ ᠶᠢ 49.21% ᠬᠦᠮᠦᠨ ᠲᠦᠯᠪᠦᠷᠢ ᠬᠠᠳᠠᠭᠠᠯᠠᠭᠰᠠᠨ᠃ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦᠷᠬᠦᠰᠦᠨ ᠦ ᠪᠢᠯᠭᠡ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶᠡᠯᠡᠯ ᠦᠨ ᠳᠤᠤᠷᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠦ ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠳᠡᠯᠪᠦᠷᠢ 45.66% ᠪᠠ ᠪᠦᠯᠦ ᠤᠳᠤ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠶᠢᠨ ᠪᠦᠭᠦᠨ ᠨᠦᠭᠦᠷᠰᠦ ᠴᠤᠩᠭᠠᠯᠠᠨ 269.36g/kwh ᠪᠠᠢᠢᠨᠠ᠃ ᠨᠢᠩᠭᠡᠳᠦᠯ ᠦᠨ ᠵᠢᠯ ᠦᠨ ᠨᠦᠬᠦᠴᠡᠯ ᠦᠨ ᠳᠤᠤᠷᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠦᠷᠭᠦᠭᠡᠨ ᠦ ᠳᠤᠯᠤᠭᠠᠨ ᠬᠦᠳᠡᠯᠪᠦᠷᠢ 59% ᠪᠠ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠶᠢᠨ ᠪᠦᠭᠦᠨ ᠨᠦᠭᠦᠷᠰᠦ ᠴᠤᠩᠭᠠᠯᠠᠨ 242.94g/kwh ᠪᠠᠢᠢᠨᠠ᠃",
        "paragraph4": "ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠨᠢ ᠳᠣᠩᠱᠧᠩ ᠳᠣᠰᠤᠭᠤ ᠶᠢᠨ ᠬᠤᠲᠠ ᠶᠢᠨ ᠪᠠᠢᠢᠷ ᠳᠤ ᠨᠢᠩᠭᠡᠳᠦᠯ ᠬᠢᠪᠡᠯ ᠢ ᠦᠭᠦᠯᠬᠦ ᠵᠣᠷᠢᠯᠭᠠ ᠲᠠᠢ ᠪᠠ ᠬᠤᠲᠠ ᠶᠢᠨ ᠰᠦᠷᠦᠨᠺᠧ ᠪᠦᠭᠡᠯᠦᠯᠭᠡ ᠶᠢᠨ ᠦᠯᠦᠰ ᠦᠨ ᠧᠳ᠋ ᠬᠦᠷᠦᠩᠭᠡ ᠪᠠ ᠠᠷᠠᠳ ᠤᠨ ᠠᠮᠠᠯ ᠤ ᠬᠠᠮᠠᠭ ᠬᠦᠨᠳᠦ ᠳᠤ ᠬᠠᠮᠠᠭᠠᠳᠠᠢ ᠬᠤᠲᠠ ᠶᠢᠨ ᠦᠨ ᠳᠡᠭᠡᠷᠠ ᠰᠦᠷᠦᠨᠺᠧ ᠪᠦᠭᠡᠯᠦᠯᠭᠡ ᠶᠢᠨ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠳᠤ ᠬᠦᠷᠯᠡᠢ᠃ ᠦᠨᠳᠦᠰᠦᠨ ᠪᠠᠢᠢᠷ ᠳᠠᠬᠢ 4×25MW ᠦᠷᠭᠦᠨ ᠪᠠ ᠲᠠᠷᠠᠭᠰᠠᠨ ᠵᠢᠭᠲᠠᠢ ᠪᠠᠭᠠ ᠭᠠᠤᠳᠠᠩ ᠢ ᠰᠤᠯᠢᠬᠤ ᠡᠷᠬᠡᠲᠠᠢ ᠪᠠ ᠬᠤᠲᠠ ᠳᠤ ᠬᠠᠭᠤᠢ᠌ᠲᠤ ᠬᠠᠳᠠᠭᠠᠯᠠᠯᠲᠠ ᠲᠠᠢ ᠪᠤᠭᠤ ᠨᠢᠩᠭᠡᠳᠦᠯ ᠬᢐᠯᠬᠠᠢ ᠢ ᠪᠦᠬᠦᠯᠨ ᠦᠭᠦᠯᠬᠦ ᠡᠷᠬᠡᠲᠠᠢ ᠬᠤᠭᠤᠨ ᠪᠠ ᠪᠠᠢᠢᠴᠠᠭᠠᠨ ᠤ ᠴᠢᠨᠠᠷ ᠢ ᠰᠠᠢᠢᠵᠢᠷᠠᠭᠤᠯᠬᠤ᠂ ᠰᠦᠷᠦᠨᠺᠧ ᠪᠦᠭᠡᠯᠦᠯᠭᠡ ᠶᠢᠨ ᠴᠢᠨᠠᠷ ᠢ ᠳᠡᠭᠡᠬᠦᠯᠬᠦ ᠭᠡᠬ ᠮᠡᠳᠡ ᠬᠠᠮᠠᠭ ᠤᠷᠳᠠ ᠲᠠᠢ ᠳᠤᠬᠢᠷᠠᠯ ᠤ ᠠᠰᠢᠭ ᠢ ᠠᠭᠤᠷᠠᠭᠤᠯᠬᠤ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦᠨ ᠪᠠᠢᠢᠨᠠ ᠬᠤᠪᠢ ᠶᠤᠰᠤᠨ ᠬᢐᠯᢐᠯᠲᠡ ᠲᠠᠢ ᠪᠠ ᠬᠦᠷ ᠶᠢᠨ ᠦᠮᠢᠯᠵᠯᠬᠤᠯᢐᠨ ᠳᠦ ᠦᠯᠦᠰ ᠦᠨ ᠲᠥᠷᠥ ᠵᠠᠰᠠᠭ ᠦᠨ ᠴᠢᠳᠠᠬᠤ ᠳᠤᠬᠢᠷᠠᠯ ᠪᠠ ᠳᠡᠮᠵᠡᠭᠡᠭᠰᠡᠨ ᠳᠦᠷᠪᠡᠯᠵᠢᠨ ᠦᠨ ᠪᠠᠢᠢᠨᠠ᠃"
      }
    },
    "card2": {
      "title": "Mengtai Beijiao 2×330MW Thermal Power Plant",
      "content": {
        "paragraph1": "ᠣᠷᠳᠣᠰ ᠪᠡᠢᠵᠢᠶᠠᠣ ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠺᠣᠮᠫᠠᠨᠢ ᠬᠦᠷᠢᠶᠡᠲᠦ ᠦ ᠲᠥᠪᠡᠳ ᠤᠯᠤᠰ (ᠬᠣᠢᠢᠨᠠ ᠳᠤ ᠪᠡᠢᠵᠢᠶᠠᠣ ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠺᠣᠮᠫᠠᠨᠢ ᠬᠡᠮᠡᠵᠤ ᠨᠡᠷᠡᠢᠳᠦᠨᠡ) 2012 ᠣᠨ ᠳᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠵᠠᠢ᠃ ᠳᠡᠷᠡ ᠨᠢ ᠥᠪᠦᠷ ᠮᠣᠩᠭᠣᠯ ᠦᠨ ᠮᠡᠩᠲᠠᠢ ᠪᠦᠯᠦᠭ ᠦᠨ ᠬᠦᠷᠢᠶᠡᠲᠦ ᠦ ᠲᠥᠪᠡᠳ ᠤᠯᠤᠰ ᠦᠨ ᠪᠦᠷᠢᠨ ᠡᠵᠡᠮᠰᠢᠯ ᠦᠨ ᠳᠣᠷᠣ ᠭᠠᠷᠤᠯ ᠪᠠᠶᠢᠳᠠᠯ ᠪᠣᠯᠣᠨ, ᠵᠢᠷᠤᠮᠳᠤ 2×330MW ᠱᠤᠤᠳ ᠠᠭᠠᠷ ᠦᠨ ᠱᠢᠯᠤᠭᠰᠠᠨ ᠤ ᠠᠵᠢᠯᠯᠠᠭᠠ ᠶᠢ ᠬᠤᠷᠢᠶᠠᠨ ᠡᠷᠬᠢᠯᠡᠨ ᠪᠠᠰᠠ ᠵᠠᠰᠠᠭ ᠦᠨ ᠦᠤᠯᠳᠡᠷᠢᠭ ᠦᠨ ᠦᠷᠢ ᠪᠣᠷᠤ ᠭᠠᠷᠭᠠᠵᠠᠢ᠃ 2×330MW ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠵᠦᠮ ᠨᠢ 2015 ᠣᠨ ᠳᠤ ᠪᠠᠰᠠ ᠭᠦᠪᠡᠨ ᠢ ᠪᠡᠷ ᠳᠤᠯᠤᠳᠤᠨ ᠠᠵᠢᠯᠯᠠᠵᠠᠢ᠂ ᠵᠢᠯ ᠳᠤ 4.2 ᠲᠦᠮᠡᠨ ᠨᠢᠭᠡ ᠦᠨ ᠳᠤᠯᠤᠭᠠᠴᠢᠨ ᠦᠢᠯᠡᠳᠦᠯᠦᠨ ᠬᠠᠮᠢᠶᠠᠷᠤᠯᠤᠨ ᠳᠤᠩᠰᠧᠩ ᠬᠣᠲᠠ ᠶᠢᠨ 10 ᠲᠦᠮᠡᠨ ᠨᠢᠭᠡ ᠰᠢᠪᠠᠭᠤᠷ ᠮᠡᠲ᠋ᠷ ᠦᠨ ᠨᠦᠭᠦᠭᠡᠯ ᠦᠨ ᠳᠤᠯᠤᠭᠠᠨ ᠪᠣᠯᠭᠠᠬᠤ ᠤ ᠦᠤᠯᠡᠰ ᠢ ᠬᠥᠷᠭᠡᠵᠦ ᠲᠠᠪᠠᠯᠤᠭᠰᠠᠨ ᠪᠣᠯᠠᠢ᠃ ᠺᠣᠮᠫᠠᠨᠢ ᠳᠠ ᠣᠳᠣᠬᠠᠨ ᠨᠢᠭᠡᠨ ᠬᠠᠮᠤᠭ ᠦᠯ ᠨᠢ 3 ᠲᠦᠮᠡᠨ ᠨᠢᠭᠡ ᠦᠧᠠᠨ᠂ ᠠᠵᠢᠯᠴᠢᠨ 240᠂ ᠲᠡᠬᠨᠢᠺ ᠦᠨ ᠬᠦᠴᠦᠨ ᠬᠠᠷᠢᠨ ᠪᠠᠳᠤᠷᠠᠯ ᠪᠠᠶᠢᠨᠠ᠂ ᠳᠡᠭᠡᠳᠦ ᠳᠦᠷᠦᠳᠬᠡᠷ ᠰᠤᠷᠭᠠᠨ ᠪᠠ ᠲᠡᠬᠨᠢᠺ ᠦᠨ ᠰᠤᠷᠭᠠᠨ ᠦ ᠰᠤᠷᠭᠠᠭᠴᠢᠳ ᠦᠯᠤᠰ ᠦᠨ ᠨᠢᠢᠳᠡ ᠠᠵᠢᠯᠴᠢᠨ ᠦ ᠨᠢᠢᠳᠦ ᠰᠠᠳᠤᠭᠤᠯ ᠦᠨ 90% ᠳᠥᠬᠢᠪᠡᠯᠡᠭᠦᠯᠤᠨ ᠰᠠᠢᠢᠨ ᠬᠤᠪᠢ ᠪᠠᠶᠢᠨᠠ᠃",
        "paragraph2": "ᠪᠡᠢᠵᠢᠶᠠᠣ ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠺᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ 2×330MW ᠳᠥᠷᠦᠯᠯᠡᠯ ᠰᠠᠳᠠᠯᠠᠨ ᠺᠷᠢᠲᠢᠺ᠂ ᠨᠢᠭᠡᠨ ᠳᠡᠮᠵᠢ ᠶᠢᠨ ᠳᠤᠮᠳᠠᠳᠤ ᠨᠠᠮᠠᠷᠯᠠᠵᠠᠢ᠂ ᠬᠣᠶᠠᠷ ᠴᠢᠯᠢᠨᠳᠦᠷ᠂ ᠬᠣᠶᠠᠷ ᠢᠭᠠᠷᠠᠪᠤᠷᠢ᠂ ᠱᠤᠤᠳ ᠠᠭᠠᠷ ᠦᠨ ᠱᠢᠯᠤᠭᠰᠠᠨ ᠤ ᠦᠴᠦᠭᠡᠨ ᠡᠪᠯᠡᠪᠦᠷᠢᠯᠡᠯ ᠴᠦᠬᠦᠯᠭᠡᠨ ᠠᠵᠢᠯᠴᠢᠨ ᠦ ᠶᠠᠷᠢᠯᠳᠠᠵᠠᠢ ᠪᠠ 2×1185t/h ᠳᠥᠷᠦᠯᠯᠡᠯ ᠰᠠᠳᠠᠯᠠᠨ ᠺᠷᠢᠲᠢᠺ᠂ ᠪᠠᠶᠢᠭᠠᠯᠢ ᠶᠢᠨ ᠡᠷᠭᠦᠯᠳᠡ ᠶᠢᠨ ᠨᠠᠷᠢᠩ ᠨᠦᠷᠦᠭᠰᠦ ᠦᠨ ᠤᠭᠠᠯᠤᠷ ᠪᠡᠷ ᠳᠡᠭᠡᠬᠦᠭᠡᠷ ᠠᠯᠣᠴᠢᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠤᠳᠠᠭᠠᠨ ᠶᠢᠨ ᠨᠢᠬᠦᠯᠡᠷ ᠠᠷᠢᠯᠭᠠᠯᠠᠨ ᠪᠠ ᠤᠳᠠᠭᠠᠨ ᠶᠢᠨ ᠦᠨᠳᠦᠷ ᠠᠷᠢᠯᠭᠠᠯᠠᠨ ᠤ ᠬᠢᠭᠡᠰᠦᠳᠦᠯ ᠢ ᠨᠢᠬᠦ ᠴᠠᠭ ᠪᠠᠷᠢᠵᠠᠢ᠃ ᠡᠨᠡ ᠵᠦᠮ ᠦ ᠭᠣᠯ ᠨᠦᠷᠦᠰ ᠨᠢ ᠡᠬᠢᠯᠡᠨ ᠦ ᠬᠣᠷᠢᠶᠠ ᠧᠠᠩᠵᠢᠶᠠ ᠪᠤᠷᠠᠯ ᠳᠤ ᠬᠦᠨᠵᠤᠯᠳᠦ ᠦᠢᠯᠡᠳᠦᠯᠦᠯ ᠦ ᠣᠷᠣᠨ ᠬᠠᠯᠠᠭᠠᠨ ᠦ ᠨᠦᠷᠦᠰ ᠪᠠᠷ ᠤᠷᠤᠪᠤᠯᠵᠢᠯᠠᠭᠰᠠᠨ ᠪᠠᠷ ᠬᠣᠲᠠ ᠶᠢᠨ ᠦᠨ ᠲᠠᠩᠢᠯ ᠢ ᠬᠠᠴᠢᠷᠠᠵᠠᠢ᠂ ᠦᠢᠯᠡᠳᠦᠯᠦᠯ ᠦ ᠦᠰᠦᠨ ᠪᠤᠯᠤᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠨᠣᠮ ᠰᠠᠯᠪᠤᠷᠠᠯᠵᠠᠢ ᠦᠰᠦᠨ ᠢ ᠬᠡᠷᠡᠭᠯᠡᠨᠡ᠂ ᠡᠨᠡ ᠨᠢ ᠠᠮᠠᠷᠲᠠᠢ᠂ ᠤᠰᠤ ᠬᠣᠳᠠᠯᠠᠯ᠂ ᠤᠷᠤᠨ ᠪᠠᠶᠢᠴᠠᠭᠠᠭᠠᠨ ᠦ ᠪᠣᠯᠤᠮᠵᠢᠲᠠᠢ᠃ 2×330MW ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠵᠦᠮ ᠨᠢ ᠣᠷᠣᠨ ᠳᠦ ᠨᠦᠲᠦᠭ ᠦᠨ ᠴᠢᠳᠠᠪᠦᠷᠢ ᠶᠢᠨ ᠳᠤᠯᠤᠯᠭᠠ ᠶᠢᠨ ᠨᠡᠮᠡᠯᠳᠡ ᠶᠢ ᠳᠠᠪᠤᠨ ᠪᠠᠷᠢᠯᠠᠵᠠᠢ᠂ ᠬᠣᠲᠠ ᠶᠢᠨ ᠳᠤᠯᠤᠭᠠᠨ ᠪᠣᠯᠭᠠᠬᠤ ᠶᠢᠨ ᠮᠠᠭᠠᠳᠯᠠᠯ ᠢ ᠰᠢᠢᠳᠪᠦᠷᠢᠯᠡᠨ ᠮᠡᠩᠰᠢ ᠦᠨ ᠪᠠᠷᠤᠨ ᠦᠨ ᠴᠢᠳᠠᠪᠦᠷᠢ ᠶᠢᠨ ᠳᠤᠯᠤᠯᠭᠠ ᠪᠡᠷ ᠪᠠᠶᠢᠳᠠᠯ ᠦ ᠬᠥᠷᠦᠩᠭᠦ ᠦᠷᠦᠯᠡᠯᠲᠡ ᠶᠢ᠌ ᠪᠤᠭᠤᠷᠢᠳᠬᠠᠵᠠᠢ᠂ ᠣᠷᠣᠨ ᠳᠦ ᠨᠦᠲᠦᠭ ᠦᠨ ᠴᠢᠭᠴᠠᠭᠠᠯᠠᠨ ᠦ ᠳᠤᠯᠤᠯᠭᠠ ᠪᠡᠷ ᠨᠢᠭᠡᠨᠳᠦ ᠪᠡᠢᠭᠵᠦᠯᠦᠭᠰᠡᠨ ᠪᠠᠢᠢᠨᠠ᠃",
        "paragraph3": "ᠪᠡᠢᠵᠢᠶᠠᠣ ᠳᠤᠯᠤᠭᠠᠨ ᠴᠠᠬᠢᠯᠭᠠᠨ ᠦ ᠺᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠦᠯᠦᠰ ᠦᠨ ᠪᠠ ᠥᠪᠦᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠩᠬᠡᠷᠡᠴᠦ ᠭᠠᠵᠠᠷ ᠦᠨ ᠴᠢᠨ ᠪᠠ ᠬᠢᠳ ᠬᠣᠳᠠᠯᠭᠠᠯ᠂ ᠪᠠᠢᠢᠴᠠᠭᠠᠨ ᠬᠠᠮᠢᠶᠠᠯᠠᠯ ᠦᠨ ᠳᠥᠷᠥ ᠶᠢ ᠴᠦᠷᠦᠭᠳᠦ ᠪᠢᠶᠠᠯᠠᠨ ᠢᠨᠠᠭᠰᠢᠯᠠᠨ᠂ ᠬᠦᠴᠦᠰᠦ ᠨᠥᠭᠡᠳᠡ ᠶᠢ ᠨᠢᠬᠦᠷᠦᠯ ᠦᠬᠡᠢ ᠬᠥᠷᠥᠯᠦᠮᠵᠢ ᠢᠶᠡᠷ ᠤᠷᠤᠷ ᠤᠯᠠᠮ ᠢ ᠠᠮᠢᠳᠠᠯ ᠶᠢᠨ ᠡᠷᠬ ᠡ ᠪᠣᠯᠭᠠᠵᠠᠢ᠂ ᠨᠣᠭᠣᠭᠠᠨ᠂ ᠪᠠᠢᠢᠴᠠᠭᠠᠨ ᠨᠠᠢᠢᠳᠠᠯ᠂ ᠡᠷᠪᠦᠯᠵᠢᠨ᠂ ᠦᠨᠡᠭᠡᠰ ᠦᠨ ᠦᠷᠦᠯᠬᠦ ᠵᠤᠷᠢᠯᠠᠭᠠ ᠶᠢᠨ ᠳᠤᠯᠤᠯᠭᠠ ᠶᠢᠨ ᠦᠵᠦᠭᠦᠷ ᠪᠠᠷᠢᠮᠵᠢᠶᠠ ᠶᠢ ᠪᠠᠷᠢᠮᠳᠠᠵᠦᠯᠦᠬᠦ ᠶᠢ ᠴᠢᠳᠠᠵᠤ᠂ ᠦᠪᠡᠷ ᠠᠮᠠᠷᠠᠪᠯᠠᠨ ᠨᠦᠷᠦᠰ ᠳᠤ ᠬᠣᠢᠷᠴᠠ ᠭᠠᠷᠴᠠᠯ᠂ ᠴᠡᠯᠬᠠᠢᠯᠡᠯ᠂ ᠳᠤᠯᠤᠯᠭᠠ ᠦᠯ ᠨᠦᠲᠦᠯᠪᠦᠷᠢᠯᠡᠯ ᠦᠨ ᠨᠢᠢᠭᠡᠳᠦᠭᠡᠷ ᠬᠦᠭᠵᠢᠯᠲᠡ ᠶᠢᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠢ ᠪᠠᠲᠤ ᠪᠢᠢᠯᠡᠯ ᠦᠨ ᠪᠢᠶᠡᠯᠡᠯ ᠦᠨ ᠬᠣᠶᠠᠷ ᠤᠯᠠᠮ ᠦᠨ ᠪᠦᠲᠦᠭᠡᠨ ᠪᠠᠢᠢᠯᠭᠠ ᠶᠢᠨ ᠵᠥᠷᠢᠯᠭᠠ ᠶᠢ ᠦᠨᠡᠳᠦᠷ ᠪᠢᠶᠡᠯᠡᠯ ᠦᠨ ᠨᠢᠢᠭᠡᠳᠦᠭᠡᠷ ᠬᠦᠭᠵᠢᠯᠲᠡ ᠶᠢᠨ ᠡᠷᠬ ᠡ ᠪᠢᠴᠢᠭ ᠨᠢ ᠰᠢᠢᠳᠦᠯᠦᠨ ᠪᠦᠯᠦᠭᠰᠦᠯᠦᠨ ᠪᠢᠶᠡᠯᠡᠯ ᠦᠨ ᠵᠢᠯ ᠢ ᠬ᠂ ᠳᠤᠯᠤᠯᠭᠠ᠂ ᠳᠤᠯᠤᠭᠠᠨ ᠦ ᠨᠢᠢᠭᠡᠨ ᠬᠦᠭᠵᠢᠯᠲᠡ ᠶᠢᠨ ᠳᠠᠪᠤᠷᠭᠠᠯᠠᠮᠵᠢ ᠶᠢᠨ ᠡᠯᠦᠷ ᠭᠦᠯᠦᠯᠡᠯ ᠦᠨ ᠵᠥᠷᠢᠯᠭᠣ ᠶᠢ ᠦᠨᠡᠳᠦᠷ ᠴᠢᠨᠠᠷ ᠪᠠᠶᠢᠯᠭᠠᠨ ᠬᠦᠷᠴᠦ ᠪᠣᠯᠤᠮᠵᠢᠲᠠᠢ᠃"
      }
    },
    "card3": {
      "title": "ᠮᠡᠩᠲᠠᠢ ᠶᠠᠯᠬᠤᠨ ᠲᠥᠮᠥᠷ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠴᠢᠯᠢᠭᠤ ᠬᠦᠴᠦᠨ 4×25MW",
      "content": {
        "paragraph1": "ᠣᠷᠳᠣᠰ ᠮᠡᠩᠲᠠᠢ ᠶᠠᠯᠬᠤᠨ ᠲᠥᠮᠥᠷ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ ᠬᠤᠪᠢᠷᠲᠤ ᠬᠣᠯᠪᠣᠭᠠᠴᠢ ᠮᠣᠩᠭᠣᠯ ᠮᠡᠩᠲᠠᠢ ᠬᠥᠮᠦᠰ ᠬᠤᠪᠢᠷᠲᠤ ᠬᠣᠯᠪᠣᠭᠠᠴᠢ ᠶᠢᠨ ᠪᠦᠬᠦᠨ ᠡᠷᠬᠡ ᠮᠡᠳᠡᠯ ᠬᠤᠪᠢᠷᠲᠤ ᠬᠣᠯᠪᠣᠭᠠᠴᠢ ᠪᠣᠯᠤᠨ 2006 ᠣᠨ ᠤᠨ 8 ᠰᠠᠷ᠎ᠠ ᠳᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ᠃ ᠡᠨᠡ ᠶᠢᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠤᠮᠤᠨ ᠶᠢᠨ ᠬᠤᠴᠦᠨ 4×25MW ᠶᠢᠨ ᠶᠠᠯᠬᠤᠨ ᠲᠥᠮᠥᠷ ᠦᠢᠯᠡᠳᠪᠦᠷᠢᠨ ᠴᠢᠯᠢᠭᠤᠨ ᠬᠡᠷᠡᠭᠰᠡᠯ᠃ 7×130 ᠲᠣᠨ᠎ᠤ ᠶᠢᠨ ᠴᠢᠯᠢᠭᠤᠳ ᠪᠤᠶᠤᠨ ᠬᠠᠯᠠᠭᠤ ᠬᠥᠮᠦᠰ ᠪᠣᠯᠤᠨ᠃ ᠬᠠᠯᠠᠭᠤ ᠶᠢᠨ ᠴᠢᠯᠢᠭᠤᠨ 10 ᠰᠠᠶᠢ ᠬᠤᠪᠢ ᠮᠡᠲᠷ ᠡᠴᠡ ᠢᠯᠡᠳᠦ᠃ ᠣᠳᠣ ᠬᠤᠪᠢᠷᠲᠤ ᠶᠢᠨ ᠨᠢᠭᠤᠴᠠ ᠬᠥᠮᠦᠰ ᠶᠢᠨ ᠬᠣᠷᠢᠨ 650 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠪᠣᠯᠤᠨ᠃ 150 ᠠᠵᠢᠯᠴᠢᠳ ᠲᠠᠢ᠃ ᠡᠨᠡᠴᠡ 90% ᠢᠶᠡᠨ ᠢᠬᠡ ᠰᠤᠷᠤᠭᠤᠯᠢ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠴᠢ ᠪᠣᠯᠤᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠪᠣᠯᠤᠨ ᠲᠡᠬᠨᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠨ᠃",
        "paragraph2": "ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠲᠣᠭᠲᠣᠨᠣᠭᠤᠯᠤᠭᠰᠠᠨ ᠳᠠᠬᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤᠨ ᠡᠬᠣᠨᠣᠮᠢ ᠶᠢᠨ ᠲᠥᠯᠥᠪ ᠤᠳ ᠤ ᠬᠦᠴᠦᠨ ᠬᠣᠭᠣᠯᠢᠶᠢᠨ ᠲᠥᠷᠥᠯ. ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠯᠥᠪ 2×25MW ᠬᠤᠪᠢᠷᠠᠯᠲᠠᠢ ᠬᠣᠨᠳᠡᠨᠰᠢᠩ ᠰᠲᠢᠮ ᠲᠦᠷᠪᠢᠨ + 3×130ᠲ ᠴᠢᠬᠢᠷᠢᠯᠲᠠᠢ ᠹᠯᠦᠢᠳᠢᠵᠠᠢᠳ ᠪᠡᠳ ᠪᠣᠶᠢᠯᠡᠷ ᠦᠨᠢᠲ ᠨᠢ 2006 ᠣᠨ ᠳᠤ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠪᠣᠯᠤᠨ ᠳᠣᠩᠰᠢᠩ ᠤᠨ ᠬᠣᠲᠠ ᠳᠤ ᠲᠥᠪ ᠲᠡᠮᠬᠢᠮ ᠤᠨ ᠬᠠᠯᠤᠨ ᠬᠠᠩᠭᠠᠬᠤ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ. ᠬᠣᠶᠠᠳᠤᠭᠠᠷ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠯᠥᠪ 2×25MW ᠪᠡᠬ ᠫᠷᠡᠰᠰᠦᠷᠢ ᠰᠲᠢᠮ ᠲᠦᠷᠪᠢᠨ + 4×130ᠲ ᠴᠢᠬᠢᠷᠢᠯᠲᠠᠢ ᠹᠯᠦᠢᠳᠢᠵᠠᠢᠳ ᠪᠡᠳ ᠪᠣᠷᠢᠯᠡᠷ ᠦᠨᠢᠲ ᠨᠢ 2009 ᠣᠨ ᠳᠤ ᠦᠷᠡ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ. ᠡᠨᠡ ᠦᠨᠢᠲ ᠨᠢ ᠪᠡᠬ ᠫᠷᠡᠰᠰᠦᠷᠢ ᠬᠠᠯᠤᠨ ᠤᠨ ᠦᠨᠢᠲ ᠪᠣᠯᠤᠨ ᠬᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠬᠠᠯᠤᠨ ᠤᠨ ᠨᠢᠭᠤᠷ ᠤᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤ ᠪᠠᠷᠢᠭᠤᠯᠤᠭᠰᠠᠨ.",
        "paragraph3": "ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠮᠡᠢ ᠨᠢ ᠭᠡᠳᠡᠰᠦ ᠴᠢᠮᠡᠭ ᠤᠨ ᠮᠡᠢ ᠪᠣᠯᠣᠨ ᠮᠡᠢ ᠬᠣᠣᠰᠣᠨ ᠤᠨ ᠬᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠨ ᠳᠣᠩᠰᠢᠩ ᠤᠨ ᠡᠮᠦᠨ ᠤ ᠮᠢᠨ᠎ᠡ ᠶᠢᠨ ᠬᠦᠷᠢᠶᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ, ᠡᠨᠡ ᠨᠢ ᠨᠢᠭᠤᠷ ᠤᠨ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠬᠡᠮᠵᠢᠨ᠎ᠡ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ. 2008 ᠣᠨ ᠳᠤ ᠮᠡᠩᠰᠢ ᠰᠡᠮᠡᠨᠲ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠬᠠᠮᠢᠳ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ᠎ᠠᠴᠢ ᠬᠣᠭᠣᠯᠢᠶᠢᠨ 600,000 ᠲᠣᠨ ᠤᠨ ᠰᠡᠮᠡᠨᠲ ᠲᠠᠷᠠᠭᠤᠯᠤᠨ ᠰᠢᠯᠬᠢᠬᠦ ᠲᠥᠯᠥᠪ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ. ᠡᠯᠡᠬᠲᠷᠣ ᠰᠢᠯᠠᠩ ᠤᠨ ᠬᠠᠷᠠᠨ ᠨᠢ ᠰᠡᠮᠡᠨᠲ ᠤᠨ ᠦᠷᠡ ᠶᠢᠨ ᠮᠠᠲᠧᠷᠢᠶᠠᠯ ᠪᠣᠯᠤᠨ ᠬᠡᠷᠡᠭᠯᠡᠭᠳᠡᠭᠰᠡᠨ, ᠬᠠᠷᠠᠨ ᠤᠨ ᠳᠠᠬᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ. 30 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠣᠷᠣᠮᠵᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ 7,500 ᠲᠣᠨ ᠤᠨ ᠡᠳᠦᠷ ᠤᠨ ᠬᠤᠷᠢᠶᠡᠨ ᠴᠢᠰᠤ ᠴᠢᠩᠭᠢᠬᠦ ᠰᠢᠯᠬᠢᠬᠦ ᠰᠢᠰᠲᠧᠮ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ, ᠪᠦᠬᠦ ᠬᠤᠷᠢᠶᠡᠨ ᠳᠠᠬᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ, ᠪᠣᠯᠣᠨ ᠤᠰᠤᠨ ᠤ ᠨᠢᠭᠤᠷ ᠤᠨ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠪᠣᠯᠣᠨ ᠲᠥᠪᠰᠢᠷᠦᠯ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ. ᠪᠠᠶᠢᠭᠤᠯᠤᠨ ᠤ ᠬᠤᠷᠢᠶᠡᠨ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠰᠢᠰᠲᠧᠮ ᠤᠨ ᠰᠢᠯᠬᠢᠬᠦ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠪᠣᠯᠣᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯ ᠬᠦᠴᠦᠨ ᠴᠠᠮᠴᠤ ᠪᠠᠲᠤᠯᠠᠬᠤ ᠲᠥᠯᠥᠥ 50 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠣᠷᠣᠮᠵᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠷᠢᠭᠤᠯᠤᠨ ᠭᠤᠷᠪᠤᠨ ᠲᠠᠯᠠᠶᠢᠨ ᠡᠯᠡᠬᠲᠷᠣᠰᠲᠠᠲᠢᠺ ᠫᠷᠡᠰᠢᠫᠢᠲᠠᠲᠣᠷ, ᠬᠣᠣᠰᠣᠨ ᠴᠢᠩᠭᠢᠬᠦ ᠬᠦᠴᠦᠨ ᠴᠠᠮᠴᠤ 99.5% ᠶᠢᠨ ᠳᠡᠭᠡᠳᠦ. 2014 ᠣᠨ ᠳᠤ ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ 60 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠣᠷᠣᠮᠵᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠷᠢᠭᠤᠯᠤᠨ ᠰᠢᠨ᠎ᠡ ᠰᠢᠯᠬᠢᠬᠦ ᠳᠡᠰᠤᠯᠹᠤᠷᠢᠵᠠᠴᠢ ᠶᠢᠨ ᠫᠷᠣᠰᠡᠰᠰ ᠤᠨ ᠰᠢᠯᠬᠢᠬᠦ ᠰᠢᠰᠲᠧᠮ, ᠪᠣᠯᠣᠨ ᠬᠤᠪᠢᠷᠠᠯᠲᠠᠢ᠎ᠠᠴᠢ ᠳᠡᠰᠤᠯᠹᠤᠷᠢᠵᠠᠴᠢ, ᠳᠡᠨᠢᠲᠷᠢᠹᠢᠺᠠᠴᠢ ᠪᠣᠯᠣᠨ ᠬᠣᠣᠰᠣᠨ ᠴᠢᠩᠭᠢᠬᠦ ᠭᠤᠷᠪᠤᠨ ᠬᠡᠮᠵᠢᠷ ᠤᠨ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ. 2017 ᠣᠨ ᠳᠤ ᠳᠠᠬᠢᠨ 12 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠣᠷᠣᠮᠵᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠷᠢᠭᠤᠯᠤᠨ ᠰᠢᠨ᠎ᠡ ᠬᠦᠳᠦᠷ ᠤᠨ ᠮᠡᠢ ᠲᠥᠮᠥᠷᠯᠡᠬᠦ ᠰᠢᠰᠲᠧᠮ ᠪᠣᠯᠣᠨ ᠡᠬᠢᠨ ᠤ ᠮᠡᠢ ᠬᠠᠳᠠᠭᠠᠯᠠᠬᠤ ᠲᠣᠷᠣᠨ ᠰᠡᠷᠭᠢᠭᠦᠯᠬᠦ ᠲᠥᠯᠥᠪ ᠪᠠᠷᠢᠭᠤᠯᠤᠭᠰᠠᠨ. ᠮᠡᠢ ᠲᠥᠮᠥᠷᠯᠡᠬᠦ ᠰᠢᠰᠲᠧᠮ ᠤᠨ ᠠ"
      }
    },
    "card4": {
      "title": "ᠵᠤᠩᠭᠠᠷ ᠳᠠᠯᠤ 2×300MW ᠴᠤᠯᠤᠮ ᠶᠢᠨ ᠶᠠᠯᠬᠤᠨ ᠲᠥᠮᠥᠷ ᠦᠢᠯᠡᠳᠪᠦᠷᠢ"
    },
    "heating": {
      "title": "ᠬᠠᠯᠠᠭᠤᠨ ᠬᠡᠷᠡᠭᠰᠡᠯ",
      "description": "ᠮᠡᠩᠲᠠᠢ ᠬᠠᠯᠠᠭᠤᠨ ᠬᠤᠪᠢᠷᠲᠤ ᠣᠳᠣ ᠬᠠᠯᠠᠭᠤᠨ ᠴᠢᠯᠢᠭᠤᠨ 20 ᠰᠠᠶᠢ ᠬᠤᠪᠢ ᠮᠡᠲᠷ ᠲᠠᠢ ᠪᠣᠯᠤᠨ ᠣᠷᠳᠣᠰ ᠬᠣᠲᠣ ᠶᠢᠨ ᠬᠠᠮᠤᠭ ᠢᠬᠡ ᠲᠣᠭᠲᠠᠭᠤᠯᠤᠭᠴᠢ ᠬᠠᠯᠠᠭᠤᠨ ᠬᠤᠪᠢᠷᠲᠤ ᠦ᠋ᠢ ᠨᠢᠭᠡ ᠪᠣᠯᠤᠨ᠃ ᠬᠤᠪᠢᠷᠲᠤ 174 ᠬᠠᠯᠠᠭᠤᠨ ᠰᠢᠯᠵᠢᠭᠦᠯᠬᠦ ᠰᠢᠯᠤᠭᠤᠨ ᠲᠠᠢ ᠪᠣᠯᠤᠨ ᠡᠬᠢᠨ ᠴᠢᠯᠢᠨ ᠬᠠᠯᠠᠭᠤᠨ ᠬᠥᠮᠦᠰ ᠶᠢᠨ ᠤᠷᠲᠤ 238 ᠬᠢᠯᠣᠮᠡᠲᠷ ᠲᠠᠢ᠃",
      "serviceRegulations": {
        "title": "ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠳᠦᠷᠢᠮ",
        "items": {
          "onSiteService": "ᠬᠠᠯᠠᠭᠤᠨ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠳᠦᠷᠢᠮ",
          "businessHandling": "ᠬᠠᠯᠠᠭᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠬᠡᠷᠡᠭᠰᠡᠯ",
          "regulations": "ᠬᠠᠯᠠᠭᠤᠨ ᠳᠦᠷᠢᠮ",
          "userTips": "ᠬᠡᠷᠡᠭᠯᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠠᠯᠠᠭᠤᠨ ᠵᠥᠪᠯᠡᠯ"
        }
      },
      "items": {
        "concept": {
          "title": "ᠬᠠᠯᠠᠭᠤᠨ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠣᠶᠢᠭᠤ",
          "description": "ᠬᠡᠷᠪᠡ ᠮᠢᠨᠤ ᠠᠰᠤᠳᠠᠯ ᠪᠣᠯᠪᠠᠰᠤ ᠪᠢᠳᠡ ᠪᠦᠬᠦ ᠬᠦᠴᠦᠨ ᠦ᠋ᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠴᠢᠳᠠᠬᠤ ᠶᠢ ᠬᠦᠰᠡᠨ᠎ᠦ᠃ ᠬᠡᠷᠪᠡ ᠮᠢᠨᠤ ᠠᠰᠤᠳᠠᠯ ᠪᠣᠯᠪᠠᠰᠤ ᠪᠢᠳᠡ ᠲᠤᠰᠠᠯᠠᠬᠤ ᠶᠢ ᠬᠦᠰᠡಸᠴᠢᠭᠡᠨ᠎ᠦ᠃"
        },
        "serviceArea": {
          "title": "ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠬᠦᠷᠡᠯ",
          "description": "ᠬᠣᠯᠪᠣᠭᠠᠨ ᠶᠢᠨ ᠮᠡᠳᠡᠯᠡᠯ ᠪᠣᠯᠤᠨ ᠲᠣᠭᠲᠠᠭᠤᠯᠤᠭᠴᠢ ᠰᠢᠯᠤᠭᠤᠨ ᠦ᠋ᠢ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠬᠦᠷᠡᠯ"
        },
        "hotline": {
          "title": "ᠬᠡᠷᠡᠭᠰᠡᠯ ᠶᠢᠨ ᠬᠣᠯᠪᠣᠭᠠ",
          "description": "4000477996"
        }
      }
    }
  },
  "husbandry": {
    "title": "ᠣᠷᠣᠨ ᠤᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ",
    "intro": {
      "paragraph1": "‘ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ’ ᠶᠢᠨ ᠬᠡᠷᠡᠭ ᠤᠨ ᠬᠥᠳᠡᠯᠮᠦᠷᠢ ᠳᠤ ᠭᠦᠨᠵᠢᠭᠦᠷᠢ ᠣᠷᠣᠯᠴᠠᠵᠤ᠂ ᠨᠣᠭᠣᠭᠠᠨ᠂ ᠡᠨᠳᠡᠬᠦ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠤ ᠦᠵᠡᠯ ᠦᠳ ᠦᠨ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠣᠷᠣᠨ ᠤᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠂ ‘ᠨᠣᠭᠣᠭᠠᠨ ᠲᠠᠷᠢᠶᠠᠯᠲᠠ-ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠮᠠᠯ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ-ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ-ᠣᠷᠣᠨ ᠤᠨ ᠰᠣᠶᠤᠯ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ’ ᠤᠨ ᠭᠣᠯ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤᠨ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ‘ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠨ’ ᠤᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠤ ᠲᠤᠰᠬᠠᠯ ᠤᠨ ᠦᠵᠡᠯ ᠦᠳ ᠦᠨ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠂ ᠶᠠᠭᠤᠮᠠᠨ ᠤ ᠬᠥᠮᠦᠰ ᠤᠨ ᠤᠷᠤᠭ ᠤᠷᠤᠭ ᠪᠣᠯᠣᠨ ᠲᠤᠰᠬᠠᠯ ᠤᠨ ᠮᠡᠬᠠᠨᠢᠵᠮ ᠤᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠯ ᠦᠳ ᠦᠨ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠂ ‘ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ’ ᠶᠢᠨ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠬᠥᠭᠵᠢᠯ ᠤᠨ ᠬᠡᠯᠡᠪᠡᠷ ᠤᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠨᠣᠭᠣᠭᠠᠨ ᠳᠡᠭᠡᠳᠦ᠂ ᠴᠢᠮᠡᠭᠯᠡᠯᠲᠡᠶᠢᠨ᠂ ᠪᠷᠧᠨᠳ ᠤᠨ ᠡᠮᠦᠨᠡᠬᠢ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢᠨ ᠬᠥᠳᠡᠯᠮᠦᠷᠢ ᠶᠢ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ᠪᠠᠶᠢᠨ ᠪᠣᠯᠣᠬᠤ ᠶᠢᠨ ᠵᠠᠮ ᠤᠨ ᠬᠥᠳᠡᠯᠮᠦᠷᠢ ᠶᠢ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠃",
      "paragraph2": "ᠭᠠᠵᠠᠷ ᠤᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ᠂ ᠲᠥᠰᠯ ᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠭᠠᠯᠵᠢ᠂ ᠣᠷᠣᠨ ᠤᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ ᠴᠢᠭᠤᠯᠭᠠᠨ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠂ ‘ᠬᠣᠶᠢᠮᠠᠳ ᠤᠨ ᠬᠣᠷᠢ’ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠬᠥᠳᠥᠯᠮᠦᠷᠢ ᠶᠢ ᠬᠠᠩᠭᠠᠬᠤ᠂ ᠪᠣᠯᠣᠨ ᠬᠥᠳᠥᠯᠮᠦᠷᠢ ᠶᠢᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠭᠡᠷ ᠦᠨ ᠬᠣᠶᠢᠮᠠᠳ ᠪᠣᠯᠣᠨ ᠪᠢᠵᠢᠨᠧᠰ ᠤᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠬᠥᠳᠥᠯᠮᠦᠷᠢ ᠶᠢ ᠬᠠᠩᠭᠠᠬᠤ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠤ᠃"
    },
    "sections": {
      "farming": {
        "title": "ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ",
        "description": "ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠮᠠᠰᠢᠨᠲᠤ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤᠨ ᠦᠯᠭᠡᠷ ᠤᠨ ᠳᠤᠭᠠᠷ ᠪᠣᠯᠣᠨ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤᠨ ᠳᠠᠪᠬᠤᠷᠢ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠨᠣᠭᠣᠭᠠᠨ ᠳᠡᠭᠡᠳᠦ ᠦᠵᠡᠯ ᠦᠳ ᠦᠨ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠬᠠᠷᠠ ᠢᠯᠵᠡᠭᠡᠨ᠂ ᠦᠬᠡᠷ ᠤᠨ ᠮᠠᠯ᠂ ᠬᠣᠨᠢ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠂ ᠢᠨᠳᠡ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠡ᠂ ᠪᠠᠶᠢᠨ ᠪᠣᠯᠣᠬᠤ ᠶᠢᠨ ᠵᠠᠮ ᠤᠨ ᠬᠥᠳᠥᠯᠮᠦᠷᠢ ᠶᠢ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠃",
        "alt": "ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ"
      },
      "planting": {
        "title": "ᠨᠣᠭᠣᠭᠠᠨ ᠲᠠᠷᠢᠶᠠᠯᠲᠠ",
        "description": "ᠨᠣᠭᠣᠭᠠᠨ ᠳᠡᠭᠡᠳᠦ ᠪᠷᠧᠨᠳ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠂ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠨᠣᠭᠣᠭᠠᠨ ᠲᠠᠷᠢᠶᠠᠯᠲᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ ᠶᠢᠨ ᠨᠢᠭᠤᠷᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠪᠷᠧᠨᠳ ᠤᠨ ᠡᠮᠦᠨᠡᠬᠢ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠂ ᠪᠷᠧᠨᠳ ᠤᠨ ᠡᠮᠦᠨᠡᠬᠢ ᠣᠷᠣᠯᠣᠭ᠎ᠠ ᠶᠢ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠃",
        "alt": "ᠨᠣᠭᠣᠭᠠᠨ ᠲᠠᠷᠢᠶᠠᠯᠲᠠ"
      },
      "processing": {
        "title": "ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠭᠦᠨᠵᠢᠭᠦᠷᠢ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ",
        "description": "ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠪᠷᠧᠨᠳ ᠤᠨ ᠤᠳᠢᠷᠳᠤᠯᠭ᠎ᠠ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠵᠠᠩᠭᠢ ᠶᠢᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠶᠢᠨ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠡᠮᠦᠨᠡᠬᠢ ᠡᠮᠦᠨᠡᠬᠢ ᠡᠮᠦᠨᠡᠬᠢ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢ ᠰᠠᠶᠢᠬᠠᠨ ᠬᠤᠳᠠᠯᠳᠠᠬᠤ ᠶᠢ ᠬᠠᠩᠭᠠᠬᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ ᠪᠣᠯᠣᠨ ᠪᠢᠵᠢᠨᠧᠰ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠢᠯᠦᠨ ᠢᠯᠦᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠨᠣᠭᠣᠭᠠᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠡ᠃",
        "alt": "ᠭᠦᠨᠵᠢᠭᠦᠷᠢ ᠬᠤᠳᠤᠯᠳᠤᠭ᠎ᠠ"
      },
      "tourism": {
        "title": "ᠣᠷᠣᠨ ᠤᠨ ᠰᠣᠶᠤᠯ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ",
        "description": "ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠪᠢᠵᠢᠨᠧᠰ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ ᠤᠨ ᠲᠥᠰᠯ ᠦᠳ ᠦᠨ ᠳᠡᠬᠢ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠬᠤᠪᠢᠰᠬᠤ ᠶᠢᠨ ᠤᠷᠤᠭᠤᠯᠤᠨ ᠤᠨ ᠦᠵᠡᠰᠬᠦᠯᠡᠯ᠂ ᠰᠠᠶᠢᠬᠠᠨ ᠲᠠᠮᠰᠠᠭᠤᠯᠬᠤ᠂ ᠠᠮᠠᠷᠠᠯᠲᠠ ᠪᠣᠯᠣᠨ ᠠᠮᠠᠭᠤᠯᠤᠨ᠂ ᠤᠰᠤᠨ ᠤᠨ ᠲᠣᠭᠣᠯᠣᠭ᠎ᠠ᠂ ᠡᠬᠡ ᠬᠦᠦᠬᠡᠳ ᠦᠨ ᠲᠤᠷᠢᠵᠤᠮ᠂ ᠲᠡᠮᠠ ᠶᠢᠨ ᠫᠠᠷᠬ ᠤᠨ ᠤᠵᠡᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠰᠠᠶᠢᠬᠠᠨ ᠦᠵᠡᠰᠬᠦᠯᠡᠯ ᠦᠨ ᠳᠣᠲᠣᠭᠠᠳᠤ ᠮᠤᠯᠲᠢᠮᠧᠳᠢᠶ᠎ᠠ ᠶᠢᠨ ᠲᠥᠰᠯ ᠦᠳ ᠦᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠣᠶᠤᠯ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ ᠶᠢᠨ ᠮᠥᠷᠳᠡᠯᠡᠵᠦ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢᠳ ᠦ ᠭᠡᠷ ᠦᠨ ᠲᠤᠷᠢᠵᠤᠮ ᠪᠣᠯᠣᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠣᠶᠢᠮᠠᠳ ᠤᠨ ᠳᠤᠰᠬᠠᠯ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠃",
        "alt": "ᠰᠣᠶᠤᠯ ᠤᠨ ᠲᠤᠷᠢᠵᠤᠮ"
      }
    }
  },
  "logistics": {
    "title": "ᠣᠷᠣᠨ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠪᠣᠭᠤᠷᠤᠯ ᠪᠣᠯᠣᠯᠰᠤᠷᠤᠯ",
    "intro": "ᠮᠡᠩᠲᠠᠢ ᠭᠷᠤᠫᠫ ᠨᠢ ᠥᠪᠡᠷᠢᠶᠡᠨ ᠤ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ ᠰᠢᠯᠵᠢᠯᠲᠡ ᠪᠣᠯᠭᠠᠬᠤ ᠪᠣᠭᠤᠷᠤᠯ ᠪᠣᠯᠣᠨ ᠬᠢᠳᠬᠢᠯᠡᠶᠢᠨ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠰᠢᠰᠲᠡᠮ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ ᠰᠢᠯᠵᠢᠯᠲᠡ ᠪᠠᠶᠢᠵᠤ᠂ ᠵᠠᠩᠭᠢᠨ ᠤ ᠬᠠᠷᠢᠴᠠᠭᠠᠯᠵᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ ᠰᠢᠯᠵᠢᠯᠲᠡᠪᠡ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠪᠡᠶᠢᠵᠢᠩ ᠤᠨ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠪᠣᠯᠣᠨ ᠢᠨᠲᠧᠷᠨᠧᠲ ᠤᠨ ᠲᠧᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠂ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠪᠣᠯᠣᠨ ᠳᠣᠲᠣᠭᠠᠳᠤ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠪᠣᠯᠣᠨ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢ ᠶᠡᠷᠦᠨᠬᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠃ ᠬᠤᠮᠤᠨ ᠤ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠪᠣᠯᠣᠨ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠤᠷᠢᠨ ᠬᠡᠯᠡᠪᠡᠷ ᠤᠨ ᠬᠥᠭᠵᠢᠯ ᠤᠨ ᠲᠣᠮᠣ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ᠂ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠶᠡᠷᠦᠨᠬᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠢ-ᠬᠣᠮᠮᠧᠷᠰ ᠤᠨ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠪᠢᠵᠢᠨᠧᠰ ᠤᠨ ᠬᠥᠭᠵᠢᠯ ᠤᠨ ᠣᠷᠣᠨ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠢᠨᠲᠧᠷᠨᠧᠲ ᠦᠨ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠣᠨ ᠠᠵᠢᠯᠯᠠᠬᠤ᠃ ᠢᠷᠡᠭᠦᠯ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠬᠦᠴᠦᠨ ᠲᠥᠮᠥᠷᠯᠡᠵᠦ᠂ ᠡᠮᠦᠨᠡᠬᠢ ᠣᠷᠣᠨ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠪᠣᠯᠣᠨ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠪᠡ᠃",
    "energy": {
      "title": "ᠡᠨᠧᠷᠭᠢ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ",
      "desc": "ᠭᠷᠤᠫᠫ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠡᠮᠦᠨᠡᠬᠢ ᠬᠥᠭᠵᠢᠯ ᠤᠨ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠪᠣᠯᠣᠨ ᠡᠨᠧᠷᠭᠢ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠶᠡᠷᠦᠨᠬᠢᠯᠡᠵᠦ᠂ ᠬᠥᠮᠦᠷᠰᠦ᠂ ᠠᠯᠦᠮᠢᠨ ᠤᠨ ᠣᠬᠰᠢᠳ᠂ ᠪᠣᠬᠰᠢᠲ᠂ ᠲᠡᠮᠦᠷ ᠤᠨ ᠬᠤᠳᠤᠯᠲᠠ᠂ ᠠᠯᠦᠮᠢᠨ ᠤᠨ ᠢᠩᠭᠣᠲ᠂ ᠠᠯᠦᠮᠢᠨ ᠤᠨ ᠬᠤᠪᠢ ᠬᠥᠮᠦᠷᠴᠡ᠂ ᠪᠠᠶᠤᠨ ᠤᠨ ᠬᠢᠮᠢ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠶᠡᠷᠦᠨᠬᠢᠯᠡᠵᠦ᠃ ᠳᠣᠲᠣᠭᠠᠳᠤ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠶᠡᠷᠦᠨᠬᠢᠯᠡᠵᠦ᠂ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠡᠮᠦᠨᠡᠬᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ ᠪᠣᠯᠣᠨ ᠬᠠᠶᠨᠠᠨ ᠤᠨ ᠴᠢᠯᠢᠭᠦᠲᠦ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠲᠣᠣᠷᠢ᠂ ᠬᠣᠩ ᠬᠣᠩ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠣᠷᠣᠨ ᠳᠤ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠂ ᠲᠣᠭᠲᠠᠨᠤᠭᠰᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠢᠳᠬᠢᠯᠡᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠪᠣᠯᠣᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠰᠢᠶᠠᠩᠬᠠᠶ ᠤᠨ ᠴᠢᠯᠢᠭᠦᠲᠦ ᠲᠣᠣᠷᠢ ᠳᠤ ᠰᠠᠨᠢᠶᠤᠨ ᠯᠢᠵᠢᠩ ᠤᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠂ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠠᠨᠢᠶᠤᠨ ᠤᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠤ᠃"
    },
    "material": {
      "title": "ᠮᠠᠲᠧᠷᠢᠶᠠᠯ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ",
      "desc": "ᠮᠠᠲᠧᠷᠢᠶᠠᠯ ᠪᠣᠯᠣᠨ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠨᠢ ᠭᠷᠤᠫᠫ ᠤᠨ ᠬᠢᠳᠬᠢᠯ ᠤᠨ ᠪᠣᠯᠣᠨ ᠠᠵᠢᠯᠯᠠᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠯᠲᠡ ᠶᠢ ᠬᠠᠩᠭᠠᠬᠤ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ᠂ ᠲᠣᠮᠣ ᠬᠤᠮᠤᠨ ᠤ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠳᠠᠪᠬᠤᠷ ᠤᠨ ᠳᠠᠪᠤᠷᠢ ᠶᠢ ᠪᠦᠷᠦᠨ ᠠᠰᠢᠭᠯᠠᠵᠤ᠂ ᠮᠠᠲᠧᠷᠢᠷᠢᠶᠠᠯ ᠪᠣᠯᠣᠨ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠬᠥᠭᠵᠢᠭᠦᠯᠬᠦ᠃ ᠢᠨᠲᠧᠷᠨᠧᠲ ᠤᠨ ᠢ-ᠬᠣᠮᠮᠧᠷᠰ ᠤᠨ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠤᠨ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ᠂ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠬᠤᠳᠠᠯᠳᠠᠭᠠᠳᠤ ᠣᠷᠣᠭᠤᠯᠤᠭᠰᠠᠨ ᠮᠠᠲᠧᠷᠢᠷᠢᠶᠠᠯ ᠤᠨ ᠪᠦᠬᠦ ᠬᠡᠷᠡᠭᠰᠡᠯ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ᠂ ᠪᠣᠯᠣᠨ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠤᠨ ᠠᠵᠢᠯᠯᠠᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠰᠢᠯᠵᠢᠯᠲᠡ ᠶᠢ ᠠᠰᠢᠭᠯᠠᠵᠤ᠂ ᠳᠣᠲᠣᠭᠠᠳᠤ ᠪᠣᠯᠣᠨ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠤᠨ ᠴᠢᠯᠡᠬᠦ ᠢᠴᠢᠬᠡᠮᠵᠢ ᠶᠢᠨ ᠳᠤᠭᠠᠷ ᠴᠢᠭᠤᠯᠭᠠᠨ ᠤᠨ ᠮᠠᠲᠧᠷᠢᠷᠢᠶᠠᠯ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠠᠭᠠ ᠶᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠃ ᠡᠮᠦᠨᠡᠬᠢ ᠡᠮᠦᠨᠡᠬᠢ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠢ-ᠬᠣᠮᠮᠧᠷᠰ ᠤᠨ ᠫᠯᠠᠲᠹᠣᠷᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠃"
    },
    "logisticsSystem": {
      "title": "ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠰᠢᠰᠲᠡᠮ",
      "desc": "ᠤᠬᠠᠭᠠᠨ ᠤ ᠪᠣᠭᠤᠷᠤᠯ ᠪᠣᠯᠣᠨ ᠲᠥᠮᠥᠷ ᠤᠨ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠮᠠᠰᠢᠨᠲᠤ᠂ ᠣᠳᠣ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠬᠥᠪᠡᠷᠢᠯᠡᠯ ᠤᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠰᠢᠨ᠎ᠡ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠃ ᠲᠥᠮᠥᠷ ᠤᠨ ᠵᠠᠮ᠂ ᠨᠢᠭᠤᠷ ᠤᠨ ᠵᠠᠮ᠂ ᠳᠡᠯᠭᠡᠷᠡᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠶᠢᠨ ᠳᠠᠮᠵᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ᠂ ᠠᠭᠤᠯᠠᠬᠤ ᠪᠣᠯᠣᠨ ᠲᠥᠬᠥᠷᠥᠮᠵᠢ ᠶᠢᠨ ᠬᠤᠷᠢᠶᠠᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠴᠢᠮᠡᠭᠯᠡᠯ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠂ ᠪᠣᠯᠣᠨ ᠰᠢᠨ᠎ᠡ ᠪᠢᠵᠢᠨᠧᠰ ᠤᠨ ᠬᠡᠯᠡᠪᠡᠷ ᠤᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠡ᠃ ᠣᠳᠣ ᠪᠢᠳᠡ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠥᠳᠡᠯᠮᠦᠷᠢ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠲᠡᠰᠲᠢᠯᠡᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠣᠶᠢᠮᠠᠳ ᠤᠨ ᠮᠠᠶᠢᠯ ᠤᠨ ᠠᠰᠤᠭᠤᠯᠲᠠ ᠶᠢ ᠪᠦᠷᠦᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠲᠡᠰᠲᠢᠯᠡᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠣᠶᠢᠮᠠᠳ ᠤᠨ ᠮᠠᠶᠢᠯ ᠤᠨ ᠠᠰᠤᠭᠤᠯᠲᠠ ᠶᠢ ᠪᠦᠷᠦᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠤᠷᠢᠴᠡᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠬᠥᠭᠵᠢᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠲᠡᠰᠲᠢᠯᠡᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠠᠶᠢᠯᠠᠵᠤ᠂ ᠪᠣᠭᠤᠷᠤᠯ ᠤᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠣᠶᠢᠮᠠᠳ ᠤᠨ ᠮᠠᠶᠢᠯ ᠤᠨ ᠠᠰᠤᠭᠤᠯᠲᠠ ᠶᠢ ᠪᠦᠷᠦᠨ."
    }
  },
  "technologyMonte": {
    "title": "ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠮᠣᠩᠲᠡ",
    "intro1": "ᠪᠠᠶᠢᠨ ᠬᠣᠲᠠ ᠨᠠᠮ ᠲᠡᠭᠦᠨ ᠬᠡᠯᠲᠡ ᠲᠡᠮᠦᠷᠲᠡᠨ ᠠᠷᠠᠯᠲᠠᠯᠠᠬᠤ ᠳᠠᠪᠠᠷᠠᠨ ᠳᠡᠯᠡᠭᠡᠷ ᠪᠤᠷᠤᠬᠤ ᠬᠣᠲᠠ ᠳᠡᠭᠡᠷᠢᠳᠡᠭᠦᠷᠡᠨ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠪᠠᠷᠢᠭ᠎ᠠ ᠲᠤᠰᠤ ᠪᠠᠷᠠᠨ ᠬᠡᠷᠡᠨ ᠪᠠᠯᠠᠬᠤ ᠬᠣᠲᠠ ᠪᠠᠷᠢᠭ᠎ᠠ ᠪᠤᠷᠤᠬᠤ ᠨᠡᠷ᠎ᠡ ᠡᠷᠲᠡᠯᠲᠡᠭᠰᠡᠨ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠪᠠᠷᠢᠭ᠎ᠠ ᠳ᠋ᠦᠭᠦᠷᠡᠨ ᠨᠠᠮᠠᠳ ᠪᠠᠷᠢᠭ᠎ᠠ ᠠᠷᠠᠳᠠᠭᠠᠷᠢᠳᠡᠭᠰᠡᠨ ᠬᠣᠲᠠ ᠤᠷᠢᠯᠡᠯᠲᠡᠭᠡᠷ ᠠᠷᠠᠯᠲᠠᠯᠠᠬᠤ ᠳᠠᠪᠠᠷᠠᠨ ᠳᠡᠯᠡᠭᠡᠷ ᠳ᠋ᠦᠷᠢᠮ᠎ᠡ ᠪᠠᠷᠢᠭ᠎ᠠ ᠵᠠᠢᠯᠠᠬᠤ.",
    "intro2": "ᠪᠠᠶᠢᠨ ᠬᠣᠲᠠ ᠨᠠᠮ ᠵᠢᠷᠣᠭᠣᠯᠲᠠ ᠤᠷᠠᠨ ᠤᠷᠠᠳᠠᠪᠠᠨ ᠤᠯᠤᠰᠢ ᠵᠠᠢᠯᠠᠬᠤ ᠵᠠᠢ ᠤᠷᠤᠬᠤ ᠨᠠᠮ ᠠᠷᠢᠬᠠᠯ ᠬᠠᠢᠢᠷᠠᠨ ᠳᠠᠢ ᠪᠣᠯᠲᠤ ᠪᠠᠷᠠᠭᠤᠯᠲᠠᠬᠤ ᠪᠠᠷᠢᠭ᠎ᠠ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠮᠠᠷᠢᠭ᠎ᠠ ᠬᠡᠷᠡᠯᠡᠯᠡᠭᠴᠡ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡᠷ ᠪᠠᠷᠢᠭ᠎ᠠ ᠲᠡᠭᠦᠨ ᠲᠡᠭᠡᠷᠢᠮᠡᠨ ᠪᠠᠯᠠᠬᠤ ᠲᠡᠭᠦᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠬᠤᠮᠳᠤᠬᠡ ᠳᠠᠪᠠᠷᠠᠨ ᠠᠷᠠᠳᠠᠭᠠᠷᠢᠳᠡᠭᠰᠡᠨ ᠬᠣᠲᠠ ᠲᠠᠢᠮ᠎ᠡ ᠡᠷᠬᠡᠯᠡᠭᠯᠡᠳᠡᠭᠰᠡᠨ ᠲᠡᠭᠦᠨ ᠲᠡᠭᠡᠷᠢᠮᠡᠨ ᠲᠡᠭᠦᠨ ᠵᠠᠢᠯᠠᠬᠤ ᠪᠠᠷᠢᠭ᠎ᠠ ᠪᠠᠴᠠᠷ᠎ᠡ ᠳᠠᠪᠠᠷᠠᠨ ᠲᠡᠭᠡᠷᠢᠮᠡᠨ ᠮᠡᠨᠳᠡᠯ ᠴᠡᠭᠡᠳᠡ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡᠷ ᠪᠠᠷᠢᠭ᠎ᠠ ᠤᠯᠤᠰᠢᠬᠡᠯᠲᠡᠷ ᠡᠷᠡᠳᠡᠬᠡᠯᠲᠡᠷ᠎ᠡ ᠨᠢᠭᠤ ᠬᠣᠲᠠ ᠳᠠᠪᠠᠷᠠᠨ ᠠᠷᠠᠳᠠᠭᠠᠷᠢᠳᠡᠭᠰᠡᠨ ᠰᠡᠬᠦᠨ.",
    "sections": [
      {
        "title": "ᠨᠡᠷ᠎ᠡ ᠠᠷᠠᠳᠠᠭ ᠬᠤᠷᠢᠮᠡᠨ ᠪᠠᠷᠢᠭ᠎ᠠ",
        "description": "ᠪᠠᠶᠢᠨ ᠬᠣᠲᠠ ᠨᠠᠮ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠳᠠᠪᠠᠷᠠᠨ ᠬᠣᠲᠠ ᠲᠠᠪᠤᠷᠢᠭᠰᠡᠨ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠣᠲᠠ ᠪᠠᠷᠢᠭ᠎ᠠ ᠬᠤᠯᠤᠰᠤᠷ ᠲᠡᠭᠦᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠪᠤᠷᠤᠬᠤ ᠬᠡᠷᠡᠨ ᠵᠠᠢᠯᠠᠬᠤ ᠰᠠᠯᠳᠤ ᠪᠠᠯᠠᠬᠤ ᠬᠣᠲᠠ ᠨᠡᠷ᠎ᠡ ᠰᠡᠷ᠎ᠡ ᠲᠡᠭᠦᠨ ᠨᠢᠭᠤᠷᠢᠳ ᠬᠡᠷᠡᠨ ᠮᠣᠩᠭᠣᠯ ᠰᠢᠯᠢᠬᠤᠨ ᠬᠣᠲᠠ᠃ ᠪᠠᠢᠨ ᠬᠣᠲᠠ ᠪᠠᠯᠠᠬᠤ ᠬᠣᠲᠠ ᠰᠠᠯᠠᠳᠠᠷᠬᠤ ᠪᠠᠷᠢᠭ᠎ᠠ ᠡᠳᠦᠭᠡᠯᠡᠭᠰᠡᠨ ᠨᠢᠭᠤ ᠰᠠᠯᠠᠯᠲᠠᠨ ᠳᠠᠪᠠᠷᠠᠨ ᠰᠢᠯᠢᠬᠤᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠡᠷᠬᠡᠯᠡᠭᠡᠯᠲᠡᠷ ᠳᠠᠰᠠᠨ ᠲᠠᠢᠯᠠᠭᠠᠷᠬᠤ."
      },
      {
        "title": "ᠬᠡᠷᠡᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠤᠯᠤᠰᠢᠬᠡᠯᠲᠡᠷ",
        "description": "ᠪᠠᠶᠢᠨ ᠲᠡᠭᠦᠨᠬᠡᠯᠲᠡ ᠲᠠᠪᠠᠷᠠᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠪᠠᠯᠠᠬᠤ ᠪᠠᠷᠢᠭ᠎ᠠ ᠰᠡᠳᠦᠷᠢᠯᠲᠡ ᠪᠠᠷᠢᠭ᠎ᠠ ᠰᠡᠷᠬᠡᠯ ᠪᠠᠷᠢᠭ᠎ᠠ ᠲᠠᠪᠤᠷᠢᠭᠰᠡᠨ ᠰᠠᠯᠠᠭᠠᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠬᠡᠷᠡᠨ ᠠᠮᠠᠨ ᠠᠷᠠᠳᠠᠭᠠᠷᠢᠳᠡᠭᠰᠡᠨ ᠲᠠᠪᠠᠷᠠᠨ ᠬᠣᠲᠠ ᠡᠷᠬᠡᠯᠡᠭᠡᠯᠲᠡᠷ ᠪᠠᠷᠢᠭ᠎ᠠ."
      },
      {
        "title": "ᠪᠠᠷᠢᠭ᠎ᠠ ᠪᠣᠯᠲᠤ ᠨᠠᠮ ᠬᠡᠷᠡᠨ ᠪᠤᠷᠤᠬᠤ ᠪᠠᠷᠢᠭ᠎ᠠ",
        "description": "ᠪᠠᠶᠢᠨ ᠬᠣᠲᠠ ᠨᠠᠮ ᠲᠡᠭᠦᠨ ᠲᠡᠭᠡᠷᠢᠮᠡᠨ ᠳᠠᠬᠠᠢᠪᠠᠨ ᠲᠡᠭᠦᠨ ᠬᠣᠲᠠ ᠰᠢᠯᠢᠬᠤᠨ ᠲᠠᠪᠠᠷᠠᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠰᠡᠬᠡᠷᠡᠢᠯᠲᠡᠭᠰᠡᠨ ᠬᠡᠷᠡᠨ ᠮᠣᠩᠭᠣᠯ ᠰᠢᠯᠢᠬᠤᠨ ᠪᠠᠷᠢᠭ᠎ᠠ ᠵᠠᠢᠯᠠᠬᠤ᠃"
      }
    ],
    "sections[0]": {
      "title": " translate",
      "description": " translate"
    },
    "sections[1]": {
      "title": " translate",
      "description": " translate"
    },
    "sections[2]": {
      "title": " translate",
      "description": " translate"
    }
  },
  "greenMonte": {
    "heroTitle": "ᠨᠣᠭᠣᠭᠠᠨ ᠮᠤᠩᠲᠡ",
    "intro": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠰᠤ ᠪᠣᠯᠤᠨ ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ ᠨᠢ ᠠᠯᠲᠠᠨ ᠪᠣᠯᠤᠨ ᠮᠥᠩᠭᠥᠨ ᠤᠯᠤᠰ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠳᠡᠭᠡᠷ᠎ᠡ, ᠨᠣᠭᠣᠭᠠᠨ ᠬᠣᠭᠣᠯᠠᠬᠤ ᠶᠢᠨ ᠦᠵᠡᠯ ᠢ ᠪᠦᠷᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠨᠣᠭᠣᠭᠠᠨ, ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠪᠣᠯᠤᠨ ᠴᠡᠪᠡᠷ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠦᠵᠡᠯ ᠢ ᠬᠤᠷᠤᠮ ᠠᠵᠢᠯ ᠤᠨ ᠬᠠᠯᠵᠠᠭᠠᠨ ᠬᠤᠷᠤᠮ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠮᠣᠨ ᠠᠵᠢᠯ ᠤᠨ ᠬᠣᠭᠣᠯᠠᠬᠤ ᠪᠣᠯᠤᠨ ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠶᠢᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠨᠢᠭᠡᠳᠦᠯ ᠬᠦᠰᠡᠬᠦ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠬᠣᠭᠣᠯᠠᠭᠰᠠᠨ ‘ᠴᠡᠴᠡᠭ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠤᠶᠢᠳᠬᠠᠷ’ ᠪᠣᠯᠤᠨ ‘ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ’ ᠨᠢ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢᠳ ᠤᠨ ᠨᠣᠭᠣᠭᠠᠨ ᠬᠣᠭᠣᠯᠠᠬᠤ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠪᠢᠵᠢᠨᠡᠰ ᠺᠠᠷᠳ ᠪᠣᠯᠤᠨ᠎ᠠ; ᠮᠤᠩᠲᠡ ᠪᠡᠢᠵᠢᠶᠣᠤ ᠲᠡᠨᠢᠰ ᠤᠨ ᠳᠢᠶᠠᠨ ᠬᠢᠮ᠎ᠡ ᠬᠤᠷᠤᠮ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠤᠨ ᠬᠠᠯᠵᠠᠭᠠᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠬᠤᠷᠤᠮ ᠮᠡᠳᠡᠬᠦ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠬᠦᠷᠴᠡᠪᠡ; ᠮᠤᠩᠲᠡ ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠤᠶᠢᠳᠬᠠᠷ ᠤᠨ ᠨᠢᠭᠤᠴᠠ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠪᠣᠯᠤᠨ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠪᠣᠯᠤᠨ ᠡᠨᠡᠷᠭᠢ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠨᠢ ᠨᠢᠭᠡ ᠠᠵᠢᠯ ᠤᠨ ᠳᠡᠭᠡᠷ᠎ᠡ ᠲᠡᠮᠳᠡᠭᠯᠡᠬᠦ ᠲᠦᠪᠰᠢᠨ ᠬᠦᠷᠴᠡᠪᠡ; ᠮᠤᠩᠲᠡ ᠨᠠᠯᠢᠨᠰᠢᠯᠢ ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠪᠠᠢᠰ ᠨᠢ ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠡᠺᠣᠨᠣᠮᠢ ᠶᠢᠨ ᠬᠣᠶᠠᠷ ᠬᠠᠮᠤᠭᠤᠯᠤᠬᠤ ᠶᠢᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠬᠦᠷᠴᠡᠪᠡ᠃",
    "sectionTitle": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠮᠥᠷ",
    "sectionParagraph": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠶᠢᠳᠬᠠᠷ, ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ ᠤᠨ ᠲᠠᠯᠠᠪᠠᠢ, ᠨᠣᠭᠣᠭᠠᠨ ᠣᠸᠢᠰ ᠤᠨ ᠫᠠᠷᠺ, ᠨᠣᠭᠣᠭᠠᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠰᠢᠮ᠎ᠡ ᠡᠨᠳᠡ ᠤᠷᠤᠰᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ᠃",
    "cards": [
      {
        "title": "ᠣᠳᠣᠬᠢ ᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠫᠠᠷᠺ",
        "alt": "ᠣᠳᠣᠬᠢ ᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠫᠠᠷᠺ"
      },
      {
        "title": "ᠴᠡᠴᠡᠭ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠤᠶᠢᠳᠬᠠᠷ",
        "alt": "ᠴᠡᠴᠡᠭ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠤᠶᠢᠳᠬᠠᠷ"
      },
      {
        "title": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ",
        "alt": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠯᠤᠰ"
      },
      {
        "title": "ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠠᠵᠢᠯ",
        "alt": "ᠡᠺᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠠᠵᠢᠯ"
      }
    ],
    "cards[0]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[1]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[2]": {
      "alt": " translate",
      "title": " translate"
    },
    "cards[3]": {
      "alt": " translate",
      "title": " translate"
    }
  },
  "modernPark": {
    "heroTitle": "ᠭᠦᠷᠡᠨ ᠮᠣᠩᠲᠡ",
    "title": "ᠬᠡᠷᠡᠨ ᠵᠢᠯᠭᠡᠨ ᠪᠠᠶᠠᠭᠠᠯ ᠤ ᠣᠷᠤᠨ ᠬᠡᠷᠡᠨ ᠶᠢᠨ ᠵᠢᠯᠭᠡᠨ ᠬᠤᠷᠠᠭᠤ",
    "description1": "ᠮᠡᠩᠲᠠᠢ ᠠᠯᠲᠤᠮᠵᠠᠯ ᠤᠨ ᠶᠢᠨ ᠶᠢᠨ ᠬᠡᠷᠡᠨ ᠪᠠᠶᠠᠭᠠᠯ ᠤ ᠬᠡᠷᠡᠨ ᠶᠢᠨ ᠵᠢᠯᠭᠡᠨ ᠬᠤᠷᠠᠭᠤ",
    "imageAlt1": "ᠠᠯᠲᠤᠮᠵᠠᠯ ᠤ ᠪᠣᠯᠣᠮᠵ 3-2",
    "description2": "ᠮᠡᠩᠲᠠᠢ ᠪᠡᠶᠢᠵᠠᠣ ᠬᠡᠷᠡᠨ ᠶᠢᠨ ᠬᠡᠷᠡᠨ ᠪᠠᠶᠠᠭᠠᠯ ᠤ ᠬᠡᠷᠡᠨ ᠶᠢᠨ ᠵᠢᠯᠭᠡᠨ ᠬᠤᠷᠠᠭᠤ",
    "imageAlt2": "ᠠᠯᠲᠤᠮᠵᠠᠯ ᠤ ᠪᠣᠯᠣᠮᠵ 3-2"
  },
  "greenMine": {
    "heroTitle": "ᠨᠣᠭᠤᠭᠠᠨ ᠮᠣᠨᠲᠡ",
    "title": "ᠨᠣᠭᠤᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ",
    "description1": "ᠮᠣᠨᠲᠡ ᠳᠦ ᠪᠣᠳᠣᠭᠰᠠᠨ ᠨᠢ ᠨᠣᠭᠤᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ ᠵᠢᠨ ᠡᠭᠦᠷᠭᠡ ᠪᠣᠯ ᠣᠷᠣᠨ ᠡᠷᠢᠬᠢ ᠦᠨ ᠬᠦᠭᠵᠢᠯ ᠠᠷᠠᠳ ᠠᠰᠢᠭᠯᠠᠯᠲᠠ ᠶᠢ ᠪᠦᠷᠢᠮᠳᠤ ᠰᠢᠢᠳᠦᠪᠦᠷᠢᠯᠡᠨ ᠤᠷᠤᠯᠲᠠ ᠪᠠᠭᠤᠯᠠᠯ ᠤᠨ ᠣᠷᠴᠢᠨ ᠬᠡᠯᠦᠷᠴᠠᠬᠦ ᠵᠠᠯ ᠪᠠᠶᠢᠷᠢ ᠨᠢ। ᠲᠡᠷᠡ ᠦᠨ ᠠᠭᠤᠯᠭᠠ ᠨᠢ ᠨᠣᠭᠤᠭᠠᠨ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠦᠵᠦᠯ ᠰᠠᠨᠠᠭᠠ ᠶᠢ ᠨᠦᠬᠦᠷᠰ ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠪᠦᠬᠦᠨ ᠰᠡᠳᠬᠢᠯ ᠳᠦ ᠨᠡᠢᠯᠡᠳᠬᠡᠨ, ᠤᠷᠤᠯᠲᠠ ᠴᠢᠬᠤᠯᠠ ᠶᠢᠨ ᠠᠮᠢᠳᠤᠷᠠᠯ ᠪᠣᠯᠣᠨ ᠪᠠᠶᠢᠲᠠᠯ ᠦᠨ ᠪᠦᠬᠦᠨ ᠰᠠᠯᠠ ᠳᠦ ᠰᠦᠩᠭᠦᠨ ᠰᠠᠪᠰᠤᠷᠠᠭᠠ, ᠠᠵᠢᠯ ᠤᠨ ᠨᠣᠭᠤᠭᠠᠨ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠨᠡᠢᠭᠡᠳᠡᠭ ᠨᠢ ᠰᠦᠮ ᠦᠨ ᠴᠢᠨᠠᠷ ᠢ ᠰᠡᠷᠡᠪᠢᠯᠵᠢᠭᠦᠯᠦᠨ, ᠤᠷᠤᠯᠲᠠ ᠴᠢᠬᠤᠯᠠ ᠳᠠᠭᠠᠬᠢ ᠠᠮᠢᠨ ᠢ ᠲᠤᠰ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠵᠠᠮ ᠳᠦ ᠰᠢᠢᠳᠦᠪᠦᠷᠢᠯᠡᠵᠦ ᠠᠴᠢᠶᠠᠯᠠᠯ ᠪᠢ.",
    "description2": "ᠨᠣᠭᠤᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ ᠪᠠᠭᠤᠯᠠᠯ ᠤᠨ ᠦᠢᠯᠡᠴᠢᠯᠡᠯᠲᠡ ᠦᠨ ᠬᠦᠪᠢ ᠳᠤ ᠣᠷᠣᠨ ᠡᠷᠢᠬᠢ ᠶᠢᠨ ᠦᠷ ᠠᠪᠤᠮᠤᠵᠢ ᠰᠠᠯᠤᠭᠤᠯᠤᠯᠲᠠ, ᠲᠡᠭᠦᠨ ᠤ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠢᠶᠠᠷ ᠪᠠ ᠤᠬᠠᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ ᠪᠠᠭᠤᠯᠠᠯ, ᠪᠦᠷᠦᠮᠳᠤ ᠡᠷᠢᠬᠢ ᠰᠠᠯᠤᠭᠤᠯᠤᠯᠲᠠ, ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠰᠠᠷᠠᠭᠤᠨ ᠪᠠᠶᠢᠳᠠᠯ ᠪᠠ ᠰᠠᠭᠠᠵᠠᠷᠠᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ, ᠴᠢᠨᠠᠷ ᠦᠨ ᠬᠡᠮᠵᠢᠬᠦ ᠪᠠ ᠬᠠᠶᠠᠯᠲᠠ ᠬᠦᠷᠢᠬᠦ ᠲᠡᠭᠦᠨ ᠤ, ᠠᠵᠢᠯ ᠤᠨ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ ᠪᠠ ᠠᠵᠢᠯ ᠤᠨ ᠪᠡᠶᠡ ᠵᠢᠷᠤᠭ ᠤᠨ ᠪᠠᠭᠤᠯᠭᠠᠯ ᠬᠡᠷᠪᠡ। 2021 ᠤᠨ ᠡᠵᠡᠷ ᠮᠡᠨᠳᠦ ᠮᠣᠨᠺᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ ᠨᠢ ᠨᠠᠢᠢᠷᠠᠮᠳᠠᠬᠤ ᠨᠣᠭᠤᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠵᠤᠶᠢᠯ ᠳᠦ ᠦᠯᠦᠭᠦ ᠰᠣᠩᠭᠣᠭᠳᠠᠪᠠ.",
    "subTitle": "ᠨᠠᠢᠢᠷᠠᠮᠳᠠᠬᠤ ᠨᠣᠭᠤᠭᠠᠨ ᠤᠷᠤᠯᠲᠠ - ᠮᠣᠨᠺᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ",
    "list": [
      "ᠨᠦᠢᠯᠰ ᠦᠨ ᠨᠠᠨᠢᠯᠠᠭᠠ ᠶᠢᠨ ᠮᠠᠰᠢᠨ ᠤ ᠮᠠᠰᠢᠨ ᠤ ᠬᠦᠪᠢ ᠨᠢ 100%-ᠳᠦ ᠬᠦᠷᠦᠭᠰᠡᠨ, ᠬᠡᠯᠡᠴᠢᠯᠡᠯᠳᠡ ᠶᠢᠨ ᠬᠦᠪᠢ ᠨᠢ ᠨᠠᠢᠢᠷᠠᠮᠳᠠᠬᠤ ᠰᠢᠯᠪᠢ ᠶᠢ ᠳᠠᠪᠠᠨ ᠨᠡᠪᠲᠡᠷᠵᠦ, ᠶᠠᠳᠠᠭ ᠤᠨ ᠤᠬᠠᠷᠢᠳᠠ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠦᠯᠦᠭᠦ ᠨᠠᠯᠠᠮᠳᠠᠢ。ᠪᠢᠳᠡ ᠤᠯᠤᠰ ᠠᠢᠴᠢᠯᠠᠯ ᠴᠢᠩᠭᠠᠪ ᠦᠨ ᠰᠤᠳᠤᠯᠭᠠ ᠪᠠ ᠲᠡᠭᠦᠨ ᠤ ᠰᠢᠨᠵᠢᠯᠡᠬᠦ ᠢᠶᠠᠷ ᠳᠦ ᠤᠷᠤᠯᠭᠠ ᠪᠠ ᠤᠷᠤᠰᠬᠠᠯ ᠢ ᠨᠡᠮᠡᠵᠦ ᠪᠠᠶᠢᠵᠤ, ᠨᠦᠢᠯᠰ ᠤᠨ ᠡᠷᠢᠬᠢ ᠰᠠᠯᠤᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠦᠪᠢ ᠵᠢᠯ ᠵᠢᠷᠤᠭᠠᠷ ᠨᠡᠮᠡᠭᠳᠡᠵᠦ ᠪᠠᠶᠢᠨᠠ।",
      "ᠤᠷᠤᠨ ᠵᠠᠮ ᠢ ᠬᠣᠲᠠᠨ ᠤ ᠵᠠᠮ ᠤᠨ ᠰᠢᠯᠪᠢ ᠶᠢᠨ ᠠᠴᠠ ᠪᠠᠷᠢᠮᠲᠠᠯᠠᠨ ᠪᠠᠢᠢᠭᠤᠯᠤᠨ, ᠵᠠᠮ ᠤᠨ ᠬᠣᠶᠠᠷ ᠵᠡᠷᠭᠡ ᠶᠢᠨ ᠨᠣᠭᠤᠭᠠᠨ ᠪᠠᠶᠢᠳᠠᠯ ᠢ ᠪᠦᠷᠦᠮᠳᠤ ᠮᠡᠨᠳᠤ ᠵᠠᠰᠠᠪᠤᠷᠢᠯᠠᠨ, ᠤᠷᠤᠨ ᠵᠠᠮ ᠤᠨ ᠬᠠᠵᠠᠭᠤᠯᠴᠤᠳ ᠦᠢᠯᠡᠴᠢᠯᠡᠯᠲᠡ ᠬᠡᠰᠢᠭ ᠢ ᠪᠠᠭᠤᠯᠠᠨ, ᠪᠠᠭᠤᠢ ᠤᠨ ᠬᠠᠮᠳᠤᠰᠢᠮᠠᠯ, ᠨᠦᠢᠯᠰ ᠦᠨ ᠮᠠᠰᠢᠨ ᠤ ᠵᠤᠯᠤᠭᠰᠠᠨ, ᠪᠠ ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ ᠳᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠣᠯᠤᠯ ᠦᠭᠡᠶ ᠪᠣᠯᠠᠳᠠᠢ।",
      "ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠦᠢᠯᠡᠳᠦᠨ, ᠠᠮᠢᠳᠤᠷᠠᠯ ᠪᠠ ᠠᠵᠢᠯ ᠤᠨ ᠨᠠᠢᠢᠷᠠᠯ ᠨᠢ ᠠᠵᠢᠯ ᠦᠩ ᠬᠦᠷᠢᠨ ᠬᠡᠰᠢᠭ ᠦᠨ ᠠᠴᠠ ᠬᠦᠪᠰᠦ ᠦᠨ ᠰᠢᠭᠦᠳᠡᠷ ᠢ ᠵᠠᠰᠠᠬᠤ ᠪᠣᠯᠪᠠ। ᠪᠠᠷ ᠰᠠᠯᠠ ᠶᠢ ᠰᠤᠷᠪᠤᠯᠵᠢᠰᠠᠨ ᠦᠭᠡᠰ ᠦᠨ ᠺᠤᠷᠴᠤᠭᠠᠳ ᠵᠠᠮ ᠪᠠ ᠮᠣᠳᠤ ᠴᠢᠷᠠᠶᠢᠯᠠᠭᠰᠠᠨ ᠦᠯᠢᠶ ᠠᠰᠤᠷᠢᠷ ᠪᠠᠷ ᠪᠦᠰᠦ ᠴᠢᠬᠤᠯᠠ ᠨᠢ ᠦᠨᠳᠦᠷ ᠵᠢᠭᠦᠴᠢ, ᠨᠣᠭᠤᠭᠠᠨ ᠪᠠ ᠰᠠᠶᠢᠬᠠᠨ ᠡᠮᠯᠢᠯ ᠢ ᠤᠳᠤᠮᠠᠮᠦ ᠵᠤᠢᠯᠠᠯᠠᠳᠠᠢ।",
      "ᠠᠵᠢᠯ ᠢᠶᠠᠨ ᠨᠠᠢᠢᠯᠠᠪᠤᠷᠢ ᠳᠠᠭᠠᠨ ᠬᠣᠭᠯᠠ ᠲᠠᠷᠢᠯᠭᠠ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦᠲᠡᠨ ᠢ ᠪᠠᠷᠢᠵᠤ, ᠬᠤᠳᠠᠯᠳᠤᠪᠠᠷᠢ ᠪᠠ ᠮᠠᠯᠴᠢᠳ ᠢ ᠵᠣᠷᠢᠭᠯᠠᠭᠤᠯᠵᠤ, ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠣᠷᠣᠰᠴᠦ ᠭᠠᠵᠠᠷ ᠤᠨ ᠣᠷᠣᠨ ᠵᠢᠯᠬᠢᠭᠡᠨ ᠦ ᠬᠤᠳᠠᠯᠳᠠ ᠨᠢ 80%-ᠶᠢ ᠳᠠᠪᠠᠨ ᠨᠡᠪᠲᠡᠷᠵᠦ ᠣᠷᠤᠯᠪᠠ।",
      "ᠬᠣᠷᠣᠰᠴᠦ ᠭᠠᠵᠠᠷ ᠤᠨ ᠪᠦᠷᠦᠮᠳᠤ ᠰᠠᠢᠵᠢᠷᠠᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠭᠤᠳᠠᠷᠠᠨ ᠵᠢᠷᠤᠮᠰᠢ ᠶᠢᠨ ᠲᠤᠷᠰᠢᠯᠪᠤᠷᠢᠶᠠᠷ ᠠᠵᠢᠯ ᠨᠢ ᠭᠠᠵᠠᠷ ᠢ ᠰᠢᠯᠪᠢᠷᠯᠡᠵᠦ, ᠬᠣᠷᠣᠩ ᠪᠣᠯᠭᠠᠳᠠᠢ, ᠴᠢᠩᠯᠢᠭ ᠤᠨ ᠦᠩ ᠪᠠ ᠤᠰᠤ ᠶᠢ ᠬᠣᠮᠢᠶᠠᠵᠤ, ᠵᠠᠮ ᠪᠠᠷᠢᠯᠳᠤᠯᠠᠨ, ᠬᠦᠦᠯᠥᠨ ᠭᠠᠵᠠᠷ ᠢ ᠦᠨᠳᠦᠷ ᠳᠠᠯᠠᠢ ᠳᠦ ᠬᠡᠪᠵᠢᠨᠡᠨ, ᠬᠣᠷᠣᠰᠴᠦ ᠭᠠᠵᠠᠷ ᠢ ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠪᠦᠰᠡ ᠳᠦ ᠡᠷᠦᠭᠦᠯᠳᠡᠢ।",
      "ᠤᠮᠤ ᠶᠢᠨ ᠬᠤᠭᠢ ᠦᠭᠡᠦᠯ ᠤᠨ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ ᠪᠠ ᠰᠠᠯᠤᠭᠤᠯᠤᠯᠲᠠ ᠶᠢᠨ ᠳᠠᠯᠠᠷᠠ ᠨᠦᠢᠯᠰ ᠤᠷᠤᠯᠲᠠ ᠦᠨ ᠭᠣᠤᠯ ᠪᠣᠷᠣᠳᠤᠯᠭᠠ ᠶᠢᠨ ᠬᠦᠪᠢ ᠬᠡᠰᠢᠭ ᠢ ᠲᠦᠪ ᠭᠤᠷᠪᠠᠳ ᠭᠠᠷᠤᠭᠠᠷ ᠠᠵᠢᠯᠯᠠᠵᠤ, ᠪᠠᠳᠠ ᠬᠡᠰᠢᠭ ᠢ ᠵᠠᠮ ᠰᠢᠭᠦᠯᠳᠦᠯ ᠪᠠ ᠪᠠᠷᠢᠮᠲᠠ ᠳᠡᠭᠡᠳᠦ ᠰᠢᠩᠠᠷᠠᠭᠤᠯᠵᠤ, ᠡᠷᠢᠭᠡ ᠶᠢᠨ ᠤᠷᠤᠯᠲᠠ ᠳᠡᠪᠦᠷ ᠴᠢᠨᠠᠷ ᠪᠠ ᠯᠢᠪᠠᠰᠢ ᠶᠢ ᠪᠣᠷᠣᠯᠵᠣ ᠳ᠋ᠦ ᠰᠠᠷᠠᠭᠤᠯᠤᠯᠳᠠ ᠪᠣᠯᠪᠠ ᠮᠠᠰᠢᠨ ᠤ ᠵᠤᠷᠮᠠᠷᠤᠨ ᠰᠠᠷᠠᠭᠤᠯᠤᠯᠳᠠ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠴᠢᠩᠭᠠᠳᠬᠤ ᠡᠨᠡ ᠤᠯᠤᠮᠵᠢᠯᠠᠯ ᠤᠨ ᠬᠠᠲᠠᠪᠴᠢ ᠪᠠ ᠤᠷᠤᠯᠲᠠ ᠴᠢᠬᠤᠯᠠ ᠶᠢᠨ ᠠᠶᠢᠯ ᠰᠠᠭᠤᠷᠢ ᠶᠢ ᠪᠣᠯᠪᠠᠰᠣᠷᠠᠯ ᠪᠠᠷᠠᠭᠳᠠᠢ। ᠤᠷᠤᠯᠲᠠ ᠶᠢᠨ ᠦᠯᠦᠭᠦ ᠪᠣᠰᠣᠭᠠ ᠤᠰᠤ ᠢ ᠠᠷᠢᠯᠭᠠᠵᠤ ᠪᠠᠯᠭᠠᠰᠤᠨ, ᠳᠡᠷ ᠬᠡᠰᠢᠭ ᠨᠢ ᠦᠢᠯᠡᠳᠦᠨ ᠪᠠᠷᠠᠭᠤᠨ ᠡᠷ᠝ᠦᠯ ᠪᠠ ᠳᠠᠭᠰᠢᠨ ᠡᠷ᠝ᠦᠯ ᠦᠨ ᠤᠰᠤ ᠪᠣᠯᠵᠤ ᠰᠠᠯᠤᠭᠤᠯᠠᠭᠳᠠᠢ, ᠳᠡᠷ ᠬᠡᠰᠢᠭ ᠨᠢ ᠭᠠᠵᠠᠷ ᠤᠨ ᠳᠡᠪᠦᠷᠡ ᠨᠣᠭᠤᠭᠠᠨ ᠪᠠᠶᠢᠳᠠᠯ ᠦᠨ ᠤᠷᠤᠯᠭᠠ ᠤᠰᠤ ᠪᠣᠯᠵᠤ ᠰᠠᠯᠤᠭᠤᠯᠠᠭᠳᠠᠢ। ᠠᠭᠤᠷᠤᠭᠰᠠᠨ ᠤᠰᠤ ᠪᠠ ᠤᠰᠤ ᠬᠠᠩᠭᠠᠬᠤ ᠦᠢᠯᠦᠯ ᠨᠢᠷᠤᠭᠤ ᠪᠠᠷᠢᠯᠳᠤᠯᠠᠨ, ᠬᠤᠳᠠᠯᠳᠤᠪᠠᠷᠢ ᠪᠠ ᠮᠠᠯᠴᠢᠳ ᠢ ᠤᠰᠤ ᠬᠠᠩᠭᠠᠯᠲᠠ ᠢ ᠪ᠋ᠠ ᠤᠰᠤ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠪᠠᠭᠤᠯᠭᠠ ᠶᠢ ᠰᠠᠢᠢᠵᠢᠷᠠᠭᠤᠯᠵᠤ, ᠤᠷᠤᠯᠲᠠ ᠴᠢᠬᠤᠯᠠ ᠳᠠᠭᠠᠬᠢ ᠤᠰᠤ ᠬᠦᠬᠡ ᠠᠷᠠ ᠵᠠᠯᠠᠨ ᠤ ᠰᠣᠷᠢᠯ ᠢ ᠵᠢᠷᠤᠭᠰᠢᠯᠠᠨ, ᠤᠷᠤᠯᠲᠠ ᠴᠢᠬᠤᠯᠠ ᠶᠢᠨ ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠦᠨ ᠣᠷᠴᠢᠨ ᠢ ᠰᠠᠢᠢᠵᠢᠷᠠᠭᠤᠯᠵᠤ, ᠣᠯᠠᠪ ᠴᠢᠭᠠᠨ ᠰᠣᠷᠢᠯ ᠪᠠ ᠤᠰᠤ ᠡᠷᠢᠬᠢ ᠬᠠᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠰᠣᠷᠢᠯ ᠢ ᠦᠨᠡᠨ ᠬᠠ ᠳᠦ ᠰᠣᠯᠢᠯᠳᠤᠭᠠᠳᠠᠢ। ᠤᠰᠤ ᠡᠷᠢᠭᠡ ᠬᠦᠷᠢᠳᠡᠯ ᠣᠶᠢᠨ ᠴᠢᠭᠠᠯᠭᠠ ᠪᠦᠯᠦᠭ ᠢ ᠦᠨᠡᠨ ᠬᠠ ᠳᠦ ᠰᠠᠯᠤᠭᠤᠯᠠᠭᠳᠠᠢ।"
    ],
    "outro": "ᠴᠡᠴᠡᠷᠯᠢᠭ ᠳᠦ ᠵᠣᠶᠢᠯᠠᠬᠤ, ᠤᠷᠤᠯᠲᠠ ᠳᠠᠭᠠᠬᠢ ᠨᠠᠷᠠᠢ ᠠᠨᠰᠠᠳ ᠡᠷᠬᠡᠮᠯᠡᠬᠦ, ᠨᠣᠭᠤᠭᠠᠨ ᠳᠡᠯᠭᠡᠬᠦ, ᠠᠷᠠᠳ ᠢᠷᠠᠭᠡᠨ ᠢ ᠴᠤᠨᠠᠢ ᠦᠭᠡᠶ ᠪᠣᠯᠭᠠᠬᠤ",
    "imageAlt1": "ᠠᠯᠤᠮᠢᠨᠢ ᠦᠢᠯᠡᠳᠦᠭᠰᠡᠨ 3-2",
    "imageAlt2": "ᠠᠯᠤᠮᠢᠨᠢ ᠦᠢᠯᠡᠳᠦᠭᠰᠡᠨ 3-2"
  },
  "gardenFactory": {
    "heroTitle": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠮᠣᠨᠲᠡ",
    "heading": "ᠴᠡᠴᠡᠭᠲᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠷᠢᠯᠡᠯ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ",
    "description": "ᠬᠣᠲᠠ ᠶᠢᠨ ᠴᠡᠴᠡᠭᠲᠡ᠂ ᠴᠡᠴᠡᠭᠲᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠷᠢᠯᠡᠯ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ"
  },
  "ecoIndustry": {
    "heroTitle": "ᠨᠣᠭᠤᠭᠠᠨ ᠮᠣᠨᠲᠡ",
    "heading": "ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠠᠵᠢᠯ ᠦᠩ",
    "paragraph1": "ᠮᠣᠨᠺᠲᠠᠢ ᠨᠢ 'ᠬᠣᠳᠣᠭ ᠠᠢᠯ ᠤᠨ ᠰᠡᠷᠭᠦᠯᠬᠦ' ᠦᠢᠯᠡ ᠳᠦ ᠳᠤᠮᠳᠠᠳᠤ ᠬᠠᠪᠢᠰ᠌ᠠᠯᠴᠠᠵᠤ, ᠦᠩᠭᠡᠴᠡᠨ, ᠡᠷᠦᠯ ᠪᠠ ᠳᠡᠭᠡᠳᠦ ᠦᠨᠳᠦᠷ ᠦᠵᠦᠯ ᠰᠠᠨᠠᠭᠠ ᠪᠠᠷ ᠪᠠᠷᠢᠵᠤ, ᠨᠠᠯᠢᠨᠰᠢᠯᠢ ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠲᠠᠷᠢᠮᠠᠯ ᠰᠦᠯᠵᠢᠶᠡ ᠪᠠᠷ ᠪᠦᠲᠦᠭᠡᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠨ, 'ᠨᠣᠭᠤᠭᠠᠨ ᠲᠠᠷᠢᠯᠭᠠ - ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠲᠠᠷᠢᠮᠠᠯ - ᠬᠤᠳᠠᠯᠳᠠ ᠮᠠᠯᠴᠢᠨ ᠦ ᠦᠢᠯᠡᠳᠦᠪᠦᠷᠢ ᠶᠢᠨ ᠬᠦᠨᠳᠦ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ - ᠬᠣᠳᠣᠭ ᠠᠢᠯ ᠤᠨ ᠠᠶᠠᠯᠠᠯ' ᠢ ᠭᠣᠤᠯ ᠰᠦᠷ ᠪᠣᠯᠭᠠᠨ ᠳᠤᠭᠤᠶᠢᠯᠠᠩ ᠦᠷ ᠠᠪᠤᠮᠤᠵᠢ ᠪᠠ ᠤᠳᠤᠮᠠᠮᠦ ᠣᠷᠴᠢᠨ ᠦᠶᠡ ᠪᠣᠯᠣᠪᠠ ᠬᠣᠳᠣᠭ ᠠᠵᠢᠯ ᠠᠬᠢᠨ ᠮᠠᠯᠴᠢᠨ ᠠᠵᠢᠯ ᠦᠩ ᠢ ᠠᠮᠵᠢᠯᠲᠠ ᠪᠦᠲᠦᠯᠭᠡᠨ ᠪᠠᠢᠢᠭᠤᠯᠤᠨ, ᠬᠤᠳᠠᠯᠳᠤᠪᠠᠷᠢ ᠪᠠ ᠮᠠᠯᠴᠢᠳ ᠢ ᠣᠷᠣᠯᠢ ᠨᠡᠮᠡᠭᠰᠡᠨ ᠠᠶᠠᠨ ᠪᠠᠶᠠᠵᠢᠯᠠᠵᠤ ᠦᠨᠡᠨ ᠪᠠᠦᠭᠦᠯᠤᠳᠠᠢ, ᠬᠠᠮᠤᠳᠤ ᠨᠡᠢᠭᠡᠮ ᠦ ᠢᠭᠡᠯ ᠤᠷᠣᠯ ᠠᠢᠯ ᠢ ᠪᠦᠲᠦᠯᠭᠡᠳᠡᠢ।",
    "paragraph2": "ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠠᠵᠢᠯ ᠦᠩ ᠬᠦᠭᠵᠢᠯ ᠦᠨ ᠰᠦᠯᠵᠢᠶᠡ ᠨᠢ ᠬᠣᠲᠠᠨ ᠠᠢᠯ ᠪᠠ ᠠᠵᠢᠯ ᠦᠩ ᠤᠨ ᠨᠠᠢᠢᠷᠠᠯ ᠤᠨ ᠬᠣᠷᠣᠯ ᠪᠠᠴᠤᠴᠢ ᠪᠠᠷᠠᠭᠳᠠᠢ। ᠠᠷᠪᠠᠨ ᠢᠯ ᠵᠢᠯ ᠤᠨ ᠠᠵᠢᠯᠯᠠᠯᠲᠠ ᠶᠢᠨ ᠳᠠᠷᠠᠭ᠎ᠠ, ᠰᠦᠯᠵᠢᠶᠡ ᠳᠠᠭᠠᠬᠢ ᠠᠭᠤᠯᠠ, ᠤᠰᠤ, ᠣᠢ, ᠲᠠᠯᠠ, ᠨᠠᠦᠷ ᠤᠨ ᠪᠠᠶᠢᠢ ᠨᠤᠲᠤᠭ ᠤᠨ ᠨᠠᠷᠠᠢ ᠰᠠᠷᠠᠯ ᠢ ᠢᠯᠠᠭᠳᠠᠬ ᠦᠨᠳᠦᠷ ᠦᠨᠳᠤᠷ ᠦᠭᠡᠴᠡ ᠪᠠ ᠪᠦᠷᠢᠨ ᠳᠦᠨᠵᠦ ᠪᠣᠯᠵᠤ ᠪᠠᠶᠢᠨᠠ।",
    "greenPlanting": "ᠨᠣᠭᠤᠭᠠᠨ ᠲᠠᠷᠢᠯᠭᠠ ᠶᠢᠨ ᠠᠵᠢᠯ ᠦᠩ",
    "blackDonkey": "ᠬᠠᠷᠠ ᠢᠯᠠᠭᠠ ᠶᠢᠨ ᠲᠠᠷᠢᠮᠠᠯ ᠠᠵᠢᠯ ᠦᠩ"
  },
  "responsibility": {
    "heroTitle": "ᠬᠠᠷᠢᠤᠴᠠᠭ᠎ᠠ ᠶᠢᠨ ᠮᠣᠨᠲᠡ",
    "top": {
      "title": "ᠨᠢᠭᠤᠯᠤᠨ ᠤᠨ ᠬᠠᠨᠳᠤᠭ᠎ᠠ",
      "description": "«ᠨᠢᠭᠤᠯᠤᠨ ᠡᠴᠡ ᠬᠤᠮᠤᠰ ᠶᠢ ᠠᠪᠬᠤ᠂ ᠨᠢᠭᠤᠯᠤᠨ ᠳᠤ ᠬᠤᠮᠤᠰ ᠶᠢ ᠪᠤᠴᠠᠬᠤ» ᠶᠢᠨ ᠦᠵᠡᠯ ᠨᠢ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠬᠠᠷᠢᠤᠴᠠᠭ᠎ᠠ ᠶᠢᠨ ᠭᠣᠣᠯ ᠤᠨ ᠦᠵᠡᠯ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠮᠤᠬᠢ ᠶᠢᠨ ᠦᠵᠡᠯ ᠪᠣᠯᠤᠨ᠃ ᠣᠨ ᠤᠳ ᠤᠨ ᠲᠤᠷᠰᠢᠳ ᠳᠤ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠨᠢ ᠶᠠᠭᠤᠮ ᠶᠢᠨ ᠬᠤᠮᠤᠷ ᠤᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠮᠤᠷ ᠤᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ᠂ ᠰᠤᠷᠬᠤᠯᠢ᠂ ᠡᠮ ᠤᠨ ᠬᠤᠮᠤᠰ᠂ ᠰᠣᠶᠣᠯ ᠪᠣᠯᠣᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢᠨ ᠬᠡᠷᠡᠭ ᠳᠤ ᠶᠢᠯᠡ ᠶᠢᠨ ᠶᠢᠬᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠷ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠮᠣᠩᠬᠣ ᠶᠢᠨ ᠦᠷᠡ ᠦᠰᠡᠭ ᠶᠢ ᠬᠤᠷᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "item": {
      "title1": "ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠴᠣᠯᠢᠶ᠎ᠠ ᠶᠢ ᠬᠣᠶᠢᠰᠢᠯᠠᠬᠤ ᠶᠢ ᠲᠤᠰᠠᠯᠠᠬᠤ",
      "title2": "ᠣᠷᠳᠣᠰ ᠤᠨ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠮᠠᠷᠠᠲᠣᠨ ᠤᠨ ᠬᠡᠷᠡᠭ ᠤᠨ ᠭᠣᠣᠯ ᠤᠨ ᠳᠡᠮᠵᠢᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠭᠤᠷᠪᠠ ᠵᠢᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭ"
    },
    "bottom": {
      "title": "ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ"
    },
    "carousel": {
      "title1": "ᠤᠰᠤᠨ ᠤᠨ ᠰᠠᠨ",
      "title2": "ᠪᠢᠶ᠎ᠡ ᠤᠨ ᠲᠣᠭᠣᠷᠢᠭ",
      "title3": "ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠬᠣᠣᠯ ᠤᠨ ᠭᠡᠷ",
      "title4": "ᠠᠵᠢᠯᠴᠢᠳ ᠤᠨ ᠳᠣᠷᠮᠢᠲᠣᠷᠢ",
      "title5": "ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢᠨ ᠲᠥᠪ"
    },
    "middle": {
      "title": "ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠯ",
      "description1": "ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠨᠢ ᠤᠯᠤᠰ ᠤᠨ «ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠯ» ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢ ᠬᠠᠷᠢᠤᠯᠠᠵᠤ᠂ ᠳᠣᠩ᠎ᠡ ᠡᠵᠢᠶᠠᠣ ᠲᠡᠢ ᠬᠠᠮᠵᠢᠯᠠᠵᠤ ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠲᠥᠷᠥᠯ ᠤᠨ ᠳᠡᠵᠣᠤ ᠬᠠᠷᠠ ᠢᠯᠤᠭᠤ ᠶᠢ ᠣᠷᠤᠯᠤᠭᠰᠠᠨ᠂ ᠲᠤᠰ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠤᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠲᠡᠮᠳᠡᠭᠲᠡ ᠶᠢᠨ ᠲᠤᠰᠠᠯᠠᠯ ᠤᠨ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠨᠢ «ᠵᠠᠰᠠᠭ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ + ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ + ᠮᠠᠯᠴᠢ + ᠪᠠᠩᠬᠢ + ᠳᠠᠭᠤᠯᠠᠯ» ᠶᠢᠨ ᠲᠠᠪᠤᠨ ᠤᠨ ᠨᠢᠭᠡᠳᠦᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭ ᠶᠢ ᠰᠤᠷᠬᠤᠯᠲᠠᠯᠠᠵᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢᠯᠴᠢᠳ ᠪᠣᠯᠣᠨ ᠮᠠᠯᠴᠢᠳ ᠤᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠷ ᠤᠨ ᠡᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠣᠨ ᠲᠡᠬᠨᠢᠬ ᠤᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠪᠤᠤᠷᠠᠵᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢᠯᠴᠢᠳ ᠪᠣᠯᠣᠨ ᠮᠠᠯᠴᠢᠳ ᠶᠢ ᠣᠷᠣᠯᠲᠤ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠠᠷᠠ ᠢᠯᠤᠭᠤ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢᠨ ᠲᠥᠰᠥᠯ ᠨᠢ 200 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠤᠨ ᠬᠤᠮᠤᠷ ᠤᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠷᠠᠵᠤ᠂ 5,000 ᠲᠥᠯᠦᠭᠡ ᠶᠢᠨ ᠢᠯᠤᠭᠤ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ ᠪᠣᠯᠣᠨ ᠤᠰᠤ᠂ ᠴᠡᠷᠢᠭ᠂ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ ᠬᠣᠣᠯ ᠤᠨ ᠬᠢᠮᠢᠷᠢᠯᠡᠯ ᠤᠨ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠪᠦᠷᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ ᠶᠢ ᠬᠤᠷᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
      "description2": "ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠨᠢ ᠬᠤᠮᠤᠨ ᠤᠳ ᠶᠢ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠤᠪᠢᠷᠠᠯᠲᠤ᠂ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠶᠢᠨ ᠲᠥᠰᠥᠯ ᠤᠨ ᠬᠤᠮᠤᠰ᠂ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ᠂ ᠠᠵᠢᠯ ᠤᠨ ᠪᠣᠯᠣᠮᠵᠢ ᠶᠢ ᠥᠭᠬᠦ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠳᠡᠵᠣᠤ ᠬᠠᠷᠠ ᠢᠯᠤᠭᠤ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠳᠤ ᠣᠷᠤᠯᠤᠵᠤ᠂ ᠬᠤᠴᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠤᠪᠢᠷᠠᠯᠲᠤ ᠶᠢᠨ ᠬᠡᠴᠡᠷᠢ ᠶᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠵᠤ᠂ ᠲᠡᠳᠡ ᠶᠢ ᠬᠣᠶᠢᠬᠤᠯᠠ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠳᠤ ᠬᠤᠷᠴᠡᠬᠦ ᠶᠢᠨ ᠦᠷᠡ ᠦᠰᠡᠭ ᠶᠢ ᠬᠤᠷᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
      "image1Alt": "ᠢᠯᠤᠭᠤ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢᠨ ᠲᠥᠰᠥᠯ",
      "image2Alt": "ᠣᠯᠣᠨ ᠤᠨ ᠣᠷᠣᠯᠴᠠᠭᠤᠯᠬᠤ"
    }
  },
  "media": {
    "heroTitle": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ ᠤᠨ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ",
    "tab1": "ᠸᠢᠳᠢᠷᠣ",
    "tab2": "ᠵᠢᠷᠤᠭ",
    "picture": {
      "description1": "ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠯᠣᠭᠣ",
      "description2": "ᠭᠷᠤᠫ ᠤᠨ ᠲᠥᠪ ᠬᠣᠷᠢᠶ᠎ᠠ",
      "description3": "ᠭᠷᠤᠫ ᠤᠨ ᠲᠥᠪ ᠬᠣᠷᠢᠶ᠎ᠠ ᠰᠣᠨᠢ ᠶᠢᠨ ",
      "description4": "ᠴᠡᠴᠡᠭ ᠤᠨ ᠤᠶᠢᠳᠬᠠᠷ",
      "description5": "ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠠᠵᠢᠯ ᠤᠨ ᠫᠠᠷᠺ",
      "description6": "ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠬᠠᠶᠢᠯᠤᠷ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
      "description7": "ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠬᠠᠶᠢᠯමᠢᠨᠢᠮ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
      "description8": "ᠡᠮᠦᠰᠢᠯ ᠤᠨ ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠴᠤᠳᠤᠬᠤ",
      "description9": "ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠬᠠᠮᠬᠢᠭᠴᠢ ᠶᠢᠨ ᠲᠡᠨᠢᠰ ᠤᠨ ᠳᠢᠶᠠᠨ ᠬᠢᠮ᠎ᠡ",
      "download": "ᠲᠠᠤᠨᠯᠣᠦᠳ ᠬᠢᠬᠤ"
    },
    "video": {
      "title1": "ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠣᠳᠣᠷᠬᠠᠢ ᠶᠢᠨ ᠸᠢᠳᠢᠷᠣ",
      "title2": "ᠲᠥᠬᠥᠮᠵᠢᠲᠡᠢ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ"
    }
  },
  "products": {
    "heroTitle": "ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
    "tab1": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
    "tab2": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠬᠦ",
    "aluminum": {
      "alt1": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 1",
      "alt1_2": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 1-2",
      "alt2": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 2",
      "alt2_2": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 2-2",
      "alt3": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 3",
      "alt3_2": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 3-2"
    },
    "coal": {
      "alt1": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 1",
      "alt1_2": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ 1-2"
    },
    "contact": {
      "email": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠢ-ᠮᠧᠶᠢᠯ:",
      "phone": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠯᠧᠸᠣᠨ:",
      "address": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠬᠠᠶᠢᠭ:",
      "manager1": "ᠤᠳᠢᠷᠳᠤᠭᠴᠢ ᠯᠢᠷᠤ 0477-3898222",
      "manager2": "ᠰᠢᠶᠠᠨ ᠯᠢᠷᠤ: 15847700664",
      "addrValue": "ᠬᠢᠲᠠᠳ ᠤᠨ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠣᠷᠳᠣᠰ ᠶᠢᠮᠡᠢ ᠤᠨ ᠬᠣᠶᠢᠬᠤ ᠵᠣᠯ ᠤᠨ 35 ᠨᠣᠮᠧᠷ"
    }
  },
  "collaborativeProjects": {
    "title": "ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠲᠥᠰᠥᠯ",
    "intro": "ᠰᠢᠨ᠎ᠡ ᠮᠠᠲᠡᠷᠢᠶᠠᠯ᠂ ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ᠂ ᠢᠨᠲᠧᠷᠨᠧᠲ ᠤᠨ ᠢ-ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠤᠬᠠᠭᠠᠨ ᠤᠨ ᠬᠢᠮᠢᠵᠢᠯ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢᠨ ᠳᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠮᠡᠩᠲᠠᠢ ᠨᠢ ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠨ ᠲᠡᠢ ᠲᠥᠰᠥᠯ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠡᠷᠢᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "projects": {
      "newMaterials": {
        "title": "ᠰᠢᠨ᠎ᠡ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ",
        "description": "ᠳᠤᠮᠳᠤ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ/ᠪᠢᠯᠯᠧᠲ ᠤᠨ ᠬᠢᠮᠢᠶ᠎ᠡ ᠶᠢᠨ ᠲᠥᠰᠥᠯ᠃ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ/ᠪᠢᠯᠯᠧᠲ ᠨᠢ ᠭᠣᠣᠯ ᠤᠨ ᠳᠤᠮᠳᠤ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠴᠢᠮᠠᠭ ᠪᠠᠷ ᠪᠣᠯᠣᠨ ᠢᠩᠭᠣᠲ ᠤᠳ ᠶᠢ ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠲᠡᠷᠭᠡ᠂ ᠬᠦᠨᠳᠦ ᠲᠡᠷᠭᠡ᠂ ᠡᠯᠡᠬᠲᠷᠣᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ᠂ ᠲᠡᠮᠦᠷ ᠵᠣᠯ ᠤᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ᠂ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠰ ᠳᠤ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠬᠡᠰᠢᠭ ᠳᠤ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠠᠮᠲᠤ ᠬᠠᠮᠠᠷᠠᠭᠤᠯᠤᠭᠰᠠᠨ ᠭᠣᠣᠯ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠲᠥᠷᠥᠯ ᠤᠳ ᠨᠢ 6061᠂ 6082᠂ 2024᠂ 7050᠂ 7075 ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠪᠣᠯᠣᠨ᠃ "
      },
      "newEnergy": {
        "title": "ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ",
        "description": "ᠬᠢᠳᠷᠣᠵᠧᠨ ᠤᠨ ᠲᠦᠯᠦᠰᠢᠨ᠎ᠡ᠂ ᠠᠯᠢᠮᠢᠨ-ᠠᠭᠠᠷ ᠤᠨ᠂ ᠯᠢᠲᠢᠶᠤᠮ-ᠢᠶᠣᠨ ᠤᠨ ᠪᠣᠯᠣᠨ ᠪᠤᠰᠤᠳ ᠴᠡᠷᠢᠭ ᠤᠨ ᠪᠠᠲᠧᠷᠢ᠂ ᠡᠯᠡᠬᠲᠷᠣᠳ ᠤᠨ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ ᠪᠣᠯᠣᠨ ᠬᠠᠲᠠᠯᠢᠰᠲ ᠤᠨ ᠬᠢᠮᠢᠶ᠎ᠡ ᠪᠣᠯᠣᠨ ᠰᠤᠷᠬᠤᠯᠢ᠂ ᠪᠠᠲᠧᠷᠢ ᠶᠢᠨ ᠤᠳᠢᠷᠳᠤᠯᠭ᠎ᠠ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠤᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ᠂ ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠲᠡᠷᠭᠡ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ ᠰᠤᠷᠬᠤᠯᠢ ᠪᠣᠯᠣᠨ ᠬᠢᠮᠢᠷᠢᠯᠡᠯ ᠳᠤ ᠭᠣᠣᠯ ᠤᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ᠃"
      },
      "flyAsh": {
        "title": "ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠤᠨ ᠬᠥᠮᠦᠰ ᠤᠨ ᠪᠦᠷᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ",
        "description": "ᠬᠤᠷᠤᠮ ᠬᠤᠴᠢᠨ ᠬᠤᠷᠤᠮ ᠤᠨ ᠤᠷᠤᠰᠬᠤᠯ ᠤᠨ ᠲᠡᠮᠦᠷ, ᠲᠡᠨᠢᠰ ᠤᠨ ᠳᠢᠶᠠᠨ ᠬᠢᠮ᠎ᠡ ᠶᠢᠨ ᠥᠨᠳᠥᠷ ᠠᠯᠦᠮᠢᠨᠢᠮ ᠤᠨ ᠬᠤᠶᠢᠯᠢᠶ᠎ᠠ ᠤᠨ ᠬᠥᠮᠦᠰ ᠨᠢ ᠮᠡᠲᠠᠯ ᠪᠣᠯᠤᠨ ᠮᠡᠲᠠᠯ ᠦᠭᠡᠢ ᠮᠠᠲᠡᠷᠢᠶᠠᠯ ᠬᠤᠷᠤᠮ ᠬᠤᠳᠠᠯᠳᠤᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ ᠪᠣᠯᠤᠨ ᠵᠠᠬᠠᠰᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠲᠣᠮᠣ ᠪᠣᠯᠤᠨ ᠥᠨᠳᠥᠷ ᠨᠢᠮ᠎ᠡ ᠤᠨ ᠬᠤᠴᠦᠨ ᠲᠠᠢ᠃"
      }
    },
    "cooperation": {
      "title": "ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ",
      "description": "ᠳᠡᠭᠡᠷ᠎ᠡ ᠶᠢ ᠰᠢᠨ᠎ᠡ ᠮᠠᠲᠡᠷᠢᠷᠠᠯ᠂ ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ᠂ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠤᠷ᠎ᠠ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤᠨ ᠲᠥᠰᠥᠯ ᠤᠳ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠪᠢᠳᠡ ᠭᠡᠷ ᠳᠣᠲᠣᠷ᠎ᠠ ᠪᠣᠯᠣᠨ ᠭᠠᠳᠠᠭᠠᠳᠤ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ᠂ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢᠨ ᠬᠣᠷᠢᠶ᠎ᠠ᠂ ᠪᠣᠯᠣᠨ ᠬᠡᠷᠡᠭᠴᠢ ᠶᠢᠨ ᠲᠡᠬᠨᠢᠬ ᠤᠳ ᠲᠡᠢ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠡᠷᠢᠵᠦ᠂ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠤᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢ ᠡᠵᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠭᠰᠠᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢ ᠡᠵᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠭᠰᠠᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠳ ᠲᠡᠢ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠡᠷᠢᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠨᠢ ᠤᠷᠢᠴᠠᠭᠤᠯᠤᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠣᠯᠠᠨ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠣᠯᠣᠨ᠃ ᠪᠢᠳᠡ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠲᠡᠬᠨᠢᠬ ᠤᠨ ᠫᠠᠲᠧᠨᠲ ᠤᠳ ᠶᠢ ᠲᠥᠯᠥᠪᠦᠷᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠡᠰᠡᠪᠡᠯ ᠬᠤᠮᠤᠷ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ᠂ ᠡᠰᠡᠪᠡᠯ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠲᠡᠬᠨᠢᠬ ᠤᠨ ᠫᠷᠣᠴᠧᠰ ᠤᠨ ᠪᠠᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠬᠢᠮᠢᠷᠢᠯᠡᠯ ᠤᠨ ᠯᠠᠶᠢᠨ ᠶᠢ ᠬᠤᠳᠠᠯᠳᠤᠨ ᠠᠪᠬᠤ᠂ ᠡᠰᠡᠪᠡᠯ ᠬᠣᠶᠢᠬᠤᠯᠠ ᠲᠡᠷᠭᠡ ᠶᠢ ᠬᠤᠪᠢᠷᠠᠬᠤ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠲᠥᠰᠥᠯ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠣᠲᠠ ᠨᠢ ᠬᠢᠲᠠᠳ ᠤᠨ ᠬᠣᠬᠣᠷᠢ᠂ ᠮᠠᠺᠠᠤ᠂ ᠬᠣᠩ ᠬᠣᠩ᠂ ᠡᠰᠡᠪᠡᠯ ᠪᠤᠰᠤᠳ ᠤᠯᠤᠰ ᠤᠨ ᠬᠡᠰᠢᠭ ᠳᠤ ᠪᠣᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "contact": {
      "email": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠢ-ᠮᠧᠶᠢᠯ:",
      "phone": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠯᠧᠸᠣᠨ:",
      "name": "ᠰᠢᠶᠠᠨ ᠯᠢᠷᠤ: 15847700664",
      "address": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ ᠶᠢᠨ ᠬᠠᠶᠢᠭ:"
    }
  },
  "offline": {
    "heroTitle": "ᠣᠸᠯᠠᠢᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "source": "ᠡᠬᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ",
    "views": "ᠬᠠᠷᠠᠯᠲᠤ",
    "projectName": "ᠲᠥᠰᠥᠯ ᠤᠨ ᠨᠡᠷ᠎ᠡ",
    "organizer": "ᠵᠣᠬᠢᠶᠠᠭᠴᠢ",
    "tenderOpeningLocation": "ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠨᠡᠭᠡᠬᠦ ᠶᠢᠨ ᠬᠣᠲᠠ",
    "releaseTime": "ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ",
    "openingTime": "ᠨᠡᠭᠡᠬᠦ ᠶᠢᠨ ᠬᠤᠮᠤᠰ",
    "loading": "ᠸᠠᠶᠢᠯ ᠤᠨ ᠠᠭᠤᠯᠭ᠎ᠠ ᠶᠢ ᠠᠴᠢᠶᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ...",
    "previousPost": "ᠥᠮᠥᠨ ᠦ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "nextArticle": "ᠳᠠᠷᠤᠭ᠎ᠠ ᠶᠢᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "close": "ᠬᠠᠭᠤᠯᠬᠤ",
    "tab1": "ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "tab2": "ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠶᠠᠯᠠᠯᠲᠤ ᠶᠢᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "bid": {
      "description": "ᠣᠷᠳᠣᠰ ᠮᠡᠩᠲᠠᠢ ᠸᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠭᠠᠯ ᠤᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠬᠦ ᠶᠢᠨ ᠲᠥᠰᠥᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭ ᠶᠢᠨ ᠭᠤᠷᠪᠠᠳᠤᠭᠴᠢ ᠶᠢᠨ ᠬᠡᠷᠡᠭᠴᠢ ᠶᠢᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠬᠦ",
      "source": "ᠯᠢᠶᠤ ᠳᠣᠩᠮᠡᠢ",
      "views": "343",
      "project": "ᠣᠷᠳᠣᠰ ᠸᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠭᠠᠯ ᠤᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠬᠦ ᠶᠢᠨ ᠲᠥᠰᠥᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭ ᠶᠢᠨ ᠭᠤᠷᠪᠠᠳᠤᠭᠴᠢ ᠶᠢᠨ ᠬᠡᠷᠡᠭᠴᠢ ᠶᠢᠨ ᠬᠡᠯᠡᠴᠡᠭᠡᠯᠡᠬᠦ",
      "organizer": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠤ",
      "location": "ᠣᠨᠯᠠᠢᠨ ᠸᠢᠳᠢᠶᠣ ᠶᠢᠨ ᠲ�:“ᠡᠨᠳᠡᠷ",
      "release": "2025-05-30",
      "opening": "2025 ᠣᠨ ᠤᠨ 6 ᠰᠠᠷ᠎ᠠ ᠶᠢᠨ 9:00"
    },
    "notice": {
      "description": "ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠪᠡᠶᠵᠢᠶᠠᠣ ᠳᠡᠮᠦᠨ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢᠨ ᠬᠠᠷᠪᠣᠨ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠬᠦ",
      "source": "ᠯᠢᠷᠤ ᠳᠣᠩᠮᠡᠢ",
      "views": "343",
      "project": "ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠪᠡᠶᠵᠢᠶᠠᠣ ᠳᠡᠮᠦᠨ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢᠨ ᠬᠠᠷᠪᠣᠨ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠥᠰᠥᠯ",
      "organizer": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠤ",
      "location": "ᠣᠨᠯᠠᠢᠨ ᠸᠢᠳᠢᠷᠣ ᠶᠢᠨ ᠲᠡᠨᠳᠡᠷ",
      "release": "2025-05-27",
      "opening": "2025 ᠣᠨ ᠤᠨ 6 ᠰᠠᠷ᠎ᠠ ᠶᠢᠨ 9:00"
    }
  },
  "news": {
    "heroTitle": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "source": "ᠡᠬᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ",
    "views": "ᠬᠠᠷᠠᠯᠲᠤ",
    "button": "ᠬᠠᠭᠤᠯᠬᠤ",
    "prev": "ᠥᠮᠥᠨ ᠦ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "next": "ᠳᠠᠷᠤᠭ᠎ᠠ ᠶᠢᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "card1": {
      "description": "ᠣᠷᠳᠣᠰ ᠮᠡᠩᠲᠠᠢ ᠸᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠸᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠤᠮᠤᠰ 2025 ᠣᠨ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠵᠢᠶᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ ᠪᠣᠯᠣᠨ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠤᠪᠢᠷᠠᠯᠲᠤ ᠶᠢᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ",
      "source": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ"
    },
    "card2": {
      "description": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠰᠢᠸᠢᠰ ᠤᠨ ᠠᠯᠢᠮᠢᠨ ᠶᠢ ᠬᠤᠳᠠᠯᠳᠤᠨ ᠠᠪᠬᠤ ᠶᠢᠨ ᠭᠡᠷ᠎ᠡ ᠬᠡᠯᠡᠴᠡᠭᠡᠯᠡᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ",
      "source": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ"
    },
    "card3": {
      "description": "ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ ᠰᠢᠨᠶᠤᠸᠠᠨ ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ 6-1 ᠳᠣᠭᠣᠰᠢ ᠨᠦᠬᠦᠰ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠭᠦᠨᠵᠦᠷᠦᠯᠬᠦ ᠶᠢᠨ ᠲᠥᠰᠥᠯ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢᠨ ᠦᠨᠡᠯᠭᠡᠨ ᠤᠨ ᠣᠯᠣᠨ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "source": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ"
    },
    "card4": {
      "description": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠰᠢᠸᠢᠰ ᠤᠨ ᠠᠯᠢᠮᠢᠨ ᠶᠢ ᠬᠤᠳᠠᠯᠳᠤᠨ ᠠᠪᠬᠤ ᠶᠢᠨ ᠭᠡᠷ᠎ᠡ ᠬᠡᠯᠡᠴᠡᠭᠡᠯᠡᠯ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ",
      "source": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ"
    }
  },
  "footer": {
    "qrText": "ᠮᠢᠺᠷᠣ ᠬᠣᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠣᠯᠣᠨ ᠤᠨ ᠲᠡᠮᠳᠡᠭ",
    "copyright": "ᠬᠣᠫᠢᠷᠠᠢᠲ© 2020 ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠬᠤᠪᠢ ᠶᠢᠨ ᠬᠣᠮᠫᠠᠨᠢ",
    "icp": "ICP ᠨᠣᠮᠧᠷ 100000177",
    "publicSecurity": "ᠣᠯᠣᠨ ᠤᠨ ᠠᠶᠤᠯ ᠤᠨ ᠨᠣᠮᠧᠷ 15060202000517",
    "publicSecurityAlt": "ᠣᠯᠣᠨ ᠤᠨ ᠠᠶᠤᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ",
    "sitemap": "ᠰᠠᠶᠢᠲᠤ ᠶᠢᠨ ᠬᠠᠷᠲᠠ",
    "links": {
      "aboutUs": "ᠪᠢᠳᠡ ᠶᠢ ᠲᠤᠬᠠᠢ",
      "contact": "ᠬᠣᠯᠪᠣᠭ᠎ᠠ",
      "careers": "ᠠᠵᠢᠯ ᠤᠨ ᠪᠣᠯᠣᠮᠵᠢ",
      "news": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "products": "ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
      "services": "ᠬᠢᠮᠢᠵᠢᠯ"
    },
    "section": {
      "title1": "ᠮᠣᠨᠲᠡ ᠶᠢ ᠲᠤᠬᠠᠢ",
      "title2": "ᠭᠣᠣᠯ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "title3": "ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ",
      "title4": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "title5": "ᠭᠠᠳᠠᠭᠠᠳᠤ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ"
    },
    "link1": {
      "text1": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠲᠣᠳᠣᠷᠬᠠᠢ",
      "text2": "ᠳᠠᠷᠤᠭᠠᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠦᠭᠡ",
      "text3": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠰᠣᠶᠣᠯ",
      "text4": "ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠲᠥᠣᠬᠡ",
      "text5": "ᠨᠠᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
      "text6": "ᠪᠢᠳᠡ ᠲᠡᠢ ᠨᠢᠭᠡᠳᠦᠬᠦ"
    },
    "link2": {
      "text1": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ",
      "text2": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "text3": "ᠳᠡᠮᠦᠨ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠡᠰᠢᠭ",
      "text4": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "text5": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ"
    },
    "link3": {
      "text1": "ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠮᠣᠨᠲᠡ",
      "text2": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠮᠣᠨᠲᠡ",
      "text3": "ᠬᠠᠷᠢᠤᠴᠠᠭ᠎ᠠ ᠶᠢᠨ ᠮᠣᠨᠲᠡ"
    },
    "link4": {
      "text1": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "text2": "ᠮᠡᠳᠢᠶ᠎ᠠ ᠶᠢᠨ ᠮᠠᠲᠡᠷᠢᠶᠠᠯ"
    },
    "link5": {
      "text1": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ",
      "text2": "ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠲᠥᠰᠥᠯ",
      "text3": "ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠲᠡᠮᠳᠡᠭ",
      "text4": "ᠣᠸᠯᠠᠢᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "text5": "ᠬᠤᠮᠤᠰ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ"
    }
  },
  "mainHeader": {
    "aboutMonte": "ᠮᠣᠨᠲᠡ ᠶᠢ ᠲᠤᠬᠠᠢ",
    "coreIndustries": "ᠭᠣᠣᠯ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ",
    "highQualityDevelopment": "ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ",
    "news": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "externalCooperation": "ᠭᠠᠳᠠᠭᠠᠳᠤ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ",
    "searchPlaceholder": "ᠬᠠᠶᠢᠬᠤ...",
    "aboutLinks": {
      "companyProfile": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠲᠣᠳᠣᠷᠬᠠᠢ",
      "chairmanSpeech": "ᠳᠠᠷᠤᠭᠠᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠦᠭᠡ",
      "corporateCulture": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠰᠣᠶᠣᠯ",
      "developmentHistory": "ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠲᠥᠣᠬᠡ",
      "partyBuilding": "ᠨᠠᠮ ᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ",
      "joinUs": "ᠪᠢᠳᠡ ᠲᠡᠢ ᠨᠢᠭᠡᠳᠦᠬᠦ"
    },
    "newsLinks": {
      "news": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
      "mediaMaterial": "ᠮᠡᠳᠢᠶ᠎ᠠ ᠶᠢᠨ ᠮᠠᠲᠡᠷᠢᠶᠠᠯ"
    },
    "cooperationLinks": {
      "products": "ᠪᠦᠲᠦᠭᠡᠭᠡᠯᠳᠡᠬᠦ ",
      "collaborativeProjects": "ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠲᠥᠰᠥᠯ",
      "biddingPlatform": "ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠲᠡᠮᠳᠡᠭ",
      "offlineTender": "ᠣᠸᠯᠠᠢᠨ ᠲᠡᠨᠳᠡᠷ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡ",
      "sourcingAnnouncement": "ᠬᠤᠮᠤᠰ ᠤᠨ ᠮᠡᠳᠡᠭᠡᠯᠡᠯ"
    },
    "industry": {
      "title1": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ",
      "title2": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "title3": "ᠳᠡᠮᠦᠨ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠡᠰᠢᠭ",
      "title4": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "title5": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ",
      "description1": "ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠬᠤ ᠳᠤ ᠬᠦᠴᠦᠨ ᠠᠯᠠᠭᠤ ᠬᠡᠯᠡᠵᠦ᠂ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠬᠢᠮᠢᠶ᠎ᠡ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢᠨ ᠣᠳᠣ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠲᠡᠮᠳᠡᠭ ᠨᠢ ᠡᠬᠢᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ",
      "description2": "ᠮᠡᠩᠲᠠᠢ ᠨᠢ ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠢᠮᠢᠶ᠎ᠡ᠂ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ᠂ ᠨᠢᠭᠡ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠵᠢᠯ ᠶᠢ ᠥᠭᠵᠦ᠂ ᠬᠡᠰᠢᠭ ᠨᠢ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠢᠬᠤ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠤᠨ ᠦᠨᠳᠦᠰᠦ ᠪᠣᠯᠣᠨ ᠴᠢᠭᠯᠤᠯ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠡᠬᠢ ᠶᠢᠨ ᠠᠮᠢ ᠤᠨ ᠴᠡᠷᠢᠭ ᠶᠢ ᠬᠤᠷᠠᠵᠤ ᠪᠠᠢᠨ᠎ᠠ",
      "description3": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠠᠪᠬᠠᠰᠢᠯᠠᠭ᠎ᠠ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠪᠢᠳᠡ ᠬᠣᠣᠷᠢ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠵᠤ᠂ ᠨᠦᠬᠦᠰ ᠶᠢ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠤᠮᠤᠰ ᠳᠤ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠪᠢᠷᠠᠬᠤ᠂ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠤᠮᠤᠷ ᠶᠢ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠣᠲᠠ ᠳᠤ ᠥᠭᠵᠦ ᠪᠠᠢᠨ᠎ᠠ",
      "description4": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠲᠠᠷᠢᠶᠠᠯᠠᠨ-ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ-ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ-ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠶᠠᠯᠠᠯ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠭᠣᠣᠯ ᠮᠣᠷᠢ ᠶᠢ ᠪᠠᠷᠢᠵᠤ᠂ ᠳᠡᠭᠡᠳᠦ ᠦᠨᠡ ᠲᠡᠢ ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠪᠠᠷᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ",
      "description5": "ᠥᠪᠥᠷ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠵᠠᠬᠠᠰᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ"
    },
    "development": {
      "title1": "ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠮᠣᠨᠲᠡ",
      "title2": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠮᠣᠨᠲᠡ",
      "title3": "ᠬᠠᠷᠢᠤᠴᠠᠭ᠎ᠠ ᠶᠢᠨ ᠮᠣᠨᠲᠡ",
      "description1": "ᠮᠡᠩᠲᠠᠢ ᠨᠢ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠪᠣᠯᠣᠨ ᠬᠡᠰᠢᠭ ᠶᠢ ᠬᠦᠴᠦᠨ ᠪᠠᠷᠢᠬᠤ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠬᠤᠮᠤᠰ ᠤᠨ ᠴᠢᠭᠯᠤᠯ ᠪᠣᠯᠣᠨ ᠬᠢᠮᠢᠶ᠎ᠡ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ ᠪᠠᠢᠨ᠎ᠠ",
      "description2": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠨᠢ ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠡᠬᠢᠨ ᠶᠢᠨ ᠦᠵᠡᠯ᠂ ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠬᠡᠮᠵᠢᠷ᠎ᠠ ᠶᠢ ᠪᠦᠷᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠨᠣᠭᠣᠭᠠᠨ᠂ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠢᠶ᠎ᠠ ᠪᠣᠯᠣᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠦᠵᠡᠯ ᠶᠢ ᠪᠦᠷ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠳᠤ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ",
      "description3": "ᠨᠢᠭᠤᠯᠤᠨ ᠡᠴᠡ ᠬᠤᠮᠤᠰ ᠶᠢ ᠠᠪᠬᠤ᠂ ᠨᠢᠭᠤᠯᠤᠨ ᠳᠤ ᠬᠤᠮᠤᠰ ᠶᠢ ᠪᠤᠴᠠᠬᠤ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠦᠵᠡᠯ ᠨᠢ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠭᠰᠠᠨ ᠬᠡᠷᠡᠭᠯᠡᠯ ᠪᠣᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠣᠨ ᠤᠳ ᠤᠨ ᠲᠤᠷᠰᠢᠳ ᠳᠤ᠂ ᠪᠢᠳᠡ ᠶᠠᠭᠤᠮ ᠶᠢᠨ ᠬᠤᠮᠤᠷ ᠤᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠮᠤᠷ ᠤᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ᠂ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ ᠪᠠᠢᠨ᠎ᠠ"
    }
  },
  "home": {
    "title": "ᠮᠣᠨᠲᠡ ᠶᠢ ᠲᠤᠬᠠᠢ",
    "p1": "ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ 2001 ᠣᠨ ᠳᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠳᠠᠵᠤ᠂ ᠣᠳᠣ ᠮᠣᠩᠭᠣᠯ ᠤᠨ 7,500 ᠲᠣᠭᠣᠷᠢᠬᠤ ᠠᠵᠢᠯᠴᠢᠳ ᠲᠠᠢ᠂ ᠣᠨ ᠤᠨ ᠬᠤᠮᠤᠷ ᠤᠨ ᠣᠷᠣᠯᠭ᠎ᠠ 50 ᠲᠥᠪ ᠶᠤᠸᠠᠨ ᠡᠴᠡ ᠳᠡᠭᠡᠷ᠎ᠡ᠂ ᠣᠨ ᠤᠨ ᠲᠠᠲᠠᠭᠤᠷ ᠤᠨ ᠲᠥᠯᠥᠪᠦᠷᠢ 8 ᠲᠥᠪ ᠶᠤᠸᠠᠨ ᠡᠴᠡ ᠳᠡᠭᠡᠷ᠎ᠡ᠃",
    "p2": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠥᠵᠢᠶᠠᠭᠤᠨ ᠮᠣᠩᠭᠣᠯ ᠤᠨ 100 ᠬᠤᠳᠤ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠳᠤ ᠪᠠᠶᠢᠵᠤ᠂ ᠣᠷᠳᠣᠰ ᠤᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠯ ᠤᠨ ᠲᠡᠮᠳᠡᠭᠲᠡᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠣᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "p3": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠰᠢᠨ᠎ᠡ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠦᠵᠡᠯ ᠶᠢ ᠪᠦᠷᠢᠨ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠪᠣᠯᠣᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠤᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠬᠦᠴᠦᠨ ᠪᠠᠷᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "p4": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠤᠬᠢᠶᠠᠨ ᠤᠨ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦ ᠲᠡᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠡᠴᠡ ᠰᠢᠨ᠎ᠡ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠪᠣᠯᠣᠨ ᠬᠢᠮᠢᠶ᠎ᠡ᠂ ᠬᠠᠷᠠᠨ ᠤᠨ ᠪᠣᠯᠣᠨ ᠨᠠᠷ ᠤᠨ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ᠂ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠤᠷ᠎ᠠ ᠶᠢᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠬᠠᠲᠤ ᠬᠠᠶᠢᠭᠤᠯᠤᠮ ᠤᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠪᠣᠯᠣᠨ ᠬᠡᠷᠡᠭᠯᠡᠯᠲᠡ ᠶᠢ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ᠂ ᠣᠯᠠᠨ ᠲᠥᠯᠥᠭᠡᠯᠡᠭᠴᠢ ᠪᠣᠯᠣᠨ ᠡᠷᠬᠡᠮᠲᠡ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠪᠣᠯᠵᠤ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "p5": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ ᠳᠤ ᠢᠬᠡ ᠬᠤᠮᠤᠷ ᠣᠷᠣᠯᠴᠢᠵᠤ᠂ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠬᠦ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠲᠠᠷᠢᠶᠠᠴᠢᠳ ᠪᠣᠯᠣᠨ ᠮᠠᠯᠴᠢᠳ ᠤᠨ ᠣᠷᠣᠯᠭ᠎ᠠ ᠪᠣᠯᠣᠨ ᠬᠣᠷᠣᠮ ᠶᠢ ᠨᠡᠮᠡᠬᠦ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "p6": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠡᠷᠬᠡᠮ ᠨᠢ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠮᠤᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠬᠢᠮᠠᠷ ᠪᠣᠯᠭᠠᠬᠤ ᠪᠣᠯᠣᠨ ᠬᠢᠮᠠᠷᠢᠶ᠎ᠠ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢ ᠨᠣᠭᠣᠭᠠᠨ ᠪᠣᠯᠭᠠᠬᠤ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠪᠣᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃",
    "core": "ᠭᠣᠣᠯ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ",
    "news": "ᠮᠡᠳᠡᠭᠡᠯᠡᠯ",
    "see": "ᠢᠯᠡᠷᠦ ᠬᠠᠷᠠᠬᠤ",
    "items": {
      "description1": "ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠪᠣᠯᠣᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠦᠴᠦᠨ",
      "description2": "",
      "description3": "ᠪᠣᠳᠢᠲᠠᠢ ᠬᠤᠮᠤᠨ ᠤᠨ ᠦᠵᠡᠯ ᠡᠴᠡ ᠳᠡᠭᠡᠷ᠎ᠡ",
      "description4": ""
    },
    "cards1": {
      "title": "ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ",
      "desc": "ᠨᠢᠭᠡᠳᠦᠯᠰᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠴᠡᠷᠢᠭ-ᠴᠡᠷᠢᠭ ᠤᠨ ᠡᠯᠡᠬᠲᠷᠢᠨ-ᠠᠯᠢᠮᠢᠨ-ᠮᠠᠲᠡᠷᠢᠶᠠᠯ-ᠳᠡᠭᠡᠳᠦ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠪᠠᠶᠢᠭᠤᠯᠬᠤ ᠶᠢᠨ ᠡᠷᠬᠡᠮ ᠶᠢ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠰᠤᠷᠬᠤᠯᠢ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠯ ᠳᠤ ᠬᠤᠮᠤᠷ ᠣᠷᠣᠯᠴᠢᠵᠤ᠂ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠵᠤ᠂ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠳᠡᠭᠡᠷ᠎ᠡ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠰᠢᠯᠭᠡᠵᠦ᠂ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠠᠭᠤᠯᠭ᠎ᠠ ᠪᠣᠯᠣᠨ ᠨᠡᠮᠡᠬᠦ ᠦᠨᠡ ᠶᠢ ᠨᠡᠮᠡᠵᠦ᠂ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠬᠤ ᠳᠤ ᠬᠦᠴᠦᠨ ᠠᠯᠠᠭᠤ ᠬᠡᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠠᠯᠢᠮᠢᠨ ᠤᠨ ᠬᠠᠯᠢᠪ ᠤᠨ ᠰᠤᠷᠬᠤᠯᠢ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠡᠷᠬᠡᠮ ᠶᠢ ᠬᠠᠮᠢᠶ᠎ᠠ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "cards2": {
      "title": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠡᠰᠢᠭ",
      "desc": "ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠨᠢ ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠢᠮᠢᠶ᠎ᠡ᠂ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢ ᠨᠢᠭᠡᠳᠦᠯᠵᠦ᠂ ᠨᠢᠭᠡ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠵᠢᠯ ᠶᠢ ᠥᠭᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃ ᠨᠦᠬᠦᠰ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠨᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠢᠬᠤ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠤᠨ ᠦᠨᠳᠦᠰᠦ ᠪᠣᠯᠣᠨ ᠴᠢᠭᠯᠤᠯ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠡᠬᠢ ᠶᠢᠨ ᠠᠮᠢ ᠤᠨ ᠴᠡᠷᠢᠭ ᠪᠣᠯᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "cards3": {
      "title": "ᠳᠡᠮᠦᠨ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠡᠰᠢᠭ",
      "desc": "ᠨᠦᠬᠦᠰ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠠᠪᠬᠠᠰᠢᠯᠠᠭ᠎ᠠ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠪᠢᠳᠡ ᠬᠣᠣᠷᠢ ᠤᠨ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠡᠮᠦᠨ ᠶᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠵᠤ᠂ ᠨᠦᠬᠦᠰ ᠶᠢ ᠭᠠᠵᠠᠷ ᠤᠨ ᠬᠤᠮᠤᠰ ᠳᠤ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠤᠪᠢᠷᠠᠬᠤ᠂ ᠴᠡᠷᠢᠭ ᠶᠢ ᠰᠢᠰᠲᠡᠮ ᠳᠤ ᠬᠣᠯᠪᠣᠵᠤ᠂ ᠴᠡᠷᠢᠭ ᠤᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠤᠮᠤᠷ ᠳᠤ ᠬᠤᠮᠤᠰ ᠶᠢ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ ᠶᠢᠨ ᠬᠣᠲᠠ ᠳᠤ ᠳᠡᠮᠦᠨ ᠶᠢ ᠥᠭᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "cards4": {
      "title": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ",
      "desc": "ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠰᠢᠨ᠎ᠡᠴᠢᠯᠡᠬᠦ ᠶᠢᠨ ᠦᠢᠯᠡ ᠳᠤ ᠢᠬᠡ ᠶᠢ ᠣᠷᠣᠯᠴᠢᠵᠤ᠂ ᠬᠠᠷᠠ ᠢᠯᠬᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢᠨ ᠲᠥᠯᠥᠭᠡᠨ ᠳᠡᠭᠡᠳᠦ ᠦᠨᠡ ᠲᠡᠢ ᠣᠳᠣ ᠶᠢᠨ ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠰᠢᠯᠭᠠᠷᠢ ᠶᠢ ᠪᠠᠷᠢᠵᠤ᠂ ᠨᠣᠭᠣᠭᠠᠨ ᠤᠨ ᠲᠠᠷᠢᠶᠠᠯᠠᠨ-ᠡᠬᠣᠯᠣᠭᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ-ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠬᠤᠮᠤᠰ ᠤᠨ ᠳᠡᠭᠡᠳᠦ ᠬᠤᠮᠤᠰ ᠤᠨ ᠬᠠᠮᠵᠢᠯᠠᠭᠴᠢ-ᠬᠥᠳᠥᠭᠡ ᠶᠢᠨ ᠠᠶᠠᠯᠠᠯ ᠤᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠭᠣᠣᠯ ᠮᠣᠷᠢ ᠶᠢ ᠪᠠᠷᠢᠵᠤ ᠪᠠᠢᠨ᠎ᠠ᠃"
    },
    "cards5": {
      "title": "ᠣᠳᠣ ᠶᠢᠨ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ",
      "desc": "ᠥᠪᠥᠷ ᠤᠨ ᠠᠵᠢ ᠠᠬᠤᠢ ᠶᠢᠨ ᠦᠨᠳᠦᠰᠦ ᠶᠢ ᠲᠥᠯᠥᠭᠡᠨ᠂ ᠮᠣᠨᠲᠡ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠨᠢ ᠬᠤᠷᠳᠤᠰᠢᠭᠤᠯᠬᠤ ᠪᠣᠯᠣᠨ ᠳᠡᠭᠡᠳᠦ ᠶᠢᠨ ᠴᠢᠳᠠᠪᠤᠷᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ᠂ ᠵᠠᠬᠠᠰᠢ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠳᠡᠮᠵᠢᠵᠦ᠂ ᠬᠤᠳᠠᠯᠳᠤᠭ᠎ᠠ ᠶᠢᠨ ᠲᠡᠡᠪᠡᠷᠢᠯᠡᠯᠲᠡ ᠶᠢ ᠢᠳᠡᠪᠬᠢᠲᠡ ᠶᠢ ᠬᠡᠮᠵᠢᠶ᠎ᠡ ᠶᠢ ᠬᠡᠷᠡᠭᠯᠡᠵᠦ ᠪᠠᠢᠨ᠎ᠠ᠃"
    }
  },
  "dev": {
    "title": "ᠬᠣᠭᠣᠯᠢᠶᠢᠨ ᠲᠥᠷᠥᠯ",
    "section": "ᠮᠥᠷᠢᠶᠢᠨ ᠬᠣᠳᠣᠯᠪᠣᠷᠢ ᠵᠣᠷᠢᠭᠤᠳᠤ ᠪᠠᠲᠤᠯᠠᠨ᠎ᠠ",
    "achievements": {
      "item2024": [
        "ᠮᠣᠩᠲᠡ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠰᠢᠰᠢ ᠮᠡᠨᠽᠢᠺᠡᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ 100% ᠨᠢᠭᠡᠳᠦᠯ ᠬᠤᠪᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ."
      ],
      "item2023": [
        "ᠮᠡᠩᠲᠠᠢ APT ᠶᠤᠷᠣᠫ ᠤᠨ ᠰᠢᠨ᠎ᠡ ᠮᠠᠲᠧᠷᠢᠶᠠᠯ ᠤᠨ ᠢᠨᠨᠣᠪᠠᠴᠢᠶᠠᠨ ᠤᠨ ᠲᠥᠪ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ.",
        "ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠣᠷᠳᠣᠰ ᠤᠨ ᠬᠣᠲᠠ ᠳᠤ ᠪᠠᠭᠰᠢ ᠬᠦᠨᠳᠦᠯᠡᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ ᠬᠦᠨᠳᠦ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠴᠢᠮᠡᠭ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠠᠵᠤ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠮᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠬᠣᠮᠫᠠᠨᠢ ᠨᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠪᠡᠷᠲᠡᠶᠢᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠲᠦᠮᠡᠨ ᠬᠢᠷᠢᠶᠡᠨ ᠰᠡᠷᠭᠢᠭᠦᠯᠬᠦ ᠲᠥᠯᠥᠪ ᠤᠨ ᠲᠥᠷᠥᠯ ᠤᠨ (ᠲᠥᠯᠥᠪ) ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠣᠰᠤᠨ ᠶᠢᠰᠦᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠢᠨᠨᠣᠪᠠᠴᠢᠶᠠᠨ ᠤᠨ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ 2022 ᠣᠨ ᠳᠤ ᠣᠷᠳᠣᠰ ᠤᠨ ᠬᠣᠲᠠ."
      ],
      "item2022": [
        "ᠮᠡᠩᠲᠠᠢ ᠳᠣᠩᠰᠢᠩ ᠤᠨ ᠬᠣᠶᠠᠳᠤᠭᠠᠷ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ 2x660MW ᠲᠥᠯᠥᠪ ᠨᠢᠭᠡᠳᠦᠯ ᠮᠣᠩᠲᠡ ᠲᠥᠯᠥᠪ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠪᠣᠯᠤᠨ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠠᠯᠠᠭᠤᠨ ᠳᠠᠭᠤᠨ᠎ᠠ.",
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ 2022 ᠣᠨ ᠳᠤ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠬᠤᠪᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠳᠥᠷᠪᠡᠳᠦᠭᠡᠷ ᠪᠣᠯᠤᠨ 50 ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠮᠣᠩᠲᠡ ᠪᠢᠷᠠᠨᠳ ᠤᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠢᠩᠭᠣᠲ ᠰᠢᠶᠠᠩᠬᠠᠢ ᠤᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤᠨ ᠡᠬᠢ ᠪᠣᠯᠤᠨ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠪᠡᠷᠲᠡᠶᠢᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠤ ᠠᠵᠤ ᠠᠬᠤᠢ ᠪᠣᠯᠣᠨ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠤ ᠨᠢᠭᠡᠳᠦᠯ ᠡᠬᠢ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ."
      ],
      "item2021": [
        "2021 ᠣᠨ ᠤᠨ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠪᠡᠷᠲᠡᠶᠢᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠬᠤᠪᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ 100 ᠳᠤᠭᠠᠷ ᠤᠨ ᠵᠠᠭᠤᠨ ᠪᠣᠯᠤᠨ ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ 2021 ᠣᠨ ᠳᠤ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠬᠤᠪᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠲᠠᠪᠤᠨ ᠳᠤᠭᠠᠷ ᠤᠨ ᠬᠤᠪᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠪᠣᠯᠤᠨ 50 ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠳᠥᠷᠪᠡᠳᠦᠭᠡᠷ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠶᠤᠸᠠᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠲᠥᠯᠥᠪ ᠨᠢ ᠵᠣᠩᠭᠣ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠶᠠᠨ ᠮᠠᠨᠠᠭᠡᠮᠡᠨᠲ ᠠᠰᠣᠰᠢᠶᠠᠴᠢ ᠪᠣᠯᠤᠨ 2020-2021 ᠣᠨ ᠳᠤ ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠴᠢᠮᠡᠭ ᠤᠨ ᠲᠥᠯᠥᠪ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠪᠤᠯᠢᠶᠠᠩᠭᠣᠤ ᠮᠡᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠨᠠᠮ ᠤᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠤᠯ ᠤᠨ ᠰᠤᠷᠭᠠᠨ ᠤᠨ ᠪᠠᠰᠡ ᠨᠢ ᠵᠣᠩᠭᠣ ᠮᠡᠢ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢᠶᠢᠨ ᠰᠢᠶᠠᠩᠰᠢᠶᠢᠨ ᠪᠣᠯᠣᠨ ᠤᠯᠠᠰ ᠤᠨ ᠳᠠᠮᠵᠢᠶᠢᠨ ᠬᠣᠮᠮᠢᠰᠰᠢᠶᠠᠨ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠤᠯᠠᠭᠠᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠤᠯ ᠤᠨ ᠪᠠᠰᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ ᠪᠠᠭᠰᠢ ᠬᠦᠨᠳᠦᠯᠡᠨ ᠪᠣᠯᠪᠠᠰᠤᠷᠠᠯ ᠤ ᠬᠦᠨᠳᠦ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠴᠢᠮᠡᠭ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠶᠢᠨ ᠮᠡᠢ ᠰᠡᠯᠡᠬᠦ ᠶᠢᠨ ᠮᠠᠰᠢᠨ ᠰᠢᠷᠢᠬᠦ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠠᠯᠠᠭᠤᠨ ᠳᠠᠭᠤᠨ᠎ᠠ.",
        "ᠮᠣᠩᠲᠡ ᠬᠠᠷᠠ ᠲᠣᠮᠣᠰᠤ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠬᠡᠰᠢᠭ ᠤᠨ ᠲᠥᠯᠥᠪ ᠨᠢ 2020 ᠣᠨ ᠳᠤ ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠭᠤᠸᠠᠩᠴᠠᠢ ᠫᠷᠣᠭᠷᠠᠮ ᠤᠨ ᠬᠦᠨᠳᠦ ᠲᠥᠯᠥᠪ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠣᠷᠳᠣᠰ ᠮᠡᠩᠲᠠᠢ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠴᠢᠮᠡᠭ ᠤᠨ ᠰᠢᠯᠭᠠᠯᠲᠠ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠨᠢ CNAS ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠯᠠᠪᠣᠷᠠᠲᠣᠷᠢ ᠶᠢᠨ ᠮᠠᠨᠠᠭᠤᠯᠤᠯ ᠤᠨ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ."
      ],
      "item2020": [
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ 2018-2019 ᠣᠨ ᠳᠤ ᠵᠣᠩᠭᠣ ᠮᠡᠢ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠠᠮᠠᠨ ᠬᠦᠷᠴᠡᠬᠦ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ (ᠮᠢᠨ᠎ᠡ ᠤᠨ ᠲᠥᠷᠥᠯ) ᠪᠣᠯᠤᠭᠰᠠᠨ ᠵᠣᠩᠭᠣ ᠮᠡᠢ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠠᠰᠣᠰᠢᠶᠠᠴᠢ ᠪᠣᠯᠤᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ 'ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠨᠢᠭᠤᠷ ᠬᠣᠭᠣᠯᠢᠶᠢᠨ 100 ᠬᠢᠷᠢᠶᠡᠯᠲᠡ' ᠴᠢᠮᠡᠭ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠨᠢ ᠶᠤᠷᠣᠫ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ APT ᠬᠣᠮᠫᠠᠨᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ 200,000 ᠲᠣᠨ ᠤᠨ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠮᠠᠲᠧᠷᠢᠶᠠᠯ ᠤᠨ ᠲᠥᠯᠥᠪ ᠨᠢ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠠᠯᠠᠭᠤᠨ ᠳᠠᠭᠤᠨ᠎ᠠ.",
        "ᠮᠡᠩᠲᠠᠢ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠶᠤᠸᠠᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠲᠥᠯᠥᠪ ᠨᠢ 2018-2019 ᠣᠨ ᠳᠤ ᠵᠣᠩᠭᠣ ᠶᠢᠨ ᠬᠣᠩᠭᠣᠨ ᠮᠡᠲᠠᠯ ᠤᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ (ᠮᠢᠨᠢᠰᠲᠧᠷᠢ ᠶᠢᠨ ᠲᠦᠪᠰᠢᠨ) ᠴᠢᠮᠡᠭ ᠤᠨ ᠲᠥᠯᠥᠪ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠵᠣᠩᠭᠣ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠬᠢᠮᠢᠶᠠᠨ ᠮᠠᠨᠠᠭᠡᠮᠡᠨᠲ ᠠᠰᠣᠰᠢᠶᠠᠴᠢ ᠪᠣᠯᠤᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠳᠣᠩᠰᠢᠩ 2×660MW ᠲᠥᠯᠥᠪ ᠨᠢᠭᠡᠳᠦᠯ ᠮᠣᠩᠲᠡ ᠲᠥᠯᠥᠪ ᠨᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠥᠪᠡᠷᠲᠡᠶᠢᠨ ᠵᠢᠷᠭᠤᠭᠠᠨ ᠤ ᠡᠨᠡᠷᠭᠢ ᠶᠢᠨ ᠪᠦᠷᠦ ᠮᠠᠨᠠᠭᠤᠯᠤᠭᠰᠠᠨ ᠪᠣᠯᠤᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠡᠬᠢᠯᠡᠭᠰᠡᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠶᠢᠨ ᠮᠡᠢ ᠰᠡᠯᠡᠬᠦ ᠶᠢᠨ ᠮᠠᠰᠢᠨ ᠲᠥᠯᠥᠪ ᠨᠢ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠡᠬᠢᠯᠡᠭᠰᠡᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠨᠢ ᠰᠢᠨ᠎ᠡ ᠬᠣᠷᠣᠨᠠᠪᠢᠷᠤᠰ ᠤᠨ ᠶᠠᠪᠤᠯᠢᠶᠠᠨ ᠤ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠲᠥᠯᠥᠥ 19.31 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠠᠨᠳᠢᠪᠠᠯᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ."
      ],
      "item2019": [
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠪᠣᠯᠣᠨ ᠳᠣᠩ ᠬᠤᠸᠠ ᠰᠢᠶᠠᠨᠰ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠦᠨᠢᠪᠡᠷᠰᠢᠲᠧᠲ ᠪᠣᠯᠤᠨ ᠬᠠᠷᠠᠨ ᠤᠨ ᠬᠣᠶᠠᠷ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠣᠭᠣᠯᠢᠶᠢᠨ ᠬᠡᠮᠵᠢᠶᠡᠨ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠯᠥᠪ ᠨᠢ ᠡᠬᠢᠯᠡᠭᠰᠡᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠤᠨ ᠰᠢᠨ᠎ᠡ ᠮᠠᠲᠧᠷᠢᠶᠠᠯ, ᠰᠢᠨ᠎ᠡ ᠡᠨᠡᠷᠭᠢ ᠪᠣᠯᠣᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ R&D ᠲᠥᠪ ᠪᠠᠶᠢᠭᠤᠯᠤᠯᠲᠠ ᠡᠬᠢᠯᠡᠭᠰᠡᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠨᠢ ᠮᠣᠩᠲᠡ ᠣᠷᠳᠣᠰ ᠤᠨ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠮᠠᠷᠠᠲᠣᠨ ᠨᠢᠭᠡᠳᠦᠯ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠭᠤᠷᠪᠤᠨ ᠣᠨ ᠤᠨ ᠲᠠᠯᠠᠨ᠎ᠠ ᠰᠫᠣᠨᠰᠣᠷ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠨᠢ ᠪᠷᠢᠺᠰ ᠤᠨ ᠰᠠᠮᠮᠢᠲ ᠪᠣᠯᠤᠨ ᠪᠷᠠᠰᠢᠯᠢᠶᠠ, ᠪᠷᠠᠽᠢᠯ ᠬᠣᠲᠠ ᠳᠤ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ."
      ],
      "item2018": [
        "ᠮᠡᠩᠲᠠᠢ ᠵᠢᠲᠤᠨ ᠨᠢ ᠥᠪᠥᠷ ᠮᠣᠩᠭᠣᠯ ᠤᠨ ᠭᠤᠸᠠᠩ ᠵᠣᠷᠨᠢ ᠰᠣᠰᠢᠶᠠᠯ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠲᠥᠯᠥᠥ 5 ᠰᠠᠶᠢ ᠶᠤᠸᠠᠨ ᠬᠠᠨᠳᠢᠪᠠᠯᠢ ᠬᠤᠳᠠᠯᠳᠤᠭᠠᠨ ᠪᠠᠶᠢᠭᠤᠯᠤᠭᠰᠠᠨ ᠬᠦᠮᠦᠨ ᠤᠨ ᠡᠮᠦᠨ ᠤ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠪᠣᠯᠣᠨ ᠨᠢᠳᠦ ᠶᠢᠨ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤ ᠲᠥᠯᠥᠥ.",
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ ᠶᠡᠷᠡᠨ᠎ᠡ ᠬᠠᠮᠢᠶᠠᠷᠠᠯ ᠤᠨ ᠮᠠᠨᠠᠭᠤᠯᠤᠯ ᠪᠣᠯᠣᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠶᠢᠨ ᠠᠮᠠᠨ ᠬᠦᠷᠴᠡᠬᠦ ᠮᠠᠨᠠᠭᠤᠯᠤᠯ ᠤᠨ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ."
      ],
      "item2017": [
        "ᠮᠡᠩᠲᠠᠢ ᠹᠠᠨᠵᠢᠶᠠᠴᠤᠨ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ 2014-2015 ᠣᠨ ᠳᠤ ᠵᠣᠩᠭᠣ ᠮᠡᠢ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠳᠡᠭᠡᠳᠦ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠠᠮᠠᠨ ᠬᠦᠷᠴᠡᠬᠦ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ ᠵᠣᠩᠭᠣ ᠮᠡᠢ ᠬᠤᠳᠤᠯᠤᠮᠵᠢ ᠶᠢᠨ ᠠᠰᠣᠰᠢᠶᠠᠴᠢ ᠪᠣᠯᠤᠨ.",
        "ᠮᠣᠩᠲᠡᠳᠠᠯᠠᠲ ᠤᠨ 900,000 ᠲᠣᠨ ᠤᠨ ᠶᠤᠸᠠᠨ ᠠᠯᠦᠮᠢᠨᠢᠦᠮ ᠤᠨ ᠲᠥᠯᠥᠪ ᠨᠢ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠦᠶ᠌ᠢᠯᠢᠳᠬᠡᠬᠦ ᠲᠥᠷᠥᠯ ᠤᠨ ᠪᠠᠯᠠᠭᠤᠨ ᠳᠠᠭᠤᠨ᠎ᠠ ᠪᠣᠯᠤᠨ ᠣᠨ ᠤᠨ ᠳᠣᠲᠣᠷ᠎ᠠ ᠠᠮᠵᠢᠯᠲᠠᠲᠠᠢ ᠲᠡᠭᠦᠨ᠎ᠡ ᠪᠠᠲᠤᠯᠠᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠠᠮᠠᠨ ᠬᠦᠷᠴᠡᠬᠦ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ."
      ],
      "item2016": [
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠠᠮᠠᠨ ᠬᠦᠷᠴᠡᠬᠦ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠣᠩᠲᠡ ᠵᠢᠲᠤᠨ ᠨᠢ ᠮᠣᠩᠲᠡ ᠣᠷᠳᠣᠰ ᠤᠨ ᠣᠯᠣᠨ ᠤᠯᠤᠰ ᠤᠨ ᠮᠠᠷᠠᠲᠣᠨ, ᠨᠢᠭᠡᠳᠦᠯ ᠬᠢᠷᠢᠶᠡᠯᠲᠡ ᠶᠢᠨ ᠰᠫᠣᠨᠰᠣᠷ ᠪᠣᠯᠤᠭᠰᠠᠨ."
      ],
      "item2015": [
        "ᠮᠡᠩᠲᠠᠢ ᠮᠠᠨᠯᠠᠢᠯᠢᠶᠠᠩ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ ᠬᠣᠶᠠᠳᠤᠭᠠᠷ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠠᠮᠠᠨ ᠪᠣᠯᠣᠨ ᠴᠢᠮᠡᠭ ᠤᠨ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠪᠤᠯᠢᠶᠠᠩᠭᠣᠤ ᠮᠡᠢ ᠮᠢᠨ᠎ᠡ ᠨᠢ ᠳᠥᠷᠪᠡᠨ ᠣᠨ ᠳᠠᠷᠠᠯᠠᠨ ᠦᠨᠳᠦᠰᠦᠨ ᠤ ᠨᠢᠭᠡᠳᠦᠭᠡᠷ ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠠᠮᠠᠨ ᠪᠣᠯᠣᠨ ᠴᠢᠮᠡᠭ ᠤᠨ ᠮᠢᠨ᠎ᠡ ᠪᠣᠯᠤᠭᠰᠠᠨ.",
        "ᠮᠡᠩᠲᠠᠢ ᠨᠢ 2014 ᠣᠨ ᠳᠤ ᠣᠷᠳᠣᠰ ᠤᠨ ᠬᠣᠲᠠ ᠶᠢᠨ ᠤᠯᠤᠰ ᠤᠨ ᠲᠠᠭᠰ ᠪᠦᠷᠦ ᠪᠣᠯᠣᠨ ᠣᠷᠣᠨ ᠤᠨ ᠲᠠᠭᠰ ᠪᠦᠷᠦ ᠶᠢᠨ A ᠲᠦᠪᠰᠢᠨ ᠤᠨ ᠲᠠᠭᠰᠢᠨ ᠬᠤᠳᠤᠯᠤᠮᠵᠢᠳᠤ ᠪᠣᠯᠤᠭᠰᠠᠨ."
      ]
    }
  },
  "hero": {
    "title": "ᠮᠡᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠡᠰᠢᠭ ᠳᠤ ᠲᠠᠯᠠᠷᠬᠠᠢ ᠨᠡᠶᠢᠵᠦ ᠢᠷᠡᠬᠦ",
    "cta": "ᠢᠯᠡᠷᠦ ᠰᠤᠷᠬᠤ"
  },
  "staffStyle": {
    "title": "ᠶᠤᠩᠭᠤᠶᠢᠨ ᠤᠨ ᠹᠦᠩᠴᠠᠢ",
    "source": "ᠯᠠᠢᠶᠦᠸᠠᠨ",
    "views": "ᠯᠢᠶᠠᠨᠴᠢᠶᠠᠨ",
    "card1": {
      "source": "",
      "views": "87",
      "title": "ᠮᠤᠩᠲᠠᠢ 2024 ᠡᠣᠷᠳᠤᠰ ᠮᠠᠷᠠᠲᠣᠨ ᠭᠤᠸᠠᠨᠹᠠᠩ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠶᠤᠸᠠᠨᠯᠢᠶᠠ ᠴᠢᠮᠠᠭᠠᠯᠠᠪᠠ",
      "description": [
        "8ᠡᠮ 22, ᠮᠤᠩᠲᠠᠢ 2024 ᠡᠣᠷᠳᠤᠰ ᠮᠠᠷᠠᠲᠣᠨ ᠭᠤᠸᠠᠨᠹᠠᠩ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠪᠠ᠃ ᠮᠤᠩᠲᠠᠢ ᠶᠢᠨ ᠮᠠᠷᠠᠲᠣᠨ ᠠᠬᠤᠪᠠᠴᠢᠳ ᠮᠠᠷᠠᠲᠣᠨ ᠤᠨ ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠴᠠᠮᠫᠢᠶᠣᠨ ᠰᠤᠨ ᠶᠢᠩᠵᠢᠶᠡ ᠪᠡᠨ ᠬᠤᠪᠢ ᠲᠠᠢᠮᠤᠰᠤᠯᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠪᠣᠯᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠡᠷᠡ ᠴᠢᠮᠠᠭᠠᠯᠠᠪᠠ, ᠰᠠᠶᠢᠨ ᠬᠤᠷᠠᠯᠳᠤᠬᠤ ᠬᠣᠶᠢᠮᠤᠷ ᠲᠠᠢ ᠠᠮᠤᠷ ᠪᠠᠶᠢᠵᠤ ᠪᠡᠷᠡ᠃",
        "ᠰᠤᠨ ᠶᠢᠩᠵᠢᠶᠡ, ᠵᠤᠩᠭᠤᠸᠠ ᠬᠤᠬᠡᠳ ᠤᠨ ᠬᠤᠯᠢᠶᠠᠩ ᠮᠠᠷᠠᠲᠣᠨ ᠷᠡᠺᠣᠷᠳ ᠬᠠᠮᠤᠭᠤᠯᠤᠭᠴᠢ, ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠬᠠᠭᠠᠰᠤ ᠮᠠᠷᠠᠲᠣᠨ ᠴᠠᠮᠫᠢᠶᠣᠨ, ᠳᠦᠷᠪᠡᠨ ᠬᠣᠶᠠᠷ ᠪᠡᠶᠢᠵᠢᠩ ᠮᠠᠷᠠᠲᠣᠨ ᠴᠠᠮᠫᠢᠶᠣᠨ, ᠪᠤᠰᠠᠨ ᠤᠨ ᠠᠵᠢᠶᠠ ᠶᠢᠨ ᠬᠣᠶᠠᠷ ᠠᠯᠲᠠᠨ ᠮᠡᠳᠠᠯ, ᠮᠠᠨᠢᠯᠠ ᠶᠢᠨ ᠠᠵᠢᠶᠠ ᠶᠢᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠴᠠᠮᠫᠢᠶᠣᠨ ᠬᠣᠶᠠᠷ ᠠᠯᠲᠠᠨ ᠮᠡᠳᠠᠯ᠃ ᠲᠡᠶᠢᠮᠦ ᠰᠠᠶᠢᠨ ᠬᠤᠯᠢᠶᠠᠩ ᠮᠠᠷᠠᠲᠣᠨ ᠴᠠᠭ ᠪᠣᠯᠤᠨ 2 ᠴᠠᠭ 19 ᠮᠢᠨᠤᠲ 39 ᠰᠡᠺᠤᠨᠳ, ᠰᠠᠶᠢᠨ ᠬᠠᠭᠠᠰᠤ ᠮᠠᠷᠠᠲᠣᠨ ᠴᠠᠭ ᠪᠣᠯᠤᠨ 1 ᠴᠠᠭ 8 ᠮᠢᠨᠤᠲ 40 ᠰᠡᠺᠤᠨᠳ᠃",
        "ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠲᠠᠯᠠᠪᠠᠢ ᠳᠠᠭᠤᠨ, ᠰᠤᠨ ᠶᠢᠩᠵᠢᠶᠡ ᠵᠢᠶᠠᠬᠤᠳᠠᠯ ᠪᠦᠬᠦᠨ ᠨᠢ ᠬᠠᠮᠤᠭᠤᠯᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠡᠷᠡ ᠴᠢᠮᠠᠭᠠᠯᠠᠪᠠ᠃ ᠬᠤᠷᠤᠮ ᠨᠢ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠤᠨ ᠬᠤᠷᠤᠯᠳᠤᠬᠤ ᠪᠠᠶᠢᠳᠠᠯ ᠪᠠᠷᠢᠵᠤ ᠬᠠᠷᠠᠬᠤ ᠬᠣᠶᠢᠮᠤᠷ, ᠲᠡᠶᠢᠮᠦ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠪᠡᠷᠡ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠨᠢ ᠰᠠᠶᠢᠨ ᠬᠤᠷᠤᠯᠳᠤᠬᠤ ᠠᠷᠭᠠ ᠪᠣᠯᠤᠨ ᠷᠢᠳᠮ ᠨᠢ ᠮᠠᠰᠢᠳᠠᠬᠤ ᠲᠤᠰᠢ ᠬᠦᠷᠡᠪᠡ᠃",
        "ᠮᠠᠷᠠᠲᠣᠨ ᠪᠣᠯᠤᠨ ᠤᠯᠤᠰ ᠤᠨ ᠬᠠᠷᠠᠨᠴᠢ ᠪᠠᠶᠠᠷ, ᠮᠣᠨ ᠬᠢᠴᠢᠶᠡᠯ ᠤᠨ ᠰᠢᠯᠤᠭᠤᠨ ᠰᠢᠯᠤᠭᠤᠯᠲᠦ᠃ 5 ᠺᠢᠯᠣᠮᠡᠲᠡᠷ ᠤᠨ 42.195 ᠺᠢᠯᠣᠮᠡᠲᠡᠷ ᠬᠦᠷᠲᠡᠯ, ᠬᠤᠮ ᠪᠦᠬᠦᠨ ᠤᠨ ᠵᠢᠷᠭᠤᠯ ᠪᠣᠯᠤᠨ ᠪᠢᠳᠡ ᠶᠢᠨ ᠬᠦᠴᠢᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠨ᠃ ᠬᠤᠷᠤᠯᠳᠤ, ᠪᠠᠶᠢᠵᠤ ᠪᠠᠶᠢᠬᠤ ᠪᠣᠯᠤᠨ ᠰᠤᠷᠤᠬᠤ, ᠰᠢᠯᠢ ᠶᠢᠨ ᠭᠠᠯ ᠨᠢ ᠳᠤᠮᠳᠤᠮᠵᠢ, ᠪᠠᠶᠢᠨ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠬᠤᠯᠢᠶᠠᠩ ᠮᠡᠷᠭᠡᠨ ᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ ᠨᠢ ᠨᠡᠭᠡᠬᠤ᠃"
      ]
    },
    "card2": {
      "source": "",
      "views": "238",
      "title": "ᠵᠤ ᠮᠤᠩᠲᠠᠢ ᠭᠷᠤᠫ ᠤᠨ ᠪᠦᠬᠦ ᠬᠤᠬᠡᠳ ᠤᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠪᠠᠶᠠᠷ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠦᠨᠳᠦᠰᠦᠨ᠃ ",
      "description": [
        "ᠮᠠᠷᠲ ᠤᠨ 3 ᠡᠮ ᠪᠣᠯᠤᠨ ᠴᠤᠨ ᠶᠢ ᠳᠤᠮᠳᠤᠮᠵᠢ᠃ 3ᠡᠮ 8, ᠮᠤᠩᠲᠠᠢ ᠭᠷᠤᠫ ᠤᠨ ᠪᠦᠬᠦ ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠶᠢ ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠬᠤᠬᠡᠳ ᠤᠨ ᠪᠠᠶᠠᠷ ᠨᠢ ᠬᠦᠷᠲᠡᠪᠡ᠃ ᠡᠨᠡᠬᠦ ᠪᠣᠯᠤᠨ 113ᠳᠤᠭᠠᠷ ᠳᠡᠯᠡᠬᠡᠢ ᠶᠢᠨ ᠬᠤᠬᠡᠳ ᠤᠨ ᠪᠠᠶᠠᠷ ᠪᠣᠯᠤᠨ ᠮᠢᠨᠤ ᠤᠯᠤᠰ ᠤᠨ 100ᠳᠤᠭᠠᠷ ᠬᠤᠬᠡᠳ ᠤᠨ ᠪᠠᠶᠠᠷ᠃ ᠭᠷᠤᠫ ᠤᠨ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠬᠣᠶᠣᠷ ᠬᠤᠮᠤᠨ ᠪᠣᠯᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠬᠣᠶᠣᠷ ᠰᠠᠮᠤᠨ ᠨᠢ ‘ᠵᠢᠷᠮᠠᠲ ᠬᠤᠬᠡᠳ ᠤᠨ ᠴᠠᠷᠮ ᠪᠯᠤᠮᠢᠩ’ ᠭᠡᠳᠡᠭ ᠲᠡᠮᠠ ᠲᠠᠢ ᠪᠠᠶᠠᠷ ᠤᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠨᠢ ᠵᠢᠷᠭᠤᠯᠪᠡ, ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠨᠢ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠠᠷ ᠪᠣᠯᠤᠨ ᠮᠠᠰᠢ ᠮᠠᠷᠲᠠᠭᠳᠠᠬᠤ ᠪᠠᠶᠠᠷ ᠨᠢ ᠳᠤᠮᠳᠤᠮᠵᠢ᠃",
        "ᠭᠷᠤᠫ ᠤᠨ ᠫᠠᠷᠲᠢ ᠬᠣᠮᠢᠲᠢ, ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠬᠣᠶᠣᠷ ᠬᠤᠮᠤᠨ ᠪᠣᠯᠤᠨ ᠶᠤᠳᠠᠨ ᠬᠣᠮᠢᠲᠢ ᠶᠢᠨ ᠲᠣᠮᠢᠯᠠᠭᠤᠯᠤᠭᠴᠢ ᠶᠢᠨ ᠲᠤᠰᠢ ᠪᠣᠯᠤᠨ ᠸᠠᠩ ᠬᠤᠢ ᠪᠡᠨ ᠪᠦᠬᠦ ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠪᠠᠶᠠᠷ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠵᠤ ᠬᠦᠰᠡᠪᠡ, ᠭᠷᠤᠫ ᠤᠨ ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠪᠦᠬᠦᠨ ᠨᠢ ᠢᠷᠡᠬᠦᠢ ᠶᠢᠨ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠪᠣᠯᠤᠨ ᠠᠮᠤᠷ ᠤᠨ ᠳᠠᠬᠢᠨ ᠮᠡᠷᠭᠡᠨ ᠪᠣᠯᠤᠨ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ, ᠮᠤᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠳᠡᠮᠡᠨᠤᠷ ᠨᠢ ᠬᠠᠮᠤᠭᠤᠯᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ, ᠬᠦᠴᠦᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠮᠠᠰᠢ ᠬᠢᠴᠢᠶᠡᠯ ᠤᠨ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠶᠢᠬᠤ᠃",
        "ᠶᠠᠩ ᠸᠡᠨᠶᠠᠨ, ᠡᠣᠷᠳᠤᠰ ᠤᠨ ᠨᠢᠰᠬᠦᠯ ᠤᠨ ᠬᠠᠮᠤᠭ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦᠴᠢ ᠪᠣᠯᠤᠨ, ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠲᠠᠯᠠᠪᠠᠢ ᠳᠠᠭᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠪᠡᠷᠡ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠨᠢ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠪᠢᠵᠢᠨᠡᠰ ᠡᠲᠢᠺᠡᠲ ᠨᠢ ᠰᠤᠷᠤᠬᠤ᠃",
        "ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠬᠡᠰᠡᠭ ᠤᠨ ᠬᠤᠷᠤᠮ, ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠨᠢ ᠬᠦᠴᠦᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠪᠣᠯᠤᠨ ᠬᠢᠴᠢᠶᠡᠯ ᠤᠨ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠲᠠᠢ ᠬᠤᠷᠤᠯᠳᠤᠪᠡ᠃ ᠬᠠᠮᠤᠭ ᠮᠡᠷᠭᠡᠨ ᠤᠨ ᠠᠯᠭᠠ ᠲᠠᠰᠤᠷᠠᠬᠤ ᠪᠠᠶᠢᠵᠤ, ᠬᠡᠰᠡᠭᠯᠡᠯ ᠪᠣᠯᠤᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠬᠤᠷᠤᠮ ᠨᠢ, ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠨᠢ ᠮᠠᠰᠢ ᠰᠠᠶᠢᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠤᠯᠠᠮᠵᠢᠯᠠᠯ ᠨᠢ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ᠃",
        "ᠡᠨᠡᠬᠦ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠨᠢ ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠨᠢ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠡᠲᠢᠺᠡᠲ ᠨᠢ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠮᠣᠨ, ᠮᠠᠰᠢ ᠰᠠᠶᠢᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠬᠡᠰᠡᠭ ᠤᠨ ᠬᠤᠷᠤᠮ ᠲᠠᠢ ᠬᠤᠬᠡᠳ ᠤᠨ ᠶᠤᠩᠭᠤᠶᠢᠨ ᠨᠢ ᠬᠠᠮᠤᠭᠤᠯᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠲᠡᠮᠤᠨ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠨᠢ ᠬᠤᠷᠤᠮᠵᠢᠵᠤ, ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠨᠢ ᠰᠠᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ ᠠᠮᠤᠷ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠶᠢᠬᠤ᠃",
        "ᠬᠤᠬᠡᠳ ᠪᠦᠬᠦᠨ ᠨᠢ ᠥᠪᠡᠷ ᠤᠨ ᠠᠮᠤᠷ ᠤᠨ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ ᠪᠣᠯᠤᠨ ᠬᠦᠴᠦᠨ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠲᠠᠢ ᠪᠠᠶᠢᠬᠤ, ᠮᠣᠨ ᠮᠠᠰᠢ ᠴᠤᠮᠤᠭᠠᠢ ᠬᠤᠬᠡᠳ ᠪᠣᠯᠤᠨ ᠮᠣᠨ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ᠃"
      ]
    },
    "card3": {
      "source": "",
      "views": "445",
      "title": "ᠠᠷᠪᠠᠨ ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠳᠤ ᠬᠦᠷᠢᠶᠡᠨ ᠴᠢᠨᠠᠷ ᠦᠨ ᠠᠵᠢᠯ ᠦᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠦᠨ ᠥᠷᠦᠯᠳᠦᠭᠡᠨ ᠳᠥᠭᠡᠳᠦᠭᠰᠡᠨ!",
      "description": [
        "ᠳᠥᠷᠪᠡᠳᠦᠭᠠᠷ ᠰᠠᠷ᠎ᠠ ᠦᠨ ᠨᠢᠭᠡᠨ ᠨᠠᠢᠮᠠᠳᠤ ᠦᠳᠦᠷ ᠤᠨ ᠠᠷᠪᠠᠨ ᠭᠤᠷᠪᠠᠳᠤᠭᠠᠷ ᠬᠦᠷᠢᠶᠡᠨ ᠴᠢᠨᠠᠷ ᠦᠨ ᠠᠵᠢᠯ ᠦᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠦᠨ ᠥᠷᠦᠯᠳᠦᠭᠡᠨ ᠠᠮᠵᠢᠯᠲᠠᠢ ᠳᠦᠷᠪᠡᠭᠡᠯᠡᠭᠰᠡᠨ. ᠮᠢᠩᠭᠠ ᠨᠢᠭᠡ ᠵᠠᠭᠤᠨ ᠲᠠᠪᠢᠨ ᠬᠣᠶᠠᠷ ᠦᠷᠨᠢᠭᠦᠯᠦᠭᠴᠢ ᠡᠴᠡ ᠮᠢᠩᠭᠠ ᠨᠢᠭᠡ ᠵᠠᠭᠤᠨ ᠳᠠᠪᠤᠨ ᠠᠷᠪᠠᠨ ᠠᠵᠢᠯ ᠦᠨ ᠬᠦᠮᠦᠨ ᠶᠢ ᠠᠯ ᠨᠡᠭᠡᠭᠡᠳ ᠵᠡᠳᠡᠢ ᠲᠠᠩ ᠤᠷᠴᠢᠬᠠᠢ ᠳᠤ ᠮᠠᠭᠲᠠᠬᠠᠢ ᠪᠠ ᠱᠠᠭᠤᠷᠳᠠᠪᠠ.",
        "ᠠᠷᠪᠠᠨ ᠵᠢᠯᠬᠠᠢ ᠦᠨ ᠬᠡᠰᠦᠭ ᠬᠡᠷᠦᠭᠰᠡᠯ ᠦᠨ ᠳᠠᠷᠠᠭ᠎ᠠ ᠥᠷᠦᠯᠳᠦᠭᠡᠨ ᠠ ᠬᠠᠨ ᠲᠠᠪᠤᠨ ᠵᠢᠷᠦᠭᠠᠳᠤᠭᠠᠷ ᠢ ᠵᠠᠭᠠᠰᠠᠨ, ᠵᠡᠳᠡᠢ ᠬᠣᠶᠠᠷᠠᠳᠤᠭᠠᠷ ᠢ ᠵᠠᠭᠠᠰᠠᠨ, ᠨᠠᠢᠮᠠᠨ ᠵᠢᠯᠬᠠᠢ ᠦᠨ ᠭᠤⰋᣤᠳᠤᠭᠠᠷ ᠢ ᠵᠠᠭᠠᠰᠠᠨ. ᠲᠡᠭᠦᠨ ᠦ ᠥᠷᠦᠯᠳᠦᠭᠡᠨ ᠳᠤ ᠰᠢᠯᠢᠳᠡᠭ ᠦᠨ ᠭᠠᠷᠭᠠᠯᠲᠠ ᠨᠢ ᠲᠡᠭᠦᠨ ᠦ ᠰᠠᠢᠢᠨ ᠴᠢᠨᠠᠷ ᠪᠠ ᠳᠦᠯᠢᠯᠭᠠᠨ ᠠᠵᠢᠯ ᠢ ᠢᠯᠡᠷᠡᠭᠦᠯᠪᠡ, ᠠᠷᠪᠠ ᠮᠤᠷᠢ ᠮᠡᠳᠦᠯᠬᠦ ᠪᠠ ᠪᠢᠶᠠ ᠵᠢᠨ ᠬᠤᠪᠢᠷᠠᠯᠳᠠ ᠪᠠ ᠪᠢᠶᠠ ᠵᠢ ᠦᠯᠦ ᠦᠭᠦᠯᠡᠵᠦ ᠨᠡᠪᠲᠡᠷᠡᠬᠦ ᠰᠦᠷᠤᠭ ᠢ ᠬᠠᠷᠠᠭᠰᠢᠪᠠ.",
        "ᠬᠦᠷᠢᠶᠡᠨ ᠴᠢᠨᠠᠷ ᠦᠨ ᠠᠵᠢᠯ ᠦᠨ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠦᠨ ᠥᠷᠦᠯᠳᠦᠭᠡᠨ ᠨᠢ ᠬᠤᠮᠤᠰ ᠦᠨ ᠠᠵᠢᠯ ᠦᠨ ᠴᠢᠳᠠᠪᠠᠷᠢ ᠪᠠ ᠠᠵᠢᠯ ᠦᠨ ᠲᠦᠪᠰᠢᠨ ᠦ ᠪᠡᠷ ᠨᠢᠬᠡᠨ ᠬᠦᠪᠢ ᠤᠨ ᠪᠠᠢᠢᠷᠢᠯᠠᠯᠲᠠ ᠨᠢ. ᠡᠨᠡ ᠬᠠᠮᠤᠭ ᠦ ᠹᠡᠴᠢᠭ ᠤᠨ ᠪᠤᠭᠤᠮᠳᠠ ᠢᠨᠠᠭ ᠦᠨ ᠪᠦᠲᠦᠭᠡᠨ ᠠᠵᠢᠯᠲᠠᠨ ᠦ ᠬᠦᠮᠦᠨ ᠳᠤ ᠰᠦᠷᠭᠠᠭᠤᠯᠢ ᠪᠠ ᠰᠣᠯᠢᠭᠠᠯᠳᠠ ᠦᠨ ᠦᠯᠢᠭᠡᠷ ᠢ ᠢᠳᠡᠭᠡᠬᠦ ᠰᠢᠨᠠᠭᠰᠠᠨ ᠳᠦᠮᠡᠷ ᠪᠠᠢᠢᠭᠤᠯᠤᠯᠲᠠ ᠨᠢ. ᠲᠦᠮᠦᠷᠳᠡᠯ ᠦᠨ ᠳᠤᠷᠤᠰᠬᠠᠢ ᠰᠦᠷᠪᠦᠷᠢ ᠪᠦᠯᠭᠡᠪᠡ.",
        "ᠨᠠᠮ ᠦᠨ ᠪᠢᠴᠢᠭ ᠳᠠᠷᠤᠭ᠎ᠠ ᠮᠠᠷᠤ ᠭᠤᠷᠪᠠᠨ ᠠᠮᠢᠳᠤ ᠪᠦᠬᠦ ᠰᠠᠭᠤᠷᠢᠳ ᠢ ᠰᠢᠭᠦᠳᠡᠯ ᠦᠨ ᠪᠠᠶᠠᠴᠠᠯ ᠨᠠᠷᠠᠵᠤ ᠬᠦᠷᠦᠯᠦᠳᠡᠢ ᠺᠠᠩ ᠥᠶᠦᠴᠧᠩ ᠠᠪᠴᠢᠷᠠᠯ ᠪᠠᠷ ᠰᠠᠭᠤᠷᠢᠳ ᠦᠯᠦ ᠪᠠᠢᠵᠤ ᠪᠤᠶᠤ ᠠᠮᠵᠢᠯᠲᠠ ᠵᠢᠨ ᠦᠷᠯᠢᠯ ᠢ ᠦᠷᠭᠦᠯᠵᠢᠯᠡᠵᠦ ᠪᠠᠢᠵᠤ, ᠳᠤᠷᠰᠤᠨ ᠶᠢᠨ ᠨᠠᠮᠤᠨ ᱳᠰᠢᠭᠤᠳ ᠢ ᠬᠤᠪᠢᠵᠤ, ᠰᠠᠢᠢᠨ ᠠᠵᠢᠯ ᠪᠦᠷᠢᠳᠦᠭᠡᠵᠦ, ᠬᠤᠪᠢᠶᠠᠯ ᠦᠨ ᠦᠯᠦ ᠦᠷᠡ ᠪᠦᠷᠢᠳᠦᠭᠡᠯ ᠳᠤ ᠰᠢᠨᠠ ᠤᠷᠤᠯᠰᠢᠯ ᠢ ᠬᠤᠪᠢᠵᠤ ᠪᠠᠢᠵᠤ, ᠲᠤᠮᠤᠷᠴᠢᠯᠠᠯ ᠦᠨ ᠬᠤᠪᠢᠶᠠᠯ ᠦᠨ ᠮᠤⰋᣠ ᠦᠯᠦ ᠪᠠᠢᠵᠤ ᠬᠦᠷᠦᠨᠡ; ᠪᠤᠰᠤᠳ ᠠᠵᠢᠯᠲᠠᠨ ᠤ ᠬᠦᠮᠦᠨ ᠢ ᠰᠠᠭᠤᠷᠢᠳ ᠤᠨ ᠰᠦᠷᠭᠠᠭᠤᠯᠢ ᠳᠤᠰ ᠰᠦⰋᣩᠳ ᠢ ᠰᠣᠩᠭᠣᠵᠤ, ᠦᠪᠡᠷᠰᠢᠳ ᠤᠨ ᠶᠠᠭᠤᠮᠠ ᠳᠤᠰ ᠬᠣᠷᠢᠵᠤ, ᠳᠤⰀᠤᠯ ᠦ ᠶᠠᠭᠤᠮᠠ ᠳᠤᠰ ᠬᠣᠷᠢᠯᠳᠠᠵᠤ ᠬᠦᠷᠦᠨᠡ; ᠪᠤᠭᠤᠳᠠ ᠬᠡᠰᠢᠭ ᠪᠠ ᠪᠦⰋⰀᠶ ᠠᠴᠠ ᠤᠯᠢᠳᠤ ᠤᠶᠠᠯᠠᠨ ᠪᠠᠶᠠᠷ ᠢ ᠵᠠᠰᠠᠯ ᠦᠨ ᠪᠠᠯᠠᠭᠰᠠᠨ ᠨ᠎ᠡ ᠰᠣᠨᠢᠷᠬᠠᠵᠤ, ᠳᠡᠭᠡᠳᠤ ᠠᠷᠭᠠ ᠮᠡⰀᠬᠡᠢ ᠠᠷᠭᠠ ᠤᠯᠠᠨ ᠤ ᠪᠤᠷᠢᠶᠠᠯ ᠪᠠ ᠳᠤⰍᠠᠯᠠᠯᠳᠠ ᠳᠤ ᠵᠠᠷᠠᠯᠢᠭ ᠳᠤⰍᠠᠯᠠᠯᠳᠠ ᠦᠨ ᠬᠢᠪᠡᠷᠢ ᠢ ᠨᠤᠭᠤᠳᠠᠯᠠᠵᠤ, ᠬᠠᠪᠤᠷᠢ ᠦᠨ ᠰᠤᠷᠭᠠᠭᠤᠯᠢ ᠮᠠᠷᠭᠠᠳ ᠰᠤⰊᣠ ᠠᠵᠢᠯᠲᠠᠨ ᠤ ᠬᠤᠪᠢᠶᠠᠯ ᠦᠨ ᠪᠣⰀᠬᠢᠮᠳᠠᠭᠤⰋᠭᠠᠬᠠᠭᠤⰋ ᠨᠢ ᠢⰊᠡᠵᠦ ᠨᠤⰍᠠᠯᠤᠭᠴᠢᠯᠠᠨ ᠬᠦᠷᠦᠨᠡ."
      ]
    },
    "card4": {
      "source": "",
      "views": "1233",
      "title": "ᠮᠤᠩᠲᠠᠢ ᠭᠷᠤᠫ ᠤᠨ ᠳᠤᠰᠤᠨ 13 ‘ᠪᠢᠶᠣᠨᠳ ᠺᠤᠫ’ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠨᠡᠭᠡᠬᠡᠪᠡ",
      "description": [
        "4ᠡᠮ 12, ᠪᠦᠷᠢᠰ ᠨᠣᠭᠣᠭᠠᠨ ᠪᠣᠯᠤᠨ ᠬᠠᠷᠠᠩᠭᠤᠢ ᠶᠢᠨ ᠬᠡᠶᠢ ᠬᠦᠴᠦᠨ ᠪᠣᠯᠤᠪᠡ᠃ ᠡᠨᠡᠬᠦ ᠬᠠᠷᠠᠩᠭᠤᠢ ᠶᠢᠨ ᠴᠠᠭᠠᠨ ᠴᠡᠴᠡᠭ ᠨᠡᠭᠡᠬᠡᠪᠡ ᠪᠣᠯᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠰᠤᠷᠤᠬᠤ, ᠮᠤᠩᠲᠠᠢ ᠶᠢᠨ ᠬᠤᠮᠤᠨ ᠳᠤᠰᠤᠨ 13 ‘ᠪᠢᠶᠣᠨᠳ ᠺᠤᠫ’ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠬᠦᠯᠢᠨ ᠬᠦᠷᠴᠡᠪᠡ᠃ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ 17 ᠡᠳᠦᠷ ᠤᠷᠲᠤ ᠪᠣᠯᠤᠪᠡ, 8 ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠲᠠᠯᠠᠪᠠᠢ ᠪᠣᠯᠤᠨ 39 ᠬᠤᠷᠤᠮ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠲᠠᠯᠠᠪᠠᠢ᠃ ᠲᠡᠮᠳᠡᠭᠯᠡᠯᠴᠢᠳ ᠤᠨ ᠲᠣᠭ᠎ᠠ 1,000 ᠦᠨ ᠳᠡᠭᠡᠷ᠎ᠡ ᠬᠦᠷᠴᠡᠪᠡ, ᠡᠨᠡ ᠪᠣᠯ ᠲᠦᠮᠡᠷ ᠤᠨ ᠬᠤᠮᠤᠨ ᠤᠨ ᠲᠣᠭ᠎ᠠ ᠶᠢᠨ ᠬᠠᠮᠤᠭ ᠤᠨ ᠲᠣᠭ᠎ᠠ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ",
        "‘ᠪᠢᠶᠣᠨᠳ ᠺᠤᠫ’ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠮᠡᠷᠭᠡᠵᠢᠯ ᠪᠣᠯᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠬᠠᠮᠤᠭᠤᠯᠤᠬᠤ ᠲᠠᠯᠠᠪᠠᠢ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠮᠣᠨ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠰᠤᠷᠤᠬᠤ, ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠲᠠᠯᠠᠪᠠᠢ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠲᠡᠮᠳᠡᠭᠯᠡᠯᠴᠢᠳ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠬᠤᠷᠤᠮ ᠲᠡᠳᠡ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠬᠣᠶᠠᠷ ᠬᠦᠷᠴᠡᠬᠦ, ᠥᠪᠡᠷ ᠢ ᠳᠡᠭᠡᠷ᠎ᠡ ᠰᠤᠷᠤᠬᠤ, ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠮᠡᠷᠭᠡᠨᠳᠡᠬᠦ ᠬᠤᠮᠤᠨ ᠤᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ, ᠪᠣᠯᠤᠨ ᠬᠠᠷᠢᠯᠴᠠᠬᠤ ᠰᠤᠷᠤᠬᠤ ᠤᠨ ᠬᠤᠷᠤᠮ ᠪᠣᠯᠤᠨ ᠥᠪᠡᠷ ᠢ ᠪᠠᠶᠢᠵᠤ ᠪᠠᠶᠢᠬᠤ᠃",
        "ᠡᠨᠡᠬᠦ ᠪᠣᠯ ᠬᠦᠳᠡᠯᠮᠦᠷ ᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠪᠣᠯᠤᠨ᠎ᠠ᠃ ᠲᠡᠮᠳᠡᠭᠯᠡᠯ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠣᠯᠤᠨ ᠰᠤᠷᠤᠬᠤ, ᠮᠣᠨ ᠲᠡᠳᠡ ᠶᠢᠨ ᠬᠣᠶᠢᠮᠤᠷ ᠪᠣᠯ ᠮᠡᠨᠡᠵᠢᠮᠡᠨᠲ ᠪᠣᠯᠤᠨ ᠰᠤᠯᠲᠤᠷ᠃ ᠭᠷᠤᠫ ᠤᠨ ᠲᠡᠷᠢᠶᠡᠨ ᠤᠨ ᠲᠤᠰᠬᠠᠯᠴᠢ ᠰᠢᠶᠠᠩ ᠫᠡᠢᠯᠢᠨ ᠨᠡᠭᠡᠬᠡᠯ ᠤᠨ ᠦᠭᠡ ᠶᠢᠨ ᠬᠤᠷᠤᠮ ᠬᠤᠯᠢᠨ ᠬᠡᠯᠡᠪᠡ ᠪᠣᠯᠤᠨ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠬᠦᠰᠡᠬᠦ, ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠣᠯᠤᠬᠤ ᠲᠠᠢ ᠬᠦᠴᠦᠨ ᠬᠦᠯᠢᠬᠦ, ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠪᠣᠯᠤᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠥᠪᠡᠷ ᠤᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢ ᠬᠠᠮᠤᠭ ᠤᠨ ᠬᠡᠷᠡᠭᠯᠡᠬᠦ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠮᠣᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠲᠡᠳᠡ ᠶᠢᠨ ᠰᠢᠨ᠎ᠡ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠰᠤᠷᠤᠬᠤ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠬᠦᠴᠦᠨ ᠬᠤᠯᠢᠬᠦ᠃",
        "ᠰᠢᠨ᠎ᠡ ᠴᠠᠭ ᠤᠨ ᠬᠤᠷᠤᠮ, ᠬᠣᠮᠫᠠᠨᠢ ᠨᠣᠭᠣᠭᠠᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠲᠡᠬᠨᠣᠯᠣᠵᠢ ᠶᠢᠨ ᠬᠦᠴᠦᠨ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠰᠲᠷᠠᠲᠡᠭᠢ ᠪᠠᠷᠢᠮᠵᠢᠯᠠᠬᠤ ᠪᠣᠯᠤᠨ᠎ᠠ, ᠰᠢᠨ᠎ᠡ ᠴᠢᠮᠠᠭᠠᠯᠠᠯ ᠤᠨ ᠬᠦᠷᠤᠮ ᠲᠦᠯᠬᠦ ᠬᠤᠷᠤᠮ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ, ᠰᠠᠨᠠᠭᠤᠯᠲᠦ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ, ᠮᠣᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ, ᠮᠣᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠶᠢᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ᠃ ᠬᠣᠮᠫᠠᠨᠢ ᠮᠣᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠲᠠᠯᠠᠪᠠᠢ ᠶᠢ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ, ᠰᠲᠷᠠᠲᠡᠭᠢ ᠶᠢᠨ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠬᠤ, ᠮᠣᠨ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠬᠤ ᠰᠢᠯᠢᠭᠤᠯᠲᠦ ᠶᠢᠨ ᠰᠢᠰᠲᠡᠮ ᠪᠣᠯᠤᠨ ᠮᠡᠬᠠᠨᠢᠵᠮ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ ᠪᠣᠯᠤᠨ ᠬᠤᠷᠤᠬᠤ ᠬᠦᠨ ᠪᠦᠬᠦᠨ ᠤᠨ ᠲᠠᠯᠠᠪᠠᠢ ᠶᠢ ᠬᠤᠷᠤᠮ ᠰᠤᠷᠤᠬᠤ᠃"
      ]
    }
  },
  "#app": " translate",
  "": {
    "": {
      "/locales/${locale}": {
        "json": " translate"
      }
    },
    "job-details-expanded": " translate",
    "submit-button": " translate"
  },
  "content-length": " translate",
  "content-type": " translate",
  "/": " translate",
  "a": " translate",
  "button": " translate",
  "${namespace}": {
    "${key}": " translate"
  },
  "canvas": " translate",
  "2d": " translate",
  "Default Title": " translate",
  "Menu": " translate",
  "Group Website Group": " translate",
  "Monte Group": " translate",
  "Apt": " translate",
  "Staff Channel": " translate",
  "Collaborative Office": " translate",
  "Corporate Email": " translate",
  "English": " translate",
  "Chinese": " translate",
  "Mongolian": " translate",
  "Close": " translate",
  "Language": " translate"
}
const ch={
    "nav": {
        "Group Website Group": "集团网站",
        "Staff Channel": "员工通道",
        "Chinese": "中文",
        "English": "英文",
        "Mongolian": "蒙古文",
        "Close": "关闭",
        "Monte Group": "蒙泰集团",
        "Apt": "APT",
        "Collaborative Office": "协同办公",
        "Corporate Email": "企业邮箱",
        "Menu": "菜单",
        "Language": "语言"
    },
    "Join Us": "加入我们",
    "tabs": {
        "Social Recruitment": "社会招聘",
        "Campus Recruitment": "校园招聘",
        "Staff Style": "员工风采"
    },
    "form": {
        "Please enter job keywords": "请输入职位关键词",
        "Job Category": "职位类别",
        "Work Location": "工作地点",
        "Search": "搜索",
        "2025-03-14": "2025-03-14",
        "We are willing to work together with all people of insight to create a better future!": "我们愿与所有有识之士携手共创美好未来！",
        "No relevant information found!": "未找到相关信息！",
        "Salary Range": "薪资范围",
        "Contact": "联系人",
        "Contact Number": "联系电话",
        "Job Responsibilities": "岗位职责",
        "Qualifications": "任职资格",
        "Submit Your Resume": "提交简历",
        "Group Management Trainee": "集团管理培训生",
        "Undergraduate": "本科",
        "50 people": "50人",
        "All": "全职",
        "Full-time": "全职",
        "Ordos City": "鄂尔多斯市",
        "7-15K/month": "7-15K/月",
        "Mr. Qiao": "乔先生",
        "04773898646": "04773898646",
        "rotationPlan": "轮岗计划：",
        "rotationPoint1": "✅ 一年周期，涵盖“职能+生产+专业”三大板块",
        "rotationPoint2": "✅ 跨部门实践，全面了解集团运营",
        "mentorship": "导师机制：",
        "mentorshipPoint1": "✅ 3+1导师制（人力资源+专业+轮岗+高管导师）",
        "mentorshipPoint2": "✅ 全方位指导，助力职业转型",
        "educationRequirement": "学历要求：本科及以上学历（重点院校优先）",
        "recruitingMajors": "招聘专业：法学、管理学、数学、财务管理、项目管理、汉语言文学、外语、食品、酿造、园艺、农学、动物科学、冶金、材料、机械、设备、能源与动力、电气、化学与化工、计算机、市场营销、经济与贸易、工程管理、安全管理、环境工程、供应链管理、新能源科学、风电、矿产开采与加工"
    },
    "partyBuilding": {
        "title": "党建工作",
        "source": "来源",
        "views": "浏览量",
        "card1": {
            "source": "",
            "views": "94",
            "title": "蒙泰集团党委举办'铸牢中华民族共同体意识'主题党日活动暨庆祝建党103周年",
            "description": [
                "6月27日，集团公司党委开展了'铸牢中华民族共同体意识'主题党日活动暨庆祝建党103周年。组织部分党员代表和积极分子聆听专题党课，观看爱国主义影片，重温入党誓词。积极落实上级党组织关于开展党纪学习教育和铸牢中华民族共同体意识的要求，充分发挥企业党组织战斗堡垒作用和党员先锋模范作用，以高质量党建促进高质量发展，为企业转型发展和社会事业繁荣作出贡献。",
                "集团党委书记、副总裁康维成，集团党委副书记、副总裁高占荣等党员干部以及来自各支部的60多名党员代表参加了活动。",
                "上午，公司邀请内蒙古党校国家理论政策教研部副主任杨兴猛教授举办了'牢牢把握铸牢中华民族共同体意识工作主线'专题讲座。杨教授理论联系实际，深入浅出地进行了讲解，使大家深刻理解了中华民族共同体意识是中华民族历史发展的必然结果，也使大家对铸牢中华民族共同体意识的重大意义和深刻内涵有了更全面、更深刻的认识。",
                "随后，大家观看了爱国主义影片《志愿军——雄兵出击》。该片是红色爱国主义影片《志愿军》三部曲的第一部，以中央决定出兵朝鲜战争开始，以签署停战协定结束，全景式、多层次地展现了英勇的中国人民志愿军在抗美援朝战争中的伟大事迹，讴歌了志愿军战士浴血奋战的英雄壮举，谱写了不朽的民族精神史诗，让人热泪盈眶，久久不能忘怀，激励我们铭记历史，珍爱和平，不畏困难，勇敢前行。",
                "党员代表重温入党誓词，在党旗前庄严宣誓，追寻入党初心：'我志愿加入中国共产党...随时准备为党和人民牺牲一切，永不叛党。' 让党员不忘崇高使命和崇高理想，牢记入党时对党组织的承诺，让思想得到洗礼，党性得到锤炼，整装再出发。",
                "丰富多彩、趣味盎然的团队游戏让大家在放松的同时体验到团结协作、拼搏进取的企业精神。",
                "接下来，蒙泰集团的广大党员干部将以此次主题党日活动为契机，坚定信心，努力工作，在今后的工作和生活中恪守对党的承诺，争做立足本职的先锋，以更高的士气和进取精神全面推进集团公司的高质量转型升级。"
            ]
        },
        "card2": {
            "source": "",
            "views": "238",
            "title": "蒙泰集团党委在内蒙古成川干部学院举办学习贯彻'习近平新时代中国特色社会主义思想'专题培训班",
            "description": [
                "值此全国庆祝中国共产党成立102周年之际，为了学习贯彻习近平新时代中国特色社会主义思想，弘扬伟大的建党精神，进一步提高广大党员和入党积极分子的党性修养和履职能力，蒙泰集团党委于6月30日至7月2日在内蒙古成川干部学院举办了学习贯彻'习近平新时代中国特色社会主义思想'专题培训班。集团党委书记、副总裁康维成和内蒙古成川干部学院副院长季雄出席了开班仪式。",
                "季雄对前来学院培训的全体学员表示热烈欢迎。他介绍了鄂前旗的革命历史及其重要历史贡献、学院的筹建发展情况以及建院以来的培训情况。他还强调了在成川干部学院具体学什么、如何确保学好的问题。",
                "集团党委书记、副总裁康维成在开班仪式上作了动员讲话。他在讲话中指出，全体学员要提高政治站位，通过学习、思考、领悟、实践不断锤炼党性、提高个人修养，为日常工作和生活奠定坚实的思想基础；同时要认真学习积累，在培训过程中每个人都要静下心来、集中精力，实现相互促进、全面提升；最后要不断完善自我，以进一步践行民营企业员工的职业精神为起点，做到政治上成熟可靠，思想上积极主动，努力加快蒙泰集团企业队伍的锻造进程。"
            ]
        },
        "card3": {
            "source": "",
            "views": "445",
            "title": "缅怀英烈，勇敢前行",
            "description": [
                "4月5日，蒙泰集团党委组织部分领导和员工代表前往伊克昭公园革命烈士陵园，向革命烈士纪念碑敬献花圈，深切缅怀革命英烈。",
                "当天，革命烈士陵园天气晴朗，革命烈士英雄纪念碑矗立在苍松翠柏之中，显得庄严雄伟。全体人员手持鲜花，整齐列队，默哀致敬，敬献花圈，怀着无限哀思向为革命事业英勇牺牲的烈士们致以最真挚的敬意。",
                "回顾过去，我们应该记住水的来源。是中国共产党领导一代又一代中国人民从一个胜利走向另一个胜利，是无数革命烈士用青春和鲜血换来了我们今天的幸福生活。",
                "山无言，碑永恒。蒙泰人将继承先烈遗志，弘扬烈士精神，坚定理想信念，继续奋勇前进，以责任和担当回报社会，用青春和奋斗谱写中华民族伟大复兴的新篇章。"
            ]
        },
        "card4": {
            "source": "",
            "views": "1233",
            "title": "蒙泰集团举办庆祝建党100周年主题党日活动",
            "description": [
                "6月26日，蒙泰集团党委组织部分党员和预备党员开展了形式多样、内容丰富的主题党日活动，如党员徒步、党员讲党史、老员工讲创业史、红歌联唱、重温入党誓词等，庆祝中国共产党成立100周年。活动以'重走长征路，百年启新程'为主题，鼓励广大党员知党史、感党恩、听党话、跟党走，从党的百年奋斗中汲取智慧和力量，教育广大党员爱岗敬业、奋发进取，以更加积极进取的精神和行动为全面建设社会主义现代化国家作出更大贡献。"
            ]
        }
    },
    "companyProfile": {
        "title": "公司简介",
        "intro1": "内蒙古蒙泰集团有限公司是一家追求卓越、崇尚现代文明的企业。公司坐落于中国内蒙古以美丽草原著称的鄂尔多斯市",
        "intro2": "公司创立于2001年，现有员工7500多人，年营业收入500亿元。公司位列中国民营企业500强第252位、中国制造业民营企业500强第176位、内蒙古自治区民营企业100强前5位，是鄂尔多斯市科技创新标杆企业。公司主要从事煤炭、电力、城市供热、铝、铝合金材料、铝深加工等工业产业和现代农牧业产业。年煤炭产能3000万吨以上，热电联产及新能源装机400万千瓦，供热能力3800万平方米，年产原铝50万吨、高端变形铝合金材料和铸造铝合金材料各10万吨，欧洲铝深加工产能22万吨。",
        "detail1": "农牧业产业项目建成两处共计约1300公顷绿色无污染种养殖基地，黑毛驴养殖规模已达5000头，计划三年内达到10000头，带动当地3000多户农牧民增收致富。公司与英国苏格兰威士忌公司合作建设年产80万升威士忌项目。",
        "detail2": "公司尊重自然、崇尚绿色。公司所在地有着丰富良好的土地和矿产资源，依托这些资源优势，公司构建了富有韧性和竞争力的产业链。公司把这些资源视为大自然赐予人类的珍贵礼物，因而珍惜获得的各类资源。",
        "detail3": "公司的基本理念是'让有限的资源无限化，让无限的事业绿色化'，即让手中的资源效益最大化、寿命延长化，更多地惠及企业、社会和人民。在这一理念指导下，公司构建的产业链以循环、绿色为基本特征，即公司生产的产品建立在相互依赖和连接的链条上，如利用城市排放的废水发电，利用发电的余热为城市供热，利用发电的废弃物粉煤灰制备铝硅合金材料和建筑材料；利用酒产品的下脚料酒糟做养殖饲料，利用牲畜粪便肥田，在远离化肥农药的土地上种植蔬菜。",
        "detail4": "公司积极拥抱科技，通过技术创新推动产品生产方式的循环和产业链的延伸扩展。近年来公司与上海交通大学、东北大学、天津大学、北京信息科技大学等国内多所知名高校和科研院所合作研发高铝煤基固废高质化利用、高性能铝合金材料、无人机和快递柜等新项目产品，并积极关注和投资风电、光伏新能源发电项目。",
        "detail5": "公司具有很高的管理意识，自成立以来始终把管理作为公司最重要的经营理念，持续学习国内外先进管理理念和经验，结合自身管理实践，探索出一套不断超越自我的管理方法，推动公司整体管理水平达到国内行业领先水平。",
        "detail6": "公司自成立以来历经亚洲金融危机、全球金融危机等多次风险冲击，但始终保持了相对稳定的盈利水平和良好的增长态势。",
        "detail7": "公司高度重视安全和环保，宁可不安全不生产、不环保不生产，各项安全环保指标达到甚至超过国家和行业标准，实现了企业发展、环境保护和员工健康安全的高度和谐统一。",
        "detail8": "公司秉持感恩理念，在坚持自身发展的同时持续回馈社会。十年来公司为全球环境治理、社会救灾、扶贫济困和地方教育文化体育事业发展累计捐款捐物5亿多元。",
        "detail9": "未来公司将继续以'绿色发展、科技驱动、全球视野、合作共赢'为基本理念，持续做大做强'煤-电-热-铝-材-深加工'一体化工业产业和农牧业产业。凡致力于此的国内外优秀企业都是蒙泰集团的合作伙伴。",
        "detail10": "同时我们也放眼世界，敞开胸怀向世界优秀企业伸出合作之手，努力构建'铝合金新材料生产、风光新能源开发、高铝煤基固废高质化利用'多极互补、循环联动的具有世界领先水平的现代化新型企业。"
    },
    "corporateCulture": {
        "title": "企业文化",
        "mission": {
            "title": "使命",
            "subtitle": "让有限的资源无限",
            "content": "蒙泰认为，所有资源都是有限的，同时又是无限的。我们需要百倍珍惜有限的资源，用人类无限的创造力、科学的发展观和先进的技术来开发、利用和改造有限资源的潜力，发挥其无限的价值，为蒙泰的长期基业和社会发展开辟无限广阔的前景，为子孙后代留下青山绿水、蓝天白云。这也是蒙泰生存和发展的真正意义。"
        },
        "development": {
            "title": "发展观",
            "content": "产业立基，文化领先\n制度驱动，人才驱动"
        },
        "coreValues": {
            "title": "核心价值观",
            "subtitle": "超越、务实、人本",
            "content": "蒙泰核心价值观的\"铁三角\"。\n\n超越：是指\"三步\"。\"一步先\"是指要领先市场，\"一步进化\"是指要比原来的自己更好，\"一步逆转\"是指能够在激烈的竞争中逆转一步。\n\n务实：实事求是——不唯上，不唯昨，不唯利，唯实。\n\n人本：人为先、事为后；尊重人格，合同共赢；无边界整合人才，全球整合智慧。"
        },
        "methodology": {
            "title": "方法论",
            "subtitle": "",
            "content": "企业生态系统、新兴数据中心和颠覆性创业\n\n蒙泰智库、蒙泰大奖赛和标杆管理\n\n内部市场化+共赢薪酬合同\n\n双目标管理，48小时复制"
        },
        "culturalTotem": {
            "title": "文化图腾",
            "subtitle": "狼",
            "content": "蒙泰崇尚\"狼性精神\"所蕴含的洞察力、战斗精神和团队合作。\n\n洞察力：要像狼一样敏锐，知道什么时候出击，什么时候放弃，什么时候必要时制定计划。\n\n战斗精神：像狼一样，善于战斗，有韧性，冲锋陷阵，敢于胜利。\n\n团队力量：像狼群一样，有目标、有分工、有协作、有分享。"
        },
        "culturalMotto": {
            "title": "文化座右铭",
            "corporateStyle": {
                "title": "企业作风",
                "content": "快速反应，立即行动"
            },
            "marketManagement": {
                "title": "市场管理理念",
                "content": "只有不开化的思想，没有开发不了的市场"
            },
            "talentOutlook": {
                "title": "人才观",
                "content": "人人都有才，赛马不相马"
            },
            "salaryView": {
                "title": "薪酬观",
                "content": "薪酬是自己挣的，不是公司发的"
            }
        }
    },
    "chairman": {
        "title": "董事长致辞",
        "subTitle": "让有限资源无限循环，让无限事业绿色发展",
        "description": "这是公司的使命宣言与经营理念",
        "p1": "资源是有限的。蒙泰必须珍惜有限资源，科学合理开发和管理资源，最大化资源价值。",
        "p2": "资源有限，但人类的创造力是无限的。蒙泰将通过有限资源的创业平台激发人的最大潜能，开创通往未来的广阔发展空间。",
        "p3": "因此，蒙泰不断创新经营模式，发挥优势，精心构建“煤-电-铝-材料-深加工”一体化现代工业产业链，以及助力乡村振兴的现代农牧产业链。",
        "p4": "基于建设现代化新型企业的发展愿景，蒙泰汇聚全球人才与智慧，实现有限资源的无限利用，打造基业长青的百年蒙泰。",
        "p5": "蒙泰愿与所有志同道合者携手共进，共创文明，共筑辉煌。",
        "signatureTitle": "蒙泰集团董事长",
        "signatureName": "敖凤亭"
    },
    "coalIndustry": {
        "title": "煤炭产业",
        "ttop": "生产",
        "tleft": "销售",
        "tright": "运输",
        "intro": "公司将煤炭生产、运输、销售融为一体，提供一站式服务，为集团提供了坚实的生存基础和进一步发展的活力源泉。",
        "sections": {
            "production": {
                "title": "煤炭生产",
                "description": "经过多年的努力，公司建立了自己稳定的煤炭生产基地。公司位于鄂金霍罗旗的满来梁煤矿、东胜区的樊家村煤矿、准格尔旗的不连沟煤矿均为国家发改委批准的现代化大型矿井。",
                "altText1": "煤炭生产设施概览",
                "altText2": "煤炭开采作业"
            },
            "transportation": {
                "title": "煤炭运输",
                "description": "在激烈的市场竞争中突破运输瓶颈，公司自2002年以来相继获得京包铁路、大准铁路的经营权。公司是国铁集团的重要货运客户，年煤炭铁路运输量超过1000万吨，在内蒙古自治区地方煤炭企业中排名第二。",
                "altText1": "煤炭运输铁路",
                "altText2": "铁路运输作业",
                "altText3": "煤炭装载设施"
            },
            "sales": {
                "title": "煤炭销售",
                "description": "公司在秦皇岛、京唐港等地设立了大型货场和中转站，在北京、天津、上海、南京等地设立了专门的销售机构。公司生产的煤炭为天然优质环保动力煤，具有低硫、低磷、低灰、中高热值等显著特点。销售市场覆盖华北、华东、华中、华南等地区。",
                "altText": "煤炭销售配送中心"
            }
        },
        "developmentProject": {
            "title": "煤炭开发项目",
            "card1": {
                "title": "曼来梁煤矿",
                "paragraph1": "曼来梁煤矿是蒙泰集团的全资子公司，核定产能为560万吨/年，现有员工500余人。矿井采用综合机械化一次采全高工艺，采掘机械化率达到100%。井下全部生产设备均采用国际先进设备，具备高安全性、高效率、高度自动化和信息化。该矿于2014年正式投产，2018年被评为内蒙古自治区安全生产标准化一级矿井及国家煤炭行业安全高效示范矿井，2020年入选国家级绿色矿山名录。",
                "paragraph2": "自投产以来，煤矿始终坚持安全第一、预防为主的原则，做到无安全不生产，全面保障安全及技术资金投入，建立了安全监测、压风自救、供水施救、人员定位、矿井通信及紧急避险等安全生产体系，实现了连续安全生产。",
                "paragraph3": "在实现高质量发展的过程中，煤矿始终坚持生态优先、绿色发展的正确导向，既是资源和项目的开发者与使用者，也是美好环境的守护者与建设者。累计投资6000余万元，治理矿区进场道路、综合服务区、生产生活区和采空区，有效实现净化、绿化、美化、亮化、硬化五大提升，改善了矿区及周边地区的生产和生活环境。"
            },
            "card2": {
                "title": "范家村煤矿",
                "paragraph1": "范家村煤矿是蒙泰集团的全资子公司，位于内蒙古鄂尔多斯市东胜区北郊东胜煤田万里矿区，核定产能为420万吨/年，配套建设了年洗选能力为600万吨的选煤厂。矿区煤层为低中灰、低硫、高发热量煤，属优质动力煤和民用燃料。",
                "paragraph2": "范家村煤矿是蒙泰集团实施煤电热循环经济项目的重要组成部分，是蒙泰集团北郊电厂的坑口煤矿。煤炭通过皮带输送机直接输送至北郊电厂锅炉房，减少了运输压力和道路污染。在此基础上，范家村煤矿还投资建设了全封闭煤棚，有效降低了环境污染，提高了煤矿与电厂的综合效益。"
            },
            "card3": {
                "title": "鑫鑫煤矿",
                "paragraph1": "鑫鑫煤矿是蒙泰集团的全资子公司，位于内蒙古自治区东胜煤田牦牛山普查区外围，采用露天开采方式，核定产能为240万吨/年。",
                "paragraph2": "煤矿煤层稳定性好，煤质不粘结，地质条件简单，煤种主要为超低灰、超低硫、超高热值煤，是优质民用煤和动力煤，适用于各类工业锅炉和热电联产，也可用作建材行业和化工行业的焙烧用煤或气化煤。"
            }
        }
    },
    "aluminiumIndustry": {
        "title": "铝业",
        "intro": "公司以高端铝合金材料的生产和深加工为主导，构建\"煤-电-铝-材料-深加工\"一体化产业体系，在铝业深加工方面迈出了坚实步伐。现已形成原铝生产能力50万吨/年，高科技铝合金生产能力10万吨/年，铝深加工能力22万吨/年。",
        "projects": {
            "primary": {
                "title": "原铝生产",
                "description": "原铝的主要原料是氧化铝，是一种广泛使用的金属，是铝制品加工的主要原料。公司原铝生产项目采用行业先进的500KA预焙阳极电解槽，在工艺、技术、设备、安全、环保等方面均达到行业一流水平。",
                "altText": "原铝生产设施"
            },
            "highEnd": {
                "title": "高端铝合金材料及坯料生产",
                "description": "高端铝合金材料及坯料生产项目以蒙泰生产的铝液为主要原料。产品广泛应用于汽车制造、轨道交通、电子产品等领域。该项目在工艺技术、设备选型、安全环保等方面达到国内行业先进水平。高科技铝合金材料项目的发展是蒙泰集团的重要战略选择，是蒙泰铝业进入高端领域的必由之路。",
                "altText": "高端铝合金材料生产"
            },
            "deepProcessing": {
                "title": "铝合金生产与深加工",
                "description": "铝合金生产和深加工是蒙泰APT的主要业务。该公司是欧洲铝业领先的企业集团之一。开发和制造技术先进的铝挤压型材和机加工产品，为建筑、交通、汽车和工业领域的国际知名客户提供产品。制造过程涵盖从原材料到最终产品的整个价值链。",
                "altText": "铝合金深加工设施"
            }
        }
    },
    "thermalPower": {
        "title": "火电板块",
        "intro": {
            "paragraph1": "基于煤炭资源优势，公司投资建设坑口电厂，实施就地转化，并网发电外送电力市场，发电产生的余热外送至当地城市进行城市集中供热，灰渣制作水泥，有效回用城市中水，实现净利用、零排放、无污染，为当地煤炭产业绿色发展和鄂尔多斯的蓝天白云做出了积极贡献。",
            "paragraph2": "蒙泰全资已建成投运的电厂包括蒙泰北苑2*660MW火电厂、蒙泰北郊2*330MW火电厂和蒙泰4*25MW火电厂，目前供热能力3800万平方米，新能源风电装机容量51.2万千瓦。公司参与建设的已建成投运电厂项目包括与中国华电集团合作的准格尔达拉特2*300MW煤矸石火电厂和与国家能源集团合作的国电东胜2*330MW火电厂。",
            "paragraph3": "未来三至五年，公司全资及合资电厂总装机容量将达到400万千瓦以上。"
        },
        "projects": {
            "title": "火电项目"
        },
        "card1": {
            "title": "蒙泰北源2×660MW热电联产项目",
            "content": {
                "paragraph1": "蒙泰北源2×660MW热电联产项目是公司在建工程。项目位于内蒙古自治区鄂尔多斯市东胜区，由内蒙古蒙泰集团有限公司独资投资建设，建设规模为2×660MW高效超超临界燃煤供热机组，同时建设脱硫脱硝装置。项目于2020年8月开工建设，预计于2022年底建成投运。",
                "paragraph2": "项目采用世界先进设计技术，结合厂区高差大、场地狭长的特点，运用三维数字技术真实模拟周边城市环境设施与地形，科学合理地规划厂区总平面图，重点从主机参数、设备选型、输煤系统、公用系统、空冷岛、基础工程、边坡工程、主厂房工程等多方面进行综合优化，实现少占地、省投资、降资源消耗，为建设高效、清洁、生态绿色、节能环保、安全可靠、技术先进、城市友好型电厂奠定了基础。",
                "paragraph3": "项目总用地面积约16.5公顷，相较同类项目节约用地约49.21%。项目单位性能考核条件下电厂热效率为45.66%，发电标准煤耗为269.36g/kWh；供热年平均工况下电厂热效率为59%，发电标准煤耗为242.94g/kWh。",
                "paragraph4": "项目拟为东胜城区提供供热服务，属国计民生相关的城市基础设施项目，可替代当地原有高能耗、高排放的4×25MW机组及分散小锅炉，不仅可为城市提供稳定可靠的热负荷，还具有节能、改善环境和提高供热质量的综合效益，是一个政策支持力度大、绿色环保、效益导向型的项目。"
            }
        },
        "card2": {
            "title": "蒙泰北郊2×330MW热电联产项目",
            "content": {
                "paragraph1": "鄂尔多斯市北郊热电有限公司（以下简称“北郊热电”）成立于2012年，是内蒙古蒙泰集团有限公司全资子公司，主要负责2×330MW直接空冷供热机组的运营与管理。该项目于2015年建成投运，可实现年发电量42亿千瓦时，承担东胜城区1000万平方米的集中供热任务。目前公司总资产约30亿元，职工240人，技术力量雄厚，大学及以上学历与专业技术人员占比超过公司员工总数的90%。",
                "paragraph2": "北郊热电的2×330MW亚临界一级中间再热双缸双排气直接空冷抽凝式汽轮发电机组配置2×1185t/h亚临界自然循环煤粉锅炉，同时建设烟气脱硫与脱硝设施。机组燃用范家村出产的低热值煤，生产用水为城市中水，具有效率高、节水、环保的特点。该热电项目满足区域电网负荷增长需求，解决城市供热问题，为蒙西电网提供电力支撑，提高区域电源供电的可靠性。",
                "paragraph3": "北郊热电严格贯彻国家及自治区的节能环保政策，以“让有限资源无限化”为使命，致力于打造绿色环保、循环高效的示范电厂，真正实现“煤-电-热”一体化的循环发展目标。"
            }
        },
        "card3": {
            "title": "蒙泰热电4×25MW热电项目",
            "content": {
                "paragraph1": "鄂尔多斯市蒙泰热电有限公司成立于2006年8月，是内蒙古蒙泰集团有限公司全资子公司，建设规模为4×25MW供热机组，配置7×130t循环流化床锅炉，供热能力超过1000万平方米。公司目前总资产为6.5亿元，员工150人，其中大学以上学历与专业技术人员占比超过90%。",
                "paragraph2": "公司大力发展可持续循环经济项目。一期工程2×25MW抽凝式汽轮机+3×130t循环流化床锅炉于2006年投运，为东胜市提供集中供热。二期工程2×25MW背压式汽轮机+4×130t循环流化床锅炉于2009年投运，实现了废热的充分利用。",
                "paragraph3": "公司生产煤主要为东胜周边矿区出产的劣质煤及煤矸石，提高了资源利用效率。2008年，公司与蒙西水泥合作开发的60万吨水泥粉磨站项目投产，利用电厂灰渣作为水泥生产原料，实现灰渣回收利用。同时投入3000万元建设日处理7500吨的水处理站，实现污水的回收利用，达到水资源净耗和零排放。为满足环保要求并提高公司综合竞争力，公司投资5000万元建设单三电场电除尘器，除尘效率超过99.5%。2014年，公司筹资6000万元建设新型湿法脱硫设施，实现脱硫、脱硝、除尘三项指标的稳定达标。2017年再次投入1200万元建设皮带煤输送系统，并对原煤场进行绿化改造，提高了自动化水平，改善厂区及周边环境，取得了显著的社会效益。"
            }
        },
        "card4": {
            "title": "准格尔道路2×300MW煤矸石热电项目"
        },
        "heating": {
            "title": "供热服务",
            "description": "蒙泰供热公司目前供热能力2000万平方米，是鄂尔多斯市最大的城市集中供热企业之一。公司拥有换热站174座，一次供热管网长度238公里。",
            "serviceRegulations": {
                "title": "服务规范",
                "items": {
                    "onSiteService": "供热服务人员上门服务规范",
                    "businessHandling": "供热业务办理",
                    "regulations": "供热规定",
                    "userTips": "用户供热小贴士"
                }
            },
            "items": {
                "concept": {
                    "title": "供热服务理念",
                    "description": "是我们的问题，我们全力解决；不是我们的问题，我们协助解决。"
                },
                "serviceArea": {
                    "title": "服务区域",
                    "description": "各中心站服务联系方式及服务区域"
                },
                "hotline": {
                    "title": "服务热线",
                    "description": "4000477996"
                }
            }
        }
    },
    "husbandry": {
        "title": "现代农业与畜牧业",
        "intro": {
            "paragraph1": "积极参与“乡村振兴”事业，坚持绿色、健康、高端理念，公司精心打造了以“绿色种植—生态养殖—农副产品加工—特色文旅”为主线的循环联动现代农业与畜牧业产业链，描绘出“乡村综合体”的美丽图景，巩固脱贫成果，不断创新帮扶机制，探索“乡村振兴”可持续发展模式，引领农牧民走上绿色高端、品质优先、品牌增收的致富之路。",
            "paragraph2": "通过土地流转、项目外包、现代养殖产业带动、农副产品循环加工与销售、提供就业岗位等多种方式，公司带动农牧民稳定增收，实现“家门口就业”，吸引外出务工人员返乡创业。"
        },
        "sections": {
            "farming": {
                "title": "生态养殖",
                "description": "公司积极发挥龙头企业的示范引领作用，以绿色高端理念带动农牧民发展黑毛驴、肉牛、羊等养殖产业，实现增收致富。",
                "alt": "生态养殖"
            },
            "planting": {
                "title": "绿色种植",
                "description": "打造绿色高端品牌，带动周边农牧民按照统一标准发展绿色种植业，与农牧民共享品牌红利。",
                "alt": "绿色种植"
            },
            "processing": {
                "title": "农副产品深加工",
                "description": "通过品牌运营和消费市场开发，公司进一步提升农副产品经济价值，确保农牧民的产品能卖得好，并激发其生产积极性与创业热情，越来越多的农牧民加入绿色养殖产业。",
                "alt": "深加工"
            },
            "tourism": {
                "title": "特色文旅",
                "description": "公司积极开发建设威士忌工艺展示、观光品鉴、休闲度假等主题旅游项目，以及水上娱乐、亲子采摘、主题乐园、观光游览等多元化休闲娱乐项目，带动周边农牧民发展农家乐、乡村民宿等特色乡村文旅产业。",
                "alt": "特色文旅"
            }
        }
    },
    "logistics": {
        "title": "现代商贸物流",
        "intro": "蒙泰集团依托自身产业基础，推进转型升级与高质量发展战略，紧跟市场形势，积极发展商贸物流产业。公司在北京设立了国际贸易公司和互联网科技公司，开展国内外贸易和物流业务。在不断拓展传统商贸物流产业的基础上，重点发展新型贸易业态，投资并运营“区域综合电商服务平台”、“跨境电商平台”等业务。未来，公司将继续大力拓展贸易业务，逐步建立“大贸易、大物流”的现代商贸物流体系。",
        "energy": {
            "title": "能源贸易",
            "desc": "以集团产业延伸为方向，以能源产业为基础，开展煤炭、氧化铝、铝土矿、铁矿石、铝锭、铝合金、天然气等矿产能源贸易业务。在开展国内贸易业务的同时，拓展国际贸易业务，在海南自贸区、香港等地设立贸易公司，形成稳定优质的客户和供应商体系。在上海自贸区设立融资租赁公司，促进和补充贸易业务，完善供应链金融体系。"
        },
        "material": {
            "title": "物资贸易",
            "desc": "物资设备贸易业务主要以满足集团生产经营为基础，发挥规模化、集中化采购优势，发展物资设备贸易业务。依托互联网电商平台，将所有可通过平台交易的物资纳入平台，用“平台化运营”思维，实现“内外双循环”的物资贸易格局。在此基础上，进一步打造跨境电商平台。"
        },
        "logisticsSystem": {
            "title": "物流体系",
            "desc": "在传统物流运输的基础上，整合现有物流资源，构建新型物流体系。涵盖铁路、公路、多式联运等运输业务，融合仓储与配送功能，开拓新型业态。目前正积极研发测试“无人配送”体系，全面解决物流行业面临的“最后一公里”问题。"
        }
    },
    "technologyMonte": {
        "title": "科技蒙泰",
        "intro1": "公司积极拥抱科技，实施“科技驱动企业”战略，通过技术创新推动产品与生产方式的流通以及产业链的延伸和扩展。围绕建设完整现代化铝产业链的目标，公司专注于铝产业上游高铝粉煤灰制备铝硅合金技术的研发与产业化应用，同时大力投资并发展下游高端铝合金材料与铝深加工产业。",
        "intro2": "公司与东北大学、上海交通大学、北京信息科技大学等多所知名高校和研究机构合作，研发高性能铝合金材料、高铝粉煤灰的综合利用以及无人机、智能快递柜等新项目产品，并积极关注和探索薄膜太阳能等新能源项目。",
        "sections": [
            {
                "title": "高铝粉煤灰综合利用",
                "description": "公司持续加强技术攻关，创新工艺路线，在高铝煤基固废中提取铝基氧化物及冶炼铝硅合金方面取得重大突破。通过基础实验和放大实验，研发团队成功利用高铝粉煤灰和煤矸石制备出铝硅合金，各项质量指标达到国际领先水平。"
            },
            {
                "title": "高端铝合金材料与铝深加工",
                "description": "公司建设了“科技研发楼”，在自治区内打造高标准实验室，“筑巢引凤”，为国内外高端科研人才提供一流的科研条件。"
            },
            {
                "title": "大载重无人机与智能快递柜项目",
                "description": "公司联合北京信息科技大学组建研发团队，共同研发无人机智能快速投递系统项目，解决快递“最后一公里”的难题。该项目包括自主研发"
            }
        ]
    },
    "greenMonte": {
        "heroTitle": "绿色蒙泰",
        "intro": "绿水青山就是金山银山。公司全面贯彻“生态优先，绿色发展”的理念，将绿色、环保、清洁的理念融入每一个产业链，力求实现产业发展与生态环境的和谐统一。公司精心打造的“花园式工厂”和“绿色矿山”成为能源企业绿色发展的新名片；蒙泰北郊电厂主要污染物排放提前达到燃气机组排放标准；蒙泰铝厂整体环境及环保节能标准达到行业领先水平；蒙泰那林西里生态基地实现了生态与经济效益的双赢。",
        "sectionTitle": "绿色足迹",
        "sectionParagraph": "绿色工厂、绿色矿区、绿色办公园区，绿色魅力在此流淌。",
        "cards": [
            {
                "title": "现代环保工业园区",
                "alt": "现代环保工业园区"
            },
            {
                "title": "花园式工厂",
                "alt": "花园式工厂"
            },
            {
                "title": "绿色矿山",
                "alt": "绿色矿山"
            },
            {
                "title": "生态产业",
                "alt": "生态产业"
            }
        ]
    },
    "modernPark": {
        "heroTitle": "绿色蒙泰",
        "title": "现代环保工业园区",
        "description1": "蒙泰铝业产业园，环保节能一流标准的工业基地",
        "imageAlt1": "铝制品 3-2",
        "description2": "蒙泰北郊电厂主要污染物排放符合燃气机组排放标准",
        "imageAlt2": "铝制品 3-2"
    },
    "greenMine": {
        "heroTitle": "绿色蒙泰",
        "title": "绿色矿山",
        "description1": "蒙泰认为绿色矿山是一种现代化的矿业建设模式，全面考虑资源开发利用和环境影响。其内涵是将绿色发展理念融入煤矿开发全过程，扎根于矿区生产生活各个领域，激发企业绿色发展的内生动力，引领矿区居民走上可持续发展之路。",
        "description2": "绿色矿山建设服务范围包括高效资源开采、技术创新与智能矿山建设、资源综合利用、矿山生态建设与修复治理、节能减排技术、企业管理与企业形象建设等。2021年初，蒙泰曼赖梁煤矿入选国家级绿色矿山名单。",
        "subTitle": "国家级绿色矿山——蒙泰曼赖梁煤矿",
        "list": [
            "煤炭开采机械化率达到100%，回采率超过国家标准，行业排名第一。不断加大科研投入和技术创新，煤炭资源利用率逐年提高。",
            "按城市道路标准建设进出道路，对道路两侧绿化进行全面改造，在进出道路旁修建服务区，惠及村集体、煤车司机及煤矿。",
            "煤矿的生产、生活、办公划分为功能分区，三大区域通过杨柳小道和林荫大道分隔。整个园区布局合理，花团锦簇，绿色盎然，充满活力。",
            "公司坚持“先植后采”原则，引导农牧民种植树木，使煤矿采空区植被覆盖率达到80%以上。",
            "通过采空区综合整治示范工程，公司平整土地、改良土壤、提供电力与水源，修建道路，将荒地变良田，采空区转为生态区。",
            "在固废处理与利用方面，煤矿集中处理大部分矸石，部分用于铺路和制砖，实现资源循环利用。"
        ],
        "outro": "建花园、塑矿山、播绿意、惠民生",
        "imageAlt1": "铝制品 3-2",
        "imageAlt2": "铝制品 3-2"
    },
    "gardenFactory": {
        "heroTitle": "绿色蒙泰",
        "heading": "花园式工厂",
        "description": "城市中的花园，花园式工厂"
    },
    "ecoIndustry": {
        "heroTitle": "绿色蒙泰",
        "heading": "生态产业",
        "paragraph1": "蒙泰深入参与“乡村振兴”事业，坚持有机、健康、高端的理念，打造纳林希里生态养殖基地，成功构建了以“绿色种植-生态养殖-农副产品深加工-乡村旅游”为主线的循环高效现代农业和畜牧业产业，带领农牧民增收致富，共同建设美丽乡村。",
        "paragraph2": "生态产业发展基地远离城区及工业污染，经过十余年的运营，基地内山水林田湖的生态景观日益协调完整。",
        "greenPlanting": "绿色种植产业",
        "blackDonkey": "黑驴养殖产业"
    },
    "responsibility": {
        "heroTitle": "责任蒙特",
        "top": {
            "title": "社会捐赠",
            "description": "“取之于社会，用之于社会”是公司一直秉承的重要社会责任理念和经营理念。多年来，公司在扶贫、教育、医疗、文化体育等方面累计投入数亿元，取得了显著成效。"
        },
        "item": {
            "title1": "助力全球防治荒漠化",
            "title2": "连续三年担任鄂尔多斯国际马拉松赛事主赞助商"
        },
        "bottom": {
            "title": "员工关爱"
        },
        "carousel": {
            "title1": "游泳池",
            "title2": "健身房",
            "title3": "员工食堂",
            "title4": "员工宿舍",
            "title5": "活动中心"
        },
        "middle": {
            "title": "乡村振兴",
            "description1": "公司积极响应国家“乡村振兴”战略，与东阿阿胶合作引进世界优质品种——德州黑驴，发展特色养殖产业。为实现产业化、可持续帮扶，公司探索出“政府+企业+养殖户+银行+保险”五位一体模式，降低农牧民养殖风险和技术门槛，带动农牧民增收致富。黑驴养殖项目已完成投资2亿元，驴存栏量达5000头，配套水、电、圈舍、饲料加工厂等基础设施完善。",
            "description2": "公司通过土地流转、外包项目、合作养殖、提供就业等方式，将周边群众纳入德州黑驴养殖产业链，建立紧密的利益联结机制，使其在产业链的任一环节都能获得实实在在的收益。",
            "image1Alt": "黑驴养殖项目",
            "image2Alt": "社区参与"
        }
    },
    "media": {
        "heroTitle": "新闻资料",
        "tab1": "视频",
        "tab2": "图片",
        "picture": {
            "description1": "公司标志",
            "description2": "集团总部",
            "description3": "集团总部夜景",
            "description4": "花园工厂",
            "description5": "铝工业园区",
            "description6": "铝合金生产",
            "description7": "铝合金产品",
            "description8": "原铝铸造",
            "description9": "环保电厂",
            "download": "下载"
        },
        "video": {
            "title1": "公司简介视频",
            "title2": "可持续发展倡议"
        }
    },
    "products": {
        "heroTitle": "产品展示",
        "tab1": "铝产品",
        "tab2": "煤炭产品",
        "aluminum": {
            "alt1": "铝产品1",
            "alt1_2": "铝产品1-2",
            "alt2": "铝产品2",
            "alt2_2": "铝产品2-2",
            "alt3": "铝产品3",
            "alt3_2": "铝产品3-2"
        },
        "coal": {
            "alt1": "煤炭产品1",
            "alt1_2": "煤炭产品1-2"
        },
        "contact": {
            "email": "联系邮箱：",
            "phone": "联系电话：",
            "address": "联系地址：",
            "manager1": "刘经理 0477-3898222",
            "manager2": "刘先生：15847700664",
            "addrValue": "中国内蒙古鄂尔多斯市伊煤北路35号"
        }
    },
    "collaborativeProjects": {
        "title": "合作项目",
        "intro": "根据发展新材料、新能源、互联网电子商务和高端智能制造产业的总体战略布局，蒙泰正在全球范围内寻求项目合作。",
        "projects": {
            "newMaterials": {
                "title": "新材料",
                "description": "中高性能铝合金材料/坯料生产项目。铝合金材料/坯料主要聚焦于用于新能源汽车、重型卡车、电子产品、轨道交通、电力等领域的中高性能铝合金铸棒和锭。涉及的主要合金牌号有6061、6082、2024、7050、7075等。中高性能碳纤维及复合材料项目，聚焦于T800H、T800S、T1000G、T1100G、M50J、M55J、M60J等高端碳纤维。石墨烯材料。"
            },
            "newEnergy": {
                "title": "新能源",
                "description": "氢燃料、电解铝-空气电池、锂离子等动力电池，重点研发和生产电极材料和催化剂、电池管理系统，以及新能源车辆的整体研发制造。"
            },
            "flyAsh": {
                "title": "粉煤灰综合利用",
                "description": "通过更短的工艺流程，将火电厂高铝粉煤灰用于提取具有大市场容量和高附加值的金属和非金属材料。"
            }
        },
        "cooperation": {
            "title": "合作方式",
            "description": "针对上述新材料、新能源和粉煤灰综合利用项目，我们拟与国内外掌握相关成熟产业化技术或具备行业领先技术研发成果的企业、科研机构、专家技术人员开展合作。合作方式灵活多样，可采用技术专利有偿授权、股权投资、收购合作方的工艺包或生产线等方式，或由双方认可的其他方式。项目合作地点可在中国大陆、澳门、香港及其他国家和地区。"
        },
        "contact": {
            "email": "联系邮箱：",
            "phone": "联系电话：",
            "name": "刘先生：15847700664",
            "address": "联系地址："
        }
    },
    "offline": {
        "heroTitle": "线下招标公告",
        "tab1": "招标通知",
        "tab2": "中标公告",
        "source": "来源",
        "views": "浏览量",
        "projectName": "项目名称",
        "organizer": "主办单位",
        "tenderOpeningLocation": "开标地点",
        "releaseTime": "发布时间",
        "openingTime": "开标时间",
        "loading": "加载文件内容中...",
        "previousPost": "上一篇",
        "nextArticle": "下一篇",
        "close": "关闭",
        "bid": {
            "description": "鄂尔多斯蒙泰范家村煤业有限公司消防改造项目设计第三方评审机构招标公告",
            "source": "刘冬梅",
            "views": "343",
            "project": "鄂尔多斯范家村煤业有限公司消防改造项目设计第三方评审机构磋商",
            "organizer": "蒙泰集团招标办公室",
            "location": "在线视频招标",
            "release": "2025-05-30",
            "opening": "2025年6月9日 09:00"
        },
        "notice": {
            "description": "内蒙古蒙泰集团有限公司北郊热电分公司碳排放配额指标采购项目招标公告",
            "source": "刘冬梅",
            "views": "343",
            "project": "内蒙古蒙泰集团有限公司北郊热电分公司碳排放配额指标采购项目",
            "organizer": "蒙泰集团招标办公室",
            "location": "在线视频招标",
            "release": "2025-05-27",
            "opening": "2025年6月9日 09:00"
        }
    },
    "news": {
        "heroTitle": "新闻资讯",
        "source": "来源",
        "views": "浏览量",
        "button": "关闭",
        "prev": "上一篇",
        "next": "下一篇",
        "card1": {
            "description": "鄂尔多斯蒙泰范家村煤业有限公司范家村煤矿2025年矿山地质环境治理与土地复垦方案",
            "source": "蒙泰集团"
        },
        "card2": {
            "description": "蒙泰集团签署收购瑞士铝业的协议",
            "source": "蒙泰集团"
        },
        "card3": {
            "description": "内蒙古蒙泰集团有限公司新源煤矿6-1下组煤加深开采项目环境影响评价公众公示",
            "source": "蒙泰集团"
        },
        "card4": {
            "description": "蒙泰集团签署收购瑞士铝业的协议",
            "source": "蒙泰集团"
        }
    },
    "footer": {
        "qrText": "微信公众号平台",
        "copyright": "版权所有© 2020 内蒙古蒙泰集团有限公司",
        "icp": "蒙ICP备100000177号",
        "publicSecurity": "公网安备15060202000517号",
        "publicSecurityAlt": "公安备案",
        "sitemap": "网站地图",
        "links": {
            "aboutUs": "关于我们",
            "contact": "联系我们",
            "careers": "加入我们",
            "news": "新闻中心",
            "products": "产品中心",
            "services": "服务项目"
        },
        "section": {
            "title1": "关于蒙泰",
            "title2": "核心产业",
            "title3": "高质量发展",
            "title4": "新闻动态",
            "title5": "对外合作"
        },
        "link1": {
            "text1": "公司简介",
            "text2": "董事长致辞",
            "text3": "企业文化",
            "text4": "发展历程",
            "text5": "党建工作",
            "text6": "加入我们"
        },
        "link2": {
            "text1": "铝业板块",
            "text2": "煤炭产业",
            "text3": "热电板块",
            "text4": "现代农牧业",
            "text5": "现代商贸物流"
        },
        "link3": {
            "text1": "科技蒙泰",
            "text2": "绿色蒙泰",
            "text3": "责任蒙泰"
        },
        "link4": {
            "text1": "新闻中心",
            "text2": "媒体资料"
        },
        "link5": {
            "text1": "公司产品",
            "text2": "合作项目",
            "text3": "招标平台",
            "text4": "线下招标公告",
            "text5": "采购公告"
        }
    },
    "mainHeader": {
        "aboutMonte": "蒙泰概况",
        "coreIndustries": "核心产业",
        "highQualityDevelopment": "高质量发展",
        "news": "新闻动态",
        "externalCooperation": "对外合作",
        "searchPlaceholder": "搜索...",
        "aboutLinks": {
            "companyProfile": "公司简介",
            "chairmanSpeech": "董事长致辞",
            "corporateCulture": "企业文化",
            "developmentHistory": "发展历程",
            "partyBuilding": "党建工作",
            "joinUs": "加入我们"
        },
        "newsLinks": {
            "news": "新闻动态",
            "mediaMaterial": "媒体资料"
        },
        "cooperationLinks": {
            "products": "公司产品",
            "collaborativeProjects": "合作项目",
            "biddingPlatform": "招标平台",
            "offlineTender": "线下招标公告",
            "sourcingAnnouncement": "采购公告"
        },
        "industry": {
            "title1": "铝产业板块",
            "title2": "煤炭产业",
            "title3": "火电板块",
            "title4": "现代农业与畜牧业",
            "title5": "现代商贸物流",
            "description1": "在产业转型升级中稳步前行，以高端铝合金材料生产与深加工为引领的现代铝产业布局初步形成。",
            "description2": "蒙泰集团集煤炭生产、运输、销售于一体，提供一站式运营与服务，为集团的生存发展奠定了坚实基础，并注入了强劲活力。",
            "description3": "依托煤炭资源优势，投资建设坑口电厂，实施煤炭本地转化，将发电所产生的余热进行梯级利用。",
            "description4": "构建‘绿色种植-生态养殖-农副产品深加工-乡村旅游’为一体的高附加值现代农业与畜牧业产业链。",
            "description5": "依托自身产业基础，推动转型升级和高质量发展战略，紧跟市场形势，积极拓展现代商贸物流领域。"
        },
        "development": {
            "title1": "科技蒙泰",
            "title2": "绿色蒙泰",
            "title3": "责任蒙泰",
            "description1": "蒙泰积极拥抱科技，实施科技强企战略，推动产品与生产方式的循环升级。",
            "description2": "蒙泰集团全面贯彻生态优先、绿色发展的理念，将绿色、环保、清洁的理念贯彻于每一条产业链中。",
            "description3": "取之于社会，回馈于社会是蒙泰始终秉承的经营理念。多年来，我们在扶贫、教育等领域累计投入数亿元。"
        }
    },
    "home": {
        "title": "关于蒙泰",
        "p1": "内蒙古蒙泰集团成立于2001年，目前拥有员工7500余人，年营业收入超过500亿元，年纳税额超过80亿元。",
        "p2": "公司位列自治区民营企业100强，是鄂尔多斯市科技创新的标杆企业。",
        "p3": "公司全面贯彻新发展理念，坚定实施“绿色发展 科技强企”的战略。",
        "p4": "公司已逐步从传统能源企业发展为涵盖“新型铝合金材料研发与生产、风光能源开发、高铝煤基固废高值研发与利用”的现代化新型企业集团，形成多元互补、循环联动的发展格局。",
        "p5": "公司大力投资现代农牧业，助力乡村振兴，增加农牧民收入和财富。",
        "p6": "公司的使命是“让有限资源无限延伸，让无限事业绿色发展”。",
        "core": "核心产业",
        "news": "新闻",
        "see": "查看更多",
        "items": {
            "description1": "绿色发展 科技强企",
            "description2": "",
            "description3": "超越现实的人本主义",
            "description4": ""
        },
        "cards1": {
            "title": "铝产业板块",
            "desc": "公司围绕构建煤—电—铝—材料—深加工一体化产业体系的目标，持续加大科技创新投入，积极推动产业升级，提升技术含量和附加值，在产业转型升级方面迈出坚实步伐。以高端铝合金材料生产与深加工为核心的现代铝产业布局已初具规模。"
        },
        "cards2": {
            "title": "煤炭板块",
            "desc": "公司实现煤炭生产、运输、销售一体化，提供一站式服务。煤炭产业是公司生存的坚实基础，更是持续发展的源动力。"
        },
        "cards3": {
            "title": "热电板块",
            "desc": "依托煤炭资源优势，投资建设坑口电厂，实施煤炭就地转化，上网供电并输出电力市场。发电过程中产生的余热还用于周边城市供热。"
        },
        "cards4": {
            "title": "现代农牧业",
            "desc": "深入参与乡村振兴行动，以黑毛驴养殖为核心，构建“绿色种植—生态养殖—农副产品深加工—乡村旅游”为主线的高附加值现代农牧业产业链。"
        },
        "cards5": {
            "title": "现代商贸物流",
            "desc": "依托自身产业基础，蒙泰集团实现了转型升级与高质量发展战略，紧跟市场趋势，积极拓展商贸物流产业。"
        }
    },
    "dev": {
        "title": "发展历程",
        "section": "足迹印证梦想",
        "achievements": {
            "item2024": [
                "蒙泰科技收购瑞士门齐肯铝业100%股权。"
            ],
            "item2023": [
                "蒙泰APT欧洲新材料创新中心揭牌。",
                "公司被授予鄂尔多斯市尊师重教先进集体荣誉称号。",
                "蒙泰农牧业公司被评为自治区万企兴万村行动典型（项目）企业。",
                "蒙泰铝业有限公司被评为2022年鄂尔多斯市十大科技创新企业。"
            ],
            "item2022": [
                "蒙泰东胜二期2×660MW热电联产项目建成投运。",
                "蒙泰集团在2022年内蒙古民营企业排名第四位，制造业50强排名第三位。",
                "蒙泰铝业有限公司蒙泰牌铝锭成功在上海期货交易所注册。",
                "蒙泰集团被内蒙古自治区工商业联合会评为抗击疫情爱心企业。"
            ],
            "item2021": [
                "2021年内蒙古自治区民营企业100强榜单发布，蒙泰集团在2021年内蒙古民营企业100强中排名前五，制造业50强中排名前四。",
                "蒙泰铝业有限公司电解铝项目被中国建设企业管理协会授予2020-2021年度国家优质工程奖。",
                "蒙泰不连沟煤业公司党建文化基地被中国煤炭职工思想政治工作研究会评为煤炭行业全国红色教育基地。",
                "蒙泰集团被授予尊师重教先进集体荣誉称号。",
                "蒙泰满来梁煤矿选煤厂投入试运行。",
                "蒙泰黑毛驴养殖扶贫产业项目入选2020年全国光彩事业重点项目。",
                "鄂尔多斯蒙泰铝业有限公司质检部成功通过CNAS国家实验室认证。"
            ],
            "item2020": [
                "蒙泰集团被中国煤炭工业协会评为2018-2019年度安全高效煤炭工业集团（矿区）。",
                "蒙泰集团被授予'内蒙古绿色发展百强企业'称号。",
                "蒙泰集团收购德国APT公司，该公司为欧洲领先的铝加工企业。",
                "蒙泰年产20万吨高科技铝合金材料项目一期建成投产。",
                "蒙泰铝业有限公司电解铝项目被中国建设企业管理协会评为2018-2019年度中国有色金属工业（部级）优质工程。",
                "蒙泰东胜2×660MW热电联产项目获内蒙古自治区能源局核准并开工建设。",
                "蒙泰满来梁煤矿选煤厂项目开工建设。",
                "蒙泰集团累计捐赠1931万元抗击新冠肺炎疫情。"
            ],
            "item2019": [
                "蒙泰集团与华东理工大学粉煤灰综合利用技术研发联合实验正式启动。",
                "蒙泰集团新材料、新能源、高科技产业研发中心开工建设。",
                "蒙泰集团连续三年冠名赞助蒙泰鄂尔多斯国际马拉松公益赛事。",
                "蒙泰集团参加在巴西巴西利亚举办的金砖国家峰会。"
            ],
            "item2018": [
                "蒙泰集团向内蒙古光明行社会公益活动捐款500万元，促进青少年健康护眼。",
                "蒙泰满来梁煤矿被应急管理部、国家煤矿安全监察局评为安全生产标准化一级煤矿。"
            ],
            "item2017": [
                "蒙泰范家村煤矿被中国煤炭工业协会评为2014-2015年度煤炭工业特级安全高效矿井。",
                "蒙泰达拉特年产90万吨电解铝项目一期建成并于当年成功送电。",
                "蒙泰满来梁煤矿被评为安全生产标准化一级矿井。"
            ],
            "item2016": [
                "蒙泰满来梁煤矿被评为安全生产标准化一级矿井。",
                "蒙泰集团冠名赞助蒙泰鄂尔多斯国际马拉松公益赛事。"
            ],
            "item2015": [
                "蒙泰满来梁煤矿被评为安全质量标准化二级矿井。",
                "蒙泰不连沟煤矿连续四年被评为全国安全质量标准化一级矿井。",
                "蒙泰被鄂尔多斯市国税局、地税局评为2014年度A级纳税人。"
            ]
        }
    },
    "hero": {
        "title": "欢迎来到梦泰集团",
        "cta": "了解更多"
    },
    "staffStyle": {
        "title": "员工风采",
        "source": "来源",
        "views": "浏览量",
        "card1": {
            "source": "",
            "views": "87",
            "title": "蒙泰2024鄂尔多斯马拉松官方训练营圆满收官",
            "description": [
                "8月22日，蒙泰2024鄂尔多斯马拉松官方训练营顺利举行。蒙泰的马拉松爱好者与世界马拉松冠军孙英杰近距离互动交流，并进行了热身和训练，把握赛前最后时间积极备战。",
                "孙英杰，中国女子全程马拉松纪录保持者，世界半程马拉松冠军，北京马拉松四连冠得主，釜山亚运会双金得主，马尼拉亚洲田径锦标赛双金得主。其全马最佳成绩为2小时19分39秒，半马最佳成绩为1小时8分40秒。",
                "在训练场上，孙英杰教练带领大家进行了大量热身和训练动作。她在观察队员跑步状态后给予针对性指导，帮助大家掌握正确的跑步方法和节奏。",
                "马拉松既是全民的盛宴，也是极限的挑战。从5公里到42.195公里，每一个目标都值得我们全力以赴。奔跑吧，不断突破与超越自我，点燃内心的火焰，开启人生的无限精彩。"
            ]
        },
        "card2": {
            "source": "",
            "views": "238",
            "title": "祝蒙泰集团全体女员工节日快乐！",
            "description": [
                "三月春意盎然。3月8日，蒙泰集团全体女员工迎来了第113个国际妇女节，也是我国第100个妇女节。集团工会与团委联合举办了“智慧女性 魅力绽放”为主题的节日活动，让广大女员工在工作之余度过一个快乐而难忘的节日。",
                "集团党委、工会和团委代表——集团总裁助理王辉，向全体女员工致以节日的问候，期望集团每一位女性在今后的工作和生活中更加优秀，更加动人，以团结奋斗、奋发向上的精神风貌展现蒙泰人的风采。",
                "鄂尔多斯机场高级礼仪培训师杨文艳通过现场讲解与互动，为大家讲授了职场商务礼仪知识。",
                "在游戏环节中，女员工们精神饱满、积极参与。在掌声、笑声与欢呼声中，大家尽情享受趣味活动带来的欢乐。",
                "此次活动不仅提升了女员工的职场礼仪素养，还通过趣味游戏培养了团队协作精神，让大家在轻松愉快的氛围中度过了一个美好而有意义的节日。",
                "每位女性都应有勇气定义自己的人生，即使是普通的女性，也应被光芒照亮。"
            ]
        },
        "card3": {
            "source": "",
            "views": "445",
            "title": "第十三届“超越杯”岗位技能竞赛圆满落幕！",
            "description": [
                "4月28日，蒙泰集团第十三届“超越杯”岗位技能竞赛圆满落幕。共计1,150名参赛员工中，212名岗位标兵和技术能手脱颖而出，获得表彰与奖励。",
                "经过为期16天的激烈角逐，共产生一等奖56名、二等奖67名、三等奖89名。选手们在比赛中的优异表现，展现了过硬素质与精湛技能，也彰显了蒙泰人爱岗敬业、苦练本领、不断超越自我的精神风貌。",
                "“超越杯”岗位技能竞赛不仅是对大家工作能力和技能水平的全面检阅，也是集团为全体员工精心打造的学习、交流与沟通平台，旨在通过竞赛激发全员工作热情，提升业务水平，至今已连续举办十三届。",
                "党委书记康卫成殷切希望所有获奖员工继续发扬成绩、树立榜样、再接再厉，在岗位上不断作出新贡献、勇当先锋；也希望其他员工向先进学习、对标榜样、超越标杆；各单位和部门要更加重视人才队伍建设，充分发挥高技能人才的“传帮带”作用，激发广大员工的创新活力与智慧潜能。"
            ]
        },
        "card4": {
            "source": "",
            "views": "1233",
            "title": "蒙泰集团第十三届“超越杯”岗位技能竞赛正式启动",
            "description": [
                "4月12日，柳绿春风起。在春意盎然、百花盛开的季节里，蒙泰人迎来了第十三届“超越杯”岗位技能竞赛。此次竞赛历时17天，设8个赛区、39个子赛区，参赛人数突破千人，创历史新高。",
                "“超越杯”岗位技能竞赛是全体员工展示才华、展现风采的大舞台，更是岗位培训、交流沟通的大擂台。参赛者可在比赛中发现短板、挑战自我，向优秀学习，在相互学习、比拼中不断提升。",
                "这既是一场大规模岗位培训，也是一场技能竞赛。比的是技能、拼的是素质，而背后则是管理与文化的较量。集团总裁助理尚佩琳在开幕致辞中指出，要在集团上下营造人人重才、人人争才、人人成才、人人尽才的良好局面，让各类人才的创新活力竞相迸发，智慧与才华充分流动。",
                "近年来，公司坚持“绿色发展、科技强企”战略，不断加大科技创新投入，聚焦产业链延伸，在转型升级和高质量发展上迈出坚实步伐，取得显著成果。公司快速、高质量发展对人才建设提出了更高要求，也将人才工作置于更加重要的位置，从战略和全局高度推进，力求通过持续优化人才体系与机制，为全体员工搭建广阔的职业发展平台。"
            ]
        }
    }
}




const props = defineProps<{
  title: string
  image: string
}>()

const defaultTitle = computed(() => props.title || t('Default Title'))
const defaultImage = computed(() => props.image || '/images/default.jpg')
const translations: Record<string, any> = { en, mn,ch };
const locale = ref<string>('en');


const getTranslations = () => {
  return translations[locale.value];
};

const { t } = useScopedI18n('nav', getTranslations);


const isMongolian = computed(() => locale.value === 'mn');


</script>

<style scoped>
.external-banner {
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
  padding: 0 2rem;
}

.banner-content {
  max-width: 100%;
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInFromLeft 1.2s ease-out 0.3s forwards;
}

.banner-title-wrapper {
  max-width: 800px;
  text-align: left;
  width: 100%;
  margin-top: 120px;
  margin-left: 50px;
}

.banner-title {
  font-size: 2.5rem;
  font-weight: 400;
  color: white;
  margin: 0 0 1.5rem 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  line-height: 1.1;
  position: relative;
}

.banner-title::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    #f7931e 0%,
    #f7931e 50%,
    #ff4444 50%,
    #ff4444 100%
  );
}

@keyframes fadeInFromLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .banner-title {
    font-size: 2.5rem;
  }

  .external-banner {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .banner-title {
    font-size: 2rem;
  }
}


.vertical-text {
  writing-mode: vertical-lr;
  text-orientation: sideways;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  max-height: 200px;
    overflow: hidden;
    word-break: break-word;
}
.vertical-text .banner-title::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    to right,
    #f7931e 0%,
    #f7931e 50%,
    #ff4444 50%,
    #ff4444 100%
  );
}
</style>
