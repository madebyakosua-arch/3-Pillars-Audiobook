import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Star, 
  Menu, 
  X,
  ChevronRight,
  ChevronDown,
  Mail,
  ShieldCheck,
  Clock,
  BookOpen
} from 'lucide-react';
import { AUDIOBOOKS, TESTIMONIALS, Audiobook } from './constants';

const TopBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-zinc-900 text-white py-2 px-4 text-center relative z-[60]">
      <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 md:gap-4">
        <span className="hidden sm:inline">Limited Time Offer:</span>
        <span className="text-health">Free Audiobook</span>
        <span className="hidden sm:inline">with your first purchase</span>
        <span className="bg-white/10 px-2 py-1 rounded font-mono">
          {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </p>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBanner />
      <nav className={`transition-all duration-300 border-b border-zinc-100 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-white/80 backdrop-blur-md py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-tight whitespace-nowrap">3 Pillars Audiobooks</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#pillars" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Pillars</a>
            <a href="#audiobooks" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Marketplace</a>
            <a href="#testimonials" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Testimonials</a>
            <button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg shadow-zinc-200">
              Listen Now
            </button>
          </div>

          <button className="md:hidden text-zinc-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-white border-y border-zinc-100 overflow-hidden md:hidden shadow-2xl"
            >
              <div className="p-6 flex flex-col gap-6">
                {[
                  { name: 'Pillars', href: '#pillars' },
                  { name: 'Marketplace', href: '#audiobooks' },
                  { name: 'Testimonials', href: '#testimonials' }
                ].map((item, i) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-zinc-900 tracking-tight"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-zinc-900 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl shadow-zinc-200"
                >
                  Listen Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

const TrustBadges = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 ${className}`}>
    <div className="flex items-center gap-2 text-zinc-500">
      <ShieldCheck className="w-5 h-5 text-wealth" />
      <span className="text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
    </div>
    <div className="flex items-center gap-2 text-zinc-500">
      <Zap className="w-5 h-5 text-health" />
      <span className="text-xs font-bold uppercase tracking-widest">Instant Access</span>
    </div>
    <div className="flex items-center gap-2 text-zinc-500">
      <CheckCircle2 className="w-5 h-5 text-relationships" />
      <span className="text-xs font-bold uppercase tracking-widest">3 Pillars Audiobooks Guarantee</span>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-relationships/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-wealth/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-health/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl shadow-zinc-200">
            <span className="w-2 h-2 bg-health rounded-full animate-pulse" /> Practical Wisdom for Everyday Life
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[0.95]">
            Master your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-relationships via-wealth to-health">Life.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed font-medium">
            Discover a curated marketplace of powerful audiobooks designed to help you master your Relationships, Financial Freedom, and Vitality. No fluff, just actionable wisdom for your daily life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="group bg-zinc-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-zinc-800 transition-all active:scale-95 flex items-center gap-3 shadow-2xl shadow-zinc-300">
              Listen Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 px-6 py-4">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                 ))}
               </div>
               <div className="text-left">
                 <span className="text-sm font-bold text-zinc-900 block">Join 5,421+ achievers</span>
                 <span className="text-[10px] font-bold text-health uppercase tracking-widest">New titles added this week</span>
               </div>
            </div>
          </div>
          
          <TrustBadges />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 relative group cursor-pointer">
             <img 
               src="https://picsum.photos/seed/lifestyle/1200/800" 
               alt="Lifestyle" 
               className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-zinc-900 text-zinc-900 ml-1" />
                </div>
             </div>
             <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-left">
                  <p className="text-white font-bold text-lg drop-shadow-md">The 3 Pillars Audiobooks Framework</p>
                  <p className="text-white/80 text-sm drop-shadow-md">Watch the 2-minute intro</p>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const painPoints = [
    {
      title: "The 'Knowledge Without Power' Trap",
      desc: "Buying books is easy. Changing your life is hard. Most people collect information but never implement it. 3 Pillars Audiobooks is for anyone who is tired of 'shelf-help' and ready for a structured path to real change.",
      icon: <Zap className="w-6 h-6 text-health" />
    },
    {
      title: "The Imbalance Tax",
      desc: "Life is a delicate balancing act. Often, we focus so much on one area that others suffer. We help you grow in your relationships, your career, and your health—all at once, so you don't have to choose.",
      icon: <TrendingUp className="w-6 h-6 text-wealth" />
    },
    {
      title: "The 'Fluff' Fatigue",
      desc: "We know your time is precious. That's why we meticulously filter through the noise to pick only the audiobooks that get straight to the point and offer immediate, practical value.",
      icon: <Heart className="w-6 h-6 text-relationships" />
    }
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
            Why most self-help <br /> doesn't work for you
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg font-medium">
            The problem isn't a lack of information—it's a lack of implementation. Most people are overwhelmed by too much advice and not enough action.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {painPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16"
            >
              <div className="w-20 h-20 rounded-[24px] bg-white shadow-xl shadow-zinc-200/50 flex items-center justify-center shrink-0 border border-zinc-100">
                {point.icon}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">{point.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-lg md:text-xl font-medium">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonSection = () => {
  const comparisons = [
    { feature: "Focus", others: "Passive Listening", pillars: "Active Implementation" },
    { feature: "Selection", others: "Overwhelming Choice", pillars: "Curated Excellence" },
    { feature: "Content", others: "90% Filler", pillars: "100% High-Impact" },
    { feature: "Support", others: "Audio Only", pillars: "Audio + Action Plans" },
    { feature: "Outcome", others: "Temporary Inspiration", pillars: "Lasting Transformation" },
  ];

  return (
    <section className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-6">The 3 Pillars Audiobooks Difference</h2>
          <p className="text-zinc-600 text-lg">
            We don't just sell audiobooks. We provide a framework for transformation.
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="min-w-[600px] rounded-[40px] border border-zinc-100 shadow-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="p-4 md:p-8 font-bold text-sm md:text-lg">Feature</th>
                  <th className="p-4 md:p-8 font-bold text-sm md:text-lg opacity-50">The Others</th>
                  <th className="p-4 md:p-8 font-bold text-sm md:text-lg text-health">3 Pillars Audiobooks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-zinc-50 transition-colors">
                    <td className="p-4 md:p-8 font-bold text-zinc-900 text-sm md:text-base">{c.feature}</td>
                    <td className="p-4 md:p-8 text-zinc-500 text-sm md:text-base">{c.others}</td>
                    <td className="p-4 md:p-8 font-bold text-zinc-900 flex items-center gap-2 text-sm md:text-base">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-health shrink-0" />
                      {c.pillars}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

const CostOfInaction = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-[40px] md:rounded-[60px] p-8 md:p-24 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-relationships/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                Don't wait.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
                Every day you spend out of balance is a day you're leaking potential. Money can be regained, but time, health, and deep connection cannot.
              </p>
              <div className="space-y-6">
                {[
                  "Regret is heavier than the discipline of listening.",
                  "Your family deserves the best version of you, not the leftovers.",
                  "Wealth without health is the ultimate failure."
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-relationships/20 flex items-center justify-center mt-1">
                      <X className="w-4 h-4 text-relationships" />
                    </div>
                    <p className="text-zinc-300 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white/5 rounded-[40px] border border-white/10 p-8 flex flex-col justify-center">
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-4">The Reality Check</p>
                <p className="text-white text-3xl font-bold mb-8 leading-tight">
                  "I spent years working overtime, only to realize I was missing out on the moments that actually mattered."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800" />
                  <div>
                    <p className="text-white font-bold">Anonymous Parent</p>
                    <p className="text-zinc-500 text-sm">Regretting the lost years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PillarsSection = () => {
  const pillars = [
    {
      id: 'relationships',
      title: 'Unbreakable Relationships',
      color: 'text-relationships',
      bg: 'bg-relationships/5',
      glow: 'pillar-glow-relationships',
      icon: <Heart className="w-8 h-8" />,
      desc: 'Master the art of connection. Build deeper, more meaningful relationships with your partner, family, and friends.',
      features: ['Emotional Intelligence', 'Conflict Resolution', 'Authentic Connection', 'Deepening Intimacy']
    },
    {
      id: 'wealth',
      title: 'Financial Freedom',
      color: 'text-wealth',
      bg: 'bg-wealth/5',
      glow: 'pillar-glow-wealth',
      icon: <TrendingUp className="w-8 h-8" />,
      desc: 'Take control of your financial future. Learn how to manage your money, build savings, and create lasting security.',
      features: ['Money Management', 'Savings Growth', 'Financial Peace', 'Wealth Mindset']
    },
    {
      id: 'health',
      title: 'Vitality & Energy',
      color: 'text-health',
      bg: 'bg-health/5',
      glow: 'pillar-glow-health',
      icon: <Zap className="w-8 h-8" />,
      desc: 'Reclaim your energy and feel your best. Discover simple, effective habits for better sleep, nutrition, and mental clarity.',
      features: ['Better Sleep', 'Daily Energy', 'Mental Clarity', 'Stress Management']
    }
  ];

  return (
    <section id="pillars" className="py-24 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">The Framework</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">The 3 Pillars Audiobooks</h2>
          </div>
          <p className="text-zinc-600 text-lg max-w-sm font-medium">
            The foundation of a great life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className={`relative group p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-zinc-100 transition-all duration-500 hover:border-transparent ${pillar.bg} ${pillar.glow}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 ${pillar.color}`}>
                {pillar.icon}
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 mb-4">{pillar.title}</h3>
              <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                {pillar.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {pillar.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-700 font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${pillar.color}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white text-zinc-900 font-bold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:text-white">
                Explore {pillar.title}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Choose Your Pillar",
      desc: "Identify the area of your life that needs the most attention right now. Whether it's your relationships, your finances, or your health, we have a curated collection ready for you.",
      icon: <Menu className="w-6 h-6" />
    },
    {
      title: "Listen & Learn",
      desc: "Dive into high-impact audiobooks that skip the fluff. Our selections are chosen for their practical wisdom and ability to be consumed during your daily routine.",
      icon: <Play className="w-6 h-6" />
    },
    {
      title: "Take Action",
      desc: "Every audiobook comes with a dedicated '3 Pillars Audiobooks Action Plan'. Use these step-by-step guides to implement what you've learned and start seeing real-world results immediately.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-900 mb-4">How it works</h2>
          <p className="text-zinc-500 text-lg">Three simple steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedAudiobooks = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'relationships' | 'wealth' | 'health'>('all');

  const filteredBooks = activeFilter === 'all' 
    ? AUDIOBOOKS 
    : AUDIOBOOKS.filter(book => book.pillar === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'relationships', label: 'Relationships' },
    { id: 'wealth', label: 'Wealth' },
    { id: 'health', label: 'Health' },
  ];

  return (
    <section id="audiobooks" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Browse our curated collections
          </h2>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-12">
            Each audiobook is hand-selected and comes with a dedicated '3 Pillars Audiobooks Action Plan' to help you turn knowledge into real-world results.
          </p>
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center gap-3 md:gap-4 no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`whitespace-nowrap px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm font-bold transition-all ${
                  activeFilter === f.id 
                    ? 'bg-zinc-900 text-white shadow-lg' 
                    : 'bg-white text-zinc-600 hover:bg-zinc-200 border border-zinc-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={book.id}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl mb-6 bg-zinc-200">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <button className="w-full bg-white text-zinc-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Play className="w-4 h-4 fill-zinc-900" /> Preview Sample
                    </button>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white z-10 ${
                    book.pillar === 'relationships' ? 'bg-relationships' : 
                    book.pillar === 'wealth' ? 'bg-wealth' : 'bg-health'
                  }`}>
                    {book.pillar}
                  </div>
                  {parseInt(book.id) % 2 === 0 && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-zinc-900 text-white z-10 animate-pulse">
                      Limited Stock
                    </div>
                  )}
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-bold text-zinc-900 mb-1 group-hover:text-wealth transition-colors">{book.title}</h3>
                  <p className="text-zinc-500 text-sm mb-3">by {book.author}</p>
                  <p className="text-zinc-600 text-sm mb-6 line-clamp-2 leading-relaxed">{book.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-zinc-900">{book.price}</span>
                    <button className="text-sm font-bold text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Own the Blueprint <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Actionable Guides",
      desc: "We don't just give you audio. Every purchase includes a digital action plan to help you implement the lessons.",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Zero Fluff",
      desc: "Our curators filter out the filler. You get high-impact insights that respect your time and intelligence.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "3 Pillars Audiobooks Guarantee",
      desc: "Not happy with your choice? Our 3 Pillars Audiobooks Guarantee lets you swap any title for a new one, 100% free. Your growth is our priority.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Listen Anywhere",
      desc: "Crystal-clear audio quality that's perfect for learning during your commute, workout, or daily chores.",
      icon: <Play className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">The Advantage</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">The Advantage</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {benefits.map((b, i) => (
                <div key={i}>
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900 mb-2">{b.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-100 rounded-[60px] overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/listening/800/800" 
                alt="Listening" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-wealth/20 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-zinc-100 max-w-xs hidden md:block">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-zinc-900 font-medium italic mb-4">"The best investment I've made in myself this year. Practical and powerful."</p>
              <p className="text-zinc-500 text-sm font-bold">— Sarah Jenkins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GuaranteeSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900 rounded-[40px] md:rounded-[64px] p-8 md:p-24 overflow-hidden shadow-2xl shadow-zinc-400"
        >
          {/* Brand-aligned background accents */}
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-wealth rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-health rounded-full blur-[120px]" />
            <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-relationships rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3 h-3 text-health" /> The 3 Pillars Promise
              </div>
              
              <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-[0.95] tracking-tight">
                The 3 Pillars <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-relationships via-wealth to-health">Audiobooks</span> <br />
                Guarantee.
              </h2>
              
              <p className="text-zinc-400 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed max-w-xl">
                We don't just sell audiobooks; we invest in your transformation. If any title doesn't resonate with your journey, we'll replace it instantly. No friction, no hurdles—just your growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "30-Day Swap Window",
                  "100% Free Selection",
                  "No Questions Asked",
                  "Unlimited Support"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white font-bold group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-health" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-[32px] md:rounded-[48px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 md:p-12 flex flex-col justify-between backdrop-blur-xl relative group min-h-[400px] lg:aspect-square">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 md:top-12 md:right-12 w-16 h-16 md:w-24 md:h-24 border border-white/10 rounded-full flex items-center justify-center rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                  <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-white/20" />
                </div>

                <div>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-2xl">
                    <ShieldCheck className="w-7 h-7 md:w-8 md:h-8 text-wealth" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">Risk-Free <br /> Transformation</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                    Our goal is your transformation. If the wisdom doesn't stick, we'll find you the one that does.
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-health/20 flex items-center justify-center text-health font-bold text-xs shrink-0">
                      3P
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold">3 Pillars Audiobooks</p>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Verified Policy</p>
                    </div>
                  </div>
                  <div className="bg-health/20 text-health text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shrink-0">
                    Active
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-2xl rotate-12 animate-pulse hidden sm:flex">
                <div className="text-center text-zinc-900">
                  <p className="font-black text-xl md:text-2xl leading-none">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest">Secure</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wealth rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-relationships rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Real stories from our community</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            See how everyday people are using the 3 Pillars Audiobooks framework to transform their relationships, build wealth, and reclaim their health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-10 rounded-[40px] border border-white/10"
            >
              <div className="flex items-center gap-4 mb-8">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-wealth/30" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-zinc-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-zinc-300 leading-relaxed italic">"{t.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-[60px] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Join the 3 Pillars Audiobooks Community</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              Ready to start your transformation? Get a free audiobook and receive weekly curated insights directly to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-wealth transition-colors"
                    />
                  </div>
                  <button type="submit" className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all active:scale-95">
                    Get Free Audiobook
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-health/20 border border-health/30 p-6 rounded-3xl inline-block"
                >
                  <p className="text-health font-bold text-xl flex items-center gap-2">
                    <CheckCircle2 /> Welcome to the inner circle! Check your inbox.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <p className="mt-8 text-zinc-500 text-sm">Join 12,000+ weekly readers. No spam, ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 text-center bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-7xl font-bold text-zinc-900 mb-8 tracking-tight">
            Start your journey <br /> to a better life.
          </h2>
          <p className="text-zinc-600 text-xl mb-12 max-w-2xl mx-auto">
            Don't wait for the 'perfect' time. The best time to start building your 3 Pillars Audiobooks is right now. Join thousands of others who are transforming their lives one chapter at a time.
          </p>
          <button className="bg-zinc-900 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-2xl shadow-zinc-300 mb-12">
            Listen Now
          </button>

          <TrustBadges />
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-50 py-20 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center shrink-0">
                <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">3 Pillars Audiobooks</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed">
              Simple tools for a better life.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-2">
            <div>
              <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-zinc-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Guarantee</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-200 text-zinc-400 text-xs font-medium uppercase tracking-widest">
          <p>© 2026 3 Pillars Audiobooks. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly are the '3 Pillars Audiobooks'?",
      answer: "The 3 Pillars Audiobooks represent the core foundations of a balanced and fulfilling life: Relationships, Financial Freedom, and Vitality. We believe that true success isn't just about making money or being fit; it's about harmonizing all three. Our marketplace specifically curates audiobooks that provide practical, actionable wisdom in these three critical areas."
    },
    {
      question: "How do you select the audiobooks in your marketplace?",
      answer: "Unlike massive platforms that list millions of titles, we are highly selective. Our team of curators reviews hundreds of books to find the 'gold'—titles that aren't just theoretical but offer real-world strategies. We look for authors with proven track records and content that has a high 'implementation-to-filler' ratio."
    },
    {
      question: "Is this a monthly subscription service like Audible?",
      answer: "No. 3 Pillars Audiobooks is a curated marketplace, not a subscription. You only pay for the specific audiobooks you want. There are no recurring monthly fees, no 'credits' to manage, and no hidden costs. You own what you buy, forever."
    },
    {
      question: "What are the 'Digital Action Plans' mentioned?",
      answer: "Most of our curated titles come bundled with a '3 Pillars Audiobooks Action Plan'—a downloadable PDF or digital workbook. These guides summarize the key takeaways, provide exercises, and offer a step-by-step roadmap to help you actually apply the lessons from the audiobook to your daily life."
    },
    {
      question: "Can I listen to my audiobooks on any device?",
      answer: "Yes! Once you purchase an audiobook, you can download it and listen on your smartphone, tablet, or computer. Our files are compatible with all standard media players and audiobook apps, giving you the freedom to learn wherever you are—during your commute, at the gym, or while doing chores."
    },
    {
      question: "What if I don't find the audiobook helpful?",
      answer: "We stand by our curation with the '3 Pillars Audiobooks Guarantee'. If you aren't happy with the title you purchased, you can select a new title from our marketplace for 100% free. Simply reach out to our support team within 30 days, and we'll help you find a better fit for your journey. Please note that we do not provide cash refunds."
    },
    {
      question: "How do I get started with my first purchase?",
      answer: "It's simple. Browse our curated collections in the Relationships, Financial Freedom, or Vitality sections. Once you find a title that resonates with you, click 'Buy Now' to complete your purchase. You'll receive an instant download link and your digital action plan via email."
    }
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-500 text-lg">Everything you need to know about the 3 Pillars Audiobooks Marketplace.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl border border-zinc-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-bold text-zinc-900 group-hover:text-wealth transition-colors">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-zinc-400" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-wealth selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ComparisonSection />
      <CostOfInaction />
      <PillarsSection />
      <FeaturedAudiobooks />
      <HowItWorks />
      <Benefits />
      <GuaranteeSection />
      <Testimonials />
      <LeadCapture />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
