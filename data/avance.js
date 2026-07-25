/* Données — AVANCE — Nettoyé */
const AVANCE = {id:"avance",label:"Avancé",arabicLabel:"المستوى الثالث",levelColor:"#2A5080",levelBadge:{"id": "badge-avance-or", "title": "Érudit Avancé", "arabicTitle": "الفَقِيهُ المُتَقَدِّم", "icon": "star8", "color": "gold", "unlockCondition": "Obtenir ≥ 85 % de moyenne sur l'ensemble des questionnaires du niveau Avancé"},source:"Risāla Ibn Abī Zayd · Mukhtasar Khalīl · Matn Ibn Āshir · doctrine-malikite.fr",description:"Contrats avancés, droit successoral, droit judiciaire et pénal islamique, et spiritualité selon le Matn d'Ibn Āshir.",subjects:[
    {id:"ijara",title:"Contrats de Travail et Sociétés",arabicTitle:"al-ijāra (الإِجَارَة) وal-sharika (الشَّرِكَة) وal-muḍāraba (المُضَارَبَة)",icon:"handshake",description:"Location, sociétés et commandite islamique : les contrats qui structurent la vie économique selon les règles du Mukhtasar Khalīl.",source:"Risāla Ibn Abī Zayd ch.37-40 · Mukhtasar Khalīl pp.165-212 · doctrine-malikite.fr Finance",badge:{id:"badge-avance-ijara",title:"Expert des Contrats",arabicTitle:"فَقِيهُ العُقُود",icon:"key-c",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Ijāra Sharika al-muḍāraba"},lessons:[        {
          id:"ija-01",
          title:"Al-Ijāra — Le Contrat de Location et de Prestation de Service",
          status:'available',
          content:[
            {"t": "lead", "v": "L'Ijāra est le contrat par lequel on loue un bien ou on rémunère un service. C'est l'un des contrats les plus utilisés dans la vie quotidienne. Le Mukhtasar Khalīl (pp. 165-185) et la Risāla d'Ibn Abī Zayd (ch. 37) en détaillent les règles avec précision."},
            {"t": "h", "v": "Définition et types"},
            {"t": "p", "v": "L'Ijāra est le transfert temporaire de l'usufruit d'un bien ou d'un service contre rémunération. Elle se divise en deux types : (1) — location d'un bien (maison, voiture, terrain) ; (2) — prestation de services (travail, expertise, transport)."},
            {"t": "h", "v": "Ijāra — Piliers du contrat"},
            { t:'ul', v:[
              "<strong>1. :</strong> bailleur et locataire — tous deux capables juridiquement.",
              "<strong>2. :</strong> l'usage doit être licite, connu et réalisable.",
              "<strong>3. :</strong> le loyer/salaire doit être connu, licite et précisé.",
              "<strong>4. :</strong> accord explicite entre les parties.",
              "Mukhtasar Khalīl : l'Ijāra est valide même si le paiement est différé — Salam."
            ] },
            {"t": "h", "v": "— Conditions de l'usage loué"},
            { t:'ul', v:[
              "L'usage doit être licite — pas de location d'une maison pour la vente d'alcool.",
              "L'usage doit être connu et délimité (durée ou quantité de travail précisée).",
              "L'usage doit être réalisable à la date prévue.",
              "L'objet loué doit être utilisable sans être consommé (les aliments ne se louent pas).",
              "Mukhtasar Khalīl : la location d'une boutique est valide même si on ignore l'usage précis qui en sera fait — au bailleur de stipuler des restrictions s'il en veut."
            ] },
            {"t": "h", "v": "Obligations du bailleur et du locataire"},
            { t:'ul', v:[
              "<strong>Bailleur :</strong> livrer le bien en état d'utilisation, assurer les réparations structurelles, payer les taxes liées à la propriété.",
              "<strong>Locataire :</strong> payer le loyer, utiliser le bien conformément à l'accord, assurer l'entretien courant.",
              "Mukhtasar Khalīl : si la maison louée s'effondre partiellement → le contrat est annulé pour la partie effondrée, le locataire paye en proportion.",
              "Le locataire ne peut sous-louer sans accord du bailleur selon la position malikite dominante."
            ] },
            {"t": "h", "v": "— Prestation de services"},
            { t:'ul', v:[
              "<strong>Ajīr Khāṣ :</strong> employé à plein temps (exclusif) — responsable seulement en cas de faute ou négligence.",
              "<strong>Ajīr Mushtarak :</strong> artisan ou prestataire indépendant (médecin, tailleur, transporteur) — responsable de la détérioration même sans faute selon certains savants malikites.",
              "Mukhtasar Khalīl : « » — l'artisan indépendant garantit son travail.",
              "Cette distinction est fondamentale pour déterminer la responsabilité en cas de dommage."
            ] },
            { t:'ar', v:"al-ijāra (الإِجَارَة)ُ عَقدٌ لَازِمٌ مِن الجَانِبَيْن", n:"« L'al-ijāra (الإِجَارَة) est un contrat engageant pour les deux parties. » — Mukhtasar Khalīl" },
            {"t": "note", "v": "Application contemporaine : le contrat de travail (CDI, CDD), le bail d'habitation et commercial islamiques suivent ces mêmes principes. La (miséricorde) dans les relations employeur-employé est un principe transversal recommandé par doctrine-malikite.fr."}
          ]
        },
        {
          id:"ija-02",
          title:"Al-Sharika — Les Sociétés et Partenariats Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "La (société, partenariat) est le contrat par lequel deux personnes ou plus mettent en commun capitaux et/ou travail pour partager les bénéfices et les pertes. Le Mukhtasar Khalīl (pp. 185-200) en distingue plusieurs types avec des règles précises."},
            {"t": "h", "v": "Définition et fondement"},
            { t:'ar', v:"al-sharika (الشَّرِكَة)ُ إِذنٌ فِي التَّصَرُّفِ لَهَا مَعَ أَمْوَالِهمَا", n:"« La شَرِكَة est l'autorisation mutuelle de disposer des capitaux communs. » — Mukhtasar Khalīl, début du chapitre" },
            {"t": "h", "v": "Types de en rite malikite"},
            { t:'ul', v:[
              "<strong>1. Sharika al-ʿInān :</strong> chaque associé apporte un capital et partage les bénéfices en proportion. La plus courante.",
              "<strong>2. Sharika al-Mufāwaḍa :</strong> associés totalement égaux en capital, travail, profits et dettes — très stricte.",
              "<strong>3. Sharika al-Abdān :</strong> association de travail sans capital (deux artisans partagent leurs chantiers) — permise en rite malikite, contrairement aux chāfiʿites.",
              "<strong>4. Sharika al-Wujūh :</strong> association de crédit/réputation (acheter à crédit et partager les bénéfices) — divergence interne à l'école malikite."
            ] },
            {"t": "h", "v": "Conditions de validité"},
            { t:'ul', v:[
              "Les deux associés doivent être capables juridiquement.",
              "Le capital doit être connu et identifié.",
              "Sharika al-ʿInān : les capitaux en or + or OU argent + argent → valides. Or + argent → valides APRÈS conversion en une seule monnaie.",
              "Mukhtasar Khalīl : or + argent sans conversion préalable → invalide car elle génère du.",
              "Les bénéfices se partagent selon l'accord stipulé. Les pertes se répartissent toujours en proportion du capital apporté — on ne peut pas stipuler le contraire."
            ] },
            {"t": "h", "v": "Pouvoirs mutuels des associés"},
            { t:'ul', v:[
              "Chaque associé a implicitement le pouvoir de disposer du capital commun dans le cadre de la société.",
              "Un associé peut acheter à crédit, vendre à terme, embaucher — tous actes dans l'objet social.",
              "Un associé ne peut pas : donner en aumône le capital commun, prêter à titre gratuit, faire une — sauf accord explicite de l'autre.",
              "Mukhtasar Khalīl : si un associé commet un excès → il en répond personnellement."
            ] },
            {"t": "h", "v": "Dissolution et liquidation"},
            { t:'ul', v:[
              "La se dissout par : accord mutuel, décès d'un associé, incapacité, faillite, terme prévu.",
              "À la dissolution : on évalue le capital + bénéfices, on déduit les dettes, on partage selon les accords.",
              "Si l'un des associés a commis une faute → il indemnise avant le partage.",
              "Application contemporaine : la SARL, la SAS peuvent être structurées selon ces principes pour respecter la islamique."
            ] },
            {"t": "note", "v": "Spécificité malikite importante : Sharika al-Abdān (société de travail sans capital) est permise — deux avocats, deux médecins ou deux artisans peuvent s'associer et partager leurs honoraires. L'école chāfiʿite l'interdit car il n'y a pas de capital mesurable."}
          ]
        },
        {
          id:"ija-03",
          title:"Al-Muḍāraba — La Commandite et Finance Participative",
          status:'available',
          content:[
            {"t": "lead", "v": "La al-muḍāraba Rabb al-Māl et un géMuḍārib qui investit le capital avec son travail. Les bénéfices sont partagés selon l'accord, les pertes incombent uniquement au capital. C'est le fondement historique des échanges commerciaux à longue distance dans la civilisation islamique."},
            {"t": "h", "v": "Définition et nature juridique"},
            {"t": "p", "v": "La al-muḍāraba combine deux réalités juridiques : Rabb al-Māl, c'est une mise à disposition de capital ; pour le, c'est une prestation de travail rémunérée par une part du bénéfice. C'est le système qui a permis les grandes routes commerciales islamiques."},
            {"t": "h", "v": "Conditions essentielles"},
            { t:'ul', v:[
              "Le capital doit être numérique (argent, or) — pas en nature selon la majorité des malikites.",
              "La part de bénéfice du doit être une fraction connue (ex : 1/3, 1/2, 2/3) — pas une somme fixe.",
              "Rabb al-Māl sauf faute ou négligence du.",
              "Le ne reçoit rien si pas de bénéfice — son travail est son «risque».",
              "Mukhtasar Khalīl : le peut stipuler une avance sur bénéfices pour ses frais de voyage."
            ] },
            {"t": "h", "v": "Pouvoirs et limites du"},
            { t:'ul', v:[
              "Liberté d'action dans le commerce général sauf restriction stipulée.",
              "Peut : acheter, vendre, louer, embaucher dans le cadre de l'objet commercial.",
              "Ne peut PAS sans accord : faire des dons, prêter, s'associer avec un tiers avec le capital de la al-muḍāraba.",
              "Mukhtasar Khalīl : Muḍārib voyageant à l'étranger avec le capital → ses frais de voyage sont à sa charge (pas sur le capital) sauf accord contraire.",
              "En cas de faute ou négligence : le indemnise les pertes sur son patrimoine propre."
            ] },
            {"t": "h", "v": "Fin de la al-muḍāraba"},
            { t:'ul', v:[
              "Elle prend fin par : accord mutuel, terme prévu, décès, Rabb al-Māl.",
              "À la fin : on évalue le capital + bénéfices, on soustrait les éventuelles pertes, puis on distribue.",
              "Si l'entreprise est en cours → on peut forcer la liquidation.",
              "Le bénéfice n'est acquis définitivement qu'après liquidation complèMuḥāsaba."
            ] },
            {"t": "h", "v": "Application contemporaine"},
            {"t": "p", "v": "La al-muḍāraba est le fondement des fonds d'investissement islamiques) et de nombreux produits bancaires islamiques. Le déRabb al-Māl confie son argent à la banque qui l'investit et partage les bénéfices selon un ratio convenu. Doctrine-malikite.fr confirme cette analogie dans sa section Finance Islamique."},
            { t:'ar', v:"القِرَاضُ جَائِزٌ بِكِتَابِ اللَّهِ وَسُنَّةِ نَبِيِّهِ وَإِجمَاعِ المُسلِمِينَ", n:"« La al-muḍāraba (المُضَارَبَة) (قِرَاض) est licite par le Coran, la Sunna et le consensus des Muslims. » — Ibn Rushd, Bidāyat al-Mujtahid" },
            {"t": "note", "v": "Terme malikite : Qirāḍ pour désigner la al-muḍāraba — c'est un terme propre à l'école malikite (et hanafite). L'école chāfiʿite utilise al-muḍāraba. Les deux termes désignent le même contrat."}
          ]
        },
        {
          id:"ija-04",
          title:"Wakāla et Wadīʿa — Mandat et Dépôt en Droit Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "Deux contrats essentiels de la vie quotidienne : la (mandat, délégation de pouvoir) et la (dépôt, garde). Le Mukhtasar Khalīl les traite dans la suite du chapitre des transactions."},
            {"t": "h", "v": "Wakāla — Le Mandat"},
            {"t": "p", "v": "La Muwakkil délègue à Wakīl le pouvoir d'agir en son nom pour un acte juridique déterminé."},
            { t:'ul', v:[
              "<strong>Muwakkil :</strong> doit avoir la capacité juridique pour accomplir l'acte lui-même.",
              "<strong>Condition de l'acte délégable :</strong> tout acte licite que le mandant peut accomplir peut être délégué (vente, mariage, poursuite judiciaire, paiement…).",
              "<strong>Wakīl :</strong> capacité de discernement — peut être un enfant mumayyiz pour les actes bénéfiques.",
              "Le agit dans les limites du mandat — tout excès engage sa responsabilité personnelle.",
              "Mukhtasar Khalīl : « Wakīl » — le mandataire ne peut reconnaître une dette pour son mandant sauf en présence d'une preuve."
            ] },
            {"t": "h", "v": "Responsabilité du"},
            { t:'ul', v:[
              "Le est un (dépositaire de confiance) — pas responsable de la perte ou destruction sauf faute ou négligence.",
              "S'il dépasse les limites du mandat → responsable du préjudice causé.",
              "S'il agit dans les limites mais commet une erreur → non responsable (c'est le risque du mandant).",
              "Révocation du mandat : le mandant peut le révoquer à tout moment sauf si le mandat est lié à un droit d'un tiers."
            ] },
            {"t": "h", "v": "Wadīʿa — Le Dépôt"},
            {"t": "p", "v": "La est le contrat par lequel une personne confie un bien à une autre pour le garder sans rémunération."},
            { t:'ul', v:[
              "La est un contrat de bienfaisance — le gardien n'est pas rémunéré.",
              "<strong>Responsabilité du gardien :</strong> il est — pas responsable de la perte ou détérioration sauf faute, négligence ou utilisation sans permission.",
              "S'il utilise le dépôt sans permission → devient responsable même de la destruction accidentelle.",
              "S'il mélange le dépôt à ses propres biens → responsable de la perte.",
              "Mukhtasar Khalīl : si le gardien est en voyage et ne peut pas remettre le dépôt → il le laisse en garde auprès d'une personne de confiance.",
              "Preuve de la restitution : la charge de la preuve de la restitution incombe au gardien (il doit prouver qu'il a rendu le dépôt)."
            ] },
            {"t": "h", "v": "Juʿl — La Prime de Résultat"},
            {"t": "p", "v": "Le est le contrat par lequel on promet une récompense pour la réalisation d'un résultat déterminé (retrouver un objet perdu, réaliser un travail spécifique). Contrairement à l'Ijāra, la rémunération n'est due qu'au résultat."},
            { t:'ul', v:[
              "Exemple classique : « Qui retrouve mon chameau perdu reçoit telle somme. »",
              "La rémunération n'est due qu'en cas de succès.",
              "Le peut être offert à une personne déterminée ou au public.",
              "Permis en rite malikite — doctrine-malikite.fr le confirme dans les contrats islamiques autorisés."
            ] },
            {"t": "note", "v": "Application contemporaine : les mandats bancaires, les procurations légales, les comptes séquestres (escrow) Wakāla Wadīʿa. Les coffres-forts bancaires sont des ; les fonds de placement sont des ou al-muḍāraba selon leur structure."}
          ]
        },
        {
          id:"ija-05",
          title:"Muzāraʿa et Musāqāt — Contrats Agricoles et Ruraux",
          status:'available',
          content:[
            {"t": "lead", "v": "Deux contrats agricoles classiques du rite malikite, permis là où d'autres écoles les interdisent, et une synthèse sur la finance participative islamique contemporaine."},
            {"t": "h", "v": "Muzāraʿa — Le Métayage (Agriculture à Partage de Récolte)"},
            {"t": "p", "v": "Muzāraʿa est le contrat entre le propriétaire d'une terre et un agriculteur : le propriétaire fournit la terre, l'agriculteur fournit le travail, et la récolte est partagée selon un ratio convenu."},
            { t:'ul', v:[
              "Permise en rite malikite — l'Imām Mālik la valide explicitement dans la Mudawwana.",
              "Interdite selon certains savants chāfiʿites et hanafites.",
              "Conditions : ratio de partage connu, durée précisée, terres exploitables.",
              "Le propriétaire peut apporter : terre + semences. L'agriculteur apporte : travail + équipement.",
              "En cas de mauvaise récolte naturelle : la perte est partagée selon les mêmes ratios."
            ] },
            {"t": "h", "v": "Musāqāt — Le Contrat d'Arboriculture"},
            {"t": "p", "v": "Musāqāt est le contrat entre le propriétaire d'arbres fruitiers (oliviers, palmiers, vignes…) et un soigneur : le propriétaire fournit les arbres, le soigneur les entretient et irrigue, les fruits sont partagés."},
            { t:'ul', v:[
              "Validée explicitement par le Prophète ﷺ pour les palmiers de Khaybar.",
              "Permise en rite malikite, hanbalite et chāfiʿite (pour les palmiers).",
              "Conditions : arbres existants, ratio de partage connu, durée précisée.",
              "Mukhtasar Khalīl : Musāqāt peut être étendue à tous les arbres fruitiers selon l'Imām Mālik.",
              "Le soigneur supporte les travaux courants (arrosage, taille, cueillette), le propriétaire supporte l'infrastructure."
            ] },
            {"t": "h", "v": "Islām — Synthèse de la Finance Participative"},
            {"t": "p", "v": "Ces contrats classiques constituent la base de la finance islamique contemporaine. Doctrine-malikite.fr (section Finance Islamique) distingue plusieurs instruments :"},
            { t:'ul', v:[
              "<strong>Murābaḥa :</strong> vente avec marge déclarée — déjà vu au niveau intermédiaire.",
              "<strong> :</strong> association en capital avec partage des risques.",
              "<strong>Ijāra :</strong> crédit-bail → location qui se transforme en propriété.",
              "<strong>Ṣukūk (sukuks) :</strong> obligations islamiques adossées à des actifs réels.",
              "<strong>al-muḍāraba bancaire :</strong> compte d'investissement où la banque est."
            ] },
            { t:'ar', v:"مَن أَكلَ مِن عَمَلِ يَدِهِ فَقَد أَكَلَ خَيراً", n:"« Celui qui mange du fruit de son travail, mange en vérité. » — Hadīth rapporté par al-Bukhārī" },
            {"t": "note", "v": "Doctrine-malikite.Muzāraʿa : « L'Muzāraʿa avec partage de la récolte, se basant sur la pratique du Prophète ﷺ à Khaybar ». Ce contrat agricole reste très pertinent pour l'agriculture contemporaine et les projets coopératifs islamiques."}
          ]
        }],quiz:{id:"quiz-avance-ijara",title:"Questionnaire — Ijāra Sharika al-muḍāraba",status:"available",score:null,questions:[        {
          id:"q-ija-01",
          text:"L'Ijāra couvre deux réalités distinctes. Lesquelles ?",
          choices:[
          {id:"a",text:"Vente et don"},
          {id:"b",text:"Location d'un bien ET prestation de services"},
          {id:"c",text:"Prêt et dépôt"},
          {id:"d",text:"Commerce et agriculture"}
          ],
          correctId:"b",
          explanation:"L'Ijāra désigne à la fois la location d'un bien (maison, voiture) et la prestation de services (travail, expertise, transport). Dans les deux cas, c'est un transfert temporaire de l'usufruit contre rémunération."
        },
        {
          id:"q-ija-02",
          text:"Peut-on louer un local à quelqu'un pour y vendre de l'alcool ?",
          choices:[
          {id:"a",text:"Oui — le bailleur n'est pas responsable de l'usage"},
          {id:"b",text:"Non — le loyer d'un usage illicite est invalide"},
          {id:"c",text:"Oui avec une clause dans le contrat"},
          {id:"d",text:"Makrūh seulement"}
          ],
          correctId:"b",
          explanation:"La (usage loué) doit être licite. Si le contrat est conclu en sachant que l'usage sera illicite → l'Ijāra est invalide. Cela s'applique à toute location dont l'usage principal déclaré est."
        },
        {
          id:"q-ija-03",
          text:"Si une partie de la maison louée s'effondre en cours de bail, que se passe-t-il ?",
          choices:[
          {id:"a",text:"Le contrat est entièrement annulé"},
          {id:"b",text:"Le locataire continue à payer le loyer intégral"},
          {id:"c",text:"Le contrat est annulé pour la partie effondrée ; le loyer est réduit proportionnellement"},
          {id:"d",text:"Le locataire peut rompre le contrat sans payer"}
          ],
          correctId:"c",
          explanation:"Mukhtasar Khalīl : si la maison louée perd une partie → le contrat subsiste pour la partie restante et le loyer est réduit en proportion. Ce n'est pas une résiliation totale — c'est une adaptation proportionnelle au bien effectivement disponible."
        },
        {
          id:"q-ija-04",
          text:"<strong>CRUCIAL :</strong> Un tailleur abîme un vêtement qu'il devait coudre, sans aucune faute de sa part. Est-il responsable ?",
          choices:[
          {id:"a",text:"Non — seulement si faute prouvée"},
          {id:"b",text:"Oui — l'artisan indépendant garantit son travail selon le rite malikite"},
          {id:"c",text:"Cela dépend du prix du vêtement"},
          {id:"d",text:"Non — la destruction accidentelle est toujours exonérante"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : « » — l'artisan indépendant (tailleur, cordelier, transporteur...) est responsable des dommages même accidentels. C'est une position malikite distincte : l' (employé dédié) n'est responsable qu'en cas de faute."
        },
        {
          id:"q-ija-05",
          text:"Le locataire peut-il sous-louer le bien loué sans accord du bailleur ?",
          choices:[
          {id:"a",text:"Oui — il dispose librement du bien qu'il a loué"},
          {id:"b",text:"Non — selon la position malikite dominante, il ne peut sous-louer sans accord"},
          {id:"c",text:"Oui si le loyer est identique"},
          {id:"d",text:"Oui pour les locations commerciales seulement"}
          ],
          correctId:"b",
          explanation:"Selon la position dominante malikite, le locataire ne peut sous-louer sans l'accord du bailleur. Le bien est loué pour un usage personnel ou pour un usage stipulé — le transférer à un tiers sans accord change la nature du contrat."
        },
        {
          id:"q-ija-06",
          text:"Sharika al-Abdān (société de travail sans capital) est-elle permise ?",
          choices:[
          {id:"a",text:"Non — une société requiert toujours du capital"},
          {id:"b",text:"Oui — permise en rite malikite ; deux artisans peuvent partager leurs honoraires"},
          {id:"c",text:"Makrūh uniquement"},
          {id:"d",text:"Permise seulement pour les métiers manuels"}
          ],
          correctId:"b",
          explanation:"Sharika al-Abdān est permise en rite malikite (et hanbalite) — deux médecins, deux avocats ou deux artisans peuvent s'associer et partager leurs revenus sans apport de capital. Elle est interdite selon les chāfiʿites qui exigent un capital mesurable."
        },
        {
          id:"q-ija-07",
          text:"Sharika al-ʿInān, un associé apporte 70% du capital. Comment se partagent les PERTES ?",
          choices:[
          {id:"a",text:"Moitié-moitié entre les associés"},
          {id:"b",text:"Selon l'accord sur les bénéfices"},
          {id:"c",text:"Toujours en proportion du capital — 70% pour le premier"},
          {id:"d",text:"L'associé qui a moins travaillé supporte plus de pertes"}
          ],
          correctId:"c",
          explanation:"Règle immuable : dans toute, les pertes se répartissent TOUJOURS en proportion du capital apporté. On ne peut pas stipuler autrement. En revanche, les bénéfices peuvent être répartis selon un accord différent de la proportion du capital."
        },
        {
          id:"q-ija-08",
          text:"Dans la, un associé peut-il faire une donation du capital commun à un pauvre ?",
          choices:[
          {id:"a",text:"Oui — les actes de charité sont toujours permis"},
          {id:"b",text:"Non — les actes gratuits nécessitent l'accord de tous les associés"},
          {id:"c",text:"Oui jusqu'à 1/3 du capital"},
          {id:"d",text:"Oui si c'est un montant symbolique"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : chaque associé peut accomplir les actes commerciaux normaux (acheter, vendre, louer...). Mais les actes gratuits avec le capital commun nécessitent l'accord de l'autre associé. Donner sans accord engage la responsabilité personnelle de celui qui donne."
        },
        {
          id:"q-ija-09",
          text:"Quelle est la différence fondamentale entre la al-muḍāraba et la ?",
          choices:[
          {id:"a",text:"Aucune différence"},
          {id:"b",text:"Dans la al-muḍāraba : un apporte le capital, l'autre le travail. Dans la : les deux apportent du capital et/ou du travail"},
          {id:"c",text:"La al-muḍāraba est"},
          {id:"d",text:"La est réservée aux grands projets"}
          ],
          correctId:"b",
          explanation:"La al-muḍāraba = 1 Rabb al-Māl + 1 personne apporte le travail. La = les partenaires apportent tous un capital et/ou du travail. La différence clé : dans la al-muḍāraba les pertes tombent UNIQUEMENT sur le capital."
        },
        {
          id:"q-ija-10",
          text:"Dans une al-muḍāraba, si l'entreprise subit une perte sans faute du, qui la supporte ?",
          choices:[
          {id:"a",text:"Le supporte la perte en proportion de son travail"},
          {id:"b",text:"La perte est partagée moitié-moitié"},
          {id:"c",text:"La perte incombe entièRabb al-Māl (bailleur de fonds)"},
          {id:"d",text:"La perte est partagée selon le ratio de bénéfices"}
          ],
          correctId:"c",
          explanation:"Principe fondamental de la al-muḍāraba : Rabb al-Māl (celui qui a apporté le capital). Le perd son travail (pas rémunéré) mais pas son patrimoine. Exception : si la perte est due à une faute ou négligence du → il indemnise."
        },
        {
          id:"q-ija-11",
          text:"Le peut-il s'associer avec un tiers en utilisant le capital de la al-muḍāraba ?",
          choices:[
          {id:"a",text:"Oui — il dispose librement du capital"},
          {id:"b",text:"Non — Rabb al-Māl, il ne peut pas sous-déléguer le capital"},
          {id:"c",text:"Oui jusqu'à la moitié du capital"},
          {id:"d",text:"Oui si c'est dans le même secteur d'activité"}
          ],
          correctId:"b",
          explanation:"Le est mandaté Rabb al-Māl. Il ne peut pas déléguer ce mandat à un tiers Rabb al-Māl. Agir autrement engage sa responsabilité personnelle pour tout le capital."
        },
        {
          id:"q-ija-12",
          text:"Le terme malikite pour la al-muḍāraba est :",
          choices:[
          {id:"a",text:"Sharika"},
          {id:"b",text:"Juʿl"},
          {id:"c",text:"Qirāḍ"},
          {id:"d",text:"Wakāla"}
          ],
          correctId:"c",
          explanation:"Qirāḍ pour désigner ce que les chāfiʿites et hanbalites appellent al-muḍāraba. Les deux termes désignent le même contrat. Le Mukhtasar Khalīl utilise systéQirāḍ."
        },
        {
          id:"q-ija-13",
          text:"Le (mandataire) est-il responsable de la perte accidentelle du bien qu'il gère pour son mandant ?",
          choices:[
          {id:"a",text:"Oui — le mandataire garantit toujours le résultat"},
          {id:"b",text:"Non — le est ; il n'est responsable qu'en cas de faute ou négligence"},
          {id:"c",text:"Seulement si la valeur dépasse un certain seuil"},
          {id:"d",text:"Oui si le mandat est rémunéré"}
          ],
          correctId:"b",
          explanation:"Le est un (dépositaire de confiance) — il n'est responsable des pertes QUE s'il a commis une faute, une négligence ou utilisé le bien sans permission. La perte accidentelle (vol, catastrophe naturelle) sans faute → pas de responsabilité."
        },
        {
          id:"q-ija-14",
          text:"La (dépôt) : qui supporte la preuve de la restitution ?",
          choices:[
          {id:"a",text:"Le déposant doit prouver qu'il n'a pas récupéré son bien"},
          {id:"b",text:"Le gardien doit prouver qu'il a bien rendu le dépôt"},
          {id:"c",text:"La charge de preuve dépend de la valeur du bien"},
          {id:"d",text:"Aucune preuve n'est requise si c'est de bonne foi"}
          ],
          correctId:"b",
          explanation:"Principe malikite : c'est le GARDIEN qui doit prouver la restitution. S'il dit « j'ai rendu le dépôt » et que le déposant nie → le gardien doit en apporter la preuve (témoins, reçu signé). C'est différent d'autres contrats où la charge de preuve incombe au réclamant."
        },
        {
          id:"q-ija-15",
          text:"Muzāraʿa (métayage — partage de récolte) est-elle permise ?",
          choices:[
          {id:"a",text:"Non — c'est du pur"},
          {id:"b",text:"Oui — l'Imām Mālik la permet en se basant sur la pratique du Prophète ﷺ à Khaybar"},
          {id:"c",text:"Makrūh seulement"},
          {id:"d",text:"Permise uniquement pour les palmiers"}
          ],
          correctId:"b",
          explanation:"L'Muzāraʿa — le Prophète ﷺ a conclu un contrat de partage de récolte avec les habitants de Khaybar (palmiers dattiers). La Mudawwana l'étend à tous les types de cultures. Cette position est plus libérale que celle de certains chāfiʿites."
        },
        {
          id:"q-ija-16",
          text:"Qu'est-ce que le et en quoi diffère-t-il de l'Ijāra ?",
          choices:[
          {id:"a",text:"Ils sont identiques"},
          {id:"b",text:"Dans le : rémunération due SEULEMENT en cas de succès. Dans l'Ijāra : rémunération due pour l'effort (pas seulement le résultat)"},
          {id:"c",text:"Le est car incertain"},
          {id:"d",text:"Le est une forme de charité"}
          ],
          correctId:"b",
          explanation:"Le (prime de résultat) → rémunération conditionnée au résultat. L'Ijāra → rémunération pour la prestation elle-même (qu'elle aboutisse ou non). Exemple : « Je paie 500€ à qui retrouve mon chat perdu » =. « Je paie 500€ au détective pour 10 jours de recherche » = Ijāra."
        },
        {
          id:"q-ija-17",
          text:"Un médecin opère un patient qui décède des suites d'une erreur médicale non intentionnelle. Selon le rite malikite :",
          choices:[
          {id:"a",text:"Le médecin n'est jamais responsable car il a agi de bonne foi"},
          {id:"b",text:"Le médecin (artisan indépendant) peut engager sa responsabilité si une négligence est établie"},
          {id:"c",text:"Le médecin est toujours responsable comme"},
          {id:"d",text:"Le patient supporte les risques médicaux intégralement"}
          ],
          correctId:"b",
          explanation:"Le médecin est un (prestataire indépendant). Selon le rite malikite, il engage sa responsabilité en cas de faute ou négligence prouvée. S'il a agi selon les règles de l'art et que le décès survient malgré tout → divergence parmi les fuqahā. La position contemporaine : expertise médicale pour établir la faute."
        },
        {
          id:"q-ija-18",
          text:"Musāqāt (contrat d'arboriculture), qui entretient les arbres et qui perçoit les fruits ?",
          choices:[
          {id:"a",text:"Le propriétaire entretient, le soigneur perçoit tout"},
          {id:"b",text:"Le soigneur entretient et irrigue, les fruits sont partagés entre les deux selon accord"},
          {id:"c",text:"Les deux entretiennent et partagent tout"},
          {id:"d",text:"Le soigneur entretient et ne reçoit qu'un salaire fixe"}
          ],
          correctId:"b",
          explanation:"Musāqāt : le soigneur fournit tout le travail d'entretien (arrosage, taille, cueillette) et les fruits sont partagés selon un ratio convenu à l'avance. Le propriétaire apporte les arbres et les infrastructures lourdes."
        },
        {
          id:"q-ija-19",
          text:"La (location d'une monture de travail) : qui est responsable si la monture se blesse pendant l'utilisation normale ?",
          choices:[
          {id:"a",text:"Le locataire est toujours responsable"},
          {id:"b",text:"Le propriétaire — l'usage normal n'engage pas la responsabilité du locataire"},
          {id:"c",text:"Le locataire si la blessure survient pendant le trajet"},
          {id:"d",text:"Les deux partagent la responsabilité"}
          ],
          correctId:"b",
          explanation:"Si le locataire utilise la monture (chameau, cheval) conformément à l'accord et dans les limites normales → toute blessure ou mort est à la charge du propriétaire (risque de propriété). Si le locataire dépasse les conditions stipulées (charge trop lourde, trajet non convenu) → sa responsabilité est engagée."
        },
        {
          id:"q-ija-20",
          text:"Quelle est la différence entre al-muḍāraba, Sharika Wakāla en termes de responsabilité en cas de perte ?",
          choices:[
          {id:"a",text:"Les trois sont identiques — responsabilité partagée"},
          {id:"b",text:"al-muḍāraba : perte sur le capital seul. : perte partagée selon capital. : le mandataire n'est pas responsable sauf faute"},
          {id:"c",text:"Toujours sur le gérant/actif"},
          {id:"d",text:"Aucun des trois ne donne lieu à responsabilité"}
          ],
          correctId:"b",
          explanation:"Synthèse des trois contrats : (1) al-muḍāraba : perte = Rabb al-Māl, le perd son travail ; (2) : perte répartie selon les parts de capital (jamais autrement) ; (3) : le est, responsable seulement en cas de faute ou dépassement du mandat."
        }]}},
    {id:"hiba",title:"Donations, Fondation Pieuse et Testament",arabicTitle:"al-hiba (الهِبَة) وal-waqf (الوَقف) وal-waṣiyya (الوَصِيَّة)",icon:"gift",description:"Transmission du patrimoine islamique : les trois contrats de générosité et de planification successorale.",source:"Risāla Ibn Abī Zayd ch.35-36 · Mukhtasar Khalīl pp.185-200",badge:{id:"badge-avance-hiba",title:"Juriste de la Générosité",arabicTitle:"فَقِيهُ التَّبَرُّعَات",icon:"gift-h",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Hiba Waqf Waṣiyya"},lessons:[        {
          id:"hib-01",
          title:"Al-Hiba — La Donation Islamique et ses Conditions",
          status:'available',
          content:[
            {"t": "lead", "v": "La est la donation d'un bien à titre gratuit de son vivant, sans contrepartie. Le Mukhtasar Khalīl (pp. 185-195) y consacre un chapitre détaillé, avec des règles propres au rite malikite sur la révocabilité et la prise de possession."},
            {"t": "h", "v": "Définition et conditions de validité"},
            { t:'ul', v:[
              "<strong>Formule :</strong> offre et acceptation — expresses ou implicites.",
              "<strong> (bénéficiaire) :</strong> doit exister au moment de la donation — pas de donation à un enfant à naître.",
              "<strong> :</strong> le bien donné doit être connu et déterminé.",
              "<strong> (prise de possession) :</strong> condition de validité selon le rite malikite — la donation n'est complète que lorsque le bénéficiaire prend possession du bien."
            ] },
            { t:'ar', v:"لَا تَتِمُّ al-hiba (الهِبَة)ُ وَالصَّدَقَةُ وَالعَطِيَّةُ إِلَّا بِالحِيَازَةِ", n:"« La هِبَة, la صَدَقَة et l'عَطِيَّة ne sont complètes que par la prise de possession. » — Imām Mālik, Muwattaʾ" },
            {"t": "h", "v": "La révocabilité de la — positions malikites"},
            { t:'ul', v:[
              "<strong>Père → enfant mineur :</strong> le père peut révoquer la donation tant que l'enfant ne l'a pas cédée, transformée ou grevée d'une dette.",
              "<strong>Entre époux :</strong> ni le mari ni la femme ne peuvent révoquer une donation faite à l'autre.",
              "<strong>Entre autres personnes :</strong> la révocation après prise de possession est selon l'Imām Mālik (hadīth : « celui qui reprend son don est comme le chien qui revient à son vomi »).",
              "Mukhtasar Khalīl : la révocation est interrompue si le bien donné a été vendu, détruit, transformé ou grevé."
            ] },
            {"t": "h", "v": "Hiba — Donation conditionnée à une contrepartie"},
            {"t": "p", "v": "Si la donation est faite avec une contrepartie stipulée (ex: « je te donne cette maison si tu me donnes X »), elle prend les règles de la VENTE, non de la donation. Le droit de retrait et la garantie s'appliquent alors."},
            {"t": "h", "v": "— Inégalité entre enfants dans les donations"},
            {"t": "p", "v": "L'Imām Mālik recommande l'égalité entre les enfants dans les donations de leur vivant — mais ne la rend pas obligatoire. Une inégalité délibérée est makrūh. Si l'inégalité vise à léser certains héritiers, elle est interrompue après la mort (règle du 1/3 testamentaire)."},
            {"t": "note", "v": "Différence fondamentale vs : la est une donation à une personne nommée avec espoir de réciprocité (un jour) — c'est un acte social. La est donnée uniquement pour Allah, sans espoir de réciprocité — elle est irréversible même avant la prise de possession."}
          ]
        },
        {
          id:"hib-02",
          title:"Al-Waqf — La Fondation Pieuse et le Bien Inaliénable",
          status:'available',
          content:[
            {"t": "lead", "v": "Le (fondation pieuse, endowment) est l'immobilisation permanente d'un bien dont les revenus sont affectés à une cause charitable. C'est l'un des instruments les plus puissants de la civilisation islamique — mosquées, écoles, hôpitaux, bibliothèques ont été construits et maintenus par des awqāf."},
            {"t": "h", "v": "Définition et caractéristiques essentielles"},
            { t:'ul', v:[
              "Le bien ne peut plus être : vendu, hérité, donné, ni grevé d'une hypothèque.",
              "Les revenus sont distribués selon la volonté du fondateur.",
              "Le est PERPÉTUEL — il dure jusqu'à la destruction physique du bien.",
              "Mukhtasar Khalīl : « » — le capital est immobilisé, les fruits sont libérés (au profit de la cause)."
            ] },
            {"t": "h", "v": "Waqf — Conditions de validité"},
            { t:'ul', v:[
              "<strong> :</strong> majeur, libre, sain d'esprit, propriétaire.",
              "<strong> :</strong> bien immeuble de préférence (terres, bâtiments) ou mobilier durable.",
              "<strong> :</strong> cause existante et légitime — mosquée, école, pauvres, famille.",
              "<strong>Condition malikite :</strong> pas de prise de possession obligatoire — le prend effet dès la déclaration devant témoins.",
              "Peut être constitué pour la vie du fondateur puis passer à une cause charitable."
            ] },
            {"t": "h", "v": "Waqf"},
            { t:'ul', v:[
              "<strong>Waqf :</strong> directement au profit d'une institution charitable (mosquée, école, soins).",
              "<strong>Waqf :</strong> au profit de la famille d'abord, puis d'une cause charitable — permis en rite malikite.",
              "<strong>Waqf :</strong> plusieurs bénéficiaires simultanément."
            ] },
            {"t": "h", "v": "Gestion et administration du"},
            { t:'ul', v:[
              "Le naẓir ou mutawallī administre le selon les conditions du fondateur.",
              "Peut louer les biens du — c'est même la méthode de génération de revenus recommandée.",
              "Ne peut PAS vendre le bien, sauf en cas de dégradation totale et inutilité — et seulement pour racheter un bien éIstibdāl.",
              "Application contemporaine : les islamiques en France sont structurés en fondations reconnues d'utilité publique."
            ] },
            { t:'ar', v:"احبِس الأَصلَ وَسَبِّل الثَّمَرَةَ", n:"« Immobilise le capital et libère les fruits. » — Hadīth (al-Bukhārī et Muslim), origine du وَقف islamique" },
            {"t": "note", "v": "Le contemporain en France : selon doctrine-malikite.fr, les musulmans peuvent constituer des fondations ou associations culturelles islamiques jouant le rôle du. Les dons aux associations islamiques reconnues équivalent fonctionnellement à un puisque les biens ne sont pas redistribués mais affectés à la cause."}
          ]
        },
        {
          id:"hib-03",
          title:"Al-Waṣiyya — Le Testament Islamique et ses Règles",
          status:'available',
          content:[
            {"t": "lead", "v": "La est la disposition testamentaire par laquelle une personne transfère un droit à titre gratuit après sa mort. Elle est limitée au tiers de la succession et ne peut bénéficier à un héritier légal."},
            {"t": "h", "v": "Waṣiyya — Statut"},
            { t:'ul', v:[
              "Sounnah muʾakkada — fortement recommandée pour qui a des biens.",
              "Le Prophète ﷺ : « Celui qui meurt sans avoir rédigé son testament meurt dans une forme de légèreté. »",
              "Obligatoire pour régler les dettes connues et les obligations religieuses.",
              "Peut être rédigée à tout moment et modifiée jusqu'à la mort."
            ] },
            {"t": "h", "v": "— La règle du tiers"},
            { t:'ul', v:[
              "Maximum : 1/3 de la succession après paiement des dettes.",
              "En dessous du 1/3 : valide sans accord des héritiers.",
              "Au-delà du 1/3 : nécessite l'accord des héritiers APRÈS la mort du testateur.",
              "Mukhtasar Khalīl : si les héritiers approuvent le dépassement du 1/3 après la mort → valide.",
              "Conseil du Prophète ﷺ : le 1/3 est généreux — moins est mieux pour ne pas léser les héritiers."
            ] },
            {"t": "h", "v": ""},
            { t:'ul', v:[
              "<strong>Pas de à un héritier légal</strong> — sauf accord de tous les héritiers APRÈS la mort : « ».",
              "<strong>Valide pour :</strong> un non-héritier (ami, association, œuvre charitable), un non-Muslim (hadīth d'Ibn Umar).",
              "Si la bénéficie à un héritier légal sans accord → elle est nulle pour la partie héritée.",
              "Exception malikite : si l'héritier bénéficiaire n'est héritier que parce que d'autres héritiers existent → certains savants malikites la valident."
            ] },
            {"t": "h", "v": "Waṣī"},
            { t:'ul', v:[
              "Waṣī (exécuteur testamentaire) est nommé pour exécuter les dispositions.",
              "Il est — responsable de la bonne exécution.",
              "La est exécutée APRÈS le paiement des dettes et AVANT le partage successoral.",
              "Ordre de priorité : (1) dettes envers Allah → (2) dettes envers les hommes → (3) → (4) héritage."
            ] },
            {"t": "note", "v": "Application contemporaine — testament franco-islamique : il est recommandé de rédiger un testament civil (selon la loi française) ET un testament islamique complémentaire. Le testament civil permet de diriger 1/3 de la succession vers des causes islamiques non couvertes par la loi civile (héritiers non reconnus comme l'enfant adopté, legs à une mosquée...)."}
          ]
        },
        {
          id:"hib-04",
          title:"ʿUmrā et Ruqbā — Donations Viagères et Conditionnelles",
          status:'available',
          content:[
            {"t": "lead", "v": "Deux types de donations spéciales traités par le Mukhtasar Khalīl et ayant des statuts juridiques distincts en rite malikite."},
            {"t": "h", "v": "ʿUmrā — La Donation Viagère"},
            {"t": "p", "v": "La est la donation d'un bien pour la durée de la vie du bénéficiaire : « je te donne cette maison ta vie durant, puis elle retourne à mes héritiers. »"},
            { t:'ul', v:[
              "Statut malikite : la donne la pleine propriété au bénéficiaire — elle ne retourne PAS aux héritiers du donateur à la mort du bénéficiaire.",
              "Position de l'Imām Mālik : la est valide et définitive — les conditions de retour sont caduques.",
              "Hadīth du Prophète ﷺ : « L' est un droit permanent pour qui la reçoit. » — al-Bukhārī et Muslim.",
              "Différence avec d'autres écoles : certains hanafites rendent le retour valide."
            ] },
            {"t": "h", "v": "Ruqbā — La Donation Conditionnelle au Survivant"},
            {"t": "p", "v": "La est la donation conditionnée à la mort : « si tu meurs avant moi, la maison m'appartient ; si je meurs avant toi, elle t'appartient. » — Chacun surveille l'autre."},
            { t:'ul', v:[
              "Statut malikite : interdite selon l'Imām Mālik car elle contient du (incertitude sur le bénéficiaire final).",
              "Mukhtasar Khalīl : « » — la est invalide en rite malikite.",
              "Si conclue malgré l'interdiction : le bien reste au donateur tant qu'il est vivant ; à sa mort, la disposition est nulle.",
              "DifféʿUmrā qui est valide et permanente."
            ] },
            {"t": "h", "v": ""},
            { t:'ul', v:[
              "<strong> :</strong> cadeau offert en signe d'affection — règles de la s'appliquent.",
              "<strong> :</strong> libéralité du malade en phase terminale — limitée au 1/3 comme la, même si faite de son vivant.",
              "<strong> :</strong> mention coranique de la dot (Coran 4:4) — la dot est un droit de la femme, pas une donation ordinaire."
            ] },
            {"t": "note", "v": "Point crucial — du malade en phase terminale : toute donation faite par quelqu'un en phase terminale est traitée comme une, limitée au 1/3 de la succession. Ceci empêche de contourner les droits des héritiers légaux en donnant massivement en fin de vie."}
          ]
        },
        {
          id:"hib-05",
          title:"Planification Successorale en Contexte Contemporain",
          status:'available',
          content:[
            {"t": "lead", "v": "Comment combiner les principes islamiques de transmission du patrimoine avec les contraintes légales contemporaines (droit français, européen) ? Synthèse de doctrine-malikite.fr et des savants malikites contemporains."},
            {"t": "h", "v": "Les instruments islamiques de transmission"},
            { t:'ul', v:[
              "<strong>Hiba</strong> : donner de son vivant, hors succession — permet de transmettre librement avant la mort.",
              "<strong>Waqf</strong> : affecter définitivement un bien à une cause — sort de la succession.",
              "<strong>Waṣiyya</strong> : disposer du 1/3 — atteindre des bénéficiaires non couverts par la succession légale.",
              "<strong> Takāful</strong> : assurance-vie islamique — peut transmettre hors succession."
            ] },
            {"t": "h", "v": "Articulation droit français / droit islamique"},
            { t:'ul', v:[
              "En France, la réserve héréditaire (50-75% selon le nombre d'enfants) s'impose et prévaut sur les dispositions islamiques.",
              "La quotité disponible (25-50%) peut être orientée selon la volonté islamique via testament.",
              "Doctrine-malikite.fr recommande : un testament civil + des donations de son vivant pour équilibrer.",
              "Les donations à des enfants (même inégales) faites de son vivant et hors contrat de mariage sont récupérables à la succession en droit français (rapport à succession) — prévoir un testament de dispense de rapport."
            ] },
            {"t": "h", "v": "Cas pratiques fréquents"},
            { t:'ul', v:[
              "<strong>Léguer à une mosquée :</strong> via testament civil pour la quotité disponible, OU via constitué de son vivant.",
              "<strong>Transmettre à une veuve non inscrite :</strong> la donation de son vivant ou l'assurance-vie sont les seules voies hors succession légale.",
              "<strong>Équité entre enfants :</strong> en droit français, tous les enfants héritent également — les donations antérieures sont rapportées. En droit islamique, les parts sont inégales (fils = 2 × fille).",
              "<strong>Le problème du conjoint non-Muslim :</strong> le non-Muslim n'hérite pas de son conjoint Muslim en droit islamique — mais hérite en droit français. La donation de son vivant ou le testament peuvent équilibrer."
            ] },
            {"t": "note", "v": "Rappel de principe : le droit de succession islamique est une obligation religieuse (les parts sont fixées par le Coran). Un Muslim doit s'efforcer de respecter les islamiques dans la mesure du possible. Là où la loi civile s'y oppose, il doit au minimum comprendre les droits islamiques de chaque héritier et chercher à les équilibrer par d'autres moyens licites."}
          ]
        }],quiz:{id:"quiz-avance-hiba",title:"Questionnaire — Hiba Waqf Waṣiyya",status:"available",score:null,questions:[        {
          id:"q-hib-01",
          text:"La (donation) est-elle complète dès la formule verbale selon le rite malikite ?",
          choices:[
          {id:"a",text:"Oui — la parole suffit"},
          {id:"b",text:"Non — elle n'est complète que par (prise de possession) du bien"},
          {id:"c",text:"Oui avec deux témoins"},
          {id:"d",text:"Non — il faut un acte notarié"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik dans la Muwattaʾ : « Hiba Ḥiyāza » — la donation n'est parfaite que par la prise de possession. Sans Ḥiyāza, la donation reste révocable et non définitive."
        },
        {
          id:"q-hib-02",
          text:"Ibrahim donne une voiture à son fils adulte. Peut-il reprendre cette donation ?",
          choices:[
          {id:"a",text:"Oui — un père peut toujours reprendre ses dons"},
          {id:"b",text:"Non — selon l'Imām Mālik, la reprise après est entre adultes"},
          {id:"c",text:"Oui si la valeur a augmenté"},
          {id:"d",text:"Oui dans l'année suivante"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik : « Hiba » — reprendre une donation après est. Hadīth du Prophète ﷺ : « celui qui reprend son don est comme le chien qui revient à son vomi. » Exception unique : le père peut reprendre une donation à un enfant MINEUR si le bien n'a pas changé."
        },
        {
          id:"q-hib-03",
          text:"Un père donne 50 000€ à son fils aîné seulement. En rite malikite, cette donation est :",
          choices:[
          {id:"a",text:"Nulle — obligation d'égalité absolue"},
          {id:"b",text:"Valide mais makrūh — l'égalité est recommandée mais non obligatoire"},
          {id:"c",text:"Valide et sans restriction"},
          {id:"d",text:"Nulle si d'autres enfants existent"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik recommande l'égalité entre enfants dans les donations de leur vivant mais ne la rend pas OBLIGATOIRE. Une donation inégale est makrūh (blâmable) mais valide. Si l'inégalité vise délibérément à léser les héritiers, elle peut être limitée par la règle du 1/3."
        },
        {
          id:"q-hib-04",
          text:"La diffère de la en ce que :",
          choices:[
          {id:"a",text:"La peut être reprise, pas la"},
          {id:"b",text:"La est faite uniquement pour Allah — irréversible même avant la prise de possession"},
          {id:"c",text:"La nécessite plus de témoins"},
          {id:"d",text:"Elles sont identiques"}
          ],
          correctId:"b",
          explanation:"Différence fondamentale : la est un acte social (avec espoir de réciprocité) — elle nécessite pour être définitive. La est faite exclusivement pour Allah, sans espoir de réciprocité — elle devient irréversible dès la formule, même avant."
        },
        {
          id:"q-hib-05",
          text:"Le : le fondateur peut-il vendre le bien qu'il a mis en ?",
          choices:[
          {id:"a",text:"Oui avec accord des bénéficiaires"},
          {id:"b",text:"Non — le bien ne peut jamais être vendu"},
          {id:"c",text:"Exceptionnellement si le bien est totalement inutilisable — et seulement pour racheter un bien équivalent"},
          {id:"d",text:"Oui après 30 ans"}
          ],
          correctId:"c",
          explanation:"Le est perpétuel et inaliénable. Exception exceptionnelle : si le bien se dégrade totalement (maison qui s'effondre, terrain improductif) et ne génère plus aucun revenu → certains savants permettent la vente uniquement pour racheter un bien équivalent qui prend le mêIstibdāl."
        },
        {
          id:"q-hib-06",
          text:"Un Waqf Dhurrī : ses revenus profitent à :",
          choices:[
          {id:"a",text:"Uniquement les institutions charitables"},
          {id:"b",text:"La famille du fondateur d'abord, puis une cause charitable après extinction de la lignée"},
          {id:"c",text:"Uniquement les pauvres"},
          {id:"d",text:"Le gouvernement islamique"}
          ],
          correctId:"b",
          explanation:"Le est permis en rite malikite — il bénéficie à la famille du fondateur pendant plusieurs générations, puis à une cause charitable après extinction de la lignée familiale. Il permet la transmission du patrimoine familial tout en préservant un but charitable final."
        },
        {
          id:"q-hib-07",
          text:"Ibrahim lègue par testament 50% de sa succession à une mosquée. Est-ce valide sans accord des héritiers ?",
          choices:[
          {id:"a",text:"Oui — la mosquée mérite plus"},
          {id:"b",text:"Non — le maximum est 1/3 de la succession sans accord des héritiers"},
          {id:"c",text:"Oui si les héritiers sont de bonne santé"},
          {id:"d",text:"Oui si la mosque est officielle"}
          ],
          correctId:"b",
          explanation:"Règle absolue : la est limitée au 1/3 de la succession SANS accord des héritiers. Au-delà du 1/3, elle nécessite l'accord de TOUS les héritiers APRÈS la mort du testateur. 50% → invalide pour les 17% au-delà du 1/3 sans accord."
        },
        {
          id:"q-hib-08",
          text:"Peut-on faire une en faveur d'un héritier légal (fils, fille, épouse) ?",
          choices:[
          {id:"a",text:"Oui sans restriction"},
          {id:"b",text:"Non — « » — sauf accord de TOUS les autres héritiers après la mort"},
          {id:"c",text:"Oui jusqu'à 1/3"},
          {id:"d",text:"Seulement pour l'épouse"}
          ],
          correctId:"b",
          explanation:"Hadīth : « » — pas de testament au profit d'un héritier légal (fils, fille, épouse, père...). Si le testateur le fait quand même, les autres héritiers peuvent le valider après sa mort. Sans accord → la disposition testamentaire à l'héritier est nulle."
        },
        {
          id:"q-hib-09",
          text:"L' (libéralité) du malade en phase terminale est limitée à :",
          choices:[
          {id:"a",text:"La moitié de la succession"},
          {id:"b",text:"Le 1/3 de la succession — comme la"},
          {id:"c",text:"Sans limite — on dispose librement"},
          {id:"d",text:"Le quart de la succession"}
          ],
          correctId:"b",
          explanation:"Toute libéralité (donation, remise de dette, cadeaux importants) faite par une personne en (maladie dont elle mourra) est traitée comme une et limitée au 1/3. Cela empêche de contourner les droits des héritiers en donnant massivement avant la mort."
        },
        {
          id:"q-hib-10",
          text:"L' (donation viagère) : que se passe-t-il quand le bénéficiaire décède ?",
          choices:[
          {id:"a",text:"Le bien retourne au donateur ou à ses héritiers"},
          {id:"b",text:"Le bien reste définitivement aux héritiers du bénéficiaire — l' donne la pleine propriété"},
          {id:"c",text:"Le bien est partagé entre les deux familles"},
          {id:"d",text:"Le bien revient à une mosquée"}
          ],
          correctId:"b",
          explanation:"Position malikite distinctive : l' est une donation permanente selon l'Imām Mālik. Hadīth du Prophète ﷺ : « ʿUmrā » — elle est définitive pour ses bénéficiaires. Le bien n'est PAS récupérable à la mort du bénéficiaire, contrairement à ce que stipule parfois le donateur."
        },
        {
          id:"q-hib-11",
          text:"La (donation conditionnée au survivant) est-elle valide en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — permise comme l'"},
          {id:"b",text:"Non — interdite selon l'Imām Mālik car contient du sur le bénéficiaire final"},
          {id:"c",text:"Valide si les deux parties consentent"},
          {id:"d",text:"Valide pour les couples"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : « » — la est invalide en rite malikite. La donner entraîne du (incertitude) sur qui héritera du bien. Différence avec l' qui est valide et définitive."
        },
        {
          id:"q-hib-12",
          text:"Quel est l'ordre de priorité dans le traitement de la succession ?",
          choices:[
          {id:"a",text:"Héritiers → dettes →"},
          {id:"b",text:"(dettes envers Allah) → (dettes envers les hommes) → → mirath"},
          {id:"c",text:"→ dettes → héritiers"},
          {id:"d",text:"Les quatre simultanément selon les parts"}
          ],
          correctId:"b",
          explanation:"Ordre impératif islamique : (1) (zakat non payée, kafāra, hajj non accompli) → (2) (dettes envers les créanciers) → (3) (dans la limite du 1/3) → (4) partage successoral. Les héritiers ne reçoivent rien avant que tout soit réglé."
        },
        {
          id:"q-hib-13",
          text:"Un Muslim en France veut léguer sa maison à une mosquée. Que peut-il faire ?",
          choices:[
          {id:"a",text:"Faire un testament islamique uniquement"},
          {id:"b",text:"Constituer un ou faire un testament civil pour la quotité disponible, en complément d'un testament islamique"},
          {id:"c",text:"La loi française l'interdit"},
          {id:"d",text:"Rien — seuls les héritiers légaux peuvent hériter"}
          ],
          correctId:"b",
          explanation:"En France, la réserve héréditaire s'impose. La solution islamique : (1) constituer un de son vivant (association islamique) avec la maison → elle sort de la succession, OU (2) léguer par testament civil la quotité disponible (1/4 à 1/2 selon enfants) à la mosquée. Doctrine-malikite.fr recommande cette double approche."
        },
        {
          id:"q-hib-14",
          text:"Fatima donne de son vivant 30 000€ à chacun de ses 3 enfants. À sa mort, ses enfants doivent-ils rapporter ces donations à la succession en droit FRANÇAIS ?",
          choices:[
          {id:"a",text:"Non — les donations de son vivant ne se rapportent pas"},
          {id:"b",text:"Oui — en droit français, les donations aux enfants sont en principe rapportables à la succession, sauf dispense expresse"},
          {id:"c",text:"Seulement si elles datent de moins de 10 ans"},
          {id:"d",text:"Seulement les donations supérieures à 50 000€"}
          ],
          correctId:"b",
          explanation:"En droit français, les donations faites aux héritiers réservataires (enfants) sont en principe rapportables à la succession pour établir l'égalité. Pour éviter le rapport : insérer une clause de dispense de rapport dans l'acte de donation. Sans cette clause → les 30 000€ sont réintégrés fictionnellement à la succession."
        },
        {
          id:"q-hib-15",
          text:"Pourquoi le Prophète ﷺ a-t-il dit que « le 1/3 est généreux, et moins est mieux » ?",
          choices:[
          {id:"a",text:"Car la est découragée en Islam"},
          {id:"b",text:"Car les héritiers ont besoin du reste de la succession — le testateur ne doit pas les appauvrir"},
          {id:"c",text:"Car 1/3 dépasse ce qui est permis"},
          {id:"d",text:"Car les héritiers ne sont pas dignes de confiance"}
          ],
          correctId:"b",
          explanation:"Le Prophète ﷺ à Saʿd ibn Abī Waqqās sur son lit de maladie : « le 1/3 — et le 1/3 est beaucoup. Il vaut mieux laisser tes héritiers aisés plutôt que pauvres, tendant la main. » — al-Bukhārī. Le testament islamique ne doit pas priver les héritiers légaux de leurs droits."
        },
        {
          id:"q-hib-16",
          text:"Le produit des revenus (loyers). Ces revenus peuvent-ils être redistribués aux bénéficiaires en argent ?",
          choices:[
          {id:"a",text:"Non — seulement en nature"},
          {id:"b",text:"Oui — les revenus sont librement distribués selon les conditions du fondateur"},
          {id:"c",text:"Seulement pour l'entretien du bien"},
          {id:"d",text:"Seulement à des pauvres"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : « » — le capital est immobilisé mais les fruits (revenus, loyers, récoltes) sont distribués librement selon les conditions du fondateur. Ces revenus peuvent aller aux pauvres, à une école, à une famille, ou financer l'entretien du bien lui-même."
        },
        {
          id:"q-hib-17",
          text:"Qu'est-ce que l'Istibdāl dans le contexte du ?",
          choices:[
          {id:"a",text:"L'ajout d'un bien supplémentaire au"},
          {id:"b",text:"La vente d'un bien inutilisable pour racheter un bien équivalent qui prend le même statut"},
          {id:"c",text:"Le transfert du à une autre cause"},
          {id:"d",text:"La suspension temporaire du"}
          ],
          correctId:"b",
          explanation:"L'Istibdāl est la vente exceptionnelle d'un bien devenu totalement inutile (ruiné, improductif) pour acheter un bien équivalent qui prend les mêmes conditions de. C'est la seule exception à l'inaliénabilité du. Certains savants malikites le permettent sous contrôle judiciaire strict."
        },
        {
          id:"q-hib-18",
          text:"Ibrahim lègue 40% de sa succession à une mosquée. Ses deux fils adultes acceptent après sa mort. La est-elle valide ?",
          choices:[
          {id:"a",text:"Non — le 1/3 est une limite absolue"},
          {id:"b",text:"Oui — l' (approbation) de TOUS les héritiers adultes après la mort valide l'excédent"},
          {id:"c",text:"Seulement si les fils sont également héritiers de la mosquée"},
          {id:"d",text:"Non car les fils ne peuvent pas renoncer à leurs parts"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : « » — l'accord de tous les héritiers APRÈS la mort valide une dépassant le 1/3. Les deux fils adultes approuvent → les 40% sont valides. Si un seul fils avait refusé → la n'aurait été valide que dans la limite du 1/3."
        },
        {
          id:"q-hib-19",
          text:"La donation à un non-Muslim est-elle valide ?",
          choices:[
          {id:"a",text:"Non — haram de donner aux non-Muslims"},
          {id:"b",text:"Oui — permise y compris à un proche non-Muslim"},
          {id:"c",text:"Seulement aux Ahl al-Kitāb"},
          {id:"d",text:"Makrūh uniquement"}
          ],
          correctId:"b",
          explanation:"La donation à un non-Muslim est permise — l'Islam encourage la bonté envers tous. Coran 60:8 : « Allah ne vous interdit pas d'être bienveillants envers ceux qui ne vous ont pas combattus pour votre religion. » De même, la en faveur d'un proche non-Muslim est valide selon une position malikite."
        },
        {
          id:"q-hib-20",
          text:"Quelle est la difféHiba, Waqf Waṣiyya ?",
          choices:[
          {id:"a",text:"Aucune différence"},
          {id:"b",text:": donation de son vivant, révocable avant. : donation perpétuelle et inaliénable. : disposition après la mort, limitée au 1/3"},
          {id:"c",text:"Les trois sont irréversibles"},
          {id:"d",text:"Seul le est islamique"}
          ],
          correctId:"b",
          explanation:"Synthèse des trois instruments : Hiba = donation entre vifs, révocable avant, définitive après. Waqf = immobilisation permanente d'un bien pour une cause, inaliénable et perpétuel. Waṣiyya = disposition après décès, limitée au 1/3, invalidée pour les héritiers légaux sauf accord."
        }]}},
    {id:"mawarith",title:"Le Droit de Succession Islamique",arabicTitle:"al-farāʾiḍ (الفَرَائِض) — al-mīrāth (المِيرَاث)",icon:"scroll",description:"Science des successions islamiques : héritiers, parts fixes, exclusions, ajustements et spécificités malikites.",source:"Risāla Ibn Abī Zayd ch.35-36 · Mukhtasar Khalīl pp.260-277 · Matn Ibn Āshir",badge:{id:"badge-avance-mawarith",title:"Expert de l'Héritage",arabicTitle:"عَالِمُ al-farāʾiḍ (الفَرَائِض)",icon:"tree-f",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Farāʾiḍ — Mīrāth"},lessons:[        {
          id:"far-01",
          title:"Introduction aux Farāʾiḍ — La Science des Successions Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "Farāʾiḍ — la science des successions islamiques — est l'une des disciplines les plus précises du islamique. Le Prophète ﷺ l'a appelée « la moitié du savoir » et a recommandé de l'apprendre et de l'enseigner."},
            { t:'ar', v:"تَعَلَّمُوا al-farāʾiḍ (الفَرَائِض)َ وَعَلِّمُوهَا النَّاسَ فَإِنَّهَا نِصفُ العِلمِ وَهُوَ يُنسَى", n:"« Apprenez les فَرَائِض et enseignez-les, car elles constituent la moitié du savoir et elles seront les premières à disparaître. » — Hadīth (Ibn Māja et al-Dāraquṭnī)" },
            {"t": "h", "v": "Fondements coraniques"},
            { t:'ul', v:[
              "Les parts successorales sont fixées par le Coran (sourate al-Nisāʾ, versets 11, 12 et 176) — ce ne sont pas des décisions humaines.",
              "Toute personne connaissant l'Islam doit connaître les droits de base des héritiers.",
              "Coran 4:13 : « Ce sont les limites fixées par Allah — ceux qui obéissent à Allah et à Son messager seront admis dans des jardins. »"
            ] },
            {"t": "h", "v": "— Causes d'exclusion du droit d'hériter"},
            { t:'ul', v:[
              "<strong>1. :</strong> le meurtrier n'hérite pas de sa victime.",
              "<strong>2. :</strong> l'esclave n'hérite pas et ne transmet pas (contexte historique).",
              "<strong>3. :</strong> pas d'héritage entre Muslim et non-Muslim.",
              "Spécificité malikite : le al-ridda (apostasie) empêche l'héritage — l'apostat n'hérite pas d'un Muslim ni un Muslim d'un apostat.",
              "Note : les mariages mixtes Muslim-non-Muslim → pas d'héritage islamique mutuel."
            ] },
            {"t": "h", "v": "— Causes du droit d'hériter"},
            { t:'ul', v:[
              "<strong>1. Nasab :</strong> lien de sang (filiation légitime).",
              "<strong>2. Nikāḥ :</strong> mariage légal — l'époux et l'épouse héritent mutuellement.",
              "<strong>3. Walāʾ :</strong> lien d'affranchissement — héritier résiduel si pas d'autre héritier."
            ] },
            {"t": "h", "v": "— Vue d'ensemble du calcul successoral"},
            {"t": "p", "v": "Le calcul des parts se fait en 3 étapes : (1) identifier les héritiers présents ; (2) appliquer les (exclusions) ; (3) calculer les parts selon les règles coranique + malikites. En cas de dépassement total → ʿAwl. En cas de résidu → Radd ʿAṣaba."},
            {"t": "note", "v": "La succession islamique est fondée sur le principe du besoin et de la responsabilité : l'homme hérite du double de la femme car il est légalement responsable de l'entretien de sa famille. C'est un équilibre systémique, pas une inégalité arbitraire."}
          ]
        },
        {
          id:"far-02",
          title:"Les Héritiers et leurs Parts Coraniques",
          status:'available',
          content:[
            {"t": "lead", "v": "Il existe deux grandes catégories d'héritiers en droit islamique : Aṣḥāb al-Furūḍ (héritiers à parts fixes coraniques) et les (héritiers résiduels mâles agnatiques). La Risāla et le Mukhtasar Khalīl en établissent les listes précises."},
            {"t": "h", "v": "Aṣḥāb al-Furūḍ — Héritiers à parts fixes"},
            {"t": "p", "v": "Ce sont les héritiers dont la part est fixée explicitement par le Coran :"},
            { t:'ul', v:[
              "<strong>La fille :</strong> 1/2 si seule, 2/3 si plusieurs filles sans frère.",
              "<strong>La fille du fils :</strong> même que la fille, en présence du fils.",
              "<strong>La mère :</strong> 1/3 si pas d'enfants ni plusieurs frères/sœurs ; sinon 1/6.",
              "<strong>La grand-mère :</strong> 1/6 en l'absence de mère.",
              "<strong>Le père :</strong> 1/6 en présence d'un fils ; prend le résidu sinon.",
              "<strong>Le grand-père :</strong> comme le père en son absence.",
              "<strong>L'épouse :</strong> 1/4 sans enfant ; 1/8 avec enfant.",
              "<strong>L'époux :</strong> 1/2 sans enfant ; 1/4 avec enfant.",
              "<strong>Les frères/sœurs utérins :</strong> 1/6 (un seul) ou 1/3 partagé (plusieurs).",
              "<strong>Les frères/sœurs germains :</strong> 2/3 partagés si plusieurs sœurs sans frère."
            ] },
            {"t": "h", "v": "ʿAṣaba — Les Héritiers Résiduels Agnatiques"},
            {"t": "p", "v": "L' prend le résidu après les parts fixes. Si rien ne reste → zéro. Si tout reste → tout."},
            { t:'ul', v:[
              "<strong>Ordre de priorité ʿAṣaba :</strong> fils → fils du fils → père → frère germain → frère consanguin → fils de frère → oncle paternel → fils d'oncle.",
              "Le plus proche degré exclut le plus éloigné.",
              "<strong> :</strong> la fille devient en présence de son frère — elle prend la moitié de sa part.",
              "<strong> :</strong> les sœurs deviennent en présence de filles."
            ] },
            { t:'ar', v:"لِلذَّكَرِ مِثلُ حَظِّ الأُنثَيَيْن", n:"« Au mâle la part de deux femelles » — Coran 4:11" },
            {"t": "note", "v": "Mnémotechnique pour les parts : 1/2 → fille seule, époux sans enfant ; 1/4 → épouse sans enfant, époux avec enfant ; 1/8 → épouse avec enfant ; 1/3 → mère sans enfants, frères/sœurs utérins ensemble ; 1/6 → père/mère/grand-père/grand-mère avec enfants ; 2/3 → deux filles ou plus."}
          ]
        },
        {
          id:"far-03",
          title:"Al-Ḥujūb — Exclusions et Blocages Successoraux",
          status:'available',
          content:[
            {"t": "lead", "v": "Le système de (exclusions) est central pour comprendre qui hérite réellement dans une succession complexe. Il y a deux types : Ḥajb (exclusion totale) et Ḥajb (réduction de part)."},
            {"t": "h", "v": "Ḥajb al-Ḥajb al-Ḥirmān — L'Exclusion Totale"},
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
            {"t": "h", "v": "Ḥajb al-Nuqṣān — La Réduction de Part"},
            { t:'ul', v:[
              "La mère passe de 1/3 à 1/6 en présence d'un enfant ou de plusieurs frères/sœurs.",
              "L'époux passe de 1/2 à 1/4 en présence d'un enfant.",
              "L'épouse passe de 1/4 à 1/8 en présence d'un enfant.",
              "La fille du fils passe de 1/2 à 1/6 (complément à 2/3) en présence d'une fille.",
              "La grand-mère (1/6) est réduite à 0 par la mère."
            ] },
            {"t": "h", "v": "Cas des frères avec le grand-père"},
            {"t": "p", "v": "L' est le cas le plus célèbre de jurisprudence successorale malikite — un cas unique dans l'ensemble du fiqh. Dans la succession (époux + mère + grand-père + sœur germaine), le grand-père et la sœur germaine partagent leur pool ensemble d'une manière non standard. L'Imām Mālik a tranché ce cas différemment des autres écoles."},
            {"t": "note", "v": "Règle de mémorisation pour les principaux : les fils, fils de fils et père excluent la plupart des collatéraux. Le mari et l'épouse ne sont jamais complètement exclus. La mère n'est jamais complètement exclue (au minimum 1/6). Les frères/sœurs utérins sont exclus par tout descendant direct (fils, fille) et par le père."}
          ]
        },
        {
          id:"far-04",
          title:"ʿAwl et Radd — Ajustements Proportionnels de la Succession",
          status:'available',
          content:[
            {"t": "lead", "v": "Deux situations exceptionnelles se produisent : ʿAwl quand les parts fixes dépassent 1 (la totalité) ; Radd quand les parts fixes n'atteignent pas 1 et qu'il reste un résidu sans."},
            {"t": "h", "v": "ʿAwl — L'Ajustement à la Hausse"},
            {"t": "p", "v": "Si la somme des parts fixes dépasse 1 (100%), on augmente le dénominateur et chaque héritier reçoit une part proportionnellement réduite. Exemple : 1/2 + 1/4 + 1/3 = 13/12 → on passe à 13 (numérateur total), chaque part devient X/13."},
            { t:'ul', v:[
              "Le ʿAwl débute à partir de la valeur 6 (base de calcul la plus commune).",
              "Le maximum historique connu est 27 (lors de la succession de ʿUthmān ibn ʿAffān ﵁).",
              "Position malikite (et de tous les madhāhib sauf les zaydites) : ʿAwl est valide — les parts sont réduites proportionnellement.",
              "Exemple classique : Époux (1/2) + 2 sœurs (2/3) = 1/2 + 2/3 = 7/6 → ʿAwl à 7 : époux reçoit 3/7, sœurs 4/7."
            ] },
            {"t": "h", "v": "Radd — L'Ajustement à la Baisse"},
            {"t": "p", "v": "Si les parts fixes ne totalisent pas 1 et qu'il n'y a pas d', le résidu revient aux en proportion de leurs parts. C'Radd."},
            { t:'ul', v:[
              "Exemple : une fille (1/2) et une mère (1/6) = 2/3 total. Reste 1/3 sans → Radd : la fille reçoit 3/4 et la mère 1/4 du total.",
              "<strong>Spécificité malikite fondamentale : Radd sur le conjoint — INTERDIT.</strong> L'époux et l'éRadd.",
              "Si la fille est seule sans : elle reçoit 1/2 (sa part) + Radd du reste = tout.",
              "Si époux + fille : époux = 1/4 (avec enfant), fille = 1/2, reste 1/4 → Radd sur la fille seulement (pas l'époux)."
            ] },
            { t:'ar', v:"وَللرَّجُلِ مِثلُ حَظِّ الأُنثَيَيْنِ فِي المَوَارِيثِ", n:"Coran 4:176 — Base de la part de العَصَبَة masculine" },
            {"t": "note", "v": "Radd par rapport aux autres écoles : Radd sur le conjoint. Les malikites (et chāfiʿites) ne le permettent pas. Cette différence a des conséquences concrètes importantes : si une femme décède sans ni autre héritier qu'un époux et une fille, Bayt al-Māl (État islamique) selon les malikites."}
          ]
        },
        {
          id:"far-05",
          title:"Cas Pratiques de Calcul Successoral Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "La science des se concrétise dans le calcul précis des parts. Ce chapitre présente 5 cas pratiques types — du plus simple au plus complexe — avec les méthodes de résolution malikites."},
            {"t": "h", "v": "Cas 1 : Père + Mère + Fils unique"},
            { t:'ul', v:[
              "Père : 1/6 (en présence de fils) + du reste.",
              "Mère : 1/6 (en présence de fils).",
              "Fils : du reste (2/3).",
              "Total : père 1/6 + (éventuellement) si le fils est exclu, mère 1/6, fils prend le reste."
            ] },
            {"t": "h", "v": "Cas 2 : Époux + Fille + Fils du fils"},
            { t:'ul', v:[
              "Époux : 1/4 (avec descendant).",
              "Fille : 1/2.",
              "Fils du fils : du reste (1/4).",
              "Note : si la fille était deux, elle aurait 2/3 et le fils du fils aurait 1/4 - 2/3 = ? → ʿAwl."
            ] },
            {"t": "h", "v": "Cas 3 : Époux + Mère + 2 SœʿAwl"},
            { t:'ul', v:[
              "Époux : 1/2 = 3/6.",
              "Mère : 1/6 (en présence de sœurs).",
              "2 Sœurs : 2/3 = 4/6.",
              "Total : 3+1+4 = 8/6 → ʿAwl : on divise tout par 8. Époux 3/8, mère 1/8, sœurs 4/8."
            ] },
            {"t": "h", "v": "Cas 4 : Fille seule + Pas d'"},
            { t:'ul', v:[
              "Fille : 1/2 (part fixe).",
              "Reste : 1/2 sans → Radd sur la fille.",
              "Résultat : la fille prend tout (100%) Radd."
            ] },
            {"t": "h", "v": "Cas 5 : Épouse + Fille + Pas d'"},
            { t:'ul', v:[
              "Épouse : 1/8 (avec enfant).",
              "Fille : 1/2 = 4/8.",
              "Total : 1/8 + 4/8 = 5/8. Reste : 3/8.",
              "Malikite : Radd interdit sur l'épouse → le reste (3/8) Bayt al-Māl.",
              "Hanafite : Radd sur l'épouse → elle reçoit 1/8 + 3/8×(1/5) supplémentaires."
            ] },
            {"t": "note", "v": "Pour calculer : (1) lister les héritiers ; (2) appliquer les ; (3) additionner les parts fixes ; (4) si total > 1 → ʿAwl ; (5) si total < 1 et → ils prennent le reste ; (6) si total < 1 et pas d' → Radd (sauf sur conjoint selon les malikites) ; (7) si total < 1 et personne d'autre → Bayt al-Māl."}
          ]
        },
        {
          id:"far-06",
          title:"Farāʾiḍ Contemporaines — Succession en Contexte Occidental",
          status:'available',
          content:[
            {"t": "lead", "v": "Application du droit successoral islamique aux réalités contemporaines : familles recomposées, succession en France, enfants adoptifs, assurances-vie."},
            {"t": "h", "v": "— L'enfant né hors mariage"},
            { t:'ul', v:[
              "Position malikite : l'enfant né hors mariage n'hérite pas du père biologique légitime) — mais hérite de la mère.",
              "L' (reconnaissance volontaire par le père) : le rite malikite l'accepte sous conditions — le père peut établir la (paternité) mais pas facilement.",
              "Application contemporaine : un enfant reconnu légalement en France hérite selon le droit civil ; ses droits islamiques dépendent de la légitimité du mariage."
            ] },
            {"t": "h", "v": "Ṭalāq — Divorce et décès"},
            { t:'ul', v:[
              "Si le mari décède pendant l' d'un Ṭalāq Rajʿī → l'épouse hérite toujours (le mariage est encore en vigueur).",
              "Si le mari décède après Ṭalāq Bāʾin → l'épouse n'hérite pas.",
              "Si le mari divorce en état de m pour priver l'épouse de l'héritage → position malikite : elle hérite quand même."
            ] },
            {"t": "h", "v": "— L'Adoption"},
            { t:'ul', v:[
              "L'Islam interdit la filiation adoptive — l'enfant adopté n'hérite pas par.",
              "Cependant : une donation de son vivant, un testament (dans la limite du 1/3), ou une assurance-vie peuvent transmettre un patrimoine à l'enfant adopté.",
              "En France : l'adoption plénière crée des droits civils successoraux — ceux-ci coexistent avec les règles islamiques."
            ] },
            {"t": "h", "v": "La succession franco-islamique — Réconciliation"},
            { t:'ul', v:[
              "En France, le droit civil s'impose : égalité des enfants (hors quotité disponible), réserve héréditaire.",
              "Le Muslim peut utiliser la quotité disponible (25-50%) pour corriger des inégalités islamiques (ex : donner plus au fils).",
              "Un testament civil bien rédigé peut approcher les parts islamiques dans la quotité disponible.",
              "Recommandation de doctrine-malikite.fr : consulter un notaire ET un savant islamique pour optimiser les deux systèmes."
            ] },
            {"t": "note", "v": "Rappel important : les f islamiques sont d'ordre divin (Coran 4:11-12). Elles s'imposent à la conscience du Muslim même là où la loi civile diverge. L'effort de les respecter au maximum (dans le cadre légal) est une obligation morale et religieuse."}
          ]
        }],quiz:{id:"quiz-avance-mawarith",title:"Questionnaire — Farāʾiḍ — Mīrāth",status:"available",score:null,questions:[        {
          id:"q-far-01",
          text:"Le Prophète ﷺ a appelé les :",
          choices:[
          {id:"a",text:"Un tiers du savoir"},
          {id:"b",text:"La moitié du savoir"},
          {id:"c",text:"Une obligation facultative"},
          {id:"d",text:"Une discipline secondaire"}
          ],
          correctId:"b",
          explanation:"Hadīth : « Farāʾiḍ... » — les constituent la moitié du savoir islamique. Le Prophète ﷺ a ajouté qu'elles seraient les premières à disparaître — d'où l'urgence de les apprendre et d'enseigner."
        },
        {
          id:"q-far-02",
          text:"Quelles sont les 3 causes d'exclusion du droit d'hériter ?",
          choices:[
          {id:"a",text:"Âge, distance et religion"},
          {id:"b",text:"(meurtre de sa victime), (esclavage) et (différence de religion)"},
          {id:"c",text:"Mariage, adoption et filiation"},
          {id:"d",text:"Pauvreté, distance et déshérence"}
          ],
          correctId:"b",
          explanation:"Les 3 : (1) — le meurtrier n'hérite pas de sa victime ; (2) — l'esclave n'hérite pas ni ne fait hériter (contexte historique) ; (3) — pas d'héritage mutuel entre Muslim et non-Muslim."
        },
        {
          id:"q-far-03",
          text:"Un non-Muslim peut-il hériter de son époux/épouse Muslim(e) en droit islamique ?",
          choices:[
          {id:"a",text:"Oui — le mariage prime"},
          {id:"b",text:"Non — exclut l'héritage mutuel"},
          {id:"c",text:"Oui s'ils ont des enfants"},
          {id:"d",text:"Cela dépend du pays"}
          ],
          correctId:"b",
          explanation:"Principe islamique clair : il n'y a pas d'héritage entre Muslim et non-Muslim en droit islamique. Le non-Muslim ne peut pas hériter de son conjoint Muslim par les règles islamiques, et vice versa. En France, le droit civil s'impose différemment."
        },
        {
          id:"q-far-04",
          text:"La part de l'époux SANS enfant est :",
          choices:[
          {id:"a",text:"1/4"},
          {id:"b",text:"1/6"},
          {id:"c",text:"1/2"},
          {id:"d",text:"1/3"}
          ],
          correctId:"c",
          explanation:"Coran 4:12 : si la femme décède sans enfant, l'époux reçoit 1/2. Si elle a des enfants, il reçoit 1/4. Mnémotechnique : pas d'enfant → moitié ; avec enfant → quart."
        },
        {
          id:"q-far-05",
          text:"La part de l'épouse (ou des épouses) avec enfants est :",
          choices:[
          {id:"a",text:"1/4"},
          {id:"b",text:"1/8"},
          {id:"c",text:"1/6"},
          {id:"d",text:"1/3"}
          ],
          correctId:"b",
          explanation:"Coran 4:12 : l'épouse (ou la part partagée entre plusieurs épouses) reçoit 1/8 si le défunt avait des enfants. Sans enfants → 1/4. En polygamie, les épouses partagent la part unique de 1/8 ou 1/4."
        },
        {
          id:"q-far-06",
          text:"Si un homme décède en laissant : 1 fille + 1 fils du fils. Comment héritent-ils ?",
          choices:[
          {id:"a",text:"Fille : 1/2, fils du fils : rien"},
          {id:"b",text:"Fille : 1/2, fils du fils : du reste (1/2)"},
          {id:"c",text:"Fille : 2/3, fils du fils : 1/3"},
          {id:"d",text:"Tout à la fille"}
          ],
          correctId:"b",
          explanation:"La fille reçoit 1/2 (part fixe coran.). Le fils du fils est (résiduel) et prend le reste (1/2). Si c'était 2 filles : elles prendraient 2/3, le fils du fils 1/3. Le fils du fils n'est exclu que par un fils ou fils de fils plus proche."
        },
        {
          id:"q-far-07",
          text:"Une sœur germaine devient dans quel cas ?",
          choices:[
          {id:"a",text:"En présence d'un frère germain"},
          {id:"b",text:"En présence d'une ou plusieurs filles (sans fils)"},
          {id:"c",text:"Seule sans autres héritiers"},
          {id:"d",text:"En présence d'un époux"}
          ],
          correctId:"b",
          explanation:"La sœur germaine est quand une fille (ou fille du fils) existe sans frère. La fille prend 1/2 (ou les filles 2/3), et la sœur germaine prend le résidu comme. Sans la fille, la sœur germaine aurait sa part de (1/2 ou 2/3)."
        },
        {
          id:"q-far-08",
          text:"Le grand-père est-il exclu par les frères germains ?",
          choices:[
          {id:"a",text:"Oui — comme chez les hanafites"},
          {id:"b",text:"Non — le grand-père n'est pas exclu par les frères/sœurs en rite malikite"},
          {id:"c",text:"Seulement par 3 frères ou plus"},
          {id:"d",text:"Cela dépend du montant de la succession"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite : le grand-père partage avec les frères (et sœurs) selon des règles complexes — il n'est PAS exclu par eux. Chez les hanafites, le grand-père EXCLUT les frères. Chez les malikites, les deux coexistent selon des modalités de l' et autres cas."
        },
        {
          id:"q-far-09",
          text:"La mère reçoit-elle toujours 1/3 ?",
          choices:[
          {id:"a",text:"Oui — sa part est fixe à 1/3"},
          {id:"b",text:"Non — elle reçoit 1/3 sans enfants ni plusieurs frères/sœurs, et 1/6 avec enfants ou plusieurs frères/sœurs"},
          {id:"c",text:"La mère hérite seulement s'il n'y a pas de père"},
          {id:"d",text:"Non — elle hérite seulement si elle est veuve"}
          ],
          correctId:"b",
          explanation:"Coran 4:11 : la mère reçoit 1/3 si le défunt n'a pas d'enfants et ne laisse pas plusieurs frères/sœurs. Sinon elle reçoit 1/6. Elle ne peut jamais être complètement exclue — au minimum 1/6. Ḥajb al-Nuqṣān (réduction) mais jamais Ḥajb al-Ḥajb al-Ḥirmān (exclusion totale)."
        },
        {
          id:"q-far-10",
          text:"Qu'ʿAwl ?",
          choices:[
          {id:"a",text:"Une façon de partager l'héritage entre sœurs"},
          {id:"b",text:"Un ajustement à la hausse du dénominateur quand les parts fixes dépassent 1 — chacun est réduit proportionnellement"},
          {id:"c",text:"Un surplus donné au b"},
          {id:"d",text:"Un type de testament islamique"}
          ],
          correctId:"b",
          explanation:"ʿAwl survient quand les parts fixes totalisent plus de 1 (ex : époux 1/2 + 2 sœurs 2/3 = 7/6). Solution : augmenter le dénominateur (passer à 7) et réduire chaque part proportionnellement. ʿAwl sauf les zaydites."
        },
        {
          id:"q-far-11",
          text:"<strong>CRUCIALE :</strong> Radd (retour du surplus) s'applique-t-il à l'époux/épouse en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — comme à tous les héritiers"},
          {id:"b",text:"Non — l'époux et l'éRadd en rite malikite"},
          {id:"c",text:"Seulement en présence d'enfants"},
          {id:"d",text:"Seulement pour l'époux, pas l'épouse"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite fondamentale : Radd sur le conjoint est INTERDIT. Si reste un surplus sans, Bayt al-Māl (État islamique), PAS à l'époux/épouse. C'est une difféRadd sur le conjoint."
        },
        {
          id:"q-far-12",
          text:"<strong>CALCUL :</strong> Époux + Mère + 2 Sœurs germaines. Calculer les parts.",
          choices:[
          {id:"a",text:"Époux 1/3, mère 1/3, sœurs 1/3"},
          {id:"b",text:"Époux 3/8, mère 1/8, sœurs 4/8 — aprèʿAwl de 6 à 8"},
          {id:"c",text:"Époux 1/2, mère 1/6, sœurs 1/3"},
          {id:"d",text:"Époux 1/4, mère 1/4, sœurs 2/4"}
          ],
          correctId:"b",
          explanation:"Calcul : époux 1/2 (= 3/6) + mère 1/6 + sœurs 2/3 (= 4/6) = 8/6 → ʿAwl. Base 8 : époux 3/8, mère 1/8, 2 sœurs 4/8 (= 2/8 chacune). Total = 8/8 = 1. ✓"
        },
        {
          id:"q-far-13",
          text:"Qui prend le résidu quand une fille hérite avec son frère ?",
          choices:[
          {id:"a",text:"Le frère prend tout, la fille rien"},
          {id:"b",text:"Ils partagent : le frère = 2 parts, la sœur = 1 part"},
          {id:"c",text:"La fille prend tout"},
          {id:"d",text:"Ils partagent à égalité"}
          ],
          correctId:"b",
          explanation:"Quand un frère et une sœur héritent ensemble comme (sans autres héritiers à parts fixes), ils partagent : frère = 2 × sœur. Coran 4:11 : « ». La sœur est devenue par la présence de son frère."
        },
        {
          id:"q-far-14",
          text:"Un homme décède en laissant : une fille seule, sans ni autre héritier. Que reçoit-elle en rite malikite ?",
          choices:[
          {id:"a",text:"1/2 seulement — Bayt al-Māl"},
          {id:"b",text:"Tout (100%) — Radd sur la fille"},
          {id:"c",text:"1/2 et le reste est partagé avec des frères absents"},
          {id:"d",text:"1/3 seulement"}
          ],
          correctId:"b",
          explanation:"La fille seule : part fixe = 1/2. Pas d' → Radd du reste (1/2) sur la fille. Elle prend donc 100%. Radd est permis sur les sauf le conjoint."
        },
        {
          id:"q-far-15",
          text:"<strong>Radd MALIKITE :</strong> Épouse + Fille. Pas d'.",
          choices:[
          {id:"a",text:"Épouse 1/4, fille 3/4"},
          {id:"b",text:"Épouse 1/8, fille 7/8"},
          {id:"c",text:"Épouse 1/8, fille 1/2, reste (3/8) Bayt al-Māl"},
          {id:"d",text:"Fille prend tout"}
          ],
          correctId:"c",
          explanation:"Calcul : épouse 1/8 (avec enfant) + fille 1/2 (= 4/8) = 5/8. Reste 3/8. Malikite : Radd interdit sur l'épouse → les 3/8 Bayt al-Māl. L'épouse garde ses 1/8 et la fille ses 1/2."
        },
        {
          id:"q-far-16",
          text:"Les frères/sœurs utérins sont exclus par :",
          choices:[
          {id:"a",text:"Uniquement par le père"},
          {id:"b",text:"Tout descendant (fils, fille, fils du fils...) ET le père"},
          {id:"c",text:"Les frères germains seulement"},
          {id:"d",text:"L'épouse"}
          ],
          correctId:"b",
          explanation:"Les frères/sœurs utérins sont exclus par : tout descendant (fils, fille, fils du fils, fille du fils) ET le père. Ils ne sont PAS exclus par les grands-parents."
        },
        {
          id:"q-far-17",
          text:"En rite malikite, le mari qui divorce en état de (maladie mortelle) pour priver sa femme de l'héritage :",
          choices:[
          {id:"a",text:"Réussit — la femme n'hérite plus"},
          {id:"b",text:"Ne réussit pas — la femme hérite quand même"},
          {id:"c",text:"Cela dépend de l'accord de la femme"},
          {id:"d",text:"Valide si le divorce est bain"}
          ],
          correctId:"b",
          explanation:"Position malikite : si le mari divorce en Ṭalāq Bāʾin en état de m dans le but manifeste de priver l'épouse de son héritage → la femme hérite quand même. L'Islam protège l'épouse contre cette manœuvre malveillante."
        },
        {
          id:"q-far-18",
          text:"L'enfant adopté hérite-t-il de son父 adoptif en droit islamique ?",
          choices:[
          {id:"a",text:"Oui — comme un fils biologique"},
          {id:"b",text:"Non — l'adoption ne crée pas de (lien de filiation islamique)"},
          {id:"c",text:"Oui jusqu'à 1/3 de la succession"},
          {id:"d",text:"Seulement s'il est mentionné dans le testament"}
          ],
          correctId:"b",
          explanation:"L'Islam interdit le (adoption conférant la filiation) — Coran 33:4-5. L'enfant adopté ne porte pas le nom du père adoptif et n'héNasab. Des alternatives existent : de son vivant, dans le 1/3, assurance-vie islamique."
        },
        {
          id:"q-far-19",
          text:"Comment la du grand-père s'articule-t-elle avec les frères selon l'école malikite ?",
          choices:[
          {id:"a",text:"Le grand-père exclut toujours les frères"},
          {id:"b",text:"Les frères excluent toujours le grand-père"},
          {id:"c",text:"Le grand-père et les frères coexistent selon des règles précises — y compris l'"},
          {id:"d",text:"Ils ont toujours parts égales"}
          ],
          correctId:"c",
          explanation:"Spécificité malikite : le grand-père et les frères/sœurs coexistent, partageant selon des règles précises. L' est le cas le plus célèbre (époux + mère + grand-père + sœur germaine) où l'Imām Mālik a tranché différemment de toutes les autres écoles, créant une règle unique au droit malikite."
        },
        {
          id:"q-far-20",
          text:"Un Muslim en France veut que son fils aîné hérite d'une part plus grande que sa fille (règle islamique). Que peut-il faire légalement ?",
          choices:[
          {id:"a",text:"Rien — la loi française l'interdit"},
          {id:"b",text:"Utiliser la quotité disponible (25-50%) via testament civil pour augmenter la part du fils"},
          {id:"c",text:"Déshériter la fille"},
          {id:"d",text:"Faire un testament islamique non reconnu"}
          ],
          correctId:"b",
          explanation:"La réserve héréditaire française garantit l'égalité des enfants. Mais le testateur peut orienter la quotité disponible (25-50% selon nombre d'enfants) vers le fils pour se rapprocher des parts islamiques. Recommandation de doctrine-malikite.fr : combinaison testament civil (quotité disponible) + donations de son vivant."
        },
        {
          id:"q-far-21",
          text:"<strong>CALCUL SIMPLE :</strong> Père + Mère + 1 Fils. Qui prend quoi ?",
          choices:[
          {id:"a",text:"Père 1/3, mère 1/3, fils 1/3"},
          {id:"b",text:"Père 1/6, mère 1/6, fils (4/6 = 2/3)"},
          {id:"c",text:"Père tout, mère rien"},
          {id:"d",text:"Fils tout, père et mère rien"}
          ],
          correctId:"b",
          explanation:"Avec un fils : père 1/6 + 1/6 mère + fils prend le reste (2/3) comme. Le père et la mère ne sont jamais totalement exclus — au minimum 1/6 chacun."
        },
        {
          id:"q-far-22",
          text:"Quelle est la part des frères/sœurs utérins quand ils héritent ensemble ?",
          choices:[
          {id:"a",text:"1/3 pour chacun"},
          {id:"b",text:"1/6 pour un seul, 1/3 partagé entre plusieurs"},
          {id:"c",text:"Moitié entre eux"},
          {id:"d",text:"Ils ne peuvent jamais hériter ensemble"}
          ],
          correctId:"b",
          explanation:"Coran 4:12 : si le défunt n'a pas d'enfants ni de père, et laisse plusieurs frères/sœurs utérins → ils partagent 1/3. S'il n'en laisse qu'un → il reçoit 1/6. Cette règle est la même homme ou femme (contrairement aux autres frères/sœurs)."
        },
        {
          id:"q-far-23",
          text:"<strong>FRÉQUENT :</strong> Le père hérite-t-il toujours de 1/6 ?",
          choices:[
          {id:"a",text:"Oui — sa part est toujours 1/6"},
          {id:"b",text:"Non — avec un fils : 1/6 fixe + éventuellement du reste ; sans fils et filles : il est pur et prend tout le résidu"},
          {id:"c",text:"Le père hérite seulement s'il n'y a pas de fils"},
          {id:"d",text:"Non — le père hérite 1/3 toujours"}
          ],
          correctId:"b",
          explanation:"Le père a deux situations : (1) en présence d'un fils → père fixe à 1/6 ; (2) en présence de filles seulement (sans fils) → père reçoit 1/6 fixe PLUS le résidu comme ; (3) sans descendants → père est pur, prend tout le résidu (ou tout si pas d'autres héritiers)."
        },
        {
          id:"q-far-24",
          text:"La grand-mère maternelle peut-elle hériter si sa fille (la mère) est vivante ?",
          choices:[
          {id:"a",text:"Oui — elles héritent ensemble"},
          {id:"b",text:"Non — la mère exclut la grand-mère entièrement"},
          {id:"c",text:"Oui mais à 1/12"},
          {id:"d",text:"Seulement la grand-mère du côté du père"}
          ],
          correctId:"b",
          explanation:"La grand-mère maternelle est soumise au Ḥajb al-Ḥajb al-Ḥirmān (exclusion totale) par la mère. Si la mère est vivante → la grand-mère ne reçoit rien. Si la mère est décédée → la grand-mère reçoit 1/6."
        },
        {
          id:"q-far-25",
          text:"Quels héritiers ne sont JAMAIS totalement exclus (au minimum toujours quelque chose) ?",
          choices:[
          {id:"a",text:"Seulement le fils et la fille"},
          {id:"b",text:"L'époux, l'épouse, le père, la mère — et les descendants directs"},
          {id:"c",text:"Tous les héritiers islamiques"},
          {id:"d",text:"Seulement le fils"}
          ],
          correctId:"b",
          explanation:"Héritiers jamais totalement exclus : l'époux (1/2 ou 1/4), l'épouse (1/4 ou 1/8), le père (1/6 minimum), la mère (1/6 minimum), les descendants directs (fils/fille). Tous les autres peuvent être totalement exclus par Ḥajb al-Ḥajb al-Ḥirmān selon les héritiers présents."
        }]}},
    {id:"ayman",title:"Serments et Vœux",arabicTitle:"الأَيمَان والنُّذُور",icon:"seal",description:"Types de serments islamiques, leurs expiations et les règles des vœux selon le rite malikite.",source:"Risāla Ibn Abī Zayd · Mukhtasar Khalīl pp.200-210",badge:{id:"badge-avance-ayman",title:"Expert des Engagements",arabicTitle:"عَارِفُ الأَيمَان",icon:"seal-h",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Aymān Nudhūr"},lessons:[        {
          id:"aym-01",
          title:"Anwāʿ al-Aymān — Les Types de Serments en Islam",
          status:'available',
          content:[
            {"t": "lead", "v": "L' (serment) est une formule solennelle par laquelle on atteste ou promet quelque chose en invoquant Allah. Le Mukhtasar Khalīl (pp. 200-210) et la Risāla distinguent plusieurs types aux règles très différentes."},
            { t:'ar', v:"وَلَا تَجعَلُوا اللَّهَ عُرضَةً لِأَيمَانِكُم", n:"« Ne faites pas d'Allah un prétexte pour vos serments. » — Coran 2:224" },
            {"t": "h", "v": "1. Yamīn al-Ghammūs — Le Serment de Faux Délibéré"},
            {"t": "p", "v": "C'est jurer délibérément sur une chose passée qu'on sait fausse : « je jure par Allah que j'étais chez vous hier » alors qu'on ne l'était pas."},
            { t:'ul', v:[
              "C'est l'un des péchés majeurs.",
              "Il s'appelle (ce qui plonge dans le péché) car il noie son auteur dans la faute.",
              "<strong>Pas de :</strong> ce serment est si grave que la ne suffit pas — Tawba sincère peut l'effacer.",
              "Hadīth : « Les grands péchés sont : l'associationnisme, le manque de piété filiale, le meurtre et le serment de. »"
            ] },
            {"t": "h", "v": "2. Yamīn al-Laghw — Le Serment Involontaire"},
            {"t": "p", "v": "C'est jurer sans réelle intention, par habitude du langage : « non, par Allah ! » ou « oui, par Allah ! » dans la conversation ordinaire."},
            { t:'ul', v:[
              "Coran 2:225 : « Allah ne vous tiendra pas rigueur des serments involontaires. »",
              "Pas de — c'est pardonné.",
              "Mais il est recommandé de limiter ces expressions pour respecter le Nom d'Allah."
            ] },
            {"t": "h", "v": "3. Yamīn al-Munʿaqida — Le Serment Engageant"},
            {"t": "p", "v": "C'est jurer sur une action future avec intention réelle : « je jure par Allah que je ne parlerai plus à X » ou « je jure de faire Y ». C'est le seul qui entraîne une en cas de violation."},
            { t:'ul', v:[
              "Valide seulement si on jure au nom d'Allah.",
              "Jurer par le Prophète ﷺ, par la Kaʿba ou par la vie de quelqu'un → <strong>pas de </strong> selon l'Imām Mālik — ces serments ne sont pas reconnus comme serments islamiques valides.",
              "Si on rompt ce serment → obligatoire.",
              "<strong> :</strong> si on ajoute « » immédiatement après le serment → le serment est exempté de même si rompu. Condition : le dire sans interruption."
            ] },
            {"t": "h", "v": "Sur quoi peut-on jurer ?"},
            { t:'ul', v:[
              "Uniquement par Allah et Ses attributs divins.",
              "Pas par les créatures : prophètes, saints, anges, Coran, Kaʿba — ces serments sont makrūh et n'engagent pas de.",
              "Hadīth : « Celui qui veut jurer, qu'il jure par Allah ou se taise. » — al-Bukhārī et Muslim."
            ] },
            {"t": "note", "v": "Spécificité malikite : l'Imām Mālik considère que jurer par le Coran entraîne une si rompu, alors que jurer « par le Coran » sans mentionner Allah n'est qu'une formule makrūh sans. Cette nuance est propre à l'école malikite."}
          ]
        },
        {
          id:"aym-02",
          title:"Kaffārat al-Yamīn — L'Expiation du Serment Brisé",
          status:'available',
          content:[
            {"t": "lead", "v": "La al-yamīn est l'Yamīn al-Munʿaqida par acte volontaire. Elle est fixée par le Coran (5:89) et précisée par le Mukhtasar Khalīl."},
            { t:'ar', v:"فَكَفَّارَتُهُ إِطعَامُ عَشَرَةِ مَسَاكِينَ مِن أَوسَطِ مَا تُطعِمُونَ أَهلِيكُم أَو كِسوَتُهُم أَو تَحرِيرُ رَقَبَةٍ فَمَن لَم يَجِد فَصِيَامُ ثَلَاثَةِ أَيَّامٍ", n:"Coran 5:89 — La كَفَّارَة du serment brisé" },
            {"t": "h", "v": "Les 3 options au choix (puis le jeûne si impossible)"},
            { t:'ul', v:[
              "<strong>1. Nourrir 10 pauvres :</strong> un repas convenable (« de ce qu'on mange habituellement ») ou l'équivalent en argent selon les savants malikites contemporains.",
              "<strong>2. Habiller 10 pauvres :</strong> un vêtement décent couvrant le minimum (longue chemise ou équivalent) pour chacun.",
              "<strong>3. Libérer un esclave :</strong> non applicable aujourd'hui.",
              "<strong>Jeûner 3 jours :</strong> seulement si les 3 premières options sont impossibles (pauvreté absolue).",
              "<strong>Spécificité malikite sur l'ordre :</strong> les 3 premières options (nourriture, vêtement, esclave) sont au CHOIX du débiteur — pas de hiérarchie entre elles. Contrairement aux ordonnées qui ont un ordre impératif."
            ] },
            {"t": "h", "v": "Quand la est-elle due ?"},
            { t:'ul', v:[
              "Dès qu'on rompt volontairement le serment engageant.",
              "Si on agit d'abord et paye la ensuite → valide.",
              "Si on paye la AVANT de rompre le serment → valide selon l'Imām Mālik (contrairement à l'opinion d'autres savants).",
              "Mukhtasar Khalīl : on peut payer la en argent si l'accès aux pauvres physiques est difficile."
            ] },
            {"t": "h", "v": "Ḥinth — Rompre le serment et ses conséquences"},
            { t:'ul', v:[
              "Si on a juré de ne pas faire X et qu'on le fait →.",
              "Si on a juré de faire X et qu'on ne le fait pas →.",
              "Si on oublie son serment et agit contre → pas de selon l'Imām Mālik (l'oubli est une excuse).",
              "Si on était contraint → pas de."
            ] },
            {"t": "note", "v": "Cas pratique fréquent : Ibrahim jure de ne plus manger de viande. Après quelques jours il change d'avis. Il peut rompre son serment et payer la — c'est même préférable si le serment le prive d'une chose licite et utile. Hadīth : « Si tu jures sur quelque chose puis vois que son contraire est meilleur, fais le meilleur et paye la de ton serment. »"}
          ]
        },
        {
          id:"aym-03",
          title:"Al-Nadhr — Les Vœux Islamiques et leurs Règles",
          status:'available',
          content:[
            {"t": "lead", "v": "Le (vœu) est l'engagement de faire quelque chose pour Allah si une condition se réalise, ou l'engagement pur et simple d'un acte d'adoration. Il est plus contraignant que le serment car il engage envers Allah directement."},
            {"t": "h", "v": "Nadhr"},
            { t:'ul', v:[
              "<strong>Nadhr (conditionnel) :</strong> « si Allah guérit mon père, je jeûnerai 3 jours. » Si la condition se réalise → l'acte devient obligatoire.",
              "<strong>Nadhr (absolu) :</strong> « je fais vœu de prier 2 rakʿāt pour Allah. » → Obligatoire immédiatement.",
              "<strong>Nadhr al-mubāḥ :</strong> vœu portant sur un acte neutre — devient obligatoire une fois prononcé selon certains savants malikites.",
              "<strong>Nadhr :</strong> vœu d'accomplir un péché → NE DOIT PAS être exécuté. Pas de selon l'Imām Mālik — on se repent."
            ] },
            {"t": "h", "v": "Nadhr"},
            { t:'ul', v:[
              "Le Prophète ﷺ a découragé les vœux conditionnels : « ils ne repoussent pas le destin mais n'extraient que ce qui était déjà prédestiné. »",
              "Malgré cela, exécuter un valide est obligatoire : « Que l'homme qui a fait un vœu d'obéir à Allah l'obéisse. » — Hadīth al-Bukhārī.",
              "Si la condition ne se réalise pas → pas d'obligation."
            ] },
            {"t": "h", "v": "Nadhr — Expiation du vœu non tenu"},
            { t:'ul', v:[
              "Si le est possible mais non exécuté → al-yamīn (selon une position malikite).",
              "Si le est impossible à exécuter → al-yamīn.",
              "Mukhtasar Khalīl : si le porte sur quelque chose de makrūh → on le rompt et on paye la.",
              "Spécificité : le à une mosquée précise (Masjid al-Aqsā) — peut être exécuté dans n'importe quelle grande mosquée selon l'Imām Mālik."
            ] },
            {"t": "h", "v": "— Vœu illicite"},
            {"t": "p", "v": "Si quelqu'un fait vœu d'un acte (ex : « je fais vœu de ne plus parler à ma mère »), ce vœu ne doit pas être exécuté. La position malikite : pas de — se repentir suffit car le vœu n'aurait pas dû être fait."},
            {"t": "note", "v": "Distinction importante : le serment engage un acte futur et sa violation entraîne une. Le vœu engage envers Allah directement et est plus grave — on ne peut pas simplement « payer et oublier » comme le serment. L'exécution du est la voie normale ; la n'est qu'un palliatif en cas d'impossibilité."}
          ]
        },
        {
          id:"aym-04",
          title:"Serments et Vœux dans la Vie Quotidienne Contemporaine",
          status:'available',
          content:[
            {"t": "lead", "v": "Les serments et vœux apparaissent dans de nombreuses situations contemporaines : formules juridiques, engagements professionnels, jurements informels. Ce chapitre synthétise les positions malikites appliquées au quotidien."},
            {"t": "h", "v": "Les serments professionnels et juridiques"},
            { t:'ul', v:[
              "<strong>Serment devant tribunal :</strong> « je jure de dire la vérité » — si on prête ce serment au nom d'Allah, c'est une. Mentir sous serment = Yamīn al-Ghammūs = péché majeur.",
              "<strong>Serment d'allégeance ou professionnel :</strong> si fait au nom d'Allah → engageant.",
              "<strong>Serments laïcs (sans mention d'Allah) :</strong> pas de islamique — pas de même si brisés. Ce sont des engagements contractuels.",
              "Doctrine-malikite.fr : les contrats écrits et signatures ont la valeur d'un engagement ferme même sans mention d'Allah."
            ] },
            {"t": "h", "v": "Formules quotidiennes courantes"},
            { t:'ul', v:[
              "« » dans la conversation ordinaire sans intention de jurer → Yamīn al-Laghw.",
              "« » avec intention de s'engager →.",
              "« » (je jure par le Prophète) → pas un serment islamique valide selon l'Imām Mālik — pas de.",
              "« » (par la vie de mon père) → formule culturelle non reconnue comme serment islamique."
            ] },
            {"t": "h", "v": "Situations pratiques avec solutions"},
            { t:'ul', v:[
              "<strong>« J'ai juré de ne pas parler à mon frère »</strong> : si cela nuit aux liens familiaux → rompre le serment et payer la. Le Prophète ﷺ : « le meilleur des serments est celui dont on s'acquitte. »",
              "<strong>Vœu de jeûner un lundi chaque semaine</strong> : vœu valide, obligatoire de l'exécuter si possible.",
              "<strong>Vœu conditionnel exaucé</strong> : « si je réussis mon examen, je donne 200€ aux pauvres » — si exaucé → doit être exécuté.",
              "<strong>Vœu impossible à tenir</strong> : « si je guéris, je ferai le » mais pas les moyens → remplacé par al-yamīn."
            ] },
            {"t": "h", "v": "Les jurements dans l'entreprise et le commerce"},
            {"t": "p", "v": "Les commerçants qui utilisent les serments pour convaincre des clients commettent une faute si le serment est faux. Hadīth : « Méfiez-vous des serments fréquents dans le commerce, car ils peuvent augmenter les ventes mais effacent la bénédiction. »"},
            {"t": "note", "v": "Conseil malikite global : limiter les serments au maximum. Le Coran recommande de tenir ses serments et engage des pour les violations. La meilleure pratique : éviter les formules juratives dans le langage courant et réserver le serment aux situations solennelles nécessaires."}
          ]
        }],quiz:{id:"quiz-avance-ayman",title:"Questionnaire — Aymān Nudhūr",status:"available",score:null,questions:[        {
          id:"q-aym-01",
          text:"Yamīn al-Ghammūs : quelle est sa ?",
          choices:[
          {id:"a",text:"Nourrir 10 pauvres"},
          {id:"b",text:"Jeûner 3 jours"},
          {id:"c",text:"Pas de — seul un repentir sincère peut l'effacer car c'est un péché majeur"},
          {id:"d",text:"Libérer un esclave"}
          ],
          correctId:"c",
          explanation:"Yamīn al-Ghammūs (serment délibérément faux sur le passé) est un péché si grave qu'il n'a pas de — il est au-delà de l'expiation rituelle. Tawba sincère (repentir, regret, résolution) peut l'effacer. C'est une distinction fondamentale dans le fiqh malikite."
        },
        {
          id:"q-aym-02",
          text:"Ibrahim dit en conversation « j'aime ce plat » sans intention de jurer. Y a-t-il une si c'est faux ?",
          choices:[
          {id:"a",text:"Oui — tout serment par Allah engage"},
          {id:"b",text:"Non — c'Yamīn al-Laghw (involontaire), pardonné sans"},
          {id:"c",text:"Makrūh seulement"},
          {id:"d",text:"Oui si répété souvent"}
          ],
          correctId:"b",
          explanation:"Coran 2:225 : « Allah ne vous tiendra pas rigueur des serments involontaires. » Yamīn al-Laghw = formule habituée sans intention de jurer → pas de. Yamīn al-Munʿaqida (avec intention ferme sur le futur) engage une si rompu."
        },
        {
          id:"q-aym-03",
          text:"Peut-on jurer par le Prophète ﷺ en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — c'est une preuve d'amour pour le Prophète"},
          {id:"b",text:"Non — ce n'est pas un serment islamique valide ; pas de même si brisé"},
          {id:"c",text:"Oui avec"},
          {id:"d",text:"Makrūh mais valide"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik : les serments ne sont valides qu'au nom d'Allah et de Ses attributs. Jurer par le Prophète ﷺ, la Kaʿba, ou les parents est interdit (les créatures ne méritent pas ce rang) et ne génère pas de si brisé. Hadīth : « celui qui veut jurer, qu'il jure par Allah ou se taise. »"
        },
        {
          id:"q-aym-04",
          text:"L'ordre des 3 options de al-yamīn est-il impératif ?",
          choices:[
          {id:"a",text:"Oui — nourriture d'abord, puis vêtement, puis esclave"},
          {id:"b",text:"Non — les 3 premières (nourriture, vêtement, esclave) sont au CHOIX libre ; le jeûne seulement si aucune n'est possible"},
          {id:"c",text:"Oui — jeûne d'abord, puis nourriture"},
          {id:"d",text:"Non — le jeûne est toujours préférable"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite : pour al-yamīn, les 3 premières options (nourrir 10 pauvres OU habiller 10 pauvres OU libérer un esclave) sont au choix du débiteur — pas de hiérarchie entre elles. Le jeûne de 3 jours n'est qu'un dernier recours si les 3 autres sont impossibles. Contrairement aux ordonnées comme le."
        },
        {
          id:"q-aym-05",
          text:"Ibrahim peut-il payer la AVANT de rompre son serment ?",
          choices:[
          {id:"a",text:"Non — la ne peut être payée qu'après la violation"},
          {id:"b",text:"Oui — selon l'Imām Mālik, on peut payer la avant de rompre le serment"},
          {id:"c",text:"Seulement pour le jeûne"},
          {id:"d",text:"Non — cela annulerait le serment"}
          ],
          correctId:"b",
          explanation:"Position malikite distinctive : l'Imām Mālik permet de payer la avant de rompre le serment — on s'exécute d'abord, puis on fait ce qu'on avait juré de ne pas faire (ou inversement). Cela offre une flexibilité pratique appréciée."
        },
        {
          id:"q-aym-06",
          text:"Si Ibrahim oublie son serment et agit contre sans le savoir, y a-t-il une ?",
          choices:[
          {id:"a",text:"Oui — l'oubli ne dispense pas"},
          {id:"b",text:"Non — l'Imām Mālik considère que l'oubli est une excuse, pas de"},
          {id:"c",text:"Makrūh mais il doit se souvenir"},
          {id:"d",text:"Seulement s'il se souvient après"}
          ],
          correctId:"b",
          explanation:"Position malikite : l'oubli est une excuse dans les serments — si Ibrahim rompt son serment en ayant oublié qu'il l'avait fait, pas de. De même pour la contrainte. La n'est due que pour la violation volontaire et consciente."
        },
        {
          id:"q-aym-07",
          text:"Nadia fait vœu : « si j'obtiens ce poste, je jeûnerai 3 jours ». Elle obtient le poste. Ce jeûne est-il :",
          choices:[
          {id:"a",text:"Sounnah seulement"},
          {id:"b",text:"Obligatoire — le conditionnel accompli devient contraignant"},
          {id:"c",text:"Facultatif"},
          {id:"d",text:"À remplacer par la"}
          ],
          correctId:"b",
          explanation:"Hadīth (al-Bukhārī) : « Que l'homme qui a fait un vœu d'obéir à Allah l'obéisse. » Le (conditionnel) devient obligatoire dès que la condition est réalisée. Nadia doit jeûner 3 jours — c'est une obligation religieuse, pas une recommandation."
        },
        {
          id:"q-aym-08",
          text:"Ibrahim fait vœu de ne plus parler à son frère. Doit-il l'exécuter ?",
          choices:[
          {id:"a",text:"Oui — tout vœu est obligatoire"},
          {id:"b",text:"Non — c'est un (vœu d'une chose nuisible aux liens familiaux) ; il ne doit pas l'exécuter et se repent"},
          {id:"c",text:"Oui avec la permission de l'imam"},
          {id:"d",text:"Oui si son frère a fait du mal"}
          ],
          correctId:"b",
          explanation:"Le ou portant sur une chose illicite/nuisible ne doit pas être exécuté. Couper les liens familiaux est — on ne peut pas s'y engager par vœu. Position malikite : pas de pour ce type de, juste le repentir."
        },
        {
          id:"q-aym-09",
          text:"Peut-on rompre un serment qui prive d'une chose bonne et utile ?",
          choices:[
          {id:"a",text:"Non — tout serment doit être tenu"},
          {id:"b",text:"Oui — si son contraire est meilleur, rompre et payer la est préférable"},
          {id:"c",text:"Seulement avec permission d'un imam"},
          {id:"d",text:"Oui mais seulement après 40 jours"}
          ],
          correctId:"b",
          explanation:"Hadīth du Prophète ﷺ : « Si tu jures sur quelque chose puis vois que son contraire est meilleur, accomplis ce qui est meilleur et paye la de ton serment. » Ex : jurer de ne plus prendre soin de ses parents puis réaliser l'erreur → rompre et payer la."
        },
        {
          id:"q-aym-10",
          text:"Ibrahim signe un contrat professionnel. Si l'Allah n'est pas mentionné, y a-t-il un serment islamique ?",
          choices:[
          {id:"a",text:"Oui — tout engagement écrit est un serment"},
          {id:"b",text:"Non — pas de islamique sans mention d'Allah ; mais c'est un engagement contractuel qui engage civilement et moralement"},
          {id:"c",text:"Oui si le contrat est entre Muslims"},
          {id:"d",text:"Non — les contrats civils ne comptent pas en Islam"}
          ],
          correctId:"b",
          explanation:"Le serment islamique nécessite la mention d'Allah. Sans cela, pas de islamique et pas de si rompu. En revanche, les contrats écrits sont des engagements moraux et civils sérieux selon doctrine-malikite.fr — les violer est fautif même sans rituelle."
        },
        {
          id:"q-aym-11",
          text:"Si le accompli est impossible, que faire ?",
          choices:[
          {id:"a",text:"Attendre d'en avoir les moyens, même 20 ans"},
          {id:"b",text:"Payer la al-yamīn en remplacement"},
          {id:"c",text:"Le vœu est annulé automatiquement"},
          {id:"d",text:"Donner en aumône le prix du"}
          ],
          correctId:"b",
          explanation:"Si le est devenu impossible à exécuter → position malikite : al-yamīn (nourrir 10 pauvres, habiller 10 pauvres, ou jeûner 3 jours). Cela libère le débiteur de son engagement sans le culpabiliser à vie."
        },
        {
          id:"q-aym-12",
          text:"Ibrahim jure « » (par le Coran) sans mentionner le nom d'Allah. Y a-t-il une si rompu ?",
          choices:[
          {id:"a",text:"Oui — jurer par le Coran = jurer par Allah"},
          {id:"b",text:"Divergence malikite : jurer « » (avec Allah) → ; jurer « » seul → makrūh mais pas de selon une position"},
          {id:"c",text:"Non — le Coran n'est pas Allah"},
          {id:"d",text:"Oui car le Coran est parole d'Allah"}
          ],
          correctId:"b",
          explanation:"Nuance malikite fine : « » → serment plein avec. « » sans mention explicite d'Allah → divergence. Certains savants malikites assimilent le Coran (parole d'Allah) à un attribut divin →. D'autres considèrent ce serment comme makrūh mais sans. L'Imām Mālik lui-même penchait vers la prudence."
        },
        {
          id:"q-aym-13",
          text:"La al-yamīn peut-elle être payée en argent à la place de la nourriture ou des vêtements ?",
          choices:[
          {id:"a",text:"Non — seulement en nature (nourriture physique ou vêtements)"},
          {id:"b",text:"Oui — les savants malikites contemporains permettent le paiement en argent si accès aux pauvres difficile"},
          {id:"c",text:"Seulement dans les pays non musulmans"},
          {id:"d",text:"Seulement pour le jeûne"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl et doctrine-malikite.fr : les savants malikites contemporains permettent de donner l'équivalent monétaire (valeur d'un repas × 10 ou valeur d'un vêtement × 10) si la distribution en nature est difficile. L'essentiel est que les pauvres bénéficient de l'aide."
        },
        {
          id:"q-aym-14",
          text:"Un commerçant jure souvent « » pour convaincre ses clients. C'est :",
          choices:[
          {id:"a",text:"Permis — les commerçants ont le droit de convaincre"},
          {id:"b",text:"Fortement déconseillé — Hadīth : les serments fréquents dans le commerce effacent la bénédiction"},
          {id:"c",text:"Makrūh seulement si répété plus de 3 fois"},
          {id:"d",text:"Permis si les affirmations sont vraies"}
          ],
          correctId:"b",
          explanation:"Hadīth : « » — les serments fréquents font vendre mais effacent la (bénédiction). C'est une pratique déconseillée, surtout si les serments sont parfois mensongers."
        },
        {
          id:"q-aym-15",
          text:"Quels serments n'entraînent PAS de même si brisés ?",
          choices:[
          {id:"a",text:"Aucun — tout serment engage une"},
          {id:"b",text:"Yamīn al-Ghammūs (intentionnellement faux) Yamīn al-Laghw (involontaire) n'ont pas de"},
          {id:"c",text:"Seulement les serments faits en plaisantant"},
          {id:"d",text:"Seulement les serments faits par oubli"}
          ],
          correctId:"b",
          explanation:"Récapitulatif : Yamīn al-Laghw (involontaire) → pas de (pardonné). Yamīn al-Ghammūs (délibérément faux sur le passé) → pas de mais péché majeur, Tawba. Yamīn al-Munʿaqida (serment sur action future volontaire) → si rompu."
        }]}},
    {id:"qadhaa",title:"Témoignages et Justice",arabicTitle:"الشَّهَادَات وal-qaḍāʾ (القَضَاء)",icon:"balance",description:"Conditions du témoin équitable, types de preuves et administration de la justice islamique.",source:"Mukhtasar Khalīl pp.210-240 · doctrine-malikite.fr",badge:{id:"badge-avance-qadhaa",title:"Juriste du Droit Judiciaire",arabicTitle:"فَقِيهُ al-qaḍāʾ (القَضَاء)",icon:"gavel",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Shahādāt Qaḍāʾ"},lessons:[        {
          id:"qad-01",
          title:"Al-Shāhid et l'ʿAdāla — Le Témoin et sa Probité Morale",
          status:'available',
          content:[
            {"t": "lead", "v": "La (témoignage) est le premier moyen de preuve en droit islamique. Pour être recevable, le témoin doit satisfaire des conditions précises qui garantissent sa crédibilité. Le Mukhtasar Khalīl (pp. 210-230) détaille ces exigences."},
            {"t": "h", "v": "Shāhid — Les conditions"},
            { t:'ul', v:[
              "<strong>1. Islām :</strong> seul le Muslim peut témoigner sur un Muslim. Exception : témoignage d'Ahl al-Kitāb sur les non-Muslims entre eux.",
              "<strong>2. :</strong> l'enfant pré-pubère ne peut pas témoigner. Exception malikite : témoignage des garçons pré-pubères entre eux dans les affaires mineures (blessures légères, etc.).",
              "<strong>3. :</strong> sain d'esprit au moment du témoignage.",
              "<strong>4. :</strong> condition historique, non applicable aujourd'hui.",
              "<strong>5. ʿAdāla :</strong> la condition la plus importante — voir détail ci-dessous.",
              "<strong>6. :</strong> pas de conflit d'intérêt avec l'affaire."
            ] },
            {"t": "h", "v": "ʿAdāla — L'honorabilité du témoin"},
            {"t": "p", "v": "L'ʿAdāla est la qualité morale qui rend le témoignage recevable. Mukhtasar Khalīl en précise les composantes :"},
            { t:'ul', v:[
              "Pratiquer les obligations islamiques (prières, jeûne…) sans les abandonner habituellem.",
              "Éviter les péchés majeurs.",
              "Ne pas pratiquer les péchés mineurs de manière répétée.",
              "Maintenir un comportement social honorable — même les actes licites mais qui portent atteinte à la dignité sociale (manger dans la rue, etc. selon les contextes culturels).",
              "L'ʿAdāla est présumée chez tout Muslim apparent — sauf preuve contraire."
            ] },
            {"t": "h", "v": "Jarḥ wa-Taʿdīl — Récusation et validation"},
            { t:'ul', v:[
              "Si un témoin est ʿAdāla (déchu de son honorabilité) → son témoignage est irrecevable.",
              "Le juge peut demander une enquête sur l'honorabilité du téTazkiya avant d'accepter son témoignage.",
              "Les motifs de (récusation) : condamné pour fausse accusation, criminel, menteur notoire, ennemi de la partie adverso.",
              "Spécificité malikite : le serment d'Tazkiya dans certains cas simples."
            ] },
            {"t": "note", "v": "Le témoignage de l'ennemi contre son ennemi est irrecevable en rite malikite — même s'il est habituellement honorable. Le conflit d'intérêt personnel disqualifie le témoin, quelle que soit sa vertu générale."}
          ]
        },
        {
          id:"qad-02",
          title:"Anwāʿ al-Bayyina — Types et Nombres de Preuves en Justice",
          status:'available',
          content:[
            {"t": "lead", "v": "Selon la nature de l'affaire, le nombre de témoins requis et les types de preuves admissibles varient. Le rite malikite a une position originale sur plusieurs questions : le témoignage de la femme, Bayyina populaire, et la règle +."},
            {"t": "h", "v": "Règle générale : 2 hommes équitables"},
            { t:'ul', v:[
              "La règle de base pour les affaires civiles et pénales graves : 2 hommes équitables.",
              "Coran 2:282 : « Faites témoigner deux hommes équitables parmi vous. »",
              "Un homme + 2 femmes : admissible dans les affaires financières.",
              "Femmes seules : admissible dans ce que les hommes ne voient pas habituellement (accouchement, défauts du corps féminin, etc.) — spécificité malikite."
            ] },
            {"t": "h", "v": "+ — Témoignage unique + serment du demandeur"},
            {"t": "p", "v": "<strong>Position malikite originale :</strong> dans les affaires financières (créances, ventes, dettes), un SEUL témoin + le serment du demandeur sur la vérité de sa réclamation peut suffire pour obtenir gain de cause."},
            { t:'ul', v:[
              "Hadīth : le Prophète ﷺ a statué avec un seul témoin et le serment du demandeur (Muslim).",
              "S'applique aux (créances) et aux affaires civiles financières.",
              "Ne s'Ḥudūd (peines coraniques) Qiṣāṣ.",
              "Position propre au rite malikite et chāfiʿite — les hanafites ne l'admettent pas."
            ] },
            {"t": "h", "v": "Istifāḍa — La Notoriété Publique"},
            {"t": "p", "v": "<strong>Spécificité malikite distinctive :</strong> la notoriété Istifāḍa peut constituer une preuve pour : le mariage, la filiation, le décès, la possession de longue date d'un bien. Si toute la communauté sait que X est marié à Y → pas besoin de témoins formels."},
            {"t": "h", "v": "4 témoins — Domaine exclusif du al-zinā"},
            { t:'ul', v:[
              "La (adultère) nécessite 4 témoins oculaires ayant vu l'acte consommé — condition quasi impossible à réunir.",
              "Si moins de 4 témoins → accusation de (fausse accusation) contre les témoins.",
              "Ce seuil extrêmement élevé protège la réputation et la vie privée des individus.",
              "Les confessions peuvent remplacer les témoins pour les — voir leçon suivante."
            ] },
            {"t": "note", "v": "Tableau récapitulatif des preuves selon le rite malikite : graves → 4 témoins ou 2 témoins (reste) ; → 2 hommes ; → 2 hommes OU 1 homme + 2 femmes OU + ; intime → femmes seules suffisent."}
          ]
        },
        {
          id:"qad-03",
          title:"Iqrār et Yamīn — L'Aveu et le Serment Judiciaire",
          status:'available',
          content:[
            {"t": "lead", "v": "L'Iqrār (aveu) est le moyen de preuve le plus fort en droit islamique — « » (le maître des preuves). L' (serment judiciaire) est un autre outil essentiel pour trancher les litiges."},
            {"t": "h", "v": "Iqrār — L'Aveu"},
            { t:'ul', v:[
              "L'aveu du défendant sur lui-même est la preuve la plus forte.",
              "<strong>Conditions de validité :</strong> libre (pas sous contrainte), conscient, capable, portant sur un droit propre (pas sur un tiers).",
              "L'aveu peut être rétracté avant l'exécution de la peine pour les — le repentir peut y mettre fin.",
              "Mukhtasar Khalīl : si l'avocat d'une partie reconnaît un fait en audience → c'est un qui l'engage.",
              "<strong>Spécificité malikite :</strong> l'aveu partiel est traité au cas par cas — avouer la dette mais nier les intérêts, par exemple."
            ] },
            {"t": "h", "v": "al-yamīn — Le Serment Judiciaire"},
            { t:'ul', v:[
              "<strong> :</strong> si le demandeur n'a pas de preuve → le défendeur jure et gagne. « Bayyina al-yamīn. »",
              "<strong> :</strong> si le défendeur refuse de jurer → le juge peut rejeter sa demande ou condamner sur la base du refus.",
              "<strong> Qaḍāʾ :</strong> le juge lui-même peut demander un serment supplémentaire dans certains cas douteux.",
              "Mukhtasar Khalīl : le refus de prêNukūl vaut condamnation dans les droits civils."
            ] },
            {"t": "h", "v": "Nukūl — Le Refus de Jurer"},
            {"t": "p", "v": "Si le défendeur refuse de jurer → que se passe-t-il en rite malikite ?"},
            { t:'ul', v:[
              "Le refus de jurer est traité comme une preuve partielle contre le défendeur.",
              "Le juge peut alors renvoyer le serment au demandeur — si le demandeur jure → il gagne.",
              "En matière de → Nukūl ne suffit pas pour condamner, la preuve directe est toujours requise.",
              "Application contemporaine : dans les arbitrages islamiques, le refus de témoigner ou de coopérer pèse contre la partie récalcitrante."
            ] },
            { t:'ar', v:"al-bayyina (البَيِّنَة)ُ عَلَى المُدَّعِي وَal-yamīn (اليَمِين)ُ عَلَى مَن أَنكَرَ", n:"« La preuve incombe au demandeur et le serment à celui qui nie. » — Hadīth (al-Bukhārī et Muslim)" },
            {"t": "note", "v": "Principe général du droit de la preuve islamique : — la présomption d'innocence. Le demandeur doit prouver sa réclamation. Le défendeur n'est condamné que sur preuve ou aveu — pas sur simple affirmation de l'adversaire."}
          ]
        },
        {
          id:"qad-04",
          title:"Al-Qaḍāʾ — Le Juge et l'Administration de la Justice Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "Le (système judiciaire islamique) est l'institution par laquelle Allah's loi est appliquée dans les litiges. Le Mukhtasar Khalīl (pp. 230-240) précise les conditions du juge et les règles du procès."},
            {"t": "h", "v": "— Conditions du Juge"},
            { t:'ul', v:[
              "<strong>Muslim :</strong> un non-Muslim ne peut pas juger entre Muslims.",
              "<strong>Pubère, sain d'esprit, libre :</strong> conditions standard.",
              "<strong>ʿAdāla :</strong> honorabilité requise — le juge corrompu est révoqué.",
              "<strong>Ijtihād :</strong> connaissance suffisante du pour statuer ou référencer — pas besoin d'être le plus grand savant.",
              "<strong>Spécificité malikite sur le sexe :</strong> la majorité des savants malikites ne permettent pas à une femme d'être — sauf dans les affaires civiles selon une opinion minoritaire.",
              "Condition pratique contemporaine : le qāḍī doit connaître les lois du pays où il exerce pour coordonner Islam et civil."
            ] },
            {"t": "h", "v": "— Règles de Conduite du Juge"},
            { t:'ul', v:[
              "Ne pas juger en état de colère, fatigue, faim ou maladie forte.",
              "Écouter les deux parties équitablement avant de statuer.",
              "Ne pas recevoir de cadeaux des plaideurs.",
              "Rédiger ses jugements par écrit.",
              "Hadīth : « Le juge ne doit pas statuer entre deux parties alors qu'il est en colère. » — al-Bukhārī et Muslim."
            ] },
            {"t": "h", "v": "— L'Exécution des Jugements"},
            { t:'ul', v:[
              "Le jugement islamique est exécutoire dès sa prononciation.",
              "Un jugement rendu par erreur peut être révoqué si l'erreur est prouvée.",
              "Le juge peut déléguer l'exécution à des agents.",
              "Mukhtasar Khalīl : si deux juges rendent des jugements contradictoires → le premier jugement prévaut."
            ] },
            {"t": "h", "v": "Fatwā Qaḍāʾ — Avis juridique vs Jugement"},
            {"t": "p", "v": "Distinction importante : le (donneur de fatwa) conseille sans trancher — son avis n'est pas exécutoire. Le (juge) tranche et son jugement est exécutoire. Une fatwa devient exécutoire seulement si un juge l'adopte comme jugement."},
            {"t": "note", "v": "Application contemporaine en France et en Europe : les instances islamiques (conseils, imams, daʿwa) peuvent rendre des fatwas et des avis moraux. Les arbitrages islamiques (médiation familiale, litiges commerciaux) ne sont exécutoires que s'ils sont homologués par un juge civil. Doctrine-malikite.fr recommande de combiner médiation islamique + recours civil pour les affaires importantes."}
          ]
        },
        {
          id:"qad-05",
          title:"Justice Islamique en Occident — Applications Contemporaines",
          status:'available',
          content:[
            {"t": "lead", "v": "Shahādāt Qaḍāʾ s'appliquent-ils pour les Muslims vivant en pays non-islamique ? Synthèse des positions de doctrine-malikite.fr et des savants malikites contemporains."},
            {"t": "h", "v": "La justice civile et son rapport à la justice islamique"},
            { t:'ul', v:[
              "En pays non-islamique, les Muslims sont tenus de respecter la loi civile locale.",
              "Recourir aux tribunaux civils pour les litiges est permis — et souvent obligatoire.",
              "Le Muslim ne doit pas mentir ni falsifier devant un tribunal civil même non islamique.",
              "Doctrine-malikite.fr : le serment judiciaire civil engage le Muslim car il est prononcé par la parole — la crainte d'Allah doit gouverner son témoignage."
            ] },
            {"t": "h", "v": "La médiation islamique contemporaine"},
            { t:'ul', v:[
              "De nombreuses communautés islamiques en Occident pratiquent la médiation familiale islamique (avant ou parallèlement au tribunal civil).",
              "Le (consulter des savants) pour résoudre un litige avant les tribunaux est recommandé.",
              "Les accords de médiation islamique peuvent être homologués par un juge civil s'ils respectent la loi locale.",
              "En matière de divorce : les modalités islamiques ont besoin d'être accompagnées d'une procédure civile pour avoir force légale."
            ] },
            {"t": "h", "v": "Témoignage du Muslim en tribunal"},
            { t:'ul', v:[
              "Le Muslim peut témoigner devant un tribunal non-islamique.",
              "Il doit dire la vérité — Yamīn al-Ghammūs reste quel que soit le tribunal.",
              "S'il témoigne sous serment en invoquant Allah → engagement islamique complet.",
              "S'il témoigne sans serment religieux → engagement moral et civil mais pas de islamique si faux."
            ] },
            {"t": "h", "v": "— Recours contre les injustices"},
            {"t": "p", "v": "En l'absence d'un tribunal islamique, le Muslim peut recourir aux instances civiles pour faire valoir ses droits. Le principe : « » — le droit se réclame par tous les moyens licites."},
            {"t": "note", "v": "Doctrine-malikite.fr sur les litiges d'héritage en France : les héritiers Muslims qui souhaitent appliquer les parts islamiques peuvent conclure une convention successorale privée entre eux après le règlement civil — ce document n'a pas de valeur légale civile mais a une valeur religieuse et morale pour les signataires."}
          ]
        }],quiz:{id:"quiz-avance-qadhaa",title:"Questionnaire — Shahādāt Qaḍāʾ",status:"available",score:null,questions:[        {
          id:"q-qad-01",
          text:"L'ʿAdāla (honorabilité) du témoin est présumée chez tout Muslim. Que faut-il pour la réfuter ?",
          choices:[
          {id:"a",text:"Une accusation verbale suffit"},
          {id:"b",text:"Une preuve concrète : condamnation passée, témoignage notoire de mensonge, péché majeur connu"},
          {id:"c",text:"L'opinion de l'adversaire"},
          {id:"d",text:"Une fatwa d'un imam"}
          ],
          correctId:"b",
          explanation:"L'ʿAdāla est présumée chez tout Muslim en apparence. Pour la réfuter, il faut apporter une preuve solide : condamnation pour fausse accusation, péché majeur notoire, mensonge habituel. La simple suspicion ou l'hostilité de l'adversaire ne suffit pas."
        },
        {
          id:"q-qad-02",
          text:"Des femmes seules peuvent-elles témoigner valablement dans certains cas ?",
          choices:[
          {id:"a",text:"Non — le témoignage féminin est toujours insuffisant seul"},
          {id:"b",text:"Oui — dans les domaines que les hommes ne voient pas habituellement (accouchement, corps féminin intime, etc.)"},
          {id:"c",text:"Seulement si 4 femmes"},
          {id:"d",text:"Seulement en présence d'un homme"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite : le témoignage de femmes seules est valide dans les affaires réservées au domaine féminin — accouchement, défauts du corps féminin, allaitement... Ce sont des situations où les hommes ne peuvent pas habituellement assister, donc leur témoignage serait par nature absent."
        },
        {
          id:"q-qad-03",
          text:"<strong>ORIGINALE :</strong> Dans une affaire de créance, un seul témoin peut-il suffire ?",
          choices:[
          {id:"a",text:"Non — toujours 2 témoins minimum"},
          {id:"b",text:"Oui — un seul témoin + le serment du demandeur suffit pour les affaires financières"},
          {id:"c",text:"Seulement si le défendeur est absent"},
          {id:"d",text:"Non — la femme doit compléter à 2"}
          ],
          correctId:"b",
          explanation:"Position malikite et chāfiʿite :, un seul témoin + serment du demandeur = preuve suffisante. Hadīth : le Prophète ﷺ a statué avec un + dans les affaires de dette. Les hanafites n'admettent pas ce mode de preuve. Ne s'applique pas aux Qiṣāṣ."
        },
        {
          id:"q-qad-04",
          text:"Qu'est-ce que l'Istifāḍa et quelle est sa valeur probante ?",
          choices:[
          {id:"a",text:"Un type de serment collectif"},
          {id:"b",text:"La notoriété publique constante — peut constituer une preuve pour le mariage, la filiation et la possession de longue date"},
          {id:"c",text:"Un témoignage indirect"},
          {id:"d",text:"Un jugement rendu par défaut"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite notable : Istifāḍa (notoriété publique constante) peut prouver des faits comme le mariage, la filiation, le décès ou la possession prolongée. Si toute la communauté sait de manière constante que X possède tel bien depuis 30 ans → c'est une preuve malikite valide sans témoins formels."
        },
        {
          id:"q-qad-05",
          text:"Combien de témoins faut-il pour prouver la (adultère) et permettre l'application du ?",
          choices:[
          {id:"a",text:"1 témoin"},
          {id:"b",text:"2 témoins"},
          {id:"c",text:"3 témoins"},
          {id:"d",text:"4 témoins ayant vu l'acte consommé"}
          ],
          correctId:"d",
          explanation:"Coran 4:15 et 24:4 : la nécessite 4 témoins oculaires ayant vu l'acte sexuel consommé. Ce seuil quasi impossible protège la vie privée. Si moins de 4 témoins se présentent → ils risquent eux-mêmes le du (fausse accusation)."
        },
        {
          id:"q-qad-06",
          text:"Le défendeur refuse de prêNukūl. En rite malikite, que se passe-t-il ?",
          choices:[
          {id:"a",text:"Il est automatiquement condamné"},
          {id:"b",text:"Le juge peut renvoyer le serment au demandeur — si ce dernier jure, il gagne"},
          {id:"c",text:"L'affaire est classée"},
          {id:"d",text:"Le refus n'a aucune conséquence"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : Nukūl (refus de jurer) peut conduire le juge à renvoyer le serment au demandeur. Si le demandeur jure sur la vérité de sa réclamation → il gagne. Le refus de jurer n'est pas une condamnation directe mais pèse lourdement contre le défendeur dans les litiges civils."
        },
        {
          id:"q-qad-07",
          text:"La règle « Bayyina » signifie :",
          choices:[
          {id:"a",text:"Le défendeur doit toujours prouver son innocence"},
          {id:"b",text:"C'est le demandeur qui doit apporter la preuve de sa réclamation — la présomption d'innocence protège le défendeur"},
          {id:"c",text:"Les preuves sont partagées entre les deux parties"},
          {id:"d",text:"Le juge apporte les preuves lui-même"}
          ],
          correctId:"b",
          explanation:"Hadīth fondamental : « Bayyina al-yamīn » — la preuve incombe au demandeur, le serment (de déni) au défendeur. C'est le principe de présomption d'innocence islamique : — l'innocence est l'état par défaut."
        },
        {
          id:"q-qad-08",
          text:"L'aveu sous contrainte est-il valide en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — un aveu est toujours valide"},
          {id:"b",text:"Non — l'aveu sous contrainte n'est pas valide ; la liberté est une condition de l'Iqrār"},
          {id:"c",text:"Valide pour les affaires civiles, pas pour les"},
          {id:"d",text:"Valide si répété 3 fois"}
          ],
          correctId:"b",
          explanation:"L'Iqrār (aveu) n'est valide que s'il est libre, conscient et volontaire. Un aveu obtenu sous contrainte physique ou psychologique est nul. C'est une garantie fondamentale du droit islamique contre les aveux forcés — particulièrement importante pour les."
        },
        {
          id:"q-qad-09",
          text:"Un juge islamique peut-il statuer en état de colère ?",
          choices:[
          {id:"a",text:"Oui si sa décision reste juste"},
          {id:"b",text:"Non — Hadīth : le juge ne doit pas statuer en état de colère, fatigue ou forte maladie"},
          {id:"c",text:"Oui en cas d'urgence"},
          {id:"d",text:"Seulement s'il explique pourquoi"}
          ],
          correctId:"b",
          explanation:"Hadīth du Prophète ﷺ (al-Bukhārī et Muslim) : « » — « qu'aucun juge ne statue entre deux parties alors qu'il est en colère. » Cette règle s'étend à toute situation altérant le jugement : fatigue extrême, faim, maladie grave, stress intense."
        },
        {
          id:"q-qad-10",
          text:"La est-elle exécutoire comme un jugement ?",
          choices:[
          {id:"a",text:"Oui — la fatwa d'un grand savant est obligatoire"},
          {id:"b",text:"Non — la fatwa est un avis consultatif non exécutoire ; seul le du est exécutoire"},
          {id:"c",text:"Oui si les deux parties l'acceptent"},
          {id:"d",text:"Oui dans les affaires familiales"}
          ],
          correctId:"b",
          explanation:"Distinction fondamentale : la est un avis juridique consultatif ) — elle s'impose moralement mais n'est pas exécutoire légalement. Le du juge est exécutoire. Une fatwa ne devient exécutoire que si un juge l'adopte comme jugement."
        },
        {
          id:"q-qad-11",
          text:"Ibrahim témoigne devant un tribunal français après avoir prêté serment sur la Bible. Y a-t-il un engagement islamique ?",
          choices:[
          {id:"a",text:"Non — seulement les serments sur le Coran engagent"},
          {id:"b",text:"Le serment civil (même sur la Bible) engage moralement un Muslim — mentir est quel que soit le tribunal"},
          {id:"c",text:"Oui si la Bible est traduction arabe"},
          {id:"d",text:"Non — le serment sur la Bible n'est pas islamiquement valide"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : un Muslim qui témoigne sous serment devant un tribunal civil est moralement et islamiquement engagé à dire la vérité. Mentir constitue un parjure islamique grave. La légitimité du tribunal ne diminue pas l'obligation de vérité."
        },
        {
          id:"q-qad-12",
          text:"La majorité des savants malikites classiques autorisent-ils une femme à être (juge) ?",
          choices:[
          {id:"a",text:"Oui — sans restriction"},
          {id:"b",text:"Non — la majorité des savants malikites classiques ne le permettent pas"},
          {id:"c",text:"Oui dans les affaires civiles uniquement"},
          {id:"d",text:"Oui si nommée par le calife"}
          ],
          correctId:"b",
          explanation:"La majorité des savants malikites classiques n'autorisent pas une femme à être. C'est aussi la position hanbalite et chāfiʿite dominante. Les hanafites l'autorisent dans les affaires civiles. Certains savants malikites contemporains reconsidèrent cette position dans le contexte contemporain."
        },
        {
          id:"q-qad-13",
          text:"Deux juges islamiques rendent des jugements contradictoires sur la même affaire. Selon Mukhtasar Khalīl, lequel prévaut ?",
          choices:[
          {id:"a",text:"Le jugement le plus récent"},
          {id:"b",text:"Le jugement rendu en premier"},
          {id:"c",text:"Celui du juge le plus expérimenté"},
          {id:"d",text:"On annule les deux et on recommence"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : en cas de jugements contradictoires, le PREMIER jugement rendu prévaut — il est passé en force de chose jugée. Le second juge n'aurait pas dû statuer sur une affaire déjà jugée."
        },
        {
          id:"q-qad-14",
          text:"Des Muslim en France peuvent-ils conclure une convention successorale privée islamique après le règlement civil ?",
          choices:[
          {id:"a",text:"Non — illégal en France"},
          {id:"b",text:"Oui — sans valeur légale civile mais valeur religieuse et morale entre signataires"},
          {id:"c",text:"Oui avec force légale complète"},
          {id:"d",text:"Non — interdit par la fatwa du CFCM"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : après le règlement successoral civil (qui s'impose légalement), les héritiers Muslims peuvent conclure entre eux une convention privée pour redistribuer selon les parts islamiques. Ce document est moralement contraignant entre Muslims mais n'a pas de force légale civile. C'est une pratique recommandée pour respecter les dans le contexte français."
        },
        {
          id:"q-qad-15",
          text:"L'Iqrār (aveu) peut-il être rétracté après avoir été prononcé ?",
          choices:[
          {id:"a",text:"Non — l'aveu est irrévocable"},
          {id:"b",text:"Oui pour les — la rétractation peut empêcher l'exécution de la peine selon certains savants"},
          {id:"c",text:"Oui pour toutes les affaires"},
          {id:"d",text:"Non sauf si prononcé par erreur"}
          ],
          correctId:"b",
          explanation:"Pour les (peines coraniques), certains savants malikites permettent la rétractation de l'aveu avant l'exécution — le doute dans les est toujours favorable à l'accusé. Pour les droits civils (créances, dommages), la rétractation de l'aveu est généralement irrecevable une fois prononcé devant le juge."
        },
        {
          id:"q-qad-16",
          text:"Le témoignage de l'ennemi déclaré contre son ennemi est-il recevable ?",
          choices:[
          {id:"a",text:"Oui — si le témoin est par ailleurs honorable"},
          {id:"b",text:"Non — le conflit d'intérêt disqualifie le témoin quel que soit son honorabilité générale"},
          {id:"c",text:"Seulement dans les affaires financières"},
          {id:"d",text:"Oui si deux autres témoins confirment"}
          ],
          correctId:"b",
          explanation:"Mukhtasar Khalīl : (absence de conflit d'intérêt) est une condition du témoignage. L'ennemi déclaré témoignant contre son ennemi est disqualifié — même s'il est habituellement honorable. Le conflit d'intérêt personnel crée une présomption de partialité irréfutable."
        },
        {
          id:"q-qad-17",
          text:"Qu'Tazkiya en procédure islamique ?",
          choices:[
          {id:"a",text:"Le paiement des frais de justice"},
          {id:"b",text:"L'enquête effectuée par le juge pour vérifier l'ʿAdāla d'un témoin avant d'accepter son témoignage"},
          {id:"c",text:"La lecture du Coran avant l'audience"},
          {id:"d",text:"La signature des parties sur le jugement"}
          ],
          correctId:"b",
          explanation:"Tazkiya est la vérification de l'honorabilité d'un témoin par le juge ou ses enquêteurs. Le juge peut demander à des personnes de confiance dans la communauté de confirmer que le témoin est honnête, pratiquant et sans péchés majeurs connus — avant d'accepter son témoignage."
        },
        {
          id:"q-qad-18",
          text:"Le témoignage de l'enfant pré-pubère est-il toujours irrecevable en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — toujours irrecevable"},
          {id:"b",text:"Pas tout à fait : exception malikite pour le témoignage de garçons entre eux dans les blessures légères survenues entre eux"},
          {id:"c",text:"Valide pour les affaires civiles"},
          {id:"d",text:"Valide si confirmé par un adulte"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite : le témoignage de garçons pré-pubères entre eux (les uns contre les autres) dans des affaires de blessures légères survenues en leur présence exclusive est admissible — avant qu'ils aient eu le temps de se consulter et de se concerter. C'est une exception pratique unique au rite malikite."
        },
        {
          id:"q-qad-19",
          text:"Un jugement islamique rendu sur la base d'une fausse preuve peut-il être révisé ?",
          choices:[
          {id:"a",text:"Non — le jugement est définitif"},
          {id:"b",text:"Oui — si l'erreur ou la fausse preuve est démontrée, le jugement peut être révisé"},
          {id:"c",text:"Seulement dans les 30 jours"},
          {id:"d",text:"Seulement pour les"}
          ],
          correctId:"b",
          explanation:"Un jugement rendu par erreur (sur fausse preuve ou malentendu) peut être révisé si l'erreur est prouvée — même après exécution partielle. Le droit islamique ne sanctifie pas les erreurs judiciaires. Mukhtasar Khalīl : le juge qui réalise son erreur doit la corriger lui-même ou référer à un juge supérieur."
        },
        {
          id:"q-qad-20",
          text:"Quels sont les 3 principaux moyens de preuve en droit islamique malikite ?",
          choices:[
          {id:"a",text:"La rumeur, le serment et la réputation"},
          {id:"b",text:"Bayyina (témoignage), Iqrār (aveu) et al-yamīn (serment) — Istifāḍa comme preuve spécifiquement malikite"},
          {id:"c",text:"L'écrit, le serment et la fatwa"},
          {id:"d",text:"Uniquement les témoins oculaires"}
          ],
          correctId:"b",
          explanation:"Les 3 principaux moyens de preuve islamiques : (1) Bayyina = témoignage de témoins équitables (2 hommes, ou combinaisons selon les cas) ; (2) Iqrār = aveu du défendeur (maître des preuves) ; (3) al-yamīn = serment judiciaire. Spécificité malikite : Istifāḍa (notoriété publique constante) comme 4ème moyen pour certaines affaires."
        }]}},
    {id:"hudud",title:"Crimes et Peines en Islam",arabicTitle:"الجِنَايَات وal-ḥudūd (الحُدُود)",icon:"shield",description:"Droit pénal islamique : Qiṣāṣ (talion), Diyāt (compensations) Ḥudūd (peines coraniques).",source:"Mukhtasar Khalīl pp.240-260 · doctrine-malikite.fr",badge:{id:"badge-avance-hudud",title:"Juriste du Droit Pénal",arabicTitle:"عَارِفُ الجِنَايَات",icon:"wall-h",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire  Ḥudūd"},lessons:[        {
          id:"hud-01",
          title:"Qiṣāṣ et Diyāt — Talion et Compensations Pécuniaires",
          status:'available',
          content:[
            {"t": "lead", "v": "Qiṣāṣ (talion) Diyāt (compensations pécuniaires) constituent le droit pénal islamique relatif aux atteintes à la personne. C'est un système qui équilibre justice, miséricorde et protection sociale. Le Mukhtasar Khalīl (pp. 240-250) y consacre un chapitre dense."},
            { t:'ar', v:"وَلَكُم فِي al-qiṣāṣ (القِصَاص)ِ حَيَاةٌ يَا أُولِي الأَلبَابِ", n:"« Dans le talion, il y a pour vous la vie, ô gens doués d'intelligence. » — Coran 2:179" },
            {"t": "h", "v": "Qiṣāṣ — Le Talion : définition et conditions"},
            { t:'ul', v:[
              "<strong>Définition :</strong> infliger au coupable exactement ce qu'il a infligé à la victime.",
              "<strong>Qiṣāṣ :</strong> (1) intentionnalité du meurtre ; (2) égalité de statut (Muslim tue Muslim, ou dhimmī tue dhimmī) ; (3) le meurtrier est adulte et sain d'esprit.",
              "<strong>Qiṣāṣ :</strong> père tuant son fils (position malikite et hanbalite) ; maître tuant son esclave.",
              "<strong>Spécificité malikite :</strong> le groupe tuant ensemble une personne sont tous passibles du — même si 10 ont tué 1.",
              "Mukhtasar Khalīl : le s'applique aussi aux blessures intentionnelles si la blessure est délimitable."
            ] },
            {"t": "h", "v": "— Qui peut pardonner ?"},
            { t:'ul', v:[
              "Le ayant-droit du sang : héritiers de la victime — ils ont le choix entre 3 options.",
              "<strong>Option 1 : Qiṣāṣ</strong> — exiger le talion.",
              "<strong>Option 2 : Diya</strong> — accepter la compensation financière.",
              "<strong>Option 3 : </strong> — pardonner gratuitement (la plus méritoire islamiquement).",
              "Coran 5:45 : « Si l'on renonce au talion par charité, cela lui vaut une expiation. »"
            ] },
            {"t": "h", "v": "Diya — La Compensation Pécuniaire"},
            { t:'ul', v:[
              "<strong>Montant de base :</strong> 100 chameaux (valeur de référence coranique), ou leur équivalent en or ou argent.",
              "<strong>D :</strong> moitié de la de l'homme selon les 4 écoles.",
              "<strong> :</strong> 1/2 ou 1/3 de la du Muslim selon les positions malikites (débat interne).",
              "<strong> :</strong> alourdie (100 chameaux répartis en groupes de 30 tebas, 30 hiqqāt, 40 enceintes) Shibh al-ʿAmd.",
              "<strong>ʿĀʿĀqila :</strong> dans le meurtre non intentionnel, la est supportée collectivement par le groupe familial du meurtrier — pas par lui seul."
            ] },
            {"t": "note", "v": "Le systèQiṣāṣ / est profondément humaniste : il donne à la famille de la victime le choix entre la justice (talion), la réparation (compensation) et la miséricorde (pardon). La pression sociale dans l'Islam encourage le pardon — mais ne l'impose jamais."}
          ]
        },
        {
          id:"hud-02",
          title:"Al-Ḥudūd — Les Peines Coraniques : Principes et Cadre Général",
          status:'available',
          content:[
            {"t": "lead", "v": "Ḥudūd sont les peines fixées par le Coran et la Sunna pour des infractions précises. Leur compréhension exige de saisir le cadre global — conditions, doutes, et finalité — avant de traiter chaque séparément."},
            {"t": "h", "v": "Définition et liste des"},
            { t:'ul', v:[
              "Terme : = frontière, limite fixée par Allah.",
              "<strong>6 en rite malikite :</strong> (1) al-zinā (adultère/fornication) ; (2) (fausse accusation d'adultère) ; (3) (consommation d'alcool) ; (4) al-sariqa (vol) ; (5) (brigandage) ; (6) al-ridda (apostasie).",
              "Le Mukhtasar Khalīl les traite dans cet ordre aux pp. 250-260."
            ] },
            {"t": "h", "v": "Shubha — Le Doute comme Protection"},
            {"t": "p", "v": "Principe cardinal : « Ḥudūd Shubuhāt » — les sont levés par le doute. Toute ambiguïté sérieuse dans les preuves, les conditions ou l'intention empêche l'application du."},
            { t:'ul', v:[
              "Si le prévenu a un doute sérieux sur la licéité de l'acte → levé.",
              "Si les preuves sont incomplètes → levé.",
              "Si le moyen de preuve est contestable → levé.",
              "Le doute profite TOUJOURS à l'accusé en matière de."
            ] },
            {"t": "h", "v": "Conditions générales pour l'application d'un"},
            { t:'ul', v:[
              "L'auteur doit être : Muslim, pubère, sain d'esprit.",
              "L'acte doit être prouvé par : 4 témoins oculaires OU aveu répété.",
              "Pas de contrainte — la contrainte empêche le.",
              "Pas d'ignorance excusable — celui qui ignorait l'interdiction n'est pas soumis au.",
              "Tawba avant la poursuite : debated — certains savants malikites le prennent en compte."
            ] },
            {"t": "h", "v": "Taʿzīr — Peine Discrétionnaire"},
            {"t": "p", "v": "Pour les infractions sans fixé, le juge Taʿzīr (peine discrétionnaire adaptée) : amende, emprisonnement, flagellation légère, blâme public, etc. Taʿzīr est le outil juridique principal du droit pénal islamique contemporain."},
            {"t": "note", "v": "Point crucial pour la compréhension contemporaine : les conditions d'application des dans leur cadre original (État islamique, témoins parfaits, preuves irréfutables) étaient si strictes que les étaient rarement exécutés. Leur fonction première était dissuasive et éducative, pas punitive."}
          ]
        },
        {
          id:"hud-03",
          title:"Ḥadd al-Sariqa et al-Ḥirāba — Vol et Banditisme",
          status:'available',
          content:[
            {"t": "lead", "v": "al-sariqa (amputation pour vol qualifié) et Ḥadd al-Ḥadd al-Ḥirāba (brigandage armé) sont les deux liés aux atteintes aux biens. Leurs conditions sont nombreuses et strictes — le Mukhtasar Khalīl (pp. 252-256) les détaille avec précision."},
            {"t": "h", "v": "al-sariqa — Conditions cumulatives"},
            { t:'ar', v:"وَالسَّارِقُ وَالسَّارِقَةُ فَاقطَعُوا أَيدِيَهُمَا", n:"Coran 5:38 — Fondement coranique du حَدّ al-sariqa (السَّرِقَة)" },
            { t:'ul', v:[
              "<strong>1. Niṣāb :</strong> la valeur volée doit atteindre le seuil minimum — 1/4 dinar d'or (environ 1g d'or) selon le rite malikite.",
              "<strong>2. Ḥirz :</strong> le bien volé doit être dans un endroit sécurisé (maison fermée, coffre, boutique fermée). Voler dans un espace public sans gardien = pas de.",
              "<strong>3. :</strong> pris en cachette — l'arrachage à force n'est pas un vol qualifié.",
              "<strong>4. Shubha :</strong> pas de droit réel ou prétendu sur le bien. Ex : un père volant le bien de son fils → pas de.",
              "<strong>5. :</strong> prouvé par 2 témoins ou aveu."
            ] },
            {"t": "h", "v": "La peine et son application"},
            { t:'ul', v:[
              "<strong>1ère fois :</strong> amputation de la main droite.",
              "<strong>2ème fois :</strong> amputation du pied gauche.",
              "<strong>3ème et 4ème fois :</strong> Taʿzīr (peine discrétionnaire) selon certains savants malikites.",
              "Si la main est rendue et la valeur restituée AVANT jugement → certains savants malikites lèvent le.",
              "La pauvreté absolue crée une → levé."
            ] },
            {"t": "h", "v": "Ḥadd al-Ḥadd al-Ḥirāba — Le Brigandage Armé"},
            {"t": "p", "v": "La (vol à main armée, terrorisme de grande route) est plus grave que le vol ordinaire car elle perturbe la sécurité publique."},
            { t:'ul', v:[
              "Coran 5:33 : 4 peines selon la gravité : exécution / amputation croisée (main droite + pied gauche) / exil / mort en croix.",
              "Mukhtasar Khalīl : si le brigand a tué ET volé → exécution ET croix. S'il a tué sans voler → exécution. S'il a volé sans tuer → amputation croisée. Terreur sans vol ni meurtre → exil.",
              "La inclut tout acte de terrorisme perturbant la sécurité collective.",
              "Tawba avant arrestation → supprime le selon l'opinion malikite (Coran 5:34)."
            ] },
            {"t": "note", "v": "Niṣāb : le rite malikite fixe le minimum à 1/4 dinar d'or (valeur approximative d'environ 1g d'or = environ 60-70€ en 2024). En dessous de cette valeur → pas de al-sariqa Taʿzīr. C'est l'une des valeurs les plus basses parmi les 4 madhāhib."}
          ]
        },
        {
          id:"hud-04",
          title:"Ḥudūd al-Zinā, Qadhf, Shurb et Ridda — Peines et Conditions",
          status:'available',
          content:[
            {"t": "lead", "v": "Quatre concernent l'ordre moral et spirituel islamique. Leurs conditions d'application sont parmi les plus strictes du droit pénal islamique."},
            {"t": "h", "v": "al-zinā — La Fornication/Adultère"},
            { t:'ul', v:[
              "Preuve : 4 témoins oculaires ayant vu l'acte consommé — quasi impossible à réunir.",
              "Ou : aveu volontaire et répété du prévenu (qui peut se rétracter).",
              "<strong>Peine malikite :</strong> muhsan (marié) → lapidation ; ghair muhsan (non marié) → 100 coups + exil d'un an.",
              "Si une seule des 4 conditions manque (témoin douteux, acte incomplet prouvé…) → levé.",
              "Mukhtasar Khalīl : la grossesse hors mariage SEULE n'est pas une preuve de — elle peut être due à une erreur."
            ] },
            {"t": "h", "v": "Ḥadd al-Qadhf — La Fausse Accusation d'Adultère"},
            { t:'ul', v:[
              "Accuser quelqu'un d'adultère sans 4 témoins → 80 coups de fouet.",
              "Protection de l'honneur — l'une des 5 Sharīʿa.",
              "Conditions : la victime est Muslim, libre, muhsan (marié ou pas ?), nie l'accusation.",
              "Le repentir lève-t-il le Ḥadd al-Qadhf ? Débat interne — selon l'Imām Mālik : non, le est un droit de la victime (pas d'Allah), donc seule la victime peut pardonner."
            ] },
            {"t": "h", "v": "Ḥadd al-Shurb — La Consommation d'Alcool"},
            { t:'ul', v:[
              "<strong>Spécificité malikite :</strong> 40 coups selon l'Imām Mālik (d'autres écoles : 80 coups).",
              "Preuve : témoignage de 2 témoins ayant vu boire, ou aveu, ou odeur d'alcool sur l'haleine.",
              "S'applique à tout alcool — jus de raisin fermenté ou tout enivrisant.",
              "Mukhtasar Khalīl : si boire pour raison médicale sur prescription → pas de."
            ] },
            {"t": "h", "v": "al-ridda — L'Apostasie"},
            { t:'ul', v:[
              "Spécificité malikite : délai de 3 jours pour (invitation au retour à l'Islam) avant toute sanction.",
              "Si l'apostat revient → libéré ; s'il persiste → peine classique (qui n'est pas applicable dans un État non islamique).",
              "L'apostasie dissolve le mariage et fait perdre le droit à l'héritage.",
              "Les biens de l'apostat : transmis à ses héritiers Muslims s'il meurt dans l'apostasie.",
              "Contexte contemporain : en pays non islamique, aucune sanction temporelle n'est applicable."
            ] },
            {"t": "note", "v": "Nuance théologique fondamentale : en Islam, nul n'est contraint de croire. L'apostasie dans le contexte classique était aussi un acte de trahison politique et sociale — la dimension purement religieuse et la dimension politique étaient indissociables dans le contexte de l'État islamique médinois. Dans le contexte contemporain, les savants dissocient les deux dimensions."}
          ]
        },
        {
          id:"hud-05",
          title:"Ḥudūd Contemporains — Compréhension et Contexte Moderne",
          status:'available',
          content:[
            {"t": "lead", "v": "La question des dans le contexte contemporain est l'une des plus débattues en théologie islamique moderne. Ce chapitre présente le cadre doctrinal malikite et les positions des savants contemporains, notamment à partir de doctrine-malikite.fr."},
            {"t": "h", "v": "Sharīʿa — Les Finalités de la Loi Islamique"},
            {"t": "p", "v": "Les s'inscrivent dans le cadre des 5 finalités de la que le fiqh malikite, via Imām al-Ghazālī et Ibn Rushd, a systématisées :"},
            { t:'ul', v:[
              "<strong>1. :</strong> protection de la religion → al-ridda.",
              "<strong>2. :</strong> protection de la vie → Qiṣāṣ.",
              "<strong>3. :</strong> protection de l'intellect → Ḥadd al-Shurb.",
              "<strong>4. :</strong> protection de la lignée → al-zinā.",
              "<strong>5. :</strong> protection des biens → al-sariqa."
            ] },
            {"t": "h", "v": "Position des savants malikites contemporains"},
            { t:'ul', v:[
              "Les conditions d'application des étaient conçues pour un État islamique pleinement établi avec justice sociale — leur application hors de ce contexte est problématique.",
              "Doctrine-malikite.fr souligne que les finalités des sont permanentes ; les modalités d'application peuvent varier selon le contexte.",
              "En pays non islamique : aucun n'est applicable — la loi civile s'impose.",
              "L'injustice sociale (pauvreté, oppression) crée des qui lèvent les — Sayyidnā ʿUmar n'a pas appliqué le al-sariqa pendant l'année de famine."
            ] },
            {"t": "h", "v": "Taʿzīr comme alternative principale"},
            { t:'ul', v:[
              "Dans le contexte contemporain, Taʿzīr (peine discrétionnaire) est le principal outil pénal islamique applicable.",
              "Il inclut : amendes, emprisonnement, blâme public, exclusion communautaire, programmes de réhabilitation.",
              "Le juge adapte la peine à la situation, la personnalité du coupable et le contexte social.",
              "Les codes péTaʿzīr."
            ] },
            { t:'ar', v:"إِنَّ اللَّهَ يَأمُرُ بِالعَدلِ وَal-iḥsān (الإِحسَان)ِ", n:"Coran 16:90 — « Allah commande la justice et la bienfaisance. »" },
            {"t": "note", "v": "Point de méthode malikite : l'Imām Mālik était connu pour sa prudence dans l'application des. Dans la Muwattaʾ et la Mudawwana, il cite de nombreuses conditions et exceptions qui réduisent le champ d'application des. Cette prudence est un trait distinctif de la méthode juridique malikite."}
          ]
        }],quiz:{id:"quiz-avance-hudud",title:"Questionnaire —  Ḥudūd",status:"available",score:null,questions:[        {
          id:"q-hud-01",
          text:"La victime d'un meurtre intentionnel a 3 options. Lesquelles ?",
          choices:[
          {id:"a",text:"Punir, emprisonner ou exiler"},
          {id:"b",text:"Qiṣāṣ (talion) / Diya (compensation) / (pardon)"},
          {id:"c",text:"Porter plainte, négocier ou abandonner"},
          {id:"d",text:"Réclamer le, la Taʿzīr"}
          ],
          correctId:"b",
          explanation:"Le (ayant-droit du sang) a 3 options : (1) Qiṣāṣ — exiger le talion ; (2) Diya — accepter la compensation financière ; (3) — pardonner gratuitement, ce qui est islamiquement le plus méritoire. Coran 5:45 : le pardon est une expiation pour lui."
        },
        {
          id:"q-hud-02",
          text:"Si 10 personnes ont tué ensemble une seule personne, sont-elles toutes passibles du ?",
          choices:[
          {id:"a",text:"Non — seulement celui qui a porté le coup fatal"},
          {id:"b",text:"Oui — le groupe entier est passible du"},
          {id:"c",text:"Non — seulement le meneur"},
          {id:"d",text:"Oui mais seulement 1 parmi les 10 est exécuté"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite et hanbalite : si un groupe assassine une personne ensemble → tous sont passibles du. Cette position protège contre les meurtres collectifs organisés où chacun tente de se cacher derrière les autres. La position hanafite et chāfiʿite diverge sur ce point."
        },
        {
          id:"q-hud-03",
          text:"Diya de base correspond à :",
          choices:[
          {id:"a",text:"1000 dirhams d'argent"},
          {id:"b",text:"100 chameaux ou leur équivalent en or/argent"},
          {id:"c",text:"500 dinars d'or"},
          {id:"d",text:"La valeur du bien détruit"}
          ],
          correctId:"b",
          explanation:"La de base pour le meurtre intentionnel est 100 chameaux ou leur équivalent en or/argent selon l'époque. La (alourdie) Shibh al-ʿAmd (meurtre quasi-intentionnel) est répartie en 30 tebas + 30 hiqqāt + 40 chameaux enceintes."
        },
        {
          id:"q-hud-04",
          text:"La ʿĀʿĀqila : qui supporte la Qatl al-Khaṭaʾ ?",
          choices:[
          {id:"a",text:"Le meurtrier seul"},
          {id:"b",text:"L'État islamique"},
          {id:"c",text:"Le groupe familial du meurtrier, collectivement"},
          {id:"d",text:"Les héritiers du meurtrier"}
          ],
          correctId:"c",
          explanation:"Qatl al-Khaṭaʾ (meurtre non intentionnel), la est supportée par ʿĀʿĀqila — le groupe familial/tribal du meurtrier, collectivement et répartie sur 3 ans. Le meurtrier lui-même ne la paye pas personnellement. Cette solidarité familiale est un système de sécurité sociale islamique préislamique validé par l'Islam."
        },
        {
          id:"q-hud-05",
          text:"Un homme vole une valeur inféNiṣāb (seuil minimum). Y a-t-il un al-sariqa ?",
          choices:[
          {id:"a",text:"Oui — tout vol engage le"},
          {id:"b",text:"Non — Niṣāb (1/4 dinar d'or en rite malikite), c'Taʿzīr, pas le"},
          {id:"c",text:"Seulement si c'est un récidiviste"},
          {id:"d",text:"Non seulement si c'est un pauvre"}
          ],
          correctId:"b",
          explanation:"Niṣāb (seuil minimum) pour le al-sariqa est 1/4 dinar d'or en rite malikite (environ 1g d'or). En dessous → Taʿzīr (peine discrétionnaire). Au dessus + toutes les autres conditions →. C'est une des valeurs les plus basses parmi les 4 écoles."
        },
        {
          id:"q-hud-06",
          text:"<strong>CRUCIALE :</strong> La condition du Ḥirz — qu'est-ce que c'est et pourquoi est-elle essentielle ?",
          choices:[
          {id:"a",text:"La valeur minimale volée"},
          {id:"b",text:"Le lieu sécurisé d'où le bien a été volé — sans Ḥirz, pas de"},
          {id:"c",text:"L'intention du voleur"},
          {id:"d",text:"Le nombre de témoins"}
          ],
          correctId:"b",
          explanation:"Ḥirz = lieu protégé/sécurisé. Le bien doit avoir été volé dans un endroit qui le protégeait normalement : maison fermée, boutique fermée, coffre, voiture verrouillée. Voler dans un espace public non gardé → pas de. Cette condition protège les pickpockets opportunistes d'une peine démesurée."
        },
        {
          id:"q-hud-07",
          text:"Combien de témoins faut-il pour prouver la et appliquer le ?",
          choices:[
          {id:"a",text:"2 témoins"},
          {id:"b",text:"3 témoins"},
          {id:"c",text:"4 témoins oculaires ayant vu l'acte consommé"},
          {id:"d",text:"1 témoin + aveu"}
          ],
          correctId:"c",
          explanation:"La requiert 4 témoins oculaires ayant vu l'acte sexuel consommé (pas l'approche, mais l'acte lui-même selon Mukhtasar Khalīl). Ce seuil quasi-impossible à atteindre protège la vie privée. Moins de 4 témoins → les témoins risquent eux-mêmes le Ḥadd al-Qadhf (fausse accusation)."
        },
        {
          id:"q-hud-08",
          text:"La grossesse hors mariage prouve-t-elle automatiquement la ?",
          choices:[
          {id:"a",text:"Oui — c'est une preuve directe"},
          {id:"b",text:"Non — elle peut résulter d'un (rapport par méprise) → levé"},
          {id:"c",text:"Oui si la femme est célibataire"},
          {id:"d",text:"Oui si elle ne peut pas l'expliquer"}
          ],
          correctId:"b",
          explanation:"Position malikite nuancée : la grossesse hors mariage seule n'est pas une preuve suffisante de. Elle peut résulter d'un (rapport dans une situation de méprise sur la licéité). Le doute lève toujours le. Seul un aveu explicite ou 4 témoins permettent d'appliquer le."
        },
        {
          id:"q-hud-09",
          text:"Combien de coups dans le Ḥadd al-Shurb (alcool) selon l'Imām Mālik ?",
          choices:[
          {id:"a",text:"80 coups comme l'école hanafite"},
          {id:"b",text:"40 coups selon l'Imām Mālik"},
          {id:"c",text:"60 coups"},
          {id:"d",text:"100 coups"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite : l'Imām Mālik fixe le Ḥadd al-Shurb à 40 coups, se basant sur la pratique du Prophète ﷺ et d'Abū Bakr. Les écoles hanafite et chāfiʿite optent pour 80 coups (basées sur la pratique d'ʿUmar). C'est une divergence authentique entre les écoles sur ce."
        },
        {
          id:"q-hud-10",
          text:"Le Ḥadd al-Qadhf (fausse accusation d'adultère) peut-il être pardonné par la victime ?",
          choices:[
          {id:"a",text:"Non — c'est un droit d'Allah, non remissible"},
          {id:"b",text:"Oui — c'est un droit de la victime ; elle seule peut pardonner et lever le"},
          {id:"c",text:"Oui avec accord du juge"},
          {id:"d",text:"Non sauf si l'accusé prouve la vérité"}
          ],
          correctId:"b",
          explanation:"Position malikite : le Ḥadd al-Qadhf est un (droit humain), pas un. La victime de la calomnie peut donc pardonner et lever le. Le repentir de l'accusé seul ne suffit pas — c'est à la victime de décider. C'est différent des qui sont."
        },
        {
          id:"q-hud-11",
          text:"L'apostat a combien de jours pour reconsidérer avant sanction ?",
          choices:[
          {id:"a",text:"Immédiatement"},
          {id:"b",text:"3 jours"},
          {id:"c",text:"40 jours"},
          {id:"d",text:"1 mois"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik dans la Mudawwana : l'apostat reçoit un délai de 3 jours pour l' (invitation au retour). Pendant ces 3 jours, des savants discutent avec lui, lèvent ses doutes et l'invitent à revenir. S'il revient → libéré. C'est une approche pastorale qui précède toute sanction."
        },
        {
          id:"q-hud-12",
          text:"Le principe « Ḥudūd Shubuhāt » signifie :",
          choices:[
          {id:"a",text:"Les sont toujours exécutés sans exception"},
          {id:"b",text:"Toute ambiguïté sérieuse dans les preuves ou conditions lève le — le doute profite à l'accusé"},
          {id:"c",text:"Les s'appliquent à tous sauf aux savants"},
          {id:"d",text:"On peut douter de tout sauf de l'aveu"}
          ],
          correctId:"b",
          explanation:"Hadīth : « Ḥudūd Shubuhāt » — « levez les par les doutes. » C'est l'un des principes fondamentaux du droit pénal islamique. Toute sérieuse (doute sur la preuve, l'intention, les conditions, l'ignorance excusable...) suffit pour empêcher l'application du."
        },
        {
          id:"q-hud-13",
          text:"Sayyidnā ʿUmar a suspendu le al-sariqa pendant l'année de famine. Pourquoi ?",
          choices:[
          {id:"a",text:"Par clémence personnelle"},
          {id:"b",text:"Car la pauvreté crée une — le besoin vital excuse le vol pour survivre"},
          {id:"c",text:"Car la preuve était insuffisante"},
          {id:"d",text:"Car les juges étaient en voyage"}
          ],
          correctId:"b",
          explanation:"Sayyidnā ʿUmar ﵁ a suspendu le al-sariqa pendant l'année de famine car la nécessité Ḍarūra crée une — quelqu'un qui vole pour survivre à une famine n'est pas dans la même situation morale qu'un voleur ordinaire. Ce précédent est fondamental dans la jurisprudence malikite."
        },
        {
          id:"q-hud-14",
          text:"Les s'appliquent-ils en France ou en Europe selon doctrine-malikite.fr ?",
          choices:[
          {id:"a",text:"Oui — tout Muslim y est soumis"},
          {id:"b",text:"Non — en pays non islamique, aucun n'est applicable ; la loi civile s'impose"},
          {id:"c",text:"Oui mais seulement dans les communautés islamiques"},
          {id:"d",text:"Oui avec accord du consul de la mosquée"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : en pays non islamique, les Muslims sont soumis à la loi civile locale. Les nécessitent un État islamique établi, un juge qualifié, et toutes les conditions d'application. Aucune de ces conditions n'existe en Europe. Toute tentative d'appliquer des peines islamiques hors de ce cadre serait illicite et illegale."
        },
        {
          id:"q-hud-15",
          text:"Quelle est la sanction pour la (brigandage) quand le brigand A TUÉ ET VOLÉ selon le Mukhtasar Khalīl ?",
          choices:[
          {id:"a",text:"100 coups + emprisonnement"},
          {id:"b",text:"Exil seulement"},
          {id:"c",text:"Exécution et exposition publique"},
          {id:"d",text:"Amputation croisée seulement"}
          ],
          correctId:"c",
          explanation:"Mukhtasar Khalīl (Coran 5:33) : pour le brigand qui a TUÉ ET VOLÉ → exécution (pour le meurtre) ET exposition publique en croix (pour la terreur publique). Les 4 peines sont : tuer+voler → mort+croix ; tuer sans voler → mort seule ; voler sans tuer → amputation croisée ; terroriser sans voler ni tuer → exil."
        },
        {
          id:"q-hud-16",
          text:"Les 5 Sharīʿa sont :",
          choices:[
          {id:"a",text:"Prière, jeûne, hajj, zakāt, pureté"},
          {id:"b",text:"/ / /"},
          {id:"c",text:"Justice, équité, miséricorde, vérité, paix"},
          {id:"d",text:"Foi, actions, éthique, justice, solidarité"}
          ],
          correctId:"b",
          explanation:"Les 5 finalités de la islamique selon al-Ghazālī et Ibn Rushd : (1) (protection de la religion) ; (2) (protection de la vie) ; (3) (protection de l'intellect) ; (4) (protection de la lignée) ; (5) (protection des biens). Les protègent chacun de ces objectifs."
        },
        {
          id:"q-hud-17",
          text:"Tawba avant arrestation lève-t-elle le Ḥadd al-Ḥadd al-Ḥirāba ?",
          choices:[
          {id:"a",text:"Non — la peine reste"},
          {id:"b",text:"Oui — Coran 5:34 : « sauf ceux qui se repentent avant que vous ne les ayez maîtrisés »"},
          {id:"c",text:"Seulement si le butin est restitué"},
          {id:"d",text:"Seulement si personne n'a été blessé"}
          ],
          correctId:"b",
          explanation:"Coran 5:34 est explicite : « » — les brigands qui se repentent AVANT d'être arrêtés sont exemptés du. C'est une invitation coranique au retour sincère. Après arrestation → Tawba est toujours recommandée mais le reste."
        },
        {
          id:"q-hud-18",
          text:"Un père tue son fils. Qiṣāṣ en rite malikite ?",
          choices:[
          {id:"a",text:"Oui — l'égalité s'applique même en famille"},
          {id:"b",text:"Non — le père n'est pas passible du pour le meurtre de son fils (position malikite et hanbalite)"},
          {id:"c",text:"Oui si c'est prémédité"},
          {id:"d",text:"Oui avec accord de la mère"}
          ],
          correctId:"b",
          explanation:"Position malikite et hanbalite : le père (ou grand-père) n'est pas passible du pour avoir tué son fils (ou descendant). Il paye la. Fondement : hadīth « ». Les écoles hanafite et chāfiʿite divergent — certains appliquent le."
        },
        {
          id:"q-hud-19",
          text:"Taʿzīr inclut quels types de sanctions ?",
          choices:[
          {id:"a",text:"Seulement la flagellation"},
          {id:"b",text:"Amende, emprisonnement, blâme public, exclusion communautaire, flagellation légère — adapté par le juge à la situation"},
          {id:"c",text:"Uniquement l'amende financière"},
          {id:"d",text:"Seulement l'emprisonnement"}
          ],
          correctId:"b",
          explanation:"Taʿzīr est la peine discrétionnaire adaptée par le à chaque cas. Elle peut être : amende, emprisonnement (court ou long), blâme public, exclusion de la communauté, surveillance, travaux d'intérêt général, ou flagellation légère. Taʿzīr est l'outil pénal islamique principal pour les infractions sans fixé."
        },
        {
          id:"q-hud-20",
          text:"Quel est le principe humaniste fondamental qui différencie l'approche malikite des ?",
          choices:[
          {id:"a",text:"Appliquer les peines le plus rapidement possible"},
          {id:"b",text:"Maximiser les doutes pour limiter l'application des — la prudence et la miséricorde prévalent sur la sévérité"},
          {id:"c",text:"Appliquer les uniquement pour les étrangers"},
          {id:"d",text:"Réserver les aux récidivistes"}
          ],
          correctId:"b",
          explanation:"La méthode malikite sur les est marquée par la prudence. L'Imām Mālik cite de nombreuses conditions et dans la Muwattaʾ et la Mudawwana. Sayyidnā ʿUmar a suspendu le al-sariqa en temps de crise. Le principe « Shubuhāt » est appliqué généreusement — la miséricorde prime sur la sévérité."
        }]}},
    {id:"ihsan",title:"Spiritualité et Éthique Islamique",arabicTitle:"al-iḥsān (الإِحسَان) والتَّزكِيَة",icon:"heart",description:"Le troisième pilier du Matn d'Ibn Āshir : purification de l'âme, stations spirituelles et éthique islamique.",source:"Matn d'Ibn Āshir (3ème pilier) · doctrine-malikite.fr La Spiritualité",badge:{id:"badge-avance-ihsan",title:"Chercheur de l'Excellence",arabicTitle:"طَالِبُ al-iḥsān (الإِحسَان)",icon:"heart-r",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire Iḥsān Tazkiya"},lessons:[        {
          id:"ihs-01",
          title:"Al-Iḥsān — Le Troisième Pilier du Curriculum Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "L'Iḥsān est le troisième et dernier pilier du Matn d'Ibn Āshir al-Mālikī. Il couronne l'édifice islamique : aprèĪmān Islām, vient l'Iḥsān. C'est la dimension intérieure et transformatrice de la religion."},
            { t:'ar', v:"al-iḥsān (الإِحسَان)ُ أَن تَعبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِن لَم تَكُن تَرَاهُ فَإِنَّهُ يَرَاكَ", n:"« L'al-iḥsān (الإِحسَان) c'est que tu adores Allah comme si tu Le voyais ; et si tu ne Le vois pas, Lui te voit. » — Hadīth de Gabriel, Muslim" },
            {"t": "h", "v": "— Le Hadīth de Gabriel"},
            {"t": "p", "v": "Dans le Hadīth de Gabriel (rapporté par Muslim), le Prophète ﷺ définit les 3 dimensions de la religion : Islām (pratique des 5 piliers), Īmān (croyance dans les 6 piliers), Iḥsān (excellence dans l'adoration). Le Matn d'Ibn Āshir structure le curriculum islamique selon ce triptyque."},
            {"t": "h", "v": "Le 3ème pilier selon le Matn d'Ibn Āshir"},
            { t:'ul', v:[
              "Ibn Āshir al-Mālikī (mort 1040 H) est l'auteur du matn classique enseigné dans les mosquées d'Afrique du Nord.",
              "Son 3ème pilier couvre : l'éMaqāmāt et des états.",
              "Les sources malikites de référence : al-Risāla al-Qushayriyya, Iḥyāʾ ʿUlūm al-Dīn d'al-Ghazālī, al-Ḥikam d'Ibn ʿAṭāʾ Allāh al-Iskandarī.",
              "Doctrine-malikite.fr y consacre sa section « La Spiritualité »."
            ] },
            {"t": "h", "v": "Iḥsān et les ʿibādāt"},
            { t:'ul', v:[
              "Chaque pilier a une dimension intérieure : la prière enseigne l'humilité et la préKhushūʿ.",
              "Le jeûne enseigne la maîṢabr.",
              "La zakāt enseigne le déZuhd.",
              "Le enseigne l'obéissance et la soumission totale.",
              "Iḥsān, les actes d'adoration restent de simples gestes corporels sans transformation intérieure."
            ] },
            {"t": "note", "v": "L'Iḥsān n'est pas réservé aux soufis ou aux élites spirituelles — c'est l'objectif de tout Muslim sincère. Le Prophète ﷺ a invité chaque Muslim à « adorer Allah comme s'il Le voyait » dans ses 5 prières quotidiennes, son jeûne, sa zakāt et tous ses actes."}
          ]
        },
        {
          id:"ihs-02",
          title:"Al-Maqāmāt al-Rūḥiyya — Les Stations Spirituelles Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "Les (stations spirituelles) sont les étapes de la progression intérieure vers Allah. Le Matn d'Ibn Āshir et al-Ghazālī dans son Iḥyāʾ les décrivent comme un chemin de transformation que tout Muslim peut emprunter."},
            {"t": "h", "v": "1. Tawba — Le Repentir"},
            { t:'ul', v:[
              "Première station et porte d'entrée : reconnaître ses fautes, les regretter et se résoudre à ne plus les commettre.",
              "Conditions malikites : (1) cesser le péché ; (2) le regretter sincèrement ; (3) résoudre de ne plus recommencer.",
              "Si le péché impliquait un droit d'autrui → le restituer est une 4ème condition.",
              "Coran 66:8 : « Revenez à Allah d'un repentir sincère. »"
            ] },
            {"t": "h", "v": "2. Zuhd — Le Détachement du Monde"},
            { t:'ul', v:[
              "Zuhd ≠ pauvreté forcée — c'est avoir le monde dans les mains sans l'avoir dans le cœur.",
              "Ibn Qayyim : le est de reconnaître que ce que tu as perdu est meilleur que ce que tu posssèdes (l'Âhira > la Dunyā).",
              "Exemple prophétique : le Prophète ﷺ était le plus pauvre des riches et le plus riche des pauvres.",
              "Doctrine-malikite.fr : le Muslim contemporain peut posséder et gagner tout en pratiquant le dans son cœur."
            ] },
            {"t": "h", "v": "3. Tawakkul — La Confiance en Allah"},
            { t:'ul', v:[
              "Confiance totale en Allah pour les résultats, après avoir pris tous les moyens nécessaires.",
              "Hadīth : « Attache ton chameau [prends tes précautions] puis fais confiance à Allah. »",
              "Tawakkul ≠ passivité — c'est agir avec tous les moyens puis remettre le résultat à Allah.",
              "Erreur commune : Tawakkul avec la paresse ou le fatalisme."
            ] },
            {"t": "h", "v": "4. Ṣabr Shukr — Patience et Gratitude"},
            { t:'ul', v:[
              "Ṣabr : patience dans l'adversité, l'obéissance et devant les désirs illicites.",
              "Shukr : gratitude pour les bienfaits par le cœur (reconnaître), la langue (dire) et les membres (agir).",
              "Ibn Qayyim : la religion entièṢabr + Shukr — les deux pôles de l'existence humaine.",
              "Coran 14:7 : « Si vous êtes reconnaissants, J'augmenterai mes bienfaits ; si vous êtes ingrats, Mon châtiment est sévère. »"
            ] },
            {"t": "h", "v": "5. Maḥabba — L'Amour d'Allah"},
            {"t": "p", "v": "L'amour d'Allah est la station la plus haute selon Ibn Āshir et al-Ghazālī. Il se nourrit de la connaissance d'Allah et se manifeste dans la pratique sincère."},
            { t:'ul', v:[
              "Coran 3:31 : « Dis : si vous aimez Allah, suivez-moi — Allah vous aimera. »",
              "Signes de l'amour d'Allah : préférer ce qu'Allah aime à ce qu'on aime soi-même.",
              "L'amour du Prophète ﷺ : condition du vrai amour d'Allah. Hadīth : « Nul n'est croyant tant qu'il ne m'aime plus que son père, son fils et toute l'humanité. »"
            ] },
            {"t": "note", "v": "Ordre des stations selon le Matn d'Ibn Āshir : Tawba → Zuhd → Tawakkul → Ṣabr → Shukr → → → Maḥabba →. Chaque station prépare la suivante. Il n'est pas nécessaire de les « compléter » séquentiellement — elles se renforcent mutuellement tout au long de la vie."}
          ]
        },
        {
          id:"ihs-03",
          title:"Amrāḍ al-Qulūb — Les Maladies Spirituelles et leurs Remèdes",
          status:'available',
          content:[
            {"t": "lead", "v": "Le Matn d'Ibn Āshir et l'Iḥyāʾ d'al-Ghazālī identifient des « maladies du cœur » qui empêchent la progression spirituelle. Tazkiya (purification de l'âme) consiste à les diagnostiquer et les traiter."},
            {"t": "h", "v": "1. Kibr — L'Orgueil"},
            { t:'ul', v:[
              "Définition : se voir supérieur aux autres et mépriser autrui.",
              "Hadīth : « N'entrera pas au paradis celui qui a dans le cœur le poids d'un atome d'orgueil. » — Muslim.",
              "<strong>Remède :</strong> rappeler ses origines, réfléchir à ses propres défauts, servir les pauvres, rechercher les savants et les gens pieux.",
              "Distinguer : Kibr (orgueil de l'âme) ≠ (dignité légitime)."
            ] },
            {"t": "h", "v": "2. Ḥasad — La Jalousie"},
            { t:'ul', v:[
              "Définition : détester le bienfait d'Allah chez autrui et désirer sa disparition.",
              "Hadīth : « Méfiez-vous de la jalousie — elle dévore les bonnes actions comme le feu dévore le bois sec. »",
              "<strong>Remède :</strong> faire un duʿāʾ sincère pour la personne enviée, rappeler que les rizques sont fixés par Allah, rechercher la GhiḅGhiḅṭa (désirer avoir pareil sans vouloir sa disparition chez l'autre) à la place du.",
              "La GhiḅGhiḅṭa (émulation positive) est permise, voire recommandée."
            ] },
            {"t": "h", "v": "3. Riyāʾ — L'Ostentation"},
            { t:'ul', v:[
              "Définition : accomplir des actes d'adoration pour être vu et admiré des hommes.",
              "Coran 4:142 : les hypocrites prient sans se rappeler Allah — « ils ne Le mentionnent que peu. »",
              "<strong>Remède :</strong> multiplier les ʿibādāt secrètes (les prières de nuit, les dons anonymes), rappeler la mort et le Jugement, rechercher uniquement le regard d'Allah.",
              "Hadīth Qudsī : « Je suis le plus riche des associés — celui qui M'associe quelqu'un, Je l'abandonne à son associé. »"
            ] },
            {"t": "h", "v": "4. — La Colère Incontrôlée"},
            { t:'ul', v:[
              "La colère pour Allah est permise (et parfois obligatoire). La colère pour l'ego est destructrice.",
              "Hadīth : « Le fort n'est pas celui qui renverse les autres — le fort est celui qui se maîtrise dans la colère. »",
              "<strong>Remède :</strong> dire (s'abriter en Allah), s'asseoir si debout, s'allonger si assis, faire ses ablutions, rappeler la douceur du Prophète ﷺ.",
              "Le Matn d'Ibn Āshir : maîtriser la colère est l'une des vertus les plus valorisées."
            ] },
            {"t": "h", "v": "5. Ḥiqd — La Rancœur"},
            { t:'ul', v:[
              "Définition : garder de l'animosité envers quelqu'un après une dispute.",
              "<strong>Remède :</strong> pardonner, se réconcilier, rappeler les défauts de sa propre âme.",
              "Hadīth : « Les portes du paradis s'ouvrent les lundis et jeudis — tous les Muslims sont pardonnés sauf les deux qui se sont brouillés. »",
              "Doctrine-malikite.fr : la (réconciliation) est obligatoire dans les 3 jours suivant une brouille."
            ] },
            {"t": "note", "v": "Méthode al-Ghazālī (adoptée par Ibn Āshir) Tazkiya : (1) Murāqaba (surveiller ses intentions) ; (2) Muḥāsaba (bilan quotidien de l'âme) ; (3) Mujāhada (effort sur l'âme) ; (4) (pénaliser l'âme pour ses erreurs par des actes supplémentaires d'adoration)."}
          ]
        },
        {
          id:"ihs-04",
          title:"Al-Akhlāq al-Islāmiyya — Éthique Sociale selon le Rite Malikite",
          status:'available',
          content:[
            {"t": "lead", "v": "La dimension pratique de l'Iḥsān se manifeste dans les relations sociales. Le Matn d'Ibn Āshir et doctrine-malikite.fr y consacrent une part importante — l'éthique sociale islamique Tazkiya."},
            {"t": "h", "v": "— Droits des parents"},
            { t:'ul', v:[
              "Bienfaisance envers les parents = parmi les plus grands actes après la prière (Coran 17:23).",
              "Même si parents non-Muslims : bienfaisance et obéissance dans le licite.",
              "Interdit : la désobéissance aux parents sauf pour accomplir un péché.",
              "Doctrine-malikite.fr : le Muslim en Occident qui s'est converti doit maintenir des liens familiaux respectueux avec sa famille non-musulmane."
            ] },
            {"t": "h", "v": "— Droits des voisins"},
            { t:'ul', v:[
              "Hadīth : « Jibrīl m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. »",
              "Niveaux de voisinage : voisin Muslim + parent > voisin Muslim > voisin non-Muslim.",
              "Obligations minimales : ne pas le blesser, répondre à ses salam, l'aider dans le besoin.",
              "Le vacarme nocturne, les mauvaises odeurs, les dommages causés par ses enfants → responsabilité islamique."
            ] },
            {"t": "h", "v": "— Générosité et Libéralité"},
            { t:'ul', v:[
              "La générosité est l'une des plus grandes vertus dans la tradition malikite.",
              "Hadīth : « Le généreux est proche d'Allah, des hommes et du paradis. »",
              "Le Matn d'Ibn Āshir liste : (générosité), (préférer autrui à soi-même), (dépenser pour Allah).",
              "Spécificité contemporaine : donner à des associations islamiques = acte de générosité."
            ] },
            {"t": "h", "v": "— Honnêteté et Intégrité"},
            { t:'ul', v:[
              "(honnêteté) est la mère des vertus islamiques — elle touche la parole, le commerce et les relations.",
              "Hadīth : « Le. »",
              "(intégrité) : remplir ses engagements professionnels, familiaux et religieux.",
              "Doctrine-malikite.fr : l'intégrité dans le travail professionnel est un acte de ʿibāda."
            ] },
            {"t": "h", "v": "— Humilité et Douceur"},
            { t:'ul', v:[
              "Hadīth : « Allah m'a révélé d'être humbles jusqu'à ce que personne ne se vante sur un autre. »",
              "Caractéristique centrale du Prophète ﷺ : la (douceur) dans toutes les situations.",
              "Hadīth : « La est dans tout ce qu'elle est — un ornement ; et dans tout ce d'où elle est retirée — une difformité. »",
              "La douceur dans la daʿwa (appel à l'Islam) est une obligation — Coran 16:125."
            ] },
            {"t": "note", "v": "Le Matn d'Ibn Āshir conclut par l'éthique sociale préciséTazkiya ne peut être authentique que si elle se manifeste dans les relations avec autrui. Un homme « spirituel » qui maltraite sa famille ou ses voisins n'a pas accompli l'Iḥsān — la spiritualité islamique est sociale par nature."}
          ]
        },
        {
          id:"ihs-05",
          title:"Murāqaba et Muḥāsaba — Surveillance et Bilan de l'Âme",
          status:'available',
          content:[
            {"t": "lead", "v": "Murāqaba (conscience d'être observé par Allah) Muḥāsaba (bilan quotidien de l'âme) sont les deux pratiques spirituelles quotidiennes recommandées par le Matn d'Ibn Āshir et doctrine-malikite.fr — l'Examen de Conscience Islamique."},
            {"t": "h", "v": "Murāqaba — La Conscience Permanente de la Présence Divine"},
            { t:'ul', v:[
              "Définition : agir en permanence comme si on voyait Allah, ou au moins en sachant qu'Il nous voit.",
              "C'est la traduction pratique de la définition de l'Iḥsān dans le Hadīth de Gabriel.",
              "Elle transforme chaque geste ordinaire (manger, travailler, parler) en acte d'adoration.",
              "Hadīth Qudsī : « Je suis avec Mon serviteur selon l'opinion qu'il a de Moi. »"
            ] },
            {"t": "h", "v": "Muḥāsaba — Le Bilan Quotidien de l'Âme"},
            { t:'ul', v:[
              "Sayyidnā ʿUmar : « » — évaluez vos âmes avant d'être évalués.",
              "Pratique recommandée : avant de dormir, passer en revue la journée — Shukr, les mauvaises, les occasions manquées.",
              "Le Matn d'Ibn Āshir : Muḥāsaba est la pratique centrale qui lie toutes les autres vertus.",
              "Elle n'est pas une source d'angoisse mais d'ajustement progressif et serein."
            ] },
            {"t": "h", "v": "— Les Actes d'Adoration comme École Spirituelle"},
            { t:'ul', v:[
              "<strong>Ṣalāt :</strong> Murāqaba en action — 5 fois par jour, rappel de la Présence divine.",
              "<strong>Ṣiyām :</strong> maîtrise des désirs — éṢabr Tawakkul.",
              "<strong>Zakāt :</strong> guérison du (attachement à l'argent) — éZuhd.",
              "<strong>Ḥajj :</strong> soumission totale — école de Maḥabba.",
              "<strong> :</strong> communion nocturne avec Allah — la plus haute éMurāqaba."
            ] },
            {"t": "h", "v": "— La Synthèse du Curriculum Islamique"},
            {"t": "p", "v": "Le curriculum du Matn d'Ibn Āshir se referme ici sur une vérité centrale : Islam (pratique) + Imān (croyance) + Iḥsān (excellence) forment un tout indissociable. On ne peut être vraiment Muslim sans aspirer à l'Imān, ni vraiment muʾmin sans chercher l'Iḥsān. Les niveaux de ce site d'étude reflètent ce triptyque : Débutant (pratique fondamentale) → Intermédiaire (approfondissement) → Avancé (maîtrise et intériorisation)."},
            { t:'ar', v:"وَمَا خَلَقتُ الجِنَّ وَالإِنسَ إِلَّا لِيَعبُدُونِ", n:"« Je n'ai créé les djinns et les hommes que pour M'adorer. » — Coran 51:56 — verset qui inaugure et conclut tout le curriculum islamique" },
            {"t": "note", "v": "Message final de doctrine-malikite.Tazkiya : « La spiritualité islamique n'est pas une addition facultative à la pratique — c'est son cœur et sa finalité. Sans l'aspiration à l'Iḥsān, la prière est une gymnastique, le jeûne une diète et la zakāt un impôt. Avec l'Iḥsān, chaque geste devient adoration et chaque moment devient présence. »"}
          ]
        }],quiz:{id:"quiz-avance-ihsan",title:"Questionnaire — Iḥsān Tazkiya",status:"available",score:null,questions:[        {
          id:"q-ihs-01",
          text:"La définition de l'Iḥsān donnée par le Prophète ﷺ dans le Hadīth de Gabriel est :",
          choices:[
          {id:"a",text:"Donner la zakāt avec générosité"},
          {id:"b",text:"Adorer Allah comme si tu Le voyais ; si tu ne Le vois pas, Lui te voit"},
          {id:"c",text:"Accomplir les 5 piliers parfaitement"},
          {id:"d",text:"Réciter le Coran chaque nuit"}
          ],
          correctId:"b",
          explanation:"Hadīth de Gabriel (Muslim) : le Prophète ﷺ définit l'Iḥsān comme « ». C'est la conscience permanente de la Présence divine qui transforme chaque acte en adoration authentique."
        },
        {
          id:"q-ihs-02",
          text:"Les 3 piliers du Matn d'Ibn Āshir al-Mālikī sont :",
          choices:[
          {id:"a",text:"Coran, Sunna et école malikite"},
          {id:"b",text:"Islām (pratique) + Īmān (croyance) + Iḥsān (excellence spirituelle)"},
          {id:"c",text:"Fiqh, ʿaqīda et langue arabe"},
          {id:"d",text:"Prière, jeûne et hajj"}
          ],
          correctId:"b",
          explanation:"Le Matn d'Ibn Āshir structure le curriculum islamique selon le Hadīth de Gabriel : (1) Islām — les actes pratiques (5 piliers) ; (2) Īmān — les croyances (6 piliers) ; (3) Iḥsān — l'excellence spirituelle. Les niveaux de ce site suivent cette même progression."
        },
        {
          id:"q-ihs-03",
          text:"Le (détachement du monde) signifie-t-il être pauvre et posséder peu ?",
          choices:[
          {id:"a",text:"Oui — un riche ne peut pas pratiquer le"},
          {id:"b",text:"Non — le c'est avoir le monde dans les mains sans l'avoir dans le cœur"},
          {id:"c",text:"Oui — il faut quitter son travail pour le pratiquer"},
          {id:"d",text:"Oui — c'est une condition pour atteindre le maqam supérieur"}
          ],
          correctId:"b",
          explanation:"Le n'est pas la pauvreté forcée. Ibn Qayyim : c'est reconnaître que l'Âhira vaut plus que la Dunyā et agir en conséquence — tout en travaillant et possédant légitimement. Le Prophète ﷺ était le plus pauvre des riches. Des Compagnons très riches (ʿUthmān, ʿAbd al-Raḥmān ibn ʿAwf) pratiquaient le tout en étant commerçants prospères."
        },
        {
          id:"q-ihs-04",
          text:"Tawakkul (confiance en Allah) : quelle erreur fréquente faut-il éviter ?",
          choices:[
          {id:"a",text:"Tawakkul avec la paresse ou le fatalisme — il faut agir pleinement avant de s'en remettre à Allah"},
          {id:"b",text:"Trop travailler"},
          {id:"c",text:"Ne pas prier assez"},
          {id:"d",text:"Tawakkul avec le"}
          ],
          correctId:"a",
          explanation:"Hadīth : « Attache ton chameau, puis fais confiance à Allah. » Tawakkul = prendre tous les moyens nécessaires + remettre le résultat à Allah. C'est l'antidote à deux erreurs : l'attachement aux résultats (absence de confiance) et la passivité fataliste (prétexte spirituel pour l'inaction)."
        },
        {
          id:"q-ihs-05",
          text:"La GhiḅGhiḅṭa diffère du en ce que :",
          choices:[
          {id:"a",text:"La GhiḅGhiḅṭa est plus grave"},
          {id:"b",text:"La GhiḅGhiḅṭa = désirer le même bien sans vouloir que l'autre le perde ; le = désirer la perte du bien chez l'autre"},
          {id:"c",text:"Elles sont identiques"},
          {id:"d",text:"La GhiḅGhiḅṭa concerne seulement les biens matériels"}
          ],
          correctId:"b",
          explanation:"Distinction essentielle : Ḥasad = jalousie destructrice (vouloir que le bienfait disparaisse de l'autre). GhiḅGhiḅṭa = émulation positive (vouloir avoir le même bien sans vouloir sa disparition chez l'autre). La GhiḅGhiḅṭa est permise et même recommandée pour la connaissance et les bonnes actions. Hadīth : « Pas d'envie sauf dans deux cas : l'homme savant qui enseigne, et l'homme généreux. »"
        },
        {
          id:"q-ihs-06",
          text:"Comment guéRiyāʾ (ostentation) selon al-Ghazālī et le Matn d'Ibn Āshir ?",
          choices:[
          {id:"a",text:"Arrêter tous les actes d'adoration publics"},
          {id:"b",text:"Multiplier les ʿibādāt secrètes, rechercher uniquement le regard d'Allah, rappeler la mort"},
          {id:"c",text:"Parler moins de sa pratique religieuse"},
          {id:"d",text:"Faire 100 prostrations supplémentaires chaque jour"}
          ],
          correctId:"b",
          explanation:"RemèRiyāʾ : (1) multiplier les ʿibādāt secrètes (prière de nuit, dons anonymes) pour désaccoutumer l'âme du regard des autres ; (2) rappeler constamment que seul le regard d'Allah compte ; (3) rappeler la mort et le Jugement. Hadīth Qudsī : « Je suis le plus riche des associés — celui qui M'associe quelqu'un, Je l'abandonne à son associé. »"
        },
        {
          id:"q-ihs-07",
          text:"Murāqaba est la traduction pratique de quelle définition ?",
          choices:[
          {id:"a",text:"Du"},
          {id:"b",text:"De la définition de l'Iḥsān (adorer Allah comme si tu Le voyais)"},
          {id:"c",text:"Tawba"},
          {id:"d",text:"Shukr"}
          ],
          correctId:"b",
          explanation:"Murāqaba (conscience d'être observé par Allah) est la mise en pratique quotidienne de la définition de l'Iḥsān : « adorer Allah comme si tu Le voyais — si tu ne Le vois pas, Lui te voit. » C'est l'état intérieur permanent qui transforme chaque geste en adoration."
        },
        {
          id:"q-ihs-08",
          text:"Muḥāsaba est :",
          choices:[
          {id:"a",text:"Prier 5 fois par jour avec attention"},
          {id:"b",text:"« Évaluez vos âmes avant d'être évalués » — bilan quotidien avant le sommeil"},
          {id:"c",text:"Lire le Coran une heure par jour"},
          {id:"d",text:"Jeûner tous les lundis et jeudis"}
          ],
          correctId:"b",
          explanation:"Sayyidnā ʿUmar ﵁ : « » — l'auto-évaluation quotidienne précède l'évaluation divine. Le Matn d'Ibn Āshir recommande ce bilan avant le sommeil : Shukr pour les bonnes actions, demander pardon pour les fautes, identifier les opportunités manquées."
        },
        {
          id:"q-ihs-09",
          text:"Le Ḥiqd (rancœur) : combien de temps Islam tolère-t-il la brouille entre Muslims ?",
          choices:[
          {id:"a",text:"1 an"},
          {id:"b",text:"1 semaine"},
          {id:"c",text:"3 jours au maximum — la réconciliation est obligatoire passé ce délai"},
          {id:"d",text:"Indéfiniment si la faute est grave"}
          ],
          correctId:"c",
          explanation:"Hadīth du Prophète ﷺ : « Il n'est pas permis au Muslim de se brouiller avec son frère plus de 3 jours. » Doctrine-malikite.fr confirme que la (réconciliation) est obligatoire. La réconciliation peut se faire par un salut, un sourire ou un geste de bienveillance — pas forcément une discussion longue."
        },
        {
          id:"q-ihs-10",
          text:"Comment la prièṢalāt s'inscrit-elle dans la progression vers l'Iḥsān ?",
          choices:[
          {id:"a",text:"Elle n'a pas de dimension spirituelle — c'est une obligation mécanique"},
          {id:"b",text:"La prière est une éMurāqaba — 5 rappels par jour de la Présence divine, transformant l'adoration en conscience permanente"},
          {id:"c",text:"Elle n'est liée qu'à Islām"},
          {id:"d",text:"Son seul rôle est de prévenir de l'immoralité"}
          ],
          correctId:"b",
          explanation:"Dans le cadre de l'Iḥsān, la prière est bien plus qu'une obligation : c'est une éMurāqaba. 5 fois par jour, le Muslim interrompt sa vie pour se tenir devant Allah en pleine conscience. Khushūʿ (présence du cœur) dans la prière est l'Iḥsān en acte."
        },
        {
          id:"q-ihs-11",
          text:"Selon la tradition malikite, l'éthique sociale fait-elle partie de l'Iḥsān ?",
          choices:[
          {id:"a",text:"Non — l'Iḥsān est purement spirituel/intérieur"},
          {id:"b",text:"Oui — Tazkiya authentique se manifeste obligatoirement dans les relations avec autrui"},
          {id:"c",text:"Seulement pour les savants et les saints"},
          {id:"d",text:"Non — l'éthique est une dimension séparéFiqh"}
          ],
          correctId:"b",
          explanation:"Le Matn d'Ibn Āshir conclut précisément par l'éthique sociale car la spiritualité islamique est sociale par nature. Un « spirituel » qui maltraite sa famille ou ses voisins n'a pas accompli l'Iḥsān. Doctrine-malikite.fr : « La spiritualité qui ne se manifeste pas dans la douceur, la générosité et l'honnêteté avec autrui est une illusion. »"
        },
        {
          id:"q-ihs-12",
          text:"Les 4 pratiques d'Tazkiya sont :",
          choices:[
          {id:"a",text:"Prière, jeûne, zakat, hajj"},
          {id:"b",text:"Murāqaba (surveiller ses intentions) + Muḥāsaba (bilan) + Mujāhada (effort sur l'âme) + (se pénaliser pour ses fautes)"},
          {id:"c",text:"Lire, mémoriser, enseigner, pratiquer"},
          {id:"d",text:"Repentir, prière de nuit, jeûne et sadaqa"}
          ],
          correctId:"b",
          explanation:"La méTazkiya d'al-Ghazālī (adoptée par Ibn Āshir) : (1) Murāqaba — surveiller ses intentions avant l'acte ; (2) Muḥāsaba — évaluer ses actions après l'acte ; (3) Mujāhada — lutter contre les tendances négatives de l'âme ; (4) — se pénaliser pour les fautes par des actes d'adoration supplémentaires."
        },
        {
          id:"q-ihs-13",
          text:"Le (prière de nuit) : pourquoi est-il la plus haute éMurāqaba ?",
          choices:[
          {id:"a",text:"Parce que c'est obligatoire"},
          {id:"b",text:"Car on s'élève seul dans la nuit, sans regard humain possible — c'est la communion la plus pure et la plus sincère avec Allah"},
          {id:"c",text:"Parce qu'il dure plus longtemps"},
          {id:"d",text:"Car il remplace les prières manquées"}
          ],
          correctId:"b",
          explanation:"Le est la plus pure éMurāqaba car il est accompli dans la solitude nocturne, hors de tout regard humain — Riyāʾ (ostentation) possible. Hadīth : « Notre Seigneur descend au dernier tiers de la nuit... » — moment de proximité maximale avec Allah. Coran 73:1-6 : « La prière nocturne est plus impressionnante et plus propice à la sincérité du discours. »"
        },
        {
          id:"q-ihs-14",
          text:"Peut-on pratiquer l'Iḥsān sans maîtriser le Fiqh ?",
          choices:[
          {id:"a",text:"Oui — la spiritualité se passe du fiqh"},
          {id:"b",text:"Non — l'Iḥsān est le sommet d'un édifice dont le (les actes corrects) est la fondation indispensable"},
          {id:"c",text:"Oui si on a la bonne intention"},
          {id:"d",text:"Non seulement les savants peuvent pratiquer l'"}
          ],
          correctId:"b",
          explanation:"Le triptyque du Matn d'Ibn Āshir est hiérarchique : l'Islām précède l'Īmān (croyance correcte) qui précède l'Iḥsān (excellence spirituelle). Sans fondations solides, la « spiritualité » flotte dans le vide. Une adoration incorrecte ne peut pas être excellente — elle doit d'abord être valide."
        },
        {
          id:"q-ihs-15",
          text:"Quelle est la finalité ultime de tout le curriculum islamique selon le Coran 51:56 ?",
          choices:[
          {id:"a",text:"La paix dans le monde"},
          {id:"b",text:"La construction d'une civilisation islamique"},
          {id:"c",text:"L'adoration d'Allah —"},
          {id:"d",text:"L'éducation des enfants"}
          ],
          correctId:"c",
          explanation:"Coran 51:56 : « » — « Je n'ai créé les djinns et les hommes que pour M'adorer. » C'est le verset qui couronne et justifie tout le curriculum islamique : Fiqh (pratiquer correctement), Īmān (croire sincèrement), Iḥsān (adorer avec excellence) — tout converge vers l'adoration consciente et sincère d'Allah."
        }]}}]};