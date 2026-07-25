/* ════════════════════════════════════════════════════════
   BRIQUE: Données — Niveau Intermédiaire (intermediaire.js)
   Sources : Risāla Ibn Abī Zayd al-Qayrawānī (ch. 20-34)
             Mukhtasar Khalīl ibn Isḥāq al-Mālikī (pp. 38-165)
             doctrine-malikite.fr
   ════════════════════════════════════════════════════════ */

const INTERMEDIAIRE = {
  id: 'intermediaire',
  label: 'Intermédiaire',
  arabicLabel: 'المستوى الثاني',
  levelColor: '#8A620A',
  source: 'Risāla Ibn Abī Zayd · Mukhtasar Khalīl · doctrine-malikite.fr',
  description: 'Approfondissement de la jurisprudence malikite : pèlerinage, dispositions funéraires, mariage, alimentation et transactions commerciales.',

  levelBadge: {
    id: 'badge-intermediaire-or',
    title: 'Érudit Intermédiaire',
    arabicTitle: 'الفَقِيهُ المُتَوَسِّط',
    icon: 'star8',
    color: 'gold',
    unlockCondition: 'Obtenir ≥ 85 % de moyenne sur l\'ensemble des questionnaires du niveau Intermédiaire'
  },

  subjects: [

    /* ═══ Janāʾiz ═══ */
    {
      id: "janaza",
      title: "Les Dispositions Funéraires",
      arabicTitle: "al-janāʾiz (الجَنَائِز)",
      icon: "janaza",
      description: "Règles islamiques concernant l'accompagnement du mourant, la préparation du corps, la prière funèbre et l'inhumation selon le rite malikite.",
      source: "Risāla Ibn Abī Zayd ch. 20-22 · Mukhtasar Khalīl · doctrine-malikite.fr",
      badge: {
        id: "badge-int-janaza",
        title: "Gardien des Rites Funèbres",
        arabicTitle: "عَارِف أَحكَام al-janāʾiz (الجَنَائِز)",
        icon: "moon",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Janāʾiz"
      },

      lessons: [
      {
        id: "jan-01",
        title: "Iḥtiḍār — Accompagner l'Agonisant",
        status: 'available',
        content: [
        {"t": "lead", "v": "S'occuper du déFarḍ Kifāya (obligation communautaire) — si la communauté s'en charge, tous sont exonérés ; si personne ne le fait, tous sont en péché. La Risāla d'Ibn Abī Zayd al-Qayrawānī y consacre les chapitres 20 à 22."},
        { t:'ar', v:"قَالَ النَّبِيُّ ﷺ : حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ... وَاتِّبَاعُ al-janāʾiz (الجَنَائِز)ِ", n:"Le Prophète ﷺ : « Le musulman a cinq droits sur le musulman … suivre les cortèges funèbres. » — al-Bukhārī et Muslim" },
        {"t": "h", "v": "Accompagnement de l'agonisant"},
        { t:'ul', v:[
          "Orienter l'agonisant vers la قِبلَة si possible.",
          "Lui suggérer doucement la شَهَادَة sans l'obliger.",
          "Fermer ses yeux au moment du décès.",
          "Lecture de سُورَة يَس au chevet : recommandée selon Ibn Abī Zayd.",
          "Les larmes sont permises et même rapportées du Prophète ﷺ.",
          "<strong>Interdit : Niyāḥa</strong> (lamentations, cris, se déchirer les vêtements, se raser les cheveux) — حَرَام explicitement."
        ] },
        {"t": "h", "v": "Annonce du décès et présence des femmes en état d'impureté"},
        { t:'ul', v:[
          "Il est recommandable que la femme en حَيْض et les personnes en جَنَابَة ne s'approchent pas du mourant selon Ibn Abī Zayd.",
          "La mort doit être annoncée à la famille et à la communauté pour organiser الجَنَازَة.",
          "Il est blâmable de pousser des cris au moment du décès — la patience et la dignité sont plus méritoires."
        ] },
        {"t": "note", "v": "Rappel malikite : annoncer le décèNiyāḥa (cris ritualisés) est un des actes les plus clairement prohibés par hadīth. Abū Mūsā al-Ashʿarī s'est désolidarisé de sa femme qui pleurait en lamentations."}
        ]
      },
      {
        id: "jan-02",
        title: "الغُسْل وKafan — Lavage et Linceul",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le lavage du corps Farḍ Kifāya. Il n'y a pas de nombre fixe de lavages — l'objectif est la propreté. Ibn Abī Zayd détaille la méthode dans la Risāla."},
        {"t": "h", "v": "الغُسْل — Règles du lavage"},
        { t:'ul', v:[
          "Nombre impair de fois (3, 5, 7…) avec eau chaude et feuilles de lotus pour nettoyer.",
          "Au dernier lavage : ajouter du camphre pour parfumer.",
          "Couvrir les parties intimes pendant tout le lavage.",
          "Ne pas couper les ongles ni raser les cheveux.",
          "Presser le ventre doucement pour vider les résidus.",
          "La أَبوس rituels (ablutions) sont recommandées mais non obligatoires sur le corps.",
          "<strong>Qui lave qui :</strong> l'époux peut laver son épouse décédée et vice versa.",
          "Si une femme décède en voyage sans autres femmes, un homme lave son visage et ses mains avec du sable.",
          "<strong>Exception absolue :</strong> le شَهِيد (martyr tué au combat) n'est ni lavé ni prié sur lui — il est enterré avec ses vêtements. (Mukhtasar Khalīl)"
        ] },
        {"t": "h", "v": "Kafan — Le Linceul"},
        { t:'ul', v:[
          "Nombre impair de pièces : 3, 5 ou 7 — préférence pour le blanc.",
          "Le Prophète ﷺ a été enveloppé dans 3 pièces d'étoffe blanche de Saḥūl.",
          "En plus du linceul : il est recommandé de mettre une chemise et un turban sur l'homme.",
          "Parfumer les couches et les parties du corps qui servent à la prosternation.",
          "Coût du linceul prélevé sur la succession avant les dettes."
        ] },
        {"t": "h", "v": "Cas particulier : l'enfant mort-né"},
        { t:'ul', v:[
          "Pas de prière sur l'enfant qui n'a pas vagit à la naissance.",
          "S'il a vagit → on le lave et on prie sur lui.",
          "Dans tous les cas : il est mis dans un linceul et enterré au cimetière."
        ] },
        { t:'ar', v:"وَلَا يُقَلَّمُ أَظْفَارُهُ وَلَا يُحْلَقُ شَعْرُهُ وَلَا يُمَسُّ بِشَيءٍ", n:"« On ne lui coupe pas les ongles, on ne lui rase pas les cheveux, on ne le touche pas avec quoi que ce soit [d'artificiel] » — Risāla d'Ibn Abī Zayd, ch. 20" }
        ]
      },
      {
        id: "jan-03",
        title: "ṢṢalāt al-Janāza — La Prière Funèbre",
        status: 'available',
        content: [
        {"t": "lead", "v": "ṢṢalāt al-Janāza Farḍ Kifāya. Elle diffère fondamentalement des autres prières : pas de رُكُوع ni de سُجُود. Elle se fait entièrement debout avec 4 تَكبِيرَات."},
        {"t": "h", "v": "Conditions préalables"},
        { t:'ul', v:[
          "Le défunt doit être Muslim.",
          "Il doit avoir été lavé au préalable.",
          "<strong>Exception (Mukhtasar Khalīl) :</strong> le شَهِيد (martyr au combat) n'est ni lavé ni prié sur lui."
        ] },
        {"t": "h", "v": "Structure de la prière — 4 obligations"},
        { t:'ul', v:[
          "<strong>1. Niyya</strong> (intention) : prier sur ce mort et lui faire دُعَاء.",
          "<strong>2. Les 4 تَكبِيرَات</strong> — l'imam lève les mains à la 1ère takbīra.",
          "<strong>3. القِيَام</strong> (debout du début à la fin — sauf impossibilité).",
          "<strong>4. الدُّعَاء</strong> après chaque takbīra + après la 4ème takbīra."
        ] },
        {"t": "h", "v": "Déroulement détaillé"},
        { t:'ul', v:[
          "Après la 1ère takbīra : الحَمد لله Ṣalāt على النَّبِيّ ﷺ puis دُعَاء pour le mort.",
          "Idem après chaque takbīra (2ème, 3ème, 4ème).",
          "Après la 4ème takbīra : دُعَاء final puis السَّلَام.",
          "<strong>Spécificité malikite :</strong> UN SEUL salām — à voix très basse pour tous (imam compris).",
          "Position de l'imam : milieu du corps pour un homme, côté épaules pour une femme.",
          "La prière se fait à voix basse sauf l'imam pour les takbīrāt et le salām final."
        ] },
        { t:'ar', v:"اللَّهُمَّ إِنَّهُ عَبْدُكَ وَابْنُ عَبْدِكَ وَابْنُ أَمَتِكَ... اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ", n:"Duʿāʾ préféré de l'Imām Mālik dans la Muwattaʾ pour la prière funèbre" },
        {"t": "h", "v": "Cas particulier : mort absent"},
        {"t": "p", "v": "Position malikite (et hanafite) : on ne prie PAS sur le mort absent. Le cas de la prière du Prophète ﷺ sur le Négus (An-Najāshī) est considéré comme spécifique à ce personnage et au Prophète ﷺ. Les chāfiʿites et hanbalites autorisent la prière sur l'absent sous conditions."},
        {"t": "note", "v": "La récompense de la prière funèbre = 1 qīrāṭ. Rester jusqu'à l'inhumation = 2 qīrāṭ. Chaque qīrāṭ vaut comme le mont Uḥud."}
        ]
      },
      {
        id: "jan-04",
        title: "الدَّفن وزِيَارَةُ القُبُور",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'inhumation doit être effectuée sans délai excessif. Ibn Abī Zayd et le Mukhtasar Khalīl en détaillent les règles avec précision."},
        {"t": "h", "v": "الدَّفن — Règles de l'inhumation"},
        { t:'ul', v:[
          "Marcher à pied devant le convoi funèbre est préférable selon Ibn Abī Zayd.",
          "Placer le mort sur son <strong>côté droit</strong> dans la tombe, face à la قِبلَة.",
          "Le <strong>لَحد</strong> est préféré au شَقّ (fosse centrale) quand le sol est dur.",
          "Dire en déposant le mort : « O Allah, notre compagnon est devenu Ton hôte... »",
          "Il est blâmable de <strong>construire sur les tombes</strong> ou de les blanchir à la chaux (pour les personnes ordinaires).",
          "Pas d'encensoir lors du cortège.",
          "Le Muslim ne lave pas son père non-Muslim — il laisse cette charge à ses coreligionnaires."
        ] },
        {"t": "h", "v": "زِيَارَةُ القُبُور — Visite des tombes"},
        { t:'ul', v:[
          "Permise et recommandée pour se rappeler la mort.",
          "On salue les défunts : « السَّلَامُ عَلَيكُم أَهلَ الدِّيَارِ مِنَ الْمُؤمِنِينَ وَالمُسلِمِينَ... »",
          "Assister aux funérailles d'un non-Muslim : voir les détails sur doctrine-malikite.fr — position nuancée selon le lien familial.",
          "La lecture du Coran et les actions pieuses peuvent bénéficier au défunt selon les savants malikites."
        ] },
        {"t": "h", "v": "Niyāḥa et ḤḤidād"},
        { t:'ul', v:[
          "ḤḤidād (deuil) de la veuve : 4 mois et 10 jours — elle évite les parures, parfums et sorties sauf nécessité.",
          "Période de deuil pour autres personnes : 3 jours maximum.",
          "Niyāḥa (lamentations ritualisées) reste حَرَام dans tous les cas."
        ] },
        {"t": "note", "v": "Spécificité malikite sur la prière funèbre multiple : on peut prier une seule prière sur plusieurs morts. L'imam se place à côté des hommes s'il y a aussi des femmes. Si seulement des hommes, le plus méritant est le plus proche de l'imam."}
        ]
      },
      {
        id: "jan-05",
        title: "أَحكَامٌ خَاصَّة — Cas Particuliers",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le Mukhtasar Khalīl et la Risāla traitent plusieurs cas particuliers importants qui complètent les règles généJanāʾiz."},
        {"t": "h", "v": "1. Shahīd — Le Martyr"},
        { t:'ul', v:[
          "Définition : tué au combat contre les ennemis.",
          "PAS de lavage — enterré avec ses vêtements.",
          "PAS de prière funèbre sur lui.",
          "Exception : celui qui s'est suicidé ou qui a été exécuté par la loi islamique → on prie sur lui, mais pas l'imam.",
          "Si le martyr est retrouvé vivant et meurt plus tard de ses blessures → on le lave et on prie sur lui."
        ] },
        {"t": "h", "v": "2. الطِّفل — L'enfant décédé"},
        { t:'ul', v:[
          "S'il a vagit (cried at birth) → lavage + prière sur lui.",
          "S'il est mort-né sans vagissement → pas de prière.",
          "Dans tous les cas : linceul + enterrement au cimetière.",
          "Formule de duʿāʾ spéciale pour l'enfant après chaque takbīra."
        ] },
        {"t": "h", "v": "3. المَفقُود — Le disparu"},
        {"t": "p", "v": "Celui dont on ne sait pas s'il est vivant ou mort n'est pas traité comme mort avant un jugement. Sa femme attend. Son héritage n'est pas distribué."},
        {"t": "h", "v": "4. Noyé, brûlé, déchiqueté"},
        { t:'ul', v:[
          "On prie sur le corps même partiel : la majorité des parties du corps suffit.",
          "Divergence s'il ne reste qu'une main ou un pied.",
          "Si le mort est déjà enterré sans prière → on prie sur sa tombe."
        ] },
        {"t": "h", "v": "5. Prière sur plusieurs morts"},
        { t:'ul', v:[
          "Une seule prière pour plusieurs corps est valide.",
          "L'imam se place côté épaules des femmes si présentes ; côté milieu pour les hommes.",
          "Si plusieurs morts dans une même tombe → le plus méritant du côté de la قِبلَة."
        ] },
        {"t": "note", "v": "Règle fondamentale : on ne refait pas la prière funèbre sur le même mort deux fois. Si la prière a été accomplie — même incomplètement — on ne recommence pas."}
        ]
      }
      ],

      quiz: {
        id: "quiz-janaza",
        title: "Questionnaire — Janāʾiz",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-jan-01",
          text: "S'occuper du défunt muslim est :",
          choices: [
          { id:"a", text:"Sounnah" },
          { id:"b", text:"فَرضُ عَيْن" },
          { id:"c", text:"Farḍ Kifāya" },
          { id:"d", text:"Mandūb" }
          ],
          correctId: "c",
          explanation: "Laver, ensevelir, prier sur le mort et l'Farḍ Kifāya — obligation communautaire : si la communauté l'accomplit, tous sont exonérés ; sinon tous sont en péché."
        },
        {
          id: "q-jan-02",
          text: "Quelle est l'attitude correcte face aux larmes lors d'un décès ?",
          choices: [
          { id:"a", text:"Absolument interdites" },
          { id:"b", text:"Permises et même rapportées du Prophète ﷺ" },
          { id:"c", text:"Makrūh" },
          { id:"d", text:"Obligatoires pour la famille" }
          ],
          correctId: "b",
          explanation: "Les larmes sont permises — le Prophète ﷺ a lui-même pleuré lors du décès de son fils Ibrāhīm et lors de la maladie de Saʿd. Ce qui est حَرَام, c'Niyāḥa (lamentations ritualisées, cris, se déchirer les vêtements)."
        },
        {
          id: "q-jan-03",
          text: "Niyāḥa (lamentations ritualisées) lors d'un décès est :",
          choices: [
          { id:"a", text:"Makrūh seulement" },
          { id:"b", text:"Permise par tradition culturelle" },
          { id:"c", text:"حَرَام — le Prophète ﷺ s'en est formellement désolidarisé" },
          { id:"d", text:"Permise pour les femmes uniquement" }
          ],
          correctId: "c",
          explanation: "Le Prophète ﷺ : « Je me dégage de toute responsabilité vis-à-vis de celle qui se lamente, se rase les cheveux et se déchire les vêtements. » — al-Bukhārī et Muslim. Abū Mūsā al-Ashʿarī s'est désolidarisé de sa femme pour cela."
        },
        {
          id: "q-jan-04",
          text: "Combien de fois faut-il laver le corps du défunt ?",
          choices: [
          { id:"a", text:"3 fois exactement" },
          { id:"b", text:"7 fois minimum" },
          { id:"c", text:"Nombre impair, jusqu'à propreté complète" },
          { id:"d", text:"Une seule fois suffit" }
          ],
          correctId: "c",
          explanation: "Il n'y a pas de nombre fixe selon Ibn Abī Zayd — l'objectif est la propreté. La pratique courante est 3 fois en nombre impair (3, 5, 7...). Eau chaude + السِّدر (lotus) pour nettoyer ; au dernier lavage, on ajoute le كَافُور (camphre)."
        },
        {
          id: "q-jan-05",
          text: "Que doit-on ajouter à l'eau du dernier lavage du corps ?",
          choices: [
          { id:"a", text:"Du sel" },
          { id:"b", text:"Du vinaigre" },
          { id:"c", text:"Du camphre" },
          { id:"d", text:"De l'eau de rose" }
          ],
          correctId: "c",
          explanation: "Ibn Abī Zayd précise : « يُضَافُ إِلَى مَاءِ الغَسلَةِ الأَخِيرَةِ الكَافُور » — le camphre est ajouté au dernier lavage pour parfumer le corps. Les autres lavages utilisent l'eau et le lotus."
        },
        {
          id: "q-jan-06",
          text: "Doit-on couper les ongles et raser les cheveux du mort ?",
          choices: [
          { id:"a", text:"Oui, par respect" },
          { id:"b", text:"Oui, pour la propreté" },
          { id:"c", text:"Non — explicitement interdit selon Ibn Abī Zayd" },
          { id:"d", text:"Seulement pour les hommes" }
          ],
          correctId: "c",
          explanation: "Ibn Abī Zayd : « وَلَا يُقَلَّمُ أَظفَارُهُ وَلَا يُحلَقُ شَعرُهُ » — on ne coupe pas les ongles et on ne rase pas les cheveux du mort. Le corps est laissé dans son état naturel."
        },
        {
          id: "q-jan-07",
          text: "Qui peut laver le corps de son épouse décédée selon le rite malikite ?",
          choices: [
          { id:"a", text:"Seulement les femmes" },
          { id:"b", text:"L'époux peut laver son épouse décédée" },
          { id:"c", text:"Seulement les mahram" },
          { id:"d", text:"Personne n'est prioritaire — tirage au sort" }
          ],
          correctId: "b",
          explanation: "Ibn Abī Zayd : « وَحَسَنٌ أَن يَغسِلَ الرَّجُلُ زَوجَتَهُ » — l'époux survivant peut et même devrait laver son conjoint décédé. C'est une preuve de l'intimité légitime du mariage."
        },
        {
          id: "q-jan-08",
          text: "Le شَهِيد (martyr tué au combat) :",
          choices: [
          { id:"a", text:"Est lavé normalement puis prié sur lui" },
          { id:"b", text:"N'est ni lavé ni prié sur lui — enterré avec ses vêtements" },
          { id:"c", text:"Est lavé mais on ne prie pas sur lui" },
          { id:"d", text:"Reçoit le même traitement selon chaque imam" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl et la Risāla : le martyr tué au combat n'est ni lavé ni prié sur lui — il est enterré avec ses vêtements dans lesquels il a été tué. C'est un honneur particulier. Exception : celui qui meurt plus tard de ses blessures (non immédiatement) → traitement normal."
        },
        {
          id: "q-jan-09",
          text: "Combien de pièKafan ?",
          choices: [
          { id:"a", text:"1 pièce uniquement" },
          { id:"b", text:"2 pièces" },
          { id:"c", text:"Nombre impair : 3, 5 ou 7" },
          { id:"d", text:"5 pièces exactement" }
          ],
          correctId: "c",
          explanation: "Ibn Abī Zayd : linceul en nombre impair de pièces (3, 5 ou 7), blanches de préférence. Le Prophète ﷺ a été enveloppé dans 3 pièces d'étoffe blanche de Saḥūl (Yemen). On peut ajouter une chemise et un turban sans les compter dans le nombre impair."
        },
        {
          id: "q-jan-10",
          text: "La prière funèbre comprend combien de تَكبِيرَات ?",
          choices: [
          { id:"a", text:"2" },
          { id:"b", text:"3" },
          { id:"c", text:"4" },
          { id:"d", text:"5" }
          ],
          correctId: "c",
          explanation: "ṢṢalāt al-Janāza comprend QUATRE تَكبِيرَات. Après chaque takbīra : الحَمد لله, Ṣalāt على النَّبِيّ ﷺ, duʿāʾ pour le mort. C'est une prière unique sans رُكُوع ni سُجُود."
        },
        {
          id: "q-jan-11",
          text: "Y a-t-il un رُكُوع ou un سُجُود dans la prière funèbre ?",
          choices: [
          { id:"a", text:"Oui — comme dans toute prière" },
          { id:"b", text:"Seulement le رُكُوع" },
          { id:"c", text:"Non — ṢṢalāt al-Janāza se fait entièrement debout" },
          { id:"d", text:"Seulement deux prosternations à la fin" }
          ],
          correctId: "c",
          explanation: "ṢṢalāt al-Janāza est accomplie entièrement en QIYĀm (position debout) avec 4 takbīrāt. Pas de رُكُوع, pas de سُجُود, pas de تَشَهُّد assis. C'est l'une des caractéristiques distinctives de cette prière."
        },
        {
          id: "q-jan-12",
          text: "Combien de salāms fait-on en rite malikite à la fin de la prière funèbre ?",
          choices: [
          { id:"a", text:"Deux salāms : droite et gauche" },
          { id:"b", text:"Un seul salām — à voix très basse" },
          { id:"c", text:"Trois salāms" },
          { id:"d", text:"Pas de salām — on lève seulement les mains" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : UN SEUL salām à la fin de ṢṢalāt al-Janāza, prononcé à voix très basse par tout le monde (imam compris). C'est différent des autres rites."
        },
        {
          id: "q-jan-13",
          text: "Où se place l'imam pour prier sur une femme décédée ?",
          choices: [
          { id:"a", text:"Milieu du corps" },
          { id:"b", text:"Au niveau des pieds" },
          { id:"c", text:"Au niveau des épaules" },
          { id:"d", text:"Côté de la tête" }
          ],
          correctId: "c",
          explanation: "Dokument de la Risāla et doctrine-malikite.fr : l'imam se place à la hauteur du milieu du corps pour un homme, et à la hauteur des ÉPAULES pour une femme. C'est une précision malikite importante."
        },
        {
          id: "q-jan-14",
          text: "Peut-on prier sur le mort absent (mort dans un autre pays) selon le rite malikite ?",
          choices: [
          { id:"a", text:"Oui — comme le Prophète ﷺ a prié sur le Négus" },
          { id:"b", text:"Oui si c'est un grand savant" },
          { id:"c", text:"Non — la prière sur l'absent est spécifique au Prophète ﷺ selon la position malikite" },
          { id:"d", text:"Oui avec la permission du juge" }
          ],
          correctId: "c",
          explanation: "Position malikite (et hanafite) : on ne prie PAS sur le mort absent. Le cas du Négus (An-Najāshī) est considéré comme spécifique au Prophète ﷺ et à ce personnage. Contrairement aux chāfiʿites et hanbalites qui l'autorisent sous conditions."
        },
        {
          id: "q-jan-15",
          text: "Quel type de tombe est préféré en rite malikite quand le sol est dur ?",
          choices: [
          { id:"a", text:"الشَّقّ (fosse centrale)" },
          { id:"b", text:"Laḥd" },
          { id:"c", text:"La tombe en béton" },
          { id:"d", text:"Indifférent selon l'Imām Mālik" }
          ],
          correctId: "b",
          explanation: "Ibn Abī Zayd : le لَحد est préféré au شَقّ (fosse centrale) quand le sol est dur et ne s'effrite pas. Le Prophète ﷺ a été inhumé dans un لَحد."
        },
        {
          id: "q-jan-16",
          text: "<strong>SCÉNARIO :</strong> Une femme décède dans un voyage sans autres femmes ni mahram. Comment est-elle préparée ?",
          choices: [
          { id:"a", text:"Elle n'est pas lavée et enterrée telle quelle" },
          { id:"b", text:"Tayammum" },
          { id:"c", text:"Elle est lavée normalement par un homme" },
          { id:"d", text:"On attend de trouver une femme" }
          ],
          correctId: "b",
          explanation: "Ibn Abī Zayd : « Si une femme meurt en voyage sans autres femmes ni mahram, un homme lui frotte le visage et les mains (jusqu'aux poignets) avec du sable (tayammum). » Le corps ne peut pas être lavé par des non-mahram."
        },
        {
          id: "q-jan-17",
          text: "Peut-on pratiquer la prière funèbre sur plusieurs morts en une seule prière ?",
          choices: [
          { id:"a", text:"Non — une prière par personne obligatoirement" },
          { id:"b", text:"Oui — une seule prière pour plusieurs corps est valide" },
          { id:"c", text:"Seulement si ce sont des membres de la même famille" },
          { id:"d", text:"Seulement si morts le même jour" }
          ],
          correctId: "b",
          explanation: "Oui, une seule ṢṢalāt al-Janāza pour plusieurs corps est valide. L'imam se place côté épaules des femmes s'il y a aussi des hommes, ou côté milieu pour les hommes. Chaque corps est disposé derrière l'imam en rangs."
        },
        {
          id: "q-jan-18",
          text: "Le حِدَاد (deuil) de la veuve dure :",
          choices: [
          { id:"a", text:"3 jours" },
          { id:"b", text:"40 jours" },
          { id:"c", text:"4 mois et 10 jours" },
          { id:"d", text:"Un an" }
          ],
          correctId: "c",
          explanation: "La veuve fait le حِدَاد pendant 4 mois et 10 jours : elle évite les parures, parfums, sortie sans nécessité, et coloration des cheveux. Pour les autres proches (parents, enfants) : 3 jours maximum de deuil."
        },
        {
          id: "q-jan-19",
          text: "Si le mort a été enterré sans prière funèbre, peut-on prier sur sa tombe ?",
          choices: [
          { id:"a", text:"Non — il est trop tard" },
          { id:"b", text:"Oui — on peut prier sur la tombe" },
          { id:"c", text:"Seulement dans les 24h" },
          { id:"d", text:"Seulement si c'est le même jour" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : si un mort est enterré sans prière, on prie sur sa tombe. Mais la prière ne se fait pas deux fois sur le même mort — une fois accomplie (même sur la tombe), on ne recommence pas."
        },
        {
          id: "q-jan-20",
          text: "L'enfant qui naît sans vagir (mort-né) — comment est-il traité ?",
          choices: [
          { id:"a", text:"Lavage + prière sur lui comme tout Muslim" },
          { id:"b", text:"Pas de prière, mais mis dans un linceul et enterré au cimetière" },
          { id:"c", text:"Enterré dans la maison" },
          { id:"d", text:"Même traitement que tout nouveau-né" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : l'enfant mort-né sans vagissement n'est pas prié sur lui. En revanche, il est mis dans un linceul et enterré au cimetière — il n'est pas blâmable de l'enterrer dans les habitations (mais c'est déconseillé selon Ibn Abī Zayd)."
        },
        {
          id: "q-jan-21",
          text: "La prière funèbre est-elle valide en voiture ou sur une monture (sans descendre) ?",
          choices: [
          { id:"a", text:"Oui toujours" },
          { id:"b", text:"Non — elle nécessite la position debout sur le sol" },
          { id:"c", text:"Oui en cas de nécessité uniquement" },
          { id:"d", text:"Oui pour le malade qui ne peut se lever" }
          ],
          correctId: "b",
          explanation: "ṢṢalāt al-Janāza requiert le قِيَام (debout) comme condition. Elle ne peut pas être faite assis sans excuse médicale. Si quelqu'un ne peut se tenir debout, il la fait assis — mais pas sur une monture sans nécessité absolue."
        },
        {
          id: "q-jan-22",
          text: "Quelle est la récompense de suivre un cortège funèbre jusqu'à l'enterrement ?",
          choices: [
          { id:"a", text:"1 qīrāṭ" },
          { id:"b", text:"2 qīrāṭ — équivalant au mont Uḥud" },
          { id:"c", text:"3 qīrāṭ" },
          { id:"d", text:"La récompense n'est pas précisée" }
          ],
          correctId: "b",
          explanation: "Le Prophète ﷺ : « Celui qui assiste aux funérailles jusqu'à la prière a 1 qīrāṭ. Celui qui reste jusqu'à l'enterrement a 2 qīrāṭ — chaque qīrāṭ comme le mont Uḥud. » Le fait de rester jusqu'à l'inhumation double la récompense."
        },
        {
          id: "q-jan-23",
          text: "Doit-on attendre un nombre de jours minimum avant d'enterrer le mort ?",
          choices: [
          { id:"a", text:"Minimum 24 heures pour permettre à la famille d'arriver" },
          { id:"b", text:"Non — l'enterrement doit se faire le plus tôt possible" },
          { id:"c", text:"Minimum 3 jours selon la tradition malikite" },
          { id:"d", text:"Indifférent — selon la tradition locale" }
          ],
          correctId: "b",
          explanation: "L'Islam encourage d'inhumer le mort rapidement. Retarder sans raison valable est déconseillé. On n'attend pas un délai minimum — on s'organise le plus vite possible pour le bien du défunt."
        },
        {
          id: "q-jan-24",
          text: "Le coûKafan est prélevé sur :",
          choices: [
          { id:"a", text:"La famille obligatoirement" },
          { id:"b", text:"La communauté (beit al-māl)" },
          { id:"c", text:"La succession du défunt AVANT les dettes et l'héritage" },
          { id:"d", text:"Celui qui s'en charge volontairement" }
          ],
          correctId: "c",
          explanation: "Le coût du linceul est prélevé en priorité sur la succession du défunt, avant même les dettes et l'héritage. C'est une dette prioritaire du défunt envers lui-même."
        },
        {
          id: "q-jan-25",
          text: "<strong>ÉVALUATION FINALE :</strong> Un homme décède en voyage avec seulement d'autres hommes non-mahram d'une femme décédée. Que font-ils ?",
          choices: [
          { id:"a", text:"Ils la lavent normalement — nécessité l'impose" },
          { id:"b", text:"Tayammum (frotter le visage et les mains) et la prient sur elle" },
          { id:"c", text:"Ils l'enterrent sans lavage ni prière" },
          { id:"d", text:"Ils attendent de trouver des femmes ou un mahram" }
          ],
          correctId: "b",
          explanation: "Ibn Abī Zayd : en l'absence de femmes et de mahram, Tayammum sur le visage et les mains. Si un mahram est présent, il peut la laver entièrement par-dessus un tissu couvrant le corps. La prière funèbre est toujours accomplie sur elle."
        }
        ]
      }
    },

    /* ═══ Ḥajj وʿUmra ═══ */
    {
      id: "hajj",
      title: "Le Pèlerinage",
      arabicTitle: "al-ḥajj (الحَجّ) والعُمرَة",
      icon: "hajj",
      description: "Le cinquième pilier de l'Islam : piliers, devoirs et sounnah du pèlerinage selon le rite malikite — avec ses spécificités.",
      source: "Risāla Ibn Abī Zayd ch. 31 · Mukhtasar Khalīl pp. 63-78 · doctrine-malikite.fr",
      badge: {
        id: "badge-int-hajj",
        title: "Pèlerin Accompli",
        arabicTitle: "الحَاجُّ العَارِف",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Ḥajj"
      },

      lessons: [
      {
        id: "haj-01",
        title: "فَرضُ Ḥajj وشُرُوطُه — Obligation et Conditions",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ḥajj est le 5ème pilier de l'Islam, obligatoire UNE fois dans la vie pour qui en a les moyens. La Risāla (ch. 31) et le Mukhtasar Khalīl (pp. 63-78) en détaillent les conditions."},
        { t:'ar', v:"فَرضُ الحَجِّ وَسُنَّةُ الْعُمرَةِ مَرَّةً", n:"« Le Hajj est une obligation et l'Umra est une sounnah — chacun une fois. » — Mukhtasar Khalīl, début du chapitre al-ḥajj (الحَجّ)" },
        {"t": "h", "v": "شُرُوطُ الوُجُوب — Conditions d'obligation"},
        { t:'ul', v:[
          "<strong>1. Islām</strong> : seul le Muslim est astreint au حَجّ.",
          "<strong>2. البُلُوغ</strong> : obligation à la puberté. L'enfant qui fait le حَجّ avant la puberté → le حَجّ est valide mais ne dispense pas de l'obligation à l'âge adulte.",
          "<strong>3. الحُرِّيَّة</strong> : l'esclave n'est pas obligé (contexte historique).",
          "<strong>4. الاستطاعة</strong> : capacité financière et physique et sécurité du chemin.",
          "La mer (voyage maritime) est comme la terre — sauf si le danger y est clairement prépondérant.",
          "Pour la femme : محرم ou groupe de femmes de confiance (divergence interne à l'école malikite sur ce point).",
          "Mukhtasar Khalīl : valide même si accompli avec de l'argent illicite — le حَجّ est صَحِيح mais le priant est en péché."
        ] },
        {"t": "h", "v": "الفَورِيَّة والتَّرَاخِي — Immédiateté ou report"},
        {"t": "p", "v": "Divergence au sein de l'école malikite : faut-il accomplir le حَجّ dès que les conditions sont réunies ou peut-on le reporter à tout moment de la vie ? Le Mukhtasar Khalīl mentionne cette divergence sans trancher définitivement."},
        {"t": "h", "v": "Ḥajj par procuration"},
        { t:'ul', v:[
          "Valide pour le mort qui n'a pas accompli le حَجّ obligatoire.",
          "Valide pour l'incapable physique permanent.",
          "Le mandataire doit d'abord avoir accompli son propre حَجّ obligatoire.",
          "Mukhtasar Khalīl : l'Imārat à loyer est valide pour le حَجّ."
        ] },
        {"t": "h", "v": "ʿUmra — Statut particulier"},
        {"t": "p", "v": "<strong>Spécificité malikite fondamentale :</strong> l'عُمرَة est سُنَّة مُؤَكَّدَة (sounnah appuyée), PAS une obligation — contrairement à l'école chāfiʿite qui la rend واجبة et à certains savants malikites tardifs. Mukhtasar Khalīl : « فَرضُ الحَجِّ وَسُنَّةُ ʿUmraِ مَرَّةً »."}
        ]
      },
      {
        id: "haj-02",
        title: "Iḥrām والمَوَاقِيت",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'إِحرَام est le premier pilier du حَجّ. Il doit être pris depuis le مِيقَات (seuil géographique) Niyya appropriée."},
        {"t": "h", "v": "المَوَاقِيت المَكَانِيَّة — Seuils géographiques"},
        { t:'ul', v:[
          "ذُو الحُلَيفَة : mīqāt des gens de Médine.",
          "الجُحفَة : mīqāt des gens du Maghreb et d'Égypte.",
          "يَلَملَم : mīqāt des gens du Yemen.",
          "قَرن المَنَازِل : mīqāt des gens du Najd.",
          "ذَاتُ عِرق : mīqāt des gens d'Irak.",
          "Les gens de La Mecque : leurs mīqāt est La Mecque elle-même."
        ] },
        {"t": "h", "v": "أَعمَال Iḥrām — Ce qu'on fait lors de l'إِحرَام"},
        { t:'ul', v:[
          "Se laver.",
          "Mettre les vêtements d'إِحرَام : 2 pièces d'étoffe non cousues pour l'homme.",
          "Niyya explicitement.",
          "Dire la تَلبِيَة : « لَبَّيكَ اللَّهُمَّ لَبَّيكَ... »",
          "Mukhtasar Khalīl : l'إِحرَام est valide même si prononcé lors d'un rapport conjugal."
        ] },
        {"t": "h", "v": "Maḥẓūrāt — Interdictions de l'إِحرَام"},
        { t:'ul', v:[
          "<strong>Pour l'homme :</strong> couvrir la tête, porter des vêtements cousus (chemises, pantalons, chaussettes).",
          "<strong>Pour tous :</strong> rapport sexuel avant عَرَفَة), se couper les cheveux ou ongles, se parfumer, chasser.",
          "Couverture des pieds avec les chaussures ordinaires → réservé aux femmes et aux nécessiteux."
        ] },
        {"t": "h", "v": "تجاوز Mīqāt بلا إِحرَام"},
        {"t": "p", "v": "Si quelqu'un passe le مِيقَات sans إِحرَام sans excuse → obligation de revenir au مِيقَات OU payer un دَم (sacrifice). S'il entre en إِحرَام depuis La Mecque sans revenir au مِيقَات : sa prière est valide mais il doit un دَم."},
        {"t": "note", "v": "Mukhtasar Khalīl précise que celui qui passe le مِيقَات sans إِحرَام peut revenir y prendre l'إِحرَام sans دَم si le revenir est possible. Sinon, le دَم est obligatoire."}
        ]
      },
      {
        id: "haj-03",
        title: "أَركَان Ḥajj — Les Piliers",
        status: 'available',
        content: [
        {"t": "lead", "v": "Les piliers sont les éléments essentiels dont l'omission invalide le حَجّ entièrement — on ne peut les compenser par un دَم. Il y en a 4 selon l'école malikite."},
        {"t": "h", "v": "الرُّكن الأَوَّل : Iḥrām"},
        {"t": "p", "v": "L'intention d'entrer en état d'إِحرَام depuis le مِيقَات. Iḥrām, il n'y a pas de حَجّ. Il doit précéder tous les autres actes."},
        {"t": "h", "v": "الرُّكن الثَّاني : Wuqūf بِعَرَفَة"},
        { t:'ul', v:[
          "Se trouver à ʿArafāt du déclin du soleil du 9 Dhū al-Ḥijja jusqu'au lever du 10 (avec passage à Muzdalifa).",
          "C'est le pilier CENTRAL : « الحَجُّ عَرَفَة ».",
          "Minimum : être présent, même brièvement (de nuit inclus selon certains).",
          "Si on rate entièrement عَرَفَة → حَجّ invalide, doit être refait l'année suivante."
        ] },
        {"t": "h", "v": "الرُّكن الثَّالث : ṬṬawāf al-Ifāḍa"},
        { t:'ul', v:[
          "7 tours autour de la Kaʿba après le وُقُوف à عَرَفَة.",
          "Conditions : pureté rituelle, couvrir la عَوْرَة, La Kaʿba doit être à la gauche.",
          "Commencer depuis la Pierre Noire.",
          "Après le طَوَاف : 2 rakʿāt derrière المَقَام (sounnah)."
        ] },
        {"t": "h", "v": "الرُّكن الرَّابع : Saʿy بين Ṣaffَا والمَروَة"},
        { t:'ul', v:[
          "7 fois entre Ṣaffَا et المَروَة (aller = 1, retour = 2, etc.).",
          "Commencer par Ṣaffَا.",
          "Pour les hommes : hâter le pas entre les 2 panneaux verts dans la partie basse.",
          "Pas de condition de pureté rituelle obligatoire pour le سَعي selon une opinion malikite (mais préféré)."
        ] },
        { t:'ar', v:"اَلحَجُّ عَرَفَةُ", n:"« Le Hajj c'est ʿArafāt » — Hadīth du Prophète ﷺ (Abū Dāwūd, al-Tirmidhī)" },
        {"t": "note", "v": "Ces 4 piliers sont obligatoires dans cet ordre et ne peuvent être compensés par un دَم. Si l'un manque, le حَجّ est invalide. Wājibَات (devoirs) dont l'omission impose un دَم sans invalider le حَجّ."}
        ]
      },
      {
        id: "haj-04",
        title: "Wājibَات Ḥajj وHady",
        status: 'available',
        content: [
        {"t": "lead", "v": "Wājibَات sont des devoirs dont l'omission n'invalide pas le حَجّ mais impose un دَم (sacrifice expiatoire). Les sounnah n'imposent rien si omises."},
        {"t": "h", "v": "Wājibَات Ḥajj — Les Devoirs"},
        { t:'ul', v:[
          "<strong>1.</strong> L'إِحرَام depuis le مِيقَات (pas depuis avant ni depuis après).",
          "<strong>2.</strong> المَبِيت à Muzdalifa (nuit du 9 au 10 Dhū al-Ḥijja).",
          "<strong>3.</strong> المَبِيت à Minā (nuits des 11, 12 et éventuellement 13 Dhū al-Ḥijja).",
          "<strong>4.</strong> Ramy al-Jamarāt (lapidation des 3 stèles) — 7 cailloux par stèle.",
          "<strong>5.</strong> ḤḤalq أو Taqṣīr.",
          "<strong>6.</strong> ṬṬawāf al-Wadāʿ (tawāf d'adieu avant de quitter La Mecque)."
        ] },
        {"t": "h", "v": "Hady — Le Sacrifice du Pèlerinage"},
        { t:'ul', v:[
          "Obligatoire pour le تَمَتُّع et le قِرَان.",
          "Sounnah pour l'إِفرَاد.",
          "Si le هَدي est introuvable : 3 jours de jeûne pendant le حَجّ + 7 jours après le retour.",
          "Mukhtasar Khalīl : si le هَدي tombe en panne avant son lieu d'abattage → on l'égore et on laisse aux passants (on ne le mange pas soi-même).",
          "Lieu d'abattage : le هَدي pour le تَمَتُّع → dans l'enceinte de الحَرَم."
        ] },
        {"t": "h", "v": "Iḥṣār — Être empêché d'accomplir le Hajj"},
        {"t": "p", "v": "Si un ennemi ou une force majeure empêche d'atteindre La Mecque, le pèlerin peut se libérer de l'إِحرَام avec un هَدي envoyé à La Mecque. Pas d'obligation de refaire le حَجّ si c'était un حَجّ non obligatoire."},
        {"t": "note", "v": "Différence fondamentale avec les prières : dans la prière, si on oublie une obligation, la prière est invalide. Dans le حَجّ, Wājibَات manquants sont compensés par un دَم, et le حَجّ reste valide."}
        ]
      },
      {
        id: "haj-05",
        title: "أَنوَاع Ḥajj الثَّلَاثَة",
        status: 'available',
        content: [
        {"t": "lead", "v": "Il existe 3 façons d'accomplir le حَجّ. En rite malikite, l'إِفرَاد est préféré. Le Mukhtasar Khalīl précise les règles de conversion entre les 3 formules."},
        {"t": "h", "v": "1. Ifrād — Hajj seul (PRÉFÉRÉ en rite malikite)"},
        { t:'ul', v:[
          "Accomplir le حَجّ seul, sans عُمرَة dans le même voyage.",
          "Pas de هَدي obligatoire.",
          "Spécificité malikite : l'إِفرَاد est la formule <strong>préférée</strong> — contrairement à l'école chāfiʿite qui préfère le تَمَتُّع.",
          "Mukhtasar Khalīl : Ifrād à Qirān mais pas l'inverse après le début."
        ] },
        {"t": "h", "v": "2. Tamattuʿ — Umra puis Hajj"},
        { t:'ul', v:[
          "Accomplir l'عُمرَة d'abord, puis se libérer de l'إِحرَام, puis entrer en إِحرَام pour le حَجّ.",
          "Oblige un هَدي (sacrifice).",
          "Si le هَدي est introuvable : 3 jours de jeûḤajj + 7 jours après le retour (= 10 jours).",
          "Mukhtasar Khalīl : Tamattuʿ Ifrād Qirān après le début."
        ] },
        {"t": "h", "v": "3. Qirān — Hajj et Umra ensemble"},
        { t:'ul', v:[
          "Entrer en إِحرَام pour les deux en même temps et les accomplir sans se libérer entre les deux.",
          "Oblige un هَدي.",
          "Les actes du حَجّ couvrent ceux de l'عُمرَة.",
          "Mukhtasar : Qirān vers إِفرَاد ou تَمَتُّع — ni l'inverse après engagement."
        ] },
        { t:'ar', v:"وَأَجْرَأُ تَمَتُّعٍ عَن إِفرَادٍ وَعَكَسُهُ لَا قِرَانٍ عَن إِفرَادٍ أَو تَمَتُّعٍ", n:"Mukhtasar Khalīl sur les conversions de formule : « La formule تَمَتُّع peut être convertie en إِفرَاد et vice versa, mais القِرَان ne peut être converti en aucune des deux. »" },
        {"t": "note", "v": "La grande question du حَجّ malikite : pourquoi l'إِفرَاد est préféré alors qu'il ne comporte pas de هَدي ? Réponse des savants : parce que c'est la formule du Prophète ﷺ dans son dernier حَجّ selon la narration malikite, et parce qu'il témoigne d'une dévotion plus pure, séparant les deux ibādāt."}
        ]
      },
      {
        id: "haj-06",
        title: "مَحظُورَات Iḥrām وKaffāra",
        status: 'available',
        content: [
        {"t": "lead", "v": "Les interdictions de l'إِحرَام sont des actes que l'état sacré prohibe temporairement. Leur violation déclenche différentes expiations selon leur gravité."},
        {"t": "h", "v": "Tableau des interdictions et expiations"},
        { t:'ul', v:[
          "<strong>Rapport sexuel AVANT عَرَفَة :</strong> invalide le حَجّ — doit continuer et refaire l'année suivante + une بَدَنَة (chamelle).",
          "<strong>Rapport sexuel APRÈS عَرَفَة :</strong> حَجّ valide mais impose un sacrifice.",
          "<strong>Se couper les cheveux ou ongles :</strong> فِدية — choix entre 3 jours de jeûne OU nourrir 6 pauvres OU un mouton.",
          "<strong>Se parfumer :</strong> même expiation — فِدية.",
          "<strong>Chasser :</strong> مِثل (animal sauvage équivalent) donné aux pauvres de الحَرَم.",
          "<strong>Couvrir la tête (homme) :</strong> فِدية.",
          "<strong>Porter des vêtements cousus (homme) :</strong> فِدية."
        ] },
        {"t": "h", "v": "فِدية الأَذى — Quand on est contraint"},
        { t:'ar', v:"فَمَن كَانَ مِنكُم مَّرِيضًا أَو بِهِ أَذًى مِّن رَّأسِهِ فَفِدْيَةٌ مِّن صِيَامٍ أَو صَدَقَةٍ أَو نُسُكٍ", n:"Coran 2:196 — Permission de se raser la tête pour raison médicale avec expiation" },
        {"t": "p", "v": "Si quelqu'un est contraint (maladie, insectes, douleur) de faire un acte prohibé, la فِدية lui est permise avec l'expiation. Exemple : Kaʿb ibn ʿUjra ﵁ qui avait des poux — permission de se raser la tête avec une fidya."},
        {"t": "h", "v": "أَنوَاع الدَّم في Ḥajj"},
        { t:'ul', v:[
          "دَم Tamattuʿ وQirān : une شاة (brebis) ou 1/7 d'une بَدَنَة.",
          "دَم الجِنَايَات (infractions) : selon le type — voir tableau ci-dessus.",
          "دَم Iḥṣār : un هَدي envoyé à La Mecque si on est empêché.",
          "Tous les دِمَاء doivent être abattus dans l'enceinte du حَرَم."
        ] },
        {"t": "note", "v": "Les actes permis pendant l'إِحرَام (souvent confondus avec les interdits) : se laver, changer de vêtements d'إِحرَام, porter une ceinture, porter un anneau, manger et boire, se faire soigner."}
        ]
      }
      ],

      quiz: {
        id: "quiz-hajj",
        title: "Questionnaire — Ḥajj وʿUmra",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-haj-01",
          text: "Ḥajj est un pilier de l'Islam. Son obligation est :",
          choices: [
          { id:"a", text:"Mensuelle" },
          { id:"b", text:"Annuelle" },
          { id:"c", text:"Une seule fois dans la vie" },
          { id:"d", text:"Tous les 5 ans" }
          ],
          correctId: "c",
          explanation: "Ḥajj est obligatoire une SEULE fois dans la vie pour le Muslim capable. Il peut être accompli plus d'une fois mais l'obligation est levée après la première fois."
        },
        {
          id: "q-haj-02",
          text: "L'عُمرَة est :",
          choices: [
          { id:"a", text:"Obligatoire comme le حَجّ" },
          { id:"b", text:"Sounnah muʾakkada — non obligation" },
          { id:"c", text:"Sounnah légère" },
          { id:"d", text:"Équivalente au حَجّ" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « فَرضُ الحَجِّ وَسُنَّةُ ʿUmraِ مَرَّةً » — le حَجّ est فَرض, l'عُمرَة est سُنَّة. Contrairement à l'école chāfiʿite qui la rend واجبة. C'est une spécificité malikite importante."
        },
        {
          id: "q-haj-03",
          text: "Un enfant pré-pubère accomplit le حَجّ avec ses parents. Cela suffit-il pour son obligation d'adulte ?",
          choices: [
          { id:"a", text:"Oui — il n'est plus obligé à l'âge adulte" },
          { id:"b", text:"Non — il doit refaire le حَجّ après la puberté si capable" },
          { id:"c", text:"Oui si c'est un voyage en famille" },
          { id:"d", text:"Seulement si l'imam l'approuve" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : le حَجّ de l'enfant pré-pubère est صَحِيح et récompensé, mais il ne dispense PAS de l'obligation du حَجّ à l'âge adulte. L'enfant doit refaire le حَجّ une fois pubère et capable."
        },
        {
          id: "q-haj-04",
          text: "<strong>QUELLE FORMULE ?</strong> Le rite malikite préfère quelle formule de حَجّ ?",
          choices: [
          { id:"a", text:"Tamattuʿ" },
          { id:"b", text:"Qirān (les deux ensemble)" },
          { id:"c", text:"Ifrād" },
          { id:"d", text:"Aucune préférence — au choix" }
          ],
          correctId: "c",
          explanation: "Spécificité malikite : Ifrād est la formule PRÉFÉRÉE. Contrairement à l'école chāfiʿite qui préfèTamattuʿ."
        },
        {
          id: "q-haj-05",
          text: "Khalid accomplit le حَجّ avec de l'argent provenant d'une source illicite. Son حَجّ est-il valide ?",
          choices: [
          { id:"a", text:"Non — invalide" },
          { id:"b", text:"Oui mais il est en péché" },
          { id:"c", text:"Seulement s'il ne le sait pas" },
          { id:"d", text:"Invalide sauf s'il se repent pendant" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « صَحَّ وَعَصَى » — le حَجّ est صَحِيح (valide) mais il a commis un péché en utilisant de l'argent illicite. L'obligation est remplie mais il doit se repentir."
        },
        {
          id: "q-haj-06",
          text: "Quel est le pilier CENTRAL du حَجّ selon le hadīth ?",
          choices: [
          { id:"a", text:"Iḥrām" },
          { id:"b", text:"ṬṬawāf" },
          { id:"c", text:"Wuqūf بِعَرَفَة" },
          { id:"d", text:"Saʿy" }
          ],
          correctId: "c",
          explanation: "Le Prophète ﷺ : « اَلحَجُّ عَرَفَة » — le Hajj c'est ʿArafāt. Rater le وُقُوف à ʿArafāt invalide entièrement le حَجّ qui doit être refait l'année suivante."
        },
        {
          id: "q-haj-07",
          text: "Peut-on accomplir le وُقُوف à عَرَفَة la nuit ?",
          choices: [
          { id:"a", text:"Non — obligatoirement de jour" },
          { id:"b", text:"Oui — la nuit compte aussi pour le وُقُوف" },
          { id:"c", text:"Seulement si malade" },
          { id:"d", text:"Non — minimum 2 heures de jour" }
          ],
          correctId: "b",
          explanation: "Le وُقُوف à عَرَفَة est valide même si accompli uniquement la nuit (avant le lever du soleil du 10 Dhū al-Ḥijja). Bien que de préférence on y reste de l'après-midi jusqu'au coucher du soleil, la présence nocturne suffit."
        },
        {
          id: "q-haj-08",
          text: "Le ṬṬawāf al-Ifāḍa se fait :",
          choices: [
          { id:"a", text:"À l'arrivée à La Mecque" },
          { id:"b", text:"Après le وُقُوف à عَرَفَة — pilier du حَجّ" },
          { id:"c", text:"Avant l'إِحرَام" },
          { id:"d", text:"N'importe quand" }
          ],
          correctId: "b",
          explanation: "Le ṬṬawāf al-Ifāḍa est le 3ème pilier du حَجّ — il doit être accompli APRÈS le وُقُوف à عَرَفَة. C'est le طَوَاف principal qui donne le حَلَال (libération des interdictions)."
        },
        {
          id: "q-haj-09",
          text: "Combien de fois tourne-t-on autour de la Kaʿba lors du طَوَاف ?",
          choices: [
          { id:"a", text:"3 fois" },
          { id:"b", text:"5 fois" },
          { id:"c", text:"7 fois" },
          { id:"d", text:"9 fois" }
          ],
          correctId: "c",
          explanation: "Le طَوَاف comprend 7 tours complets autour de la Kaʿba, commençant et terminant à la Pierre Noire, la Kaʿba à la gauche du priant."
        },
        {
          id: "q-haj-10",
          text: "Ibrahim passe le مِيقَات sans إِحرَام par oubli. Que doit-il faire ?",
          choices: [
          { id:"a", text:"Iḥrām — le حَجّ est valide" },
          { id:"b", text:"Revenir au مِيقَات prendre l'إِحرَام si possible, sinon payer un دَم" },
          { id:"c", text:"Refaire le حَجّ l'année prochaine" },
          { id:"d", text:"Faire l'إِحرَام depuis La Mecque sans دَم" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : si on passe le مِيقَات sans إِحرَام, on revient au مِيقَات si possible. Si on ne revient pas et on prend l'إِحرَام depuis un autre endroit → دَم obligatoire."
        },
        {
          id: "q-haj-11",
          text: "Saʿy se fait entre :",
          choices: [
          { id:"a", text:"La Kaʿba et الحِجر" },
          { id:"b", text:"Ṣaffَا et المَروَة" },
          { id:"c", text:"عَرَفَة et مِنى" },
          { id:"d", text:"مُزدَلِفَة et الجَمَرَات" }
          ],
          correctId: "b",
          explanation: "Le سَعي se fait entre Ṣaffَا et المَروَة — 7 fois (aller = 1, retour = 2, etc.). Il commence obligatoirement par Ṣaffَا."
        },
        {
          id: "q-haj-12",
          text: "<strong>SCÉNARIO :</strong> Fatima effectue le تَمَتُّع. Quelle expiation doit-elle ?",
          choices: [
          { id:"a", text:"Aucune — Tamattuʿ est la formule normale" },
          { id:"b", text:"Un هَدي (sacrifice)" },
          { id:"c", text:"3 jours de jeûne uniquement" },
          { id:"d", text:"Elle n'a pas besoin d'expiation" }
          ],
          correctId: "b",
          explanation: "Tamattuʿ impose un هَدي (sacrifice d'un animal). Si el is est introuvable → 3 jours de jeûḤajj + 7 jours après le retour = 10 jours au total (Coran 2:196)."
        },
        {
          id: "q-haj-13",
          text: "<strong>PIÈGE GRAVE :</strong> Hassan a un rapport sexuel avec sa femme AVANT le وُقُوف à عَرَفَة. Son حَجّ est-il valide ?",
          choices: [
          { id:"a", text:"Oui, avec une expiation" },
          { id:"b", text:"Oui — il n'y a pas de rapport entre cela et le حَجّ" },
          { id:"c", text:"Non — le حَجّ est INVALIDE ; il doit continuer et refaire l'année prochaine + une بَدَنَة" },
          { id:"d", text:"Non mais le دَم suffit à corriger" }
          ],
          correctId: "c",
          explanation: "Le rapport sexuel AVANT le وُقُوف à عَرَفَة invalide TOTALEMENT le حَجّ. Il doit néanmoins continuer jusqu'au bout (pour ne pas rompre un acte d'adoration entamé), puis refaire le حَجّ l'année suivante + payer une بَدَنَة (chamelle)."
        },
        {
          id: "q-haj-14",
          text: "Combien de wâjibāt (devoirs) compte le Hajj dont l'omission impose un دَم ?",
          choices: [
          { id:"a", text:"2" },
          { id:"b", text:"4" },
          { id:"c", text:"6" },
          { id:"d", text:"Plus de 6" }
          ],
          correctId: "c",
          explanation: "Wājibَات dont l'omission impose un دَم : (1) إِحرَام depuis le مِيقَات, (2) المَبِيت à مُزدَلِفَة, (3) المَبِيت à مِنى, (4) Ramy al-Jamarāt, (5) ḤḤalq أو Taqṣīr, (6) ṬṬawāf al-Wadāʿ."
        },
        {
          id: "q-haj-15",
          text: "Nadia se coupe les cheveux pendant l'إِحرَام pour raison médicale. Que doit-elle payer ?",
          choices: [
          { id:"a", text:"Rien si c'est médicalement nécessaire" },
          { id:"b", text:"Une فِدية : jeûner 3 jours OU nourrir 6 pauvres OU sacrifier un mouton" },
          { id:"c", text:"Un هَدي complet" },
          { id:"d", text:"Refaire le حَجّ" }
          ],
          correctId: "b",
          explanation: "Coran 2:196 autorise de se couper les cheveux pour raison médicale avec une فِدية. Choix entre : (1) 3 jours de jeûne, (2) nourrir 6 pauvres (mudd chacun), (3) sacrifier un mouton. La nécessité lève l'interdit mais l'expiation reste due."
        },
        {
          id: "q-haj-16",
          text: "ṬṬawāf al-Wadāʿ (tawāf d'adieu) est :",
          choices: [
          { id:"a", text:"Un pilier du حَجّ" },
          { id:"b", text:"Wājib — son omission impose un دَم" },
          { id:"c", text:"Une sounnah seulement" },
          { id:"d", text:"Obligatoire seulement pour les étrangers" }
          ],
          correctId: "b",
          explanation: "ṬṬawāf al-Wadāʿ Wājib — son omission impose un دَم. Il est accompli avant de quitter La Mecque. Exception : la femme en حَيْض ou نِفَاس qui ne peut pas le faire — elle est dispensée."
        },
        {
          id: "q-haj-17",
          text: "La femme peut-elle accomplir le حَجّ sans محرم ?",
          choices: [
          { id:"a", text:"Non — محرم toujours obligatoire" },
          { id:"b", text:"Oui — un groupe de femmes de confiance suffit selon une position malikite" },
          { id:"c", text:"Seulement si elle est âgée" },
          { id:"d", text:"Seulement pour l'عُمرَة" }
          ],
          correctId: "b",
          explanation: "Divergence dans l'école malikite : selon une position, un groupe de femmes de confiance peut remplacer le محرم pour la femme qui veut accomplir le حَجّ obligatoire. C'est plus souple que la position hanbalite qui exige toujours le محرم."
        },
        {
          id: "q-haj-18",
          text: "Ramy al-Jamarāt (lapidation) : combien de cailloux par stèle ?",
          choices: [
          { id:"a", text:"3" },
          { id:"b", text:"5" },
          { id:"c", text:"7" },
          { id:"d", text:"10" }
          ],
          correctId: "c",
          explanation: "7 cailloux par stèle. Il y a 3 stèles : الجَمرَةُ الصُّغرَى, الوُسطَى, الكُبرَى. Les 10, 11, 12 et 13 Dhū al-Ḥijja ont chacun leurs propres règles de lapidation."
        },
        {
          id: "q-haj-19",
          text: "Ifrād Qirān après avoir commencé le حَجّ ?",
          choices: [
          { id:"a", text:"Oui toujours" },
          { id:"b", text:"Oui, Qirān en إِفرَاد" },
          { id:"c", text:"Non — Ifrād peut devenir تَمَتُّع Qirān, Qirān ne peut jamais être converti" },
          { id:"d", text:"Indifférent selon l'Imām Mālik" }
          ],
          correctId: "c",
          explanation: "Mukhtasar Khalīl : «وَأَجرَأُ تَمَتُّعٍ عَن إِفرَادٍ وَعَكَسُهُ لَا قِرَانٍ عَنهُمَا» — Tamattuʿ et إِفرَاد peuvent être interconvertis. Qirān, une fois commencé, NE peut PAS êIfrād Tamattuʿ."
        },
        {
          id: "q-haj-20",
          text: "<strong>ÉVALUATION :</strong> Omar est en إِحرَام et un ennemi lui interdit l'accès à La Mecque. Que fait-il ?",
          choices: [
          { id:"a", text:"Il attend indéfiniment" },
          { id:"b", text:"Il envoie un هَدي à La Mecque et se libère de l'إِحرَام" },
          { id:"c", text:"Il fait une عُمرَة à la place" },
          { id:"d", text:"Son حَجّ est automatiquement validé Iḥṣār" }
          ],
          correctId: "b",
          explanation: "L'Iḥṣār : on envoie un هَدي à la Mecque, puis on se libère de l'إِحرَام. Pas de qadā' si c'était un حَجّ non obligatoire. Si le هَدي ne peut être envoyé : jeûner selon certains savants."
        },
        {
          id: "q-haj-21",
          text: "Le حَلق (rasage complet) est-il préféTaqṣīr (coupe courte) ?",
          choices: [
          { id:"a", text:"Les deux sont équivalents" },
          { id:"b", text:"Oui — ḤḤalq est préférable selon le rite malikite" },
          { id:"c", text:"Non — Taqṣīr est préférable" },
          { id:"d", text:"Taqṣīr" }
          ],
          correctId: "b",
          explanation: "Le Prophète ﷺ a prié 3 fois pour ceux qui se rasent et une fois pour ceux qui raccourcissent. ḤḤalq est préférable pour les hommes. Pour les femmes : Taqṣīr seulement (pas de rasage)."
        },
        {
          id: "q-haj-22",
          text: "L'enfant pré-pubère peut-il accomplir tous les actes du حَجّ seul ?",
          choices: [
          { id:"a", text:"Oui" },
          { id:"b", text:"Non — son وَلِي accomplit pour lui ce qu'il ne peut faire" },
          { id:"c", text:"Oui s'il a 10 ans ou plus" },
          { id:"d", text:"Non — il ne peut accomplir que la partie physique" }
          ],
          correctId: "b",
          explanation: "Le وَلِي (tuteur) de l'enfant accomplit l'إِحرَام pour lui s'il est trop jeune. L'enfant mumayyiz accomplit ce qu'il peut personnellement ; son وَلِي fait ce qui est au-delà de ses capacités."
        },
        {
          id: "q-haj-23",
          text: "ṬṬawāf al-Wadāʿ (tawāf d'arrivée) est :",
          choices: [
          { id:"a", text:"Un pilier du حَجّ" },
          { id:"b", text:"Wājib" },
          { id:"c", text:"Ifrād Qirān" },
          { id:"d", text:"Obligatoire pour tous" }
          ],
          correctId: "c",
          explanation: "ṬṬawāf al-Wadāʿ Ifrād Qirān. Pour le تَمَتُّع, le طَوَاف de l'عُمرَة en tient lieu. Son omission ne déclenche pas de دَم."
        },
        {
          id: "q-haj-24",
          text: "Le حَجّ par procuration : qui peut en bénéficier ?",
          choices: [
          { id:"a", text:"N'importe qui qui le veut" },
          { id:"b", text:"Le mort qui n'a pas accompli le حَجّ et l'incapable physique permanent" },
          { id:"c", text:"Seulement le mort" },
          { id:"d", text:"Seulement les malades" }
          ],
          correctId: "b",
          explanation: "Le حَجّ par procuration est valide pour : (1) le mort qui avait l'obligation et ne l'a pas accomplie ; (2) l'incapable physique permanent (maladie chronique, vieillesse extrême). Condition : le mandataire doit avoir déjà accompli son propre حَجّ obligatoire."
        },
        {
          id: "q-haj-25",
          text: "Le pèlerin a un rapport sexuel avec sa femme APRÈS le وُقُوف à عَرَفَة mais AVANT le ṬṬawāf al-Ifāḍa. Que se passe-t-il ?",
          choices: [
          { id:"a", text:"حَجّ invalide — même règle qu'avant عَرَفَة" },
          { id:"b", text:"حَجّ valide mais impose une expiation" },
          { id:"c", text:"Rien — après عَرَفَة tout est permis" },
          { id:"d", text:"حَجّ valide avec une simple فِدية" }
          ],
          correctId: "b",
          explanation: "Après le وُقُوف à عَرَفَة, le حَجّ ne s'invalide plus par le rapport sexuel. En revanche, il impose un sacrifice expiatoire. Le ṬṬawāf al-Ifāḍa doit toujours être accompli. Le حَجّ reste valide."
        }
        ]
      }
    },

    /* ═══ Nikāḥ ═══ */
    {
      id: "nikah",
      title: "Le Mariage",
      arabicTitle: "al-nikāḥ (النِّكَاح)",
      icon: "nikah",
      description: "Conditions de validité du mariage islamique, rôle du tuteur matrimonial, la dot, l'équivalence et droits mutuels des époux.",
      source: "Risāla Ibn Abī Zayd ch. 32 · Mukhtasar Khalīl pp. 97-115 · doctrine-malikite.fr",
      badge: {
        id: "badge-int-nikah",
        title: "Maître du Droit Familial",
        arabicTitle: "فَقِيهُ الأُسرَة",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Nikāḥ"
      },

      lessons: [
      {
        id: "nik-01",
        title: "حُكم Nikāḥ وأَركَانُه — Statut et Piliers du Mariage",
        status: 'available',
        content: [
        {"t": "lead", "v": "Nikāḥ est un contrat sacré qui fonde la famille islamique. Doctrine-malikite.fr et la Risāla (ch. 32) ainsi que le Mukhtasar Khalīl (pp. 97-115) en définissent avec précision les piliers et les conditions."},
        {"t": "h", "v": "حُكمُ Nikāḥ — Le statut du mariage"},
        { t:'ul', v:[
          "Wājib : pour celui qui craint de tomber dans الفَاحِشَة (fornication) s'il ne se marie pas et en a la capacité.",
          "مُستَحَبّ : pour qui désire le mariage et en a la capacité sans craindre la fornication.",
          "Makrūh : pour qui n'a pas les moyens ou craint de mal s'acquitter de ses obligations.",
          "Mubāḥ : état normal."
        ] },
        {"t": "h", "v": "أَركَان Nikāḥ — Les 4 Piliers Obligatoires"},
        { t:'ul', v:[
          "<strong>1. ĪĪjāb wa-Qabūl</strong> : formule d'offre et d'acceptation (du marié). Formules valides : نَكَحتُ, زَوَّجتُ — et selon le Mukhtasar : وَهَبتُ + mention du صَدَاق.",
          "<strong>2. Walī</strong> (tuteur matrimonial) — obligation selon le rite malikite.",
          "<strong>3. Ṣadāq</strong> (dot) — obligatoire, pas de mariage sans dot.",
          "<strong>4. الشُّهُود</strong> (témoins) — au moins 2 témoins équitables."
        ] },
        {"t": "h", "v": "L'إِعلَان — Annonce du mariage"},
        {"t": "p", "v": "Le mariage doit être annoncé publiquement. La وَلِيمَة (repas de noces) sert à cet objectif. Le mariage secret est invalide selon le rite malikite."},
        { t:'ar', v:"لَا نِكَاحَ إِلَّا بِوَلِيٍّ وَصَدَاقٍ وَشَاهِدَيْنِ عَدلَيْنِ", n:"Risāla d'Ibn Abī Zayd, ch. 32 : « Pas de mariage sans tuteur, dot et deux témoins équitables »" },
        {"t": "note", "v": "Spécificité malikite : les témoins peuvent ne pas assister au moment de la CONCLUSION du contrat (mandûb seulement) — mais ils DOIVENT témoigner obligatoirement avant la consommation. C'est une différence notable avec les autres écoles qui exigent les témoins au contrat lui-même."}
        ]
      },
      {
        id: "nik-02",
        title: "Walī وKafāʾa — Le Tuteur et l'Équivalence",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le وَلِي (tuteur matrimonial) est indispensable en rite malikite. Son rôle et ses conditions sont rigoureusement définis."},
        {"t": "h", "v": "شُرُوطُ Walī — Conditions du tuteur"},
        { t:'ul', v:[
          "Homme.",
          "Muslim si la femme est Muslima.",
          "Pubère, sain d'esprit, libre.",
          "Non en état d'إِحرَام.",
          "De bonne conduite selon certains — débat interne)."
        ] },
        {"t": "h", "v": "تَرتِيب الأَولِيَاء — Hiérarchie des tuteurs"},
        { t:'ul', v:[
          "Le fils (dans le cas d'une femme divorcée/veuve).",
          "Le père.",
          "Le frère germain puis le frère consanguin.",
          "L'oncle paternel.",
          "Le cousin paternel.",
          "Les tuteurs du côté MATERNEL sont exclus de la tutelle matrimoniale en rite malikite.",
          "En l'absence de tous : Ḥākim (le juge ou l'imam de la mosquée peut suppléer)."
        ] },
        {"t": "h", "v": "Kafāʾa — L'équivalence entre époux"},
        {"t": "p", "v": "<strong>Spécificité malikite fondamentale :</strong> la كَفَاءَة concerne SEULEMENT la religion et la bonne moralité. Le rang social, la fortune, la tribu, l'origine ethnique ne comptent PAS en rite malikite pour la validité du mariage. Référence : ʿAlī ibn Abī Ṭālib ﵁ : « les gens sont équivalents entre eux qu'ils soient arabes ou non-arabes, tant qu'ils sont Muslims »."},
        {"t": "h", "v": "الإِجبَار — Le droit de contraindre"},
        { t:'ul', v:[
          "Le père peut marier sa fille vierge sans consulter son accord explicite (silence = consentement).",
          "Pour la femme ayant déjà consommé un mariage : le وَلِي ne peut la marier sans son consentement verbal.",
          "Si le وَلِي contraint une femme majeure contre sa volonté manifeste → le juge peut annuler."
        ] },
        {"t": "note", "v": "Si deux tuteurs de rang égal s'opposent sur le choix du mari → Ḥākim (juge) tranche. C'est la règle du Mukhtasar Khalīl."}
        ]
      },
      {
        id: "nik-03",
        title: "Ṣadāq والعَقد — La Dot et le Contrat",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le صَدَاق est un droit de la femme — ni un « prix » ni une marque de valeur. La Risāla et doctrine-malikite.fr en précisent les règles malikites."},
        {"t": "h", "v": "حُكم Ṣadāq"},
        { t:'ul', v:[
          "Obligatoire — pas de mariage valide sans صَدَاق.",
          "C'est un droit de la FEMME (elle peut l'utiliser, le donner ou le céder).",
          "<strong>Minimum malikite :</strong> ¼ de dinar d'or (~1 gramme d'or) ou 3 dirhams d'argent.",
          "Peut être différé en partie ou en totalité avec accord.",
          "Doit être licite."
        ] },
        { t:'ar', v:"وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحلَةً", n:"Coran 4:4 — « Donnez aux femmes leurs dots de bon gré. »" },
        {"t": "h", "v": "Quand la dot est-elle due intégralement ?"},
        { t:'ul', v:[
          "Intégralement due après la consommation du mariage.",
          "La moitié est due si divorce avant la consommation.",
          "Rien n'est dû si la femme rompt le contrat avant la consommation (sauf si c'est la faute du mari).",
          "Mukhtasar Khalīl : si le mariage est invalide et consommé → مَهر المِثل (dot équivalente)."
        ] },
        {"t": "h", "v": "المُحَرَّمَات من Nikāḥ — Femmes illicites"},
        { t:'ul', v:[
          "<strong>Permanentes (par nasab) :</strong> mère, fille, sœur, tante maternelle et paternelle, nièce (Coran 4:23).",
          "<strong>Permanentes (par marriage) :</strong> belle-mère, belle-fille consommée.",
          "<strong>Permanentes :</strong> mêmes règles que le sang.",
          "<strong>Temporaires :</strong> être déjà marié à 4 femmes, la femme en عِدَّة, la sœur de l'épouse (en même temps).",
          "Mukhtasar Khalīl : divergence sur le statut du زِنَا — crée-t-il la حُرمَة comme le mariage ? Deux avis مَشهُور dans l'école."
        ] },
        {"t": "note", "v": "Le mariage avec les femmes Ahl al-Kitāb (juives et chrétiennes) est permis pour le Muslim homme. En revanche la Muslima ne peut JAMAIS épouser un non-Muslim, qu'il soit Ahl al-Kitāb ou autre."}
        ]
      },
      {
        id: "nik-04",
        title: "Walīمَة وحُقُوق الزَّوجَيْن",
        status: 'available',
        content: [
        {"t": "lead", "v": "La vieille islamique du mariage s'articule autour de droits et devoirs mutuels soigneusement équilibrés. Doctrine-malikite.fr y consacre une partie importante."},
        {"t": "h", "v": "Walīمَة — Le Repas de Noces"},
        { t:'ul', v:[
          "Mandūbَة (recommandée) — après la consommation du mariage.",
          "Dure un jour au minimum selon Ibn Abī Zayd.",
          "<strong>Obligation de répondre</strong> si on est invité nommément.",
          "Si la fête contient des actes illicites → on peut partir après avoir mangé ou sans manger.",
          "Le Prophète ﷺ à ʿAbd al-Raḥmān ibn ʿAwf : « Célèbre tes noces par un festin, même par un mouton. » — al-Bukhārī"
        ] },
        {"t": "h", "v": "حُقُوق الزَّوجَة — Droits de l'épouse"},
        { t:'ul', v:[
          "Nafaqa (entretien) : nourriture, vêtement, logement convenables.",
          "Qasmُ (les tours) : nuit équitable entre les épouses.",
          "Approche conjugale au moins une fois tous les 4 mois.",
          "Permission de rendre visite à ses proches malades.",
          "Être traitée avec kindness : « وَعَاشِرُوهُنَّ بِالمَعرُوف »."
        ] },
        {"t": "h", "v": "حُقُوق الزَّوج — Droits du mari"},
        { t:'ul', v:[
          "Obéissance dans les limites du licite.",
          "Préserver ses biens et son honneur en son absence.",
          "Ne pas jeûner les نَوَافِل sans sa permission (s'il est présent).",
          "Répondre à son invitation conjugale sans retard injustifié."
        ] },
        {"t": "h", "v": "Qasmُ — Équité entre les épouses"},
        {"t": "p", "v": "Mukhtasar Khalīl : le Qasmُ (tours de nuit) est obligatoire entre les épouses. Mais l'équité des SENTIMENTS n'est pas exigée (au-delà de la capacité humaine). L'épouse nouvelle (vierge) reçoit 7 nuits, l'épouse non-vierge 3 nuits au début."},
        {"t": "note", "v": "Conseil de la Risāla : « Il est nécessaire de se différentier des habitudes des non-Muslims dans les occasions heureuses et malheureuses. Cependant, tout détail de tradition locale ne contredisant pas les principes de l'Islam est toléré. »"}
        ]
      },
      {
        id: "nik-05",
        title: "المَوَانِع والمُحَرَّمَات الخَاصَّة",
        status: 'available',
        content: [
        {"t": "lead", "v": "Certains mariages sont valides conditionnellement, d'autres sont fāsid (corrompus), d'autres encore sont bātil (nuls). La distinction est importante en rite malikite."},
        {"t": "h", "v": "أَنوَاع Nikāḥ الفَاسِد"},
        { t:'ul', v:[
          "<strong>فَاسِد annulé AVANT consommation :</strong> mariage sans dot, sans témoins, avec un vice corrigible.",
          "<strong>فَاسِد maintenu APRÈS consommation :</strong> le mariage produit ses effets mais est annulé sans طَلَاق.",
          "Mariage المُحَلِّل : le mariage pour « libérer » une femme triple-répudiée en vue d'un remarriage → invalide en rite malikite."
        ] },
        {"t": "h", "v": "Nikāḥ المُحَرَّم المُؤَبَّد (prohibition permanente)"},
        { t:'ul', v:[
          "Al-لِعَان : si un homme effectue le لِعَان (malédiction mutuelle), la femme lui devient interdite à jamais.",
          "La femme qu'on a épousée durant son عِدَّة et qu'on a consommée → interdite à jamais.",
          "La femme d'un fils → interdite à jamais pour le père."
        ] },
        {"t": "h", "v": "الاستئذان — Consentement de la femme"},
        { t:'ul', v:[
          "Le silence de la femme vierge = consentement.",
          "La femme ayant déjà consommé un mariage : doit consentir verbalement.",
          "Exception : le père peut marier sa fille vierge sans consulter explicitement.",
          "Mukhtasar Khalīl : le وَلِي ne peut pas contraindre la femme à épouser quelqu'un dont elle refuse explicitement."
        ] },
        {"t": "note", "v": "Doctrine-malikite.fr insiste sur le mariage civil en plus du mariage islamique dans les pays occidentaux pour protéger les droits légaux de la femme et des enfants — « le mariage civil doit suivre ou précéder le mariage islamique. »"}
        ]
      }
      ],

      quiz: {
        id: "quiz-nikah",
        title: "Questionnaire — Nikāḥ",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-nik-01",
          text: "Les 4 piliers du mariage islamique sont :",
          choices: [
          { id:"a", text:"Wali, dot, témoins, consommation" },
          { id:"b", text:"Consentement, wali, dot, témoins" },
          { id:"c", text:"Dot, témoins, walima, formule" },
          { id:"d", text:"Consentement, mosquée, imam, dot" }
          ],
          correctId: "b",
          explanation: "Les 4 piliers du نِكَاح : (1) ĪĪjāb wa-Qabūl (consentement mutuel via formule), (2) Walī (tuteur matrimonial), (3) Ṣadāq (dot), (4) الشُّهُود (2 témoins équitables). La وَلِيمَة et l'imam ne sont pas des piliers."
        },
        {
          id: "q-nik-02",
          text: "La كَفَاءَة (équivalence entre époux) en rite malikite concerne :",
          choices: [
          { id:"a", text:"Le rang social, la fortune et la tribu" },
          { id:"b", text:"Uniquement la religion et la bonne moralité" },
          { id:"c", text:"La fortune et le niveau d'éducation" },
          { id:"d", text:"La tribu et l'origine géographique" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite fondamentale : la كَفَاءَة = religion et bonne moralité seulement. Le rang social, la tribu, l'origine, la fortune ne comptent pas pour la VALIDITÉ du mariage. Référence de l'Imām Mālik : ʿAlī ﵁ — « les gens sont équivalents entre eux tant qu'ils sont Muslims »."
        },
        {
          id: "q-nik-03",
          text: "En rite malikite, les témoins doivent-ils être présents au MOMENT du contrat de mariage ?",
          choices: [
          { id:"a", text:"Oui — obligatoirement au moment du contrat" },
          { id:"b", text:"Non — ils peuvent être absents du contrat mais DOIVENT témoigner AVANT la consommation" },
          { id:"c", text:"Ils ne sont que recommandés" },
          { id:"d", text:"Seulement si le wali est absent" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : les téMandūb (recommandés) au moment du contrat mais OBLIGATOIRES avant la consommation. C'est une différence importante avec les autres écoles qui exigent les témoins au contrat lui-même."
        },
        {
          id: "q-nik-04",
          text: "Quel est le minimum de la dot en rite malikite ?",
          choices: [
          { id:"a", text:"Pas de minimum — tout accord est valide" },
          { id:"b", text:"100 euros ou équivalent" },
          { id:"c", text:"¼ dinar d'or ou 3 dirhams d'argent (~1 gramme d'or)" },
          { id:"d", text:"Minimum 5 dinars d'or" }
          ],
          correctId: "c",
          explanation: "Doctrine-malikite.fr : « Le minimum de la dot chez les malikites est la valeur d'un quart de Dinar (ancien) en or ou 3 Dirhams (anciens) d'Argent pur. » Tout montant inférieur invalide le mariage par insuffisance de صَدَاق."
        },
        {
          id: "q-nik-05",
          text: "La Muslima peut-elle épouser un non-Muslim Ahl al-Kitāb (juif ou chrétien) ?",
          choices: [
          { id:"a", text:"Oui — l'inverse aussi" },
          { id:"b", text:"Oui avec conditions" },
          { id:"c", text:"Non — la Muslima ne peut jamais épouser un non-Muslim" },
          { id:"d", text:"Seulement si elle est convertie récemment" }
          ],
          correctId: "c",
          explanation: "La règle est claire et unanime : la Muslima ne peut JAMAIS épouser un non-Muslim quelle que soit sa religion. En revanche, le Muslim homme peut épouser une juive ou une chrétienne (Ahl al-Kitāb) sous conditions."
        },
        {
          id: "q-nik-06",
          text: "Walīمَة (repas de noces) est :",
          choices: [
          { id:"a", text:"Obligatoire sous peine de نفقة" },
          { id:"b", text:"RecommandéMandūb et oblige les invités à répondre" },
          { id:"c", text:"Sounnah légère sans conséquence" },
          { id:"d", text:"Obligatoire pour les mariages polygames seulement" }
          ],
          correctId: "b",
          explanation: "La وَلِيمَة Mandūb pour l'organisateur mais la réponse à l'invitation est واجبة pour celui qui est invité nommément. Le Prophète ﷺ : « Celui qui reçoit une invitation doit s'y rendre. »"
        },
        {
          id: "q-nik-07",
          text: "Le silence d'une femme vierge lors de la demande de sa main vaut :",
          choices: [
          { id:"a", text:"Refus catégorique" },
          { id:"b", text:"Accord (son silence est son consentement)" },
          { id:"c", text:"Réponse neutre — on doit attendre" },
          { id:"d", text:"Dépend de l'âge de la femme" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : Ṣamt al-Bikr إِذنُهَا — le silence de la femme vierge vaut consentement. Ce principe est différent pour la femme ayant déjà consommé un mariage qui doit consentir verbalement."
        },
        {
          id: "q-nik-08",
          text: "Le mariage secret (sans témoins ni annonce) est-il valide en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — si les conditions internes sont remplies" },
          { id:"b", text:"Non — Nikāḥ السِّرِّي est invalide ; l'annonce est obligatoire" },
          { id:"c", text:"Valide mais makrūh" },
          { id:"d", text:"Valide si les époux sont d'accord" }
          ],
          correctId: "b",
          explanation: "Le rite malikite exige الإِعلَان والإِشهَار (annonce et publicité) du mariage. Le Nikāḥ al-Sirr (mariage secret) est invalide. La وَلِيمَة sert précisément à remplir cette condition d'annonce publique."
        },
        {
          id: "q-nik-09",
          text: "Si un وَلِي marie sa fille sans son accord alors qu'elle a déjà été mariée auparavant. Ce mariage est-il valide ?",
          choices: [
          { id:"a", text:"Oui — le wali a toujours ce droit" },
          { id:"b", text:"Non — la femme ayant déjà consommé un mariage doit consentir verbalement" },
          { id:"c", text:"Dépend de l'âge de la femme" },
          { id:"d", text:"Valide si deux autres tuteurs sont d'accord" }
          ],
          correctId: "b",
          explanation: "La distinction fondamentale : البِكر (vierge) → le père peut la marier sans accord verbal (silence = accord) ; الثَّيِّب (ayant consommé un mariage) → son accord VERBAL est obligatoire. Sans accord verbal pour la ثَيِّب, le mariage peut être annulé."
        },
        {
          id: "q-nik-10",
          text: "Le mariage المُحَلِّل (pour « libérer » une triple-répudiée) est-il valide en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — c'est le but de ce type de mariage" },
          { id:"b", text:"Non — invalide selon le rite malikite" },
          { id:"c", text:"Valide si la femme consent" },
          { id:"d", text:"Valide si le premier mari ne sait pas" }
          ],
          correctId: "b",
          explanation: "Le نِكَاح المُحَلِّل (mariage contracté intentionnellement pour rendre licite la femme à son premier mari) est invalide en rite malikite. Le Prophète ﷺ a maudit le محلِّل et le محلَّل له (al-Tirmidhī)."
        },
        {
          id: "q-nik-11",
          text: "En cas d'absence de tous les tuteurs, qui fait office de وَلِي ?",
          choices: [
          { id:"a", text:"Le mari lui-même" },
          { id:"b", text:"Un voisin de confiance" },
          { id:"c", text:"Ḥākim (le juge ou l'autorité compétente)" },
          { id:"d", text:"Le mari précédent" }
          ],
          correctId: "c",
          explanation: "Quand tous les tuteurs (père, fils, frère, oncle...) sont absents ou inexistants → Ḥākim (juge, imam compétent) supplée comme وَلِي. C'est la règle : « السُّلطَانُ وَلِيُّ مَن لَا وَلِيَّ لَهُ »."
        },
        {
          id: "q-nik-12",
          text: "Que se passe-t-il si un mariage فَاسِد (corrompu) est consommé avant d'être annulé ?",
          choices: [
          { id:"a", text:"Il devient automatiquement valide" },
          { id:"b", text:"Il est séparé SANS طلاق et les effets légaux sont produits : نَسَب, مَهر المِثل, عِدَّة" },
          { id:"c", text:"La femme n'a droit à aucune dot" },
          { id:"d", text:"Il est refait avec les corrections nécessaires" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : si un mariage فَاسِد est consommé avant l'annulation → séparation sans طلاق mais avec effets légaux : éNasab, droit à Mahr المِثل, obligation de l'عِدَّة, et حُرمَة المُصَاهَرَة (prohibition par alliance)."
        },
        {
          id: "q-nik-13",
          text: "<strong>ÉVALUATION :</strong> Ibrahim dit à son tuteur : « Je n'ai pas besoin de témoins pour mon mariage. » En rite malikite, est-ce correct ?",
          choices: [
          { id:"a", text:"Oui — les témoins sont seulement souhaitables" },
          { id:"b", text:"Non — les témoins sont obligatoires avant la consommation même s'ils ne sont pas requis lors du contrat" },
          { id:"c", text:"Oui si le wali est d'accord" },
          { id:"d", text:"Non — les témoins sont obligatoires lors du contrat aussi" }
          ],
          correctId: "b",
          explanation: "En rite malikite : les témoins ne sont pas obligatoirement requis au MOMENT DU CONTRAT — Wājib avant la consommation. Ibrahim doit s'assurer que les témoins sont présents avant la consommation."
        },
        {
          id: "q-nik-14",
          text: "Le Qasmُ (tours équitables entre épouses) oblige-t-il l'équité des sentiments ?",
          choices: [
          { id:"a", text:"Oui — le mari doit aimer toutes ses femmes également" },
          { id:"b", text:"Non — seule l'équité des nuits et du traitement matériel est obligatoire" },
          { id:"c", text:"Oui selon le Coran" },
          { id:"d", text:"Seulement si le mari a plus de 2 femmes" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : Qasmُ (tours de nuit) est obligatoire, mais l'équité des SENTIMENTS ne l'est pas — car elle dépasse la capacité humaine. Le Prophète ﷺ avait une préférence connue pour ʿĀʾisha mais partageait équitablement ses nuits."
        },
        {
          id: "q-nik-15",
          text: "<strong>PIÈGE FINAL :</strong> Combien de nuits l'épouse VIERGE reçoit-elle à son arrivée par rapport aux autres épouses existantes ?",
          choices: [
          { id:"a", text:"1 nuit" },
          { id:"b", text:"3 nuits" },
          { id:"c", text:"7 nuits" },
          { id:"d", text:"Les mêmes que les autres" }
          ],
          correctId: "c",
          explanation: "Hadīth authentique (Ibn Ḥibbān) : « 7 nuits pour la vierge et 3 nuits pour la non-vierge ». Après ces nuits spéciales, la rotation normale reprend entre les épouses."
        }
        ]
      }
    },

    /* ═══ Ṭalāq والفُرقَة ═══ */
    {
      id: "talaq",
      title: "Le Divorce et la Dissolution",
      arabicTitle: "al-ṭalāq (الطَّلَاق) والفُرقَة",
      icon: "talaq",
      description: "Types de divorce, dissolution à l'initiative de la femme, ẒẒihār, ĪĪlāʾ, Liʿān, la période d'attente et la garde des enfants.",
      source: "Risāla Ibn Abī Zayd ch. 34 · Mukhtasar Khalīl pp. 117-145",
      badge: {
        id: "badge-int-talaq",
        title: "Juriste de la Famille",
        arabicTitle: "فَقِيهُ al-ṭalāq (الطَّلَاق)",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Ṭalāq"
      },

      lessons: [
      {
        id: "tal-01",
        title: "أَنوَاع Ṭalāq — Types de Divorce",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ṭalāq est « l'acte licite le plus détesté d'Allah » — hadīth. La Risāla (ch. 34) et le Mukhtasar Khalīl (pp. 117-145) en distinguent plusieurs types aux effets différents."},
        {"t": "h", "v": "1. Ṭalāq السُّنِّي — Divorce conforme à la Sunna"},
        { t:'ul', v:[
          "Une seule répudiation pendant une période de pureté sans rapport conjugal précédent.",
          "Pas de deuxième répudiation pendant l'عِدَّة.",
          "Peut être suivi d'une رَجعَة (réconciliation) sans nouveau contrat."
        ] },
        {"t": "h", "v": "2. Ṭalāq البِدعي — Divorce illégitime"},
        { t:'ul', v:[
          "Pendant les règles ou pendant un طُهر où il y a eu rapport conjugal.",
          "Triple répudiation en une seule formule.",
          "<strong>Position malikite :</strong> le طَلَاق البِدعي est péché mais VALIDE — il produit ses effets légaux."
        ] },
        {"t": "h", "v": "3. Ṭalāq الرَّجعي vs البَائِن"},
        { t:'ul', v:[
          "<strong>رَجعِيّ (révocable) :</strong> 1ère ou 2ème répudiation → le mari peut reprendre sans nouveau contrat pendant l'عِدَّة.",
          "<strong>بَائِن (irrévocable) :</strong> 3ème répudiation → interdite à jamais SAUF si elle se remarie avec un autre homme et divorce naturellement.",
          "<strong>بَائِن aussi :</strong> خُلع, divorce avant consommation, divorce par جزاء (faute grave)."
        ] },
        {"t": "h", "v": "Mukhtasar Khalīl : هَزلُ Ṭalāq"},
        {"t": "p", "v": "« هَزلُ Ṭalāq لَازِم » — le divorce prononcé en plaisantant est opposable légalement. Ibn al-Qāsim : si le contexte PROUVE clairement la plaisanterie, il peut ne pas être opposable — mais c'est l'exception. La règle générale : les mots du divorce engagent leur auteur."},
        { t:'ar', v:"ثَلاَثٌ جِدُّهُنَّ جِدٌّ وَهَزلُهُنَّ جِدٌّ: al-ṭalāq (الطَّلَاق)ُ وal-nikāḥ (النِّكَاح)ُ والرَّجعَةُ", n:"« Trois choses : leur sérieux est sérieux et leur plaisanterie est sérieuse : le divorce, le mariage et la reprise. » — Hadīth (Abū Dāwūd)" }
        ]
      },
      {
        id: "tal-02",
        title: "Khulʿ وFaskh — Dissolution à l'Initiative de la Femme",
        status: 'available',
        content: [
        {"t": "lead", "v": "En Islam, la dissolution du mariage n'est pas réservée au mari. La femme a deux voies : le خُلع (avec compensation) et le فَسخ (dissolution judiciaire sans compensation)."},
        {"t": "h", "v": "Khulʿ — La Répudiation Contre Compensation"},
        { t:'ul', v:[
          "La femme demande la séparation et restitue tout ou partie du صَدَاق.",
          "Résulte en ṬṬalāq Bāʾin.",
          "Le mari peut exiger une somme égale au صَدَاق — il ne peut pas exiger plus (selon l'avis dominant malikite).",
          "Si le mari est responsable du conflit, il ne peut pas exiger de compensation.",
          "عِدَّة du خُلع : selon la majorité des savants malikites, une seule menstruation suffit comme عِدَّة pour le خُلع normal → 3 cycles)."
        ] },
        {"t": "h", "v": "Faskh — La Dissolution Judiciaire"},
        { t:'ul', v:[
          "<strong>Pour vices rédhibitoires :</strong> folie, lèpre, vérole, impuissance congénitale. Le fiqh malikite ajoute le SIDA et les maladies graves incurables selon doctrine-malikite.fr.",
          "<strong>Pour préjudice :</strong> coups, injures, mépris, refus d'entretien.",
          "<strong>Pour absence prolongée :</strong> le mari absent sans nouvelles — le juge peut dissoudre après une période.",
          "<strong>Pour défaut d'entretien :</strong> si le mari ne peut entretenir sa femme."
        ] },
        {"t": "note", "v": "Le فَسخ judiciaire ne compte pas comme طَلَاق — il n'est pas compté dans le calcul des 3 répudiations. Contrairement au خُلع qui est un ṬṬalāq Bāʾin et compte comme une des 3."}
        ]
      },
      {
        id: "tal-03",
        title: "ẒẒihār وĪĪlāʾ وLiʿān",
        status: 'available',
        content: [
        {"t": "lead", "v": "Trois situations matrimoniales graves mentionnées dans le Coran et traitées par le Mukhtasar Khalīl et la Risāla."},
        {"t": "h", "v": "ẒẒihār — Assimilation de l'épouse à une mère"},
        {"t": "p", "v": "Si le mari dit à sa femme : « Tu es pour moi comme le dos de ma mère » — la relation conjugale devient حَرَام jusqu'à l'expiation."},
        { t:'ul', v:[
          "كَفَّارَة ẒẒihār (ordre croissant de préférence) :",
          "1. Libérer un esclave (no longer applicable).",
          "2. Jeûner 2 mois consécutifs.",
          "3. Nourrir 60 pauvres.",
          "Mukhtasar Khalīl : avant d'accomplir la كَفَّارَة, le rapport conjugal est حَرَام."
        ] },
        {"t": "h", "v": "ĪĪlāʾ — Serment d'abstinence"},
        { t:'ul', v:[
          "Le mari jure de ne pas avoir de rapport conjugal pendant PLUS de 4 mois.",
          "Après 4 mois : il doit revenir avec كَفَّارَة du serment, OU divorcer.",
          "Le juge peut forcer le choix après les 4 mois.",
          "Mukhtasar Khalīl : si le serment est pour 4 mois exactement → pas d'إِيلَاء."
        ] },
        {"t": "h", "v": "Liʿān — La Malédiction Mutuelle"},
        {"t": "p", "v": "Si le mari accuse sa femme d'adultère sans 4 témoins → il doit soit produire des témoins soit subir le حَدّ (châtiment pour fausse accusation). Alternative : la procédure du لِعَان."},
        { t:'ul', v:[
          "Le mari prononce 4 serments : « je jure par Allah que je suis véridique dans mon accusation ».",
          "5ème déclaration : « la malédiction d'Allah sur moi si je mens ».",
          "La femme répond par 4 serments + 5ème : « la colère d'Allah sur moi si [le mari] dit vrai ».",
          "Effet : séparation DÉFINITIVE à jamais — الفُرقَة المُؤَبَّدَة — sans طَلَاق.",
          "Cela nie la filiation de l'enfant au mari si c'est la raison du لِعَان."
        ] },
        { t:'ar', v:"وَالَّذِينَ يَرمُونَ أَزوَاجَهُم وَلَم يَكُن لَهُم شُهَدَاءُ إِلَّا أَنفُسُهُم فَشَهَادَةُ أَحَدِهِم أَربَعُ شَهَادَاتٍ بِاللَّهِ", n:"Coran 24:6 — Verset du لِعَان" }
        ]
      },
      {
        id: "tal-04",
        title: "ʿIdda وḤaḍāna",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'عِدَّة (délai d'attente) et la حَضَانَة (garde des enfants) sont des droits essentiels protégeant la femme et l'enfant après une séparation."},
        {"t": "h", "v": "ʿIdda — Délai d'attente"},
        { t:'ul', v:[
          "<strong>Femme divorcée ayant ses règles :</strong> 3 قُرُوء (cycles menstruels complets).",
          "<strong>Femme sans règles (ménopause ou jeune) :</strong> 3 mois.",
          "<strong>Femme enceinte :</strong> jusqu'à l'accouchement.",
          "<strong>Veuve :</strong> 4 mois et 10 jours (même si le mariage n'a pas été consommé).",
          "<strong>Femme dont le mariage n'a pas été consommé :</strong> PAS d'عِدَّة.",
          "Mukhtasar Khalīl : si un nouveau حَيْض survient pendant l'عِدَّة d'un طَلَاق, la plus longue des deux s'applique."
        ] },
        {"t": "h", "v": "Rajʿa — La réconciliation"},
        { t:'ul', v:[
          "Après un ṬṬalāq Rajʿī (1ère ou 2ème répudiation), le mari peut reprendre SANS nouveau contrat pendant l'عِدَّة.",
          "Après la fin de l'عِدَّة → peut se remarier avec un nouveau contrat.",
          "Après 3 répudiations → interdite à jamais SAUF si elle se remarie naturellement et divorce."
        ] },
        {"t": "h", "v": "Ḥaḍāna — La Garde des Enfants"},
        { t:'ul', v:[
          "La mère est prioritaire pour la garde.",
          "<strong>Durée de garde de la mère :</strong> garçon jusqu'à la puberté ; fille jusqu'à la consommation de son mariage.",
          "La mère perd la garde si elle se remarie à un homme étranger à l'enfant.",
          "Après la mère : la grand-mère maternelle → tante maternelle → grand-mère paternelle → tante paternelle.",
          "Puis le père, puis les hommes de la parenté."
        ] },
        {"t": "h", "v": "Nafaqa — Pension alimentaire"},
        { t:'ul', v:[
          "Le mari entretient la femme pendant l'عِدَّة رَجعِيَّة.",
          "Pas d'entretien pour la ṬṬalāq Bāʾin — sauf si elle est enceinte.",
          "L'entretien des enfants incombe au père indépendamment de qui a la حَضَانَة."
        ] },
        {"t": "note", "v": "Raḍāʿ (allaitement) crée les mêmes prohibitions matrimoniales que le sang. Mukhtasar Khalīl et la position malikite : 5 tétées complètes minimum pour que la حُرمَة (prohibition) soit établie."}
        ]
      },
      {
        id: "tal-05",
        title: "Raḍāʿ وNafaqa والإِرث",
        status: 'available',
        content: [
        {"t": "lead", "v": "Raḍāʿ (allaitement) est un sujet souvent négligé qui a des conséquences importantes sur les prohibitions matrimoniales. La نَفَقَة (pension) et les droits économiques complètent ce chapitre."},
        {"t": "h", "v": "Raḍāʿ — L'Allaitement et ses effets juridiques"},
        { t:'ul', v:[
          "Le allaitement crée les MÊMES prohibitions matrimoniales que le sang (famille de lait).",
          "<strong>Condition malikite (Mukhtasar Khalīl) :</strong> 5 tétées complètes minimum.",
          "Doit avoir lieu pendant les 2 premières années — après → pas d'effet juridique.",
          "La femme qui allaite devient « mère de lait » de l'enfant — il ne peut l'épouser ni épouser ses filles.",
          "Le mari de cette femme devient « père de lait »."
        ] },
        { t:'ar', v:"يَحرُمُ مِنَ الرَّضَاعِ مَا يَحرُمُ مِنَ النَّسَبِ", n:"« Est interdit par le allaitement ce qui est interdit par le sang. » — Hadīth mutawātir (al-Bukhārī et Muslim)" },
        {"t": "h", "v": "Nafaqa — Qui doit quoi"},
        { t:'ul', v:[
          "<strong>Épouse :</strong> nourriture, vêtement, logement convenables — indépendamment de sa fortune.",
          "<strong>Enfants :</strong> le père les entretient jusqu'à la puberté du fils / mariage de la fille.",
          "<strong>Parents dans le besoin :</strong> les enfants les entretiennent selon leurs moyens.",
          "<strong>عِدَّة :</strong> le mari entretient la femme pendant الرَّجعِيَّة. La بَائِن reçoit le logement seulement (si enceinte : entretien complet)."
        ] },
        {"t": "h", "v": "أثر Ṭalāq على الإِرث"},
        {"t": "p", "v": "Pendant l'عِدَّة رَجعِيَّة : les deux héritent l'un de l'autre (le mariage est techniquement toujours en vigueur). Après l'expiration de l'عِدَّة : plus d'héritage mutuel. Exception : si le mari divorce d'une femme en مَرَض الموت (maladie mortelle) pour lui faire perdre l'héritage → la femme hérite quand même selon certains savants."},
        {"t": "note", "v": "Mukhtasar Khalīl sur la تَصرِيح بِالإِرجَاع : le mari peut reprendre sa femme divorcée soit verbalement explicitement, soit par un geste signifiant la reprise. Pas besoin de son accord."}
        ]
      }
      ],

      quiz: {
        id: "quiz-talaq",
        title: "Questionnaire — Ṭalāq والفُرقَة",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-tal-01",
          text: "Le divorce prononcé en plaisantant est-il valide en rite malikite ?",
          choices: [
          { id:"a", text:"Non — la plaisanterie ne compte pas" },
          { id:"b", text:"Oui — هَزلُ Ṭalāq لَازِم selon le Mukhtasar Khalīl" },
          { id:"c", text:"Dépend de l'intention" },
          { id:"d", text:"Seulement si la femme est présente" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : « هَزلُ Ṭalāq لَازِم » — le divorce prononcé en plaisantant est VALIDE et opposable. Hadīth : « trois choses : leur sérieux est sérieux et leur plaisanterie est sérieuse : le divorce, le mariage et la reprise. »"
        },
        {
          id: "q-tal-02",
          text: "Quelle est la différence entre ṬṬalāq Rajʿī et ṬṬalāq Bāʾin ?",
          choices: [
          { id:"a", text:"Le رَجعِيّ est plus grave" },
          { id:"b", text:"Le رَجعِيّ : le mari reprend sans nouveau contrat pendant l'عِدَّة. Le بَائِن : nouveau contrat nécessaire" },
          { id:"c", text:"Aucune différence pratique" },
          { id:"d", text:"Le بَائِن est seulement la 3ème répudiation" }
          ],
          correctId: "b",
          explanation: "Ṭalāq الرَّجعِيّ (1ère ou 2ème répudiation) : le mari peut reprendre sans nouveau contrat pendant l'عِدَّة. Ṭalāq البَائِن : la femme est définitivement séparée sauf nouveau mariage."
        },
        {
          id: "q-tal-03",
          text: "Le طَلَاق pendant les rèḤayḍ est-il valide en rite malikite ?",
          choices: [
          { id:"a", text:"Non — il est nul" },
          { id:"b", text:"Oui mais c'est péché" },
          { id:"c", text:"Oui et c'est même recommandé" },
          { id:"d", text:"Non si le mari le sait" }
          ],
          correctId: "b",
          explanation: "Position malikite : le طَلَاق البِدعِيّ est PÉCHÉ mais VALIDE — il produit ses effets légaux. Le mari doit se repentir mais le divorce est opposable."
        },
        {
          id: "q-tal-04",
          text: "Dans le خُلع, qui initie la dissolution du mariage ?",
          choices: [
          { id:"a", text:"Le mari" },
          { id:"b", text:"La femme en restituant tout ou partie du صَدَاق" },
          { id:"c", text:"Le juge" },
          { id:"d", text:"Les deux ensemble obligatoirement" }
          ],
          correctId: "b",
          explanation: "Le خُلع est la dissolution à l'INITIATIVE DE LA FEMME — elle paie une compensation en échange de la libération. Résultat : ṬṬalāq Bāʾin."
        },
        {
          id: "q-tal-05",
          text: "L'عِدَّة de la femme enceinte divorcée dure :",
          choices: [
          { id:"a", text:"3 mois" },
          { id:"b", text:"4 mois et 10 jours" },
          { id:"c", text:"Jusqu'à l'accouchement — quel que soit le délai" },
          { id:"d", text:"3 cycles menstruels" }
          ],
          correctId: "c",
          explanation: "Coran 65:4 : l'عِدَّة de la femme enceinte est jusqu'à l'accouchement — qu'il survienne en 1 mois ou 9 mois. C'est la plus longue possible en théorie."
        },
        {
          id: "q-tal-06",
          text: "Après 3 répudiations, la femme peut-elle revenir à son ex-mari ?",
          choices: [
          { id:"a", text:"Oui directement avec un nouveau contrat" },
          { id:"b", text:"Non — jamais" },
          { id:"c", text:"Seulement si elle se remarie naturellement à un autre homme et divorce" },
          { id:"d", text:"Oui après 3 mois d'attente" }
          ],
          correctId: "c",
          explanation: "Après 3 répudiations : la femme est بَائِن بَيْنُونَة كُبرَى — elle devient illicite au premier mari JUSQU'à ce qu'elle se remarie naturellement avec un autre homme et qu'elle divorce sincèrement."
        },
        {
          id: "q-tal-07",
          text: "Rajʿa (réconciliation) après ṬṬalāq Rajʿī nécessite-t-elle l'accord de la femme ?",
          choices: [
          { id:"a", text:"Oui — son accord est obligatoire" },
          { id:"b", text:"Non — le mari peut reprendre pendant l'عِدَّة sans son accord" },
          { id:"c", text:"Oui si plus d'un mois s'est écoulé" },
          { id:"d", text:"Seulement si deux témoins y assistent" }
          ],
          correctId: "b",
          explanation: "Le mari peut effectuer la رَجعَة (reprise) sans accord de la femme, verbalement ou par geste. Cela pendant l'عِدَّة seulement. Après l'عِدَّة → nouveau contrat et accord de la femme requis."
        },
        {
          id: "q-tal-08",
          text: "Le ẒẒihār : quelle est la كَفَّارَة selon l'ordre préférentiel ?",
          choices: [
          { id:"a", text:"Nourrir 60 pauvres puis jeûner 2 mois puis libérer un esclave" },
          { id:"b", text:"Libérer un esclave → jeûner 2 mois consécutifs → nourrir 60 pauvres" },
          { id:"c", text:"Seulement nourrir 60 pauvres" },
          { id:"d", text:"Répéter la شَهَادَة 60 fois" }
          ],
          correctId: "b",
          explanation: "Coran 58:3-4 fixe l'ordre OBLIGATOIRE : (1) libérer un esclave, (2) si incapable → jeûner 2 mois consécutifs, (3) si incapable → nourrir 60 pauvres. Contrairement à la كَفَّارَة du jeûne malikite qui préfère la nourriture."
        },
        {
          id: "q-tal-09",
          text: "Le لِعَان — quel est son effet principal ?",
          choices: [
          { id:"a", text:"Un طَلَاق révocable" },
          { id:"b", text:"La séparation DÉFINITIVE à jamais entre les époux" },
          { id:"c", text:"Une simple séparation de corps temporaire" },
          { id:"d", text:"Un ṬṬalāq Bāʾin avec possibilité de retour" }
          ],
          correctId: "b",
          explanation: "Le لِعَان établit la séparation DÉFINITIVE ET PERPÉTUELLE entre les époux — ils ne pourront jamais se remarier. Mukhtasar Khalīl : الفُرقَة المُؤَبَّدَة."
        },
        {
          id: "q-tal-10",
          text: "La garde des enfants : jusqu'à quand la mère garde-t-elle son fils ?",
          choices: [
          { id:"a", text:"Jusqu'à 7 ans" },
          { id:"b", text:"Jusqu'à 10 ans" },
          { id:"c", text:"Jusqu'à la puberté" },
          { id:"d", text:"Toujours" }
          ],
          correctId: "c",
          explanation: "En rite malikite : la mère garde le fils jusqu'à sa puberté. Pour la fille : jusqu'à la consommation de son mariage. La mère perd la garde si elle se remarie à un homme étranger à l'enfant."
        },
        {
          id: "q-tal-11",
          text: "Le allaitement crée-t-il les mêmes prohibitions matrimoniales que le sang ?",
          choices: [
          { id:"a", text:"Non — le allaitement n'a aucun effet légal" },
          { id:"b", text:"Oui — يَحرُمُ مِنَ Raḍāʿِ مَا يَحرُمُ مِنَ Nasabِ" },
          { id:"c", text:"Seulement après 10 tétées" },
          { id:"d", text:"Seulement si avant l'âge de 2 ans" }
          ],
          correctId: "b",
          explanation: "Hadīth mutawātir : « Il est interdit par le allaitement ce qui est interdit par le sang. » Mukhtasar Khalīl : 5 tétées minimum pendant les 2 premières années de l'enfant. La mère de lait = même statut que la mère biologique pour les prohibitions."
        },
        {
          id: "q-tal-12",
          text: "Omar divorce 3 fois en une seule formule. En rite malikite :",
          choices: [
          { id:"a", text:"Une seule répudiation compte — les deux autres sont invalides" },
          { id:"b", text:"3 répudiations distinctes s'appliquent — la femme est définitivement séparée" },
          { id:"c", text:"Illégal et invalide totalement" },
          { id:"d", text:"Seulement 2 répudiations comptent" }
          ],
          correctId: "b",
          explanation: "Position malikite : la triple répudiation en une seule formule est طَلَاق بِدعِيّ (illégitime) — PÉCHÉ — mais les 3 répudiations produisent leurs effets. La femme est البَائِن بَيْنُونَة كُبرَى. Certains savants contemporains divergent sur ce point."
        },
        {
          id: "q-tal-13",
          text: "L'عِدَّة de la VEUVE dure :",
          choices: [
          { id:"a", text:"3 cycles menstruels" },
          { id:"b", text:"Jusqu'à l'accouchement si enceinte" },
          { id:"c", text:"4 mois et 10 jours" },
          { id:"d", text:"3 mois" }
          ],
          correctId: "c",
          explanation: "L'عِدَّة de la veuve = 4 mois et 10 jours — même si le mariage n'a pas été consommé. Cette règle est du Coran 2:234."
        },
        {
          id: "q-tal-14",
          text: "Pendant l'عِدَّة رَجعِيَّة, les époux peuvent-ils hériter l'un de l'autre si l'un décède ?",
          choices: [
          { id:"a", text:"Non — ils sont séparés" },
          { id:"b", text:"Oui — le mariage est techniquement toujours en vigueur pendant l'عِدَّة رَجعِيَّة" },
          { id:"c", text:"Seulement le mari hérite de la femme" },
          { id:"d", text:"Seulement si le divorce est verbal" }
          ],
          correctId: "b",
          explanation: "Pendant l'عِدَّة d'un ṬṬalāq Rajʿī, le mariage est TECHNIQUEMENT TOUJOURS EN VIGUEUR (il n'est que suspendu). Les époux héritent l'un de l'autre. C'est différent du ṬṬalāq Bāʾin où ils ne s'héritent plus."
        },
        {
          id: "q-tal-15",
          text: "<strong>ÉVALUATION :</strong> Ibrahim prononce le ẒẒihār envers sa femme. Avant d'expier, peut-il avoir un rapport conjugal ?",
          choices: [
          { id:"a", text:"Oui — il expiera après" },
          { id:"b", text:"Non — la relation conjugale est حَرَام jusqu'à l'accomplissement de la كَفَّارَة" },
          { id:"c", text:"Oui si c'était involontaire" },
          { id:"d", text:"Oui si sa femme est d'accord" }
          ],
          correctId: "b",
          explanation: "Coran 58:3 est explicite : « Ceux qui se séparent de leurs femmes par le ẓihār et qui veulent revenir sur ce qu'ils ont dit, doivent affranchir un esclave AVANT de se toucher. » La relation conjugale AVANT la كَفَّارَة est حَرَام."
        }
        ]
      }
    },

    /* ═══ Dhabāʾiḥ والأَطعِمَة ═══ */
    {
      id: "dhabaih",
      title: "Abattage, Chasse et Alimentation",
      arabicTitle: "الذَّبَائِح والأَطعِمَة",
      icon: "dhabaih",
      description: "Conditions de l'abattage rituel, aliments licites et illicites selon le rite malikite — avec ses particularités, tous fruits de mer licites).",
      source: "Risāla Ibn Abī Zayd ch. 29 · Mukhtasar Khalīl pp. 78-92 · doctrine-malikite.fr",
      badge: {
        id: "badge-int-dhabaih",
        title: "Expert en Halāl",
        arabicTitle: "عَارِف الحَلَال وal-ḥarām (الحَرَام)",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Dhabāʾiḥ"
      },

      lessons: [
      {
        id: "dha-01",
        title: "Dhakāt — L'Abattage Rituel",
        status: 'available',
        content: [
        {"t": "lead", "v": "La ذَكَاة (abattage rituel) est la condition de la licéité de la viande. Sans ذَكَاة conforme, l'animal devient مَيتَة (bête morte) — حَرَام. La Risāla (ch. 29) et le Mukhtasar Khalīl (pp. 78-92) en détaillent les règles."},
        {"t": "h", "v": "شُرُوطُ Dhakāt — Conditions de validité"},
        { t:'ul', v:[
          "<strong>Qui peut abattre :</strong> tout Muslim pubère ou Ahl al-Kitāb (juif/chrétien) — sous conditions.",
          "Mukhtasar Khalīl : l'ivrogne → invalide ; l'apostat → invalide ; l'enfant mumayyiz → valide.",
          "<strong>L'outil :</strong> tout objet coupant et tranchant (sauf l'ongle et l'os).",
          "<strong>La méthode :</strong> sectionner la gorge et les deux veines jugulaires.",
          "<strong>Niyya :</strong> intention d'abattre.",
          "<strong>بِسمِ الله :</strong> prononcer le Nom d'Allah avant l'abattage — obligatoire selon la majorité des savants malikites."
        ] },
        {"t": "h", "v": "ذَبح أَهل الكِتَاب — Abattage par juifs et chrétiens"},
        { t:'ul', v:[
          "Licite sous conditions : ne pas invoquer autre qu'Allah, abattre un animal licite pour nous.",
          "Mukhtasar Khalīl : si on entend un juif ou chrétien invoquer le nom de leur divinité spécifiquement sur l'animal → illicite.",
          "Le doute sur la méthode ou la formule → licite par principe (Coran 5:5).",
          "Doctrine-malikite.fr : les viandes des abattoirs occidentaux (Ahl al-Kitāb) → position complexe, varie selon les savants."
        ] },
        { t:'ar', v:"وَطَعَامُ الَّذِينَ أُوتُوا الكِتَابَ حِلٌّ لَّكُم", n:"Coran 5:5 — « La nourriture de ceux qui ont reçu le Livre vous est licite. »" },
        {"t": "note", "v": "La ذَكَاة de la pêche : les poissons et fruits de mer ne nécessitent pas de ذَكَاة — ils sont licites sans abattage rituel (mort naturelle à la pêche suffit). La sauterelle aussi : licite sans ذَكَاة rituelle selon le rite malikite."}
        ]
      },
      {
        id: "dha-02",
        title: "Ḥalāl وal-ḥarām من الأَطعِمَة — Licite et Illicite",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le rite malikite a des positions particulières sur les aliments autorisés et interdits, souvent différentes des autres écoles. Doctrine-malikite.fr les détaille avec précision."},
        {"t": "h", "v": "المُحَرَّمَات المُطلَقَة — Interdits absolus"},
        { t:'ul', v:[
          "<strong>الخِنزِير :</strong> porc — totalement حَرَام (chair, graisse, tout).",
          "<strong>الدَّم المَسفُوح :</strong> sang coulé — rate et foie restent licites.",
          "<strong>Mayta :</strong> animal mort sans ذَكَاة (exception : poissons et sauterelles).",
          "<strong>ما ذُبِح لغير الله :</strong> consacré à une idole ou invoqué avec un autre nom que celui d'Allah.",
          "<strong>الخَمر :</strong> toute boisson alcoolisée en quantité enivrante."
        ] },
        {"t": "h", "v": "Spécificités malikites (différences des autres écoles)"},
        { t:'ul', v:[
          "<strong>Carnivores et bêtes à crocs :</strong> Makrūh selon la position la plus connue — lion, guépard, renard, chacal. <em>Différence avec écoles hanafite/chāfiʿite qui les rendent حَرَام.</em>",
          "<strong>Insectes, sauterelles, escargots :</strong> licites selon le rite malikite.",
          "<strong>Fruits de mer :</strong> TOUS licites (poissons, crustacés, crevettes, homards...) — sans exception en rite malikite. <em>Différence avec l'école hanafite qui interdit certains.</em>",
          "<strong>Âne domestique :</strong> حَرَام selon les malikites.",
          "<strong>Cheval :</strong> Makrūh — pas de ذَكَاة du cheval habituellement."
        ] },
        {"t": "h", "v": "Gélatine et additifs alimentaires (contemporain)"},
        {"t": "p", "v": "Doctrine-malikite.fr : les additifs qui subissent une transformation chimique irréversible deviennent licites — analogie avec le vinaigre (halal) issu du vin (haram). Position adoptée par le Conseil Européen de la Fatwa : la gélatine ayant subi une istiḥāla complète = licite."},
        {"t": "note", "v": "Boissons : l'alcool est حَرَام même en petite quantité intentionnelle. Cependant, les arômes à base d'alcool en trace infime dans la nourriture : divergence contemporaine, avec certains savants malikites les tolérant par principe de l'istiḥāla ou de la quantité négligeable."}
        ]
      },
      {
        id: "dha-03",
        title: "الصَّيد — La Chasse",
        status: 'available',
        content: [
        {"t": "lead", "v": "La chasse est permise mais soumise à des règles. La Risāla (ch. 29) et le Mukhtasar Khalīl précisent les conditions pour que le gibier soit licite à consommer."},
        {"t": "h", "v": "شُرُوطُ الصَّيد — Conditions pour la licéité du gibier"},
        { t:'ul', v:[
          "<strong>L'intention :</strong> lancer l'animal ou l'arme avec intention de chasser.",
          "<strong>بِسمِ الله :</strong> obligatoire avant de tirer ou de lancer l'animal chasseur.",
          "<strong>L'animal chasseur :</strong> si entraîné et dressé → le gibier qu'il attrape est licite (Coran 5:4).",
          "Si on arrive à temps pour l'égorger rituellement → l'égorger.",
          "Si on trouve le gibier déjà mort → licite s'il a été touché par notre arme ou notre animal."
        ] },
        {"t": "h", "v": "Cas particuliers"},
        { t:'ul', v:[
          "Mukhtasar Khalīl : si le gibier disparaît et on le retrouve le lendemain → divergence, la version dominante dit qu'il reste licite si touché mortellement par nos armes.",
          "Chasse à l'arme à feu : licite si بِسمِ الله est prononcée avant de tirer.",
          "Chasse pour divertissement seul (sans utilisation de la viande) : Makrūh (blâmable) selon la Risāla.",
          "Chasse dans le حَرَم (enceinte de La Mecque) : INTERDITE pour les personnes en état d'إِحرَام."
        ] },
        { t:'ar', v:"يَسأَلُونَكَ مَاذَا أُحِلَّ لَهُم قُل أُحِلَّ لَكُمُ الطَّيِّبَاتُ وَمَا عَلَّمتُم مِّنَ الجَوَارِحِ مُكَلِّبِينَ", n:"Coran 5:4 — Permis : les animaux de chasse dressés" },
        {"t": "note", "v": "La sauterelle : licite MORTE ou VIVANTE en rite malikite. Mais si elle est déjà morte seule (sans être chassée ni tuée intentionnellement) → selon certains savants malikites, Mayta."}
        ]
      },
      {
        id: "dha-04",
        title: "آدَاب الأَكل وتَحرِيمَات أُخرَى",
        status: 'available',
        content: [
        {"t": "lead", "v": "Au-delà des aliments eux-mêmes, le rite malikite précise des règles d'étiquette alimentaire et des interdits supplémentaires liés aux ustensiles et aux comportements."},
        {"t": "h", "v": "الأَوَانِي المُحَرَّمَة — Récipients interdits"},
        { t:'ul', v:[
          "Manger ou boire dans de la vaisselle en OR ou en ARGENT = حَرَام pour TOUS (hommes et femmes).",
          "Hadīth : « Celui qui boit dans un récipient d'argent ne fait qu'avaler dans son ventre du feu de l'Enfer. » — al-Bukhārī et Muslim.",
          "Cette interdiction concerne l'USAGE des ustensiles, pas de posséder de l'or ou de l'argent."
        ] },
        {"t": "h", "v": "الذَّهَب والحَرِير للرِّجَال"},
        { t:'ul', v:[
          "L'or comme parure = حَرَام pour les hommes.",
          "Exception : une bague en argent ≤ 2 dirhams d'argent (~5.9g).",
          "La soie comme vêtement = حَرَام pour les hommes.",
          "Exception : en cas de maladie de peau selon certains rites — les malikites ne l'autorisent pas même dans ce cas (mais les chāfiʿites oui)."
        ] },
        {"t": "h", "v": "آدَاب الأَكل — Étiquette alimentaire"},
        { t:'ul', v:[
          "Dire بِسمِ الله avant de commencer.",
          "Manger de la main droite.",
          "Ne pas souffler dans le verre.",
          "Ne pas manger debout sauf nécessité.",
          "Ne pas manger seul si possible."
        ] },
        {"t": "h", "v": "الدُّخَان والمُخَدِّرَات"},
        {"t": "p", "v": "Doctrine-malikite.fr : la cigarette et toutes les drogues sont حَرَام selon le rite malikite car elles nuisent à la santé — par application du principe « لَا ضَرَرَ وَلَا ضِرَار » (pas de préjudice). Cela inclut le narguilé et tous les produits similaires."},
        {"t": "note", "v": "Règle générale malikite sur les aliments : tout est licite sauf ce qui est EXPLICITEMENT interdit. C'est le principe de la إِبَاحَة الأَصلِيَّة — une approche plus libérale que certaines autres écoles qui rendent les animaux haram par défaut sauf les explicitement autorisés."}
        ]
      }
      ],

      quiz: {
        id: "quiz-dhabaih",
        title: "Questionnaire — Dhabāʾiḥ والأَطعِمَة",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-dha-01",
          text: "La ذَكَاة (abattage rituel) doit sectionner :",
          choices: [
          { id:"a", text:"Seulement la tête" },
          { id:"b", text:"La gorge et les deux veines jugulaires" },
          { id:"c", text:"Seulement les veines jugulaires" },
          { id:"d", text:"Le cou uniquement" }
          ],
          correctId: "b",
          explanation: "La ذَكَاة valide sectionne la gorge ET les deux veines jugulaires. Couper seulement l'un ou l'autre ne suffit pas en rite malikite."
        },
        {
          id: "q-dha-02",
          text: "Un ivrogne abat un animal. La viande est-elle licite ?",
          choices: [
          { id:"a", text:"Oui — l'état de l'abatteur importe peu" },
          { id:"b", text:"Non — la ذَكَاة de l'ivrogne est invalide" },
          { id:"c", text:"Oui si bِسم الله a été prononcé" },
          { id:"d", text:"Dépend du degré d'ivresse" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : la ذَكَاة de l'ivrogne est INVALIDE. De même pour l'apostat. Seuls les Muslims et Ahl al-Kitāb en pleine capacité mentale peuvent effectuer la ذَكَاة."
        },
        {
          id: "q-dha-03",
          text: "La viande des Ahl al-Kitāb (juifs et chrétiens) abattue selon leurs rites est :",
          choices: [
          { id:"a", text:"Toujours حَرَام" },
          { id:"b", text:"Licite sous conditions — s'ils n'invoquent pas un autre nom qu'Allah" },
          { id:"c", text:"Toujours licite sans condition" },
          { id:"d", text:"Licite seulement pour les juifs, pas les chrétiens" }
          ],
          correctId: "c",
          explanation: "Coran 5:5 : « La nourriture de ceux qui ont reçu le Livre vous est licite. » Condition : ils n'invoquent pas explicitement un autre dieu sur l'animal. Si on les entend invoquer une divinité spécifique → illicite. Le doute → licite par principe."
        },
        {
          id: "q-dha-04",
          text: "Les carnivores (lions, renards, chacals) sont-ils حَرَام ?",
          choices: [
          { id:"a", text:"Oui — tous les animaux à crocs sont حَرَام" },
          { id:"b", text:"Non — Makrūh (déconseillé) seulement selon la position dominante malikite" },
          { id:"c", text:"Licites sans restriction" },
          { id:"d", text:"حَرَام seulement pour les grands félins" }
          ],
          correctId: "b",
          explanation: "Position malikite distincte : les carnivores et les bêtes à Makrūh (déconseillés) selon la position la plus connue — pas حَرَام. C'est une DIFFÉRENCE FONDAMENTALE avec les écoles hanafite et chāfiʿite qui les rendent حَرَام."
        },
        {
          id: "q-dha-05",
          text: "Les fruits de mer (crevettes, homards, crabes) sont-ils licites en rite malikite ?",
          choices: [
          { id:"a", text:"Non — seulement les poissons sont licites" },
          { id:"b", text:"Oui — TOUS les fruits de mer sont licites sans exception" },
          { id:"c", text:"Dépend de la méthode de capture" },
          { id:"d", text:"Seulement ceux avec des écailles" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : TOUS les fruits de mer et produits de la mer sont licites sans exception (Coran 5:96). Aucune ذَكَاة requise. Différence avec l'école hanafite qui interdit certains crustacés."
        },
        {
          id: "q-dha-06",
          text: "Les sauterelles sont-elles licites en rite malikite ?",
          choices: [
          { id:"a", text:"Non — ce sont des insectes" },
          { id:"b", text:"Oui — licites par hadīth" },
          { id:"c", text:"Seulement après ذَكَاة rituelle" },
          { id:"d", text:"Seulement si cuites" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : les sauterelles sont licites selon le rite malikite. Hadīth du Prophète ﷺ qui a autorisé leur consommation. Elles sont capturées et consommées sans ذَكَاة rituelle (elles n'ont pas de sang)."
        },
        {
          id: "q-dha-07",
          text: "Manger dans des assiettes en argent est-il permis ?",
          choices: [
          { id:"a", text:"Oui — les assiettes ne sont pas des bijoux" },
          { id:"b", text:"Non — utiliser de la vaisselle en or ou en argent est حَرَام pour tous" },
          { id:"c", text:"Seulement makrūh" },
          { id:"d", text:"Autorisé pour les femmes uniquement" }
          ],
          correctId: "b",
          explanation: "Hadīth clair (al-Bukhārī et Muslim) : utiliser des récipients en or ou en argent pour manger et boire est حَرَام pour tous — hommes et femmes. L'interdiction couvre l'USAGE (manger, boire) pas le simple fait de posséder."
        },
        {
          id: "q-dha-08",
          text: "La cigarette est-elle licite en rite malikite selon doctrine-malikite.fr ?",
          choices: [
          { id:"a", text:"Makrūh seulement" },
          { id:"b", text:"Licite comme d'autres herbes" },
          { id:"c", text:"حَرَام — cause un préjudice avéré à la santé" },
          { id:"d", text:"Licite si fumée modérément" }
          ],
          correctId: "c",
          explanation: "Doctrine-malikite.fr : « la cigarette et les drogues sont considérées illicites en Islam car elles portent préjudice à la santé » — par application du principe : لَا ضَرَرَ وَلَا ضِرَار. Cela inclut le narguilé et tous les produits similaires."
        },
        {
          id: "q-dha-09",
          text: "La chasse pour simple divertissement (sans consommer le gibier) est :",
          choices: [
          { id:"a", text:"Licite et même recommandée" },
          { id:"b", text:"Makrūh — blâmable selon Ibn Abī Zayd" },
          { id:"c", text:"حَرَام selon le rite malikite" },
          { id:"d", text:"Neutre — ni recommandé ni blâmable" }
          ],
          correctId: "b",
          explanation: "La Risāla d'Ibn Abī Zayd : « Chasser pour se divertir est blâMakrūh, mais chasser dans un autre but est licite. » Tuer des animaux pour le plaisir sans en utiliser la viande est contraire à l'éthique islamique."
        },
        {
          id: "q-dha-10",
          text: "<strong>SCÉNARIO :</strong> Ibrahim chasse et son faucon attrape un lapin mais l'étrangle. Peut-il manger ce lapin ?",
          choices: [
          { id:"a", text:"Oui — le faucon est son instrument de chasse" },
          { id:"b", text:"Non — le lapin est mort par étranglement, pas par ذَكَاة" },
          { id:"c", text:"Oui si Ibrahim a dit بسم الله avant de lancer le faucon" },
          { id:"d", text:"Non car il faut l'égorger même après la mort" }
          ],
          correctId: "c",
          explanation: "Coran 5:4 : le gibier tué par un animal de chasse entraîné est licite si bِسم الله a été prononcée avant de le lancer. S'il est attrapé VIVANT → on l'égorge. S'il est tué par le faucon après notre bِسم الله → licite sans égorger. Ibrahim a dit bِسم الله → licite."
        },
        {
          id: "q-dha-11",
          text: "La gélatine d'origine porcine ayant subi une transformation chimique irréversible (istiḥāla) est :",
          choices: [
          { id:"a", text:"Toujours حَرَام — l'origine reste porcine" },
          { id:"b", text:"Licite selon l'avis adopté par le Conseil Européen de la Fatwa — par analogie avec le vinaigre issu du vin" },
          { id:"c", text:"Makrūh seulement" },
          { id:"d", text:"Licite si la quantité est infime" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr et le Conseil Européen de la Fatwa : « les malikites sont d'avis que l'istiḥāla complète est une purification ». La gélatine ayant subi une transformation chimique irréversible devient une nouvelle substance — licite. Analogie : vinaigre (halal) issu du vin (haram)."
        },
        {
          id: "q-dha-12",
          text: "<strong>ÉVALUATION :</strong> Ibrahim veut cuisiner du lion car il aime son goût. En rite malikite :",
          choices: [
          { id:"a", text:"حَرَام — les carnivores sont toujours interdits" },
          { id:"b", text:"Licite — tout animal est permis en rite malikite" },
          { id:"c", text:"Makrūh seulement — il peut en manger mais c'est déconseillé" },
          { id:"d", text:"Licite si ذَكَاة est faite" }
          ],
          correctId: "c",
          explanation: "Position malikite dominante : Makrūh (déconseillés) — pas حَرَام. Ibrahim peut en manger mais c'est blâmable. S'il insiste sur la ذَكَاة conforme, la viande est consommable bien que déconseillée."
        }
        ]
      }
    },

    /* ═══ Aḍāḥī وʿAqīqa ═══ */
    {
      id: "adahi",
      title: "Le Sacrifice de l'Aïd",
      arabicTitle: "الأَضَاحِي والعَقِيقَة",
      icon: "adahi",
      description: "Le sacrifice de l'Aïd al-Adha : statut (sounnah, non obligation), conditions de l'animal, période du sacrifice et répartition de la viande.",
      source: "Risāla Ibn Abī Zayd ch. 30 · Mukhtasar Khalīl pp. 78-80 · doctrine-malikite.fr",
      badge: {
        id: "badge-int-adahi",
        title: "Expert des Rites du Sacrifice",
        arabicTitle: "عَارِف أَحكَام الأُضحِيَة",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Aḍāḥī"
      },

      lessons: [
      {
        id: "adh-01",
        title: "حُكم الأُضحية وشُرُوطها",
        status: 'available',
        content: [
        {"t": "lead", "v": "Uḍḥiya est le sacrifice accompli à l'occasion de l'Eid al-Adha. La Risāla (ch. 30) et le Mukhtasar Khalīl (pp. 78-80) en fixent les règles avec précision."},
        {"t": "h", "v": "حُكم الأُضحية"},
        {"t": "p", "v": "<strong>Spécificité malikite :</strong> l'أُضحِيَة est سُنَّة مُؤَكَّدَة (sounnah appuyée) — PAS une obligation. Contrairement à l'école hanbalite qui la rend واجبة sur celui qui en a les moyens."},
        {"t": "h", "v": "الأَنعَام الجَائِزَة وأَعمَارُها"},
        { t:'ul', v:[
          "<strong>الضَّأن (ovins) :</strong> جَذَع — 1 an accompli.",
          "<strong>المَعز (caprins) :</strong> ثَنِيّ — 2 ans accomplis.",
          "<strong>البَقَر (bovins) :</strong> ثَنِيّ — 2 ans accomplis. Un bovin compte pour 7 personnes.",
          "<strong>الإِبِل (chameaux) :</strong> ثَنِيّ — 5 ans accomplis. Un chameau compte pour 7 personnes."
        ] },
        {"t": "h", "v": "العُيُوب المُخِلَّة — Défauts éliminatoires"},
        { t:'ul', v:[
          "<strong>العَوراء Bayyina :</strong> aveugle d'un œil manifestement.",
          "<strong>العَرجَاء Bayyina :</strong> boiteuse au point de ne pas pouvoir se déplacer normalement.",
          "<strong>المَرِيضَة Bayyina :</strong> malade manifestement.",
          "<strong>العَجفَاء :</strong> très amaigrie n'ayant plus de moelle.",
          "Mukhtasar Khalīl : les défauts MODÉRÉS (légère boiterie, légère maladie) → Makrūh."
        ] },
        { t:'ar', v:"أَربَعٌ لَا تَجُوزُ فِي الأَضَاحِي: الْعَوراء الْبَيِّنُ عَوَرُهَا وَالْعَرجَاء الْبَيِّنُ ظَلَعُهَا وَالْمَرِيضَةُ الْبَيِّنُ مَرَضُهَا وَالْعَجفَاءُ الَّتِي لَا تُنقِي", n:"« Quatre défauts invalident le sacrifice : la borgne manifeste, la boiteuse manifeste, la malade manifeste, la très amaigrie. » — Hadīth (Abū Dāwūd, al-Nasāʾī)" }
        ]
      },
      {
        id: "adh-02",
        title: "وَقت الأُضحية وتَوزِيعها",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le sacrifice doit être accompli dans une fenêtre précise. Doctrine-malikite.fr et le Mukhtasar Khalīl en précisent les horaires et la répartition de la viande."},
        {"t": "h", "v": "وَقت الأُضحية"},
        { t:'ul', v:[
          "Commence : après la prière de l'Eid al-Adha (10 Dhū al-Ḥijja).",
          "Se termine : coucher du soleil du 13 Dhū al-Ḥijja (les 3 jours de tashrīq : 11, 12, 13).",
          "Mukhtasar Khalīl : certains disent qu'on ne sacrifie pas la nuit — position de prudence.",
          "Le meilleur moment : le plus tôt possible après la prière de l'Eid."
        ] },
        {"t": "h", "v": "تَوزِيع اللَّحم — Répartition de la viande"},
        { t:'ul', v:[
          "Recommandé de partager en 3 : une partie pour soi et sa famille, une pour les voisins et amis, une pour les pauvres.",
          "Pas d'obligation stricte de répartition — peut donner plus aux pauvres.",
          "Il est permis de garder toute la viande pour soi mais c'est contraire à l'esprit du sacrifice.",
          "Mukhtasar Khalīl : il est permis de vendre la peau et d'en profiter (ou de la donner).",
          "Il est interdit de donner la viande comme salaire du boucher."
        ] },
        {"t": "h", "v": "Takbīrāt أيَّام التَّشرِيق"},
        {"t": "p", "v": "La période du Eid al-Adha est marquée par les تَكبِيرَات. Position malikite : les takbīrāt après les prières obligatoires sont pratiquées du 9 au 13 Dhū al-Ḥijja. L'imam commence et les fidèles suivent."},
        {"t": "note", "v": "Mukhtasar Khalīl : un seul animal ne peut pas être le sacrifice de deux personnes distinctes (sauf pour le bovin et le chameau qui peuvent compter pour 7). La sharīka (association) dans l'أُضحِيَة ne concerne que l'ajr (récompense) selon une position, et la viande selon une autre."}
        ]
      },
      {
        id: "adh-03",
        title: "ʿAqīqa وشَعَائِر المَوْلُود",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'عَقِيقَة est le sacrifice accompli à la naissance d'un enfant. Bien que distincte de l'أُضحِيَة, elle lui est liée dans les sources malikites."},
        {"t": "h", "v": "ʿAqīqa — Le Sacrifice de Naissance"},
        { t:'ul', v:[
          "Sounnah muʾakkada à l'occasion de la naissance.",
          "Pour le garçon : 2 moutons (selon certains) ou 1 mouton (position malikite dans la Risāla).",
          "Pour la fille : 1 mouton.",
          "Moment optimal : le 7ème jour de naissance.",
          "Si pas fait le 7ème → 14ème → 21ème (tout multiple de 7).",
          "Position malikite : peut être faite même si tardivement, avant la puberté."
        ] },
        {"t": "h", "v": "الشَّعَائِر المُتَعَلِّقَة بِالمَوْلُود"},
        { t:'ul', v:[
          "التَّأذِين في أُذن المَوْلُود : sounnah de prononcer l'أَذَان à l'oreille droite du nouveau-né.",
          "التَّسمِيَة : le nommer, de préférence le 7ème jour.",
          "ḤḤalq : raser la tête du nouveau-né le 7ème jour (pour les garçons — et les filles selon certains).",
          "التَّصَدُّق : donner en aumône l'équivalent en argent du poids des cheveux rasés."
        ] },
        {"t": "note", "v": "Différence entre أُضحِيَة et عَقِيقَة : l'أُضحِيَة est liée à Eid al-Adha (10-13 Dhū al-Ḥijja), la عَقِيقَة est liée à la naissance. Les deux sont سُنَّة مُؤَكَّدَة en rite malikite. Les règles d'âge et de qualité de l'animal s'appliquent de la même façon."}
        ]
      }
      ],

      quiz: {
        id: "quiz-adahi",
        title: "Questionnaire — Aḍāḥī",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-adh-01",
          text: "L'أُضحية est :",
          choices: [
          { id:"a", text:"واجبة sur tout Muslim ayant les moyens" },
          { id:"b", text:"سُنَّة مُؤَكَّدَة — non obligatoire" },
          { id:"c", text:"Farḍ Kifāya" },
          { id:"d", text:"Mandūb simple" }
          ],
          correctId: "b",
          explanation: "Spécificité malikite : l'أُضحية est سُنَّة مُؤَكَّدَة (sounnah appuyée) — PAS une obligation. Contrairement à l'école hanbalite qui la rend واجبة. Celui qui en a les moyens est fortement encouragé à la faire sans y être obligé."
        },
        {
          id: "q-adh-02",
          text: "L'âge minimum d'un mouton pour l'أُضحية est :",
          choices: [
          { id:"a", text:"6 mois" },
          { id:"b", text:"1 an accompli" },
          { id:"c", text:"2 ans" },
          { id:"d", text:"3 ans" }
          ],
          correctId: "b",
          explanation: "Pour les ovins : جَذَع = 1 an accompli (entrant dans sa 2ème année). Pour les caprins et bovins : ثَنِيّ = 2 ans accomplis. Pour les chameaux : ثَنِيّ = 5 ans."
        },
        {
          id: "q-adh-03",
          text: "Un bovin peut-il être l'أُضحية de plusieurs personnes ?",
          choices: [
          { id:"a", text:"Non — une أُضحية par personne" },
          { id:"b", text:"Oui — un bovin compte pour 7 personnes" },
          { id:"c", text:"Un bovin compte pour 2 personnes seulement" },
          { id:"d", text:"Seulement si toutes ont la même famille" }
          ],
          correctId: "b",
          explanation: "Un bovin (vache) ou un chameau peut être l'أُضحية de 7 personnes partageant la dépense. Un mouton ou une chèvre ne compte que pour une personne (ou une famille selon certains savants)."
        },
        {
          id: "q-adh-04",
          text: "Quel défaut INVALIDE une bête comme أُضحية ?",
          choices: [
          { id:"a", text:"Légèrement boiteuse" },
          { id:"b", text:"Légèrement moins grasse que la normale" },
          { id:"c", text:"Aveugle d'un œil manifestement" },
          { id:"d", text:"Queue courte" }
          ],
          correctId: "c",
          explanation: "Hadīth : « 4 défauts invalident le sacrifice : la borgne MANIFESTE, la boiteuse MANIFESTE, la malade MANIFESTE et la très amaigrie. » Les défauts MODÉRÉS n'invalident pas — Makrūh (selon Mukhtasar Khalīl)."
        },
        {
          id: "q-adh-05",
          text: "La période de l'أُضحية commence :",
          choices: [
          { id:"a", text:"Au lever du soleil du 10 Dhū al-Ḥijja" },
          { id:"b", text:"Après la prière de l'Eid" },
          { id:"c", text:"La nuit du 10 Dhū al-Ḥijja" },
          { id:"d", text:"Le 9 Dhū al-Ḥijja après عَرَفَة" }
          ],
          correctId: "b",
          explanation: "L'أُضحية commence après la PRIÈRE DE L'EID le 10 Dhū al-Ḥijja et dure jusqu'au coucher du soleil du 13. Sacrifier avant la prière n'est pas valide comme أُضحية."
        },
        {
          id: "q-adh-06",
          text: "Peut-on vendre la peau de l'animal sacrifié ?",
          choices: [
          { id:"a", text:"Non — c'est حَرَام" },
          { id:"b", text:"Oui selon le Mukhtasar Khalīl" },
          { id:"c", text:"Seulement si la viande est donnée aux pauvres" },
          { id:"d", text:"Seulement avec l'autorisation de l'imam" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : il est permis de vendre la peau de l'أُضحية et d'en profiter. En revanche, il est interdit de la donner comme salaire au boucher qui a abattu l'animal."
        },
        {
          id: "q-adh-07",
          text: "L'عَقِيقَة (sacrifice à la naissance) : quand est-elle idéalement faite ?",
          choices: [
          { id:"a", text:"Le jour de la naissance" },
          { id:"b", text:"Le 7ème jour" },
          { id:"c", text:"Le 40ème jour" },
          { id:"d", text:"Le 1er mois" }
          ],
          correctId: "b",
          explanation: "La sounnah est d'accomplir l'عَقِيقَة le 7ème jour de naissance. Si pas fait le 7ème → le 14ème ou le 21ème (tout multiple de 7). Position malikite : peut être faite avant la puberté même tardivement."
        },
        {
          id: "q-adh-08",
          text: "<strong>SCÉNARIO :</strong> Ahmad possède une brebis légèrement boiteuse pour l'أُضحية. Son sacrifice est-il valide ?",
          choices: [
          { id:"a", text:"Non — tout défaut physique invalide" },
          { id:"b", text:"Oui — les défauts modéréMakrūh selon le Mukhtasar Khalīl" },
          { id:"c", text:"Valide si deux témoins certifient la santé de l'animal" },
          { id:"d", text:"Non — il doit trouver un autre animal" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl : les défauts MODÉRÉS (légère boiterie, légère maladie) → l'animal est valide comme أُضحية Makrūh (déconseillé). Seuls les déBayyina invalident. Ahmad peut sacrifier sa brebis mais c'est déconseillé."
        },
        {
          id: "q-adh-09",
          text: "Les تَكبِيرَات des jours de التَّشرِيق (11-13 Dhū al-Ḥijja) sont récitées :",
          choices: [
          { id:"a", text:"Seulement le matin" },
          { id:"b", text:"Après chaque prière obligatoire" },
          { id:"c", text:"Seulement lors du sacrifice" },
          { id:"d", text:"Seulement le soir" }
          ],
          correctId: "b",
          explanation: "Les تَكبِيرَات (Allāhu Akbar, Allāhu Akbar, lā ilāha illā Allāh...) sont récitées après chaque prière obligatoire pendant les jours de Eid et de Tashrīq. Position malikite : du Fadjr du 9 Dhū al-Ḥijja jusqu'à l'Asr du 13."
        },
        {
          id: "q-adh-10",
          text: "<strong>ÉVALUATION :</strong> Sami veut offrir son أُضحية comme paiement au boucher. Est-ce permis ?",
          choices: [
          { id:"a", text:"Oui — le boucher mérite sa rémunération" },
          { id:"b", text:"Non — il est interdit de donner la viande du sacrifice comme salaire au boucher" },
          { id:"c", text:"Oui si la viande représente moins de la moitié du paiement" },
          { id:"d", text:"Oui si le boucher est pauvre" }
          ],
          correctId: "b",
          explanation: "Il est interdit de donner la viande, la peau ou toute partie du sacrifice comme salaire au boucher. Sami peut donner quelque chose au boucher à titre de CADEAU ou de charité, mais pas comme rémunération pour son travail d'abattage."
        }
        ]
      }
    },

    /* ═══ Buyūʿ والمُعَامَلَات ═══ */
    {
      id: "buyu",
      title: "Transactions Commerciales",
      arabicTitle: "البُيُوع والمُعَامَلَات",
      icon: "buyu",
      description: 'Fondements des transactions commerciales islamiques : conditions du contrat, interdiction du رِبَا et du غَرَر, Salam, Ijāra et finance islamique contemporaine.',
      source: "Risāla Ibn Abī Zayd ch. 37-40 · Mukhtasar Khalīl pp. 147-167 · doctrine-malikite.fr Finance",
      badge: {
        id: "badge-int-buyu",
        title: "Juriste des Transactions",
        arabicTitle: "فَقِيهُ المُعَامَلَات",
        icon: "star8",
        color: "silver",
        unlockCondition: "Obtenir ≥ 85 % Buyūʿ"
      },

      lessons: [
      {
        id: "buy-01",
        title: "أَركَان al-bayʿ وشُرُوطه",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le al-bayʿ (vente) est le contrat commercial fondamental en Islam. La Risāla (ch. 37-40) et le Mukhtasar Khalīl (pp. 147-167) en établissent les conditions de validité."},
        {"t": "h", "v": "أَركَان al-bayʿ — Piliers d'une vente valide"},
        { t:'ul', v:[
          "<strong>1. العَاقِدَان :</strong> vendeur et acheteur — doivent être capables.",
          "<strong>2. المَعقُود عَلَيه :</strong> l'objet — doit exister, être licite, connu, pouvoir être livré.",
          "<strong>3. الثَّمَن :</strong> le prix — doit être connu et licite.",
          "<strong>4. الصِّيغَة :</strong> accord explicite (offre + acceptation).",
          "Mukhtasar Khalīl : la المُعَاطَاة (échange sans formule verbale) est valide dans les cas évidents (marché, caisse enregistreuse...)."
        ] },
        {"t": "h", "v": "شُرُوطُ المَبِيع — Conditions de l'objet vendu"},
        { t:'ul', v:[
          "Doit être licite (pas de porc, d'alcool, d'idoles...).",
          "Doit être connu.",
          "Doit pouvoir être livré.",
          "Doit appartenir au vendeur (ou qu'il ait la permission de vendre).",
          "Pas de vente d'un objet avant de l'avoir sécurisé pour soi-même."
        ] },
        {"t": "h", "v": "Khiyār — Droit de rétractation"},
        { t:'ul', v:[
          "<strong>Mukhtasar Khalīl :</strong> pas de خِيَارُ المَجلِس en rite malikite (différence avec école chāfiʿite).",
          "<strong>خِيَارُ الشَّرط :</strong> option stipulée dans le contrat pour une durée définie.",
          "<strong>خِيَارُ العَيب :</strong> retour du bien pour vice caché — valide en rite malikite.",
          "عُهدَة الثَّلَاث : le vendeur garantit l'animal pour 3 jours contre les maladies non apparentes."
        ] },
        { t:'ar', v:"وَأَحَلَّ اللَّهُ الْبَيعَ وَحَرَّمَ al-ribā (الرِّبَا)", n:"Coran 2:275 — « Allah a rendu licite la vente et a interdit l'usure. »" }
        ]
      },
      {
        id: "buy-02",
        title: "Ribā وGharar — Les Deux Grands Interdits",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ribā (usure/intérêt) Gharar (incertitude excessive) sont les deux prohibitions fondamentales du droit commercial islamique. Le Mukhtasar Khalīl les traite en détail."},
        {"t": "h", "v": "Ribā — L'usure/intérêt"},
        { t:'ul', v:[
          "<strong>Ribā al-Faḍl :</strong> vente d'un même type de marchandise à quantités inégales (ex : 1 kg d'or contre 1.1 kg d'or).",
          "<strong>Ribā al-Nasīʾa :</strong> vendre les 6 marchandises avec délai de paiement ou de livraison.",
          "Les 6 marchandises : or, argent, blé, orge, sel, dattes.",
          "Règle : même type + même mesure → vente immédiate et quantités égales obligatoires.",
          "Types différents mais même catégorie (ex : or contre argent) → vente immédiate obligatoire mais quantités libres."
        ] },
        {"t": "h", "v": "Gharar — L'incertitude excessive"},
        { t:'ul', v:[
          "Principe cardinal en rite malikite : « نَهى النَّبِيُّ ﷺ عَن بَيع Gharar ».",
          "Mukhtasar Khalīl : بَيعُ الحَصَاة (vente à la pierre jetée), بَيعُ المُلَامَسَة → invalides.",
          "Vente d'un objet non encore existant mais descriptible → valide si précisé.",
          "Vente d'un objet de nature inconnue → invalide par غَرَر."
        ] },
        {"t": "h", "v": "Ribā dans le contexte contemporain"},
        { t:'ul', v:[
          "Intérêts bancaires classiques = ربا النَّسِيئَة — حَرَام.",
          "Crédit à intérêt = رِبَا — interdit.",
          "Les produits de finance islamique sont des alternatives licites.",
          "Doctrine-malikite.fr couvre les détails des contrats islamiques contemporains."
        ] },
        { t:'ar', v:"نَهَى رَسُولُ اللَّهِ ﷺ عَن بَيعِ al-gharar (الغَرَر)ِ", n:"« Le Messager d'Allah ﷺ a interdit la vente avec incertitude excessive. » — Muslim" },
        {"t": "note", "v": "Règle pratique malikite sur le رِبَا : si les deux articles sont de même type ET mesurés (poids, volume) → vente comptant et égal. Si même type mais non mesurés (habituellement) → pas de رِبَا. Ex : vendre 2 robes contre 3 robes → permis car les vêtements ne se vendent pas au poids."}
        ]
      },
      {
        id: "buy-03",
        title: "Salam وIjāra — Contrats Spéciaux",
        status: 'available',
        content: [
        {"t": "lead", "v": "Salam (vente à terme) et l'إِجَارَة (location/prestation) sont deux contrats licites largement utilisés et bien balisés par le Mukhtasar Khalīl."},
        {"t": "h", "v": "Salam — Vente à Terme d'un Bien Non Encore Produit"},
        { t:'ul', v:[
          "Définition : payer immédiatement pour recevoir ultérieurement un bien défini.",
          "Exception légale à la règle générale.",
          "<strong>Conditions :</strong> (1) description précise de l'objet, (2) délai précis de livraison, (3) paiement IMMÉDIAT et COMPLET.",
          "Permis pour les produits agricoles, les manufacturés, tout ce qui peut être décrit.",
          "Salam en or ou argent contre de l'or ou de l'argent."
        ] },
        {"t": "h", "v": "Ijāra — Location et Prestation de Services"},
        { t:'ul', v:[
          "Location d'un bien (maison, voiture) ou d'un service (travail, expertise).",
          "Conditions : l'usage doit être connu et défini, la durée ou le service précisé, le loyer/salaire connu.",
          "Le locataire porte les frais courants (consommables). Le propriétaire porte les frais de structure.",
          "Mukhtasar Khalīl : si la maison louée s'effondre partiellement → contrat rompu pour la partie effondrée."
        ] },
        {"t": "h", "v": "Murābaḥa — Vente avec Marge Déclarée"},
        { t:'ul', v:[
          "Vendre au prix de revient + marge déclarée.",
          "Condition d'honnêteté : le vendeur doit déclarer TOUT rabais ou cadeau reçu lors de l'achat originel.",
          "Mukhtasar Khalīl : très strict sur l'obligation de déclarer tout bonus reçu.",
          "La مُرَابَحَة bancaire islamique applique ce principe pour le financement d'achats."
        ] },
        {"t": "h", "v": "Sharika وal-muḍāraba"},
        { t:'ul', v:[
          "<strong>Sharika :</strong> association de capitaux entre plusieurs partenaires.",
          "<strong>al-muḍāraba :</strong> un partenaire apporte le capital, l'autre le travail — les bénéfices partagés selon accord, les pertes supportées uniquement par le capital."
        ] },
        {"t": "note", "v": "La philosophie malikite du commerce : tout est licite sauf l'explicitement interdit. Cette approche libérale favorise l'innovation commerciale tant que les principes fondamentaux sont respectés."}
        ]
      },
      {
        id: "buy-04",
        title: "Buyūʿ المَنهِيُّ عَنهَا",
        status: 'available',
        content: [
        {"t": "lead", "v": "Le droit malikite liste plusieurs types de ventes interdites ou invalides en raison de différents défauts contractuels."},
        {"t": "h", "v": "Buyūʿ الفَاسِدَة — Ventes corrompues"},
        { t:'ul', v:[
          "<strong>بَيع وسَلَف :</strong> vente conditionnée à un prêt → invalide (Mukhtasar Khalīl).",
          "<strong>بَيع وشَرط :</strong> vente avec condition contradictoire à l'objet (ex: « je te vends cette maison à condition que tu ne la vends pas ») → invalide.",
          "<strong>Bayʿatān fī Bayʿa :</strong> deux prix pour un article (ex: « 100 au comptant ou 150 à crédit ») sans préciser lequel → invalide.",
          "<strong>Bayʿ al-Najsh :</strong> enchérir pour gonfler le prix sans intention d'acheter → حَرَام.",
          "<strong>al-bayʿ على بَيع الأَخ :</strong> proposer un meilleur prix à quelqu'un qui est déjà en négociation → حَرَام."
        ] },
        {"t": "h", "v": "بُيُوع مَشرُوعَة خَاصَّة بالمَالِكِيَّة"},
        { t:'ul', v:[
          "<strong>Muzāraʿa :</strong> contrat entre propriétaire d'une terre et agriculteur — bénéfices partagés.",
          "<strong>Musāqāt :</strong> contrat pour irriguer et entretenir des arbres — le fruit partagé selon accord.",
          "Ces contrats sont licites en rite malikite mais interdits en rite chāfiʿite."
        ] },
        {"t": "h", "v": "Waqf — La Fondation Pieuse (Endowment)"},
        {"t": "p", "v": "Le وَقف (fondation pieuse permanente) est traité dans le Mukhtasar Khalīl (p. 221). C'est un bien immobilisé pour toujours au profit d'une cause charitable. Il ne peut être ni vendu, ni hérité, ni donné. Les fruits sont distribués selon la volonté du fondateur."},
        {"t": "note", "v": "Principe malikite sur les contrats : l'intention et la réalité économique comptent. Un contrat licite sur le papier mais dissimulant une transaction illicite est invalide. L'école malikite est connue pour condamner les hilaa (stratagèmes légaux) qui contournent le but des interdictions."}
        ]
      },
      {
        id: "buy-05",
        title: "المُعَامَلَات المَالِيَّة المُعَاصِرَة",
        status: 'available',
        content: [
        {"t": "lead", "v": "Doctrine-malikite.fr et les savants malikites contemporains ont appliqué les principes classiques aux instruments financiers modernes. Ce chapitre en présente les principales conclusions."},
        {"t": "h", "v": "البُنُوك Islāmِيَّة — Banque islamique"},
        { t:'ul', v:[
          "<strong>Murābaḥa bancaire :</strong> la banque achète le bien et le revend au client avec marge déclarée et paiements échelonnés — licite si structuré correctement.",
          "<strong>التَّأجِير المُنتَهِي بِالتَّملِيك :</strong> crédit-bail — la banque loue puis cède la propriété — licite.",
          "<strong>المُشَارَكَة :</strong> la banque est partenaire dans l'investissement — licite.",
          "Intérêts bancaires classiques → رِبَا → حَرَام sans alternative."
        ] },
        {"t": "h", "v": "التَّأمِين — Assurances"},
        { t:'ul', v:[
          "Doctrine-malikite.fr sur les assurances : question complexe en fiqh contemporain.",
          "L'Takāful est licite : cotisation pour aider les membres sinistrés.",
          "L'assurance classique à prime avec profit : divergence — certains savants l'assimilent au غَرَر, d'autres la tolèrent par nécessité.",
          "L'assurance obligatoire légale (assurance auto...) : la plupart des savants la tolèrent par nécessité."
        ] },
        {"t": "h", "v": "البُورصَة والأَسهُم — Bourse et Actions"},
        { t:'ul', v:[
          "Acheter des actions d'une société halal → licite avec زَكَاة annuelle sur la valeur.",
          "Trader à court terme (spéculation pure) → proche du غَرَر — déconseillé.",
          "Actions de sociétés dont l'activité est حَرَام (alcool, jeux d'argent, armes illicites) → حَرَام.",
          "La vente à découvert → vendre ce qu'on ne possède pas → interdit en Islam."
        ] },
        {"t": "note", "v": "Le principe malikite sur les contrats contemporains : on applique le Coran 5:1 « أَوفُوا بِالعُقُود — Respectez les contrats ». Tout contrat respectant les principes islamiques est valide même s'il n'existe pas de nom classique pour lui."}
        ]
      }
      ],

      quiz: {
        id: "quiz-buyu",
        title: "Questionnaire — Buyūʿ والمُعَامَلَات",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-buy-01",
          text: "Quelle est la condition essentielle pour la validité d'une vente islamique ?",
          choices: [
          { id:"a", text:"La présence d'un imam" },
          { id:"b", text:"Un prix connu, un objet connu et licite, accord des deux parties" },
          { id:"c", text:"Paiement immédiat uniquement" },
          { id:"d", text:"Deux témoins obligatoires" }
          ],
          correctId: "b",
          explanation: "Les piliers d'une vente valide : acheteur et vendeur capables, objet CONNU et LICITE, prix CONNU, accord explicite. L'incertitude sur l'objet ou le prix invalide la vente."
        },
        {
          id: "q-buy-02",
          text: "Le خِيَارُ المَجلِس (droit de rétractation pendant la réunion) existe-t-il en rite malikite ?",
          choices: [
          { id:"a", text:"Oui — comme en rite chāfiʿite" },
          { id:"b", text:"Non — le rite malikite ne reconnaît pas le خِيَارُ المَجلِس" },
          { id:"c", text:"Oui mais seulement pour les biens immobiliers" },
          { id:"d", text:"Oui pendant 3 jours" }
          ],
          correctId: "b",
          explanation: "Le rite malikite ne reconnaît PAS le خِيَارُ المَجلِس (contrairement à l'école chāfiʿite). Une fois l'accord conclu, la vente est définitive. Le rite malikite reconnaît cependant خِيَارُ الشَّرط (option stipulée) et خِيَارُ العَيب (vice caché)."
        },
        {
          id: "q-buy-03",
          text: "Ribā s'applique à quelles 6 marchandises de base ?",
          choices: [
          { id:"a", text:"Blé, riz, sucre, sel, viande, lait" },
          { id:"b", text:"Or, argent, blé, orge, sel, dattes" },
          { id:"c", text:"Or, argent, pétrole, cuivre, coton, soie" },
          { id:"d", text:"Toutes les marchandises alimentaires" }
          ],
          correctId: "b",
          explanation: "Les 6 marchandises du رِبَا (hadīth du Prophète ﷺ) : or, argent, blé, orge, sel, dattes. Vendre l'une contre l'autre du même type → mêmes quantités ET paiement immédiat."
        },
        {
          id: "q-buy-04",
          text: "Ibrahim vend 1 kg d'or contre 1.2 kg d'or (de qualité différente). Est-ce licite ?",
          choices: [
          { id:"a", text:"Oui — les qualités sont différentes" },
          { id:"b", text:"Non — c'Ribā al-Faḍl (quantités inégales de même type)" },
          { id:"c", text:"Oui si paiement différé" },
          { id:"d", text:"Oui si l'acheteur est d'accord" }
          ],
          correctId: "b",
          explanation: "Ribā al-Faḍl : vendre un même type (ici : or contre or) à quantités inégales est INTERDIT — même si les qualités diffèrent. La règle : or contre or → même quantité ET paiement immédiat. Ni plus, ni moins, ni délai."
        },
        {
          id: "q-buy-05",
          text: "Salam (vente à terme) est permis à condition que :",
          choices: [
          { id:"a", text:"Le bien existe au moment de la vente" },
          { id:"b", text:"L'objet soit décrit précisément, le délai fixé et le paiement immédiat et complet" },
          { id:"c", text:"Un témoin soit présent" },
          { id:"d", text:"L'acheteur connaisse le vendeur" }
          ],
          correctId: "b",
          explanation: "Salam est une exception légale : on paie immédiatement pour recevoir ultérieurement. Conditions : (1) description précise, (2) délai précis, (3) paiement IMMÉDIAT ET COMPLET. Ces conditions sont strictes pour éviter le غَرَر."
        },
        {
          id: "q-buy-06",
          text: "Gharar est :",
          choices: [
          { id:"a", text:"Un type de رِبَا" },
          { id:"b", text:"L'incertitude excessive dans un contrat — cause d'invalidité de la vente" },
          { id:"c", text:"Une taxe sur les transactions" },
          { id:"d", text:"Un type de fraude" }
          ],
          correctId: "b",
          explanation: "Gharar = incertitude excessive — principe cardinal en droit malikite. Le Prophète ﷺ : « نَهى عَن بَيعِ Gharar » — il a interdit la vente avec غَرَر. Exemples : vendre ce qu'on n'a pas, vendre à un prix inconnu, vendre un objet dont on ne peut garantir la livraison."
        },
        {
          id: "q-buy-07",
          text: "Un commerçant propose : « Ce produit coûte 100€ au comptant ou 130€ en 6 mensualités. » Sans préciser lequel Ibrahim choisit. Cette vente est-elle valide ?",
          choices: [
          { id:"a", text:"Oui — les deux options sont présentées" },
          { id:"b", text:"Non — Bayʿatān fī Bayʿa (deux prix sans préciser lequel) → invalide" },
          { id:"c", text:"Valide si Ibrahim choisit l'une avant de quitter" },
          { id:"d", text:"Valide si c'est précisé dans le contrat écrit" }
          ],
          correctId: "b",
          explanation: "Le hadīth interdit « بَيعَتَين في بَيعَة » — proposer deux prix pour un seul objet SANS que l'acheteur en choisisse un définitivement avant de conclure. Si Ibrahim choisit l'une OU l'autre avant la conclusion → valide. C'est la vente avec deux prix non résolus qui invalide."
        },
        {
          id: "q-buy-08",
          text: "Murābaḥa impose au vendeur une obligation particulière. Laquelle ?",
          choices: [
          { id:"a", text:"Garantir le prix le plus bas du marché" },
          { id:"b", text:"Déclarer honnêtement tout rabais ou bonus reçu lors de son achat original" },
          { id:"c", text:"Vendre au prix coûtant sans profit" },
          { id:"d", text:"Obtenir l'approbation d'un savant" }
          ],
          correctId: "b",
          explanation: "Mukhtasar Khalīl est très strict : Murābaḥa, le vendeur doit déclarer honnêtement tout rabais, cadeau ou bonus reçu lors de son achat initial. Dissimuler un rabais pour augmenter artificiellement le « prix de revient » est un مَنع."
        },
        {
          id: "q-buy-09",
          text: "Bayʿ al-Najsh (enchère truquée) consiste à :",
          choices: [
          { id:"a", text:"Vendre plusieurs objets ensemble" },
          { id:"b", text:"Enchérir pour gonfler le prix sans intention d'acheter" },
          { id:"c", text:"Fixer un prix secret entre vendeur et acheteur" },
          { id:"d", text:"Vendre à des inconnus" }
          ],
          correctId: "b",
          explanation: "النَّجش = enchérir pour gonfler le prix au détriment d'un tiers acheteur sincère, sans intention d'acheter soi-même. C'est حَرَام car c'est une tromperie. Hadīth : « نَهى النَّبِيُّ ﷺ عَن النَّجشِ »."
        },
        {
          id: "q-buy-10",
          text: "Les intérêts bancaires classiques sont-ils permis en rite malikite ?",
          choices: [
          { id:"a", text:"Oui si le taux est faible" },
          { id:"b", text:"Permis par nécessité" },
          { id:"c", text:"حَرَام — c'est du رِبَا" },
          { id:"d", text:"Makrūh seulement" }
          ],
          correctId: "c",
          explanation: "Les intérêts bancaires classiques (intérêts sur prêt, sur épargne rémunérée...) = Ribā al-Nasīʾa — clairement حَرَام selon le Coran 2:275. La finance islamique, المُشَارَكَة) offre des alternatives licites."
        },
        {
          id: "q-buy-11",
          text: "Muzāraʿa (agriculture à partage de récolte) est-elle licite en rite malikite ?",
          choices: [
          { id:"a", text:"Non — interdite comme toute association incertaine" },
          { id:"b", text:"Oui — licite en rite malikite" },
          { id:"c", text:"Makrūh seulement" },
          { id:"d", text:"Licite seulement pour les palmiers dattiers" }
          ],
          correctId: "b",
          explanation: "Muzāraʿa (contrat entre propriétaire d'une terre et agriculteur avec partage de la récolte) est LICITE en rite malikite. Différence avec le rite chāfiʿite qui l'interdit. Le Mukhtasar Khalīl la valide explicitement."
        },
        {
          id: "q-buy-12",
          text: "La vente à découvert (vendre ce qu'on ne possède pas encore) est-elle permise ?",
          choices: [
          { id:"a", text:"Oui si on peut le livrer" },
          { id:"b", text:"Non — interdit par hadīth : لَا تَبِع مَا لَيسَ عِندَك" },
          { id:"c", text:"Oui en bourse" },
          { id:"d", text:"Permis si la livraison est rapide" }
          ],
          correctId: "b",
          explanation: "Hadīth du Prophète ﷺ : « لَا تَبِع مَا لَيسَ عِندَك » — n'intervends pas ce que tu ne possèdes pas. Exception légale : Salam (avec conditions strictes) et l'Istisna' (commande de fabrication). La vente à découvert boursière est islamiquement interdite."
        },
        {
          id: "q-buy-13",
          text: "L'assurance obligatoire légale (assurance automobile) est-elle tolérée en rite malikite ?",
          choices: [
          { id:"a", text:"Totalement حَرَام sans alternative" },
          { id:"b", text:"La plupart des savants la tolèrent par nécessité" },
          { id:"c", text:"Permise sans restriction" },
          { id:"d", text:"Seulement makrūh" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : l'assurance classique pose des questions de غَرَر, mais l'assurance OBLIGATOIRE LÉGALE (imposée par la loi) est généralement tolérée par la plupart des savants malikites contemporains en application du principe de nécessité."
        },
        {
          id: "q-buy-14",
          text: "Peut-on acheter des actions en bourse d'une société licite (halal) ?",
          choices: [
          { id:"a", text:"Non — Gharar pur" },
          { id:"b", text:"Oui — avec зَكَاة annuelle sur la valeur des actions" },
          { id:"c", text:"Oui sans restriction ni زَكَاة" },
          { id:"d", text:"Seulement si c'est une société islamique certifiée" }
          ],
          correctId: "b",
          explanation: "Acheter des actions d'une société dont l'activité est HALAL est permis. Il faut : (1) vérifier que la société ne traite pas de رِبَا, d'alcool, de jeux ou d'activités prohibées ; (2) payer la زَكَاة annuellement sur la valeur totale des actions à la fin du حَوْل."
        },
        {
          id: "q-buy-15",
          text: "<strong>ÉVALUATION :</strong> Ahmad veut prendre un crédit immobilier à taux variable à la banque conventionnelle. En rite malikite :",
          choices: [
          { id:"a", text:"Permis — il a besoin d'un logement" },
          { id:"b", text:"حَرَام — c'est du رِبَا ; il doit chercher une alternative islamique" },
          { id:"c", text:"Makrūh seulement" },
          { id:"d", text:"Permis si le taux est faible" }
          ],
          correctId: "b",
          explanation: "Un crédit immobilier à intérêt = Ribā al-Nasīʾa — حَرَام. La nécessité peut s'appliquer uniquement dans des cas EXTRÊMES (aucune alternative, vie en danger). Pour un simple logement alors que des alternatives islamiques existent, la ضَرُورَة ne s'applique pas."
        }
        ]
      }
    }
  ]  /* fin subjects */
}  /* fin INTERMEDIAIRE */