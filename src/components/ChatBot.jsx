import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUICK_ACTIONS = [
  { id: 'domains', label: '🌐 Domain Lookup & Portal', query: 'How do I register or manage a domain?' },
  { id: 'antispam', label: '🛡️ Anti Spam Protection', query: 'Tell me about Anti Spam and Security' },
  { id: 'fibre', label: '⚡ Fibre Packages & Coverage', query: 'What fibre internet deals are available?' },
  { id: 'support', label: '📞 Helpdesk & Support', query: 'How do I reach support or log in?' },
];

const KNOWLEDGE_BASE = [
  {
    keywords: ['domain', 'domains', 'co.za', 'whois', 'dns', 'register domain', 'nameserver'],
    response: `**Domains & Registration:**
You can register, transfer, and manage your domain names directly through the Imagine IPS Client Portal. 
- **.co.za** domains start from R99/yr (or Free for year 1 with eligible hosting packages).
- **.com, .net, .org** extensions are also supported with instant DNS record setups.

👉 [Go to Domain Portal](https://ataglance.imagine.co.za/login) to search, register, or manage your domains.`
  },
  {
    keywords: ['spam', 'anti spam', 'antispam', 'virus', 'security', 'malware', 'firewall', 'protection', 'filter', 'hack', 'waf'],
    response: `**Anti-Spam & Cyber Security Protection:**
Imagine IPS provides high-grade multi-layer security:
- **Anti-Spam & Email Filtering:** Proactive heuristic scoring, zero-day threat scanning, Bayesian filtering, and automated quarantine to eliminate junk before it reaches your inbox.
- **WHOIS Domain Privacy:** Masks your personal details to stop scraper spam.
- **Website Firewall (WAF) & Malware Protection:** Protects your websites against brute-force attacks, exploits, and script injection.
- **2FA Authentication:** Supported across all client portals and webmail.

Learn more on our [Cyber Security Suite](/services/security).`
  },
  {
    keywords: ['fibre', 'ftth', 'fttb', 'speed', 'coverage', 'vumatel', 'openserve', 'frogfoot', 'metrofibre', 'router', 'internet'],
    response: `**Imagine High-Speed Fibre:**
We offer uncapped, unshaped month-to-month fibre packages across South Africa's premier networks including Vumatel, Openserve, MetroFibre, Evotel, DNATel, Netstream, and Blitz Fibre.
- Includes a free-to-use Wi-Fi router
- Month-to-month contracts (no lock-in)

👉 Check your area coverage on our [Coverage Checker](/coverage) or view packages on [Fibre Services](/services/fibre).`
  },
  {
    keywords: ['voice', 'voip', 'telephone', 'phone', 'pbx', 'calls', 'number portability'],
    response: `**VoIP & Cloud PBX Solutions:**
Save up to 40% on your call costs with Imagine VoIP.
- Pure per-second billing from second 1
- Geographic Number Portability (keep your existing phone number)
- Hosted Cloud PBX for modern remote & office teams

Explore our [Voice Solutions](/services/voice) or contact sales!`
  },
  {
    keywords: ['hosting', 'cpanel', 'plesk', 'directadmin', 'wordpress', 'vps', 'server'],
    response: `**Web & WordPress Hosting:**
High-performance NVMe/SSD cloud hosting with 99.9% uptime:
- **Shared Web Hosting:** Includes Plesk, databases, webmail, and automated backups.
- **WordPress Hosting:** Pre-optimized WP environments with 1-click staging.
- **VPS & Reseller Hosting:** Scalable cloud compute with root access.

View our plans on [Hosting](/services/hosting) or order on the [Client Portal](https://ataglance.imagine.co.za/login).`
  },
  {
    keywords: ['portal', 'login', 'ataglance', 'client', 'account', 'invoice', 'billing'],
    response: `**Client Portal Access:**
Manage your invoices, services, domain names, and support tickets at [ataglance.imagine.co.za/login](https://ataglance.imagine.co.za/login).`
  },
  {
    keywords: ['webmail', 'email login', 'mail'],
    response: `**Webmail Access:**
You can access your Imagine business email anytime via web browser at [webmail.imagine.co.za](https://webmail.imagine.co.za/).`
  },
  {
    keywords: ['contact', 'phone', 'email', 'support', 'help', 'helpdesk', 'hours', 'call', 'ticket'],
    response: `**Contact Imagine IPS:**
- 📞 **Phone:** [011 214 7600](tel:0112147600) (+27 11 214 7600)
- ✉️ **Helpdesk:** [helpdesk@imagine.co.za](mailto:helpdesk@imagine.co.za)
- 💼 **Sales:** [sales@imagine.co.za](mailto:sales@imagine.co.za)
- 🏢 **Address:** 2nd Floor, West Wing, 158 Jan Smuts Building, 9 Walters Ave, Rosebank, Johannesburg

Our technical team is ready to assist you!`
  }
];

function getBotReply(userText) {
  const clean = userText.toLowerCase().trim();
  
  if (!clean) return "How can I help you today? Feel free to ask about our Fibre, Domains, Anti-Spam Security, or Hosting services.";
  
  if (clean.includes('hello') || clean.includes('hi') || clean.includes('hey') || clean.includes('good morning') || clean.includes('good afternoon')) {
    return "Hello! 👋 Welcome to Imagine IPS. I can assist you with domain registrations, anti-spam security, fibre coverage, hosting, or connecting you with our support team. What would you like to know?";
  }

  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some(kw => clean.includes(kw))) {
      return item.response;
    }
  }

  return `Thanks for reaching out! Our team provides South Africa with ultra-fast Fibre, VoIP, Web & Email Hosting, Anti-Spam Security, and Domain registrations.

For domain services, you can visit [https://ataglance.imagine.co.za/login](https://ataglance.imagine.co.za/login).
For urgent technical assistance, contact our helpdesk at **011 214 7600** or email [helpdesk@imagine.co.za](mailto:helpdesk@imagine.co.za).`;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! 👋 I'm the **Imagine IPS Assistant**. How can I help you today? You can ask about our **Domains**, **Anti-Spam Protection**, **Fibre Packages**, or **Support**.",
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = typeof textToSend === 'string' ? textToSend : input;
    if (!query || !query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = getBotReply(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const renderFormattedText = (text) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = linkRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        const label = match[1];
        const url = match[2];
        const isExternal = url.startsWith('http');

        if (isExternal) {
          parts.push(
            <a
              key={match.index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4002B] font-bold underline inline-flex items-center gap-0.5 hover:text-[#c40025]"
            >
              {label} <ExternalLink size={11} className="inline ml-0.5" />
            </a>
          );
        } else {
          parts.push(
            <Link
              key={match.index}
              to={url}
              onClick={() => setIsOpen(false)}
              className="text-[#E4002B] font-bold underline hover:text-[#c40025]"
            >
              {label}
            </Link>
          );
        }
        lastIndex = linkRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const processedParts = parts.map((part, pIdx) => {
        if (typeof part !== 'string') return part;
        const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
        return boldParts.map((bPart, bIdx) => {
          if (bPart.startsWith('**') && bPart.endsWith('**')) {
            return <strong key={bIdx} className="font-bold text-gray-900">{bPart.slice(2, -2)}</strong>;
          }
          return bPart;
        });
      });

      return (
        <p key={idx} className={idx > 0 ? "mt-1.5 leading-relaxed" : "leading-relaxed"}>
          {processedParts}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[360px] sm:w-[400px] h-[540px] max-h-[82vh] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#0f1720] text-white px-4 py-3.5 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#E4002B] flex items-center justify-center text-white shadow-md">
                  <Bot size={20} />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0f1720] rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  Imagine Support Bot
                  <span className="text-[9px] bg-red-500/20 text-red-400 px-1.5 py-0.2 rounded font-semibold border border-red-500/30">AI Help</span>
                </h3>
                <p className="text-[11px] text-gray-400">Online | Fast Answers</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([{
                  id: Date.now(),
                  sender: 'bot',
                  text: "Chat cleared! How can I assist you now?",
                  time: 'Just now'
                }])}
                title="Reset conversation"
                className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <RefreshCw size={15} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gray-50/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-red-100 text-[#E4002B] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={15} />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-sm text-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#E4002B] text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-150 rounded-bl-none'
                  }`}
                >
                  {renderFormattedText(msg.text)}
                  <span
                    className={`block text-[9px] mt-1.5 ${
                      msg.sender === 'user' ? 'text-red-100 text-right' : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-gray-400 text-xs pl-9">
                <div className="flex gap-1 py-2 px-3 bg-white rounded-full border border-gray-200 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-[#E4002B] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#E4002B] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#E4002B] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span className="text-[11px]">Imagine Bot is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 bg-white border-t border-gray-150 overflow-x-auto flex gap-1.5 scrollbar-none">
            {QUICK_ACTIONS.map((qa) => (
              <button
                key={qa.id}
                onClick={() => handleSend(qa.query)}
                className="whitespace-nowrap text-[11px] font-medium bg-gray-100 hover:bg-red-50 hover:text-[#E4002B] hover:border-[#E4002B]/40 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200 transition-all shrink-0"
              >
                {qa.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-gray-150 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about domains, anti-spam, fibre..."
              className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 outline-none focus:bg-white focus:ring-1 focus:ring-[#E4002B] focus:border-[#E4002B] transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-[#E4002B] disabled:bg-gray-200 hover:bg-[#c40025] text-white flex items-center justify-center transition-colors shrink-0 shadow-sm"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group bg-[#E4002B] hover:bg-[#c40025] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          aria-label="Open Live Chat"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500 border-2 border-white"></span>
          </span>
          <MessageCircle size={24} className="group-hover:rotate-6 transition-transform" />
          <span className="hidden sm:inline font-bold text-xs pr-1">Chat with us</span>
        </button>
      )}
    </div>
  );
}
