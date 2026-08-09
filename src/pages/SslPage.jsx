import React from 'react';
import Layout from '../components/Layout';
import { Lock, ShieldCheck, Check, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { contactDetails } from '../mock';

const SSL_PACKAGES = [
  { name: 'Domain Validation (DV)', price: 'R299', renewal: 'R299/yr', best: 'Blogs & Personal sites', checks: ['Automated setup', 'Validates domain ownership', 'Displays padlock in URL bar'], orderUrl: 'https://ataglance.imagine.co.za/cart.php' },
  { name: 'Organization Validation (OV)', price: 'R999', renewal: 'R999/yr', best: 'Corporate platforms', checks: ['Requires business registration check', 'High-level encryption trust', 'Strong protection footprint'], orderUrl: 'https://ataglance.imagine.co.za/cart.php' },
  { name: 'Extended Validation (EV)', price: 'R1999', renewal: 'R1999/yr', best: 'E-commerce & Bank portals', checks: ['Strict security checks', 'Full business identity verified', 'Maximum client trust indicator'], comingSoon: true, orderUrl: 'https://ataglance.imagine.co.za/cart.php' }
];

export default function SslPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            SSL Trust Certificates
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Encrypt website connection & earn client trust</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Avoid browser security warnings. Setup SSL certificates to encrypt form entries, payments, and boost Google ranking indicators.
          </p>
          <a href="https://ataglance.imagine.co.za/cart.php" target="_blank" rel="noopener noreferrer" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors text-white shadow-md">
            Order SSL on Client Portal <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* SSL Plans */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Premium SSL Certificates</h2>
            <p className="text-xs text-gray-500 mt-1">Select the validation level needed for your platform requirements.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SSL_PACKAGES.map((pkg) => (
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
                    <span className="text-xs text-gray-400">/yr</span>
                  </div>
                  <p className="text-xs font-semibold text-[#E4002B] mt-1">{pkg.best}</p>
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
                <a href={pkg.orderUrl} target="_blank" rel="noopener noreferrer" className="mt-6 w-full py-2.5 rounded-xl bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-colors shadow-md">
                  Order on Client Portal <ArrowRight size={13} />
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
            <h2 className="text-2xl font-black text-[#0f1720]">Different Types of SSL Certificates</h2>
            <p className="text-xs text-gray-500 mt-1">We supply certificates matching your backend directory structure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Single Domain SSL', desc: 'Secures one primary domain name. Ideal for simple corporate sites or personal landing profiles.' },
              { title: 'Wildcard SSL Certificates', desc: 'Secures one primary domain and unlimited subdomains (*.company.co.za) under a single validation check.' },
              { title: 'Multi-Domain SSL (SAN)', desc: 'Secure multiple different domain properties on one single certificate.', comingSoon: true }
            ].map((feat) => (
              <div key={feat.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-150 relative space-y-2">
                {feat.comingSoon && (
                  <span className="bg-[#E4002B] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase absolute top-4 right-4">Coming Soon</span>
                )}
                <h3 className="font-extrabold text-sm text-[#0f1720]">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
