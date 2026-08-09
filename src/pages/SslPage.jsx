import React from 'react';
import Layout from '../components/Layout';
import { Lock, ShieldCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { contactDetails } from '../mock';

const SSL_PACKAGES = [
  { name: 'Domain Validation (DV)', price: 'R299', renewal: 'R299/yr', best: 'Blogs & Personal sites', checks: ['Automated setup', 'Validates domain ownership', 'Displays padlock in URL bar'] },
  { name: 'Organization Validation (OV)', price: 'R999', renewal: 'R999/yr', best: 'Corporate platforms', checks: ['Requires business registration check', 'High-level encryption trust', 'Strong protection footprint'] },
  { name: 'Extended Validation (EV)', price: 'R1999', renewal: 'R1999/yr', best: 'E-commerce & Bank portals', checks: ['Strict security checks', 'Full business identity verified', 'Maximum client trust indicator'] }
];

export default function SslPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            SSL Trust Certificates
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Encrypt website connection & earn client trust</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            Avoid browser security warnings. Setup SSL certificates to encrypt form entries, payments, and boost Google ranking indicators.
          </p>
          <a href={`mailto:${contactDetails.salesEmail}?subject=SSL%20Certificate%20Query`} className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors">
            Get SSL Protection <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* SSL Plans */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Premium SSL Certificates</h2>
            <p className="text-xs text-gray-500 mt-1">Select the validation level needed for your platform requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SSL_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300 transition-all">
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{pkg.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0d1f3c]">{pkg.price}</span>
                    <span className="text-xs text-gray-400">/yr</span>
                  </div>
                  <p className="text-xs font-semibold text-orange-500 mt-1">{pkg.best}</p>
                  <div className="h-px bg-gray-100 my-4" />
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    {pkg.checks.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Check size={13} className="text-green-500 mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={`mailto:${contactDetails.salesEmail}?subject=Ordering%20${pkg.name}`} className="mt-6 w-full py-2.5 rounded-xl bg-[#0d1f3c] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90">
                  Enquire Now <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSL Features */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Different Types of SSL Certificates</h2>
            <p className="text-xs text-gray-500 mt-1">We supply certificates matching your backend directory structure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Single Domain SSL', desc: 'Secures one primary domain name. Ideal for simple corporate sites or personal landing profiles.' },
              { title: 'Wildcard SSL Certificates', desc: 'Secures one primary domain and unlimited subdomains (*.company.co.za) under a single validation check.' },
              { title: 'Multi-Domain SSL', desc: 'Secure multiple different domain properties (company.co.za, sales.net, shop.org) on one single certificate.' }
            ].map((feat) => (
              <div key={feat.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-150 relative space-y-2">
                <h3 className="font-extrabold text-sm text-[#0d1f3c]">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
