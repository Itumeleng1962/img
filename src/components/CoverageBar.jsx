import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Loader2,
  CheckCircle2,
  ArrowRight,
  Navigation,
  Globe,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronUp,
  Zap,
  X,
  AlertCircle,
} from 'lucide-react';
import { useToast } from '../hooks/use-toast';

/* ─── Network brand colors ─────────────────────────────────────────────────── */
const NETWORK_BRANDS = {
  Vumatel:       { bg: '#FF6600', text: '#fff', light: '#FFF3EB' },
  Openserve:     { bg: '#005BAC', text: '#fff', light: '#EBF3FF' },
  'Metro Fibre': { bg: '#6D28D9', text: '#fff', light: '#F3EEFF' },
  Frogfoot:      { bg: '#10B981', text: '#fff', light: '#EDFDF8' },
  Netstream:     { bg: '#0EA5E9', text: '#fff', light: '#E0F5FF' },
  DNATel:        { bg: '#F59E0B', text: '#fff', light: '#FFFBEB' },
  Evotel:        { bg: '#EC4899', text: '#fff', light: '#FFF0F8' },
  MTN:           { bg: '#FFD700', text: '#0f1720', light: '#FFFDE7' },
};

/* ─── Coverage database ─────────────────────────────────────────────────────  */
const COVERAGE_DB = [
  {
    match: ['sandton', 'randburg', 'rosebank', 'sunninghill', 'morningside', 'rivonia', 'alice lane', 'melrose', 'bryanston'],
    area: 'Sandton · Gauteng',
    networks: ['Vumatel', 'Openserve', 'Metro Fibre', 'Frogfoot'],
    speeds: '20 Mbps – 1 Gbps',
  },
  {
    match: ['cape town', 'stellenbosch', 'somerset', 'claremont', 'kloof', 'waterfront', 'sea point', 'green point', 'gardens'],
    area: 'Cape Town Metro',
    networks: ['Openserve', 'Frogfoot', 'Vumatel'],
    speeds: '25 Mbps – 1 Gbps',
  },
  {
    match: ['durban', 'umhlanga', 'westville', 'ballito', 'florida road', 'berea', 'musgrave'],
    area: 'eThekwini · KZN',
    networks: ['Openserve', 'Vumatel', 'Metro Fibre'],
    speeds: '20 Mbps – 500 Mbps',
  },
  {
    match: ['benoni', 'kempton', 'boksburg', 'edenvale', 'germiston', 'great north', 'atlas road'],
    area: 'East Rand · Gauteng',
    networks: ['Netstream', 'DNATel', 'Evotel', 'Openserve'],
    speeds: '20 Mbps – 1 Gbps',
  },
  {
    match: ['pretoria', 'centurion', 'midrand', 'menlyn', 'lynnwood', 'waterfall', 'hatfield'],
    area: 'Tshwane · Gauteng',
    networks: ['Openserve', 'Vumatel', 'Metro Fibre'],
    speeds: '25 Mbps – 1 Gbps',
  },
  {
    match: ['johannesburg', 'braamfontein', 'jan smuts', 'stanley', 'melville', 'fourways'],
    area: 'Johannesburg Central · Gauteng',
    networks: ['Vumatel', 'Openserve', 'Metro Fibre'],
    speeds: '20 Mbps – 1 Gbps',
  },
];

/* ─── Address suggestion bank ──────────────────────────────────────────────── */
const ADDRESS_BANK = [
  { main: '158 Jan Smuts Ave', sub: 'Rosebank, Johannesburg, Gauteng', icon: '🏢' },
  { main: 'Sandton City Drive', sub: 'Sandton, Johannesburg, Gauteng', icon: '🏙️' },
  { main: 'Rosebank Mall, Bath Ave', sub: 'Rosebank, Johannesburg', icon: '🏬' },
  { main: '44 Stanley Ave', sub: 'Braamfontein, Johannesburg', icon: '🎨' },
  { main: 'Alice Lane, Sandton Central', sub: 'Sandton, Johannesburg, Gauteng', icon: '🏢' },
  { main: 'Rivonia Road', sub: 'Morningside, Sandton, Gauteng', icon: '🛣️' },
  { main: 'Main Road, Claremont', sub: 'Claremont, Cape Town, Western Cape', icon: '🏘️' },
  { main: 'Kloof Street', sub: 'Gardens, Cape Town, Western Cape', icon: '☕' },
  { main: 'Victoria & Alfred Waterfront', sub: 'Cape Town, Western Cape', icon: '⛵' },
  { main: 'Somerset West Boulevard', sub: 'Somerset West, Cape Town', icon: '🏡' },
  { main: 'Umhlanga Rocks Drive', sub: 'Umhlanga, Durban, KZN', icon: '🌊' },
  { main: 'Florida Road', sub: 'Morningside, Durban, KZN', icon: '🍽️' },
  { main: 'Great North Road', sub: 'Benoni, East Rand, Gauteng', icon: '🛣️' },
  { main: 'Atlas Road', sub: 'Boksburg & Kempton Park, Gauteng', icon: '🏭' },
  { main: 'Lynnwood Road', sub: 'Menlyn, Pretoria, Tshwane', icon: '🎓' },
  { main: 'Centurion Boulevard', sub: 'Centurion, Pretoria, Gauteng', icon: '🏢' },
  { main: 'Midrand Corporate Park', sub: 'Midrand, Gauteng', icon: '🏗️' },
  { main: 'Sunninghill Office Park', sub: 'Sunninghill, Sandton, Gauteng', icon: '🌳' },
  { main: 'Waterfall City Parkway', sub: 'Waterfall Estate, Midrand', icon: '🏙️' },
  { main: 'Melrose Arch Piazza', sub: 'Melrose, Johannesburg', icon: '🎭' },
  { main: 'Fourways Mall Approach', sub: 'Fourways, Johannesburg, Gauteng', icon: '🏬' },
  { main: 'Hatfield Square', sub: 'Hatfield, Pretoria, Tshwane', icon: '🎓' },
];

/* ─── Package tiers (same for every network) ──────────────────────────────── */
const PACKAGE_TIERS = [
  {
    speed: '20/10', price: 449, label: 'Essential', popular: false,
    perks: ['Uncapped & Unshaped', 'Month-to-Month', 'Free Router', 'Low Latency Gaming', 'Up to 4 Devices'],
  },
  {
    speed: '50/25', price: 599, label: 'Standard', popular: true,
    perks: ['Uncapped & Unshaped', 'Month-to-Month', 'Free Installation', '4K Streaming', 'Up to 8 Devices', 'Priority Routing'],
  },
  {
    speed: '100/50', price: 799, label: 'Pro', popular: false,
    perks: ['Uncapped & Unshaped', 'Month-to-Month', 'Free Router', 'Priority Support', 'Proactive Monitoring', 'Up to 15 Devices'],
  },
  {
    speed: '200/200', price: 1199, label: 'Ultra', popular: false,
    perks: ['Symmetrical Speeds', 'Month-to-Month', 'Dedicated Support', '24/7 Service Desk', 'Premium Router', 'Unlimited Devices', 'Static IP Option'],
  },
];

/* ─── Provider logo/branding lookup ─────────────────────────────────────────  */
const PROVIDER_META = {
  Vumatel:       { logo: '/logos/vumatel.png',   bg: '#FF6600', light: '#FFF3EB', text: '#FF6600', tagline: 'Nationwide · Up to 1 Gbps' },
  Openserve:     { logo: '/logos/openserve.png', bg: '#005BAC', light: '#EBF3FF', text: '#005BAC', tagline: 'Widest Reach · Up to 1 Gbps' },
  'Metro Fibre': { logo: '/logos/metrofibre.png',bg: '#6D28D9', light: '#F3EEFF', text: '#6D28D9', tagline: 'Metro Areas · Up to 500 Mbps' },
  Frogfoot:      { logo: '/logos/frogfoot.png',  bg: '#10B981', light: '#EDFDF8', text: '#10B981', tagline: 'Cape & JHB · Up to 1 Gbps' },
  Netstream:     { logo: '/logos/netstream.png', bg: '#0EA5E9', light: '#E0F5FF', text: '#0EA5E9', tagline: 'Community Networks · Up to 200 Mbps' },
  DNATel:        { logo: null, bg: '#F59E0B', light: '#FFFBEB', text: '#F59E0B', tagline: 'East Rand · Up to 500 Mbps',  abbr: 'DNA' },
  Evotel:        { logo: null, bg: '#EC4899', light: '#FFF0F8', text: '#EC4899', tagline: 'Suburban · Up to 200 Mbps',  abbr: 'EVO' },
  MTN:           { logo: null, bg: '#1a1a1a',  light: '#FFFDE7', text: '#FFD700', tagline: 'Coming Soon · Up to 1 Gbps', abbr: 'MTN', comingSoon: true },
};


/* ─── Coverage lookup ───────────────────────────────────────────────────────  */
export const checkCoverage = (address) => {
  const q = address.toLowerCase().trim();
  if (!q) return null;
  const hit = COVERAGE_DB.find((c) => c.match.some((k) => q.includes(k)));
  if (hit) return { available: true, queryAddress: address, ...hit };
  const formattedTitle = address.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return {
    available: true,
    queryAddress: address,
    area: `${formattedTitle} · Fibre Coverage Area`,
    networks: ['Vumatel', 'Openserve', 'Metro Fibre', 'Frogfoot'],
    speeds: '25 Mbps – 1 Gbps',
  };
};

/* ─── Nominatim geocoder (free, no API key) ────────────────────────────────  */
const geocodeAddress = async (address) => {
  try {
    const encoded = encodeURIComponent(address + ', South Africa');
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1&countrycodes=za&addressdetails=1`;
    const res = await fetch(url, {
      headers: { 'Accept-Language': 'en', 'User-Agent': 'ImagineFibreCoverageCheck/1.0' },
    });
    const data = await res.json();
    if (data && data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), displayName: data[0].display_name };
    }
  } catch (_) {}
  return null;
};

/* ─── Nominatim address search (live lookup as you type) ──────────────────── */
const searchAddresses = async (query) => {
  if (!query || query.trim().length < 3) return [];
  try {
    const encoded = encodeURIComponent(query + ', South Africa');
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=6&countrycodes=za&addressdetails=1`;
    const res = await fetch(url, {
      headers: { 'Accept-Language': 'en', 'User-Agent': 'ImagineFibreCoverageCheck/1.0' },
    });
    const data = await res.json();
    return data.map((item) => ({
      main: item.display_name.split(',')[0],
      sub: item.display_name.split(',').slice(1, 4).join(',').trim(),
      full: item.display_name,
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lon),
      icon: item.type === 'residential' ? '🏡'
           : item.type === 'commercial' ? '🏢'
           : item.class === 'highway' ? '🛣️'
           : item.class === 'amenity' ? '🏬'
           : '📍',
    }));
  } catch (_) {
    return [];
  }
};

/* ═══════════════════════════════════════════════════════════════════════════ */
const CoverageBar = ({ compact = false }) => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState('idle');
  const [result, setResult] = useState(null);
  const [coords, setCoords] = useState(null);        // { lat, lng, displayName }
  const [geoState, setGeoState] = useState('idle');  // idle | loading | done | error
  const [mapMode, setMapMode] = useState('satellite');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [sugLoading, setSugLoading] = useState(false);
  const [showPackages, setShowPackages] = useState(false);
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const suggestTimer = useRef(null);
  const { toast } = useToast();

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        inputRef.current && !inputRef.current.contains(e.target)
      ) setShowSuggestions(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Debounced Nominatim search as user types */
  const handleInputChange = (e) => {
    const val = e.target.value;
    setAddress(val);
    setShowSuggestions(true);

    clearTimeout(suggestTimer.current);
    if (val.trim().length < 2) {
      setSuggestions(ADDRESS_BANK.slice(0, 6).map(s => ({ ...s, fromBank: true })));
      return;
    }

    // Show static bank matches immediately
    const bankMatches = ADDRESS_BANK.filter(
      s => s.main.toLowerCase().includes(val.toLowerCase()) || s.sub.toLowerCase().includes(val.toLowerCase())
    );
    if (bankMatches.length > 0) setSuggestions(bankMatches.slice(0, 6).map(s => ({ ...s, fromBank: true })));

    // Then fire Nominatim after 400ms debounce
    suggestTimer.current = setTimeout(async () => {
      setSugLoading(true);
      const live = await searchAddresses(val);
      if (live.length > 0) {
        setSuggestions(live);
      } else if (bankMatches.length === 0) {
        // Fallback dynamic
        const cap = val.charAt(0).toUpperCase() + val.slice(1);
        setSuggestions([
          { main: `${cap} Street`, sub: 'Johannesburg, Gauteng', icon: '📍', fromBank: true },
          { main: `${cap} Avenue`, sub: 'Sandton, Gauteng', icon: '📍', fromBank: true },
          { main: `${cap} Road`, sub: 'Cape Town, Western Cape', icon: '📍', fromBank: true },
          { main: `${cap} Drive`, sub: 'Pretoria, Tshwane', icon: '📍', fromBank: true },
        ]);
      }
      setSugLoading(false);
    }, 400);
  };

  /* Run the full search + geocode */
  const runSearch = useCallback(async (searchQuery, preCoords = null) => {
    const q = (searchQuery || address).trim();
    if (!q) {
      toast({ title: 'Enter an address', description: 'Type your street, suburb or city.' });
      return;
    }
    setState('loading');
    setGeoState('loading');
    setResult(null);
    setCoords(null);
    setShowPackages(false);
    setSelectedNetwork(null);

    // Coverage check (instant)
    const r = checkCoverage(q);
    setResult(r);
    setState('done');

    // Persist history
    const hist = JSON.parse(localStorage.getItem('imagine_coverage_history') || '[]');
    hist.unshift({ address: q, result: r, ts: Date.now() });
    localStorage.setItem('imagine_coverage_history', JSON.stringify(hist.slice(0, 10)));

    // Geocode for exact pin
    if (preCoords) {
      setCoords(preCoords);
      setGeoState('done');
    } else {
      const geo = await geocodeAddress(q);
      if (geo) {
        setCoords(geo);
        setGeoState('done');
      } else {
        setGeoState('error');
      }
    }
  }, [address, toast]);

  const handleSelectSuggestion = (sug) => {
    const fullText = sug.full || `${sug.main}, ${sug.sub}`;
    setAddress(fullText);
    setShowSuggestions(false);
    const preCoords = sug.lat && sug.lng ? { lat: sug.lat, lng: sug.lng, displayName: fullText } : null;
    runSearch(fullText, preCoords);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    runSearch(address);
  };

  /* On focus - show bank suggestions */
  const handleFocus = () => {
    if (suggestions.length === 0) setSuggestions(ADDRESS_BANK.slice(0, 6).map(s => ({ ...s, fromBank: true })));
    setShowSuggestions(true);
  };

  /* Map src: use exact coordinates when available, else text search */
  const getMapSrc = () => {
    const t = mapMode === 'satellite' ? 'k' : 'm';
    if (coords) {
      // Exact lat/lng pin — most precise method
      return `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&t=${t}&z=17&ie=UTF8&iwloc=near&output=embed`;
    }
    return `https://maps.google.com/maps?q=${encodeURIComponent((result?.queryAddress || '') + ', South Africa')}&t=${t}&z=15&ie=UTF8&output=embed`;
  };

  const getGoogleMapsLink = () => {
    if (coords) return `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=17`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((result?.queryAddress || '') + ' South Africa')}`;
  };

  return (
    <section id="coverage" className={`relative ${compact ? 'py-6' : 'pt-14 md:pt-20 pb-4'} z-10`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-red-500/10 p-6 md:p-8">

          {/* ── Header ── */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 items-center mb-6">
            <div>
              <div className="flex items-center gap-2 text-[#E4002B] font-bold text-xs uppercase tracking-wider mb-2">
                <MapPin size={14} /> Live Coverage & Exact Map Pin
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-[#0f1720]">
                See if Imagine Fibre is live at your address.
              </h3>
            </div>

            {/* ── Search form ── */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" />
                <input
                  ref={inputRef}
                  value={address}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  placeholder="Type any street, suburb or full address…"
                  className="pl-11 pr-10 h-14 w-full rounded-full border border-gray-200 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#E4002B]/40 focus:border-[#E4002B] transition-all bg-gray-50"
                />
                {address && (
                  <button type="button"
                    onClick={() => { setAddress(''); setResult(null); setState('idle'); setCoords(null); setShowSuggestions(false); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10">
                    <X size={16} />
                  </button>
                )}

                {/* ── Suggestions dropdown ── */}
                {showSuggestions && (
                  <div ref={dropdownRef}
                    className="absolute left-0 right-0 top-[62px] bg-white border border-gray-200 rounded-2xl shadow-2xl z-[999]">

                    <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex justify-between items-center rounded-t-2xl">
                      <span className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400 flex items-center gap-1.5">
                        <MapPin size={10} />
                        {sugLoading ? 'Searching addresses…' : address.length > 1 ? 'Live Results' : 'Popular Areas'}
                      </span>
                      <span className="text-[10px] font-bold text-[#E4002B]">Fibre Coverage Live ✓</span>
                    </div>

                    {sugLoading && (
                      <div className="flex items-center gap-2 px-4 py-3 text-xs text-gray-500">
                        <Loader2 size={13} className="animate-spin text-[#E4002B]" /> Searching exact addresses…
                      </div>
                    )}

                    {suggestions.map((sug, idx) => (
                      <button key={idx} type="button"
                        onMouseDown={(e) => { e.preventDefault(); handleSelectSuggestion(sug); }}
                        className="w-full flex items-start gap-3 px-4 py-3 hover:bg-red-50 transition-colors text-left border-b border-gray-50 last:border-none group">
                        <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#E4002B] flex items-center justify-center text-base shrink-0 transition-colors mt-0.5">
                          <span className="group-hover:hidden">{sug.icon || '📍'}</span>
                          <MapPin size={15} className="hidden group-hover:block text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-[#E4002B] transition-colors">
                            {sug.main}
                          </div>
                          <div className="text-xs text-gray-400 leading-relaxed mt-0.5">{sug.full || sug.sub}</div>
                        </div>
                        <div className="flex flex-col gap-1 shrink-0 mt-0.5">
                          {sug.lat && (
                            <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                              Exact Pin
                            </span>
                          )}
                          <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
                            Live
                          </span>
                        </div>
                      </button>
                    ))}

                    <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 text-[10px] text-gray-400 flex items-center gap-1.5 rounded-b-2xl">
                      <Clock size={10} /> Powered by OpenStreetMap geocoding · Imagine IPS Coverage Engine
                    </div>
                  </div>
                )}
              </div>

              <button type="submit"
                className="h-14 rounded-full px-7 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shrink-0 shadow-md">
                {state === 'loading' ? <Loader2 size={18} className="animate-spin" /> : 'Check Coverage'}
              </button>
            </form>
          </div>




          {/* ── Results ── */}
          {state === 'done' && result?.available && (
            <div className="mt-2 space-y-5">

              {/* Success banner */}
              <div className="rounded-2xl bg-green-50 border border-green-200 p-5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" size={24} />
                    <div>
                      <div className="font-extrabold text-green-900 text-base flex flex-wrap items-center gap-2">
                        Imagine Fibre Available!
                        <span className="bg-green-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full">1 Gbps Ready</span>
                      </div>
                      <div className="text-sm text-green-800 mt-0.5">📍 <strong>{result.area}</strong></div>
                      <div className="text-xs text-green-700 mt-1">
                        Speeds: <strong>{result.speeds}</strong>
                        {coords && (
                          <span className="ml-3 text-blue-700 font-mono">
                            📌 {coords.lat.toFixed(5)}°, {coords.lng.toFixed(5)}°
                          </span>
                        )}
                      </div>

                      {/* Network badges with brand colors */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {result.networks.map((n) => {
                          const brand = NETWORK_BRANDS[n] || { bg: '#6b7280', text: '#fff', light: '#f3f4f6' };
                          return (
                            <span key={n}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border"
                              style={{ background: brand.light, color: brand.bg, borderColor: brand.bg + '40' }}>
                              <span className="w-2 h-2 rounded-full" style={{ background: brand.bg }} />
                              {n}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button onClick={() => {
                        const next = !showPackages;
                        setShowPackages(next);
                        if (next && !selectedNetwork && result?.networks?.length > 0) {
                          setSelectedNetwork(result.networks[0]);
                        }
                      }}
                      className="inline-flex items-center gap-2 rounded-full bg-[#E4002B] hover:bg-[#c40025] text-white h-11 px-5 text-sm font-bold transition-colors shadow-md">
                      View Packages {showPackages ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    <a href="https://ataglance.imagine.co.za/cart.php" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0f1720] hover:bg-black text-white h-11 px-5 text-xs font-bold transition-colors">
                      Order Now <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* ── Packages with network tab selector ── */}
                {showPackages && (() => {
                  const activeMeta = PROVIDER_META[selectedNetwork] || {
                    bg: '#6b7280', light: '#f3f4f6', text: '#6b7280',
                    tagline: 'Fibre Network', abbr: (selectedNetwork || '???').slice(0, 3).toUpperCase(),
                  };
                  return (
                    <div className="mt-5 pt-5 border-t border-green-200">

                      {/* ── Network tab strip ── */}
                      <div className="mb-5">
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 mb-3">
                          Select a network to view packages
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {result.networks.map((networkName) => {
                            const m = PROVIDER_META[networkName] || { bg: '#6b7280', light: '#f3f4f6', logo: null, abbr: networkName.slice(0,3).toUpperCase() };
                            const isActive = selectedNetwork === networkName;
                            return (
                              <button
                                key={networkName}
                                type="button"
                                onClick={() => setSelectedNetwork(networkName)}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-2xl border-2 transition-all duration-200 cursor-pointer"
                                style={{
                                  borderColor: isActive ? m.bg : m.bg + '30',
                                  background: isActive
                                    ? `linear-gradient(135deg, ${m.bg}18 0%, ${m.light} 100%)`
                                    : 'white',
                                  boxShadow: isActive ? `0 0 0 3px ${m.bg}25` : 'none',
                                  transform: isActive ? 'translateY(-1px)' : 'none',
                                }}>
                                {/* Logo thumbnail or abbr */}
                                <div className="w-14 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0"
                                  style={{ background: m.logo ? 'white' : m.bg, border: `1px solid ${m.bg}20` }}>
                                  {m.logo ? (
                                    <img src={m.logo} alt={networkName} className="w-full h-full object-contain p-0.5" />
                                  ) : (
                                    <span className="text-[10px] font-black tracking-tight" style={{ color: m.text || '#fff' }}>
                                      {m.abbr || networkName}
                                    </span>
                                  )}
                                </div>
                                <div className="text-left">
                                  <div className="text-xs font-extrabold leading-tight" style={{ color: isActive ? m.bg : '#374151' }}>
                                    {networkName}
                                  </div>
                                  {isActive && (
                                    <div className="flex items-center gap-1 mt-0.5">
                                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: m.comingSoon ? '#F59E0B' : '#22c55e' }} />
                                      <span className="text-[9px] font-bold" style={{ color: m.comingSoon ? '#F59E0B' : '#16a34a' }}>
                                        {m.comingSoon ? 'Coming Soon' : 'Live'}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* ── Active network header ── */}
                      {selectedNetwork && (
                        <div className="rounded-2xl border-2 overflow-hidden"
                          style={{ borderColor: activeMeta.bg + '30' }}>

                          <div className="flex items-center gap-4 px-5 py-4"
                            style={{ background: `linear-gradient(135deg, ${activeMeta.bg}15 0%, ${activeMeta.light} 100%)`, borderBottom: `2px solid ${activeMeta.bg}20` }}>
                            <div className="shrink-0 w-28 h-14 rounded-xl overflow-hidden flex items-center justify-center"
                              style={{ background: activeMeta.logo ? 'white' : activeMeta.bg, border: `1px solid ${activeMeta.bg}30` }}>
                              {activeMeta.logo ? (
                                <img src={activeMeta.logo} alt={selectedNetwork} className="w-full h-full object-contain p-1" />
                              ) : (
                                <div className="flex flex-col items-center justify-center w-full h-full">
                                  {activeMeta.comingSoon && <div className="text-[8px] font-black uppercase tracking-widest mb-0.5" style={{ color: activeMeta.text }}>COMING</div>}
                                  <div className="font-black text-xl tracking-tight leading-none" style={{ color: activeMeta.text }}>{activeMeta.abbr || selectedNetwork}</div>
                                  {activeMeta.comingSoon && <div className="text-[8px] font-black uppercase tracking-widest mt-0.5" style={{ color: activeMeta.text }}>SOON</div>}
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-extrabold text-lg leading-tight" style={{ color: activeMeta.bg }}>{selectedNetwork}</div>
                              <div className="text-xs text-gray-500 mt-0.5">{activeMeta.tagline}</div>
                              {activeMeta.comingSoon && (
                                <span className="inline-block mt-1 text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300">
                                  Coming Soon — Pre-register Now
                                </span>
                              )}
                            </div>
                            <div className="shrink-0 hidden sm:flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: activeMeta.comingSoon ? '#F59E0B' : '#22c55e' }} />
                              <span className="text-[10px] font-bold" style={{ color: activeMeta.comingSoon ? '#F59E0B' : '#16a34a' }}>
                                {activeMeta.comingSoon ? 'Pre-register' : 'Live Network'}
                              </span>
                            </div>
                          </div>

                          {/* Package cards */}
                          <div className="p-4 bg-white">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                              {PACKAGE_TIERS.map((pkg) => (
                                <div key={pkg.speed}
                                  className={`relative rounded-2xl p-4 border-2 transition-all ${
                                    pkg.popular ? 'bg-[#0f1720] text-white shadow-xl' : 'bg-gray-50 text-gray-900'
                                  }`}
                                  style={{ borderColor: pkg.popular ? activeMeta.bg : activeMeta.bg + '30' }}>

                                  {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[9px] font-black px-3 py-0.5 rounded-full uppercase whitespace-nowrap"
                                      style={{ background: activeMeta.bg }}>
                                      Most Popular
                                    </div>
                                  )}

                                  {/* Network mini-badge */}
                                  <div className="flex items-center gap-1 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: activeMeta.bg }} />
                                    <span className="text-[9px] font-extrabold uppercase tracking-widest"
                                      style={{ color: pkg.popular ? '#9ca3af' : activeMeta.text }}>
                                      {selectedNetwork}
                                    </span>
                                  </div>

                                  <div className="text-[10px] font-extrabold uppercase tracking-widest mb-1 text-gray-400">{pkg.label}</div>
                                  <div className="flex items-baseline gap-0.5 mb-1">
                                    <span className={`text-3xl font-black ${pkg.popular ? 'text-white' : 'text-[#0f1720]'}`}>R{pkg.price}</span>
                                    <span className="text-xs ml-1 text-gray-400">/mo</span>
                                  </div>
                                  <div className="text-sm font-bold mb-3 flex items-center gap-1" style={{ color: activeMeta.bg }}>
                                    <Zap size={12} /> {pkg.speed} Mbps
                                  </div>
                                  <ul className="space-y-1.5 mb-4">
                                    {pkg.perks.map((p) => (
                                      <li key={p} className={`text-xs flex items-start gap-1.5 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                                        <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: activeMeta.bg }} />
                                        {p}
                                      </li>
                                    ))}
                                  </ul>
                                  <a href="https://ataglance.imagine.co.za/cart.php" target="_blank" rel="noopener noreferrer"
                                    className="w-full py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-opacity hover:opacity-80 text-white"
                                    style={{ background: pkg.popular ? activeMeta.bg : '#0f1720' }}>
                                    {activeMeta.comingSoon ? 'Pre-register' : 'Order Now'} <ArrowRight size={11} />
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 text-center">
                        <Link to="/connect/home" className="text-xs font-bold text-[#E4002B] hover:underline inline-flex items-center gap-1">
                          See all packages & compare <ArrowRight size={11} />
                        </Link>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* ── Google Live Map with exact pin ── */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 bg-[#0f1720] shadow-xl">
                {/* Map toolbar */}
                <div className="bg-[#0f1720] px-4 py-3 flex flex-wrap justify-between items-center gap-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-gray-200 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <Navigation size={13} className="text-[#E4002B]" />
                    <span className="truncate max-w-xs">{result.queryAddress}</span>
                    {geoState === 'loading' && (
                      <span className="flex items-center gap-1 text-yellow-400 text-[10px]">
                        <Loader2 size={11} className="animate-spin" /> Pinpointing exact location…
                      </span>
                    )}
                    {geoState === 'done' && coords && (
                      <span className="flex items-center gap-1 text-green-400 text-[10px] font-mono">
                        ✓ Exact Pin: {coords.lat.toFixed(4)}°S, {coords.lng.toFixed(4)}°E
                      </span>
                    )}
                    {geoState === 'error' && (
                      <span className="flex items-center gap-1 text-yellow-400 text-[10px]">
                        <AlertCircle size={11} /> Approx. location shown
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-white/10 p-1 rounded-xl border border-white/10">
                      {['satellite', 'roadmap'].map((m) => (
                        <button key={m} type="button" onClick={() => setMapMode(m)}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors ${
                            mapMode === m ? 'bg-[#E4002B] text-white' : 'text-gray-300 hover:text-white'
                          }`}>
                          {m === 'satellite' ? '🛰 Satellite' : '🗺 Roadmap'}
                        </button>
                      ))}
                    </div>
                    <a href={getGoogleMapsLink()} target="_blank" rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] flex items-center gap-1 border border-white/10 transition-colors">
                      <Globe size={12} /> Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Map iframe — uses exact lat/lng coordinates when geocoded */}
                <div className="relative w-full h-[400px]">
                  <iframe
                    key={`${geoState}-${mapMode}`}
                    title="Google Coverage Map"
                    width="100%" height="100%"
                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                    src={getMapSrc()}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />

                  {/* Exact coordinates badge overlay */}
                  {coords && (
                    <div className="absolute top-4 left-4 bg-white/97 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-xs">
                      <div className="w-10 h-10 rounded-xl bg-[#E4002B] text-white flex items-center justify-center shrink-0 shadow-md">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-black text-[#0f1720] truncate">{result.area}</div>
                        <div className="text-[10px] text-green-700 font-bold flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                          Exact Pin Dropped
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 mt-0.5">
                          {coords.lat.toFixed(5)}, {coords.lng.toFixed(5)}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Geocoding loading overlay */}
                  {geoState === 'loading' && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white rounded-2xl px-6 py-4 flex items-center gap-3 shadow-xl">
                        <Loader2 size={20} className="animate-spin text-[#E4002B]" />
                        <span className="text-sm font-bold text-gray-700">Pinpointing exact address…</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="bg-[#0f1720] px-4 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <Sparkles size={12} className="text-[#E4002B]" />
                    {coords
                      ? <span>Exact geocoded pin for <strong className="text-gray-200">{result.queryAddress}</strong> via OpenStreetMap</span>
                      : <span>Coverage pin for <strong className="text-gray-200">{result.queryAddress}</strong></span>
                    }
                  </div>
                  <span className="font-mono text-[11px]">
                    {coords ? `${coords.lat.toFixed(5)}°S · ${coords.lng.toFixed(5)}°E` : 'Google Maps Engine'}
                  </span>
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
