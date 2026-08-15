import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Code2, LayoutDashboard, Cpu, Check, ArrowRight, Laptop, Smartphone,
  Search, Shield, Share2, Zap, RefreshCw, Globe, MousePointerClick,
  ShoppingCart, BookOpen, Building2, Phone, ChevronRight,
} from 'lucide-react';
import { contactDetails } from '../mock';

const WEBSITE_TYPES = [
  'Business Websites', 'Corporate Websites', 'Professional Portfolio Websites',
  'E-commerce Websites', 'Booking Websites', 'Directory Websites',
  'Membership Websites', 'School and Education Websites', 'Non-Profit Websites',
  'Property Websites', 'Service-Based Business Websites', 'Custom Web Platforms',
];

const WHY_PROFESSIONAL = [
  'Attract more customers', 'Build trust and credibility', 'Improve your online presence',
  'Generate more enquiries', 'Increase sales', 'Improve customer experience',
  'Reach customers on mobile devices', 'Stand out from competitors',
  'Support your digital marketing', 'Grow with your business',
];

const PROCESS_STEPS = [
  { step: '1', title: 'Understand Your Business', desc: 'We discuss your business, services, customers and website goals.' },
  { step: '2', title: 'Plan the Website', desc: 'We create the website structure and decide what pages and features are required.' },
  { step: '3', title: 'Design', desc: 'We create a modern design that matches your brand and provides a good customer experience.' },
  { step: '4', title: 'Development', desc: 'Our developers build the website and add the required functionality.' },
  { step: '5', title: 'Testing', desc: 'We test the website on different devices and browsers to make sure everything works correctly.' },
  { step: '6', title: 'Launch', desc: 'Once approved, we publish your website and make it available to your customers.' },
  { step: '7', title: 'Support', desc: 'We can continue supporting your website through maintenance, security updates, content changes and technical support.' },
];

const WHAT_WE_OFFER = [
  {
    icon: LayoutDashboard,
    title: 'Custom Website Design',
    desc: 'We create a website that matches your business, brand and goals. Your website is designed specifically for you rather than using a one-size-fits-all approach.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Friendly Design',
    desc: 'Your website will work properly on phones, tablets, laptops and desktop computers, giving your customers a good experience on any device.',
  },
  {
    icon: Zap,
    title: 'Fast Website Performance',
    desc: 'We build websites that load quickly and are designed to handle growing numbers of visitors.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy-to-Use Layout',
    desc: 'We keep the website simple and clear so that visitors can easily find information, contact you or take action.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimisation',
    desc: 'We structure your website to help search engines understand your business and improve your chances of being found online.',
  },
  {
    icon: Shield,
    title: 'Website Security',
    desc: 'We include important security measures to help protect your website, business information and customers.',
  },
  {
    icon: Share2,
    title: 'Social Media Integration',
    desc: 'Connect your website with platforms such as Facebook, Instagram, LinkedIn and WhatsApp to make it easier for customers to connect with your business.',
  },
  {
    icon: Cpu,
    title: 'Performance Optimisation',
    desc: "We improve the website's speed, structure and overall performance to provide a better experience for your visitors.",
  },
  {
    icon: RefreshCw,
    title: 'Website Revisions',
    desc: 'We work with you during the development process and allow agreed design changes before the website is completed.',
  },
];

export default function WebDevPage() {
  return (
    <Layout>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}
      >
        <span className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <span className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.10) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Website Design &amp; Development
          </span>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Websites Built for<br />
            <span className="text-[#E4002B]">Your Business</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Your website is more than just an online page. We design and develop <strong className="text-white">professional, modern and easy-to-use websites</strong> that help businesses attract customers, build trust and grow online.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors text-white shadow-lg shadow-red-600/20"
            >
              Get a Website Quote <ArrowRight size={15} />
            </a>
            <a
              href={`tel:${contactDetails.phone}`}
              className="border border-white/25 hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all"
            >
              <Phone size={14} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE OFFER ═════════════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#0f1720]">What We Offer</h2>
            <p className="text-xs text-gray-500 mt-1">Everything your business website needs, built the right way</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_WE_OFFER.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E4002B]/30 hover:-translate-y-1 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WEBSITES WE CAN BUILD ═════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-black text-[#0f1720] mb-4">Websites We Can Build</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">We can develop different types of websites to suit your business requirements.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WEBSITE_TYPES.map((type) => (
                <div key={type} className="flex items-center gap-2 text-xs text-gray-700 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100 hover:border-[#E4002B]/30 transition-all">
                  <Check size={12} className="text-green-500 shrink-0" />
                  {type}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0f1720] mb-4">Why Choose Professional Website Development?</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">A professional website can help your business:</p>
            <ul className="space-y-2.5">
              {WHY_PROFESSIONAL.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#E4002B]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ A WEBSITE DESIGNED AROUND YOUR BUSINESS ══════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-[#0f1720] to-[#1a2736] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black">A Website Designed Around Your Business</h2>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
            We first learn about your business, your customers and what you want your website to achieve.
            We then plan the website, design the pages, develop the required features and test everything before launch.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <p className="text-lg font-bold text-white">Our goal is simple:</p>
            <p className="text-[#E4002B] font-black text-xl mt-1">
              Build a website that looks professional, works properly and helps your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* ══ DEVELOPMENT PROCESS ═══════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#0f1720]">Our Website Development Process</h2>
            <p className="text-xs text-gray-500 mt-1">A clear, structured approach from idea to launch</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" style={{ left: '27px' }} />

            <div className="space-y-6">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={step.step} className="relative flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-[#E4002B] text-white font-extrabold flex items-center justify-center shrink-0 z-10 shadow-lg shadow-red-600/20 text-lg">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <h3 className="font-extrabold text-sm text-[#0f1720] mb-1">{step.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PACKAGES ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-black text-[#0f1720]">Development Solutions &amp; Packages</h2>
            <p className="text-xs text-gray-500 mt-1">Pricing customised to match startup goals to custom web application portals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Startup CMS', price: 'R4,999', unit: 'once-off',
                desc: 'Perfect for small companies looking for a highly optimized, responsive WordPress landing site.',
                perks: ['Up to 5 Pages', 'Responsive Design', 'Basic SEO Setup', 'Free SSL & Security', 'Contact Form', 'Social Media Links'],
                popular: false,
              },
              {
                name: 'Business Pro', price: 'R9,999', unit: 'once-off',
                desc: 'Custom structures built for high visitor capacities, WooCommerce integrations, and advanced forms.',
                perks: ['Up to 15 Pages', 'WooCommerce Ready', 'Advanced SEO Suite', '1 Month Free Support', 'Custom Forms', 'Performance Optimisation'],
                popular: true,
              },
              {
                name: 'Custom Application', price: 'POA', unit: '',
                desc: 'Unique server-rendered layouts, dashboard systems, and API-driven web portals configured to your needs.',
                perks: ['React / Node / Custom Stack', 'API Integrations', 'Dedicated Security Hardening', 'Enterprise-grade SLA', 'Custom Features', 'Ongoing Support'],
                popular: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                  pkg.popular
                    ? 'ring-2 ring-[#E4002B] shadow-2xl scale-[1.02]'
                    : 'bg-white border border-gray-200 shadow-sm hover:border-[#E4002B]/40'
                }`}
                style={pkg.popular ? { background: 'linear-gradient(160deg, #0f1720 0%, #1a2736 100%)' } : {}}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest bg-[#E4002B]">
                    ★ Most Popular
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`text-xs font-black uppercase tracking-widest mb-3 ${pkg.popular ? 'text-red-400' : 'text-gray-400'}`}>{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-3xl font-extrabold ${pkg.popular ? 'text-white' : 'text-[#0f1720]'}`}>{pkg.price}</span>
                    {pkg.unit && <span className={`text-xs ${pkg.popular ? 'text-gray-300' : 'text-gray-400'}`}> {pkg.unit}</span>}
                  </div>
                  <p className={`text-xs mt-2 mb-4 leading-relaxed ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>{pkg.desc}</p>
                  <div className={`h-px mb-4 ${pkg.popular ? 'bg-white/10' : 'bg-gray-100'}`} />
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {pkg.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs">
                        <Check size={13} className="text-green-400 shrink-0" />
                        <span className={pkg.popular ? 'text-gray-200' : 'text-gray-600'}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactDetails.salesEmail}`}
                    className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
                    style={pkg.popular ? { background: '#E4002B', color: '#fff' } : { background: '#0f1720', color: '#fff' }}
                  >
                    Get a Quote <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BUILD YOUR WEBSITE CTA ════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-black text-[#0f1720]">Build Your Website With Us</h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you are starting a new business or upgrading an existing website, we can help you create a professional online presence.
            Tell us about your business and what you want your website to achieve. We will help you turn your idea into a professional digital solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-8 py-4 rounded-xl transition-colors shadow-lg shadow-red-600/20"
            >
              Tell Us About Your Business <ArrowRight size={15} />
            </a>
            <a
              href={`tel:${contactDetails.phone}`}
              className="inline-flex items-center gap-2 border border-[#0f1720] text-[#0f1720] hover:bg-[#0f1720] hover:text-white font-bold text-sm px-8 py-4 rounded-xl transition-all"
            >
              <Phone size={14} /> {contactDetails.displayPhone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
