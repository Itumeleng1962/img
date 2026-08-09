import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import {
  Globe,
  Server,
  Mail,
  Shield,
  Send,
  Lock,
  ArrowRight,
  Search,
  Check,
  ChevronRight,
  AlertTriangle,
  FileCheck,
  RotateCw,
  Zap,
  Users,
  ShieldAlert,
  Award,
  BookOpen
} from 'lucide-react';

/* ─── Product catalog categories ─────────────────────────────────────────── */
const PRODUCT_CATALOG = [
  {
    id: 'domains',
    title: 'Domains',
    icon: Globe,
    desc: 'Register, transfer & secure your unique online identity.',
    items: [
      { name: 'Domain Name Search', desc: 'Find and register the perfect .co.za, .com, or net domain.', link: '/services/hosting/order' },
      { name: 'Domain Transfer', desc: 'Easily move your domain to Imagine IPS for consolidated billing.', link: '/services/hosting/order?tab=transfer' },
      { name: 'Personal Domain', desc: 'Secure custom domains for personal blogging, portfolios, and cvs.', link: '/services/hosting/order' }
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting Solutions',
    icon: Server,
    desc: 'SSD Powered cloud hosting solutions from shared setups to dedicated metal.',
    items: [
      { name: 'Shared Hosting', desc: 'SSD-backed web hosting with Plesk Control Panel.', link: '/services/hosting' },
      { name: 'Hosting for WordPress', desc: 'Optimized WordPress environments with 1-click installer and auto-updates.', link: '/services/hosting' },
      { name: 'Reseller Hosting', desc: 'White-labeled hosting packages to start your own hosting company.', link: '/contact' },
      { name: 'VPS Hosting', desc: 'Virtual Private Servers with full root access & guaranteed CPU/RAM allocations.', link: '/contact' },
      { name: 'Dedicated Servers', desc: 'Single-tenant bare metal servers for heavy enterprise workloads.', link: '/contact' },
      { name: 'Private Email Hosting', desc: 'Dedicated mail server packages for corporate domain mail.', link: '/services/hosting/order' },
      { name: 'Migrate to Imagine', desc: 'Free migration service for websites, emails, and database assets.', link: '/contact' }
    ]
  },
  {
    id: 'email',
    title: 'Email Hosting',
    icon: Mail,
    desc: 'Professional corporate email solutions keeping your team in touch.',
    items: [
      { name: 'Business Email', desc: 'Custom @yourcompany mailboxes with robust IMAP/POP3 access.', link: '/services/hosting/order' },
      { name: 'Anti Spam Protection', desc: 'Enterprise-grade spam filters shielding your inbox from phishing.', link: '/services/hosting/order' },
      { name: 'Login to Webmail', desc: 'Access your mailbox from any web browser securely.', link: 'https://webmail.imagine.co.za/' }
    ]
  },
  {
    id: 'security',
    title: 'Security & Backup',
    icon: Shield,
    desc: 'Secure your corporate web assets, protect consumer privacy, and recover from threats.',
    items: [
      { name: 'Domain Privacy', desc: 'Mask your WHOIS ownership data to prevent unsolicited marketing.', link: '/contact' },
      { name: 'Website Security', desc: 'Real-time firewall, malware scanning, and proactive patching.', link: '/contact' },
      { name: 'Fix Hacked Website', desc: 'Immediate incident response, virus extraction, and cleanup.', link: '/contact' },
      { name: 'Cyber Insurance advice', desc: 'Imagine assists you in advising & getting covered for cyber incidents.', link: '/contact' },
      { name: '2FA Authentication', desc: 'Multi-factor authentication setups for Plesk and client portals.', link: '/contact' },
      { name: 'Anti-Spam Protection', desc: 'Advanced email quarantine gates for incoming & outgoing mails.', link: '/contact' }
    ]
  },
  {
    id: 'transfer',
    title: 'Transfer to Us (Try Me)',
    icon: RotateCw,
    desc: 'Consolidate your digital profile. Let our experts handle the heavy lifting.',
    items: [
      { name: 'Domain Transfer', desc: 'Move your .co.za or international domains with zero downtime.', link: '/services/hosting/order?tab=transfer' },
      { name: 'Migrate Hosting', desc: 'Free migration of databases, CMS files, and all mailboxes.', link: '/contact' }
    ]
  },
  {
    id: 'ssl',
    title: 'SSL Certificates',
    icon: Lock,
    desc: 'Encrypt client-server communication and display the green lock badge.',
    items: [
      { name: 'Organization Validation (OV)', desc: 'Vets your organization credibility for consumer protection.', link: '/contact' },
      { name: 'Domain Validation (DV)', desc: 'Automated basic security certificate ideal for blogs and landing pages.', link: '/contact' },
      { name: 'Extended Validation (EV)', desc: 'Premium verification with highest level of trust display.', link: '/contact' },
      { name: 'Single Domain SSL', desc: 'Secure one primary domain (www and non-www).', link: '/contact' },
      { name: 'Wildcard SSL', desc: 'Secure main domain and unlimited subdomains (*.domain.co.za).', link: '/contact' },
      { name: 'Multi-Domain SSL', desc: 'Secure multiple distinct domains on one certificate.', link: '/contact' }
    ]
  },
  {
    id: 'resellers',
    title: 'Resellers & Enterprise',
    icon: Users,
    desc: 'High-volume custom packages tailored for design agencies and system integrators.',
    items: [
      { name: 'SSL Certificates', desc: 'Bulk SSL provisioning with simple API integrations.', link: '/contact' },
      { name: 'Reseller Hosting', desc: 'Manage client accounts with custom Plesk resellers quotas.', link: '/contact' },
      { name: 'Enterprise Hosting', desc: 'High-resource limits, dedicated database pools, and SLAs.', link: '/contact' },
      { name: 'LiteSpeed Hosting', desc: 'Turbo-charge server loading speeds with LiteSpeed web servers.', link: '/contact' }
    ]
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCatalog = activeCategory === 'all'
    ? PRODUCT_CATALOG
    : PRODUCT_CATALOG.filter(cat => cat.id === activeCategory);

  return (
    <Layout>
      <PageHero
        eyebrow="Products & Services"
        title="Everything you need to"
        highlight="run online."
        description="Explore our robust catalog of domain names, SSD hosting architectures, email tools, cyber security suites, and reseller options."
        image="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=1600&q=80"
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* ── PRODUCT NAV TABS ─────────────────────────────────────────────── */}
      <section className="bg-gray-50 border-b border-gray-200 py-6 px-6 sticky top-[72px] z-40">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              activeCategory === 'all'
                ? 'bg-[#E4002B] text-white border-[#E4002B]'
                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
            }`}
          >
            All Products
          </button>
          {PRODUCT_CATALOG.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#E4002B] text-white border-[#E4002B]'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                <Icon size={12} />
                {cat.title.split(' (')[0]}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── PRODUCTS DIRECTORY ───────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {filteredCatalog.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E4002B] flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#0d1f3c]">{cat.title}</h2>
                    <p className="text-xs text-gray-400 mt-0.5">{cat.desc}</p>
                  </div>
                </div>

                {/* Sub items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-base text-gray-800 group-hover:text-orange-500 transition-colors">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-gray-300 group-hover:text-orange-400 transition-colors">
                          Imagine IPS
                        </span>
                        {item.link.startsWith('http') ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#E4002B] group-hover:gap-1.5 transition-all"
                          >
                            Explore <ChevronRight size={13} />
                          </a>
                        ) : (
                          <Link
                            to={item.link}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#E4002B] group-hover:gap-1.5 transition-all"
                          >
                            Get Started <ChevronRight size={13} />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ── CYBER SECURITY SUITE NOTICE ──────────────────────────────────── */}
      <section className="bg-gray-50 py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0d1f3c] text-white p-8 md:p-10 relative overflow-hidden shadow-xl">
          <span className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.15) 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />

          <div className="relative flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-3">
              <span className="bg-[#E4002B] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Imagine Advice
              </span>
              <h3 className="text-xl md:text-2xl font-black">
                Need Cyber Insurance & Threat Advice?
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed max-w-xl">
                Cyberattacks are on the rise in South Africa. Our tech consultants assist companies in reviewing vulnerability profiles, setting up 2FA protection, securing domains, and advising on cyber liability coverage options.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 bg-white text-[#0d1f3c] hover:bg-orange-50 font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-1.5 transition-colors shadow"
            >
              Get Free Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
