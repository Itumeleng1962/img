import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Wrench,
  Headset,
  ShieldCheck,
  Cloud,
  Laptop,
  Server,
  Activity,
  Megaphone,
  BookOpen,
  PlusCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { contactDetails } from '../mock';

export default function SupportPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a2736 60%, #0f1720 100%)' }}>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-400 bg-[#E4002B]/10">
            Customer Support & IT Services
          </span>
          <h1 className="text-4xl md:text-5xl font-black">How can we help you today?</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Access network status reports, search the hosting knowledge base, open a technical support ticket, or log in to the AtAGlance Client Portal.
          </p>
        </div>
      </section>

      {/* Support Portal Cards */}
      <section className="py-12 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: Activity, title: 'Network Status', desc: 'Real-time uptime checks on our fibre and hosting networks.', action: 'View Status', link: 'https://ataglance.imagine.co.za/', comingSoon: true },
            { icon: Megaphone, title: 'Announcements', desc: 'Latest updates on network rollouts and company news.', action: 'Read News', link: '/news' },
            { icon: BookOpen, title: 'Knowledge Base', desc: 'Frequently asked hosting questions and setup guides.', action: 'Search KB', link: '/services/hosting' },
            { icon: PlusCircle, title: 'Client Portal Ticket', desc: 'Submit a technical support ticket to our 24/7 helpdesk.', action: 'Open Portal', link: 'https://ataglance.imagine.co.za/' }
          ].map((portal) => {
            const Icon = portal.icon;
            return (
              <div key={portal.title} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden">
                {portal.comingSoon && (
                  <div className="absolute top-2 right-2 bg-[#E4002B] text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase">
                    Coming Soon
                  </div>
                )}
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#E4002B]">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#0f1720]">{portal.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{portal.desc}</p>
                </div>
                {portal.link.startsWith('http') ? (
                  <a href={portal.link} target="_blank" rel="noopener noreferrer" className="mt-5 text-xs font-bold text-[#E4002B] hover:text-[#c40025] flex items-center gap-1">
                    {portal.action} <ArrowRight size={12} />
                  </a>
                ) : (
                  <Link to={portal.link} className="mt-5 text-xs font-bold text-[#E4002B] hover:text-[#c40025] flex items-center gap-1">
                    {portal.action} <ArrowRight size={12} />
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* IT Managed Care Services */}
      <section className="py-16 px-6 lg:px-10 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0f1720]">Managed IT Support & Care</h2>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Imagine IT Support blends remote helpdesk patching and on-site engineers into a single, predictable monthly cost.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Headset, title: '24/7 technical help-desk', desc: 'Talk to a qualified network technician via phone or email in under 2 minutes.' },
              { icon: Wrench, title: 'On-site engineers', desc: 'Dispatched national footprint of engineers for rapid system recovery.' },
              { icon: ShieldCheck, title: 'Managed security & patches', desc: 'Auto security updates, malware sweeps, and protection scans on every device.' },
              { icon: Cloud, title: 'Cloud Infrastructure care', desc: 'Host configuration, Plesk control panel management, database pools care.' },
              { icon: Laptop, title: 'Live Speed Tester & Traceroute', desc: 'Automated remote diagnostic latency checking tool.', comingSoon: true },
              { icon: Server, title: 'Server & Network Care', desc: 'Corporate routers configurations, VLAN setups, and server security backups.' }
            ].map((care) => {
              const Icon = care.icon;
              return (
                <div key={care.title} className="flex gap-4 items-start relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-red-50 flex items-center justify-center text-[#E4002B]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-sm text-[#0f1720] mb-1">{care.title}</h3>
                      {care.comingSoon && <span className="bg-[#E4002B] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Coming Soon</span>}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{care.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
