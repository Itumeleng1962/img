import React from 'react';
import Layout from '../components/Layout';
import { ShieldCheck, Lock, ShieldAlert, Award, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { contactDetails } from '../mock';

export default function SecurityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3a6b 60%, #0d1f3c 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-orange-500/30 text-orange-300" style={{ background: 'rgba(244,126,32,0.15)' }}>
            Cyber Security Suite
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Secure your website & customer data</h1>
          <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
            Proactive security audits, WHOIS domain privacy, malware cleanups, and multi-factor credentials setups to keep your assets safe.
          </p>
          <a href={`mailto:${contactDetails.supportEmail}?subject=Security%20Assistance`} className="bg-orange-500 hover:bg-orange-600 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors">
            Get Support Consultation <ArrowRight size={15} />
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Lock, title: 'Domain WHOIS Privacy', desc: 'Hides your phone number, email address, and home details on domain registration lookup queries to prevent unsolicited marketing spam.' },
            { icon: ShieldCheck, title: 'Website Scanning & WAF', desc: 'Proactive Web Application Firewalls blocking brute-force login attempts, SQL injections, and cross-site scripting vulnerabilities.' },
            { icon: ShieldAlert, title: 'Fix Hacked Websites', desc: 'Did your site get infected with malware? Our technical experts run isolation sweeps, extract infected code, and restore clean backups.' },
            { icon: FileSpreadsheet, title: 'Cyber Insurance Advice', desc: 'We assist SA companies in evaluating security postures to align with PoPIA compliance and cyber liability insurance underwriting criteria.' },
            { icon: Award, title: '2FA Authentication', desc: 'Secure webmail, Plesk access portals, and billing panels with mandated multi-factor authentication codes.' }
          ].map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.title} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                    <Icon size={20} className="text-orange-500" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#0d1f3c]">{sec.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{sec.desc}</p>
                </div>
                <a href={`mailto:${contactDetails.supportEmail}?subject=Query%20about%20${sec.title}`} className="mt-5 text-xs font-bold text-orange-500 hover:text-orange-600 flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
