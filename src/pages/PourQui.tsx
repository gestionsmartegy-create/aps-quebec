import { useEffect } from "react";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Link } from "wouter";
import { IMG } from "@/lib/images";
import { ArrowRight, CheckCircle2, Pill, Building2, Home, Hospital, HandHeart, Landmark, Users, HeartPulse } from "lucide-react";

/* Milieux de vie pour aînés desservis */
const milieux = [
  {
    sigle: "RPA",
    icon: Building2,
    nom: "Résidence privée pour aînés",
    desc: "Résidence privée certifiée pour aînés autonomes ou semi-autonomes.",
    apporte: ["Accompagnement aux rendez-vous", "Livraisons de médicaments planifiées", "Visites de suivi et présence rassurante", "Visibilité pour les proches aidants"],
  },
  {
    sigle: "RI",
    icon: Landmark,
    nom: "Ressource intermédiaire",
    desc: "Milieu de vie rattaché au réseau public (CISSS/CIUSSS) pour des personnes ayant besoin de soutien ou d'assistance.",
    apporte: ["Coordination avec les pharmacies", "Transport d'échantillons et prélèvements", "Accompagnement médical", "Réduction de la pression administrative"],
  },
  {
    sigle: "RTF",
    icon: Users,
    nom: "Ressource de type familial",
    desc: "Famille ou résidence d'accueil offrant un milieu de vie familial à des aînés ou des personnes en perte d'autonomie.",
    apporte: ["Livraisons sécurisées de médicaments", "Accompagnement aux rendez-vous", "Présence rassurante et visites de suivi", "Lien avec le réseau de soins"],
  },
  {
    sigle: "CHSLD",
    icon: HeartPulse,
    nom: "Soins de longue durée",
    desc: "Hébergement pour personnes en grande perte d'autonomie nécessitant des soins continus.",
    apporte: ["Logistique médicale et prélèvements", "Coordination pharmacie et laboratoire", "Suivi documenté et traçable", "Soutien opérationnel aux équipes"],
  },
];

/* ============================================================
   PAGE POUR QUI — Contenu officiel APS Québec
   ============================================================ */

const segments = [
  {
    id: "pharmacies",
    img: IMG.segPharmacie,
    icon: Pill,
    title: "Pour les pharmacies",
    intro: "APS Québec aide les pharmacies à renforcer leur service patient avec une logistique médicale plus structurée, traçable et connectée.",
    needs: [
      "Livraison sécurisée de médicaments",
      "Coordination avec patients vulnérables",
      "Preuve de livraison",
      "Réduction des suivis manuels",
      "Fidélisation patient",
      "Intégration future avec Vaistat 2.0",
    ],
    key: "APS Québec transforme la livraison pharmaceutique en service de continuité thérapeutique.",
  },
  {
    id: "residences",
    img: IMG.segResidence,
    icon: Building2,
    title: "Pour les résidences : RI, RTF, RPA et CHSLD",
    intro: "APS Québec soutient les milieux de vie qui doivent coordonner médicaments, rendez-vous, suivis et communications avec les familles.",
    needs: [
      "Accompagnement aux rendez-vous",
      "Livraisons planifiées",
      "Visites de suivi",
      "Coordination avec pharmacies",
      "Visibilité pour les proches aidants",
      "Réduction de la pression administrative",
    ],
    key: "APS Québec apporte une couche de soutien humain et opérationnel autour des résidents.",
  },
  {
    id: "soins-domicile",
    img: IMG.segDomicile,
    icon: Home,
    title: "Pour les entreprises de soins à domicile",
    intro: "APS Québec permet aux opérateurs de soins à domicile d'élargir leur offre sans mobiliser leurs équipes cliniques pour des tâches logistiques ou non cliniques.",
    needs: [
      "Décharge hospitalière",
      "Accompagnement médical",
      "Prélèvements via partenaires de laboratoire",
      "Livraison de médicaments",
      "Monitoring connecté",
      "Application patient et visibilité famille",
      "Offre premium en marque blanche ou co-marquée",
    ],
    key: "APS Québec devient l'extension opérationnelle du fournisseur de soins à domicile.",
  },
  {
    id: "hopitaux",
    img: IMG.segHopital,
    icon: Hospital,
    title: "Pour les hôpitaux, cliniques et corridors de soins",
    intro: "APS Québec peut contribuer à structurer des corridors de décharge sécurisés, fluidifier les transitions et documenter les suivis post-hospitalisation.",
    needs: [
      "Sorties hospitalières plus fluides",
      "Livraison rapide des médicaments après congé",
      "Lien avec pharmacie communautaire",
      "Réduction des ruptures de parcours",
      "Suivi documenté",
      "Données opérationnelles pour amélioration continue",
    ],
    key: "APS Québec aide les établissements à prolonger la continuité des soins au-delà de leurs murs.",
  },
  {
    id: "familles",
    img: IMG.segFamille,
    icon: HandHeart,
    title: "Pour les familles et proches aidants",
    intro: "APS Québec offre une présence rassurante et une visibilité accrue lorsque les proches ne peuvent pas être physiquement présents.",
    needs: [
      "Savoir si une mission a été réalisée",
      "Être informé d'un suivi important",
      "Réduire l'anxiété autour d'un parent vulnérable",
      "Planifier un accompagnement",
      "Avoir plus de confiance dans la continuité du parcours",
    ],
    key: "APS Québec ne remplace pas la famille. APS Québec aide la famille à rester connectée.",
  },
];

export default function PourQui() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="aps-badge mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
            Pour qui
          </div>
          <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15, maxWidth: "800px" }}>
            APS Québec sert les acteurs qui veulent mieux contrôler le parcours réel du patient
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "640px", lineHeight: 1.7 }}>
            Notre modèle est volontairement transversal. Il répond à des besoins concrets chez les pharmacies, les résidences, les entreprises de soins à domicile, les hôpitaux, les cliniques, les laboratoires, les familles et les partenaires institutionnels.
          </p>
        </div>
      </section>

      {/* Segments */}
      <section className="aps-section">
        <div className="container">
          <div className="flex flex-col gap-10 max-w-5xl mx-auto">
            {segments.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 grid lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`} style={{ boxShadow: "0 16px 44px rgba(26,63,122,0.14)", minHeight: "300px" }}>
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover" style={{ position: "absolute", inset: 0 }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,63,122,0.3), rgba(14,165,170,0.1))" }} />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "white" }}>
                    <s.icon size={22} style={{ color: "#0EA5AA" }} />
                  </div>
                </div>
                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aps-section-label mb-3">0{i + 1} — {s.title.replace("Pour les ", "").replace("Pour ", "")}</div>
                  <h2 className="font-black text-xl mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h2>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "#4A6670" }}>{s.intro}</p>

                  <div className="grid sm:grid-cols-2 gap-2 mb-5">
                    {s.needs.map((n) => (
                      <div key={n} className="flex items-start gap-2 text-sm" style={{ color: "#3A5A60" }}>
                        <CheckCircle2 size={15} style={{ color: "#0EA5AA", flexShrink: 0, marginTop: "2px" }} />
                        {n}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl p-4" style={{ background: "#FFF6F1", borderLeft: "3px solid #F26419" }}>
                    <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1A3F7A" }}>{s.key}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milieux de vie : RI · RTF · RPA · CHSLD */}
      <section className="aps-section-alt" id="milieux">
        <div className="container">
          <div className="text-center mb-12">
            <div className="aps-eyebrow mb-4">Milieux de vie pour aînés</div>
            <h2 className="aps-section-title mb-4">Un soutien adapté aux <span>RI, RTF, RPA et CHSLD</span></h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: "#5A7A82" }}>
              APS Québec connaît la réalité des milieux de vie québécois. Pour chaque type de ressource, nos agents apportent une couche de soutien humain et opérationnel autour des résidents — sans alourdir vos équipes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {milieux.map((m) => (
              <div key={m.sigle} className="bg-white rounded-2xl p-6 flex flex-col" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 18px rgba(26,63,122,0.06)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                    <m.icon size={20} color="white" />
                  </div>
                  <div className="font-black text-xl" style={{ color: "#F26419", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em" }}>{m.sigle}</div>
                </div>
                <div className="font-bold text-sm mb-1.5" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{m.nom}</div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#5A7A82" }}>{m.desc}</p>
                <div className="text-[0.65rem] font-bold uppercase tracking-widest mb-2" style={{ color: "#0EA5AA" }}>Ce qu'APS apporte</div>
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {m.apporte.map((a) => (
                    <li key={a} className="flex items-start gap-1.5 text-xs" style={{ color: "#3A5A60" }}>
                      <CheckCircle2 size={13} style={{ color: "#0EA5AA", flexShrink: 0, marginTop: "1px" }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="aps-btn-orange no-underline">
              Discuter de votre milieu de vie <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="aps-section">
        <div className="container">
          {/* CTA */}
          <div className="text-center rounded-2xl p-10" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
            <h2 className="font-black text-2xl text-white mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Vous vous reconnaissez ?</h2>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              Parlons de votre réalité et structurons ensemble un premier corridor de soins.
            </p>
            <Link href="/contact" className="no-underline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 1.75rem", background: "white", color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", borderRadius: "0.625rem" }}>
              Demander une rencontre <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
