import { useState, useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import { IMG } from "@/lib/images";
import {
  CheckCircle2, ArrowLeft, Send,
  HeartHandshake, ShieldCheck, EyeOff, Award, Clock, Smile, ClipboardCheck, Smartphone, Stethoscope,
  Truck, UserCheck, Heart, FlaskConical, Activity, FileText, AlertTriangle, Radio,
} from "lucide-react";
import { submitForm } from "@/lib/submitForm";

/* ============================================================
   PAGE DEVENIR APS — Recrutement d'agents
   Web3Forms → infos@aps-qc.ca
   ============================================================ */

const profil = [
  { icon: HeartHandshake, label: "Sens du service" },
  { icon: ShieldCheck, label: "Fiabilité" },
  { icon: EyeOff, label: "Discrétion" },
  { icon: Award, label: "Professionnalisme" },
  { icon: Clock, label: "Ponctualité" },
  { icon: Smile, label: "Empathie" },
  { icon: ClipboardCheck, label: "Capacité à suivre des protocoles" },
  { icon: Smartphone, label: "Aisance avec les outils mobiles" },
  { icon: Stethoscope, label: "Intérêt pour la santé et l'accompagnement" },
];

const missions = [
  { icon: Truck, label: "Livraison de médicaments" },
  { icon: UserCheck, label: "Accompagnement à des rendez-vous" },
  { icon: Heart, label: "Soutien à la sortie d'hôpital" },
  { icon: FlaskConical, label: "Transport d'échantillons selon protocole" },
  { icon: Activity, label: "Visites de suivi" },
  { icon: FileText, label: "Documentation de mission" },
  { icon: AlertTriangle, label: "Signalement d'exceptions" },
  { icon: Radio, label: "Communication avec les équipes de coordination" },
];

export default function DevenirAPS() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", tel: "", ville: "", disponibilite: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitForm("Candidature APS", form);
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
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#1A3F7A", marginBottom: "1rem" }}>Candidature reçue !</h1>
          <p style={{ color: "#5A7A82", lineHeight: 1.7, marginBottom: "2rem" }}>
            Merci <strong>{form.prenom}</strong> ! Votre candidature au rôle d'Agent de Proximité en Santé a bien été soumise. Notre équipe vous contactera à <strong>{form.email}</strong>.
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
      <section style={{ background: "linear-gradient(135deg, #0D1E3F 0%, #1A3F7A 100%)", paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aps-badge mb-4" style={{ background: "rgba(242,100,25,0.18)", color: "#FFB088", border: "1px solid rgba(242,100,25,0.35)" }}>Carrières</div>
              <h1 className="font-black mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.15 }}>
                Devenir Agent de Proximité en Santé
              </h1>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.82)", maxWidth: "520px", lineHeight: 1.7 }}>
                Un nouveau rôle de proximité pour soutenir les patients, les familles et les partenaires de soins.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}>
                <img src={IMG.devenirAps} alt="Agent de Proximité en Santé sur le terrain" className="w-full object-cover" style={{ height: "360px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="aps-section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-4">
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4A6670" }}>
              L'Agent de Proximité en Santé est au cœur du modèle APS Québec. Son rôle consiste à soutenir la continuité des soins par des missions non cliniques : accompagnement, logistique médicale, livraison sécurisée, suivi terrain, présence rassurante et communication opérationnelle.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4A6670" }}>
              Chaque APS doit être formé, évalué et encadré pour intervenir avec rigueur, professionnalisme et respect des protocoles.
            </p>
          </div>
        </div>
      </section>

      {/* Profil + Missions */}
      <section className="aps-section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div>
              <div className="aps-section-label mb-4">Profil recherché</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {profil.map((p) => (
                  <div key={p.label} className="bg-white rounded-xl p-4 flex items-center gap-3" style={{ border: "1px solid #E0EAF4" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,165,170,0.1)" }}>
                      <p.icon size={15} style={{ color: "#0EA5AA" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aps-section-label mb-4">Missions possibles</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {missions.map((m) => (
                  <div key={m.label} className="bg-white rounded-xl p-4 flex items-center gap-3" style={{ border: "1px solid #E0EAF4" }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(26,63,122,0.08)" }}>
                      <m.icon size={15} style={{ color: "#1A3F7A" }} />
                    </div>
                    <span className="text-sm font-semibold" style={{ color: "#1A3F7A" }}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire candidature */}
      <section className="aps-section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="aps-section-label mb-3">Soumettre ma candidature</div>
              <h2 className="aps-section-title">Rejoignez la <span>banque de talents APS</span></h2>
            </div>

            <form
              name="candidature-aps" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8"
              style={{ border: "1px solid #E0EAF4", boxShadow: "0 4px 24px rgba(26,63,122,0.08)" }}
            >
              <input type="hidden" name="form-name" value="candidature-aps" />
              <div style={{ display: "none" }}><label>Ne pas remplir : <input name="bot-field" /></label></div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={labelBase}>Prénom *</label>
                  <input style={inputBase} type="text" name="prenom" value={form.prenom} onChange={handleChange} required placeholder="Marie" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Nom *</label>
                  <input style={inputBase} type="text" name="nom" value={form.nom} onChange={handleChange} required placeholder="Gagnon" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Courriel *</label>
                  <input style={inputBase} type="email" name="email" value={form.email} onChange={handleChange} required placeholder="marie@courriel.ca" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Téléphone *</label>
                  <input style={inputBase} type="tel" name="tel" value={form.tel} onChange={handleChange} required placeholder="514 000-0000" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Ville / région *</label>
                  <input style={inputBase} type="text" name="ville" value={form.ville} onChange={handleChange} required placeholder="Montréal" onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                </div>
                <div>
                  <label style={labelBase}>Disponibilité</label>
                  <select style={inputBase} name="disponibilite" value={form.disponibilite} onChange={handleChange} onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")}>
                    <option value="">Sélectionner...</option>
                    <option value="Temps plein">Temps plein</option>
                    <option value="Temps partiel">Temps partiel</option>
                    <option value="Sur appel">Sur appel</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label style={labelBase}>Message / motivation</label>
                <textarea style={{ ...inputBase, minHeight: "110px", resize: "vertical" }} name="message" value={form.message} onChange={handleChange} placeholder="Parlez-nous de votre intérêt pour le rôle d'APS..." onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
              </div>

              {error && (
                <div style={{ background: "#FFF0F0", border: "1px solid #FCA5A5", borderRadius: "0.5rem", padding: "0.875rem 1rem", color: "#B91C1C", fontSize: "0.875rem", marginBottom: "1.25rem" }}>{error}</div>
              )}

              <button type="submit" disabled={loading} className="aps-btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.875rem", opacity: loading ? 0.7 : 1 }}>
                {loading ? "Envoi en cours…" : <>Soumettre ma candidature <Send size={16} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
