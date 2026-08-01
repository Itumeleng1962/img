// Mock data for Imagine IPS website

export const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Connect',
    href: '#connect',
    submenu: [
      { label: 'Home Fibre', href: '#home-fibre' },
      { label: 'Business', href: '#business' },
      { label: 'Estate & Complexes', href: '#estate' },
    ],
  },
  {
    label: 'Services',
    href: '#services',
    submenu: [
      { label: 'Ultra-Fast Fibre', href: '#fibre' },
      { label: 'VoIP Voice', href: '#voice' },
      { label: 'IT Support', href: '#support' },
    ],
  },
  { label: 'Coverage', href: '#coverage' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
];

export const heroSlides = [
  {
    id: 1,
    tag: 'Ultra-Fast Fibre',
    title: 'Next-level broadband',
    highlight: 'out of this world.',
    description:
      'Get up to 25x your current ADSL or 3G speed. Uncapped, unshaped, and always on.',
    cta: { label: 'Check Coverage', href: '#coverage' },
    secondaryCta: { label: 'View Packages', href: '#packages' },
    image:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80',
    accent: 'red',
  },
  {
    id: 2,
    tag: 'New Networks',
    title: 'Imagine is now on',
    highlight: 'more networks than ever.',
    description:
      'Netstream, DNATel, Evotel, Metro Fibre Networx, Vumatel & more. MTN coming soon.',
    cta: { label: 'Get Connected', href: '#contact' },
    secondaryCta: { label: 'See Networks', href: '#networks' },
    image:
      'https://images.unsplash.com/photo-1640622304233-7335e936f11b?w=1200&q=80',
    accent: 'cyan',
  },
  {
    id: 3,
    tag: 'Voice Services',
    title: 'Cut the cord.',
    highlight: 'Join the VoIP revolution.',
    description:
      'Per-second billing, number portability, month-to-month. Telephony that works when you do.',
    cta: { label: 'Learn About VoIP', href: '#voice' },
    secondaryCta: { label: 'Talk to Sales', href: '#contact' },
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    accent: 'red',
  },
];

export const stepsToConnect = [
  {
    id: 1,
    title: 'Check Coverage',
    description: 'Enter your address to confirm that Imagine Fibre is available in your area.',
    icon: 'MapPin',
  },
  {
    id: 2,
    title: 'Choose a Package',
    description: 'Select from a range of uncapped speeds designed for streaming, work and play.',
    icon: 'Package',
  },
  {
    id: 3,
    title: 'Book Installation',
    description: 'Our expert technicians install your line, router and get you online, fast.',
    icon: 'Wrench',
  },
  {
    id: 4,
    title: 'Enjoy Smarter Living',
    description: 'Stream, work, game and connect on South Africa\u2019s most reliable network.',
    icon: 'Sparkles',
  },
];

export const connectOptions = [
  {
    id: 'home',
    title: 'Connect your home',
    description:
      'Fibre-to-the-home for streaming, remote work, learning and everything in between.',
    image:
      'https://images.unsplash.com/photo-1750712263185-edde9f359e33?w=800&q=80',
    cta: 'Check your coverage',
    href: '#home-fibre',
    icon: 'Home',
  },
  {
    id: 'business',
    title: 'Connect your business',
    description:
      'Empowering businesses large and small to do more for less with dedicated bandwidth.',
    image:
      'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80',
    cta: 'Learn more',
    href: '#business',
    icon: 'Building2',
  },
  {
    id: 'estate',
    title: 'Connect your estate',
    description:
      'Broadband connectivity for complexes and estates \u2014 fibre-up your complex for free.',
    image:
      'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=800&q=80',
    cta: 'Learn more',
    href: '#estate',
    icon: 'Landmark',
  },
];

export const featuredDeals = [
  {
    id: 1,
    price: 449,
    term: 'MONTHLY',
    down: 20,
    up: 10,
    title: '20/10Mbps Uncapped Fibre',
    subtitle: 'Perfect for streaming and browsing',
    provider: 'Imagine',
    perks: ['Free WiFi Router', 'Free Installation', 'No Activation Fee', 'Uncapped'],
    popular: false,
  },
  {
    id: 2,
    price: 599,
    term: 'MONTHLY',
    down: 50,
    up: 25,
    title: '50/25Mbps Uncapped Fibre',
    subtitle: 'For busy households and light work',
    provider: 'Imagine',
    perks: ['Free WiFi Router', 'Free Installation', 'Free Delivery', 'Uncapped'],
    popular: true,
  },
  {
    id: 3,
    price: 799,
    term: 'MONTHLY',
    down: 100,
    up: 50,
    title: '100/50Mbps Uncapped Fibre',
    subtitle: 'Gamer- and creator-ready speeds',
    provider: 'Imagine',
    perks: ['Free WiFi Router', 'Free Installation', 'Priority Support', 'Uncapped'],
    popular: false,
  },
  {
    id: 4,
    price: 1199,
    term: 'MONTHLY',
    down: 200,
    up: 200,
    title: '200/200Mbps Symmetrical',
    subtitle: 'Pro-grade fibre for power users',
    provider: 'Imagine',
    perks: ['Free WiFi 6 Router', 'Free Installation', 'Priority Support', 'Uncapped'],
    popular: false,
  },
];

export const whyImagine = [
  {
    id: 1,
    title: 'No Long-Term Contracts',
    description:
      'Pay on a month-to-month basis and stay connected as long as you want to \u2014 no strings attached.',
    icon: 'CalendarCheck',
  },
  {
    id: 2,
    title: 'Trusted Support',
    description:
      'Proactive support that predicts potential problems before they arise \u2014 excellent service, always on.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Connectivity Innovation',
    description:
      'A well-established ISP dedicated to exceptional connectivity and IT solutions for smarter living.',
    icon: 'Lightbulb',
  },
  {
    id: 4,
    title: 'Nation-Wide Networks',
    description:
      'Netstream, DNATel, Evotel, Metro Fibre Networx, Vumatel \u2014 and MTN launching soon.',
    icon: 'Globe2',
  },
];

export const networks = [
  'Netstream',
  'DNATel',
  'Evotel',
  'Metro Fibre',
  'Vumatel',
  'Openserve',
  'Frogfoot',
  'MTN (Soon)',
];

export const awards = [
  { id: 1, title: 'Best Customer Service', year: '2024', body: 'ISPA Survey' },
  { id: 2, title: 'Fastest Growing ISP', year: '2024', body: 'MyBroadband' },
  { id: 3, title: 'Top Fibre Provider', year: '2023', body: 'BMIT Report' },
  { id: 4, title: 'Excellence in Support', year: '2023', body: 'TechCentral' },
];

export const newsItems = [
  {
    id: 1,
    title: 'Fibre up your complex for free with Blitz Fibre',
    excerpt:
      'Blitz Fibre is enabling multi-dwelling complexes in South Africa to become fibre-ready at no extra cost. The company builds a non-intrusive open-access underground fibre infrastructure.',
    date: 'Jun 20, 2025',
    tag: 'Estate',
    image:
      'https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=800&q=80',
  },
  {
    id: 2,
    title: 'Imagine sponsors Boksburg Child Welfare Wi-Fi',
    excerpt:
      'Boksburg Child Welfare is continuing to help the children of our community against all odds. The welfare\u2019s operations recently received a boost after receiving a Wi-Fi installation.',
    date: 'May 12, 2025',
    tag: 'Community',
    image:
      'https://images.unsplash.com/photo-1623076189461-f7706b741c04?w=800&q=80',
  },
  {
    id: 3,
    title: 'Imagine IPS continues to connect people for smarter living',
    excerpt:
      'A well-known national Internet Service Provider that has seen success in providing uninterrupted fixed-line connectivity and communication solutions expands nationally.',
    date: 'Apr 06, 2025',
    tag: 'Company',
    image:
      'https://images.unsplash.com/photo-1624965439943-09e0238644e2?w=800&q=80',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Do I pay for Fibre installation?',
    answer:
      'Standard fibre installation is free on most Imagine packages when you sign up for a 24-month or month-to-month plan through select networks. Non-standard installations may incur a fee, quoted upfront by our technicians.',
  },
  {
    id: 2,
    question: 'When will my Fibre be installed?',
    answer:
      'Once your line is ready and paperwork is complete, Imagine technicians typically schedule installation within 3\u20135 business days. You will receive an SMS with a booking window before the visit.',
  },
  {
    id: 3,
    question: 'Which networks does Imagine support?',
    answer:
      'Imagine is a network-agnostic ISP available on Netstream, DNATel, Evotel, Metro Fibre Networx, Vumatel, Openserve, Frogfoot and more. MTN Fibre is launching soon.',
  },
  {
    id: 4,
    question: 'Am I tied into a long contract?',
    answer:
      'No. Imagine offers true month-to-month pricing on most packages. Pay only for what you use and cancel any time with 30 days notice.',
  },
  {
    id: 5,
    question: 'Do you offer business fibre and VoIP?',
    answer:
      'Yes. Imagine provides dedicated business fibre, SLA-backed uptime and VoIP telephony with per-second billing, number portability and full PBX solutions.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Nomsa D.',
    location: 'Sandton, JHB',
    quote:
      'The install was quick, and the speeds are exactly what was promised. Working from home has never been smoother.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ryan P.',
    location: 'Somerset West, CT',
    quote:
      'Support team called back within an hour. Real humans, real fixes. This is what an ISP should be.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya K.',
    location: 'Umhlanga, DBN',
    quote:
      'Switched from a legacy provider and saved 30%. My kids stream, I game, and no one complains anymore.',
    rating: 5,
  },
];

export const footerLinks = {
  Company: ['About Imagine', 'Careers', 'Newsroom', 'Blitz Fibre'],
  Services: ['Home Fibre', 'Business Fibre', 'VoIP Voice', 'IT Support'],
  Support: ['Contact Us', 'FAQ', 'Coverage Map', 'Webmail'],
  Legal: ['Terms of Service', 'Privacy Policy', 'AUP', 'RICA Compliance'],
};
