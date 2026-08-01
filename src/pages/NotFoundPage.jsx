import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => (
  <Layout>
    <section className="pt-40 pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <div className="font-display text-7xl md:text-9xl font-black text-[#E4002B]">
          404
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-black text-[#0f1720] mt-4">
          Page not found
        </h1>
        <p className="text-gray-600 mt-3 max-w-lg mx-auto">
          The page you’re looking for doesn’t exist or has moved. Let’s get
          you back to somewhere useful.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            className="rounded-full h-12 px-6 bg-[#E4002B] hover:bg-[#c40025] text-white font-semibold"
          >
            <Link to="/">
              <Home size={16} className="mr-1" /> Back home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full h-12 px-6 border-2 font-semibold"
          >
            <Link to="/contact">
              <ArrowLeft size={16} className="mr-1" /> Talk to us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
