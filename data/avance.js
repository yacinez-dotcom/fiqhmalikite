/* ════════════════════════════════════════════════════════
   BRIQUE: Données — Niveau Avancé (avance.js)
   Sources : Risāla Ibn Abī Zayd · Mukhtasar Khalīl · Matn Ibn Āshir · DM.fr
   Structure : 7 sujets — ST-1 complet, ST-2 à ST-4 squelettes
   ════════════════════════════════════════════════════════ */

const AVANCE = {
  id: 'avance',
  label: 'Avancé',
  arabicLabel: 'المستوى الثالث',
  levelColor: '#2A5080',
  source: 'Risāla Ibn Abī Zayd · Mukhtasar Khalīl · Matn Ibn Āshir · doctrine-malikite.fr',
  description: 'Contrats avancés, droit successoral, droit judiciaire et pénal islamique, et spiritualité selon le Matn d\'Ibn Āshir.',

  levelBadge: {
    id: 'badge-avance-or',
    title: 'Érudit Avancé',
    arabicTitle: 'الفَقِيهُ المُتَقَدِّم',
    icon: 'star8',
    color: 'gold',
    unlockCondition: 'Obtenir ≥ 85 % de moyenne sur l\'ensemble des questionnaires du niveau Avancé'
  },

  subjects: [

    /* ═══ Ijāra (الإِجَارَة) وSharika (الشَّرِكَة) وal-muḍāraba (المُضَارَبَة) ═══ */
    {
      id: "ijara",
      title: "Contrats de Travail et Sociétés",
      arabicTitle: "al-ijāra (الإِجَارَة) وal-sharika (الشَّرِكَة) وal-muḍāraba (المُضَارَبَة)",
      icon: "handshake",
      description: "Location, sociétés et commandite islamique : les contrats qui structurent la vie économique selon les règles du Mukhtasar Khalīl.",
      source: "Risāla Ibn Abī Zayd ch.37-40 · Mukhtasar Khalīl pp.165-212 · doctrine-malikite.fr Finance",
      badge: {
        id: 'badge-avance-ijara',
        title: "Expert des Contrats",
        arabicTitle: "فَقِيهُ العُقُود",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Ijāra (الإِجَارَة) وSharika (الشَّرِكَة) وal-muḍāraba (المُضَارَبَة)"
      },

      lessons: [
      {
        id: "ija-01",
        title: "Ijāra (الإِجَارَة) — Le Contrat de Location et de Prestation",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'Ijāra (الإِجَارَة) est le contrat par lequel on loue un bien (عَيْن) ou on rémunère un service (عَمَل). C'est l'un des contrats les plus utilisés dans la vie quotidienne. Le Mukhtasar Khalīl (pp. 165-185) et la Risāla d'Ibn Abī Zayd (ch. 37) en détaillent les règles avec précision."},
        {"t": "h", "v": "Définition et types"},
        {"t": "p", "v": "L'Ijāra (الإِجَارَة) est le transfert temporaire de l'usufruit (المَنفَعَة) d'un bien ou d'un service contre rémunération. Elle se divise en deux types : (1) إِجَارَةُ العَيْن — location d'un bien (maison, voiture, terrain) ; (2) إِجَارَةُ الذِّمَّة — prestation de services (travail, expertise, transport)."},
        {"t": "h", "v": "أَركَان Ijāra (الإِجَارَة) — Piliers du contrat"},
        { t:'ul', v:[
          "<strong>1. المُتَعَاقِدَان :</strong> bailleur (مُؤجِّر) et locataire (مُستَأجِر) — tous deux capables juridiquement.",
          "<strong>2. المَنفَعَة :</strong> l'usage doit être licite, connu et réalisable.",
          "<strong>3. الأُجرَة :</strong> le loyer/salaire doit être connu, licite et précisé.",
          "<strong>4. الصِّيغَة :</strong> accord explicite entre les parties.",
          "Mukhtasar Khalīl : l'Ijāra (الإِجَارَة) est valide même si le paiement est différé — Salam (السَّلَم)."
        ] },
        {"t": "h", "v": "شُرُوط المَنفَعَة — Conditions de l'usage loué"},
        { t:'ul', v:[
          "L'usage doit être licite — pas de location d'une maison pour la vente d'alcool.",
          "L'usage doit être connu et délimité (durée ou quantité de travail précisée).",
          "L'usage doit être réalisable à la date prévue.",
          "L'objet loué doit être utilisable sans être consommé (les aliments ne se louent pas).",
          "Mukhtasar Khalīl : la location d'une boutique est valide même si on ignore l'usage précis qui en sera fait — au bailleur de stipuler des restrictions s'il en veut."
        ] },
        {"t": "h", "v": "Obligations du bailleur et du locataire"},
        { t:'ul', v:[
          "<strong>Bailleur (مُؤجِّر) :</strong> livrer le bien en état d'utilisation, assurer les réparations structurelles (الأَصل), payer les taxes liées à la propriété.",
          "<strong>Locataire (مُستَأجِر) :</strong> payer le loyer, utiliser le bien conformément à l'accord, assurer l'entretien courant (الاستِعمَال المُعتَاد).",
          "Mukhtasar Khalīl : si la maison louée s'effondre partiellement → le contrat est annulé pour la partie effondrée, le locataire paye en proportion.",
          "Le locataire ne peut sous-louer sans accord du bailleur selon la position malikite dominante."
        ] },
        {"t": "h", "v": "الاستِئجَار على الأَعمَال — Prestation de services"},
        { t:'ul', v:[
          "<strong>Ajīr Khāṣṣ (الأَجِير الخَاصّ) :</strong> employé à plein temps (exclusif) — responsable seulement en cas de faute ou négligence.",
          "<strong>Ajīr Mushtarak (الأَجِير المُشتَرَك) :</strong> artisan ou prestataire indépendant (médecin, tailleur, transporteur) — responsable de la détérioration même sans faute selon certains savants malikites.",
          "Mukhtasar Khalīl : « وَضَمَن الأَجِيرُ المُشتَرَك » — l'artisan indépendant garantit son travail.",
          "Cette distinction est fondamentale pour déterminer la responsabilité en cas de dommage."
        ] },
        { t:'ar', v:"al-ijāra (الإِجَارَة)ُ عَقدٌ لَازِمٌ مِن الجَانِبَيْن", n:"« L'al-ijāra (الإِجَارَة) est un contrat engageant pour les deux parties. » — Mukhtasar Khalīl" },
        {"t": "note", "v": "Application contemporaine : le contrat de travail (CDI, CDD), le bail d'habitation et commercial islamiques suivent ces mêmes principes. La رَحمَة (miséricorde) dans les relations employeur-employé est un principe transversal recommandé par doctrine-malikite.fr."}
        ]
      },
      {
        id: "ija-02",
        title: "Sharika (الشَّرِكَة) — Les Sociétés et Partenariats Islamiques",
        status: 'available',
        content: [
        {"t": "lead", "v": "La شَرِكَة (société, partenariat) est le contrat par lequel deux personnes ou plus mettent en commun capitaux et/ou travail pour partager les bénéfices et les pertes. Le Mukhtasar Khalīl (pp. 185-200) en distingue plusieurs types avec des règles précises."},
        {"t": "h", "v": "Définition et fondement"},
        { t:'ar', v:"al-sharika (الشَّرِكَة)ُ إِذنٌ فِي التَّصَرُّفِ لَهَا مَعَ أَمْوَالِهمَا", n:"« La شَرِكَة est l'autorisation mutuelle de disposer des capitaux communs. » — Mukhtasar Khalīl, début du chapitre" },
        {"t": "h", "v": "Types de شَرِكَة en rite malikite"},
        { t:'ul', v:[
          "<strong>1. Sharika al-ʿInān (شَرِكَةُ العِنَان) :</strong> chaque associé apporte un capital et partage les bénéfices en proportion. La plus courante.",
          "<strong>2. Sharika al-Mufāwaḍa (شَرِكَةُ المُفَاوَضَة) :</strong> associés totalement égaux en capital, travail, profits et dettes — très stricte.",
          "<strong>3. Sharika al-Abdān (شَرِكَةُ الأَبدَان) :</strong> association de travail sans capital (deux artisans partagent leurs chantiers) — permise en rite malikite, contrairement aux chāfiʿites.",
          "<strong>4. Sharika al-Wujūh (شَرِكَةُ الوُجُوه) :</strong> association de crédit/réputation (acheter à crédit et partager les bénéfices) — divergence interne à l'école malikite."
        ] },
        {"t": "h", "v": "Conditions de validité"},
        { t:'ul', v:[
          "Les deux associés doivent être capables juridiquement (بَالِغَان عَاقِلَان).",
          "Le capital doit être connu et identifié.",
          "Sharika al-ʿInān (شَرِكَةُ العِنَان) : les capitaux en or + or OU argent + argent → valides. Or + argent → valides APRÈS conversion en une seule monnaie.",
          "Mukhtasar Khalīl : or + argent sans conversion préalable → شَرِكَة invalide car elle génère du ربا.",
          "Les bénéfices se partagent selon l'accord stipulé. Les pertes se répartissent toujours en proportion du capital apporté — on ne peut pas stipuler le contraire."
        ] },
        {"t": "h", "v": "Pouvoirs mutuels des associés"},
        { t:'ul', v:[
          "Chaque associé a implicitement le pouvoir de disposer du capital commun dans le cadre de la société.",
          "Un associé peut acheter à crédit, vendre à terme, embaucher — tous actes dans l'objet social.",
          "Un associé ne peut pas : donner en aumône le capital commun, prêter à titre gratuit, faire une هِبَة — sauf accord explicite de l'autre.",
          "Mukhtasar Khalīl : si un associé commet un excès → il en répond personnellement."
        ] },
        {"t": "h", "v": "Dissolution et liquidation"},
        { t:'ul', v:[
          "La شَرِكَة se dissout par : accord mutuel, décès d'un associé, incapacité, faillite, terme prévu.",
          "À la dissolution : on évalue le capital + bénéfices, on déduit les dettes, on partage selon les accords.",
          "Si l'un des associés a commis une faute → il indemnise avant le partage.",
          "Application contemporaine : la SARL, la SAS peuvent être structurées selon ces principes pour respecter la شَرِكَة islamique."
        ] },
        {"t": "note", "v": "Spécificité malikite importante : Sharika al-Abdān (شَرِكَةُ الأَبدَان) (société de travail sans capital) est permise — deux avocats, deux médecins ou deux artisans peuvent s'associer et partager leurs honoraires. L'école chāfiʿite l'interdit car il n'y a pas de capital mesurable."}
        ]
      },
      {
        id: "ija-03",
        title: "al-muḍāraba (المُضَارَبَة) — La Commandite Islamique",
        status: 'available',
        content: [
        {"t": "lead", "v": "La al-muḍāraba (المُضَارَبَة) Rabb al-Māl (رَبّ المَال) et un géMuḍārib (المُضَارِب) qui investit le capital avec son travail. Les bénéfices sont partagés selon l'accord, les pertes incombent uniquement au capital. C'est le fondement historique des échanges commerciaux à longue distance dans la civilisation islamique."},
        {"t": "h", "v": "Définition et nature juridique"},
        {"t": "p", "v": "La al-muḍāraba (المُضَارَبَة) combine deux réalités juridiques : Rabb al-Māl (رَبّ المَال), c'est une mise à disposition de capital (شَرِكَة في الرِّبح) ; pour le مُضَارِب, c'est une prestation de travail rémunérée par une part du bénéfice. C'est le système qui a permis les grandes routes commerciales islamiques."},
        {"t": "h", "v": "Conditions essentielles"},
        { t:'ul', v:[
          "Le capital doit être numérique (argent, or) — pas en nature selon la majorité des malikites.",
          "La part de bénéfice du مُضَارِب doit être une fraction connue (ex : 1/3, 1/2, 2/3) — pas une somme fixe.",
          "Rabb al-Māl (رَبّ المَال) sauf faute ou négligence du مُضَارِب.",
          "Le مُضَارِب ne reçoit rien si pas de bénéfice — son travail est son «risque».",
          "Mukhtasar Khalīl : le مُضَارِب peut stipuler une avance sur bénéfices (خَرج) pour ses frais de voyage."
        ] },
        {"t": "h", "v": "Pouvoirs et limites du مُضَارِب"},
        { t:'ul', v:[
          "Liberté d'action dans le commerce général sauf restriction stipulée.",
          "Peut : acheter, vendre, louer, embaucher dans le cadre de l'objet commercial.",
          "Ne peut PAS sans accord : faire des dons, prêter, s'associer avec un tiers avec le capital de la al-muḍāraba (المُضَارَبَة).",
          "Mukhtasar Khalīl : Muḍārib (المُضَارِب) voyageant à l'étranger avec le capital → ses frais de voyage sont à sa charge (pas sur le capital) sauf accord contraire.",
          "En cas de faute ou négligence : le مُضَارِب indemnise les pertes sur son patrimoine propre."
        ] },
        {"t": "h", "v": "Fin de la al-muḍāraba (المُضَارَبَة)"},
        { t:'ul', v:[
          "Elle prend fin par : accord mutuel, terme prévu, décès, Rabb al-Māl (رَبّ المَال).",
          "À la fin : on évalue le capital + bénéfices, on soustrait les éventuelles pertes, puis on distribue.",
          "Si l'entreprise est en cours (بضاعة non liquidée) → on peut forcer la liquidation.",
          "Le bénéfice n'est acquis définitivement qu'après liquidation complèMuḥāsaba (المُحَاسَبَة)."
        ] },
        {"t": "h", "v": "Application contemporaine"},
        {"t": "p", "v": "La al-muḍāraba (المُضَارَبَة) est le fondement des fonds d'investissement islamiques (الصَنَادِيق Islām (الإِسلَام)ِيَّة) et de nombreux produits bancaires islamiques. Le déRabb al-Māl (رَبّ المَال) confie son argent à la banque (مُضَارِب) qui l'investit et partage les bénéfices selon un ratio convenu. Doctrine-malikite.fr confirme cette analogie dans sa section Finance Islamique."},
        { t:'ar', v:"القِرَاضُ جَائِزٌ بِكِتَابِ اللَّهِ وَسُنَّةِ نَبِيِّهِ وَإِجمَاعِ المُسلِمِينَ", n:"« La al-muḍāraba (المُضَارَبَة) (قِرَاض) est licite par le Coran, la Sunna et le consensus des Muslims. » — Ibn Rushd, Bidāyat al-Mujtahid" },
        {"t": "note", "v": "Terme malikite : Qirāḍ (القِرَاض) pour désigner la al-muḍāraba (المُضَارَبَة) — c'est un terme propre à l'école malikite (et hanafite). L'école chāfiʿite utilise al-muḍāraba (المُضَارَبَة). Les deux termes désignent le même contrat."}
        ]
      },
      {
        id: "ija-04",
        title: "Wakāla (الوَكَالَة) وWadīʿa (الوَدِيعَة) — Mandat et Dépôt",
        status: 'available',
        content: [
        {"t": "lead", "v": "Deux contrats essentiels de la vie quotidienne : la وَكَالَة (mandat, délégation de pouvoir) et la وَدِيعَة (dépôt, garde). Le Mukhtasar Khalīl les traite dans la suite du chapitre des transactions."},
        {"t": "h", "v": "Wakāla (الوَكَالَة) — Le Mandat"},
        {"t": "p", "v": "La وَكَالَة Muwakkil (المُوَكِّل) délègue à Wakīl (الوَكِيل) le pouvoir d'agir en son nom pour un acte juridique déterminé."},
        { t:'ul', v:[
          "<strong>Muwakkil (المُوَكِّل) :</strong> doit avoir la capacité juridique pour accomplir l'acte lui-même.",
          "<strong>Condition de l'acte délégable :</strong> tout acte licite que le mandant peut accomplir peut être délégué (vente, mariage, poursuite judiciaire, paiement…).",
          "<strong>Wakīl (الوَكِيل) :</strong> capacité de discernement (يُشتَرَط العَقل) — peut être un enfant mumayyiz pour les actes bénéfiques.",
          "Le وَكِيل agit dans les limites du mandat — tout excès engage sa responsabilité personnelle.",
          "Mukhtasar Khalīl : « لَا يُقِرُّ Wakīl (الوَكِيل)ٌ بِدَيْنٍ لِمَن لَا يَتَّهَمُهُ » — le mandataire ne peut reconnaître une dette pour son mandant sauf en présence d'une preuve."
        ] },
        {"t": "h", "v": "Responsabilité du وَكِيل"},
        { t:'ul', v:[
          "Le وَكِيل est un امين (dépositaire de confiance) — pas responsable de la perte ou destruction sauf faute ou négligence.",
          "S'il dépasse les limites du mandat → responsable du préjudice causé.",
          "S'il agit dans les limites mais commet une erreur → non responsable (c'est le risque du mandant).",
          "Révocation du mandat : le mandant peut le révoquer à tout moment sauf si le mandat est lié à un droit d'un tiers."
        ] },
        {"t": "h", "v": "Wadīʿa (الوَدِيعَة) — Le Dépôt"},
        {"t": "p", "v": "La وَدِيعَة est le contrat par lequel une personne (المُودِع) confie un bien à une autre (المُودَع عِندَه) pour le garder sans rémunération."},
        { t:'ul', v:[
          "La وَدِيعَة est un contrat de bienfaisance (تَبَرُّع) — le gardien n'est pas rémunéré.",
          "<strong>Responsabilité du gardien :</strong> il est امين — pas responsable de la perte ou détérioration sauf faute, négligence ou utilisation sans permission.",
          "S'il utilise le dépôt sans permission → devient responsable même de la destruction accidentelle.",
          "S'il mélange le dépôt à ses propres biens → responsable de la perte.",
          "Mukhtasar Khalīl : si le gardien est en voyage et ne peut pas remettre le dépôt → il le laisse en garde auprès d'une personne de confiance.",
          "Preuve de la restitution : la charge de la preuve de la restitution incombe au gardien (il doit prouver qu'il a rendu le dépôt)."
        ] },
        {"t": "h", "v": "Juʿl (الجُعل) — La Prime de Résultat"},
        {"t": "p", "v": "Le جُعل est le contrat par lequel on promet une récompense pour la réalisation d'un résultat déterminé (retrouver un objet perdu, réaliser un travail spécifique). Contrairement à l'Ijāra (الإِجَارَة), la rémunération n'est due qu'au résultat."},
        { t:'ul', v:[
          "Exemple classique : « Qui retrouve mon chameau perdu reçoit telle somme. »",
          "La rémunération n'est due qu'en cas de succès.",
          "Le جُعل peut être offert à une personne déterminée ou au public.",
          "Permis en rite malikite — doctrine-malikite.fr le confirme dans les contrats islamiques autorisés."
        ] },
        {"t": "note", "v": "Application contemporaine : les mandats bancaires, les procurations légales, les comptes séquestres (escrow) Wakāla (الوَكَالَة) Wadīʿa (الوَدِيعَة). Les coffres-forts bancaires sont des وَدِيعَة ; les fonds de placement sont des وَدِيعَة ou al-muḍāraba (المُضَارَبَة) selon leur structure."}
        ]
      },
      {
        id: "ija-05",
        title: "Muzāraʿa (المُزَارَعَة) وMusāqāt (المُسَاقَاة) — Contrats Agricoles et Finance Participative",
        status: 'available',
        content: [
        {"t": "lead", "v": "Deux contrats agricoles classiques du rite malikite, permis là où d'autres écoles les interdisent, et une synthèse sur la finance participative islamique contemporaine."},
        {"t": "h", "v": "Muzāraʿa (المُزَارَعَة) — Le Métayage (Agriculture à Partage de Récolte)"},
        {"t": "p", "v": "Muzāraʿa (المُزَارَعَة) est le contrat entre le propriétaire d'une terre et un agriculteur : le propriétaire fournit la terre, l'agriculteur fournit le travail, et la récolte est partagée selon un ratio convenu."},
        { t:'ul', v:[
          "Permise en rite malikite — l'Imām Mālik la valide explicitement dans la Mudawwana.",
          "Interdite selon certains savants chāfiʿites et hanafites (غَرَر sur la récolte).",
          "Conditions : ratio de partage connu, durée précisée, terres exploitables.",
          "Le propriétaire peut apporter : terre + semences. L'agriculteur apporte : travail + équipement.",
          "En cas de mauvaise récolte naturelle (جَائِحَة) : la perte est partagée selon les mêmes ratios."
        ] },
        {"t": "h", "v": "Musāqāt (المُسَاقَاة) — Le Contrat d'Arboriculture"},
        {"t": "p", "v": "Musāqāt (المُسَاقَاة) est le contrat entre le propriétaire d'arbres fruitiers (oliviers, palmiers, vignes…) et un soigneur : le propriétaire fournit les arbres, le soigneur les entretient et irrigue, les fruits sont partagés."},
        { t:'ul', v:[
          "Validée explicitement par le Prophète ﷺ pour les palmiers de Khaybar.",
          "Permise en rite malikite, hanbalite et chāfiʿite (pour les palmiers).",
          "Conditions : arbres existants, ratio de partage connu, durée précisée.",
          "Mukhtasar Khalīl : Musāqāt (المُسَاقَاة) peut être étendue à tous les arbres fruitiers selon l'Imām Mālik.",
          "Le soigneur supporte les travaux courants (arrosage, taille, cueillette), le propriétaire supporte l'infrastructure."
        ] },
        {"t": "h", "v": "الفِنَانس Islām (الإِسلَام)ِيَّة المُشَارِكَة — Synthèse de la Finance Participative"},
        {"t": "p", "v": "Ces contrats classiques constituent la base de la finance islamique contemporaine. Doctrine-malikite.fr (section Finance Islamique) distingue plusieurs instruments :"},
        { t:'ul', v:[
          "<strong>Murābaḥa (المُرَابَحَة) :</strong> vente avec marge déclarée — déjà vu au niveau intermédiaire.",
          "<strong>المُشَارَكَة :</strong> association en capital avec partage des risques.",
          "<strong>Ijāra (الإِجَارَة) المُنتَهِيَة بِالتَّمليك :</strong> crédit-bail → location qui se transforme en propriété.",
          "<strong>ṢṢukūk (الصُّكُوك) (sukuks) :</strong> obligations islamiques adossées à des actifs réels.",
          "<strong>al-muḍāraba (المُضَارَبَة) bancaire :</strong> compte d'investissement où la banque est مُضَارِب."
        ] },
        { t:'ar', v:"مَن أَكلَ مِن عَمَلِ يَدِهِ فَقَد أَكَلَ خَيراً", n:"« Celui qui mange du fruit de son travail, mange en vérité. » — Hadīth rapporté par al-Bukhārī" },
        {"t": "note", "v": "Doctrine-malikite.Muzāraʿa (المُزَارَعَة) : « L'Muzāraʿa (المُزَارَعَة) avec partage de la récolte, se basant sur la pratique du Prophète ﷺ à Khaybar ». Ce contrat agricole reste très pertinent pour l'agriculture contemporaine et les projets coopératifs islamiques."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-ijara',
        title: 'Questionnaire — ' + "Ijāra (الإِجَارَة) وSharika (الشَّرِكَة) وal-muḍāraba (المُضَارَبَة)",
        status: "available",
        score: null,
        questions: [
        {
          id: "q-ija-01",
          text: "L'Ijāra (الإِجَارَة) couvre deux réalités distinctes. Lesquelles ?",
          choices: [
          { id:"a", text:"Vente et don" },
          { id:"b", text:"Location d'un bien (إِجَارَةُ العَيْن) ET prestation de services (إِجَارَةُ الذِّمَّة)" },
          { id:"c", text:"Prêt et dépôt" },
          { id:"d", text:"Commerce et agriculture" }
          ],
          correctId: "b",
          explanation: "L'Ijāra (الإِجَارَة) désigne à la fois la location d'un bien (maison, voiture) et la prestation de services (travail, expertise, transport). Dans les deux cas, c'est un transfert temporaire de l'usufruit (المَنفَعَة) contre rémunération."
        },
        {
          id: "q-ija-02",
          text: "<strong>PIÈGE :</strong> Peut-on louer un local à quelqu'un pour y vendre de l'alcool ?",
          choices: [
          { id:"a", text:"Oui — le bailleur n'est pas responsable de l'usage" },
          { id:"b", text:"Non — le loyer d'un usage illicite est invalide" },
          { id:"c", text:"Oui avec une clause dans le contrat" },
          { id:"d", text:"Makrūh seulement" }
          ],
          correctId: "b",
          explanation: "La المَنفَعَة (usage loué) doit être licite. Si le contrat est conclu en sachant que l'usage sera illicite → l'Ijāra (الإِجَارَة) est invalide. Cela s'applique à toute location dont l'usage principal déclaré est حَرَام."
        },
        {
          id: "q-ija-03",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Si une partie de la maison louée s'effondre en cours de bail, que se passe-t-il ?",
          choices: [
          { id:"a", text:"Le contrat est entièrement annulé" },
          { id:"b", text:"Le locataire continue à payer le loyer intégral" },
          { id:"c", text:"Le contrat est annulé pour la partie effondrée ; le loyer est réduit proportionnellement" },
          { id:"d", text:"Le locataire peut rompre le contrat sans payer" }
          ],
          correctId: "c",
          explanation: "Mukhtasar Khalīl : si la maison louée perd une partie → le contrat subsiste pour la partie restante et le loyer est réduit en proportion. Ce n'est pas une résiliation totale — c'est une adaptation proportionnelle au bien effectivement disponible."
        },
        {
          id: "q-ija-04",
          text: "<strong>PIÈGE CRUCIAL :</strong> Un tailleur (أَجِير مُشتَرَك) abîme un vêtement qu'il devait coudre, sans aucune faute de sa part. Est-il responsable ?",
          choices: [
          { id:"a", text:"Non — seulement si faute prouvée" },
          { id:"b", text:"Oui — l'artisan indépendant garantit son travail selon le rite malikite" },
          { id:"c", text:"Cela dépend du prix du vêtement" },
          { id:"d", text:"Non — la destruction accidentelle est toujours exonérante" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « وَضَمَن الأَجِيرُ المُشتَرَك » — l'artisan indépendant (tailleur, cordelier, transporteur...) est responsable des dommages même accidentels. C'est une position malikite distincte : l'أَجِير الخَاصّ (employé dédié) n'est responsable qu'en cas de faute."
        },
        {
          id: "q-ija-05",
          text: "Le locataire peut-il sous-louer le bien loué sans accord du bailleur ?",
          choices: [
          { id:"a", text:"Oui — il dispose librement du bien qu'il a loué" },
          { id:"b", text:"Non — selon la position malikite dominante, il ne peut sous-louer sans accord" },
          { id:"c", text:"Oui si le loyer est identique" },
          { id:"d", text:"Oui pour les locations commerciales seulement" }
          ],
          correctId: "b",
          explanation: "Selon la position dominante malikite, le locataire ne peut sous-louer sans l'accord du bailleur. Le bien est loué pour un usage personnel ou pour un usage stipulé — le transférer à un tiers sans accord change la nature du contrat."
        },
        {
          id: "q-ija-06",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Sharika al-Abdān (شَرِكَةُ الأَبدَان) (société de travail sans capital) est-elle permise ?",
          choices: [
          { id:"a", text:"Non — une société requiert toujours du capital" },
          { id:"b", text:"Oui — permise en rite malikite ; deux artisans peuvent partager leurs honoraires" },
          { id:"c", text:"Makrūh uniquement" },
          { id:"d", text:"Permise seulement pour les métiers manuels" }
          ],
          correctId: "b",
          explanation: "Sharika al-Abdān (شَرِكَةُ الأَبدَان) est permise en rite malikite (et hanbalite) — deux médecins, deux avocats ou deux artisans peuvent s'associer et partager leurs revenus sans apport de capital. Elle est interdite selon les chāfiʿites qui exigent un capital mesurable."
        },
        {
          id: "q-ija-07",
          text: "<strong>PIÈGE :</strong> Sharika al-ʿInān (شَرِكَةُ العِنَان), un associé apporte 70% du capital. Comment se partagent les PERTES ?",
          choices: [
          { id:"a", text:"Moitié-moitié entre les associés" },
          { id:"b", text:"Selon l'accord sur les bénéfices" },
          { id:"c", text:"Toujours en proportion du capital — 70% pour le premier" },
          { id:"d", text:"L'associé qui a moins travaillé supporte plus de pertes" }
          ],
          correctId: "c",
          explanation: "Règle immuable : dans toute شَرِكَة, les pertes se répartissent TOUJOURS en proportion du capital apporté. On ne peut pas stipuler autrement. En revanche, les bénéfices peuvent être répartis selon un accord différent de la proportion du capital."
        },
        {
          id: "q-ija-08",
          text: "Dans la شَرِكَة, un associé peut-il faire une donation du capital commun à un pauvre ?",
          choices: [
          { id:"a", text:"Oui — les actes de charité sont toujours permis" },
          { id:"b", text:"Non — les actes gratuits nécessitent l'accord de tous les associés" },
          { id:"c", text:"Oui jusqu'à 1/3 du capital" },
          { id:"d", text:"Oui si c'est un montant symbolique" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : chaque associé peut accomplir les actes commerciaux normaux (acheter, vendre, louer...). Mais les actes gratuits (don, prêt, هِبَة) avec le capital commun nécessitent l'accord de l'autre associé. Donner sans accord engage la responsabilité personnelle de celui qui donne."
        },
        {
          id: "q-ija-09",
          text: "Quelle est la différence fondamentale entre la al-muḍāraba (المُضَارَبَة) et la شَرِكَة ?",
          choices: [
          { id:"a", text:"Aucune différence" },
          { id:"b", text:"Dans la al-muḍāraba (المُضَارَبَة) : un apporte le capital, l'autre le travail. Dans la شَرِكَة : les deux apportent du capital et/ou du travail" },
          { id:"c", text:"La al-muḍāraba (المُضَارَبَة) est حَرَام" },
          { id:"d", text:"La شَرِكَة est réservée aux grands projets" }
          ],
          correctId: "b",
          explanation: "La al-muḍāraba (المُضَارَبَة) (قِرَاض) = 1 Rabb al-Māl (رَبّ المَال) + 1 personne apporte le travail (مُضَارِب). La شَرِكَة = les partenaires apportent tous un capital et/ou du travail. La différence clé : dans la al-muḍāraba (المُضَارَبَة) les pertes tombent UNIQUEMENT sur le capital."
        },
        {
          id: "q-ija-10",
          text: "<strong>PIÈGE :</strong> Dans une al-muḍāraba (المُضَارَبَة), si l'entreprise subit une perte sans faute du مُضَارِب, qui la supporte ?",
          choices: [
          { id:"a", text:"Le مُضَارِب supporte la perte en proportion de son travail" },
          { id:"b", text:"La perte est partagée moitié-moitié" },
          { id:"c", text:"La perte incombe entièRabb al-Māl (رَبّ المَال) (bailleur de fonds)" },
          { id:"d", text:"La perte est partagée selon le ratio de bénéfices" }
          ],
          correctId: "c",
          explanation: "Principe fondamental de la al-muḍāraba (المُضَارَبَة) : Rabb al-Māl (رَبّ المَال) (celui qui a apporté le capital). Le مُضَارِب perd son travail (pas rémunéré) mais pas son patrimoine. Exception : si la perte est due à une faute ou négligence du مُضَارِب → il indemnise."
        },
        {
          id: "q-ija-11",
          text: "Le مُضَارِب peut-il s'associer avec un tiers en utilisant le capital de la al-muḍāraba (المُضَارَبَة) ?",
          choices: [
          { id:"a", text:"Oui — il dispose librement du capital" },
          { id:"b", text:"Non — Rabb al-Māl (رَبّ المَال), il ne peut pas sous-déléguer le capital" },
          { id:"c", text:"Oui jusqu'à la moitié du capital" },
          { id:"d", text:"Oui si c'est dans le même secteur d'activité" }
          ],
          correctId: "b",
          explanation: "Le مُضَارِب est mandaté Rabb al-Māl (رَبّ المَال). Il ne peut pas déléguer ce mandat à un tiers (faire une sous-المُضَارَبَة) Rabb al-Māl (رَبّ المَال). Agir autrement engage sa responsabilité personnelle pour tout le capital."
        },
        {
          id: "q-ija-12",
          text: "Le terme malikite pour la al-muḍāraba (المُضَارَبَة) est :",
          choices: [
          { id:"a", text:"Sharika (الشَّرِكَة)" },
          { id:"b", text:"Juʿl (الجُعل)" },
          { id:"c", text:"Qirāḍ (القِرَاض)" },
          { id:"d", text:"Wakāla (الوَكَالَة)" }
          ],
          correctId: "c",
          explanation: "Qirāḍ (القِرَاض) pour désigner ce que les chāfiʿites et hanbalites appellent al-muḍāraba (المُضَارَبَة). Les deux termes désignent le même contrat. Le Mukhtasar Khalīl utilise systéQirāḍ (القِرَاض)."
        },
        {
          id: "q-ija-13",
          text: "<strong>PIÈGE :</strong> Le وَكِيل (mandataire) est-il responsable de la perte accidentelle du bien qu'il gère pour son mandant ?",
          choices: [
          { id:"a", text:"Oui — le mandataire garantit toujours le résultat" },
          { id:"b", text:"Non — le وَكِيل est امين ; il n'est responsable qu'en cas de faute ou négligence" },
          { id:"c", text:"Seulement si la valeur dépasse un certain seuil" },
          { id:"d", text:"Oui si le mandat est rémunéré" }
          ],
          correctId: "b",
          explanation: "Le وَكِيل est un امين (dépositaire de confiance) — il n'est responsable des pertes QUE s'il a commis une faute, une négligence ou utilisé le bien sans permission. La perte accidentelle (vol, catastrophe naturelle) sans faute → pas de responsabilité."
        },
        {
          id: "q-ija-14",
          text: "La وَدِيعَة (dépôt) : qui supporte la preuve de la restitution ?",
          choices: [
          { id:"a", text:"Le déposant (المُودِع) doit prouver qu'il n'a pas récupéré son bien" },
          { id:"b", text:"Le gardien (المُودَع عِندَه) doit prouver qu'il a bien rendu le dépôt" },
          { id:"c", text:"La charge de preuve dépend de la valeur du bien" },
          { id:"d", text:"Aucune preuve n'est requise si c'est de bonne foi" }
          ],
          correctId: "b",
          explanation: "Principe malikite : c'est le GARDIEN qui doit prouver la restitution. S'il dit « j'ai rendu le dépôt » et que le déposant nie → le gardien doit en apporter la preuve (témoins, reçu signé). C'est différent d'autres contrats où la charge de preuve incombe au réclamant."
        },
        {
          id: "q-ija-15",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Muzāraʿa (المُزَارَعَة) (métayage — partage de récolte) est-elle permise ?",
          choices: [
          { id:"a", text:"Non — c'est du غَرَر pur" },
          { id:"b", text:"Oui — l'Imām Mālik la permet en se basant sur la pratique du Prophète ﷺ à Khaybar" },
          { id:"c", text:"Makrūh seulement" },
          { id:"d", text:"Permise uniquement pour les palmiers" }
          ],
          correctId: "b",
          explanation: "L'Muzāraʿa (المُزَارَعَة) — le Prophète ﷺ a conclu un contrat de partage de récolte avec les habitants de Khaybar (palmiers dattiers). La Mudawwana l'étend à tous les types de cultures. Cette position est plus libérale que celle de certains chāfiʿites."
        },
        {
          id: "q-ija-16",
          text: "Qu'est-ce que le جُعل et en quoi diffère-t-il de l'Ijāra (الإِجَارَة) ?",
          choices: [
          { id:"a", text:"Ils sont identiques" },
          { id:"b", text:"Dans le جُعل : rémunération due SEULEMENT en cas de succès. Dans l'Ijāra (الإِجَارَة) : rémunération due pour l'effort (pas seulement le résultat)" },
          { id:"c", text:"Le جُعل est حَرَام car incertain" },
          { id:"d", text:"Le جُعل est une forme de charité" }
          ],
          correctId: "b",
          explanation: "Le جُعل (prime de résultat) → rémunération conditionnée au résultat. L'Ijāra (الإِجَارَة) → rémunération pour la prestation elle-même (qu'elle aboutisse ou non). Exemple : « Je paie 500€ à qui retrouve mon chat perdu » = جُعل. « Je paie 500€ au détective pour 10 jours de recherche » = Ijāra (الإِجَارَة)."
        },
        {
          id: "q-ija-17",
          text: "<strong>COMPLEXE :</strong> Un médecin (أَجِير مُشتَرَك) opère un patient qui décède des suites d'une erreur médicale non intentionnelle. Selon le rite malikite :",
          choices: [
          { id:"a", text:"Le médecin n'est jamais responsable car il a agi de bonne foi" },
          { id:"b", text:"Le médecin (artisan indépendant) peut engager sa responsabilité si une négligence est établie" },
          { id:"c", text:"Le médecin est toujours responsable comme أَجِير مُشتَرَك" },
          { id:"d", text:"Le patient supporte les risques médicaux intégralement" }
          ],
          correctId: "b",
          explanation: "Le médecin est un أَجِير مُشتَرَك (prestataire indépendant). Selon le rite malikite, il engage sa responsabilité en cas de faute ou négligence prouvée. S'il a agi selon les règles de l'art et que le décès survient malgré tout → divergence parmi les fuqahā. La position contemporaine : expertise médicale pour établir la faute."
        },
        {
          id: "q-ija-18",
          text: "Musāqāt (المُسَاقَاة) (contrat d'arboriculture), qui entretient les arbres et qui perçoit les fruits ?",
          choices: [
          { id:"a", text:"Le propriétaire entretient, le soigneur perçoit tout" },
          { id:"b", text:"Le soigneur entretient et irrigue, les fruits sont partagés entre les deux selon accord" },
          { id:"c", text:"Les deux entretiennent et partagent tout" },
          { id:"d", text:"Le soigneur entretient et ne reçoit qu'un salaire fixe" }
          ],
          correctId: "b",
          explanation: "Musāqāt (المُسَاقَاة) : le soigneur (المُسَاقِي) fournit tout le travail d'entretien (arrosage, taille, cueillette) et les fruits sont partagés selon un ratio convenu à l'avance. Le propriétaire apporte les arbres et les infrastructures lourdes."
        },
        {
          id: "q-ija-19",
          text: "La رُكُوب (location d'une monture de travail) : qui est responsable si la monture se blesse pendant l'utilisation normale ?",
          choices: [
          { id:"a", text:"Le locataire est toujours responsable" },
          { id:"b", text:"Le propriétaire — l'usage normal n'engage pas la responsabilité du locataire" },
          { id:"c", text:"Le locataire si la blessure survient pendant le trajet" },
          { id:"d", text:"Les deux partagent la responsabilité" }
          ],
          correctId: "b",
          explanation: "Si le locataire utilise la monture (chameau, cheval) conformément à l'accord et dans les limites normales → toute blessure ou mort est à la charge du propriétaire (risque de propriété). Si le locataire dépasse les conditions stipulées (charge trop lourde, trajet non convenu) → sa responsabilité est engagée."
        },
        {
          id: "q-ija-20",
          text: "<strong>SYNTHÈSE :</strong> Quelle est la différence entre al-muḍāraba (المُضَارَبَة), Sharika (الشَّرِكَة) Wakāla (الوَكَالَة) en termes de responsabilité en cas de perte ?",
          choices: [
          { id:"a", text:"Les trois sont identiques — responsabilité partagée" },
          { id:"b", text:"al-muḍāraba (المُضَارَبَة) : perte sur le capital seul. شَرِكَة : perte partagée selon capital. وَكَالَة : le mandataire n'est pas responsable sauf faute" },
          { id:"c", text:"Toujours sur le gérant/actif" },
          { id:"d", text:"Aucun des trois ne donne lieu à responsabilité" }
          ],
          correctId: "b",
          explanation: "Synthèse des trois contrats : (1) al-muḍāraba (المُضَارَبَة) : perte = Rabb al-Māl (رَبّ المَال), le مُضَارِب perd son travail ; (2) شَرِكَة : perte répartie selon les parts de capital (jamais autrement) ; (3) وَكَالَة : le وَكِيل est امين, responsable seulement en cas de faute ou dépassement du mandat."
        }
        ]
      }
    },

    /* ═══ Hiba (الهِبَة) وWaqf (الوَقف) وWaṣiyya (الوَصِيَّة) ═══ */
    {
      id: "hiba",
      title: "Donations, Fondation Pieuse et Testament",
      arabicTitle: "al-hiba (الهِبَة) وal-waqf (الوَقف) وal-waṣiyya (الوَصِيَّة)",
      icon: "gift",
      description: "Transmission du patrimoine islamique : les trois contrats de générosité et de planification successorale.",
      source: "Risāla Ibn Abī Zayd ch.35-36 · Mukhtasar Khalīl pp.185-200",
      badge: {
        id: 'badge-avance-hiba',
        title: "Juriste de la Générosité",
        arabicTitle: "فَقِيهُ التَّبَرُّعَات",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Hiba (الهِبَة) وWaqf (الوَقف) وWaṣiyya (الوَصِيَّة)"
      },

      lessons: [
              {
        id: "hib-01",
        title: "Hiba (الهِبَة) — La Donation Islamique",
        status: 'available',
        content: [
        {"t": "lead", "v": "La هِبَة est la donation d'un bien à titre gratuit de son vivant, sans contrepartie. Le Mukhtasar Khalīl (pp. 185-195) y consacre un chapitre détaillé, avec des règles propres au rite malikite sur la révocabilité et la prise de possession."},
        {"t": "h", "v": "Définition et conditions de validité"},
        { t:'ul', v:[
          "<strong>Formule :</strong> offre (وَهَبتُ) et acceptation (قَبِلتُ) — expresses ou implicites.",
          "<strong>المَوهُوب له (bénéficiaire) :</strong> doit exister au moment de la donation — pas de donation à un enfant à naître.",
          "<strong>البَيان :</strong> le bien donné doit être connu et déterminé.",
          "<strong>القَبض (prise de possession) :</strong> condition de validité selon le rite malikite — la donation n'est complète que lorsque le bénéficiaire prend possession du bien."
        ] },
        { t:'ar', v:"لَا تَتِمُّ al-hiba (الهِبَة)ُ وَالصَّدَقَةُ وَالعَطِيَّةُ إِلَّا بِالحِيَازَةِ", n:"« La هِبَة, la صَدَقَة et l'عَطِيَّة ne sont complètes que par la prise de possession. » — Imām Mālik, Muwattaʾ" },
        {"t": "h", "v": "La révocabilité de la هِبَة — positions malikites"},
        { t:'ul', v:[
          "<strong>Père → enfant mineur :</strong> le père peut révoquer la donation tant que l'enfant ne l'a pas cédée, transformée ou grevée d'une dette.",
          "<strong>Entre époux :</strong> ni le mari ni la femme ne peuvent révoquer une donation faite à l'autre.",
          "<strong>Entre autres personnes :</strong> la révocation après prise de possession est حَرَام selon l'Imām Mālik (hadīth : « celui qui reprend son don est comme le chien qui revient à son vomi »).",
          "Mukhtasar Khalīl : la révocation est interrompue si le bien donné a été vendu, détruit, transformé ou grevé."
        ] },
        {"t": "h", "v": "Hiba (الهِبَة) بشرط العِوَض — Donation conditionnée à une contrepartie"},
        {"t": "p", "v": "Si la donation est faite avec une contrepartie stipulée (ex: « je te donne cette maison si tu me donnes X »), elle prend les règles de la VENTE, non de la donation. Le droit de retrait (خِيَار العَيب) et la garantie s'appliquent alors."},
        {"t": "h", "v": "التَّفضِيل بين الأولاد — Inégalité entre enfants dans les donations"},
        {"t": "p", "v": "L'Imām Mālik recommande l'égalité entre les enfants dans les donations de leur vivant — mais ne la rend pas obligatoire. Une inégalité délibérée est makrūh. Si l'inégalité vise à léser certains héritiers, elle est interrompue après la mort (règle du 1/3 testamentaire)."},
        {"t": "note", "v": "Différence fondamentale هِبَة vs صَدَقَة : la هِبَة est une donation à une personne nommée avec espoir de réciprocité (un jour) — c'est un acte social. La صَدَقَة est donnée uniquement pour Allah, sans espoir de réciprocité — elle est irréversible même avant la prise de possession."}
        ]
      },
      {
        id: "hib-02",
        title: "Waqf (الوَقف) — La Fondation Pieuse",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le وَقف (fondation pieuse, endowment) est l'immobilisation permanente d'un bien dont les revenus sont affectés à une cause charitable. C'est l'un des instruments les plus puissants de la civilisation islamique — mosquées, écoles, hôpitaux, bibliothèques ont été construits et maintenus par des awqāf."},
        {"t": "h", "v": "Définition et caractéristiques essentielles"},
        { t:'ul', v:[
          "Le bien وَقف ne peut plus être : vendu, hérité, donné, ni grevé d'une hypothèque.",
          "Les revenus sont distribués selon la volonté du fondateur (الواقف).",
          "Le وَقف est PERPÉTUEL — il dure jusqu'à la destruction physique du bien.",
          "Mukhtasar Khalīl : « وَحُبِّسَ الأَصلُ وَسُبِّلَ الثَّمَرَةُ » — le capital est immobilisé, les fruits sont libérés (au profit de la cause)."
        ] },
        {"t": "h", "v": "شُرُوط Waqf (الوَقف) — Conditions de validité"},
        { t:'ul', v:[
          "<strong>الواقف :</strong> majeur, libre, sain d'esprit, propriétaire.",
          "<strong>الموقوف :</strong> bien immeuble de préférence (terres, bâtiments) ou mobilier durable.",
          "<strong>الموقوف عليه :</strong> cause existante et légitime — mosquée, école, pauvres, famille.",
          "<strong>Condition malikite :</strong> pas de prise de possession obligatoire — le وَقف prend effet dès la déclaration devant témoins.",
          "Peut être constitué pour la vie du fondateur puis passer à une cause charitable (الوَقف الذُّرِّيَّة ثم الخَيرِيَّة)."
        ] },
        {"t": "h", "v": "أَنوَاع Waqf (الوَقف)"},
        { t:'ul', v:[
          "<strong>Waqf (الوَقف) الخَيرِيّ :</strong> directement au profit d'une institution charitable (mosquée, école, soins).",
          "<strong>Waqf (الوَقف) الذُّرِّيّ :</strong> au profit de la famille d'abord, puis d'une cause charitable — permis en rite malikite.",
          "<strong>Waqf (الوَقف) المُشتَرَك :</strong> plusieurs bénéficiaires simultanément."
        ] },
        {"t": "h", "v": "Gestion et administration du وَقف"},
        { t:'ul', v:[
          "Le naẓir (نَاظِر) ou mutawallī (مُتَوَلِّي) administre le وَقف selon les conditions du fondateur.",
          "Peut louer les biens du وَقف — c'est même la méthode de génération de revenus recommandée.",
          "Ne peut PAS vendre le bien, sauf en cas de dégradation totale et inutilité — et seulement pour racheter un bien éIstibdāl (الاستِبدَال).",
          "Application contemporaine : les وَقف islamiques en France sont structurés en fondations reconnues d'utilité publique."
        ] },
        { t:'ar', v:"احبِس الأَصلَ وَسَبِّل الثَّمَرَةَ", n:"« Immobilise le capital et libère les fruits. » — Hadīth (al-Bukhārī et Muslim), origine du وَقف islamique" },
        {"t": "note", "v": "Le وَقف contemporain en France : selon doctrine-malikite.fr, les musulmans peuvent constituer des fondations ou associations culturelles islamiques jouant le rôle du وَقف. Les dons aux associations islamiques reconnues équivalent fonctionnellement à un وَقف puisque les biens ne sont pas redistribués mais affectés à la cause."}
        ]
      },
      {
        id: "hib-03",
        title: "Waṣiyya (الوَصِيَّة) — Le Testament Islamique",
        status: 'available',
        content: [
        {"t": "lead", "v": "La وَصِيَّة est la disposition testamentaire par laquelle une personne transfère un droit à titre gratuit après sa mort. Elle est limitée au tiers de la succession (الثُّلُث) et ne peut bénéficier à un héritier légal."},
        {"t": "h", "v": "حُكم Waṣiyya (الوَصِيَّة) — Statut"},
        { t:'ul', v:[
          "Sounnah muʾakkada — fortement recommandée pour qui a des biens.",
          "Le Prophète ﷺ : « Celui qui meurt sans avoir rédigé son testament meurt dans une forme de légèreté. »",
          "Obligatoire pour régler les dettes connues et les obligations religieuses (كَفَّارَات non accomplies).",
          "Peut être rédigée à tout moment et modifiée jusqu'à la mort."
        ] },
        {"t": "h", "v": "قاعدة الثُّلُث — La règle du tiers"},
        { t:'ul', v:[
          "Maximum : 1/3 de la succession après paiement des dettes.",
          "En dessous du 1/3 : valide sans accord des héritiers.",
          "Au-delà du 1/3 : nécessite l'accord des héritiers APRÈS la mort du testateur (إِجَازَة الوَرَثَة).",
          "Mukhtasar Khalīl : si les héritiers approuvent le dépassement du 1/3 après la mort → valide.",
          "Conseil du Prophète ﷺ : le 1/3 est généreux — moins est mieux pour ne pas léser les héritiers."
        ] },
        {"t": "h", "v": "من يجوز له الوصية ومن لا يجوز"},
        { t:'ul', v:[
          "<strong>Pas de وَصِيَّة à un héritier légal</strong> (إِرثِيّ) — sauf accord de tous les héritiers APRÈS la mort : « لَا وَصِيَّةَ لِوَارِث ».",
          "<strong>Valide pour :</strong> un non-héritier (ami, association, œuvre charitable), un non-Muslim (hadīth d'Ibn Umar).",
          "Si la وَصِيَّة bénéficie à un héritier légal sans accord → elle est nulle pour la partie héritée.",
          "Exception malikite : si l'héritier bénéficiaire n'est héritier que parce que d'autres héritiers existent → certains savants malikites la valident."
        ] },
        {"t": "h", "v": "التَّنفِيذ وWaṣī (الوَصِيّ)"},
        { t:'ul', v:[
          "Waṣī (الوَصِيّ) (exécuteur testamentaire) est nommé pour exécuter les dispositions.",
          "Il est امين — responsable de la bonne exécution.",
          "La وَصِيَّة est exécutée APRÈS le paiement des dettes et AVANT le partage successoral.",
          "Ordre de priorité : (1) dettes envers Allah (زكاة, kafāra, hajj) → (2) dettes envers les hommes → (3) وَصِيَّة → (4) héritage."
        ] },
        {"t": "note", "v": "Application contemporaine — testament franco-islamique : il est recommandé de rédiger un testament civil (selon la loi française) ET un testament islamique complémentaire. Le testament civil permet de diriger 1/3 de la succession vers des causes islamiques non couvertes par la loi civile (héritiers non reconnus comme l'enfant adopté, legs à une mosquée...)."}
        ]
      },
      {
        id: "hib-04",
        title: "ʿUmrā (العُمرَى) وRuqbā (الرُّقبَى) — Donations Viagères et Conditionnelles",
        status: 'available',
        content: [
        {"t": "lead", "v": "Deux types de donations spéciales traités par le Mukhtasar Khalīl et ayant des statuts juridiques distincts en rite malikite."},
        {"t": "h", "v": "ʿUmrā (العُمرَى) — La Donation Viagère"},
        {"t": "p", "v": "La عُمرَى est la donation d'un bien pour la durée de la vie du bénéficiaire : « je te donne cette maison ta vie durant, puis elle retourne à mes héritiers. »"},
        { t:'ul', v:[
          "Statut malikite : la عُمرَى donne la pleine propriété au bénéficiaire — elle ne retourne PAS aux héritiers du donateur à la mort du bénéficiaire.",
          "Position de l'Imām Mālik : la عُمرَى est valide et définitive — les conditions de retour sont caduques.",
          "Hadīth du Prophète ﷺ : « L'عُمرَى est un droit permanent pour qui la reçoit. » — al-Bukhārī et Muslim.",
          "Différence avec d'autres écoles : certains hanafites rendent le retour valide."
        ] },
        {"t": "h", "v": "Ruqbā (الرُّقبَى) — La Donation Conditionnelle au Survivant"},
        {"t": "p", "v": "La رُقبَى est la donation conditionnée à la mort : « si tu meurs avant moi, la maison m'appartient ; si je meurs avant toi, elle t'appartient. » — Chacun surveille (يَرقُب) l'autre."},
        { t:'ul', v:[
          "Statut malikite : interdite selon l'Imām Mālik car elle contient du غَرَر (incertitude sur le bénéficiaire final).",
          "Mukhtasar Khalīl : « وَلَا رُقبَى » — la رُقبَى est invalide en rite malikite.",
          "Si conclue malgré l'interdiction : le bien reste au donateur tant qu'il est vivant ; à sa mort, la disposition est nulle.",
          "DifféʿUmrā (العُمرَى) qui est valide et permanente."
        ] },
        {"t": "h", "v": "الهَدِيَّة والعَطِيَّة والنِّحلَة"},
        { t:'ul', v:[
          "<strong>الهَدِيَّة :</strong> cadeau offert en signe d'affection — règles de la هِبَة s'appliquent.",
          "<strong>العَطِيَّة :</strong> libéralité du malade en phase terminale (مَرَض الموت) — limitée au 1/3 comme la وَصِيَّة, même si faite de son vivant.",
          "<strong>النِّحلَة :</strong> mention coranique de la dot (Coran 4:4) — la dot est un droit de la femme, pas une donation ordinaire."
        ] },
        {"t": "note", "v": "Point crucial — العَطِيَّة du malade en phase terminale (مَرَض الموت) : toute donation faite par quelqu'un en phase terminale est traitée comme une وَصِيَّة, limitée au 1/3 de la succession. Ceci empêche de contourner les droits des héritiers légaux en donnant massivement en fin de vie."}
        ]
      },
      {
        id: "hib-05",
        title: "التَّخطِيط Islām (الإِسلَام)ِيّ للتَّرِكَة — Planification Successorale Contemporaine",
        status: 'available',
        content: [
        {"t": "lead", "v": "Comment combiner les principes islamiques de transmission du patrimoine avec les contraintes légales contemporaines (droit français, européen) ? Synthèse de doctrine-malikite.fr et des savants malikites contemporains."},
        {"t": "h", "v": "Les instruments islamiques de transmission"},
        { t:'ul', v:[
          "<strong>Hiba (الهِبَة)</strong> : donner de son vivant, hors succession — permet de transmettre librement avant la mort.",
          "<strong>Waqf (الوَقف)</strong> : affecter définitivement un bien à une cause — sort de la succession.",
          "<strong>Waṣiyya (الوَصِيَّة)</strong> : disposer du 1/3 — atteindre des bénéficiaires non couverts par la succession légale.",
          "<strong>التَّأمِين Takāful (التَّكَافُل)ِيّ</strong> : assurance-vie islamique — peut transmettre hors succession."
        ] },
        {"t": "h", "v": "Articulation droit français / droit islamique"},
        { t:'ul', v:[
          "En France, la réserve héréditaire (50-75% selon le nombre d'enfants) s'impose et prévaut sur les dispositions islamiques.",
          "La quotité disponible (25-50%) peut être orientée selon la volonté islamique via testament.",
          "Doctrine-malikite.fr recommande : un testament civil + des donations de son vivant (هِبَة) pour équilibrer.",
          "Les donations à des enfants (même inégales) faites de son vivant et hors contrat de mariage sont récupérables à la succession en droit français (rapport à succession) — prévoir un testament de dispense de rapport."
        ] },
        {"t": "h", "v": "Cas pratiques fréquents"},
        { t:'ul', v:[
          "<strong>Léguer à une mosquée :</strong> via testament civil pour la quotité disponible, OU via وَقف constitué de son vivant.",
          "<strong>Transmettre à une veuve non inscrite :</strong> la donation de son vivant (هِبَة) ou l'assurance-vie sont les seules voies hors succession légale.",
          "<strong>Équité entre enfants :</strong> en droit français, tous les enfants héritent également — les donations antérieures sont rapportées. En droit islamique, les parts sont inégales (fils = 2 × fille).",
          "<strong>Le problème du conjoint non-Muslim :</strong> le non-Muslim n'hérite pas de son conjoint Muslim en droit islamique — mais hérite en droit français. La donation de son vivant ou le testament peuvent équilibrer."
        ] },
        {"t": "note", "v": "Rappel de principe : le droit de succession islamique est une obligation religieuse (les parts sont fixées par le Coran). Un Muslim doit s'efforcer de respecter les فَرَائِض islamiques dans la mesure du possible. Là où la loi civile s'y oppose, il doit au minimum comprendre les droits islamiques de chaque héritier et chercher à les équilibrer par d'autres moyens licites."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-hiba',
        title: 'Questionnaire — ' + "Hiba (الهِبَة) وWaqf (الوَقف) وWaṣiyya (الوَصِيَّة)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-hib-01",
          text: "La هِبَة (donation) est-elle complète dès la formule verbale selon le rite malikite ?",
          choices: [
          { id:"a", text:"Oui — la parole suffit" },
          { id:"b", text:"Non — elle n'est complète que par القَبض (prise de possession) du bien" },
          { id:"c", text:"Oui avec deux témoins" },
          { id:"d", text:"Non — il faut un acte notarié" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik dans la Muwattaʾ : « لَا تَتِمُّ Hiba (الهِبَة)ُ إِلَّا بِḤḤiyāza (الحِيَازَة)ِ » — la donation n'est parfaite que par la prise de possession. Sans ḤḤiyāza (الحِيَازَة) (القَبض), la donation reste révocable et non définitive."
        },
        {
          id: "q-hib-02",
          text: "<strong>PIÈGE :</strong> Ibrahim donne une voiture à son fils adulte. Peut-il reprendre cette donation ?",
          choices: [
          { id:"a", text:"Oui — un père peut toujours reprendre ses dons" },
          { id:"b", text:"Non — selon l'Imām Mālik, la reprise après القَبض est حَرَام entre adultes" },
          { id:"c", text:"Oui si la valeur a augmenté" },
          { id:"d", text:"Oui dans l'année suivante" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik : « الرُّجُوعُ فِي Hiba (الهِبَة)ِ حَرَامٌ » — reprendre une donation après القَبض est حَرَام. Hadīth du Prophète ﷺ : « celui qui reprend son don est comme le chien qui revient à son vomi. » Exception unique : le père peut reprendre une donation à un enfant MINEUR si le bien n'a pas changé."
        },
        {
          id: "q-hib-03",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Un père donne 50 000€ à son fils aîné seulement. En rite malikite, cette donation est :",
          choices: [
          { id:"a", text:"Nulle — obligation d'égalité absolue" },
          { id:"b", text:"Valide mais makrūh — l'égalité est recommandée mais non obligatoire" },
          { id:"c", text:"Valide et sans restriction" },
          { id:"d", text:"Nulle si d'autres enfants existent" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik recommande l'égalité entre enfants dans les donations de leur vivant mais ne la rend pas OBLIGATOIRE. Une donation inégale est makrūh (blâmable) mais valide. Si l'inégalité vise délibérément à léser les héritiers, elle peut être limitée par la règle du 1/3."
        },
        {
          id: "q-hib-04",
          text: "La صَدَقَة diffère de la هِبَة en ce que :",
          choices: [
          { id:"a", text:"La صَدَقَة peut être reprise, pas la هِبَة" },
          { id:"b", text:"La صَدَقَة est faite uniquement pour Allah — irréversible même avant la prise de possession" },
          { id:"c", text:"La صَدَقَة nécessite plus de témoins" },
          { id:"d", text:"Elles sont identiques" }
          ],
          correctId: "b",
          explanation: "Différence fondamentale : la هِبَة est un acte social (avec espoir de réciprocité) — elle nécessite القَبض pour être définitive. La صَدَقَة est faite exclusivement pour Allah, sans espoir de réciprocité — elle devient irréversible dès la formule, même avant القَبض."
        },
        {
          id: "q-hib-05",
          text: "Le وَقف : le fondateur peut-il vendre le bien qu'il a mis en وَقف ?",
          choices: [
          { id:"a", text:"Oui avec accord des bénéficiaires" },
          { id:"b", text:"Non — le bien وَقف ne peut jamais être vendu" },
          { id:"c", text:"Exceptionnellement si le bien est totalement inutilisable — et seulement pour racheter un bien équivalent" },
          { id:"d", text:"Oui après 30 ans" }
          ],
          correctId: "c",
          explanation: "Le وَقف est perpétuel et inaliénable. Exception exceptionnelle : si le bien se dégrade totalement (maison qui s'effondre, terrain improductif) et ne génère plus aucun revenu → certains savants permettent la vente uniquement pour racheter un bien équivalent qui prend le mêIstibdāl (الاستِبدَال)."
        },
        {
          id: "q-hib-06",
          text: "Un وَقف Waqf Dhurrī (الوَقف الذُّرِّيّ) : ses revenus profitent à :",
          choices: [
          { id:"a", text:"Uniquement les institutions charitables" },
          { id:"b", text:"La famille du fondateur d'abord, puis une cause charitable après extinction de la lignée" },
          { id:"c", text:"Uniquement les pauvres" },
          { id:"d", text:"Le gouvernement islamique" }
          ],
          correctId: "b",
          explanation: "Le وَقف الذُّرِّيّ (ou وَقف الأَهل) est permis en rite malikite — il bénéficie à la famille du fondateur pendant plusieurs générations, puis à une cause charitable après extinction de la lignée familiale. Il permet la transmission du patrimoine familial tout en préservant un but charitable final."
        },
        {
          id: "q-hib-07",
          text: "<strong>PIÈGE :</strong> Ibrahim lègue par testament 50% de sa succession à une mosquée. Est-ce valide sans accord des héritiers ?",
          choices: [
          { id:"a", text:"Oui — la mosquée mérite plus" },
          { id:"b", text:"Non — le maximum est 1/3 de la succession sans accord des héritiers" },
          { id:"c", text:"Oui si les héritiers sont de bonne santé" },
          { id:"d", text:"Oui si la mosque est officielle" }
          ],
          correctId: "b",
          explanation: "Règle absolue : la وَصِيَّة est limitée au 1/3 de la succession SANS accord des héritiers. Au-delà du 1/3, elle nécessite l'accord (إِجَازَة) de TOUS les héritiers APRÈS la mort du testateur. 50% → invalide pour les 17% au-delà du 1/3 sans accord."
        },
        {
          id: "q-hib-08",
          text: "Peut-on faire une وَصِيَّة en faveur d'un héritier légal (fils, fille, épouse) ?",
          choices: [
          { id:"a", text:"Oui sans restriction" },
          { id:"b", text:"Non — « لَا وَصِيَّةَ لِوَارِث » — sauf accord de TOUS les autres héritiers après la mort" },
          { id:"c", text:"Oui jusqu'à 1/3" },
          { id:"d", text:"Seulement pour l'épouse" }
          ],
          correctId: "b",
          explanation: "Hadīth : « لَا وَصِيَّةَ لِوَارِث » — pas de testament au profit d'un héritier légal (fils, fille, épouse, père...). Si le testateur le fait quand même, les autres héritiers peuvent le valider après sa mort (إِجَازَة الوَرَثَة). Sans accord → la disposition testamentaire à l'héritier est nulle."
        },
        {
          id: "q-hib-09",
          text: "L'العَطِيَّة (libéralité) du malade en phase terminale est limitée à :",
          choices: [
          { id:"a", text:"La moitié de la succession" },
          { id:"b", text:"Le 1/3 de la succession — comme la وَصِيَّة" },
          { id:"c", text:"Sans limite — on dispose librement" },
          { id:"d", text:"Le quart de la succession" }
          ],
          correctId: "b",
          explanation: "Toute libéralité (donation, remise de dette, cadeaux importants) faite par une personne en مَرَض الموت (maladie dont elle mourra) est traitée comme une وَصِيَّة et limitée au 1/3. Cela empêche de contourner les droits des héritiers en donnant massivement avant la mort."
        },
        {
          id: "q-hib-10",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> L'عُمرَى (donation viagère) : que se passe-t-il quand le bénéficiaire décède ?",
          choices: [
          { id:"a", text:"Le bien retourne au donateur ou à ses héritiers" },
          { id:"b", text:"Le bien reste définitivement aux héritiers du bénéficiaire — l'عُمرَى donne la pleine propriété" },
          { id:"c", text:"Le bien est partagé entre les deux familles" },
          { id:"d", text:"Le bien revient à une mosquée" }
          ],
          correctId: "b",
          explanation: "Position malikite distinctive : l'عُمرَى est une donation permanente selon l'Imām Mālik. Hadīth du Prophète ﷺ : « ʿUmrā (العُمرَى) جَائِزَةٌ لِأَهلِهَا » — elle est définitive pour ses bénéficiaires. Le bien n'est PAS récupérable à la mort du bénéficiaire, contrairement à ce que stipule parfois le donateur."
        },
        {
          id: "q-hib-11",
          text: "La رُقبَى (donation conditionnée au survivant) est-elle valide en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — permise comme l'عُمرَى" },
          { id:"b", text:"Non — interdite selon l'Imām Mālik car contient du غَرَر sur le bénéficiaire final" },
          { id:"c", text:"Valide si les deux parties consentent" },
          { id:"d", text:"Valide pour les couples" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « وَلَا رُقبَى » — la رُقبَى est invalide en rite malikite. La donner entraîne du غَرَر (incertitude) sur qui héritera du bien. Différence avec l'عُمرَى qui est valide et définitive."
        },
        {
          id: "q-hib-12",
          text: "Quel est l'ordre de priorité dans le traitement de la succession ?",
          choices: [
          { id:"a", text:"Héritiers → dettes → وَصِيَّة" },
          { id:"b", text:"دَيون (dettes envers Allah) → دَيون (dettes envers les hommes) → وَصِيَّة → mirath" },
          { id:"c", text:"وَصِيَّة → dettes → héritiers" },
          { id:"d", text:"Les quatre simultanément selon les parts" }
          ],
          correctId: "b",
          explanation: "Ordre impératif islamique : (1) دَيون الله (zakat non payée, kafāra, hajj non accompli) → (2) دَيون الناس (dettes envers les créanciers) → (3) وَصِيَّة (dans la limite du 1/3) → (4) partage successoral. Les héritiers ne reçoivent rien avant que tout soit réglé."
        },
        {
          id: "q-hib-13",
          text: "<strong>CONTEMPORAIN :</strong> Un Muslim en France veut léguer sa maison à une mosquée. Que peut-il faire ?",
          choices: [
          { id:"a", text:"Faire un testament islamique uniquement" },
          { id:"b", text:"Constituer un وَقف ou faire un testament civil pour la quotité disponible, en complément d'un testament islamique" },
          { id:"c", text:"La loi française l'interdit" },
          { id:"d", text:"Rien — seuls les héritiers légaux peuvent hériter" }
          ],
          correctId: "b",
          explanation: "En France, la réserve héréditaire s'impose. La solution islamique : (1) constituer un وَقف de son vivant (association islamique) avec la maison → elle sort de la succession, OU (2) léguer par testament civil la quotité disponible (1/4 à 1/2 selon enfants) à la mosquée. Doctrine-malikite.fr recommande cette double approche."
        },
        {
          id: "q-hib-14",
          text: "<strong>PIÈGE :</strong> Fatima donne de son vivant 30 000€ à chacun de ses 3 enfants. À sa mort, ses enfants doivent-ils rapporter ces donations à la succession en droit FRANÇAIS ?",
          choices: [
          { id:"a", text:"Non — les donations de son vivant ne se rapportent pas" },
          { id:"b", text:"Oui — en droit français, les donations aux enfants sont en principe rapportables à la succession, sauf dispense expresse" },
          { id:"c", text:"Seulement si elles datent de moins de 10 ans" },
          { id:"d", text:"Seulement les donations supérieures à 50 000€" }
          ],
          correctId: "b",
          explanation: "En droit français, les donations faites aux héritiers réservataires (enfants) sont en principe rapportables à la succession pour établir l'égalité. Pour éviter le rapport : insérer une clause de dispense de rapport dans l'acte de donation. Sans cette clause → les 30 000€ sont réintégrés fictionnellement à la succession."
        },
        {
          id: "q-hib-15",
          text: "Pourquoi le Prophète ﷺ a-t-il dit que « le 1/3 est généreux, et moins est mieux » ?",
          choices: [
          { id:"a", text:"Car la وَصِيَّة est découragée en Islam" },
          { id:"b", text:"Car les héritiers ont besoin du reste de la succession — le testateur ne doit pas les appauvrir" },
          { id:"c", text:"Car 1/3 dépasse ce qui est permis" },
          { id:"d", text:"Car les héritiers ne sont pas dignes de confiance" }
          ],
          correctId: "b",
          explanation: "Le Prophète ﷺ à Saʿd ibn Abī Waqqās sur son lit de maladie : « le 1/3 — et le 1/3 est beaucoup. Il vaut mieux laisser tes héritiers aisés plutôt que pauvres, tendant la main. » — al-Bukhārī. Le testament islamique ne doit pas priver les héritiers légaux de leurs droits."
        },
        {
          id: "q-hib-16",
          text: "Le وَقف produit des revenus (loyers). Ces revenus peuvent-ils être redistribués aux bénéficiaires en argent ?",
          choices: [
          { id:"a", text:"Non — seulement en nature" },
          { id:"b", text:"Oui — les revenus (ثَمَرَة) sont librement distribués selon les conditions du fondateur" },
          { id:"c", text:"Seulement pour l'entretien du bien" },
          { id:"d", text:"Seulement à des pauvres" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « حُبِّسَ الأَصلُ وَسُبِّلَ الثَّمَرَةُ » — le capital est immobilisé mais les fruits (revenus, loyers, récoltes) sont distribués librement selon les conditions du fondateur (الواقف). Ces revenus peuvent aller aux pauvres, à une école, à une famille, ou financer l'entretien du bien lui-même."
        },
        {
          id: "q-hib-17",
          text: "Qu'est-ce que l'Istibdāl (الاستِبدَال) dans le contexte du وَقف ?",
          choices: [
          { id:"a", text:"L'ajout d'un bien supplémentaire au وَقف" },
          { id:"b", text:"La vente d'un bien وَقف inutilisable pour racheter un bien équivalent qui prend le même statut" },
          { id:"c", text:"Le transfert du وَقف à une autre cause" },
          { id:"d", text:"La suspension temporaire du وَقف" }
          ],
          correctId: "b",
          explanation: "L'Istibdāl (الاستِبدَال) est la vente exceptionnelle d'un bien وَقف devenu totalement inutile (ruiné, improductif) pour acheter un bien équivalent qui prend les mêmes conditions de وَقف. C'est la seule exception à l'inaliénabilité du وَقف. Certains savants malikites le permettent sous contrôle judiciaire strict."
        },
        {
          id: "q-hib-18",
          text: "<strong>COMPLEXE :</strong> Ibrahim lègue 40% de sa succession à une mosquée. Ses deux fils adultes acceptent après sa mort. La وَصِيَّة est-elle valide ?",
          choices: [
          { id:"a", text:"Non — le 1/3 est une limite absolue" },
          { id:"b", text:"Oui — l'إِجَازَة (approbation) de TOUS les héritiers adultes après la mort valide l'excédent" },
          { id:"c", text:"Seulement si les fils sont également héritiers de la mosquée" },
          { id:"d", text:"Non car les fils ne peuvent pas renoncer à leurs parts" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « إِجَازَةُ الوَرَثَةِ بَعدَ المَوتِ نَافِذَةٌ » — l'accord de tous les héritiers APRÈS la mort valide une وَصِيَّة dépassant le 1/3. Les deux fils adultes approuvent → les 40% sont valides. Si un seul fils avait refusé → la وَصِيَّة n'aurait été valide que dans la limite du 1/3."
        },
        {
          id: "q-hib-19",
          text: "La donation هِبَة à un non-Muslim est-elle valide ?",
          choices: [
          { id:"a", text:"Non — haram de donner aux non-Muslims" },
          { id:"b", text:"Oui — permise y compris à un proche non-Muslim" },
          { id:"c", text:"Seulement aux Ahl al-Kitāb" },
          { id:"d", text:"Makrūh uniquement" }
          ],
          correctId: "b",
          explanation: "La donation à un non-Muslim est permise — l'Islam encourage la bonté envers tous. Coran 60:8 : « Allah ne vous interdit pas d'être bienveillants envers ceux qui ne vous ont pas combattus pour votre religion. » De même, la وَصِيَّة en faveur d'un proche non-Muslim est valide selon une position malikite."
        },
        {
          id: "q-hib-20",
          text: "<strong>SYNTHÈSE :</strong> Quelle est la difféHiba (الهِبَة), Waqf (الوَقف) Waṣiyya (الوَصِيَّة) ?",
          choices: [
          { id:"a", text:"Aucune différence" },
          { id:"b", text:"هِبَة : donation de son vivant, révocable avant القَبض. وَقف : donation perpétuelle et inaliénable. وَصِيَّة : disposition après la mort, limitée au 1/3" },
          { id:"c", text:"Les trois sont irréversibles" },
          { id:"d", text:"Seul le وَقف est islamique" }
          ],
          correctId: "b",
          explanation: "Synthèse des trois instruments : Hiba (الهِبَة) = donation entre vifs, révocable avant القَبض, définitive après. Waqf (الوَقف) = immobilisation permanente d'un bien pour une cause, inaliénable et perpétuel. Waṣiyya (الوَصِيَّة) = disposition après décès, limitée au 1/3, invalidée pour les héritiers légaux sauf accord."
        }
        ]
      }
    },

    /* ═══ Farāʾiḍ (الفَرَائِض) — Mīrāth (المِيرَاث) ═══ */
    {
      id: "mawarith",
      title: "Le Droit de Succession Islamique",
      arabicTitle: "al-farāʾiḍ (الفَرَائِض) — al-mīrāth (المِيرَاث)",
      icon: "scroll",
      description: "Science des successions islamiques : héritiers, parts fixes, exclusions, ajustements et spécificités malikites.",
      source: "Risāla Ibn Abī Zayd ch.35-36 · Mukhtasar Khalīl pp.260-277 · Matn Ibn Āshir",
      badge: {
        id: 'badge-avance-mawarith',
        title: "Expert de l'Héritage",
        arabicTitle: "عَالِمُ al-farāʾiḍ (الفَرَائِض)",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Farāʾiḍ (الفَرَائِض) — Mīrāth (المِيرَاث)"
      },

      lessons: [
              {
        id: "far-01",
        title: "مُقَدِّمَة فِي عِلمِ Farāʾiḍ (الفَرَائِض) — Introduction à la Science des Successions",
        status: 'available',
        content: [
        {"t": "lead", "v": "العِلمُ بِFarāʾiḍ (الفَرَائِض) — la science des successions islamiques — est l'une des disciplines les plus précises du فقه islamique. Le Prophète ﷺ l'a appelée « la moitié du savoir » et a recommandé de l'apprendre et de l'enseigner."},
        { t:'ar', v:"تَعَلَّمُوا al-farāʾiḍ (الفَرَائِض)َ وَعَلِّمُوهَا النَّاسَ فَإِنَّهَا نِصفُ العِلمِ وَهُوَ يُنسَى", n:"« Apprenez les فَرَائِض et enseignez-les, car elles constituent la moitié du savoir et elles seront les premières à disparaître. » — Hadīth (Ibn Māja et al-Dāraquṭnī)" },
        {"t": "h", "v": "Fondements coraniques"},
        { t:'ul', v:[
          "Les parts successorales sont fixées par le Coran (sourate al-Nisāʾ, versets 11, 12 et 176) — ce ne sont pas des décisions humaines.",
          "Toute personne connaissant l'Islam doit connaître les droits de base des héritiers.",
          "Coran 4:13 : « Ce sont les limites fixées par Allah — ceux qui obéissent à Allah et à Son messager seront admis dans des jardins. »"
        ] },
        {"t": "h", "v": "موانع الإِرث — Causes d'exclusion du droit d'hériter"},
        { t:'ul', v:[
          "<strong>1. القَتل :</strong> le meurtrier n'hérite pas de sa victime.",
          "<strong>2. الرِّقّ :</strong> l'esclave n'hérite pas et ne transmet pas (contexte historique).",
          "<strong>3. اختلاف الدِّين :</strong> pas d'héritage entre Muslim et non-Muslim.",
          "Spécificité malikite : le al-ridda (الرِّدَّة) (apostasie) empêche l'héritage — l'apostat n'hérite pas d'un Muslim ni un Muslim d'un apostat.",
          "Note : les mariages mixtes Muslim-non-Muslim → pas d'héritage islamique mutuel."
        ] },
        {"t": "h", "v": "أسباب الإِرث — Causes du droit d'hériter"},
        { t:'ul', v:[
          "<strong>1. Nasab (النَّسَب) :</strong> lien de sang (filiation légitime).",
          "<strong>2. Nikāḥ (النِّكَاح) :</strong> mariage légal — l'époux et l'épouse héritent mutuellement.",
          "<strong>3. Walāʾ (الوَلَاء) :</strong> lien d'affranchissement — héritier résiduel si pas d'autre héritier."
        ] },
        {"t": "h", "v": "التَّرتِيب العام — Vue d'ensemble du calcul successoral"},
        {"t": "p", "v": "Le calcul des parts se fait en 3 étapes : (1) identifier les héritiers présents ; (2) appliquer les حُجُوب (exclusions) ; (3) calculer les parts selon les règles coranique + malikites. En cas de dépassement total → ʿAwl (العَوْل). En cas de résidu → Radd (الرَّدّ) ʿAṣaba (العَصَبَة)."},
        {"t": "note", "v": "La succession islamique est fondée sur le principe du besoin et de la responsabilité : l'homme hérite du double de la femme car il est légalement responsable de l'entretien (نَفَقَة) de sa famille. C'est un équilibre systémique, pas une inégalité arbitraire."}
        ]
      },
      {
        id: "far-02",
        title: "أَصنَاف الوَرَثَة — Les Héritiers et leurs Parts",
        status: 'available',
        content: [
        {"t": "lead", "v": "Il existe deux grandes catégories d'héritiers en droit islamique : Aṣḥāb al-Furūḍ (أَصحَابُ الفُرُوض) (héritiers à parts fixes coraniques) et les عَصَبَة (héritiers résiduels mâles agnatiques). La Risāla et le Mukhtasar Khalīl en établissent les listes précises."},
        {"t": "h", "v": "Aṣḥāb al-Furūḍ (أَصحَابُ الفُرُوض) — Héritiers à parts fixes"},
        {"t": "p", "v": "Ce sont les héritiers dont la part est fixée explicitement par le Coran (الآيات 11-12 et 176 de Sourate al-Nisāʾ) :"},
        { t:'ul', v:[
          "<strong>La fille :</strong> 1/2 si seule, 2/3 si plusieurs filles sans frère.",
          "<strong>La fille du fils :</strong> même que la fille, en présence du fils.",
          "<strong>La mère :</strong> 1/3 si pas d'enfants ni plusieurs frères/sœurs ; sinon 1/6.",
          "<strong>La grand-mère :</strong> 1/6 en l'absence de mère.",
          "<strong>Le père :</strong> 1/6 en présence d'un fils ; prend le résidu (عَصَبَة) sinon.",
          "<strong>Le grand-père :</strong> comme le père en son absence.",
          "<strong>L'épouse :</strong> 1/4 sans enfant ; 1/8 avec enfant.",
          "<strong>L'époux :</strong> 1/2 sans enfant ; 1/4 avec enfant.",
          "<strong>Les frères/sœurs utérins :</strong> 1/6 (un seul) ou 1/3 partagé (plusieurs).",
          "<strong>Les frères/sœurs germains :</strong> 2/3 partagés si plusieurs sœurs sans frère."
        ] },
        {"t": "h", "v": "ʿAṣaba (العَصَبَة) — Les Héritiers Résiduels Agnatiques"},
        {"t": "p", "v": "L'عَصَبَة prend le résidu (ما بقي) après les parts fixes. Si rien ne reste → zéro. Si tout reste (pas d'أَصحَاب فُرُوض) → tout."},
        { t:'ul', v:[
          "<strong>Ordre de priorité ʿAṣaba (العَصَبَة) :</strong> fils → fils du fils → père → frère germain → frère consanguin → fils de frère → oncle paternel → fils d'oncle.",
          "Le plus proche degré exclut le plus éloigné.",
          "<strong>عَصَبَة بِالغَيْر :</strong> la fille devient عَصَبَة en présence de son frère — elle prend la moitié de sa part.",
          "<strong>عَصَبَة مَعَ الغَيْر :</strong> les sœurs deviennent عَصَبَة en présence de filles."
        ] },
        { t:'ar', v:"لِلذَّكَرِ مِثلُ حَظِّ الأُنثَيَيْن", n:"« Au mâle la part de deux femelles » — Coran 4:11" },
        {"t": "note", "v": "Mnémotechnique pour les parts : 1/2 → fille seule, époux sans enfant ; 1/4 → épouse sans enfant, époux avec enfant ; 1/8 → épouse avec enfant ; 1/3 → mère sans enfants, frères/sœurs utérins ensemble ; 1/6 → père/mère/grand-père/grand-mère avec enfants ; 2/3 → deux filles ou plus."}
        ]
      },
      {
        id: "far-03",
        title: "ḤḤujūb (الحُجُوب) والمَوَانِع — Exclusions et Blocages",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le système de حُجُوب (exclusions) est central pour comprendre qui hérite réellement dans une succession complexe. Il y a deux types : ḤḤajb (الحَجب)ُ الكُلِّي (exclusion totale) et ḤḤajb (الحَجب)ُ الجُزئِيّ (réduction de part)."},
        {"t": "h", "v": "Ḥajb al-ḤḤajb al-Ḥirmān (حَجبُ الحِرمَان) — L'Exclusion Totale"},
        {"t": "p", "v": "Certains héritiers sont complètement exclus par la présence d'un autre héritier plus proche :"},
        { t:'ul', v:[
          "<strong>Le fils du fils :</strong> exclu par le fils.",
          "<strong>Le grand-père :</strong> exclu par le père.",
          "<strong>La grand-mère :</strong> exclue par la mère.",
          "<strong>La fille du fils :</strong> exclue par deux filles ou plus (sans frère du fils).",
          "<strong>Les frères/sœurs consanguins :</strong> exclus par les frères germains.",
          "<strong>Les frères/sœurs (tous types) :</strong> exclus par le fils, le fils du fils, ou le père.",
          "<strong>Spécificité malikite :</strong> le grand-père n'est PAS exclu par les frères/sœurs (contrairement à l'école hanafite)."
        ] },
        {"t": "h", "v": "ḤḤajb al-Nuqṣān (حَجبُ النُّقصَان) — La Réduction de Part"},
        { t:'ul', v:[
          "La mère passe de 1/3 à 1/6 en présence d'un enfant ou de plusieurs frères/sœurs.",
          "L'époux passe de 1/2 à 1/4 en présence d'un enfant.",
          "L'épouse passe de 1/4 à 1/8 en présence d'un enfant.",
          "La fille du fils passe de 1/2 à 1/6 (complément à 2/3) en présence d'une fille.",
          "La grand-mère (1/6) est réduite à 0 par la mère."
        ] },
        {"t": "h", "v": "Cas des frères avec le grand-père (الأَكدَرِيَّة)"},
        {"t": "p", "v": "L'الأَكدَرِيَّة est le cas le plus célèbre de jurisprudence successorale malikite — un cas unique dans l'ensemble du fiqh. Dans la succession (époux + mère + grand-père + sœur germaine), le grand-père et la sœur germaine partagent leur pool ensemble d'une manière non standard. L'Imām Mālik a tranché ce cas différemment des autres écoles."},
        {"t": "note", "v": "Règle de mémorisation pour les حُجُوب principaux : les fils, fils de fils et père excluent la plupart des collatéraux. Le mari et l'épouse ne sont jamais complètement exclus. La mère n'est jamais complètement exclue (au minimum 1/6). Les frères/sœurs utérins sont exclus par tout descendant direct (fils, fille) et par le père."}
        ]
      },
      {
        id: "far-04",
        title: "ʿAwl (العَوْل) وRadd (الرَّدّ) — Ajustements de la Succession",
        status: 'available',
        content: [
        {"t": "lead", "v": "Deux situations exceptionnelles se produisent : ʿAwl (العَوْل) quand les parts fixes dépassent 1 (la totalité) ; Radd (الرَّدّ) quand les parts fixes n'atteignent pas 1 et qu'il reste un résidu sans عَصَبَة."},
        {"t": "h", "v": "ʿAwl (العَوْل) — L'Ajustement à la Hausse"},
        {"t": "p", "v": "Si la somme des parts fixes dépasse 1 (100%), on augmente le dénominateur et chaque héritier reçoit une part proportionnellement réduite. Exemple : 1/2 + 1/4 + 1/3 = 13/12 → on passe à 13 (numérateur total), chaque part devient X/13."},
        { t:'ul', v:[
          "Le وَ ʿAwl (العَوْل) débute à partir de la valeur 6 (base de calcul la plus commune).",
          "Le maximum historique connu est 27 (lors de la succession de ʿUthmān ibn ʿAffān ﵁).",
          "Position malikite (et de tous les madhāhib sauf les zaydites) : ʿAwl (العَوْل) est valide — les parts sont réduites proportionnellement.",
          "Exemple classique : Époux (1/2) + 2 sœurs (2/3) = 1/2 + 2/3 = 7/6 → ʿAwl (العَوْل) à 7 : époux reçoit 3/7, sœurs 4/7."
        ] },
        {"t": "h", "v": "Radd (الرَّدّ) — L'Ajustement à la Baisse"},
        {"t": "p", "v": "Si les parts fixes ne totalisent pas 1 et qu'il n'y a pas d'عَصَبَة, le résidu revient aux أَصحَاب الفُرُوض en proportion de leurs parts. C'Radd (الرَّدّ)."},
        { t:'ul', v:[
          "Exemple : une fille (1/2) et une mère (1/6) = 2/3 total. Reste 1/3 sans عَصَبَة → Radd (الرَّدّ) : la fille reçoit 3/4 et la mère 1/4 du total.",
          "<strong>Spécificité malikite fondamentale : Radd (الرَّدّ) sur le conjoint — INTERDIT.</strong> L'époux et l'éRadd (الرَّدّ).",
          "Si la fille est seule sans عَصَبَة : elle reçoit 1/2 (sa part) + Radd (الرَّدّ) du reste = tout.",
          "Si époux + fille : époux = 1/4 (avec enfant), fille = 1/2, reste 1/4 → Radd (الرَّدّ) sur la fille seulement (pas l'époux)."
        ] },
        { t:'ar', v:"وَللرَّجُلِ مِثلُ حَظِّ الأُنثَيَيْنِ فِي المَوَارِيثِ", n:"Coran 4:176 — Base de la part de العَصَبَة masculine" },
        {"t": "note", "v": "Radd (الرَّدّ) par rapport aux autres écoles : Radd (الرَّدّ) sur le conjoint. Les malikites (et chāfiʿites) ne le permettent pas. Cette différence a des conséquences concrètes importantes : si une femme décède sans عَصَبَة ni autre héritier qu'un époux et une fille, Bayt al-Māl (بَيتُ المَال) (État islamique) selon les malikites."}
        ]
      },
      {
        id: "far-05",
        title: "مَسَائِل خَاصَّة — Cas Pratiques et Calculs",
        status: 'available',
        content: [
        {"t": "lead", "v": "La science des فَرَائِض se concrétise dans le calcul précis des parts. Ce chapitre présente 5 cas pratiques types — du plus simple au plus complexe — avec les méthodes de résolution malikites."},
        {"t": "h", "v": "Cas 1 : Père + Mère + Fils unique"},
        { t:'ul', v:[
          "Père : 1/6 (en présence de fils) + عَصَبَة du reste.",
          "Mère : 1/6 (en présence de fils).",
          "Fils : عَصَبَة du reste (2/3).",
          "Total : père 1/6 + عَصَبَة (éventuellement) si le fils est exclu, mère 1/6, fils prend le reste."
        ] },
        {"t": "h", "v": "Cas 2 : Époux + Fille + Fils du fils"},
        { t:'ul', v:[
          "Époux : 1/4 (avec descendant).",
          "Fille : 1/2.",
          "Fils du fils : عَصَبَة du reste (1/4).",
          "Note : si la fille était deux, elle aurait 2/3 et le fils du fils aurait 1/4 - 2/3 = ? → ʿAwl (العَوْل)."
        ] },
        {"t": "h", "v": "Cas 3 : Époux + Mère + 2 SœʿAwl (العَوْل)"},
        { t:'ul', v:[
          "Époux : 1/2 = 3/6.",
          "Mère : 1/6 (en présence de sœurs).",
          "2 Sœurs : 2/3 = 4/6.",
          "Total : 3+1+4 = 8/6 → ʿAwl (العَوْل) : on divise tout par 8. Époux 3/8, mère 1/8, sœurs 4/8."
        ] },
        {"t": "h", "v": "Cas 4 : Fille seule + Pas d'عَصَبَة (الرَّدّ)"},
        { t:'ul', v:[
          "Fille : 1/2 (part fixe).",
          "Reste : 1/2 sans عَصَبَة → Radd (الرَّدّ) sur la fille.",
          "Résultat : la fille prend tout (100%) Radd (الرَّدّ)."
        ] },
        {"t": "h", "v": "Cas 5 : Épouse + Fille + Pas d'عَصَبَة (الرَّدّ malikite)"},
        { t:'ul', v:[
          "Épouse : 1/8 (avec enfant).",
          "Fille : 1/2 = 4/8.",
          "Total : 1/8 + 4/8 = 5/8. Reste : 3/8.",
          "Malikite : Radd (الرَّدّ) interdit sur l'épouse → le reste (3/8) Bayt al-Māl (بَيتُ المَال).",
          "Hanafite : Radd (الرَّدّ) sur l'épouse → elle reçoit 1/8 + 3/8×(1/5) supplémentaires."
        ] },
        {"t": "note", "v": "Pour calculer : (1) lister les héritiers ; (2) appliquer les حُجُوب ; (3) additionner les parts fixes ; (4) si total > 1 → ʿAwl (العَوْل) ; (5) si total < 1 et عَصَبَة → ils prennent le reste ; (6) si total < 1 et pas d'عَصَبَة → Radd (الرَّدّ) (sauf sur conjoint selon les malikites) ; (7) si total < 1 et personne d'autre → Bayt al-Māl (بَيتُ المَال)."}
        ]
      },
      {
        id: "far-06",
        title: "Farāʾiḍ (الفَرَائِض) المُعَاصِرَة — Succession Islamique Contemporaine",
        status: 'available',
        content: [
        {"t": "lead", "v": "Application du droit successoral islamique aux réalités contemporaines : familles recomposées, succession en France, enfants adoptifs, assurances-vie."},
        {"t": "h", "v": "الوَلَد غَير الشَّرعِيّ — L'enfant né hors mariage"},
        { t:'ul', v:[
          "Position malikite : l'enfant né hors mariage n'hérite pas du père biologique (Nasab (النَّسَب) légitime) — mais hérite de la mère.",
          "L'الاعتِرَاف الطَّوعِيّ (reconnaissance volontaire par le père) : le rite malikite l'accepte sous conditions — le père peut établir la فِرَاش (paternité) mais pas facilement.",
          "Application contemporaine : un enfant reconnu légalement en France hérite selon le droit civil ; ses droits islamiques dépendent de la légitimité du mariage."
        ] },
        {"t": "h", "v": "Ṭalāq (الطَّلَاق) والوَفَاة — Divorce et décès"},
        { t:'ul', v:[
          "Si le mari décède pendant l'عِدَّة d'un ṬṬalāq Rajʿī (طَلَاق رَجعِيّ) → l'épouse hérite toujours (le mariage est encore en vigueur).",
          "Si le mari décède après ṬṬalāq Bāʾin (طَلَاق بَائِن) → l'épouse n'hérite pas.",
          "Si le mari divorce en état de mَرَض المَوْت pour priver l'épouse de l'héritage → position malikite : elle hérite quand même."
        ] },
        {"t": "h", "v": "التَّبَنِّي — L'Adoption"},
        { t:'ul', v:[
          "L'Islam interdit la filiation adoptive (الإِلحَاق بِالنَّسَب) — l'enfant adopté n'hérite pas par التَّبَنِّي.",
          "Cependant : une donation de son vivant (هِبَة), un testament (dans la limite du 1/3), ou une assurance-vie peuvent transmettre un patrimoine à l'enfant adopté.",
          "En France : l'adoption plénière crée des droits civils successoraux — ceux-ci coexistent avec les règles islamiques."
        ] },
        {"t": "h", "v": "La succession franco-islamique — Réconciliation"},
        { t:'ul', v:[
          "En France, le droit civil s'impose : égalité des enfants (hors quotité disponible), réserve héréditaire.",
          "Le Muslim peut utiliser la quotité disponible (25-50%) pour corriger des inégalités islamiques (ex : donner plus au fils).",
          "Un testament civil bien rédigé peut approcher les parts islamiques dans la quotité disponible.",
          "Recommandation de doctrine-malikite.fr : consulter un notaire ET un savant islamique pour optimiser les deux systèmes."
        ] },
        {"t": "note", "v": "Rappel important : les fَرَائِض islamiques sont d'ordre divin (Coran 4:11-12). Elles s'imposent à la conscience du Muslim même là où la loi civile diverge. L'effort de les respecter au maximum (dans le cadre légal) est une obligation morale et religieuse."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-mawarith',
        title: 'Questionnaire — ' + "Farāʾiḍ (الفَرَائِض) — Mīrāth (المِيرَاث)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-far-01",
          text: "Le Prophète ﷺ a appelé les فَرَائِض :",
          choices: [
          { id:"a", text:"Un tiers du savoir" },
          { id:"b", text:"La moitié du savoir" },
          { id:"c", text:"Une obligation facultative" },
          { id:"d", text:"Une discipline secondaire" }
          ],
          correctId: "b",
          explanation: "Hadīth : « تَعَلَّمُوا Farāʾiḍ (الفَرَائِض)َ... فَإِنَّهَا نِصفُ العِلمِ » — les فَرَائِض constituent la moitié du savoir islamique. Le Prophète ﷺ a ajouté qu'elles seraient les premières à disparaître — d'où l'urgence de les apprendre et d'enseigner."
        },
        {
          id: "q-far-02",
          text: "Quelles sont les 3 causes d'exclusion du droit d'hériter ?",
          choices: [
          { id:"a", text:"Âge, distance et religion" },
          { id:"b", text:"القَتل (meurtre de sa victime), الرِّقّ (esclavage) et اختِلَافُ الدِّين (différence de religion)" },
          { id:"c", text:"Mariage, adoption et filiation" },
          { id:"d", text:"Pauvreté, distance et déshérence" }
          ],
          correctId: "b",
          explanation: "Les 3 موانع الإِرث : (1) القَتل — le meurtrier n'hérite pas de sa victime ; (2) الرِّقّ — l'esclave n'hérite pas ni ne fait hériter (contexte historique) ; (3) اختِلَاف الدِّين — pas d'héritage mutuel entre Muslim et non-Muslim."
        },
        {
          id: "q-far-03",
          text: "<strong>PIÈGE :</strong> Un non-Muslim peut-il hériter de son époux/épouse Muslim(e) en droit islamique ?",
          choices: [
          { id:"a", text:"Oui — le mariage prime" },
          { id:"b", text:"Non — اختِلَاف الدِّين exclut l'héritage mutuel" },
          { id:"c", text:"Oui s'ils ont des enfants" },
          { id:"d", text:"Cela dépend du pays" }
          ],
          correctId: "b",
          explanation: "Principe islamique clair : il n'y a pas d'héritage entre Muslim et non-Muslim en droit islamique. Le non-Muslim ne peut pas hériter de son conjoint Muslim par les règles islamiques, et vice versa. En France, le droit civil s'impose différemment."
        },
        {
          id: "q-far-04",
          text: "La part de l'époux SANS enfant est :",
          choices: [
          { id:"a", text:"1/4" },
          { id:"b", text:"1/6" },
          { id:"c", text:"1/2" },
          { id:"d", text:"1/3" }
          ],
          correctId: "c",
          explanation: "Coran 4:12 : si la femme décède sans enfant, l'époux reçoit 1/2. Si elle a des enfants, il reçoit 1/4. Mnémotechnique : pas d'enfant → moitié ; avec enfant → quart."
        },
        {
          id: "q-far-05",
          text: "La part de l'épouse (ou des épouses) avec enfants est :",
          choices: [
          { id:"a", text:"1/4" },
          { id:"b", text:"1/8" },
          { id:"c", text:"1/6" },
          { id:"d", text:"1/3" }
          ],
          correctId: "b",
          explanation: "Coran 4:12 : l'épouse (ou la part partagée entre plusieurs épouses) reçoit 1/8 si le défunt avait des enfants. Sans enfants → 1/4. En polygamie, les épouses partagent la part unique de 1/8 ou 1/4."
        },
        {
          id: "q-far-06",
          text: "<strong>PIÈGE :</strong> Si un homme décède en laissant : 1 fille + 1 fils du fils. Comment héritent-ils ?",
          choices: [
          { id:"a", text:"Fille : 1/2, fils du fils : rien" },
          { id:"b", text:"Fille : 1/2, fils du fils : عَصَبَة du reste (1/2)" },
          { id:"c", text:"Fille : 2/3, fils du fils : 1/3" },
          { id:"d", text:"Tout à la fille" }
          ],
          correctId: "b",
          explanation: "La fille reçoit 1/2 (part fixe coran.). Le fils du fils est عَصَبَة (résiduel) et prend le reste (1/2). Si c'était 2 filles : elles prendraient 2/3, le fils du fils 1/3. Le fils du fils n'est exclu que par un fils ou fils de fils plus proche."
        },
        {
          id: "q-far-07",
          text: "Une sœur germaine devient عَصَبَة مَعَ الغَيْر dans quel cas ?",
          choices: [
          { id:"a", text:"En présence d'un frère germain" },
          { id:"b", text:"En présence d'une ou plusieurs filles (sans fils)" },
          { id:"c", text:"Seule sans autres héritiers" },
          { id:"d", text:"En présence d'un époux" }
          ],
          correctId: "b",
          explanation: "La sœur germaine est عَصَبَة مَعَ الغَيْر quand une fille (ou fille du fils) existe sans frère. La fille prend 1/2 (ou les filles 2/3), et la sœur germaine prend le résidu comme عَصَبَة. Sans la fille, la sœur germaine aurait sa part de فَرض (1/2 ou 2/3)."
        },
        {
          id: "q-far-08",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Le grand-père (الجَدّ) est-il exclu par les frères germains ?",
          choices: [
          { id:"a", text:"Oui — comme chez les hanafites" },
          { id:"b", text:"Non — le grand-père n'est pas exclu par les frères/sœurs en rite malikite" },
          { id:"c", text:"Seulement par 3 frères ou plus" },
          { id:"d", text:"Cela dépend du montant de la succession" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : le grand-père partage avec les frères (et sœurs) selon des règles complexes — il n'est PAS exclu par eux. Chez les hanafites, le grand-père EXCLUT les frères. Chez les malikites, les deux coexistent selon des modalités de l'أَكدَرِيَّة et autres cas."
        },
        {
          id: "q-far-09",
          text: "La mère reçoit-elle toujours 1/3 ?",
          choices: [
          { id:"a", text:"Oui — sa part est fixe à 1/3" },
          { id:"b", text:"Non — elle reçoit 1/3 sans enfants ni plusieurs frères/sœurs, et 1/6 avec enfants ou plusieurs frères/sœurs" },
          { id:"c", text:"La mère hérite seulement s'il n'y a pas de père" },
          { id:"d", text:"Non — elle hérite seulement si elle est veuve" }
          ],
          correctId: "b",
          explanation: "Coran 4:11 : la mère reçoit 1/3 si le défunt n'a pas d'enfants et ne laisse pas plusieurs frères/sœurs. Sinon elle reçoit 1/6. Elle ne peut jamais être complètement exclue — au minimum 1/6. ḤḤajb al-Nuqṣān (حَجبُ النُّقصَان) (réduction) mais jamais Ḥajb al-ḤḤajb al-Ḥirmān (حَجبُ الحِرمَان) (exclusion totale)."
        },
        {
          id: "q-far-10",
          text: "Qu'ʿAwl (العَوْل) ?",
          choices: [
          { id:"a", text:"Une façon de partager l'héritage entre sœurs" },
          { id:"b", text:"Un ajustement à la hausse du dénominateur quand les parts fixes dépassent 1 — chacun est réduit proportionnellement" },
          { id:"c", text:"Un surplus donné au bَيتُ المَال" },
          { id:"d", text:"Un type de testament islamique" }
          ],
          correctId: "b",
          explanation: "ʿAwl (العَوْل) survient quand les parts fixes totalisent plus de 1 (ex : époux 1/2 + 2 sœurs 2/3 = 7/6). Solution : augmenter le dénominateur (passer à 7) et réduire chaque part proportionnellement. ʿAwl (العَوْل) sauf les zaydites."
        },
        {
          id: "q-far-11",
          text: "<strong>SPÉCIFICITÉ MALIKITE CRUCIALE :</strong> Radd (الرَّدّ) (retour du surplus) s'applique-t-il à l'époux/épouse en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — comme à tous les héritiers" },
          { id:"b", text:"Non — l'époux et l'éRadd (الرَّدّ) en rite malikite" },
          { id:"c", text:"Seulement en présence d'enfants" },
          { id:"d", text:"Seulement pour l'époux, pas l'épouse" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite fondamentale : Radd (الرَّدّ) sur le conjoint est INTERDIT. Si reste un surplus sans عَصَبَة, Bayt al-Māl (بَيتُ المَال) (État islamique), PAS à l'époux/épouse. C'est une difféRadd (الرَّدّ) sur le conjoint."
        },
        {
          id: "q-far-12",
          text: "<strong>CALCUL :</strong> Époux + Mère + 2 Sœurs germaines. Calculer les parts (العَوْل possible).",
          choices: [
          { id:"a", text:"Époux 1/3, mère 1/3, sœurs 1/3" },
          { id:"b", text:"Époux 3/8, mère 1/8, sœurs 4/8 — aprèʿAwl (العَوْل) de 6 à 8" },
          { id:"c", text:"Époux 1/2, mère 1/6, sœurs 1/3" },
          { id:"d", text:"Époux 1/4, mère 1/4, sœurs 2/4" }
          ],
          correctId: "b",
          explanation: "Calcul : époux 1/2 (= 3/6) + mère 1/6 + sœurs 2/3 (= 4/6) = 8/6 → ʿAwl (العَوْل). Base 8 : époux 3/8, mère 1/8, 2 sœurs 4/8 (= 2/8 chacune). Total = 8/8 = 1. ✓"
        },
        {
          id: "q-far-13",
          text: "Qui prend le résidu (عَصَبَة) quand une fille hérite avec son frère ?",
          choices: [
          { id:"a", text:"Le frère prend tout, la fille rien" },
          { id:"b", text:"Ils partagent : le frère = 2 parts, la sœur = 1 part (عَصَبَة بِالغَيْر)" },
          { id:"c", text:"La fille prend tout" },
          { id:"d", text:"Ils partagent à égalité" }
          ],
          correctId: "b",
          explanation: "Quand un frère et une sœur héritent ensemble comme عَصَبَة (sans autres héritiers à parts fixes), ils partagent : frère = 2 × sœur. Coran 4:11 : « لِلذَّكَرِ مِثلُ حَظِّ الأُنثَيَيْن ». La sœur est devenue عَصَبَة بِالغَيْر par la présence de son frère."
        },
        {
          id: "q-far-14",
          text: "<strong>PIÈGE :</strong> Un homme décède en laissant : une fille seule, sans عَصَبَة ni autre héritier. Que reçoit-elle en rite malikite ?",
          choices: [
          { id:"a", text:"1/2 seulement — Bayt al-Māl (بَيتُ المَال)" },
          { id:"b", text:"Tout (100%) — Radd (الرَّدّ) sur la fille" },
          { id:"c", text:"1/2 et le reste est partagé avec des frères absents" },
          { id:"d", text:"1/3 seulement" }
          ],
          correctId: "b",
          explanation: "La fille seule : part fixe = 1/2. Pas d'عَصَبَة → Radd (الرَّدّ) du reste (1/2) sur la fille. Elle prend donc 100%. Radd (الرَّدّ) est permis sur les أَصحَاب الفُرُوض (fille = أصحاب فروض) sauf le conjoint."
        },
        {
          id: "q-far-15",
          text: "<strong>Radd (الرَّدّ) MALIKITE :</strong> Épouse + Fille. Pas d'عَصَبَة.",
          choices: [
          { id:"a", text:"Épouse 1/4, fille 3/4" },
          { id:"b", text:"Épouse 1/8, fille 7/8" },
          { id:"c", text:"Épouse 1/8, fille 1/2, reste (3/8) Bayt al-Māl (بَيتُ المَال)" },
          { id:"d", text:"Fille prend tout" }
          ],
          correctId: "c",
          explanation: "Calcul : épouse 1/8 (avec enfant) + fille 1/2 (= 4/8) = 5/8. Reste 3/8. Malikite : Radd (الرَّدّ) interdit sur l'épouse → les 3/8 Bayt al-Māl (بَيتُ المَال). L'épouse garde ses 1/8 et la fille ses 1/2."
        },
        {
          id: "q-far-16",
          text: "Les frères/sœurs utérins sont exclus par :",
          choices: [
          { id:"a", text:"Uniquement par le père" },
          { id:"b", text:"Tout descendant (fils, fille, fils du fils...) ET le père" },
          { id:"c", text:"Les frères germains seulement" },
          { id:"d", text:"L'épouse" }
          ],
          correctId: "b",
          explanation: "Les frères/sœurs utérins (نصف ظهر/بطن) sont exclus par : tout descendant (fils, fille, fils du fils, fille du fils) ET le père. Ils ne sont PAS exclus par les grands-parents."
        },
        {
          id: "q-far-17",
          text: "En rite malikite, le mari qui divorce en état de مَرَض الموت (maladie mortelle) pour priver sa femme de l'héritage :",
          choices: [
          { id:"a", text:"Réussit — la femme n'hérite plus" },
          { id:"b", text:"Ne réussit pas — la femme hérite quand même" },
          { id:"c", text:"Cela dépend de l'accord de la femme" },
          { id:"d", text:"Valide si le divorce est bain" }
          ],
          correctId: "b",
          explanation: "Position malikite : si le mari divorce en ṬṬalāq Bāʾin (طَلَاق بَائِن) en état de mَرَض المَوْت dans le but manifeste de priver l'épouse de son héritage → la femme hérite quand même (pendant son عِدَّة). L'Islam protège l'épouse contre cette manœuvre malveillante."
        },
        {
          id: "q-far-18",
          text: "L'enfant adopté hérite-t-il de son父 adoptif en droit islamique ?",
          choices: [
          { id:"a", text:"Oui — comme un fils biologique" },
          { id:"b", text:"Non — l'adoption ne crée pas de فِرَاش (lien de filiation islamique)" },
          { id:"c", text:"Oui jusqu'à 1/3 de la succession" },
          { id:"d", text:"Seulement s'il est mentionné dans le testament" }
          ],
          correctId: "b",
          explanation: "L'Islam interdit le التَّبَنِّي (adoption conférant la filiation) — Coran 33:4-5. L'enfant adopté ne porte pas le nom du père adoptif et n'héNasab (النَّسَب). Des alternatives existent : هِبَة de son vivant, وَصِيَّة dans le 1/3, assurance-vie islamique."
        },
        {
          id: "q-far-19",
          text: "<strong>SPÉCIFICITÉ :</strong> Comment la فِرَاش du grand-père s'articule-t-elle avec les frères selon l'école malikite ?",
          choices: [
          { id:"a", text:"Le grand-père exclut toujours les frères" },
          { id:"b", text:"Les frères excluent toujours le grand-père" },
          { id:"c", text:"Le grand-père et les frères coexistent selon des règles précises — y compris l'الأَكدَرِيَّة" },
          { id:"d", text:"Ils ont toujours parts égales" }
          ],
          correctId: "c",
          explanation: "Spécificité malikite : le grand-père et les frères/sœurs coexistent, partageant selon des règles précises. L'الأَكدَرِيَّة est le cas le plus célèbre (époux + mère + grand-père + sœur germaine) où l'Imām Mālik a tranché différemment de toutes les autres écoles, créant une règle unique au droit malikite."
        },
        {
          id: "q-far-20",
          text: "<strong>CONTEMPORAIN :</strong> Un Muslim en France veut que son fils aîné hérite d'une part plus grande que sa fille (règle islamique). Que peut-il faire légalement ?",
          choices: [
          { id:"a", text:"Rien — la loi française l'interdit" },
          { id:"b", text:"Utiliser la quotité disponible (25-50%) via testament civil pour augmenter la part du fils" },
          { id:"c", text:"Déshériter la fille" },
          { id:"d", text:"Faire un testament islamique non reconnu" }
          ],
          correctId: "b",
          explanation: "La réserve héréditaire française garantit l'égalité des enfants. Mais le testateur peut orienter la quotité disponible (25-50% selon nombre d'enfants) vers le fils pour se rapprocher des parts islamiques. Recommandation de doctrine-malikite.fr : combinaison testament civil (quotité disponible) + donations de son vivant."
        },
        {
          id: "q-far-21",
          text: "<strong>CALCUL SIMPLE :</strong> Père + Mère + 1 Fils. Qui prend quoi ?",
          choices: [
          { id:"a", text:"Père 1/3, mère 1/3, fils 1/3" },
          { id:"b", text:"Père 1/6, mère 1/6, fils عَصَبَة (4/6 = 2/3)" },
          { id:"c", text:"Père tout, mère rien" },
          { id:"d", text:"Fils tout, père et mère rien" }
          ],
          correctId: "b",
          explanation: "Avec un fils : père 1/6 (حَجبُ النُّقصَان) + 1/6 mère + fils prend le reste (2/3) comme عَصَبَة. Le père et la mère ne sont jamais totalement exclus — au minimum 1/6 chacun."
        },
        {
          id: "q-far-22",
          text: "Quelle est la part des frères/sœurs utérins quand ils héritent ensemble ?",
          choices: [
          { id:"a", text:"1/3 pour chacun" },
          { id:"b", text:"1/6 pour un seul, 1/3 partagé entre plusieurs" },
          { id:"c", text:"Moitié entre eux" },
          { id:"d", text:"Ils ne peuvent jamais hériter ensemble" }
          ],
          correctId: "b",
          explanation: "Coran 4:12 : si le défunt n'a pas d'enfants ni de père, et laisse plusieurs frères/sœurs utérins → ils partagent 1/3. S'il n'en laisse qu'un → il reçoit 1/6. Cette règle est la même homme ou femme (contrairement aux autres frères/sœurs)."
        },
        {
          id: "q-far-23",
          text: "<strong>PIÈGE FRÉQUENT :</strong> Le père hérite-t-il toujours de 1/6 ?",
          choices: [
          { id:"a", text:"Oui — sa part est toujours 1/6" },
          { id:"b", text:"Non — avec un fils : 1/6 fixe + éventuellement عَصَبَة du reste ; sans fils et filles : il est عَصَبَة pur et prend tout le résidu" },
          { id:"c", text:"Le père hérite seulement s'il n'y a pas de fils" },
          { id:"d", text:"Non — le père hérite 1/3 toujours" }
          ],
          correctId: "b",
          explanation: "Le père a deux situations : (1) en présence d'un fils → père fixe à 1/6 ; (2) en présence de filles seulement (sans fils) → père reçoit 1/6 fixe PLUS le résidu comme عَصَبَة ; (3) sans descendants → père est عَصَبَة pur, prend tout le résidu (ou tout si pas d'autres héritiers)."
        },
        {
          id: "q-far-24",
          text: "La grand-mère maternelle peut-elle hériter si sa fille (la mère) est vivante ?",
          choices: [
          { id:"a", text:"Oui — elles héritent ensemble" },
          { id:"b", text:"Non — la mère exclut la grand-mère entièrement" },
          { id:"c", text:"Oui mais à 1/12" },
          { id:"d", text:"Seulement la grand-mère du côté du père" }
          ],
          correctId: "b",
          explanation: "La grand-mère maternelle est soumise au Ḥajb al-ḤḤajb al-Ḥirmān (حَجبُ الحِرمَان) (exclusion totale) par la mère. Si la mère est vivante → la grand-mère ne reçoit rien. Si la mère est décédée → la grand-mère reçoit 1/6."
        },
        {
          id: "q-far-25",
          text: "<strong>SYNTHÈSE :</strong> Quels héritiers ne sont JAMAIS totalement exclus (au minimum toujours quelque chose) ?",
          choices: [
          { id:"a", text:"Seulement le fils et la fille" },
          { id:"b", text:"L'époux, l'épouse, le père, la mère — et les descendants directs" },
          { id:"c", text:"Tous les héritiers islamiques" },
          { id:"d", text:"Seulement le fils" }
          ],
          correctId: "b",
          explanation: "Héritiers jamais totalement exclus : l'époux (1/2 ou 1/4), l'épouse (1/4 ou 1/8), le père (1/6 minimum), la mère (1/6 minimum), les descendants directs (fils/fille). Tous les autres peuvent être totalement exclus par Ḥajb al-ḤḤajb al-Ḥirmān (حَجبُ الحِرمَان) selon les héritiers présents."
        }
        ]
      }
    },

    /* ═══ Aymān (الأَيمَان) وNudhūr (النُّذُور) ═══ */
    {
      id: "ayman",
      title: "Serments et Vœux",
      arabicTitle: "الأَيمَان والنُّذُور",
      icon: "seal",
      description: "Types de serments islamiques, leurs expiations et les règles des vœux selon le rite malikite.",
      source: "Risāla Ibn Abī Zayd · Mukhtasar Khalīl pp.200-210",
      badge: {
        id: 'badge-avance-ayman',
        title: "Expert des Engagements",
        arabicTitle: "عَارِفُ الأَيمَان",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Aymān (الأَيمَان) وNudhūr (النُّذُور)"
      },

      lessons: [
              {
        id: "aym-01",
        title: "أَنوَاع Aymān (الأَيمَان) — Les Types de Serments",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'يَمِين (serment) est une formule solennelle par laquelle on atteste ou promet quelque chose en invoquant Allah. Le Mukhtasar Khalīl (pp. 200-210) et la Risāla distinguent plusieurs types aux règles très différentes."},
        { t:'ar', v:"وَلَا تَجعَلُوا اللَّهَ عُرضَةً لِأَيمَانِكُم", n:"« Ne faites pas d'Allah un prétexte pour vos serments. » — Coran 2:224" },
        {"t": "h", "v": "1. Yamīn al-Ghammūs (يَمِينُ الغَمُوس) — Le Serment de Faux Délibéré"},
        {"t": "p", "v": "C'est jurer délibérément sur une chose passée qu'on sait fausse : « je jure par Allah que j'étais chez vous hier » alors qu'on ne l'était pas."},
        { t:'ul', v:[
          "C'est l'un des péchés majeurs (الكَبَائِر).",
          "Il s'appelle الغَمُوس (ce qui plonge dans le péché) car il noie son auteur dans la faute.",
          "<strong>Pas de كَفَّارَة :</strong> ce serment est si grave que la كَفَّارَة ne suffit pas — Tawba (التَّوبَة) sincère peut l'effacer.",
          "Hadīth : « Les grands péchés sont : l'associationnisme, le manque de piété filiale, le meurtre et le serment de غَمُوس. »"
        ] },
        {"t": "h", "v": "2. Yamīn al-Laghw (يَمِينُ اللَّغو) — Le Serment Involontaire"},
        {"t": "p", "v": "C'est jurer sans réelle intention, par habitude du langage : « non, par Allah ! » ou « oui, par Allah ! » dans la conversation ordinaire."},
        { t:'ul', v:[
          "Coran 2:225 : « Allah ne vous tiendra pas rigueur des serments involontaires. »",
          "Pas de كَفَّارَة — c'est pardonné.",
          "Mais il est recommandé de limiter ces expressions pour respecter le Nom d'Allah."
        ] },
        {"t": "h", "v": "3. Yamīn al-Munʿaqida (يَمِينُ المُنعَقِدَة) — Le Serment Engageant"},
        {"t": "p", "v": "C'est jurer sur une action future avec intention réelle : « je jure par Allah que je ne parlerai plus à X » ou « je jure de faire Y ». C'est le seul qui entraîne une كَفَّارَة en cas de violation."},
        { t:'ul', v:[
          "Valide seulement si on jure au nom d'Allah (ou de Ses attributs : العَزِيز, الرَّحمَان...).",
          "Jurer par le Prophète ﷺ, par la Kaʿba ou par la vie de quelqu'un → <strong>pas de كَفَّارَة</strong> selon l'Imām Mālik — ces serments ne sont pas reconnus comme serments islamiques valides.",
          "Si on rompt ce serment → كَفَّارَة obligatoire.",
          "<strong>الاستثناء بإن شاء الله :</strong> si on ajoute « إن شاء الله » immédiatement après le serment → le serment est exempté de كَفَّارَة même si rompu. Condition : le dire sans interruption."
        ] },
        {"t": "h", "v": "Sur quoi peut-on jurer ?"},
        { t:'ul', v:[
          "Uniquement par Allah et Ses attributs divins (اللَّه, الرَّحمَان, رَبّ العَالَمِين…).",
          "Pas par les créatures : prophètes, saints, anges, Coran, Kaʿba — ces serments sont makrūh et n'engagent pas de كَفَّارَة.",
          "Hadīth : « Celui qui veut jurer, qu'il jure par Allah ou se taise. » — al-Bukhārī et Muslim."
        ] },
        {"t": "note", "v": "Spécificité malikite : l'Imām Mālik considère que jurer par le Coran (والله) entraîne une كَفَّارَة si rompu, alors que jurer « par le Coran » (والقرآن) sans mentionner Allah n'est qu'une formule makrūh sans كَفَّارَة. Cette nuance est propre à l'école malikite."}
        ]
      },
      {
        id: "aym-02",
        title: "كَفَّارَةُ al-yamīn (اليَمِين) — L'Expiation du Serment Brisé",
        status: 'available',
        content: [
        {"t": "lead", "v": "La كَفَّارَةُ al-yamīn (اليَمِين) est l'Yamīn al-Munʿaqida (يَمِينُ المُنعَقِدَة) par acte volontaire. Elle est fixée par le Coran (5:89) et précisée par le Mukhtasar Khalīl."},
        { t:'ar', v:"فَكَفَّارَتُهُ إِطعَامُ عَشَرَةِ مَسَاكِينَ مِن أَوسَطِ مَا تُطعِمُونَ أَهلِيكُم أَو كِسوَتُهُم أَو تَحرِيرُ رَقَبَةٍ فَمَن لَم يَجِد فَصِيَامُ ثَلَاثَةِ أَيَّامٍ", n:"Coran 5:89 — La كَفَّارَة du serment brisé" },
        {"t": "h", "v": "Les 3 options au choix (puis le jeûne si impossible)"},
        { t:'ul', v:[
          "<strong>1. Nourrir 10 pauvres :</strong> un repas convenable (« de ce qu'on mange habituellement ») ou l'équivalent en argent selon les savants malikites contemporains.",
          "<strong>2. Habiller 10 pauvres :</strong> un vêtement décent couvrant le minimum (longue chemise ou équivalent) pour chacun.",
          "<strong>3. Libérer un esclave :</strong> non applicable aujourd'hui.",
          "<strong>Jeûner 3 jours :</strong> seulement si les 3 premières options sont impossibles (pauvreté absolue).",
          "<strong>Spécificité malikite sur l'ordre :</strong> les 3 premières options (nourriture, vêtement, esclave) sont au CHOIX du débiteur — pas de hiérarchie entre elles. Contrairement aux كَفَّارَات ordonnées (comme الظِّهَار) qui ont un ordre impératif."
        ] },
        {"t": "h", "v": "Quand la كَفَّارَة est-elle due ?"},
        { t:'ul', v:[
          "Dès qu'on rompt volontairement le serment engageant.",
          "Si on agit d'abord et paye la كَفَّارَة ensuite → valide.",
          "Si on paye la كَفَّارَة AVANT de rompre le serment → valide selon l'Imām Mālik (contrairement à l'opinion d'autres savants).",
          "Mukhtasar Khalīl : on peut payer la كَفَّارَة en argent si l'accès aux pauvres physiques est difficile."
        ] },
        {"t": "h", "v": "ḤḤinth (الحِنث) — Rompre le serment et ses conséquences"},
        { t:'ul', v:[
          "Si on a juré de ne pas faire X et qu'on le fait → كَفَّارَة.",
          "Si on a juré de faire X et qu'on ne le fait pas → كَفَّارَة.",
          "Si on oublie son serment et agit contre → pas de كَفَّارَة selon l'Imām Mālik (l'oubli est une excuse).",
          "Si on était contraint (إكراه) → pas de كَفَّارَة."
        ] },
        {"t": "note", "v": "Cas pratique fréquent : Ibrahim jure de ne plus manger de viande. Après quelques jours il change d'avis. Il peut rompre son serment et payer la كَفَّارَة — c'est même préférable si le serment le prive d'une chose licite et utile. Hadīth : « Si tu jures sur quelque chose puis vois que son contraire est meilleur, fais le meilleur et paye la كَفَّارَة de ton serment. »"}
        ]
      },
      {
        id: "aym-03",
        title: "Nadhr (النَّذر) وأَحكَامُه — Les Vœux et leurs Règles",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le نَذر (vœu) est l'engagement de faire quelque chose pour Allah si une condition se réalise, ou l'engagement pur et simple d'un acte d'adoration. Il est plus contraignant que le serment car il engage envers Allah directement."},
        {"t": "h", "v": "أَنوَاع Nadhr (النَّذر)"},
        { t:'ul', v:[
          "<strong>Nadhr (النَّذر) المُعَلَّق (conditionnel) :</strong> « si Allah guérit mon père, je jeûnerai 3 jours. » Si la condition se réalise → l'acte devient obligatoire.",
          "<strong>Nadhr (النَّذر) المُطلَق (absolu) :</strong> « je fais vœu de prier 2 rakʿāt pour Allah. » → Obligatoire immédiatement.",
          "<strong>Nadhr (النَّذر) al-mubāḥ (المُبَاح) :</strong> vœu portant sur un acte neutre — devient obligatoire une fois prononcé selon certains savants malikites.",
          "<strong>Nadhr (النَّذر) في المَعصِيَة :</strong> vœu d'accomplir un péché → NE DOIT PAS être exécuté. Pas de كَفَّارَة selon l'Imām Mālik — on se repent."
        ] },
        {"t": "h", "v": "حُكم Nadhr (النَّذر)"},
        { t:'ul', v:[
          "Le Prophète ﷺ a découragé les vœux conditionnels : « ils ne repoussent pas le destin mais n'extraient que ce qui était déjà prédestiné. »",
          "Malgré cela, exécuter un نَذر valide est obligatoire : « Que l'homme qui a fait un vœu d'obéir à Allah l'obéisse. » — Hadīth al-Bukhārī.",
          "Si la condition ne se réalise pas → pas d'obligation."
        ] },
        {"t": "h", "v": "كَفَّارَة Nadhr (النَّذر) — Expiation du vœu non tenu"},
        { t:'ul', v:[
          "Si le نَذر est possible mais non exécuté → كَفَّارَةُ al-yamīn (اليَمِين) (selon une position malikite).",
          "Si le نَذر est impossible à exécuter → كَفَّارَةُ al-yamīn (اليَمِين).",
          "Mukhtasar Khalīl : si le نَذر porte sur quelque chose de makrūh → on le rompt et on paye la كَفَّارَة.",
          "Spécificité : le نَذر à une mosquée précise (Masjid al-Aqsā) — peut être exécuté dans n'importe quelle grande mosquée selon l'Imām Mālik."
        ] },
        {"t": "h", "v": "نَذر المعصية — Vœu illicite"},
        {"t": "p", "v": "Si quelqu'un fait vœu d'un acte حَرَام (ex : « je fais vœu de ne plus parler à ma mère »), ce vœu ne doit pas être exécuté. La position malikite : pas de كَفَّارَة — se repentir suffit car le vœu n'aurait pas dû être fait."},
        {"t": "note", "v": "Distinction importante : le serment (يَمِين) engage un acte futur et sa violation entraîne une كَفَّارَة. Le vœu (نَذر) engage envers Allah directement et est plus grave — on ne peut pas simplement « payer et oublier » comme le serment. L'exécution du نَذر est la voie normale ; la كَفَّارَة n'est qu'un palliatif en cas d'impossibilité."}
        ]
      },
      {
        id: "aym-04",
        title: "تَطبِيقَات مُعَاصِرَة — Serments et Vœux dans la Vie Quotidienne",
        status: 'available',
        content: [
        {"t": "lead", "v": "Les serments et vœux apparaissent dans de nombreuses situations contemporaines : formules juridiques, engagements professionnels, jurements informels. Ce chapitre synthétise les positions malikites appliquées au quotidien."},
        {"t": "h", "v": "Les serments professionnels et juridiques"},
        { t:'ul', v:[
          "<strong>Serment devant tribunal :</strong> « je jure de dire la vérité » — si on prête ce serment au nom d'Allah, c'est une يَمِين مُنعَقِدَة. Mentir sous serment = Yamīn al-Ghammūs (يَمِينُ الغَمُوس) = péché majeur.",
          "<strong>Serment d'allégeance ou professionnel :</strong> si fait au nom d'Allah → engageant.",
          "<strong>Serments laïcs (sans mention d'Allah) :</strong> pas de يَمِين islamique — pas de كَفَّارَة même si brisés. Ce sont des engagements contractuels.",
          "Doctrine-malikite.fr : les contrats écrits et signatures ont la valeur d'un engagement ferme même sans mention d'Allah."
        ] },
        {"t": "h", "v": "Formules quotidiennes courantes"},
        { t:'ul', v:[
          "« والله » dans la conversation ordinaire sans intention de jurer → Yamīn al-Laghw (يَمِينُ اللَّغو) (pas de كَفَّارَة).",
          "« والله » avec intention de s'engager → يَمِينُ مُنعَقِدَة.",
          "« والنبي » (je jure par le Prophète) → pas un serment islamique valide selon l'Imām Mālik — pas de كَفَّارَة.",
          "« حق والدي » (par la vie de mon père) → formule culturelle non reconnue comme serment islamique."
        ] },
        {"t": "h", "v": "Situations pratiques avec solutions"},
        { t:'ul', v:[
          "<strong>« J'ai juré de ne pas parler à mon frère »</strong> : si cela nuit aux liens familiaux → rompre le serment et payer la كَفَّارَة. Le Prophète ﷺ : « le meilleur des serments est celui dont on s'acquitte. »",
          "<strong>Vœu de jeûner un lundi chaque semaine</strong> : vœu valide, obligatoire de l'exécuter si possible.",
          "<strong>Vœu conditionnel exaucé</strong> : « si je réussis mon examen, je donne 200€ aux pauvres » — si exaucé → doit être exécuté.",
          "<strong>Vœu impossible à tenir</strong> : « si je guéris, je ferai le حَجّ » mais pas les moyens → remplacé par كَفَّارَةُ al-yamīn (اليَمِين)."
        ] },
        {"t": "h", "v": "Les jurements dans l'entreprise et le commerce"},
        {"t": "p", "v": "Les commerçants qui utilisent les serments pour convaincre des clients (« والله ce prix est le moins cher ») commettent une faute si le serment est faux. Hadīth : « Méfiez-vous des serments fréquents dans le commerce, car ils peuvent augmenter les ventes mais effacent la bénédiction. »"},
        {"t": "note", "v": "Conseil malikite global : limiter les serments au maximum. Le Coran recommande de tenir ses serments et engage des كَفَّارَات pour les violations. La meilleure pratique : éviter les formules juratives dans le langage courant et réserver le serment aux situations solennelles nécessaires."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-ayman',
        title: 'Questionnaire — ' + "Aymān (الأَيمَان) وNudhūr (النُّذُور)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-aym-01",
          text: "Yamīn al-Ghammūs (يَمِينُ الغَمُوس) : quelle est sa كَفَّارَة ?",
          choices: [
          { id:"a", text:"Nourrir 10 pauvres" },
          { id:"b", text:"Jeûner 3 jours" },
          { id:"c", text:"Pas de كَفَّارَة — seul un repentir sincère peut l'effacer car c'est un péché majeur" },
          { id:"d", text:"Libérer un esclave" }
          ],
          correctId: "c",
          explanation: "Yamīn al-Ghammūs (يَمِينُ الغَمُوس) (serment délibérément faux sur le passé) est un péché si grave qu'il n'a pas de كَفَّارَة — il est au-delà de l'expiation rituelle. Tawba (التَّوبَة) sincère (repentir, regret, résolution) peut l'effacer. C'est une distinction fondamentale dans le fiqh malikite."
        },
        {
          id: "q-aym-02",
          text: "<strong>PIÈGE :</strong> Ibrahim dit en conversation « والله j'aime ce plat » sans intention de jurer. Y a-t-il une كَفَّارَة si c'est faux ?",
          choices: [
          { id:"a", text:"Oui — tout serment par Allah engage" },
          { id:"b", text:"Non — c'Yamīn al-Laghw (يَمِينُ اللَّغو) (involontaire), pardonné sans كَفَّارَة" },
          { id:"c", text:"Makrūh seulement" },
          { id:"d", text:"Oui si répété souvent" }
          ],
          correctId: "b",
          explanation: "Coran 2:225 : « Allah ne vous tiendra pas rigueur des serments involontaires. » Yamīn al-Laghw (يَمِينُ اللَّغو) = formule habituée sans intention de jurer → pas de كَفَّارَة. Yamīn al-Munʿaqida (يَمِينُ المُنعَقِدَة) (avec intention ferme sur le futur) engage une كَفَّارَة si rompu."
        },
        {
          id: "q-aym-03",
          text: "Peut-on jurer par le Prophète ﷺ (« والنبي ») en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — c'est une preuve d'amour pour le Prophète" },
          { id:"b", text:"Non — ce n'est pas un serment islamique valide ; pas de كَفَّارَة même si brisé" },
          { id:"c", text:"Oui avec كَفَّارَة" },
          { id:"d", text:"Makrūh mais valide" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik : les serments ne sont valides qu'au nom d'Allah et de Ses attributs. Jurer par le Prophète ﷺ, la Kaʿba, ou les parents est interdit (les créatures ne méritent pas ce rang) et ne génère pas de كَفَّارَة si brisé. Hadīth : « celui qui veut jurer, qu'il jure par Allah ou se taise. »"
        },
        {
          id: "q-aym-04",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> L'ordre des 3 options de كَفَّارَةُ al-yamīn (اليَمِين) est-il impératif ?",
          choices: [
          { id:"a", text:"Oui — nourriture d'abord, puis vêtement, puis esclave" },
          { id:"b", text:"Non — les 3 premières (nourriture, vêtement, esclave) sont au CHOIX libre ; le jeûne seulement si aucune n'est possible" },
          { id:"c", text:"Oui — jeûne d'abord, puis nourriture" },
          { id:"d", text:"Non — le jeûne est toujours préférable" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : pour كَفَّارَةُ al-yamīn (اليَمِين), les 3 premières options (nourrir 10 pauvres OU habiller 10 pauvres OU libérer un esclave) sont au choix du débiteur — pas de hiérarchie entre elles. Le jeûne de 3 jours n'est qu'un dernier recours si les 3 autres sont impossibles. Contrairement aux كَفَّارَات ordonnées comme le ظِهَار."
        },
        {
          id: "q-aym-05",
          text: "<strong>PIÈGE :</strong> Ibrahim peut-il payer la كَفَّارَة AVANT de rompre son serment ?",
          choices: [
          { id:"a", text:"Non — la كَفَّارَة ne peut être payée qu'après la violation" },
          { id:"b", text:"Oui — selon l'Imām Mālik, on peut payer la كَفَّارَة avant de rompre le serment" },
          { id:"c", text:"Seulement pour le jeûne" },
          { id:"d", text:"Non — cela annulerait le serment" }
          ],
          correctId: "b",
          explanation: "Position malikite distinctive : l'Imām Mālik permet de payer la كَفَّارَة avant de rompre le serment — on s'exécute d'abord, puis on fait ce qu'on avait juré de ne pas faire (ou inversement). Cela offre une flexibilité pratique appréciée."
        },
        {
          id: "q-aym-06",
          text: "Si Ibrahim oublie son serment et agit contre sans le savoir, y a-t-il une كَفَّارَة ?",
          choices: [
          { id:"a", text:"Oui — l'oubli ne dispense pas" },
          { id:"b", text:"Non — l'Imām Mālik considère que l'oubli est une excuse, pas de كَفَّارَة" },
          { id:"c", text:"Makrūh mais il doit se souvenir" },
          { id:"d", text:"Seulement s'il se souvient après" }
          ],
          correctId: "b",
          explanation: "Position malikite : l'oubli est une excuse dans les serments — si Ibrahim rompt son serment en ayant oublié qu'il l'avait fait, pas de كَفَّارَة. De même pour la contrainte (إكراه). La كَفَّارَة n'est due que pour la violation volontaire et consciente."
        },
        {
          id: "q-aym-07",
          text: "Nadia fait vœu : « si j'obtiens ce poste, je jeûnerai 3 jours ». Elle obtient le poste. Ce jeûne est-il :",
          choices: [
          { id:"a", text:"Sounnah seulement" },
          { id:"b", text:"Obligatoire — le نَذر conditionnel accompli devient contraignant" },
          { id:"c", text:"Facultatif" },
          { id:"d", text:"À remplacer par la كَفَّارَة" }
          ],
          correctId: "b",
          explanation: "Hadīth (al-Bukhārī) : « Que l'homme qui a fait un vœu d'obéir à Allah l'obéisse. » Le نَذر مُعَلَّق (conditionnel) devient obligatoire dès que la condition est réalisée. Nadia doit jeûner 3 jours — c'est une obligation religieuse, pas une recommandation."
        },
        {
          id: "q-aym-08",
          text: "<strong>PIÈGE :</strong> Ibrahim fait vœu de ne plus parler à son frère. Doit-il l'exécuter ?",
          choices: [
          { id:"a", text:"Oui — tout vœu est obligatoire" },
          { id:"b", text:"Non — c'est un نَذر في المعصية (vœu d'une chose nuisible aux liens familiaux) ; il ne doit pas l'exécuter et se repent" },
          { id:"c", text:"Oui avec la permission de l'imam" },
          { id:"d", text:"Oui si son frère a fait du mal" }
          ],
          correctId: "b",
          explanation: "Le نَذر في المَعصِيَة ou portant sur une chose illicite/nuisible ne doit pas être exécuté. Couper les liens familiaux est حَرَام — on ne peut pas s'y engager par vœu. Position malikite : pas de كَفَّارَة pour ce type de نَذر, juste le repentir."
        },
        {
          id: "q-aym-09",
          text: "Peut-on rompre un serment qui prive d'une chose bonne et utile ?",
          choices: [
          { id:"a", text:"Non — tout serment doit être tenu" },
          { id:"b", text:"Oui — si son contraire est meilleur, rompre et payer la كَفَّارَة est préférable" },
          { id:"c", text:"Seulement avec permission d'un imam" },
          { id:"d", text:"Oui mais seulement après 40 jours" }
          ],
          correctId: "b",
          explanation: "Hadīth du Prophète ﷺ : « Si tu jures sur quelque chose puis vois que son contraire est meilleur, accomplis ce qui est meilleur et paye la كَفَّارَة de ton serment. » Ex : jurer de ne plus prendre soin de ses parents puis réaliser l'erreur → rompre et payer la كَفَّارَة."
        },
        {
          id: "q-aym-10",
          text: "<strong>CONTEMPORAIN :</strong> Ibrahim signe un contrat professionnel. Si l'Allah n'est pas mentionné, y a-t-il un serment islamique ?",
          choices: [
          { id:"a", text:"Oui — tout engagement écrit est un serment" },
          { id:"b", text:"Non — pas de يَمِين islamique sans mention d'Allah ; mais c'est un engagement contractuel qui engage civilement et moralement" },
          { id:"c", text:"Oui si le contrat est entre Muslims" },
          { id:"d", text:"Non — les contrats civils ne comptent pas en Islam" }
          ],
          correctId: "b",
          explanation: "Le serment islamique (يَمِين) nécessite la mention d'Allah. Sans cela, pas de يَمِين islamique et pas de كَفَّارَة si rompu. En revanche, les contrats écrits sont des engagements moraux et civils sérieux selon doctrine-malikite.fr — les violer est fautif même sans كَفَّارَة rituelle."
        },
        {
          id: "q-aym-11",
          text: "Si le نَذر accompli est impossible (ex : vœu de faire un حَجّ sans moyens), que faire ?",
          choices: [
          { id:"a", text:"Attendre d'en avoir les moyens, même 20 ans" },
          { id:"b", text:"Payer la كَفَّارَةُ al-yamīn (اليَمِين) en remplacement" },
          { id:"c", text:"Le vœu est annulé automatiquement" },
          { id:"d", text:"Donner en aumône le prix du حَجّ" }
          ],
          correctId: "b",
          explanation: "Si le نَذر est devenu impossible à exécuter → position malikite : كَفَّارَةُ al-yamīn (اليَمِين) (nourrir 10 pauvres, habiller 10 pauvres, ou jeûner 3 jours). Cela libère le débiteur de son engagement sans le culpabiliser à vie."
        },
        {
          id: "q-aym-12",
          text: "<strong>AVANCÉ :</strong> Ibrahim jure « والقرآن » (par le Coran) sans mentionner le nom d'Allah. Y a-t-il une كَفَّارَة si rompu ?",
          choices: [
          { id:"a", text:"Oui — jurer par le Coran = jurer par Allah" },
          { id:"b", text:"Divergence malikite : jurer « والله » (avec Allah) → كَفَّارَة ; jurer « والقرآن » seul → makrūh mais pas de كَفَّارَة selon une position" },
          { id:"c", text:"Non — le Coran n'est pas Allah" },
          { id:"d", text:"Oui car le Coran est parole d'Allah" }
          ],
          correctId: "b",
          explanation: "Nuance malikite fine : « والله » → serment plein avec كَفَّارَة. « والقرآن » sans mention explicite d'Allah → divergence. Certains savants malikites assimilent le Coran (parole d'Allah) à un attribut divin → كَفَّارَة. D'autres considèrent ce serment comme makrūh mais sans كَفَّارَة. L'Imām Mālik lui-même penchait vers la prudence."
        },
        {
          id: "q-aym-13",
          text: "La كَفَّارَةُ al-yamīn (اليَمِين) peut-elle être payée en argent à la place de la nourriture ou des vêtements ?",
          choices: [
          { id:"a", text:"Non — seulement en nature (nourriture physique ou vêtements)" },
          { id:"b", text:"Oui — les savants malikites contemporains permettent le paiement en argent si accès aux pauvres difficile" },
          { id:"c", text:"Seulement dans les pays non musulmans" },
          { id:"d", text:"Seulement pour le jeûne" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl et doctrine-malikite.fr : les savants malikites contemporains permettent de donner l'équivalent monétaire (valeur d'un repas × 10 ou valeur d'un vêtement × 10) si la distribution en nature est difficile. L'essentiel est que les pauvres bénéficient de l'aide."
        },
        {
          id: "q-aym-14",
          text: "<strong>PIÈGE :</strong> Un commerçant jure souvent « والله » pour convaincre ses clients. C'est :",
          choices: [
          { id:"a", text:"Permis — les commerçants ont le droit de convaincre" },
          { id:"b", text:"Fortement déconseillé — Hadīth : les serments fréquents dans le commerce effacent la bénédiction (البَرَكَة)" },
          { id:"c", text:"Makrūh seulement si répété plus de 3 fois" },
          { id:"d", text:"Permis si les affirmations sont vraies" }
          ],
          correctId: "b",
          explanation: "Hadīth : « الحَلِفُ مَنفَقَةٌ لِلسِّلعَةِ مَمحَقَةٌ لِلبَرَكَةِ » — les serments fréquents font vendre mais effacent la بَرَكَة (bénédiction). C'est une pratique déconseillée, surtout si les serments sont parfois mensongers (ce qui serait des غَمُوس graves)."
        },
        {
          id: "q-aym-15",
          text: "<strong>SYNTHÈSE :</strong> Quels serments n'entraînent PAS de كَفَّارَة même si brisés ?",
          choices: [
          { id:"a", text:"Aucun — tout serment engage une كَفَّارَة" },
          { id:"b", text:"Yamīn al-Ghammūs (يَمِينُ الغَمُوس) (intentionnellement faux) Yamīn al-Laghw (يَمِينُ اللَّغو) (involontaire) n'ont pas de كَفَّارَة" },
          { id:"c", text:"Seulement les serments faits en plaisantant" },
          { id:"d", text:"Seulement les serments faits par oubli" }
          ],
          correctId: "b",
          explanation: "Récapitulatif : Yamīn al-Laghw (يَمِينُ اللَّغو) (involontaire) → pas de كَفَّارَة (pardonné). Yamīn al-Ghammūs (يَمِينُ الغَمُوس) (délibérément faux sur le passé) → pas de كَفَّارَة mais péché majeur, Tawba (التَّوبَة). Yamīn al-Munʿaqida (يَمِينُ المُنعَقِدَة) (serment sur action future volontaire) → كَفَّارَة si rompu."
        }
        ]
      }
    },

    /* ═══ Shahādāt (الشَّهَادَات) وQaḍāʾ (القَضَاء) ═══ */
    {
      id: "qadhaa",
      title: "Témoignages et Justice",
      arabicTitle: "الشَّهَادَات وal-qaḍāʾ (القَضَاء)",
      icon: "balance",
      description: "Conditions du témoin équitable, types de preuves et administration de la justice islamique.",
      source: "Mukhtasar Khalīl pp.210-240 · doctrine-malikite.fr",
      badge: {
        id: 'badge-avance-qadhaa',
        title: "Juriste du Droit Judiciaire",
        arabicTitle: "فَقِيهُ al-qaḍāʾ (القَضَاء)",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Shahādāt (الشَّهَادَات) وQaḍāʾ (القَضَاء)"
      },

      lessons: [
              {
        id: "qad-01",
        title: "شُرُوطُ Shāhid (الشَّاهِد) — Le Témoin ÉʿAdāla (العَدَالَة)",
        status: 'available',
        content: [
        {"t": "lead", "v": "La شَهَادَة (témoignage) est le premier moyen de preuve en droit islamique. Pour être recevable, le témoin doit satisfaire des conditions précises qui garantissent sa crédibilité. Le Mukhtasar Khalīl (pp. 210-230) détaille ces exigences."},
        {"t": "h", "v": "شُرُوط Shāhid (الشَّاهِد) — Les conditions"},
        { t:'ul', v:[
          "<strong>1. Islām (الإِسلَام) :</strong> seul le Muslim peut témoigner sur un Muslim. Exception : témoignage d'Ahl al-Kitāb sur les non-Muslims entre eux.",
          "<strong>2. البُلُوغ :</strong> l'enfant pré-pubère ne peut pas témoigner. Exception malikite : témoignage des garçons pré-pubères entre eux dans les affaires mineures (blessures légères, etc.).",
          "<strong>3. العَقل :</strong> sain d'esprit au moment du témoignage.",
          "<strong>4. الحُرِّيَّة :</strong> condition historique, non applicable aujourd'hui.",
          "<strong>5. ʿAdāla (العَدَالَة) :</strong> la condition la plus importante — voir détail ci-dessous.",
          "<strong>6. عَدَم التُّهمَة :</strong> pas de conflit d'intérêt avec l'affaire."
        ] },
        {"t": "h", "v": "ʿAdāla (العَدَالَة) — L'honorabilité du témoin"},
        {"t": "p", "v": "L'ʿAdāla (العَدَالَة) est la qualité morale qui rend le témoignage recevable. Mukhtasar Khalīl en précise les composantes :"},
        { t:'ul', v:[
          "Pratiquer les obligations islamiques (prières, jeûne…) sans les abandonner habituellem.",
          "Éviter les péchés majeurs (الكَبَائِر).",
          "Ne pas pratiquer les péchés mineurs de manière répétée.",
          "Maintenir un comportement social honorable (لَا يُخِلُّ بِالمُرُوءَة) — même les actes licites mais qui portent atteinte à la dignité sociale (manger dans la rue, etc. selon les contextes culturels).",
          "L'ʿAdāla (العَدَالَة) est présumée chez tout Muslim apparent — sauf preuve contraire (الجَرح)."
        ] },
        {"t": "h", "v": "Jarḥ wa-Taʿdīl (الجَرح والتَّعدِيل) — Récusation et validation"},
        { t:'ul', v:[
          "Si un témoin est سَاقِط ʿAdāla (العَدَالَة) (déchu de son honorabilité) → son témoignage est irrecevable.",
          "Le juge peut demander une enquête sur l'honorabilité du téTazkiya (التَّزكِيَة) avant d'accepter son témoignage.",
          "Les motifs de الجَرح (récusation) : condamné pour fausse accusation (القَذف), criminel, menteur notoire, ennemi de la partie adverso.",
          "Spécificité malikite : le serment d'Tazkiya (التَّزكِيَة) dans certains cas simples."
        ] },
        {"t": "note", "v": "Le témoignage de l'ennemi (العَدُوّ) contre son ennemi est irrecevable en rite malikite — même s'il est habituellement honorable. Le conflit d'intérêt personnel (التُّهمَة) disqualifie le témoin, quelle que soit sa vertu générale."}
        ]
      },
      {
        id: "qad-02",
        title: "عَدَدُ الشُّهُود وأَنوَاعُ البَيِّنَات — Nombres et Types de Preuves",
        status: 'available',
        content: [
        {"t": "lead", "v": "Selon la nature de l'affaire, le nombre de témoins requis et les types de preuves admissibles varient. Le rite malikite a une position originale sur plusieurs questions : le témoignage de la femme, Bayyina (البَيِّنَة) populaire, et la règle شَاهِد + يَمِين."},
        {"t": "h", "v": "Règle générale : 2 hommes équitables"},
        { t:'ul', v:[
          "La règle de base pour les affaires civiles et pénales graves : 2 hommes équitables (رَجُلَان عَدلَان).",
          "Coran 2:282 : « Faites témoigner deux hommes équitables parmi vous. »",
          "Un homme + 2 femmes : admissible dans les affaires financières.",
          "Femmes seules : admissible dans ce que les hommes ne voient pas habituellement (accouchement, défauts du corps féminin, etc.) — spécificité malikite."
        ] },
        {"t": "h", "v": "شَاهِد + يَمِين — Témoignage unique + serment du demandeur"},
        {"t": "p", "v": "<strong>Position malikite originale :</strong> dans les affaires financières (créances, ventes, dettes), un SEUL témoin + le serment du demandeur sur la vérité de sa réclamation peut suffire pour obtenir gain de cause."},
        { t:'ul', v:[
          "Hadīth : le Prophète ﷺ a statué avec un seul témoin et le serment du demandeur (Muslim).",
          "S'applique aux دُيُون (créances) et aux affaires civiles financières.",
          "Ne s'Ḥudūd (الحُدُود) (peines coraniques) Qiṣāṣ (القِصَاص).",
          "Position propre au rite malikite et chāfiʿite — les hanafites ne l'admettent pas."
        ] },
        {"t": "h", "v": "Istifāḍa (الاستِفَاضَة) — La Notoriété Publique"},
        {"t": "p", "v": "<strong>Spécificité malikite distinctive :</strong> la notoriété Istifāḍa (الاستِفَاضَة) peut constituer une preuve pour : le mariage, la filiation, le décès, la possession de longue date d'un bien. Si toute la communauté sait que X est marié à Y → pas besoin de témoins formels."},
        {"t": "h", "v": "4 témoins — Domaine exclusif du حَدّ al-zinā (الزِّنَا)"},
        { t:'ul', v:[
          "La زِنَا (adultère) nécessite 4 témoins oculaires ayant vu l'acte consommé — condition quasi impossible à réunir.",
          "Si moins de 4 témoins → accusation de قَذف (fausse accusation) contre les témoins.",
          "Ce seuil extrêmement élevé protège la réputation et la vie privée des individus.",
          "Les confessions (إِقرَار) peuvent remplacer les témoins pour les حُدُود — voir leçon suivante."
        ] },
        {"t": "note", "v": "Tableau récapitulatif des preuves selon le rite malikite : حُدُود graves → 4 témoins (زِنَا) ou 2 témoins (reste) ; قِصَاص → 2 hommes ; دُيُون → 2 hommes OU 1 homme + 2 femmes OU شَاهِد + يَمِين ; حُقُوق المرأة intime → femmes seules suffisent."}
        ]
      },
      {
        id: "qad-03",
        title: "Iqrār (الإِقرَار) وal-yamīn (اليَمِين) القَضَائِيَّة — Aveu et Serment Judiciaire",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'Iqrār (الإِقرَار) (aveu) est le moyen de preuve le plus fort en droit islamique — « سَيِّدُ الأَدِلَّة » (le maître des preuves). L'يَمِين القَضَائِيَّة (serment judiciaire) est un autre outil essentiel pour trancher les litiges."},
        {"t": "h", "v": "Iqrār (الإِقرَار) — L'Aveu"},
        { t:'ul', v:[
          "L'aveu du défendant sur lui-même est la preuve la plus forte.",
          "<strong>Conditions de validité :</strong> libre (pas sous contrainte), conscient, capable, portant sur un droit propre (pas sur un tiers).",
          "L'aveu peut être rétracté avant l'exécution de la peine pour les حُدُود — le repentir peut y mettre fin.",
          "Mukhtasar Khalīl : si l'avocat d'une partie reconnaît un fait en audience → c'est un إِقرَار qui l'engage.",
          "<strong>Spécificité malikite :</strong> l'aveu partiel est traité au cas par cas — avouer la dette mais nier les intérêts, par exemple."
        ] },
        {"t": "h", "v": "al-yamīn (اليَمِين) القَضَائِيَّة — Le Serment Judiciaire"},
        { t:'ul', v:[
          "<strong>يَمِين المُدَّعَى عَلَيه :</strong> si le demandeur n'a pas de preuve → le défendeur jure et gagne. « Bayyina (البَيِّنَة)ُ عَلَى المُدَّعِي وal-yamīn (اليَمِين)ُ عَلَى مَن أَنكَر. »",
          "<strong>يَمِين المُدَّعِي :</strong> si le défendeur refuse de jurer → le juge peut rejeter sa demande ou condamner sur la base du refus.",
          "<strong>يَمِين Qaḍāʾ (القَضَاء) :</strong> le juge lui-même peut demander un serment supplémentaire dans certains cas douteux.",
          "Mukhtasar Khalīl : le refus de prêNukūl (النُّكُول) vaut condamnation dans les droits civils."
        ] },
        {"t": "h", "v": "Nukūl (النُّكُول) — Le Refus de Jurer"},
        {"t": "p", "v": "Si le défendeur refuse de jurer (يَنكُل) → que se passe-t-il en rite malikite ?"},
        { t:'ul', v:[
          "Le refus de jurer est traité comme une preuve partielle contre le défendeur.",
          "Le juge peut alors renvoyer le serment au demandeur (رَدّ اليَمِين) — si le demandeur jure → il gagne.",
          "En matière de حُدُود → Nukūl (النُّكُول) ne suffit pas pour condamner, la preuve directe est toujours requise.",
          "Application contemporaine : dans les arbitrages islamiques, le refus de témoigner ou de coopérer pèse contre la partie récalcitrante."
        ] },
        { t:'ar', v:"al-bayyina (البَيِّنَة)ُ عَلَى المُدَّعِي وَal-yamīn (اليَمِين)ُ عَلَى مَن أَنكَرَ", n:"« La preuve incombe au demandeur et le serment à celui qui nie. » — Hadīth (al-Bukhārī et Muslim)" },
        {"t": "note", "v": "Principe général du droit de la preuve islamique : الأَصل البَرَاءَة — la présomption d'innocence. Le demandeur doit prouver sa réclamation. Le défendeur n'est condamné que sur preuve ou aveu — pas sur simple affirmation de l'adversaire."}
        ]
      },
      {
        id: "qad-04",
        title: "Qaḍāʾ (القَضَاء) — Le Juge et l'Administration de la Justice",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le قَضَاء (système judiciaire islamique) est l'institution par laquelle Allah's loi est appliquée dans les litiges. Le Mukhtasar Khalīl (pp. 230-240) précise les conditions du juge (قَاضٍ) et les règles du procès."},
        {"t": "h", "v": "شُرُوط القَاضِي — Conditions du Juge"},
        { t:'ul', v:[
          "<strong>Muslim :</strong> un non-Muslim ne peut pas juger entre Muslims.",
          "<strong>Pubère, sain d'esprit, libre :</strong> conditions standard.",
          "<strong>ʿAdāla (العَدَالَة) :</strong> honorabilité requise — le juge corrompu est révoqué.",
          "<strong>Ijtihād (الاجتِهَاد) :</strong> connaissance suffisante du فقه pour statuer ou référencer — pas besoin d'être le plus grand savant.",
          "<strong>Spécificité malikite sur le sexe :</strong> la majorité des savants malikites ne permettent pas à une femme d'être قَاضِيَة — sauf dans les affaires civiles selon une opinion minoritaire.",
          "Condition pratique contemporaine : le qāḍī doit connaître les lois du pays où il exerce pour coordonner Islam et civil."
        ] },
        {"t": "h", "v": "آدَاب القَاضِي — Règles de Conduite du Juge"},
        { t:'ul', v:[
          "Ne pas juger en état de colère, fatigue, faim ou maladie forte.",
          "Écouter les deux parties équitablement avant de statuer.",
          "Ne pas recevoir de cadeaux des plaideurs.",
          "Rédiger ses jugements par écrit.",
          "Hadīth : « Le juge ne doit pas statuer entre deux parties alors qu'il est en colère. » — al-Bukhārī et Muslim."
        ] },
        {"t": "h", "v": "تَنفِيذ الأَحكَام — L'Exécution des Jugements"},
        { t:'ul', v:[
          "Le jugement islamique est exécutoire dès sa prononciation.",
          "Un jugement rendu par erreur peut être révoqué si l'erreur est prouvée.",
          "Le juge peut déléguer l'exécution à des agents (السُّلطَة التَّنفِيذِيَّة).",
          "Mukhtasar Khalīl : si deux juges rendent des jugements contradictoires → le premier jugement prévaut."
        ] },
        {"t": "h", "v": "Fatwā (الفَتوَى) Qaḍāʾ (القَضَاء) — Avis juridique vs Jugement"},
        {"t": "p", "v": "Distinction importante : le مُفتِي (donneur de fatwa) conseille sans trancher — son avis n'est pas exécutoire. Le قَاضٍ (juge) tranche et son jugement est exécutoire. Une fatwa devient exécutoire seulement si un juge l'adopte comme jugement."},
        {"t": "note", "v": "Application contemporaine en France et en Europe : les instances islamiques (conseils, imams, daʿwa) peuvent rendre des fatwas et des avis moraux. Les arbitrages islamiques (médiation familiale, litiges commerciaux) ne sont exécutoires que s'ils sont homologués par un juge civil. Doctrine-malikite.fr recommande de combiner médiation islamique + recours civil pour les affaires importantes."}
        ]
      },
      {
        id: "qad-05",
        title: "تَطبِيقَات مُعَاصِرَة — Justice Islamique en Occident",
        status: 'available',
        content: [
        {"t": "lead", "v": "Shahādāt (الشَّهَادَات) وQaḍāʾ (القَضَاء) s'appliquent-ils pour les Muslims vivant en pays non-islamique ? Synthèse des positions de doctrine-malikite.fr et des savants malikites contemporains."},
        {"t": "h", "v": "La justice civile et son rapport à la justice islamique"},
        { t:'ul', v:[
          "En pays non-islamique, les Muslims sont tenus de respecter la loi civile locale (أُولُو الأَمر المُلزَمِ قَانُونًا).",
          "Recourir aux tribunaux civils pour les litiges est permis — et souvent obligatoire.",
          "Le Muslim ne doit pas mentir ni falsifier devant un tribunal civil même non islamique.",
          "Doctrine-malikite.fr : le serment judiciaire civil engage le Muslim car il est prononcé par la parole — la crainte d'Allah doit gouverner son témoignage."
        ] },
        {"t": "h", "v": "La médiation islamique contemporaine"},
        { t:'ul', v:[
          "De nombreuses communautés islamiques en Occident pratiquent la médiation familiale islamique (avant ou parallèlement au tribunal civil).",
          "Le رُجُوع إلى أَهل العِلم (consulter des savants) pour résoudre un litige avant les tribunaux est recommandé.",
          "Les accords de médiation islamique peuvent être homologués par un juge civil s'ils respectent la loi locale.",
          "En matière de divorce : les modalités islamiques (خُلع, طَلَاق) ont besoin d'être accompagnées d'une procédure civile pour avoir force légale."
        ] },
        {"t": "h", "v": "Témoignage du Muslim en tribunal"},
        { t:'ul', v:[
          "Le Muslim peut témoigner devant un tribunal non-islamique.",
          "Il doit dire la vérité — Yamīn al-Ghammūs (يَمِينُ الغَمُوس) reste حَرَام quel que soit le tribunal.",
          "S'il témoigne sous serment en invoquant Allah → engagement islamique complet.",
          "S'il témoigne sans serment religieux → engagement moral et civil mais pas de كَفَّارَة islamique si faux."
        ] },
        {"t": "h", "v": "المَظَالِم — Recours contre les injustices"},
        {"t": "p", "v": "En l'absence d'un tribunal islamique, le Muslim peut recourir aux instances civiles pour faire valoir ses droits. Le principe : « الحَقُّ مَطلُوبٌ بِكُلِّ الوَسَائِل المَشرُوعَة » — le droit se réclame par tous les moyens licites."},
        {"t": "note", "v": "Doctrine-malikite.fr sur les litiges d'héritage en France : les héritiers Muslims qui souhaitent appliquer les parts islamiques peuvent conclure une convention successorale privée entre eux après le règlement civil — ce document n'a pas de valeur légale civile mais a une valeur religieuse et morale pour les signataires."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-qadhaa',
        title: 'Questionnaire — ' + "Shahādāt (الشَّهَادَات) وQaḍāʾ (القَضَاء)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-qad-01",
          text: "L'ʿAdāla (العَدَالَة) (honorabilité) du témoin est présumée chez tout Muslim. Que faut-il pour la réfuter ?",
          choices: [
          { id:"a", text:"Une accusation verbale suffit" },
          { id:"b", text:"Une preuve concrète (الجَرح) : condamnation passée, témoignage notoire de mensonge, péché majeur connu" },
          { id:"c", text:"L'opinion de l'adversaire" },
          { id:"d", text:"Une fatwa d'un imam" }
          ],
          correctId: "b",
          explanation: "L'ʿAdāla (العَدَالَة) est présumée (مَفرُوضَة) chez tout Muslim en apparence. Pour la réfuter (الجَرح), il faut apporter une preuve solide : condamnation pour fausse accusation (القَذف), péché majeur notoire, mensonge habituel. La simple suspicion ou l'hostilité de l'adversaire ne suffit pas."
        },
        {
          id: "q-qad-02",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Des femmes seules peuvent-elles témoigner valablement dans certains cas ?",
          choices: [
          { id:"a", text:"Non — le témoignage féminin est toujours insuffisant seul" },
          { id:"b", text:"Oui — dans les domaines que les hommes ne voient pas habituellement (accouchement, corps féminin intime, etc.)" },
          { id:"c", text:"Seulement si 4 femmes" },
          { id:"d", text:"Seulement en présence d'un homme" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : le témoignage de femmes seules est valide dans les affaires réservées au domaine féminin — accouchement, défauts du corps féminin, allaitement... Ce sont des situations où les hommes ne peuvent pas habituellement assister, donc leur témoignage serait par nature absent."
        },
        {
          id: "q-qad-03",
          text: "<strong>SPÉCIFICITÉ MALIKITE ORIGINALE :</strong> Dans une affaire de créance, un seul témoin peut-il suffire ?",
          choices: [
          { id:"a", text:"Non — toujours 2 témoins minimum" },
          { id:"b", text:"Oui — un seul témoin + le serment du demandeur (شَاهِد + يَمِين) suffit pour les affaires financières" },
          { id:"c", text:"Seulement si le défendeur est absent" },
          { id:"d", text:"Non — la femme doit compléter à 2" }
          ],
          correctId: "b",
          explanation: "Position malikite et chāfiʿite : في الأَموَال, un seul témoin + serment du demandeur = preuve suffisante. Hadīth : le Prophète ﷺ a statué avec un شَاهِد + يَمِين dans les affaires de dette. Les hanafites n'admettent pas ce mode de preuve. Ne s'applique pas aux حُدُود Qiṣāṣ (القِصَاص)."
        },
        {
          id: "q-qad-04",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Qu'est-ce que l'Istifāḍa (الاستِفَاضَة) et quelle est sa valeur probante ?",
          choices: [
          { id:"a", text:"Un type de serment collectif" },
          { id:"b", text:"La notoriété publique constante — peut constituer une preuve pour le mariage, la filiation et la possession de longue date" },
          { id:"c", text:"Un témoignage indirect" },
          { id:"d", text:"Un jugement rendu par défaut" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite notable : Istifāḍa (الاستِفَاضَة) (notoriété publique constante) peut prouver des faits comme le mariage, la filiation, le décès ou la possession prolongée. Si toute la communauté sait de manière constante que X possède tel bien depuis 30 ans → c'est une preuve malikite valide sans témoins formels."
        },
        {
          id: "q-qad-05",
          text: "Combien de témoins faut-il pour prouver la زِنَا (adultère) et permettre l'application du حَدّ ?",
          choices: [
          { id:"a", text:"1 témoin" },
          { id:"b", text:"2 témoins" },
          { id:"c", text:"3 témoins" },
          { id:"d", text:"4 témoins ayant vu l'acte consommé" }
          ],
          correctId: "d",
          explanation: "Coran 4:15 et 24:4 : la زِنَا nécessite 4 témoins oculaires ayant vu l'acte sexuel consommé. Ce seuil quasi impossible protège la vie privée. Si moins de 4 témoins se présentent → ils risquent eux-mêmes le حَدّ du قَذف (fausse accusation)."
        },
        {
          id: "q-qad-06",
          text: "Le défendeur refuse de prêNukūl (النُّكُول). En rite malikite, que se passe-t-il ?",
          choices: [
          { id:"a", text:"Il est automatiquement condamné" },
          { id:"b", text:"Le juge peut renvoyer le serment au demandeur — si ce dernier jure, il gagne" },
          { id:"c", text:"L'affaire est classée" },
          { id:"d", text:"Le refus n'a aucune conséquence" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : Nukūl (النُّكُول) (refus de jurer) peut conduire le juge à renvoyer le serment au demandeur (رَدّ اليَمِين). Si le demandeur jure sur la vérité de sa réclamation → il gagne. Le refus de jurer n'est pas une condamnation directe mais pèse lourdement contre le défendeur dans les litiges civils."
        },
        {
          id: "q-qad-07",
          text: "La règle « Bayyina (البَيِّنَة)ُ عَلَى المُدَّعِي » signifie :",
          choices: [
          { id:"a", text:"Le défendeur doit toujours prouver son innocence" },
          { id:"b", text:"C'est le demandeur qui doit apporter la preuve de sa réclamation — la présomption d'innocence protège le défendeur" },
          { id:"c", text:"Les preuves sont partagées entre les deux parties" },
          { id:"d", text:"Le juge apporte les preuves lui-même" }
          ],
          correctId: "b",
          explanation: "Hadīth fondamental : « Bayyina (البَيِّنَة)ُ عَلَى المُدَّعِي وَal-yamīn (اليَمِين)ُ عَلَى مَن أَنكَرَ » — la preuve incombe au demandeur, le serment (de déni) au défendeur. C'est le principe de présomption d'innocence islamique : الأَصل البَرَاءَة — l'innocence est l'état par défaut."
        },
        {
          id: "q-qad-08",
          text: "<strong>PIÈGE :</strong> L'aveu sous contrainte (إكراه) est-il valide en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — un aveu est toujours valide" },
          { id:"b", text:"Non — l'aveu sous contrainte n'est pas valide ; la liberté est une condition de l'Iqrār (الإِقرَار)" },
          { id:"c", text:"Valide pour les affaires civiles, pas pour les حُدُود" },
          { id:"d", text:"Valide si répété 3 fois" }
          ],
          correctId: "b",
          explanation: "L'Iqrār (الإِقرَار) (aveu) n'est valide que s'il est libre (خَالٍ من الإكراه), conscient et volontaire. Un aveu obtenu sous contrainte physique ou psychologique est nul. C'est une garantie fondamentale du droit islamique contre les aveux forcés — particulièrement importante pour les حُدُود."
        },
        {
          id: "q-qad-09",
          text: "Un juge islamique peut-il statuer en état de colère ?",
          choices: [
          { id:"a", text:"Oui si sa décision reste juste" },
          { id:"b", text:"Non — Hadīth : le juge ne doit pas statuer en état de colère, fatigue ou forte maladie" },
          { id:"c", text:"Oui en cas d'urgence" },
          { id:"d", text:"Seulement s'il explique pourquoi" }
          ],
          correctId: "b",
          explanation: "Hadīth du Prophète ﷺ (al-Bukhārī et Muslim) : « لَا يَقضِيَنَّ حَكَمٌ بَينَ اثنَين وَهُوَ غَضبَان » — « qu'aucun juge ne statue entre deux parties alors qu'il est en colère. » Cette règle s'étend à toute situation altérant le jugement : fatigue extrême, faim, maladie grave, stress intense."
        },
        {
          id: "q-qad-10",
          text: "La فَتوَى est-elle exécutoire comme un jugement ?",
          choices: [
          { id:"a", text:"Oui — la fatwa d'un grand savant est obligatoire" },
          { id:"b", text:"Non — la fatwa est un avis consultatif non exécutoire ; seul le جُكم du قَاضٍ est exécutoire" },
          { id:"c", text:"Oui si les deux parties l'acceptent" },
          { id:"d", text:"Oui dans les affaires familiales" }
          ],
          correctId: "b",
          explanation: "Distinction fondamentale : la فَتوَى est un avis juridique consultatif (رَأيٌ Wājib (وَاجِب)ُ الاتِّبَاع دِيانَةً لَيسَ قَضَاءً) — elle s'impose moralement mais n'est pas exécutoire légalement. Le قَضَاء du juge est exécutoire. Une fatwa ne devient exécutoire que si un juge l'adopte comme jugement."
        },
        {
          id: "q-qad-11",
          text: "<strong>CONTEMPORAIN :</strong> Ibrahim témoigne devant un tribunal français après avoir prêté serment sur la Bible. Y a-t-il un engagement islamique ?",
          choices: [
          { id:"a", text:"Non — seulement les serments sur le Coran engagent" },
          { id:"b", text:"Le serment civil (même sur la Bible) engage moralement un Muslim — mentir est حَرَام quel que soit le tribunal" },
          { id:"c", text:"Oui si la Bible est traduction arabe" },
          { id:"d", text:"Non — le serment sur la Bible n'est pas islamiquement valide" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : un Muslim qui témoigne sous serment devant un tribunal civil est moralement et islamiquement engagé à dire la vérité. Mentir constitue un parjure islamique grave (proche du يَمِينُ الغَمُوس). La légitimité du tribunal ne diminue pas l'obligation de vérité."
        },
        {
          id: "q-qad-12",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> La majorité des savants malikites classiques autorisent-ils une femme à être قَاضِيَة (juge) ?",
          choices: [
          { id:"a", text:"Oui — sans restriction" },
          { id:"b", text:"Non — la majorité des savants malikites classiques ne le permettent pas" },
          { id:"c", text:"Oui dans les affaires civiles uniquement" },
          { id:"d", text:"Oui si nommée par le calife" }
          ],
          correctId: "b",
          explanation: "La majorité des savants malikites classiques n'autorisent pas une femme à être قَاضِيَة. C'est aussi la position hanbalite et chāfiʿite dominante. Les hanafites l'autorisent dans les affaires civiles. Certains savants malikites contemporains reconsidèrent cette position dans le contexte contemporain."
        },
        {
          id: "q-qad-13",
          text: "Deux juges islamiques rendent des jugements contradictoires sur la même affaire. Selon Mukhtasar Khalīl, lequel prévaut ?",
          choices: [
          { id:"a", text:"Le jugement le plus récent" },
          { id:"b", text:"Le jugement rendu en premier" },
          { id:"c", text:"Celui du juge le plus expérimenté" },
          { id:"d", text:"On annule les deux et on recommence" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : en cas de jugements contradictoires, le PREMIER jugement rendu prévaut — il est passé en force de chose jugée (الحُكم النَّافِذ). Le second juge n'aurait pas dû statuer sur une affaire déjà jugée."
        },
        {
          id: "q-qad-14",
          text: "<strong>CONTEMPORAIN :</strong> Des Muslim en France peuvent-ils conclure une convention successorale privée islamique après le règlement civil ?",
          choices: [
          { id:"a", text:"Non — illégal en France" },
          { id:"b", text:"Oui — sans valeur légale civile mais valeur religieuse et morale entre signataires" },
          { id:"c", text:"Oui avec force légale complète" },
          { id:"d", text:"Non — interdit par la fatwa du CFCM" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : après le règlement successoral civil (qui s'impose légalement), les héritiers Muslims peuvent conclure entre eux une convention privée pour redistribuer selon les parts islamiques. Ce document est moralement contraignant entre Muslims mais n'a pas de force légale civile. C'est une pratique recommandée pour respecter les فَرَائِض dans le contexte français."
        },
        {
          id: "q-qad-15",
          text: "L'Iqrār (الإِقرَار) (aveu) peut-il être rétracté après avoir été prononcé ?",
          choices: [
          { id:"a", text:"Non — l'aveu est irrévocable" },
          { id:"b", text:"Oui pour les حُدُود — la rétractation peut empêcher l'exécution de la peine selon certains savants" },
          { id:"c", text:"Oui pour toutes les affaires" },
          { id:"d", text:"Non sauf si prononcé par erreur" }
          ],
          correctId: "b",
          explanation: "Pour les حُدُود (peines coraniques), certains savants malikites permettent la rétractation de l'aveu avant l'exécution — le doute (شُبهَة) dans les حُدُود est toujours favorable à l'accusé. Pour les droits civils (créances, dommages), la rétractation de l'aveu est généralement irrecevable une fois prononcé devant le juge."
        },
        {
          id: "q-qad-16",
          text: "<strong>PIÈGE :</strong> Le témoignage de l'ennemi déclaré contre son ennemi est-il recevable ?",
          choices: [
          { id:"a", text:"Oui — si le témoin est par ailleurs honorable" },
          { id:"b", text:"Non — le conflit d'intérêt (التُّهمَة) disqualifie le témoin quel que soit son honorabilité générale" },
          { id:"c", text:"Seulement dans les affaires financières" },
          { id:"d", text:"Oui si deux autres témoins confirment" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : عَدَم التُّهمَة (absence de conflit d'intérêt) est une condition du témoignage. L'ennemi déclaré témoignant contre son ennemi est disqualifié — même s'il est habituellement honorable. Le conflit d'intérêt personnel (عَدَاوَة دُنيَوِيَّة) crée une présomption de partialité irréfutable."
        },
        {
          id: "q-qad-17",
          text: "<strong>AVANCÉ :</strong> Qu'Tazkiya (التَّزكِيَة) en procédure islamique ?",
          choices: [
          { id:"a", text:"Le paiement des frais de justice" },
          { id:"b", text:"L'enquête effectuée par le juge pour vérifier l'ʿAdāla (العَدَالَة) d'un témoin avant d'accepter son témoignage" },
          { id:"c", text:"La lecture du Coran avant l'audience" },
          { id:"d", text:"La signature des parties sur le jugement" }
          ],
          correctId: "b",
          explanation: "Tazkiya (التَّزكِيَة) est la vérification de l'honorabilité (العَدَالَة) d'un témoin par le juge ou ses enquêteurs. Le juge peut demander à des personnes de confiance dans la communauté de confirmer que le témoin est honnête, pratiquant et sans péchés majeurs connus — avant d'accepter son témoignage."
        },
        {
          id: "q-qad-18",
          text: "<strong>PIÈGE :</strong> Le témoignage de l'enfant pré-pubère est-il toujours irrecevable en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — toujours irrecevable" },
          { id:"b", text:"Pas tout à fait : exception malikite pour le témoignage de garçons entre eux dans les blessures légères survenues entre eux" },
          { id:"c", text:"Valide pour les affaires civiles" },
          { id:"d", text:"Valide si confirmé par un adulte" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : le témoignage de garçons pré-pubères entre eux (les uns contre les autres) dans des affaires de blessures légères survenues en leur présence exclusive est admissible — avant qu'ils aient eu le temps de se consulter et de se concerter. C'est une exception pratique unique au rite malikite."
        },
        {
          id: "q-qad-19",
          text: "Un jugement islamique rendu sur la base d'une fausse preuve peut-il être révisé ?",
          choices: [
          { id:"a", text:"Non — le jugement est définitif" },
          { id:"b", text:"Oui — si l'erreur ou la fausse preuve est démontrée, le jugement peut être révisé" },
          { id:"c", text:"Seulement dans les 30 jours" },
          { id:"d", text:"Seulement pour les حُدُود" }
          ],
          correctId: "b",
          explanation: "Un jugement rendu par erreur (sur fausse preuve ou malentendu) peut être révisé si l'erreur est prouvée — même après exécution partielle. Le droit islamique ne sanctifie pas les erreurs judiciaires. Mukhtasar Khalīl : le juge qui réalise son erreur doit la corriger lui-même ou référer à un juge supérieur."
        },
        {
          id: "q-qad-20",
          text: "<strong>SYNTHÈSE :</strong> Quels sont les 3 principaux moyens de preuve en droit islamique malikite ?",
          choices: [
          { id:"a", text:"La rumeur, le serment et la réputation" },
          { id:"b", text:"Bayyina (البَيِّنَة) (témoignage), Iqrār (الإِقرَار) (aveu) et al-yamīn (اليَمِين) (serment) — Istifāḍa (الاستِفَاضَة) comme preuve spécifiquement malikite" },
          { id:"c", text:"L'écrit, le serment et la fatwa" },
          { id:"d", text:"Uniquement les témoins oculaires" }
          ],
          correctId: "b",
          explanation: "Les 3 principaux moyens de preuve islamiques : (1) Bayyina (البَيِّنَة) = témoignage de témoins équitables (2 hommes, ou combinaisons selon les cas) ; (2) Iqrār (الإِقرَار) = aveu du défendeur (maître des preuves) ; (3) al-yamīn (اليَمِين) = serment judiciaire. Spécificité malikite : Istifāḍa (الاستِفَاضَة) (notoriété publique constante) comme 4ème moyen pour certaines affaires."
        }
        ]
      }
    },

    /* ═══ الجِنَايَات وḤudūd (الحُدُود) ═══ */
    {
      id: "hudud",
      title: "Crimes et Peines en Islam",
      arabicTitle: "الجِنَايَات وal-ḥudūd (الحُدُود)",
      icon: "shield",
      description: "Droit pénal islamique : Qiṣāṣ (القِصَاص) (talion), Diyāt (الدِّيَات) (compensations) Ḥudūd (الحُدُود) (peines coraniques).",
      source: "Mukhtasar Khalīl pp.240-260 · doctrine-malikite.fr",
      badge: {
        id: 'badge-avance-hudud',
        title: "Juriste du Droit Pénal",
        arabicTitle: "عَارِفُ الجِنَايَات",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "الجِنَايَات وḤudūd (الحُدُود)"
      },

      lessons: [
              {
        id: "hud-01",
        title: "Qiṣāṣ (القِصَاص) وDiyāt (الدِّيَات) — Talion et Compensations",
        status: 'available',
        content: [
        {"t": "lead", "v": "Qiṣāṣ (القِصَاص) (talion) Diyāt (الدِّيَات) (compensations pécuniaires) constituent le droit pénal islamique relatif aux atteintes à la personne. C'est un système qui équilibre justice, miséricorde et protection sociale. Le Mukhtasar Khalīl (pp. 240-250) y consacre un chapitre dense."},
        { t:'ar', v:"وَلَكُم فِي al-qiṣāṣ (القِصَاص)ِ حَيَاةٌ يَا أُولِي الأَلبَابِ", n:"« Dans le talion, il y a pour vous la vie, ô gens doués d'intelligence. » — Coran 2:179" },
        {"t": "h", "v": "Qiṣāṣ (القِصَاص) — Le Talion : définition et conditions"},
        { t:'ul', v:[
          "<strong>Définition :</strong> infliger au coupable exactement ce qu'il a infligé à la victime.",
          "<strong>Qiṣāṣ (القِصَاص) :</strong> (1) intentionnalité du meurtre (عَمد) ; (2) égalité de statut (Muslim tue Muslim, ou dhimmī tue dhimmī) ; (3) le meurtrier est adulte et sain d'esprit.",
          "<strong>Qiṣāṣ (القِصَاص) :</strong> père tuant son fils (position malikite et hanbalite) ; maître tuant son esclave.",
          "<strong>Spécificité malikite :</strong> le groupe tuant ensemble une personne sont tous passibles du قِصَاص — même si 10 ont tué 1.",
          "Mukhtasar Khalīl : le قِصَاص s'applique aussi aux blessures intentionnelles (قِصَاص الأَطراف) si la blessure est délimitable."
        ] },
        {"t": "h", "v": "من يملك العفو — Qui peut pardonner ?"},
        { t:'ul', v:[
          "Le ayant-droit du sang (وَلِيُّ الدَّم) : héritiers de la victime — ils ont le choix entre 3 options.",
          "<strong>Option 1 : Qiṣāṣ (القِصَاص)</strong> — exiger le talion.",
          "<strong>Option 2 : Diya (الدِّيَة)</strong> — accepter la compensation financière.",
          "<strong>Option 3 : العَفو</strong> — pardonner gratuitement (la plus méritoire islamiquement).",
          "Coran 5:45 : « Si l'on renonce au talion par charité, cela lui vaut une expiation. »"
        ] },
        {"t": "h", "v": "Diya (الدِّيَة) — La Compensation Pécuniaire"},
        { t:'ul', v:[
          "<strong>Montant de base :</strong> 100 chameaux (valeur de référence coranique), ou leur équivalent en or ou argent.",
          "<strong>Dِية المرأة :</strong> moitié de la دِية de l'homme selon les 4 écoles.",
          "<strong>دِية أهل الكتاب :</strong> 1/2 ou 1/3 de la دِية du Muslim selon les positions malikites (débat interne).",
          "<strong>الدِّية المُغَلَّظَة :</strong> دِية alourdie (100 chameaux répartis en groupes de 30 tebas, 30 hiqqāt, 40 enceintes) Shibh al-ʿAmd (شِبه العَمد).",
          "<strong>ʿĀʿĀqila (العَاقِلَة) :</strong> dans le meurtre non intentionnel (الخَطأ), la دِية est supportée collectivement par le groupe familial (عَشِيرَة) du meurtrier — pas par lui seul."
        ] },
        {"t": "note", "v": "Le systèQiṣāṣ (القِصَاص) / دِية est profondément humaniste : il donne à la famille de la victime le choix entre la justice (talion), la réparation (compensation) et la miséricorde (pardon). La pression sociale dans l'Islam encourage le pardon — mais ne l'impose jamais."}
        ]
      },
      {
        id: "hud-02",
        title: "مَفهُوم Ḥudūd (الحُدُود) — Les Peines Coraniques : Principes et Cadre",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ḥudūd (الحُدُود) (singulier : حَدّ) sont les peines fixées par le Coran et la Sunna pour des infractions précises. Leur compréhension exige de saisir le cadre global — conditions, doutes, et finalité — avant de traiter chaque حَدّ séparément."},
        {"t": "h", "v": "Définition et liste des حُدُود"},
        { t:'ul', v:[
          "Terme : حَدّ = frontière, limite fixée par Allah.",
          "<strong>6 حُدُود en rite malikite :</strong> (1) al-zinā (الزِّنَا) (adultère/fornication) ; (2) القَذف (fausse accusation d'adultère) ; (3) الشُّرب (consommation d'alcool) ; (4) al-sariqa (السَّرِقَة) (vol) ; (5) الحِرَابَة (brigandage) ; (6) al-ridda (الرِّدَّة) (apostasie).",
          "Le Mukhtasar Khalīl les traite dans cet ordre aux pp. 250-260."
        ] },
        {"t": "h", "v": "Shubha (الشُّبهَة) — Le Doute comme Protection"},
        {"t": "p", "v": "Principe cardinal : « Ḥudūd (الحُدُود)ُ تُدرَأُ بِShubuhāt (الشُّبُهَات)ِ » — les حُدُود sont levés par le doute. Toute ambiguïté sérieuse dans les preuves, les conditions ou l'intention empêche l'application du حَدّ."},
        { t:'ul', v:[
          "Si le prévenu a un doute sérieux sur la licéité de l'acte → حَدّ levé.",
          "Si les preuves sont incomplètes → حَدّ levé.",
          "Si le moyen de preuve est contestable → حَدّ levé.",
          "Le doute profite TOUJOURS à l'accusé en matière de حُدُود."
        ] },
        {"t": "h", "v": "Conditions générales pour l'application d'un حَدّ"},
        { t:'ul', v:[
          "L'auteur doit être : Muslim, pubère, sain d'esprit.",
          "L'acte doit être prouvé par : 4 témoins oculaires (زِنَا) OU aveu répété (إِقرَار).",
          "Pas de contrainte (إكراه) — la contrainte empêche le حَدّ.",
          "Pas d'ignorance excusable (جَهل مُعتَبَر) — celui qui ignorait l'interdiction n'est pas soumis au حَدّ.",
          "Tawba (التَّوبَة) avant la poursuite : debated — certains savants malikites le prennent en compte."
        ] },
        {"t": "h", "v": "Taʿzīr (التَّعزِير) — Peine Discrétionnaire"},
        {"t": "p", "v": "Pour les infractions sans حَدّ fixé, le juge (قَاضٍ) Taʿzīr (التَّعزِير) (peine discrétionnaire adaptée) : amende, emprisonnement, flagellation légère, blâme public, etc. Taʿzīr (التَّعزِير) est le outil juridique principal du droit pénal islamique contemporain."},
        {"t": "note", "v": "Point crucial pour la compréhension contemporaine : les conditions d'application des حُدُود dans leur cadre original (État islamique, témoins parfaits, preuves irréfutables) étaient si strictes que les حُدُود étaient rarement exécutés. Leur fonction première était dissuasive (رَدع) et éducative, pas punitive."}
        ]
      },
      {
        id: "hud-03",
        title: "حَدّ al-sariqa (السَّرِقَة) والحِرَابَة — Vol et Brigandage",
        status: 'available',
        content: [
        {"t": "lead", "v": "حَدّ al-sariqa (السَّرِقَة) (amputation pour vol qualifié) et Ḥadd al-ḤḤadd al-Ḥirāba (حَدّ الحِرَابَة) (brigandage armé) sont les deux حُدُود liés aux atteintes aux biens. Leurs conditions sont nombreuses et strictes — le Mukhtasar Khalīl (pp. 252-256) les détaille avec précision."},
        {"t": "h", "v": "حَدّ al-sariqa (السَّرِقَة) — Conditions cumulatives"},
        { t:'ar', v:"وَالسَّارِقُ وَالسَّارِقَةُ فَاقطَعُوا أَيدِيَهُمَا", n:"Coran 5:38 — Fondement coranique du حَدّ al-sariqa (السَّرِقَة)" },
        { t:'ul', v:[
          "<strong>1. Niṣāb (النِّصَاب) :</strong> la valeur volée doit atteindre le seuil minimum — 1/4 dinar d'or (environ 1g d'or) selon le rite malikite.",
          "<strong>2. ḤḤirz (الحِرز) :</strong> le bien volé doit être dans un endroit sécurisé (maison fermée, coffre, boutique fermée). Voler dans un espace public sans gardien = pas de حَدّ.",
          "<strong>3. الأَخذ خُفيَة :</strong> pris en cachette — l'arrachage à force (اِختِلَاس) n'est pas un vol qualifié.",
          "<strong>4. عَدَم Shubha (الشُّبهَة) :</strong> pas de droit réel ou prétendu sur le bien. Ex : un père volant le bien de son fils → pas de حَدّ (شُبهَة de propriété familiale).",
          "<strong>5. الثُّبُوت :</strong> prouvé par 2 témoins ou aveu."
        ] },
        {"t": "h", "v": "La peine et son application"},
        { t:'ul', v:[
          "<strong>1ère fois :</strong> amputation de la main droite.",
          "<strong>2ème fois :</strong> amputation du pied gauche.",
          "<strong>3ème et 4ème fois :</strong> Taʿzīr (التَّعزِير) (peine discrétionnaire) selon certains savants malikites.",
          "Si la main est rendue et la valeur restituée AVANT jugement → certains savants malikites lèvent le حَدّ.",
          "La pauvreté absolue (مَخمَصَة شَدِيدَة) crée une شُبهَة → حَدّ levé."
        ] },
        {"t": "h", "v": "Ḥadd al-ḤḤadd al-Ḥirāba (حَدّ الحِرَابَة) — Le Brigandage Armé"},
        {"t": "p", "v": "La حِرَابَة (vol à main armée, terrorisme de grande route) est plus grave que le vol ordinaire car elle perturbe la sécurité publique."},
        { t:'ul', v:[
          "Coran 5:33 : 4 peines selon la gravité : exécution / amputation croisée (main droite + pied gauche) / exil / mort en croix.",
          "Mukhtasar Khalīl : si le brigand a tué ET volé → exécution ET croix. S'il a tué sans voler → exécution. S'il a volé sans tuer → amputation croisée. Terreur sans vol ni meurtre → exil.",
          "La حِرَابَة inclut tout acte de terrorisme perturbant la sécurité collective.",
          "Tawba (التَّوبَة) avant arrestation → supprime le حَدّ selon l'opinion malikite (Coran 5:34)."
        ] },
        {"t": "note", "v": "Niṣāb (النِّصَاب) : le rite malikite fixe le minimum à 1/4 dinar d'or (valeur approximative d'environ 1g d'or = environ 60-70€ en 2024). En dessous de cette valeur → pas de حَدّ al-sariqa (السَّرِقَة) Taʿzīr (التَّعزِير). C'est l'une des valeurs les plus basses parmi les 4 madhāhib."}
        ]
      },
      {
        id: "hud-04",
        title: "حُدُود الأَخلَاق — Fornication, Calomnie, Alcool et Apostasie",
        status: 'available',
        content: [
        {"t": "lead", "v": "Quatre حُدُود concernent l'ordre moral et spirituel islamique. Leurs conditions d'application sont parmi les plus strictes du droit pénal islamique."},
        {"t": "h", "v": "حَدّ al-zinā (الزِّنَا) — La Fornication/Adultère"},
        { t:'ul', v:[
          "Preuve : 4 témoins oculaires ayant vu l'acte consommé — quasi impossible à réunir.",
          "Ou : aveu volontaire et répété du prévenu (qui peut se rétracter).",
          "<strong>Peine malikite :</strong> muhsan (marié) → lapidation ; ghair muhsan (non marié) → 100 coups + exil d'un an.",
          "Si une seule des 4 conditions manque (témoin douteux, acte incomplet prouvé…) → حَدّ levé.",
          "Mukhtasar Khalīl : la grossesse hors mariage SEULE n'est pas une preuve de زِنَا — elle peut être due à une erreur (وَطء شُبهَة)."
        ] },
        {"t": "h", "v": "ḤḤadd al-Qadhf (حَدّ القَذف) — La Fausse Accusation d'Adultère"},
        { t:'ul', v:[
          "Accuser quelqu'un d'adultère sans 4 témoins → 80 coups de fouet.",
          "Protection de l'honneur (العِرض) — l'une des 5 مَقَاصِد Sharīʿa (الشَّرِيعَة).",
          "Conditions : la victime est Muslim, libre, muhsan (marié ou pas ?), nie l'accusation.",
          "Le repentir lève-t-il le ḤḤadd al-Qadhf (حَدّ القَذف) ? Débat interne — selon l'Imām Mālik : non, le حَدّ est un droit de la victime (pas d'Allah), donc seule la victime peut pardonner."
        ] },
        {"t": "h", "v": "ḤḤadd al-Shurb (حَدّ الشُّرب) — La Consommation d'Alcool"},
        { t:'ul', v:[
          "<strong>Spécificité malikite :</strong> 40 coups selon l'Imām Mālik (d'autres écoles : 80 coups).",
          "Preuve : témoignage de 2 témoins ayant vu boire, ou aveu, ou odeur d'alcool sur l'haleine.",
          "S'applique à tout alcool (خَمر) — jus de raisin fermenté ou tout enivrisant.",
          "Mukhtasar Khalīl : si boire pour raison médicale sur prescription → pas de حَدّ (شُبهَة médicale)."
        ] },
        {"t": "h", "v": "حَدّ al-ridda (الرِّدَّة) — L'Apostasie"},
        { t:'ul', v:[
          "Spécificité malikite : délai de 3 jours pour استتابة (invitation au retour à l'Islam) avant toute sanction.",
          "Si l'apostat revient → libéré ; s'il persiste → peine classique (qui n'est pas applicable dans un État non islamique).",
          "L'apostasie dissolve le mariage (الفُرقَة par fَسخ) et fait perdre le droit à l'héritage.",
          "Les biens de l'apostat : transmis à ses héritiers Muslims s'il meurt dans l'apostasie.",
          "Contexte contemporain : en pays non islamique, aucune sanction temporelle n'est applicable."
        ] },
        {"t": "note", "v": "Nuance théologique fondamentale : en Islam, nul n'est contraint de croire (Coran 2:256 « لَا إِكرَاهَ فِي الدِّين »). L'apostasie dans le contexte classique était aussi un acte de trahison politique et sociale — la dimension purement religieuse et la dimension politique étaient indissociables dans le contexte de l'État islamique médinois. Dans le contexte contemporain, les savants dissocient les deux dimensions."}
        ]
      },
      {
        id: "hud-05",
        title: "Ḥudūd (الحُدُود) فِي السِّيَاق المُعَاصِر — Compréhension et Application",
        status: 'available',
        content: [
        {"t": "lead", "v": "La question des حُدُود dans le contexte contemporain est l'une des plus débattues en théologie islamique moderne. Ce chapitre présente le cadre doctrinal malikite et les positions des savants contemporains, notamment à partir de doctrine-malikite.fr."},
        {"t": "h", "v": "مَقَاصِد Sharīʿa (الشَّرِيعَة) — Les Finalités de la Loi Islamique"},
        {"t": "p", "v": "Les حُدُود s'inscrivent dans le cadre des 5 finalités de la شَرِيعَة (مَقَاصِد) que le fiqh malikite, via Imām al-Ghazālī et Ibn Rushd, a systématisées :"},
        { t:'ul', v:[
          "<strong>1. حِفظُ الدِّين :</strong> protection de la religion → حَدّ al-ridda (الرِّدَّة).",
          "<strong>2. حِفظُ النَّفس :</strong> protection de la vie → Qiṣāṣ (القِصَاص).",
          "<strong>3. حِفظُ العَقل :</strong> protection de l'intellect → ḤḤadd al-Shurb (حَدّ الشُّرب).",
          "<strong>4. حِفظُ النَّسل :</strong> protection de la lignée → حَدّ al-zinā (الزِّنَا).",
          "<strong>5. حِفظُ المَال :</strong> protection des biens → حَدّ al-sariqa (السَّرِقَة)."
        ] },
        {"t": "h", "v": "Position des savants malikites contemporains"},
        { t:'ul', v:[
          "Les conditions d'application des حُدُود étaient conçues pour un État islamique pleinement établi avec justice sociale — leur application hors de ce contexte est problématique.",
          "Doctrine-malikite.fr souligne que les finalités (مَقَاصِد) des حُدُود sont permanentes ; les modalités d'application peuvent varier selon le contexte.",
          "En pays non islamique : aucun حَدّ n'est applicable — la loi civile s'impose.",
          "L'injustice sociale (pauvreté, oppression) crée des شُبُهَات qui lèvent les حُدُود — Sayyidnā ʿUmar n'a pas appliqué le حَدّ al-sariqa (السَّرِقَة) pendant l'année de famine."
        ] },
        {"t": "h", "v": "Taʿzīr (التَّعزِير) comme alternative principale"},
        { t:'ul', v:[
          "Dans le contexte contemporain, Taʿzīr (التَّعزِير) (peine discrétionnaire) est le principal outil pénal islamique applicable.",
          "Il inclut : amendes, emprisonnement, blâme public, exclusion communautaire, programmes de réhabilitation.",
          "Le juge adapte la peine à la situation, la personnalité du coupable et le contexte social.",
          "Les codes péTaʿzīr (التَّعزِير)."
        ] },
        { t:'ar', v:"إِنَّ اللَّهَ يَأمُرُ بِالعَدلِ وَal-iḥsān (الإِحسَان)ِ", n:"Coran 16:90 — « Allah commande la justice et la bienfaisance. »" },
        {"t": "note", "v": "Point de méthode malikite : l'Imām Mālik était connu pour sa prudence dans l'application des حُدُود. Dans la Muwattaʾ et la Mudawwana, il cite de nombreuses conditions et exceptions qui réduisent le champ d'application des حُدُود. Cette prudence est un trait distinctif de la méthode juridique malikite."}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-hudud',
        title: 'Questionnaire — ' + "الجِنَايَات وḤudūd (الحُدُود)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-hud-01",
          text: "La victime d'un meurtre intentionnel (أو ses héritiers) a 3 options. Lesquelles ?",
          choices: [
          { id:"a", text:"Punir, emprisonner ou exiler" },
          { id:"b", text:"Qiṣāṣ (القِصَاص) (talion) / Diya (الدِّيَة) (compensation) / العَفو (pardon)" },
          { id:"c", text:"Porter plainte, négocier ou abandonner" },
          { id:"d", text:"Réclamer le حَدّ, la دِية Taʿzīr (التَّعزِير)" }
          ],
          correctId: "b",
          explanation: "Le وَلِيُّ الدَّم (ayant-droit du sang) a 3 options : (1) Qiṣāṣ (القِصَاص) — exiger le talion ; (2) Diya (الدِّيَة) — accepter la compensation financière ; (3) العَفو — pardonner gratuitement, ce qui est islamiquement le plus méritoire. Coran 5:45 : le pardon est une expiation pour lui."
        },
        {
          id: "q-hud-02",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Si 10 personnes ont tué ensemble une seule personne, sont-elles toutes passibles du قِصَاص ?",
          choices: [
          { id:"a", text:"Non — seulement celui qui a porté le coup fatal" },
          { id:"b", text:"Oui — le groupe entier est passible du قِصَاص" },
          { id:"c", text:"Non — seulement le meneur" },
          { id:"d", text:"Oui mais seulement 1 parmi les 10 est exécuté" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite et hanbalite : si un groupe assassine une personne ensemble → tous sont passibles du قِصَاص. Cette position protège contre les meurtres collectifs organisés où chacun tente de se cacher derrière les autres. La position hanafite et chāfiʿite diverge sur ce point."
        },
        {
          id: "q-hud-03",
          text: "Diya (الدِّيَة) de base correspond à :",
          choices: [
          { id:"a", text:"1000 dirhams d'argent" },
          { id:"b", text:"100 chameaux ou leur équivalent en or/argent" },
          { id:"c", text:"500 dinars d'or" },
          { id:"d", text:"La valeur du bien détruit" }
          ],
          correctId: "b",
          explanation: "La دِية de base pour le meurtre intentionnel est 100 chameaux (نص حَدِيث) ou leur équivalent en or/argent selon l'époque. La دِية المُغَلَّظَة (alourdie) Shibh al-ʿAmd (شِبه العَمد) (meurtre quasi-intentionnel) est répartie en 30 tebas + 30 hiqqāt + 40 chameaux enceintes."
        },
        {
          id: "q-hud-04",
          text: "La ʿĀʿĀqila (العَاقِلَة) : qui supporte la دِية Qatl al-Khaṭaʾ (القَتل الخَطَأ) ?",
          choices: [
          { id:"a", text:"Le meurtrier seul" },
          { id:"b", text:"L'État islamique" },
          { id:"c", text:"Le groupe familial (عَشِيرَة) du meurtrier, collectivement" },
          { id:"d", text:"Les héritiers du meurtrier" }
          ],
          correctId: "c",
          explanation: "Qatl al-Khaṭaʾ (القَتل الخَطَأ) (meurtre non intentionnel), la دِية est supportée par ʿĀʿĀqila (العَاقِلَة) — le groupe familial/tribal du meurtrier, collectivement et répartie sur 3 ans. Le meurtrier lui-même ne la paye pas personnellement. Cette solidarité familiale est un système de sécurité sociale islamique préislamique validé par l'Islam."
        },
        {
          id: "q-hud-05",
          text: "<strong>PIÈGE :</strong> Un homme vole une valeur inféNiṣāb (النِّصَاب) (seuil minimum). Y a-t-il un حَدّ al-sariqa (السَّرِقَة) ?",
          choices: [
          { id:"a", text:"Oui — tout vol engage le حَدّ" },
          { id:"b", text:"Non — Niṣāb (النِّصَاب) (1/4 dinar d'or en rite malikite), c'Taʿzīr (التَّعزِير), pas le حَدّ" },
          { id:"c", text:"Seulement si c'est un récidiviste" },
          { id:"d", text:"Non seulement si c'est un pauvre" }
          ],
          correctId: "b",
          explanation: "Niṣāb (النِّصَاب) (seuil minimum) pour le حَدّ al-sariqa (السَّرِقَة) est 1/4 dinar d'or en rite malikite (environ 1g d'or). En dessous → Taʿzīr (التَّعزِير) (peine discrétionnaire). Au dessus + toutes les autres conditions → حَدّ. C'est une des valeurs les plus basses parmi les 4 écoles."
        },
        {
          id: "q-hud-06",
          text: "<strong>CRUCIALE :</strong> La condition du ḤḤirz (الحِرز) — qu'est-ce que c'est et pourquoi est-elle essentielle ?",
          choices: [
          { id:"a", text:"La valeur minimale volée" },
          { id:"b", text:"Le lieu sécurisé d'où le bien a été volé — sans ḤḤirz (الحِرز), pas de حَدّ" },
          { id:"c", text:"L'intention du voleur" },
          { id:"d", text:"Le nombre de témoins" }
          ],
          correctId: "b",
          explanation: "ḤḤirz (الحِرز) = lieu protégé/sécurisé. Le bien doit avoir été volé dans un endroit qui le protégeait normalement : maison fermée, boutique fermée, coffre, voiture verrouillée. Voler dans un espace public non gardé → pas de حَدّ (pas de الحِرز). Cette condition protège les pickpockets opportunistes d'une peine démesurée."
        },
        {
          id: "q-hud-07",
          text: "Combien de témoins faut-il pour prouver la زِنَا et appliquer le حَدّ ?",
          choices: [
          { id:"a", text:"2 témoins" },
          { id:"b", text:"3 témoins" },
          { id:"c", text:"4 témoins oculaires ayant vu l'acte consommé" },
          { id:"d", text:"1 témoin + aveu" }
          ],
          correctId: "c",
          explanation: "La زِنَا requiert 4 témoins oculaires ayant vu l'acte sexuel consommé (pas l'approche, mais l'acte lui-même selon Mukhtasar Khalīl). Ce seuil quasi-impossible à atteindre protège la vie privée. Moins de 4 témoins → les témoins risquent eux-mêmes le ḤḤadd al-Qadhf (حَدّ القَذف) (fausse accusation)."
        },
        {
          id: "q-hud-08",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> La grossesse hors mariage prouve-t-elle automatiquement la زِنَا ?",
          choices: [
          { id:"a", text:"Oui — c'est une preuve directe" },
          { id:"b", text:"Non — elle peut résulter d'un وَطء شُبهَة (rapport par méprise) → حَدّ levé" },
          { id:"c", text:"Oui si la femme est célibataire" },
          { id:"d", text:"Oui si elle ne peut pas l'expliquer" }
          ],
          correctId: "b",
          explanation: "Position malikite nuancée : la grossesse hors mariage seule n'est pas une preuve suffisante de زِنَا. Elle peut résulter d'un وَطء شُبهَة (rapport dans une situation de méprise sur la licéité). Le doute (شُبهَة) lève toujours le حَدّ. Seul un aveu explicite ou 4 témoins permettent d'appliquer le حَدّ."
        },
        {
          id: "q-hud-09",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Combien de coups dans le ḤḤadd al-Shurb (حَدّ الشُّرب) (alcool) selon l'Imām Mālik ?",
          choices: [
          { id:"a", text:"80 coups comme l'école hanafite" },
          { id:"b", text:"40 coups selon l'Imām Mālik" },
          { id:"c", text:"60 coups" },
          { id:"d", text:"100 coups" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : l'Imām Mālik fixe le ḤḤadd al-Shurb (حَدّ الشُّرب) à 40 coups, se basant sur la pratique du Prophète ﷺ et d'Abū Bakr. Les écoles hanafite et chāfiʿite optent pour 80 coups (basées sur la pratique d'ʿUmar). C'est une divergence authentique entre les écoles sur ce حَدّ."
        },
        {
          id: "q-hud-10",
          text: "Le ḤḤadd al-Qadhf (حَدّ القَذف) (fausse accusation d'adultère) peut-il être pardonné par la victime ?",
          choices: [
          { id:"a", text:"Non — c'est un droit d'Allah, non remissible" },
          { id:"b", text:"Oui — c'est un droit de la victime (حَقّ آدَمِيّ) ; elle seule peut pardonner et lever le حَدّ" },
          { id:"c", text:"Oui avec accord du juge" },
          { id:"d", text:"Non sauf si l'accusé prouve la vérité" }
          ],
          correctId: "b",
          explanation: "Position malikite : le ḤḤadd al-Qadhf (حَدّ القَذف) est un حَقّ آدَمِيّ (droit humain), pas un حَقّ إِلَهِيّ. La victime de la calomnie peut donc pardonner et lever le حَدّ. Le repentir de l'accusé seul ne suffit pas — c'est à la victime de décider. C'est différent des حُدُود qui sont حَقّ الله (comme حَدّ الزِّنَا)."
        },
        {
          id: "q-hud-11",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> L'apostat (مُرتَدّ) a combien de jours pour reconsidérer avant sanction ?",
          choices: [
          { id:"a", text:"Immédiatement" },
          { id:"b", text:"3 jours (استتابة)" },
          { id:"c", text:"40 jours" },
          { id:"d", text:"1 mois" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik dans la Mudawwana : l'apostat reçoit un délai de 3 jours pour l'استتابة (invitation au retour). Pendant ces 3 jours, des savants discutent avec lui, lèvent ses doutes et l'invitent à revenir. S'il revient → libéré. C'est une approche pastorale qui précède toute sanction."
        },
        {
          id: "q-hud-12",
          text: "Le principe « Ḥudūd (الحُدُود)ُ تُدرَأُ بِShubuhāt (الشُّبُهَات)ِ » signifie :",
          choices: [
          { id:"a", text:"Les حُدُود sont toujours exécutés sans exception" },
          { id:"b", text:"Toute ambiguïté sérieuse dans les preuves ou conditions lève le حَدّ — le doute profite à l'accusé" },
          { id:"c", text:"Les حُدُود s'appliquent à tous sauf aux savants" },
          { id:"d", text:"On peut douter de tout sauf de l'aveu" }
          ],
          correctId: "b",
          explanation: "Hadīth : « ادرَءُوا Ḥudūd (الحُدُود)َ بِShubuhāt (الشُّبُهَات)ِ » — « levez les حُدُود par les doutes. » C'est l'un des principes fondamentaux du droit pénal islamique. Toute شُبهَة sérieuse (doute sur la preuve, l'intention, les conditions, l'ignorance excusable...) suffit pour empêcher l'application du حَدّ."
        },
        {
          id: "q-hud-13",
          text: "Sayyidnā ʿUmar a suspendu le حَدّ al-sariqa (السَّرِقَة) pendant l'année de famine. Pourquoi ?",
          choices: [
          { id:"a", text:"Par clémence personnelle" },
          { id:"b", text:"Car la pauvreté crée une شُبهَة — le besoin vital excuse le vol pour survivre" },
          { id:"c", text:"Car la preuve était insuffisante" },
          { id:"d", text:"Car les juges étaient en voyage" }
          ],
          correctId: "b",
          explanation: "Sayyidnā ʿUmar ﵁ a suspendu le حَدّ al-sariqa (السَّرِقَة) pendant l'année de famine (عَام الرَّمَادَة) car la nécessité Ḍarūra (الضَّرُورَة) crée une شُبهَة — quelqu'un qui vole pour survivre à une famine n'est pas dans la même situation morale qu'un voleur ordinaire. Ce précédent est fondamental dans la jurisprudence malikite."
        },
        {
          id: "q-hud-14",
          text: "<strong>CONTEMPORAIN :</strong> Les حُدُود s'appliquent-ils en France ou en Europe selon doctrine-malikite.fr ?",
          choices: [
          { id:"a", text:"Oui — tout Muslim y est soumis" },
          { id:"b", text:"Non — en pays non islamique, aucun حَدّ n'est applicable ; la loi civile s'impose" },
          { id:"c", text:"Oui mais seulement dans les communautés islamiques" },
          { id:"d", text:"Oui avec accord du consul de la mosquée" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : en pays non islamique, les Muslims sont soumis à la loi civile locale. Les حُدُود nécessitent un État islamique établi, un juge qualifié (قَاضٍ), et toutes les conditions d'application. Aucune de ces conditions n'existe en Europe. Toute tentative d'appliquer des peines islamiques hors de ce cadre serait illicite et illegale."
        },
        {
          id: "q-hud-15",
          text: "Quelle est la sanction pour la حِرَابَة (brigandage) quand le brigand A TUÉ ET VOLÉ selon le Mukhtasar Khalīl ?",
          choices: [
          { id:"a", text:"100 coups + emprisonnement" },
          { id:"b", text:"Exil seulement" },
          { id:"c", text:"Exécution et exposition publique" },
          { id:"d", text:"Amputation croisée seulement" }
          ],
          correctId: "c",
          explanation: "Mukhtasar Khalīl (Coran 5:33) : pour le brigand qui a TUÉ ET VOLÉ → exécution (pour le meurtre) ET exposition publique en croix (pour la terreur publique). Les 4 peines sont : tuer+voler → mort+croix ; tuer sans voler → mort seule ; voler sans tuer → amputation croisée ; terroriser sans voler ni tuer → exil."
        },
        {
          id: "q-hud-16",
          text: "Les 5 مَقَاصِد Sharīʿa (الشَّرِيعَة) sont :",
          choices: [
          { id:"a", text:"Prière, jeûne, hajj, zakāt, pureté" },
          { id:"b", text:"حِفظُ الدِّين / النَّفس / العَقل / النَّسل / المَال" },
          { id:"c", text:"Justice, équité, miséricorde, vérité, paix" },
          { id:"d", text:"Foi, actions, éthique, justice, solidarité" }
          ],
          correctId: "b",
          explanation: "Les 5 finalités (مَقَاصِد) de la شَرِيعَة islamique selon al-Ghazālī et Ibn Rushd : (1) حِفظ الدِّين (protection de la religion) ; (2) حِفظ النَّفس (protection de la vie) ; (3) حِفظ العَقل (protection de l'intellect) ; (4) حِفظ النَّسل (protection de la lignée) ; (5) حِفظ المَال (protection des biens). Les حُدُود protègent chacun de ces objectifs."
        },
        {
          id: "q-hud-17",
          text: "<strong>AVANCÉ :</strong> Tawba (التَّوبَة) avant arrestation lève-t-elle le Ḥadd al-ḤḤadd al-Ḥirāba (حَدّ الحِرَابَة) ?",
          choices: [
          { id:"a", text:"Non — la peine reste" },
          { id:"b", text:"Oui — Coran 5:34 : « sauf ceux qui se repentent avant que vous ne les ayez maîtrisés »" },
          { id:"c", text:"Seulement si le butin est restitué" },
          { id:"d", text:"Seulement si personne n'a été blessé" }
          ],
          correctId: "b",
          explanation: "Coran 5:34 est explicite : « إِلَّا الَّذِينَ تَابُوا مِن قَبلِ أَن تَقدِرُوا عَلَيهِم » — les brigands qui se repentent AVANT d'être arrêtés sont exemptés du حَدّ. C'est une invitation coranique au retour sincère. Après arrestation → Tawba (التَّوبَة) est toujours recommandée mais le حَدّ reste."
        },
        {
          id: "q-hud-18",
          text: "<strong>PIÈGE :</strong> Un père tue son fils. Qiṣāṣ (القِصَاص) en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — l'égalité s'applique même en famille" },
          { id:"b", text:"Non — le père n'est pas passible du قِصَاص pour le meurtre de son fils (position malikite et hanbalite)" },
          { id:"c", text:"Oui si c'est prémédité" },
          { id:"d", text:"Oui avec accord de la mère" }
          ],
          correctId: "b",
          explanation: "Position malikite et hanbalite : le père (ou grand-père) n'est pas passible du قِصَاص pour avoir tué son fils (ou descendant). Il paye la دِية. Fondement : hadīth « لَا يُقتَلُ وَالِدٌ بِوَلَدِهِ ». Les écoles hanafite et chāfiʿite divergent — certains appliquent le قِصَاص."
        },
        {
          id: "q-hud-19",
          text: "Taʿzīr (التَّعزِير) inclut quels types de sanctions ?",
          choices: [
          { id:"a", text:"Seulement la flagellation" },
          { id:"b", text:"Amende, emprisonnement, blâme public, exclusion communautaire, flagellation légère — adapté par le juge à la situation" },
          { id:"c", text:"Uniquement l'amende financière" },
          { id:"d", text:"Seulement l'emprisonnement" }
          ],
          correctId: "b",
          explanation: "Taʿzīr (التَّعزِير) est la peine discrétionnaire adaptée par le قَاضٍ à chaque cas. Elle peut être : amende, emprisonnement (court ou long), blâme public (توبيخ), exclusion de la communauté, surveillance, travaux d'intérêt général, ou flagellation légère. Taʿzīr (التَّعزِير) est l'outil pénal islamique principal pour les infractions sans حَدّ fixé."
        },
        {
          id: "q-hud-20",
          text: "<strong>SYNTHÈSE :</strong> Quel est le principe humaniste fondamental qui différencie l'approche malikite des حُدُود ?",
          choices: [
          { id:"a", text:"Appliquer les peines le plus rapidement possible" },
          { id:"b", text:"Maximiser les doutes (شُبُهَات) pour limiter l'application des حُدُود — la prudence et la miséricorde prévalent sur la sévérité" },
          { id:"c", text:"Appliquer les حُدُود uniquement pour les étrangers" },
          { id:"d", text:"Réserver les حُدُود aux récidivistes" }
          ],
          correctId: "b",
          explanation: "La méthode malikite sur les حُدُود est marquée par la prudence. L'Imām Mālik cite de nombreuses conditions et شُبُهَات dans la Muwattaʾ et la Mudawwana. Sayyidnā ʿUmar a suspendu le حَدّ al-sariqa (السَّرِقَة) en temps de crise. Le principe « تُدرَأُ بِShubuhāt (الشُّبُهَات)ِ » est appliqué généreusement — la miséricorde prime sur la sévérité."
        }
        ]
      }
    },

    /* ═══ Iḥsān (الإِحسَان) وTazkiya (التَّزكِيَة) ═══ */
    {
      id: "ihsan",
      title: "Spiritualité et Éthique Islamique",
      arabicTitle: "al-iḥsān (الإِحسَان) والتَّزكِيَة",
      icon: "heart",
      description: "Le troisième pilier du Matn d'Ibn Āshir : purification de l'âme, stations spirituelles et éthique islamique.",
      source: "Matn d'Ibn Āshir (3ème pilier) · doctrine-malikite.fr La Spiritualité",
      badge: {
        id: 'badge-avance-ihsan',
        title: "Chercheur de l'Excellence",
        arabicTitle: "طَالِبُ al-iḥsān (الإِحسَان)",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Iḥsān (الإِحسَان) وTazkiya (التَّزكِيَة)"
      },

      lessons: [
              {
        id: "ihs-01",
        title: "Iḥsān (الإِحسَان) — Le Troisième Pilier du Curriculum Islamique",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'Iḥsān (الإِحسَان) est le troisième et dernier pilier du Matn d'Ibn Āshir al-Mālikī. Il couronne l'édifice islamique : aprèĪmān (الإِيمَان) Islām (الإِسلَام), vient l'Iḥsān (الإِحسَان). C'est la dimension intérieure et transformatrice de la religion."},
        { t:'ar', v:"al-iḥsān (الإِحسَان)ُ أَن تَعبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِن لَم تَكُن تَرَاهُ فَإِنَّهُ يَرَاكَ", n:"« L'al-iḥsān (الإِحسَان) c'est que tu adores Allah comme si tu Le voyais ; et si tu ne Le vois pas, Lui te voit. » — Hadīth de Gabriel, Muslim" },
        {"t": "h", "v": "الحَدِيثُ الجَامِع — Le Hadīth de Gabriel"},
        {"t": "p", "v": "Dans le Hadīth de Gabriel (rapporté par Muslim), le Prophète ﷺ définit les 3 dimensions de la religion : Islām (الإِسلَام) (pratique des 5 piliers), Īmān (الإِيمَان) (croyance dans les 6 piliers), Iḥsān (الإِحسَان) (excellence dans l'adoration). Le Matn d'Ibn Āshir structure le curriculum islamique selon ce triptyque."},
        {"t": "h", "v": "Le 3ème pilier selon le Matn d'Ibn Āshir"},
        { t:'ul', v:[
          "Ibn Āshir al-Mālikī (mort 1040 H) est l'auteur du matn classique enseigné dans les mosquées d'Afrique du Nord.",
          "Son 3ème pilier (التَّصَوُّف والأَخلَاق) couvre : l'éMaqāmāt (المَقَامَات) et des états (الأَحوَال).",
          "Les sources malikites de référence : al-Risāla al-Qushayriyya, Iḥyāʾ ʿUlūm al-Dīn d'al-Ghazālī, al-Ḥikam d'Ibn ʿAṭāʾ Allāh al-Iskandarī.",
          "Doctrine-malikite.fr y consacre sa section « La Spiritualité »."
        ] },
        {"t": "h", "v": "Iḥsān (الإِحسَان) et les ʿibādāt"},
        { t:'ul', v:[
          "Chaque pilier a une dimension intérieure : la prière enseigne l'humilité et la préKhushūʿ (الخُشُوع).",
          "Le jeûne enseigne la maîṢabr (الصَّبر).",
          "La zakāt enseigne le déZuhd (الزُّهد).",
          "Le حَجّ enseigne l'obéissance et la soumission totale (الانقِيَاد).",
          "Iḥsān (الإِحسَان), les actes d'adoration restent de simples gestes corporels sans transformation intérieure."
        ] },
        {"t": "note", "v": "L'Iḥsān (الإِحسَان) n'est pas réservé aux soufis ou aux élites spirituelles — c'est l'objectif de tout Muslim sincère. Le Prophète ﷺ a invité chaque Muslim à « adorer Allah comme s'il Le voyait » dans ses 5 prières quotidiennes, son jeûne, sa zakāt et tous ses actes."}
        ]
      },
      {
        id: "ihs-02",
        title: "مَقَامَاتُ القَلب — Les Stations Spirituelles",
        status: 'available',
        content: [
        {"t": "lead", "v": "Les مَقَامَات (stations spirituelles) sont les étapes de la progression intérieure vers Allah. Le Matn d'Ibn Āshir et al-Ghazālī dans son Iḥyāʾ les décrivent comme un chemin de transformation que tout Muslim peut emprunter."},
        {"t": "h", "v": "1. Tawba (التَّوبَة) — Le Repentir"},
        { t:'ul', v:[
          "Première station et porte d'entrée : reconnaître ses fautes, les regretter et se résoudre à ne plus les commettre.",
          "Conditions malikites : (1) cesser le péché (الإِقلَاع) ; (2) le regretter sincèrement (النَّدَم) ; (3) résoudre de ne plus recommencer (العَزم).",
          "Si le péché impliquait un droit d'autrui → le restituer est une 4ème condition.",
          "Coran 66:8 : « Revenez à Allah d'un repentir sincère (تَوبَةً نَصُوحًا). »"
        ] },
        {"t": "h", "v": "2. Zuhd (الزُّهد) — Le Détachement du Monde"},
        { t:'ul', v:[
          "Zuhd ≠ pauvreté forcée — c'est avoir le monde dans les mains sans l'avoir dans le cœur.",
          "Ibn Qayyim : le زُهد est de reconnaître que ce que tu as perdu est meilleur que ce que tu posssèdes (l'Âhira > la Dunyā).",
          "Exemple prophétique : le Prophète ﷺ était le plus pauvre des riches et le plus riche des pauvres.",
          "Doctrine-malikite.fr : le Muslim contemporain peut posséder et gagner tout en pratiquant le زُهد dans son cœur."
        ] },
        {"t": "h", "v": "3. Tawakkul (التَّوَكُّل) — La Confiance en Allah"},
        { t:'ul', v:[
          "Confiance totale en Allah pour les résultats, après avoir pris tous les moyens nécessaires.",
          "Hadīth : « Attache ton chameau [prends tes précautions] puis fais confiance à Allah. »",
          "Tawakkul (التَّوَكُّل) ≠ passivité — c'est agir avec tous les moyens puis remettre le résultat à Allah.",
          "Erreur commune : Tawakkul (التَّوَكُّل) avec la paresse ou le fatalisme."
        ] },
        {"t": "h", "v": "4. Ṣabr (الصَّبر) وShukr (الشُّكر) — Patience et Gratitude"},
        { t:'ul', v:[
          "Ṣabr (الصَّبر) : patience dans l'adversité, l'obéissance et devant les désirs illicites.",
          "Shukr (الشُّكر) : gratitude pour les bienfaits par le cœur (reconnaître), la langue (dire) et les membres (agir).",
          "Ibn Qayyim : la religion entièṢabr (الصَّبر) + Shukr (الشُّكر) — les deux pôles de l'existence humaine.",
          "Coran 14:7 : « Si vous êtes reconnaissants, J'augmenterai mes bienfaits ; si vous êtes ingrats, Mon châtiment est sévère. »"
        ] },
        {"t": "h", "v": "5. Maḥabba (المَحَبَّة) — L'Amour d'Allah"},
        {"t": "p", "v": "L'amour d'Allah est la station la plus haute selon Ibn Āshir et al-Ghazālī. Il se nourrit de la connaissance d'Allah (المَعرِفَة) et se manifeste dans la pratique sincère."},
        { t:'ul', v:[
          "Coran 3:31 : « Dis : si vous aimez Allah, suivez-moi — Allah vous aimera. »",
          "Signes de l'amour d'Allah : préférer ce qu'Allah aime à ce qu'on aime soi-même.",
          "L'amour du Prophète ﷺ : condition du vrai amour d'Allah. Hadīth : « Nul n'est croyant tant qu'il ne m'aime plus que son père, son fils et toute l'humanité. »"
        ] },
        {"t": "note", "v": "Ordre des stations selon le Matn d'Ibn Āshir : Tawba (التَّوبَة) → Zuhd (الزُّهد) → Tawakkul (التَّوَكُّل) → Ṣabr (الصَّبر) → Shukr (الشُّكر) → الخَوف → الرَّجَاء → Maḥabba (المَحَبَّة) → المَعرِفَة. Chaque station prépare la suivante. Il n'est pas nécessaire de les « compléter » séquentiellement — elles se renforcent mutuellement tout au long de la vie."}
        ]
      },
      {
        id: "ihs-03",
        title: "أَمرَاضُ القَلب — Les Maladies Spirituelles et leurs Remèdes",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le Matn d'Ibn Āshir et l'Iḥyāʾ d'al-Ghazālī identifient des « maladies du cœur » (أَمرَاض القَلب) qui empêchent la progression spirituelle. Tazkiya (التَّزكِيَة) (purification de l'âme) consiste à les diagnostiquer et les traiter."},
        {"t": "h", "v": "1. Kibr (الكِبر) — L'Orgueil"},
        { t:'ul', v:[
          "Définition : se voir supérieur aux autres et mépriser autrui.",
          "Hadīth : « N'entrera pas au paradis celui qui a dans le cœur le poids d'un atome d'orgueil. » — Muslim.",
          "<strong>Remède :</strong> rappeler ses origines (خُلِقَ مِن مَاء مَهِين), réfléchir à ses propres défauts, servir les pauvres, rechercher les savants et les gens pieux.",
          "Distinguer : Kibr (الكِبر) (orgueil de l'âme) ≠ العِزَّة (dignité légitime)."
        ] },
        {"t": "h", "v": "2. Ḥasad (الحَسَد) — La Jalousie"},
        { t:'ul', v:[
          "Définition : détester le bienfait d'Allah chez autrui et désirer sa disparition.",
          "Hadīth : « Méfiez-vous de la jalousie — elle dévore les bonnes actions comme le feu dévore le bois sec. »",
          "<strong>Remède :</strong> faire un duʿāʾ sincère pour la personne enviée, rappeler que les rizques sont fixés par Allah, rechercher la GhiḅGhiḅṭa (الغِبطَة) (désirer avoir pareil sans vouloir sa disparition chez l'autre) à la place du حَسَد.",
          "La GhiḅGhiḅṭa (الغِبطَة) (émulation positive) est permise, voire recommandée."
        ] },
        {"t": "h", "v": "3. Riyāʾ (الرِّيَاء) — L'Ostentation"},
        { t:'ul', v:[
          "Définition : accomplir des actes d'adoration pour être vu et admiré des hommes.",
          "Coran 4:142 : les hypocrites prient sans se rappeler Allah — « ils ne Le mentionnent que peu. »",
          "<strong>Remède :</strong> multiplier les ʿibādāt secrètes (les prières de nuit, les dons anonymes), rappeler la mort et le Jugement, rechercher uniquement le regard d'Allah.",
          "Hadīth Qudsī : « Je suis le plus riche des associés — celui qui M'associe quelqu'un, Je l'abandonne à son associé. »"
        ] },
        {"t": "h", "v": "4. الغَضَب — La Colère Incontrôlée"},
        { t:'ul', v:[
          "La colère pour Allah est permise (et parfois obligatoire). La colère pour l'ego est destructrice.",
          "Hadīth : « Le fort n'est pas celui qui renverse les autres — le fort est celui qui se maîtrise dans la colère. »",
          "<strong>Remède :</strong> dire أَعُوذُ بِاللهِ (s'abriter en Allah), s'asseoir si debout, s'allonger si assis, faire ses ablutions, rappeler la douceur du Prophète ﷺ.",
          "Le Matn d'Ibn Āshir : maîtriser la colère est l'une des vertus les plus valorisées."
        ] },
        {"t": "h", "v": "5. ḤḤiqd (الحِقد) — La Rancœur"},
        { t:'ul', v:[
          "Définition : garder de l'animosité envers quelqu'un après une dispute.",
          "<strong>Remède :</strong> pardonner (العَفو), se réconcilier, rappeler les défauts de sa propre âme.",
          "Hadīth : « Les portes du paradis s'ouvrent les lundis et jeudis — tous les Muslims sont pardonnés sauf les deux qui se sont brouillés. »",
          "Doctrine-malikite.fr : la مُصَالَحَة (réconciliation) est obligatoire dans les 3 jours suivant une brouille."
        ] },
        {"t": "note", "v": "Méthode al-Ghazālī (adoptée par Ibn Āshir) Tazkiya (التَّزكِيَة) : (1) Murāqaba (المُرَاقَبَة) (surveiller ses intentions) ; (2) Muḥāsaba (المُحَاسَبَة) (bilan quotidien de l'âme) ; (3) Mujāhada (المُجَاهَدَة) (effort sur l'âme) ; (4) المُعَاقَبَة (pénaliser l'âme pour ses erreurs par des actes supplémentaires d'adoration)."}
        ]
      },
      {
        id: "ihs-04",
        title: "الأَخلَاق Islām (الإِسلَام)ِيَّة — L'Éthique Sociale selon le Rite Malikite",
        status: 'available',
        content: [
        {"t": "lead", "v": "La dimension pratique de l'Iḥsān (الإِحسَان) se manifeste dans les relations sociales. Le Matn d'Ibn Āshir et doctrine-malikite.fr y consacrent une part importante — l'éthique sociale islamique (الآدَاب والأَخلَاق) Tazkiya (التَّزكِيَة)."},
        {"t": "h", "v": "حُقُوق الوَالِدَيْن — Droits des parents"},
        { t:'ul', v:[
          "Bienfaisance envers les parents = parmi les plus grands actes après la prière (Coran 17:23).",
          "Même si parents non-Muslims : bienfaisance (البِرّ) et obéissance dans le licite.",
          "Interdit : la désobéissance aux parents (العُقُوق) sauf pour accomplir un péché.",
          "Doctrine-malikite.fr : le Muslim en Occident qui s'est converti doit maintenir des liens familiaux respectueux avec sa famille non-musulmane."
        ] },
        {"t": "h", "v": "حُقُوق الجِيرَان — Droits des voisins"},
        { t:'ul', v:[
          "Hadīth : « Jibrīl m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. »",
          "Niveaux de voisinage : voisin Muslim + parent > voisin Muslim > voisin non-Muslim.",
          "Obligations minimales : ne pas le blesser, répondre à ses salam, l'aider dans le besoin.",
          "Le vacarme nocturne, les mauvaises odeurs, les dommages causés par ses enfants → responsabilité islamique."
        ] },
        {"t": "h", "v": "الكَرَم والسَّخَاء — Générosité et Libéralité"},
        { t:'ul', v:[
          "La générosité est l'une des plus grandes vertus dans la tradition malikite.",
          "Hadīth : « Le généreux est proche d'Allah, des hommes et du paradis. »",
          "Le Matn d'Ibn Āshir liste : الكَرَم (générosité), الإِيثَار (préférer autrui à soi-même), الإِنفَاق (dépenser pour Allah).",
          "Spécificité contemporaine : donner à des associations islamiques = acte de générosité."
        ] },
        {"t": "h", "v": "الصِّدق والأَمَانَة — Honnêteté et Intégrité"},
        { t:'ul', v:[
          "الصِّدق (honnêteté) est la mère des vertus islamiques — elle touche la parole, le commerce et les relations.",
          "Hadīth : « Le المسلم التَّاجِر الصَّدُوق مع النَّبِيِّين والصِّدِّيقِين والشُّهَدَاء. »",
          "الأَمَانَة (intégrité) : remplir ses engagements professionnels, familiaux et religieux.",
          "Doctrine-malikite.fr : l'intégrité dans le travail professionnel est un acte de ʿibāda."
        ] },
        {"t": "h", "v": "التَّوَاضُع والرِّفق — Humilité et Douceur"},
        { t:'ul', v:[
          "Hadīth : « Allah m'a révélé d'être humbles jusqu'à ce que personne ne se vante sur un autre. »",
          "Caractéristique centrale du Prophète ﷺ : la رِفق (douceur) dans toutes les situations.",
          "Hadīth : « La رِفق est dans tout ce qu'elle est — un ornement ; et dans tout ce d'où elle est retirée — une difformité. »",
          "La douceur dans la daʿwa (appel à l'Islam) est une obligation — Coran 16:125."
        ] },
        {"t": "note", "v": "Le Matn d'Ibn Āshir conclut par l'éthique sociale préciséTazkiya (التَّزكِيَة) ne peut être authentique que si elle se manifeste dans les relations avec autrui. Un homme « spirituel » qui maltraite sa famille ou ses voisins n'a pas accompli l'Iḥsān (الإِحسَان) — la spiritualité islamique est sociale par nature."}
        ]
      },
      {
        id: "ihs-05",
        title: "Murāqaba (المُرَاقَبَة) وMuḥāsaba (المُحَاسَبَة) — Surveillance et Bilan de l'Âme",
        status: 'available',
        content: [
        {"t": "lead", "v": "Murāqaba (المُرَاقَبَة) (conscience d'être observé par Allah) Muḥāsaba (المُحَاسَبَة) (bilan quotidien de l'âme) sont les deux pratiques spirituelles quotidiennes recommandées par le Matn d'Ibn Āshir et doctrine-malikite.fr — l'Examen de Conscience Islamique."},
        {"t": "h", "v": "Murāqaba (المُرَاقَبَة) — La Conscience Permanente de la Présence Divine"},
        { t:'ul', v:[
          "Définition : agir en permanence comme si on voyait Allah, ou au moins en sachant qu'Il nous voit.",
          "C'est la traduction pratique de la définition de l'Iḥsān (الإِحسَان) dans le Hadīth de Gabriel.",
          "Elle transforme chaque geste ordinaire (manger, travailler, parler) en acte d'adoration.",
          "Hadīth Qudsī : « Je suis avec Mon serviteur selon l'opinion qu'il a de Moi. »"
        ] },
        {"t": "h", "v": "Muḥāsaba (المُحَاسَبَة) — Le Bilan Quotidien de l'Âme"},
        { t:'ul', v:[
          "Sayyidnā ʿUmar : « حَاسِبُوا أَنفُسَكُم قَبلَ أَن تُحَاسَبُوا » — évaluez vos âmes avant d'être évalués.",
          "Pratique recommandée : avant de dormir, passer en revue la journée — Shukr (الشُّكر), les mauvaises (الاستِغفَار), les occasions manquées (الحَسرَة).",
          "Le Matn d'Ibn Āshir : Muḥāsaba (المُحَاسَبَة) est la pratique centrale qui lie toutes les autres vertus.",
          "Elle n'est pas une source d'angoisse mais d'ajustement progressif et serein."
        ] },
        {"t": "h", "v": "العِبَادَات كَمَدرَسَة رُوحِيَّة — Les Actes d'Adoration comme École Spirituelle"},
        { t:'ul', v:[
          "<strong>Ṣalāt (الصَّلَاة) :</strong> Murāqaba (المُرَاقَبَة) en action — 5 fois par jour, rappel de la Présence divine.",
          "<strong>ṢṢiyām (الصِّيَام) :</strong> maîtrise des désirs — éṢabr (الصَّبر) Tawakkul (التَّوَكُّل).",
          "<strong>Zakāt (الزَّكَاة) :</strong> guérison du حُبّ المَال (attachement à l'argent) — éZuhd (الزُّهد).",
          "<strong>Ḥajj (الحَجّ) :</strong> soumission totale — école de الانقِيَاد وMaḥabba (المَحَبَّة).",
          "<strong>قِيَامُ اللَّيل :</strong> communion nocturne avec Allah — la plus haute éMurāqaba (المُرَاقَبَة)."
        ] },
        {"t": "h", "v": "الخَاتِمَة — La Synthèse du Curriculum Islamique"},
        {"t": "p", "v": "Le curriculum du Matn d'Ibn Āshir se referme ici sur une vérité centrale : Islam (pratique) + Imān (croyance) + Iḥsān (excellence) forment un tout indissociable. On ne peut être vraiment Muslim sans aspirer à l'Imān, ni vraiment muʾmin sans chercher l'Iḥsān. Les niveaux de ce site d'étude reflètent ce triptyque : Débutant (pratique fondamentale) → Intermédiaire (approfondissement) → Avancé (maîtrise et intériorisation)."},
        { t:'ar', v:"وَمَا خَلَقتُ الجِنَّ وَالإِنسَ إِلَّا لِيَعبُدُونِ", n:"« Je n'ai créé les djinns et les hommes que pour M'adorer. » — Coran 51:56 — verset qui inaugure et conclut tout le curriculum islamique" },
        {"t": "note", "v": "Message final de doctrine-malikite.Tazkiya (التَّزكِيَة) : « La spiritualité islamique n'est pas une addition facultative à la pratique — c'est son cœur et sa finalité. Sans l'aspiration à l'Iḥsān (الإِحسَان), la prière est une gymnastique, le jeûne une diète et la zakāt un impôt. Avec l'Iḥsān (الإِحسَان), chaque geste devient adoration et chaque moment devient présence. »"}
        ]
      }
      ],

      quiz: {
        id: 'quiz-avance-ihsan',
        title: 'Questionnaire — ' + "Iḥsān (الإِحسَان) وTazkiya (التَّزكِيَة)",
        status: 'available',
        score: null,
        questions: [
                {
          id: "q-ihs-01",
          text: "La définition de l'Iḥsān (الإِحسَان) donnée par le Prophète ﷺ dans le Hadīth de Gabriel est :",
          choices: [
          { id:"a", text:"Donner la zakāt avec générosité" },
          { id:"b", text:"Adorer Allah comme si tu Le voyais ; si tu ne Le vois pas, Lui te voit" },
          { id:"c", text:"Accomplir les 5 piliers parfaitement" },
          { id:"d", text:"Réciter le Coran chaque nuit" }
          ],
          correctId: "b",
          explanation: "Hadīth de Gabriel (Muslim) : le Prophète ﷺ définit l'Iḥsān (الإِحسَان) comme « أَن تَعبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِن لَم تَكُن تَرَاهُ فَإِنَّهُ يَرَاكَ ». C'est la conscience permanente de la Présence divine qui transforme chaque acte en adoration authentique."
        },
        {
          id: "q-ihs-02",
          text: "Les 3 piliers du Matn d'Ibn Āshir al-Mālikī sont :",
          choices: [
          { id:"a", text:"Coran, Sunna et école malikite" },
          { id:"b", text:"Islām (الإِسلَام) (pratique) + Īmān (الإِيمَان) (croyance) + Iḥsān (الإِحسَان) (excellence spirituelle)" },
          { id:"c", text:"Fiqh, ʿaqīda et langue arabe" },
          { id:"d", text:"Prière, jeûne et hajj" }
          ],
          correctId: "b",
          explanation: "Le Matn d'Ibn Āshir structure le curriculum islamique selon le Hadīth de Gabriel : (1) Islām (الإِسلَام) — les actes pratiques (5 piliers) ; (2) Īmān (الإِيمَان) — les croyances (6 piliers) ; (3) Iḥsān (الإِحسَان) — l'excellence spirituelle. Les niveaux de ce site suivent cette même progression."
        },
        {
          id: "q-ihs-03",
          text: "<strong>PIÈGE :</strong> Le زُهد (détachement du monde) signifie-t-il être pauvre et posséder peu ?",
          choices: [
          { id:"a", text:"Oui — un riche ne peut pas pratiquer le زُهد" },
          { id:"b", text:"Non — le زُهد c'est avoir le monde dans les mains sans l'avoir dans le cœur" },
          { id:"c", text:"Oui — il faut quitter son travail pour le pratiquer" },
          { id:"d", text:"Oui — c'est une condition pour atteindre le maqam supérieur" }
          ],
          correctId: "b",
          explanation: "Le زُهد n'est pas la pauvreté forcée. Ibn Qayyim : c'est reconnaître que l'Âhira vaut plus que la Dunyā et agir en conséquence — tout en travaillant et possédant légitimement. Le Prophète ﷺ était le plus pauvre des riches. Des Compagnons très riches (ʿUthmān, ʿAbd al-Raḥmān ibn ʿAwf) pratiquaient le زُهد tout en étant commerçants prospères."
        },
        {
          id: "q-ihs-04",
          text: "Tawakkul (التَّوَكُّل) (confiance en Allah) : quelle erreur fréquente faut-il éviter ?",
          choices: [
          { id:"a", text:"Tawakkul (التَّوَكُّل) avec la paresse ou le fatalisme — il faut agir pleinement avant de s'en remettre à Allah" },
          { id:"b", text:"Trop travailler" },
          { id:"c", text:"Ne pas prier assez" },
          { id:"d", text:"Tawakkul (التَّوَكُّل) avec le زُهد" }
          ],
          correctId: "a",
          explanation: "Hadīth : « Attache ton chameau, puis fais confiance à Allah. » Tawakkul (التَّوَكُّل) = prendre tous les moyens nécessaires + remettre le résultat à Allah. C'est l'antidote à deux erreurs : l'attachement aux résultats (absence de confiance) et la passivité fataliste (prétexte spirituel pour l'inaction)."
        },
        {
          id: "q-ihs-05",
          text: "La GhiḅGhiḅṭa (الغِبطَة) diffère du حَسَد en ce que :",
          choices: [
          { id:"a", text:"La GhiḅGhiḅṭa (الغِبطَة) est plus grave" },
          { id:"b", text:"La GhiḅGhiḅṭa (الغِبطَة) = désirer le même bien sans vouloir que l'autre le perde ; le حَسَد = désirer la perte du bien chez l'autre" },
          { id:"c", text:"Elles sont identiques" },
          { id:"d", text:"La GhiḅGhiḅṭa (الغِبطَة) concerne seulement les biens matériels" }
          ],
          correctId: "b",
          explanation: "Distinction essentielle : Ḥasad (الحَسَد) = jalousie destructrice (vouloir que le bienfait disparaisse de l'autre). GhiḅGhiḅṭa (الغِبطَة) = émulation positive (vouloir avoir le même bien sans vouloir sa disparition chez l'autre). La GhiḅGhiḅṭa (الغِبطَة) est permise et même recommandée pour la connaissance et les bonnes actions. Hadīth : « Pas d'envie sauf dans deux cas : l'homme savant qui enseigne, et l'homme généreux. »"
        },
        {
          id: "q-ihs-06",
          text: "Comment guéRiyāʾ (الرِّيَاء) (ostentation) selon al-Ghazālī et le Matn d'Ibn Āshir ?",
          choices: [
          { id:"a", text:"Arrêter tous les actes d'adoration publics" },
          { id:"b", text:"Multiplier les ʿibādāt secrètes, rechercher uniquement le regard d'Allah, rappeler la mort" },
          { id:"c", text:"Parler moins de sa pratique religieuse" },
          { id:"d", text:"Faire 100 prostrations supplémentaires chaque jour" }
          ],
          correctId: "b",
          explanation: "RemèRiyāʾ (الرِّيَاء) : (1) multiplier les ʿibādāt secrètes (prière de nuit, dons anonymes) pour désaccoutumer l'âme du regard des autres ; (2) rappeler constamment que seul le regard d'Allah compte ; (3) rappeler la mort et le Jugement. Hadīth Qudsī : « Je suis le plus riche des associés — celui qui M'associe quelqu'un, Je l'abandonne à son associé. »"
        },
        {
          id: "q-ihs-07",
          text: "Murāqaba (المُرَاقَبَة) est la traduction pratique de quelle définition ?",
          choices: [
          { id:"a", text:"Du زُهد" },
          { id:"b", text:"De la définition de l'Iḥsān (الإِحسَان) (adorer Allah comme si tu Le voyais)" },
          { id:"c", text:"Tawba (التَّوبَة)" },
          { id:"d", text:"Shukr (الشُّكر)" }
          ],
          correctId: "b",
          explanation: "Murāqaba (المُرَاقَبَة) (conscience d'être observé par Allah) est la mise en pratique quotidienne de la définition de l'Iḥsān (الإِحسَان) : « adorer Allah comme si tu Le voyais — si tu ne Le vois pas, Lui te voit. » C'est l'état intérieur permanent qui transforme chaque geste en adoration."
        },
        {
          id: "q-ihs-08",
          text: "Muḥāsaba (المُحَاسَبَة) est :",
          choices: [
          { id:"a", text:"Prier 5 fois par jour avec attention" },
          { id:"b", text:"« Évaluez vos âmes avant d'être évalués » — bilan quotidien avant le sommeil" },
          { id:"c", text:"Lire le Coran une heure par jour" },
          { id:"d", text:"Jeûner tous les lundis et jeudis" }
          ],
          correctId: "b",
          explanation: "Sayyidnā ʿUmar ﵁ : « حَاسِبُوا أَنفُسَكُم قَبلَ أَن تُحَاسَبُوا » — l'auto-évaluation quotidienne précède l'évaluation divine. Le Matn d'Ibn Āshir recommande ce bilan avant le sommeil : Shukr (الشُّكر) pour les bonnes actions, demander pardon (الاستِغفَار) pour les fautes, identifier les opportunités manquées (الحَسرَة)."
        },
        {
          id: "q-ihs-09",
          text: "Le ḤḤiqd (الحِقد) (rancœur) : combien de temps Islam tolère-t-il la brouille entre Muslims ?",
          choices: [
          { id:"a", text:"1 an" },
          { id:"b", text:"1 semaine" },
          { id:"c", text:"3 jours au maximum — la réconciliation est obligatoire passé ce délai" },
          { id:"d", text:"Indéfiniment si la faute est grave" }
          ],
          correctId: "c",
          explanation: "Hadīth du Prophète ﷺ : « Il n'est pas permis au Muslim de se brouiller avec son frère plus de 3 jours. » Doctrine-malikite.fr confirme que la مُصَالَحَة (réconciliation) est obligatoire. La réconciliation peut se faire par un salut, un sourire ou un geste de bienveillance — pas forcément une discussion longue."
        },
        {
          id: "q-ihs-10",
          text: "<strong>SYNTHÈSE :</strong> Comment la prièṢalāt (الصَّلَاة) s'inscrit-elle dans la progression vers l'Iḥsān (الإِحسَان) ?",
          choices: [
          { id:"a", text:"Elle n'a pas de dimension spirituelle — c'est une obligation mécanique" },
          { id:"b", text:"La prière est une éMurāqaba (المُرَاقَبَة) — 5 rappels par jour de la Présence divine, transformant l'adoration en conscience permanente" },
          { id:"c", text:"Elle n'est liée qu'à Islām (الإِسلَام)" },
          { id:"d", text:"Son seul rôle est de prévenir de l'immoralité" }
          ],
          correctId: "b",
          explanation: "Dans le cadre de l'Iḥsān (الإِحسَان), la prière est bien plus qu'une obligation : c'est une éMurāqaba (المُرَاقَبَة). 5 fois par jour, le Muslim interrompt sa vie pour se tenir devant Allah en pleine conscience. Khushūʿ (الخُشُوع) (présence du cœur) dans la prière est l'Iḥsān (الإِحسَان) en acte."
        },
        {
          id: "q-ihs-11",
          text: "Selon la tradition malikite, l'éthique sociale (الأَخلَاق) fait-elle partie de l'Iḥsān (الإِحسَان) ?",
          choices: [
          { id:"a", text:"Non — l'Iḥsān (الإِحسَان) est purement spirituel/intérieur" },
          { id:"b", text:"Oui — Tazkiya (التَّزكِيَة) authentique se manifeste obligatoirement dans les relations avec autrui" },
          { id:"c", text:"Seulement pour les savants et les saints" },
          { id:"d", text:"Non — l'éthique est une dimension séparéFiqh (الفِقه)" }
          ],
          correctId: "b",
          explanation: "Le Matn d'Ibn Āshir conclut précisément par l'éthique sociale car la spiritualité islamique est sociale par nature. Un « spirituel » qui maltraite sa famille ou ses voisins n'a pas accompli l'Iḥsān (الإِحسَان). Doctrine-malikite.fr : « La spiritualité qui ne se manifeste pas dans la douceur, la générosité et l'honnêteté avec autrui est une illusion. »"
        },
        {
          id: "q-ihs-12",
          text: "<strong>AVANCÉ :</strong> Les 4 pratiques d'Tazkiya (التَّزكِيَة) sont :",
          choices: [
          { id:"a", text:"Prière, jeûne, zakat, hajj" },
          { id:"b", text:"Murāqaba (المُرَاقَبَة) (surveiller ses intentions) + Muḥāsaba (المُحَاسَبَة) (bilan) + Mujāhada (المُجَاهَدَة) (effort sur l'âme) + المُعَاقَبَة (se pénaliser pour ses fautes)" },
          { id:"c", text:"Lire, mémoriser, enseigner, pratiquer" },
          { id:"d", text:"Repentir, prière de nuit, jeûne et sadaqa" }
          ],
          correctId: "b",
          explanation: "La méTazkiya (التَّزكِيَة) d'al-Ghazālī (adoptée par Ibn Āshir) : (1) Murāqaba (المُرَاقَبَة) — surveiller ses intentions avant l'acte ; (2) Muḥāsaba (المُحَاسَبَة) — évaluer ses actions après l'acte ; (3) Mujāhada (المُجَاهَدَة) — lutter contre les tendances négatives de l'âme ; (4) المُعَاقَبَة — se pénaliser pour les fautes par des actes d'adoration supplémentaires."
        },
        {
          id: "q-ihs-13",
          text: "Le قِيَامُ اللَّيل (prière de nuit) : pourquoi est-il la plus haute éMurāqaba (المُرَاقَبَة) ?",
          choices: [
          { id:"a", text:"Parce que c'est obligatoire" },
          { id:"b", text:"Car on s'élève seul dans la nuit, sans regard humain possible — c'est la communion la plus pure et la plus sincère avec Allah" },
          { id:"c", text:"Parce qu'il dure plus longtemps" },
          { id:"d", text:"Car il remplace les prières manquées" }
          ],
          correctId: "b",
          explanation: "Le قِيَامُ اللَّيل est la plus pure éMurāqaba (المُرَاقَبَة) car il est accompli dans la solitude nocturne, hors de tout regard humain — Riyāʾ (الرِّيَاء) (ostentation) possible. Hadīth : « Notre Seigneur descend au dernier tiers de la nuit... » — moment de proximité maximale avec Allah. Coran 73:1-6 : « La prière nocturne est plus impressionnante et plus propice à la sincérité du discours. »"
        },
        {
          id: "q-ihs-14",
          text: "<strong>PIÈGE :</strong> Peut-on pratiquer l'Iḥsān (الإِحسَان) sans maîtriser le Fiqh ?",
          choices: [
          { id:"a", text:"Oui — la spiritualité se passe du fiqh" },
          { id:"b", text:"Non — l'Iḥsān (الإِحسَان) est le sommet d'un édifice dont le فِقه (les actes corrects) est la fondation indispensable" },
          { id:"c", text:"Oui si on a la bonne intention" },
          { id:"d", text:"Non seulement les savants peuvent pratiquer l'إِحسَان" }
          ],
          correctId: "b",
          explanation: "Le triptyque du Matn d'Ibn Āshir est hiérarchique : l'Islām (الإِسلَام) (pratique correcte du فِقه) précède l'Īmān (الإِيمَان) (croyance correcte) qui précède l'Iḥsān (الإِحسَان) (excellence spirituelle). Sans fondations فِقه solides, la « spiritualité » flotte dans le vide. Une adoration incorrecte ne peut pas être excellente — elle doit d'abord être valide."
        },
        {
          id: "q-ihs-15",
          text: "<strong>QUESTION FINALE :</strong> Quelle est la finalité ultime de tout le curriculum islamique selon le Coran 51:56 ?",
          choices: [
          { id:"a", text:"La paix dans le monde" },
          { id:"b", text:"La construction d'une civilisation islamique" },
          { id:"c", text:"L'adoration d'Allah — وَمَا خَلَقتُ الجِنَّ وَالإِنسَ إِلَّا لِيَعبُدُون" },
          { id:"d", text:"L'éducation des enfants" }
          ],
          correctId: "c",
          explanation: "Coran 51:56 : « وَمَا خَلَقتُ الجِنَّ وَالإِنسَ إِلَّا لِيَعبُدُونِ » — « Je n'ai créé les djinns et les hommes que pour M'adorer. » C'est le verset qui couronne et justifie tout le curriculum islamique : Fiqh (الفِقه) (pratiquer correctement), Īmān (الإِيمَان) (croire sincèrement), Iḥsān (الإِحسَان) (adorer avec excellence) — tout converge vers l'adoration consciente et sincère d'Allah."
        }
        ]
      }
    }
  ]  /* fin subjects */
}  /* fin AVANCE */