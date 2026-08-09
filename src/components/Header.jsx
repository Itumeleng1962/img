import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { navLinks } from '../mock';
import { Button } from './ui/button';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      {/* Top strip */}
      <div className="hidden md:flex justify-between items-center text-xs px-6 lg:px-10 py-2 bg-[#0f1720] text-white">
        <div className="flex items-center gap-4">
          <a
            href="tel:0112147600"
            className="flex items-center gap-1.5 hover:text-[#E4002B] transition-colors"
          >
            <Phone size={13} /> 011 214 7600
          </a>
          <span className="opacity-60">|</span>
          <a
            href="mailto:helpdesk@imagine.co.za"
            className="hover:text-[#E4002B] transition-colors"
          >
            helpdesk@imagine.co.za
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/services/transfer"
            className="hover:text-[#E4002B] transition-colors flex items-center gap-1"
          >
            Transfer to Us{' '}
            <span className="text-[8px] bg-[#1877f2] text-white px-1 py-0.5 rounded font-bold leading-none">
              TRY ME
            </span>
          </Link>
          <Link
            to="/services/ssl"
            className="hover:text-[#E4002B] transition-colors"
          >
            SSL Certificates
          </Link>
          <Link
            to="/services/resellers"
            className="hover:text-[#E4002B] transition-colors flex items-center gap-1"
          >
            Resellers{' '}
            <span className="text-[8px] bg-[#E4002B] text-white px-1 py-0.5 rounded font-bold leading-none">
              NEW
            </span>
          </Link>
          <span className="opacity-60">|</span>
          <a
            href="https://webmail.imagine.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4002B] transition-colors"
          >
            Webmail
          </a>
          <a
            href="https://ataglance.imagine.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#E4002B] transition-colors"
          >
            Client Portal
          </a>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-3 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo height={48} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.submenu && setOpenSub(link.label)}
              onMouseLeave={() => setOpenSub(null)}
            >
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-xs font-bold flex flex-col items-center relative transition-colors ${
                    isActive
                      ? 'text-[#E4002B]'
                      : 'text-[#0f1720] hover:text-[#E4002B]'
                  }`
                }
              >
                {link.badge && (
                  <span className={`text-[8px] font-black px-1 py-0.5 rounded-sm leading-none mb-1 uppercase tracking-wider ${
                    link.badge === 'TRY ME' ? 'bg-[#1877f2] text-white' : 'bg-[#E4002B] text-white'
                  }`}>
                    {link.badge}
                  </span>
                )}
                {!link.badge && <span className="h-[13px] block" />} {/* Spacer to align text if no badge */}
                <div className="flex items-center gap-0.5">
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform ${
                        openSub === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </div>
              </NavLink>
              {link.submenu && openSub === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-2xl min-w-[240px] py-2 overflow-hidden">
                    {link.submenu.map((s) => (
                      s.to.startsWith('http') ? (
                        <a
                          key={s.label}
                          href={s.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#E4002B] transition-colors"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <Link
                          key={s.label}
                          to={s.to}
                          className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-red-50 hover:text-[#E4002B] transition-colors"
                        >
                          {s.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/coverage"
            className="text-xs font-bold text-[#0f1720] hover:text-[#E4002B] transition-colors"
          >
            Check Coverage
          </Link>
          <Button
            className="bg-[#E4002B] hover:bg-[#c40025] text-white font-bold rounded-full px-4 py-1.5 h-9 text-xs"
            asChild
          >
            <Link to="/contact">Get Connected</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {/* Quick links from top strip for mobile */}
            <div className="pb-3 mb-1 border-b border-gray-100 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
              <Link
                to="/services/transfer"
                className="font-bold text-gray-800 hover:text-[#E4002B] flex items-center gap-1"
              >
                Transfer to Us{' '}
                <span className="text-[8px] bg-[#1877f2] text-white px-1 py-0.5 rounded font-bold leading-none">
                  TRY ME
                </span>
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/services/ssl"
                className="font-bold text-gray-800 hover:text-[#E4002B]"
              >
                SSL Certificates
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                to="/services/resellers"
                className="font-bold text-gray-800 hover:text-[#E4002B] flex items-center gap-1"
              >
                Resellers{' '}
                <span className="text-[8px] bg-[#E4002B] text-white px-1 py-0.5 rounded font-bold leading-none">
                  NEW
                </span>
              </Link>
            </div>

            {navLinks.map((l) => (
              <div key={l.label} className="py-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Link
                    to={l.to}
                    className="font-bold text-sm text-[#0f1720]"
                  >
                    {l.label}
                  </Link>
                  {l.badge && (
                    <span className={`text-[8px] font-black px-1 py-0.5 rounded-sm uppercase tracking-wider text-white ${
                      l.badge === 'TRY ME' ? 'bg-[#1877f2]' : 'bg-[#E4002B]'
                    }`}>
                      {l.badge}
                    </span>
                  )}
                </div>
                {l.submenu && (
                  <div className="pl-3 mt-1.5 space-y-1.5">
                    {l.submenu.map((s) => (
                      s.to.startsWith('http') ? (
                        <a
                          key={s.label}
                          href={s.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-1.5 text-xs font-semibold text-gray-500 hover:text-[#E4002B]"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <Link
                          key={s.label}
                          to={s.to}
                          className="block py-1.5 text-xs font-semibold text-gray-500 hover:text-[#E4002B]"
                        >
                          {s.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="mt-4 bg-[#E4002B] hover:bg-[#c40025] text-white rounded-full w-full font-bold"
              asChild
            >
              <Link to="/contact">Get Connected</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
