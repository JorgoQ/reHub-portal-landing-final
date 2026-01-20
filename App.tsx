
import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Calendar, 
  LayoutDashboard, 
  FileText, 
  Activity, 
  Users, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Menu, 
  X,
  Plus,
  Minus,
  Building2,
  HardHat,
  MonitorCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  Zap,
  Play,
  Layers,
  Search,
  Bot,
  Globe,
  DollarSign,
  TrendingDown,
  ParkingCircle,
  Mail,
  Smartphone,
  Info,
  List,
  Grid,
  MapPin,
  Image as ImageIcon,
  Check,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 border-b border-primary-100 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-500 p-1.5 rounded-md">
                <ShieldCheck className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary-500">ReHub</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#impact" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">Penalty ROI</a>
            <a href="#features" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">AI & Bulk</a>
            <a href="#compliance" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">Laws</a>
            <a href="#pricing" className="text-primary-500 hover:text-accent-500 font-medium transition-colors">Pricing</a>
            <button className="bg-accent-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-accent-600 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-500 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-primary-100 py-6 px-4 shadow-xl">
          <div className="flex flex-col space-y-4">
            <a href="#impact" onClick={() => setIsOpen(false)} className="text-primary-500 font-medium">Penalty ROI</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-primary-500 font-medium">AI & Bulk</a>
            <a href="#compliance" onClick={() => setIsOpen(false)} className="text-primary-500 font-medium">Compliance</a>
            <button className="bg-accent-500 text-white px-5 py-3 rounded-lg font-semibold w-full">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Counter = ({ 
  target, 
  label, 
  prefix = "", 
  suffix = "", 
  decimals = 0, 
  colorClass = "text-primary-500" 
}: { 
  target: number; 
  label: string; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
  colorClass?: string;
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2000;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target]);

  return (
    <div className="text-center p-4">
      <div className={`text-2xl md:text-4xl font-bold mb-1 transition-colors duration-500 ${colorClass}`}>
        {prefix}{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
      </div>
      <div className="text-[10px] uppercase font-bold text-neutral-text tracking-[0.1em]">{label}</div>
    </div>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-24 overflow-hidden bg-white">
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary-50/40 rounded-bl-[150px]"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Zap className="w-4 h-4 text-accent-500" />
            <span>AI-Powered NYC Compliance Ecosystem</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-500 leading-[1.1] mb-8">
            The Professional Standard for <span className="gradient-text">NYC Compliance.</span>
          </h1>
          <p className="text-xl text-neutral-text mb-10 max-w-xl leading-relaxed">
            From LL97 carbon limits to LL152 gas inspections, ReHub automates your entire portfolio's regulatory lifecycle with AI precision.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button className="bg-accent-500 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Start Free Portfolio Audit
            </button>
            <button className="bg-white text-primary-500 border-2 border-primary-500 px-8 py-5 rounded-lg font-bold text-lg hover:bg-primary-50 transition-all flex items-center justify-center">
              Watch Demo <Play className="ml-2 w-5 h-5 fill-current" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 border-t border-primary-100 pt-8">
            <Counter target={847} label="Properties Managed" colorClass="text-primary-500" />
            <Counter target={2.3} label="Penalties Avoided" prefix="$" suffix="M" decimals={1} colorClass="text-semantic-success" />
            <Counter target={98.7} label="On-Time Filing" suffix="%" decimals={1} colorClass="text-accent-500" />
          </div>
        </div>
        
        <div className="mt-16 lg:mt-0 relative">
          <div className="relative z-10 bg-white rounded-2xl shadow-modal p-4 border border-primary-50 animate-float">
             {/* PLACEHOLDER: /screenshots/dashboard-hero.png */}
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" alt="Platform Dashboard" className="rounded-lg w-full h-auto" />
             <div className="absolute -top-6 -right-6 bg-accent-500 text-white p-6 rounded-2xl shadow-2xl hidden md:block">
               <Bot className="w-8 h-8 mb-2" />
               <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">ReBot AI</div>
               <div className="text-base font-bold italic">"Which buildings are at risk?"</div>
             </div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  </section>
);

const PlatformWalkthroughSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-6">See ReHub in Action</h2>
      <p className="text-lg text-neutral-text mb-12">Take a 3-minute tour of the features that save NYC managers 10+ hours per week.</p>
      
      <div className="relative aspect-video bg-primary-900 rounded-3xl overflow-hidden shadow-modal border-[8px] border-primary-50 group">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <button className="w-24 h-24 bg-accent-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
            <Play className="w-12 h-12 ml-2 fill-current" />
          </button>
        </div>
        {/* PLACEHOLDER: /screenshots/video-thumbnail.png */}
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Platform Video Walkthrough" className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-8">
        {[
          { t: "0:00", l: "Dashboard" },
          { t: "0:30", l: "Bulk Select" },
          { t: "1:00", l: "AI ReBot" },
          { t: "1:30", l: "Scheduling" },
          { t: "2:00", l: "Auto-Stamp" },
          { t: "2:30", l: "Bulk Pay" }
        ].map(item => (
          <div key={item.t} className="p-3 bg-primary-50 rounded-lg text-center cursor-pointer hover:bg-primary-100 transition-colors">
            <div className="text-xs font-bold text-accent-500">{item.t}</div>
            <div className="text-[10px] font-bold text-primary-500 uppercase tracking-wider">{item.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinancialImpactSection = () => {
  const [properties, setProperties] = useState(50);
  const avgPenalty = 2500;
  const potentialLoss = properties * avgPenalty;
  const rehubCost = 5000;
  const roi = Math.round(((potentialLoss - rehubCost) / rehubCost) * 100);

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">The Cost of Non-Compliance</h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">NYC DOB penalties can devastate your bottom line. Protect your assets with data-driven management.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <AlertTriangle className="mr-3 text-semantic-warning" /> Avoidable Annual Penalties
            </h3>
            {[
              { law: "LL152 Missed Filing", cost: "$10,000", sub: "per property" },
              { law: "LL87 Non-Compliance", cost: "$5,000", sub: "per year" },
              { law: "LL84 Late Filing", cost: "$2,500", sub: "4 quarterly $500 penalties" },
              { law: "LL97 Emissions Overage", cost: "$268", sub: "per ton over limit" },
              { law: "LL88 Non-Compliance", cost: "$1,500", sub: "+$500 per tenant" }
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center bg-white/10 p-5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div>
                  <div className="font-bold text-lg">{p.law}</div>
                  <div className="text-xs text-primary-200">{p.sub}</div>
                </div>
                <div className="text-2xl font-bold text-semantic-warning">{p.cost}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-white text-primary-500 p-10 rounded-3xl shadow-modal">
            <h3 className="text-2xl font-bold mb-8">ROI Calculator</h3>
            <div className="mb-10">
              <label className="block text-sm font-bold uppercase tracking-widest text-primary-300 mb-4">Portfolio Size: {properties} Properties</label>
              <input 
                type="range" min="1" max="250" value={properties} 
                onChange={(e) => setProperties(parseInt(e.target.value))}
                className="w-full h-2 bg-primary-100 rounded-lg appearance-none cursor-pointer accent-accent-500" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-4 bg-semantic-error/5 rounded-2xl border border-semantic-error/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-semantic-error mb-1">Potential Penalties</div>
                <div className="text-2xl font-bold">${potentialLoss.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-semantic-success/5 rounded-2xl border border-semantic-success/10">
                <div className="text-[10px] font-bold uppercase tracking-wider text-semantic-success mb-1">Estimated ROI</div>
                <div className="text-2xl font-bold">{roi}%</div>
              </div>
            </div>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center text-sm">
                <CheckCircle2 className="w-5 h-5 text-semantic-success mr-3" />
                <span>Save 520+ Administrative Hours Yearly</span>
              </div>
              <div className="flex items-center text-sm">
                <CheckCircle2 className="w-5 h-5 text-semantic-success mr-3" />
                <span>Eliminate Human Error in Filing Dates</span>
              </div>
            </div>
            
            <button className="w-full py-5 bg-accent-500 text-white font-bold rounded-xl shadow-lg hover:bg-accent-600 transition-all flex items-center justify-center">
              Calculate Your Exact Risk <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const InteractiveFeatures = () => {
  const [activeTab, setActiveTab] = useState(0);
  const features = [
    {
      title: "Deadline Automation",
      icon: <Calendar />,
      desc: "Smart 90/60/30 day alerts cross-referenced with DOB real-time data.",
      img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI ReBot",
      icon: <Bot />,
      desc: "Query your portfolio in plain English. 'Show me Brooklyn LL152 overdue'.",
      img: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Document Vault",
      icon: <FileText />,
      desc: "Centralized AES-256 encrypted storage for all certifications and audits.",
      img: "https://images.unsplash.com/photo-1544391435-e6067b864a7c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Vendor Network",
      icon: <Users />,
      desc: "Instant connection to verified PEs and RDPs with workload balancing.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Bulk Operations",
      icon: <Layers />,
      desc: "Sign 100+ documents or pay 50+ invoices in a single authenticated click.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {features.map((f, i) => (
            <button 
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all ${activeTab === i ? 'bg-primary-500 text-white shadow-lg' : 'bg-primary-50 text-primary-400 hover:bg-primary-100'}`}
            >
              {/* Fix: Explicitly cast to React.ReactElement<any> to resolve TypeScript error with className property */}
              {React.cloneElement(f.icon as React.ReactElement<any>, { className: "w-4 h-4" })}
              <span>{f.title}</span>
            </button>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-neutral-background rounded-[40px] p-8 lg:p-20 border border-primary-50 shadow-card">
          <div>
            <div className="w-16 h-16 bg-accent-500 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              {/* Fix: Explicitly cast to React.ReactElement<any> to resolve TypeScript error with className property */}
              {React.cloneElement(features[activeTab].icon as React.ReactElement<any>, { className: "w-8 h-8" })}
            </div>
            <h3 className="text-3xl font-bold text-primary-500 mb-6">{features[activeTab].title}</h3>
            <p className="text-lg text-neutral-text mb-8 leading-relaxed">{features[activeTab].desc}</p>
            {activeTab === 1 && (
              <div className="bg-white p-6 rounded-2xl border border-primary-100 shadow-sm space-y-3">
                <div className="text-[10px] font-bold text-primary-300 uppercase mb-2">Sample Queries:</div>
                <div className="flex items-center text-sm font-medium text-primary-500 bg-primary-50 p-2 rounded-lg italic">✓ "Buildings over 50,000 sq ft in Queens"</div>
                <div className="flex items-center text-sm font-medium text-primary-500 bg-primary-50 p-2 rounded-lg italic">✓ "Overdue LL152 filings for Community District 3"</div>
              </div>
            )}
            <ul className="space-y-4 mt-8">
              <li className="flex items-center text-sm font-semibold text-primary-500">
                <CheckCircle2 className="w-5 h-5 text-semantic-success mr-3" /> Fully Integrated Workflows
              </li>
              <li className="flex items-center text-sm font-semibold text-primary-500">
                <CheckCircle2 className="w-5 h-5 text-semantic-success mr-3" /> Real-time Data Syncing
              </li>
            </ul>
          </div>
          <div className="relative">
            {/* PLACEHOLDER: /screenshots/feature-${activeTab}.png */}
            <img 
              src={features[activeTab].img} 
              alt={features[activeTab].title} 
              className="rounded-2xl shadow-modal border-4 border-white animate-in zoom-in duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const BulkOperationsSection = () => (
  <section className="py-24 bg-white border-y border-primary-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          {/* PLACEHOLDER: /screenshots/bulk-operations.png */}
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1454165833467-13594d99e023?auto=format&fit=crop&q=80&w=800" alt="Bulk Operations" className="rounded-3xl shadow-modal border-8 border-primary-50" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-2xl border border-primary-100 w-64">
                <div className="flex items-center justify-between mb-4">
                   <div className="font-bold">23 Properties Selected</div>
                   <CheckCircle2 className="text-semantic-success w-5 h-5" />
                </div>
                <button className="w-full py-3 bg-accent-500 text-white rounded-lg text-sm font-bold shadow-lg">Generate Batch Docs</button>
             </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-8 leading-tight">Scale Without Limits</h2>
          <p className="text-xl text-neutral-text mb-10 leading-relaxed">Stop processing buildings one by one. ReHub allows you to manage your entire portfolio simultaneously.</p>
          <div className="space-y-6">
            {[
              "Bulk attestation for 100+ properties with one PE signature",
              "Multi-property scheduling in a unified calendar view",
              "Batch document generation and routing via PandaDoc",
              "Mass invoice payment with QuickBooks pre-authorization",
              "Portfolio-wide compliance health scoring in seconds"
            ].map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="w-6 h-6 bg-accent-50 text-accent-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Check className="w-4 h-4 font-bold" />
                </div>
                <span className="font-semibold text-primary-600 leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-primary-50 rounded-2xl border-l-4 border-accent-500">
             <div className="text-primary-500 font-bold italic">"One property manager processed 247 LL88 attestations in 3 hours. Previously it took 6 weeks."</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ComplianceGrid = () => (
  <section id="compliance" className="py-24 bg-primary-500 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Expertise Across NYC Local Laws</h2>
        <p className="text-primary-100 text-lg max-w-2xl mx-auto">We don't just track dates; we understand the deep technical requirements of every NYC mandate.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {[
          { id: "LL84", name: "Energy Benchmarking", deadline: "May 1st", color: "#3b82f6", detail: "Annual energy/water reporting.", penalty: "$2,500/yr" },
          { id: "LL87", name: "Energy Audits", deadline: "Dec 31st", color: "#22c55e", detail: "RCx and audits every 10 years.", penalty: "$5,000/yr" },
          { id: "LL97", name: "Carbon Limits", deadline: "Annual", color: "#f59e0b", detail: "Strict emissions caps through 2050.", penalty: "$268/ton" },
          { id: "LL152", name: "Gas Piping", deadline: "Every 4Y", color: "#ef4444", detail: "Community Dist. staggered inspections.", penalty: "$10,000" },
          { id: "LL88", name: "Lighting & Sub", deadline: "Ongoing", color: "#64748b", detail: "Upgrades and tenant sub-metering.", penalty: "$1.5k + $500/t" },
          { id: "LL126", name: "Parking Garage", deadline: "Borough Sched", color: "#9333ea", detail: "Critical structural safety inspections.", penalty: "$1,000/mo" }
        ].map(law => (
          <div key={law.id} className="bg-primary-600/50 p-6 rounded-2xl border border-primary-400 group hover:bg-white hover:text-primary-500 transition-all cursor-default">
            <div className="text-3xl font-bold mb-3 transition-colors group-hover:text-primary-500" style={{ color: law.color }}>{law.id}</div>
            <h4 className="font-bold mb-4 h-12 leading-tight">{law.name}</h4>
            <div className="text-[10px] uppercase font-black text-primary-200 group-hover:text-primary-300 mb-4 flex items-center">
               <Calendar className="w-3 h-3 mr-1" /> {law.deadline}
            </div>
            <div className="hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">
               <p className="text-xs mb-4 leading-relaxed">{law.detail}</p>
               <div className="bg-semantic-error/10 text-semantic-error text-[10px] font-bold px-2 py-1 rounded-md inline-block">Penalty: {law.penalty}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CustomerSuccessStory = () => (
  <section className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-4">Real Results, Real Impact</h2>
      </div>
      
      <div className="bg-neutral-background rounded-[40px] overflow-hidden border border-primary-50 shadow-card grid lg:grid-cols-5">
        <div className="lg:col-span-3 p-10 lg:p-20 flex flex-col justify-center">
          <div className="mb-8 flex space-x-1">
             {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} className="text-accent-500 w-5 h-5 fill-current" />)}
          </div>
          <h3 className="text-3xl font-bold text-primary-500 mb-8 italic">"Manhattan Portfolio Manager Saves $47K in First Year"</h3>
          <p className="text-xl text-neutral-text leading-relaxed mb-10">
            "Before ReHub, I was managing compliance with spreadsheets and sticky notes. We missed 3 LL152 deadlines in 2023, costing us $30,000 in penalties. Since switching to ReHub, we haven't missed a single date. The AI assistant alone saves me 2 hours every day."
          </p>
          <div className="flex items-center space-x-4">
             <div className="w-16 h-16 bg-primary-200 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Sarah Chen" />
             </div>
             <div>
                <div className="font-bold text-primary-500">Sarah Chen</div>
                <div className="text-sm text-neutral-text">Property Manager, Brooklyn Heights Management</div>
             </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-primary-500 p-10 lg:p-16 flex flex-col justify-center space-y-8">
          <div className="space-y-6">
             <div className="text-white/60 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2">Before ReHub</div>
             <div className="grid grid-cols-2 gap-4">
                <div className="text-semantic-error font-bold">3 Missed Deadlines</div>
                <div className="text-semantic-error font-bold">$30K in Penalties</div>
                <div className="text-white/80">15 hrs Admin/wk</div>
                <div className="text-white/80">$12K Emergency Audits</div>
             </div>
          </div>
          <div className="space-y-6">
             <div className="text-accent-500 text-xs font-bold uppercase tracking-widest border-b border-white/10 pb-2">After ReHub</div>
             <div className="grid grid-cols-2 gap-4">
                <div className="text-semantic-success font-bold font-mono">0 Missed Dates</div>
                <div className="text-semantic-success font-bold font-mono">100% On-Time</div>
                <div className="text-white">2 hrs Admin/wk</div>
                <div className="text-white">Pre-Scheduled (Saved $8K)</div>
             </div>
          </div>
          <div className="pt-8 border-t border-white/10">
             <div className="text-accent-500 text-sm font-bold uppercase mb-2">Net Impact</div>
             <div className="text-4xl font-bold text-white">$47,000 Saved <span className="text-xl font-normal opacity-60">Year 1</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MultiViewShowcase = () => {
  const [activeView, setActiveView] = useState(0);
  const views = [
    { name: "Table", icon: <LayoutDashboard />, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", detail: "Spreadsheet-style efficiency with inline editing and smart sorting." },
    { name: "List", icon: <List />, img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", detail: "Detailed property cards with quick actions and compliance status badges." },
    { name: "Grid", icon: <Grid />, img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1200", detail: "Visual property overview with thumbnail images and key metric snapshots." },
    { name: "Map", icon: <MapPin />, img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200", detail: "Interactive NYC map showing your entire portfolio clustered by status." },
    { name: "Gallery", icon: <ImageIcon />, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", detail: "High-impact visual browsing for stakeholders and investment reports." }
  ];

  return (
    <section className="py-24 bg-neutral-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-6">One Platform, Five Viewing Modes</h2>
        <p className="text-lg text-neutral-text mb-16">Your team sees data the way they work best.</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8 p-1.5 bg-white rounded-2xl border border-primary-50 shadow-sm w-fit mx-auto">
          {views.map((v, i) => (
            <button 
              key={i} 
              onClick={() => setActiveView(i)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all ${activeView === i ? 'bg-accent-500 text-white shadow-md' : 'text-primary-400 hover:bg-primary-50'}`}
            >
              {v.icon}
              <span>{v.name}</span>
            </button>
          ))}
        </div>
        
        <div className="relative group">
           <div className="absolute inset-0 bg-primary-500 rounded-3xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 shadow-card"></div>
           {/* PLACEHOLDER: /screenshots/view-${activeView}.png */}
           <div className="relative bg-white p-4 rounded-3xl border border-primary-50 shadow-modal overflow-hidden">
              <img src={views[activeView].img} alt={views[activeView].name} className="rounded-2xl w-full h-[600px] object-cover" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur p-8 rounded-2xl border border-primary-100 shadow-2xl text-left max-w-lg">
                 <h4 className="text-2xl font-bold text-primary-500 mb-2">{views[activeView].name} View Mode</h4>
                 <p className="text-neutral-text">{views[activeView].detail}</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-6">Seamlessly Connected</h2>
        <p className="text-lg text-neutral-text max-w-2xl mx-auto">ReHub integrates with your existing tech stack. No data silos. Everything syncs automatically.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { name: "QuickBooks", d: "Real-time invoice sync and bulk payments.", icon: <DollarSign /> },
          { name: "PandaDoc", d: "Automated e-signing and auto-stamping.", icon: <FileText /> },
          { name: "Energy Star", d: "LL84 benchmarking automation.", icon: <Zap /> },
          { name: "HubSpot", d: "Proposal tracking and CRM sync.", icon: <Users /> },
          { name: "OpenAI GPT-4", d: "Natural language ReBot intelligence.", icon: <Bot /> },
          { name: "Google Calendar", d: "Inspection scheduling & reminders.", icon: <Calendar /> },
          { name: "Supabase", d: "Enterprise-grade database security.", icon: <ShieldCheck /> },
          { name: "Stripe", d: "Secure payment method storage.", icon: <Globe /> }
        ].map(item => (
          <div key={item.name} className="p-8 bg-neutral-background rounded-2xl border border-primary-50 hover:shadow-card-hover transition-all">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent-500 mb-6 border border-primary-50">
               {/* Fix: Explicitly cast to React.ReactElement<any> to resolve TypeScript error with className property */}
               {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
            </div>
            <h4 className="text-lg font-bold text-primary-500 mb-2">{item.name}</h4>
            <p className="text-sm text-neutral-text leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-24 bg-neutral-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-16 text-center">Why ReHub Over Generic PM Software?</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-3xl overflow-hidden shadow-card border-collapse">
          <thead>
            <tr className="bg-primary-50 text-primary-500">
              <th className="p-8 text-left font-bold text-lg">Feature</th>
              <th className="p-8 text-center font-bold text-lg border-x border-primary-100/50">Generic PM Software</th>
              <th className="p-8 text-center font-bold text-lg bg-primary-500 text-white">ReHub Portal</th>
            </tr>
          </thead>
          <tbody className="text-neutral-text">
            {[
              { f: "NYC Compliance Focus", g: "❌ Generic reminders", r: "✅ Law-specific workflows" },
              { f: "Penalty Calculation", g: "❌ None", r: "✅ Real-time estimates" },
              { f: "PE/RDP Network", g: "❌ Manual contact list", r: "✅ Round-robin assignment" },
              { f: "Document Automation", g: "❌ Manual upload", r: "✅ PandaDoc + auto-stamp" },
              { f: "AI Assistant", g: "❌ Not available", r: "✅ Natural language queries" },
              { f: "Bulk Operations", g: "❌ One-by-one", r: "✅ 100+ properties at once" },
              { f: "DOB Integration", g: "❌ Manual lookup", r: "✅ Automated status sync" }
            ].map((row, i) => (
              <tr key={i} className="border-t border-primary-50 hover:bg-primary-50/20 transition-colors">
                <td className="p-8 font-bold text-primary-500">{row.f}</td>
                <td className="p-8 text-center border-x border-primary-100/50 font-medium">{row.g}</td>
                <td className="p-8 text-center bg-primary-500/5 font-black text-primary-500 border-x-2 border-primary-500">{row.r}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [properties, setProperties] = useState("");
  const potentialSavings = (parseInt(properties) || 0) * 2500;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-500 mb-8">Ready to Professionalize Your Compliance?</h2>
            <p className="text-xl text-neutral-text mb-12">Get a custom portfolio audit and see exactly which buildings are at risk of fines this year.</p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-accent-500 shadow-sm border border-primary-100">
                   <MonitorCheck className="w-8 h-8" />
                </div>
                <div>
                   <div className="font-bold text-primary-500 text-lg">Instant Risk Scoring</div>
                   <p className="text-sm text-neutral-text">Upload your portfolio and get a health score in 5 minutes.</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-accent-500 shadow-sm border border-primary-100">
                   <Users className="w-8 h-8" />
                </div>
                <div>
                   <div className="font-bold text-primary-500 text-lg">Verified Vendor Match</div>
                   <p className="text-sm text-neutral-text">We match your needs with licensed PEs in your borough.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-background p-10 lg:p-16 rounded-[40px] border border-primary-50 shadow-card">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Name</label>
                  <input type="text" className="w-full bg-white border border-primary-100 p-4 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Email</label>
                  <input type="email" className="w-full bg-white border border-primary-100 p-4 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Compliance Challenge</label>
                <select className="w-full bg-white border border-primary-100 p-4 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none appearance-none">
                   <option>Missing Deadlines / Penalty Risk</option>
                   <option>Managing Multiple Properties</option>
                   <option>Tracking Inspections</option>
                   <option>LL97 Carbon Limits</option>
                   <option>Parking Inspections (LL126)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-primary-300">Portfolio Size</label>
                <input 
                  type="number" 
                  value={properties} 
                  onChange={(e) => setProperties(e.target.value)}
                  className="w-full bg-white border border-primary-100 p-4 rounded-xl focus:ring-2 focus:ring-accent-500 outline-none" 
                  placeholder="Number of Properties" 
                />
              </div>
              
              {potentialSavings > 0 && (
                <div className="p-6 bg-semantic-success/10 rounded-2xl border-2 border-semantic-success/20 animate-in zoom-in duration-300">
                   <div className="text-semantic-success font-bold uppercase text-[10px] mb-1">Potential Annual Savings</div>
                   <div className="text-3xl font-black text-semantic-success">${potentialSavings.toLocaleString()}*</div>
                   <div className="text-[10px] text-semantic-success/70 mt-1">*Based on average penalty avoidance of $2.5k per property</div>
                </div>
              )}
              
              <button className="w-full py-5 bg-primary-500 text-white font-bold rounded-xl shadow-lg hover:bg-primary-600 transition-all text-lg">
                Book My Free Portfolio Audit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "How accurate is the ReBot AI Assistant?", a: "ReBot is powered by OpenAI GPT-4o, specifically fine-tuned on the NYC DOB building code and local law statutes. It continuously learns from official updates to ensure 99%+ accuracy in interpreting regulatory requirements." },
    { q: "Can I manage properties across all 5 boroughs?", a: "Yes. ReHub handles Community District calculations for all five boroughs, automatically adjusting LL152 and LL126 schedules based on your specific tax block and district." },
    { q: "How does the PE round-robin system work?", a: "Our proprietary algorithm assigns licensed professionals based on current workload, borough proximity, and past performance metrics. This ensures zero favoritism and maximum quality of service." },
    { q: "Does ReHub support multi-entity ownership?", a: "Absolutely. Our enterprise tier allows for complex ownership structures with granular permission levels for partners, property managers, and building staff." }
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-background border-t border-primary-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-500 text-center mb-16">Expert Answers</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-primary-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-50/30 transition-colors"
              >
                <span className="font-bold text-primary-500">{faq.q}</span>
                {openIdx === idx ? <Minus className="text-accent-500 w-5 h-5" /> : <Plus className="text-primary-300 w-5 h-5" />}
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6 text-neutral-text leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden bg-primary-500">
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500 rounded-full blur-[120px]"></div>
    </div>
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">Professionalize Your Compliance Operations</h2>
      <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">Stop managing by fire. Start managing by data. Join the top 5% of NYC managers using ReHub Portal.</p>
      <button className="bg-white text-primary-500 px-12 py-5 rounded-lg font-bold text-xl hover:bg-primary-50 transition-all shadow-modal hover:scale-105 mb-10">
        Start Free Trial Now
      </button>
      <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm font-semibold">
        <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-accent-500" /> SOC-2 Compliant</span>
        <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-accent-500" /> No Setup Fees</span>
        <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-accent-500" /> Dedicated Account Manager</span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-primary-900 text-primary-200 pt-24 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-accent-500 p-1.5 rounded-md">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">ReHub</span>
          </div>
          <p className="text-sm leading-relaxed mb-8 opacity-70">
            Leading NYC property compliance management platform. Built for enterprise portfolio oversight.
          </p>
          <div className="flex space-x-4">
             {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-accent-500 transition-colors cursor-pointer border border-primary-700"></div>)}
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">Platform</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#features" className="hover:text-accent-500 transition-colors">AI ReBot Assistant</a></li>
            <li><a href="#impact" className="hover:text-accent-500 transition-colors">Penalty ROI</a></li>
            <li><a href="#compliance" className="hover:text-accent-500 transition-colors">Law Grid</a></li>
            <li><a href="#" className="hover:text-accent-500 transition-colors">Enterprise API</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">Resources</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#" className="hover:text-accent-500 transition-colors">Filing Calendar 2024</a></li>
            <li><a href="#" className="hover:text-accent-500 transition-colors">LL97 Carbon Guide</a></li>
            <li><a href="#" className="hover:text-accent-500 transition-colors">Security Whitepaper</a></li>
            <li><a href="#" className="hover:text-accent-500 transition-colors">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase text-[10px] tracking-[0.2em]">Security & Trust</h4>
          <div className="space-y-4 text-xs">
            <div className="flex items-center text-semantic-success font-bold"><ShieldCheck className="w-4 h-4 mr-2" /> AES-256 Encryption</div>
            <div className="flex items-center text-semantic-success font-bold"><ShieldCheck className="w-4 h-4 mr-2" /> SOC-2 Type II Certified</div>
            <div className="flex items-center text-semantic-success font-bold"><ShieldCheck className="w-4 h-4 mr-2" /> 99.99% Uptime SLA</div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-primary-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>&copy; 2024 ReHub Portal Inc. Built with expertise in NYC.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-500 selection:text-white">
      <Navbar />
      <Hero />
      <div className="relative">
         <PlatformWalkthroughSection />
         <FinancialImpactSection />
         <InteractiveFeatures />
         <BulkOperationsSection />
         <ComplianceGrid />
         <CustomerSuccessStory />
         <MultiViewShowcase />
         <IntegrationsSection />
         <ComparisonTable />
         <ContactForm />
         <FAQSection />
         <FinalCTA />
         <Footer />
      </div>
    </div>
  );
}
