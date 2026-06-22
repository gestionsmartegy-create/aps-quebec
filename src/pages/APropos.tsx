import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { IMG } from "@/lib/images";
import { Target, Eye, Compass, MapPin, Network, RefreshCw, ArrowRight } from "lucide-react";

/* ============================================================
   PAGE À PROPOS — Contenu officiel APS Québec / Vaistat
   ============================================================ */

const piliers = [
  { icon: MapPin, title: "Proximité", desc: "Des agents formés interviennent là où le parcours patient se vit réellement : à domicile, en pharmacie, à l'hôpital, en résidence et dans la communauté." },
  { icon: Network, title: "Coordination", desc: "Chaque mission est structurée, assignée, documentée et suivie. APS Québec agit comme une couche opérationnelle entre les partenaires de soins." },
  { icon: RefreshCw, title: "Continuité", desc: "Missions, suivis, traçabilité, preuves, alertes et données sont connectés dans une même logique numérique intégrée." },
];

const valeurs = [
  { icon: Target, title: "Mission", desc: "Rendre la continuité des soins plus accessible, plus humaine, plus coordonnée et plus traçable." },
  { icon: Eye, title: "Vision", desc: "Devenir l'infrastructure de référence pour les services de proximité en santé au Québec, puis dans d'autres marchés où la continuité des soins représente un enjeu critique." },
  { icon: Compass, title: "Positionnement", desc: "APS Québec ne remplace pas les professionnels de la santé. APS Québec soutient leur travail en prenant en charge les missions non cliniques, logistiques et de coordination qui réduisent les ruptures de parcours." },
];

export default function APropos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3F7A 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="aps-badge mb-4" style={{ background: "rgba(59,191,184,0.15)", color: "#3BBFB8", border: "1px solid rgba(59,191,184,0.3)" }}>
            À propos
          </div>
          <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15, maxWidth: "760px" }}>
            APS Québec — Agents de Proximité en Santé
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "680px", lineHeight: 1.7 }}>
            Le bras opérationnel de proximité au service du réseau de santé québécois. Notre mission est simple : reconstruire un pont humain entre les patients et le système de santé.
          </p>
        </div>
      </section>

      {/* Récit */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="absolute -bottom-3 -left-3 w-full h-full rounded-2xl" style={{ border: "2px solid #F26419", opacity: 0.25 }} />
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.16)" }}>
                <img src="/headerAPS.jpeg" alt="APS Québec — Agents de Proximité en Santé" className="w-full object-cover" style={{ height: "460px", objectPosition: "center top" }} />
              </div>
            </div>
            <div>
              <div className="aps-section-label mb-3">Notre conviction</div>
              <h2 className="aps-section-title mb-6">L'avenir des soins ne sera pas seulement numérique. Il sera <span>hybride</span>.</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#4A6670" }}>
                Nous croyons que l'avenir des soins combinera la technologie, les données, la traçabilité et l'intelligence opérationnelle avec une présence humaine capable de rassurer, accompagner, observer et agir.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#4A6670" }}>
                APS Québec s'appuie sur une plateforme numérique de coordination en santé spécialisée dans la logistique pharmaceutique intelligente et la coordination numérique. Ce modèle permet de déployer des services à forte valeur humaine : décharge hospitalière, accompagnement, logistique médicale, prélèvements, monitoring et continuité visible pour les familles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Positionnement */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="text-center mb-14">
            <div className="aps-section-label mb-3">Ce qui nous guide</div>
            <h2 className="aps-section-title">Mission, vision et <span>positionnement</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {valeurs.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                  <v.icon size={24} color="white" />
                </div>
                <h3 className="font-black text-xl mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 piliers */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-14">
            <div className="aps-section-label mb-3">Nos trois piliers</div>
            <h2 className="aps-section-title">Proximité, coordination, <span>continuité</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {piliers.map((p, i) => (
              <div key={i} className="aps-card">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(14,165,170,0.1)" }}>
                  <p.icon size={22} style={{ color: "#0EA5AA" }} />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Core phrase */}
          <div className="text-center mt-16 max-w-3xl mx-auto rounded-2xl p-10" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
            <p className="font-black text-2xl text-white mb-6" style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3 }}>
              « APS Québec ne remplace pas les soins.<br />APS Québec structure ce qui se passe entre les soins. »
            </p>
            <Link href="/contact" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
              Travailler avec nous <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
