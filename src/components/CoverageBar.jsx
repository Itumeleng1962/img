import React, { useState } from 'react';
import { Search, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const CoverageBar = () => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | success

  const check = (e) => {
    e.preventDefault();
    if (!address.trim()) return;
    setState('loading');
    setTimeout(() => setState('success'), 1200);
  };

  return (
    <section id="coverage" className="relative pt-14 md:pt-20 pb-4 z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-red-500/10 p-6 md:p-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-imagine-red font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={14} /> Coverage Check
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#0f1720]">
                See if Imagine Fibre is live at your address.
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                We’ll instantly check all major networks in your area.
              </p>
            </div>
            <form onSubmit={check} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your street address…"
                  className="pl-11 h-14 rounded-full border-gray-200 focus-visible:ring-2 focus-visible:ring-imagine-red/40"
                />
              </div>
              <Button
                type="submit"
                className="h-14 rounded-full px-7 bg-imagine-red hover:bg-[#c40025] text-white font-semibold"
              >
                {state === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : state === 'success' ? (
                  <>
                    <CheckCircle2 size={18} className="mr-1" /> Available!
                  </>
                ) : (
                  'Check Now'
                )}
              </Button>
            </form>
          </div>
          {state === 'success' && (
            <div className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-4 flex items-start gap-3">
              <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
              <div>
                <div className="font-semibold text-green-800">
                  Great news — Imagine Fibre is available at your address!
                </div>
                <div className="text-sm text-green-700">
                  Networks live: Vumatel, Openserve, Metro Fibre. Speeds from 20
                  Mbps up to 1 Gbps.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoverageBar;
