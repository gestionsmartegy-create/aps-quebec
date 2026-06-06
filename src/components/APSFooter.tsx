import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";

const NAV = [
  { label: "Accueil",       href: "/" },
  { label: "À propos",      href: "/a-propos" },
  { label: "Nos services",  href: "/services" },
  { label: "Santé mentale", href: "/sante-mentale" },
  { label: "Technologie",   href: "/technologie" },
  { label: "Partenaires",   href: "/partenaires" },
];

const SERVICES = [
  { label: "Livraison Last-Mile",       href: "/services/livraison" },
  { label: "Accompagnement patient",    href: "/services/accompagnement" },
  { label: "Sortie d'hôpital",          href: "/services/sortie-hopital" },
  { label: "Services RI / RPA / RTF",   href: "/services/residences" },
  { label: "Santé mentale & bien-être", href: "/services/sante-mentale" },
  { label: "Soins à domicile & IoT",    href: "/services/iot" },
];

const linkStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.55)",
  fontSize: "0.875rem",
  textDecoration: "none",
  transition: "color 0.15s",
  display: "block",
  paddingBottom: "0.05rem",
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={linkStyle}
      className="no-underline"
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
    >
      {children}
    </Link>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: "0.65rem",
        fontWeight: 800,
        letterSpacing: "0.12em",
        textTransform: "uppercase" as const,
        color: "#3BBFB8",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </div>
  );
}

export default function APSFooter() {
  return (
    <footer style={{ background: "#0D1E3F" }}>

      {/* ── CTA Strip ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="container"
          style={{
            padding: "3rem 1.5rem",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#3BBFB8", marginBottom: "0.5rem" }}>
              Rejoignez le réseau APS
            </div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", color: "white", margin: 0, lineHeight: 1.2 }}>
              Prêt à transformer votre résidence&nbsp;?
            </h3>
          </div>
          <Link
            href="/devenir-partenaire"
            className="no-underline"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              background: "#0EA5AA",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.9375rem",
              borderRadius: "0.625rem",
              textDecoration: "none",
              whiteSpace: "nowrap" as const,
              transition: "background 0.15s, box-shadow 0.15s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0A7F84";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(14,165,170,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0EA5AA";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Devenir partenaire <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="container" style={{ padding: "4rem 1.5rem 3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
          }}
          className="footer-grid"
        >

          {/* Brand column */}
          <div>
            <img
              src="/LogoAPS.png"
              alt="APS Québec"
              style={{ height: "48px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.92, marginBottom: "1.25rem" }}
            />
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "300px" }}>
              Agents de Proximité Santé — Recréer le lien humain dans le système de santé québécois. Soutien aux résidences RI, RPA et RTF.
            </p>

            {/* Certifications */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" as const }}>
              {["HIPAA", "PIPEDA", "RGPD"].map((b) => (
                <span
                  key={b}
                  style={{
                    padding: "0.2rem 0.6rem",
                    background: "rgba(59,191,184,0.12)",
                    border: "1px solid rgba(59,191,184,0.25)",
                    borderRadius: "999px",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    color: "#3BBFB8",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "0.5rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#0EA5AA";
                    (e.currentTarget as HTMLElement).style.borderColor = "#0EA5AA";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ColTitle>Navigation</ColTitle>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.625rem" }}>
              {NAV.map((item) => (
                <FooterLink key={item.href} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <ColTitle>Services</ColTitle>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.625rem" }}>
              {SERVICES.map((item) => (
                <FooterLink key={item.href} href={item.href}>{item.label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <ColTitle>Contact</ColTitle>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.875rem" }}>
              {[
                { Icon: Phone, text: "+1-866-824-7828", href: "tel:+18668247828" },
                { Icon: Mail,  text: "info@aps-qc.ca",  href: "mailto:info@aps-qc.ca" },
                { Icon: MapPin, text: "Montréal, Québec", href: undefined },
                { Icon: Clock,  text: "Lun–Sam : 8h–17h", href: undefined },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "0.4rem", background: "rgba(14,165,170,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={13} style={{ color: "#0EA5AA" }} />
                  </div>
                  {href ? (
                    <a href={href} style={{ ...linkStyle, paddingTop: "0.3rem" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ ...linkStyle, paddingTop: "0.3rem", cursor: "default" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div
          className="container"
          style={{
            padding: "1.5rem 1.5rem",
            display: "flex",
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © 2026 APS Québec. Tous droits réservés. — Made with ♥ by{" "}
            <a href="https://smartegy.ca" target="_blank" rel="noopener noreferrer"
              style={{ color: "#3BBFB8", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3BBFB8")}
            >
              smartegy.ca
            </a>
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Politique de confidentialité", "Conditions d'utilisation"].map((item) => (
              <a key={item} href="#"
                style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}
