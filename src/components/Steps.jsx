import React from 'react';
import { stepsToConnect } from '../mock';
import { MapPin, Package, Wrench, Sparkles, ArrowRight } from 'lucide-react';

const iconMap = { MapPin, Package, Wrench, Sparkles };

const Steps = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-imagine-cyan text-xs uppercase font-bold tracking-widest mb-3">
            How it works
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
            Getting Fibre is <span className="text-imagine-red">simple.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Four easy steps from checking coverage to smarter living. No hidden
            fees, no surprises.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsToConnect.map((s, idx) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.id}
                className="relative group bg-white rounded-2xl p-7 border border-gray-100 card-glow"
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-[#0f1720] text-white flex items-center justify-center font-display font-black text-lg group-hover:bg-imagine-red transition-colors">
                  {idx + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-imagine-red/10 text-imagine-red flex items-center justify-center mb-5">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f1720]">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {s.description}
                </p>
                {idx < stepsToConnect.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-6 text-gray-300 group-hover:text-imagine-red transition-colors"
                    size={22}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
