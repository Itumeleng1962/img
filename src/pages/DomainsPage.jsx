import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Globe, Search, CheckCircle, XCircle, ArrowRight, ShieldCheck, RefreshCw, Key, Sparkles } from 'lucide-react';

const EXTENSIONS = [
  { ext: '.co.za', price: 'R99', renewal: 'R99/yr', promo: 'Free with hosting plan*' },
  { ext: '.com', price: 'R199', renewal: 'R219/yr', promo: 'Popular choice' },
  { ext: '.net', price: 'R220', renewal: 'R240/yr', promo: 'Great for tech' },
  { ext: '.org', price: 'R240', renewal: 'R260/yr', promo: 'Non-profit focus' },
  { ext: '.africa', price: 'POA', renewal: 'Coming Soon', promo: 'African Regional TLD', comingSoon: true }
];

export default function DomainsPage() {
  const [query, setQuery] = useState('');
  const [checked, setChecked] = useState(false);
  const [available, setAvailable] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setChecked(true);
    setAvailable(Math.random() > 0.4);
  };

  return (
    <Layout>
      {/* Hero Search */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Domain Registration Search
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Find the perfect name for your idea</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Secure your domain in seconds. Register, build, and grow your brand with South Africa's trusted partner.
          </p>

          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                required
                value={query}
                onChange={(e) => { setQuery(e.target.value); setChecked(false); }}
                placeholder="search-your-dream-name"
                className="w-full rounded-xl pl-4 pr-16 py-3.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#E4002B]"
              />
              <span className="absolute right-4 top-4 text-xs font-extrabold text-gray-400">.co.za</span>
            </div>
            <button type="submit" className="bg-[#E4002B] hover:bg-[#c40025] px-6 rounded-xl font-bold flex items-center gap-1.5 transition-colors text-white shadow-md">
              <Search size={16} /> Search
            </button>
          </form>

          {checked && (
            <div className="max-w-2xl mx-auto mt-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all text-left">
              {available ? (
                <div className="flex justify-between items-center flex-wrap gap-3">
                  <div>
                    <h3 className="font-bold text-green-400 flex items-center gap-1.5"><CheckCircle size={18} /> {query}.co.za is available!</h3>
                    <p className="text-xs text-gray-300 mt-1">Register now on our Client Portal.</p>
                  </div>
                  <a href={`https://ataglance.imagine.co.za/cart.php?a=add&domain=register&query=${query}`} target="_blank" rel="noopener noreferrer" className="bg-[#E4002B] hover:bg-[#c40025] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                    Order on Client Portal
                  </a>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold text-red-400 flex items-center gap-1.5"><XCircle size={18} /> {query}.co.za is already registered</h3>
                  <p className="text-xs text-gray-300 mt-1">Try a different name or search on our Client Portal domain tool.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">Popular Domain Extensions</h2>
            <p className="text-xs text-gray-500 mt-1">Consolidated billing, simple nameserver setups, and low prices.</p>
          </div>

          <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 text-gray-400 uppercase tracking-widest font-extrabold border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4">Extension</th>
                    <th className="px-6 py-4">Registration</th>
                    <th className="px-6 py-4">Renewal</th>
                    <th className="px-6 py-4">Promo / Benefits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {EXTENSIONS.map((e) => (
                    <tr key={e.ext} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-extrabold text-sm text-[#0f1720] flex items-center gap-2">
                        {e.ext}
                        {e.comingSoon && <span className="bg-[#E4002B] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Coming Soon</span>}
                      </td>
                      <td className="px-6 py-4 font-bold text-[#E4002B]">{e.price}</td>
                      <td className="px-6 py-4">{e.renewal}</td>
                      <td className="px-6 py-4 text-xs font-semibold text-gray-500">{e.promo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 text-center">*Offer applies to initial registration of new domains with qualifying active hosting plans.</p>
        </div>
      </section>

      {/* Domain tools */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Domain Privacy Protection', body: 'Mask WHOIS records to block marketing spam, unsolicited phone calls, and domain hijacking attempts.' },
            { icon: RefreshCw, title: 'Seamless Domain Transfer', body: 'Move your domains to Imagine IPS for simple consolidated invoices, automated renewals, and local support.' },
            { icon: Key, title: 'Full DNS Management', body: 'Manage A, MX, CNAME, and TXT records easily through your integrated client portal dashboard.' }
          ].map((feat) => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-2">{feat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.body}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
