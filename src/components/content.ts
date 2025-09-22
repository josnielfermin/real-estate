type contentElement = {
  type: "text" | "image" | "highlight" | "list" | "container";
  text?: string;
  image?: string;
};
const properties = [
  {
    title: "Property 1",
    image: "/static/images/premium-properties/calvalli-tower.png",
    price: "$1,000,000",
    addressDescription:
      "Apartment with 1 bedroom in Cavalli Tower, Dubai, UAE (axc-3990402)",
    description: "The Apartment is 868.32 ft² or 81 m², number of bedrooms: 1",
  },
  {
    title: "Property 2",
    image: "/static/images/premium-properties/image-2.png",
    price: "$2,000,000",
    addressDescription:
      "Apartment with 2 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990403)",
    description:
      "The Apartment is 1,200.50 ft² or 111 m², number of bedrooms: 2",
  },
  {
    title: "Property 3",
    image: "/static/images/premium-properties/image-3.png",
    price: "$3,000,000",
    addressDescription:
      "Apartment with 3 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990404)",
    description:
      "The Apartment is 1,500.75 ft² or 139 m², number of bedrooms: 3",
  },
  {
    title: "Property 4",
    image: "/static/images/premium-properties/image-4.png",
    price: "$4,000,000",
    addressDescription:
      "Apartment with 4 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990405)",
    description:
      "The Apartment is 1,800.00 ft² or 167 m², number of bedrooms: 4",
  },
  {
    title: "Property 5",
    image: "/static/images/premium-properties/image-5.png",
    price: "$5,000,000",
    addressDescription:
      "Apartment with 5 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990406)",
    description:
      "The Apartment is 2,000.00 ft² or 186 m², number of bedrooms: 5",
  },
  {
    title: "Property 6",
    image: "/static/images/premium-properties/image-6.png",
    price: "$6,000,000",
    addressDescription:
      "Apartment with 6 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990407)",
    description:
      "The Apartment is 2,200.00 ft² or 204 m², number of bedrooms: 6",
  },
  {
    title: "Property 7",
    image: "/static/images/premium-properties/image-7.png",
    price: "$7,000,000",
    addressDescription:
      "Apartment with 7 bedrooms in Cavalli Tower, Dubai, UAE (axc-3990408)",
    description:
      "The Apartment is 2,400.00 ft² or 223 m², number of bedrooms: 7",
  },
];

export const Content = {
  header: [
    {
      title: "About Us",
      url: "/about-us",
    },
    {
      title: "Latest Launches",
      url: "/latest-launches",
    },
    {
      title: "Communities",
      url: "/communities",
    },
    {
      title: "Sustainability",
      url: "/sustainability",
    },
  ],
  cover: {
    title: "Your New Beginning",
    subtitle: "Starts Here",
  },
  partners: [
    {
      name: "Partner 1",
      logo: "/static/images/partners/logoipsum.svg",
      url: "https://partner1.com",
    },
    {
      name: "Partner 2",
      logo: "/static/images/partners/logoipsum2.svg",
      url: "https://partner2.com",
    },
  ],
  highlights: {
    title: "Highlights of Our",
    subtitle: "Real-Estate Expertise",
    items: [
      {
        title: "Luxury sales advisors",
        amount: "110+",
      },
      {
        title: "Sales offices",
        amount: "20+",
      },
      {
        title: "Satisfied clients",
        amount: "20k",
      },
      {
        title: "Sales advisors",
        amount: "20+",
      },
    ],
  },
  exclusive: {
    title: "Exclusive Homes in Prime Locations",
    description:
      "Our properties are nestled in prime locations, featuring exceptional designs and offering an elevated lifestyle within vibrant Emaar communities—all seamlessly managed by our expert Emaar Community Management team.",
    video: "/static/videos/exclusive.mp4",
  },
  premiumProperties: {
    title: "Premium Properties",
    subtitle: "In The Best Locations",
    items: properties,
  },
  pros: {
    title: "Why",
    subtitle: "Dubai?",
    items: [
      {
        title: "Higher Rental Yields",
        description:
          "Investors can earn rental yields of up 8-10%** annually, surpassing many global markets.",
        image: "/static/images/pros/image-1.png",
      },
      {
        title: "Thriving Economy",
        description:
          "Dubai's economy is one of the fastest-growing in the world, offering numerous opportunities for investment and growth.",
        image: "/static/images/pros/image-2.png",
      },
      {
        title: "Luxury Lifestyle",
        description:
          "Experience a luxurious lifestyle with world-class amenities, shopping, and entertainment options.",
        image: "/static/images/pros/image-3.png",
      },
      {
        title: "Cultural Diversity",
        description:
          "Dubai is a melting pot of cultures, providing a unique and enriching living experience.",
        image: "/static/images/pros/image-4.png",
      },
      {
        title: "Strategic Location",
        description:
          "Located at the crossroads of Europe, Asia, and Africa, Dubai offers easy access to major markets.",
        image: "/static/images/pros/image-5.png",
      },
    ],
  },
  banner: {
    video: "/static/videos/banner.mp4",
  },
  clients: {
    title: "What Our Clients",
    subtitle: "Are Saying",
    items: [
      {
        name: "Yan Ming",
        feedback:
          "The team was incredibly helpful and guided me through the entire process.",
        image: "/static/images/clients/yan-ming.png",
      },
      {
        name: "Tom Holland",
        feedback:
          "I couldn't have asked for a better experience. Highly recommend!",
        image: "/static/images/clients/tom-holland.png",
      },
      {
        name: "Isabella Marlow",
        feedback:
          "Professional, knowledgeable, and always available to answer my questions.",
        image: "/static/images/clients/isabella-marlow.png",
      },
    ],
  },
  mainArticle: {
    title: "Sell millions in Dubai",
    subtitle: "This Machaleña did it!",
    content: [
      {
        type: "text",
        text: "Did you ever imagine that a trip to Dubai could transform your life? María del Cisne Ordóñez Aguirre, a 24-year-old Ecuadorian, is living proof that boldness and perseverance can break down any barriers. Today, she is the heart of the Damac construction company in our region, where she continues to rack up millions in sales.",
      },
      {
        type: "text",
        text: 'Forbes Ecuador presents Damac, a Dubai-based construction company founded by "one of the most respected businessmen in the Middle East," Hussain Sajwani. It specializes in the luxury market and its reach does not end in the United Arab Emirates, as it has projects in Saudi Arabia, Qatar, Jordan, Lebanon, Iraq, the Maldives, Canada, the United States, and the United Kingdom. It is estimated, according to foreign media, that this real estate company has delivered more than 50,000 properties and is building "the new generation of housing" in 15 cities.',
      },
      {
        type: "text",
        text: "With more than 3,000 employees, this company is growing globally, and one of its pillars in our region is Ecuadorian María del Cisne Ordóñez Aguirre, the true protagonist of this story. Today, at 24 years old, she works as the International Relations Manager at Damac. In a video call, nine hours apart, we connected to learn how she went from studying English to creating a career as a real estate salesperson.",
      },
      {
        type: "text",
        text: "She was born in Machala, El Oro, but her life was spent amidst the chaos of the Ecuadorian capital. Quito was her home until she finished secondary school, although she moved several times due to her father's job. Her desire to learn languages ​​and study abroad led her to a destination she had never considered. \"Europe was a good place, but it takes a long time to issue student visas, so I decided to come to the United Arab Emirates through Education First (EF). For the first six months, I dedicated myself to improving my English because it wasn't good enough for studying or working.\"",
      },
    ] as contentElement[],
    featured: "/static/images/main-article/forbes.png",
    image: "/static/images/main-article/cover.png",
  },
  blog: {
    title: "Our",
    subtitle: "Blog",
    posts: [
      {
        title: "Vende millones en Dubái",
        subtitle: "¡Así lo hizo esta machaleña!",
        date: "2023-01-15",
        excerpt:
          "¿Alguna vez imaginaste que un viaje a Dubái podría transformar tu vida? María del Cisne Ordóñez Aguirre, una ecuatoriana de 24 años, es la prueba viviente de que la audacia y la perseverancia derriban cualquier frontera. Hoy, es el corazón de la constructura Damac en nuestra región, donde no deja de sumar millones en ventas.",
        image: "/static/images/blog/image-1.png",
      },
      {
        title: "Vende millones en Dubái",
        subtitle: "¡Así lo hizo esta machaleña!",
        date: "2023-01-15",
        excerpt:
          "¿Alguna vez imaginaste que un viaje a Dubái podría transformar tu vida? María del Cisne Ordóñez Aguirre, una ecuatoriana de 24 años, es la prueba viviente de que la audacia y la perseverancia derriban cualquier frontera. Hoy, es el corazón de la constructura Damac en nuestra región, donde no deja de sumar millones en ventas.",
        image: "/static/images/blog/image-1.png",
      },
      {
        title: "Vende millones en Dubái",
        subtitle: "¡Así lo hizo esta machaleña!",
        date: "2023-01-15",
        excerpt:
          "¿Alguna vez imaginaste que un viaje a Dubái podría transformar tu vida? María del Cisne Ordóñez Aguirre, una ecuatoriana de 24 años, es la prueba viviente de que la audacia y la perseverancia derriban cualquier frontera. Hoy, es el corazón de la constructura Damac en nuestra región, donde no deja de sumar millones en ventas.",
        image: "/static/images/blog/image-1.png",
      },
    ],
  },
  team: {
    title: "Our",
    subtitle: "Team",
    members: [
      {
        name: "Jerry Scottfield",
        experience: "10 years",
        specialization: "Secondary Market",
        languages: ["English", "Spanish"],
        image: "/static/images/team/member-1.png",
      },
      {
        name: "Maria del Cisne Ordóñez",
        experience: "6 years",
        specialization: "Secondary Market",
        languages: ["English", "Arabic"],
        image: "/static/images/team/member-2.png",
      },
    ],
  },
  questions: {
    title: "Frequently",
    subtitle: "Asked Questions",
    items: [
      {
        question: "What are the benefits of investing in real estate?",
        answer:
          "Investing in real estate offers several benefits, including potential for long-term appreciation, rental income, and tax advantages.",
      },
      {
        question: "What services do you offer?",
        answer:
          "We offer a wide range of real estate services, including property management, sales, and leasing.",
      },
      {
        question: "How can I get in touch with your team?",
        answer: "You can contact us through our website or by phone.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We primarily serve the Dubai area, but we also have listings in other parts of the UAE.",
      },
    ],
  },
  newsletter: {
    title: "Newsletter",
    subtitle: "Subscription",
    description:
      "Be the first to know about upcoming trends and get insider tips on yatching lifestyle to the fullest.",
  },
  footer: {
    year: "2025",
    copyright: "All copyrights reserved",
    socials: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/yourpage",
        icon: "icon-instagram",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/yourpage",
        icon: "icon-facebook",
      },
      {
        platform: "WhatsApp",
        url: "https://www.whatsapp.com/yourpage",
        icon: "icon-whatsapp",
      },
    ],
  },
  properties: [
    {
      title: "Cavalli Tower",
      items: [
        {
          type: "text",
          text: "Boutique 23 – a premium 23-story residential building located in Dubai’s Culture Village Al Jaddaf Waterfront. The architectural masterpiece was carefully crafted by LMD Developers.",
        },
        {
          type: "text",
          text: "Boutique 23 caters to a lifestyle that transcends the typical, offering a vibrant experience that sets new standards. This 23-story complex harmoniously blends cozy residences, premium office spaces, retail, and luxury amenities to highlight the modern urban lifestyle.",
        },
        {
          type: "highlight",
          text: "Building highlights",
        },
        {
          type: "highlight",
          text: "Building highlights",
        },
        {
          type: "list",
          items: [
            "A fully equipped gym",
            "Rooftop swimming pool and wading pool",
            "Kids’ play area",
            "4-level underground parking",
            "Shops on the ground floor",
            "Premium office spaces",
          ],
        },
      ],
      features: [
        {
          title: "Private pool",
          icon: "icon-swim",
        },
        {
          title: "Gym",
          icon: "icon-gym",
        },
        {
          title: "Swimming pool",
          icon: "icon-pool-stairs",
        },
      ],
    },
  ],
  recent: {
    title: "Properties",
    subtitle: "Recents",
    items: properties,
  },
  articleDetail: {
    title: "Vende millones en Dubái",
    subtitle: "¡Así lo hizo esta machaleña!",
    image: "/static/images/article-detail/main-image.png",
    content: [
      {
        type: "text",
        text: "Did you ever imagine that a trip to Dubai could transform your life? María del Cisne Ordóñez Aguirre, a 24-year-old Ecuadorian, is living proof that boldness and perseverance can break down any barriers. Today, she is the heart of the Damac construction company in our region, where she continues to rack up millions in sales.",
      },
      {
        type: "text",
        text: 'Forbes Ecuador presents Damac, a Dubai-based construction company founded by "one of the most respected businessmen in the Middle East," Hussain Sajwani. It specializes in the luxury market and its reach does not end in the United Arab Emirates, as it has projects in Saudi Arabia, Qatar, Jordan, Lebanon, Iraq, the Maldives, Canada, the United States, and the United Kingdom. It is estimated, according to foreign media, that this real estate company has delivered more than 50,000 properties and is building "the new generation of housing" in 15 cities.',
      },
      {
        type: "text",
        text: "With more than 3,000 employees, this company is growing globally, and one of its pillars in our region is Ecuadorian María del Cisne Ordóñez Aguirre, the true protagonist of this story. Today, at 24 years old, she works as the International Relations Manager at Damac. In a video call, nine hours apart, we connected to learn how she went from studying English to creating a career as a real estate salesperson.",
      },
      {
        type: "text",
        text: "She was born in Machala, El Oro, but her life was spent amidst the chaos of the Ecuadorian capital. Quito was her home until she finished secondary school, although she moved several times due to her father's job. Her desire to learn languages ​​and study abroad led her to a destination she had never considered. \"Europe was a good place, but it takes a long time to issue student visas, so I decided to come to the United Arab Emirates through Education First (EF). For the first six months, I dedicated myself to improving my English because it wasn't good enough for studying or working.\"",
      },
      {
        type: "text",
        text: 'At 18, driven by Dubai\'s lifestyle, she decided to enroll at British Imperial College to study business and administration. Ordóñez says the security of being able to go out at any time, without fear, was one of her motivations for staying in the Middle East. "This is a land of opportunity. If you persevere, be consistent, and speak English well, you have a great chance of success."',
      },
      {
        type: "container",
        columns: [
          {
            width: "50%",
            children: [
              {
                type: "image",
                image: "/static/images/article-detail/image-2.png",
              },
            ],
          },
          {
            width: "50%",
            children: [
              {
                type: "text",
                text: "This Machaleña speaks 50% Arabic and her daily life is spent in English. In the middle of the interview, she recalls how difficult the first months of school were, although the technological tools and professional internships were her driving force. Studying there costs between US$11,000 and US$16,000 a year for courses not related to health. So she spent three years wandering the halls of her university until she landed an internship in 2023 that turned into a full-time job.",
              },
              {
                type: "text",
                text: '"I was the first Ecuadorian and the first Spanish-speaking person to join Damac." Ordóñez confesses that the doors opened for her because she broke a sales record, betting on the Spanish-speaking market. "I have to show Latin American investors that Dubai has potential. Taking that step of investing 100,000 kilometers away isn\'t easy, and I have to advise them and give them the necessary attention."',
              },
            ],
          },
        ],
      },
      {
        type: "text",
        text: 'This real estate agent points out that the market there is very dynamic, with something new on offer every two weeks. Contracts worth up to US$2 billion can be closed in two or three hours, covering 5,000 homes or 40 buildings. "Teaching how the sector works, compared to Latin America, is difficult and requires a lot of patience. Today, I market projects that are in the works or will be built in the coming years." Her portfolio includes 70 projects, from residential developments with more than 16,000 hectares to 160-story towers.',
      },
      {
        type: "text",
        text: "Hispanics buy the most studios or one-bedroom apartments. \"Most do it as an investment, not because they're going to move. Here, real estate is tax-free, the annual return on investment is up to 10%, and for short-term rentals, it's up to 16%.\" Ordóñez says that Mexico, Argentina, Brazil, and Colombia are the countries with the highest reception. Ecuador is not far behind, although these are usually patriots who live in countries like the United States.",
      },
      {
        type: "text",
        text: '"The good thing about Dubai is that you can buy a property under construction and pay a 24% down payment. You can withdraw from the investment by simply canceling the 44% payment plan. You enter now and leave after a year and a half, with an appreciation of up to 30%, ready to invest in another one." According to this Ecuadorian, in two months they will deliver a property that they began selling in 2021 and that has gone through six or seven investors.',
      },
    ],
  },
};
