/**
 * APS Services Pages — 6 pages dédiées pour chaque service APS Québec
 * Chaque export = une page service complète
 */

import APSServicePage from "@/components/APSServicePage";

// ─── 1. Livraison Last-Mile ───────────────────────────────────────────────────
export function APSLivraison() {
  return (
    <APSServicePage
      badge="Service APS — Livraison Last-Mile"
      title="Livraison de médicaments"
      titleHighlight="avec traçabilité complète"
      subtitle="Nos agents APS assurent la livraison sécurisée de médicaments directement aux résidents de vos RI, RPA et RTF — avec confirmation numérique, coordination pharmacie et suivi en temps réel."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-livraison-f2rA9LHXsj7QYgTK8DAsT7.webp"
      heroImageAlt="Agent APS livrant des médicaments à une résidente"
      stats={[
        { value: "98%", label: "Taux de livraison réussie" },
        { value: "< 4h", label: "Délai moyen de livraison" },
        { value: "100%", label: "Traçabilité numérique" },
        { value: "7j/7", label: "Service disponible" },
      ]}
      videoTitle="Comment fonctionne notre service de livraison"
      videoDescription="Découvrez comment nos agents APS coordonnent avec vos pharmacies partenaires pour assurer une livraison sécurisée et traçable à chaque résident."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-livraison-f2rA9LHXsj7QYgTK8DAsT7.webp"
      features={[
        { icon: "📦", title: "Coordination pharmacie", description: "Liaison directe avec vos pharmacies partenaires pour la préparation et la remise des médicaments." },
        { icon: "📱", title: "Confirmation numérique", description: "Preuve d'exécution digitale avec signature électronique et photo à la livraison." },
        { icon: "🗺️", title: "Suivi en temps réel", description: "Tableau de bord de suivi des livraisons accessible à votre équipe de gestion." },
        { icon: "🔒", title: "Chaîne de froid", description: "Respect des protocoles de conservation pour les médicaments sensibles à la température." },
        { icon: "📋", title: "Rapport de livraison", description: "Rapport détaillé de chaque livraison transmis automatiquement à votre équipe." },
        { icon: "🚨", title: "Alertes d'exception", description: "Notification immédiate en cas d'absence du résident ou de problème de livraison." },
        { icon: "🤝", title: "Remise personnalisée", description: "Nos agents s'assurent que le résident comprend sa médication et répond à ses questions." },
        { icon: "📊", title: "Statistiques mensuelles", description: "Rapport mensuel de performance des livraisons pour votre résidence." },
      ]}
      steps={[
        { number: "1", title: "Commande transmise", description: "La pharmacie partenaire prépare la commande et notifie l'agent APS assigné à votre résidence." },
        { number: "2", title: "Livraison sécurisée", description: "L'agent APS récupère et livre les médicaments directement au résident avec confirmation numérique." },
        { number: "3", title: "Rapport automatique", description: "Un rapport de livraison est automatiquement transmis à votre équipe et archivé dans le système Vaistat." },
      ]}
      benefitsTitle="Pourquoi choisir notre service de livraison ?"
      benefits={[
        { icon: "⏱️", title: "Gain de temps", description: "Libérez votre personnel soignant des tâches logistiques de livraison." },
        { icon: "🛡️", title: "Sécurité accrue", description: "Réduisez les erreurs de médication grâce à la traçabilité complète." },
        { icon: "😊", title: "Satisfaction résident", description: "Vos résidents reçoivent leurs médicaments sans se déplacer." },
        { icon: "💰", title: "Coût optimisé", description: "Inclus dans votre formule APS — aucun frais supplémentaire par livraison." },
      ]}
      testimonial={{
        quote: "Depuis qu'on utilise le service de livraison APS, nos infirmières passent moins de temps à gérer la logistique et plus de temps auprès des résidents. C'est un gain énorme pour nous.",
        author: "Marie-Claude Tremblay",
        role: "Directrice, Résidence Les Érables, Montréal",
      }}
      ctaTitle="Prêt à simplifier vos livraisons de médicaments ?"
      ctaDescription="Rejoignez les résidences partenaires APS et offrez à vos résidents un service de livraison sécurisé, traçable et humain."
      color="teal"
    />
  );
}

// ─── 2. Accompagnement patient ────────────────────────────────────────────────
export function APSAccompagnement() {
  return (
    <APSServicePage
      badge="Service APS — Accompagnement Patient"
      title="Accompagnement médical"
      titleHighlight="sans rendez-vous manqués"
      subtitle="Nos agents APS accompagnent vos résidents à leurs rendez-vous médicaux — transport sécurisé, présence bienveillante et coordination avec les équipes soignantes pour réduire les no-shows à zéro."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-accompagnement-cFxqqQRDfsMHqqRyWurD4L.webp"
      heroImageAlt="Agent APS accompagnant une résidente à la clinique"
      stats={[
        { value: "400K+", label: "RDV manqués/an au Québec" },
        { value: "92%", label: "Réduction des no-shows" },
        { value: "100%", label: "Agents formés en premiers soins" },
        { value: "24h", label: "Préavis de réservation" },
      ]}
      videoTitle="Accompagnement patient — Comment ça marche"
      videoDescription="Voyez comment nos agents APS assurent un accompagnement humain et professionnel pour chaque rendez-vous médical de vos résidents."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-accompagnement-cFxqqQRDfsMHqqRyWurD4L.webp"
      features={[
        { icon: "🚗", title: "Transport coordonné", description: "Organisation du transport adapté ou accompagnement en véhicule selon les besoins du résident." },
        { icon: "👥", title: "Présence bienveillante", description: "L'agent reste aux côtés du résident pendant toute la durée du rendez-vous." },
        { icon: "📝", title: "Compte-rendu médical", description: "Transmission du compte-rendu du rendez-vous à l'équipe soignante de la résidence." },
        { icon: "📅", title: "Planification proactive", description: "Rappels automatiques et confirmation des rendez-vous 48h à l'avance." },
        { icon: "🗣️", title: "Interprétation", description: "Agents bilingues disponibles pour les résidents allophones." },
        { icon: "🏥", title: "Coordination clinique", description: "Liaison directe avec les cliniques et médecins partenaires du réseau APS." },
        { icon: "🔄", title: "Suivi post-RDV", description: "Vérification du bien-être du résident après chaque rendez-vous médical." },
        { icon: "📊", title: "Tableau de bord", description: "Suivi en temps réel de tous les accompagnements de votre résidence." },
      ]}
      steps={[
        { number: "1", title: "Demande d'accompagnement", description: "Votre équipe soumet une demande d'accompagnement via l'app APS Connect 24h à l'avance." },
        { number: "2", title: "Agent assigné", description: "Un agent APS formé est assigné et contacte le résident pour confirmer le rendez-vous et les détails." },
        { number: "3", title: "Rapport transmis", description: "Après le rendez-vous, l'agent transmet un compte-rendu complet à votre équipe soignante." },
      ]}
      benefitsTitle="Les bénéfices pour votre résidence"
      benefits={[
        { icon: "📉", title: "Moins de no-shows", description: "Réduisez drastiquement les rendez-vous manqués et leurs coûts associés." },
        { icon: "👩‍⚕️", title: "Personnel libéré", description: "Vos infirmières et préposés se concentrent sur les soins directs." },
        { icon: "❤️", title: "Résident rassuré", description: "Chaque résident est accompagné avec dignité et bienveillance." },
        { icon: "📋", title: "Traçabilité complète", description: "Historique de tous les accompagnements archivé dans Vaistat." },
      ]}
      testimonial={{
        quote: "Nos résidents se sentent beaucoup plus en confiance depuis qu'ils ont un agent APS qui les accompagne. On a réduit nos rendez-vous manqués de 85% en 3 mois.",
        author: "Jean-François Bouchard",
        role: "Coordonnateur de soins, RPA Les Jardins, Québec",
      }}
      ctaTitle="Éliminez les rendez-vous manqués dans votre résidence"
      ctaDescription="Offrez à vos résidents un accompagnement humain et professionnel pour chaque rendez-vous médical."
      color="teal"
    />
  );
}

// ─── 3. Soutien à la sortie d'hôpital ────────────────────────────────────────
export function APSSortieHopital() {
  return (
    <APSServicePage
      badge="Service APS — Transition Hospitalière"
      title="Soutien à la sortie"
      titleHighlight="d'hôpital sécurisée"
      subtitle="APS assure la transition entre l'hôpital et le retour à domicile ou en résidence — coordination des soins post-hospitaliers, accompagnement physique et suivi dans les 72h critiques après la sortie."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-sortie-hopital-gAGYDrvefNAR4LN2aB7xn8.webp"
      heroImageAlt="Agent APS aidant un patient à sortir de l'hôpital"
      stats={[
        { value: "30%", label: "Réhospitalisations évitées" },
        { value: "72h", label: "Suivi post-sortie garanti" },
        { value: "100%", label: "Coordination équipe soignante" },
        { value: "< 2h", label: "Délai d'intervention" },
      ]}
      videoTitle="Transition hospitalière — Notre protocole"
      videoDescription="Découvrez comment APS sécurise la période critique des 72 premières heures après la sortie d'hôpital pour réduire les réhospitalisations."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-sortie-hopital-gAGYDrvefNAR4LN2aB7xn8.webp"
      features={[
        { icon: "🏥", title: "Coordination hospitalière", description: "Liaison avec l'équipe hospitalière pour préparer la sortie et recevoir les instructions de soins." },
        { icon: "🚐", title: "Transport médicalisé", description: "Organisation du transport adapté depuis l'hôpital jusqu'à la résidence ou au domicile." },
        { icon: "💊", title: "Médication post-sortie", description: "Récupération et remise des nouvelles ordonnances, explication de la médication au résident." },
        { icon: "📋", title: "Plan de soins transmis", description: "Transmission du plan de soins post-hospitalier à l'équipe soignante de la résidence." },
        { icon: "📞", title: "Suivi 72h", description: "Appels de suivi quotidiens pendant les 72 premières heures critiques après la sortie." },
        { icon: "🔔", title: "Alertes précoces", description: "Détection des signes de détérioration et escalade rapide vers l'équipe médicale." },
        { icon: "👨‍👩‍👧", title: "Communication famille", description: "Mise à jour régulière de la famille sur l'état de santé du résident post-sortie." },
        { icon: "📊", title: "Rapport de transition", description: "Rapport complet de la transition transmis au médecin traitant et à la résidence." },
      ]}
      steps={[
        { number: "1", title: "Notification de sortie", description: "L'hôpital ou la famille notifie APS de la date de sortie prévue — idéalement 24h à l'avance." },
        { number: "2", title: "Accompagnement physique", description: "L'agent APS se présente à l'hôpital, accompagne le patient et assure son installation sécurisée." },
        { number: "3", title: "Suivi post-sortie", description: "Suivi quotidien pendant 72h avec rapport transmis à l'équipe soignante et à la famille." },
      ]}
      benefitsTitle="Pourquoi ce service est critique"
      benefits={[
        { icon: "📉", title: "Moins de réhospitalisations", description: "Les 72h post-sortie sont les plus à risque — notre suivi les sécurise." },
        { icon: "🤝", title: "Continuité des soins", description: "Aucune rupture dans le parcours de soins entre l'hôpital et la résidence." },
        { icon: "💙", title: "Sérénité pour la famille", description: "Les proches sont informés et rassurés à chaque étape de la transition." },
        { icon: "⚡", title: "Réponse rapide", description: "Intervention en moins de 2h pour les sorties urgentes ou non planifiées." },
      ]}
      testimonial={{
        quote: "Grâce à APS, nos taux de réhospitalisation dans les 30 jours ont chuté de 28%. C'est un impact direct sur la qualité de vie de nos résidents et sur nos coûts opérationnels.",
        author: "Dr. Sophie Lavoie",
        role: "Médecin responsable, Centre de soins Les Pins, Laval",
      }}
      ctaTitle="Sécurisez les transitions hospitalières de vos résidents"
      ctaDescription="Rejoignez APS et réduisez significativement les réhospitalisations grâce à un suivi humain et structuré."
      color="orange"
    />
  );
}

// ─── 4. Services RI / RTF / RPA ───────────────────────────────────────────────
export function APSResidences() {
  return (
    <APSServicePage
      badge="Service APS — RI · RPA · RTF"
      title="Services adaptés à"
      titleHighlight="chaque type de résidence"
      subtitle="APS propose des services modulaires spécifiquement conçus pour les Ressources Intermédiaires (RI), les Résidences Privées pour Aînés (RPA) et les Ressources de Type Familial (RTF) — avec des agents formés aux particularités de chaque milieu."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-ri-rpa-rtf-DqwYWWGNkMDZCQw8N7Fz6k.webp"
      heroImageAlt="Agent APS animant une activité récréative en résidence"
      stats={[
        { value: "3", label: "Types de résidences couverts" },
        { value: "50+", label: "Résidences partenaires" },
        { value: "95%", label: "Satisfaction des résidents" },
        { value: "6+", label: "Années d'expertise" },
      ]}
      videoTitle="Services RI / RPA / RTF — Présentation complète"
      videoDescription="Découvrez comment APS adapte ses services aux besoins spécifiques de chaque type de résidence pour améliorer la qualité de vie des résidents."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-ri-rpa-rtf-DqwYWWGNkMDZCQw8N7Fz6k.webp"
      features={[
        { icon: "🎯", title: "Services RI", description: "Accompagnement spécialisé pour les résidents en ressources intermédiaires avec besoins de soutien modérés." },
        { icon: "🏠", title: "Services RPA", description: "Programme complet pour résidences privées pour aînés autonomes et semi-autonomes." },
        { icon: "👨‍👩‍👧", title: "Services RTF", description: "Soutien adapté aux ressources de type familial pour une intégration communautaire optimale." },
        { icon: "🎭", title: "Activités récréatives", description: "Organisation de sorties culturelles, activités sociales et programmes de loisirs adaptés." },
        { icon: "🧠", title: "Stimulation cognitive", description: "Ateliers de stimulation cognitive et programmes de prévention du déclin cognitif." },
        { icon: "🌿", title: "Bien-être global", description: "Programmes de bien-être physique, nutrition et santé mentale adaptés à chaque milieu." },
        { icon: "👥", title: "Lien communautaire", description: "Création de liens entre résidents et avec la communauté locale pour réduire l'isolement." },
        { icon: "📊", title: "Rapport de participation", description: "Suivi de la participation aux activités et rapport mensuel à la direction de la résidence." },
      ]}
      steps={[
        { number: "1", title: "Évaluation des besoins", description: "Notre équipe évalue les besoins spécifiques de votre résidence et de vos résidents pour personnaliser les services." },
        { number: "2", title: "Plan de services", description: "Nous créons un plan de services sur mesure adapté à votre type de résidence (RI, RPA ou RTF)." },
        { number: "3", title: "Déploiement et suivi", description: "Nos agents sont déployés selon le plan convenu, avec rapports mensuels et ajustements continus." },
      ]}
      benefitsTitle="Bénéfices pour votre résidence"
      benefits={[
        { icon: "😊", title: "Résidents épanouis", description: "Des résidents actifs, socialement connectés et épanouis dans leur milieu de vie." },
        { icon: "📈", title: "Taux d'occupation", description: "Une offre de services enrichie améliore votre attractivité et votre taux d'occupation." },
        { icon: "👩‍⚕️", title: "Personnel soulagé", description: "Vos équipes se concentrent sur les soins essentiels, APS gère l'accompagnement social." },
        { icon: "🏆", title: "Conformité MSSS", description: "Nos services vous aident à répondre aux exigences du MSSS en matière de qualité de vie." },
      ]}
      testimonial={{
        quote: "APS a transformé notre offre de services. Nos résidents participent beaucoup plus aux activités et les familles nous félicitent régulièrement pour la qualité de l'accompagnement.",
        author: "Lucie Gagnon",
        role: "Propriétaire, RTF La Maison Chaleureuse, Sherbrooke",
      }}
      ctaTitle="Enrichissez l'offre de services de votre résidence"
      ctaDescription="Rejoignez le réseau APS et offrez à vos résidents des services d'accompagnement adaptés à leur milieu de vie."
      color="teal"
    />
  );
}

// ─── 5. Santé mentale & bien-être ─────────────────────────────────────────────
export function APSSanteMentale() {
  return (
    <APSServicePage
      badge="Service APS — Santé Mentale & Bien-être"
      title="Briser l'isolement,"
      titleHighlight="recréer le lien humain"
      subtitle="Nos agents APS effectuent des visites régulières de bien-être pour détecter précocement les signes d'isolement, de dépression ou de détérioration cognitive — et maintenir le lien social essentiel à la santé mentale des aînés."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-sante-mentale-9spAECkFBmBFmcVq6E4kqF.webp"
      heroImageAlt="Agent APS en visite de bien-être avec une résidente"
      stats={[
        { value: "40%", label: "Aînés souffrent d'isolement" },
        { value: "2x", label: "Risque de démence si isolé" },
        { value: "95%", label: "Amélioration du bien-être" },
        { value: "1/sem", label: "Fréquence minimale de visite" },
      ]}
      videoTitle="Santé mentale des aînés — Notre approche"
      videoDescription="Découvrez comment nos agents APS créent des liens humains authentiques pour améliorer la santé mentale et le bien-être des résidents."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-sante-mentale-9spAECkFBmBFmcVq6E4kqF.webp"
      features={[
        { icon: "💙", title: "Visites de bien-être", description: "Visites régulières planifiées pour maintenir le lien social et évaluer l'état émotionnel du résident." },
        { icon: "🔍", title: "Détection précoce", description: "Formation spécialisée pour détecter les signes précoces de dépression, d'anxiété ou de déclin cognitif." },
        { icon: "📞", title: "Appels de vérification", description: "Appels téléphoniques réguliers entre les visites pour maintenir le contact et rassurer le résident." },
        { icon: "🎨", title: "Activités thérapeutiques", description: "Animation d'activités de stimulation cognitive et créative adaptées aux capacités du résident." },
        { icon: "👨‍👩‍👧", title: "Lien avec la famille", description: "Communication régulière avec les proches pour les tenir informés et les impliquer dans le soutien." },
        { icon: "🌱", title: "Programme de prévention", description: "Programme structuré de prévention de l'isolement basé sur les meilleures pratiques en gérontologie." },
        { icon: "🆘", title: "Escalade rapide", description: "Protocole d'escalade immédiate vers l'équipe soignante en cas de détresse psychologique détectée." },
        { icon: "📊", title: "Évaluation du bien-être", description: "Évaluation standardisée du bien-être à chaque visite avec suivi de l'évolution dans le temps." },
      ]}
      steps={[
        { number: "1", title: "Évaluation initiale", description: "L'agent APS réalise une évaluation initiale du bien-être et des besoins sociaux du résident." },
        { number: "2", title: "Plan de visites", description: "Un plan de visites personnalisé est établi selon les besoins — fréquence, activités, objectifs." },
        { number: "3", title: "Suivi et ajustement", description: "Rapports mensuels à l'équipe soignante avec ajustement du plan selon l'évolution du résident." },
      ]}
      benefitsTitle="L'impact sur la santé de vos résidents"
      benefits={[
        { icon: "🧠", title: "Santé cognitive", description: "La stimulation sociale régulière ralentit le déclin cognitif et réduit le risque de démence." },
        { icon: "😊", title: "Humeur améliorée", description: "Les résidents visitées régulièrement montrent une humeur significativement meilleure." },
        { icon: "🏥", title: "Moins d'hospitalisations", description: "La détection précoce réduit les hospitalisations d'urgence liées aux crises psychologiques." },
        { icon: "❤️", title: "Qualité de vie", description: "Un résident socialement connecté est un résident épanoui et en meilleure santé globale." },
      ]}
      testimonial={{
        quote: "Depuis les visites APS, j'ai vu une transformation chez plusieurs de nos résidents les plus isolés. Ils sourient plus, participent plus. C'est exactement ce dont ils avaient besoin.",
        author: "Isabelle Côté",
        role: "Infirmière chef, RI Les Tournesols, Trois-Rivières",
      }}
      ctaTitle="Investissez dans la santé mentale de vos résidents"
      ctaDescription="Le lien humain est le meilleur médicament. Rejoignez APS et offrez à vos résidents des visites de bien-être régulières et bienveillantes."
      color="orange"
    />
  );
}

// ─── 6. Soins à domicile & IoT ────────────────────────────────────────────────
export function APSIoT() {
  return (
    <APSServicePage
      badge="Service APS — Soins à Domicile & IoT"
      title="Surveillance connectée,"
      titleHighlight="soins proactifs"
      subtitle="APS intègre des dispositifs IoT de surveillance de santé dans vos résidences — capteurs de chute, tensiomètres connectés, oxymètres — avec alertes en temps réel et tableau de bord centralisé pour votre équipe soignante."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-iot-XEBtB2vb7dFh8MSaSZr9ij.webp"
      heroImageAlt="Centre de surveillance IoT APS avec dashboards de santé"
      stats={[
        { value: "< 30s", label: "Délai d'alerte en cas d'urgence" },
        { value: "24/7", label: "Surveillance continue" },
        { value: "99.9%", label: "Disponibilité du système" },
        { value: "0", label: "Installation requise par vos équipes" },
      ]}
      videoTitle="IoT & Surveillance connectée — Démonstration"
      videoDescription="Voyez comment notre plateforme IoT intégrée à Vaistat permet une surveillance proactive et des interventions rapides dans vos résidences."
      videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoThumbnail="https://d2xsxph8kpxj0f.cloudfront.net/310419663030288604/HXuFGBWRqHSK5tSDU6hSzo/aps-service-iot-XEBtB2vb7dFh8MSaSZr9ij.webp"
      features={[
        { icon: "📡", title: "Capteurs de chute", description: "Détection automatique des chutes avec alerte immédiate à l'équipe soignante et à la famille." },
        { icon: "❤️", title: "Monitoring cardiaque", description: "Surveillance continue de la fréquence cardiaque et de la saturation en oxygène." },
        { icon: "🩺", title: "Tensiomètre connecté", description: "Mesures automatiques de la tension artérielle avec historique et alertes hors normes." },
        { icon: "🌡️", title: "Température corporelle", description: "Surveillance de la température avec détection précoce des infections et fièvres." },
        { icon: "📊", title: "Dashboard centralisé", description: "Tableau de bord en temps réel accessible à votre équipe soignante depuis n'importe quel appareil." },
        { icon: "📱", title: "App famille", description: "Les proches peuvent consulter les données de santé en temps réel depuis l'application Vaistat." },
        { icon: "🤖", title: "IA prédictive", description: "Algorithmes d'IA pour détecter les tendances et prédire les risques avant qu'ils deviennent critiques." },
        { icon: "🔧", title: "Installation clé en main", description: "Nos techniciens installent et configurent tous les dispositifs — aucune action requise de votre équipe." },
      ]}
      steps={[
        { number: "1", title: "Audit de la résidence", description: "Notre équipe technique évalue les besoins en surveillance et propose un plan d'équipement adapté." },
        { number: "2", title: "Installation & formation", description: "Installation des dispositifs IoT et formation de votre équipe à l'utilisation du dashboard Vaistat." },
        { number: "3", title: "Surveillance & alertes", description: "Surveillance 24/7 avec alertes automatiques et rapports de santé hebdomadaires pour chaque résident." },
      ]}
      benefitsTitle="La technologie au service des soins"
      benefits={[
        { icon: "⚡", title: "Réponse ultra-rapide", description: "Alertes en moins de 30 secondes pour les situations d'urgence détectées par les capteurs." },
        { icon: "🔮", title: "Soins proactifs", description: "Anticipez les problèmes de santé avant qu'ils deviennent des urgences coûteuses." },
        { icon: "📉", title: "Moins d'hospitalisations", description: "La surveillance précoce réduit significativement les hospitalisations d'urgence." },
        { icon: "🛡️", title: "Conformité LPRPDE", description: "Toutes les données de santé sont chiffrées AES-256 et conformes à la réglementation canadienne." },
      ]}
      testimonial={{
        quote: "Le système IoT d'APS nous a permis de détecter 3 situations critiques en 2 mois avant qu'elles ne deviennent des urgences. C'est une technologie qui sauve des vies.",
        author: "Dr. Marc Pelletier",
        role: "Médecin responsable, RPA Horizon, Longueuil",
      }}
      ctaTitle="Passez à la surveillance intelligente de vos résidents"
      ctaDescription="Intégrez la technologie IoT dans votre résidence et offrez à vos résidents et à leurs familles une tranquillité d'esprit totale."
      color="teal"
    />
  );
}
