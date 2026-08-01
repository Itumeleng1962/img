import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import {
  Phone,
  Clock,
  Repeat,
  ShieldCheck,
  Users,
  Globe2,
} from 'lucide-react';

const VoicePage = () => (
  <SubPageTemplate
    eyebrow="VoIP Voice"
    title="Cut the cord."
    highlight="Join the VoIP revolution."
    description="Per-second billing, number portability and full PBX solutions. Telephony that works when you do — for a fraction of legacy landline costs."
    image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
    breadcrumb={[
      { label: 'Services', to: '/services' },
      { label: 'VoIP Voice' },
    ]}
    intro={{
      heading: 'Modern voice for modern teams.',
      body:
        'Whether it’s a solo consultant or a 500-seat call centre — Imagine VoIP scales with you, saves you money and unlocks features Telkom never dreamed of.',
    }}
    features={[
      { icon: Clock, title: 'Per-second billing', body: 'Pay only for what you use. No rounding up. No monthly rentals.' },
      { icon: Repeat, title: 'Number portability', body: 'Keep your existing number. We handle the port — zero downtime.' },
      { icon: Phone, title: 'Cloud PBX', body: 'IVR, call groups, voicemail-to-email, call recording. All in a browser.' },
      { icon: ShieldCheck, title: 'Encrypted calls', body: 'TLS + SRTP encryption end-to-end. Your calls stay private.' },
      { icon: Users, title: 'Softphone & desk phones', body: 'Work anywhere on desktop, mobile or premium Yealink handsets.' },
      { icon: Globe2, title: 'International routes', body: 'Least-cost routing globally. Call the UK or USA for less than R0.50/min.' },
    ]}
    packages={[
      { price: 49, title: 'Extension', sub: 'Per user, per month', perks: ['Free SA-to-SA', 'Softphone included', 'Voicemail-to-email'] },
      { price: 199, title: 'Small Team', sub: '3–5 users', perks: ['Cloud PBX', 'IVR + Call groups', 'Free porting'], popular: true },
      { price: 499, title: 'Business PBX', sub: '10–25 users', perks: ['Call recording', 'CRM integrations', 'Priority support'] },
      { price: 1499, title: 'Enterprise', sub: '50+ users', perks: ['Multi-site', 'Dedicated SIP trunk', 'SLA-backed'] },
    ]}
  />
);

export default VoicePage;
