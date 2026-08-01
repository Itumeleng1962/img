import React from 'react';

const Logo = ({ className = '', variant = 'dark' }) => {
  const textColor = variant === 'light' ? '#ffffff' : '#0f1720';
  const subColor = variant === 'light' ? '#e5e7eb' : '#6b7280';
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-9 h-11">
        {/* Teardrop shape */}
        <svg viewBox="0 0 40 48" className="w-full h-full" aria-hidden="true">
          <defs>
            <linearGradient id="drop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F5375A" />
              <stop offset="100%" stopColor="#E4002B" />
            </linearGradient>
          </defs>
          <path
            d="M20 2 C 8 18, 2 26, 2 32 a18 18 0 0 0 36 0 c 0 -6 -6 -14 -18 -30 Z"
            fill="url(#drop)"
          />
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            fontFamily="Poppins, Inter, sans-serif"
            fontWeight="900"
            fontSize="22"
            fill="#ffffff"
          >
            i
          </text>
        </svg>
      </div>
      <div className="leading-none">
        <div
          className="font-display font-extrabold text-[1.35rem] tracking-tight"
          style={{ color: textColor }}
        >
          IMAGINE
        </div>
        <div
          className="text-[0.62rem] tracking-[0.22em] font-semibold uppercase"
          style={{ color: subColor }}
        >
          Internet Protocol Solutions
        </div>
      </div>
    </div>
  );
};

export default Logo;
