import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  MessageCircle, 
  Home, 
  TrendingUp, 
  Key, 
  MapPin, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  X,
  Phone,
  Send,
  Sparkles,
  Search,
  Building2,
  Map as MapIcon
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  lifestyle: string;
}

// --- Mock Data ---
const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Villa Atlas",
    location: "Marrakech, Palmeraie",
    price: "12,500,000 DH",
    description: "Une oasis de sérénité au cœur de la Palmeraie, alliant architecture traditionnelle et confort ultra-moderne.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920",
    lifestyle: "Réveillez-vous face aux montagnes de l'Atlas, entre oliviers centenaires et luxe absolu."
  },
  {
    id: 2,
    title: "Skyline Casablanca",
    location: "Casablanca, Anfa",
    price: "8,900,000 DH",
    description: "Penthouse exclusif avec vue panoramique sur l'océan et la mosquée Hassan II.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
    lifestyle: "Vivez au-dessus de l'effervescence, là où le ciel rencontre l'Atlantique."
  },
  {
    id: 3,
    title: "Riad El Fenn",
    location: "Marrakech, Médina",
    price: "4,200,000 DH",
    description: "Un joyau historique restauré avec passion, au calme absolu des ruelles de la Médina.",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=1920",
    lifestyle: "L'âme du Maroc dans un écrin de design contemporain."
  },
  {
    id: 4,
    title: "Marina Bay",
    location: "Tanger, Malabata",
    price: "6,500,000 DH",
    description: "Appartement de prestige en front de mer, aux finitions italiennes et domotique complète.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920",
    lifestyle: "Le détroit de Gibraltar comme horizon quotidien."
  }
];

const TESTIMONIALS = [
  {
    name: "Youssef B.",
    role: "Investisseur",
    text: "Dar Luxury a compris mes besoins avant même que je ne les exprime. Un service d'exception.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Salma M.",
    role: "Propriétaire",
    text: "Trouver ma maison à Marrakech a été une expérience fluide et magique. Merci à toute l'équipe.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        isScrolled ? "glass-dark py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Building2 className="text-gold w-8 h-8" />
          <span className="font-display font-bold text-2xl tracking-tighter">DAR<span className="text-gold">LUXURY</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-widest">
          <a href="#properties" className="hover:text-gold transition-colors">Propriétés</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#story" className="hover:text-gold transition-colors">Notre Histoire</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
        <a href="#contact" className="glass px-6 py-2 rounded-full text-sm font-display uppercase tracking-widest hover:bg-gold hover:text-black transition-all duration-300">
          Parlons-en
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder (using image for demo stability) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Moroccan House" 
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block glass px-4 py-1 rounded-full text-xs font-display uppercase tracking-[0.3em] text-gold mb-6">
            L'excellence immobilière au Maroc
          </span>
          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-tight">
            Et si votre prochaine maison <br />
            <span className="italic text-gradient-gold">changeait votre vie ?</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 font-sans max-w-2xl mx-auto">
            Nous ne vendons pas des biens. Nous trouvons votre futur. <br />
            Une approche humaine pour des lieux d'exception.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#properties"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neumorphic-gold px-10 py-4 rounded-full text-black font-display font-bold uppercase tracking-widest shadow-xl animate-pulse text-center"
            >
              Voir les opportunités
            </motion.a>
            <a href="#story" className="glass px-10 py-4 rounded-full font-display font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center">
              Découvrir Dar Luxury
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-px h-20 bg-linear-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const InteractiveChoice = () => {
  const [activeChoice, setActiveChoice] = useState<string | null>(null);

  const choices = [
    { id: 'habiter', title: 'Je veux habiter', icon: Home, desc: 'Trouvez le foyer qui résonne avec votre âme.' },
    { id: 'investir', title: 'Je veux investir', icon: TrendingUp, desc: 'Optimisez votre patrimoine avec des opportunités uniques.' },
    { id: 'vendre', title: 'Je veux vendre', icon: Key, desc: 'Sublimez votre bien pour une vente d\'exception.' },
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Quelle est votre <span className="text-gold italic">prochaine étape ?</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Choisissez votre parcours personnalisé pour une expérience sur mesure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {choices.map((choice) => (
            <motion.div
              key={choice.id}
              onMouseEnter={() => setActiveChoice(choice.id)}
              onMouseLeave={() => setActiveChoice(null)}
              whileHover={{ y: -10 }}
              className={cn(
                "relative group cursor-pointer p-10 rounded-3xl transition-all duration-500 overflow-hidden",
                activeChoice === choice.id ? "glass-dark" : "glass"
              )}
            >
              <div className="relative z-10">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500",
                  activeChoice === choice.id ? "bg-gold text-black" : "bg-white/5 text-gold"
                )}>
                  <choice.icon size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tighter">{choice.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8">{choice.desc}</p>
                <div className="flex items-center gap-2 text-gold font-display text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Commencer <ArrowRight size={16} />
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className={cn(
                "absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-all duration-700",
                activeChoice === choice.id ? "bg-gold/20 scale-150" : "bg-transparent"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ property, onClick }: { property: Property, onClick: () => void }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] h-[500px] md:h-[600px] relative rounded-[2rem] overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={property.image} 
        alt={property.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-gold text-xs font-display uppercase tracking-widest mb-2 block">{property.location}</span>
            <h3 className="font-serif text-3xl text-white mb-2">{property.title}</h3>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gold font-display font-bold text-xl"
          >
            {property.price}
          </motion.div>
        </div>
        
        <p className="text-white/70 text-sm mb-8 line-clamp-2 italic">
          "{property.lifestyle}"
        </p>
        
        <button className="w-full glass py-4 rounded-xl font-display uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all">
          Entrer dans la maison
        </button>
      </div>
    </motion.div>
  );
};

const PropertiesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="properties" className="py-32 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-4xl md:text-6xl mb-4">Collections <span className="text-gold italic">Privées</span></h2>
          <p className="text-white/50">Une sélection rigoureuse des biens les plus exclusifs du Royaume.</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x snap-mandatory"
      >
        {PROPERTIES.map((prop) => (
          <div key={prop.id} className="snap-center">
            <PropertyCard property={prop} onClick={() => setSelectedProperty(prop)} />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProperty && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 glass-dark"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-black border border-white/10 rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-hidden relative flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/2 h-[300px] md:h-auto">
                <img 
                  src={selectedProperty.image} 
                  alt={selectedProperty.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="md:w-1/2 p-12 overflow-y-auto">
                <span className="text-gold font-display uppercase tracking-widest text-sm mb-4 block">{selectedProperty.location}</span>
                <h3 className="font-serif text-4xl mb-6">{selectedProperty.title}</h3>
                <div className="text-3xl font-display font-bold text-gold mb-8">{selectedProperty.price}</div>
                
                <div className="space-y-6 text-white/70 leading-relaxed mb-12">
                  <p className="italic text-lg text-white">"{selectedProperty.lifestyle}"</p>
                  <p>{selectedProperty.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-12">
                  <div className="glass p-4 rounded-2xl text-center">
                    <div className="text-xs text-white/40 uppercase mb-1">Surface</div>
                    <div className="font-display font-bold">450 m²</div>
                  </div>
                  <div className="glass p-4 rounded-2xl text-center">
                    <div className="text-xs text-white/40 uppercase mb-1">Chambres</div>
                    <div className="font-display font-bold">5 Suites</div>
                  </div>
                </div>
                
                <button className="w-full neumorphic-gold py-5 rounded-2xl text-black font-display font-bold uppercase tracking-widest hover:scale-[1.02] transition-all">
                  Réserver une visite privée
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Storytelling = () => {
  return (
    <section id="story" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Ils ont changé de vie <br /><span className="text-gold italic">grâce à nous</span></h2>
            <div className="space-y-12">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="glass p-8 rounded-3xl relative"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold" referrerPolicy="no-referrer" />
                    <div>
                      <div className="font-bold font-display">{t.name}</div>
                      <div className="text-gold text-xs uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-white/70 italic leading-relaxed">"{t.text}"</p>
                  <Sparkles className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000" 
                alt="Happy owners" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-10 rounded-3xl max-w-xs animate-float">
              <div className="text-gold font-serif text-4xl mb-2">98%</div>
              <div className="text-sm text-white/60 font-display uppercase tracking-widest">Taux de satisfaction client</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustCounters = () => {
  const counters = [
    { label: "Clients Satisfaits", value: 500, suffix: "+" },
    { label: "Années d'Expérience", value: 10, suffix: "+" },
    { label: "Biens Vendus", value: 200, suffix: "+" },
    { label: "Partenaires", value: 50, suffix: "" },
  ];

  return (
    <section className="py-20 bg-gold text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {counters.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl md:text-7xl font-display font-bold mb-2 tracking-tighter">
                {c.value}{c.suffix}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold opacity-70">
                {c.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationExperience = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Explorez le <span className="text-gold italic">Maroc d'Exception</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">De Tanger à Dakhla, nous couvrons les zones les plus prisées du Royaume.</p>
        </div>
        
        <div className="relative h-[600px] rounded-[3rem] overflow-hidden glass border border-white/10">
          {/* Simulated Map */}
          <div className="absolute inset-0 bg-neutral-900 opacity-50" />
          <img 
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=1920" 
            alt="Morocco Map Background" 
            className="w-full h-full object-cover opacity-30 grayscale"
            referrerPolicy="no-referrer"
          />
          
          {/* Animated Pins */}
          {[
            { top: '30%', left: '45%', city: 'Casablanca' },
            { top: '55%', left: '40%', city: 'Marrakech' },
            { top: '15%', left: '50%', city: 'Tanger' },
            { top: '40%', left: '55%', city: 'Rabat' },
            { top: '65%', left: '35%', city: 'Agadir' },
          ].map((pin, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: 'spring' }}
              style={{ top: pin.top, left: pin.left }}
              className="absolute group cursor-pointer"
            >
              <div className="relative">
                <div className="w-4 h-4 bg-gold rounded-full animate-ping absolute inset-0" />
                <div className="w-4 h-4 bg-gold rounded-full relative z-10 border-2 border-black" />
                
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="glass px-4 py-2 rounded-xl whitespace-nowrap">
                    <span className="text-xs font-display font-bold uppercase tracking-widest">{pin.city}</span>
                  </div>
                  <div className="w-px h-4 bg-gold mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4 justify-center">
            {['Villas de Luxe', 'Penthouses', 'Riads Historiques', 'Terrains Agricoles'].map((tag, i) => (
              <div key={i} className="glass px-6 py-3 rounded-full text-xs font-display uppercase tracking-widest">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LifeSimulation = () => {
  const [budget, setBudget] = useState(5000000);
  const [rate, setRate] = useState(4.35);
  const [duration, setDuration] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  useEffect(() => {
    const monthlyRate = (rate / 100) / 12;
    const numberOfPayments = duration * 12;
    if (monthlyRate === 0) {
      setMonthlyPayment(budget / numberOfPayments);
    } else {
      const payment = (budget * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [budget, rate, duration]);

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-linear-to-b from-transparent to-white/5">
      <div className="max-w-4xl mx-auto glass p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent" />
        
        <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8">Simulateur de <span className="text-gold italic">Crédit Immo</span></h2>
        <p className="text-white/50 mb-10 md:mb-12 text-sm md:text-base">Estimez vos mensualités pour votre futur projet au Maroc.</p>
        
        <div className="space-y-8 md:space-y-12 mb-10 md:mb-12 text-left">
          {/* Budget Slider */}
          <div className="relative">
            <label className="block text-xs font-display uppercase tracking-widest text-white/40 mb-4 text-center">Montant du prêt (DH)</label>
            <input 
              type="range" 
              min="500000" 
              max="30000000" 
              step="100000"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
            />
            <div className="mt-4 text-2xl md:text-4xl font-display font-bold text-gold text-center">
              {budget.toLocaleString()} DH
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Rate Input */}
            <div className="glass p-6 rounded-2xl">
              <label className="block text-xs font-display uppercase tracking-widest text-white/40 mb-4">Taux d'intérêt (%)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                  className="bg-transparent text-2xl font-display font-bold text-white outline-none w-full"
                />
                <span className="text-gold font-bold">%</span>
              </div>
              <p className="text-[10px] text-white/30 mt-2 uppercase tracking-wider">Moyenne Maroc: 4.35%</p>
            </div>

            {/* Duration Input */}
            <div className="glass p-6 rounded-2xl">
              <label className="block text-xs font-display uppercase tracking-widest text-white/40 mb-4">Durée (Années)</label>
              <div className="flex items-center gap-4">
                <input 
                  type="number" 
                  min="1"
                  max="25"
                  value={duration}
                  onChange={(e) => setDuration(Math.min(25, parseInt(e.target.value) || 1))}
                  className="bg-transparent text-2xl font-display font-bold text-white outline-none w-full"
                />
                <span className="text-gold font-bold">ANS</span>
              </div>
              <p className="text-[10px] text-white/30 mt-2 uppercase tracking-wider">Maximum: 25 ans</p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {monthlyPayment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 md:p-10 border border-gold/30 rounded-3xl bg-gold/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={80} />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-display uppercase tracking-widest text-gold mb-2">Mensualité Estimée</div>
                <div className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                  {Math.round(monthlyPayment).toLocaleString()} <span className="text-xl md:text-2xl text-gold">DH/MOIS</span>
                </div>
                <p className="text-white/40 text-xs md:text-sm italic">
                  *Cette simulation est donnée à titre indicatif et ne constitue pas une offre de crédit.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const LeadCapture = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Prêt à franchir <br /><span className="text-gold italic">le pas ?</span></h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Nos conseillers sont disponibles pour vous accompagner dans votre projet. 
              Recevez les meilleures opportunités "off-market" directement sur WhatsApp.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-display text-sm uppercase tracking-widest">Accès Prioritaire Off-Market</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-display text-sm uppercase tracking-widest">Accompagnement Juridique & Fiscal</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-display text-sm uppercase tracking-widest">Visites Virtuelles Immersives</span>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] relative">
            <div className="absolute -top-4 -right-4 bg-gold text-black px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest animate-bounce">
              Places limitées cette semaine
            </div>
            
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-white/40 mb-2">Nom Complet</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 focus:border-gold outline-none transition-all text-sm md:text-base" placeholder="Votre nom..." />
              </div>
              <div>
                <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-white/40 mb-2">Téléphone (WhatsApp)</label>
                <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 focus:border-gold outline-none transition-all text-sm md:text-base" placeholder="+212 6..." />
              </div>
              <div>
                <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-white/40 mb-2">Votre Projet</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 md:px-6 py-3 md:py-4 focus:border-gold outline-none transition-all appearance-none text-sm md:text-base">
                  <option className="bg-black">Je veux habiter</option>
                  <option className="bg-black">Je veux investir</option>
                  <option className="bg-black">Je veux vendre</option>
                </select>
              </div>
              
              <button className="w-full neumorphic-gold py-5 rounded-xl text-black font-display font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-[1.02] transition-all">
                Recevoir les opportunités <MessageCircle size={20} />
              </button>
              
              <p className="text-center text-[10px] text-white/30 uppercase tracking-widest">
                En cliquant, vous acceptez d'être contacté par nos conseillers.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Building2 className="text-gold w-8 h-8" />
              <span className="font-display font-bold text-2xl tracking-tighter">DAR<span className="text-gold">LUXURY</span></span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed">
              L'agence immobilière de référence pour les biens d'exception au Maroc. 
              Nous redéfinissons l'immobilier par l'émotion et l'excellence.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Propriétés</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Investissement</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-8">Suivez-nous</h4>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="text-white/30 text-xs uppercase tracking-widest">
            © 2026 DAR LUXURY. Tous droits réservés.
          </div>
          <div className="flex gap-8 text-white/30 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/212600000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white"
    >
      <MessageCircle size={32} fill="currentColor" />
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="relative z-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-serif text-5xl md:text-8xl mb-12 leading-tight">
            Votre futur <br />
            <span className="italic text-gradient-gold text-8xl md:text-[10rem]">commence ici</span>
          </h2>
          <button className="neumorphic-gold px-12 py-6 rounded-full text-black font-display font-bold uppercase tracking-widest text-lg hover:scale-105 transition-all shadow-2xl">
            Parler à un conseiller maintenant
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <Building2 className="text-gold w-12 h-12 animate-pulse" />
              <span className="font-display font-bold text-4xl tracking-tighter">DAR<span className="text-gold">LUXURY</span></span>
            </motion.div>
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-gold"
              />
            </div>
            <p className="mt-6 text-white/30 font-display text-xs uppercase tracking-[0.3em]">Chargement de votre futur...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <InteractiveChoice />
        <PropertiesSection />
        <Storytelling />
        <TrustCounters />
        <LocationExperience />
        <LifeSimulation />
        <LeadCapture />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
