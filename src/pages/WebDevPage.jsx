import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { LayoutDashboard, Code2, ShieldAlert, Cpu, Check, ArrowRight, Laptop } from 'lucide-react';
import { contactDetails } from '../mock';

const DEV_PACKAGES = [
  { name: 'Startup CMS', price: 'R4,999', desc: 'Perfect for small companies looking for a highly optimized, responsive WordPress landing site.', perks: ['Up to 5 Pages', 'Responsive Design', 'Basic SEO Setup', 'Plesk Control Access'] },
  { name: 'Business Pro', price: 'R9,999', desc: 'Custom enterprise structures built for high visitor capacities, WooCommerce integrations, and advanced forms.', perks: ['Up to 15 Pages', 'WooCommerce Ready', 'Advanced SEO Suite', '1 Month Free Support'] },
  { name: 'Custom Application', price: 'POA', desc: 'Unique server-rendered layouts, dashboard systems, and API-driven web portals configured to your needs.', perks: ['React / Node / Custom Stack', 'API Integrations', 'Dedicated Security Hardening', 'Enterprise-grade SLA'] }
];

export default function WebDevPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            Website Design & Development
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Stunning, high-performance websites</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            Get a custom online presence built for conversion. Fully responsive, optimized for search engines, and hosted on our blazing-fast local server network.
          </p>
          <a href={`mailto:${contactDetails.salesEmail}?subject=Web%20Development%20Enquiry`} className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors">
            Start Your Project <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Development Solutions & Packages</h2>
            <p className="text-xs text-gray-500 mt-1">Pricing customized to match startup goals to custom web application portals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {DEV_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300 transition-all">
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0d1f3c]">{pkg.price}</span>
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
                <a href={`mailto:${contactDetails.salesEmail}?subject=Interest%2520in%2520${pkg.name}`} className="mt-6 w-full py-2.5 rounded-xl bg-[#0d1f3c] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90">
                  Select Package <ArrowRight size={13} />
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
            <h2 className="text-2xl font-black text-[#0d1f3c]">Delivering Web Excellence</h2>
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
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-2">
                    <Icon size={22} className="text-orange-500" />
                  </div>
                  <h4 className="font-extrabold text-sm text-[#0d1f3c]">{p.title}</h4>
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
