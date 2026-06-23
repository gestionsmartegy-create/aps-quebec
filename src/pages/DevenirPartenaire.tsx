import { useState } from "react";
import { Link, useSearch } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import { CheckCircle2, ArrowRight, ArrowLeft, Send, Star } from "lucide-react";

/* ============================================================
   DEVENIR PARTENAIRE — APS Québec
   Formules + Formulaire Netlify → infos@aps-qc.ca
   ============================================================ */

const formules = [
  {
    id: "bronze",
    name: "Bronze",
    tag: "Démarrage",
    price: "0$",
    period: "/ mois",
    base: "2$ / résident / mois",
    color: "#8B6914",
    bg: "#FFFBF0",
    border: "#E8C84A",
    popular: false,
    features: [
      "Accès aux services d'accompagnement APS",
      "Accès aux programmes communautaires",
      "Activités de participation sociale",
      "Ressources en soutien communautaire",
      "Réclamation simplifiée et support dédié",
    ],
  },
  {
    id: "or",
    name: "Or",
    tag: "Recommandé",
    price: "0$",
    period: "/ mois",
    base: "2$ / résident / mois",
    color: "#0EA5AA",
    bg: "#EFF9FA",
    border: "#0EA5AA",
    popular: true,
    features: [
      "Tout ce qui est inclus dans Bronze",
      "Rabais APS sur les services admissibles",
      "Priorité sur les missions APS",
      "Accès complet aux programmes de santé mentale",
      "Activités de participation sociale",
      "Priorité aux communications et offres APS",
      "Gestionnaire partenaire dédié",
      "Accès aux données et politiques de confiance",
      "Activités de randonnées et sorties",
      "Engagement groupe PLUS (résidences)",
    ],
  },
  {
    id: "argent",
    name: "Argent",
    tag: "Intermédiaire",
    price: "0$",
    period: "/ mois",
    base: "2$ / résident / mois",
    color: "#607D8B",
    bg: "#F4F7F8",
    border: "#B0BEC5",
    popular: false,
    features: [
      "Tout ce qui est inclus dans Bronze",
      "Rabais APS sur les services admissibles",
      "Accès prioritaire aux missions APS",
      "Accès aux activités de groupe",
      "Programmes de participation sociale",
      "Activités axées sur la santé mentale",
      "Activités d'intégration communautaire",
      "Soutien santé simplifié",
    ],
  },
];

const typeOptions = [
  "Résidence",
  "Ressource Intermédiaire (RI)",
  "Résidence Privée pour Aînés (RPA)",
  "Ressource de Type Familial (RTF)",
  "Clinique",
  "Hôpital",
  "Autre",
];

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function DevenirPartenaire() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const defaultFormule = params.get("formule") || "or";

  const [selectedFormule, setSelectedFormule] = useState(defaultFormule);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [form, setForm] = useState({
    prenom: "", nom: "", email: "", tel: "",
    typeRessource: "", nomRessource: "",
    adresse: "", ville: "", codePostal: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "devenir-partenaire",
          forfait: selectedFormule,
          ...form,
        }),
      });
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler au 1-866-824-7828.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "0.7rem 1rem",
    border: "1.5px solid #D0E4E6", borderRadius: "0.5rem",
    fontSize: "0.9rem", color: "#1A2E35", background: "white",
    outline: "none", transition: "border-color 0.15s", fontFamily: "'DM Sans', sans-serif",
  };
  const labelBase: React.CSSProperties = {
    display: "block", fontSize: "0.8rem", fontWeight: 700,
    color: "#1A3F7A", marginBottom: "0.375rem",
  };

  if (submitted) return (
    <>
      <APSNavbar />
      <div style={{ paddingTop: "5rem", minHeight: "100vh", background: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "520px", padding: "3rem 2rem" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#EFF9FA", border: "2px solid #0EA5AA", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <CheckCircle2 size={36} color="#0EA5AA" />
          </div>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#1A3F7A", marginBottom: "1rem" }}>
            Demande envoyée !
          </h1>
          <p style={{ color: "#5A7A82", lineHeight: 1.7, marginBottom: "2rem", fontSize: "1rem" }}>
            Merci <strong>{form.prenom}</strong> ! Votre inscription pour la formule <strong style={{ color: "#0EA5AA" }}>{selectedFormule.charAt(0).toUpperCase() + selectedFormule.slice(1)}</strong> a bien été reçue.
            Notre équipe vous contactera dans les 24h à <strong>{form.email}</strong>.
          </p>
          <Link href="/" className="aps-btn-primary no-underline">
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <APSNavbar />
      <div style={{ paddingTop: "5rem", background: "#FAFAF8", minHeight: "100vh" }}>

        {/* Header */}
        <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", padding: "4rem 0 3rem" }}>
          <div className="container">
            <Link href="/" className="inline-flex items-center gap-2 no-underline mb-6 text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              <ArrowLeft size={15} /> Retour à l'accueil
            </Link>
            <div className="aps-badge" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)", marginBottom: "1rem" }}>
              APS Partenaire
            </div>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "white", lineHeight: 1.15, marginBottom: "1rem" }}>
              Devenez partenaire APS Québec
            </h1>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "560px" }}>
              Choisissez votre formule et soumettez votre demande. Notre équipe vous contacte dans les 24h pour finaliser le partenariat — aucun paiement requis.
            </p>
          </div>
        </section>

        {/* Formules */}
        <section style={{ padding: "3rem 0 2rem" }}>
          <div className="container">
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.35rem", color: "#1A3F7A", marginBottom: "1.5rem", textAlign: "center" }}>
              1. Choisissez votre formule
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", maxWidth: "960px", margin: "0 auto" }}>
              {formules.map((f) => (
                <div
                  key={f.id}
                  onClick={() => setSelectedFormule(f.id)}
                  style={{
                    background: selectedFormule === f.id ? f.bg : "white",
                    border: `2px solid ${selectedFormule === f.id ? f.color : "#E0EAF4"}`,
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    position: "relative",
                    boxShadow: selectedFormule === f.id ? `0 4px 20px ${f.color}22` : "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  {f.popular && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "0.3rem", background: "#0EA5AA", color: "white", padding: "0.2rem 0.8rem", borderRadius: "999px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      <Star size={10} fill="white" /> Recommandé
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: f.color, marginBottom: "0.2rem" }}>{f.tag}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "#1A3F7A" }}>{f.name}</div>
                    </div>
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", border: `2px solid ${selectedFormule === f.id ? f.color : "#D0E4E6"}`, background: selectedFormule === f.id ? f.color : "white", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s", flexShrink: 0 }}>
                      {selectedFormule === f.id && <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "white" }} />}
                    </div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#5A7A82", marginBottom: "1rem" }}>{f.base}</div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {f.features.slice(0, 4).map((feat) => (
                      <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#3A5A60" }}>
                        <CheckCircle2 size={13} style={{ color: f.color, flexShrink: 0, marginTop: "2px" }} />
                        {feat}
                      </li>
                    ))}
                    {f.features.length > 4 && (
                      <li style={{ fontSize: "0.78rem", color: f.color, fontWeight: 600 }}>+ {f.features.length - 4} autres avantages</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section style={{ padding: "2rem 0 5rem" }}>
          <div className="container">
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.35rem", color: "#1A3F7A", marginBottom: "0.5rem", textAlign: "center" }}>
              2. Vos informations
            </h2>
            <p style={{ textAlign: "center", color: "#5A7A82", fontSize: "0.9rem", marginBottom: "2rem" }}>
              Formule sélectionnée : <strong style={{ color: "#0EA5AA" }}>{formules.find(f => f.id === selectedFormule)?.name}</strong> — Aucun paiement requis
            </p>

            <form
              name="devenir-partenaire"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ maxWidth: "720px", margin: "0 auto", background: "white", borderRadius: "1.25rem", padding: "2.5rem", boxShadow: "0 4px 24px rgba(26,63,122,0.08)", border: "1px solid #E0EAF4" }}
            >
              <input type="hidden" name="form-name" value="devenir-partenaire" />
              <input type="hidden" name="forfait" value={selectedFormule} />
              <div style={{ display: "none" }}>
                <label>Ne pas remplir : <input name="bot-field" /></label>
              </div>

              {/* Contact */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0EA5AA", marginBottom: "1rem" }}>
                  Coordonnées du responsable
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelBase}>Prénom *</label>
                    <input style={inputBase} type="text" name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Jean" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                  <div>
                    <label style={labelBase}>Nom *</label>
                    <input style={inputBase} type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Tremblay" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                  <div>
                    <label style={labelBase}>Courriel *</label>
                    <input style={inputBase} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jean@residence.ca" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                  <div>
                    <label style={labelBase}>Téléphone *</label>
                    <input style={inputBase} type="tel" name="tel" value={form.tel} onChange={handleChange} required placeholder="514 000-0000" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                </div>
              </div>

              {/* Résidence */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0EA5AA", marginBottom: "1rem" }}>
                  Votre établissement
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelBase}>Type d'établissement *</label>
                    <select style={inputBase} name="typeRessource" value={form.typeRessource} onChange={handleChange} required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")}>
                      <option value="">Sélectionner...</option>
                      {typeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={labelBase}>Nom de l'établissement *</label>
                    <input style={inputBase} type="text" name="nomRessource" value={form.nomRessource} onChange={handleChange} required placeholder="Résidence les Érables" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                  <div>
                    <label style={labelBase}>Adresse *</label>
                    <input style={inputBase} type="text" name="adresse" value={form.adresse} onChange={handleChange} required placeholder="123, rue des Érables" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "0.75rem" }}>
                    <div>
                      <label style={labelBase}>Ville *</label>
                      <input style={inputBase} type="text" name="ville" value={form.ville} onChange={handleChange} required placeholder="Montréal" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                    </div>
                    <div>
                      <label style={labelBase}>Code postal *</label>
                      <input style={inputBase} type="text" name="codePostal" value={form.codePostal} onChange={handleChange} required placeholder="H1A 1A1" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "2rem" }}>
                <label style={labelBase}>Questions ou commentaires</label>
                <textarea style={{ ...inputBase, minHeight: "100px", resize: "vertical" }} name="message" value={form.message} onChange={handleChange} placeholder="Nombre de résidents, questions sur les services, disponibilités..." onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
              </div>

              {error && (
                <div style={{ background: "#FFF0F0", border: "1px solid #FCA5A5", borderRadius: "0.5rem", padding: "0.875rem 1rem", color: "#B91C1C", fontSize: "0.875rem", marginBottom: "1.25rem" }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="aps-btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem", opacity: loading ? 0.7 : 1 }}
              >
                {loading ? "Envoi en cours…" : <>Soumettre ma demande <Send size={16} /></>}
              </button>

              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#8A9BA0", marginTop: "1rem" }}>
                Aucun paiement requis. Notre équipe vous contacte dans les 24h.
              </p>
            </form>
          </div>
        </section>

      </div>

      {/* Footer minimal */}
      <footer style={{ background: "#1A3F7A", padding: "1.5rem 0" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <img src="/LogoAPS.png" alt="APS Québec" style={{ height: "32px", filter: "brightness(0) invert(1)", opacity: 0.85 }} />
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", margin: 0 }}>
            © 2026 APS Québec — Made with ♥ by{" "}
            <a href="https://smartegy.ca" target="_blank" rel="noopener noreferrer" style={{ color: "#3BBFB8", textDecoration: "none" }}>smartegy.ca</a>
          </p>
        </div>
      </footer>
    </>
  );
}
