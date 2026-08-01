import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { Home, Building2, Landmark, ArrowRight } from 'lucide-react';
import { connectOptions } from '../mock';

const iconMap = { Home, Building2, Landmark };

const ConnectPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Connect"
        title="Pick a connection made for"
        highlight="your world."
        description="From cosy homes to bustling businesses and entire estates — Imagine has a fibre solution engineered for you."
        image="https://images.unsplash.com/photo-1750712263185-edde9f359e33?w=1600&q=80"
        breadcrumb={[{ label: 'Connect' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {connectOptions.map((c) => {
            const Icon = iconMap[c.icon];
            const to =
              c.id === 'home'
                ? '/connect/home'
                : c.id === 'business'
                ? '/connect/business'
                : '/connect/estate';
            return (
              <Link
                key={c.id}
                to={to}
                className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 card-glow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1720]/70 via-transparent to-transparent" />
                </div>
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-[#E4002B] text-white flex items-center justify-center shadow-lg">
                  <Icon size={20} />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-extrabold text-[#0f1720]">
                    {c.title}
                  </h3>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                    {c.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[#E4002B] font-semibold text-sm group-hover:gap-3 transition-all">
                    {c.cta} <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ConnectPage;
