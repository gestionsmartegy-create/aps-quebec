import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import {
  Smartphone, Stethoscope, Pill, Building2, BarChart2, Link2,
  Shield, Zap, Globe, ArrowRight,
} from "lucide-react";

const techItems = [
  {
    icon: Smartphone,
    title: "App Patient",
    desc: "Demandes de service, suivi de mission, notifications et visibilité pour les proches aidants autorisés.",
    color: "#0EA5AA",
  },
  {
    icon: Stethoscope,
    title: "App HPA",
    desc: "Dispatch de mission, preuve d'exécution, notes, statut, chaîne de custody et escalade pour les agents terrain.",
    color: "#1A3F7A",
  },
  {
    icon: Pill,
    title: "Portail Pharmacie",
    desc: "Coordination des commandes, livraisons, preuves et suivis avec vos pharmacies partenaires.",
    color: "#0EA5AA",
  },
  {
    icon: Building2,
    title: "Portail Partenaire",
    desc: "Vue opérationnelle pour résidences, soins à domicile, corridors cliniques et partenaires institutionnels.",
    color: "#1A3F7A",
  },
  {
    icon: BarChart2,
    title: "Tableaux de bord",
    desc: "Indicateurs de performance, volumes, délais, exceptions, satisfaction, conformité et impact.",
    color: "#0EA5AA",
  },
  {
    icon: Link2,
    title: "Intégrations",
    desc: "Standards HL7/FHIR, APIs et intégration progressive avec vos systèmes existants (DME, DSP, etc.).",
    color: "#1A3F7A",
  },
];

const techSpecs = [
  { icon: Globe, title: "HL7 / FHIR", desc: "Intégration native avec les standards d'interopérabilité santé du Québec et du Canada." },
  { icon: Shield, title: "AES-256", desc: "Chiffrement militaire pour toutes les données patients et transactions sensibles." },
  { icon: Zap, title: "Temps réel", desc: "Notifications push, mises à jour de statut et alertes en temps réel pour tous les intervenants." },
];

export default function Technologie() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A3F7A 0%, #1A2E35 100%)",
          padding: "8rem 0 5rem",
        }}
      >
        <div className="container text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(14,165,170,0.25)", color: "#3BBFB8" }}
          >
            Propulsé par Vaistat
          </div>
          <h1
            className="font-black mb-4 text-white"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Notre technologie
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            APS Québec est l'infrastructure humaine. Vaistat est l'épine dorsale technologique.
            Ensemble, ils permettent de coordonner, suivre et mesurer chaque mission terrain.
          </p>
        </div>
      </section>

      {/* Tech items grid */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-14">
            <div className="aps-badge mb-3">Plateforme Vaistat</div>
            <h2 className="aps-section-title mb-4">
              Six interfaces pour une <span>coordination totale</span>
            </h2>
            <p className="aps-section-subtitle mx-auto text-center">
              La plateforme Vaistat 2.0 supporte de multiples interfaces pour tous les intervenants
              du réseau APS Québec.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}18` }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards de sécurité */}
      <section className="aps-section" style={{ background: "#F4F9F9" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Sécurité & conformité</div>
            <h2 className="aps-section-title mb-4">
              Conçu pour la <span>confiance</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {techSpecs.map((spec, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #EFF9FA, #D4F0F1)" }}
                >
                  <spec.icon size={26} style={{ color: "#0EA5AA" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {spec.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", padding: "5rem 0" }}>
        <div className="container text-center">
          <h2
            className="font-black text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Accédez à la plateforme Vaistat
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Devenez partenaire APS et accédez au portail partenaire dès aujourd'hui.
          </p>
          <Link href="/devenir-partenaire" className="aps-btn-teal no-underline">
            Devenir partenaire <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
