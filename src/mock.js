// Mock data for Imagine IPS website scraped and synced from imagine.co.za

export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Connect',
    to: '/connect',
    submenu: [
      { label: 'Home Fibre', to: '/connect/home' },
      { label: 'Business', to: '/connect/business' },
      { label: 'Estate & Complexes', to: '/connect/estate' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    submenu: [
      { label: 'Ultra-Fast Fibre', to: '/services/fibre' },
      { label: 'VoIP Voice', to: '/services/voice' },
      { label: 'Website Hosting', to: '/services/hosting' },
      { label: 'IT Support', to: '/services/support' },
    ],
  },
  { label: 'Coverage', to: '/coverage' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' },
];

export const contactDetails = {
  phone: '+27 11 214 7600',
  displayPhone: '011 214 7600',
  supportEmail: 'helpdesk@imagine.co.za',
  salesEmail: 'sales@imagine.co.za',
  address: '2nd Floor, West Wing, 158 Jan Smuts Building, 9 Walters Ave, Rosebank, Johannesburg, 2121',
  portalUrl: 'https://ataglance.imagine.co.za/',
  webmailUrl: 'https://webmail.imagine.co.za/',
  ispa: {
    name: "Internet Service Providers' Association (ISPA)",
    box: 'P.O. Box 518 1687 Noordwyk',
    phone: '(010) 500 1200',
    takedownEmail: 'complaints@ispa.org.za',
    takedownUrl: 'https://ispa.org.za/tdn/',
  },
};

export const heroSlides = [
  {
    id: 1,
    tag: 'Ultra-Fast Fibre',
    title: 'Next-level broadband',
    highlight: 'out of this world.',
    description:
      'Imagine high speed fibre offers you ultra-fast connectivity — up to 25X your current ADSL or 3G speed. Uncapped, unshaped, and month-to-month.',
    cta: { label: 'Check Coverage', href: '/coverage' },
    secondaryCta: { label: 'View Packages', href: '/services/fibre' },
    image:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80',
    accent: 'red',
  },
  {
    id: 2,
    tag: 'New Networks Available',
    title: 'Imagine is now on',
    highlight: 'more networks than ever.',
    description:
      'Netstream | DNATel | Evotel | Metro Fibre Networx | Vumatel & more. Contact us today to get connected. Coming Soon: MTN!',
    cta: { label: 'Get Connected Now', href: '/contact' },
    secondaryCta: { label: 'See Networks', href: '/coverage' },
    image:
      'https://images.unsplash.com/photo-1640622304233-7335e936f11b?w=1200&q=80',
    accent: 'cyan',
  },
  {
    id: 3,
    tag: 'Voice Services',
    title: 'Cut the cost.',
    highlight: 'Join the VoIP revolution.',
    description:
      'Save up to 40% in call costs. Per-second billing from second 1, number portability, month-to-month, and Hosted PBX systems.',
    cta: { label: 'Explore VoIP', href: '/services/voice' },
    secondaryCta: { label: 'Contact Sales', href: '/contact' },
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
    accent: 'red',
  },
];

export const stepsToConnect = [
  {
    id: 1,
    title: 'Check Coverage',
    description: 'Enter your address to confirm Imagine Fibre & network availability in your area.',
    icon: 'MapPin',
  },
  {
    id: 2,
    title: 'Choose a Package',
    description: 'Select from a range of uncapped, unshaped speeds for streaming, gaming, and work.',
    icon: 'Package',
  },
  {
    id: 3,
    title: 'Book Installation',
    description: 'Our expert technicians install your line & free-to-use router to get you online fast.',
    icon: 'Wrench',
  },
  {
    id: 4,
    title: 'Enjoy Smarter Living',
    description: "Stream, work, game and connect on South Africa's most reliable network.",
    icon: 'Sparkles',
  },
];

export const connectOptions = [
  {
    id: 'home',
    title: 'Connect your home',
    description:
      'Fibre-to-the-home (FTTH) for Netflix, Showmax, gaming with zero lag, and video calls.',
    image:
      'https://images.unsplash.com/photo-1750712263185-edde9f359e33?w=800&q=80',
    cta: 'Check Home Fibre Coverage',
    href: '/connect/home',
    icon: 'Home',
  },
  {
    id: 'business',
    title: 'Connect your business',
    description:
      'Business Fibre (FTTB) & Hosted PBX from R989 ex VAT/month with static IP & SLA uptime options.',
    image:
      'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80',
    cta: 'Explore Business Solutions',
    href: '/connect/business',
    icon: 'Building2',
  },
  {
    id: 'estate',
    title: 'Connect your estate',
    description:
      'Fibre up your complex or estate for free with Blitz Fibre & open-access underground infrastructure.',
    image:
      'https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=800&q=80',
    cta: 'Fibre Up Your Complex',
    href: '/connect/estate',
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
    subtitle: 'Perfect for streaming TV and family browsing',
    provider: 'Imagine IPS',
    perks: ['Free to use Router', 'Month-to-Month Contract', 'Uncapped & Unshaped', 'Low Latency Gaming'],
    popular: false,
  },
  {
    id: 2,
    price: 599,
    term: 'MONTHLY',
    down: 50,
    up: 25,
    title: '50/25Mbps Uncapped Fibre',
    subtitle: 'High speed for home working & 4K Netflix',
    provider: 'Imagine IPS',
    perks: ['Free to use Router', 'Month-to-Month Contract', 'Uncapped & Unshaped', 'Free Installation Option'],
    popular: true,
  },
  {
    id: 3,
    price: 799,
    term: 'MONTHLY',
    down: 100,
    up: 50,
    title: '100/50Mbps Uncapped Fibre',
    subtitle: 'Creator & multi-device gaming performance',
    provider: 'Imagine IPS',
    perks: ['Free to use Router', 'Month-to-Month Contract', 'Priority Technical Support', 'Proactive Monitoring'],
    popular: false,
  },
  {
    id: 4,
    price: 1199,
    term: 'MONTHLY',
    down: 200,
    up: 200,
    title: '200/200Mbps Symmetrical Fibre',
    subtitle: 'Ultra-fast symmetrical fibre power user setup',
    provider: 'Imagine IPS',
    perks: ['Free to use Router', 'Month-to-Month Contract', 'Dedicated Support', '24/7 Service Desk'],
    popular: false,
  },
];

export const hostingPackages = [
  {
    id: 'basic',
    name: 'Basic',
    price: 69,
    storage: '4GB SSD Storage',
    emails: '25 Email Accounts',
    databases: '5 MySQL Databases',
    traffic: 'Unlimited Web Traffic*',
    domain: 'Free .co.za Domain (1st Year)',
    popular: false,
    orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=424',
  },
  {
    id: 'small',
    name: 'Small',
    price: 109,
    storage: '10GB SSD Storage',
    emails: '100 Email Accounts',
    databases: '10 MySQL Databases',
    traffic: 'Unlimited Web Traffic*',
    domain: 'Free .co.za Domain (1st Year)',
    popular: true,
    orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=425',
  },
  {
    id: 'business',
    name: 'Business',
    price: 169,
    storage: '20GB SSD Storage',
    emails: '200 Email Accounts',
    databases: '20 MySQL Databases',
    traffic: 'Unlimited Web Traffic*',
    domain: 'Free .co.za Domain (1st Year)',
    popular: false,
    orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=426',
  },
  {
    id: 'power',
    name: 'Power',
    price: 239,
    storage: '40GB SSD Storage',
    emails: '400 Email Accounts',
    databases: '40 MySQL Databases',
    traffic: 'Unlimited Web Traffic*',
    domain: 'Free .co.za Domain (1st Year)',
    popular: false,
    orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=430',
  },
];

export const voipDevices = [
  {
    name: 'Desktop IP Phone',
    price: 910,
    type: 'Once Off Purchase or 24-Month Subscription',
    description: 'High quality business desktop IP phone with crisp HD audio and caller ID display.',
  },
  {
    name: 'Cordless IP Phone',
    price: 1520,
    type: 'Once Off Purchase or 24-Month Subscription',
    description: 'Long-range DECT cordless IP phone ideal for moving around the office or home.',
  },
];

export const whyImagine = [
  {
    id: 1,
    title: 'No Long-Term Contracts',
    description:
      "We won't tie you down with long-term contracts — pay on a month-to-month basis and stay connected as long as you want.",
    icon: 'CalendarCheck',
  },
  {
    id: 2,
    title: 'Trusted Support Since 1999',
    description:
      'Proactive support solutions that predict potential problems before they arise — keeping you online 24/7.',
    icon: 'ShieldCheck',
  },
  {
    id: 3,
    title: 'Connectivity Innovation',
    description:
      'A well-established ISP dedicated to providing exceptional connectivity, VoIP, hosting, and IT solutions.',
    icon: 'Lightbulb',
  },
  {
    id: 4,
    title: 'Multiple Fibre Networks',
    description:
      'Netstream, DNATel, Evotel, Metro Fibre Networx, Vumatel, Openserve, Blitz Fibre — and MTN coming soon.',
    icon: 'Globe2',
  },
];

export const networks = [
  'Vumatel',
  'Metro Fibre Networx',
  'Evotel',
  'DNATel',
  'Netstream',
  'Blitz Fibre',
  'Openserve',
  'MTN (Coming Soon)',
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
    tag: 'Estate Fibre',
    image:
      'https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=800&q=80',
    link: 'https://www.imagine.co.za/2018/06/20/fibre-up-your-complex-for-free-with-blitz-fibre/',
  },
  {
    id: 2,
    title: 'Imagine Benoni Child Welfare Sponsorship',
    excerpt:
      'Boksburg & Benoni Child Welfare operations received a boost after receiving dedicated Wi-Fi installation and internet sponsorship from Imagine IPS.',
    date: 'Jun 20, 2025',
    tag: 'Community Sponsorship',
    image:
      'https://images.unsplash.com/photo-1623076189461-f7706b741c04?w=800&q=80',
    link: 'https://www.imagine.co.za/2018/06/20/imagine-benoni-child-welfare-sponsorship/',
  },
  {
    id: 3,
    title: 'Imagine IPS continues to connect people for smarter living',
    excerpt:
      'Imagine IPS, a national Internet Service Provider established in 1999, expands fixed-line connectivity and voice solutions across South Africa.',
    date: 'Apr 06, 2025',
    tag: 'Company News',
    image:
      'https://images.unsplash.com/photo-1624965439943-09e0238644e2?w=800&q=80',
    link: 'https://www.imagine.co.za/2016/04/06/imagine-ips-continues-connect-people-smarter-living/',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Do I pay for Fibre installation?',
    answer:
      'Standard fibre installation is bundled or free on most Imagine FTTH packages depending on the network operator. Free-to-use routers are supplied on month-to-month contracts.',
  },
  {
    id: 2,
    question: 'Can I keep my current telephone number when switching to Imagine VoIP?',
    answer:
      'Yes! We support full Geographic Number Portability (GNP). You can port your existing landline or business telephone number to Imagine VoIP without losing contacts.',
  },
  {
    id: 3,
    question: 'Which Fibre Network Operators (FNOs) does Imagine support?',
    answer:
      'Imagine partners with leading open-access infrastructure providers including Vumatel, Metro Fibre Networx, Evotel, Netstream, DNATel, Blitz Fibre, and Openserve. MTN Fibre is coming soon.',
  },
  {
    id: 4,
    question: 'Am I tied into long-term contracts?',
    answer:
      'No. Imagine IPS operates on true month-to-month contracts. Stay connected with us for as long as you choose to.',
  },
  {
    id: 5,
    question: 'What website hosting features are included in Imagine hosting?',
    answer:
      'All web hosting packages run on 99.9% uptime local South African SSD servers with Plesk Control Panel, 1-click WordPress/CMS installer, email mailboxes, MySQL databases, and a free .co.za domain for the first year.',
  },
  {
    id: 6,
    question: 'What solutions do you offer for business connectivity?',
    answer:
      'Imagine provides Business Fibre (FTTB) starting from R989 ex VAT/month with static & dynamic IP options, SLA uptime, and Hosted PBX systems with per-second billing.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Homeowner, Johannesburg',
    location: 'Rosebank, JHB',
    quote:
      "I for one am very excited to have had Imagine's Fibre installed in my home. Thanks for the effort you put into pricing and attending to clients. Imagine doesn't only supply Internet, but happiness!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Ryan P.',
    location: 'Somerset West, CT',
    quote:
      'Support team called back within minutes. Real human technicians who know network infrastructure inside out.',
    rating: 5,
  },
  {
    id: 3,
    name: 'SME Business Owner',
    location: 'Benoni, JHB',
    quote:
      'Switched our corporate voice & fibre to Imagine IPS. We saved 35% on voice bills with per-second billing and their Hosted PBX works flawlessly.',
    rating: 5,
  },
];

export const footerLinks = {
  Company: [
    { label: 'About Imagine IPS', to: '/contact' },
    { label: 'News & Updates', to: '/news' },
    { label: 'Client Portal (AtAGlance)', to: 'https://ataglance.imagine.co.za/' },
    { label: 'Webmail Login', to: 'https://webmail.imagine.co.za/' },
  ],
  Services: [
    { label: 'Home Fibre (FTTH)', to: '/services/fibre' },
    { label: 'VoIP Voice Solutions', to: '/services/voice' },
    { label: 'Website Hosting', to: '/services/hosting' },
    { label: 'Business Fibre (FTTB)', to: '/connect/business' },
  ],
  Support: [
    { label: 'Check Coverage', to: '/coverage' },
    { label: 'Contact Helpdesk', to: '/contact' },
    { label: 'Fibre FAQs', to: '/services/fibre' },
    { label: 'Estate & Complexes', to: '/connect/estate' },
  ],
  Legal: [
    { label: 'Terms & Conditions', to: 'https://www.imagine.co.za/terms-and-conditions/' },
    { label: 'Acceptable Use Policy', to: 'https://www.imagine.co.za/acceptable-use-policy/' },
    { label: 'Privacy Policy', to: 'https://www.imagine.co.za/privacy-policy/' },
    { label: 'Fair Usage Policy (FUP)', to: 'https://www.imagine.co.za/wp-content/uploads/2016/10/FUP-Imagine-IPS.pdf' },
    { label: 'ISPA Member Details', to: 'https://ispa.org.za/tdn/' },
  ],
};
