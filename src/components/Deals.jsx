import React from 'react';
import { Link } from 'react-router-dom';
import { featuredDeals } from '../mock';
import { Button } from './ui/button';
import {
  ArrowDown,
  ArrowUp,
  Infinity as InfinityIcon,
  Router,
  Wrench,
  Truck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const perkIconMap = {
  'Free WiFi Router': Router,
  'Free WiFi 6 Router': Router,
  'Free Installation': Wrench,
  'Free Delivery': Truck,
  'No Activation Fee': Sparkles,
  'Uncapped': InfinityIcon,
  'Priority Support': Sparkles,
};

const Deals = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-imagine-cyan text-xs uppercase font-bold tracking-widest mb-3">
              Featured Packages
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
              Fibre plans built for
              <span className="text-imagine-red"> real life.</span>
            </h2>
          </div>
          <Link
            to="/connect/home"
            className="inline-flex items-center gap-2 text-imagine-red font-semibold hover:gap-3 transition-all"
          >
            Explore all packages <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredDeals.map((d) => (
            <div
              key={d.id}
              className={`relative rounded-3xl overflow-hidden border transition-all card-glow ${
                d.popular
                  ? 'border-imagine-red bg-gradient-to-b from-red-50 to-white'
                  : 'border-gray-100 bg-white'
              }`}
            >
              {d.popular && (
                <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-imagine-red text-white px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {d.term}
                </div>
                <div className="flex items-end gap-1 mt-2">
                  <span className="text-sm font-semibold text-gray-500 mb-1">R</span>
                  <span className="font-display text-5xl font-black text-[#0f1720]">
                    {d.price}
                  </span>
                  <span className="text-sm text-gray-500 mb-1">/mo</span>
                </div>

                <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
                  <span className="flex items-center gap-1 text-green-600">
                    <ArrowDown size={16} /> {d.down}
                  </span>
                  <span className="flex items-center gap-1 text-imagine-cyan">
                    <ArrowUp size={16} /> {d.up}
                  </span>
                  <span className="text-gray-400">Mbps</span>
                </div>

                <div className="mt-5">
                  <div className="font-display text-lg font-bold text-[#0f1720]">
                    {d.title}
                  </div>
                  <div className="text-sm text-gray-500">{d.subtitle}</div>
                </div>

                <ul className="mt-5 space-y-2">
                  {d.perks.map((p) => {
                    const Icon = perkIconMap[p] || Sparkles;
                    return (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-6 h-6 rounded-md bg-imagine-red/10 text-imagine-red flex items-center justify-center">
                          <Icon size={13} />
                        </span>
                        {p}
                      </li>
                    );
                  })}
                </ul>

                <Button
                  asChild
                  className={`w-full mt-6 h-11 rounded-full font-semibold ${
                    d.popular
                      ? 'bg-imagine-red hover:bg-[#c40025] text-white'
                      : 'bg-[#0f1720] hover:bg-imagine-red text-white'
                  }`}
                >
                  <a href="https://ataglance.imagine.co.za/" target="_blank" rel="noopener noreferrer">Order on Client Portal</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
