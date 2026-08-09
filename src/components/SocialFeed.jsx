import React, { useState } from 'react';
import {
  Facebook,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Users,
  ThumbsUp,
} from 'lucide-react';

/* ─── Real Facebook posts from imagine.co.za FB page ─────────────────────── */
const FB_POSTS = [
  {
    id: 1,
    image: '/assets/social/imagine-class-1976.jpg',
    caption:
      'We Salute the Class of 1976! Yesterday\'s Courage. Today\'s Future. Respect. Honor. Legacy. 🙌🏿❤️ #YouthDay #June16 #ImagineIPS',
    date: 'June 16, 2025',
    likes: 47,
    comments: 8,
    shares: 12,
    tag: 'Youth Day',
    tagColor: '#dc2626',
  },
  {
    id: 2,
    image: '/assets/social/imagine-furrow-live.jpg',
    caption:
      'Twenty On Furrow — WE ARE HERE, WE ARE LIVE! Come find us! 📍 For 2 months FREE Internet! Because Fibre is in our DNA 🧬 and connecting people for smart living is BOLDLY RED. #DNATel #ImagineIPS #FreeInternet',
    date: 'July 3, 2025',
    likes: 93,
    comments: 21,
    shares: 38,
    tag: 'Community Event',
    tagColor: '#d97706',
  },
  {
    id: 3,
    image: null,
    caption:
      '🚀 Imagine Fearless Fibre Internet — Speed without limits. Connection without compromise.\n\nReady to upgrade your home or office internet? Get in touch today and let\'s get you connected on South Africa\'s fastest growing fibre network! 💪🔴 #Fibre #ImagineIPS #SmartLiving',
    date: 'Jul 28, 2025',
    likes: 34,
    comments: 5,
    shares: 9,
    tag: 'Promotion',
    tagColor: '#0d1f3c',
    bgGradient: 'linear-gradient(135deg, #c41e3a 0%, #0d1f3c 100%)',
  },
];

const FB_PAGE = {
  name: 'Imagine IPS',
  location: 'Johannesburg',
  tagline: 'Imagine Fearless Fibre Internet',
  followers: '38+',
  url: 'https://www.facebook.com/profile.php?id=61587802821485',
  profileImg: '/assets/imagine-logo.png',
};

export default function SocialFeed() {
  const [active, setActive] = useState(0);
  const [liked, setLiked] = useState({});

  const prev = () => setActive((p) => (p === 0 ? FB_POSTS.length - 1 : p - 1));
  const next = () => setActive((p) => (p === FB_POSTS.length - 1 ? 0 : p + 1));
  const toggleLike = (id) => setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="py-20 px-6 lg:px-10 bg-white" id="social">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-3 border"
              style={{ background: '#e7f0ff', color: '#1877f2', borderColor: '#c9d8f7' }}>
              <Facebook size={12} /> Follow us on Facebook
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold mb-1" style={{ color: '#0d1f3c' }}>
              Stay connected with Imagine IPS
            </h2>
            <p className="text-gray-500 text-sm">
              Real stories, community updates & promotions — straight from our Facebook page.
            </p>
          </div>

          {/* FB Page card */}
          <a
            href={FB_PAGE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-2xl px-4 py-3 transition-all group shrink-0"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: '#1877f2' }}>
              <Facebook size={20} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-sm" style={{ color: '#0d1f3c' }}>{FB_PAGE.name}</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <Users size={10} /> {FB_PAGE.followers} followers · Johannesburg
              </div>
            </div>
            <ExternalLink size={14} className="text-gray-300 group-hover:text-blue-400 transition-colors ml-1" />
          </a>
        </div>

        {/* Posts grid + carousel */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT: featured / carousel (large) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white">

              {/* Post image or gradient bg */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '1 / 1', background: '#111' }}>
                {FB_POSTS[active].image ? (
                  <img
                    src={FB_POSTS[active].image}
                    alt={FB_POSTS[active].tag}
                    className="w-full h-full transition-all duration-500"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background: FB_POSTS[active].bgGradient }}>
                    <div className="text-center px-8">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ background: 'rgba(255,255,255,0.15)' }}>
                        <Facebook size={32} className="text-white" />
                      </div>
                      <p className="text-white font-bold text-lg leading-snug">
                        {FB_PAGE.tagline}
                      </p>
                    </div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: FB_POSTS[active].tagColor }}>
                    {FB_POSTS[active].tag}
                  </span>
                </div>

                {/* Nav arrows */}
                <button onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 border border-white/30 text-white transition-all backdrop-blur-sm">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/40 border border-white/30 text-white transition-all backdrop-blur-sm">
                  <ChevronRight size={16} />
                </button>

                {/* Dot indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {FB_POSTS.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === active ? 'bg-white w-4' : 'bg-white/50'}`} />
                  ))}
                </div>
              </div>

              {/* Post content */}
              <div className="p-5">
                {/* FB header row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#1877f2' }}>
                    <Facebook size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#0d1f3c' }}>Imagine IPS</div>
                    <div className="text-xs text-gray-400">{FB_POSTS[active].date}</div>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-3">
                  {FB_POSTS[active].caption}
                </p>

                {/* Reactions bar */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleLike(FB_POSTS[active].id)}
                      className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                      style={{ color: liked[FB_POSTS[active].id] ? '#e41e3f' : '#65676B' }}
                    >
                      <Heart size={15} fill={liked[FB_POSTS[active].id] ? '#e41e3f' : 'none'}
                        stroke={liked[FB_POSTS[active].id] ? '#e41e3f' : 'currentColor'} />
                      {FB_POSTS[active].likes + (liked[FB_POSTS[active].id] ? 1 : 0)} Likes
                    </button>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MessageCircle size={14} /> {FB_POSTS[active].comments}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Share2 size={14} /> {FB_POSTS[active].shares}
                    </span>
                  </div>
                  <a
                    href={FB_PAGE.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold flex items-center gap-1 hover:underline"
                    style={{ color: '#1877f2' }}
                  >
                    View on Facebook <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: stacked thumbnails */}
          <div className="flex flex-col gap-4">
            {FB_POSTS.map((post, i) => (
              <button
                key={post.id}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl overflow-hidden border transition-all duration-300 ${
                  i === active
                    ? 'ring-2 shadow-lg'
                    : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-md'
                }`}
                style={i === active ? { ringColor: '#1877f2', borderColor: '#1877f2', background: '#f0f6ff' } : {}}
              >
                <div className="flex gap-3 p-3 items-start">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 flex items-center justify-center" style={{ background: '#111' }}>
                    {post.image ? (
                      <img src={post.image} alt={post.tag} className="w-full h-full" style={{ objectFit: 'contain', objectPosition: 'center' }} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center"
                        style={{ background: post.bgGradient }}>
                        <Facebook size={20} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white mb-1 inline-block"
                      style={{ background: post.tagColor }}>
                      {post.tag}
                    </span>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">{post.caption}</p>
                    <div className="flex items-center gap-2 mt-1.5 text-gray-400 text-[10px]">
                      <ThumbsUp size={10} /> {post.likes}
                      <MessageCircle size={10} /> {post.comments}
                    </div>
                  </div>
                </div>
              </button>
            ))}

            {/* Follow CTA */}
            <a
              href={FB_PAGE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90 shadow-lg"
              style={{ background: '#1877f2' }}
            >
              <Facebook size={16} /> Follow Imagine IPS on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
