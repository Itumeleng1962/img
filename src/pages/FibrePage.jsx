import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { fibreProviders } from '../mock';
import { Zap, ShieldCheck, Wifi, Router, CheckCircle2, MapPin, PhoneCall, FileText, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import CoverageBar from '../components/CoverageBar';

const FibrePage = () => {
  const location = useLocation();
  const [selectedProvider, setSelectedProvider] = useState('all');

  useEffect(() => {
    const hash = location.hash ? location.hash.replace('#', '') : 'all';
    setSelectedProvider(hash);
  }, [location.hash]);

  const filteredProviders = selectedProvider === 'all'
    ? fibreProviders
    : fibreProviders.filter(p => p.id === selectedProvider);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-[#0f1720] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1720] via-[#0f1720]/90 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=1600&q=80"
          alt="Imagine Fibre"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4002B]/10 text-[#E4002B] border border-[#E4002B]/20 text-xs font-bold uppercase tracking-wider mb-6">
              <Zap size={14} /> Ultra-Fast Broadband
            </div>
            <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
              Fibre Broadband that’s <span className="text-[#E4002B]">out of this world.</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
              Up to 25× the speed of legacy ADSL. Uncapped, unshaped, and month-to-month fibre across South Africa's top 8 open-access network operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#E4002B] hover:bg-[#c40025] text-white font-bold rounded-full px-8 shadow-lg shadow-red-600/30" asChild>
                <a href="#providers">Explore Networks & Packages</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-full px-8" asChild>
                <Link to="/coverage">Check Area Coverage</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Checker Banner */}
      <section className="bg-gray-900 border-y border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <CoverageBar />
        </div>
      </section>

      {/* Highlights / Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#E4002B] flex items-center justify-center font-bold">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Next-Gen Speeds</h3>
              <p className="text-sm text-gray-600">Speeds from 8Mbps up to 1000Mbps symmetrical fibre broadband for home and gaming.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#E4002B] flex items-center justify-center font-bold">
                <Wifi size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">100% Truly Uncapped</h3>
              <p className="text-sm text-gray-600">No fair usage policies (FUP), no throttling, and no data limits whatsoever.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#E4002B] flex items-center justify-center font-bold">
                <Router size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Free-To-Use Router</h3>
              <p className="text-sm text-gray-600">High-performance Wi-Fi router supplied free-to-use on all uncapped fibre packages.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-[#E4002B] flex items-center justify-center font-bold">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Month-to-Month</h3>
              <p className="text-sm text-gray-600">No lock-in long term contracts. Enjoy flexible internet freedom and 24/7 SA support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Network Providers & Packages Listing */}
      <section id="providers" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Choose Your Fibre Network</h2>
            <p className="text-gray-600">We partner with South Africa's premier Open Access Network Operators to give you maximum coverage and competitive pricing.</p>
          </div>

          {/* Network Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
            <button
              onClick={() => setSelectedProvider('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                selectedProvider === 'all'
                  ? 'bg-[#E4002B] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              All Networks ({fibreProviders.length})
            </button>
            {fibreProviders.map((provider) => (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedProvider === provider.id
                    ? 'bg-[#E4002B] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {provider.name}
              </button>
            ))}
          </div>

          {/* Provider Sections */}
          <div className="space-y-16">
            {filteredProviders.map((provider) => (
              <div
                key={provider.id}
                id={provider.id}
                className="bg-white rounded-3xl p-6 lg:p-10 border border-gray-200 shadow-sm scroll-mt-24"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-gray-100 gap-6">
                  <div className="flex items-center gap-6">
                    {/* Official Brand Logo (Enlarged) */}
                    <div className="w-64 h-24 bg-white rounded-2xl p-3 flex items-center justify-center border-2 border-gray-200 shrink-0 overflow-hidden shadow-md relative group">
                      {provider.logoImg ? (
                        <img
                          src={provider.logoImg}
                          alt={`${provider.name} logo`}
                          className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) {
                              e.target.nextSibling.style.display = 'block';
                            }
                          }}
                        />
                      ) : null}
                      <div className={provider.logoImg ? 'hidden w-full h-full flex items-center justify-center' : 'w-full h-full flex items-center justify-center'}>
                        {provider.logoSvg}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-3xl font-black text-gray-900">{provider.name} Fibre</h3>
                        <span className="text-xs font-black bg-red-100 text-[#E4002B] px-3 py-1 rounded-full uppercase">
                          {provider.speedLimit}
                        </span>
                      </div>
                      <p className="text-base text-gray-600 mt-1.5">{provider.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 font-semibold">
                      <CheckCircle2 size={14} className="text-green-500" /> {provider.installation}
                    </span>
                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 font-semibold">
                      <CheckCircle2 size={14} className="text-green-500" /> {provider.router}
                    </span>
                  </div>
                </div>

                {/* Package Cards Grid */}
                <div className="mb-10">
                  <h4 className="text-sm font-black text-gray-400 uppercase tracking-wider mb-4">Available Speed Packages</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {provider.packages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 hover:border-[#E4002B] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group bg-slate-50 hover:bg-white"
                      >
                        <div>
                          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                            {pkg.type}
                          </div>
                          <div className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#E4002B] transition-colors">
                            {pkg.speed}
                          </div>
                          <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-sm font-bold text-gray-500">R</span>
                            <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                            <span className="text-xs text-gray-500 font-semibold">/pm</span>
                          </div>

                          <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                              <span>{pkg.term} Contract</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                              <span>Uncapped & Unshaped Data</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                              <span>Free-To-Use Wi-Fi Router</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                              <span>{provider.activation}</span>
                            </li>
                          </ul>
                        </div>

                        <Button
                          className="w-full bg-[#0f1720] hover:bg-[#E4002B] text-white font-bold text-xs rounded-xl py-2.5 transition-colors"
                          asChild
                        >
                          <Link to="/contact">Order Package</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete Network Terms & Details (Scraped Content Section) */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-200/80 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                      <FileText size={16} className="text-[#E4002B]" /> Terms & Cancellation
                    </div>
                    <p className="leading-relaxed text-gray-600">{provider.cancellation}</p>
                    <p className="leading-relaxed text-gray-600">{provider.cabling}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                      <PhoneCall size={16} className="text-[#E4002B]" /> Add Telephone / VoIP
                    </div>
                    <p className="leading-relaxed text-gray-600">{provider.telephonyInfo}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                      <MapPin size={16} className="text-[#E4002B]" /> Key Coverage Areas
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {provider.coverageAreas?.map((area, aIdx) => (
                        <span key={aIdx} className="bg-white px-2 py-1 rounded border border-gray-200 text-[11px] font-semibold text-gray-700">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#0f1720] text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-4">Not sure which Fibre Network is in your area?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Our expert team can trace coverage across all 8 major network operators instantly and get you connected with zero hassle.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#E4002B] hover:bg-[#c40025] text-white font-bold rounded-full px-8" asChild>
              <Link to="/coverage">Check Coverage Map</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold rounded-full px-8" asChild>
              <Link to="/contact">Contact Fibre Specialist</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FibrePage;
