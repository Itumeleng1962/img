import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { hostingPackages, contactDetails } from '../mock';
import {
  Check,
  Server,
  Globe,
  Cpu,
  Shield,
  Zap,
  Clock,
  HardDrive,
  Mail,
  Database,
  ChevronRight,
  Star,
  ArrowRight,
  Phone,
  Smartphone,
  MousePointerClick,
  MapPin,
  Award,
  RefreshCw,
  Headphones,
  CheckCircle,
} from 'lucide-react';

/* ─── Billing cycle ──────────────────────────────────────────────────────── */
const CYCLES = [
  { id: 'monthly', label: 'Monthly', factor: 1, badge: null },
  { id: 'annual',  label: 'Annual',  factor: 10, badge: 'Save 2 months' },
  { id: 'biennial',label: '2-Year',  factor: 18, badge: 'Best Value' },
];

/* ─── Why clients love section ───────────────────────────────────────────── */
const WHY_FEATURES = [
  {
    icon: MousePointerClick,
    title: 'One-Click Install',
    body: 'Plesk offers one-click install for many of the most popular CMS systems such as WordPress, Joomla and Drupal.',
  },
  {
    icon: Cpu,
    title: 'Simple Control',
    body: 'The Plesk Control Panel allows for easy-to-use, intuitive setup, and simple management of your site for your convenience.',
  },
  {
    icon: Smartphone,
    title: 'Anywhere Management',
    body: 'With an intuitive mobile management app, you can manage your site or check on your stats from almost anywhere.',
  },
  {
    icon: Zap,
    title: 'Superfast Servers',
    body: 'SSD hosting offers superior speeds for your site, and fast site speed can help improve your Google ranking.',
  },
  {
    icon: MapPin,
    title: 'Local',
    body: "Imagine is a South African company & our servers are hosted within SA. We've been hosting sites & servers since 1999.",
  },
  {
    icon: Headphones,
    title: 'Direct Specialist Access',
    body: 'At Imagine you have direct access to the technicians who manage and maintain the hosting environment via telephone, help-desk email or live chat.',
  },
];

/* ─── Why Choose section ─────────────────────────────────────────────────── */
const WHY_CHOOSE = [
  {
    icon: Award,
    title: 'Over 20 Years in the Industry',
    body: 'We have been in business since 1999 and have become a trusted internet service provider.',
  },
  {
    icon: Shield,
    title: 'Reliability & Reduced Downtime',
    body: 'We offer you a 99.9% uptime guarantee with all web hosting.',
  },
  {
    icon: Headphones,
    title: 'Trusted After-Sales Support',
    body: 'Our team is here to offer help and ensure that your website can run effortlessly.',
  },
  {
    icon: Server,
    title: 'Local Servers',
    body: 'All our web hosting servers are located in South Africa, enabling the fastest possible speeds for South African websites.',
  },
  {
    icon: RefreshCw,
    title: 'Round the Clock Monitoring',
    body: 'We monitor our web hosting environment 24/7.',
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HostingPage() {
  const [cycle, setCycle] = useState('monthly');
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [sent, setSent] = useState(false);

  const priceFor = (base) => {
    const c = CYCLES.find((x) => x.id === cycle);
    if (cycle === 'monthly') return `R${base}`;
    return `R${base * c.factor}`;
  };
  const termLabel = cycle === 'monthly' ? 'p/m' : cycle === 'annual' ? '/yr' : '/2yr';

  const handleForm = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>

      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 55%, #0d1f3c 100%)' }}
      >
        {/* decorative blobs */}
        <span className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(244,126,32,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <span className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(244,126,32,0.10) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-orange-500/40"
              style={{ background: 'rgba(244,126,32,0.15)', color: '#f47e20' }}>
              <Server size={12} /> Easy, Powerful Website Hosting
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Fast, Local & Reliable<br />
              <span style={{ color: '#f47e20' }}>Web Hosting</span>
            </h1>

            <p className="text-blue-200 text-lg leading-relaxed mb-6 max-w-xl">
              Imagine IPS offers super fast, easy to manage website hosting solutions to suit
              your needs and budget — including migration assistance, your own <strong className="text-white">.co.za domain</strong>,
              emails, database functionality and more.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                '99.9% Uptime SSD Hosting',
                'From only R69/month',
                'Month-to-Month',
                'SA Local Servers',
                'Personal Support',
              ].map((t) => (
                <span key={t}
                  className="flex items-center gap-1.5 bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Check size={11} className="text-green-400" /> {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#plans"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
                style={{ background: '#f47e20' }}>
                View Plans <ChevronRight size={15} />
              </a>
              <a href={`mailto:${contactDetails.salesEmail}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/25 hover:bg-white/10 transition-all">
                <Phone size={15} /> Chat To Us
              </a>
            </div>
          </div>

          {/* Server rack visual */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-3xl border border-white/10 p-5 space-y-2.5 overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}>
                {/* fake server rows */}
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white/5 rounded-lg px-3 py-2 border border-white/5">
                    <span className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                      style={{ background: i % 3 === 0 ? '#f47e20' : '#4ade80', animationDelay: `${i * 0.25}s` }} />
                    <div className="flex-1 space-y-1">
                      <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
                    </div>
                    <span className="text-[10px] font-mono text-blue-300">{9 + i * 3}ms</span>
                  </div>
                ))}
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-6 blur-xl rounded-full"
                style={{ background: '#f47e20', opacity: 0.3 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          BILLING TOGGLE
      ══════════════════════════════════════════════════════════════════ */}
      <div id="plans" className="bg-gray-50 pt-14 pb-0 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">Choose billing period</p>
        <div className="inline-flex bg-white rounded-xl shadow border border-gray-200 p-1 gap-1">
          {CYCLES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCycle(c.id)}
              className={`relative px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                cycle === c.id ? 'text-white shadow-md' : 'text-gray-400 hover:text-gray-700'
              }`}
              style={cycle === c.id ? { background: '#0d1f3c' } : {}}
            >
              {c.label}
              {c.badge && (
                <span className="absolute -top-2.5 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                  style={{ background: '#f47e20' }}>
                  {c.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          PRICING CARDS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 px-6 lg:px-10 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hostingPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular
                  ? 'ring-2 shadow-2xl scale-[1.02]'
                  : 'bg-white shadow border border-gray-200 hover:border-orange-300'
              }`}
              style={pkg.popular ? {
                background: 'linear-gradient(160deg, #0d1f3c 0%, #1a3a6b 100%)',
                '--tw-ring-color': '#f47e20',
              } : {}}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest"
                  style={{ background: '#f47e20' }}>
                  ★ Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Plan name */}
                <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${pkg.popular ? 'text-orange-300' : 'text-gray-400'}`}>
                  {pkg.name}
                </div>

                {/* Price */}
                <div className="my-4">
                  <div className="flex items-baseline gap-0.5">
                    <span className={`text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      {priceFor(pkg.price)}
                    </span>
                    <span className={`text-sm font-semibold ml-1 ${pkg.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                      {termLabel}
                    </span>
                  </div>
                  {cycle !== 'monthly' && (
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-blue-300' : 'text-gray-400'}`}>
                      R{pkg.price}p/m billed {cycle === 'annual' ? 'annually' : 'every 2 years'}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div className={`h-px mb-5 ${pkg.popular ? 'bg-white/10' : 'bg-gray-100'}`} />

                {/* Feature list */}
                <ul className="space-y-2.5 flex-1 mb-6 text-sm">
                  {[pkg.storage, pkg.emails, pkg.databases, pkg.traffic, pkg.domain].map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <Check size={14} className="mt-0.5 shrink-0 text-green-400" />
                      <span className={pkg.popular ? 'text-blue-100' : 'text-gray-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={`/services/hosting/order?plan=${pkg.id}`}
                  className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                  style={pkg.popular
                    ? { background: '#f47e20', color: '#fff' }
                    : { background: '#0d1f3c', color: '#fff' }}
                >
                  ORDER NOW <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Legal note */}
        <div className="max-w-6xl mx-auto mt-6 text-xs text-gray-400 space-y-1 px-1">
          <p>All prices include VAT.</p>
          <p>*Unlimited usage is subject to reasonable and responsible usage. Imagine reserves the right to reduce usage in the case of extensive usage which shall be entirely at Imagine's discretion.</p>
          <p>**Offer must be taken up when the hosting contract is started with Imagine.</p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MIGRATION BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 lg:px-10 bg-white border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: '#0d1f3c' }}>
              Thinking of transferring to Imagine?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              If you're thinking about transferring a domain, a website, email or all three to Imagine we can help you.
              Our technical team understand the intricacies of migrations and would be happy to help you migrate to us
              with the least amount of effort, interruption and risk.
            </p>
          </div>
          <a
            href="#contact-form"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
            style={{ background: '#f47e20' }}
          >
            Contact Us <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WHY CLIENTS LOVE IMAGINE HOSTING
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-center mb-2" style={{ color: '#0d1f3c' }}>
            Why Clients Love Imagine Web Hosting
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            Everything you need, built in as standard — no hidden extras
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3a6b)' }}>
                  <Icon size={20} style={{ color: '#f47e20' }} />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: '#0d1f3c' }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
              style={{ background: '#0d1f3c' }}>
              Talk to a Hosting Specialist <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          WHY CHOOSE IMAGINE
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-center mb-2" style={{ color: '#0d1f3c' }}>
            Why Choose Imagine Web Hosting?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-12">
            Trusted by South African businesses since 1999
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                <div className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3a6b)' }}>
                  <Icon size={17} style={{ color: '#f47e20' }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#0d1f3c' }}>{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact-form"
        className="py-16 px-6 lg:px-10"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 100%)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left copy */}
          <div className="text-white">
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
              Let's chat.
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              If you still haven't found the exact thing you're looking for or if you're not quite sure
              what you are looking for we would be happy to help. Fill out the form and we'll get right back to you.
            </p>

            <div className="space-y-4 text-sm text-blue-100">
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: '#f47e20' }} />
                <a href={`tel:${contactDetails.phone}`} className="hover:text-white transition-colors">
                  {contactDetails.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: '#f47e20' }} />
                <a href={`mailto:${contactDetails.salesEmail}`} className="hover:text-white transition-colors">
                  {contactDetails.salesEmail}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: '#f47e20' }} />
                <span>{contactDetails.address}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {sent ? (
              <div className="text-center py-8">
                <CheckCircle size={48} className="mx-auto mb-4" style={{ color: '#f47e20' }} />
                <h3 className="text-xl font-extrabold mb-2" style={{ color: '#0d1f3c' }}>Thank you!</h3>
                <p className="text-gray-500 text-sm">We've received your enquiry and will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-extrabold mb-5" style={{ color: '#0d1f3c' }}>
                  Imagine Website Hosting Services
                </h3>
                <form onSubmit={handleForm} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 focus:border-orange-400 transition-all"
                        style={{ '--tw-ring-color': '#f47e20' }}
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 transition-all"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none focus:ring-2 transition-all"
                      placeholder="+27 11 000 0000"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                    style={{ background: '#f47e20' }}
                  >
                    Send Message <ArrowRight size={15} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

    </Layout>
  );
}
