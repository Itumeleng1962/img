import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { hostingPackages } from '../mock';
import {
  Check,
  Globe,
  Mail,
  Server,
  ShoppingCart,
  ArrowLeft,
  Search,
  Plus,
  ShieldCheck,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const EMAIL_ADDONS = [
  { id: 'none', name: 'Standard Included Email', price: 0, desc: 'Uses standard inbox storage included in your selected hosting plan.' },
  { id: 'premium', name: 'Premium Cloud Mailbox (5GB SSD)', price: 29, desc: 'Includes advanced spam filter, webmail, and larger mailbox space.' },
  { id: 'business', name: 'Business Pro Mailbox (15GB SSD)', price: 59, desc: 'Enterprise-grade reliability, daily backups, and team collaboration tools.' }
];

export default function HostingOrderPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Get selected plan from query param, default to basic
  const planParam = searchParams.get('plan') || 'basic';
  const initialPlan = hostingPackages.find(p => p.id === planParam) || hostingPackages[0];

  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [domainMode, setDomainMode] = useState('register'); // register, transfer, own
  const [domainInput, setDomainInput] = useState('');
  const [domainExtension, setDomainExtension] = useState('.co.za');
  const [domainChecked, setDomainChecked] = useState(false);
  const [domainAvailable, setDomainAvailable] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState('none');
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly, annual

  // Form State
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '', company: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const updatedPlan = hostingPackages.find(p => p.id === planParam);
    if (updatedPlan) {
      setSelectedPlan(updatedPlan);
    }
  }, [planParam]);

  const handleDomainCheck = (e) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    setDomainChecked(true);
    // Simulate lookup
    const isAvailable = Math.random() > 0.3;
    setDomainAvailable(isAvailable);
  };

  const getPlanPrice = () => {
    if (billingCycle === 'monthly') return selectedPlan.price;
    return selectedPlan.price * 10; // 2 months free
  };

  const getEmailPrice = () => {
    const addon = EMAIL_ADDONS.find(a => a.id === selectedEmail);
    if (!addon) return 0;
    if (billingCycle === 'monthly') return addon.price;
    return addon.price * 12;
  };

  const getDomainPrice = () => {
    if (domainMode === 'own') return 0;
    if (domainMode === 'register') {
      // Free for first year, R99 thereafter
      return billingCycle === 'monthly' ? 0 : 0; 
    }
    // Transfer is free setup
    return 0;
  };

  const getTotalPrice = () => {
    return getPlanPrice() + getEmailPrice() + getDomainPrice();
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate('/services/hosting')}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors mb-6 font-semibold"
          >
            <ArrowLeft size={16} /> Back to Hosting Packages
          </button>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* LEFT/MID: Configuration Options */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* PLAN SELECTION */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-extrabold text-[#0d1f3c] mb-4 flex items-center gap-2">
                  <Server size={20} className="text-orange-500" />
                  1. Selected Hosting Plan
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {hostingPackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPlan(pkg)}
                      className={`p-4 rounded-xl border text-left transition-all relative ${
                        selectedPlan.id === pkg.id
                          ? 'border-orange-500 bg-orange-50/20 ring-1 ring-orange-500'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <div className="font-bold text-sm text-gray-800">{pkg.name}</div>
                      <div className="text-xl font-extrabold text-[#0d1f3c] mt-2">R{pkg.price}<span className="text-xs font-normal text-gray-400">/mo</span></div>
                      <div className="text-[10px] text-gray-500 mt-1">{pkg.storage}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* DOMAIN CONFIGURATION */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-extrabold text-[#0d1f3c] mb-4 flex items-center gap-2">
                  <Globe size={20} className="text-orange-500" />
                  2. Choose your Domain Name
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: 'register', label: 'Register a New Domain' },
                    { id: 'transfer', label: 'Transfer Domain to Imagine' },
                    { id: 'own', label: 'Use Existing / I will update nameservers' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setDomainMode(mode.id);
                        setDomainChecked(false);
                        setDomainAvailable(null);
                      }}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                        domainMode === mode.id
                          ? 'bg-[#0d1f3c] text-white border-[#0d1f3c]'
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>

                {domainMode !== 'own' ? (
                  <div>
                    <form onSubmit={handleDomainCheck} className="flex gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={domainInput}
                          onChange={(e) => {
                            setDomainInput(e.target.value);
                            setDomainChecked(false);
                          }}
                          placeholder="enterdomainname"
                          className="w-full rounded-xl border border-gray-200 pl-4 pr-20 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
                        />
                        <select
                          value={domainExtension}
                          onChange={(e) => {
                            setDomainExtension(e.target.value);
                            setDomainChecked(false);
                          }}
                          className="absolute right-2 top-1.5 bottom-1.5 rounded-lg border-0 bg-gray-100 text-xs font-bold text-gray-700 px-2 cursor-pointer outline-none"
                        >
                          <option value=".co.za">.co.za (Free*)</option>
                          <option value=".com">.com</option>
                          <option value=".net">.net</option>
                          <option value=".org">.org</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl text-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Search size={15} /> Check
                      </button>
                    </form>

                    {domainChecked && (
                      <div className="mt-4 p-4 rounded-xl border transition-all">
                        {domainAvailable ? (
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm font-bold text-green-600 flex items-center gap-1.5">
                                <CheckCircle size={16} /> Congrats! {domainInput}{domainExtension} is available
                              </div>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {domainMode === 'register' ? 'Free for the first year with your hosting plan!' : 'Free transfer setup.'}
                              </p>
                            </div>
                            <span className="bg-green-100 text-green-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                              SELECTED
                            </span>
                          </div>
                        ) : (
                          <div>
                            <div className="text-sm font-bold text-red-600">
                              Oops! {domainInput}{domainExtension} is already registered
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">Please try searching for a different domain name or extension.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      You will point your domain to our local nameservers. No domain charges will be added to this invoice.
                    </p>
                    <input
                      type="text"
                      placeholder="mydomain.co.za"
                      className="mt-3 w-full max-w-md rounded-lg border border-gray-200 px-3 py-2 text-sm"
                    />
                  </div>
                )}
              </div>

              {/* EMAIL HOSTING ADD-ONS */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-extrabold text-[#0d1f3c] mb-1 flex items-center gap-2">
                  <Mail size={20} className="text-orange-500" />
                  3. Premium Email Hosting Options
                </h2>
                <p className="text-xs text-gray-400 mb-5">
                  Upgrade your mailboxes to professional cloud business mail with robust webmail and spam features (Afrihost style).
                </p>

                <div className="space-y-3">
                  {EMAIL_ADDONS.map((addon) => (
                    <label
                      key={addon.id}
                      className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedEmail === addon.id
                          ? 'border-orange-500 bg-orange-50/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="emailAddon"
                        checked={selectedEmail === addon.id}
                        onChange={() => setSelectedEmail(addon.id)}
                        className="mt-1 text-orange-500 focus:ring-orange-400"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-sm text-gray-800">{addon.name}</span>
                          <span className="text-sm font-extrabold text-[#0d1f3c]">
                            {addon.price === 0 ? 'Free' : `+R${addon.price}/mo`}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{addon.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* BILLING CYCLE SELECTOR */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h2 className="text-xl font-extrabold text-[#0d1f3c] mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-orange-500" />
                  4. Billing Period
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'monthly', title: 'Monthly Billing', desc: 'Pay month-to-month' },
                    { id: 'annual', title: 'Annual Billing', desc: '10 Months price (2 Months Free)' }
                  ].map((cycle) => (
                    <label
                      key={cycle.id}
                      className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                        billingCycle === cycle.id
                          ? 'border-orange-500 bg-orange-50/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="billingCycle"
                          checked={billingCycle === cycle.id}
                          onChange={() => setBillingCycle(cycle.id)}
                          className="text-orange-500 focus:ring-orange-400"
                        />
                        <span className="font-bold text-sm text-gray-800">{cycle.title}</span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1 ml-5">{cycle.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: SUMMARY & CHECKOUT FORM */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* ORDER SUMMARY */}
              <div className="bg-[#0d1f3c] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <span className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(244,126,32,0.2) 0%, transparent 70%)', transform: 'translate(20%, -20%)' }} />

                <h3 className="text-lg font-extrabold mb-4 flex items-center gap-2">
                  <ShoppingCart size={18} className="text-orange-400" /> Order Summary
                </h3>

                <div className="space-y-3.5 text-sm">
                  {/* Plan Price */}
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-bold">{selectedPlan.name} Hosting</span>
                      <p className="text-xs text-blue-300">{billingCycle === 'monthly' ? 'Billed Monthly' : 'Billed Annually'}</p>
                    </div>
                    <span className="font-extrabold text-blue-100">R{getPlanPrice()}</span>
                  </div>

                  {/* Domain Setup */}
                  {domainMode !== 'own' && (
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="font-bold">Domain Setup</span>
                        <p className="text-xs text-blue-300">
                          {domainInput ? `${domainInput}${domainExtension}` : 'Pending selection'}
                        </p>
                      </div>
                      <span className="font-extrabold text-green-400">FREE</span>
                    </div>
                  )}

                  {/* Email Addons */}
                  {selectedEmail !== 'none' && (
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="font-bold">
                          {EMAIL_ADDONS.find(e => e.id === selectedEmail)?.name.split(' (')[0]}
                        </span>
                        <p className="text-xs text-blue-300">Mailbox Add-on</p>
                      </div>
                      <span className="font-extrabold text-blue-100">R{getEmailPrice()}</span>
                    </div>
                  )}

                  <div className="h-px bg-white/10 my-4" />

                  {/* TOTAL */}
                  <div className="flex justify-between items-baseline">
                    <span className="font-extrabold text-lg text-white">Total Due</span>
                    <div className="text-right">
                      <span className="text-3xl font-black text-orange-400">R{getTotalPrice()}</span>
                      <span className="text-xs text-blue-200 block mt-0.5">
                        {billingCycle === 'monthly' ? 'per month' : 'for the first year'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CHECKOUT DETAILS FORM */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-6">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-[#0d1f3c]">Order Submitted!</h3>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      Thank you for choosing Imagine IPS. A support agent will contact you shortly to complete nameserver setup and domain provisioning.
                    </p>
                    <button
                      onClick={() => navigate('/services/hosting')}
                      className="mt-6 w-full py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 font-bold text-xs text-gray-700 transition-all"
                    >
                      Return to Hosting Page
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <h4 className="font-extrabold text-sm text-[#0d1f3c]">Checkout Details</h4>
                    
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-900 outline-none focus:ring-1 focus:ring-[#E4002B] focus:border-[#E4002B] transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-900 outline-none focus:ring-1 focus:ring-[#E4002B] focus:border-[#E4002B] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-900 outline-none focus:ring-1 focus:ring-[#E4002B] focus:border-[#E4002B] transition-all"
                        placeholder="+27 82 000 0000"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-1">Company / Organization (Optional)</label>
                      <input
                        type="text"
                        value={customer.company}
                        onChange={(e) => setCustomer({ ...customer, company: e.target.value })}
                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs text-gray-900 outline-none focus:ring-1 focus:ring-[#E4002B] focus:border-[#E4002B] transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <a
                      href={selectedPlan.orderUrl || 'https://ataglance.imagine.co.za/cart.php'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#E4002B] hover:bg-[#c40025] text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                    >
                      Complete Order on Client Portal
                    </a>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
