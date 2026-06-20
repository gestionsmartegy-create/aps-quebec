import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { IMG } from "@/lib/images";
import { Settings, Tags, Route, Handshake, ArrowRight, Pill, Building2, Home, Hospital, FlaskConical, Shield } from "lucide-react";

/* ============================================================
   PAGE PARTENARIATS — Contenu officiel APS Québec
   ============================================================ */

const modeles = [
  { icon: Settings, title: "Service APS Québec opéré", desc: "APS Québec opère les missions, gère la coordination et facture selon le modèle convenu." },
  { icon: Tags, title: "Marque blanche ou co-marquage", desc: "Le partenaire enrichit son offre sous sa propre bannière, pendant qu'APS Québec fournit l'infrastructure humaine, opérationnelle et technologique." },
  { icon: Route, title: "Corridor pilote", desc: "Déploiement contrôlé sur un territoire, un type de patient, une résidence, une pharmacie ou un programme de décharge." },
  { icon: Handshake, title: "Partenariat stratégique", desc: "Intégration plus profonde : volumes sécurisés, territoires, exclusivité, partage de revenus, intégration technologique ou structure de croissance commune." },
];

const partenaires = [
  { icon: Pill, label: "Pharmacies" },
  { icon: Building2, label: "Résidences, RI, RPA, CHSLD" },
  { icon: Home, label: "Soins à domicile" },
  { icon: Hospital, label: "Hôpitaux & cliniques" },
  { icon: FlaskConical, label: "Laboratoires" },
  { icon: Shield, label: "Assureurs & institutions" },
];

export default function Partenaires() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="aps-badge mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Partenariats
          </div>
          <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15, maxWidth: "780px" }}>
            Construire des corridors de soins plus fluides avec les bons partenaires
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "680px", lineHeight: 1.7 }}>
            APS Québec peut être déployé comme service opéré, offre co-marquée, solution en marque blanche ou partenariat stratégique. Notre modèle est flexible : il s'adapte aux pharmacies, entreprises de soins à domicile, résidences, cliniques, hôpitaux, laboratoires, assureurs, fondations et partenaires institutionnels.
          </p>
        </div>
      </section>

      {/* Modèles */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-14">
            <div className="aps-section-label mb-3">Modèles de déploiement</div>
            <h2 className="aps-section-title">Quatre façons de <span>travailler ensemble</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {modeles.map((m, i) => (
              <div key={i} className="aps-card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #1A3F7A, #0EA5AA)" : "linear-gradient(135deg, #0EA5AA, #3BBFB8)" }}>
                  <m.icon size={22} color="white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires types */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.16)", minHeight: "360px" }}>
              <img src={IMG.partenariat} alt="Partenariats APS Québec" className="w-full h-full object-cover" style={{ position: "absolute", inset: 0 }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,63,122,0.25), transparent)" }} />
            </div>
            <div>
              <div className="aps-section-label mb-3">Avec qui nous travaillons</div>
              <h2 className="aps-section-title mb-6">Un modèle <span>transversal</span></h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {partenaires.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-3" style={{ border: "1px solid #E0EAF4" }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(242,100,25,0.1)" }}>
                      <p.icon size={18} style={{ color: "#F26419" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA double */}
      <section className="aps-section">
        <div className="container">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #0D1E3F, #1A3F7A)" }}>
            <h2 className="font-black text-2xl text-white mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Prêt à construire un corridor de soins ?</h2>
            <p className="text-base mb-7 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
              Discutons d'un partenariat ou proposez un corridor pilote adapté à votre territoire et à votre réalité.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
                Discuter d'un partenariat <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
                Proposer un corridor pilote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
