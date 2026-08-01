import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { newsItems } from '../mock';
import { CalendarDays, ArrowUpRight } from 'lucide-react';

// Extended news list for full page
const allNews = [
  ...newsItems,
  {
    id: 4,
    title: 'Imagine goes live on Evotel Sandton network',
    excerpt:
      'Evotel customers in Sandton can now enjoy Imagine’s premium ISP experience — with speeds up to 1 Gbps and free installation.',
    date: 'Mar 18, 2025',
    tag: 'Networks',
    image:
      'https://images.unsplash.com/photo-1610128833542-9e1d6c6133cb?w=800&q=80',
  },
  {
    id: 5,
    title: 'How to WiFi-optimise your home in 10 minutes',
    excerpt:
      'A quick step-by-step guide to placing your router, updating firmware and choosing the right channel for maximum WiFi performance.',
    date: 'Feb 22, 2025',
    tag: 'Tips',
    image:
      'https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=800&q=80',
  },
  {
    id: 6,
    title: 'VoIP vs Landlines: What South African SMEs need to know',
    excerpt:
      'The pros, cons and real cost savings of moving your business telephony to modern cloud-based VoIP with Imagine.',
    date: 'Jan 30, 2025',
    tag: 'Business',
    image:
      'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80',
  },
];

const NewsPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Newsroom"
        title="News &"
        highlight="campaigns."
        description="Product launches, community stories and everything Imagine — delivered straight from the source."
        image="https://images.unsplash.com/photo-1624329813883-0458858c8518?w=1600&q=80"
        breadcrumb={[{ label: 'News' }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews.map((n) => (
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
                  <span className="px-2.5 py-1 rounded-full bg-[#E4002B]/10 text-[#E4002B] font-bold uppercase tracking-wider">
                    {n.tag}
                  </span>
                  <CalendarDays size={13} /> {n.date}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0f1720] mt-3 leading-snug group-hover:text-[#E4002B] transition-colors">
                  {n.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {n.excerpt}
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-[#E4002B] font-semibold text-sm"
                >
                  Read more <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default NewsPage;
