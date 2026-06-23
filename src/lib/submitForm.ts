/* ============================================================
   Soumission universelle — Web3Forms
   Fonctionne sur Netlify, GitHub Pages, tout hébergeur statique.

   SETUP :
   1. Va sur https://web3forms.com
   2. Entre infos@aps-qc.ca → reçois ta clé par email
   3. Remplace YOUR_ACCESS_KEY_HERE par la vraie clé

   La clé est publique (elle identifie l'adresse destinataire,
   elle ne donne aucun accès à ton compte).
   ============================================================ */

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export interface FormPayload {
  [key: string]: string;
}

export async function submitForm(
  formName: string,
  data: FormPayload
): Promise<void> {
  const payload = {
    access_key: WEB3FORMS_KEY,
    subject: `[APS Québec] Nouveau message — ${formName}`,
    from_name: "APS Québec — Site web",
    botcheck: "",
    ...data,
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = await res.json();
  if (!json.success) throw new Error(json.message || "Erreur d'envoi");
}
