import React from 'react';
import { newsItems } from '../mock';
import { ArrowUpRight, CalendarDays } from 'lucide-react';

const News = () => {
  return (
    <section id="news" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-imagine-cyan text-xs uppercase font-bold tracking-widest mb-3">
              Latest
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
              News & <span className="text-imagine-red">campaigns.</span>
            </h2>
          </div>
          <a
            href="#all-news"
            className="inline-flex items-center gap-2 text-imagine-red font-semibold hover:gap-3 transition-all"
          >
            See all news <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((n) => (
            <article
              key={n.id}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-100 card-glow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="px-2.5 py-1 rounded-full bg-imagine-red/10 text-imagine-red font-bold uppercase tracking-wider">
                    {n.tag}
                  </span>
                  <CalendarDays size={13} /> {n.date}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f1720] mt-3 leading-snug group-hover:text-imagine-red transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {n.excerpt}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-imagine-red font-semibold text-sm">
                  Read more <ArrowUpRight size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
