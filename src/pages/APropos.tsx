import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Heart, Network, RefreshCw, ArrowRight, Eye, Users, Shield, Star } from "lucide-react";

export default function APropos() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const mission = [
    {
      icon: Heart,
      title: "Proximité",
      desc: "Nos agents sont présents là où les patients en ont le plus besoin — à domicile, en résidence, lors des transitions de soins.",
    },
    {
      icon: Network,
      title: "Coordination",
      desc: "Nous créons des ponts entre les patients, les pharmacies, les résidences et le système de santé pour assurer une prise en charge fluide.",
    },
    {
      icon: RefreshCw,
      title: "Continuité des soins",
      desc: "Grâce à nos agents et notre technologie, le parcours de soin ne s'arrête pas aux portes de l'hôpital.",
    },
  ];

  const valeurs = [
    { icon: Heart,   title: "Humanité",      desc: "Le lien humain est au cœur de chaque intervention." },
    { icon: Shield,  title: "Intégrité",      desc: "Transparence totale envers nos partenaires et résidents." },
    { icon: Star,    title: "Excellence",     desc: "Des standards élevés pour chaque service délivré." },
    { icon: Users,   title: "Collaboration",  desc: "Partenaires du système de santé, pas simples fournisseurs." },
  ];

  const stats = [
    { value: "11", suffix: " ans", label: "d'expérience terrain" },
    { value: "400K", suffix: "+", label: "rendez-vous manqués évités" },
    { value: "95", suffix: "%", label: "satisfaction partenaires" },
    { value: "6", suffix: "", label: "types de services offerts" },
  ];

  const equipe = [
    { initials: "MJ", name: "Marie-Josée Leblanc", role: "Directrice générale", color: "#0EA5AA" },
    { initials: "JP", name: "Jean-Philippe Côté", role: "Directeur des opérations", color: "#1A3F7A" },
    { initials: "SG", name: "Sophie Gagnon", role: "Responsable partenariats", color: "#3BBFB8" },
  ];

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section
        style={{
          paddingTop: "5rem",
          background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)",
          padding: "8rem 0 5rem",
        }}
      >
        <div className="container text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            À propos d'APS Québec
          </div>
          <h1
            className="font-black mb-4 text-white"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            À propos d'APS Québec
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            Agents de Proximité Santé — Recréer le lien humain au cœur du système de santé québécois.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-14">
            <div className="aps-badge mb-3">Notre mission</div>
            <h2 className="aps-section-title mb-4">
              Trois piliers pour <span>recréer le lien</span>
            </h2>
            <p className="aps-section-subtitle mx-auto text-center">
              APS Québec intervient là où le système de santé manque de connexion humaine — entre
              la sortie d'hôpital et le retour à domicile, entre la pharmacie et le résident.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mission.map((item, i) => (
              <div
                key={i}
                className="aps-card p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, #EFF9FA, #D4F0F1)" }}
                >
                  <item.icon size={26} style={{ color: "#0EA5AA" }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="aps-section" style={{ background: "#F4F9F9" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Nos valeurs</div>
            <h2 className="aps-section-title mb-4">
              Ce qui nous <span>guide</span> au quotidien
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {valeurs.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#EFF9FA" }}
                >
                  <v.icon size={22} style={{ color: "#0EA5AA" }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {v.title}
                </h3>
                <p className="text-sm" style={{ color: "#5A7A82" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#1A3F7A", padding: "4rem 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-4">
                <div className="text-4xl font-black text-white mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.value}<span style={{ color: "#3BBFB8" }}>{s.suffix}</span>
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Notre équipe</div>
            <h2 className="aps-section-title mb-4">
              Des humains derrière <span>chaque mission</span>
            </h2>
            <p className="aps-section-subtitle mx-auto text-center">
              Une équipe passionnée, engagée à transformer la proximité en système.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {equipe.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-lg"
                  style={{ background: p.color, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {p.initials}
                </div>
                <h3 className="font-bold mb-1" style={{ color: "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}>
                  {p.name}
                </h3>
                <p className="text-sm" style={{ color: "#5A7A82" }}>{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #0EA5AA 0%, #3BBFB8 100%)", padding: "5rem 0" }}>
        <div className="container text-center">
          <h2
            className="font-black text-white mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            Prêt à rejoindre le réseau APS ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Devenez partenaire et offrez à vos résidents l'accompagnement qu'ils méritent.
          </p>
          <Link href="/devenir-partenaire" className="aps-btn-primary no-underline">
            Devenez partenaire <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
