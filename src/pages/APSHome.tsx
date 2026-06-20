import { useState, useEffect, useRef } from "react";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Link } from "wouter";
import { IMG } from "@/lib/images";
import {
  ArrowRight, ArrowUpRight, Phone,
  Heart, UserCheck, Truck, FlaskConical, Activity, Home,
  Hospital, CalendarX, Boxes, EyeOff, Clock,
  MapPin, Network, RefreshCw, Pill, Building2, HandHeart,
  Smartphone, Stethoscope, LayoutDashboard, Link2, ShieldCheck, FileCheck, Lock, GraduationCap,
} from "lucide-react";

/* ============================================================
   APS QUÉBEC — Accueil (layout éditorial medtech)
   Navy #1A3F7A · Teal #0EA5AA · Orange #F26419
   ============================================================ */

function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let s = 0; const step = target / (duration / 16);
    const t = setInterval(() => { s += step; if (s >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(s)); }, 16);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return { count, ref };
}

// ─── HERO ────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FAFAF8", paddingTop: "6.5rem", paddingBottom: "3rem" }}>
      {/* fine grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(#1A3F7A0A 1px, transparent 1px), linear-gradient(90deg, #1A3F7A0A 1px, transparent 1px)",
        backgroundSize: "44px 44px", maskImage: "linear-gradient(to bottom, black, transparent 70%)",
      }} />
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{ background: "#FFF1EA", border: "1px solid rgba(242,100,25,0.25)" }}>
              <span style={{ width: 6, height: 6, borderRadius: 99, background: "#F26419" }} className="pulse-soft" />
              <span style={{ fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D5500D" }}>Propulsé par Vaistat</span>
            </div>

            <h1 className="font-black mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.1rem, 4.4vw, 3.45rem)", color: "#1A2E35", lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              Le pont <span style={{ color: "#0EA5AA" }}>humain</span> et <span style={{ color: "#1A3F7A" }}>technologique</span> entre le patient et le système de santé
            </h1>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#4A6670", maxWidth: "540px" }}>
              APS Québec déploie des <strong>Agents de Proximité en Santé</strong> formés pour soutenir la continuité des soins : décharge hospitalière, accompagnement médical, livraison de médicaments, prélèvements, visites de suivi et monitoring connecté.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact" className="aps-btn-orange no-underline">
                Demander une rencontre <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="aps-btn-outline no-underline">
                Découvrir nos services
              </Link>
            </div>

            {/* mini trust row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6" style={{ borderTop: "1px solid #E0EAF4" }}>
              {[
                { k: "Missions", v: "Documentées & traçables" },
                { k: "Couverture", v: "Domicile · Pharmacie · Résidence" },
                { k: "Rôle", v: "Non clinique, mais essentiel" },
              ].map((x) => (
                <div key={x.k}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9BAFB5" }}>{x.k}</div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A3F7A" }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image with framing */}
          <div className="relative animate-fade-in-right delay-200">
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl" style={{ border: "2px solid #0EA5AA", opacity: 0.25 }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(26,63,122,0.22)" }}>
              <img src={IMG.hero} alt="Agent de Proximité en Santé auprès d'un patient" className="w-full object-cover" style={{ height: "500px" }} />
              <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: "linear-gradient(to top, rgba(13,30,63,0.55), transparent)" }} />
              {/* corner tag */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg" style={{ background: "rgba(242,100,25,0.95)", backdropFilter: "blur(4px)" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", color: "white" }}>CONTINUITÉ DES SOINS</span>
              </div>
            </div>
            {/* floating stat */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-4" style={{ boxShadow: "0 12px 32px rgba(26,63,122,0.16)", border: "1px solid #E8F0F1" }}>
              <div className="font-black" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem", color: "#1A3F7A", lineHeight: 1 }}>400K<span style={{ color: "#F26419" }}>+</span></div>
              <div style={{ fontSize: "0.7rem", color: "#6B8A90", marginTop: 2 }}>rendez-vous manqués<br />par an au Québec</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BANDE STATS ─────────────────────────────────────────────
function StatsBar() {
  const s1 = useCounter(400000);
  const stats = [
    { ref: s1.ref, display: `${Math.floor(s1.count / 1000)}K+`, label: "Rendez-vous manqués / an au Québec" },
    { ref: null, display: "06", label: "Services modulaires de proximité" },
    { ref: null, display: "05", label: "Types de partenaires desservis" },
    { ref: null, display: "100%", label: "Missions documentées et traçables" },
  ];
  return (
    <div style={{ background: "#0D1E3F" }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} ref={s.ref ?? undefined} className="py-8 px-6" style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
              <div className="font-black mb-1" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", color: "white", lineHeight: 1 }}>
                {s.display.replace("+", "")}<span style={{ color: "#F26419" }}>{s.display.includes("+") ? "+" : ""}</span>
              </div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── 01 · PROBLÈME (layout éditorial 2 colonnes) ─────────────
const problemes = [
  { icon: Hospital, title: "Sorties d'hôpital fragiles", desc: "Le retour à domicile devient risqué lorsqu'aucun relais opérationnel ne prend en charge la transition." },
  { icon: CalendarX, title: "Rendez-vous manqués", desc: "Le manque de transport ou d'accompagnement entraîne absences, retards de suivi et perte de continuité." },
  { icon: Boxes, title: "Logistique médicale fragmentée", desc: "Médicaments, équipements, fournitures et échantillons sont encore trop souvent coordonnés manuellement." },
  { icon: EyeOff, title: "Familles sans visibilité", desc: "Les proches ne savent pas toujours si une mission a été réalisée ou si une situation doit être signalée." },
  { icon: Clock, title: "Manque de suivi entre les visites", desc: "Entre deux interventions, il manque une présence capable de rassurer, vérifier, documenter et escalader." },
];

function ProblemSection() {
  return (
    <section className="aps-section">
      <div className="container">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 self-start">
            <div className="aps-section-label mb-4">01 — Le problème</div>
            <h2 className="aps-section-title mb-5" style={{ fontSize: "clamp(1.7rem, 3vw, 2.3rem)" }}>
              Le parcours ne se brise pas dans la salle clinique. Il se brise <span style={{ color: "#F26419" }}>entre les étapes</span>.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#5A7A82" }}>
              Entre l'hôpital, la pharmacie, le domicile, les proches aidants, les résidences et les services de soins, le patient doit naviguer un parcours fragmenté. APS Québec intervient précisément là où le système a besoin d'un relais humain, structuré, documenté et connecté.
            </p>
          </div>

          {/* Numbered list */}
          <div className="flex flex-col">
            {problemes.map((p, i) => (
              <div key={i} className="flex gap-5 py-6" style={{ borderTop: "1px solid #E0EAF4" }}>
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <span className="aps-num">0{i + 1}</span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(26,63,122,0.06)" }}>
                    <p.icon size={18} style={{ color: "#1A3F7A" }} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 02 · SOLUTION (image + 3 piliers) ───────────────────────
const piliers = [
  { icon: MapPin, title: "Proximité", desc: "Des agents formés interviennent là où le parcours patient se vit réellement : domicile, pharmacie, hôpital, résidence, rendez-vous et communauté." },
  { icon: Network, title: "Coordination", desc: "Chaque mission est structurée, assignée, documentée et suivie. APS Québec agit comme une couche opérationnelle entre les partenaires de soins." },
  { icon: RefreshCw, title: "Continuité", desc: "Grâce à Vaistat, missions, suivis, traçabilité, preuves d'exécution, alertes et visibilité partenaire sont connectés dans une même logique." },
];

function SolutionSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.16)" }}>
              <img src={IMG.about} alt="Équipe d'agents de proximité en santé" className="w-full object-cover" style={{ height: "440px" }} />
            </div>
            <div className="absolute -bottom-5 -right-5 px-5 py-4 rounded-xl" style={{ background: "#F26419", boxShadow: "0 12px 28px rgba(242,100,25,0.32)" }}>
              <div className="font-black text-white" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", lineHeight: 1.2 }}>Agents formés<br />+ protocoles<br />+ Vaistat</div>
            </div>
          </div>

          {/* Piliers */}
          <div className="order-1 lg:order-2">
            <div className="aps-section-label mb-4">02 — Notre solution</div>
            <h2 className="aps-section-title mb-4">Une infrastructure de proximité pour la <span>continuité des soins</span></h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5A7A82" }}>
              L'APS n'est pas un simple livreur : c'est un agent de proximité non clinique, formé pour exécuter des missions de coordination, d'accompagnement, de logistique médicale et de suivi terrain dans un cadre structuré, traçable et conforme.
            </p>
            <div className="flex flex-col gap-5">
              {piliers.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                    <p.icon size={20} color="white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 03 · SERVICES (grille image unique par carte) ───────────
const services = [
  { icon: Heart, title: "Soutien à la décharge hospitalière", desc: "Sécuriser la transition de l'hôpital vers le domicile, une résidence ou une ressource intermédiaire.", img: IMG.serviceDecharge, link: "/services#decharge-hospitaliere" },
  { icon: UserCheck, title: "Accompagnement aux rendez-vous", desc: "Réduire les absences, sécuriser les déplacements et améliorer la continuité du suivi.", img: IMG.serviceAccompagnement, link: "/services#accompagnement" },
  { icon: Truck, title: "Livraison sécurisée de médicaments", desc: "Traçabilité, preuve d'exécution et coordination avec les pharmacies partenaires.", img: IMG.serviceLivraison, link: "/services#livraison" },
  { icon: FlaskConical, title: "Transport d'échantillons", desc: "Logistique des prélèvements via laboratoires partenaires selon les protocoles convenus.", img: IMG.serviceEchantillons, link: "/services#echantillons" },
  { icon: Activity, title: "Visites de suivi et présence", desc: "Vérifier, rassurer, documenter et signaler rapidement une situation à risque.", img: IMG.serviceVisites, link: "/services#visites-suivi" },
  { icon: Home, title: "Monitoring connecté à domicile", desc: "Connecter les alertes au parcours patient et offrir plus de visibilité aux familles.", img: IMG.serviceMonitoring, link: "/services#monitoring" },
];

function ServicesSection() {
  return (
    <section id="services" className="aps-section">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="aps-section-label mb-4">03 — Nos services</div>
            <h2 className="aps-section-title" style={{ marginBottom: 0 }}>Des services modulaires pour la <span>continuité des soins</span></h2>
          </div>
          <p className="text-base md:max-w-sm" style={{ color: "#5A7A82" }}>
            Chaque service peut être déployé seul, regroupé ou intégré dans un corridor de soins plus large.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={i} href={s.link} className="aps-card-flat overflow-hidden group no-underline" style={{ display: "flex", flexDirection: "column" }}>
              <div className="relative overflow-hidden" style={{ height: "180px" }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,30,63,0.35), transparent 55%)" }} />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "white" }}>
                  <s.icon size={17} style={{ color: "#0EA5AA" }} />
                </div>
                <span className="absolute top-3 right-3 aps-num" style={{ color: "white", opacity: 0.85 }}>0{i + 1}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#5A7A82" }}>{s.desc}</p>
                <span className="flex items-center gap-1 text-sm font-bold transition-all group-hover:gap-2" style={{ color: "#F26419" }}>
                  En savoir plus <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 04 · POUR QUI (bande avec image + segments) ─────────────
const segments = [
  { icon: Pill, title: "Pharmacies", desc: "Transformer la livraison pharmaceutique en service de continuité thérapeutique." },
  { icon: Building2, title: "Résidences, RI, RPA, CHSLD", desc: "Une couche de soutien humain et opérationnel autour des résidents." },
  { icon: Home, title: "Soins à domicile", desc: "L'extension opérationnelle du fournisseur de soins à domicile." },
  { icon: Hospital, title: "Hôpitaux & cliniques", desc: "Prolonger la continuité des soins au-delà des murs de l'établissement." },
  { icon: HandHeart, title: "Familles & proches aidants", desc: "APS Québec aide la famille à rester connectée." },
];

function PourQuiSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <div className="aps-eyebrow mb-4">04 — Pour qui</div>
          <h2 className="aps-section-title">Pour les acteurs qui veulent maîtriser le <span>parcours réel du patient</span></h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.14)" }}>
            <img src={IMG.partenariat} alt="Partenaires de soins APS Québec" className="w-full object-cover" style={{ height: "420px" }} />
          </div>
          <div className="flex flex-col">
            {segments.map((s, i) => (
              <Link key={i} href="/pour-qui" className="flex items-center gap-4 py-4 group no-underline" style={{ borderTop: i === 0 ? "none" : "1px solid #E0EAF4" }}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all" style={{ background: "white", border: "1px solid #E0EAF4" }}>
                  <s.icon size={19} style={{ color: "#0EA5AA" }} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
                  <p className="text-sm" style={{ color: "#5A7A82" }}>{s.desc}</p>
                </div>
                <ArrowUpRight size={18} style={{ color: "#F26419" }} className="flex-shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 05 · TECHNOLOGIE (split) ────────────────────────────────
const techItems = [
  { Icon: Smartphone, title: "Application patient", desc: "Demande de services, suivi, notifications et visibilité pour les proches autorisés." },
  { Icon: Stethoscope, title: "Application APS", desc: "Répartition des missions, preuve d'exécution, notes, statut et escalade." },
  { Icon: Pill, title: "Portail pharmacie", desc: "Coordination des commandes, livraisons, preuves et suivis." },
  { Icon: Building2, title: "Portail partenaires", desc: "Vue opérationnelle pour résidences, soins à domicile et corridors cliniques." },
  { Icon: LayoutDashboard, title: "Tableaux de bord", desc: "Performance, volumes, délais, exceptions, satisfaction et conformité." },
  { Icon: Link2, title: "Intégrations", desc: "Standards HL7/FHIR, API et intégration progressive avec systèmes existants." },
];

function TechSection() {
  return (
    <section id="technologie" className="aps-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="aps-section-label mb-4">05 — Technologie</div>
            <h2 className="aps-section-title mb-4">La technologie qui rend la proximité <span>opérable à grande échelle</span></h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>
              APS Québec est l'infrastructure humaine. Vaistat est l'épine dorsale technologique. La plateforme Vaistat 2.0 soutient plusieurs interfaces : application patient, application APS, portails, tableaux de bord, preuve d'exécution et intégrations.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {techItems.map((item, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl" style={{ border: "1px solid #E0EAF4", background: "white" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF9FA" }}>
                    <item.Icon size={17} style={{ color: "#0EA5AA" }} />
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#1A3F7A" }}>{item.title}</div>
                    <div className="text-xs leading-snug" style={{ color: "#6B8A90" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/technologie" className="aps-btn-primary no-underline">Explorer la technologie <ArrowRight size={16} /></Link>
          </div>

          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl" style={{ border: "2px solid #F26419", opacity: 0.25 }} />
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.18)" }}>
              <img src={IMG.tech} alt="Plateforme technologique Vaistat" className="w-full object-cover" style={{ height: "500px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 06 · CONFORMITÉ (bande navy) ────────────────────────────
const conformite = [
  { Icon: Lock, label: "Protection des renseignements personnels" },
  { Icon: FileCheck, label: "Traçabilité des missions" },
  { Icon: ShieldCheck, label: "Preuves d'exécution" },
  { Icon: FileCheck, label: "Protocoles opérationnels" },
  { Icon: Lock, label: "Gestion des accès" },
  { Icon: ShieldCheck, label: "Escalade documentée" },
  { Icon: GraduationCap, label: "Formation continue" },
  { Icon: ShieldCheck, label: "Conformité aux cadres applicables" },
];

function ComplianceSection() {
  return (
    <section className="aps-section" style={{ background: "#0D1E3F" }}>
      <div className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
          <div>
            <div className="aps-section-label mb-4" style={{ color: "#F26419" }}>06 — Confiance & conformité</div>
            <h2 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.3rem)", color: "white", lineHeight: 1.15 }}>
              Conçu pour un <span style={{ color: "#3BBFB8" }}>environnement sensible</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              APS Québec évolue dans un secteur où la confiance, la confidentialité et la conformité sont essentielles. Notre approche repose sur des protocoles documentés, une formation structurée, une traçabilité des missions et une gestion responsable des données.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {conformite.map((c, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <c.Icon size={16} style={{ color: "#3BBFB8", flexShrink: 0 }} />
                <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 07 · PARTENARIATS (split image) ─────────────────────────
const modeles = [
  { n: "01", title: "Service opéré", desc: "APS Québec opère les missions, gère la coordination et facture selon le modèle convenu." },
  { n: "02", title: "Marque blanche / co-marquage", desc: "Le partenaire enrichit son offre sous sa bannière, APS fournit l'infrastructure." },
  { n: "03", title: "Corridor pilote", desc: "Déploiement contrôlé sur un territoire, un type de patient ou un programme." },
  { n: "04", title: "Partenariat stratégique", desc: "Volumes sécurisés, territoires, exclusivité, partage de revenus et intégration." },
];

function PartnershipSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="aps-section-label mb-4">07 — Partenariats</div>
            <h2 className="aps-section-title mb-4">Construire des corridors de soins fluides avec les <span>bons partenaires</span></h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#5A7A82" }}>
              Service opéré, offre co-marquée, marque blanche ou partenariat stratégique : notre modèle est flexible et s'adapte à votre réalité.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {modeles.map((m) => (
                <div key={m.n} className="p-4 rounded-xl" style={{ border: "1px solid #E0EAF4", background: "white" }}>
                  <div className="aps-num mb-2">{m.n}</div>
                  <h3 className="font-bold text-base mb-1" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{m.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#5A7A82" }}>{m.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/partenariats" className="aps-btn-outline no-underline">Découvrir les modèles <ArrowRight size={16} /></Link>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.16)" }}>
              <img src={IMG.segHopital} alt="Corridors de soins et partenaires institutionnels" className="w-full object-cover" style={{ height: "520px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="aps-section" style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", position: "relative", overflow: "hidden" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
      <div className="container text-center relative z-10">
        <p className="font-bold uppercase mb-4" style={{ fontSize: "0.75rem", letterSpacing: "0.14em", color: "#FFD2BC" }}>
          APS Québec ne remplace pas les soins
        </p>
        <h2 className="font-black mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.8rem, 3.6vw, 2.85rem)", color: "white", lineHeight: 1.18 }}>
          Nous structurons ce qui se passe<br />entre les soins
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
          Parlons de votre corridor de soins, de votre établissement ou de votre projet pilote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="aps-btn-orange no-underline" style={{ padding: "0.9rem 1.9rem" }}>
            Demander une rencontre <ArrowRight size={16} />
          </Link>
          <Link href="/devenir-aps" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.9rem 1.9rem", background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
            Devenir APS
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <Phone size={15} style={{ color: "white" }} />
          <a href="tel:+18668247828" className="text-sm font-semibold no-underline" style={{ color: "white" }}>1-866-824-7828</a>
        </div>
      </div>
    </section>
  );
}

export default function APSQuebecSite() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PourQuiSection />
      <TechSection />
      <ComplianceSection />
      <PartnershipSection />
      <FinalCTA />
      <APSFooter />
    </div>
  );
}
