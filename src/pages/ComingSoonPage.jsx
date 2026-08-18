import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft, Clock, Sparkles } from 'lucide-react';

const ComingSoonPage = () => (
  <Layout>
    <section className="pt-40 pb-32 bg-white min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div className="w-20 h-20 bg-red-50 text-[#E4002B] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Clock size={40} />
        </div>
        <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#E4002B] text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
          <Sparkles size={12} /> Under Development
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-black text-[#0f1720]">
          Customer Portal Coming Soon
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          We are currently building a brand new, streamlined Customer Portal to give you better control over your services, billing, and support tickets.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="rounded-full h-12 px-6 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold"
          >
            <Link to="/">
              <Home size={16} className="mr-1.5" /> Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full h-12 px-6 border-2 font-semibold"
          >
            <Link to="/contact">
              <ArrowLeft size={16} className="mr-1.5" /> Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ComingSoonPage;
