import { useState, useEffect, useRef } from "react";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, ChevronRight, Phone,
  Truck, UserCheck, Heart, FlaskConical, Home, Activity,
  Hospital, CalendarX, Boxes, EyeOff, Clock,
  MapPin, Network, RefreshCw, Building2, Pill, Users, HandHeart,
  Smartphone, Stethoscope, LayoutDashboard, Link2, ShieldCheck, FileCheck, Lock, GraduationCap,
} from "lucide-react";

/* ============================================================
   APS QUÉBEC — Accueil
   Contenu aligné sur le cahier de contenu officiel APS / Vaistat
   Branding: Navy #1A3F7A + Teal #0EA5AA + Turquoise #3BBFB8
   ============================================================ */

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

// ─── HERO ────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#FAFAF8" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url(${IMAGES.bgCircuit})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.05 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(14,165,170,0.05) 0%, rgba(26,63,122,0.03) 100%)" }} />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="animate-fade-in-left">
            <div className="aps-badge aps-badge-teal mb-6">
              <span className="pulse-soft" />
              Propulsé par Vaistat
            </div>

            <h1 className="font-black leading-tight mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2.1rem, 4.3vw, 3.4rem)", color: "#1A2E35" }}>
              Le pont <span style={{ color: "#0EA5AA" }}>humain</span> et <span style={{ color: "#1A3F7A" }}>technologique</span> entre le patient, la pharmacie, le domicile et le système de santé
            </h1>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#4A6670", maxWidth: "540px" }}>
              APS Québec déploie des <strong>Agents de Proximité en Santé</strong> formés pour soutenir la continuité des soins : décharge hospitalière, accompagnement médical, livraison sécurisée de médicaments, transport d'échantillons, visites de suivi et monitoring connecté.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="aps-btn-primary no-underline">
                Demander une rencontre <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="aps-btn-outline no-underline">
                Découvrir nos services
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative animate-fade-in-right delay-200">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(26,63,122,0.18)" }}>
              <img src={IMAGES.hero} alt="Agent de Proximité en Santé avec une résidente" className="w-full object-cover" style={{ height: "480px" }} />
              <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, rgba(26,63,122,0.3), transparent)" }} />
            </div>

            <div className="absolute -left-6 top-8 bg-white rounded-xl p-4 shadow-xl" style={{ border: "1px solid #E8F0F1" }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "#EFF9FA" }}>
                  <ShieldCheck size={16} style={{ color: "#0EA5AA" }} />
                </div>
                <span className="text-xs font-bold" style={{ color: "#0EA5AA" }}>Missions traçables</span>
              </div>
              <p className="text-xs" style={{ color: "#6B8A90" }}>Documentées & horodatées</p>
            </div>

            <div className="absolute -right-4 bottom-12 bg-white rounded-xl p-4 shadow-xl" style={{ border: "1px solid #E8F0F1" }}>
              <div className="text-2xl font-black" style={{ color: "#1A3F7A" }}>Non clinique</div>
              <div className="text-xs font-medium" style={{ color: "#6B8A90" }}>mais essentiel</div>
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
  const stats = [
    { ref: s1.ref, display: `${Math.floor(s1.count / 1000)}K+`, label: "Rendez-vous manqués par an au Québec" },
    { ref: null, display: "6", label: "Services modulaires de proximité" },
    { ref: null, display: "5", label: "Types de partenaires desservis" },
    { ref: null, display: "100%", label: "Missions documentées et traçables" },
  ];

  return (
    <div style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)" }}>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} ref={s.ref ?? undefined} className="py-8 px-6 text-center">
              <div className="text-3xl font-black text-white mb-1">{s.display}</div>
              <div className="text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PROBLÈME ────────────────────────────────────────────────
const problemes = [
  { icon: Hospital, title: "Sorties d'hôpital fragiles", desc: "Le retour à domicile peut devenir risqué lorsqu'aucun relais opérationnel ne prend en charge la transition du patient." },
  { icon: CalendarX, title: "Rendez-vous manqués", desc: "Le manque de transport ou d'accompagnement peut entraîner des absences, des retards de suivi et une perte de continuité." },
  { icon: Boxes, title: "Logistique médicale fragmentée", desc: "Médicaments, équipements, fournitures et échantillons sont encore trop souvent coordonnés manuellement." },
  { icon: EyeOff, title: "Familles sans visibilité", desc: "Les proches aidants ne savent pas toujours si une mission a été réalisée, si un rendez-vous a été respecté ou si une situation doit être signalée." },
  { icon: Clock, title: "Manque de suivi entre les visites", desc: "Entre deux interventions cliniques, il manque souvent une présence légère capable de rassurer, vérifier, documenter et escalader au bon moment." },
];

function ProblemSection() {
  return (
    <section className="aps-section">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Le problème</div>
          <h2 className="aps-section-title mb-4">
            Le parcours de soins ne se brise pas toujours<br />dans la salle clinique. Il se brise souvent <span>entre les étapes</span>.
          </h2>
          <p className="text-base max-w-3xl mx-auto" style={{ color: "#5A7A82" }}>
            Entre l'hôpital, la pharmacie, le domicile, les proches aidants, les résidences et les services de soins, le patient doit souvent naviguer un parcours fragmenté. APS Québec intervient précisément dans cet espace : là où le système a besoin d'un relais humain, structuré, documenté et connecté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemes.map((p, i) => (
            <div key={i} className="aps-card">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(26,63,122,0.08)" }}>
                <p.icon size={20} style={{ color: "#1A3F7A" }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SOLUTION (3 piliers) ────────────────────────────────────
const piliers = [
  { icon: MapPin, title: "Proximité", desc: "Des agents formés interviennent là où le parcours patient se vit réellement : à domicile, en pharmacie, à l'hôpital, en résidence, lors des rendez-vous et dans la communauté." },
  { icon: Network, title: "Coordination", desc: "Chaque mission est structurée, assignée, documentée et suivie. APS Québec agit comme une couche opérationnelle entre les partenaires de soins." },
  { icon: RefreshCw, title: "Continuité", desc: "Grâce à Vaistat, les missions, les suivis, la traçabilité, les preuves d'exécution, les alertes, les données et la visibilité partenaire sont connectés dans une même logique." },
];

function SolutionSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Notre solution</div>
          <h2 className="aps-section-title mb-4">
            Une infrastructure de proximité<br />pour la <span>continuité des soins</span>
          </h2>
          <p className="text-base max-w-3xl mx-auto" style={{ color: "#5A7A82" }}>
            APS Québec combine trois éléments : des Agents de Proximité en Santé formés, des protocoles opérationnels clairs et la technologie Vaistat. L'APS n'est pas un simple livreur : c'est un agent de proximité non clinique, formé pour exécuter des missions de coordination, d'accompagnement, de logistique médicale et de suivi terrain dans un cadre structuré, traçable et conforme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {piliers.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                <p.icon size={24} color="white" />
              </div>
              <h3 className="font-black text-xl mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── SERVICES ────────────────────────────────────────────────
const services = [
  { icon: Heart, title: "Soutien à la décharge hospitalière", desc: "Accompagner le patient dès la sortie pour sécuriser la transition vers le domicile, une résidence ou une ressource intermédiaire.", img: IMAGES.accompaniment, color: "#0EA5AA", link: "/services/sortie-hopital" },
  { icon: UserCheck, title: "Accompagnement aux rendez-vous médicaux", desc: "Accompagner patients et résidents à leurs rendez-vous afin de réduire les absences, sécuriser les déplacements et améliorer la continuité.", img: IMAGES.accompaniment, color: "#1A3F7A", link: "/services/accompagnement" },
  { icon: Truck, title: "Livraison sécurisée de médicaments", desc: "Livraison avec traçabilité, preuve d'exécution et coordination avec les pharmacies partenaires.", img: IMAGES.delivery, color: "#0EA5AA", link: "/services/livraison" },
  { icon: FlaskConical, title: "Transport d'échantillons et prélèvements", desc: "Logistique des prélèvements sanguins, urinaires ou autres échantillons via laboratoires partenaires selon les protocoles convenus.", img: IMAGES.tech, color: "#1A3F7A", link: "/services/residences" },
  { icon: Activity, title: "Visites de suivi et présence rassurante", desc: "Visites légères pour vérifier, rassurer, documenter et signaler rapidement une situation à risque entre deux interventions cliniques.", img: IMAGES.social, color: "#0EA5AA", link: "/services/sante-mentale" },
  { icon: Home, title: "Monitoring connecté à domicile", desc: "Intégration de dispositifs de monitoring, connexion des alertes au parcours patient et visibilité accrue pour partenaires et familles.", img: IMAGES.tech, color: "#1A3F7A", link: "/services/iot" },
];

function ServicesSection() {
  return (
    <section id="services" className="aps-section">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Nos services</div>
          <h2 className="aps-section-title mb-4">
            Des services modulaires pour la<br /><span>continuité des soins</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A7A82" }}>
            Chaque service peut être déployé individuellement, regroupé ou intégré dans un corridor de soins plus large avec pharmacies, résidences, entreprises de soins à domicile, hôpitaux, cliniques ou partenaires de laboratoire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="aps-card p-0 overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 40%, ${s.color}CC)` }} />
                <div className="absolute bottom-3 left-4 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,255,255,0.95)" }}>
                  <s.icon size={18} style={{ color: s.color }} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A7A82" }}>{s.desc}</p>
                <Link href={s.link} className="flex items-center gap-1 text-sm font-semibold transition-all hover:gap-2 no-underline" style={{ color: s.color }}>
                  En savoir plus <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="aps-btn-teal no-underline">
            Voir tous les services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── POUR QUI ────────────────────────────────────────────────
const segments = [
  { icon: Pill, title: "Pharmacies", desc: "Transformer la livraison pharmaceutique en service de continuité thérapeutique." },
  { icon: Building2, title: "Résidences, RI, RPA et CHSLD", desc: "Une couche de soutien humain et opérationnel autour des résidents." },
  { icon: Home, title: "Entreprises de soins à domicile", desc: "L'extension opérationnelle du fournisseur de soins à domicile." },
  { icon: Hospital, title: "Hôpitaux, cliniques et corridors", desc: "Prolonger la continuité des soins au-delà des murs de l'établissement." },
  { icon: HandHeart, title: "Familles et proches aidants", desc: "APS Québec ne remplace pas la famille. APS Québec aide la famille à rester connectée." },
];

function PourQuiSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Pour qui</div>
          <h2 className="aps-section-title mb-4">
            Pour les acteurs qui veulent mieux contrôler<br />le <span>parcours réel du patient</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A7A82" }}>
            Notre modèle est volontairement transversal. Il répond à des besoins concrets chez les pharmacies, les résidences, les entreprises de soins à domicile, les hôpitaux, les cliniques, les laboratoires, les familles et les partenaires institutionnels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <Link key={i} href="/pour-qui" className="aps-card group no-underline" style={{ display: "block" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(14,165,170,0.1)" }}>
                <s.icon size={20} style={{ color: "#0EA5AA" }} />
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "#5A7A82" }}>{s.desc}</p>
              <span className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2" style={{ color: "#0EA5AA" }}>
                En savoir plus <ChevronRight size={14} />
              </span>
            </Link>
          ))}
          <Link href="/pour-qui" className="rounded-2xl p-6 flex flex-col justify-center no-underline" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
            <h3 className="font-black text-lg text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>Vous ne savez pas par où commencer ?</h3>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>Discutons de votre réalité et trouvons le bon point d'entrée.</p>
            <span className="flex items-center gap-1 text-sm font-bold text-white">Demander une rencontre <ArrowRight size={15} /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── TECHNOLOGIE ─────────────────────────────────────────────
const techItems = [
  { Icon: Smartphone, title: "Application patient", desc: "Demande de services, suivi des missions, notifications et visibilité pour les proches autorisés." },
  { Icon: Stethoscope, title: "Application APS", desc: "Répartition des missions, preuve d'exécution, notes, statut, chaîne de possession et escalade." },
  { Icon: Pill, title: "Portail pharmacie", desc: "Coordination des commandes, livraisons, preuves et suivis." },
  { Icon: Building2, title: "Portail partenaires", desc: "Vue opérationnelle pour résidences, soins à domicile, corridors cliniques et partenaires institutionnels." },
  { Icon: LayoutDashboard, title: "Tableaux de bord", desc: "Indicateurs de performance, volumes, délais, exceptions, satisfaction, conformité et impact." },
  { Icon: Link2, title: "Intégrations", desc: "Orientation vers des standards comme HL7/FHIR, API et intégration progressive avec systèmes existants." },
];

function TechSection() {
  return (
    <section id="technologie" className="aps-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aps-section-label mb-3">Technologie</div>
            <h2 className="aps-section-title mb-4">
              Propulsé par Vaistat : la technologie qui rend la proximité <span>opérable à grande échelle</span>
            </h2>
            <div className="aps-divider mb-6" />
            <p className="text-base leading-relaxed mb-4" style={{ color: "#4A6670" }}>
              APS Québec est l'infrastructure humaine. Vaistat est l'épine dorsale technologique. Ensemble, ils permettent de coordonner, suivre, documenter et mesurer les missions terrain.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#4A6670" }}>
              La plateforme Vaistat 2.0 soutient plusieurs interfaces : application patient, application APS, portail pharmacie, portails partenaires, tableaux de bord, preuve d'exécution, rapports et intégrations.
            </p>
            <Link href="/technologie" className="aps-btn-primary no-underline">
              Explorer la technologie <ArrowRight size={16} />
            </Link>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden mb-6" style={{ boxShadow: "0 16px 48px rgba(26,63,122,0.15)" }}>
              <img src={IMAGES.tech} alt="Plateforme technologique Vaistat" className="w-full object-cover h-64" />
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

// ─── CONFORMITÉ ──────────────────────────────────────────────
const conformite = [
  { Icon: Lock, label: "Protection des renseignements personnels" },
  { Icon: FileCheck, label: "Traçabilité des missions" },
  { Icon: CheckCircle2, label: "Preuves d'exécution" },
  { Icon: ShieldCheck, label: "Protocoles opérationnels" },
  { Icon: Lock, label: "Gestion des accès" },
  { Icon: FileCheck, label: "Escalade documentée" },
  { Icon: GraduationCap, label: "Formation continue" },
  { Icon: ShieldCheck, label: "Conformité avec les cadres applicables" },
];

function ComplianceSection() {
  return (
    <section className="aps-section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <div className="aps-section-label mb-3">Confiance & conformité</div>
          <h2 className="aps-section-title mb-4">Conçu pour un <span>environnement sensible</span></h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A7A82" }}>
            APS Québec évolue dans un secteur où la confiance, la confidentialité et la conformité sont essentielles. Notre approche repose sur des protocoles documentés, une formation structurée, une traçabilité des missions et une gestion responsable des données.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {conformite.map((c, i) => (
            <div key={i} className="bg-white rounded-xl p-5 flex items-center gap-3" style={{ border: "1px solid #E0EAF4" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,170,0.1)" }}>
                <c.Icon size={16} style={{ color: "#0EA5AA" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PARTENARIAT ─────────────────────────────────────────────
const modeles = [
  { title: "Service APS Québec opéré", desc: "APS Québec opère les missions, gère la coordination et facture selon le modèle convenu." },
  { title: "Marque blanche ou co-marquage", desc: "Le partenaire enrichit son offre sous sa propre bannière, pendant qu'APS Québec fournit l'infrastructure humaine, opérationnelle et technologique." },
  { title: "Corridor pilote", desc: "Déploiement contrôlé sur un territoire, un type de patient, une résidence, une pharmacie ou un programme de décharge." },
  { title: "Partenariat stratégique", desc: "Intégration plus profonde : volumes sécurisés, territoires, exclusivité, partage de revenus, intégration technologique ou structure de croissance commune." },
];

function PartnershipSection() {
  return (
    <section className="aps-section">
      <div className="container">
        <div className="text-center mb-14">
          <div className="aps-section-label mb-3">Partenariats</div>
          <h2 className="aps-section-title mb-4">
            Construire des corridors de soins plus fluides<br />avec les <span>bons partenaires</span>
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A7A82" }}>
            APS Québec peut être déployé comme service opéré, offre co-marquée, solution en marque blanche ou partenariat stratégique. Notre modèle est flexible et s'adapte à votre réalité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modeles.map((m, i) => (
            <div key={i} className="aps-card flex gap-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 font-black text-sm" style={{ background: "rgba(26,63,122,0.08)", color: "#1A3F7A" }}>
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-base mb-1.5" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/partenariats" className="aps-btn-outline no-underline">
            Découvrir les modèles de partenariat <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CTA FINAL ───────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="aps-section" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3F7A 60%, #0EA5AA 100%)" }}>
      <div className="container text-center">
        <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#3BBFB8" }}>
          APS Québec ne remplace pas les soins
        </p>
        <h2 className="font-black mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", color: "white", lineHeight: 1.2 }}>
          Nous structurons ce qui se passe<br />entre les soins
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
          Parlons de votre corridor de soins, de votre établissement ou de votre projet pilote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
            Demander une rencontre <ArrowRight size={16} />
          </Link>
          <Link href="/devenir-aps" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
            Devenir APS
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <Phone size={15} style={{ color: "#3BBFB8" }} />
          <a href="tel:+18668247828" className="text-sm font-medium no-underline" style={{ color: "rgba(255,255,255,0.85)" }}>
            1-866-824-7828
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────
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
