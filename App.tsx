
import React, { useState, useEffect } from 'react';
import { 
  Droplets, 
  Sprout, 
  Zap, 
  Wifi, 
  Clock, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Menu,
  X,
  Bot,
  ExternalLink,
  ChevronRight
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-green-800' : 'text-white'}`}>SmartValves</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="https://smartmoles.com/iletisim" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all hover:shadow-lg"
            >
              İletişime Geç
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-700' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 flex flex-col space-y-4">
          <a 
            href="https://smartmoles.com/iletisim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
          >
            İletişime Geç
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="Modern Agriculture"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Toprağın Sesini Duyup <br/>
            <span className="text-green-400 italic">Hareket Eden</span> Akıllı Vana
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200">
            "Suyunu yönetemeyen, toprağını koruyamaz." Tahminleri bitirip kesin bilgiyle hareket edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://smartmoles.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg"
            >
              Hikayemizi Gör <ArrowRight size={20} />
            </a>
            <a 
              href="https://smartmoles.com/urunlerimiz/smartvalves" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              Ürünü Tanı <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const WhySection = () => {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Amacımız</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Tarım Bir Tahmin Oyunu <span className="text-red-500">Olmamalıdır</span>.
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Bugüne kadar doğru bildiğimiz sulama alışkanlıkları, aslında toprağımızı yoruyor ve en değerli kaynağımız olan suyumuzu fark etmeden israf ediyor. Bizim varlık sebebimiz; toprağı sadece bir üretim alanı değil, gelecek nesillere bırakılacak bir miras olarak görmektir.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Mirasınızı Koruyun</h4>
                  <p className="text-slate-600">Toprağınızın yorulmasını ve verimsizleşmesini engelliyoruz.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Gerçek Bilgi</h4>
                  <p className="text-slate-600">Her damla suyun hesabını uzmanlıkla tutuyoruz.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200" 
              className="rounded-3xl shadow-2xl relative z-10"
              alt="Protecting soil"
            />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-100 rounded-full z-0 opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-100 rounded-full z-0 opacity-50 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowSection = () => {
  return (
    <section id="how" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">Yöntemimiz</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic">"Gradyen Analizi"</h2>
          <p className="text-xl text-slate-600">
            Sıradan vana ve zamanlayıcıların aksine, sulamayı kendi kendine karar veren bir "düşünce sistemine" dönüştürdük.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Suyun Hikayesini İzleriz",
              desc: "Toprağın altındaki suyun hareketini canlı bir navigasyon sistemi gibi takip ederiz.",
              icon: <TrendingUp className="w-8 h-8" />
            },
            {
              title: "İsrafı Anında Hissederiz",
              desc: "Su kök bölgesinden aşağı sızmaya başladığı anda sistemimiz bunu anında fark eder.",
              icon: <Droplets className="w-8 h-8" />
            },
            {
              title: "Akıllı Müdahale",
              desc: "Toprak doyduğu anda, zamanı beklemeden vanayı kendisi kapatır.",
              icon: <Zap className="w-8 h-8" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:border-green-300 transition-all hover:-translate-y-2 group">
              <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Visual Comparison Section */}
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center bg-slate-900 text-white">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-red-500 line-through decoration-white/30">Geleneksel Vana</span>
                <span className="text-slate-500 text-sm font-normal">VS</span>
                <span className="text-green-400">SmartValves</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-red-500/20 text-red-500 rounded-full">
                    <X size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-200">Sıradan Musluklar</h4>
                    <p className="text-slate-400">Sadece zamanlayıcıdır. Bitkinin doyup doymadığını bilmez, sadece saat gelince kapatır.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-green-500/20 text-green-400 rounded-full">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white italic">Otonom Karar Merkezi</h4>
                    <p className="text-slate-300">Toprağın ne zaman doyduğunu anında hisseder ve israfı bitiren tarımın yeni "akıllı" işletim sistemi olarak çalışır.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                <Bot className="text-green-400 w-12 h-12 flex-shrink-0" />
                <p className="text-sm italic text-slate-300">"SmartValves, 'Toprak doydu, su kökten aşağı kaçıyor' dediği anda vanayı kendi kapatır."</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-urun-gorseli-02.webp" 
                alt="SmartValves Modern Technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-8 left-8 bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                Teknoloji ve Doğa Uyum İçinde
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductFamily = () => {
  const products = [
    {
      name: "SmartValves SV2",
      image: "https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-sv2.webp",
      link: "https://smartmoles.com/urunlerimiz/smartvalves"
    },
    {
      name: "SmartValves SV4",
      image: "https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-sv4.webp",
      link: "https://smartmoles.com/urunlerimiz/smartvalves"
    },
    {
      name: "Pump Station",
      image: "https://smartmoles.com/assets/images/product/smartmoles-com-smart-valves-pump-station-urun-gorseli01.webp",
      link: "https://smartmoles.com/urunlerimiz/smartvalves"
    },
    {
      name: "Smart Gateway",
      image: "https://smartmoles.com/assets/images/product/smartmoles-com-gateway-urun-gorseli-01.webp",
      link: "https://smartmoles.com/urunlerimiz/smartvalves"
    },
    {
      name: "SV Bluetooth",
      image: "https://smartmoles.com/assets/images/product/smartmoles-com-smartvalves-bluetooth-urun-gorseli-01.webp",
      link: "https://smartmoles.com/urunlerimiz/smartvalves"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm mb-4 block">GÜÇLÜ EKOSİSTEM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">SmartValves Ailesiyle Tanışın</h2>
          </div>
          <a href="https://smartmoles.com/urunlerimiz" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors">
            Tümünü İncele <ChevronRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, idx) => (
            <a 
              key={idx} 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-50 rounded-[2rem] p-6 text-center border border-slate-100 hover:border-green-200 transition-all hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="aspect-square bg-white rounded-2xl mb-6 p-4 flex items-center justify-center overflow-hidden shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
              <p className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-semibold">İncele</p>
            </a>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
          <a href="https://smartmoles.com/urunlerimiz" className="inline-flex items-center gap-2 text-green-700 font-bold">
            Tüm Ürünleri Gör <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-24 bg-green-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600 -skew-x-12 translate-x-1/2 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Geleceği Tahmin Etmeyin, Veriye Dayalı Yönetin.</h2>
        <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
          Gelin, toprağınıza birlikte değer katalım. SmartValves ile israfı bitirin, kazancı başlatın.
        </p>
        <div className="flex justify-center">
          <a 
            href="https://smartmoles.com/iletisim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-800 border-none px-12 py-5 rounded-full text-xl font-bold hover:bg-green-50 transition-all shadow-2xl flex items-center justify-center gap-3 hover:-translate-y-1"
          >
            Satış Ekibiyle Görüş <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">SmartValves</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://smartmoles.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">SmartMoles</a>
            <a href="https://smartmoles.com/iletisim" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">İletişim</a>
          </div>
          <div className="flex space-x-6">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-green-500 transition-colors cursor-pointer">
              <span className="text-xs">FB</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-green-500 transition-colors cursor-pointer">
              <span className="text-xs">LN</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-green-500 transition-colors cursor-pointer">
              <span className="text-xs">IG</span>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-sm">
          <p>© 2026 SmartMoles - SmartValves Tarım Teknolojileri. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <Hero />
      <WhySection />
      <HowSection />
      <ProductFamily />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
