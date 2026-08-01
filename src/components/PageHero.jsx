import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({
  eyebrow,
  title,
  highlight,
  description,
  image,
  breadcrumb = [],
}) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[#0B1926] text-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(11,25,38,0.94) 0%, rgba(11,25,38,0.82) 45%, rgba(11,25,38,0.45) 100%)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-[#E4002B]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#00B4D8]/20 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {breadcrumb.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-white/70 mb-6"
          >
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <React.Fragment key={i}>
                <ChevronRight size={13} className="opacity-60" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4002B]" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
          {title}{' '}
          {highlight && <span className="text-[#E4002B]">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-5 text-white/85 text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
