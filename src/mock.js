export const providerLogos = {
  frogfoot: 'https://www.frogfoot.com/wp-[#] /https://upload.wikimedia.org/wikipedia/commons/4/47/Frogfoot_Logo.png',
  vumatel: 'https://vumatel.co.za/wp-content/uploads/2021/04/Vuma_Logo_Primary_RGB.png',
};

export const fibreProviders = [
  {
    id: 'frogfoot',
    name: 'Frogfoot',
    logoImg: '/logos/frogfoot.png',
    logoSvg: (
      <svg viewBox="0 0 200 60" className="w-full h-full object-contain">
        {/* Frogfoot Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          {/* Frog Footprint Icon */}
          <circle cx="15" cy="12" r="5" fill="#00A859" />
          <circle cx="28" cy="8" r="5" fill="#00A859" />
          <circle cx="41" cy="12" r="5" fill="#00A859" />
          <path d="M 16,22 C 16,17 40,17 40,22 C 40,35 16,35 16,22 Z" fill="#00A859" />
          {/* Brand Text */}
          <text x="52" y="28" fill="#111827" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.5">frogfoot</text>
          <text x="52" y="38" fill="#00A859" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="700" fontSize="9" letterSpacing="1">NETWORKS</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 1000Mbps',
    description: 'Super fast and reliable FTTH solutions on Frogfoot. All Imagine Frogfoot accounts are 100% Uncapped & Unshaped.',
    installation: 'Free installation & setup to the value of R2500*',
    activation: 'R499 activation fee (incl. VAT)',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required. Fee recovery applies if cancelled within 12 months.',
    cabling: 'Standard setup includes cabling up to 30m. Additional cabling quoted by Frogfoot directly.',
    coverageAreas: ['Blouberg (CPT)', 'Burgundy Estate', 'Century City', 'Constantia', 'Dainfern', 'De Zalze', 'Dunkley House', 'Broadacres', 'Hawaan Forest', 'Helderberg', 'Jonkershoek', 'Milnerton', 'Parklands', 'Parkview', 'Pretoria East', 'Sunningdale', 'Tableview', 'Tokai'],
    telephonyInfo: 'Save up to 40% in call costs with Imagine VoIP over your Frogfoot line. No Telkom line needed, free number porting available.',
    packages: [
      { speed: '60/60 Mbps', price: 780, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '120/120 Mbps', price: 950, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '240/240 Mbps', price: 1120, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '400/400 Mbps', price: 1320, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '1000/1000 Mbps', price: 1725, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'vumatel',
    name: 'Vumatel (Vuma)',
    logoImg: '/logos/vumatel.png',
    logoSvg: (
      <svg viewBox="0 0 200 60" className="w-full h-full object-contain">
        {/* Vumatel Authentic Logo Vector */}
        <g transform="translate(10, 12)">
          <text x="5" y="32" fill="#E6007E" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="32" letterSpacing="-1">vuma</text>
          <circle cx="108" cy="14" r="5" fill="#E6007E" />
          <text x="118" y="32" fill="#374151" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="700" fontSize="16">tel</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 1000Mbps',
    description: 'Leading South African open access fibre network with symmetrical & asymmetrical packages.',
    installation: 'Free installation covered initially by Imagine IPS (Value R1,725)*',
    activation: 'R499 activation fee (Value R1,010 covered by Imagine)',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required. Installation (R1,725) & activation (R1,010) fees recovered if cancelled within 12 months.',
    cabling: 'Standard underground/aerial fiber drop-in up to termination box included.',
    coverageAreas: ['Johannesburg Metro', 'Cape Town Suburbs', 'Durban North & South', 'Pretoria', 'Gqeberha', 'Polokwane'],
    telephonyInfo: 'Pair your Vuma line with Imagine Hosted PBX or Home VoIP starting from R49/pm with per-second billing.',
    packages: [
      { speed: '30/30 Mbps', price: 485, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50/25 Mbps', price: 685, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50/50 Mbps', price: 795, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100/50 Mbps', price: 875, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100/100 Mbps', price: 985, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '200/200 Mbps', price: 1135, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '500/200 Mbps', price: 1275, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '1000/250 Mbps', price: 1595, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '1000/500 Mbps', price: 2375, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'metrofibre',
    name: 'MetroFibre (MFN)',
    logoImg: '/logos/metrofibre.png',
    logoSvg: (
      <svg viewBox="0 0 220 60" className="w-full h-full object-contain">
        {/* MetroFibre Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          {/* Hexagon M icon */}
          <polygon points="20,5 35,13 35,31 20,39 5,31 5,13" fill="#00529B" />
          <path d="M 10,25 L 20,12 L 30,25 L 20,17 Z" fill="#ffffff" />
          <text x="42" y="24" fill="#00529B" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="19" letterSpacing="-0.5">METROFIBRE</text>
          <text x="42" y="36" fill="#00A0E3" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="700" fontSize="10" letterSpacing="1.5">NETWORX</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 1000Mbps',
    description: 'High performance MetroFibre Networx connectivity for seamless video calling, gaming and 4K streaming.',
    installation: 'Free installation & setup option available*',
    activation: 'R499 activation fee',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard CPE installation included.',
    coverageAreas: ['Gauteng Suburbs', 'Tshwane', 'KwaZulu-Natal Coast', 'Western Cape Central'],
    telephonyInfo: 'Add an Imagine Crystal-Clear VoIP line with per-second billing and zero landline rental fees.',
    packages: [
      { speed: '25/25 Mbps', price: 535, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '45/45 Mbps', price: 719, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '75/75 Mbps', price: 827, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '150/150 Mbps', price: 895, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '250/250 Mbps', price: 965, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '500/500 Mbps', price: 1395, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '1000/200 Mbps', price: 1455, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'evotel',
    name: 'Evotel',
    logoSvg: (
      <svg viewBox="0 0 200 60" className="w-full h-full object-contain">
        {/* Evotel Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          <path d="M 5,20 C 5,8 25,8 25,20 C 25,32 5,32 5,20 Z" fill="#F37023" />
          <path d="M 12,20 L 18,14 L 18,26 Z" fill="#ffffff" />
          <text x="32" y="27" fill="#1F2937" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.5">evo</text>
          <text x="73" y="27" fill="#F37023" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="26" letterSpacing="-0.5">tel</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 850Mbps',
    description: 'Fast, reliable FTTH fibre solutions powered by Evotel network with zero fair usage caps.',
    installation: 'Free installation and setup to the value of R2500*',
    activation: 'R499 activation fee',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard drop cabling included up to 30m.',
    coverageAreas: ['Regional Towns & Estates', 'Mpumalanga', 'North West', 'Gauteng Environs'],
    telephonyInfo: 'Full Geographic Number Portability available. Keep your landline number when switching to Imagine VoIP.',
    packages: [
      { speed: '10/2 Mbps', price: 625, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '30/30 Mbps', price: 755, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '75/75 Mbps', price: 925, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '125/125 Mbps', price: 1085, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '300/300 Mbps', price: 1155, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '850/850 Mbps', price: 1465, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'ttconnect',
    name: 'TT Connect',
    logoSvg: (
      <svg viewBox="0 0 220 60" className="w-full h-full object-contain">
        {/* TT Connect Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          <circle cx="18" cy="20" r="14" fill="none" stroke="#0097A7" strokeWidth="4" />
          <circle cx="28" cy="20" r="8" fill="#0097A7" />
          <text x="48" y="27" fill="#00838F" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="22" letterSpacing="0">TT CONNECT</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 850Mbps',
    description: 'Ultra-fast month-to-month FTTH connectivity across TT Connect infrastructure.',
    installation: 'Free installation & setup to the value of R2700*',
    activation: 'R499 activation fee',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard trenching/drop cable included.',
    coverageAreas: ['East Rand', 'Ekurhuleni Metro', 'Brakpan', 'Benoni', 'Springs'],
    telephonyInfo: 'Connect your business or home with affordable VoIP calls over TT Connect infrastructure.',
    packages: [
      { speed: '30 Mbps', price: 775, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50 Mbps', price: 985, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100 Mbps', price: 1095, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '200 Mbps', price: 1325, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '400 Mbps', price: 1635, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '525 Mbps', price: 1855, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '850 Mbps', price: 2055, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'netstream',
    name: 'Netstream',
    logoImg: '/logos/netstream.png',
    logoSvg: (
      <svg viewBox="0 0 200 60" className="w-full h-full object-contain">
        {/* Netstream Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          <path d="M 5,25 Q 15,5 25,25 T 45,25" fill="none" stroke="#673AB7" strokeWidth="5" strokeLinecap="round" />
          <text x="50" y="27" fill="#4A148C" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="22">Netstream</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 100Mbps',
    description: 'Reliable high-speed fibre broadband on Netstream open access network.',
    installation: 'Free installation and setup to the value of R2500*',
    activation: 'R499 activation fee (incl. VAT)',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard fiber box entry setup.',
    coverageAreas: ['Johannesburg South', 'Alberton', 'Meyerton', 'Vanderbijlpark'],
    telephonyInfo: 'Pair your Netstream broadband with high-clarity Imagine VoIP phone lines.',
    packages: [
      { speed: '10/10 Mbps', price: 685, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '20/20 Mbps', price: 880, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50/50 Mbps', price: 1130, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100/100 Mbps', price: 1325, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'dna',
    name: 'DNATel',
    logoSvg: (
      <svg viewBox="0 0 200 60" className="w-full h-full object-contain">
        {/* DNATel Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          <path d="M 10,8 C 25,20 5,25 20,35" stroke="#E53935" strokeWidth="4" fill="none" />
          <path d="M 20,8 C 5,20 25,25 10,35" stroke="#1E88E5" strokeWidth="4" fill="none" />
          <text x="32" y="27" fill="#111827" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="24">dna</text>
          <text x="75" y="27" fill="#E53935" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="24">tel</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 500Mbps',
    description: 'Stable FTTH broadband via DNATel network with speeds tailored for all home requirements.',
    installation: 'Installation & setup R499*',
    activation: 'R499 activation fee',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard fibre optical network terminal installation.',
    coverageAreas: ['Gauteng Gated Estates', 'Pretoria East', 'Midrand Complexes'],
    telephonyInfo: 'Seamlessly port your telephone number to Imagine VoIP with zero downtime.',
    packages: [
      { speed: '10 Mbps', price: 625, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '30 Mbps', price: 655, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50 Mbps', price: 795, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100 Mbps', price: 925, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '200 Mbps', price: 995, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '500 Mbps', price: 1255, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
  {
    id: 'clear-access',
    name: 'Clear Access',
    logoSvg: (
      <svg viewBox="0 0 220 60" className="w-full h-full object-contain">
        {/* Clear Access Authentic Logo Vector */}
        <g transform="translate(10, 10)">
          <path d="M 5,28 A 16,16 0 0,1 27,10" stroke="#00A651" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M 12,32 A 20,20 0 0,1 34,14" stroke="#0054A6" strokeWidth="4" fill="none" strokeLinecap="round" />
          <text x="42" y="27" fill="#0054A6" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="19">CLEAR</text>
          <text x="110" y="27" fill="#00A651" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontSize="19">ACCESS</text>
        </g>
      </svg>
    ),
    speedLimit: 'Up to 500Mbps',
    description: 'High-speed uncapped fibre connectivity across Clear Access residential network.',
    installation: 'Free installation and setup to the value of R2500*',
    activation: 'R499 activation fee',
    router: 'Free to use Wi-Fi Router included',
    cancellation: 'One calendar month notice required.',
    cabling: 'Standard fiber box entry setup up to 30m.',
    coverageAreas: ['Gauteng North', 'Centurion Estates', 'Midrand Gated Communities'],
    telephonyInfo: 'Upgrade your communication with Imagine VoIP phone solutions.',
    packages: [
      { speed: '8 Mbps', price: 325, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '25 Mbps', price: 785, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '50 Mbps', price: 995, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '100 Mbps', price: 1145, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '200 Mbps', price: 1395, term: 'Month to Month', type: 'Uncapped & Unshaped' },
      { speed: '500 Mbps', price: 1985, term: 'Month to Month', type: 'Uncapped & Unshaped' },
    ],
  },
];

export const navLinks = [
  {
    label: 'Fibre',
    to: '/services/fibre',
    submenu: [
      { label: 'All Fibre Packages', to: '/services/fibre' },
      { label: 'Frogfoot Fibre', to: '/services/fibre#frogfoot' },
      { label: 'Vumatel Fibre', to: '/services/fibre#vumatel' },
      { label: 'MetroFibre', to: '/services/fibre#metrofibre' },
      { label: 'Evotel Fibre', to: '/services/fibre#evotel' },
      { label: 'TT Connect', to: '/services/fibre#ttconnect' },
      { label: 'Netstream Fibre', to: '/services/fibre#netstream' },
      { label: 'DNATel Fibre', to: '/services/fibre#dna' },
      { label: 'Clear Access', to: '/services/fibre#clear-access' },
    ],
  },
  {
    label: 'Web Dev',
    to: '/services/webdev',
  },
  {
    label: 'Domains',
    to: '/services/domains',
    badge: 'NEW',
  },
  {
    label: 'Hosting',
    to: '/services/hosting',
    submenu: [
      { label: 'Shared Hosting', to: '/services/hosting' },
      { label: 'Hosting for WordPress', to: '/services/wordpress' },
      { label: 'VPS Hosting', to: '/services/hosting' },
      { label: 'Enterprise Hosting', to: '/services/resellers' },
      { label: 'LiteSpeed Hosting', to: '/services/resellers' },
      { label: 'Dedicated Servers', to: '/services/hosting' },
      { label: 'Virtual Machines', to: '/services/hosting' },
      { label: 'Migrate to Imagine', to: '/services/transfer' },
    ],
  },
  {
    label: 'Email',
    to: '/services/email',
    submenu: [
      { label: 'Business Email', to: '/services/email' },
      { label: 'Managed Email Hosting', to: '/services/email' },
      { label: 'Personal Email Hosting', to: '/services/email' },
      { label: 'Bulk SMTP Services', to: '/services/email' },
      { label: 'Anti Spam Protection', to: '/services/security' },
      { label: 'Login to Webmail', to: 'https://webmail.imagine.co.za/' },
    ],
  },
  {
    label: 'Security',
    to: '/services/security',
    badge: 'NEW',
  },

  {
    label: 'Support',
    to: '/services/support',
    submenu: [
      { label: 'Open Support Ticket', to: 'https://ataglance.imagine.co.za/login' },
    ],
  },
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
    { label: 'Client Portal', to: 'https://ataglance.imagine.co.za/' },
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
