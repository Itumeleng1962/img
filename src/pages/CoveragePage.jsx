import React from 'react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import CoverageBar from '../components/CoverageBar';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  MapPin,
  Wifi,
  Zap,
  ShieldCheck,
  ArrowRight,
  Signal,
} from 'lucide-react';

const networks = [
  {
    name: 'Vumatel',
    tag: 'Nationwide',
    speed: 'Up to 1 Gbps',
  },
  {
    name: 'Openserve',
    tag: 'Widest reach',
    speed: 'Up to 1 Gbps',
  },
  {
    name: 'Metro Fibre',
    tag: 'Metro areas',
    speed: 'Up to 500 Mbps',
  },
  { name: 'Frogfoot', tag: 'Cape & JHB', speed: 'Up to 1 Gbps' },
  { name: 'Evotel', tag: 'Suburban', speed: 'Up to 200 Mbps' },
  { name: 'DNATel', tag: 'East Rand', speed: 'Up to 500 Mbps' },
  { name: 'Netstream', tag: 'Community', speed: 'Up to 200 Mbps' },
  { name: 'MTN', tag: 'Coming soon', speed: 'Up to 1 Gbps' },
];

const regions = [
  {
    name: 'Gauteng',
    stats: '5,200+ suburbs live',
    cities: ['Sandton', 'Pretoria', 'Benoni', 'Midrand', 'Randburg'],
  },
  {
    name: 'Western Cape',
    stats: '2,100+ suburbs live',
    cities: ['Cape Town', 'Stellenbosch', 'Somerset West', 'Bellville'],
  },
  {
    name: 'KwaZulu-Natal',
    stats: '1,400+ suburbs live',
    cities: ['Durban', 'Umhlanga', 'Westville', 'Ballito'],
  },
  {
    name: 'Eastern Cape',
    stats: '650+ suburbs live',
    cities: ['Port Elizabeth', 'East London', 'Uitenhage'],
  },
];

const CoveragePage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Coverage Check"
        title="Is Imagine Fibre live at"
        highlight="your address?"
        description="We instantly search every major fibre network in South Africa to find the fastest, most reliable option for you — in under a second."
        image="https://images.unsplash.com/photo-1624965439943-09e0238644e2?w=1600&q=80"
        breadcrumb={[{ label: 'Coverage' }]}
      />

      <CoverageBar />

      {/* Networks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[#00B4D8] text-xs uppercase font-bold tracking-widest mb-3">
            Networks we support
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-[#0f1720] leading-tight max-w-2xl">
            Available on every major
            <span className="text-[#E4002B]"> fibre network.</span>
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {networks.map((n) => (
              <div
                key={n.name}
                className="rounded-2xl border border-gray-100 p-6 card-glow bg-white"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E4002B]/10 text-[#E4002B] flex items-center justify-center mb-4">
                  <Signal size={20} />
                </div>
                <div className="font-display font-extrabold text-xl text-[#0f1720]">
                  {n.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{n.tag}</div>
                <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-700">
                  <Zap size={14} className="text-[#E4002B]" /> {n.speed}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-[#E4002B] text-xs uppercase font-bold tracking-widest mb-3">
                National footprint
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#0f1720] leading-tight">
                Live in 9,300+ suburbs
                <br />
                <span className="text-[#E4002B]">across South Africa.</span>
              </h2>
              <p className="mt-4 text-gray-600">
                Whether you’re in a metro, a growing suburb or a coastal town
                — Imagine is either live or launching soon. Check your address
                to see what’s available.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { label: 'Suburbs live', value: '9,300+' },
                  { label: 'Networks', value: '8' },
                  { label: 'Uptime', value: '99.9%' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-white rounded-2xl border border-gray-100 p-4"
                  >
                    <div className="font-display text-2xl font-black text-[#E4002B]">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl bg-white border border-gray-100 p-6 card-glow"
                >
                  <div className="flex items-center gap-2 text-[#E4002B]">
                    <MapPin size={16} />
                    <span className="font-display font-extrabold text-lg text-[#0f1720]">
                      {r.name}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{r.stats}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {r.cities.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-[#0B1926] text-white p-10 md:p-14 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E4002B]/25 blur-3xl"
            />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#E4002B] font-bold text-xs uppercase tracking-widest mb-2">
                  <ShieldCheck size={14} /> Guaranteed coverage
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold">
                  Not covered yet? Add your address to the waiting list.
                </h3>
                <p className="text-white/70 mt-2 max-w-lg">
                  We’ll notify you the moment Imagine goes live in your area.
                </p>
              </div>
              <Button
                asChild
                className="h-12 px-6 rounded-full bg-[#E4002B] hover:bg-[#c40025] font-semibold"
              >
                <Link to="/contact">
                  Join waiting list <ArrowRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoveragePage;
