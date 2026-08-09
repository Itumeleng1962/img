import React from 'react';
import Layout from '../components/Layout';
import { Users, Layers, Zap, Server, Check, ArrowRight } from 'lucide-react';
import { contactDetails } from '../mock';

const RESELLER_PLANS = [
  { name: 'Reseller Mini', price: 'R299', disk: '20GB SSD', domains: 'Up to 10 domains' },
  { name: 'Reseller Medium', price: 'R599', disk: '50GB SSD', domains: 'Up to 25 domains' },
  { name: 'Reseller Executive', price: 'R999', disk: '100GB SSD', domains: 'Up to 50 domains' }
];

export default function ResellersPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            Partner & Reseller Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Start your own Web Hosting business</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            White-labeled Reseller Web Hosting with Plesk admin panel tools. Host unlimited client accounts and keep 100% of the profits.
          </p>
          <a href={`mailto:${contactDetails.salesEmail}?subject=Reseller%20Hosting%20Query`} className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors">
            Start Reselling Today <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Reseller plans */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Plesk Reseller Hosting Packages</h2>
            <p className="text-xs text-gray-500 mt-1">Easily allocate disk quotas, emails, and databases per client through your master dashboard panel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {RESELLER_PLANS.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300 transition-all">
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0d1f3c]">{plan.price}</span>
                    <span className="text-xs text-gray-400">/mo</span>
                  </div>
                  <div className="h-px bg-gray-100 my-4" />
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> {plan.disk} SSD Storage</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> {plan.domains}</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Master Plesk Dashboard</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Custom branding DNS nameservers</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Free Let's Encrypt SSLs</li>
                  </ul>
                </div>
                <a href={`mailto:${contactDetails.salesEmail}?subject=Ordering%20${plan.name}`} className="mt-6 w-full py-2.5 rounded-xl bg-[#0d1f3c] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90">
                  Enquire now <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller tech features */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Enterprise Technical Performance</h2>
            <p className="text-xs text-gray-500 mt-1">Enterprise SSD stacks matching client speed demands.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'LiteSpeed Web Servers', desc: 'Our reseller infrastructure supports LiteSpeed caching engine modules yielding high page load velocities.' },
              { icon: Server, title: '100% SSD Architecture', desc: 'Enterprise datacenter SSD arrays yielding robust system response metrics and data input throughput.' },
              { icon: Layers, title: 'White Label Panel Branding', desc: 'Customize panels with your logo, corporate colors, and custom Nameservers (ns1.yourbrand.co.za).' }
            ].map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto">
                    <Icon size={22} className="text-orange-500" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#0d1f3c]">{feat.title}</h3>
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
