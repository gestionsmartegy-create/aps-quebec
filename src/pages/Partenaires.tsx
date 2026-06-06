import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import {
  Building2, Heart, Pill, Activity, CheckCircle2,
  Users, Zap, Shield, Star, ArrowRight, Phone, Mail,
} from "lucide-react";

const typesPartenaires = [
  { icon: Building2, title: "Résidences RI / RPA / RTF", desc: "Ressources intermédiaires, résidences privées pour aînés et ressources de type familial bénéficient de services d'accompagnement, livraison et santé mentale.", color: "#0EA5AA" },
  { icon: Heart,     title: "Cliniques",                  desc: "Cliniques médicales et de spécialistes qui souhaitent réduire les no-shows et améliorer le suivi post-consultation de leurs patients.", color: "#1A3F7A" },
  { icon: Pill,      title: "Pharmacies",                  desc: "Pharmacies qui désirent offrir un service de livraison dernier kilomètre sécurisé avec traçabilité numérique complète.", color: "#0EA5AA" },
  { icon: Activity,  title: "Hôpitaux",                   desc: "Établissements hospitaliers qui cherchent à sécuriser les transitions de soins et réduire les réadmissions évitables.", color: "#1A3F7A" },
];

const benefices = [
  { icon: Users,  title: "Accès à un réseau d'agents formés", desc: "Des agents APS disponibles rapidement, formés aux protocoles de votre résidence ou établissement." },
  { icon: Zap,    title: "Technologie incluse",               desc: "Accès au portail partenaire Vaistat, tableaux de bord et suivi en temps réel sans frais supplémentaires." },
  { icon: Shield, title: "Aucun frais caché",                 desc: "Transparence totale sur les coûts. Votre formule est claire dès le premier jour." },
  { icon: Star,   title: "Gestionnaire dédié (Or)",           desc: "Les partenaires Or bénéficient d'un gestionnaire de compte dédié pour un suivi personnalisé." },
];

const formules = [
  {
    name: "Bronze",
    price: "2$",
    unit: "/résident/mois",
    color: "#8B6914",
    bg: "#FEF9EE",
    border: "#F0D88A",
    features: ["Services d'accompagnement APS", "Programmes communautaires", "Participation sociale", "Réclamation simplifiée"],
  },
  {
    name: "Argent",
    price: "4$",
    unit: "/résident/mois",
    color: "#607D8B",
    bg: "#F4F7F8",
    border: "#B0BEC5",
    features: ["Tout Bronze inclus", "Rabais APS sur services admissibles", "Accès prioritaire aux missions", "Activités santé mentale"],
  },
  {
    name: "Or",
    price: "7$",
    unit: "/résident/mois",
    color: "#0EA5AA",
    bg: "#0EA5AA",
    border: "#0EA5AA",
    popular: true,
    features: ["Tout Argent inclus", "Gestionnaire dédié", "Accès données & politiques", "Engagement groupe PLUS"],
  },
];

export default function Partenaires() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)",
          padding: "8rem 0 5rem",
        }}
      >
        <div className="container text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            Programme partenaire
          </div>
          <h1
            className="font-black mb-4 text-white"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Nos partenaires
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            APS Québec collabore avec des résidences, cliniques, pharmacies et hôpitaux pour
            construire un réseau de soins de proximité humain et efficace.
          </p>
        </div>
      </section>

      {/* Types de partenaires */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Types de partenaires</div>
            <h2 className="aps-section-title mb-4">
              Qui peut devenir <span>partenaire APS</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {typesPartenaires.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.color}18` }}
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi devenir partenaire */}
      <section className="aps-section" style={{ background: "#F4F9F9" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Avantages</div>
            <h2 className="aps-section-title mb-4">
              Pourquoi choisir <span>APS Québec</span> ?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {benefices.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 flex gap-4 transition-all duration-300 hover:shadow-md"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EFF9FA" }}
                >
                  <b.icon size={20} style={{ color: "#0EA5AA" }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formules summary */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Tarification transparente</div>
            <h2 className="aps-section-title mb-4">
              Des formules claires, <span>sans surprise</span>
            </h2>
            <p className="aps-section-subtitle mx-auto text-center">
              Choisissez la formule adaptée à votre résidence. Aucun frais caché, flexibilité totale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {formules.map((f, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: f.popular ? f.bg : "white",
                  border: `2px solid ${f.popular ? f.border : "#E8F0F1"}`,
                  boxShadow: f.popular ? "0 20px 60px rgba(13,115,119,0.25)" : "0 4px 16px rgba(0,0,0,0.06)",
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
                <div className={`p-6 ${f.popular ? "pt-12" : ""}`}>
                  <h3
                    className="text-xl font-black mb-1"
                    style={{ color: f.popular ? "white" : "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {f.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-black" style={{ color: f.popular ? "white" : "#1A2E35" }}>
                      {f.price}
                    </span>
                    <span className="text-sm ml-1" style={{ color: f.popular ? "rgba(255,255,255,0.7)" : "#9BAFB5" }}>
                      {f.unit}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {f.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          size={14}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: f.popular ? "#7ECDD0" : "#0EA5AA" }}
                        />
                        <span style={{ color: f.popular ? "rgba(255,255,255,0.85)" : "#4A6670" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/devenir-partenaire"
                    className="block text-center py-2.5 px-4 rounded-lg font-semibold text-sm no-underline transition-all"
                    style={
                      f.popular
                        ? { background: "#1A3F7A", color: "white" }
                        : { background: "#EFF9FA", color: "#0EA5AA", border: "1px solid #B8D8E8" }
                    }
                  >
                    Choisir {f.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="aps-section" style={{ background: "#F4F9F9" }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <div className="aps-badge mb-3">Contact partenariat</div>
            <h2 className="aps-section-title mb-4">
              Des questions ? <span>Parlons-en.</span>
            </h2>
            <p className="aps-section-subtitle mx-auto mb-8 text-center">
              Notre équipe partenariat est disponible du lundi au samedi de 8h à 17h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18668247828"
                className="aps-btn-outline no-underline flex items-center gap-2 justify-center"
              >
                <Phone size={16} /> 1-866-824-7828
              </a>
              <a
                href="mailto:info@aps-qc.ca"
                className="aps-btn-teal no-underline flex items-center gap-2 justify-center"
              >
                <Mail size={16} /> info@aps-qc.ca
              </a>
            </div>
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
            Prêt à rejoindre le réseau APS ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Inscrivez votre résidence ou établissement en quelques minutes.
          </p>
          <Link href="/devenir-partenaire" className="aps-btn-primary no-underline">
            Devenir partenaire <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
