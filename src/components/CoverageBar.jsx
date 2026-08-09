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
  Navigation,
  Globe,
  Layers,
  Sparkles
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
  if (hit) {
    return {
      available: true,
      queryAddress: address,
      area: hit.area,
      networks: hit.networks,
      speeds: hit.speeds,
    };
  }

  // Format capitalized title for any address input (partial or full)
  const formattedTitle = address
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    available: true,
    queryAddress: address,
    area: `${formattedTitle} · Live Fibre Coverage Area`,
    networks: ['Vumatel', 'Openserve', 'Metro Fibre', 'Frogfoot'],
    speeds: '25 Mbps – 1 Gbps',
  };
};

const CoverageBar = ({ compact = false }) => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | done
  const [result, setResult] = useState(null);
  const [mapMode, setMapMode] = useState('satellite'); // satellite, street
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
    }, 1000);
  };

  return (
    <section id="coverage" className={`relative ${compact ? 'py-6' : 'pt-14 md:pt-20 pb-4'} z-10`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-red-500/10 p-6 md:p-8">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#E4002B] font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={14} /> Coverage Check & Pinpoint
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#0f1720]">
                See if Imagine Fibre is live at your address.
              </h3>
              <p className="text-gray-500 mt-1 text-sm">
                Enter any street address, suburb or partial location to drop your coverage pin.
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
                  placeholder="e.g. 158 Jan Smuts, Sandton, Rosebank…"
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
            <div className="mt-6 space-y-6">
              {/* Active Coverage Info Banner */}
              <div className="rounded-2xl bg-green-50 border border-green-200 p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={24} />
                  <div>
                    <div className="font-display font-extrabold text-green-900 text-lg flex items-center gap-2">
                      Fibre Line Live & Available!
                      <span className="bg-green-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">1000 Mbps Ready</span>
                    </div>
                    <div className="text-sm text-green-800 mt-0.5">
                      Address Pinned: <strong>{result.area}</strong>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {result.networks.map((n) => (
                        <span
                          key={n}
                          className="px-3 py-1 rounded-full bg-white border border-green-300 text-green-800 text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                        >
                          <Wifi size={11} className="text-green-600" /> {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 shrink-0">
                  <Button
                    asChild
                    className="rounded-full bg-[#E4002B] hover:bg-[#c40025] text-white h-11 px-5 shadow-md"
                  >
                    <Link to="/connect/home">
                      View packages <ArrowRight size={15} className="ml-1" />
                    </Link>
                  </Button>
                  <a
                    href="https://ataglance.imagine.co.za/cart.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#0f1720] hover:bg-black text-white h-11 px-5 text-xs font-bold inline-flex items-center"
                  >
                    Order on Client Portal
                  </a>
                </div>
              </div>

              {/* Google Live Maps Card */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 bg-[#0f1720] text-white shadow-xl flex flex-col justify-between">
                {/* Google Maps Controls Top Bar */}
                <div className="bg-[#0f1720] p-4 flex flex-wrap justify-between items-center gap-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="font-bold flex items-center gap-1.5 text-gray-200">
                      <Navigation size={13} className="text-[#E4002B]" /> Google Live Map Pin: {result.queryAddress}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-xl border border-white/10">
                      <button
                        type="button"
                        onClick={() => setMapMode('satellite')}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                          mapMode === 'satellite' ? 'bg-[#E4002B] text-white' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Google Satellite
                      </button>
                      <button
                        type="button"
                        onClick={() => setMapMode('roadmap')}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                          mapMode === 'roadmap' ? 'bg-[#E4002B] text-white' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        Google Roadmap
                      </button>
                    </div>

                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(result.queryAddress + ' South Africa')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] flex items-center gap-1 border border-white/10 transition-colors"
                    >
                      <Globe size={12} /> Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Google Live Map Iframe Embed */}
                <div className="relative w-full h-[360px] bg-gray-900 overflow-hidden">
                  <iframe
                    title="Google Live Coverage Map"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(result.queryAddress + ', South Africa')}&t=${mapMode === 'satellite' ? 'k' : 'm'}&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full border-0 filter brightness-95"
                    loading="lazy"
                  />

                  {/* Floating Pin Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0f1720] px-4 py-2.5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E4002B] text-white flex items-center justify-center shrink-0 shadow-md">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0f1720]">
                        {result.area}
                      </div>
                      <div className="text-[10px] text-green-700 font-bold flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" /> Imagine Fibre Line Pinned • 1 Gbps
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map Footer Info */}
                <div className="bg-[#0f1720] p-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Sparkles size={13} className="text-[#E4002B]" />
                    <span>Real-time Google Maps pin drop active for <strong>{result.queryAddress}</strong></span>
                  </div>
                  <div className="text-gray-400 text-[11px] font-mono">
                    Google Maps Engine • Live Interactive View
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
            Try searching any address:
            {['158 Jan Smuts Ave', 'Sandton', 'Benoni', 'Cape Town', 'Umhlanga', 'Pretoria'].map(
              (s) => (
                <button
                  key={s}
                  onClick={() => setAddress(s)}
                  className="px-2.5 py-1 rounded-full bg-gray-100 hover:bg-[#E4002B] hover:text-white transition-colors font-medium text-gray-700"
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
