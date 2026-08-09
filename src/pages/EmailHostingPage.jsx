import React from 'react';
import Layout from '../components/Layout';
import { Mail, Shield, Check, ExternalLink, ArrowRight, Laptop, HelpCircle } from 'lucide-react';
import { contactDetails } from '../mock';

const EMAIL_PLANS = [
  { name: 'Standard Mail', price: 'Free', storage: 'Plan Shared', desc: 'Included as standard in all Shared Web Hosting packages.' },
  { name: 'Premium Cloud Mail', price: 'R29', storage: '5GB SSD /box', desc: 'Larger separate inbox storage with advanced spam blocker.' },
  { name: 'Corporate Pro Mail', price: 'R59', storage: '15GB SSD /box', desc: 'Large space corporate boxes with team collaboration calendars.' }
];

export default function EmailHostingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            Business Email Hosting
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Professional Custom Business Email</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            Build brand trust with custom mailboxes matching your domain. Access from webmail, Outlook, Apple Mail, or mobile.
          </p>
          <div className="flex justify-center gap-3">
            <a href="https://webmail.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-1.5 transition-colors">
              <Laptop size={15} /> Login to Webmail <ExternalLink size={13} />
            </a>
            <a href="#email-pricing" className="border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl font-bold text-sm transition-all">
              View Packages
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="email-pricing" className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#0d1f3c]">Business Mailbox Packages</h2>
            <p className="text-xs text-gray-500 mt-1">Upgrade individual mailboxes for larger storage and premium safety.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EMAIL_PLANS.map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-orange-300 transition-all">
                <div>
                  <h3 className="font-extrabold text-sm text-gray-400 uppercase tracking-widest">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline">
                    <span className="text-3xl font-black text-[#0d1f3c]">{plan.price === 'Free' ? 'Free' : `R${plan.price}`}</span>
                    {plan.price !== 'Free' && <span className="text-xs text-gray-400">/mo</span>}
                  </div>
                  <p className="text-xs text-gray-400 mt-1 font-semibold">{plan.storage}</p>
                  <p className="text-xs text-gray-500 mt-3 leading-relaxed">{plan.desc}</p>
                  <div className="h-px bg-gray-100 my-4" />
                  <ul className="space-y-2.5 text-xs text-gray-600">
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> POP3/IMAP/SMTP Support</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Webmail Client Login</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Standard Spam Filters</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-green-500" /> Multi-device Sync</li>
                  </ul>
                </div>
                <a href={`mailto:${contactDetails.salesEmail}?subject=Email%20Hosting%20Query`} className="mt-6 w-full py-2.5 rounded-xl bg-[#0d1f3c] text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 transition-opacity hover:opacity-90">
                  Enquire Now <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spam security */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
            <Shield size={28} className="text-orange-500" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-[#0d1f3c] mb-2">Anti-Spam & Threat Protection</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every Imagine email solution features inbound email filtering. We screen phishing attempts, malware, spam, and dangerous attachments before they ever reach your employees' desktop or mobile inboxes.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
