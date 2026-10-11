/** Client logos pulled from sparkhat.com */
export const CLIENT_LOGOS = [
  { name: 'Go City', src: '/assets/clients/gocity.png' },
  { name: 'Seniorly', src: '/assets/clients/seniorly.png' },
  { name: 'Anchor', src: '/assets/clients/anchor.png' },
  { name: 'Naylam', src: '/assets/clients/naylam.png' },
  { name: 'NotCo', src: '/assets/clients/notco.png' },
  { name: 'Chuker', src: '/assets/clients/chuker.png' },
  { name: 'Socialbooster', src: '/assets/clients/socialbooster.png' },
  { name: 'Confirm Biosciences', src: '/assets/clients/confirm-biosciences.png' },
]

/** Full testimonials from sparkhat.com */
export const TESTIMONIALS = [
  {
    text: 'Sparkhat is phenomenal at keeping you in the loop as a client and happily explains each step they take until the milestone is achieved. Would recommend them for anybody who needs SEO consultancy.',
    who: 'Executive Services Company',
  },
  {
    text: 'They definitely know their stuff. The team is super knowledgeable about prospecting for link building and really knows how to make use of tools and fix processes. Very good high level management material. Helped our startup get the traction we needed.',
    who: 'HealthTech Company',
  },
  {
    text: "Coming from a CEO, they are honest and straight to the point. No shady stuff or games. Sumant is a good man with integrity, and he's the type of person I enjoy working with. I'm looking forward to working with him and the team going forward! Fast, smart, and knows his stuff very, very well. He is the best of the best and worth every penny.",
    who: 'Digital Services Agency',
  },
  {
    text: "Working with Sparkhat and the team was a game-changer! They didn't just set up our marketing campaigns; they took the time to explain the intricacies of PPC, SEO, and more. Our website traffic skyrocketed, and our online presence has never been better. Highly recommend their services if you're looking to make a real impact with your business.",
    who: 'Jewelry Retailer',
  },
]

export const HOME_SERVICES = [
  {
    name: 'SEO',
    tag: 'organic',
    line: 'Technical audits, content strategy and site structure that compound over time.',
    href: '/services#seo',
  },
  {
    name: 'AI search optimization',
    tag: 'geo · aeo',
    line: 'Show up when people ask AI assistants for recommendations in your space.',
    href: '/services#ai',
  },
  {
    name: 'Google Ads',
    tag: 'paid search',
    line: 'New or rebuilt accounts that scale ROI with the latest tools and bidding.',
    href: '/services#ads',
  },
  {
    name: 'Facebook & Instagram ads',
    tag: 'paid social',
    line: 'Creative testing and audience strategy scaled on pipeline, not likes.',
    href: '/services#social',
  },
  {
    name: 'Custom websites',
    tag: 'build',
    line: 'Fast, premium sites engineered for search and conversion.',
    href: '/build',
  },
  {
    name: 'Tools & software',
    tag: 'build',
    line: 'Calculators, dashboards and portals — from idea to launch.',
    href: '/build',
  },
]

export const STEPS = [
  {
    title: 'Audit',
    time: 'week 1',
    desc: 'We review your rankings, ad accounts and website to find where growth is leaking.',
  },
  {
    title: 'Plan',
    time: 'week 2',
    desc: 'A prioritized roadmap with budgets. Nothing ships until you approve it.',
  },
  {
    title: 'Execute',
    time: 'ongoing',
    desc: 'Our team runs everything, with a dedicated account manager as your single contact.',
  },
  {
    title: 'Report',
    time: 'monthly',
    desc: 'Results tied to leads and revenue. We double down on what works.',
  },
]

export const SERVICES = [
  {
    id: 'seo',
    name: 'SEO',
    tag: 'organic search',
    time: 'results in 3–6 months',
    desc: 'Content strategy, technical audits and site structure that compound. We build topical authority that ranks — and keeps ranking through algorithm updates.',
    items: [
      'Technical SEO audit',
      'Content strategy & writing',
      'Site structure',
      'eCommerce & local SEO',
    ],
  },
  {
    id: 'ai',
    name: 'AI search optimization',
    tag: 'geo · aeo',
    time: 'results in 2–4 months',
    desc: 'More buyers now ask assistants like ChatGPT for recommendations. We make sure your brand is the one they mention.',
    items: [
      'Visibility audit',
      'Structured data setup',
      'Brand mention strategy',
      'Monthly tracking',
    ],
  },
  {
    id: 'ads',
    name: 'Google Ads',
    tag: 'paid search',
    time: 'live in 2 weeks',
    desc: 'We set up or rebuild your Google Ads account to scale ROI, with clean structure and conversion tracking tied to actual revenue.',
    items: [
      'Search & Shopping',
      'Performance Max',
      'Conversion tracking',
      'Landing page testing',
    ],
  },
  {
    id: 'social',
    name: 'Facebook & Instagram ads',
    tag: 'paid social',
    time: 'live in 2 weeks',
    desc: 'Scroll-stopping creative, disciplined testing and audience strategy across Facebook and Instagram — scaled on pipeline, not likes.',
    items: [
      'Creative testing',
      'Audience strategy',
      'Retargeting',
      'Pixel & Conversions API',
    ],
  },
  {
    id: 'links',
    name: 'Link building & digital PR',
    tag: 'authority',
    time: 'monthly',
    desc: 'Links that actually move rankings and build your brand, from publications your customers already read.',
    items: [
      'Outreach campaigns',
      'Digital PR',
      'Top-tier placements',
      'Link audits',
    ],
  },
  {
    id: 'consulting',
    name: 'Marketing consulting',
    tag: 'strategy',
    time: 'as needed',
    desc: 'Ask anything about SEO, PPC and customer acquisition. Straight answers from people who do this every day.',
    items: [
      'Acquisition strategy',
      'Channel planning',
      'Budget allocation',
      'Team training',
    ],
  },
  {
    id: 'build',
    name: 'Websites & tools',
    tag: 'build studio',
    time: 'project-based',
    desc: 'Custom websites and bespoke software built by the same team that markets them — so everything launches ready to rank and convert.',
    items: [
      'Custom websites',
      'Calculators & quote tools',
      'Dashboards & portals',
      'Booking & internal tools',
    ],
  },
]

export const GROW_PLANS = [
  {
    file: 'search.plan',
    name: 'Search',
    desc: 'SEO and content to own your organic search results.',
    price: '$2.5k',
    unit: '/mo',
    features: [
      'Technical & content audit',
      'AI search optimization',
      'Content strategy & writing',
      'Monthly link building',
      'Dedicated account manager',
    ],
    hot: false,
  },
  {
    file: 'growth.plan',
    name: 'Growth',
    desc: 'Search plus paid ads, run as one engine against your sales data.',
    price: '$5k',
    unit: '/mo',
    features: [
      'Everything in Search',
      'Google Ads management',
      'Facebook & Instagram ads',
      'Landing page testing',
      'Revenue-tied reporting',
    ],
    hot: true,
  },
  {
    file: 'enterprise.plan',
    name: 'Enterprise',
    desc: 'Multi-market programs with a senior team embedded with yours.',
    price: 'Custom',
    unit: '',
    features: [
      'Everything in Growth',
      'Digital PR program',
      'Multi-region & multi-site',
      'Quarterly strategy reviews',
      'Shared Slack channel',
    ],
    hot: false,
  },
]

export const BUILD_PLANS = [
  {
    file: 'website.build',
    name: 'Website',
    desc: 'A custom, SEO-ready marketing site designed to convert.',
    price: '$8k',
    unit: '/project',
    features: [
      'Strategy & sitemap',
      'Custom design',
      'Development & CMS',
      'Technical SEO built in',
      'Launch support',
    ],
    hot: false,
  },
  {
    file: 'tool.build',
    name: 'Tool',
    desc: 'A focused tool — calculator, portal or dashboard — from idea to launch.',
    price: '$12k',
    unit: '/project',
    features: [
      'Scope & estimate',
      'Clickable prototype',
      'Full build & testing',
      'Integrations',
      '30 days post-launch care',
    ],
    hot: true,
  },
  {
    file: 'product.build',
    name: 'Product',
    desc: 'Larger platforms and custom software, built in phases.',
    price: 'Custom',
    unit: '',
    features: [
      'Product roadmap',
      'Phased delivery',
      'Data integrations',
      'Ongoing improvements',
      'Launch marketing',
    ],
    hot: false,
  },
]

export const FAQS = [
  [
    'How fast will we see results?',
    'Paid ads can move in weeks. SEO builds over three to six months. We set milestones in the plan and report against them monthly.',
  ],
  [
    'What is AI search optimization?',
    'More people now ask assistants like ChatGPT for recommendations. We make sure your brand is the one they mention, building on the same foundations as SEO.',
  ],
  [
    'Do you require long contracts?',
    'Growth plans are month to month after a three-month ramp, since search takes time. Builds are fixed-scope projects.',
  ],
  [
    'Who will we work with?',
    'A dedicated account manager plus senior specialists for each channel. No hand-offs to people you never meet.',
  ],
  [
    'Can you build something we only have a rough idea for?',
    "Yes — that's most projects. One call to map it out, then a written scope and a clickable prototype before the full build.",
  ],
  [
    'How do you report?',
    'On leads, pipeline and revenue — not vanity metrics. Monthly reports plus a live dashboard.',
  ],
] as const

export const IDEA_EXAMPLES = [
  'a quote calculator that books jobs',
  'a dashboard for ad spend vs revenue',
  'a client portal for order tracking',
  'a booking system for our clinics',
]

export const BUILD_EXAMPLES = [
  'A quote calculator that books jobs for my roofing company',
  'A dashboard showing ad spend vs revenue in one view',
  'A portal where customers track their orders',
  'A booking system for our three clinic locations',
]

export const ACCENT = ['var(--a)', 'var(--b)', 'var(--c)', 'var(--ok)'] as const
