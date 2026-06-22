import { useState, useEffect } from "react";
import { Link } from "wouter";
import APSNavbar from "@/components/APSNavbar";
import APSFooter from "@/components/APSFooter";
import {
  User, Pill, Building2, Mail, Lock, Phone, ArrowRight, ArrowLeft,
  CheckCircle2, ShieldCheck, Eye, EyeOff, UserPlus, LogIn,
} from "lucide-react";
import { submitForm } from "@/lib/submitForm";

/* ============================================================
   APS CONNECT — Portail intégré (écrans natifs)
   Connexion + création de compte par espace.
   Inscription → Web3Forms → info@vaistat.com
   ============================================================ */

const espaces = [
  { id: "patient",   icon: User,      title: "Patient & proche aidant", desc: "Suivez vos missions, rendez-vous et la continuité de vos soins." },
  { id: "pharmacie", icon: Pill,      title: "Pharmacie",               desc: "Coordonnez commandes, livraisons, preuves et suivis." },
  { id: "partenaire",icon: Building2, title: "Résidence & partenaire",  desc: "Vue opérationnelle : résidences, soins à domicile, corridors cliniques." },
];

export default function APSConnect() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [espace, setEspace] = useState("patient");
  const [showPwd, setShowPwd] = useState(false);
  const [loginNotice, setLoginNotice] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", tel: "", organisation: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitForm("APS Connect — Création de compte", { espace, ...form });
      setSubmitted(true);
    } catch { /* on continue malgré l'erreur */ }
    finally { setLoading(false); }
  };

  const input: React.CSSProperties = {
    width: "100%", padding: "0.7rem 1rem 0.7rem 2.5rem", border: "1.5px solid #D0E4E6",
    borderRadius: "0.625rem", fontSize: "0.9rem", color: "#1A2E35", background: "white",
    outline: "none", transition: "border-color 0.15s", fontFamily: "'DM Sans', sans-serif",
  };
  const iconWrap: React.CSSProperties = { position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "#9BAFB5" };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <APSNavbar />

      <section style={{ paddingTop: "5rem", background: "#F4F9F9", minHeight: "100vh" }}>
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-5rem)]">

          {/* Left — brand panel */}
          <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden" style={{ background: "linear-gradient(150deg, #0D1E3F 0%, #1A3F7A 55%, #0EA5AA 130%)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10">
              <img src="/LogoAPS.png" alt="APS Québec" style={{ height: "46px", filter: "brightness(0) invert(1)" }} />
              <div className="mt-2" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#F26419" }}>APS Connect</div>
            </div>
            <div className="relative z-10">
              <h2 className="font-black text-white mb-6" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "2rem", lineHeight: 1.2 }}>
                Votre espace de continuité des soins
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  "Suivi des missions en temps réel",
                  "Preuves d'exécution et traçabilité",
                  "Visibilité pour les proches autorisés",
                  "Coordination pharmacie & partenaires",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle2 size={18} style={{ color: "#3BBFB8", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex items-center gap-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              <ShieldCheck size={15} />
              <span className="text-xs">Accès sécurisé · APS Québec</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="flex items-center justify-center p-6 sm:p-12">
            <div className="w-full" style={{ maxWidth: "440px" }}>
              <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium no-underline mb-8" style={{ color: "#6B8A90" }}>
                <ArrowLeft size={15} /> Retour au site
              </Link>

              {submitted ? (
                <div className="text-center py-8">
                  <div style={{ width: 68, height: 68, borderRadius: "50%", background: "#EFF9FA", border: "2px solid #0EA5AA", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <CheckCircle2 size={34} color="#0EA5AA" />
                  </div>
                  <h2 className="font-black text-2xl mb-3" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>Compte demandé !</h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#5A7A82" }}>
                    Merci <strong>{form.prenom}</strong>. Votre demande d'accès à l'espace <strong>{espaces.find(e => e.id === espace)?.title}</strong> a été reçue. Notre équipe activera vos accès et vous contactera à <strong>{form.email}</strong>.
                  </p>
                  <button onClick={() => { setSubmitted(false); setMode("login"); }} className="aps-btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                    Revenir à la connexion
                  </button>
                </div>
              ) : (
                <>
                  {/* Tabs */}
                  <div className="flex gap-1 p-1 rounded-xl mb-7" style={{ background: "#E8F0F1" }}>
                    <button onClick={() => { setMode("login"); setLoginNotice(false); }} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all"
                      style={{ background: mode === "login" ? "white" : "transparent", color: mode === "login" ? "#1A3F7A" : "#6B8A90", boxShadow: mode === "login" ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
                      <LogIn size={15} /> Se connecter
                    </button>
                    <button onClick={() => setMode("signup")} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all"
                      style={{ background: mode === "signup" ? "white" : "transparent", color: mode === "signup" ? "#1A3F7A" : "#6B8A90", boxShadow: mode === "signup" ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>
                      <UserPlus size={15} /> Créer un compte
                    </button>
                  </div>

                  <h1 className="font-black text-2xl mb-1.5" style={{ color: "#1A3F7A", fontFamily: "'DM Sans', sans-serif" }}>
                    {mode === "login" ? "Connexion à APS Connect" : "Créer votre compte APS"}
                  </h1>
                  <p className="text-sm mb-6" style={{ color: "#6B8A90" }}>
                    {mode === "login" ? "Accédez à votre espace de continuité des soins." : "Choisissez votre espace et créez votre accès."}
                  </p>

                  {/* Espace selector */}
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {espaces.map((e) => (
                      <button key={e.id} onClick={() => setEspace(e.id)} className="flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all text-center"
                        style={{ border: `1.5px solid ${espace === e.id ? "#F26419" : "#E0EAF4"}`, background: espace === e.id ? "#FFF6F1" : "white" }}>
                        <e.icon size={18} style={{ color: espace === e.id ? "#F26419" : "#6B8A90" }} />
                        <span className="text-xs font-semibold leading-tight" style={{ color: espace === e.id ? "#1A3F7A" : "#6B8A90" }}>{e.title.split(" ")[0]}</span>
                      </button>
                    ))}
                  </div>

                  {mode === "login" ? (
                    <form onSubmit={(e) => { e.preventDefault(); setLoginNotice(true); }}>
                      <div className="relative mb-3">
                        <span style={iconWrap}><Mail size={16} /></span>
                        <input style={input} type="email" placeholder="Courriel" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                      </div>
                      <div className="relative mb-2">
                        <span style={iconWrap}><Lock size={16} /></span>
                        <input style={{ ...input, paddingRight: "2.5rem" }} type={showPwd ? "text" : "password"} placeholder="Mot de passe" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                        <button type="button" onClick={() => setShowPwd(!showPwd)} style={{ position: "absolute", right: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "#9BAFB5", background: "none", border: "none", cursor: "pointer" }}>
                          {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <div className="text-right mb-5">
                        <span className="text-xs font-semibold" style={{ color: "#0EA5AA", cursor: "pointer" }}>Mot de passe oublié ?</span>
                      </div>
                      <button type="submit" className="aps-btn-orange" style={{ width: "100%", justifyContent: "center", padding: "0.8rem" }}>
                        Se connecter <ArrowRight size={16} />
                      </button>
                      {loginNotice && (
                        <div className="mt-4 rounded-lg p-3 text-xs leading-relaxed" style={{ background: "#EFF9FA", border: "1px solid #B8D8E8", color: "#1A3F7A" }}>
                          <strong>Activation en cours.</strong> L'accès sécurisé à votre espace est activé par votre gestionnaire APS. Pas encore de compte ?{" "}
                          <button onClick={() => setMode("signup")} style={{ color: "#F26419", fontWeight: 700, background: "none", border: "none", cursor: "pointer", padding: 0 }}>Créez-en un</button>.
                        </div>
                      )}
                    </form>
                  ) : (
                    <form name="aps-connect" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSignup}>
                      <input type="hidden" name="form-name" value="aps-connect" />
                      <input type="hidden" name="espace" value={espace} />
                      <div style={{ display: "none" }}><label>Ne pas remplir <input name="bot-field" /></label></div>

                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="relative">
                          <span style={iconWrap}><User size={16} /></span>
                          <input style={input} name="prenom" value={form.prenom} onChange={handleChange} placeholder="Prénom" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                        </div>
                        <div className="relative">
                          <input style={{ ...input, paddingLeft: "1rem" }} name="nom" value={form.nom} onChange={handleChange} placeholder="Nom" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                        </div>
                      </div>
                      <div className="relative mb-3">
                        <span style={iconWrap}><Mail size={16} /></span>
                        <input style={input} type="email" name="email" value={form.email} onChange={handleChange} placeholder="Courriel" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                      </div>
                      <div className="relative mb-3">
                        <span style={iconWrap}><Phone size={16} /></span>
                        <input style={input} type="tel" name="tel" value={form.tel} onChange={handleChange} placeholder="Téléphone" required onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                      </div>
                      {espace !== "patient" && (
                        <div className="relative mb-3">
                          <span style={iconWrap}><Building2 size={16} /></span>
                          <input style={input} name="organisation" value={form.organisation} onChange={handleChange} placeholder={espace === "pharmacie" ? "Nom de la pharmacie" : "Nom de l'établissement"} onFocus={(e) => (e.target.style.borderColor = "#0EA5AA")} onBlur={(e) => (e.target.style.borderColor = "#D0E4E6")} />
                        </div>
                      )}
                      <button type="submit" disabled={loading} className="aps-btn-orange" style={{ width: "100%", justifyContent: "center", padding: "0.8rem", marginTop: "0.5rem", opacity: loading ? 0.7 : 1 }}>
                        {loading ? "Envoi…" : <>Créer mon compte <ArrowRight size={16} /></>}
                      </button>
                      <p className="text-xs text-center mt-3" style={{ color: "#9BAFB5" }}>
                        Vos accès sont activés par l'équipe APS après vérification.
                      </p>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <APSFooter />
    </div>
  );
}
