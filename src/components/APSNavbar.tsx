import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown, LogIn, Heart, UserCheck, Truck, FlaskConical, Activity, Home } from "lucide-react";

/* APS Québec Navbar — architecture officielle */

const services = [
  { label: "Soutien à la décharge hospitalière",  href: "/services#decharge-hospitaliere", icon: Heart,        color: "#0EA5AA" },
  { label: "Accompagnement aux rendez-vous",       href: "/services#accompagnement",        icon: UserCheck,    color: "#1A3F7A" },
  { label: "Livraison sécurisée de médicaments",   href: "/services#livraison",             icon: Truck,        color: "#0EA5AA" },
  { label: "Transport d'échantillons",             href: "/services#echantillons",          icon: FlaskConical, color: "#1A3F7A" },
  { label: "Visites de suivi & présence",          href: "/services#visites-suivi",         icon: Activity,     color: "#0EA5AA" },
  { label: "Monitoring connecté à domicile",       href: "/services#monitoring",            icon: Home,         color: "#1A3F7A" },
];

const navLinks = [
  { label: "Pour qui",     href: "/pour-qui"      },
  { label: "Technologie",  href: "/technologie"   },
  { label: "Devenir APS",  href: "/devenir-aps"   },
  { label: "Partenariats", href: "/partenariats"  },
  { label: "À propos",     href: "/a-propos"      },
];

export default function APSNavbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(26,63,122,0.1)" : "none",
        borderBottom: scrolled ? "1px solid #E0EAF4" : "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <img src="/LogoAPS.png" alt="APS Québec" style={{ height: "44px", width: "auto" }} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150 no-underline"
              style={{ color: location === "/" ? "#0EA5AA" : "#3A5A60" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0EA5AA"; (e.currentTarget as HTMLElement).style.background = "#EFF9FA"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = location === "/" ? "#0EA5AA" : "#3A5A60"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              Accueil
            </Link>

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150"
                style={{ color: location.startsWith("/services") ? "#0EA5AA" : "#3A5A60", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0EA5AA"; (e.currentTarget as HTMLElement).style.background = "#EFF9FA"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = location.startsWith("/services") ? "#0EA5AA" : "#3A5A60"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                Services
                <ChevronDown size={13} style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 rounded-xl overflow-hidden"
                  style={{ background: "white", boxShadow: "0 8px 32px rgba(26,63,122,0.13)", border: "1px solid #E0EAF4", animation: "fadeInDown 0.15s ease" }}>
                  <div className="p-2">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all no-underline" style={{ color: "#1A2E35" }}
                        onClick={() => setServicesOpen(false)}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#EFF9FA"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}18` }}>
                          <s.icon size={15} style={{ color: s.color }} />
                        </div>
                        <span className="text-sm font-medium">{s.label}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t" style={{ borderColor: "#E0EAF4", background: "#F5F9FF" }}>
                    <Link href="/services" className="text-xs font-semibold flex items-center gap-1 no-underline" style={{ color: "#0EA5AA" }} onClick={() => setServicesOpen(false)}>
                      Voir tous les services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className="px-3 py-2 text-sm font-semibold rounded-md transition-all duration-150 no-underline"
                style={{ color: location === link.href ? "#0EA5AA" : "#3A5A60" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0EA5AA"; (e.currentTarget as HTMLElement).style.background = "#EFF9FA"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = location === link.href ? "#0EA5AA" : "#3A5A60"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/aps-connect" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold no-underline transition-all" style={{ color: "#1A3F7A", border: "1.5px solid #E0EAF4" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#0EA5AA"; (e.currentTarget as HTMLElement).style.color = "#0EA5AA"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E0EAF4"; (e.currentTarget as HTMLElement).style.color = "#1A3F7A"; }}>
              <LogIn size={14} /> APS Connect
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90 hover:shadow-md no-underline" style={{ background: "#F26419" }}>
              Demander une rencontre
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 rounded-md" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "#1A2E35" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t" style={{ background: "white", borderColor: "#E0EAF4", maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}>
          <div className="container py-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm font-semibold rounded-md no-underline" style={{ color: "#1A2E35" }} onClick={() => setMobileOpen(false)}>
              Accueil
            </Link>
            <div className="px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#0EA5AA" }}>Services</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="flex items-center gap-2 px-2 py-2 text-sm rounded-md no-underline" style={{ color: "#3A5A60" }} onClick={() => setMobileOpen(false)}>
                  <s.icon size={14} style={{ color: s.color }} />
                  {s.label}
                </Link>
              ))}
              <Link href="/services" className="block px-2 py-2 text-sm font-semibold no-underline" style={{ color: "#0EA5AA" }} onClick={() => setMobileOpen(false)}>
                Voir tous les services →
              </Link>
            </div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 text-sm font-semibold rounded-md no-underline" style={{ color: "#3A5A60" }} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t space-y-2" style={{ borderColor: "#E0EAF4" }}>
              <a href="tel:+18668247828" className="flex items-center gap-2 px-3 py-2 text-sm font-medium no-underline" style={{ color: "#0EA5AA" }}>
                <Phone size={14} /> 1-866-824-7828
              </a>
              <Link href="/aps-connect" className="flex items-center justify-center gap-2 w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold no-underline" style={{ color: "#1A3F7A", border: "1.5px solid #E0EAF4" }} onClick={() => setMobileOpen(false)}>
                <LogIn size={15} /> APS Connect
              </Link>
              <Link href="/contact" className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-bold text-white no-underline" style={{ background: "#F26419" }} onClick={() => setMobileOpen(false)}>
                Demander une rencontre
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
