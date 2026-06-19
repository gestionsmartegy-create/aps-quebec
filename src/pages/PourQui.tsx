import { useEffect } from "react";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Pill, Building2, Home, Hospital, HandHeart } from "lucide-react";

/* ============================================================
   PAGE POUR QUI — Contenu officiel APS Québec
   ============================================================ */

const segments = [
  {
    id: "pharmacies",
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
    icon: Building2,
    title: "Pour les résidences, RI, RPA et CHSLD",
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
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {segments.map((s, i) => (
              <div key={s.id} id={s.id} className="bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #1A3F7A, #0EA5AA)" : "linear-gradient(135deg, #0EA5AA, #3BBFB8)" }}>
                    <s.icon size={26} color="white" />
                  </div>
                  <h2 className="font-black text-xl" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h2>
                </div>

                <p className="text-base leading-relaxed mb-6" style={{ color: "#4A6670" }}>{s.intro}</p>

                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0EA5AA" }}>Besoins adressés</div>
                <div className="grid sm:grid-cols-2 gap-2 mb-6">
                  {s.needs.map((n) => (
                    <div key={n} className="flex items-start gap-2 text-sm" style={{ color: "#3A5A60" }}>
                      <CheckCircle2 size={15} style={{ color: "#0EA5AA", flexShrink: 0, marginTop: "2px" }} />
                      {n}
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "#F4F9F9", border: "1px solid #E0EAF4" }}>
                  <div className="text-xs font-bold uppercase tracking-widest pt-1 flex-shrink-0" style={{ color: "#1A3F7A" }}>Message clé</div>
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: "#1A3F7A" }}>{s.key}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14 rounded-2xl p-10" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
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
