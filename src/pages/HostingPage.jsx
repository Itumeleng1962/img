import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { contactDetails } from '../mock';
import {
  Check, Server, Globe, Cpu, Shield, Zap, Clock, HardDrive, Mail, Database,
  ChevronRight, Star, ArrowRight, Phone, Smartphone, Award, RefreshCw,
  Headphones, CheckCircle, Cloud, Lock, Users, Gift, Layers, BarChart3,
  MonitorSmartphone, Inbox, Settings, FileText, MapPin, ChevronDown, ChevronUp,
  Sparkles,
} from 'lucide-react';

/* ─── Shared Hosting Plans ─────────────────────────────────────────────── */
const SHARED_PLANS = [
  {
    name: 'STARTER', price: 'R99', period: '/month', tag: null,
    desc: 'A simple hosting package for individuals, startups and small businesses.',
    features: [
      '5 GB NVMe storage', '10 GB monthly data transfer', '1 website',
      '2 email accounts', '2 databases', '5 subdomains', '1 additional domain',
      'Free SSL certificate', 'Website security', 'Daily backups',
      'DNS management', 'File Manager', 'FTP access', '24/7 technical support',
    ],
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
  {
    name: 'BUSINESS', price: 'R199', period: '/month', tag: 'Most Popular', popular: true,
    desc: 'A powerful hosting package for growing businesses and professional websites.',
    features: [
      '10 GB NVMe storage', '20 GB monthly data transfer', '1 website',
      '5 email accounts', '5 databases', '10 subdomains', '5 additional domains',
      'Free SSL certificate', 'Enhanced website security', 'Daily backups',
      'Faster server performance', 'DNS management', 'File Manager', 'FTP access',
      'Email management', '2-Factor Authentication', 'Free website migration',
      '24/7 technical support',
    ],
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
  {
    name: 'PREMIUM', price: 'R399', period: '/month', tag: 'Best Value',
    desc: 'Designed for businesses with larger websites and higher traffic.',
    features: [
      'Unlimited website storage*', 'Unlimited data transfer*', 'Unlimited websites*',
      'Unlimited email accounts*', 'Unlimited databases*', 'Unlimited subdomains',
      'Unlimited additional domains', 'Free SSL certificate', 'Advanced website security',
      'Daily backups', 'High-performance servers', 'DNS management', 'File Manager',
      'Email management', '2-Factor Authentication', 'Free website migration',
      '24/7 technical support', '99.9% uptime guarantee',
    ],
    note: '*Fair-use and server resource limits may apply.',
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
];

/* ─── VPS Plans ─────────────────────────────────────────────────────────── */
const VPS_PLANS = [
  {
    name: 'STANDARD', price: 'POA',
    desc: 'Suitable for small business websites, landing pages, personal websites, small applications, and low-traffic websites.',
    specs: [
      { label: 'CPU Cores', value: '2' },
      { label: 'RAM', value: '1 GB' },
      { label: 'NVMe Storage', value: '40 GB' },
      { label: 'Data Transfer', value: '50 GB' },
    ],
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
  {
    name: 'BUSINESS', price: 'POA', popular: true,
    desc: 'Suitable for growing business websites, e-commerce, business applications, customer portals, databases, and medium-traffic websites.',
    specs: [
      { label: 'CPU Cores', value: '4' },
      { label: 'RAM', value: '4 GB' },
      { label: 'NVMe Storage', value: '100 GB' },
      { label: 'Data Transfer', value: '100 GB' },
    ],
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
  {
    name: 'PREMIUM', price: 'POA',
    desc: 'Suitable for high-traffic websites, SaaS platforms, large business systems, enterprise applications, and high-performance databases.',
    specs: [
      { label: 'CPU Cores', value: '12' },
      { label: 'RAM', value: '8 GB' },
      { label: 'NVMe Storage', value: '500 GB' },
      { label: 'Data Transfer', value: 'Unlimited' },
    ],
    orderUrl: 'https://ataglance.imagine.co.za/cart.php',
  },
];

/* ─── VPS Feature table ─────────────────────────────────────────────────── */
const VPS_TABLE_FEATURES = [
  'Dedicated IP', 'Free SSL', 'Free Setup', 'Free Upgrades',
  'IPv4 & IPv6', 'Full Root Access', '7-Day Guarantee',
];

/* ─── Hosting Technology ─────────────────────────────────────────────────── */
const TECH_FEATURES = [
  { icon: Server, title: 'Linux Hosting', desc: 'Reliable hosting for modern websites and applications.' },
  { icon: Layers, title: 'Windows Hosting', desc: 'Hosting support for websites and applications that require a Windows environment.' },
  { icon: Shield, title: 'CloudLinux', desc: 'Better server stability and resource management.' },
  { icon: Zap, title: 'NVMe Storage', desc: 'High-speed storage for faster website loading and better performance.' },
  { icon: BarChart3, title: 'LiteSpeed Servers', desc: 'Optimised servers designed to improve website speed and performance.' },
  { icon: Database, title: 'MySQL Databases', desc: 'Reliable database hosting for websites and business applications.' },
  { icon: Cpu, title: 'PHP Support', desc: 'Support for modern PHP-based websites and applications.' },
  { icon: Globe, title: 'Multiple Dev Languages', desc: 'Support for different programming technologies and development environments.' },
];

/* ─── Why Choose ─────────────────────────────────────────────────────────── */
const WHY_FEATURES = [
  { icon: Shield, title: 'No hidden charges', desc: 'Transparent pricing with no surprise fees.' },
  { icon: Lock, title: 'Free SSL certificate', desc: 'Every plan comes with SSL protection included.' },
  { icon: Headphones, title: '24/7 technical support', desc: 'Our team is available around the clock.' },
  { icon: Zap, title: 'Fast and reliable servers', desc: 'High-performance NVMe server infrastructure.' },
  { icon: Shield, title: 'Website security included', desc: 'DDoS protection, malware monitoring and more.' },
  { icon: RefreshCw, title: 'Regular backups', desc: 'Daily backups to keep your data safe.' },
  { icon: Award, title: '99.9% uptime guarantee', desc: 'Reliable hosting you can depend on.' },
  { icon: Mail, title: 'Easy email management', desc: 'Create and manage business email accounts with ease.' },
  { icon: ArrowRight, title: 'Free website migration', desc: 'We move your existing website to our servers for free.' },
  { icon: Lock, title: 'Secure data connections', desc: 'FTP over SSL and secure server infrastructure.' },
  { icon: CheckCircle, title: '30-day money-back guarantee', desc: 'Try our shared hosting risk-free.' },
];

/* ─── Section Tab navigation ─────────────────────────────────────────────── */
const TABS = [
  { id: 'shared', label: 'Web Hosting' },
  { id: 'vps', label: 'Cloud & VPS' },
  { id: 'reseller', label: 'Reseller Hosting' },
  { id: 'microsoft', label: 'Microsoft 365' },
];

export default function HostingPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const tabParam = params.get('tab');
  const [activeTab, setActiveTab] = useState(
    tabParam && ['shared','vps','reseller','microsoft'].includes(tabParam) ? tabParam : 'shared'
  );

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const t = p.get('tab');
    if (t && ['shared','vps','reseller','microsoft'].includes(t)) {
      setActiveTab(t);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.search]);

  return (
    <Layout>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 55%, #0d1f3c 100%)' }}
      >
        <span className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }} />
        <span className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.10) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }} />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/40 bg-[#E4002B]/10 text-red-400">
            <Server size={12} /> Reliable Hosting for Your Business
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Fast, Secure &amp; Reliable<br />
            <span className="text-[#E4002B]">Web Hosting Services</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Your website needs a safe, fast and reliable place to live. Our web hosting services give your business
            the space, security and performance it needs to stay online — from startups to large online platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#plans" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors shadow-lg">
              View Hosting Plans <ChevronRight size={15} />
            </a>
            <a href={`mailto:${contactDetails.salesEmail}`} className="border border-white/25 hover:bg-white/10 px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all">
              <Phone size={14} /> Contact Sales
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['No Hidden Charges', 'Free SSL Certificate', 'Free Website Migration', '99.9% Uptime', '30-Day Money-Back'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check size={11} className="text-green-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TAB NAVIGATION ════════════════════════════════════════════════ */}
      <div id="plans" className="bg-white border-b border-gray-200 sticky top-[64px] z-30">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-6 py-4 text-sm font-bold border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-[#E4002B] text-[#E4002B]'
                    : 'border-transparent text-gray-500 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SHARED HOSTING SECTION ════════════════════════════════════════ */}
      {activeTab === 'shared' && (
        <>
          {/* Why Choose */}
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-black text-[#0f1720]">Why Choose Our Hosting?</h2>
                <p className="text-xs text-gray-500 mt-1">Everything your website needs, built in as standard</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {WHY_FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3 hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#E4002B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f1720]">{title}</p>
                      <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hosting Plans */}
          <section className="py-14 px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-black text-[#0f1720]">Hosting Plans</h2>
                <p className="text-sm text-gray-500 mt-2">Choose a package that matches the size of your business.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {SHARED_PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                      plan.popular
                        ? 'ring-2 ring-[#E4002B] shadow-2xl scale-[1.02]'
                        : 'bg-white border border-gray-200 shadow-sm hover:border-[#E4002B]/40'
                    }`}
                    style={plan.popular ? { background: 'linear-gradient(160deg, #0f1720 0%, #1a2736 100%)' } : {}}
                  >
                    {plan.tag && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest bg-[#E4002B]">
                        ★ {plan.tag}
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className={`text-xs font-black uppercase tracking-widest mb-3 ${plan.popular ? 'text-red-400' : 'text-gray-400'}`}>
                        {plan.name}
                      </div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-[#0f1720]'}`}>{plan.price}</span>
                        <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>{plan.period}</span>
                      </div>
                      <p className={`text-xs mt-1 mb-4 leading-relaxed ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                      <div className={`h-px mb-4 ${plan.popular ? 'bg-white/10' : 'bg-gray-100'}`} />
                      <ul className="space-y-2 flex-1 mb-6">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs">
                            <Check size={13} className="text-green-400 mt-0.5 shrink-0" />
                            <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{f}</span>
                          </li>
                        ))}
                      </ul>
                      {plan.note && (
                        <p className={`text-[10px] mb-3 ${plan.popular ? 'text-gray-400' : 'text-gray-400'}`}>{plan.note}</p>
                      )}
                      <a
                        href={plan.orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
                        style={plan.popular ? { background: '#E4002B', color: '#fff' } : { background: '#0f1720', color: '#fff' }}
                      >
                        Order on Client Portal <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Free Business Hosting */}
          <section className="py-14 px-6 lg:px-10 bg-gradient-to-br from-[#0f1720] to-[#1a2736]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-white space-y-4">
                  <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
                    🎁 FREE BUSINESS HOSTING
                  </span>
                  <h2 className="text-3xl font-black">Start Your Online Journey at No Cost</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Are you a new or small business that needs a website but does not have a large budget?
                    We offer selected small businesses <strong className="text-white">free hosting for 12 months.</strong>
                  </p>
                  <a
                    href={`mailto:${contactDetails.salesEmail}`}
                    className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
                  >
                    Apply for Free Hosting <ArrowRight size={14} />
                  </a>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-72 space-y-3">
                  <h3 className="text-white font-bold text-sm mb-4">Free Hosting Includes:</h3>
                  {[
                    '100 MB website storage',
                    '1 website',
                    'Free SSL certificate',
                    'Basic website security',
                    'Website management access',
                    'Email support',
                    'Reliable hosting',
                    'No monthly hosting fee for 12 months',
                  ].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs">
                      <Check size={13} className="text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{f}</span>
                    </div>
                  ))}
                  <p className="text-[10px] text-gray-500 pt-2">*Terms and eligibility apply.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Hosting Technology */}
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-black text-[#0f1720]">Hosting Technology</h2>
                <p className="text-xs text-gray-500 mt-1">We use modern hosting technology to help keep your website fast, secure and available.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {TECH_FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3">
                      <Icon size={20} className="text-[#E4002B]" />
                    </div>
                    <h3 className="font-bold text-xs text-[#0f1720] mb-1">{title}</h3>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Security + Migration + Custom Grid */}
          <section className="py-14 px-6 lg:px-10 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
              {/* Security */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Shield size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-3">Website Security</h3>
                <ul className="space-y-2">
                  {['Free SSL certificates','DDoS protection','Malware & security monitoring','Secure connections','Daily backups','FTP over SSL','Two-factor authentication','Secure server infrastructure','Regular security updates'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><Check size={12} className="text-green-500 shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>

              {/* Fast & Reliable */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Zap size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-3">Fast &amp; Reliable Hosting</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">A slow website can cost your business customers. Our hosting is designed to provide:</p>
                <ul className="space-y-2">
                  {['Fast website loading','High-performance NVMe storage','Reliable server infrastructure','Optimised server performance','Fast data transfer','99.9% uptime guarantee','Secure connections'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><Check size={12} className="text-green-500 shrink-0" />{f}</li>
                  ))}
                </ul>
              </div>

              {/* Migration */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <RefreshCw size={20} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-3">Free Website Migration</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">Our team can help you move your existing website to our servers with minimal disruption.</p>
                <p className="text-xs font-bold text-gray-600 mb-2">Migration support includes:</p>
                <ul className="space-y-2">
                  {['Website files','Databases','Email accounts','DNS configuration','Domain settings','SSL configuration'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><Check size={12} className="text-green-500 shrink-0" />{f}</li>
                  ))}
                </ul>
                <a href="https://ataglance.imagine.co.za/cart.php?a=add&domain=transfer" target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-2.5 rounded-xl bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors">
                  Migrate to Imagine <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </section>

          {/* Business Email + Custom Hosting */}
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Mail size={24} className="text-[#E4002B] mb-3" />
                <h3 className="font-extrabold text-lg text-[#0f1720] mb-2">Business Email Hosting</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">Create professional email addresses using your business domain. Professional email helps your business look more trustworthy.</p>
                <div className="space-y-1.5 mb-4">
                  {['info@yourcompany.co.za','sales@yourcompany.co.za','support@yourcompany.co.za'].map((e) => (
                    <div key={e} className="flex items-center gap-2 text-xs font-semibold text-[#0f1720] bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                      <Mail size={12} className="text-[#E4002B]" /> {e}
                    </div>
                  ))}
                </div>
                <Link to="/services/email" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E4002B] hover:underline">
                  View Email Plans <ArrowRight size={12} />
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <Server size={24} className="text-[#E4002B] mb-3" />
                <h3 className="font-extrabold text-lg text-[#0f1720] mb-2">Need More Hosting Power?</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">If your business needs more storage, higher performance, dedicated resources or a custom server environment, we can create a hosting solution specifically for you.</p>
                <p className="text-xs font-bold text-gray-700 mb-2">Custom Hosting Suitable For:</p>
                <ul className="grid grid-cols-2 gap-1.5 mb-4">
                  {['Corporate websites','E-commerce platforms','Business applications','Customer portals','Learning platforms','Large databases','SaaS platforms','High-traffic websites'].map((u) => (
                    <li key={u} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Check size={11} className="text-green-500 shrink-0" /> {u}
                    </li>
                  ))}
                </ul>
                <a href={`mailto:${contactDetails.salesEmail}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E4002B] hover:underline">
                  Get a Custom Quote <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══ VPS / CLOUD SECTION ═══════════════════════════════════════════ */}
      {activeTab === 'vps' && (
        <>
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#0f1720]">Cloud &amp; VPS Hosting</h2>
                <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">Keep your website, applications, and business systems fast, secure, and available with our reliable cloud and VPS hosting solutions.</p>
              </div>

              {/* Why Choose VPS */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: Zap, t: 'Fast & Reliable', d: 'High-performance server environment.' },
                  { icon: Shield, t: 'Secure Hosting', d: 'SSL, firewall, and secure access controls.' },
                  { icon: BarChart3, t: 'Flexible Resources', d: 'Scale as your business grows.' },
                  { icon: Lock, t: 'Free SSL', d: 'SSL certificate included with every plan.' },
                  { icon: CheckCircle, t: 'Free Setup', d: 'We handle the initial server setup.' },
                  { icon: HardDrive, t: 'NVMe Storage', d: 'High-speed storage for top performance.' },
                  { icon: Globe, t: 'Dedicated IP', d: 'IPv4 and IPv6 support included.' },
                  { icon: Settings, t: 'Full Root Access', d: 'Complete control over your server.' },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex items-start gap-3 hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-[#E4002B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0f1720]">{t}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* VPS Plans */}
              <div>
                <h3 className="text-xl font-black text-[#0f1720] text-center mb-6">Choose Your VPS Hosting Plan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {VPS_PLANS.map((plan) => (
                    <div
                      key={plan.name}
                      className={`relative rounded-2xl flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                        plan.popular
                          ? 'ring-2 ring-[#E4002B] shadow-2xl scale-[1.02]'
                          : 'bg-white border border-gray-200 shadow-sm hover:border-[#E4002B]/40'
                      }`}
                      style={plan.popular ? { background: 'linear-gradient(160deg, #0f1720 0%, #1a2736 100%)' } : {}}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest bg-[#E4002B]">
                          ★ Most Popular
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className={`text-xs font-black uppercase tracking-widest mb-4 ${plan.popular ? 'text-red-400' : 'text-gray-400'}`}>{plan.name}</div>

                        {/* Specs */}
                        <div className="space-y-2 mb-4">
                          {plan.specs.map((s) => (
                            <div key={s.label} className={`flex justify-between items-center text-xs ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                              <span className={plan.popular ? 'text-gray-400' : 'text-gray-400'}>{s.label}</span>
                              <span className="font-bold">{s.value}</span>
                            </div>
                          ))}
                          {VPS_TABLE_FEATURES.map((f) => (
                            <div key={f} className={`flex justify-between items-center text-xs ${plan.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                              <span className={plan.popular ? 'text-gray-400' : 'text-gray-400'}>{f}</span>
                              <Check size={13} className="text-green-400" />
                            </div>
                          ))}
                        </div>

                        <div className={`h-px mb-4 ${plan.popular ? 'bg-white/10' : 'bg-gray-100'}`} />
                        <div className={`flex items-baseline gap-1 mb-3 ${plan.popular ? 'text-white' : 'text-[#0f1720]'}`}>
                          <span className="text-3xl font-black">{plan.price}</span>
                        </div>
                        <p className={`text-xs leading-relaxed mb-4 flex-1 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.desc}</p>
                        <a
                          href={`mailto:${contactDetails.salesEmail}`}
                          className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
                          style={plan.popular ? { background: '#E4002B', color: '#fff' } : { background: '#0f1720', color: '#fff' }}
                        >
                          Get a Quote <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom VPS */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
                <Cloud size={32} className="text-[#E4002B] mx-auto mb-3" />
                <h3 className="font-extrabold text-lg text-[#0f1720] mb-2">Need a Custom Cloud Server?</h3>
                <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-4">Every business is different. If you need more storage, RAM, CPU power, bandwidth, or security, we can build a cloud server package around your requirements.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-xl mx-auto mb-6 text-left">
                  {['High-performance CPUs','Increased RAM','Large NVMe storage','Dedicated IP addresses','High-speed bandwidth','Full root access','Advanced server security','Automated backups','Private cloud environments'].map((c) => (
                    <div key={c} className="flex items-center gap-1.5 text-xs text-gray-600">
                      <Check size={11} className="text-green-500 shrink-0" /> {c}
                    </div>
                  ))}
                </div>
                <a href={`mailto:${contactDetails.salesEmail}`} className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg">
                  Request Custom Solution <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══ RESELLER HOSTING SECTION ══════════════════════════════════════ */}
      {activeTab === 'reseller' && (
        <>
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#0f1720]">Reseller Hosting</h2>
                <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
                  Build your own hosting business with reliable, fast and affordable reseller hosting. Host websites for your clients and grow your business under your own brand.
                </p>
              </div>

              {/* Why Reseller */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: BarChart3, title: 'Grow Your Business', desc: 'Start selling web hosting without the cost of building your own hosting infrastructure.' },
                  { icon: Server, title: 'Reliable Hosting', desc: 'Give your customers fast and stable hosting with modern NVMe storage and strong server performance.' },
                  { icon: Settings, title: 'Easy Management', desc: 'Manage websites, domains, email accounts and hosting resources from one simple control panel.' },
                  { icon: Star, title: 'More Profit', desc: 'Set your own prices and create hosting packages that work for your business.' },
                  { icon: Headphones, title: 'Business Support', desc: 'Get technical support when you need help managing your hosting service.' },
                  { icon: Globe, title: 'Custom DNS', desc: 'Use your own nameservers and present hosting under your own business brand.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#E4002B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f1720] mb-1">{title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reseller Plans */}
              <div>
                <h3 className="text-xl font-black text-center text-[#0f1720] mb-6">Reseller Hosting Plans</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'STANDARD', price: 'R650', popular: false,
                      best: 'Best for: Up to 10 clients',
                      features: ['50 GB NVMe Storage','10 Hosting Accounts','1 GB RAM','100 GB Monthly Bandwidth','Free SSL Certificates','100 Email Accounts','20 Databases','10 Addon Domains','10 Parked Domains','50 Subdomains','Website Security','DirectAdmin Control Panel','FTP Accounts','Domain Management','7-Day Money-Back Guarantee'],
                    },
                    {
                      name: 'BUSINESS', price: 'R1,050', popular: true,
                      best: 'Best for: Up to 20 clients',
                      features: ['100 GB NVMe Storage','20 Hosting Accounts','2 GB RAM','200 GB Monthly Bandwidth','Free SSL Certificates','200 Email Accounts','50 Databases','20 Addon Domains','20 Parked Domains','100 Subdomains','Website Security','DirectAdmin Control Panel','FTP Accounts','Domain Management','Remote Backup Options','7-Day Money-Back Guarantee'],
                    },
                    {
                      name: 'PREMIUM', price: 'R1,850', popular: false,
                      best: 'Best for: Up to 100 clients',
                      features: ['200 GB NVMe Storage','100 Hosting Accounts','4 GB RAM','Unlimited Monthly Bandwidth','Free SSL Certificates','Unlimited Email Accounts','Unlimited Databases','Unlimited Subdomains','Unlimited Addon Domains','Unlimited Parked Domains','Website Security','DirectAdmin Control Panel','FTP Accounts','Domain Management','Remote Backup Options','Custom DNS Name Servers','7-Day Money-Back Guarantee'],
                    },
                  ].map((plan) => (
                    <div
                      key={plan.name}
                      className={`relative rounded-2xl flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                        plan.popular
                          ? 'ring-2 ring-[#E4002B] shadow-2xl scale-[1.02]'
                          : 'bg-white border border-gray-200 shadow-sm hover:border-[#E4002B]/40'
                      }`}
                      style={plan.popular ? { background: 'linear-gradient(160deg, #0f1720 0%, #1a2736 100%)' } : {}}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest bg-[#E4002B]">
                          ★ Most Popular
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-1">
                        <div className={`text-xs font-black uppercase tracking-widest mb-2 ${plan.popular ? 'text-red-400' : 'text-gray-400'}`}>{plan.name}</div>
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-[#0f1720]'}`}>{plan.price}</span>
                          <span className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-400'}`}>/month</span>
                        </div>
                        <p className={`text-xs font-semibold mt-1 mb-4 ${plan.popular ? 'text-red-300' : 'text-[#E4002B]'}`}>{plan.best}</p>
                        <div className={`h-px mb-4 ${plan.popular ? 'bg-white/10' : 'bg-gray-100'}`} />
                        <ul className="space-y-2 flex-1 mb-6">
                          {plan.features.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-xs">
                              <Check size={12} className="text-green-400 mt-0.5 shrink-0" />
                              <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{f}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href="https://ataglance.imagine.co.za/cart.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
                          style={plan.popular ? { background: '#E4002B', color: '#fff' } : { background: '#0f1720', color: '#fff' }}
                        >
                          Order on Client Portal <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Hosting for Resellers */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-[#E4002B]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#0f1720]">Email Hosting for Your Reseller Business</h3>
                    <p className="text-xs text-gray-500 mt-1 max-w-2xl leading-relaxed">
                      Give your customers professional business email that is secure, reliable and easy to manage. Offer email addresses using customers' own domain names while we provide the technology.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Feature table */}
                  <div>
                    <h4 className="font-bold text-sm text-[#0f1720] mb-3">Email Hosting Features</h4>
                    <div className="space-y-2">
                      {[
                        ['Mailbox Storage', '30 GB per account'],
                        ['Professional Email Address', '✓'],
                        ['Custom Domain Email', '✓'],
                        ['Webmail Access', '✓'],
                        ['Mobile Email Support', '✓'],
                        ['Outlook Support', '✓'],
                        ['POP3 / IMAP / SMTP', '✓'],
                        ['Email Forwarding', '✓'],
                        ['Auto-Responders', '✓'],
                        ['Calendar', '✓'],
                        ['Spam Protection', '✓'],
                        ['Brute-Force Protection', '✓'],
                        ['DDoS Protection', '✓'],
                        ['99.9% Uptime', '✓'],
                      ].map(([label, value]) => (
                        <div key={label} className="flex justify-between items-center text-xs border-b border-gray-50 pb-1.5">
                          <span className="text-gray-600">{label}</span>
                          <span className="font-bold text-[#0f1720]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What you can offer */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-sm text-[#0f1720] mb-2">You Can Offer Your Customers:</h4>
                      <ul className="space-y-1.5">
                        {['Business Email Hosting','Domain Email Accounts','Email Migration','Email Setup','Email Storage Upgrades','Email Management','Customer Email Support'].map((f) => (
                          <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                            <Check size={12} className="text-green-500 shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f1720] mb-2">Email Security Features:</h4>
                      {[
                        { title: 'Brute-Force Protection', desc: 'Helps protect accounts from repeated login attempts.' },
                        { title: 'DDoS Protection', desc: 'Helps keep the email service available during network attacks.' },
                        { title: 'Spam Protection', desc: 'Helps reduce unwanted and potentially harmful emails.' },
                      ].map((s) => (
                        <div key={s.title} className="mb-2">
                          <p className="text-xs font-semibold text-[#0f1720]">{s.title}</p>
                          <p className="text-xs text-gray-500">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                    <a href={`mailto:${contactDetails.salesEmail}`} className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">
                      Start Offering Email Hosting <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Custom Reseller */}
              <div className="bg-gradient-to-br from-[#0f1720] to-[#1a2736] rounded-2xl p-8 text-white text-center">
                <h3 className="font-extrabold text-xl mb-2">Need a Custom Reseller Plan?</h3>
                <p className="text-gray-300 text-sm max-w-xl mx-auto mb-4">Every business is different. If you need more storage, more hosting accounts, higher performance, or a custom setup, we can create a reseller package specifically for your business.</p>
                <a href={`mailto:${contactDetails.salesEmail}`} className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg">
                  Contact Sales <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══ MICROSOFT 365 SECTION ═════════════════════════════════════════ */}
      {activeTab === 'microsoft' && (
        <>
          <section className="py-14 px-6 lg:px-10 bg-gray-50">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-black text-[#0f1720]">Microsoft 365 for Your Business</h2>
                <p className="text-base font-semibold text-[#E4002B] mt-1">Work Better. Work Together. Work Securely.</p>
                <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
                  Microsoft 365 gives your business the tools you need to communicate, manage files, work with your team and stay productive from anywhere.
                </p>
              </div>

              {/* Why M365 */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { icon: Globe, t: 'Work from anywhere', d: 'Access your files and applications from your computer, tablet or phone.' },
                  { icon: Users, t: 'Work as a team', d: 'Communicate and share files using Microsoft Teams and SharePoint.' },
                  { icon: Cloud, t: 'Store files securely', d: 'Keep important business documents in OneDrive and SharePoint.' },
                  { icon: FileText, t: 'Familiar Office tools', d: 'Work with Word, Excel, PowerPoint, Outlook and other Microsoft applications.' },
                  { icon: Shield, t: 'Improve security', d: 'Protect your business accounts, information and devices.' },
                  { icon: Zap, t: 'Save time', d: 'Reduce manual work and make everyday business tasks easier.' },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex gap-4 hover:shadow-md hover:border-[#E4002B]/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#E4002B]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f1720] mb-1">{t}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* M365 Plans Table */}
              <div>
                <h3 className="text-xl font-black text-[#0f1720] text-center mb-6">Microsoft 365 Plans</h3>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-400 uppercase tracking-widest">Feature</th>
                          <th className="px-6 py-4 text-center text-xs font-extrabold text-gray-400 uppercase tracking-widest">Standard</th>
                          <th className="px-6 py-4 text-center text-xs font-extrabold text-[#E4002B] uppercase tracking-widest bg-red-50">Business</th>
                          <th className="px-6 py-4 text-center text-xs font-extrabold text-gray-400 uppercase tracking-widest">Premium</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                        {[
                          ['Business Email', '✓', '✓', '✓'],
                          ['50 GB Mailbox', '✓', '✓', '✓'],
                          ['OneDrive Storage', '1 TB', '1 TB', '1 TB'],
                          ['Microsoft Word', 'Online', 'Desktop + Online', 'Desktop + Online'],
                          ['Microsoft Excel', 'Online', 'Desktop + Online', 'Desktop + Online'],
                          ['Microsoft PowerPoint', 'Online', 'Desktop + Online', 'Desktop + Online'],
                          ['Microsoft Outlook', '✓', '✓', '✓'],
                          ['Microsoft Teams', '✓', '✓', '✓'],
                          ['SharePoint', '✓', '✓', '✓'],
                          ['Mobile Apps', '✓', '✓', '✓'],
                          ['Business Security', 'Standard', 'Standard', 'Advanced'],
                          ['Device Management', '—', '—', '✓'],
                          ['Advanced Threat Protection', '—', '—', '✓'],
                          ['Data Protection', '—', '—', '✓'],
                        ].map(([feat, s, b, p], i) => (
                          <tr key={feat} className={i % 2 === 0 ? '' : 'bg-gray-50/50'}>
                            <td className="px-6 py-3 font-semibold text-gray-700">{feat}</td>
                            <td className="px-6 py-3 text-center text-gray-600">{s}</td>
                            <td className="px-6 py-3 text-center font-semibold text-gray-700 bg-red-50/30">{b}</td>
                            <td className="px-6 py-3 text-center text-gray-600">{p}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400">Pricing: Plans can be offered monthly or annually. Microsoft licensing prices may change based on the selected plan, currency exchange rates, taxes and Microsoft's current pricing.</p>
                  </div>
                </div>
              </div>

              {/* M365 Services */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Settings, title: 'Microsoft 365 Setup',
                    items: ['Microsoft 365 account creation','Business email setup','User account creation','Domain connection','DNS configuration','Microsoft Teams setup','OneDrive setup','SharePoint setup','Security configuration'],
                  },
                  {
                    icon: Shield, title: 'Microsoft 365 Security',
                    items: ['Multi-factor authentication','User access controls','Security policies','Data protection','Device management','Threat protection','Account monitoring'],
                  },
                  {
                    icon: RefreshCw, title: 'Microsoft 365 Migration',
                    items: ['Email migration','File migration','User account migration','DNS configuration','Minimal disruption','Teams setup','Calendar migration'],
                  },
                ].map(({ icon: Icon, title, items }) => (
                  <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-3">
                      <Icon size={18} className="text-[#E4002B]" />
                    </div>
                    <h4 className="font-extrabold text-sm text-[#0f1720] mb-3">{title}</h4>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                          <Check size={11} className="text-green-500 shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Support tiers */}
              <div>
                <h3 className="text-xl font-black text-[#0f1720] text-center mb-6">Our Microsoft 365 Support Options</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Basic Support', popular: false,
                      desc: 'Ideal for small businesses that need occasional assistance.',
                      items: ['Microsoft 365 support','User assistance','Email support','Basic troubleshooting','Account assistance'],
                    },
                    {
                      name: 'Business Support', popular: true,
                      desc: 'Designed for businesses that rely on Microsoft 365 every day.',
                      items: ['Microsoft 365 administration','User management','Security configuration','Teams support','OneDrive and SharePoint support','Email and DNS support','Regular system checks'],
                    },
                    {
                      name: 'Premium Support', popular: false,
                      desc: 'For businesses that need ongoing Microsoft 365 management.',
                      items: ['Advanced security support','Device management','Security monitoring','Microsoft 365 optimisation','Data protection support','Priority technical assistance','Regular security reviews'],
                    },
                  ].map((tier) => (
                    <div
                      key={tier.name}
                      className={`relative rounded-2xl p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl ${
                        tier.popular
                          ? 'ring-2 ring-[#E4002B] shadow-xl'
                          : 'bg-white border border-gray-200 shadow-sm hover:border-[#E4002B]/40'
                      }`}
                      style={tier.popular ? { background: 'linear-gradient(160deg, #0f1720 0%, #1a2736 100%)' } : {}}
                    >
                      {tier.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold text-white rounded-full uppercase tracking-widest bg-[#E4002B]">
                          ★ Recommended
                        </div>
                      )}
                      <h4 className={`font-extrabold text-sm mb-2 ${tier.popular ? 'text-red-400' : 'text-gray-400'} uppercase tracking-widest`}>{tier.name}</h4>
                      <p className={`text-xs mb-4 leading-relaxed ${tier.popular ? 'text-gray-300' : 'text-gray-500'}`}>{tier.desc}</p>
                      <div className={`h-px mb-4 ${tier.popular ? 'bg-white/10' : 'bg-gray-100'}`} />
                      <ul className="space-y-2 flex-1 mb-6">
                        {tier.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs">
                            <Check size={12} className="text-green-400 mt-0.5 shrink-0" />
                            <span className={tier.popular ? 'text-gray-200' : 'text-gray-600'}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:${contactDetails.salesEmail}`}
                        className="w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
                        style={tier.popular ? { background: '#E4002B', color: '#fff' } : { background: '#0f1720', color: '#fff' }}
                      >
                        Get Started <ArrowRight size={14} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#0f1720] to-[#1a2736] rounded-2xl p-8 text-white text-center">
                <h3 className="font-extrabold text-xl mb-2">Make Your Business More Productive</h3>
                <p className="text-gray-300 text-sm max-w-xl mx-auto mb-2">With Microsoft 365, your team can communicate, share files, manage documents and work together from almost anywhere.</p>
                <p className="text-sm font-bold text-white mb-4">Choose → Set Up → Secure → Train → Support</p>
                <a href={`mailto:${contactDetails.salesEmail}`} className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg">
                  Contact Us Today <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 lg:px-10 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-16">
          <div className="flex-1">
            <h2 className="text-2xl font-extrabold text-[#0f1720] mb-2">Simple, Secure and Reliable Hosting</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Fast servers. Strong security. Reliable support. Business-ready hosting. Choose your hosting plan and get your business online today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://ataglance.imagine.co.za/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90 bg-[#E4002B]"
            >
              Order on Client Portal <ArrowRight size={15} />
            </a>
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-sm border border-[#0f1720] bg-[#0f1720] hover:bg-[#1a2736] transition-all"
            >
              <Phone size={14} /> Contact Sales
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
