import { useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import {
  Truck, UserCheck, Heart, Users, Activity, Package,
  ArrowRight, ChevronRight,
} from "lucide-react";

const serviceCards = [
  {
    icon: Truck,
    title: "Livraison Last-Mile",
    desc: "Livraison sécurisée de médicaments avec traçabilité complète, preuve d'exécution numérique et coordination pharmacie.",
    href: "/services/livraison",
    color: "#0EA5AA",
  },
  {
    icon: UserCheck,
    title: "Accompagnement patient",
    desc: "Nos agents accompagnent les résidents à leurs rendez-vous médicaux pour réduire les no-shows et sécuriser les transports.",
    href: "/services/accompagnement",
    color: "#1A3F7A",
  },
  {
    icon: Heart,
    title: "Sortie d'hôpital",
    desc: "Accompagnement du patient depuis la sortie jusqu'au retour à domicile, en résidence ou en ressource intermédiaire.",
    href: "/services/sortie-hopital",
    color: "#0EA5AA",
  },
  {
    icon: Users,
    title: "Services RI / RPA / RTF",
    desc: "Sorties récréatives, participation sociale et accompagnement assisté pour améliorer la qualité de vie des résidents.",
    href: "/services/residences",
    color: "#1A3F7A",
  },
  {
    icon: Activity,
    title: "Santé mentale & bien-être",
    desc: "Visites régulières pour réduire l'isolement, détecter les risques précocement et maintenir le lien social.",
    href: "/services/sante-mentale",
    color: "#0EA5AA",
  },
  {
    icon: Package,
    title: "IoT & dispositifs connectés",
    desc: "Intégration d'appareils de surveillance connectés, alertes en temps réel et visibilité pour les familles et partenaires.",
    href: "/services/iot",
    color: "#1A3F7A",
  },
];

export default function ServicesPage() {
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
            Services APS Québec
          </div>
          <h1
            className="font-black mb-4 text-white"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Nos services
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            Six services modulaires conçus pour la continuité des soins, déployables individuellement
            ou intégrés dans une offre institutionnelle complète.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="aps-section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 transition-all duration-300 hover:shadow-xl group"
                style={{ border: "1px solid #E0EAF4", borderRadius: "1rem" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${s.color}18` }}
                >
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#5A7A82" }}>
                  {s.desc}
                </p>
                <Link
                  href={s.href}
                  className="flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2 no-underline"
                  style={{ color: s.color }}
                >
                  En savoir plus <ChevronRight size={15} />
                </Link>
              </div>
            ))}
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
            Prêt à démarrer ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Rejoignez les résidences partenaires APS et offrez plus à vos résidents.
          </p>
          <Link href="/devenir-partenaire" className="aps-btn-teal no-underline">
            Devenir partenaire <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
