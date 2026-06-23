import { useState, useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { CheckCircle2, ArrowLeft, Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { submitForm } from "@/lib/submitForm";

/* ============================================================
   PAGE CONTACT — Web3Forms → infos@aps-qc.ca
   ============================================================ */

const sujets = [
  "Décharge hospitalière",
  "Accompagnement médical",
  "Livraison de médicaments",
  "Prélèvements / échantillons",
  "Monitoring connecté",
  "Partenariat stratégique",
  "Formation APS",
  "Autre",
];

const typesOrg = [
  "Pharmacie",
  "Résidence / RI / RPA / CHSLD",
  "Entreprise de soins à domicile",
  "Hôpital / Clinique",
  "Laboratoire",
  "Assureur / Institution",
  "Famille / Proche aidant",
  "Autre",
];

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nom: "", organisation: "", titre: "", email: "", tel: "",
    typeOrganisation: "", sujet: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitForm("Contact", form);
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer ou nous appeler au 1-866-824-7828.");
    } finally {
      setLoading(false);
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "0.7rem 1rem", border: "1.5px solid #D0E4E6",
    borderRadius: "0.5rem", fontSize: "0.9rem", color: "#1A2E35", background: "white",
    outline: "none", transition: "border-color 0.15s", fontFamily: "'DM Sans', sans-serif",
  };
  const labelBase: React.CSSProperties = { display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#1A3F7A", marginBottom: "0.375rem" };

  if (submitted) return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />
      <div style={{ paddingTop: "7rem", paddingBottom: "5rem", background: "#FAFAF8", minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "520px", padding: "2rem" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "#EFF9FA", border: "2px solid #0EA5AA", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <CheckCircle2 size={36} color="#0EA5AA" />
          </div>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#1A3F7A", marginBottom: "1rem" }}>Demande envoyée !</h1>
          <p style={{ color: "#5A7A82", lineHeight: 1.7, marginBottom: "2rem" }}>
            Merci <strong>{form.nom}</strong>. Votre demande a bien été reçue. Notre équipe vous contactera sous 24h à <strong>{form.email}</strong>.
          </p>
          <Link href="/" className="aps-btn-primary no-underline"><ArrowLeft size={16} /> Retour à l'accueil</Link>
        </div>
      </div>
      <APSFooter />
    </div>
  );

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #1A3F7A 0%, #0EA5AA 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="aps-badge mb-4" style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}>Contact</div>
          <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.85rem)", color: "white", lineHeight: 1.15, maxWidth: "780px" }}>
            Parlons de votre corridor de soins, de votre établissement ou de votre projet pilote
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "680px", lineHeight: 1.7 }}>
            Vous représentez une pharmacie, une résidence, une entreprise de soins à domicile, une clinique, un hôpital, un laboratoire, une institution ou un partenaire stratégique ? Notre équipe peut vous aider à structurer un premier corridor pilote, une offre en marque blanche, un programme de décharge ou un modèle de partenariat adapté à votre réalité.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="aps-section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Form */}
            <form
              name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-white rounded-2xl p-8"
              style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 24px rgba(26,63,122,0.08)" }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: "none" }}><label>Ne pas remplir : <input name="bot-field" /></label></div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={labelBase}>Nom *</label>
                  <input style={inputBase} type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Jean Tremblay" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Organisation *</label>
                  <input style={inputBase} type="text" name="organisation" value={form.organisation} onChange={handleChange} required placeholder="Résidence les Érables" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Titre / fonction</label>
                  <input style={inputBase} type="text" name="titre" value={form.titre} onChange={handleChange} placeholder="Directeur" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Type d'organisation *</label>
                  <select style={inputBase} name="typeOrganisation" value={form.typeOrganisation} onChange={handleChange} required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")}>
                    <option value="">Sélectionner...</option>
                    {typesOrg.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
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

              <div className="mb-4">
                <label style={labelBase}>Je souhaite discuter de *</label>
                <select style={inputBase} name="sujet" value={form.sujet} onChange={handleChange} required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")}>
                  <option value="">Sélectionner un sujet...</option>
                  {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="mb-6">
                <label style={labelBase}>Message</label>
                <textarea style={{ ...inputBase, minHeight: "120px", resize: "vertical" }} name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre besoin, votre établissement ou votre projet pilote..." onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
              </div>

              {error && (
                <div style={{ background: "#FFF0F0", border: "1px solid #FCA5A5", borderRadius: "0.5rem", padding: "0.875rem 1rem", color: "#B91C1C", fontSize: "0.875rem", marginBottom: "1.25rem" }}>{error}</div>
              )}

              <button type="submit" disabled={loading} className="aps-btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Envoi en cours…" : <>Envoyer ma demande <Send size={16} /></>}
              </button>
            </form>

            {/* Info */}
            <div className="flex flex-col gap-4">
              {[
                { Icon: Phone, label: "Téléphone", value: "1-866-824-7828", href: "tel:+18668247828" },
                { Icon: Mail, label: "Courriel", value: "infos@aps-qc.ca", href: "mailto:infos@aps-qc.ca" },
                { Icon: MapPin, label: "Région", value: "Montréal, Québec", href: undefined },
                { Icon: Clock, label: "Heures", value: "Lun – Sam : 8h – 17h", href: undefined },
              ].map(({ Icon, label, value, href }, i) => (
                <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-3" style={{ border: "1px solid #E0EAF4" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,170,0.1)" }}>
                    <Icon size={18} style={{ color: "#0EA5AA" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#9BAFB5" }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-sm font-semibold no-underline" style={{ color: "#1A3F7A" }}>{value}</a>
                    ) : (
                      <div className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-xl p-5" style={{ background: "linear-gradient(135deg, #1A3F7A, #0EA5AA)" }}>
                <p className="text-sm font-semibold text-white leading-relaxed">Vous souhaitez rejoindre nos équipes terrain ?</p>
                <Link href="/devenir-aps" className="inline-flex items-center gap-1 mt-2 text-sm font-bold no-underline" style={{ color: "white" }}>
                  Devenir APS →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
