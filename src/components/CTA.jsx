import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#e4002b] to-[#f5375a] p-10 md:p-16">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-imagine-cyan/30 blur-3xl"
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-wider">
                <Zap size={13} /> Free installation this month
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black leading-tight mt-5">
                Ready to imagine
                <br />
                a better connection?
              </h2>
              <p className="mt-4 text-white/85 text-lg max-w-lg">
                Sign up today and get free installation, a free WiFi router and
                priority onboarding by our expert team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="rounded-full px-7 py-6 bg-white text-imagine-red hover:bg-[#0f1720] hover:text-white font-semibold"
                  asChild
                >
                  <Link to="/coverage">
                    Check my coverage <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-imagine-red font-semibold"
                  asChild
                >
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80"
                  alt="People enjoying fast internet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl w-56">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Live speed
                </div>
                <div className="font-display text-3xl font-black text-imagine-red">
                  942 Mbps
                </div>
                <div className="text-xs text-gray-500">Test on 1 Gbps line</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
