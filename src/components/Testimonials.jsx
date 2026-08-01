import React from 'react';
import { testimonials, awards } from '../mock';
import { Star, Award } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="text-imagine-red text-xs uppercase font-bold tracking-widest mb-3">
              Loved by South Africans
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
              Real customers.
              <br />
              <span className="text-imagine-red">Real speeds.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Over two decades of connecting homes, businesses and estates
              across the country — and it shows.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {awards.map((a) => (
                <div
                  key={a.id}
                  className="rounded-2xl border border-gray-100 p-4 bg-gradient-to-br from-red-50 to-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-imagine-red text-white flex items-center justify-center mb-2">
                    <Award size={16} />
                  </div>
                  <div className="font-display text-sm font-extrabold text-[#0f1720] leading-tight">
                    {a.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {a.body} · {a.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`rounded-3xl p-7 card-glow ${
                  idx === 0
                    ? 'bg-[#0f1720] text-white sm:col-span-2'
                    : 'bg-gray-50 border border-gray-100'
                }`}
              >
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p
                  className={`font-display text-lg leading-relaxed ${
                    idx === 0 ? 'text-white' : 'text-[#0f1720]'
                  }`}
                >
                  “{t.quote}”
                </p>
                <div
                  className={`mt-5 flex items-center gap-3 ${
                    idx === 0 ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-imagine-red text-white flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-sm">
                    <div
                      className={`font-semibold ${
                        idx === 0 ? 'text-white' : 'text-[#0f1720]'
                      }`}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
