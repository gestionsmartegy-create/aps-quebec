import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function APSFooter() {
  return (
    <footer style={{ background: "#0EA5AA" }}>
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/LogoAPS.png"
                alt="APS Québec"
                style={{ height: "40px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              Agents de Proximité Santé — Recréer le lien humain dans le système de santé québécois.
              Soutien aux résidences RI, RPA et RTF.
            </p>
            <div className="flex gap-3">
              {["F", "I", "L"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1A3F7A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Nos services", href: "/services" },
                { label: "Santé mentale", href: "/sante-mentale" },
                { label: "Technologie", href: "/technologie" },
                { label: "Partenaires", href: "/partenaires" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors no-underline"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              Contact
            </div>
            <ul className="space-y-2">
              <li>
                <a href="tel:+18668247828" className="text-sm no-underline" style={{ color: "rgba(255,255,255,0.7)" }}>
                  +1-866-824-7828
                </a>
              </li>
              <li>
                <a href="mailto:info@aps-qc.ca" className="text-sm no-underline" style={{ color: "rgba(255,255,255,0.7)" }}>
                  info@aps-qc.ca
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Montréal, Québec</span>
              </li>
              <li>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Lun–Sam : 8h–17h</span>
              </li>
            </ul>
            <Link
              href="/devenir-partenaire"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all no-underline"
              style={{ background: "#1A3F7A", color: "white" }}
            >
              Créer mon compte APS <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 APS Québec — Made with ♥ by{" "}
            <a
              href="https://smartegy.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3BBFB8", textDecoration: "none" }}
            >
              smartegy.ca
            </a>
          </p>
          <div className="flex gap-4">
            {["Politique de confidentialité", "Conditions d'utilisation"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs no-underline transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
