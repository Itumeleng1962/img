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
          <a href="#webmail" className="hover:text-[#E4002B] transition-colors">
            Webmail
          </a>
          <Link to="/contact" className="hover:text-[#E4002B] transition-colors">
            Client Portal
          </Link>
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
                  `px-4 py-2.5 text-sm font-semibold flex items-center gap-1 transition-colors ${
                    isActive
                      ? 'text-[#E4002B]'
                      : 'text-[#0f1720] hover:text-[#E4002B]'
                  }`
                }
              >
                {link.label}
                {link.submenu && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      openSub === link.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </NavLink>
              {link.submenu && openSub === link.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-2xl min-w-[220px] py-2 overflow-hidden">
                    {link.submenu.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-red-50 hover:text-[#E4002B] transition-colors"
                      >
                        {s.label}
                      </Link>
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
            className="text-sm font-semibold text-[#0f1720] hover:text-[#E4002B] transition-colors"
          >
            Check Coverage
          </Link>
          <Button
            className="bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold rounded-full px-5"
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
            {navLinks.map((l) => (
              <div key={l.label}>
                <Link
                  to={l.to}
                  className="block py-3 font-semibold border-b border-gray-100"
                >
                  {l.label}
                </Link>
                {l.submenu && (
                  <div className="pl-4 py-1">
                    {l.submenu.map((s) => (
                      <Link
                        key={s.label}
                        to={s.to}
                        className="block py-2 text-sm text-gray-600"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="mt-4 bg-[#E4002B] hover:bg-[#c40025] text-white rounded-full"
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
