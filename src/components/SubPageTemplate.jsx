import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero';
import Layout from './Layout';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Reusable page template used by service / connect pages.
 * props:
 *  eyebrow, title, highlight, description, image, breadcrumb
 *  intro { heading, body }
 *  features [{ icon, title, body }]
 *  packages [{ price, title, sub, perks[], popular }]
 *  ctaTitle, ctaBody, ctaButton { label, to }
 */
const SubPageTemplate = ({
  eyebrow,
  title,
  highlight,
  description,
  image,
  breadcrumb,
  intro,
  features = [],
  packages = [],
  ctaTitle,
  ctaBody,
  ctaButton,
  children,
}) => {
  return (
    <Layout>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        highlight={highlight}
        description={description}
        image={image}
        breadcrumb={breadcrumb}
      />

      {intro && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#0f1720] leading-tight">
              {intro.heading}
            </h2>
            {intro.body && (
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                {intro.body}
              </p>
            )}
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-7 border border-gray-100 card-glow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#E4002B]/10 text-[#E4002B] flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <div className="font-display font-extrabold text-lg text-[#0f1720]">
                      {f.title}
                    </div>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {packages.length > 0 && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="text-[#00B4D8] text-xs uppercase font-bold tracking-widest mb-3">
                Packages
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-[#0f1720]">
                Pick your <span className="text-[#E4002B]">perfect plan.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((p, i) => (
                <div
                  key={i}
                  className={`rounded-3xl border p-6 card-glow ${
                    p.popular
                      ? 'border-[#E4002B] bg-gradient-to-b from-red-50 to-white'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  {p.popular && (
                    <div className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#E4002B] text-white px-3 py-1 rounded-full mb-3">
                      Most Popular
                    </div>
                  )}
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    {p.term || 'MONTHLY'}
                  </div>
                  <div className="flex items-end gap-1 mt-1">
                    <span className="text-sm font-semibold text-gray-500 mb-1">R</span>
                    <span className="font-display text-4xl font-black text-[#0f1720]">
                      {p.price}
                    </span>
                    <span className="text-sm text-gray-500 mb-1">/mo</span>
                  </div>
                  <div className="mt-4 font-display font-extrabold text-lg text-[#0f1720]">
                    {p.title}
                  </div>
                  <div className="text-sm text-gray-500">{p.sub}</div>
                  <ul className="mt-4 space-y-2">
                    {p.perks.map((per) => (
                      <li
                        key={per}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#E4002B] mt-0.5 shrink-0"
                        />
                        {per}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full mt-6 h-11 rounded-full font-semibold ${
                      p.popular
                        ? 'bg-[#E4002B] hover:bg-[#c40025] text-white'
                        : 'bg-[#0f1720] hover:bg-[#E4002B] text-white'
                    }`}
                  >
                    <Link to="/contact">Get this deal</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-gradient-to-br from-[#E4002B] to-[#F5375A] p-10 md:p-14 text-white relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold">
                  {ctaTitle || 'Ready to get connected?'}
                </h3>
                <p className="text-white/85 mt-2 max-w-lg">
                  {ctaBody ||
                    'Speak to our team or check coverage now. Free installation & Free WiFi Router.'}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-12 rounded-full px-6 bg-white text-[#E4002B] hover:bg-[#0B1926] hover:text-white font-semibold"
                >
                  <Link to={ctaButton?.to || '/coverage'}>
                    {ctaButton?.label || 'Check coverage'}{' '}
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full px-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#E4002B] font-semibold"
                >
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubPageTemplate;
