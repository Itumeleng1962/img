import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, Send, Check } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const footerGroups = [
  {
    title: 'Company',
    links: [
      { label: 'About Imagine', to: '/' },
      { label: 'Newsroom', to: '/news' },
      { label: 'Blitz Fibre', to: '/connect/estate' },
      { label: 'Careers', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Home Fibre', to: '/connect/home' },
      { label: 'Business Fibre', to: '/connect/business' },
      { label: 'VoIP Voice', to: '/services/voice' },
      { label: 'IT Support', to: '/services/support' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'FAQ', to: '/contact' },
      { label: 'Coverage Map', to: '/coverage' },
      { label: 'Webmail', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/contact' },
      { label: 'Privacy Policy', to: '/contact' },
      { label: 'AUP', to: '/contact' },
      { label: 'RICA Compliance', to: '/contact' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast({
        title: 'Invalid email',
        description: 'Please enter a valid email address.',
      });
      return;
    }
    const list = JSON.parse(
      localStorage.getItem('imagine_subscribers') || '[]'
    );
    list.push({ email, ts: Date.now() });
    localStorage.setItem('imagine_subscribers', JSON.stringify(list));
    setSubscribed(true);
    setEmail('');
    toast({
      title: 'Subscribed!',
      description: 'Watch your inbox for deals and coverage updates.',
    });
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-[#0a1018] text-gray-300">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white">
              Stay in the loop.
            </h3>
            <p className="text-gray-400 mt-1">
              Deals, coverage updates and new networks — straight to your inbox.
            </p>
          </div>
          <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="h-12 rounded-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-imagine-red/40"
            />
            <Button
              type="submit"
              className="h-12 rounded-full px-6 bg-imagine-red hover:bg-[#c40025] text-white font-semibold"
            >
              {subscribed ? (
                <>
                  <Check size={14} className="mr-1" /> Subscribed
                </>
              ) : (
                <>
                  Subscribe <Send size={14} className="ml-1" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <div className="bg-white/95 rounded-xl inline-block px-3 py-2">
            <Logo height={40} />
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
            Imagine IPS is a premium South African Internet Service Provider,
            connecting people for smarter living since 2005.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-imagine-red hover:border-imagine-red flex items-center justify-center transition-colors"
                aria-label="social link"
              >
                <I size={16} />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((g) => (
          <div key={g.title}>
            <div className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              {g.title}
            </div>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-gray-400 hover:text-imagine-red transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Imagine IPS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-imagine-red">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-imagine-red">
              Privacy
            </Link>
            <Link to="/contact" className="hover:text-imagine-red">
              AUP
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
