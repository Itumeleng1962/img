import React from 'react';
import Layout from '../components/Layout';
import {
  Users, Layers, Zap, Server, Check, ArrowRight, Globe, Database,
  Mail, Shield, HardDrive, Star, BarChart3, Headphones, Phone,
} from 'lucide-react';
import { contactDetails } from '../mock';

const RESELLER_PLANS = [
  {
    name: 'STANDARD', price: 'R650', popular: false,
    best: 'Best for: Up to 10 clients',
    features: [
      '50 GB NVMe Storage', '10 Hosting Accounts', '1 GB RAM',
      '100 GB Monthly Bandwidth', 'Free SSL Certificates', '100 Email Accounts',
      '20 Databases', '10 Addon Domains', '10 Parked Domains', '50 Subdomains',
      'Website Security', 'DirectAdmin Control Panel', 'FTP Accounts',
      'Domain Management', '7-Day Money-Back Guarantee',
    ],
  },
  {
    name: 'BUSINESS', price: 'R1,050', popular: true,
    best: 'Best for: Up to 20 clients',
    features: [
      '100 GB NVMe Storage', '20 Hosting Accounts', '2 GB RAM',
      '200 GB Monthly Bandwidth', 'Free SSL Certificates', '200 Email Accounts',
      '50 Databases', '20 Addon Domains', '20 Parked Domains', '100 Subdomains',
      'Website Security', 'DirectAdmin Control Panel', 'FTP Accounts',
      'Domain Management', 'Remote Backup Options', '7-Day Money-Back Guarantee',
    ],
  },
  {
    name: 'PREMIUM', price: 'R1,850', popular: false,
    best: 'Best for: Up to 100 clients',
    features: [
      '200 GB NVMe Storage', '100 Hosting Accounts', '4 GB RAM',
      'Unlimited Monthly Bandwidth', 'Free SSL Certificates', 'Unlimited Email Accounts',
      'Unlimited Databases', 'Unlimited Subdomains', 'Unlimited Addon Domains',
      'Unlimited Parked Domains', 'Website Security', 'DirectAdmin Control Panel',
      'FTP Accounts', 'Domain Management', 'Remote Backup Options',
      'Custom DNS Name Servers', '7-Day Money-Back Guarantee',
    ],
  },
];

const WHAT_YOU_GET = [
  { icon: HardDrive, title: 'NVMe Storage', desc: 'Fast storage helps websites load quickly and improves overall performance.' },
  { icon: Layers, title: 'Hosting Control Panel', desc: 'Manage your customer hosting accounts, websites, domains and email from one place.' },
  { icon: Shield, title: 'Free SSL', desc: "Keep your customers' websites protected with SSL certificates." },
  { icon: BarChart3, title: 'Bandwidth', desc: 'Choose the amount of monthly data your customers can use based on your hosting plan.' },
  { icon: Mail, title: 'Email Hosting', desc: 'Create professional business email accounts for your customers.' },
  { icon: Globe, title: 'Domain Management', desc: 'Manage domains, addon domains, parked domains and DNS settings.' },
  { icon: Database, title: 'Database Support', desc: 'Create and manage databases for websites and applications.' },
  { icon: Zap, title: 'Website Security', desc: 'Help protect websites against common security threats.' },
  { icon: Server, title: 'Remote Backups', desc: 'Keep additional copies of important website data for recovery when needed.' },
  { icon: Star, title: 'Custom DNS', desc: 'Use your own nameservers and present the hosting service under your business brand.' },
  { icon: Users, title: 'FTP Accounts', desc: 'Give customers secure access to their website files.' },
  { icon: Globe, title: 'Domain Registration', desc: 'Offer domain registration together with your hosting services.' },
];

export default function ResellersPage() {
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
            Partner &amp; Reseller Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Start Your Own<br />
            <span className="text-[#E4002B]">Hosting Business</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Build your own hosting business with reliable, fast and affordable reseller hosting.
            Our reseller hosting plans give you the tools and resources you need to host websites for your clients and grow your business.
            You can create hosting packages, manage customer accounts and sell hosting under your own brand.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#plans"
              className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors text-white shadow-md"
            >
              View Reseller Plans <ArrowRight size={15} />
            </a>
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="border border-white/25 hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all"
            >
              <Phone size={14} /> Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ════════════════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Why Choose Our Reseller Hosting?</h2>
            <p className="text-xs text-gray-500 mt-1">Everything you need to run your own hosting business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Grow Your Business', desc: 'Start selling web hosting without the cost of building your own hosting infrastructure.' },
              { icon: Server, title: 'Reliable Hosting', desc: 'Give your customers fast and stable hosting with modern NVMe storage and strong server performance.' },
              { icon: Layers, title: 'Easy Management', desc: 'Manage websites, domains, email accounts and hosting resources from one simple control panel.' },
              { icon: Star, title: 'More Profit', desc: 'Set your own prices and create hosting packages that work for your business.' },
              { icon: Headphones, title: 'Business Support', desc: 'Get technical support when you need help managing your hosting service.' },
              { icon: Globe, title: 'Your Own Brand', desc: 'Use custom DNS nameservers and present the hosting service under your business brand.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 hover:shadow-md hover:border-[#E4002B]/30 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={20} className="text-[#E4002B]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-[#0f1720] mb-1">{title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RESELLER PLANS ════════════════════════════════════════════════ */}
      <section id="plans" className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Reseller Hosting Plans</h2>
            <p className="text-xs text-gray-500 mt-1">Choose a plan that matches the size of your business. You can upgrade as your customer base grows.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESELLER_PLANS.map((plan) => (
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
      </section>

      {/* ══ WHAT YOU GET ══════════════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">What You Get</h2>
            <p className="text-xs text-gray-500 mt-1">All the tools you need to run a successful hosting business</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {WHAT_YOU_GET.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-[#E4002B]/30 hover:-translate-y-1 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-[#E4002B]" />
                </div>
                <h3 className="font-bold text-xs text-[#0f1720] mb-1">{title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BUILD YOUR OWN BRAND ══════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-black text-[#0f1720] mb-4">Build Your Own Hosting Brand</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              You don't need to build a data centre or manage expensive servers. With our reseller hosting service, you can grow a hosting business under your own brand.
            </p>
            <ul className="space-y-2.5">
              {[
                'Create your own hosting packages',
                'Set your own prices',
                "Host your customers' websites",
                'Manage customer accounts',
                'Offer business email',
                'Register and manage domains',
                'Use your own nameservers',
                'Grow your hosting business over time',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#E4002B]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs font-bold text-[#0f1720]">You focus on your customers.</p>
              <p className="text-xs text-gray-500">We take care of the hosting infrastructure.</p>
            </div>
          </div>

          {/* Custom plan CTA */}
          <div className="bg-gradient-to-br from-[#0f1720] to-[#1a2736] rounded-2xl p-8 text-white">
            <h3 className="font-extrabold text-xl mb-3">Need a Custom Reseller Plan?</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Every business is different. If you need more storage, more hosting accounts, higher performance, dedicated resources or a custom setup, we can create a reseller hosting package specifically for your business.
            </p>
            <p className="text-xs font-bold text-white mb-3">Custom solutions can include:</p>
            <div className="grid grid-cols-2 gap-1.5 mb-6">
              {[
                'Higher storage limits', 'More hosting accounts', 'Dedicated server resources',
                'Custom bandwidth', 'Dedicated IP addresses', 'Advanced backups',
                'Custom DNS nameservers', 'White-label hosting', 'Domain reseller services',
                'Business email hosting', 'Advanced security', 'Custom technical support',
              ].map((c) => (
                <div key={c} className="flex items-center gap-1.5 text-xs text-gray-300">
                  <Check size={10} className="text-green-400 shrink-0" /> {c}
                </div>
              ))}
            </div>
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg w-full justify-center"
            >
              Talk to Our Team <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 lg:px-10 bg-[#E4002B]">
        <div className="max-w-4xl mx-auto text-center text-white space-y-4">
          <h2 className="text-2xl font-black">Start Selling Hosting Today</h2>
          <p className="text-red-100 text-sm">Turn hosting into a new income stream for your business.</p>
          <p className="font-bold">Choose your plan, create your hosting packages and start serving your customers.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="https://ataglance.imagine.co.za/cart.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#E4002B] hover:bg-red-50 font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Get Started <ArrowRight size={14} />
            </a>
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
