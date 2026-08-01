import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import Logo from './Logo';
import { navLinks } from '../mock';
import { Button } from './ui/button';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      {/* Top strip */}
      <div className="hidden md:flex justify-between items-center text-xs px-6 lg:px-10 py-2 bg-[#0f1720] text-white">
        <div className="flex items-center gap-4">
          <a href="tel:0112147600" className="flex items-center gap-1.5 hover:text-imagine-red transition-colors">
            <Phone size={13} /> 011 214 7600
          </a>
          <span className="opacity-60">|</span>
          <a href="mailto:helpdesk@imagine.co.za" className="hover:text-imagine-red transition-colors">
            helpdesk@imagine.co.za
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#webmail" className="hover:text-imagine-red transition-colors">Webmail</a>
          <a href="#login" className="hover:text-imagine-red transition-colors">Client Portal</a>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-3 flex items-center justify-between">
        <a href="#home" className="shrink-0">
          <Logo height={48} />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.submenu && setOpenSub(link.label)}
              onMouseLeave={() => setOpenSub(null)}
            >
              <a
                href={link.href}
                className="px-4 py-2.5 text-sm font-semibold text-[#0f1720] hover:text-imagine-red flex items-center gap-1 transition-colors"
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
              </a>
              {link.submenu && openSub === link.label && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="bg-white rounded-xl border border-gray-100 shadow-2xl min-w-[220px] py-2 overflow-hidden">
                    {link.submenu.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm font-medium hover:bg-red-50 hover:text-imagine-red transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#coverage"
            className="text-sm font-semibold text-[#0f1720] hover:text-imagine-red transition-colors"
          >
            Check Coverage
          </a>
          <Button
            className="bg-imagine-red hover:bg-[#c40025] text-white font-semibold rounded-full px-5"
            asChild
          >
            <a href="#contact">Get Connected</a>
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

      {/* Mobile */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) => (
              <div key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-semibold border-b border-gray-100"
                >
                  {l.label}
                </a>
                {l.submenu && (
                  <div className="pl-4 py-1">
                    {l.submenu.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button
              className="mt-4 bg-imagine-red hover:bg-[#c40025] text-white rounded-full"
              asChild
            >
              <a href="#contact" onClick={() => setOpen(false)}>
                Get Connected
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
