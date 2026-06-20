/* ============================================================
   APS Québec — Banque d'images (une image unique par usage)
   Source : Unsplash (CDN images.unsplash.com)
   ============================================================ */

const W = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const IMG = {
  // Hero & génériques
  hero:        W("1576091160550-2173dba999ef", 1400), // médecin + patient, lien humain
  about:       W("1551076805-e1869033e561", 1200),     // équipe de soins à domicile
  devenirAps:  W("1593115057322-e94b77572f20", 1200),  // agent terrain / livreur
  partenariat: W("1521791136064-7986c2920216", 1200),  // poignée de main, partenariat

  // Services (6) — chacun unique
  serviceDecharge:      W("1505751172876-fa1923c5c528"),  // consultation aîné / sortie
  serviceAccompagnement:W("1666214280557-f1b5022eb634"),  // infirmière + aîné
  serviceLivraison:     W("1584515933487-779824d29309"),  // livraison médicale
  serviceEchantillons:  W("1576765608535-5f04d1e3f289"),  // laboratoire / échantillons
  serviceVisites:       W("1576091160399-112ba8d25d1d"),  // main réconfort aîné
  serviceMonitoring:    W("1581595220892-b0739db3ba8c"),  // monitoring connecté

  // Pour qui (5) — chacun unique
  segPharmacie:  W("1581056771107-24ca5f033842"),  // pharmacie / médicaments
  segResidence:  W("1532938911079-1b06ac7ceec7"),  // domicile / résidence
  segDomicile:   W("1612531385446-f7e6d131e1d0"),  // pharmacien comptoir / soins
  segHopital:    W("1538108149393-fbbd81895907"),  // bâtiment hôpital
  segFamille:    W("1516841273335-e39b37888115"),  // famille / aîné

  // Technologie
  tech:    W("1631815589968-fdb09a223b1e", 1200),  // technologie santé
  techApp: W("1579684385127-1ef15d508118", 1000),  // médecin + tablette
};
