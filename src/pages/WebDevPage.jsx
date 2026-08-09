import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { LayoutDashboard, Code2, ShieldAlert, Cpu, Check, ArrowRight, Laptop, Sparkles } from 'lucide-react';
import { contactDetails } from '../mock';

const DEV_PACKAGES = [
  { name: 'Startup CMS', price: 'R4,999', desc: 'Perfect for small companies looking for a highly optimized, responsive WordPress landing site.', perks: ['Up to 5 Pages', 'Responsive Design', 'Basic SEO Setup', 'Plesk Control Access'], orderUrl: 'https://ataglance.imagine.co.za/cart.php' },
  { name: 'Business Pro', price: 'R9,999', desc: 'Custom enterprise structures built for high visitor capacities, WooCommerce integrations, and advanced forms.', perks: ['Up to 15 Pages', 'WooCommerce Ready', 'Advanced SEO Suite', '1 Month Free Support'], orderUrl: 'https://ataglance.imagine.co.za/cart.php' },
  { name: 'Custom Application', price: 'POA', desc: 'Unique server-rendered layouts, dashboard systems, and API-driven web portals configured to your needs.', perks: ['React / Node / Custom Stack', 'API Integrations', 'Dedicated Security Hardening', 'Enterprise-grade SLA'], comingSoon: true, orderUrl: 'https://ataglance.imagine.co.za/' }
];

export default function WebDevPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Website Design & Development
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Stunning, high-performance websites</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Get a custom online presence built for conversion. Fully responsive, optimized for search engines, and hosted on our blazing-fast local server network.
          </p>
          <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors text-white shadow-lg shadow-red-600/20">
            Order via Client Portal <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Development Solutions & Packages</h2>
            <p className="text-xs text-gray-500 mt-1">Pricing customized to match startup goals to custom web application portals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {DEV_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#E4002B]/40 transition-all relative overflow-hidden">
                {pkg.comingSoon && (
                  <div className="absolute top-3 right-3 bg-[#E4002B] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={10} /> Coming Soon
                  </div>
                )}
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0f1720]">{pkg.price}</span>
                    {pkg.price !== 'POA' && <span className="text-xs text-gray-400"> once-off</span>}
                  </div>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">{pkg.desc}</p>
                  <div className="h-px bg-gray-100 my-4" />
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    {pkg.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <Check size={13} className="text-green-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={pkg.orderUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full py-2.5 rounded-xl bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-md">
                  Order on Client Portal <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Delivering Web Excellence</h2>
            <p className="text-xs text-gray-500 mt-1">Every project is built with these foundational principles standard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: 'Clean, Optimized Code', desc: 'No bloated template builders. We code with speed and accessibility at the forefront.' },
              { icon: LayoutDashboard, title: 'SEO Optimized Frameworks', desc: 'Meta tags, fast load speeds, and structured schema markup included as standard.' },
              { icon: Cpu, title: 'Imagine Hosting Setup', desc: 'Seamlessly configure nameservers, email mailboxes, and caching directly on SSD server arrays.' }
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-2">
                    <Icon size={22} className="text-[#E4002B]" />
                  </div>
                  <h4 className="font-extrabold text-sm text-[#0f1720]">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
