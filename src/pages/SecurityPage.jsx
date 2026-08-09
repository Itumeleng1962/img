import React from 'react';
import Layout from '../components/Layout';
import { ShieldCheck, Lock, ShieldAlert, Award, FileSpreadsheet, ArrowRight, Sparkles } from 'lucide-react';
import { contactDetails } from '../mock';

export default function SecurityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Cyber Security Suite
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Secure your website & customer data</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Proactive security audits, WHOIS domain privacy, malware cleanups, and multi-factor credentials setups to keep your assets safe.
          </p>
          <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors text-white shadow-md">
            Client Security Portal <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: 'Domain WHOIS Privacy', desc: 'Hides your phone number, email address, and home details on domain registration lookup queries to prevent unsolicited marketing spam.' },
            { icon: ShieldCheck, title: 'Website Scanning & WAF', desc: 'Proactive Web Application Firewalls blocking brute-force login attempts, SQL injections, and cross-site scripting vulnerabilities.' },
            { icon: ShieldAlert, title: 'Fix Hacked Websites', desc: 'Did your site get infected with malware? Our technical experts run isolation sweeps, extract infected code, and restore clean backups.', comingSoon: true },
            { icon: FileSpreadsheet, title: 'Cyber Insurance Advice', desc: 'We assist SA companies in evaluating security postures to align with PoPIA compliance and cyber liability insurance underwriting criteria.', comingSoon: true },
            { icon: Award, title: '2FA Authentication', desc: 'Secure webmail, Plesk access portals, and billing panels with mandated multi-factor authentication codes.' }
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden">
                {sec.comingSoon && (
                  <div className="absolute top-3 right-3 bg-[#E4002B] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={10} /> Coming Soon
                  </div>
                )}
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                    <Icon size={20} className="text-[#E4002B]" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#0f1720]">{sec.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{sec.desc}</p>
                </div>
                <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer" className="mt-5 text-xs font-bold text-[#E4002B] hover:text-[#c40025] flex items-center gap-1">
                  Access Portal <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
