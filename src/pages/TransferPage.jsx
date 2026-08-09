import React, { useState } from 'react';
import Layout from '../components/Layout';
import { RefreshCw, Search, CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
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
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            Domain & Hosting Migrations
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Transfer to Us — Easy & Free</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
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
                className="w-full rounded-xl pl-4 pr-16 py-3.5 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold flex items-center gap-1.5 transition-colors">
              <RefreshCw size={15} /> Transfer
            </button>
          </form>

          {checked && (
            <div className="max-w-2xl mx-auto mt-4 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-left">
              <h3 className="font-bold text-green-400 flex items-center gap-1.5"><CheckCircle size={16} /> Domain {domain} is eligible for transfer!</h3>
              <p className="text-xs text-blue-200 mt-1">Transfer is processed immediately. Select a hosting package on checkout to host it with us.</p>
              <a href={`mailto:${contactDetails.salesEmail}?subject=Transfer%20of%2520${domain}`} className="mt-3 inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
                Initiate Transfer
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Migration Info */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">How Hosting Migration Works</h2>
            <p className="text-xs text-gray-500 mt-1">Our technical specialists handle the details with the least interruption to your business.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: '1', title: 'Check & Register', desc: 'Initiate transfer of your domain through our online wizard or get in touch with our helpdesk.' },
              { step: '2', title: 'We Migrate Assets', desc: 'Our technicians copy databases, website directories, Plesk configurations, and email archives safely.' },
              { step: '3', title: 'Switch Over DNS', desc: 'We update the domain name registration authority nameservers with zero live downtime.' }
            ].map((mig) => (
              <div key={mig.title} className="space-y-3 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm relative">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-extrabold flex items-center justify-center mx-auto mb-2 text-sm">{mig.step}</span>
                <h3 className="font-extrabold text-sm text-[#0d1f3c]">{mig.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{mig.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 text-center">
            <HelpCircle size={32} className="text-orange-500 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-[#0d1f3c] mb-1">Questions about Migrating?</h4>
            <p className="text-xs text-gray-600 max-w-lg mx-auto">
              Our migrations team are happy to assist. Send details of your current provider to <a href={`mailto:${contactDetails.supportEmail}`} className="text-orange-500 font-bold underline">{contactDetails.supportEmail}</a> and we will assist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
