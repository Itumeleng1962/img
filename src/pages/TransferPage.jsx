import React, { useState } from 'react';
import Layout from '../components/Layout';
import { RefreshCw, Search, CheckCircle, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';
import { contactDetails } from '../mock';

export default function TransferPage() {
  const [domain, setDomain] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!domain.trim()) return;
    setChecked(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Domain & Hosting Migrations
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Transfer to Us — Easy & Free</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Ready to upgrade your web provider? Transfer your domains and migrate website hosting to Imagine IPS with zero downtime.
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                required
                value={domain}
                onChange={(e) => { setDomain(e.target.value); setChecked(false); }}
                placeholder="mydomainname.co.za"
                className="w-full rounded-xl pl-4 pr-16 py-3.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#E4002B]"
              />
            </div>
            <button type="submit" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold flex items-center gap-1.5 transition-colors text-white shadow-md">
              <RefreshCw size={15} /> Transfer
            </button>
          </form>

          {checked && (
            <div className="max-w-2xl mx-auto mt-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-left">
              <h3 className="font-bold text-green-400 flex items-center gap-1.5"><CheckCircle size={16} /> Domain {domain} is eligible for transfer!</h3>
              <p className="text-xs text-gray-300 mt-1">Transfer is processed immediately on our Client Portal.</p>
              <a href={`https://ataglance.imagine.co.za/cart.php?a=add&domain=transfer&sld=${domain.split('.')[0] || ''}&tld=.${domain.split('.')[1] || 'co.za'}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block bg-[#E4002B] hover:bg-[#c40025] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                Complete Transfer on Client Portal
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Migration Info */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0f1720]">How Hosting Migration Works</h2>
            <p className="text-xs text-gray-500 mt-1">Our technical specialists handle the details with the least interruption to your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: '1', title: 'Check & Register', desc: 'Initiate transfer of your domain through our online wizard or get in touch with our helpdesk.' },
              { step: '2', title: 'We Migrate Assets', desc: 'Our technicians copy databases, website directories, Plesk configurations, and email archives safely.' },
              { step: '3', title: 'Switch Over DNS', desc: 'We update the domain name registration authority nameservers with zero live downtime.' }
            ].map((mig) => (
              <div key={mig.title} className="space-y-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-[#E4002B] text-white font-extrabold flex items-center justify-center mx-auto mb-2 text-sm">{mig.step}</span>
                <h3 className="font-extrabold text-sm text-[#0f1720]">{mig.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{mig.desc}</p>
              </div>
            ))}
          </div>

          {/* Automated Migration Tool banner */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#E4002B]">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm text-[#0f1720]">Automated 1-Click Multi-cPanel Migration Engine</h4>
                  <span className="bg-[#E4002B] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
                </div>
                <p className="text-xs text-gray-500">Self-service automated migration tool for migrating bulk accounts seamlessly.</p>
              </div>
            </div>
            <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="bg-[#0f1720] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-black transition-colors shrink-0">
              Client Portal
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-red-50 border border-red-200 text-center">
            <HelpCircle size={32} className="text-[#E4002B] mx-auto mb-2" />
            <h4 className="font-bold text-sm text-[#0f1720] mb-1">Questions about Migrating?</h4>
            <p className="text-xs text-gray-600 max-w-lg mx-auto">
              Our migrations team are happy to assist. Send details of your current provider to <a href={`mailto:${contactDetails.supportEmail}`} className="text-[#E4002B] font-bold underline">{contactDetails.supportEmail}</a> and we will assist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
