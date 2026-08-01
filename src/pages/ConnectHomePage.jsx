import React from 'react';
import SubPageTemplate from '../components/SubPageTemplate';
import {
  Home,
  Wifi,
  Router,
  Zap,
  Users,
  ShieldCheck,
} from 'lucide-react';

const ConnectHomePage = () => (
  <SubPageTemplate
    eyebrow="Home Fibre"
    title="Fibre made for"
    highlight="the whole family."
    description="Stream, learn, work and game on South Africa’s most reliable Fibre-to-the-Home network. Uncapped, unshaped and always on."
    image="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1600&q=80"
    breadcrumb={[
      { label: 'Connect', to: '/connect' },
      { label: 'Home Fibre' },
    ]}
    intro={{
      heading: 'Everything your home needs, at gigabit speed.',
      body:
        'Whether it’s Netflix in 4K, remote work, online school or gaming — Imagine Home Fibre keeps every device online, all at once.',
    }}
    features={[
      {
        icon: Wifi,
        title: 'Uncapped & unshaped',
        body: 'No throttling. Ever. Watch, stream, download and back-up without worrying about limits.',
      },
      {
        icon: Router,
        title: 'Free WiFi 6 router',
        body: 'Modern mesh-ready router included on 100 Mbps+ packages. Blazing WiFi in every room.',
      },
      {
        icon: Zap,
        title: 'Symmetrical speeds',
        body: 'Upload as fast as you download on select plans — perfect for creators and remote work.',
      },
      {
        icon: Users,
        title: 'Family friendly',
        body: 'Parental controls, guest network and device prioritisation in the Imagine app.',
      },
      {
        icon: ShieldCheck,
        title: 'Trusted support',
        body: 'Real humans available 24/7. Average phone response under 2 minutes.',
      },
      {
        icon: Home,
        title: 'Month-to-month',
        body: 'No long contracts. Upgrade, downgrade or cancel anytime with 30-days notice.',
      },
    ]}
    packages={[
      {
        price: 449,
        title: '20/10 Mbps',
        sub: 'Great for browsing & HD streaming',
        perks: ['Uncapped', 'Free Router', 'Free Install'],
      },
      {
        price: 599,
        title: '50/25 Mbps',
        sub: 'Busy families & video calls',
        perks: ['Uncapped', 'Free WiFi 6 Router', 'Priority Setup'],
        popular: true,
      },
      {
        price: 799,
        title: '100/50 Mbps',
        sub: 'Streaming, gaming & work',
        perks: ['Uncapped', 'Free WiFi 6 Router', '24/7 Support'],
      },
      {
        price: 1199,
        title: '200/200 Mbps',
        sub: 'Pro-grade symmetrical fibre',
        perks: ['Uncapped', 'Free WiFi 6 Router', 'Priority Support'],
      },
    ]}
  />
);

export default ConnectHomePage;
