import React from 'react';
import { Link } from 'react-router-dom';
import { faqs } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-imagine-cyan text-xs uppercase font-bold tracking-widest mb-3">
            Support
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
            Frequently asked <span className="text-imagine-red">questions.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Can’t find what you need? Our real, human team is a phone call
            away.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-imagine-red hover:bg-[#c40025] text-white font-semibold transition-colors"
          >
            <HelpCircle size={16} /> Talk to a human
          </Link>
        </div>

        <div className="lg:col-span-7">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f) => (
              <AccordionItem
                key={f.id}
                value={`item-${f.id}`}
                className="bg-white rounded-2xl border border-gray-100 px-5 data-[state=open]:shadow-lg data-[state=open]:border-imagine-red/40 transition-all"
              >
                <AccordionTrigger className="font-display text-left font-bold text-[#0f1720] hover:no-underline hover:text-imagine-red py-5 text-base">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5 text-[15px]">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
