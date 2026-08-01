import React from 'react';

const IMAGINE_LOGO_URL = '/assets/imagine-logo.png';

const Logo = ({ className = '', height = 44 }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={IMAGINE_LOGO_URL}
        alt="Imagine IPS - Internet Protocol Solutions"
        style={{ height: `${height}px`, width: 'auto' }}
        className="select-none"
        draggable={false}
      />
    </div>
  );
};

export default Logo;
