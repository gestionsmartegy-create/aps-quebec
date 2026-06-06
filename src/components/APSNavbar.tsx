import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, Truck, UserCheck, Heart, Users, Activity, Package } from "lucide-react";

/* APS Québec Navbar — Branding orange/teal avec dropdown Services */

const services = [
  { label: "Livraison Last-Mile", href: "/aps/services/livraison", icon: Truck, color: "#0D7377" },
  { label: "Accompagnement patient", href: "/aps/services/accompagnement", icon: UserCheck, color: "#F4631E" },
  { label: "Sortie d'hôpital", href: "/aps/services/sortie-hopital", icon: Heart, color: "#0D7377" },
  { label: "Services RI / RPA / RTF", href: "/aps/services/residences", icon: Users, color: "#F4631E" },
  { label: "Santé mentale & bien-être", href: "/aps/services/sante-mentale", icon: Activity, color: "#0D7377" },
  { label: "Soins à domicile & IoT", href: "/aps/services/iot", icon: Package, color: "#F4631E" },
];

export default function APSNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (href.includes("#")) {
      const id = href.split("#")[1];
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(13,115,119,0.1)" : "none",
        borderBottom: scrolled ? "1px solid #E8F0F1" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo APS */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div
              className="flex items-center justify-center w-9 h-9 rounded-lg font-black text-white text-sm"
              style={{ background: "linear-gradient(135deg, #0D7377, #14A8AD)" }}
            >
              APS
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-base" style={{ color: "#1A2E35", fontFamily: "'DM Sans', sans-serif" }}>
                APS Québec
              </span>
              <span className="text-xs font-medium" style={{ color: "#0D7377" }}>
                Powered by Vaistat
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Accueil */}
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-150 no-underline"
              style={{ color: location === "/aps-quebec" ? "#0D7377" : "#3A5A60" }}
            >
              Accueil
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
                style={{ color: location.startsWith("/aps/services") ? "#0D7377" : "#3A5A60" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#0D7377";
                  (e.currentTarget as HTMLElement).style.background = "#E6F4F5";
                }}
                onMouseLeave={(e) => {
                  if (!location.startsWith("/aps/services")) {
                    (e.currentTarget as HTMLElement).style.color = "#3A5A60";
                  }
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  style={{
                    transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                />
              </button>

              {/* Dropdown */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-72 rounded-xl overflow-hidden"
                  style={{
                    background: "white",
                    boxShadow: "0 8px 32px rgba(13,115,119,0.15)",
                    border: "1px solid #E8F0F1",
                    animation: "fadeInDown 0.15s ease",
                  }}
                >
                  <div className="p-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all no-underline group"
                        style={{ color: "#1A2E35" }}
                        onClick={() => setServicesOpen(false)}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "#F0FAFA";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "transparent";
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${s.color}15` }}
                        >
                          <s.icon size={15} style={{ color: s.color }} />
                        </div>
                        <span className="text-sm font-medium">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div
                    className="px-4 py-3 border-t"
                    style={{ borderColor: "#E8F0F1", background: "#F8FAFA" }}
                  >
                    <Link
                      href="/#services"
                      className="text-xs font-semibold no-underline flex items-center gap-1"
                      style={{ color: "#0D7377" }}
                      onClick={() => setServicesOpen(false)}
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            {[
              { label: "Formules", href: "/aps-quebec#formules" },
              { label: "Technologie", href: "/aps-quebec#technologie" },
              { label: "À propos", href: "/aps-quebec#apropos" },
              { label: "Contact", href: "/aps-quebec#contact" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-150"
                style={{ color: "#3A5A60" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#0D7377";
                  (e.target as HTMLElement).style.background = "#E6F4F5";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#3A5A60";
                  (e.target as HTMLElement).style.background = "transparent";
                }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+18668247828"
              className="flex items-center gap-1.5 text-sm font-medium no-underline"
              style={{ color: "#0D7377" }}
            >
              <Phone size={14} />
              1-866-824-7828
            </a>
            <a
              href="#inscription"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md no-underline"
              style={{ background: "#F4631E" }}
            >
              Devenir partenaire
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "#1A2E35" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ background: "white", borderColor: "#E8F0F1" }}
        >
          <div className="container py-4 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-sm font-medium rounded-md no-underline"
              style={{ color: "#1A2E35" }}
              onClick={() => setMobileOpen(false)}
            >
              Accueil
            </Link>
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#0D7377" }}>
                Services
              </div>
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2 px-2 py-2 text-sm rounded-md no-underline"
                  style={{ color: "#3A5A60" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <s.icon size={14} style={{ color: s.color }} />
                  {s.label}
                </Link>
              ))}
            </div>
            {[
              { label: "Formules", href: "/aps-quebec#formules" },
              { label: "Technologie", href: "/aps-quebec#technologie" },
              { label: "À propos", href: "/aps-quebec#apropos" },
              { label: "Contact", href: "/aps-quebec#contact" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="block w-full text-left px-3 py-2 text-sm font-medium rounded-md"
                style={{ color: "#3A5A60" }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t space-y-2" style={{ borderColor: "#E8F0F1" }}>
              <a
                href="tel:+18668247828"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium no-underline"
                style={{ color: "#0D7377" }}
              >
                <Phone size={14} />
                1-866-824-7828
              </a>
              <a
                href="#inscription"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold text-white no-underline"
                style={{ background: "#F4631E" }}
              >
                Devenir partenaire →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
