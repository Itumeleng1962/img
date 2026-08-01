import React from 'react';
import { Link } from 'react-router-dom';
import { connectOptions } from '../mock';
import { Home, Building2, Landmark, ArrowRight } from 'lucide-react';

const iconMap = { Home, Building2, Landmark };
const hrefMap = {
  home: '/connect/home',
  business: '/connect/business',
  estate: '/connect/estate',
};

const ConnectOptions = () => {
  return (
    <section id="connect" className="py-20 md:py-28 bg-[#0f1720] text-white relative overflow-hidden">
      {/* decorative gradient corner */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-imagine-red/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-imagine-cyan/20 blur-3xl"
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-imagine-red text-xs uppercase font-bold tracking-widest mb-3">
              Choose your world
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight max-w-2xl">
              A connection made for every kind of
              <span className="text-imagine-red"> life.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-md">
            From cosy homes to bustling businesses and entire estates — Imagine
            has a fibre solution engineered for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {connectOptions.map((c) => {
            const Icon = iconMap[c.icon];
            return (
              <Link
                key={c.id}
                to={hrefMap[c.id]}
                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-imagine-red/60 transition-all duration-500 card-glow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1720] via-[#0f1720]/40 to-transparent" />
                </div>
                <div className="absolute top-5 left-5 w-11 h-11 rounded-xl bg-imagine-red flex items-center justify-center shadow-lg">
                  <Icon size={20} />
                </div>
                <div className="p-6 relative">
                  <h3 className="font-display text-2xl font-extrabold">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {c.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-imagine-red font-semibold text-sm group-hover:gap-3 transition-all">
                    {c.cta} <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConnectOptions;
