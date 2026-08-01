import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.topic) {
      toast({ title: 'Missing details', description: 'Name, email and topic are required.' });
      return;
    }
    // Persist to localStorage as mock
    const inbox = JSON.parse(localStorage.getItem('imagine_inbox') || '[]');
    inbox.push({ ...form, ts: Date.now() });
    localStorage.setItem('imagine_inbox', JSON.stringify(inbox));
    setSent(true);
    toast({
      title: 'Message received',
      description: 'Our team will respond within 1 business hour.',
    });
    setForm({ name: '', email: '', phone: '', topic: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="text-imagine-red text-xs uppercase font-bold tracking-widest mb-3">
            Get in touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#0f1720] leading-tight">
            Let’s get you <span className="text-imagine-red">connected.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our sales and support team is ready to help — whether you’re
            switching, upgrading or starting fresh.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:0112147600"
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-imagine-red hover:bg-red-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-imagine-red/10 text-imagine-red flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Call sales & support
                </div>
                <div className="font-display font-extrabold text-[#0f1720] text-lg">
                  011 214 7600
                </div>
              </div>
            </a>
            <a
              href="mailto:helpdesk@imagine.co.za"
              className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-imagine-red hover:bg-red-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-imagine-cyan/10 text-imagine-cyan flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Email helpdesk
                </div>
                <div className="font-display font-extrabold text-[#0f1720] text-lg">
                  helpdesk@imagine.co.za
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-imagine-red/10 text-imagine-red flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  Head office
                </div>
                <div className="font-display font-extrabold text-[#0f1720]">
                  Benoni, Gauteng · South Africa
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-100">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#0f1720] mt-6">
                  Message received!
                </h3>
                <p className="text-gray-600 mt-2">
                  Our team will respond within 1 business hour.
                </p>
                <Button
                  onClick={() => setSent(false)}
                  className="mt-6 rounded-full bg-imagine-red hover:bg-[#c40025] text-white px-6"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Full name
                  </label>
                  <Input
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Your name"
                    className="mt-1 h-12 rounded-xl border-gray-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="you@example.com"
                    className="mt-1 h-12 rounded-xl border-gray-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone
                  </label>
                  <Input
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="082 000 0000"
                    className="mt-1 h-12 rounded-xl border-gray-200"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Topic
                  </label>
                  <Select value={form.topic} onValueChange={(v) => set('topic', v)}>
                    <SelectTrigger className="mt-1 h-12 rounded-xl border-gray-200">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-order">New Order / Sign-up</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Accounts / Billing</SelectItem>
                      <SelectItem value="business">Business Fibre</SelectItem>
                      <SelectItem value="voice">VoIP Voice</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Message
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="How can we help?"
                    rows={5}
                    className="mt-1 rounded-xl border-gray-200"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="h-12 rounded-full px-6 bg-imagine-red hover:bg-[#c40025] text-white font-semibold"
                  >
                    <Send size={16} className="mr-1" /> Send message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
