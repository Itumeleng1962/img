import React from 'react';
import { whyImagine, networks } from '../mock';
import {
  CalendarCheck,
  ShieldCheck,
  Lightbulb,
  Globe2,
} from 'lucide-react';

const iconMap = { CalendarCheck, ShieldCheck, Lightbulb, Globe2 };

const WhyImagine = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        {/* Left: heading + image */}
        <div className="lg:col-span-5">
          <div className="text-imagine-red text-xs uppercase font-bold tracking-widest mb-3">
            Why Imagine
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
            Connecting people for
            <span className="text-imagine-red"> smarter living.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Imagine IPS is not your average ISP. A long history of premium
            services, personable support and constant innovation — all designed
            to keep you connected when and where you need it.
          </p>

          <div className="mt-8 relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1610128833542-9e1d6c6133cb?w=900&q=80"
              alt="Imagine technician installing fibre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-imagine-red/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-imagine-red text-white flex items-center justify-center font-display font-black">
                24/7
              </div>
              <div>
                <div className="font-display font-extrabold text-[#0f1720]">
                  Trusted expert support
                </div>
                <div className="text-xs text-gray-500">
                  Real humans. Real fixes. Always on.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: reasons + networks */}
        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-5">
            {whyImagine.map((w) => {
              const Icon = iconMap[w.icon];
              return (
                <div
                  key={w.id}
                  className="bg-white rounded-2xl p-6 border border-gray-100 card-glow"
                >
                  <div className="w-12 h-12 rounded-xl bg-imagine-cyan/10 text-imagine-cyan flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0f1720]">
                    {w.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {w.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-[#0f1720] text-white rounded-3xl p-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-imagine-red/30 blur-3xl"
            />
            <div className="relative">
              <div className="text-imagine-red text-xs uppercase font-bold tracking-widest mb-2">
                National Networks
              </div>
              <h3 className="font-display text-2xl font-extrabold">
                Available on every major fibre network.
              </h3>
              <div className="mt-6 overflow-hidden relative">
                <div className="flex gap-3 animate-marquee whitespace-nowrap w-max">
                  {[...networks, ...networks].map((n, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-semibold"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImagine;
