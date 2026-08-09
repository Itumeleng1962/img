import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
  Wifi,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';

// Mocked coverage database
const COVERAGE_DB = [
  {
    match: ['sandton', 'randburg', 'rosebank', 'sunninghill'],
    area: 'Sandton · Gauteng',
    networks: ['Vumatel', 'Openserve', 'Metro Fibre', 'Frogfoot'],
    speeds: '20 Mbps – 1 Gbps',
  },
  {
    match: ['cape town', 'stellenbosch', 'somerset', 'claremont'],
    area: 'Cape Town Metro',
    networks: ['Openserve', 'Frogfoot', 'Vumatel'],
    speeds: '25 Mbps – 1 Gbps',
  },
  {
    match: ['durban', 'umhlanga', 'westville', 'ballito'],
    area: 'eThekwini · KZN',
    networks: ['Openserve', 'Vumatel', 'Metro Fibre'],
    speeds: '20 Mbps – 500 Mbps',
  },
  {
    match: ['benoni', 'kempton', 'boksburg', 'edenvale', 'germiston'],
    area: 'East Rand · Gauteng',
    networks: ['Netstream', 'DNATel', 'Evotel', 'Openserve'],
    speeds: '20 Mbps – 1 Gbps',
  },
  {
    match: ['pretoria', 'centurion', 'midrand', 'menlyn'],
    area: 'Tshwane · Gauteng',
    networks: ['Openserve', 'Vumatel', 'Metro Fibre'],
    speeds: '25 Mbps – 1 Gbps',
  },
];

export const checkCoverage = (address) => {
  const q = address.toLowerCase().trim();
  if (!q) return null;
  const hit = COVERAGE_DB.find((c) => c.match.some((k) => q.includes(k)));
  if (hit) return { available: true, ...hit };
  // Fallback: pretend some addresses have coming-soon coverage
  if (q.length > 5) {
    return {
      available: false,
      area: 'Your area',
      networks: [],
      speeds: null,
      comingSoon: true,
    };
  }
  return null;
};

const CoverageBar = ({ compact = false }) => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | done
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const check = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      toast({
        title: 'Enter an address',
        description: 'Please enter your street, suburb or city.',
      });
      return;
    }
    setState('loading');
    setResult(null);
    setTimeout(() => {
      const r = checkCoverage(address);
      setResult(r);
      setState('done');
      // Persist to history
      const hist = JSON.parse(
        localStorage.getItem('imagine_coverage_history') || '[]'
      );
      hist.unshift({ address, result: r, ts: Date.now() });
      localStorage.setItem(
        'imagine_coverage_history',
        JSON.stringify(hist.slice(0, 10))
      );
    }, 1200);
  };

  return (
    <section id="coverage" className={`relative ${compact ? 'py-6' : 'pt-14 md:pt-20 pb-4'} z-10`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-red-500/10 p-6 md:p-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#E4002B] font-bold text-xs uppercase tracking-wider mb-2">
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
                  placeholder="e.g. Sandton, Benoni, Cape Town…"
                  className="pl-11 h-14 rounded-full border-gray-200 focus-visible:ring-2 focus-visible:ring-[#E4002B]/40"
                />
              </div>
              <Button
                type="submit"
                className="h-14 rounded-full px-7 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold"
              >
                {state === 'loading' ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  'Check Now'
                )}
              </Button>
            </form>
          </div>

          {state === 'done' && result?.available && (
            <div className="mt-5 rounded-2xl bg-green-50 border border-green-200 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={22} />
                <div className="flex-1">
                  <div className="font-display font-extrabold text-green-800 text-lg">
                    Great news — Imagine Fibre is available!
                  </div>
                  <div className="text-sm text-green-700">
                    Area detected: <strong>{result.area}</strong>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.networks.map((n) => (
                      <span
                        key={n}
                        className="px-3 py-1 rounded-full bg-white border border-green-300 text-green-800 text-xs font-semibold flex items-center gap-1.5"
                      >
                        <Wifi size={11} /> {n}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-green-700">
                    Speeds available: <strong>{result.speeds}</strong>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      asChild
                      className="rounded-full bg-[#E4002B] hover:bg-[#c40025] text-white h-11 px-5"
                    >
                      <Link to="/connect/home">
                        View packages <ArrowRight size={15} className="ml-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full h-11 px-5 border-green-300 text-green-800 hover:bg-green-100"
                    >
                      <Link to="/contact">Talk to sales</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {state === 'done' && result && !result.available && (
            <div className="mt-5 rounded-2xl bg-red-50 border border-red-200 p-5">
              <div className="flex items-start gap-3">
                <XCircle className="text-[#E4002B] mt-0.5 shrink-0" size={22} />
                <div>
                  <div className="font-display font-extrabold text-red-950 text-lg">
                    Not live in your area yet.
                  </div>
                  <div className="text-sm text-red-900">
                    Imagine is rolling out to new areas every week. Join our
                    waiting list to be first-in-line when we go live.
                  </div>
                  <Button
                    asChild
                    className="mt-4 rounded-full bg-[#E4002B] hover:bg-[#c40025] text-white h-11 px-5"
                  >
                    <Link to="/contact">Join the waiting list</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {state === 'done' && !result && (
            <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600">
              We couldn’t interpret that address. Try a suburb or city like
              “Sandton” or “Cape Town”.
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            Try:
            {['Sandton', 'Benoni', 'Cape Town', 'Umhlanga', 'Pretoria'].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => setAddress(s)}
                  className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-[#E4002B] hover:text-white transition-colors font-medium"
                >
                  {s}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageBar;
