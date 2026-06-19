import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import {
  Smartphone, Stethoscope, Pill, Building2, LayoutDashboard, Link2,
  Lock, FileCheck, CheckCircle2, ShieldCheck, GraduationCap, KeyRound, AlertTriangle, ScrollText,
  ArrowRight,
} from "lucide-react";

/* ============================================================
   PAGE TECHNOLOGIE — Contenu officiel APS Québec / Vaistat
   ============================================================ */

const interfaces = [
  { icon: Smartphone, title: "Application patient", desc: "Demande de services, suivi des missions, notifications et visibilité pour les proches autorisés." },
  { icon: Stethoscope, title: "Application APS", desc: "Répartition des missions, preuve d'exécution, notes, statut, chaîne de possession et escalade." },
  { icon: Pill, title: "Portail pharmacie", desc: "Coordination des commandes, livraisons, preuves et suivis." },
  { icon: Building2, title: "Portail partenaires", desc: "Vue opérationnelle pour résidences, entreprises de soins à domicile, corridors cliniques et partenaires institutionnels." },
  { icon: LayoutDashboard, title: "Tableaux de bord", desc: "Indicateurs de performance, volumes, délais, exceptions, satisfaction, conformité et impact." },
  { icon: Link2, title: "Intégrations", desc: "Orientation vers des standards comme HL7/FHIR lorsque requis, API et intégration progressive avec systèmes existants." },
];

const compliance = [
  { icon: Lock, label: "Protection des renseignements personnels" },
  { icon: FileCheck, label: "Traçabilité des missions" },
  { icon: CheckCircle2, label: "Preuves d'exécution" },
  { icon: ShieldCheck, label: "Protocoles opérationnels" },
  { icon: KeyRound, label: "Gestion des accès" },
  { icon: AlertTriangle, label: "Escalade documentée" },
  { icon: GraduationCap, label: "Formation continue" },
  { icon: ScrollText, label: "Conformité avec les cadres applicables" },
];

export default function Technologie() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3F7A 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="aps-badge mb-4" style={{ background: "rgba(59,191,184,0.15)", color: "#3BBFB8", border: "1px solid rgba(59,191,184,0.3)" }}>
            Propulsé par Vaistat
          </div>
          <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15, maxWidth: "820px" }}>
            La technologie qui rend la proximité opérable à grande échelle
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "680px", lineHeight: 1.7 }}>
            APS Québec est l'infrastructure humaine. Vaistat est l'épine dorsale technologique. Ensemble, ils permettent de coordonner, suivre, documenter et mesurer les missions terrain.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="aps-section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="aps-section-label mb-3">La plateforme Vaistat 2.0</div>
            <h2 className="aps-section-title mb-4">Une seule logique opérationnelle, <span>plusieurs interfaces</span></h2>
            <p className="text-base" style={{ color: "#5A7A82" }}>
              La plateforme Vaistat 2.0 soutient plusieurs interfaces : application patient, application APS, portail pharmacie, portails partenaires, tableaux de bord, preuve d'exécution, rapports et intégrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interfaces.map((item, i) => (
              <div key={i} className="aps-card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                  <item.icon size={22} color="white" />
                </div>
                <h3 className="font-bold text-base mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conformité */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="aps-section-label mb-3">Conformité</div>
            <h2 className="aps-section-title mb-4">Conçu pour un <span>environnement sensible</span></h2>
            <p className="text-base" style={{ color: "#5A7A82" }}>
              APS Québec évolue dans un secteur où la confiance, la confidentialité et la conformité sont essentielles. Notre approche repose sur des protocoles documentés, une formation structurée, une traçabilité des missions et une gestion responsable des données.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {compliance.map((c, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-center gap-3" style={{ border: "1px solid #E0EAF4" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,170,0.1)" }}>
                  <c.icon size={16} style={{ color: "#0EA5AA" }} />
                </div>
                <span className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{c.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="aps-btn-primary no-underline">
              Discuter de votre intégration <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
