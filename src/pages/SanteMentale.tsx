import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Heart, Users, Shield, Star, ArrowRight } from "lucide-react";

const programmes = [
  {
    icon: Heart,
    title: "Visites de bien-être",
    desc: "Des visites régulières et planifiées pour maintenir le lien social, détecter les signaux de détresse précocement et offrir une présence humaine constante.",
    color: "#0EA5AA",
  },
  {
    icon: Users,
    title: "Participation communautaire",
    desc: "Sorties accompagnées, activités sociales et intégration dans la communauté pour rompre l'isolement et renforcer le sentiment d'appartenance.",
    color: "#1A3F7A",
  },
  {
    icon: Shield,
    title: "Soutien émotionnel structuré",
    desc: "Un accompagnement humain bienveillant assuré par des agents APS formés pour offrir une écoute active et un soutien adapté à chaque résident.",
    color: "#0EA5AA",
  },
];

const statsData = [
  { value: "95%", label: "Connexion sociale améliorée" },
  { value: "88%", label: "Cohérence du soutien" },
  { value: "92%", label: "Présence communautaire" },
  { value: "400+", label: "Visites par mois" },
];

export default function SanteMentale() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0EA5AA 0%, #3BBFB8 100%)",
          padding: "8rem 0 5rem",
        }}
      >
        <div className="container text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
          >
            7+ ans d'expérience
          </div>
          <h1
            className="font-black mb-4 text-white"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Santé mentale & bien-être
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7 }}>
            Renforcer la santé mentale par le contact humain récurrent — lutter contre l'isolement,
            maintenir le lien social et soutenir le bien-être de chaque résident.
          </p>
        </div>
      </section>

      {/* Notre approche */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="aps-badge mb-3">Notre approche</div>
              <h2 className="aps-section-title mb-4">
                Le contact humain comme <span>thérapie</span>
              </h2>
              <div style={{ width: "48px", height: "4px", background: "#0EA5AA", borderRadius: "2px", marginBottom: "1.5rem" }} />
              <p className="text-base leading-relaxed mb-4" style={{ color: "#4A6670" }}>
                L'isolement social est l'un des facteurs de risque les plus sous-estimés dans les
                résidences pour aînés. APS Québec apporte une réponse concrète : des agents
                formés qui maintiennent un lien humain régulier, bienveillant et structuré.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>
                Notre programme de santé mentale ne se limite pas aux visites ponctuelles — il
                s'inscrit dans une continuité de présence qui fait une différence mesurable sur
                le bien-être des résidents et la tranquillité d'esprit des familles.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Réduction de l'isolement", "Visites régulières", "Soutien émotionnel", "Détection précoce"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#EFF9FA", color: "#0EA5AA", border: "1px solid #B8E8EA" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: i % 2 === 0 ? "#0EA5AA" : "white",
                    border: "1px solid #E0EAF4",
                    boxShadow: "0 4px 16px rgba(14,165,170,0.1)",
                  }}
                >
                  <div
                    className="text-3xl font-black mb-2"
                    style={{ color: i % 2 === 0 ? "white" : "#0EA5AA", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-sm"
                    style={{ color: i % 2 === 0 ? "rgba(255,255,255,0.85)" : "#5A7A82" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="aps-section" style={{ background: "#F4F9F9" }}>
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-badge mb-3">Nos programmes</div>
            <h2 className="aps-section-title mb-4">
              Trois axes d'<span>intervention</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programmes.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-xl"
                style={{ border: "1px solid #E0EAF4" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${p.color}18` }}
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{p.desc}</p>
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
            Offrez un soutien en santé mentale à vos résidents
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.9)" }}>
            Rejoignez le programme APS et faites une différence mesurable dès le premier mois.
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
