import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Wifi, Phone, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    to: '/services/fibre',
    icon: Wifi,
    title: 'Ultra-Fast Fibre',
    body: 'Uncapped, unshaped Fibre-to-the-Home and Business — up to 25× faster than ADSL.',
    image:
      'https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=1200&q=80',
  },
  {
    to: '/services/voice',
    icon: Phone,
    title: 'VoIP Voice',
    body: 'Per-second billing, number portability and cloud PBX for teams of any size.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
  },
  {
    to: '/services/support',
    icon: Wrench,
    title: 'IT Support',
    body: '24/7 help-desk and on-site engineers keeping your systems humming.',
    image:
      'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1200&q=80',
  },
];

const ServicesPage = () => (
  <Layout>
    <PageHero
      eyebrow="Services"
      title="Everything you need to"
      highlight="stay connected."
      description="Three services. One trusted partner. Fibre, Voice and IT Support — built to work seamlessly together."
      image="https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?w=1600&q=80"
      breadcrumb={[{ label: 'Services' }]}
    />
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100 card-glow"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1720]/60 to-transparent" />
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-[#E4002B] text-white flex items-center justify-center shadow-lg">
                  <Icon size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold text-[#0f1720]">
                  {s.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm">{s.body}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#E4002B] font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
