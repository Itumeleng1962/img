import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import {
  Tag,
  Repeat,
  Home,
  Gift,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Zap,
  PhoneCall,
} from 'lucide-react';

// Openserve-style promotional slides
const slides = [
  {
    id: 1,
    eyebrow: 'Limited Time Offer',
    lineOne: 'Sign up for any Imagine Fibre deal and get',
    highlight: 'a FREE month + Free WiFi 6 Router',
    footnote: '*Offer limited to the first 500 new customers.',
    ctas: [
      { label: 'Find your deal', icon: Tag, style: 'primary', to: '/connect/home' },
      { label: 'Check coverage', icon: Repeat, style: 'outline', to: '/coverage' },
      { label: 'Talk to sales', icon: Home, style: 'outline', to: '/contact' },
    ],
    image:
      'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1400&q=80',
    imageAlt: 'Family enjoying Imagine Fibre WiFi at home',
    accent: '#E4002B',
    accentSoft: 'rgba(228, 0, 43, 0.14)',
  },
  {
    id: 2,
    eyebrow: 'Prepaid Fibre',
    lineOne: 'Great WiFi doesn\u2019t need a contract.',
    highlight: 'Stay connected on your terms.',
    body:
      'No contracts. No credit checks. No cancellation fees. Recharge and go.',
    ctas: [
      { label: 'Browse packages', icon: Repeat, style: 'primary', to: '/connect/home' },
      { label: 'Check coverage', icon: Tag, style: 'outline', to: '/coverage' },
      { label: 'How prepaid works', icon: Home, style: 'outline', to: '/services/fibre' },
    ],
    image:
      'https://images.unsplash.com/photo-1640622304233-7335e936f11b?w=1400&q=80',
    imageAlt: 'Young boy on a gaming laptop with Imagine Fibre',
    accent: '#00B4D8',
    accentSoft: 'rgba(0, 180, 216, 0.14)',
  },
  {
    id: 3,
    eyebrow: 'Refer & Earn',
    lineOne: 'Refer friends and family and earn',
    highlight: 'Imagine Bucks every month.',
    body:
      'Share the network you love. Earn rewards for every friend that gets connected.',
    ctas: [
      { label: 'Register now', icon: Gift, style: 'primary', to: '/contact' },
      { label: 'How it works', icon: Tag, style: 'outline', to: '/services/fibre' },
    ],
    footnote: 'Terms and conditions apply.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
    imageAlt: 'Team of happy referrers celebrating',
    accent: '#E4002B',
    accentSoft: 'rgba(228, 0, 43, 0.14)',
  },
];

// Below-hero promo cards (Openserve style row)
const promoCards = [
  {
    id: 'p1',
    tag: 'Free Netflix',
    title: 'Get a FREE Netflix voucher worth R250',
    body: 'On selected uncapped fibre packages. First 1,000 customers only.',
    cta: 'Find your deal',
    to: '/connect/home',
    icon: Gift,
    bg: 'from-[#E4002B] to-[#F5375A]',
    text: 'white',
  },
  {
    id: 'p2',
    tag: 'Prepaid',
    title: 'Prepaid Fibre bundles from R99',
    body: 'No contracts. Recharge in seconds and stay online.',
    cta: 'Buy a bundle',
    to: '/connect/home',
    icon: Repeat,
    bg: 'from-[#0B1926] to-[#12253A]',
    text: 'white',
  },
  {
    id: 'p3',
    tag: 'Business',
    title: 'Business Fibre with SLA-backed uptime',
    body: 'Empowering SMEs and enterprises to do more for less.',
    cta: 'Talk to sales',
    to: '/connect/business',
    icon: PhoneCall,
    bg: 'from-white to-gray-50',
    text: 'ink',
  },
];

const Hero = () => {
  const [i, setI] = useState(0);
  const slide = slides[i];

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % slides.length),
      7500
    );
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % slides.length);
  const prev = () => setI((v) => (v - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative pt-24 md:pt-28 bg-white">
      {/* Full-width hero banner */}
      <div className="relative">
        <div
          className="relative overflow-hidden h-[560px] md:h-[600px] lg:h-[640px]"
          style={{ backgroundColor: '#0B1926' }}
        >
          {/* Background image */}
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.imageAlt}
            className="absolute inset-0 w-full h-full object-cover opacity-55 scale-105"
            style={{ animation: 'kenburns 18s ease-in-out infinite alternate' }}
          />
          {/* Gradient overlay for left-side text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(11,25,38,0.96) 0%, rgba(11,25,38,0.82) 45%, rgba(11,25,38,0.35) 75%, rgba(11,25,38,0.15) 100%)',
            }}
          />
          {/* Accent glow */}
          <div
            aria-hidden
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: slide.accentSoft }}
          />
          <div
            aria-hidden
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-60"
            style={{ background: slide.accentSoft }}
          />

          {/* Slide arrows */}
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B1926] backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#0B1926] backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 h-full flex items-center">
            <div key={slide.id} className="max-w-2xl reveal is-visible">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
                style={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.25)',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <Zap size={13} style={{ color: slide.accent }} /> {slide.eyebrow}
              </div>

              <h1 className="font-display font-black text-white leading-[1.02] text-4xl md:text-5xl lg:text-[3.75rem]">
                {slide.lineOne}{' '}
                <span style={{ color: slide.accent }}>{slide.highlight}</span>
              </h1>

              {slide.body && (
                <p className="text-white/85 mt-5 text-base md:text-lg max-w-xl leading-relaxed">
                  {slide.body}
                </p>
              )}

              {/* Stacked pill CTAs Openserve-style */}
              <div className="mt-8 flex flex-col items-start gap-3">
                {slide.ctas.map((c, idx) => {
                  const Icon = c.icon;
                  const isPrimary = c.style === 'primary';
                  return (
                    <Button
                      key={idx}
                      asChild
                      className={`h-12 rounded-full pl-2 pr-6 font-semibold transition-all group min-w-[220px] justify-start ${
                        isPrimary
                          ? 'text-white hover:brightness-110 shadow-lg'
                          : 'bg-white/5 hover:bg-white text-white hover:text-[#0B1926] border border-white/25'
                      }`}
                      style={
                        isPrimary
                          ? {
                              backgroundColor: slide.accent,
                              boxShadow: `0 10px 30px -8px ${slide.accent}66`,
                            }
                          : {}
                      }
                    >
                      <Link to={c.to || '/coverage'}>
                        <span
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                            isPrimary ? 'bg-white/25' : 'bg-white/10 group-hover:bg-[#0B1926]/10'
                          }`}
                        >
                          <Icon size={14} />
                        </span>
                        {c.label}
                      </Link>
                    </Button>
                  );
                })}
              </div>

              {slide.footnote && (
                <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 rounded-full border border-white/25 bg-white/5 backdrop-blur-md">
                  <span
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: slide.accent }}
                  >
                    <Gift size={16} className="text-white" />
                  </span>
                  <span className="text-white/90 text-sm">
                    {slide.footnote}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i
                    ? 'w-10 bg-white'
                    : 'w-4 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Floating live-speed badge (top-right corner) */}
          <div className="hidden md:flex absolute top-8 right-24 z-20 items-center gap-3 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-2xl">
            <div className="w-10 h-10 rounded-full bg-[#E4002B] text-white flex items-center justify-center">
              <Wifi size={18} />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Live network
              </div>
              <div className="font-display font-extrabold text-sm text-[#0B1926]">
                8 Fibre networks online
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below-hero promo card row (Openserve style) */}
      <div className="relative -mt-16 md:-mt-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {promoCards.map((p) => {
              const Icon = p.icon;
              const isLight = p.text === 'ink';
              return (
                <Link
                  key={p.id}
                  to={p.to}
                  className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${p.bg} p-6 shadow-xl card-glow border block ${
                    isLight ? 'border-gray-100' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                        isLight
                          ? 'bg-[#E4002B]/10 text-[#E4002B]'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {p.tag}
                    </div>
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isLight
                          ? 'bg-[#E4002B] text-white'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3
                    className={`mt-4 font-display font-extrabold text-lg md:text-xl leading-snug ${
                      isLight ? 'text-[#0B1926]' : 'text-white'
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isLight ? 'text-gray-500' : 'text-white/80'
                    }`}
                  >
                    {p.body}
                  </p>
                  <div
                    className={`mt-4 inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all ${
                      isLight ? 'text-[#E4002B]' : 'text-white'
                    }`}
                  >
                    {p.cta}
                    <span className="inline-block group-hover:translate-x-0.5 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ken burns keyframe */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.05) translate(0,0); }
          100% { transform: scale(1.14) translate(-20px,-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
