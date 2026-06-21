import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { IMG } from "@/lib/images";
import {
  ArrowRight, CheckCircle2, Users, HeartHandshake, Network, RefreshCw,
  TreePine, Landmark, CalendarDays, Stethoscope, Brain, Settings, UserCheck, Repeat,
  Building2, Cpu, Handshake, ShieldCheck, Sparkles,
} from "lucide-react";

/* ============================================================
   RI / RTF / RPA & SOUTIEN COMMUNAUTAIRE
   Sorties récréatives, participation sociale, accompagnement assisté
   ============================================================ */

const pourQui = [
  "Ressources intermédiaires (RI)",
  "Ressources de type familial (RTF)",
  "Résidences pour personnes âgées (RPA)",
  "Organismes en santé mentale",
  "Organismes communautaires",
  "Programmes de soutien à domicile",
  "Personnes vulnérables ou en isolement",
];

const approche = [
  { icon: HeartHandshake, title: "Une extension humaine de soutien", desc: "Bien plus qu'un service de transport : une présence humaine qui accompagne, rassure et soutient." },
  { icon: Network, title: "Un partenaire d'intégration communautaire", desc: "Nous aidons les résidents et personnes vulnérables à demeurer actifs, connectés et engagés dans leur communauté." },
  { icon: RefreshCw, title: "Une ressource de continuité des soins", desc: "Pour les organisations et les populations vulnérables, dans un cadre structuré et coordonné." },
];

const objectifsSorties = [
  "Réduire l'isolement social",
  "Favoriser le bien-être mental",
  "Encourager la mobilité et la stimulation",
  "Soutenir la santé émotionnelle",
  "Favoriser l'autonomie et la participation sociale",
  "Renforcer l'intégration communautaire",
];

const destinations = [
  { icon: TreePine, title: "Nature et détente", items: ["Plaines d'Abraham", "Mont-Tremblant", "Parc de la Chute-Montmorency", "Jardin botanique de Montréal", "Parc Jean-Drapeau"] },
  { icon: Landmark, title: "Culture et découvertes", items: ["Vieux-Port de Montréal", "Vieux-Québec", "Oratoire Saint-Joseph", "Marché Jean-Talon", "Île d'Orléans"] },
  { icon: CalendarDays, title: "Saisonnier et communautaire", items: ["Cabanes à sucre", "Marchés de Noël", "Festivals communautaires", "Promenades au bord de l'eau", "Circuits panoramiques", "Pique-niques & cafés sociaux"] },
];

const accompagnement = [
  "Rendez-vous médicaux", "Consultations spécialisées", "Visites à l'hôpital",
  "Rendez-vous de dialyse", "Suivis en santé mentale", "Réintégration sociale",
  "Visites à la pharmacie", "Rendez-vous communautaires", "Rendez-vous administratifs",
];

const santeMentaleAxes = [
  "La réintégration communautaire", "Le bien-être émotionnel", "La reconstruction des routines",
  "Le renforcement de la confiance", "La mobilité sécuritaire", "Les interactions sociales",
  "La prévention de l'isolement",
];

const santeMentaleActivites = [
  "Groupes de marche", "Sorties café", "Accompagnement à l'épicerie", "Soupers de groupe",
  "Activités bien-être", "Visites guidées urbaines", "Sorties culturelles", "Activités en nature",
];

const soutienEquipes = [
  "Les sorties des résidents", "La logistique des déplacements", "La planification récréative",
  "L'assistance à la mobilité", "Les rendez-vous externes", "La coordination avec les familles",
  "Le soutien lors de pénuries de personnel", "Les activités de réintégration communautaire",
  "Les initiatives de participation sociale",
];

const modeles = [
  { tag: "Option A", icon: Users, title: "Soutien à l'équipe existante", desc: "Un agent APS accompagne l'intervenant, l'éducateur ou le proche aidant de l'organisation durant les sorties ou les rendez-vous." },
  { tag: "Option B", icon: UserCheck, title: "Accompagnement APS autonome", desc: "Les agents APS prennent en charge l'ensemble du processus d'accompagnement et d'organisation des sorties." },
  { tag: "Option C", icon: Repeat, title: "Programmes récurrents", desc: "Sorties hebdomadaires ou mensuelles et activités de participation sociale adaptées aux besoins de l'organisation." },
];

const inclus = [
  "Accompagnement humain professionnel et bienveillant",
  "Supervision sécuritaire",
  "Planification et coordination",
  "Transport adapté",
  "Communication avec les familles (si souhaité)",
  "Soutien à l'autonomie et au bien-être",
];

const beneficesOps = [
  "Réduction de la pression sur le personnel interne",
  "Soutien externe flexible",
  "Logistique simplifiée",
  "Amélioration de la satisfaction des résidents",
  "Meilleure confiance des familles",
];

const beneficesClin = [
  "Réduction de l'isolement",
  "Augmentation de la stimulation",
  "Amélioration du bien-être émotionnel",
  "Participation sociale accrue",
  "Renforcement de l'engagement communautaire",
  "Meilleure adhérence aux rendez-vous",
];

const alignement = [
  "Au vieillissement à domicile", "À l'intégration communautaire", "Aux stratégies de prévention",
  "Au soutien en santé mentale", "À la participation sociale", "À la continuité des soins",
  "À la réduction de l'institutionnalisation non nécessaire",
];

const techno = [
  "Mises à jour pour les familles", "Coordination en temps réel", "Suivi des rendez-vous",
  "Communication sécurisée", "Coordination mobile des soins", "Rapports numériques", "Suivis bien-être",
];

const partenaires = ["RI", "RTF", "RPA", "CIUSSS", "CLSC", "Organismes en santé mentale", "Organismes communautaires", "Hôpitaux", "Soutien à domicile", "Pharmacies", "Organismes de services sociaux"];

/* Petit composant liste à puces vérifiées */
function CheckList({ items, color = "#0EA5AA", cols = 1 }: { items: string[]; color?: string; cols?: number }) {
  return (
    <ul className={`grid gap-2 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm" style={{ color: "#3A5A60" }}>
          <CheckCircle2 size={15} style={{ color, flexShrink: 0, marginTop: "2px" }} />
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function SoutienCommunautaire() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aps-badge mb-4" style={{ background: "rgba(242,100,25,0.2)", color: "#FFD2BC", border: "1px solid rgba(242,100,25,0.4)" }}>
                RI · RTF · RPA & Soutien communautaire
              </div>
              <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.12 }}>
                Sorties récréatives, participation sociale et accompagnement assisté
              </h1>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "560px", lineHeight: 1.7 }}>
                APS Québec offre des services d'accompagnement, de mobilité et d'intégration communautaire conçus pour améliorer la qualité de vie, favoriser la participation sociale et soutenir l'autonomie des personnes que nous accompagnons.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.3)" }}>
                <img src={IMG.about} alt="Accompagnement et participation sociale APS Québec" className="w-full object-cover" style={{ height: "380px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui + Mission */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="aps-section-label mb-3">Pour qui ?</div>
              <h2 className="aps-section-title mb-6">Des services pensés pour les <span>milieux de vie et la communauté</span></h2>
              <CheckList items={pourQui} cols={1} />
            </div>
            <div className="rounded-2xl p-8 self-start" style={{ background: "#F4F9F9", border: "1px solid #E0EAF4" }}>
              <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#F26419" }}>Notre mission</div>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#3A5A60" }}>
                Améliorer la qualité de vie, réduire l'isolement et soutenir l'autonomie grâce à des services d'accompagnement humains, structurés et adaptés aux besoins de chaque personne et de chaque organisme.
              </p>
              <p className="text-base leading-relaxed font-semibold" style={{ color: "#1A3F7A" }}>
                APS Québec n'est pas simplement un service de transport — c'est une présence humaine au service du lien social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-eyebrow mb-4">Notre approche</div>
            <h2 className="aps-section-title">Présence humaine, intégration et <span>continuité</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approche.map((a) => (
              <div key={a.title} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                  <a.icon size={24} color="white" />
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sorties récréatives + objectifs */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 56px rgba(26,63,122,0.16)" }}>
              <img src={IMG.serviceDecharge} alt="Sorties récréatives et accompagnement" className="w-full object-cover" style={{ height: "400px" }} />
            </div>
            <div>
              <div className="aps-section-label mb-3">Sorties récréatives & communautaires</div>
              <h2 className="aps-section-title mb-4">Des sorties supervisées qui <span>recréent le lien</span></h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>
                APS Québec organise des sorties récréatives supervisées, adaptées aux personnes âgées, aux personnes vulnérables et aux clientèles en santé mentale.
              </p>
              <CheckList items={objectifsSorties} color="#F26419" cols={1} />
            </div>
          </div>

          {/* Destinations */}
          <div className="text-center mb-10">
            <div className="aps-eyebrow mb-3">Exemples de destinations & d'activités</div>
            <h2 className="aps-section-title">Des expériences variées au fil des <span>saisons</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((d) => (
              <div key={d.title} className="aps-card-flat p-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(14,165,170,0.1)" }}>
                  <d.icon size={20} style={{ color: "#0EA5AA" }} />
                </div>
                <h3 className="font-bold text-base mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{d.title}</h3>
                <ul className="flex flex-col gap-1.5">
                  {d.items.map((it) => (
                    <li key={it} className="text-sm flex items-center gap-2" style={{ color: "#5A7A82" }}>
                      <span style={{ width: 4, height: 4, borderRadius: 99, background: "#F26419", flexShrink: 0 }} />{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement assisté */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
            <div>
              <div className="aps-section-label mb-3">Accompagnement assisté</div>
              <h2 className="aps-section-title mb-4">Présents à chaque <span>rendez-vous important</span></h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A6670" }}>
                APS Québec accompagne les résidents et les patients à leurs rendez-vous et demeure présent durant toute la visite lorsque nécessaire.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {accompagnement.map((a) => (
                <div key={a} className="bg-white rounded-xl px-4 py-3 flex items-center gap-2.5" style={{ border: "1px solid #E0EAF4" }}>
                  <Stethoscope size={15} style={{ color: "#0EA5AA", flexShrink: 0 }} />
                  <span className="text-sm font-medium" style={{ color: "#1A3F7A" }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Santé mentale & réintégration */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-eyebrow mb-3">Santé mentale & réintégration sociale</div>
            <h2 className="aps-section-title">Des programmes structurés de <span>participation sociale</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: "#F4F9F9", border: "1px solid #E0EAF4" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                  <Brain size={20} color="white" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Nos programmes sont axés sur</h3>
              </div>
              <CheckList items={santeMentaleAxes} cols={1} />
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#FFF6F1", border: "1px solid rgba(242,100,25,0.2)" }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "#F26419" }}>
                  <Sparkles size={20} color="white" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Exemples d'activités</h3>
              </div>
              <CheckList items={santeMentaleActivites} color="#F26419" cols={2} />
            </div>
          </div>
        </div>
      </section>

      {/* Soutien aux équipes RI/RTF/RPA */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="text-center mb-10">
            <div className="aps-eyebrow mb-3">Soutien aux équipes RI / RTF / RPA</div>
            <h2 className="aps-section-title">Une extension opérationnelle de <span>vos équipes</span></h2>
            <p className="text-base max-w-2xl mx-auto mt-3" style={{ color: "#5A7A82" }}>
              APS Québec agit comme un soutien opérationnel pour les équipes de soins et les intervenants.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {soutienEquipes.map((s) => (
              <div key={s} className="bg-white rounded-xl px-4 py-3 flex items-center gap-2.5" style={{ border: "1px solid #E0EAF4" }}>
                <CheckCircle2 size={15} style={{ color: "#0EA5AA", flexShrink: 0 }} />
                <span className="text-sm font-medium" style={{ color: "#1A3F7A" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modèle de service flexible */}
      <section className="aps-section">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-eyebrow mb-3">Modèle de service flexible</div>
            <h2 className="aps-section-title">Trois façons de <span>travailler avec nous</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {modeles.map((m) => (
              <div key={m.tag} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                    <m.icon size={22} color="white" />
                  </div>
                  <span className="aps-num">{m.tag}</span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{m.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A7A82" }}>{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Inclus dans tous nos services */}
          <div className="rounded-2xl p-8" style={{ background: "#0D1E3F" }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#F26419" }}>Inclus dans tous nos services</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {inclus.map((i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                  <CheckCircle2 size={16} style={{ color: "#3BBFB8", flexShrink: 0, marginTop: "1px" }} />
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-eyebrow mb-3">Bénéfices</div>
            <h2 className="aps-section-title">Pour vos opérations et pour <span>vos résidents</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4" }}>
              <div className="flex items-center gap-3 mb-5">
                <Settings size={20} style={{ color: "#1A3F7A" }} />
                <h3 className="font-bold text-lg" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Bénéfices opérationnels</h3>
              </div>
              <CheckList items={beneficesOps} />
            </div>
            <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4" }}>
              <div className="flex items-center gap-3 mb-5">
                <HeartHandshake size={20} style={{ color: "#F26419" }} />
                <h3 className="font-bold text-lg" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Bénéfices cliniques & sociaux</h3>
              </div>
              <CheckList items={beneficesClin} color="#F26419" />
            </div>
          </div>
        </div>
      </section>

      {/* Alignement + Techno + Partenaires */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="aps-card-flat p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(26,63,122,0.08)" }}>
                <Building2 size={20} style={{ color: "#1A3F7A" }} />
              </div>
              <h3 className="font-bold text-base mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Alignement gouvernemental & institutionnel</h3>
              <CheckList items={alignement} />
            </div>
            <div className="aps-card-flat p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(14,165,170,0.1)" }}>
                <Cpu size={20} style={{ color: "#0EA5AA" }} />
              </div>
              <h3 className="font-bold text-base mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Intégration technologique</h3>
              <CheckList items={techno} />
            </div>
            <div className="aps-card-flat p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(242,100,25,0.1)" }}>
                <Handshake size={20} style={{ color: "#F26419" }} />
              </div>
              <h3 className="font-bold text-base mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Partenaires idéaux</h3>
              <div className="flex flex-wrap gap-2">
                {partenaires.map((p) => (
                  <span key={p} className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: "#F4F9F9", border: "1px solid #E0EAF4", color: "#1A3F7A" }}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final + citation */}
      <section className="aps-section" style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3F7A 60%, #0EA5AA 100%)" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} style={{ color: "#3BBFB8" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#3BBFB8" }}>Partenariat avec APS Québec</span>
              </div>
              <h2 className="font-black mb-5" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "white", lineHeight: 1.2 }}>
                Créons un programme personnalisé pour vos résidents
              </h2>
              <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.7 }}>
                APS Québec aide les organisations à améliorer la participation sociale, la mobilité et la qualité de vie grâce à des services structurés d'accompagnement humain et de soutien communautaire. Contactez notre équipe pour créer un programme adapté à vos résidents ou à votre clientèle.
              </p>
              <Link href="/contact" className="aps-btn-orange no-underline" style={{ padding: "0.9rem 1.9rem" }}>
                Contacter notre équipe <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", color: "white", lineHeight: 1.3 }}>
                « Ensemble, créons des expériences significatives et des moments de vie qui font une différence. »
              </p>
              <p className="text-sm font-semibold" style={{ color: "#3BBFB8" }}>
                Présence humaine · Soutien authentique · Qualité de vie
              </p>
            </div>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
