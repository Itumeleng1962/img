import React, { useEffect, useState } from 'react';
import { heroSlides } from '../mock';
import { Button } from './ui/button';
import { ArrowRight, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [i, setI] = useState(0);
  const slide = heroSlides[i];

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const next = () => setI((v) => (v + 1) % heroSlides.length);
  const prev = () =>
    setI((v) => (v - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 radial-red"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-imagine-red/25 blur-3xl animate-blob"
      />
      <div
        aria-hidden
        className="absolute top-40 right-0 w-[520px] h-[520px] rounded-full bg-imagine-cyan/20 blur-3xl animate-blob"
        style={{ animationDelay: '4s' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 z-10">
          <div
            key={slide.id + 'tag'}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-imagine-red/10 border border-imagine-red/20 text-imagine-red text-xs font-bold uppercase tracking-wider mb-6 reveal is-visible"
          >
            <Zap size={13} /> {slide.tag}
          </div>
          <h1
            key={slide.id + 'title'}
            className="reveal is-visible font-display text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] text-[#0f1720]"
          >
            {slide.title}
            <br />
            <span className="text-imagine-red">{slide.highlight}</span>
          </h1>
          <p
            key={slide.id + 'desc'}
            className="reveal is-visible mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
          >
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="bg-imagine-red hover:bg-[#c40025] text-white font-semibold rounded-full px-7 py-6 text-base shadow-lg shadow-red-500/25"
              asChild
            >
              <a href={slide.cta.href}>
                {slide.cta.label} <ArrowRight size={18} className="ml-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-7 py-6 border-2 border-[#0f1720] text-[#0f1720] hover:bg-[#0f1720] hover:text-white font-semibold"
              asChild
            >
              <a href={slide.secondaryCta.href}>{slide.secondaryCta.label}</a>
            </Button>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div>
              <div className="font-display text-2xl font-extrabold text-[#0f1720]">
                25x
              </div>
              faster than ADSL
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div>
              <div className="font-display text-2xl font-extrabold text-[#0f1720]">
                8+
              </div>
              national networks
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div>
              <div className="font-display text-2xl font-extrabold text-[#0f1720]">
                24/7
              </div>
              expert support
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl shadow-red-500/20 animate-float">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1720]/40 via-transparent to-transparent" />

            {/* Floating speed badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-imagine-red text-white flex items-center justify-center">
                <Zap size={22} />
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Uncapped
                </div>
                <div className="font-display font-extrabold text-lg text-[#0f1720]">
                  1000 Mbps ready
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-imagine-cyan text-white rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider">
              Fibre · VoIP · Support
            </div>
          </div>

          {/* Slider controls */}
          <div className="absolute -bottom-6 right-4 flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-imagine-red hover:text-white hover:border-imagine-red transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-imagine-red hover:text-white hover:border-imagine-red transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 mt-10 flex items-center gap-2">
        {heroSlides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setI(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? 'w-10 bg-imagine-red' : 'w-4 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
