import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import {
  Mail, Shield, Check, ArrowRight, Laptop, ExternalLink, Globe,
  Lock, Smartphone, Zap, Users, Server, Inbox, Phone,
  Building2, RefreshCw, CheckCircle,
} from 'lucide-react';
import { contactDetails } from '../mock';

/* ─── Email Feature Table ──────────────────────────────────────────────── */
const EMAIL_FEATURES = [
  ['Mailbox Storage', '30 GB per account'],
  ['Professional Email Address', '✓'],
  ['Custom Domain Email', '✓'],
  ['Webmail Access', '✓'],
  ['Mobile Email Support', '✓'],
  ['Outlook Support', '✓'],
  ['POP3 / IMAP / SMTP', '✓'],
  ['Email Forwarding', '✓'],
  ['Auto-Responders', '✓'],
  ['Calendar', '✓'],
  ['Address Book', '✓'],
  ['Spam Protection', '✓'],
  ['Brute-Force Protection', '✓'],
  ['DDoS Protection', '✓'],
  ['Secure Cloud Infrastructure', '✓'],
  ['Technical Support', '✓'],
  ['99.9% Uptime', '✓'],
];

/* ─── Why Choose ───────────────────────────────────────────────────────── */
const WHY_FEATURES = [
  { icon: Mail, title: 'Professional Email', desc: 'Email addresses such as info@yourcompany.co.za' },
  { icon: Shield, title: 'Secure Mailboxes', desc: 'Protection against common email threats and attacks.' },
  { icon: CheckCircle, title: 'Reliable Service', desc: 'Stable email hosting with 99.9% uptime.' },
  { icon: Zap, title: 'Easy to Use', desc: 'Simple setup and management for you and your customers.' },
  { icon: Smartphone, title: 'Works Everywhere', desc: 'Access email from computers, tablets and mobile phones.' },
  { icon: Users, title: 'Business Support', desc: 'Technical support when you need assistance.' },
  { icon: Server, title: 'Scalable Plans', desc: 'Add more mailboxes and storage as your business grows.' },
  { icon: Globe, title: 'Built for Resellers', desc: 'Offer email services to your customers under your own brand.' },
];

/* ─── Security Features ────────────────────────────────────────────────── */
const SECURITY_FEATURES = [
  {
    title: 'Brute-Force Protection',
    desc: 'Helps protect accounts from repeated login attempts.',
    icon: Lock,
  },
  {
    title: 'DDoS Protection',
    desc: 'Helps keep the email service available during network attacks.',
    icon: Shield,
  },
  {
    title: 'Spam Protection',
    desc: 'Helps reduce unwanted and potentially harmful emails.',
    icon: Inbox,
  },
  {
    title: 'Secure Mail Access',
    desc: 'Use secure email connections across supported devices and applications.',
    icon: Lock,
  },
];

/* ─── What You Can Offer ────────────────────────────────────────────────── */
const YOU_CAN_OFFER = [
  'Business Email Hosting',
  'Domain Email Accounts',
  'Email Migration',
  'Email Setup',
  'Email Storage Upgrades',
  'Email Management',
  'Customer Email Support',
];

/* ─── Access Anywhere ───────────────────────────────────────────────────── */
const ACCESS_DEVICES = [
  { icon: Laptop, label: 'Desktop computers' },
  { icon: Laptop, label: 'Laptops' },
  { icon: Smartphone, label: 'Smartphones' },
  { icon: Smartphone, label: 'Tablets' },
  { icon: Globe, label: 'Web browsers' },
  { icon: Mail, label: 'Microsoft Outlook' },
];

/* ─── Bundle Options ────────────────────────────────────────────────────── */
const BUNDLE_WITH = [
  'Website Hosting',
  'Domain Registration',
  'Website Development',
  'IT Support',
  'Business Email',
  'Cloud Services',
  'Cybersecurity Services',
];

export default function EmailHostingPage() {
  return (
    <Layout>
      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden pt-28 pb-20 px-6 lg:px-10 text-white"
        style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a3a6b 55%, #0f1720 100%)' }}
      >
        <span
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.15) 0%, transparent 70%)', transform: 'translate(30%,-30%)' }}
        />
        <span
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(228,0,43,0.10) 0%, transparent 70%)', transform: 'translate(-30%,30%)' }}
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/40 bg-[#E4002B]/10 text-red-400">
            <Mail size={12} /> Email Hosting for Your Reseller Business
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Professional Business Email<br />
            <span className="text-[#E4002B]">Built for Resellers</span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
            Give your customers professional business email that is{' '}
            <strong className="text-white">secure, reliable and easy to manage.</strong>{' '}
            We provide the technology and support behind the service — you manage the customers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://webmail.imagine.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E4002B] hover:bg-[#c40025] px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-colors text-white shadow-lg"
            >
              <Laptop size={15} /> Login to Webmail <ExternalLink size={13} />
            </a>
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="border border-white/25 hover:bg-white/10 px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 transition-all"
            >
              <Phone size={14} /> Contact Sales
            </a>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {['30 GB Mailbox', '99.9% Uptime', 'Spam Protection', 'DDoS Protection', 'Outlook Support'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 bg-white/10 border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Check size={11} className="text-green-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE ════════════════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Why Choose Our Email Hosting?</h2>
            <p className="text-xs text-gray-500 mt-1">Everything your reseller business needs to offer professional email</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {WHY_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center hover:shadow-md hover:border-[#E4002B]/30 hover:-translate-y-1 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-[#E4002B]" />
                </div>
                <h3 className="font-bold text-xs text-[#0f1720] mb-1">{title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMAIL HOSTING PLANS ═══════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Email Hosting Plans</h2>
            <p className="text-sm text-gray-500 mt-2">One plan with everything your customers need — simple, reliable and complete.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Plan header */}
              <div
                className="px-8 py-8 text-white"
                style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a3a6b 100%)' }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-red-400 mb-2">Email Hosting</div>
                    <h3 className="text-3xl font-extrabold text-white">Professional Business Email</h3>
                    <p className="text-gray-300 text-sm mt-2 max-w-lg">
                      Offer professional email addresses using your customers' own domain names. We handle the infrastructure.
                    </p>
                  </div>
                  <div className="shrink-0 text-center">
                    <div className="text-5xl font-black text-white">POA</div>
                    <div className="text-gray-300 text-sm mt-1">per mailbox / month</div>
                    <a
                      href={`mailto:${contactDetails.salesEmail}`}
                      className="mt-4 inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
                    >
                      Get a Quote <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Feature table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-extrabold text-gray-400 uppercase tracking-widest">Feature</th>
                      <th className="px-6 py-3 text-center text-xs font-extrabold text-[#E4002B] uppercase tracking-widest bg-red-50">Email Hosting</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs text-gray-700">
                    {EMAIL_FEATURES.map(([feature, value], i) => (
                      <tr key={feature} className={i % 2 === 0 ? '' : 'bg-gray-50/50'}>
                        <td className="px-6 py-3 font-semibold text-gray-700">{feature}</td>
                        <td className="px-6 py-3 text-center font-bold text-[#0f1720] bg-red-50/20">
                          {value === '✓' ? (
                            <Check size={15} className="text-green-500 mx-auto" />
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PROFESSIONAL EMAIL FOR EVERY BUSINESS ════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-black text-[#0f1720] mb-4">Professional Email for Every Business</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Instead of using free email services, give your customers email addresses linked to their own domain.
                Professional email helps them build trust and communicate with their customers.
              </p>

              {/* Email examples */}
              <div className="space-y-2 mb-6">
                <p className="text-xs font-bold text-gray-600 mb-3">Example email addresses:</p>
                {[
                  'info@abccompany.co.za',
                  'sales@abccompany.co.za',
                  'accounts@abccompany.co.za',
                  'support@abccompany.co.za',
                ].map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                      <Mail size={13} className="text-[#E4002B]" />
                    </div>
                    <span className="text-sm font-bold text-[#0f1720]">{email}</span>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${contactDetails.salesEmail}`}
                className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                Start Offering Email Hosting <ArrowRight size={14} />
              </a>
            </div>

            {/* Built for Resellers */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-5">
                <Building2 size={24} className="text-[#E4002B]" />
              </div>
              <h3 className="font-extrabold text-lg text-[#0f1720] mb-3">Built for Resellers</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-5">
                Our reseller email hosting allows you to offer email services to your own customers under your own business.
                You can sell email hosting as part of your website, hosting or IT packages without having to manage the email infrastructure yourself.
              </p>

              <h4 className="font-bold text-sm text-[#0f1720] mb-3">You Can Offer:</h4>
              <ul className="space-y-2 mb-6">
                {YOU_CAN_OFFER.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={13} className="text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-sm text-[#0f1720] mb-3">Package Email With:</h4>
              <div className="flex flex-wrap gap-2">
                {BUNDLE_WITH.map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-semibold bg-gray-50 text-gray-600 border border-gray-200 px-2.5 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GROW YOUR EMAIL BUSINESS ══════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-[#0f1720]">Grow Your Email Business</h2>
            <p className="text-sm text-gray-500 mt-2 max-w-2xl mx-auto">
              Start with a small number of customers and increase your email accounts as your business grows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Start Small',
                desc: 'Begin with a few mailboxes and grow your email business at your own pace without large upfront costs.',
              },
              {
                icon: RefreshCw,
                title: 'Scale Easily',
                desc: 'Add new email accounts and domains as your customer base grows. Our infrastructure scales with you.',
              },
              {
                icon: Server,
                title: 'We Handle the Tech',
                desc: 'You focus on your customers and sales. We manage the servers, security updates and technical support.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E4002B]/30 hover:-translate-y-1 transition-all">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#E4002B]" />
                </div>
                <h3 className="font-extrabold text-sm text-[#0f1720] mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EMAIL SECURITY ════════════════════════════════════════════════ */}
      <section id="security" className="py-14 px-6 lg:px-10 bg-gradient-to-br from-[#0f1720] to-[#1a2736]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/40 bg-[#E4002B]/10 text-red-400 mb-4">
              <Shield size={12} /> Email Security
            </span>
            <h2 className="text-2xl font-black text-white">Keep Business Communication Protected</h2>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
              Our email hosting includes security features designed to reduce common email threats and keep your customers' communication safe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECURITY_FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#E4002B]/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E4002B]/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-red-400" />
                </div>
                <h3 className="font-extrabold text-sm text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ACCESS EMAIL ANYWHERE ═════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-black text-[#0f1720] mb-4">Access Email Anywhere</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Your customers can access their business email from virtually any device or email client —
                keeping them connected and professional wherever they are.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ACCESS_DEVICES.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                      <Icon size={13} className="text-[#E4002B]" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{label}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Mail size={13} className="text-[#E4002B]" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">Other email apps</span>
                </div>
              </div>
            </div>

            {/* Webmail login CTA */}
            <div
              className="rounded-2xl p-8 text-white"
              style={{ background: 'linear-gradient(135deg, #0f1720 0%, #1a3a6b 100%)' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E4002B]/10 flex items-center justify-center mb-5">
                <Laptop size={24} className="text-red-400" />
              </div>
              <h3 className="font-extrabold text-xl mb-3">Login to Webmail</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Access your business email from any web browser — no setup required.
                Available 24/7 from any location.
              </p>
              <a
                href="https://webmail.imagine.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                <Laptop size={15} /> Open Webmail <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ RESELLER SECTION (id for nav link) ═══════════════════════════ */}
      <section id="reseller" className="py-14 px-6 lg:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block text-xs font-bold px-3 py-1.5 rounded-full border border-[#E4002B]/30 text-red-600 bg-red-50 mb-4">
                  Reseller Programme
                </span>
                <h2 className="text-2xl font-black text-[#0f1720] mb-4">Need a Custom Reseller Solution?</h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  We can create an email hosting package based on your business requirements.
                  Whether you need a small reseller package or a larger enterprise email solution,
                  we can help you build a plan that fits your customers and your budget.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  <strong className="text-[#0f1720]">Start offering professional business email to your customers today.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${contactDetails.salesEmail}`}
                    className="inline-flex items-center gap-2 bg-[#E4002B] hover:bg-[#c40025] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
                  >
                    Contact Sales <ArrowRight size={14} />
                  </a>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="inline-flex items-center gap-2 border border-[#0f1720] text-[#0f1720] hover:bg-[#0f1720] hover:text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                  >
                    <Phone size={14} /> {contactDetails.displayPhone}
                  </a>
                </div>
              </div>

              {/* Contact for */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h4 className="font-bold text-sm text-[#0f1720] mb-4">Contact us for:</h4>
                <ul className="space-y-2.5 mb-6">
                  {[
                    'Custom reseller email packages',
                    'Bulk mailbox pricing',
                    'White-label email hosting',
                    'Email migration support',
                    'Enterprise email solutions',
                    'Custom storage limits',
                    'Technical onboarding assistance',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                      <Check size={13} className="text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">
                    📧 <a href={`mailto:${contactDetails.salesEmail}`} className="font-bold text-[#E4002B] hover:underline">{contactDetails.salesEmail}</a>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    📞 <a href={`tel:${contactDetails.phone}`} className="font-bold text-[#0f1720] hover:text-[#E4002B]">{contactDetails.displayPhone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
      <section className="py-12 px-6 lg:px-10 bg-[#E4002B]">
        <div className="max-w-4xl mx-auto text-center text-white space-y-4">
          <h2 className="text-2xl font-black">Start Offering Professional Email Today</h2>
          <p className="text-red-100 text-sm max-w-xl mx-auto">
            Give your customers email addresses linked to their own domain. Build trust, look professional, and grow your reseller business.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`mailto:${contactDetails.salesEmail}`}
              className="inline-flex items-center gap-2 bg-white text-[#E4002B] hover:bg-red-50 font-bold text-sm px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Get Started <ArrowRight size={14} />
            </a>
            <Link
              to="/services/hosting?tab=reseller"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              View Reseller Hosting <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
