import React from 'react';
import Layout from '../components/Layout';
import { ShieldCheck, Lock, ShieldAlert, Award, FileSpreadsheet, ArrowRight, Sparkles, MailCheck, Shield, CheckCircle, Flame, Filter, Database, Key } from 'lucide-react';
import { contactDetails } from '../mock';

export default function SecurityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Cyber Security & Threat Protection
          </span>
          <h1 className="text-4xl md:text-5xl font-black">Protect Your Inboxes, Websites & Data</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade Anti-Spam protection, proactive malware sweeps, WHOIS privacy masking, Web Application Firewalls, and multi-factor security.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://ataglance.imagine.co.za/login" target="_blank" rel="noopener noreferrer" className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-colors text-white shadow-md">
              Client Security Portal <ArrowRight size={15} />
            </a>
            <a href="/contact" className="border border-white/20 hover:bg-white/10 px-6 py-3.5 rounded-xl font-bold text-sm inline-flex items-center gap-1.5 transition-all text-white">
              Speak to Security Engineer
            </a>
          </div>
        </div>
      </section>

      {/* ══ FEATURED: ANTI SPAM PROTECTION ════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-10 bg-white border-b border-gray-150">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#0f1720] to-[#1a2736] text-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-800">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#E4002B]/20 text-red-400 border border-[#E4002B]/30 mb-4">
                  <MailCheck size={14} /> Inbox Defense Suite
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Advanced Anti-Spam & Email Threat Protection
                </h2>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  Spam, phishing, ransomware, and malicious spoofing cost businesses time and data. Our proactive multi-layered inbound & outbound anti-spam filters inspect traffic at the server edge before it ever reaches your mailbox.
                </p>

                <div className="space-y-2.5 mb-6">
                  {[
                    '99.98% Spam Catch Rate with near-zero false positives',
                    'Zero-Hour Virus & Phishing Heuristic Analysis',
                    'Automated Quarantine & User-Friendly Whitelist/Blacklist Controls',
                    'SPF, DKIM, & DMARC DNS verification enforcement',
                    'Real-Time Outbound Scanning to protect domain IP reputation',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-gray-200">
                      <CheckCircle size={14} className="text-green-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://ataglance.imagine.co.za/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E4002B] hover:bg-[#c40025] text-white text-xs font-bold px-5 py-3 rounded-xl inline-flex items-center gap-2 transition-all shadow-md"
                >
                  Configure Anti-Spam in Portal <ArrowRight size={13} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Filter, title: 'Multi-Layer Filtering', desc: 'Bayesian statistical analysis + dynamic IP reputation lists.' },
                  { icon: ShieldCheck, title: 'Zero-Day Shield', desc: 'Identifies attachment malware and executable payloads instantly.' },
                  { icon: Database, title: 'Spam Quarantine', desc: 'Searchable quarantine dashboard with digest email alerts.' },
                  { icon: Key, title: 'Reputation Guard', desc: 'Ensures outbound emails bypass recipient junk folders.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-4.5 hover:bg-white/10 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#E4002B]/20 text-red-400 flex items-center justify-center mb-2.5">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-bold text-xs text-white mb-1">{title}</h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Comprehensive Cyber Security Features</h2>
            <p className="text-xs text-gray-500 mt-1">Holistic protection across your web, email, domain, and server assets.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MailCheck, title: 'Anti-Spam & Phishing Filter', desc: 'Multi-engine spam filtration, Bayesian heuristics, attachment virus isolation, and daily quarantine summaries to maintain clean inboxes.' },
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
                  <a href="https://ataglance.imagine.co.za/login" target="_blank" rel="noopener noreferrer" className="mt-5 text-xs font-bold text-[#E4002B] hover:text-[#c40025] flex items-center gap-1">
                    Access Security Portal <ArrowRight size={12} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
