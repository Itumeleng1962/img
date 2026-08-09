import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Server, Zap, RefreshCw, Cpu, Layers, Check, ArrowRight, Sparkles } from 'lucide-react';

const WP_PLANS = [
  { name: 'WP Basic', price: 99, storage: '5GB SSD', db: '2 MariaDB', visits: '~10,000/mo', orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=424' },
  { name: 'WP Starter', price: 149, storage: '15GB SSD', db: '5 MariaDB', visits: '~25,000/mo', orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=425' },
  { name: 'WP Business', price: 249, storage: '30GB SSD', db: '10 MariaDB', visits: '~50,000/mo', orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=426' },
  { name: 'WP Pro Dedicated', price: 499, storage: '60GB SSD', db: '20 MariaDB', visits: '~100,000/mo', comingSoon: true, orderUrl: 'https://ataglance.imagine.co.za/cart.php?a=add&pid=430' }
];

export default function WordPressPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
              Managed WordPress Hosting
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">Optimized WordPress Performance</h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Super-fast local SSD architecture, automatic staging tools, pre-configured caching, and Plesk WP Toolkit management built-in.
            </p>
            <div className="flex gap-3">
              <a href="#wp-plans" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3 rounded-xl font-bold text-sm transition-colors text-white shadow-md">
                View Plans
              </a>
              <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl font-bold text-sm transition-all text-white">
                Client Portal
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 space-y-4 max-w-sm w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E4002B] flex items-center justify-center font-bold text-white">W</div>
                <div>
                  <h4 className="font-extrabold text-sm text-white">Plesk WP Toolkit</h4>
                  <p className="text-[10px] text-gray-300">Integrated automated dashboard</p>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">✓ Smart Plugin Updates</li>
                <li className="flex items-center gap-2">✓ 1-Click Staging & Cloning</li>
                <li className="flex items-center gap-2">✓ Dynamic Security Hardening</li>
                <li className="flex items-center gap-2">✓ Core Auto Backups</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WordPress Plans */}
      <section id="wp-plans" className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Managed WordPress Plans</h2>
            <p className="text-xs text-gray-500 mt-1">Select an SSD speed package for your business, portfolio, or WooCommerce store.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WP_PLANS.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#E4002B]/40 transition-all relative overflow-hidden">
                {plan.comingSoon && (
                  <div className="absolute top-3 right-3 bg-[#E4002B] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={10} /> Coming Soon
                  </div>
                )}
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0f1720]">R{plan.price}</span>
                    <span className="text-xs text-gray-400">/mo</span>
                  </div>
                  <div className="h-px bg-gray-100 my-4" />
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> {plan.storage} SSD</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> {plan.db}</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> {plan.visits}</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Free SSL (AutoSSL)</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Free .co.za Domain*</li>
                  </ul>
                </div>
                <a href={plan.orderUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full py-2.5 rounded-xl bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-md">
                  Order on Client Portal <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Features */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Why Host WordPress with Imagine?</h2>
            <p className="text-xs text-gray-500 mt-1">Engineered to give you high performance, top security, and peace of mind.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Optimized SSD Stack', desc: 'Caching configurations combined with SSD storage yields lightning-fast response times.' },
              { icon: RefreshCw, title: 'Smart Auto-Updates', desc: 'Auto-test updates on clones first. Ensures plugins never break your live environment.' },
              { icon: Layers, title: 'Staging to Production', desc: 'Develop safely. Test site layouts and code updates on subdomains and push live in one click.' }
            ].map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto">
                    <Icon size={22} className="text-[#E4002B]" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#0f1720]">{feat.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
