import { useEffect } from "react";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2,
  Heart, UserCheck, Truck, FlaskConical, Activity, Home,
} from "lucide-react";

/* ============================================================
   PAGE SERVICES — Contenu officiel APS Québec
   ============================================================ */

const servicesList = [
  {
    id: "decharge-hospitaliere",
    icon: Heart,
    title: "Soutien à la décharge hospitalière",
    intro: "APS Québec accompagne le patient dès la sortie de l'hôpital pour sécuriser la transition vers le domicile, une résidence, une ressource intermédiaire ou un autre milieu de vie.",
    includes: [
      "Coordination de la sortie",
      "Lien avec la pharmacie",
      "Livraison rapide et sécurisée des médicaments",
      "Activation de services complémentaires",
      "Retour d'information au partenaire",
      "Visibilité pour la famille ou le proche aidant autorisé",
      "Suivi post-décharge selon le protocole établi",
    ],
    value: "Réduire les ruptures de soins, accélérer les transitions, soutenir l'observance thérapeutique et alléger la pression sur les équipes hospitalières.",
  },
  {
    id: "accompagnement",
    icon: UserCheck,
    title: "Accompagnement aux rendez-vous médicaux",
    intro: "APS Québec accompagne les patients et résidents à leurs rendez-vous médicaux afin de réduire les absences, sécuriser les déplacements et améliorer la continuité du suivi.",
    includes: [
      "Prise en charge du patient",
      "Transport ou accompagnement selon le modèle convenu",
      "Présence rassurante lors du parcours",
      "Aide à la compréhension des consignes non cliniques",
      "Retour structuré au partenaire ou à la famille",
      "Signalement d'enjeux observés selon le protocole",
    ],
    value: "Moins de rendez-vous manqués, meilleure continuité, réduction du stress pour les familles et soutien concret pour les établissements.",
  },
  {
    id: "livraison",
    icon: Truck,
    title: "Livraison sécurisée de médicaments",
    intro: "APS Québec assure la livraison de médicaments avec une logique de traçabilité, de preuve d'exécution et de coordination avec les pharmacies partenaires.",
    includes: [
      "Coordination avec la pharmacie",
      "Assignation de mission",
      "Chaîne de possession documentée",
      "Preuve de livraison",
      "Validation selon les exigences du partenaire",
      "Suivi en temps réel lorsque disponible",
      "Escalade en cas d'exception",
    ],
    value: "Livraison plus fiable, meilleure traçabilité, réduction des oublis et renforcement du lien pharmacie-patient.",
  },
  {
    id: "echantillons",
    icon: FlaskConical,
    title: "Transport d'échantillons biologiques et prélèvements",
    intro: "APS Québec peut soutenir la logistique des prélèvements sanguins, urinaires ou autres échantillons via des laboratoires partenaires et selon les protocoles convenus.",
    includes: [
      "Planification de cueillette",
      "Coordination avec laboratoire ou partenaire clinique",
      "Chaîne de possession documentée",
      "Transport selon protocole",
      "Preuve de mission",
      "Signalement d'exception",
      "Rapport opérationnel",
    ],
    value: "Meilleure coordination des prélèvements, réduction des délais, soutien aux soins à domicile et optimisation des routes médicales.",
  },
  {
    id: "visites-suivi",
    icon: Activity,
    title: "Visites de suivi et présence rassurante",
    intro: "Entre deux interventions cliniques, APS Québec peut effectuer des visites de suivi légères pour vérifier, rassurer, documenter et signaler rapidement une situation à risque.",
    includes: [
      "Visite ponctuelle ou récurrente",
      "Validation de présence et de bien-être général",
      "Observation non clinique",
      "Notes de suivi",
      "Communication avec les proches autorisés ou partenaires",
      "Escalade si une situation exige une intervention",
    ],
    value: "Plus de sécurité, plus de visibilité, détection précoce de certains enjeux et réduction de l'isolement.",
  },
  {
    id: "monitoring",
    icon: Home,
    title: "Monitoring connecté à domicile",
    intro: "APS Québec peut soutenir l'intégration de dispositifs de monitoring à domicile, connecter certaines alertes au parcours patient et offrir plus de visibilité aux partenaires et familles autorisées.",
    includes: [
      "Installation ou soutien opérationnel selon le partenaire",
      "Suivi de certaines données ou alertes selon protocole",
      "Lien avec l'application patient",
      "Visibilité pour proches autorisés",
      "Escalade opérationnelle",
      "Rapports consolidés",
    ],
    value: "Transformer les données en action, connecter le domicile au réseau de soins et renforcer la confiance des familles.",
  },
];

function PageHero() {
  return (
    <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
      <div className="container">
        <div className="aps-badge mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>
          Nos services
        </div>
        <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15, maxWidth: "780px" }}>
          Des services modulaires qui renforcent la continuité des soins
        </h1>
        <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "640px", lineHeight: 1.7 }}>
          Chaque service peut être vendu seul, regroupé ou intégré à une offre institutionnelle avec pharmacies, résidences, entreprises de soins à domicile, hôpitaux, cliniques ou partenaires de laboratoire — sans alourdir les équipes cliniques.
        </p>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />
      <PageHero />

      {/* Quick nav */}
      <div style={{ background: "white", borderBottom: "1px solid #E0EAF4", position: "sticky", top: "64px", zIndex: 30 }}>
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {servicesList.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap no-underline transition-all"
                style={{ color: "#3A5A60" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EFF9FA"; (e.currentTarget as HTMLElement).style.color = "#0EA5AA"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#3A5A60"; }}
              >
                <s.icon size={15} /> {s.title.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="aps-section">
        <div className="container">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {servicesList.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-32 bg-white rounded-2xl p-8" style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 20px rgba(26,63,122,0.06)" }}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: i % 2 === 0 ? "linear-gradient(135deg, #1A3F7A, #0EA5AA)" : "linear-gradient(135deg, #0EA5AA, #3BBFB8)" }}>
                    <s.icon size={26} color="white" />
                  </div>
                  <div>
                    <h2 className="font-black text-xl mb-2" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>{s.title}</h2>
                    <p className="text-base leading-relaxed" style={{ color: "#4A6670" }}>{s.intro}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0EA5AA" }}>Ce que le service inclut</div>
                    <ul className="flex flex-col gap-2">
                      {s.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-sm" style={{ color: "#3A5A60" }}>
                          <CheckCircle2 size={15} style={{ color: "#0EA5AA", flexShrink: 0, marginTop: "2px" }} />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#1A3F7A" }}>Valeur ajoutée</div>
                    <div className="rounded-xl p-4 text-sm leading-relaxed" style={{ background: "#F4F9F9", color: "#3A5A60", border: "1px solid #E0EAF4" }}>
                      {s.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14 rounded-2xl p-10" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
            <h2 className="font-black text-2xl text-white mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Prêt à structurer votre corridor de soins ?</h2>
            <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              Déployez un service seul ou intégrez plusieurs services dans une offre institutionnelle adaptée à votre réalité.
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
