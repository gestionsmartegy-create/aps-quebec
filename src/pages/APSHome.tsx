import { useState, useEffect, useRef } from "react";
import APSNavbar from "@/components/APSNavbar";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star, Phone, Mail, MapPin, Clock,
  Package, UserCheck, Heart, Users, Activity, Truck,
  Shield, Zap, Globe, ChevronRight, Play, Quote
} from "lucide-react";

/* ============================================================
   APS QUÉBEC — Site complet indépendant
   Branding: Orange #1A3F7A + Teal #0EA5AA + Cream #FAFAF8
   Style: MedTech sobre, humain, inspiré Trimakus
   ============================================================ */

// Image URLs
const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-hero-v3-kAQieuuowUmurFa2Hjgc9b.webp",
  delivery: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-delivery-v3-6QCgZitrPe5DKcWf9rVcKa.webp",
  accompaniment: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-accompaniment-v3-4WdHPeWdVfPudYeYcigsSM.webp",
  social: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-social-v3-WSDdKeC8DPYLfF8vPbJLdb.webp",
  tech: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-tech-v3-LAJ6H49RJCewEk4BD5SoK7.webp",
  bgCircuit: "https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/pasted_file_kUrRxV_image-KQWB4xhGfcLqEGpHkEFuUy.webp",
};

// Counter hook
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

// ─── HERO SECTION ───────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FAFAF8" }}
    >
      {/* Background circuit subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${IMAGES.bgCircuit})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(13,115,119,0.04) 0%, rgba(244,99,30,0.03) 100%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="animate-fade-in-left">
            <div className="aps-badge aps-badge-teal mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-current pulse-soft inline-block" />
              Programme Partenaire APS Québec
            </div>

            <h1
              className="font-black leading-tight mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                color: "#1A2E35",
              }}
            >
              Soutenir la{" "}
              <span style={{ color: "#0EA5AA" }}>participation sociale</span>,
              le bien-être mental et la{" "}
              <span style={{ color: "#1A3F7A" }}>qualité de vie</span>{" "}
              de vos résidents
            </h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#4A6670", maxWidth: "520px" }}>
              Un programme d'adhésion abordable qui donne accès à des avantages exclusifs,
              des services d'accompagnement humain et des outils numériques pour soutenir
              votre résidence au quotidien.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Aucun frais caché", "Partenariat humain", "Santé mentale & participation", "Flexibilité totale"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#0EA5AA" }}>
                  <CheckCircle2 size={15} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("formules")?.scrollIntoView({ behavior: "smooth" })}
                className="aps-btn-primary"
              >
                Voir les formules <ArrowRight size={16} />
              </button>
              <a
                href="/devenir-partenaire"
                target="_blank"
                rel="noopener noreferrer"
                className="aps-btn-outline"
              >
                Accéder à APS Connect
              </a>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative animate-fade-in-right delay-200">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px rgba(13,115,119,0.18)" }}
            >
              <img
                src={IMAGES.hero}
                alt="Agent APS Québec avec résidente aînée"
                className="w-full object-cover"
                style={{ height: "480px" }}
              />
              {/* Overlay gradient bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24"
                style={{ background: "linear-gradient(to top, rgba(13,115,119,0.3), transparent)" }}
              />
            </div>

            {/* Floating card — RI/RPA/RTF */}
            <div
              className="absolute -left-6 top-8 bg-white rounded-xl p-4 shadow-xl"
              style={{ border: "1px solid #E8F0F1" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#EFF9FA" }}>
                  <Users size={16} style={{ color: "#0EA5AA" }} />
                </div>
                <span className="text-xs font-bold" style={{ color: "#0EA5AA" }}>RI · RPA · RTF</span>
              </div>
              <p className="text-xs" style={{ color: "#6B8A90" }}>Types de résidences</p>
            </div>

            {/* Floating card — 6+ ans */}
            <div
              className="absolute -right-4 bottom-12 bg-white rounded-xl p-4 shadow-xl"
              style={{ border: "1px solid #E8F0F1" }}
            >
              <div className="text-2xl font-black" style={{ color: "#1A3F7A" }}>6+</div>
              <div className="text-xs font-medium" style={{ color: "#6B8A90" }}>Années d'expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── STATS BAR ───────────────────────────────────────────────
function StatsBar() {
  const s1 = useCounter(400000);
  const s2 = useCounter(6);
  const s3 = useCounter(98);
  const s4 = useCounter(3);

  const stats = [
    { ref: s1.ref, count: s1.count, suffix: "K+", label: "Rendez-vous manqués/an au Québec", color: "#1A3F7A" },
    { ref: s2.ref, count: s2.count, suffix: "+", label: "Années d'expertise", color: "#0EA5AA" },
    { ref: s3.ref, count: s3.count, suffix: "%", label: "Satisfaction partenaires", color: "#1A3F7A" },
    { ref: s4.ref, count: s4.count, suffix: "", label: "Types de résidences (RI, RPA, RTF)", color: "#0EA5AA" },
  ];

  return (
    <div style={{ background: "#0EA5AA" }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} ref={s.ref} className="py-8 px-6 text-center">
              <div className="text-3xl font-black text-white mb-1">
                {i === 0 ? `${Math.floor(s.count / 1000)}K+` : `${s.count}${s.suffix}`}
              </div>
              <div className="text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SERVICES SECTION ────────────────────────────────────────
const services = [
  {
    icon: Truck,
    title: "Livraison Last-Mile",
    desc: "Livraison de médicaments avec traçabilité complète, preuve d'exécution numérique et coordination avec vos pharmacies partenaires.",
    img: IMAGES.delivery,
    color: "#0EA5AA",
    link: "/aps/services/livraison",
  },
  {
    icon: UserCheck,
    title: "Accompagnement patient",
    desc: "Nos agents accompagnent les résidents à leurs rendez-vous médicaux pour réduire les no-shows et sécuriser les transports.",
    img: IMAGES.accompaniment,
    color: "#1A3F7A",
    link: "/aps/services/accompagnement",
  },
  {
    icon: Heart,
    title: "Soutien à la sortie d'hôpital",
    desc: "Accompagnement du patient depuis la sortie jusqu'au retour à domicile, en résidence ou en ressource intermédiaire.",
    img: IMAGES.accompaniment,
    color: "#0EA5AA",
    link: "/aps/services/sortie-hopital",
  },
  {
    icon: Users,
    title: "Services RI / RTF / RPA",
    desc: "Sorties récréatives, participation sociale et accompagnement assisté pour améliorer la qualité de vie des résidents.",
    img: IMAGES.social,
    color: "#1A3F7A",
    link: "/aps/services/residences",
  },
  {
    icon: Activity,
    title: "Santé mentale & bien-être",
    desc: "Visites régulières pour réduire l'isolement, détecter les risques précocement et maintenir le lien social des résidents.",
    img: IMAGES.social,
    color: "#0EA5AA",
    link: "/aps/services/sante-mentale",
  },
  {
    icon: Package,
    title: "Soins à domicile & IoT",
    desc: "Intégration d'appareils de surveillance connectés, alertes en temps réel et visibilité pour les familles et partenaires.",
    img: IMAGES.tech,
    color: "#1A3F7A",
    link: "/aps/services/iot",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="aps-section">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Nos services essentiels</div>
          <h2 className="aps-section-title mb-4">
            Services modulaires conçus<br />
            pour la <span>continuité des soins</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#5A7A82" }}>
            Chaque service peut être déployé individuellement, regroupé ou intégré dans une offre
            institutionnelle avec vos partenaires pharmacies, résidences, hôpitaux et cliniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="aps-card p-0 overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to bottom, transparent 40%, ${s.color}CC)` }}
                />
                <div
                  className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                >
                  <s.icon size={18} style={{ color: s.color }} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A7A82" }}>{s.desc}</p>
                <Link
                  href={s.link}
                  className="flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2"
                  style={{ color: s.color, textDecoration: "none" }}
                >
                  En savoir plus <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT / MISSION SECTION ─────────────────────────────────
function MissionSection() {
  return (
    <section id="apropos" className="aps-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(13,115,119,0.15)" }}>
              <img src={IMAGES.social} alt="Résidents APS Québec" className="w-full object-cover h-96" />
            </div>
            {/* Decorative block */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl"
              style={{ background: "linear-gradient(135deg, #0EA5AA, #3BBFB8)", opacity: 0.15 }}
            />
            {/* Stat card */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl"
              style={{ border: "1px solid #E8F0F1" }}
            >
              <div className="text-2xl font-black" style={{ color: "#0EA5AA" }}>400K+</div>
              <div className="text-xs" style={{ color: "#6B8A90" }}>Rendez-vous manqués/an<br />au Québec</div>
            </div>
          </div>

          {/* Right text */}
          <div>
            <div className="aps-section-label mb-3">Notre mission</div>
            <h2 className="aps-section-title mb-4">
              Recréer le lien humain<br />dans le <span>système de santé</span>
            </h2>
            <div className="aps-divider mb-6" />
            <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>
              APS Québec déploie des <strong>Agents de Proximité Santé</strong> formés pour soutenir
              la continuité des soins. Nous intervenons là où le système manque de connexion humaine —
              entre la sortie d'hôpital et le retour à domicile, entre la pharmacie et le résident,
              entre l'isolement et la participation sociale.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4A6670" }}>
              Notre vision : devenir l'infrastructure de référence pour les services de proximité santé
              au Québec, propulsée par la technologie Vaistat.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "95%", label: "Connexion sociale" },
                { value: "88%", label: "Cohérence du soutien" },
                { value: "92%", label: "Présence communautaire" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl" style={{ background: "#EFF9FA" }}>
                  <div className="text-xl font-black mb-1" style={{ color: "#0EA5AA" }}>{item.value}</div>
                  <div className="text-xs" style={{ color: "#5A7A82" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FORMULES SECTION ────────────────────────────────────────
const formules = [
  {
    name: "Bronze",
    tier: 1,
    tag: "APS PARTENAIRE",
    popular: false,
    price: "0$",
    period: "/ mois",
    base: "2$ / mois",
    color: "#8B6914",
    bg: "#FEF9EE",
    border: "#F0D88A",
    btnClass: "aps-btn-outline",
    features: [
      "Accès aux services d'accompagnement APS",
      "Accès aux programmes communautaires",
      "Accès aux activités de participation sociale",
      "Accès aux ressources en soutien communautaire",
      "Réclamation simplifiée et support dédié",
    ],
  },
  {
    name: "Or",
    tier: 2,
    tag: "APS PARTENAIRE",
    popular: true,
    price: "0$",
    period: "/ mois",
    base: "2$ / mois",
    color: "#0EA5AA",
    bg: "#0EA5AA",
    border: "#0EA5AA",
    btnClass: "aps-btn-primary",
    features: [
      "Tout ce qui est inclus dans Bronze",
      "Rabais APS sur les services admissibles",
      "Priorité sur les missions APS",
      "Accès complet aux programmes de santé mentale",
      "Accès aux activités de participation sociale",
      "Priorité aux communications et offres APS",
      "Gestionnaire partenaire dédié",
      "Accès aux données et politiques de confiance",
      "Accès aux activités de randonnées/sorties",
      "Engagement groupe PLUS (résidences)",
    ],
  },
  {
    name: "Argent",
    tier: 3,
    tag: "APS PARTENAIRE",
    popular: false,
    price: "0$",
    period: "/ mois",
    base: "2$ / mois",
    color: "#607D8B",
    bg: "#F4F7F8",
    border: "#B0BEC5",
    btnClass: "aps-btn-outline",
    features: [
      "Tout ce qui est inclus dans Bronze",
      "Rabais APS sur les services admissibles",
      "Accès prioritaire aux missions APS",
      "Accès aux activités de groupe",
      "Accès aux programmes de participation sociale",
      "Activités axées sur la santé mentale",
      "Activités favorisant l'intégration communautaire",
      "Soutien santé simplifié",
    ],
  },
];

function FormulesSection() {
  const [billing, setBilling] = useState<"mensuel" | "annuel">("mensuel");

  return (
    <section id="formules" className="aps-section" style={{ background: "#F4F9F9" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="aps-section-label mb-3">Programme partenaire APS Québec</div>
          <h2 className="aps-section-title mb-4">
            Choisissez votre <span>formule</span>
          </h2>
          <div
            className="inline-flex items-center gap-1 p-1 rounded-lg mb-2"
            style={{ background: "#E8F0F1", border: "1px solid #D0E4E6" }}
          >
            <button
              onClick={() => setBilling("mensuel")}
              className="px-5 py-2 text-sm font-semibold rounded-md transition-all"
              style={{
                background: billing === "mensuel" ? "white" : "transparent",
                color: billing === "mensuel" ? "#0EA5AA" : "#6B8A90",
                boxShadow: billing === "mensuel" ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Mensuel
            </button>
            <button
              onClick={() => setBilling("annuel")}
              className="px-5 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-2"
              style={{
                background: billing === "annuel" ? "white" : "transparent",
                color: billing === "annuel" ? "#0EA5AA" : "#6B8A90",
                boxShadow: billing === "annuel" ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
              }}
            >
              Annuel
              <span
                className="text-xs font-bold px-1.5 py-0.5 rounded"
                style={{ background: "#1A3F7A", color: "white" }}
              >
                -20%
              </span>
            </button>
          </div>
          <p className="text-sm" style={{ color: "#6B8A90" }}>
            Offre à essai flexible — Adhésion gratuite (2 $) pour toutes vos familles !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {formules.map((f, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: f.popular ? f.bg : "white",
                border: `2px solid ${f.popular ? f.border : "#E8F0F1"}`,
                boxShadow: f.popular
                  ? "0 20px 60px rgba(13,115,119,0.25)"
                  : "0 4px 16px rgba(0,0,0,0.06)",
                transform: f.popular ? "scale(1.03)" : "scale(1)",
              }}
            >
              {f.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-wider"
                  style={{ background: "#1A3F7A", color: "white" }}
                >
                  LE PLUS POPULAIRE
                </div>
              )}

              <div className={`p-7 ${f.popular ? "pt-12" : ""}`}>
                <div className="text-xs font-bold tracking-widest mb-1" style={{ color: f.popular ? "rgba(255,255,255,0.7)" : "#9BAFB5" }}>
                  {f.tag}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  
                  <span
                    className="text-2xl font-black"
                    style={{ color: f.popular ? "white" : "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {f.name}
                  </span>
                </div>

                <div className="mb-1">
                  <span className="text-4xl font-black" style={{ color: f.popular ? "white" : "#1A2E35" }}>
                    {f.price}
                  </span>
                  <span className="text-sm ml-1" style={{ color: f.popular ? "rgba(255,255,255,0.7)" : "#9BAFB5" }}>
                    {f.period}
                  </span>
                </div>
                <div className="text-xs mb-6" style={{ color: f.popular ? "rgba(255,255,255,0.7)" : "#9BAFB5" }}>
                  Frais de base : <strong style={{ color: f.popular ? "white" : "#1A2E35" }}>{f.base}</strong>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {f.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2
                        size={15}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: f.popular ? "#7ECDD0" : "#0EA5AA" }}
                      />
                      <span style={{ color: f.popular ? "rgba(255,255,255,0.85)" : "#4A6670" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/devenir-partenaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 px-6 rounded-lg font-semibold text-sm transition-all duration-200"
                  style={
                    f.popular
                      ? { background: "#1A3F7A", color: "white" }
                      : { background: "#EFF9FA", color: "#0EA5AA", border: "1px solid #B8D8E8" }
                  }
                  onMouseEnter={(e) => {
                    if (!f.popular) {
                      (e.currentTarget as HTMLElement).style.background = "#0EA5AA";
                      (e.currentTarget as HTMLElement).style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!f.popular) {
                      (e.currentTarget as HTMLElement).style.background = "#EFF9FA";
                      (e.currentTarget as HTMLElement).style.color = "#0EA5AA";
                    }
                  }}
                >
                  {i === 0 ? "Sélectionner →" : "Devenir membre →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Value props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { icon: Shield, label: "Aucun frais caché", sub: "Transparence totale sur les coûts" },
            { icon: UserCheck, label: "Partenariat humain", sub: "Des agents formés à vos côtés" },
            { icon: Heart, label: "Santé mentale", sub: "Services axés sur le bien-être" },
            { icon: Zap, label: "Flexibilité totale", sub: "Adaptez votre formule à tout moment" },
          ].map((item) => (
            <div key={item.label} className="text-center p-4 rounded-xl bg-white" style={{ border: "1px solid #E8F0F1" }}>
              <div className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ background: "#EFF9FA" }}>
                <item.icon size={18} style={{ color: "#0EA5AA" }} />
              </div>
              <div className="text-sm font-bold mb-1" style={{ color: "#1A2E35" }}>{item.label}</div>
              <div className="text-xs" style={{ color: "#6B8A90" }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FORMULAIRE INSCRIPTION ──────────────────────────────────
const typeOptions = [
  "Résidence",
  "Ressource Intermédiaire (RI)",
  "Résidence Privée pour Aînés (RPA)",
  "Ressource de Type Familial (RTF)",
  "Clinique",
  "Hôpital",
  "Autre",
];

function InscriptionSection() {
  const [selectedFormule, setSelectedFormule] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", tel: "", typeRessource: "", nomRessource: "",
    adresse: "", ville: "", codePostal: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.625rem 0.875rem",
    border: "1px solid #D0E4E6",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    color: "#1A2E35",
    background: "white",
    outline: "none",
    transition: "border-color 0.15s",
  };

  const labelStyle = { display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#3A5A60", marginBottom: "0.375rem" };

  if (submitted) return (
    <section id="inscription" className="aps-section">
      <div className="container">
        <div className="text-center" style={{ padding: "4rem 0" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>✅</div>
          <h2 className="aps-section-title mb-4">Demande reçue !</h2>
          <p className="text-base" style={{ color: "#5A7A82", maxWidth: "480px", margin: "0 auto 2rem" }}>
            Merci <strong>{form.prenom}</strong>, votre inscription a bien été soumise. Notre équipe vous contactera sous 24h à <strong>{form.email}</strong>.
          </p>
          <button onClick={() => setSubmitted(false)} className="aps-btn-primary">
            Soumettre une autre demande
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <section id="inscription" className="aps-section">
      <div className="container">
        <div className="text-center mb-12">
          <div className="aps-section-label mb-3">Formulaire — APS Partenaire</div>
          <h2 className="aps-section-title mb-4">
            Inscrivez votre <span>résidence</span>
          </h2>
          <p className="text-base" style={{ color: "#5A7A82" }}>
            Tous les champs marqués * sont obligatoires
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E8F0F1", boxShadow: "0 4px 24px rgba(13,115,119,0.08)" }}>
              {/* Responsable */}
              <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2" style={{ color: "#0EA5AA", borderBottom: "2px solid #EFF9FA" }}>
                  Responsable
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Jean" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom de famille *</label>
                    <input name="nom" value={form.nom} onChange={handleChange} required placeholder="Tremblay" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean@residence.ca" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone *</label>
                    <input name="tel" type="tel" value={form.tel} onChange={handleChange} required placeholder="+1 514 000 0000" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Ressource */}
              <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2" style={{ color: "#0EA5AA", borderBottom: "2px solid #EFF9FA" }}>
                  Ressource / Résidence
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Type de ressource *</label>
                    <select name="typeRessource" value={form.typeRessource} onChange={handleChange} required style={inputStyle}>
                      <option value="">Sélectionner...</option>
                      {typeOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Nom de la ressource *</label>
                    <input name="nomRessource" value={form.nomRessource} onChange={handleChange} required placeholder="Résidences Les Étoiles" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Adresse */}
              <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 pb-2" style={{ color: "#0EA5AA", borderBottom: "2px solid #EFF9FA" }}>
                  Adresse
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label style={labelStyle}>Adresse *</label>
                    <input name="adresse" value={form.adresse} onChange={handleChange} required placeholder="123 rue Principale" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Ville *</label>
                    <input name="ville" value={form.ville} onChange={handleChange} required placeholder="Montréal" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Code postal *</label>
                    <input name="codePostal" value={form.codePostal} onChange={handleChange} required placeholder="G1A 2B3" style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label style={labelStyle}>Message (optionnel)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Décrivez vos besoins ou posez vos questions..."
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button type="submit" className="aps-btn-orange w-full justify-center text-base py-4">
                Envoyer ma demande d'adhésion →
              </button>
              <p className="text-xs text-center mt-3" style={{ color: "#9BAFB5" }}>
                En soumettant ce formulaire, vous acceptez d'être contacté par l'équipe APS Québec.
              </p>
            </form>
          </div>

          {/* Sidebar — Formule sélectionnée */}
          <div>
            <div className="bg-white rounded-2xl p-6 sticky top-24" style={{ border: "1px solid #E8F0F1", boxShadow: "0 4px 24px rgba(13,115,119,0.08)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#9BAFB5" }}>
                Formule sélectionnée
              </div>
              <div
                className="rounded-xl p-4 mb-4"
                style={{ background: selectedFormule === 1 ? "#0EA5AA" : "#F4F9F9", border: "1px solid #E8F0F1" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  
                  <span className="font-black" style={{ color: selectedFormule === 1 ? "white" : "#1A2E35" }}>
                    APS Partenaire {formules[selectedFormule].name}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {formules[selectedFormule].features.slice(0, 5).map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: selectedFormule === 1 ? "#7ECDD0" : "#0EA5AA" }} />
                      <span style={{ color: selectedFormule === 1 ? "rgba(255,255,255,0.8)" : "#5A7A82" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${selectedFormule === 1 ? "rgba(255,255,255,0.2)" : "#E8F0F1"}` }}>
                  <div className="text-xs" style={{ color: selectedFormule === 1 ? "rgba(255,255,255,0.6)" : "#9BAFB5" }}>Frais de base</div>
                  <div className="text-lg font-black" style={{ color: selectedFormule === 1 ? "white" : "#1A3F7A" }}>2$ / mois</div>
                </div>
              </div>

              <div className="text-xs font-semibold mb-2" style={{ color: "#6B8A90" }}>Changer de formule :</div>
              <div className="flex flex-col gap-2">
                {formules.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedFormule(i)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
                    style={{
                      background: selectedFormule === i ? "#EFF9FA" : "transparent",
                      color: selectedFormule === i ? "#0EA5AA" : "#6B8A90",
                      border: `1px solid ${selectedFormule === i ? "#B8D8E8" : "#E8F0F1"}`,
                    }}
                  >
                    
                    APS Partenaire {f.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TECHNOLOGIE SECTION ─────────────────────────────────────
import { Smartphone, Stethoscope, Pill, Building2, BarChart2, Link2 } from "lucide-react";
const techItems = [
  { Icon: Smartphone, title: "App Patient",        desc: "Demandes de service, suivi de mission, notifications et visibilité pour les proches aidants autorisés." },
  { Icon: Stethoscope, title: "App HPA",           desc: "Dispatch de mission, preuve d'exécution, notes, statut, chaîne de custody et escalade." },
  { Icon: Pill,        title: "Portail Pharmacie", desc: "Coordination des commandes, livraisons, preuves et suivis avec vos pharmacies partenaires." },
  { Icon: Building2,   title: "Portail Partenaire",desc: "Vue opérationnelle pour résidences, soins à domicile, corridors cliniques et partenaires institutionnels." },
  { Icon: BarChart2,   title: "Tableaux de bord",  desc: "Indicateurs de performance, volumes, délais, exceptions, satisfaction, conformité et impact." },
  { Icon: Link2,       title: "Intégrations",      desc: "Standards HL7/FHIR, APIs et intégration progressive avec vos systèmes existants." },
];

function TechSection() {
  return (
    <section id="technologie" className="aps-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aps-section-label mb-3">Technologie APS</div>
            <h2 className="aps-section-title mb-4">
              La technologie qui rend la<br />proximité <span>scalable et opérable</span>
            </h2>
            <div className="aps-divider mb-6" />
            <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>
              APS Québec est l'infrastructure humaine. Vaistat est l'épine dorsale technologique.
              Ensemble, ils permettent de coordonner, suivre, documenter et mesurer les missions terrain.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4A6670" }}>
              La plateforme Vaistat 2.0 supporte de multiples interfaces : app patient, app HPA,
              portail pharmacie, portails partenaires, tableaux de bord, preuves d'exécution,
              rapports et intégrations.
            </p>
            <Link href="/devenir-partenaire" className="aps-btn-primary no-underline">
              Devenir partenaire <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden mb-6" style={{ boxShadow: "0 16px 48px rgba(13,115,119,0.15)" }}>
              <img src={IMAGES.tech} alt="Technologie APS Québec" className="w-full object-cover h-64" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techItems.map((item, i) => (
                <div key={i} className="aps-card p-4">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-2" style={{ background: "#EFF9FA" }}>
                    <item.Icon size={18} style={{ color: "#0EA5AA" }} />
                  </div>
                  <div className="text-sm font-bold mb-1" style={{ color: "#1A3F7A" }}>{item.title}</div>
                  <div className="text-xs leading-relaxed" style={{ color: "#6B8A90" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────
const testimonials = [
  {
    quote: "Les agents de proximité d'APS Québec ont été une bouée de sauvetage pour mon père. Leur service d'accompagnement a fait en sorte qu'il ne manque plus jamais un rendez-vous médical.",
    author: "Sarah L.",
    role: "Proche aidante",
    color: "#0EA5AA",
  },
  {
    quote: "Les transitions depuis l'hôpital peuvent être fragmentées et stressantes, mais APS Québec a rendu le processus sans accroc. Ils ont tout coordonné, du transport à la préparation des médicaments.",
    author: "Jean-Philippe M.",
    role: "Patient en convalescence",
    color: "#1A3F7A",
  },
  {
    quote: "Notre résidence a rejoint le programme APS Partenaire Or et la différence est remarquable. Nos résidents participent davantage aux activités sociales et leur bien-être s'est nettement amélioré.",
    author: "Directrice, Résidence Les Érables",
    role: "Partenaire institutionnel",
    color: "#0EA5AA",
  },
];

function TestimonialsSection() {
  return (
    <section className="aps-section" style={{ background: "#1A2E35" }}>
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#7ECDD0" }}>
            Témoignages
          </div>
          <h2 className="font-black text-3xl text-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            La confiance bâtie par la compassion
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Quote size={28} className="mb-4" style={{ color: t.color }} />
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: t.color }}
                >
                  {t.author[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT SECTION ─────────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" className="aps-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aps-section-label mb-3">Contactez-nous</div>
            <h2 className="aps-section-title mb-4">
              Prêt à rejoindre le<br />réseau <span>APS Québec</span> ?
            </h2>
            <div className="aps-divider mb-6" />
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4A6670" }}>
              Notre équipe est disponible du lundi au samedi de 8h à 17h pour répondre à toutes
              vos questions et vous accompagner dans votre adhésion.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "Téléphone", value: "+1-866-824-7828", href: "tel:+18668247828" },
                { icon: Mail, label: "Email", value: "info@aps-qc.ca", href: "mailto:info@aps-qc.ca" },
                { icon: MapPin, label: "Adresse", value: "Montréal, Québec", href: "#" },
                { icon: Clock, label: "Horaires", value: "Lun–Sam : 8h–17h", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group no-underline"
                  style={{ border: "1px solid #E8F0F1", background: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#B8D8E8")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E8F0F1")}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#EFF9FA" }}>
                    <item.icon size={18} style={{ color: "#0EA5AA" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#9BAFB5" }}>{item.label}</div>
                    <div className="text-sm font-medium" style={{ color: "#1A2E35" }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 16px 48px rgba(13,115,119,0.15)" }}>
              <img src={IMAGES.hero} alt="Contact APS Québec" className="w-full object-cover h-80" />
            </div>
            <div
              className="mt-6 rounded-2xl p-6 text-center"
              style={{ background: "linear-gradient(135deg, #0EA5AA, #3BBFB8)" }}
            >
              <div className="text-white font-bold text-lg mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Prêt à démarrer ?
              </div>
              <p className="text-white/80 text-sm mb-4">
                Créez votre compte APS Connect et accédez à votre espace partenaire en quelques minutes.
              </p>
              <a
                href="/devenir-partenaire"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white font-semibold text-sm px-6 py-3 rounded-lg transition-all"
                style={{ color: "#0EA5AA" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1A3F7A") && (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "white";
                  (e.currentTarget as HTMLElement).style.color = "#0EA5AA";
                }}
              >
                Créer mon compte APS <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ──────────────────────────────────────────────────
function APSFooter() {
  return (
    <footer style={{ background: "#0EA5AA" }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/LogoAPS.png" alt="APS Québec" style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              Agents de Proximité Santé — Recréer le lien humain dans le système de santé québécois.
              Soutien aux résidences RI, RPA et RTF.
            </p>
            <div className="flex gap-3">
              {["F", "I", "L"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#1A3F7A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Navigation</div>
            <ul className="space-y-2">
              {["Comment ça marche", "Nos services", "Formules", "Technologie", "Partenaires", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm transition-colors no-underline" style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Contact</div>
            <ul className="space-y-2">
              <li><a href="tel:+18668247828" className="text-sm no-underline" style={{ color: "rgba(255,255,255,0.7)" }}>+1-866-824-7828</a></li>
              <li><a href="mailto:info@aps-qc.ca" className="text-sm no-underline" style={{ color: "rgba(255,255,255,0.7)" }}>info@aps-qc.ca</a></li>
              <li><span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Montréal, Québec</span></li>
              <li><span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Lun–Sam : 8h–17h</span></li>
            </ul>
            <a
              href="/devenir-partenaire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all"
              style={{ background: "#1A3F7A", color: "white" }}
            >
              Créer mon compte APS
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 APS Québec — Made with ♥ by{" "}
            <a href="https://smartegy.ca" target="_blank" rel="noopener noreferrer" style={{ color: "#3BBFB8", textDecoration: "none" }}>smartegy.ca</a>
          </p>
          <div className="flex gap-4">
            {["Politique de confidentialité", "Conditions d'utilisation"].map((item) => (
              <a key={item} href="#" className="text-xs no-underline transition-colors" style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function APSQuebecSite() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <MissionSection />
      <FormulesSection />
      <InscriptionSection />
      <TechSection />
      <TestimonialsSection />
      <ContactSection />
      <APSFooter />
    </div>
  );
}
