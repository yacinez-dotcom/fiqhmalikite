/* Données — DEBUTANT — Nettoyé */
const LEVELS = [{"id": "debutant", "label": "Débutant", "arabicLabel": "المستوى الأوّل", "color": "#1A6B68", "description": "Les fondements de la pratique islamique : purification, prière, jeûne et la Zakāt selon le rite malikite.", "subjectCount": 4, "locked": false}, {"id": "intermediaire", "label": "Intermédiaire", "arabicLabel": "المستوى الثاني", "color": "#8A620A", "description": "Approfondissement de la jurisprudence : pèlerinage, dispositions funéraires, mariage, alimentation et transactions commerciales.", "subjectCount": 7, "locked": false}, {"id": "avance", "label": "Avancé", "arabicLabel": "المستوى الثالث", "color": "#2A5080", "description": "Contrats avancés, droit successoral, droit judiciaire et pénal islamique, et spiritualité selon le Matn d'Ibn Āshir.", "subjectCount": 7, "locked": false}, {"id": "expert", "label": "Expert", "arabicLabel": "المستوى الرابع", "color": "#6A1A6A", "description": "Maîtrise complète : Uṣūl al-Fiqh malikite, divergences au sein de l'école et ijtihād.", "subjectCount": 7, "locked": false}];

const DEBUTANT = {id:"debutant",label:"Débutant",arabicLabel:"المستوى الأوّل",levelColor:"#1A6B68",levelBadge:{"id": "badge-debutant-or", "title": "Érudit Débutant", "arabicTitle": "المتعلّم المبتدئ", "icon": "star8", "color": "gold", "unlockCondition": "Obtenir ≥ 85 % de moyenne sur l'ensemble des questionnaires du niveau Débutant"},source:"Mukhtaṣar al-Akhḍarī — ",description:"Maîtrisez les fondements de la pratique islamique selon l'école malikite, de la purification rituelle aux obligations financières.",subjects:[
    {id:"purification",title:"La Purification",arabicTitle:"الطهارة",icon:"water",description:"Types d'eau, ablutions, purification complète, Tayammum, Nifās selon le rite malikite.",source:"",badge:{id:"badge-purification",title:"MaîṬahāra",arabicTitle:"إتقان الطهارة",icon:"water",color:'gold',unlockCondition:"Questionnaire \"La Purification\" avec un score ≥ 85 %"},lessons:[        {
          id:"pur-01",
          title:"La Ṭahāra — Introduction à la Purification Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "Selon l'école malikite, Ṭahāra se divise en deux grandes catégories ayant chacune ses règles propres. Toutes deux sont nécessaires pour accomplir valablement les actes d'adoration."},
            {"t": "h", "v": "1. Ṭahārat al-Ḥadath — Pureté de l'impureté rituelle"},
            {"t": "p", "v": "Le Ḥadath est un état d'impureté rituelle qui survient indépendamment de toute souillure visible. Il existe deux niveaux : le Ḥadath Aṣghar et le Ḥadath Akbar, relevé par le Ghusl ou le Tayammum."},
            {"t": "h", "v": "2. Ṭahārat al-Khabath — Pureté des souillures physiques"},
            {"t": "p", "v": "Le désigne une souillure physique concrèNajāsa qui se trouve sur le corps, le vêtement ou le lieu de prière. Elle est visible ou palpable et doit être éliminée par lavage pour que la prière soit valide."},
            {"t": "h", "v": "L'eau pure et purifiante (māʾ ṭāhir muṭahhir)"},
            {"t": "p", "v": "Aucune des deux purifications n'est valide que par une eau pure et purifiante : une eau dont la nature propre n'a pas été altérée dans sa couleur, son goût ou son odeur par une substance étrangère habituellement séparable de l'eau — comme l'huile, la graisse, le beurre, le savon ou la saleté."},
            { t:'ul', v:[
              "Le contact avec de la terre, de la boue ou du sol salin (sabkha) ne remet pas en cause la validité de l'eau.",
              "L'eau altérée uniquement par de la vase ou de l'argile naturelle reste valide.",
              "Seule l'altération par des substances séparables de l'eau par nature (corps gras, produits ménagers…) est problématique."
            ] },
            { t:'ar', v:"الطهارةُ قِسمانِ : طهارةُ حَدَثٍ وطهارةُ خَبَثٍ. ولا يصحُّ الجميعُ إلّا بالماءِ الطاهرِ المُطهِّر", n:"« La purification est de deux types : purification du الحَدَث et purification du الخَبَث. Aucune des deux n'est valide que par l'eau pure et purifiante. » — Mukhtaṣar al-Akhḍarī" }
          ]
        },
        {
          id:"pur-02",
          title:"La Gestion des Souillures Physiques",
          status:'available',
          content:[
            {"t": "lead", "v": "Lorsqu'Najāsa atteint le corps, le vêtement ou le lieu de prière, l'école malikite prescrit des règles précises selon que la souillure est certaine, localisée ou incertaine."},
            {"t": "h", "v": "Souillure localisée avec certitude"},
            {"t": "p", "v": "Si l'Najāsa est connu et délimité, il suffit de laver cet emplacement précis. Inutile de laver l'ensemble du vêtement ou du corps."},
            {"t": "h", "v": "Souillure incertaine ou dispersée"},
            {"t": "p", "v": "Si l'on sait qu'Najāsa a atteint le vêtement mais qu'on ne peut pas en localiser l'endroit exact, il faut laver l'ensemble du vêtement."},
            {"t": "h", "v": "Najāsa"},
            {"t": "p", "v": "Si l'on doute d'avoir été Najāsa (sans certitude), il suffit d'asperger la zone d'eau (naḍḥ). En revanche, si l'on doute qu'Najāsa ou non, aucun naḍḥ n'est requis."},
            {"t": "h", "v": "Découverte d'Najāsa pendant ou après la prière"},
            { t:'ul', v:[
              "Découverte pendant la prière : interrompre la prière, sauf si l'on craint la sortie du temps — dans ce cas on la continue.",
              "Prié Najāsa par oubli, souvenu après le salām : répéter la prière dans son temps (avant la fin du temps de cette prière).",
              "Après sortie du temps : la prière n'est pas répétée."
            ] },
            {"t": "note", "v": "Principe clé : le doute ne crée pas d'impureté. Seule la certitude (ou la quasi-certitude) Najāsa impose de laver."}
          ]
        },
        {
          id:"pur-03",
          title:"Les Obligations du Wuḍūʾ — Les Sept Farāʾiḍ",
          status:'available',
          content:[
            {"t": "lead", "v": "Wuḍūʾ (ablutions mineures) est l'acte de purification rituelle qui remet en éṬahāra après un. Selon l'école malikite, Farāʾiḍ incontournables."},
            { t:'ar', v:"فرائضُ الوضوءِ سَبعٌ : النيّةُ، وغسلُ الوجهِ، وغسلُ اليدينِ إلى المِرفَقَينِ، ومسحُ الرأسِ، وغسلُ الرِّجلَينِ إلى الكَعبَينِ، والدَّلكُ، والفَورُ", n:"« Les obligations du al-wuḍūʾ (الوُضُوء)' sont au nombre de sept. » — Mukhtaṣar al-Akhḍarī" },
            {"t": "h", "v": "Farāʾiḍ"},
            { t:'ul', v:[
              "<strong>1. L'Niyya</strong> — formée dans le cœur au moment de commencer.",
              "<strong>2. Le lavage du visage</strong> — de la racine des cheveux au bas du menton, d'une oreille à l'autre.",
              "<strong>3. Le lavage des deux bras jusqu'aux coudes</strong> — les coudes inclus.",
              "<strong>4. L'essuyage de la tête (masḥ)</strong> — l'ensemble de la tête, non une partie seulement.",
              "<strong>5. Le lavage des deux pieds jusqu'aux chevilles</strong> — les chevilles incluses.",
              "<strong>6. Le frottement</strong> — passer la main sur les membres lors du lavage, contrairement à d'autres écoles.",
              "<strong>7. L'enchaînement immédiat</strong> — enchainer les membres sans laisser le premier sécher avant de passer au suivant."
            ] },
            {"t": "h", "v": "Sunna Wuḍūʾ"},
            { t:'ul', v:[
              "Laver les mains jusqu'aux poignets (kuʿayn) avant de commencer.",
              "Se rincer la bouche (maḍmaḍa) et les narines (istinshāq), puis les expulser (istinthār).",
              "Reprendre le masḥ en sens inverse (aller-retour sur la tête).",
              "Essuyer les deux oreilles avec une eau renouvelée.",
              "Respecter l'ordre entre les obligations (tartīb)."
            ] },
            {"t": "h", "v": "Les vertus et recommandations (faḍāʾil)"},
            { t:'ul', v:[
              "Dire la Basmala au début.",
              "Utiliser le siwāk (brosse à dents naturelle).",
              "Passer plus d'une fois sur le visage et les bras (jusqu'à 3 fois).",
              "Commencer le masḥ par l'avant de la tête.",
              "Économiser l'eau et donner la priorité au côté droit sur le gauche."
            ] },
            {"t": "h", "v": "Obligation d'entrelacement des doigts"},
            {"t": "p", "v": "Il est obligatoire d'Wuḍūʾ (recommandé pour les orteils). La barbe légère doit être peignéWuḍūʾ ; la barbe épaisse, non. En revanche, lors du Ghusl, même la barbe épaisse doit être traversée par l'eau."},
            {"t": "note", "v": "Si l'on oublie une obligation et s'en souvient rapidement : on l'exécute ainsi que ce qui la suit. Si c'est après un long délai : on exécute uniquement cet acte et on répète les prières accomplies entre-temps."}
          ]
        },
        {
          id:"pur-04",
          title:"Les Nullificateurs du Wuḍūʾ — Nawāqiḍ",
          status:'available',
          content:[
            {"t": "lead", "v": "Certains actes et éWuḍūʾ et nécessitent de le renouveler avant toute prière ou acte soumis à la condition de pureté rituelle. L'école malikite les divise en deux catégories : les (causes directes) et les (causes indirectes)."},
            {"t": "h", "v": "Les — Causes directes"},
            { t:'ul', v:[
              "<strong>L'urine</strong> et <strong>les matières fécales</strong>.",
              "<strong>Le vent (rīḥ)</strong> — gaz intestinaux.",
              "<strong>Le </strong> — liquide clair qui s'écoule lors d'un désir léger (pensée, regard…).",
              "<strong>Le </strong> — liquide blanc épais qui suit parfois l'urine."
            ] },
            {"t": "h", "v": "Les — Causes indirectes (occasionnelles)"},
            { t:'ul', v:[
              "<strong>Le sommeil profond</strong> — le sommeil léWuḍūʾ.",
              "<strong>L'évanouissement (ighmaʾ)</strong>, <strong>l'ivresse (sukr)</strong> et <strong>la folie (junūn)</strong>.",
              "<strong>Le baiser</strong> avec désir ou plaisir ressenti.",
              "<strong>Le toucher d'une femme</strong> si l'on cherche le plaisir ou qu'on le ressent.",
              "<strong>Le toucher du pénis</strong> avec l'intérieur de la paume ou des doigts."
            ] },
            {"t": "h", "v": "Règle sur le doute"},
            {"t": "p", "v": "Si l'on doute d'avoir eu un Ḥadath, on est obligé Wuḍūʾ. Exception : celui qui souffre de scrupules obsessionnels — il n'est pas astreint à Wuḍūʾ à chaque doute, car agir ainsi aggraverait son état."},
            {"t": "h", "v": "Le — règle spécifique"},
            {"t": "p", "v": "Après le, il est obligatoire de laver l'ensemble du pénis, mais pas les testicules. Wuḍūʾ doit être renouvelé."},
            {"t": "h", "v": "Wuḍūʾ"},
            { t:'ul', v:[
              "La prière et la Ṣalāt et le Ṭawāf.",
              "Toucher le texte du Coran — de la main, d'un stylet ou d'un autre objet. Seul le fascicule utilisé par un étudiant (juzʾ en cours d'apprentissage) est exempté.",
              "Toucher une tablette coranique — sauf pour l'enseignant qui corrige ou l'élève en train d'apprendre.",
              "Prier délibéréWuḍūʾ est un acte de kufr (incrédulité) — qu'Allāh nous en préserve."
            ] },
            { t:'ar', v:"مَن صلّى بغيرِ وضوءٍ عامداً فهو كافرٌ والعياذُ بالله", n:"« Celui qui prie délibérément sans ablutions est un infidèle — qu'Allāh nous en préserve. » — al-Akhḍarī" }
          ]
        },
        {
          id:"pur-05",
          title:"La Purification Complète — Le Ghusl",
          status:'available',
          content:[
            {"t": "lead", "v": "Le Ghusl est la purification majeure qui consiste à se laver entièrement le corps. Il est obligatoire dans trois situations. L'éFarāʾiḍ."},
            {"t": "h", "v": "Les trois causes qui rendent le Ghusl obligatoire"},
            { t:'ul', v:[
              "<strong>Janāba</strong> — impureté sexuelle majeure, qui survient dans deux cas :<br>① L'émission de (semence) avec un plaisir habituel, en sommeil ou en état d'éveil, par rapport sexuel ou autrement.<br>② La pénétration (ighyāb al-ḥashafa fi'l-farj) même sans émission.",
              "<strong>Le </strong> — les menstrues, à leur arrêt.",
              "<strong>Nifās</strong> — le saignement post-natal, à son arrêt."
            ] },
            {"t": "h", "v": "Janāba"},
            { t:'ul', v:[
              "Rêve de rapport sexuel sans émission de : aucun Ghusl requis.",
              "Trouver du sec dans son vêtement sans savoir quand il est survenu : faire le Ghusl et répéter les prières accomplies depuis le dernier sommeil dans ce vêtement."
            ] },
            {"t": "h", "v": "Farāʾiḍ du Ghusl"},
            { t:'ul', v:[
              "<strong>1. L'Niyya</strong> — au moment de commencer.",
              "<strong>2. L'enchaînement immédiat</strong> — laver tout le corps de suite, sans interruption qui ferait sécher un membre.",
              "<strong>3. Le frottement</strong> — frotter la peau avec la main lors du lavage.",
              "<strong>4. La généralisation (ʿumūm)</strong> — l'eau doit atteindre tout le corps sans exception, y compris les cheveux même épais."
            ] },
            {"t": "h", "v": "Sunna du Ghusl"},
            { t:'ul', v:[
              "Laver les mains jusqu'Wuḍūʾ.",
              "Se rincer la bouche, les narines et les expulser.",
              "Laver le conduit auditif (ṣamākh) — le trou interne de l'oreille.",
              "Quant au pavillon de l'oreille (ṣafḥa), il est obligatoire de laver son extérieur et son intérieur."
            ] },
            {"t": "h", "v": "L'ordre recommandé (faḍāʾil)"},
            { t:'ul', v:[
              "Najāsa éventuelle.",
              "Puis les organes génitaux — c'est le moment de formuler l'intention.",
              "Wuḍūʾ une fois.",
              "Puis le reste du corps en commençant par la partie supérieure.",
              "Tripler le lavage de la tête et commencer par le côté droit."
            ] },
            {"t": "h", "v": "Oubli d'un membre ou d'une zone"},
            {"t": "p", "v": "Si l'on a oublié de laver une zone lors du Ghusl, on se précipite pour la laver dès qu'on s'en souvient — même après un mois — et on répète les prières accomplies depuis. Si l'on diffère après s'en être souvenu, le Ghusl entier est invalidé."},
            {"t": "h", "v": "Interdictions pour le junub"},
            { t:'ul', v:[
              "Entrer dans la mosquée.",
              "Réciter le Coran (sauf un verset isolé pour le taʿawwudh ou la protection)."
            ] },
            { t:'ar', v:"فرائضُ al-ghusl (الغُسل)ِ : النيّةُ عندَ الشروعِ، والفَورُ، والدَّلكُ، والعُمومُ", n:"« Les obligations du Ghusl (الغُسْل) : l'intention au moment de commencer, l'enchaînement immédiat, le frottement et la généralisation. » — Mukhtaṣar al-Akhḍarī" }
          ]
        },
        {
          id:"pur-06",
          title:"Tayammum — Purification par le Sol",
          status:'available',
          content:[
            {"t": "lead", "v": "Tayammum est la purification rituelle de substitution utilisant un sol pur en l'absence d'eau ou en cas d'incapacité à l'utiliser. L'école malikite en précise les bénéficiaires, les matières valides et les obligations."},
            {"t": "h", "v": "Tayammum ?"},
            { t:'ul', v:[
              "<strong>Le voyageur</strong> ne voyageant pas dans un but illicite — pour toute prière obligatoire ou surérogatoire.",
              "<strong>Le malade</strong> — pour toute prière obligatoire ou surérogatoire.",
              "<strong>Le résidant en bonne santé</strong> — uniquement pour les prières obligatoires dont il craint la sortie du temps si l'on attend l'eau.",
              "Le résidant en bonne santé <em>ne peut pas</em> Tayammum pour une prière surérogatoire, la prière du vendredi (jumuʿa) ou la prière funéraire, sauf si la prière funéraire est obligatoire de son fait spécifiquement."
            ] },
            {"t": "h", "v": "Farāʾiḍ Tayammum"},
            { t:'ul', v:[
              "<strong>L'Niyya</strong>.",
              "<strong>Un sol pur</strong>.",
              "<strong>L'essuyage du visage</strong>.",
              "<strong>L'essuyage des deux mains jusqu'aux poignets (kuʿayn)</strong>.",
              "<strong>Une première frappe sur le sol</strong>.",
              "<strong>L'enchaînement immédiat</strong>.",
              "<strong>L'entrée dans le temps de la prière</strong> et la continuité avec celle-ci."
            ] },
            {"t": "h", "v": "Les matières valides pour le"},
            { t:'ul', v:[
              "<strong>Valides :</strong> la terre, la brique crue, la pierre, la neige, la boue humide (khakhdāẓ).",
              "<strong>Non valides :</strong> le plâtre cuit (jiss maṭbūkh), la natte, le bois, l'herbe.",
              "Exception : le malade peut utiliser un mur de pierre ou de brique crue s'il ne peut faire amener autre chose."
            ] },
            {"t": "h", "v": "Ce qu'Tayammum permet"},
            { t:'ul', v:[
              "Tayammum obligatoire (pour une farīḍa) permet aussi les prières surérogatoires après, et de toucher le Coran, le Ṭawāf et la récitation — à condition que cela ait été dans l'intention et que le temps ne soit pas sorti.",
              "Tayammum ne permet pas d'accomplir deux prières obligatoires.",
              "Janāba : l'intention doit spéJanāba."
            ] },
            {"t": "h", "v": "Tayammum"},
            {"t": "p", "v": "Les mêWuḍūʾ, avec en plus : trouver de l'eau ou avoir la capacité de l'utiliser."},
            { t:'ar', v:"ويتيمّمُ المسافرُ في غيرِ معصيةٍ، والمريضُ لفريضةٍ أو نافلةٍ، ويتيمّمُ الحاضرُ الصحيحُ للفرائضِ إذا خافَ خروجَ وقتِها", n:"« Le al-tayammum (التَّيَمُّم) est permis au voyageur non en état de désobéissance, au malade pour toute prière, et au résidant sain pour les prières obligatoires dont il craint la sortie du temps. » — al-Akhḍarī" }
          ]
        },
        {
          id:"pur-07",
          title:"Le Nifās",
          status:'available',
          content:[
            {"t": "lead", "v": "Le (menstrues) Nifās (saignement post-natal) sont deux états féminins qui entraînent un et imposent de nombreuses interdictions temporaires. L'école malikite définit leurs durées et leurs règles en détail."},
            {"t": "h", "v": "Les trois catégories de femmes en matière de"},
            { t:'ul', v:[
              "<strong>La mubiadaʾa</strong> (première expérience) : durée maximale du = 15 jours.",
              "<strong>La muʿtāda</strong> (cycle habituel établi) : elle suit son cycle habituel. Si le sang persiste, elle peut ajouter 3 jours, sans dépasser 15 jours au total.",
              "<strong>La ḥāmil</strong> (femme enceinte) : après 3 mois de grossesse, maximum 15 jours ; après 6 mois, maximum 20 jours. Si le sang s'interrompt, elle cumule les jours jusqu'à atteindre son cycle habituel."
            ] },
            {"t": "h", "v": "Interdictions pendant le"},
            { t:'ul', v:[
              "La prière et la Ṣalāt — pas de rattrapage.",
              "Le jeûne — à rattraper obligatoirement.",
              "Le Ṭawāf.",
              "Toucher le Coran.",
              "Entrer dans la mosquée.",
              "Le rapport sexuel, et tout contact entre le nombril et les genoux — jusqu'au Ghusl."
            ] },
            {"t": "h", "v": "Ce qui est permis pendant le"},
            {"t": "p", "v": "La récitation du Coran de mémoire (sans le toucher) est permise à la femme menstruée selon l'école malikite. Elle doit rattraper les jours de jeûne mais pas les prières."},
            {"t": "h", "v": "Nifās — saignement post-natal"},
            { t:'ul', v:[
              "Nifās sont identiques à celles du.",
              "Durée maximale : <strong>60 jours</strong>.",
              "Si le sang s'arrête avant — même le jour de l'accouchement — la femme fait le Ghusl et reprend ses prières immédiatement.",
              "Si le sang revient après un arrêt : s'il s'est écoulé 15 jours ou plus entre les deux saignements → le second est un nouveau ; s'il s'est écoulé moins de 15 jours → il s'Nifās."
            ] },
            { t:'ar', v:"النفاسُ كالحيضِ في مَنعِه. وأكثرُه ستّونَ يوماً", n:"« Le النِّفَاس est identique au الحَيْض dans ses interdictions. Sa durée maximale est de soixante jours. » — Mukhtaṣar al-Akhḍarī" },
            {"t": "note", "v": "Important : dans le rite malikite, la femme menstruée n'a pas à rattraper les prières manquées pendant ses règles, à la différence du jeûne. C'est une miséricorde divine pour alléger sa situation."}
          ]
        },
        {
          id:"pur-08",
          title:"L'Istinjāʾ — Nettoyage Intime après le Passage aux Toilettes",
          status:'available',
          content:[
            {"t": "lead", "v": "L'Istinjāʾ est le nettoyage obligatoire des parties intimes après la sortie d'urine ou de selles. Il constitue le préalable indispensable au Wuḍūʾ et au Ghusl selon l'Akhḍarī. Il s'effectue soit à l'eau soit avec des pierres ou équivalents."},
            {"t": "h", "v": "Obligation de l'Istinjāʾ"},
            {"t": "p", "v": "L'Istinjāʾ est obligatoire après toute sortie d'urine ou de selles. Il est accompli AVANT le Wuḍūʾ — c'est la séquence correcte: → →. Omettre l'Istinjāʾ alors que la zone est souillée rend le Wuḍūʾ insuffisant pour la prière."},
            {"t": "h", "v": "L'Istinjāʾ à l'eau"},
            { t:'ul', v:[
              "Méthode préférée et la plus complète.",
              "Utiliser de l'eau propre pour laver la zone souillée jusqu'à élimination complète de la souillure.",
              "La main gauche (uniquement) est utilisée pour le lavage — il est makrūh d'utiliser la main droite pour l'Istinjāʾ.",
              "On peut combiner eau et pierres : commencer par les pierres pour enlever la matière, puis finir à l'eau pour nettoyer."
            ] },
            {"t": "h", "v": "L'Istijmār — pierres, papier et équivalents"},
            {"t": "p", "v": "L'Istijmār consiste à utiliser des matières sèches solides (pierres, papier non glacé, tissu propre…) à la place de l'eau. Il est permis mais l'eau reste préférable."},
            { t:'ul', v:[
              "<strong>Nombre minimum :</strong> 3 essuyages (trois pierres ou trois passages), en nombre impair. Si 3 ne suffisent pas à nettoyer, on continue jusqu'à propreté.",
              "<strong>Interdictions :</strong> utiliser un os, de la nourriture, du fumier séché, des matières sacrées, des objets précieux.",
              "<strong>Interdiction:</strong> utiliser la main droite pour l'Istijmār.",
              "<strong>Condition :</strong> la matière doit absorber et nettoyer réellement — pas de verre, métal ou surface non absorbante.",
              "Si la souillure a dépassé la zone habituelle, l'Istijmār seul ne suffit plus: l'eau est obligatoire."
            ] },
            {"t": "h", "v": "Règles concernant la (direction de prière)"},
            {"t": "p", "v": "Il est interdit de faire face à la ou de lui tourner le dos lors du en plein air. Dans un bâtiment (WC), les savants malikites ont généralement levé cette interdiction, bien que le respect de la reste recommandé."},
            { t:'ar', v:"لَا تَسْتَقبِلُوا القِبلَةَ بِغَائِطٍ وَلَا بَولٍ وَلَا تَستَدبِرُوهَا", n:"« Ne faites pas face à la ni ne lui tournez le dos lors du passage aux toilettes. » — Hadīth rapporté par al-Bukhārī et Muslim" },
            {"t": "h", "v": "Autres règles pratiques"},
            { t:'ul', v:[
              "Ne pas uriner dans de l'eau stagnante.",
              "Ne pas uriner debout sauf nécessité — le rite malikite recommande la position accroupie.",
              "S'éloigner et se cacher des regards.",
              "Il est makrūh de parler pendant le sauf nécessité.",
              "Il est déconseillé de porter sur soi une mention d'Allah ou le Coran lors du passage aux toilettes — on peut le poser ou le protéger."
            ] },
            {"t": "note", "v": "L'Istinjāʾ élève l'impureté physique — il ne lève pas l'impureté rituelle. Il faut ensuite faire le Wuḍūʾ pour lever le. Les deux étapes sont distinctes et séquentielles."}
          ]
        },
        {
          id:"pur-09",
          title:"Masḥ ʿalā al-Khuffayn — Essuyage sur les Chaussures et Pansements",
          status:'available',
          content:[
            {"t": "lead", "v": "Le rite malikite autorise deux formes d'essuyage qui remplacent le lavage habituel: le sur les (chaussures de cuir) pour les pieds, et le sur la (pansement/plâtre) pour un membre blessé. Ces deux dispenses reposent sur des textes authentiques et répondent à des besoins pratiques réels."},
            {"t": "h", "v": "Masḥ ʿalā al-Khuffayn — Essuyage sur les chaussures de cuir"},
            {"t": "p", "v": "Il est permis de remplacer le lavage des pieds dans le Wuḍūʾ par le passage des mains mouillées sur les (chaussures en cuir cousu couvrant les chevilles). <strong>Spécificité malikite fondamentale: ce mash n'est pas limité dans le temps</strong> — contrairement aux écoles hanafite et chāfiʿite qui fixent 24h pour le résident et 72h pour le voyageur."},
            { t:'ar', v:"المَسْح عَلَى الخُفَّيْنِ جَائِزٌ لِلمُسَافِرِ وَالحَاضِرِ وَلَا يَتَقَيَّدُ بِمُدَّةٍ فِي المَذهَبِ المَالِكِي", n:"« L'essuyage sur les est permis pour le voyageur et le résident, sans être limité dans le temps dans le rite malikite. » — Al-Jazīrī, ʿalā al-madhāhib al-arbaʿa" },
            {"t": "h", "v": "Conditions des"},
            { t:'ul', v:[
              "<strong>1. Matière :</strong> le cuir doit être prédominant — au minimum le dessous (semelle) et le dessus en cuir cousu, non collé.",
              "<strong>2. Couverture :</strong> doivent couvrir les chevilles et les inclure.",
              "<strong>3. État d'ablution à l'enfilage:</strong> avoir les pieds lavés (en état de Wuḍūʾ humide) au moment où on les enfile — pas de mash si enfilés sans ablution.",
              "<strong>4. Propreté :</strong> ne pas contenir de souillure.",
              "<strong>5. Intégrité :</strong> non déchirés sur 1/3 du pied ou plus.",
              "<strong>6. Continuité :</strong> ne plus les enlever (si on les enlève, les règles de réenfilage s'appliquent)."
            ] },
            {"t": "h", "v": "Comment effectuer le"},
            { t:'ul', v:[
              "Passer les mains mouillées UNE FOIS sur le dessus des (pas en dessous).",
              "C'est suffisant — pas besoin de laver ni d'essuyer le dessous.",
              "La main droite essuie le droit, la main gauche essuie le gauche."
            ] },
            {"t": "h", "v": "Ce qui invalide le"},
            { t:'ul', v:[
              "<strong>Enlever les:</strong> si on les enlève après avoir fait le → laver immédiatement les pieds (sinon refaire Wuḍūʾ complet si long délai).",
              "<strong>État de:</strong> le Ghusl oblige à laver les pieds directement — plus de sur les.",
              "<strong>Déchirure dépassant 1/3 :</strong> invalide les conditions.",
              "Le reste valide tant que les conditions sont réunies, sans limite de temps."
            ] },
            {"t": "h", "v": "Jabīra — Essuyage sur le pansement ou plâtre"},
            {"t": "p", "v": "En cas de blessure, fracture ou plaie qui empêche d'utiliser l'eau sur un membre, on fait l'ablution normalement sur tous les membres sains et on essuie le pansement/bandage/plâtre sur le membre malade au lieu de le laver."},
            { t:'ul', v:[
              "On fait l'ablution normalement pour tous les autres membres.",
              "Arrivé au membre blessé : passer la main mouillée UNE FOIS sur le pansement/plâtre.",
              "Si même l'essuyage direct sur le pansement risque de nuire à la blessure : essuyer le bandage qui le recouvre.",
              "<strong>Le pansement doit rester en place jusqu'à la fin de la prière</strong> — si retiré avant la fin, refaire le et reprendre la prière.",
              "Dès que la blessure guérit et qu'on enlève le plâtre : revenir au lavage normal avec l'eau.",
              "Cette dispense s'applique aussi bien dans Wuḍūʾ que dans Ghusl."
            ] },
            {"t": "h", "v": "Frontière entre et Tayammum pour le blessé"},
            { t:'ul', v:[
              "Si le fait de laver les membres SAINS eux-mêmes provoque un préjudice ou un risque → Tayammum.",
              "Si la grande majorité du corps est blessée et qu'il ne reste qu'un pied ou une main de sain → Tayammum est obligatoire.",
              "Sinon: sur le pansement, lavage du reste."
            ] },
            {"t": "note", "v": "La leçon de l'Imām Mālik: il lave les membres qu'il peut laver, essuie ce qui est blessé, ou essuie le bandage s'il ne peut pas essuyer directement la blessure. Le principe est la gradation: eau → direct → sur bandage → Tayammum."}
          ]
        }],quiz:{id:"quiz-purification",title:"Questionnaire — La Purification",status:"available",score:null,questions:[        {
          id:"q-pur-01",
          text:"En combien de types la <strong>Ṭahāra</strong> est-elle divisée selon le rite malikite?",
          choices:[
          {id:"a",text:"Un seul : la pureté rituelle"},
          {id:"b",text:"Deux: <strong>Ṭahārat al-Ḥadath</strong> (impureté rituelle) et <strong>Ṭahārat al-Khabath</strong> (souillure physique)"},
          {id:"c",text:"Trois : corporelle, vestimentaire et spatiale"},
          {id:"d",text:"Quatre, selon les quatre membres du Wuḍūʾ"}
          ],
          correctId:"b",
          explanation:"La Ṭahāra comprend deux types: Ṭahārat al-Ḥadath — élimination de l'impureté rituelle par Wuḍūʾ, Ghusl ou Tayammum ; et Ṭahārat al-Khabath — élimination des souillures physiques du corps, vêtement et lieu de prière."
        },
        {
          id:"q-pur-02",
          text:"Combien d'obligations compte le <strong>Wuḍūʾ</strong> selon l'Akhḍarī?",
          choices:[
          {id:"a",text:"5"},
          {id:"b",text:"6"},
          {id:"c",text:"7"},
          {id:"d",text:"9"}
          ],
          correctId:"c",
          explanation:"Les sept du Wuḍūʾ: Niyya,,,,, Dalk (frottement) et (enchaînement immédiat sans laisser sécher un membre)."
        },
        {
          id:"q-pur-03",
          text:"Le <strong>Dalk</strong> (frottement de la peau lors du lavage) est dans le Wuḍūʾ malikite:",
          choices:[
          {id:"a",text:"Sunna"},
          {id:"b",text:"Une vertu"},
          {id:"c",text:"Une obligation"},
          {id:"d",text:"Un acte déconseillé dans certains cas"}
          ],
          correctId:"c",
          explanation:"Le Dalk est une du Wuḍūʾ selon le rite malikite, à la différence des écoles hanafite et chāfiʿite. Ne pas frotter ses membres intentionnellement invalide le Wuḍūʾ. C'est l'une des particularités les plus importantes du rite malikite."
        },
        {
          id:"q-pur-04",
          text:"Ibrahim a fait Wuḍūʾ et oublié d'essuyer ses oreilles. Doit-il refaire sa prière?",
          choices:[
          {id:"a",text:"Oui, l'essuyage des oreilles est une obligation du Wuḍūʾ"},
          {id:"b",text:"Non, c'Sunna — la prière reste valide"},
          {id:"c",text:"Oui s'il s'en souvient encore dans le temps de cette prière"},
          {id:"d",text:"Oui car il faut refaire le Wuḍūʾ complet"}
          ],
          correctId:"b",
          explanation:"L'essuyage des oreilles Sunna du Wuḍūʾ, non une obligation. Sunna n'invalide ni les ablutions ni la prière. Seules les sept sont obligatoires."
        },
        {
          id:"q-pur-05",
          text:"Le (enchaînement immédiat entre les membres) est dans Wuḍūʾ:",
          choices:[
          {id:"a",text:"Sunna"},
          {id:"b",text:"Une vertu"},
          {id:"c",text:"Une obligation (la 7ème des )"},
          {id:"d",text:"Indifférent si on reste concentré"}
          ],
          correctId:"c",
          explanation:"Le est la septième obligation du Wuḍūʾ. Il consiste à ne pas laisser sécher un membre avant de passer au suivant (en climat tempéré). Si les membres sèchent avant d'être tous lavés, Wuḍūʾ est invalide et doit être refait depuis le début."
        },
        {
          id:"q-pur-06",
          text:"Qu'est-ce que le <strong>Madhī</strong>?",
          choices:[
          {id:"a",text:"La semence émise lors de l'orgasme"},
          {id:"b",text:"Le liquide blanc épais qui suit parfois l'urine"},
          {id:"c",text:"Le liquide clair et léger émis lors d'un désir mineur (pensée, regard…)"},
          {id:"d",text:"La sueur abondante après un effort physique"}
          ],
          correctId:"c",
          explanation:"Le Madhī est un liquide clair et léger émis lors d'un désir sexuel mineur. Il impose le renouvellement du Wuḍūʾ et le lavage du pénis en entier (mais pas des testicules). À distinguer de Manī (impose Ghusl) et du Wadī (liquide blanc épais après l'urine, impose uniquement Wuḍūʾ)."
        },
        {
          id:"q-pur-07",
          text:"Après une émission de <strong>Madhī</strong>, que doit laver un homme selon le rite malikite?",
          choices:[
          {id:"a",text:"Uniquement la zone souillée visible"},
          {id:"b",text:"Le pénis en entier ET les testicules"},
          {id:"c",text:"Le pénis en entier SEULEMENT — pas les testicules"},
          {id:"d",text:"Rien de spécifique — Madhī ne nécessite pas de lavage"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — on lave le pénis en entier mais PAS les testicules. Puis on renouvelle le Wuḍūʾ. C'est un point de précision fréquemment mal compris."
        },
        {
          id:"q-pur-08",
          text:"<strong>PIÈGE Waswās:</strong> Aminata souffre de scrupules obsessionnels. Après son Wuḍūʾ, elle croit avoir eu un vent mais n'en est pas certaine. Doit-elle refaire le Wuḍūʾ?",
          choices:[
          {id:"a",text:"Oui, le doute impose toujours de refaire"},
          {id:"b",text:"Non — la règle du doute ne s'applique pas à celui qui souffre de Waswās"},
          {id:"c",text:"Seulement si elle peut repérer le moment exact"},
          {id:"d",text:"Oui, mais seulement pour la prochaine prière"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī établit une exception explicite: « » — celui qui souffre de Waswās ne doit PAS renouveler ses ablutions sur la base de simples doutes. Cela aggraverait son état et est une ruse du diable. Pour une personne normale, le doute d'un impose le renouvellement."
        },
        {
          id:"q-pur-09",
          text:"Quelles sont les conditions qui définissent une eau valide pour la Tahara ? (plusieurs réponses possibles)",
          type:'multiple',
          choices:[
          {id:"a",text:"Elle doit être froide"},
          {id:"b",text:"Elle provient d'une source naturelle : pluie, rivière, mer, puits ou neige"},
          {id:"c",text:"Elle n'a pas été altérée dans sa couleur, son goût ou son odeur par une impureté"},
          {id:"d",text:"Elle est toujours incolore et inodore par nature"}
          ],
          correctIds:["b", "c"],
          explanation:"L'eau valide pour la Tahara doit satisfaire deux conditions : (1) être d'origine naturelle — pluie, rivière, mer, source, puits, neige, rosée (réponse B) ; (2) ne pas avoir été altérée par une impureté dans sa couleur, son goût ou son odeur (réponse C). L'eau froide n'est pas une condition — l'eau chaude reste valide. Et une eau naturellement teintée (eau de mer légèrement salée) reste valide tant que l'altération ne vient pas d'une impureté extérieure."
        },
        {
          id:"q-pur-10",
          text:"L'eau du robinet de Khalid est légèrement brunâtre à cause de vieilles canalisations rouillées. Peut-il l'utiliser pour Wuḍūʾ?",
          choices:[
          {id:"a",text:"Non, toute eau altérée en couleur est invalide"},
          {id:"b",text:"Oui — l'altération par la rouille n'est pas due à une substance séparable"},
          {id:"c",text:"Seulement pour Ghusl, pas pour Wuḍūʾ"},
          {id:"d",text:"Oui mais c'est makrūh"}
          ],
          correctId:"b",
          explanation:"La rouille se dissout dans l'eau naturellement — ce n'est pas une substance séparable comme de l'huile ou du savon. L'altération de couleur n'invalide l'eau QUE si elle est due à une substance séparable. L'eau reste valide même si sa couleur est modifiée par la rouille."
        },
        {
          id:"q-pur-11",
          text:"L'entrelacement des doigts : quelle règle s'applique pour les mains et les pieds ?",
          choices:[
          {id:"a",text:"Obligatoire pour les deux (mains et pieds)"},
          {id:"b",text:"Obligatoire pour les mains, Sunna pour les pieds"},
          {id:"c",text:"Sunna pour les deux"},
          {id:"d",text:"Obligatoire pour les pieds, Sunna pour les mains"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: «, » — entrecroiser les doigts des MAINS est une obligation, entrecroiser les orteils des PIEDS est recommandé. Ne pas confondre les deux règles."
        },
        {
          id:"q-pur-12",
          text:"La barbe épaisse dans Wuḍūʾ vs Ghusl: quelle est la différence?",
          choices:[
          {id:"a",text:"Même règle dans les deux : la barbe épaisse est exemptée"},
          {id:"b",text:"Dans Wuḍūʾ: barbe épaisse exemptée. Dans Ghusl: barbe épaisse doit être traversée"},
          {id:"c",text:"Dans les deux : la barbe épaisse doit être traversée"},
          {id:"d",text:"Dans Wuḍūʾ: doit être traversée. Dans Ghusl: exemptée"}
          ],
          correctId:"b",
          explanation:"DIFFÉRENCE CLEF: dans Wuḍūʾ, seule la barbe légère doit être traversée. Dans Ghusl, même la barbe épaisse doit être traversée. C'est l'une des distinctions Wuḍūʾ/Ghusl les plus importantes."
        },
        {
          id:"q-pur-13",
          text:"Hassan oublie une obligation du Wuḍūʾ et s'en souvient longtemps après. Que doit-il faire?",
          choices:[
          {id:"a",text:"Rien — un long délai pardonne l'oubli"},
          {id:"b",text:"Refaire Wuḍūʾ complet depuis le début"},
          {id:"c",text:"Accomplir UNIQUEMENT l'obligation oubliée, puis répéter les prières accomplies entre-temps"},
          {id:"d",text:"Refaire l'obligation oubliée et toutes les obligations qui la suivent dans l'ordre"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — si le délai est long (membres séchés), on exécute uniquement l'obligation oubliée puis on répète les prières du Wuḍūʾ incomplet. Ce n'est PAS le Wuḍūʾ entier à refaire si le délai est long."
        },
        {
          id:"q-pur-14",
          text:"Saïd se souvient d'une obligation oubliée du Wuḍūʾ ALORS QU'IL EST ENCORE EN TRAIN DE FAIRE le Wuḍūʾ. Que fait-il?",
          choices:[
          {id:"a",text:"Il reprend Wuḍūʾ depuis le début"},
          {id:"b",text:"Il exécute l'obligation manquante, puis toutes les obligations qui la suivent dans l'ordre"},
          {id:"c",text:"Il continue sans rien changer — le délai est court"},
          {id:"d",text:"Il exécute l'obligation manquante seulement"}
          ],
          correctId:"b",
          explanation:"Si l'oubli est récent (les membres n'ont pas séché), on exécute l'obligation manquante PUIS toutes les obligations qui la suivent dans l'ordre. C'est différent du cas du long délai (où on fait seulement l'obligation manquante)."
        },
        {
          id:"q-pur-15",
          text:"Sunna compte le Wuḍūʾ selon l'Akhḍarī?",
          choices:[
          {id:"a",text:"5"},
          {id:"b",text:"7"},
          {id:"c",text:"9"},
          {id:"d",text:"12"}
          ],
          correctId:"b",
          explanation:"Sunna du Wuḍūʾ: (1) laver les mains jusqu'aux poignets, (2) (rinçage de bouche), (3) (aspiration d'eau dans le nez), (4) (expulsion), (5) revenir en arrière sur le masḥ de la tête, (6) essuyer les oreilles avec de l'eau renouvelée, (7) (respecter l'ordre entre les obligations)."
        },
        {
          id:"q-pur-16",
          text:"<strong>DIFFÉRENCE CLEF:</strong> Celui sans Wuḍūʾ et le — lequel peut lire le Coran de mémoire (sans le toucher)?",
          choices:[
          {id:"a",text:"Les deux peuvent lire sans toucher"},
          {id:"b",text:"Ni l'un ni l'autre"},
          {id:"c",text:"Celui sans Wuḍūʾ peut lire de mémoire, le NE peut pas"},
          {id:"d",text:"Le peut lire de mémoire, celui sans Wuḍūʾ ne peut pas"}
          ],
          correctId:"c",
          explanation:"DIFFÉRENCE FONDAMENTALE: celui sans Wuḍūʾ peut lire le Coran de mémoire (sans le toucher). Le ne peut ni lire ni toucher le Coran (sauf un verset isolé pour ). Pour TOUCHER le Coran physiquement, le Wuḍūʾ est requis pour tous."
        },
        {
          id:"q-pur-17",
          text:"Un étudiant sans Wuḍūʾ peut-il toucher son fascicule du Coran qu'il utilise pour apprendre?",
          choices:[
          {id:"a",text:"Non, il lui faut toujours le Wuḍūʾ"},
          {id:"b",text:"Oui — exception pour le fascicule d'apprentissage"},
          {id:"c",text:"Seulement avec des gants propres"},
          {id:"d",text:"Seulement s'il lit, pas s'il mémorise"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī précise: le fascicule utilisé pour l'apprentissage peut être touché sans Wuḍūʾ par l'étudiant. Doctrine-malikite.fr confirme: l'enseignement et l'apprentissage constituent une exception légitime à l'interdiction de toucher le Coran sans Wuḍūʾ."
        },
        {
          id:"q-pur-18",
          text:"Yusuf touche affectueusement la main de sa femme sans aucun désir sexuel. Son Wuḍūʾ est-il rompu?",
          choices:[
          {id:"a",text:"Oui, tout contact avec la femme rompt le Wuḍūʾ"},
          {id:"b",text:"Non — seul le toucher avec désir ou ressenti de plaisir rompt"},
          {id:"c",text:"Oui, mais seulement si c'est la peau directe"},
          {id:"d",text:"Oui, car il l'a touchée avec la paume"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — le toucher ne rompt le Wuḍūʾ QUE si on cherche le plaisir ou qu'on le ressent effectivement. Un contact affectueux sans désir ne rompt rien."
        },
        {
          id:"q-pur-19",
          text:"Saïd touche son pénis avec le <u>dos</u> de la main. Son Wuḍūʾ est-il rompu?",
          choices:[
          {id:"a",text:"Oui, tout contact avec le pénis rompt le Wuḍūʾ"},
          {id:"b",text:"Non — seul le contact avec l'intérieur de la paume ou l'intérieur des doigts rompt"},
          {id:"c",text:"Oui mais seulement si intentionnel"},
          {id:"d",text:"Non, les zones similaires au pénis ne rompent pas"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī est précis: « » — seul le toucher avec l'INTÉRIEUR de la paume ou des doigts rompt le Wuḍūʾ. Le dos de la main ne rompt pas."
        },
        {
          id:"q-pur-20",
          text:"Lequel de ces actes <strong>ne rompt PAS</strong> le Wuḍūʾ selon le rite malikite?",
          choices:[
          {id:"a",text:"Un sommeil profond (perdre conscience des alentours)"},
          {id:"b",text:"Le Madhī (liquide du désir)"},
          {id:"c",text:"Un rot"},
          {id:"d",text:"Le Wadī (liquide blanc épais après l'urine)"}
          ],
          correctId:"c",
          explanation:"L'éructation (rot) n'est PAS parmi les du Wuḍūʾ dans le rite malikite. Les nullificateurs incluent:,, intestinal, Madhī, Wadī,, Ighmaʾ,,, avec désir, avec désir, avec la paume."
        },
        {
          id:"q-pur-21",
          text:"Quelle est la différence juridique entre <strong>Madhī</strong> et <strong>Wadī</strong>?",
          choices:[
          {id:"a",text:"Aucune — les deux nécessitent Ghusl"},
          {id:"b",text:"Madhī: liquide désir léger → Wuḍūʾ + laver le pénis. Wadī: épais après urine → Wuḍūʾ + laver la zone souillée"},
          {id:"c",text:"Madhī nécessite Ghusl, Wadī uniquement Wuḍūʾ"},
          {id:"d",text:"Les deux nécessitent Ghusl et Wuḍūʾ"}
          ],
          correctId:"b",
          explanation:"Les deux n'imposent que le renouvellement du Wuḍūʾ — PAS Ghusl. Mais leur nature diffère: Madhī est clair et léger (désir mineur), Wadī est blanc et épais (suit l'urine). Seul Manī (semence avec plaisir habituel) nécessite Ghusl."
        },
        {
          id:"q-pur-22",
          text:"Karim doute d'avoir eu un après son Wuḍūʾ. Il ne souffre pas de Waswās. Que doit-il faire?",
          choices:[
          {id:"a",text:"Ignorer le doute — la certitude antérieure prime toujours"},
          {id:"b",text:"Renouveler le Wuḍūʾ — le doute d'un chez une personne normale impose le renouvellement"},
          {id:"c",text:"Attendre la prochaine prière et décider"},
          {id:"d",text:"Demander à un savant"}
          ],
          correctId:"b",
          explanation:"La règle générale malikite: « » — celui qui doute d'un doit renouveler le Wuḍūʾ. L'exception ne s'applique QU'AU (atteint de Waswās). Pour une personne normale, le doute impose le renouvellement."
        },
        {
          id:"q-pur-23",
          text:"Combien d'obligations compte le <strong>Ghusl</strong> selon le rite malikite?",
          choices:[
          {id:"a",text:"2 : intention + généralisation"},
          {id:"b",text:"3 : intention + frottement + généralisation"},
          {id:"c",text:"4: Niyya + + Dalk +"},
          {id:"d",text:"7 comme le Wuḍūʾ"}
          ],
          correctId:"c",
          explanation:"Les quatre du Ghusl: (1) Niyya au début, (2) (enchaînement), (3) Dalk (frottement), (4) (généraliser l'eau à tout le corps). Contrairement au Wuḍūʾ, il n'y a pas de obligatoire entre les membres du corps."
        },
        {
          id:"q-pur-24",
          text:"Lors du Ghusl, doit-on traverser la barbe <u>épaisse</u> avec les doigts?",
          choices:[
          {id:"a",text:"Non — comme dans Wuḍūʾ, la barbe épaisse est exemptée"},
          {id:"b",text:"Oui — dans Ghusl même la barbe épaisse doit être traversée"},
          {id:"c",text:"Seulement si la peau du visage n'est pas visible"},
          {id:"d",text:"C'Sunna dans Ghusl, pas une obligation"}
          ],
          correctId:"b",
          explanation:"RÈGLE DIFFÉRENTE DE Wuḍūʾ: « » — dans Ghusl, même la barbe épaisse doit être traversée. Dans Wuḍūʾ, seule la barbe légère est traversée."
        },
        {
          id:"q-pur-25",
          text:"Farid oublie de laver son coude gauche lors du Ghusl et s'en souvient 2 mois plus tard. Que doit-il faire?",
          choices:[
          {id:"a",text:"Rien — un long délai pardonne l'oubli dans Ghusl"},
          {id:"b",text:"Laver immédiatement cette zone, et répéter toutes les prières accomplies depuis"},
          {id:"c",text:"Refaire le Ghusl complet"},
          {id:"d",text:"Seulement refaire les prières douteuses"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: «, » — on lave immédiatement la zone oubliée (même des mois plus tard) et on répète TOUTES les prières depuis le Ghusl incomplet. Si on diffère après s'en être souvenu, le Ghusl entier est invalidé."
        },
        {
          id:"q-pur-26",
          text:"Nadia fait le Ghusl parfaitement mais oublie le rinçage de la bouche. Son Ghusl est-il invalide?",
          choices:[
          {id:"a",text:"Oui — la est une obligation du Ghusl"},
          {id:"b",text:"Non — la Sunna du Ghusl, non une obligation"},
          {id:"c",text:"Oui, mais seulement pour le Ghusl de Janāba"},
          {id:"d",text:"Oui elle doit refaire les prières"}
          ],
          correctId:"b",
          explanation:"La Sunna du Ghusl, pas ses. Les quatre sont: Niyya,, Dalk,. Sunna n'invalide pas le Ghusl."
        },
        {
          id:"q-pur-27",
          text:"Quelles sont les deux catégories de <strong>Janāba</strong> selon le rite malikite?",
          choices:[
          {id:"a",text:"Intentionnelle et involontaire"},
          {id:"b",text:"Émission de Manī avec plaisir habituel OU pénétration même sans émission"},
          {id:"c",text:"Seule l'émission lors du rapport sexuel compte"},
          {id:"d",text:"Tout contact intime même sans pénétration"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: «:, » — émission de Manī avec plaisir habituel (même en rêve), OU pénétration (même sans émission, même partielle). Les deux imposent le Ghusl."
        },
        {
          id:"q-pur-28",
          text:"Ibrahim rêve d'un rapport sexuel mais ne trouve aucune trace de Manī au réveil. Doit-il faire Ghusl?",
          choices:[
          {id:"a",text:"Oui — tout rêve à caractère sexuel impose Ghusl"},
          {id:"b",text:"Non — seule l'émission effective de Manī impose Ghusl"},
          {id:"c",text:"Seulement s'il se souvient du rêve distinctement"},
          {id:"d",text:"Oui, par précaution"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — si quelqu'un rêve de rapport sexuel SANS émission de Manī, il n'y a rien à faire. Seule l'émission effective impose Ghusl."
        },
        {
          id:"q-pur-29",
          text:"Leïla trouve du Manī sec dans son vêtement sans savoir quand il est survenu. Que doit-elle faire?",
          choices:[
          {id:"a",text:"Ignorer — incertitude totale donc aucune obligation"},
          {id:"b",text:"Faire le Ghusl et répéter les prières depuis le dernier sommeil dans ce vêtement"},
          {id:"c",text:"Seulement laver le vêtement"},
          {id:"d",text:"Répéter toutes les prières des derniers jours"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — Ghusl + répéter les prières depuis le DERNIER SOMMEIL dans CE vêtement spécifique. Pas depuis plus longtemps."
        },
        {
          id:"q-pur-30",
          text:"Qu'est-il interdit de faire pour le selon l'Akhḍarī?",
          choices:[
          {id:"a",text:"Uniquement la prière"},
          {id:"b",text:"La prière et le jeûne"},
          {id:"c",text:"Entrer dans la mosquée et réciter le Coran (sauf un verset isolé pour protection)"},
          {id:"d",text:"Tout acte d'adoration sans exception"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « ». Le jeûne et le sont permis au. Seuls l'entrée dans la mosquée et la récitation du Coran (plus de quelques versets) sont interdits."
        },
        {
          id:"q-pur-31",
          text:"Pour qui le <strong>Tayammum</strong> est-il permis pour les prières surérogatoires?",
          choices:[
          {id:"a",text:"Tout le monde"},
          {id:"b",text:"Uniquement le malade"},
          {id:"c",text:"Le voyageur (en déplacement licite) ET le malade — mais PAS le résidant sain"},
          {id:"d",text:"Personne — Tayammum est réservé aux prières obligatoires"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: «. » — le voyageur et le malade peuvent faire Tayammum pour les Nawāfil. Le résidant sain NE peut PAS faire Tayammum pour les Nawāfil."
        },
        {
          id:"q-pur-32",
          text:"Khalid fait Tayammum pour Ẓuhr. Peut-il prier ʿAṣr avec ce même Tayammum?",
          choices:[
          {id:"a",text:"Oui — un Tayammum suffit pour plusieurs prières obligatoires"},
          {id:"b",text:"Non — un Tayammum obligatoire ne sert que pour une seule prière obligatoire"},
          {id:"c",text:"Oui s'il n'a pas eu de entre-temps"},
          {id:"d",text:"Oui mais seulement si les deux temps sont proches"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — deux prières obligatoires NE peuvent pas être accomplies avec un seul Tayammum. En revanche, les Nawāfil après une peuvent être faites avec ce même Tayammum."
        },
        {
          id:"q-pur-33",
          text:"Parmi ces matières, laquelle est valide pour le <strong>Tayammum</strong>?",
          choices:[
          {id:"a",text:"Le plâtre cuit"},
          {id:"b",text:"La natte"},
          {id:"c",text:"La pierre, la brique crue non cuite, la neige"},
          {id:"d",text:"Le bois et l'herbe sèche"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: «: ». Valides: sable, terre, pierre, brique crue, neige. Invalides: plâtre cuit, natte, bois, herbe."
        },
        {
          id:"q-pur-34",
          text:"Le <strong>Masḥ al-Raʾs</strong> dans Wuḍūʾ: aller et retour — lequel est une obligation, Sunna?",
          choices:[
          {id:"a",text:"L'aller seul est l'obligation. Sunna"},
          {id:"b",text:"Les deux allers sont obligatoires"},
          {id:"c",text:"Le retour est l'obligation, l'Sunna"},
          {id:"d",text:"C'est selon la taille de la tête"}
          ],
          correctId:"a",
          explanation:"L'aller (de l'avant vers la nuque) est l'OBLIGATION. Le retour (de la nuque vers l'avant) est la SOUNNAH. L'Akhḍarī précise qu'il est déconseillé de dépasser trois fois. Ne pas prendre l'habitude de trop répéter le masḥ."
        },
        {
          id:"q-pur-35",
          text:"Mariam est en et enseigne le Coran à ses élèves. Elle touche l'exemplaire du Coran. Est-ce permis?",
          choices:[
          {id:"a",text:"Non — la ne peut jamais toucher le Coran"},
          {id:"b",text:"Oui — l'exception pour l'enseignement s'applique même à la"},
          {id:"c",text:"Seulement si elle porte des gants"},
          {id:"d",text:"Seulement si les élèves sont ses propres enfants"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « ». L'enseignement lève l'interdiction pour la comme pour celle sans Wuḍūʾ. L'enseignement constitue une exception légitime reconnue par l'Akhḍarī."
        },
        {
          id:"q-pur-36",
          text:"La durée maximale du <strong>Ḥayḍ</strong> pour une Mubtadiʾa (première expérience) est:",
          choices:[
          {id:"a",text:"7 jours"},
          {id:"b",text:"10 jours"},
          {id:"c",text:"15 jours"},
          {id:"d",text:"30 jours"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — maximum 15 jours pour la première expérience. Pour la femme habituée, la durée de référence est sa durée habituelle (avec possibilité d'ajout de 3 jours sans dépasser 15)."
        },
        {
          id:"q-pur-37",
          text:"La femme en peut-elle réciter le Coran de mémoire (sans le toucher)?",
          choices:[
          {id:"a",text:"Non — la récitation du Coran est interdite pendant Ḥayḍ"},
          {id:"b",text:"Oui — seul le toucher est interdit, la récitation de mémoire est permise"},
          {id:"c",text:"Seulement les courtes sourates"},
          {id:"d",text:"Seulement pour la supplication"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — la récitation du Coran de mémoire est permise pour la. Seul le toucher physique est interdit. À ne pas confondre récitation orale et contact physique."
        },
        {
          id:"q-pur-38",
          text:"Quelle est la durée maximale du <strong>Nifās</strong> selon l'Akhḍarī?",
          choices:[
          {id:"a",text:"15 jours"},
          {id:"b",text:"40 jours"},
          {id:"c",text:"60 jours"},
          {id:"d",text:"90 jours"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — la durée maximale du Nifās est 60 jours. Si le saignement s'arrête avant — même le jour de l'accouchement — la femme fait Ghusl et reprend ses prières immédiatement."
        },
        {
          id:"q-pur-39",
          text:"Khadija accouche et le saignement s'arrête le JOUR même de l'accouchement. Doit-elle attendre un minimum avant de prier ?",
          choices:[
          {id:"a",text:"Oui — minimum 3 jours de Nifās"},
          {id:"b",text:"Oui — minimum 7 jours"},
          {id:"c",text:"Non — dès l'arrêt du saignement, elle fait Ghusl et prie"},
          {id:"d",text:"Oui — minimum 10 jours par précaution"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — il n'y a PAS de durée minimale pour le Nifās. Dès l'arrêt du saignement, même le jour de l'accouchement, elle fait Ghusl et reprend ses obligations."
        },
        {
          id:"q-pur-40",
          text:"Omar a fait Ghusl de correctement. A-t-il encore besoin de faire séparément Wuḍūʾ pour prier?",
          choices:[
          {id:"a",text:"Oui — Ghusl et Wuḍūʾ sont toujours séparés"},
          {id:"b",text:"Non — un Ghusl complet englobe le Wuḍūʾ si les membres du Wuḍūʾ ont été lavés"},
          {id:"c",text:"Seulement si l'intention couvre les deux"},
          {id:"d",text:"Seulement si Ghusl a été fait dans l'ordre du Wuḍūʾ"}
          ],
          correctId:"b",
          explanation:"Un Ghusl complet (avec Niyya,, Dalk) couvre les obligations du Wuḍūʾ — tous les membres ont été lavés. L'Akhḍarī recommande de commencer par les membres du Wuḍūʾ lors du Ghusl pour optimiser les deux en même temps."
        },
        {
          id:"q-pur-41",
          text:"Youssef fait Wuḍūʾ dans l'ordre: visage → bras gauche → bras droit → tête → pieds. Son Wuḍūʾ est-il valide?",
          choices:[
          {id:"a",text:"Oui — l'Sunna, pas une obligation dans le rite malikite"},
          {id:"b",text:"Non — l'ordre des membres est une obligation dans le rite malikite"},
          {id:"c",text:"Oui mais il doit refaire la prière"},
          {id:"d",text:"Partiellement valide"}
          ],
          correctId:"a",
          explanation:"L'Akhḍarī classe le (ordre entre les membres du Wuḍūʾ) parmi les SOUNNAH, pas les. L'omettre ne rend pas le Wuḍūʾ Sunna. Attention: respecter l'ordre reste fortement recommandé."
        },
        {
          id:"q-pur-42",
          text:"Prier délibérément sans Wuḍūʾ — quel est son statut selon l'Akhḍarī?",
          choices:[
          {id:"a",text:"Un grand péché mais la prière est à refaire seulement"},
          {id:"b",text:"Qualifié de (incrédulité) par l'Akhḍarī"},
          {id:"c",text:"Simplement makrūh"},
          {id:"d",text:"La prière est invalide sans autre conséquence"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — prier DÉLIBÉRÉMENT sans Wuḍūʾ est qualifié de. C'est l'une des affirmations les plus graves du texte. L'oubli ou l'erreur sincère excusent, mais l'acte délibéré est extrêmement grave."
        },
        {
          id:"q-pur-43",
          text:"Une personne sans Wuḍūʾ peut-elle toucher une traduction du Coran en français?",
          choices:[
          {id:"a",text:"Non — toute traduction du Coran est soumise aux mêmes règles"},
          {id:"b",text:"Oui — les traductions dans d'autres langues peuvent être touchées sans Wuḍūʾ"},
          {id:"c",text:"Seulement si c'est une traduction annotée scientifiquement"},
          {id:"d",text:"Non — mais elle peut la regarder sans la toucher"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « On peut toucher le Coran traduit en français même si on n'a pas ses petites ablutions ». Seul le texte arabe du Coran est soumis à la condition du Wuḍūʾ. Les traductions ne constituent pas le Coran proprement dit au sens juridique."
        },
        {
          id:"q-pur-44",
          text:"Ismail commence Wuḍūʾ puis l'eau se renverse. Il en trouve d'autre après un court délai (membres pas séchés). Que fait-il?",
          choices:[
          {id:"a",text:"Il ne peut pas prier — il attend de trouver de l'eau"},
          {id:"b",text:"Il fait Tayammum immédiatement"},
          {id:"c",text:"Il reprend Wuḍūʾ là où il l'a laissé — les membres n'ont pas séché"},
          {id:"d",text:"Il refait Wuḍūʾ depuis le début"}
          ],
          correctId:"c",
          explanation:"Si l'eau est retrouvée rapidement (membres pas séchés = est maintenu): on reprend là où on s'est arrêté. Si long délai (membres séchés = rompu): refaire depuis le début. L'Akhḍarī: « »."
        },
        {
          id:"q-pur-45",
          text:"Naomie a du vernis à ongles (qui forme un film imperméable). Elle fait Wuḍūʾ. Est-il valide?",
          choices:[
          {id:"a",text:"Oui — le vernis ne pose aucun problème"},
          {id:"b",text:"Oui à condition qu'il soit de couleur naturelle"},
          {id:"c",text:"Non — tout film imperméable empêchant l'eau d'atteindre la peau invalide le Wuḍūʾ"},
          {id:"d",text:"Oui si le vernis est ancien et fissuré"}
          ],
          correctId:"c",
          explanation:"L'obligation du (généralisation de l'eau) exige que l'eau atteigne toute la surface des membres. Un vernis imperméable forme une barrière empêchant l'eau d'atteindre la peau. Sans contact direct avec la peau, le Wuḍūʾ est invalide."
        },
        {
          id:"q-pur-46",
          text:"Fatima porte une bague serrée lors du Wuḍūʾ. Est-ce suffisant de frotter dessus?",
          choices:[
          {id:"a",text:"Oui — frotter le dessus suffit"},
          {id:"b",text:"Non — il faut faire tourner la bague pour que l'eau atteigne la peau dessous"},
          {id:"c",text:"Oui si la bague est en métal précieux"},
          {id:"d",text:"Cela dépend si la bague est dorée ou argentée"}
          ],
          correctId:"b",
          explanation:"Le Dalk et obligent l'eau à atteindre toute la surface. Une bague serrée crée une zone où l'eau n'atteint pas la peau. Il faut la faire tourner ou l'enlever temporairement pour assurer le du membre."
        },
        {
          id:"q-pur-47",
          text:"Pour quels actes l'état de <strong>Janāba</strong> est-il un obstacle absolu (sans exception)?",
          choices:[
          {id:"a",text:"La prière et le jeûne"},
          {id:"b",text:"La prière, le ṭawāf et l'entrée dans la mosquée"},
          {id:"c",text:"Entrer dans la mosquée et réciter le Coran (plus de quelques versets)"},
          {id:"d",text:"Tout acte d'adoration"}
          ],
          correctId:"c",
          explanation:"Pour le, les deux interdictions absolues sont: (1) entrer dans la mosquée, (2) réciter le Coran (plus d'un verset isolé). La prière est aussi interdite mais à cause du majeur, pas seulement de Janāba. Le jeûne et le sont permis."
        },
        {
          id:"q-pur-48",
          text:"<strong>SCÉNARIO </strong> Ahmad fait Tayammum pour Janāba sans spécifier dans son intention que c'est pour Janāba. Son Tayammum est-il valide?",
          choices:[
          {id:"a",text:"Oui — l'intention générale de purification suffit"},
          {id:"b",text:"Non — pour Janāba, il faut obligatoirement la spécifier dans l'intention"},
          {id:"c",text:"Oui si c'est la seule impureté qu'il a"},
          {id:"d",text:"Non — le Tayammum ne couvre jamais Janāba"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — pour Tayammum de, il faut OBLIGATOIREMENT mentionner Janāba dans l'intention. Une intention générale de purification ne suffit pas dans ce cas précis."
        },
        {
          id:"q-pur-49",
          text:"Quel est l'état légal de l'eau ayant déjà servi aux ablutions ?",
          choices:[
          {id:"a",text:"Impure — ne peut être réutilisée"},
          {id:"b",text:"Pure mais makrūh de réutiliser si une autre eau est disponible"},
          {id:"c",text:"Pure et parfaitement valide comme n'importe quelle eau"},
          {id:"d",text:"Ne peut servir que pour Ghusl, pas pour Wuḍūʾ"}
          ],
          correctId:"b",
          explanation:"L'eau ayant servi à la purification rituelle est pure mais son utilisation est makrūh si une autre eau est disponible. Doctrine-malikite.fr : « la cause du makrūh est qu'il y a divergence des savants sur sa pureté ». En cas de nécessité, on peut l'utiliser."
        },
        {
          id:"q-pur-50",
          text:"Ibrahim fait Wuḍūʾ puis se couche pour une sieste. Il se réveille sans être sûr de l'intensité de son sommeil. Que doit-il faire?",
          choices:[
          {id:"a",text:"Son Wuḍūʾ est rompu — tout sommeil rompt les ablutions"},
          {id:"b",text:"Son Wuḍūʾ est intact — seul le sommeil PROFOND (perte de conscience des alentours) rompt"},
          {id:"c",text:"Il évalue : si ses membres sont décontractés et reposés = sommeil profond = renouveler"},
          {id:"d",text:"Il renouvelle systématiquement par précaution"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī distingue (sommeil profond = rompt Wuḍūʾ) du sommeil léger (ne rompt pas). L'indicateur pratique: si la personne n'a pas perdu conscience de son environnement, c'est léger. En cas de doute réel chez une personne normale (hors Waswās), le renouvellement est prudent."
        },
        {
          id:"q-pur-51",
          text:"Qu'est-ce que l'<strong>Istinjāʾ</strong>?",
          choices:[
          {id:"a",text:"Le nettoyage du corps avant la prière"},
          {id:"b",text:"Le nettoyage des parties intimes après l'urine ou les selles, avant le Wuḍūʾ"},
          {id:"c",text:"Un substitut du Wuḍūʾ en voyage"},
          {id:"d",text:"L'équivalent du Ghusl pour les femmes"}
          ],
          correctId:"b",
          explanation:"L'Istinjāʾ est le nettoyage obligatoire des parties intimes après (urine ou selles). Il s'effectue AVANT le Wuḍūʾ — la séquence correcte est: passage aux toilettes → Istinjāʾ → Wuḍūʾ. Omettre l'Istinjāʾ alors que la zone est souillée compromet le Wuḍūʾ pour la prière."
        },
        {
          id:"q-pur-52",
          text:"Dans l'<strong>Istijmār</strong> (essuyage avec pierres/papier), quel est le nombre minimum de passages?",
          choices:[
          {id:"a",text:"1 passage suffit"},
          {id:"b",text:"2 passages"},
          {id:"c",text:"3 passages minimum, en nombre impair"},
          {id:"d",text:"5 passages minimum"}
          ],
          correctId:"c",
          explanation:"L'Istijmār exige au minimum 3 passages (en nombre impair). Si 3 ne suffisent pas à nettoyer complètement, on continue jusqu'à propreté. Le Prophète ﷺ a interdit moins de 3 pierres. Le nombre doit rester impair (3, 5, 7…)."
        },
        {
          id:"q-pur-53",
          text:"Peut-on utiliser des os pour l'<strong>Istijmār</strong>?",
          choices:[
          {id:"a",text:"Oui — os propres uniquement"},
          {id:"b",text:"Oui s'ils sont secs"},
          {id:"c",text:"Non — le Prophète ﷺ l'a formellement interdit"},
          {id:"d",text:"Oui en cas de nécessité absolue"}
          ],
          correctId:"c",
          explanation:"Le Prophète ﷺ a interdit l'utilisation d'os pour l'Istijmār: « » — les os sont la nourriture des djinns. Sont également interdits: la nourriture, le fumier, les matières sacrées, la main droite."
        },
        {
          id:"q-pur-54",
          text:"Ibrahim fait l'<strong>Istijmār</strong> avec sa main droite. Est-ce correct?",
          choices:[
          {id:"a",text:"Oui — il n'y a pas de règle sur la main"},
          {id:"b",text:"Oui si la main gauche est blessée"},
          {id:"c",text:"Non — il est makrūh d'utiliser la main droite pour l'Istijmār ou Istinjāʾ"},
          {id:"d",text:"Oui mais seulement pour l'Istinjāʾ à l'eau"}
          ],
          correctId:"c",
          explanation:"Il est makrūh (déconseillé et interdit selon certains) d'utiliser la main droite pour l'Istinjāʾ ou l'Istijmār. Le Prophète ﷺ: « ». La main gauche est réservée à cette fonction de nettoyage."
        },
        {
          id:"q-pur-55",
          text:"La souillure a dépassé la zone intime habituelle. L'<strong>Istijmār</strong> seul suffit-il?",
          choices:[
          {id:"a",text:"Oui — l'Istijmār suffit toujours"},
          {id:"b",text:"Non — si la souillure s'est étendue, l'eau devient obligatoire"},
          {id:"c",text:"Oui mais avec 5 passages minimum"},
          {id:"d",text:"Seulement si les traces sont visibles"}
          ],
          correctId:"b",
          explanation:"Si la souillure a dépassé la zone habituelle, l'Istijmār seul ne suffit plus selon le rite malikite — l'eau devient obligatoire. Pour la zone habituelle non étendue, l'Istijmār seul suffit."
        },
        {
          id:"q-pur-56",
          text:"Quelles sont les conditions des <strong>Khuffayn</strong> (chaussures) pour que le dessus soit valide?",
          choices:[
          {id:"a",text:"Juste être propres et couvrir le pied"},
          {id:"b",text:"Cuir prédominant, couvrir les chevilles, enfilés en état d'ablution, propres, non déchirés sur 1/3 ou plus"},
          {id:"c",text:"N'importe quelle chaussette fermée couvrant les chevilles"},
          {id:"d",text:"Cuir uniquement, sans condition supplémentaire"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr détaille les conditions: (1) matière: cuir prédominant cousu (non collé) ; (2) couvrir les chevilles en les incluant ; (3) enfilés en état de Wuḍūʾ humide ; (4) propres (sans ) ; (5) non déchirés sur 1/3 du pied ou plus. Toutes ces conditions sont simultanément requises."
        },
        {
          id:"q-pur-57",
          text:"Le Masḥ ʿalā al-Khuffayn est-il limité dans le temps dans le rite malikite?",
          choices:[
          {id:"a",text:"Oui — 24h pour le résident, 72h pour le voyageur"},
          {id:"b",text:"Non — il n'est pas limité dans le temps selon le rite malikite"},
          {id:"c",text:"Oui — une semaine maximum"},
          {id:"d",text:"Non — mais seulement pour le voyageur"}
          ],
          correctId:"b",
          explanation:"SPÉCIFICITÉ MALIKITE FONDAMENTALE: le Khuffayn n'est pas limité dans le temps dans le rite malikite, contrairement aux écoles hanafite et chāfiʿite (24h résident, 72h voyageur). Doctrine-malikite.fr cite Al-Jazīrī: il est préférable de les enlever chaque vendredi ou semaine pour faire le Ghusl, mais sans obligation de délai."
        },
        {
          id:"q-pur-58",
          text:"Khalid a fait le Masḥ ʿalā khuffayhi puis enlève ses chaussures. Que doit-il faire immédiatement?",
          choices:[
          {id:"a",text:"Rien — le reste valide"},
          {id:"b",text:"Laver immédiatement les pieds pour que le Wuḍūʾ reste valide"},
          {id:"c",text:"Refaire Wuḍūʾ complet depuis le début"},
          {id:"d",text:"Seulement s'il veut prier"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr (Al-Jazīrī): si on enlève les après avoir fait le → laver IMMÉDIATEMENT les pieds aux chevilles pour que le Wuḍūʾ reste valide. Si on oublie de les laver immédiatement et qu'un long délai passe → refaire Wuḍūʾ complet."
        },
        {
          id:"q-pur-59",
          text:"Peut-on faire le Masḥ ʿalā al-Khuffayn si on est en état de?",
          choices:[
          {id:"a",text:"Oui — le couvre tout"},
          {id:"b",text:"Non — l'état de exige le Ghusl qui oblige à laver les pieds directement"},
          {id:"c",text:"Seulement si on fait le Tayammum"},
          {id:"d",text:"Oui mais avec renouvellement chaque jour"}
          ],
          correctId:"b",
          explanation:"En état de, le Ghusl est obligatoire et exige le (généralisation de l'eau à tout le corps, dont les pieds). On ne peut pas se contenter du sur les. Le n'est valide que dans le cadre du Wuḍūʾ mineur, pas du Ghusl."
        },
        {
          id:"q-pur-60",
          text:"La (pansement/plâtre) — que fait-on lors du Wuḍūʾ?",
          choices:[
          {id:"a",text:"On ignore ce membre et on fait Wuḍūʾ sur les autres seulement"},
          {id:"b",text:"On fait Tayammum pour tout le corps"},
          {id:"c",text:"On fait Wuḍūʾ normalement sur les membres sains et on essuie le pansement sur le membre blessé"},
          {id:"d",text:"On attend la guérison pour faire le Wuḍūʾ"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.Mudawwana: on fait Wuḍūʾ normalement sur tous les membres sains, et arrivé au membre blessé, on passe la main mouillée UNE FOIS sur le pansement. Si même le direct risque de nuire: on essuie le bandage qui couvre la blessure."
        },
        {
          id:"q-pur-61",
          text:"Farid enlève son plâtre au milieu de sa prière. Que se passe-t-il ?",
          choices:[
          {id:"a",text:"La prière est valide — le plâtre n'affect pas la prière"},
          {id:"b",text:"Il doit remettre le plâtre, refaire le et reprendre la prière"},
          {id:"c",text:"Il continue sa prière normalement"},
          {id:"d",text:"Il doit seulement compléter sa prière et en refaire une autre après"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: le pansement/plâtre DOIT être gardé jusqu'à la fin de la prière. S'il est retiré ou tombe avant la fin → remettre le bandage, refaire le et reprendre la prière. La prière accomplie avec un plâtre non fixé correctement est invalide."
        },
        {
          id:"q-pur-62",
          text:"Quand le membre blessé guérit et qu'on retire le plâtre, que fait-on pour le Wuḍūʾ?",
          choices:[
          {id:"a",text:"On continue à faire le par habitude"},
          {id:"b",text:"On revient obligatoirement au lavage avec l'eau pour ce membre"},
          {id:"c",text:"On peut choisir entre et lavage"},
          {id:"d",text:"On fait Tayammum par prudence"}
          ],
          correctId:"b",
          explanation:"Dès que le membre est guéri et que le plâtre est retiré, la dispense du prend fin. On revient obligatoirement au lavage avec l'eau pour ce membre dans les ablutions suivantes."
        },
        {
          id:"q-pur-63",
          text:"Quand doit-on passer au <strong>Tayammum</strong> plutôt qu'au Jabīra selon doctrine-malikite.fr?",
          choices:[
          {id:"a",text:"Toujours quand il y a un pansement"},
          {id:"b",text:"Quand le lavage des membres SAINS eux-mêmes provoque un préjudice, ou quand la majorité du corps est blessée"},
          {id:"c",text:"Uniquement si le médecin le prescrit"},
          {id:"d",text:"Après 3 jours d'utilisation du pansement"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr distingue deux seuils: (1) si laver les membres sains eux-mêmes provoque un préjudice → Tayammum ; (2) si la grande majorité du corps est blessée (ex: ne reste qu'une main ou un pied de sain) → Tayammum est obligatoire. Sinon: sur le pansement, lavage du reste."
        },
        {
          id:"q-pur-64",
          text:"Quelles sont les trois catégories d'eau selon leur statut légal en malikite ?",
          choices:[
          {id:"a",text:"Eau du ciel, eau de source, eau de mer"},
          {id:"b",text:"Eau pure et purifiante / eau pure mais non purifiante / eau impure"},
          {id:"c",text:"Eau froide, eau tiède, eau chaude"},
          {id:"d",text:"Eau courante, eau stagnante, eau stockée"}
          ],
          correctId:"b",
          explanation:"Les trois catégories: (1) — eau pure et apte à purifier (pluie, rivières, puits, mer, neige…) ; (2) — eau pure mais inapte à purifier (eau ayant déjà servi aux ablutions, eau de rose, eau très altérée par une substance pure comme du savon excessif) ; (3) — eau impure (souillée par une )."
        },
        {
          id:"q-pur-65",
          text:"Hassan se demande si l'eau dans laquelle son chat a bu est valide pour le Wuḍūʾ. Quelle est la règle malikite?",
          choices:[
          {id:"a",text:"Impure — les animaux souillent l'eau"},
          {id:"b",text:"Pure et valide — le chat est pur et son contact ne souille pas l'eau"},
          {id:"c",text:"Makrūh d'utiliser cette eau"},
          {id:"d",text:"Valide seulement si l'eau est abondante"}
          ],
          correctId:"b",
          explanation:"Les animaux dont la chair est licite (comme le chat) sont purs et leur salive ne souille pas l'eau. Le Prophète ﷺ a validé l'eau après qu'un chat en ait bu. Exception: le porc et les animaux impurs. L'eau reste après contact avec un animal licite."
        }]}},
    {id:"priere",title:"La Prière",arabicTitle:"الصلاة",icon:"arch",description:"Horaires des prières, conditions, Farāʾiḍ, Sunna, rattrapage des prières et prosternation d'oubli selon le rite malikite.",source:"",badge:{id:"badge-priere",title:"Ṣalāt",arabicTitle:"محافظ الصلاة",icon:"arch",color:'gold',unlockCondition:"Questionnaire \"La Prière\" avec un score ≥ 85 %"},lessons:[        {
          id:"sal-01",
          title:"Les Heures des Cinq Prières",
          status:'available',
          content:[
            {"t": "lead", "v": "La prière ne peut être accomplie que dans son temps légal. L'école malikite distingue pour chaque prière un temps préféré (mukhtār) — dans lequel la prière a sa pleine valeur — et un temps de nécessité (ḍarūrī) — dans lequel elle reste valide mais hors du temps préféré."},
            {"t": "h", "v": "(Déjeuner)"},
            { t:'ul', v:[
              "<strong>Temps préféré :</strong> du déclin du soleil (zawāl) jusqu'à ce que l'ombre d'un objet atteigne sa propre longueur (qāma).",
              "<strong>Temps de nécessité :</strong> jusqu'au coucher du soleil."
            ] },
            {"t": "h", "v": "(Après-midi)"},
            { t:'ul', v:[
              "<strong>Temps préféré :</strong> depuis la fin du temps préféré du (une qāma) jusqu'au rougissement du soleil (iṣfirār).",
              "<strong>Temps de nécessité :</strong> jusqu'au coucher du soleil."
            ] },
            {"t": "h", "v": "(Coucher)"},
            { t:'ul', v:[
              "<strong>Temps préféré :</strong> très court — le temps strictement nécessaire pour accomplir la prière après le coucher du soleil, avec toutes ses conditions. C'est une spécificité du rite malikite.",
              "<strong>Temps de nécessité :</strong> jusqu'à la disparition du crépuscule rouge (shafaq), partagé avec."
            ] },
            {"t": "h", "v": "(Nuit)"},
            { t:'ul', v:[
              "<strong>Temps préféré :</strong> de la disparition du crépuscule rouge jusqu'au premier tiers de la nuit.",
              "<strong>Temps de nécessité :</strong> jusqu'à l'aube."
            ] },
            {"t": "h", "v": "(Aube)"},
            { t:'ul', v:[
              "<strong>Temps préféré :</strong> de l'apparition du jusqu'à la forte clarté (isfār aʿlā).",
              "<strong>Temps de nécessité :</strong> jusqu'au lever du soleil."
            ] },
            {"t": "h", "v": "Avertissement important"},
            {"t": "p", "v": "Al-Akhḍarī précise clairement : « Celui qui retarde la prière jusqu'à ce que son temps soit sorti commet un grand péché, à moins qu'il n'ait oublié ou dormit. »"},
            {"t": "h", "v": "Prières surérogatoires interdites à certains moments"},
            { t:'ul', v:[
              "Après la prière de jusqu'au lever du soleil.",
              "Après la prière de jusqu'à la prière du.",
              "Après l'entrée de l'aube — sauf la prière habituelle de la nuit pour celui qui l'a manquée.",
              "Quand l' de la Jumuʿa s'asseoit sur le minbar.",
              "Après la Jumuʿa jusqu'à la sortie de la mosquée."
            ] },
            { t:'ar', v:"ومَن أخّرَ الصلاةَ حتّى خرجَ وقتُها فعليهِ ذَنبٌ عظيمٌ إلّا أن يكونَ ناسياً أو نائماً", n:"« Celui qui retarde la prière jusqu'à la sortie de son temps commet un grand péché, à moins qu'il n'ait oublié ou dormi. » — al-Akhḍarī" }
          ]
        },
        {
          id:"sal-02",
          title:"Les Conditions de la Prière (Shurūṭ)",
          status:'available',
          content:[
            {"t": "lead", "v": "Avant d'entrer en prière, sept conditions (shurūṭ) doivent être réunies. Leur absence invalide la prière."},
            {"t": "h", "v": "Les sept conditions de la prière"},
            { t:'ul', v:[
              "<strong>1. La pureté du Ḥadath</strong> — Wuḍūʾ ou le Ghusl si nécessaire.",
              "<strong>2. La pureté du </strong> — Najāsa sur le corps, le vêtement et le lieu de prière.",
              "<strong>3. Couvrir la ʿawra</strong>.",
              "<strong>4. Faire face à la </strong> (direction de La Mecque).",
              "<strong>5. Éviter la parole</strong>.",
              "<strong>6. Éviter les actions nombreuses</strong>.",
              "(Implicitement : l'entrée dans le temps de la prière.)"
            ] },
            {"t": "h", "v": "La ʿawra de l'homme et de la femme"},
            { t:'ul', v:[
              "<strong>L'homme</strong> : ce qui se trouve entre le nombril et les genoux (tous deux exclus selon la règle classique).",
              "<strong>La femme</strong> : tout le corps est ʿawra à l'exception du visage et des deux paumes. L'auteur note qu'Makrūh (déconseillé) de prier en sous-vêtements seuls, sauf si un autre vêtement les recouvre."
            ] },
            {"t": "h", "v": "Situations d'exception"},
            { t:'ul', v:[
              "Vêtement souillé sans autre vêtement disponible ni eau pour le laver, et risque de sortie du temps de prière : Najāsa.",
              "Pas de vêtement du tout pour couvrir la ʿawra : on prie nu.",
              "Direction de la mal estimée : on répète la prière dans le temps.",
              "<strong>On ne peut jamais différer la prière à cause du manque de pureté.</strong> Celui qui le fait est en désobéissance."
            ] },
            {"t": "note", "v": "Principe fondamental : l'absence de condition n'annule la prière que si elle est constatée avec certitude. Les doutes à ce sujet ne suffisent généralement pas à invalider la prière accomplie."}
          ]
        },
        {
          id:"sal-03",
          title:"Les Obligations de la Prière",
          status:'available',
          content:[
            {"t": "lead", "v": "Farāʾiḍ (obligations) de la prière sont les éléments constitutifs essentiels sans lesquels elle est nulle et doit être recommencée. Al-Akhḍarī en dresse la liste complète."},
            {"t": "h", "v": "Farāʾiḍ de la prière"},
            { t:'ul', v:[
              "<strong>1. L'intention de la prière spécifiéNiyya</strong> — savoir quelle prière l'on accomplit.",
              "<strong>2. La </strong> (Allāhu Akbar d'entrée) <strong>et le fait d'être debout lors de son énonciation</strong>.",
              "<strong>3. Fātiḥa</strong> (la sourate d'ouverture) <strong>et le fait d'être debout lors de sa récitation</strong>.",
              "<strong>4. Rukūʿ</strong> (inclination) et le relèvement (rafʿ) au Rukūʿ.",
              "<strong>5. La prosternation sur le front</strong> et le relèvement.",
              "<strong>6. L'ʿitidāl</strong>ʿ).",
              "<strong>7. La ṭumaʾnīna</strong> — la tranquillité des membres à chaque posture.",
              "<strong>8. Le tartīb</strong> — respecter l'ordre des obligations.",
              "<strong>9. Le salām</strong> et la position assise (julūs) qui l'accompagne."
            ] },
            {"t": "h", "v": "La condition de l'Niyya"},
            {"t": "p", "v": "L'auteur précise : « La condition de l'intention est d'être simultanée à la. » Elle doit être présente dans le cœur au moment exact où l'on prononce le premier Allāhu Akbar."},
            {"t": "h", "v": "La dimension spirituelle de la prière"},
            { t:'ar', v:"للصلاةِ نورٌ عظيمٌ تُشرقُ به قلوبُ المصلّينَ ولا ينالُه إلّا الخاشعون", n:"« La prière est une lumière immense qui illumine les cœurs de ceux qui prient — et seuls les humbles et recueillis l'atteignent. » — al-Akhḍarī" },
            {"t": "p", "v": "Al-Akhḍarī rappelle que lorsque tu viens à la prière, tu dois libérer ton cœur de toute préoccupation mondaine et t'occuper à contempler ton Seigneur. La prière est humilité et soumission à Allāh par la station debout, l'inclination et la prosternation — et glorification par le, le tasbīḥ et le dhikr."},
            {"t": "note", "v": "Quiconque accomplit délibérément une prière obligatoire debout alors qu'il peut rester assis, ou assis alors qu'il peut rester debout — sa prière est invalide. L'ordre de ces états est lui-même obligatoire."}
          ]
        },
        {
          id:"sal-04",
          title:"Sunna et Makrūhāt de la Prière",
          status:'available',
          content:[
            {"t": "lead", "v": "Au-delà des obligations, la prièSunna qui la complètent et l'embellissent, Makrūh (déconseillés) qui en diminuent la valeur."},
            {"t": "h", "v": "Sunna de la prière (principales)"},
            { t:'ul', v:[
              "L'Iqāma (appel à la prière intérieur avant de commencer).",
              "La sourate aprèFātiḥa, et être debout lors de sa récitation.",
              "Réciter à voix basse dans les prières silencieuses, à voix haute dans les prières vocales.",
              "Dire « samiʿa Allāhu li-man ḥamidah » lors du relèRukūʿ.",
              "Tous les āt de transition — sauf le premier, qui est une obligation.",
              "Tashahhuds et la position assise pour eux.",
              "PrécéFātiḥa avant la sourate.",
              "La deuxième et troisième salām.",
              "Ṣalāt sur le Prophète ﷺ.",
              "La prosternation sur le nez, les paumes, les genoux et les orteils.",
              "La (obstacle placé devant le priant) pour le priant seul."
            ] },
            {"t": "h", "v": "Les vertus (faḍāʾil) de la prière"},
            { t:'ul', v:[
              "Lever les mains au niveau des oreilles lors du.",
              "Dire « Rabbanā wa-laka'l-ḥamd ».",
              "L'Āmīn aprèFātiḥa — l' le dit en silence dans les prières vocales.",
              "Rukūʿ et la supplication (duʿāʾ) dans la prosternation.",
              "Allonger la récitation dans le et le, raccourcir dans le et le, modérer dans le.",
              "Qunūt à Rukūʿ.",
              "Déplacer le doigt (index) Tashahhud."
            ] },
            {"t": "h", "v": "Makrūh (déconseillés) dans la prière"},
            { t:'ul', v:[
              "Se tourner (même légèrement) pendant la prière.",
              "Fermer les yeux.",
              "Dire la Basmala et le Taʿawwudh dans la prière obligatoire (permis en prière surérogatoire).",
              "Se tenir sur un seul pied — sauf si le priant debout doit rester longtemps.",
              "Joindre les pieds.",
              "Mettre un objet dans la bouche.",
              "Penser aux affaires mondaines et tout ce qui nuit au khushūʿ."
            ] }
          ]
        },
        {
          id:"sal-05",
          title:"Les Positions de la Prière selon la Capacité",
          status:'available',
          content:[
            {"t": "lead", "v": "Islam facilite la prière pour les malades et les incapables. L'école malikite établit une hiérarchie de 7 positions pour la prière obligatoire, dont 4 sont ordonnées obligatoirement et 3 sont recommandées."},
            {"t": "h", "v": "Les 4 positions obligatoires (dans l'ordre)"},
            { t:'ul', v:[
              "<strong>1. Debout sans appui</strong> — position de base.",
              "<strong>2. Debout avec appui</strong> — si l'on ne peut se tenir sans aide.",
              "<strong>3. Assis sans appui</strong> — si l'on ne peut se tenir debout.",
              "<strong>4. Assis avec appui</strong> — si l'on ne peut s'asseoir sans aide."
            ] },
            {"t": "p", "v": "Si quelqu'un est capable d'une position supérieure mais prie dans une position inférieure — sa prière est invalide. L'ordre est obligatoire."},
            {"t": "h", "v": "Les 3 positions recommandées (l'ordre n'est pas obligatoire)"},
            { t:'ul', v:[
              "<strong>5. Sur le côté droit</strong>.",
              "<strong>6. Sur le côté gauche</strong>.",
              "<strong>7. Sur le dos</strong>."
            ] },
            {"t": "p", "v": "Si l'on ne respecte pas l'ordre dans ces trois positions, la prière n'est pas invalidée."},
            {"t": "h", "v": "L'appui qui invalide la prière"},
            {"t": "p", "v": "L'appui qui invalide la prière de celui qui peut s'en passer est celui sur lequel on s'effondrerait si on l'enlevait. Si l'enlèvement de l'appui ne ferait pas tomber l'individu, Makrūh (déconseillé)."},
            {"t": "h", "v": "La prière surérogatoire"},
            { t:'ul', v:[
              "Il est permis à celui qui peut se tenir debout de prier la assis — mais il reçoit la moitié de la récompense du priant debout.",
              "On peut entrer en prière assis puis se lever, ou entrer debout puis s'asseoir.",
              "Exception : si l'on entre avec l'intention explicite de prier debout, il est alors interdit de s'asseoir par la suite."
            ] }
          ]
        },
        {
          id:"sal-06",
          title:"Le Rattrapage des Prières — Le Qaḍāʾ",
          status:'available',
          content:[
            {"t": "lead", "v": "Le rattrapage des prièQaḍāʾ est une obligation. L'école malikite en précise les règles d'ordre, la priorité et les restrictions sur les prières optionnelles pour celui qui a des dettes de prières."},
            {"t": "h", "v": "Obligation de rattrapage"},
            {"t": "p", "v": "Al-Akhḍarī est formel : « Il est obligatoire de rattraper toutes les prières en dette, et il n'est pas permis d'y être négligent. » Celui qui accomplit 5 prières par jour à raison d'une par temps n'est pas considéré comme négligent."},
            {"t": "h", "v": "Comment les rattraper ?"},
            {"t": "p", "v": "La prière de rattrapage est accomplie comme elle aurait dû l'être : une prière de résidant est rattrapée comme une prière de résidant, une prière de voyageur est rattrapée comme une prière de voyage — même si l'on se trouve alors dans l'état opposé au moment du rattrapage."},
            {"t": "h", "v": "L'ordre entre rattrapage et prière présente"},
            { t:'ul', v:[
              "L'ordre (tartīb) entre deux prières présentes et entre un petit nombre de rattrapages et la prière présente est obligatoire — à condition de s'en souvenir.",
              "« Petit nombre » (yasīr) = 4 prières ou moins.",
              "<strong>Si l'on a 4 prières ou moins en dette : les rattraper avant la prière présente, même si le temps de cette dernière sort.</strong>",
              "Le rattrapage peut être accompli à n'importe quel moment."
            ] },
            {"t": "h", "v": "Restrictions pour celui qui a des prières en dette"},
            { t:'ul', v:[
              "Ne pas faire de prières surérogatoires.",
              "Ne pas faire la prière de Ḍuḥā ni le Qiyām du Ramadan.",
              "Autorisé uniquement : le, le, la prière de (rattrapée), les deux ʿĪdain, la prière des éclipses (Kusūf) et la prière pour la pluie (Istisqāʾ)."
            ] },
            {"t": "h", "v": "Oubli du nombre de prières en dette"},
            {"t": "p", "v": "Si l'on ne se souvient plus du nombre exact de prières manquées, on en accomplit un nombre suffisant pour ne plus avoir de doute."},
            {"t": "note", "v": "Les rattrapages peuvent être accomplis en groupe (jamāʿa) si les prières à rattraper sont identiques entre les participants."}
          ]
        },
        {
          id:"sal-07",
          title:"La Prosternation d'Oubli",
          status:'available',
          content:[
            {"t": "lead", "v": "La prosternation d'oubli est un acte de miséricorde divine pour le priant qui oublie ou ajoute quelque chose par inadvertance. Selon l'école malikite, c'Sunna, et son moment varie selon la nature de l'erreur."},
            { t:'ar', v:"وسجودُ السهوِ في الصلاةِ سُنّةٌ", n:"« La prosternation d'oubli dans la prière est une السُّنَّة. » — Mukhtaṣar al-Akhḍarī" },
            {"t": "h", "v": "Pour un manque (naqṣ) : avant le salām"},
            {"t": "p", "v": "Deux prosternations avant le salām, après avoir complété Tashahhuds, suivies d'un troisièTashahhud."},
            {"t": "h", "v": "Pour un excès (ziyāda) : après le salām"},
            {"t": "p", "v": "Deux prosternations après le salām, suivies d'Tashahhud, puis d'un autre salām."},
            {"t": "h", "v": "Si l'on a à la fois manqué et ajouté"},
            {"t": "p", "v": "On prosterne avant le salām (le manque prime)."},
            {"t": "h", "v": "Règles sur l'oubli des prosternations"},
            { t:'ul', v:[
              "<strong>Prosternation avant le salām oubliée</strong> : si le souvenir vient rapidement → on prosterne ; si l'on a tardé ou quitté la mosquée → les prosternations sont nulles, et si elles couvrent 3 Sunna ou plus → la prière est nulle aussi.",
              "<strong>Prosternation après le salām oubliée</strong> : on peut la faire même après un an.",
              "Aucune prosternation ne peut compenser l'omission d'une obligation (farīḍa)."
            ] },
            {"t": "h", "v": "Cas spéciaux importants"},
            { t:'ul', v:[
              "Oublier la voix haute au lieu du silence (ou vice versa) → prosternation avant le salām pour la voix haute, après pour le silence.",
              "Parler par inadvertance → prosternation après le salām.",
              "Terminer la prière (salām) après 2 par inadvertance → prosternation après le salām.",
              "Ajouter une ou deux → prosternation après le salām.",
              "<strong>Rire dans la prière (pas sourire) : la prière est nulle</strong>, qu'on soit distrait ou intentionnel.",
              "La somnolence légère → rien à faire. Sommeil lourd → Wuḍūʾ et prière."
            ] },
            {"t": "note", "v": "Principe à retenir : le manque → avant le salām ; l'excès → après le salām ; les deux → avant le salām."},
            {"t": "h", "v": "— Construire sur la certitude"},
            {"t": "p", "v": "Si le priant doute en cours de prière du nombre de accompli (2 ou 3 ? 3 ou 4 ?), il applique le principe du : il assume le chiffre dont il est certain, c'est-à-dire le plus petit. Il complète en conséquence, puis prosterne deux fois avant le salām."},
            { t:'ar', v:"إِذَا شَكَّ فِي عَدَدِ رَكَعَاتِهِ بَنَى عَلَى اليَقِينِ وَهُوَ الأَقَل", n:"« S'il doute du nombre de ses رَكَعَات, il construit sur la certitude, qui est le chiffre le plus petit. » — Akhḍarī" },
            { t:'ul', v:[
              "<strong>Exemple :</strong> Ibrahim ne sait pas s'il en est à sa 2ème ou 3ème du → il compte 2 (le minimum certain) → continue → complète → prosterne AVANT le salām.",
              "Ce principe s'applique à tout moment pendant la prière, même si le doute survient juste avant le salām.",
              "<strong>Exception :</strong> celui atteint de scrupules obsessionnels n'applique pas cette règle — il ignore ses doutes et continue sans prosternation d'oubli."
            ] },
            {"t": "h", "v": "— La reconstruction du retardataire"},
            {"t": "p", "v": "Principe malikite fondamental : — « Ce que le retardataire attrape avec l' est la FIN de sa prière. » Il complète le DÉBUT de manière indépendante après le salām de l'. Ce principe est propre au rite malikite ; l'école chāfiʿite adopte l'inverse (ce qu'il attrape = son début)."},
            { t:'ar', v:"مَا أَدرَكَ المَسبُوقُ فَهُوَ آخِرُ صَلَاتِهِ وَيَقضِي أَوَّلَهَا", n:"« Ce que le retardataire attrape est la fin de sa prière ; il rattrape son début. » — Akhḍarī" },
            {"t": "h", "v": "Application concrète selon le rite malikite"},
            { t:'ul', v:[
              "<strong>Attrape 3 sur 4 :</strong> les 3 avec l' = ses 2ème, 3ème, 4ème. Après le salām de l', il se lève et prie 1 (sa 1ère). Tashahhud final + salām directement — Tashahhud intermédiaire.",
              "<strong>Attrape 2 sur 4 :</strong> les 2 avec l' = ses 3ème et 4ème. Après le salām, il prie 2 (sa 1ère et 2ème). Ces 2 indépendantes n'Tashahhud entre elles est entre la 2ème et la 3ème, et la 3ème est déjà faite). → Tashahhud final après la 2ème indépendante.",
              "<strong>Attrape 1 sur 4 :</strong> cette avec l' = sa 4ème. Après le salām, il prie 3 (1ère, 2ème, 3ème). Tashahhud après sa 2ème indépendante (car c'est sa 2ème globale), puis continue pour la 3èTashahhud final.",
              "<strong>Attrape 2 sur 3 :</strong> avec l' = sa 2ème et 3ème. Après le salām, il prie 1 (sa 1ère) directement → Tashahhud final → salām.",
              "<strong>Attrape 1 sur 3 :</strong> avec l' = sa 3ème. Après le salām, il prie 2 (sa 1ère et 2ème). Tashahhud entre les deux → Tashahhud final + salām."
            ] },
            {"t": "note", "v": "RèTashahhud pour le (rite malikite) : Tashahhud intermédiaire n'apparaît dans la phase indépendante QUE si la 2ème indépendante est la 2ème globale de la prière. Si les rattrapées indépendamment sont la 1ère et la 2ème globales d'une prière de 4, Tashahhud vient après la 2ème indépendante. Si elles sont la 1ère et la 2ème globales d'une prière de 3, il n'Tashahhud entre elles car la 3ème est déjà faite. Ce point est techniquement difficile et mérite d'être pratiqué concrètement."},
            {"t": "h", "v": "Ce qui constitue une valide pour le"},
            { t:'ul', v:[
              "Dans le rite malikite, attraper l' en <strong>Rukūʿ</strong> avant qu'il se relève suffit pour que cette compte. Fātiḥa lui est pardonnée.",
              "Si le arrive alors que l' est déjà redressé du, cette ne compte PAS — il suit l' et rattrapera une de plus.",
              "Il ne réFātiḥa pendant le — il entre directement en avec l' dès son Iḥrām."
            ] }
          ]
        },
        {
          id:"sal-08",
          title:"Sadl et Spécificités Malikites — Voix, Iqāma et Position des Bras",
          status:'available',
          content:[
            {"t": "lead", "v": "Ce chapitre couvre trois spécificités importantes du rite malikite souvent méconnues: le (position des bras), les règles précises de la voix haute et basse, et les détails de l'Iqāma."},
            {"t": "h", "v": "— La position des bras dans la prière"},
            {"t": "p", "v": "<strong>Spécificité malikite majeure :</strong> dans les prières obligatoires, le priant laisse ses bras le long du corps — il NE croise PAS les mains sur la poitrine. Ceci est la position malikite dans les prières obligatoires."},
            { t:'ul', v:[
              "<strong>Dans les prières obligatoires:</strong> — bras le long du corps, décontractés.",
              "<strong>Dans les prières surérogatoires:</strong> le (croiser les mains) est permis et certains savants malikites le pratiquent pour les.",
              "Le débat interne à l'école: certains savants malikites tardifs ont aussi permis le dans les. L'opinion dominante reste pour les prières obligatoires.",
              "Cette différence est visible et identifiable — c'est un marqueur du rite malikite."
            ] },
            { t:'ar', v:"الإِرسَالُ فِي الفَرِيضَةِ وَالقَبضُ فِي النَّافِلَةِ مُستَحَبٌّ", n:"« Le (bras décontractés) dans la prière obligatoire et le qabḍ (mains croisées) dans la prière surérogatoire sont recommandés. » — Position dominante malikite" },
            {"t": "h", "v": "— Voix haute et voix basse (règles précises)"},
            {"t": "p", "v": "La distinction entre récitation à voix haute et silencieuse est une règle de la prière, non une simple préférence."},
            { t:'ul', v:[
              "<strong>Prières à voix haute:</strong> Ṣubḥ, (2 premières rakʿāt), ʿIshāʾ (2 premières rakʿāt), Jumʿa,,,.",
              "<strong>Prières à voix basse (silencieuses):</strong> Ẓuhr, ʿAṣr, (3ème rakʿa), ʿIshāʾ (3ème et 4ème)."
            ] },
            {"t": "h", "v": "Définition de la voix haute et voix basse selon le rite malikite"},
            { t:'ul', v:[
              "<strong>Pour l'homme — voix basse :</strong> limite inférieure = bouger la langue obligatoirement (sans ça, la récitation n'est pas valide) ; limite supérieure = se faire entendre soi-même.",
              "<strong>Pour l'homme — voix haute :</strong> limite inférieure = se faire entendre celui qui est à côté ; pas de limite supérieure.",
              "<strong>Pour la femme — voix basse :</strong> bouger la langue sans se faire entendre elle-même.",
              "<strong>Pour la femme — voix haute :</strong> se faire entendre elle-même uniquement (sans faire entendre les autres).",
              "Important: même en s, ne pas simplement penser les mots dans sa tête — la langue doit bouger."
            ] },
            {"t": "h", "v": "Iqāma — Formule, statut et détails pratiques"},
            {"t": "p", "v": "L'Iqāma est l'appel intérieur qui marque l'entrée dans la prière. Sa formule selon la Mudawwana de Sahnûn:"},
            { t:'ar', v:"الله أكبر الله أكبر — أشهد أن لا إله إلا الله — أشهد أن محمدًا رسول الله — حَيَّ على الصلاة — حَيَّ على الفلاح — قد قامت الصلاة — الله أكبر الله أكبر — لا إله إلا الله", n:"Formule de l'Iqāma selon la Mudawwana de Sahnūn (version malikite)" },
            { t:'ul', v:[
              "<strong>Statut :</strong> Sunna pour l'homme qui prie seul ; mandûb pour la femme seule.",
              "<strong>Voix :</strong> à voix basse pour l'homme qui prie seul ; à voix haute si l'homme prie en groupe.",
              "<strong>La femme:</strong> ne fait pas l'Iqāma pour les autres — si un homme adulte est présent, c'est lui qui la fait.",
              "<strong>Si oublié :</strong> la prière reste valide, que ce soit par oubli ou délibérément.",
              "<strong>Délibérément omise :</strong> valide, mais on demande le pardon d'Allah.",
              "<strong>Ne pas confondre</strong> l'Iqāma avec l' — l' est pour la communauté, tandis que l'Iqāma Sunna individuelle."
            ] },
            {"t": "note", "v": "La (Bismillah) et l' (A'ūdhu billāh) avant la Fātiḥa dans les prières OBLIGATOIRES sont makrūh selon le rite malikite (d'après l'Akhḍarī). Ce n'est pas interdit, mais c'est déconseillé dans les. En Nawāfil, elles sont permises."}
          ]
        },
        {
          id:"sal-09",
          title:"Sunnat al-Fajr, Witr et Détails Pratiques de la Prière",
          status:'available',
          content:[
            {"t": "lead", "v": "Ce chapitre couvre les détails pratiques fondamentaux souvent enseignés tardivement : Sunna du Fadjr selon la Mudawwana, les postures corporelles précises (prosternation, assise, index), la structure du et du Shafʿ, et les règles du second salām."},
            {"t": "h", "v": "Fajr — Sunna de l'aube et ses spécificités malikites"},
            {"t": "p", "v": "Sunna du Fadjr (2 rakʿāt avant Ṣubḥ) a une particularité malikite importante: on ne récite QUE la Fātiḥa dans chacune des deux rakʿāt — sans ajouter de sourate supplémentaire."},
            { t:'ar', v:"لَا أَزِيدُ عَلَى أُمِّ القُرآنِ وَحدَهَا", n:"« Je ne lis que la Fātiḥa seule (dans les deux rakʿāt du Fadjr). » — Imām Mālik, Mudawwana" },
            { t:'ul', v:[
              "C'Sunna rattrapable jusqu'au Zawal (déclin du soleil) selon le rite malikite.",
              "<strong>Important:</strong> si on rate la prière du Ṣubḥ et qu'on se réveille après le lever du soleil, on rattrape d'abord Ṣubḥ (l'obligation), Sunna du Fadjr.",
              "Ne pas inverser l'ordre : obligation d'abord, Sunna ensuite.",
              "Sunna du Fadjr se fait à voix basse (silencieusement)."
            ] },
            {"t": "h", "v": "— Posture dans la prosternation"},
            {"t": "p", "v": "La prosternation a des exigences physiques précises selon le rite malikite :"},
            { t:'ul', v:[
              "<strong>OBLIGATION :</strong> le front ET le nez doivent tous deux toucher le sol — le nez est obligatoire dans le rite malikite (certains autres rites ne l'exigent pas).",
              "Les deux paumes des mains, les deux genoux et les orteils doivent également toucher le sol.",
              "<strong>Pour l'homme :</strong> ne pas coller le ventre contre les cuisses (les garder séparés), éloigner les coudes des genoux.",
              "<strong>Pour la femme :</strong> se recroqueviller en ramenant tous ses membres (inverser des règles de l'homme pour la pudeur).",
              "La position des pieds en: orteils pointant vers la."
            ] },
            {"t": "h", "v": "— L'Tashahhud"},
            {"t": "p", "v": "Il est recommandé (mustaḥabb/préférable) de bouger l'Tashahhud. La façon malikite selon la Mudawwana et Ibn Abī Zayd :"},
            { t:'ul', v:[
              "L'index et le pouce de la main droite sont tendus (dressés).",
              "Les trois autres doigts sont fermés.",
              "L'index bouge seul (légèrement, sans mouvements brusques).",
              "La main droite est posée sur la cuisse près du genou, à plat.",
              "Il est préférable de bouger l'Tashahhud (pas uniquement à la shahāda selon certains)."
            ] },
            {"t": "h", "v": "— Tashahhud"},
            {"t": "p", "v": "Ibn Abī Zayd al-Qayrawānī décrit la position assise : le pied droit dressé (orteils touchant le sol), le pied gauche replié sous la fesse gauche (ne pas s'asseoir dessus). Ces détails n'ont pas de caractère strict selon les sources malikites."},
            {"t": "h", "v": "— Structure et caractéristiques"},
            {"t": "p", "v": "Après la prière de ʿIshāʾ, il est recommandé de prier le Shafʿ et le:"},
            { t:'ul', v:[
              "<strong> (2 rakʿāt):</strong> récitation de la Fātiḥa + sourate, à voix haute (comme Ṣubḥ), Tashahhud final + salām.",
              "<strong> (1 rakʿa):</strong> récitation de la Fātiḥa + sourate, à voix haute, Tashahhud final + salām.",
              "Ils forment deux prières distinctes.",
              "Le Sunna d'un grand mérite.",
              "Ils font partie des prières autorisées pour celui ayant des Qaḍāʾ en dette."
            ] },
            {"t": "h", "v": "— Règle du second salām"},
            { t:'ul', v:[
              "<strong>L' et celui qui prie seul :</strong> 1 seul salām — pas de second salām à gauche.",
              "<strong>Le:</strong> peut faire 3 salāms: (1) à droite obligatoire, (2) en face Sunna, (3) à gauche — Sunna si quelqu'un à sa gauche a fait au moins 1 rakʿa avec l'.",
              "Le second salām (en face + à gauche) est mandûb pour le uniquement.",
              "Ceci est une spécificité malikite — dans d'autres rites, le second salāSunna pour tous."
            ] },
            {"t": "note", "v": "Récapitulatif des spécificités malikites pratiques: (bras le long du corps dans les farāʾiḍ) · nez obligatoire dans · pas de ni dans les farāʾiḍ · pas de à voix haute par l' · 1 salām pour l' et le priant seul · Sunna du Fadjr avec Fātiḥa seulement."}
          ]
        }],quiz:{id:"quiz-priere",title:"Questionnaire — La Prière",status:"available",score:null,questions:[        {
          id:"q-sal-01",
          text:"Le temps préféré du <strong>Ẓuhr</strong> commence:",
          choices:[
          {id:"a",text:"À midi solaire exact"},
          {id:"b",text:"Au déclin du soleil"},
          {id:"c",text:"Quand l'ombre atteint la hauteur de l'objet"},
          {id:"d",text:"Une heure après le lever du soleil"}
          ],
          correctId:"b",
          explanation:"Le temps préféré du Ẓuhr débute au (le soleil commence à décliner après son zénith) et dure jusqu'à ce que l'ombre atteigne une fois la hauteur de l'objet. Le temps de nécessité s'étend jusqu'au coucher du soleil."
        },
        {
          id:"q-sal-02",
          text:"Le temps du <strong>Maghrib</strong> dans le rite malikite:",
          choices:[
          {id:"a",text:"S'étend jusqu'au coucher du crépuscule rouge"},
          {id:"b",text:"S'étend jusqu'au premier tiers de la nuit"},
          {id:"c",text:"Son temps préféré est extrêmement court : juste le temps d'accomplir la prière"},
          {id:"d",text:"Commence dès l'apparition du crépuscule rouge"}
          ],
          correctId:"c",
          explanation:"Spécificité malikite: le temps préféré du Maghrib est « » — juste le temps d'accomplir la prière. C'est l'école la plus stricte sur ce point. Tarder sans raison fait entrer dans le temps de nécessité."
        },
        {
          id:"q-sal-03",
          text:"Quelles sont les conditions de validité de la prière selon l'Akhḍarī ?",
          choices:[
          {id:"a",text:"La pureté seulement"},
          {id:"b",text:"La pureté, l'habillement et la"},
          {id:"c",text:"Ṭahārat al-Ḥadath, Ṭahārat al-Khabath (corps/vêtement/lieu), couvrir la, faire face à la, éviter la parole et les mouvements nombreux"},
          {id:"d",text:"La pureté, la et la présence mentale"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī énumère les:, (corps, vêtement, lieu),,,,. Ce sont les CONDITIONS préalables, distinctes des obligations internes de la prière."
        },
        {
          id:"q-sal-04",
          text:"La d'une femme dans la prière comprend-elle ses poignets?",
          choices:[
          {id:"a",text:"Non — les poignets font partie des mains, exemptés comme le visage"},
          {id:"b",text:"Oui — tout sauf le visage et les deux paumes est"},
          {id:"c",text:"Seulement si le tissu est transparent"},
          {id:"d",text:"Non — les manches habituelles couvrent les poignets de facto"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — tout le corps de la femme est sauf le visage et les deux paumes. Les poignets, avant-bras, chevilles, cheveux — tout doit être couvert. Une manche laissant voir les poignets invalide la prière."
        },
        {
          id:"q-sal-05",
          text:"La <strong>Ṭumaʾnīna</strong> (stabilité des membres à chaque posture) est:",
          choices:[
          {id:"a",text:"Sunna — son omission ne rend pas la prière invalide"},
          {id:"b",text:"Une — son omission invalide la prière"},
          {id:"c",text:"Une vertu méritoire"},
          {id:"d",text:"Obligatoire seulement dans"}
          ],
          correctId:"b",
          explanation:"La Ṭumaʾnīna est parmi les de la prière selon l'Akhḍarī. Passer en coup de vent d'une posture à l'autre invalide la prière. Les membres doivent se stabiliser dans chaque posture."
        },
        {
          id:"q-sal-06",
          text:"La Niyya dans la prière doit être simultanée à:",
          choices:[
          {id:"a",text:"L'entrée dans la mosquée"},
          {id:"b",text:"La récitation de la Fātiḥa"},
          {id:"c",text:"La (premier Allāhu Akbar)"},
          {id:"d",text:"Elle peut précéder la prière de quelques secondes"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — la Niyya doit être concomitante à la. Elle doit être dans le cœur au moment précis du premier takbīr."
        },
        {
          id:"q-sal-07",
          text:"Sana constate une tache de sang (environ 1cm²) sur son vêtement en cours de prière. Sa prière est-elle invalide ?",
          choices:[
          {id:"a",text:"Oui — tout sang invalide la prière"},
          {id:"b",text:"Non — une très petite quantité de sang est tolérée dans le rite malikite"},
          {id:"c",text:"Seulement si c'est son propre sang"},
          {id:"d",text:"Oui elle doit interrompre immédiatement"}
          ],
          correctId:"b",
          explanation:"Le rite malikite tolère de petites quantités de sang sur le vêtement. Le seuil de référence classique est le. Les quantités inférieures à ce seuil sont tolérées et ne rendent pas la prière invalide, à la différence d'autres écoles."
        },
        {
          id:"q-sal-08",
          text:"Sunna de la <strong>Sūra</strong> (sourate après la Fātiḥa) concerne quelles rakʿāt?",
          choices:[
          {id:"a",text:"Toutes les rakʿāt"},
          {id:"b",text:"Uniquement la première"},
          {id:"c",text:"Les deux premières rakʿāt"},
          {id:"d",text:"Uniquement la première — la deuxième est makrūh"}
          ],
          correctId:"c",
          explanation:"Sunna est de réciter une sourate après la Fātiḥa dans les DEUX premières rakʿāt. Dans les deux dernières, on ne récite que la Fātiḥa. Il est makrūh de systématiquement ajouter une sourate dans les 3ème et 4ème rakʿāt."
        },
        {
          id:"q-sal-09",
          text:"Omar prie et entend son nom appelé. Il dit « » pour signaler qu'il prie. Sa prière est-elle invalide?",
          choices:[
          {id:"a",text:"Non — « » est un dhikr qui ne rompt pas la prière"},
          {id:"b",text:"Oui — tout son intentionnel rompt la prière"},
          {id:"c",text:"Seulement s'il voulait clairement communiquer"},
          {id:"d",text:"Non car c'est autorisé pour avertir d'un danger"}
          ],
          correctId:"a",
          explanation:"L'Akhḍarī: « » — c'est makrūh mais la prière reste VALIDE. « » est un dhikr — l'intention de communiquer ne change pas son statut puisque c'est un acte de culte en soi."
        },
        {
          id:"q-sal-10",
          text:"La (prière en pantalon seul sans vêtement du dessus) est:",
          choices:[
          {id:"a",text:"Interdite — invalide la prière"},
          {id:"b",text:"Permise sans restriction"},
          {id:"c",text:"Makrūh — déconseillée sauf si un vêtement la recouvre"},
          {id:"d",text:"Makrūh uniquement pour l'"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: «, » — prier en pantalon seul est makrūh. Si un autre vêtement le recouvre (chemise, robe, etc.), il n'y a pas de problème. La prière reste valide dans les deux cas."
        },
        {
          id:"q-sal-11",
          text:"Bilal réalise après sa prière qu'il a prié dans la mauvaise direction. Que doit-il faire ?",
          choices:[
          {id:"a",text:"Jamais refaire — l'effort d'estimation dispense toujours"},
          {id:"b",text:"Toujours refaire"},
          {id:"c",text:"Répéter la prière DANS SON TEMPS"},
          {id:"d",text:"Seulement s'il a délibérément pris la mauvaise direction"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — la répétition est dans le temps de cette prière seulement. Hors du temps, aucune répétition n'est requise. C'est une de, pas une obligation absolue."
        },
        {
          id:"q-sal-12",
          text:"Nora n'a aucun vêtement pour couvrir sa. Que doit-elle faire?",
          choices:[
          {id:"a",text:"Attendre d'avoir un vêtement"},
          {id:"b",text:"Reporter la prière"},
          {id:"c",text:"Prier nue — omettre la prière est plus grave"},
          {id:"d",text:"Ne prier que les prières qu'elle peut combiner"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — sans vêtement, on prie nu. L'obligation de la prière dans son temps prime sur la condition du voilement de la quand c'est impossible. La prière dans son temps est prioritaire."
        },
        {
          id:"q-sal-13",
          text:"La <strong>Sutra</strong> (obstacle devant le priant): Sunna?",
          choices:[
          {id:"a",text:"Pour tout priant"},
          {id:"b",text:"Sunna pour le priant seul et l' — pas pour le"},
          {id:"c",text:"Obligation seulement pour l'"},
          {id:"d",text:"Makrūh — elle délimite un espace privatif"}
          ],
          correctId:"b",
          explanation:"La Sunna pour le (priant seul) et l'. Pour le, elle n'est pas requise car l' lui sert de. Elle doit avoir au moins la grosseur d'une lance et la hauteur d'une coudée."
        },
        {
          id:"q-sal-14",
          text:"Le <strong>Sujūd al-Sahw</strong> (prosternation d'oubli) est dans la prière:",
          choices:[
          {id:"a",text:"Une obligation absolue"},
          {id:"b",text:"Sunna"},
          {id:"c",text:"Une expiation"},
          {id:"d",text:"Obligatoire seulement après une (excès)"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī ouvre le chapitre: « » — c'Sunna. L'omettre ne rend pas la prière invalide mais constitue une négligence d'Sunna importante."
        },
        {
          id:"q-sal-15",
          text:"Pour un manque dans la prière, les deux prosternations d'oubli se font :",
          choices:[
          {id:"a",text:"Après le salām"},
          {id:"b",text:"Avant le salām, aprèTashahhuds"},
          {id:"c",text:"Tashahhud"},
          {id:"d",text:"Immédiatement après s'être souvenu du manque"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — pour le: deux prosternations AVANT le salām, aprèTashahhuds, suivies d'un troisièTashahhud. Mnémotechnique: manque = AVANT."
        },
        {
          id:"q-sal-16",
          text:"Pour un excès involontaire dans la prière, les prosternations d'oubli se font :",
          choices:[
          {id:"a",text:"Avant le salām"},
          {id:"b",text:"Après le salām"},
          {id:"c",text:"Immédiatement"},
          {id:"d",text:"Pas de prosternation pour l'excès"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — pour la: deux prosternations APRÈS le salām. Mnémotechnique: manque = AVANT le salām, excès = APRÈS le salām."
        },
        {
          id:"q-sal-17",
          text:"Khalid rit aux éclats en prière, par distraction involontaire. Sa prière est-elle invalide ?",
          choices:[
          {id:"a",text:"Non — seul le rire intentionnel invalide la prière"},
          {id:"b",text:"Oui — le rire aux éclats invalide la prière qu'il soit intentionnel ou involontaire"},
          {id:"c",text:"Non — il fait deux prosternations d'oubli"},
          {id:"d",text:"Oui seulement si des lettres sonores sont prononcées"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — le rire invalide la prière dans TOUS les cas, intentionnel ou distrait. Seul le sourire est inoffensif."
        },
        {
          id:"q-sal-18",
          text:"Ibrahim prie et un scorpion apparaît. Il l'écrase du pied. Sa prière est-elle valide ?",
          choices:[
          {id:"a",text:"Non — tout mouvement non nécessaire invalide la prière"},
          {id:"b",text:"Oui — tuer un animal nuisible en prière est excusé"},
          {id:"c",text:"Seulement avec un seul geste"},
          {id:"d",text:"Non, il doit d'abord terminer la prière"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — tuer un insecte ou scorpion est permis tant que l'acte ne s'éternise pas et qu'on ne tourne pas le dos à la."
        },
        {
          id:"q-sal-19",
          text:"Le <strong>Qunūt</strong> dans la prière du Ṣubḥ est:",
          choices:[
          {id:"a",text:"Une obligation"},
          {id:"b",text:"Sunna"},
          {id:"c",text:"Une vertu — niveau inférieur à Sunna"},
          {id:"d",text:"Une selon les malikites"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī classe le Qunūt parmi les (vertus): « ». Récité silencieusement avant le dans la dernière rakʿa du Ṣubḥ. C'est une, niveau inférieur à Sunna."
        },
        {
          id:"q-sal-20",
          text:"La première (salutation finale) Sunna?",
          choices:[
          {id:"a",text:"La première est une, la deuxièSunna"},
          {id:"b",text:"Sunna"},
          {id:"c",text:"La premièSunna, la seconde est"},
          {id:"d",text:"Les deux sont des obligations"}
          ],
          correctId:"a",
          explanation:"L'Akhḍarī liste parmi les: « » — la première est une. Sunna: « »."
        },
        {
          id:"q-sal-21",
          text:"Tashahhud et commence à se lever. Ses mains n'ont pas encore quitté le sol. Que fait-il ?",
          choices:[
          {id:"a",text:"Il continue — il est trop tard pour revenir"},
          {id:"b",text:"Il revient s'asseoir SANS prosternation d'oubli"},
          {id:"c",text:"Il revient s'asseoir PUIS fait deux prosternations d'oubli"},
          {id:"d",text:"Il continue et fait deux prosternations avant le salām"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — s'il se souvient AVANT que les mains et genoux aient quitté le sol → retour SANS prosternation d'oubli. S'il a déjà quitté le sol → continue et prosterne avant le salām."
        },
        {
          id:"q-sal-22",
          text:"Dawud a 3 prières de Qaḍāʾ non rattrapées et le temps du Ẓuhr est là. Que fait-il?",
          choices:[
          {id:"a",text:"Il prie le Ẓuhr en premier — la prière présente est prioritaire"},
          {id:"b",text:"Il prie ses 3 Qaḍāʾ d'abord, même si le temps du Ẓuhr sort"},
          {id:"c",text:"Il peut choisir l'ordre librement"},
          {id:"d",text:"Il combine rattrapage et présent"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — 4 prières ou moins en Qaḍāʾ doivent être rattrapées AVANT la prière présente, même si le temps de cette dernière expire. Au-delà de 4, la présente est prioritaire."
        },
        {
          id:"q-sal-23",
          text:"Celui qui a des prières de Qaḍāʾ en dette peut-il prier la?",
          choices:[
          {id:"a",text:"Oui — et Qaḍāʾ ne sont pas liés"},
          {id:"b",text:"Non — l'Akhḍarī l'interdit explicitement"},
          {id:"c",text:"Seulement si c'est une prière habituelle"},
          {id:"d",text:"Oui car est très méritoire"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī est précis: « » — et sont explicitement interdits à celui ayant des Qaḍāʾ. Seules la Ṣalāt al-Istisqāʾ sont permises."
        },
        {
          id:"q-sal-24",
          text:"La prière de voyage d'un voyageur maintenant rentré — comment doit-il la rattraper ?",
          choices:[
          {id:"a",text:"En 4 rakʿāt (prière de résident)"},
          {id:"b",text:"En 2 rakʿāt (prière de voyage) même s'il est maintenant résident"},
          {id:"c",text:"Selon les circonstances au moment du rattrapage"},
          {id:"d",text:"Il peut choisir 2 ou 4 rakʿāt"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — la prière de voyage est rattrapée comme prière de voyage, même si le priant est maintenant résident. La forme de la prière manquée est déterminée par les circonstances AU MOMENT où elle aurait dû être accomplie."
        },
        {
          id:"q-sal-25",
          text:"Peut-on prier une nāfila assis volontairement alors qu'on peut se tenir debout ?",
          choices:[
          {id:"a",text:"Non — prier assis invalide la prière"},
          {id:"b",text:"Oui et la récompense est identique"},
          {id:"c",text:"Oui mais avec seulement la moitié de la récompense du priant debout"},
          {id:"d",text:"Seulement pour les surérogatoires tardives"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — pour les, prier assis est permis même si on peut se tenir debout, mais on reçoit la MOITIÉ de la récompense. Pour les, c'est invalide si on peut se tenir debout."
        },
        {
          id:"q-sal-26",
          text:"Khalid est Masbūq (retardataire) et attrape l' en. Cette rakʿa lui compte-t-elle?",
          choices:[
          {id:"a",text:"Seulement s'il a le temps de lire la Fātiḥa"},
          {id:"b",text:"Non — une rakʿa n'est complète qu'avec la Fātiḥa"},
          {id:"c",text:"Oui — s'il entre en avant que l' se relève, la rakʿa est comptée"},
          {id:"d",text:"Seulement si l' n'a pas encore dit ' '"}
          ],
          correctId:"c",
          explanation:"En rite malikite, si le Masbūq entre en AVANT que l' se relève, cette rakʿa est comptée — la Fātiḥa lui est pardonnée. C'est différent de certains avis qui exigent le temps de réciter la Fātiḥa."
        },
        {
          id:"q-sal-27",
          text:"Les temps interdits aux prières surérogatoires selon l'Akhḍarī sont :",
          choices:[
          {id:"a",text:"Seulement après Ṣubḥ jusqu'au lever du soleil"},
          {id:"b",text:"Après Ṣubḥ jusqu'au lever complet, et après ʿAṣr jusqu'au Maghrib"},
          {id:"c",text:"À midi"},
          {id:"d",text:"Après minuit"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — deux périodes interdites aux."
        },
        {
          id:"q-sal-28",
          text:"Peut-on prier des Nawāfil juste après la Jumʿa, encore dans la mosquée?",
          choices:[
          {id:"a",text:"Oui immédiatement"},
          {id:"b",text:"Non — interdit après Jumʿa comme après ʿAṣr"},
          {id:"c",text:"Non — interdit tant qu'on est dans la mosquée"},
          {id:"d",text:"Sunna de Jumʿa (quatre rakʿāt)"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — interdit de prier des après Jumʿa tant qu'on est dans la mosquée. Dès la sortie, c'est permis. C'est un cas particulier différent de ʿAṣr."
        },
        {
          id:"q-sal-29",
          text:"La (takbīr entre les postures) sont:",
          choices:[
          {id:"a",text:"Des obligations — leur omission invalide la prière"},
          {id:"b",text:"Sunna — sauf la qui est"},
          {id:"c",text:"Sunna seulement dans les 2 premières rakʿāt"},
          {id:"d",text:"Des sans conséquence si omises"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — toutes les takbīrāt de transition sont des SOUNNAH, SAUF la qui est une. Les omettre ne rend pas la prièSunna."
        },
        {
          id:"q-sal-30",
          text:"Ibrahim éternue en prière et dit « al-Ḥamdu lillāh ». Sa prière est-elle invalidée?",
          choices:[
          {id:"a",text:"Oui — toute parole intelligible invalide la prière"},
          {id:"b",text:"Non — est un dhikr licite en prière"},
          {id:"c",text:"Seulement si dit à voix haute"},
          {id:"d",text:"Oui car ce n'est pas un dhikr de prière"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — dire al-Ḥamdu lillāh après un éternuement en prière ne pose aucun problème. C'est un dhikr licite. En revanche, répondre à quelqu'un qui éternue — parole adressée à un humain — invaliderait la prière."
        },
        {
          id:"q-sal-31",
          text:"Le Tashahhud al-Awwal (premier assis) Sunna?",
          choices:[
          {id:"a",text:"Une obligation — invalide la prière si omis intentionnellement"},
          {id:"b",text:"Sunna — avec si oublié"},
          {id:"c",text:"Une vertu méritoire"},
          {id:"d",text:"Obligation seulement dans les prières de 4 rakʿāt"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī liste Tashahhud Sunna. Tashahhud impose le avant le salām. L'omettre intentionnellement est grave mais ne rend pas la prière nulle."
        },
        {
          id:"q-sal-32",
          text:"La <strong>Ṣalāt ʿalā al-Nabī ﷺ</strong> Tashahhud est dans le rite malikite:",
          choices:[
          {id:"a",text:"Tashahhud final"},
          {id:"b",text:"Sunna Tashahhuds"},
          {id:"c",text:"Tashahhuds"},
          {id:"d",text:"RecommandéTashahhud"}
          ],
          correctId:"b",
          explanation:"La Ṣalāt ʿalā al-Nabī Sunna de la prière dans le rite malikite — CE N'EST PAS UNE (contrairement à l'école chāfiʿite qui la classe comme obligation). Son omission ne rend pas la prière invalide."
        },
        {
          id:"q-sal-33",
          text:"Ibrahim dit la avant la Fātiḥa dans une prière obligatoire. Est-ce correct?",
          choices:[
          {id:"a",text:"Oui — recommandé avant toute récitation"},
          {id:"b",text:"Non — la est makrūh dans les prières obligatoires selon le rite malikite"},
          {id:"c",text:"Obligatoire — sans elle la Fātiḥa est incomplète"},
          {id:"d",text:"Permis seulement à voix très basse"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: «... » — la est makrūh dans les prières obligatoires selon le rite malikite. C'est une spécificité notable différente de la position shāfiʿite."
        },
        {
          id:"q-sal-34",
          text:"La prière du <strong>vendredi</strong> se compose de :",
          choices:[
          {id:"a",text:"4 rakʿāt + 2 khuṭba"},
          {id:"b",text:"2 rakʿāt précédées de 2 khuṭba"},
          {id:"c",text:"2 rakʿāt sans khuṭba"},
          {id:"d",text:"4 rakʿāt suivies de 2 khuṭba"}
          ],
          correctId:"b",
          explanation:"La Jumʿa remplace Ẓuhr le vendredi et se compose de 2 rakʿāt précédées de 2 khuṭba. Elle est due aux hommes libres, résidants, sans excuse valable."
        },
        {
          id:"q-sal-35",
          text:"Salima (résidante, en bonne santé) veut faire Tayammum pour la Jumʿa. Est-ce permis?",
          choices:[
          {id:"a",text:"Oui si elle ne trouve pas d'eau facilement"},
          {id:"b",text:"Non — le résidant sain ne peut pas faire Tayammum pour la Jumʿa"},
          {id:"c",text:"Oui si elle est pressée"},
          {id:"d",text:"Permis car Jumʿa est une prière spéciale"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — le résidant sain ne peut pas faire Tayammum pour, Jumʿa ou Janāza."
        },
        {
          id:"q-sal-36",
          text:"Un homme est à la 3ème rakʿa du Ẓuhr et réalise que le temps du Ẓuhr vient d'expirer. Doit-il interrompre?",
          choices:[
          {id:"a",text:"Oui — la prière hors temps est invalide"},
          {id:"b",text:"Non — il complète la prière valablement car elle a été commencée dans le temps"},
          {id:"c",text:"Oui s'il peut encore rattraper en allant vite"},
          {id:"d",text:"Seulement les rakʿāt dans le temps sont valides"}
          ],
          correctId:"b",
          explanation:"Une prière commencée dans le temps peut être complétée même si elle se termine hors temps. Interrompre une prière commencée serait invalider ce qui a été accompli."
        },
        {
          id:"q-sal-37",
          text:"L'<strong>Adhān</strong> Sunna dans le rite malikite?",
          choices:[
          {id:"a",text:"Obligation individuelle pour chaque priant"},
          {id:"b",text:"Obligation collective pour la communauté"},
          {id:"c",text:"Sunna muʾakkada"},
          {id:"d",text:"Sunna simple"}
          ],
          correctId:"b",
          explanation:"L'Adhān est pour la communauté — si personne ne le fait, toute la communauté est en péché. Pour l'individu priant seul, c'Sunna. L'Iqāma Sunna individuellement."
        },
        {
          id:"q-sal-38",
          text:"La longueur de récitation recommandée dans Ṣubḥ est:",
          choices:[
          {id:"a",text:"Courte — comme ʿAṣr"},
          {id:"b",text:"Moyenne — comme ʿIshāʾ"},
          {id:"c",text:"Longue — parmi les récitations les plus longues"},
          {id:"d",text:"Très courte — seulement la Fātiḥa"}
          ],
          correctId:"c",
          explanation:"L'Akhḍarī: « » — Ṣubḥ et Ẓuhr ont les récitations les plus longues. ʿAṣr et Maghrib sont courtes. ʿIshāʾ est moyenne."
        },
        {
          id:"q-sal-39",
          text:"Le Masbūq (retardataire) a-t-il suivi l' dans le (après le salām)?",
          choices:[
          {id:"a",text:"Il suit toujours l'"},
          {id:"b",text:"Il ne suit jamais l' — il finit sa propre prière d'abord"},
          {id:"c",text:"Il suit l' dans le mais reporte le à la fin de sa propre prière"},
          {id:"d",text:"Il suit si et seulement si l' le demande explicitement"}
          ],
          correctId:"c",
          explanation:"Le Masbūq qui a rattrapé au moins une rakʿa complète suit l' dans le. Pour le, il l'accomplit à la FIN de sa propre prière, après avoir complété les rakʿāt manquées."
        },
        {
          id:"q-sal-40",
          text:"L' se lève par erreur pour une 5ème rakʿa. Que font les personnes derrière ?",
          choices:[
          {id:"a",text:"Ils suivent toujours l'"},
          {id:"b",text:"Celui CERTAIN de la reste assis — celui qui DOUTE suit l'"},
          {id:"c",text:"Ils disent et restent assis"},
          {id:"d",text:"Ils complètent leur prière indépendamment"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — certitude de l'erreur = rester assis ; doute = suivre l'."
        },
        {
          id:"q-sal-41",
          text:"Ibrahim prie le Ẓuhr et se rappelle avoir une ancienne prière de Qaḍāʾ. Doit-il interrompre sa prière?",
          choices:[
          {id:"a",text:"Non — la souvenance pendant la prière n'oblige pas à l'interrompre"},
          {id:"b",text:"Oui — l'ordre oblige à faire le Qaḍāʾ d'abord"},
          {id:"c",text:"Seulement si le temps de la prière présente n'expire pas"},
          {id:"d",text:"Seulement si c'est la même prière"}
          ],
          correctId:"a",
          explanation:"Le est une condition AVEC LE SOUVENIR au moment de COMMENCER la prière. Si le souvenir survient EN COURS de prière, on la complète. Il n'y a pas d'obligation d'interrompre la prière en cours."
        },
        {
          id:"q-sal-42",
          text:"La prière de l'Ṣalāt al-Istisqāʾ (demande de pluie) est-elle autorisée pour celui ayant des Qaḍāʾ en dette?",
          choices:[
          {id:"a",text:"Non — comme toute"},
          {id:"b",text:"Oui — elle figure dans la liste des exceptions autorisées"},
          {id:"c",text:"Seulement en cas de sécheresse grave"},
          {id:"d",text:"Seulement si l' l'ordonne"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī liste les prières autorisées pour celui ayant des Qaḍāʾ: « Ṣalāt al-Istisqāʾ » — Ṣalāt al-Istisqāʾ est dans la liste des exceptions permises."
        },
        {
          id:"q-sal-43",
          text:"La femme souffrant d'incontinence urinaire chronique doit-elle interrompre sa prière à chaque?",
          choices:[
          {id:"a",text:"Oui — tout interrompt la prière"},
          {id:"b",text:"Non — l'incontinence chronique est une excuse permettant de continuer"},
          {id:"c",text:"Elle doit refaire Wuḍūʾ entre chaque rakʿa"},
          {id:"d",text:"Elle ne peut pas prier"}
          ],
          correctId:"b",
          explanation:"Le rite malikite reconnaît l'excuse pour les personnes souffrant d'incontinence ou de saignement chronique. Elle prie avec le Wuḍūʾ accompli pour chaque prière et son chronique ne l'interrompt pas pendant la prière."
        },
        {
          id:"q-sal-44",
          text:"Peut-on interrompre une prière surérogatoire en cours ?",
          choices:[
          {id:"a",text:"Oui librement — c'est volontaire"},
          {id:"b",text:"Oui mais il faut la rattraper"},
          {id:"c",text:"Non — une commencée doit être complétée"},
          {id:"d",text:"Seulement si c'est une prière de"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — interrompre délibérément une impose de la rattraper. C'est le même principe que pour le jeûne volontaire interrompu."
        },
        {
          id:"q-sal-45",
          text:"Ibrahim est en prière et son téléphone sonne. Il répond par erreur en disant « Allo ». Sa prière est-elle invalide ?",
          choices:[
          {id:"a",text:"Non — une erreur sincère ne rompt pas la prière"},
          {id:"b",text:"Oui — toute parole adressée à un humain invalide la prière, même par erreur sincère"},
          {id:"c",text:"Seulement si une conversation s'ensuit"},
          {id:"d",text:"Non si c'était une parole d'une seule syllabe"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī distingue deux cas : (1) parole par OUBLI total — la prière peut rester valide avec deux prosternations d'oubli. (2) Parole délibérée ou par inadvertance sans oubli complet — invalide la prière. « Allo » conscient invalide la prière."
        },
        {
          id:"q-sal-46",
          text:"Les Ayyām al-Bīḍ (13, 14, 15 de chaque mois) — leur jeûne est-il autorisé pour celui ayant des Qaḍāʾ?",
          choices:[
          {id:"a",text:"Oui — c'est un jeûne hautement méritoire"},
          {id:"b",text:"Non — comme toute, interdit à celui ayant des Qaḍāʾ"},
          {id:"c",text:"Oui car ce sont des jours spéciaux"},
          {id:"d",text:"Seulement si le Qaḍāʾ date de moins d'un mois"}
          ],
          correctId:"b",
          explanation:"Les jeûnes de l' sont des. Comme toutes les, ils sont interdits à celui ayant des Qaḍāʾ en dette. L'Akhḍarī est clair: seules les prières/jeûnes listés explicitement sont autorisés."
        },
        {
          id:"q-sal-47",
          text:"Laïla a ses règles et réalise qu'elle a des prières de Qaḍāʾ. Doit-elle les rattraper?",
          choices:[
          {id:"a",text:"Oui — le Qaḍāʾ s'accumule pendant le"},
          {id:"b",text:"Non — la ne rattrape pas les prières manquées pendant ses règles"},
          {id:"c",text:"Seulement les prières faites après la puberté"},
          {id:"d",text:"Seulement Ṣubḥ et Maghrib"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — la rattrape le JEÛNE mais PAS la prière. Les prières manquées pendant le sont définitivement dispensées et ne sont jamais rattrapées."
        },
        {
          id:"q-sal-48",
          text:"L' dit le salām puis réalise qu'il a manqué une rakʿa. Il est averti par deux personnes équitables. Que fait-il ?",
          choices:[
          {id:"a",text:"Sa prière est invalide — on ne peut pas revenir après le salām"},
          {id:"b",text:"Il complète la rakʿa manquante si les deux témoins sont équitables"},
          {id:"c",text:"Il refait toute la prière"},
          {id:"d",text:"Il fait seulement deux prosternations d'oubli"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: «... » — deux témoins équitables peuvent confirmer l'erreur et l' complète sa prière."
        },
        {
          id:"q-sal-49",
          text:"Ibrahim a 5 prières de Qaḍāʾ en dette. Le temps du Ẓuhr arrive. Que fait-il?",
          choices:[
          {id:"a",text:"Il prie ses 5 Qaḍāʾ d'abord"},
          {id:"b",text:"Il prie le Ẓuhr d'abord — au-delà de 4 Qaḍāʾ, la présente est prioritaire"},
          {id:"c",text:"Il peut choisir"},
          {id:"d",text:"Il prie 4 Qaḍāʾ puis le Ẓuhr"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: 4 prières ou moins → rattraper avant la présente. 5 ou plus → la prière présente est prioritaire, on rattrape le reste ensuite. Avec 5 Qaḍāʾ, il prie le Ẓuhr en premier."
        },
        {
          id:"q-sal-50",
          text:"La Janāza (prière funèbre) peut-elle être accomplie par Tayammum pour un résidant sain?",
          choices:[
          {id:"a",text:"Oui — la Janāza est une obligation urgente"},
          {id:"b",text:"Non — sauf si c'est (obligation personnelle) sur lui"},
          {id:"c",text:"Oui si la Janāza est imminente"},
          {id:"d",text:"Oui car c'est une prière différente des"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » sauf si elle lui est (personne d'autre ne peut l'accomplir). Dans ce cas exceptionnel, le résidant sain peut faire Tayammum pour la Janāza."
        },
        {
          id:"q-sal-51",
          text:"Quelle est la position des bras dans les prières obligatoires selon le rite malikite ?",
          choices:[
          {id:"a",text:"Les mains croisées sur la poitrine comme dans les autres rites"},
          {id:"b",text:"Les bras le long du corps — mains non croisées"},
          {id:"c",text:"La main droite sur le poignet gauche sur le bas-ventre"},
          {id:"d",text:"Les deux mains jointes devant soi"}
          ],
          correctId:"b",
          explanation:"est la position malikite pour les prières obligatoires: les bras restent le long du corps, non croisés. C'est l'un des marqueurs identitaires les plus visibles du rite malikite. Le (mains croisées) est permis dans les selon certains savants malikites, mais pas dans les."
        },
        {
          id:"q-sal-52",
          text:"Peut-on croiser les mains dans une prière surérogatoire selon certains savants malikites ?",
          choices:[
          {id:"a",text:"Non — est obligatoire pour toutes les prières dans le rite malikite"},
          {id:"b",text:"Oui — certains savants malikites permettent le dans les"},
          {id:"c",text:"Seulement pour les femmes"},
          {id:"d",text:"Seulement pour le et le Shafʿ"}
          ],
          correctId:"b",
          explanation:"Il y a un débat interne à l'école: la position dominante est dans les. Pour les, certains savants malikites permettent le. Ce n'est pas une question de / mais de pratique préférée selon le contexte."
        },
        {
          id:"q-sal-53",
          text:"La limite inférieure de la voix basse pour l'homme dans la prière est :",
          choices:[
          {id:"a",text:"Aucune limite — on peut juste penser les mots"},
          {id:"b",text:"Se faire entendre soi-même"},
          {id:"c",text:"Bouger la langue obligatoirement — même sans son audible"},
          {id:"d",text:"Murmurer si faiblement qu'on ne s'entend pas soi-même"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr (Al-Jazīrī): la limite INFÉRIEURE de la voix basse pour l'homme = bouger la langue obligatoirement. Sans bouger la langue (simple pensée intérieure), la récitation n'est pas valide. La limite supérieure du = se faire entendre soi-même. Si on fait entendre quelqu'un à côté → on est passé en."
        },
        {
          id:"q-sal-54",
          text:"La limite de la voix haute pour la femme dans la prière est :",
          choices:[
          {id:"a",text:"Même que l'homme — elle peut élever la voix autant qu'elle veut"},
          {id:"b",text:"Se faire entendre elle-même sans faire entendre les autres"},
          {id:"c",text:"Aucun son — la femme prie toujours en silence total"},
          {id:"d",text:"Elle ne peut prier qu'en silence si un homme non-mahram est à portée"}
          ],
          correctId:"b",
          explanation:"Pour la femme, sa voix haute = se faire entendre elle-même uniquement (sans faire entendre les autres hommes non-mahram). Sa voix basse = bouger la langue sans se faire entendre. Cette règle protège à la fois la validité de sa prière et la pudeur."
        },
        {
          id:"q-sal-55",
          text:"Que récite-t-on dans les 2 rakʿāSunna du Fadjr selon la Mudawwana ?",
          choices:[
          {id:"a",text:"La Fātiḥa + une sourate choisie, comme pour le Subh"},
          {id:"b",text:"Uniquement la Fātiḥa (sans sourate) dans chacune des deux rakʿāt"},
          {id:"c",text:"La Fātiḥa + Sourate al-Ikhlāṣ dans chacune"},
          {id:"d",text:"Uniquement Sourate al-Kāfirūn et al-Ikhlāṣ"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite d'après la Mudawwana : l'Imām Mālik dit qu'il ne récite que la Fātiḥa seule dans les 2 rakʿāSunna du Fadjr — rien de plus. Raison : le Prophète ﷺ les allégeait tellement qu'on se demandait s'il avait même lu la Fātiḥa. Contrairement à ce qu'on fait dans d'autres rites."
        },
        {
          id:"q-sal-56",
          text:"Ibrahim rate la prière du Ṣubḥ et se réveille après le lever du soleil. Dans quel ordre doit-il agir?",
          choices:[
          {id:"a",text:"D'Sunna du Fadjr (2 rakʿāt), puis le Ṣubḥ obligatoire"},
          {id:"b",text:"D'abord Ṣubḥ obligatoire, Sunna du Fadjr"},
          {id:"c",text:"Uniquement Ṣubḥ — Sunna du Fadjr est caduque"},
          {id:"d",text:"Indifférent — dans l'un ou l'autre ordre"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Si on rate la prière de Subh et qu'on se lève le matin après le lever du soleil : Sunna du Fadjr ». L'Sunna. Sunna peut être rattrapée jusqu'au Zawal."
        },
        {
          id:"q-sal-57",
          text:"Jusqu'à Sunna du Fadjr selon le rite malikite ?",
          choices:[
          {id:"a",text:"Elle ne se rattrape jamais"},
          {id:"b",text:"Seulement avant le lever du soleil"},
          {id:"c",text:"Jusqu'au Zawal (déclin du soleil — midi islamique)"},
          {id:"d",text:"Jusqu'à la prière du ʿAṣr"}
          ],
          correctId:"c",
          explanation:"Sunna du Fadjr est la seule prière surérogatoire qui se rattrape jusqu'au Zawal (déclin du soleil) dans le rite malikite. Après le Zawal, elle ne se rattrape plus. C'est une règle propre au rite malikite — à noter car les autres prières surérogatoires ne se rattrapent généralement pas."
        },
        {
          id:"q-sal-58",
          text:"Dans la prosternation, le nez doit-il obligatoirement toucher le sol selon le rite malikite ?",
          choices:[
          {id:"a",text:"Non — seul le front est obligatoire"},
          {id:"b",text:"Oui — front ET nez doivent tous deux toucher le sol dans le rite malikite"},
          {id:"c",text:"Oui mais seulement dans Ṣubḥ"},
          {id:"d",text:"Non — c'Sunna seulement"}
          ],
          correctId:"b",
          explanation:"Dans le rite malikite, le front ET le nez doivent tous deux toucher le sol dans la prosternation. C'est différent de certains autres rites où seul le front est obligatoire. Doctrine-malikite.fr : « Pendant la prosternation (Sujûd), il faut que le front, le nez et les paumes des mains touchent le sol »."
        },
        {
          id:"q-sal-59",
          text:"Pour la position dans la prosternation, quelle est la différence entre l'homme et la femme ?",
          choices:[
          {id:"a",text:"Aucune différence — même posture pour tous"},
          {id:"b",text:"L'homme : ventre séparé des cuisses, coudes éloignés des genoux. La femme : se recroqueviller en ramenant ses membres"},
          {id:"c",text:"La femme prie assise uniquement en"},
          {id:"d",text:"L'homme pose les mains à plat, la femme ferme les poings"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr précise les deux postures : Pour l'homme : ne pas coller le ventre contre les cuisses, éloigner les coudes des genoux (ouverture). Pour la femme : se recroqueviller en ramenant ses membres contre elle (fermeture — pour la pudeur). Ces différences s'appliquent aussi à la position assise."
        },
        {
          id:"q-sal-60",
          text:"L'<strong>Tashahhud</strong> : quel est le geste recommandé dans le rite malikite ?",
          choices:[
          {id:"a",text:"Ne pas bouger l'index — le garder immobile tendu"},
          {id:"b",text:"Faire tourner l'index en cercles"},
          {id:"c",text:"Bouger l'index (légèrement) Tashahhud, index et pouce tendus, autres doigts fermés"},
          {id:"d",text:"Lever brièvement l'index uniquement à la Shahāda"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr : il est préférable (mustaḥabb) de bouger l'Tashahhud. Index et pouce tendus, les trois autres doigts fermés. La main posée à plat sur la cuisse près du genou. C'est un signe de monotheisme Tashahhud."
        },
        {
          id:"q-sal-61",
          text:"L' prie. Combien de salāms fait-il pour conclure sa prière ?",
          choices:[
          {id:"a",text:"Deux salāms : un à droite, un à gauche"},
          {id:"b",text:"Un seul salām"},
          {id:"c",text:"Trois salāms : à droite, en face, à gauche"},
          {id:"d",text:"Cela dépend du nombre de personnes derrière lui"}
          ],
          correctId:"b",
          explanation:"Spécificité malikite: l' et celui qui prie seul ne font qu'UN SEUL salām. Le second salām n'est prescrit que pour le. Doctrine-malikite.fr confirme: « si on prie seul ou si on est Imâm, on s'arrêtera au Salâm à droite »."
        },
        {
          id:"q-sal-62",
          text:"Karim prie derrière un. Quand doit-il faire le salām à gauche ?",
          choices:[
          {id:"a",text:"Jamais — seul le salām à droite est prescrit pour le"},
          {id:"b",text:"Toujours, même s'il est seul derrière l'"},
          {id:"c",text:"Seulement si quelqu'un à sa gauche a fait au moins 1 rakʿa avec l'"},
          {id:"d",text:"Seulement si l' fait 3 salāms"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr: le salām à gauche pour le Sunna (mandûb) SEULEMENT si quelqu'un à sa gauche a fait au moins une rakʿa complète avec l'. S'il est seul ou si son voisin de gauche n'a pas fait de rakʿa avec l' → pas de salām à gauche."
        },
        {
          id:"q-sal-63",
          text:"Le <strong>Shafʿ wa-Witr</strong> (après ʿIshāʾ) — combien de rakʿāt au total et à voix haute ou basse?",
          choices:[
          {id:"a",text:"3 rakʿāt d'un bloc, à voix basse"},
          {id:"b",text:"= 2 rakʿāt à voix haute + = 1 rakʿa à voix haute, avec salām séparant les deux"},
          {id:"c",text:"= 4 rakʿāt + = 3 rakʿāt"},
          {id:"d",text:"= 1 rakʿa silencieuse uniquement"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: après ʿIshāʾ, il est préférable de prier 2 rakʿāt puis 1 rakʿa. Chacun avec sa propre Fātiḥa + sourate à voix haute (comme le Subh), Tashahhud final et son salām. Un salām sépare le Shafʿ du — ce sont deux prières distinctes."
        },
        {
          id:"q-sal-64",
          text:"La formule de l'<strong>Iqāma</strong> dans le rite malikite est-elle identique à l'adhān?",
          choices:[
          {id:"a",text:"Oui — même formule complète"},
          {id:"b",text:"Non — l'Iqāma est plus courte: pas de répétitions doubles et ajout de"},
          {id:"c",text:"L'Iqāma est identique mais récitée deux fois plus vite"},
          {id:"d",text:"L'Iqāma n'a pas de formule fixe dans le rite malikite"}
          ],
          correctId:"b",
          explanation:"La formule malikite de l'Iqāma est abrégée par rapport à l'adhān: chaque phrase est dite UNE fois (pas deux) sauf × 2 au début, et on ajoute. L'adhān est plus long avec des répétitions. Les deux sont des appels distincts avec des formules distinctes."
        },
        {
          id:"q-sal-65",
          text:"Ibrahim oublie délibérément de faire l'<strong>Iqāma</strong> avant sa prière. Sa prière est-elle invalide?",
          choices:[
          {id:"a",text:"Oui — l'Iqāma est une condition de validité de la prière"},
          {id:"b",text:"Oui si c'est délibéré — invalide en cas d'intention volontaire"},
          {id:"c",text:"Non — la prière reste valide, mais il demande pardon à Allah"},
          {id:"d",text:"Non — l'Iqāma est facultative sans conséquence"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr: que ce soit par oubli ou délibérément, l'oubli de l'Iqāma ne rend pas la prière invalide. En cas d'omission délibérée: la prière reste valide, mais il est recommandé de demander le pardon d'Allah. C'Sunna, non une condition de validité."
        }]}},
    {id:"jeune",title:"Le Jeûne",arabicTitle:"الصوم",icon:"crescent",description:"Obligation du Ramadan, Niyya, nullificateurs, Kaffāra, Qaḍāʾ et qiyām al-ramaḍān selon la Risāla d'Ibn Abī Zayd al-Qayrawānī.",source:"",badge:{id:"badge-jeune",title:"Croyant du Ramadan",arabicTitle:"صائم رمضان",icon:"crescent",color:'gold',unlockCondition:"Questionnaire \"Le Jeûne\" avec un score ≥ 85 %"},lessons:[        {
          id:"saw-01",
          title:"L'Obligation du Jeûne et la Niyya",
          status:'available',
          content:[
            {"t": "lead", "v": "Le jeûne du mois de Ramadan est une farīḍa (obligation). La Risāla expose ses conditions d'entrée, la rèNiyya (intention) et quelques cas pratiques fondamentaux."},
            {"t": "h", "v": "Établissement du mois de Ramadan"},
            {"t": "p", "v": "On entre en Ramadan à la vue du croissant de lune et on le termine à sa vue. Si le ciel est couvert, on complète trente jours à partir du début du mois précédent — puis on commence à jeûner. Il en est de même pour la sortie du Ramadan (ʿĪd al-Fiṭr)."},
            { t:'ar', v:"وَصَوْمُ شَهرِ رَمَضَانَ فَرِيضَةٌ، يُصَامُ لِرُؤيَةِ الهِلَالِ وَيُفطَرُ لِرُؤيَتِهِ", n:"« Le jeûne du mois de Ramadan est une obligation. On le commence à la vue du croissant et on le termine à sa vue. » — Risāla d'Ibn Abī Zayd al-Qayrawānī" },
            {"t": "h", "v": "Niyya (intention) du jeûne"},
            {"t": "p", "v": "L'intention doit être arrêtée chaque nuit, dès le début du mois. Elle n'est pas requise pour le reste de la journée. L'intention se fait par le cœur, en sachant que l'on jeûne le lendemain pour Allāh."},
            {"t": "h", "v": "Sunna dans le suhūr et l'ifṭār"},
            { t:'ul', v:[
              "<strong>Avancer l'ifṭār</strong> (rompre le jeûne dès la tombée de la nuit) Sunna.",
              "<strong>Retarder le suhūr</strong> (le repas de pré-aube) jusqu'à juste avant le Sunna.",
              "En cas de doute sur l'arrivée de l'aube, on peut encore manger."
            ] },
            {"t": "h", "v": "Le jour de doute (yawm al-shakk)"},
            {"t": "p", "v": "Le 30e jour de Shaʿbān, lorsqu'on doute de l'entrée de Ramadan, ne doit pas être jeûné par précaution pour Ramadan. Celui qui le jeûne avec cette intention n'est pas validé, même si ce jour coïncide effectivement avec le premier Ramadan. Il est permis de le jeûner comme jeûne volontaire habituel."},
            { t:'ar', v:"وَلَا يُصَامُ يَومُ الشَّكِّ لِيُحتَاطَ بِهِ مِن رَمَضَانَ، وَمَن صَامَهُ كَذَلِكَ لَم يُجزِه وَإِن وَافَقَهُ مِن رَمَضَان", n:"« On ne jeûne pas le jour du doute en guise de précaution pour Ramadan. Quiconque le jeûne dans cet esprit n'est pas validé, même si ce jour coïncide avec Ramadan. »" },
            {"t": "note", "v": "Celui qui se lève sans avoir mangé et sans avoir bu — et qui n'avait pas encore décidé de jeûner — peut décider de jeûner cette journée de Ramadan si cette décision est prise suffisamment tôt."}
          ]
        },
        {
          id:"saw-02",
          title:"Les Nullificateurs du Jeûne",
          status:'available',
          content:[
            {"t": "lead", "v": "Certains actes ou états invalident le jeûne et nécessite un Qaḍāʾ ou une Kaffāra. La Risāla distingue soigneusement les cas."},
            {"t": "h", "v": "Ce qui n'invalide pas le jeûne"},
            { t:'ul', v:[
              "<strong>Le siwāk</strong> est permis tout au long de la journée du jeûne.",
              "<strong>La saignée (ḥijāma)</strong> n'est déconseillée que si elle risque d'affaiblir le jeûneur au point de le faire rompre son jeûne par nécessité.",
              "<strong>Les vomissements involontaires (qayʾ maglūb)</strong> : \" \" — si l'on est submergé involontairement par des vomissements, Qaḍāʾ.",
              "<strong>Se réveiller en éJanāba</strong> (impureté majeure due au rapport sexuel de la nuit) n'invalide pas le jeûne de la journée.",
              "<strong>Le voyageur qui rentre en cours de journée</strong> en état d'ifrār (ayant rompu le jeûne) et la femme qui se purifies de ses règles en cours de journée : tous deux peuvent manger le reste de cette journée sans être tenus à l'imsāk."
            ] },
            {"t": "h", "v": "Qaḍāʾ"},
            { t:'ul', v:[
              "<strong>Rompre délibérément son jeûne surérogatoire</strong> : Qaḍāʾ.",
              "<strong>Se vomir délibérément</strong> : \" \" — Qaḍāʾ.",
              "<strong>La caresse ou le baiser avec désir</strong> qui amène à une émission : Qaḍāʾ.",
              "<strong>Manger ou boire par oubli</strong> ne rompt pas le jeûne selon l'école malikite (contrairement à d'autres)."
            ] },
            {"t": "h", "v": "La femme enceinte et la mère allaitante"},
            { t:'ul', v:[
              "Femme enceinte qui craint pour son fœtus : rompt le jeûne, avec un Qaḍāʾ, sans.",
              "Mère allaitante qui craint pour l'enfant : rompt le jeûne et doit nourrir un pauvre par jour de rattrapage."
            ] },
            {"t": "h", "v": "Cas particulier : junub réveillé après le"},
            {"t": "p", "v": "Si quelqu'un se retrouve en éJanāba et ne peut se purifier qu'après le (aube), son jeûne de cette journée reste valide. De même pour la femme qui constate la fin de ses règles avant le et ne peut faire le Ghusl qu'après : son jeûne est valide."},
            { t:'ar', v:"وَمَن أَصبَحَ جُنُبًا وَلَم يَتَطَهَّر أو امرأَةٌ حَائِضٌ طَهُرَت قَبلَ الفَجرِ فَلَم يَغتَسِلَا إِلَّا بَعدَ الفَجرِ أَجزَأَهُمَا صَومُ ذَلِكَ اليَومِ", n:"« Celui qui se réveille en état de الجَنَابَة, ou la femme dont les règles se sont arrêtées avant le الفَجْر mais qui ne s'est pas purifiée qu'après : le jeûne de ce jour leur est validé. »" }
          ]
        },
        {
          id:"saw-03",
          title:"Kaffāra et Qaḍāʾ — Expiation et Rattrapage du Jeûne",
          status:'available',
          content:[
            {"t": "lead", "v": "Kaffāra (expiation) ne s'applique que dans des cas précis et bien délimités. La Risāla en définit les conditions et la forme, ainsi que les rèQaḍāʾ."},
            {"t": "h", "v": "Kaffāra est-elle obligatoire ?"},
            {"t": "p", "v": "Kaffāra n'est obligatoire que pour celui qui rompt délibérément (mutaʿammidan) par mangeage, boisson ou rapport sexuel, tout en sachant qu'il est dans le mois de Ramadan et en plein état de jeûne (maʿa al-maḍāʾ). Toute rupture due à une interprétation ou à une erreur sincère ne donne lieu à Kaffāra."},
            { t:'ar', v:"وَإِنَّمَا al-kaffāra (الكَفَّارَة)ُ عَلَى مَن أَفطَرَ مُتَعَمِّدًا بِأَكلٍ أَو شُربٍ أَو جِمَاعٍ مَعَ المَضَاءِ", n:"« La al-kaffāra (الكَفَّارَة) n'est due que pour celui qui rompt délibérément par le manger, le boire ou le rapport sexuel, avec résolution ferme. »" },
            {"t": "h", "v": "Kaffāra (par ordre de préférence)"},
            { t:'ul', v:[
              "<strong>1. Nourrir 60 pauvres</strong> — un mudd (mesure du Prophète ﷺ) pour chacun. C'est la forme préférée selon l'auteur.",
              "<strong>2. Libérer un esclave</strong> — une personne en captivité valide.",
              "<strong>3. Jeûner deux mois consécutifs</strong> — Kaffāra."
            ] },
            {"t": "note", "v": "Celui qui rompt délibérément son jeûne de rattrapage n'Kaffāra — Qaḍāʾ."},
            {"t": "h", "v": "Le voyageur et le jeûne"},
            { t:'ul', v:[
              "Le voyageur pour un trajet qui raccourcit la prière a le droit de rompre le jeûne même sans nécessité absolue.",
              "Qaḍāʾ.",
              "<strong>Jeûner est néanmoins préféré</strong> selon l'auteur : \"Ṣawm \".",
              "Si le trajet est inférieur à 4 bornes (environ 86 km), il n'a pas le droit de rompre le jeûne — et s'il le fait quand même, il n'Kaffāra Qaḍāʾ reste obligatoire."
            ] },
            {"t": "h", "v": "Penalty pour tardiveté dans le rattrapage"},
            {"t": "p", "v": "Qaḍāʾ de Ramadan jusqu'à l'entrée du prochain Ramadan sans excuse valable doit, en plus du rattrapage, nourrir un pauvre par jour de retard."}
          ]
        },
        {
          id:"saw-04",
          title:"Les Personnes Exemptées et Cas Particuliers",
          status:'available',
          content:[
            {"t": "lead", "v": "La Risāla précise les catégories de personnes non tenues de jeûner, les jours interdits au jeûne, et quelques règles pratiques importantes."},
            {"t": "h", "v": "Les enfants (aṭfāl)"},
            {"t": "p", "v": "\" \" — le jeûne n'est pas obligatoire pour les enfants tant que le garçon n'a pas atteint la puberté et la fille ses premières règles. À la puberté, les actes d'adoration deviennent obligatoires."},
            {"t": "h", "v": "Jours où le jeûne est interdit"},
            { t:'ul', v:[
              "<strong>Le jour de l'Eid al-Fiṭr</strong> (1er Shawwāl) — interdit de jeûner.",
              "<strong>Le jour de l'Eid al-Adha</strong> (10 Dhū al-Ḥijja) — interdit de jeûner.",
              "<strong>Les deux jours qui suivent l'Eid al-Adha</strong> (11 et 12 Dhū al-Ḥijja) — interdits. Exception : le pèlerin qui n'a pas trouvé l'animal sacrificiel (hadī) pour le hady al-tamattuʿ peut jeûner le 4e jour."
            ] },
            {"t": "h", "v": "Rapport sexuel en journée de Ramadan"},
            { t:'ul', v:[
              "Simple plaisir par attouchement ou baiser sans que cela aille plus loin : Qaḍāʾ.",
              "Si cela va jusqu'à l'acte complet délibérément : Kaffāra."
            ] },
            {"t": "h", "v": "L'évanouissement (ighmaʾ)"},
            {"t": "p", "v": "Celui qui perd connaissance pendant la journée de Ramadan : son jeûne peut être invalidé si l'inconscience dure et le prive de toute conscience pendant la journée entière. Les détails sont précisés par les commentateurs."},
            {"t": "note", "v": "Point important : le jeûneur qui ressent un plaisir par contact intime en journée de Ramadan et que cela entraîne une éQaḍāʾ. S'il va jusqu'à l'acte intentionnellement : Kaffāra obligatoire."}
          ]
        },
        {
          id:"saw-05",
          title:"Le Qiyām al-Ramaḍān et l'Iʿtikāf",
          status:'available',
          content:[
            {"t": "lead", "v": "La Risāla mentionne deux pratiques majeures liées à Ramadan : le qiyām (prières nocturnes de Ramadan) et l'Iʿtikāf (retraite spirituelle dans la mosquée). Elle en précise les modalités selon la tradition des pieux ancêtres (salaf ṣāliḥ)."},
            {"t": "h", "v": "La valeur du qiyām al-Ramaḍān"},
            { t:'ar', v:"وَمَن قَامَ رَمَضَانَ إِيمَانًا وَاحتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِن ذَنبِهِ", n:"« Quiconque accomplit le qiyām de Ramadan par foi et dans l'attente de la récompense divine, ses péchés antérieurs lui sont pardonnés. »" },
            {"t": "h", "v": "La modalité du qiyām al-Ramaḍān"},
            { t:'ul', v:[
              "On peut le faire dans la mosquée avec un (tarawīḥ en communauté) ou à la maison.",
              "<strong>La prière à la maison est préférable</strong> pour celui dont l'intention et la dévotion sont fortes.",
              "Les pieux ancêtres (salaf ṣāliḥ) priaient <strong>20 </strong> dans les mosquées, suivies du en 3.",
              "Un salām sépare le du.",
              "Ils faisaient ensuite encore des prières supplémentaires."
            ] },
            {"t": "h", "v": "L'Iʿtikāf (retraite dans la mosquée)"},
            { t:'ul', v:[
              "<strong>Quand entrer :</strong> avant le coucher du soleil de la nuit où commence l'Iʿtikāf.",
              "<strong>Quand sortir :</strong> après le coucher du soleil du dernier jour.",
              "<strong>Interdit à Iʿtikāf :</strong> rendre visite aux malades, prier sur les morts, faire des affaires commerciales. Il ne sort que pour les besoins naturels.",
              "<strong>Permis :</strong> être l' de la mosquée, se marier ou contracter le mariage de quelqu'un d'autre.",
              "Iʿtikāf a ses règles ou si le retraitant tombe malade : ils sortent et rentrent dès la guérison ou la pureté retrouvée."
            ] },
            {"t": "note", "v": "La Risāla d'Ibn Abī Zayd al-Qayrawānī (310-386 H) est l'une des œuvres fondatrices du rite malikite. Elle a été composée à l'âge de 17 ans et s'est répandue dans tout le monde musulman jusqu'à être copiée en lettres d'or."}
          ]
        },
        {
          id:"saw-06",
          title:"Cas Médicaux Contemporains et Laylat al-Qadr",
          status:'available',
          content:[
            {"t": "lead", "v": "Le malikite contemporain s'est prononcé sur de nombreux cas médicaux qui n'existaient pas à l'époque des sources classiques. Ce chapitre synthétise ces fatwas à partir de doctrine-malikite.fr et des savants malikites contemporains, et présente la Laylat al-Qadr."},
            {"t": "h", "v": "Médicaments par voie oculaire, auriculaire et nasale"},
            { t:'ul', v:[
              "<strong>Voie oculaire (gouttes pour les yeux) :</strong> si le médicament n'arrive pas à la gorge → le jeûne reste valide.",
              "<strong>Voie auriculaire (gouttes pour les oreilles) :</strong> si le médicament n'arrive pas à la gorge → le jeûne reste valide.",
              "<strong>Voie nasale (gouttes pour le nez) :</strong> ATTENTION — le nez est une issue proche de la gorge → risque que le médicament l'atteigne → s'abstenir en journée sauf nécessité médicale absolue.",
              "Si un médicament nasal arrive à la gorge: invalide le jeûne, impose le Qaḍāʾ.",
              "Médicament oral (par la bouche) : invalide toujours le jeûne."
            ] },
            { t:'ar', v:"كُلُّ دَوَاءٍ أُخِذَ مِن طَرِيقِ العَينِ أَوِ الأُذُنِ وَلَم يَصِل إِلَى الحَلقِ صِيَامُهُ صَحِيح", n:"« Tout médicament pris par les yeux ou les oreilles sans atteindre la gorge — le jeûne reste valide. » — Fatwa doctrine-malikite.fr" },
            {"t": "h", "v": "L'aérosol (Ventoline/inhalateur) pour les asthmatiques"},
            {"t": "p", "v": "Cette question fait l'objet d'une divergence réelle entre savants malikites contemporains :"},
            { t:'ul', v:[
              "<strong>Opinion 1 (n'invalide pas) :</strong> certains savants assimilent l'inhalateur au rinçage de la bouche — la quantité de liquide est infime et les autres composants sont principalement de l'air qui va aux poumons. → Jeûne valide.",
              "<strong>Opinion 2 (invalide):</strong> d'autres estiment que la composante liquide arrive à la gorge et l'estomac. → Jeûne invalide, impose le Qaḍāʾ.",
              "Si invalide (opinion 2) et la maladie est chronique: à la place du Qaḍāʾ.",
              "Recommandation pratique: si possible, prendre l'inhalateur avant Fajr ou après. En cas de nécessité en journée, utiliser et rattraper par précaution."
            ] },
            {"t": "h", "v": "Injections médicales et jeûne"},
            { t:'ul', v:[
              "<strong>Injections sous-cutanées ou intraveineuses (médicaments simples) :</strong> n'invalident pas le jeûne — elles ne déposent pas dans l'estomac.",
              "<strong>Injections nutritives (nutrition parentérale) :</strong> invalident le jeûne — elles alimentent le corps et contredisent la finalité même du jeûne.",
              "<strong>Injections rectales/anales :</strong> invalident le jeûne selon la majorité des savants — la substance atteint l'estomac.",
              "<strong>Prises de sang :</strong> n'invalident pas le jeûne — par analogie avec la Hijāma qui est seulement makrūh.",
              "L'insuline (injection): n'invalide pas le jeûne (ce n'est pas de la nourriture). Si médicalement dangereux de jeûner: excuse médicale + Qaḍāʾ ou selon l'état."
            ] },
            {"t": "h", "v": "Jeûner dans un pays, rompre dans un autre"},
            {"t": "p", "v": "Doctrine-malikite.fr, d'après Ibn Rushd (Bidāyat al-Mujtahid) : quand on voyage en cours de Ramadan dans un autre pays, on suit le pays de destination pour l'Eid. Règles essentielles :"},
            { t:'ul', v:[
              "On ne peut pas avoir jeûné moins de 29 jours — c'est le minimum légal du mois.",
              "Si en rompant avec le pays de destination le total de jours jeûnés est de 28 : rattraper un jour.",
              "Si on a jeûné 29 ou 30 jours et le pays de destination rompt : on rompt avec eux, rien à rattraper.",
              "La règle : <strong>on suit le pays où on se trouve</strong> pour le début et la fin du Ramadan — même si on doit jeûner plus de 30 jours au total dans un cas extrême."
            ] },
            {"t": "h", "v": "Laylat al-Qadr — La Nuit de la Valeur"},
            {"t": "p", "v": "Laylat al-Qadr est la nuit la plus sacrée de l'année islamique, liée directement au Ramadan et à l'Iʿtikāf:"},
            { t:'ar', v:"لَيلَةُ القَدرِ خَيرٌ مِن أَلفِ شَهر", n:"« La Nuit de la Valeur est meilleure que mille mois. » — Coran 97:3" },
            { t:'ul', v:[
              "<strong>Moment :</strong> parmi les nuits impaires des 10 derniers jours de Ramadan (21, 23, 25, 27, 29). La 27ème est la plus souvent citée mais elle peut varier.",
              "<strong>Comment la reconnaître :</strong> selon certains hadīth, la nuit est douce, le lendemain le soleil se lève sans rayons (pâle). Mais l'essentiel est de la chercher par l'adoration.",
              "<strong>Lien avec l'Iʿtikāf:</strong> le Prophète ﷺ faisait l'Iʿtikāf les 10 derniers jours de Ramadan précisément pour rencontrer Laylat al-Qadr.",
              "<strong>Duʿāʾ recommandé:</strong> « » — hadīth authentique."
            ] },
            {"t": "note", "v": "Point de contemporain clé : le patch de nicotine (anti-tabac) posé sur la peau et dont la substance diffuse dans le sang — la majorité des savants contemporains l'assimilent aux injections médicales (n'invalide pas le jeûne car n'atteint pas l'estomac). Fumer une cigarette en journée de Ramadan, en revanche, invalide toujours le jeûne."}
          ]
        }],quiz:{id:"quiz-jeune",title:"Questionnaire — Le Jeûne",status:"available",score:null,questions:[        {
          id:"q-saw-01",
          text:"Le jeûne du Ramadan est établi par :",
          choices:[
          {id:"a",text:"Le calendrier islamique officiel"},
          {id:"b",text:"La vue du croissant de lune"},
          {id:"c",text:"Le calcul astronomique"},
          {id:"d",text:"L'annonce gouvernementale"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — on commence à la vue du croissant, on termine à sa vue. Si le ciel est couvert, on complète 30 jours depuis le début du mois précédent."
        },
        {
          id:"q-saw-02",
          text:"La Niyya du jeûne: quand doit-elle être arrêtée selon la Risāla?",
          choices:[
          {id:"a",text:"Au lever du soleil"},
          {id:"b",text:"À midi au plus tard"},
          {id:"c",text:"Chaque nuit avant Fajr"},
          {id:"d",text:"Une seule fois au début du mois pour tout Ramadan"}
          ],
          correctId:"c",
          explanation:"La Risāla: « » — la Niyya doit être arrêtée chaque nuit avant le Fajr. Contrairement aux où la Niyya peut être faite jusqu'au."
        },
        {
          id:"q-saw-03",
          text:"Ibrahim avale de la salive pendant son jeûne. Est-ce problématique ?",
          choices:[
          {id:"a",text:"Oui — avaler tout liquide rompt le jeûne"},
          {id:"b",text:"Non — avaler sa propre salive ne rompt pas le"},
          {id:"c",text:"Seulement si la salive est abondante"},
          {id:"d",text:"Seulement si elle est mélangée à autre chose"}
          ],
          correctId:"b",
          explanation:"Avaler sa propre salive ne rompt pas le jeûne selon le rite malikite. Ce qui rompt le jeûne, c'est l'introduction délibérée de substances alimentaires ou boissons depuis l'extérieur."
        },
        {
          id:"q-saw-04",
          text:"Fatima mange par <u>oubli</u> en Ramadan. Que doit-elle faire ?",
          choices:[
          {id:"a",text:"Faire la Kaffāra complète"},
          {id:"b",text:"Faire le Qaḍāʾ d'un jour seulement"},
          {id:"c",text:"Ne rien faire — l'oubli est une excuse totale"},
          {id:"d",text:"Faire le Qaḍāʾ et la Kaffāra"}
          ],
          correctId:"c",
          explanation:"Manger ou boire par oubli sincère ne constitue pas une rupture intentionnelle. La Kaffāra n'est pas due. Selon certains avis malikites, le jeûne est même entièrement valide (pas de Qaḍāʾ). C'est une différence notable avec d'autres écoles."
        },
        {
          id:"q-saw-05",
          text:"Peut-on jeûner le <strong>Yawm al-Shakk</strong> (30e Shaʿbān) par précaution pour Ramadan?",
          choices:[
          {id:"a",text:"Oui, par précaution"},
          {id:"b",text:"Oui si le ciel est nuageux"},
          {id:"c",text:"Non — interdit et ne compte pas même si c'est réellement le premier Ramadan"},
          {id:"d",text:"Oui si c'est un jour de jeûne habituel"}
          ],
          correctId:"c",
          explanation:"La Risāla: «, » — ce piège classique: même si ce jour coïncide réellement avec Ramadan, il ne compte pas si l'intention était l'anticipation."
        },
        {
          id:"q-saw-06",
          text:"Le est-il permis au jeûneur?",
          choices:[
          {id:"a",text:"Interdit — risque d'avaler quelque chose"},
          {id:"b",text:"Permis uniquement avant le déclin du soleil"},
          {id:"c",text:"Permis tout au long de la journée"},
          {id:"d",text:"Makrūh après le"}
          ],
          correctId:"c",
          explanation:"La Risāla: « Siwāk » — aucun inconvénient à utiliser le toute la journée. C'est une précision importante car certains pensent qu'il faut l'éviter après le Zawal."
        },
        {
          id:"q-saw-07",
          text:"Quelqu'un est submergé par des vomissements involontaires. Son jeûne est-il rompu?",
          choices:[
          {id:"a",text:"Oui — Qaḍāʾ obligatoire"},
          {id:"b",text:"Oui — Kaffāra obligatoire"},
          {id:"c",text:"Non — son jeûne reste valide"},
          {id:"d",text:"Il doit refaire la Niyya"}
          ],
          correctId:"c",
          explanation:"La Risāla: « Qaḍāʾ » — vomissements involontaires = rien à faire. En revanche « Qaḍāʾ » — vomissements délibérés = Qaḍāʾ seulement."
        },
        {
          id:"q-saw-08",
          text:"Hassan se vomit volontairement en Ramadan. Doit-il faire la Kaffāra?",
          choices:[
          {id:"a",text:"Oui — tout acte volontaire rompant le jeûne impose la Kaffāra"},
          {id:"b",text:"Non — la Kaffāra n'est due que pour manger, boire ou rapport sexuel délibéré"},
          {id:"c",text:"Oui avec la Kaffāra légère"},
          {id:"d",text:"Seulement s'il le fait souvent"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Kaffāra » — la Kaffāra ne s'applique QUE pour manger, boire ou rapport sexuel délibéré. Les vomissements délibérés → Qaḍāʾ seulement."
        },
        {
          id:"q-saw-09",
          text:"Dans quel ordre la <strong>Kaffāra</strong> est-elle préférentiellement accomplie selon la Risāla?",
          choices:[
          {id:"a",text:"Jeûner 2 mois → nourrir 60 pauvres → libérer un esclave"},
          {id:"b",text:"Libérer un esclave → jeûner 2 mois → nourrir 60 pauvres"},
          {id:"c",text:"Nourrir 60 pauvres (préféré) → libérer un esclave → jeûner 2 mois consécutifs"},
          {id:"d",text:"Formes équivalentes sans préférence"}
          ],
          correctId:"c",
          explanation:"La Risāla: «... » — nourrir 60 pauvres est la forme PRÉFÉRÉE selon le rite malikite (un mudd par pauvre). C'est différent de l'ordre chāfiʿite qui commence par libérer un esclave."
        },
        {
          id:"q-saw-10",
          text:"Khalid rompt délibérément son jeûne de Qaḍāʾ. Doit-il faire la Kaffāra?",
          choices:[
          {id:"a",text:"Oui — tout jeûne obligatoire rompu délibérément impose la Kaffāra"},
          {id:"b",text:"Non — la Kaffāra n'est due que pour la rupture de Ramadan lui-même"},
          {id:"c",text:"Oui mais seulement la Kaffāra légère"},
          {id:"d",text:"Seulement si c'est un jeûne de"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Qaḍāʾ Kaffāra » — pas de Kaffāra pour la rupture délibérée du Qaḍāʾ. Seulement le renouvellement du Qaḍāʾ. La Kaffāra est spécifique à Ramadan."
        },
        {
          id:"q-saw-11",
          text:"Un voyageur rentre en ville en cours de journée en état d'ifrār (n'ayant pas jeûné). Que peut-il faire ?",
          choices:[
          {id:"a",text:"S'abstenir de manger dès son retour"},
          {id:"b",text:"Continuer à manger le reste de la journée"},
          {id:"c",text:"Faire le Qaḍāʾ d'une demi-journée"},
          {id:"d",text:"Jeûner dès le lendemain pour compenser"}
          ],
          correctId:"b",
          explanation:"La Risāla: «... » — le voyageur arrivant en état d'ifrār peut manger le reste de la journée. Même règle pour la femme dont les règles s'arrêtent en cours de journée."
        },
        {
          id:"q-saw-12",
          text:"Peut-on jeûner le <strong>Yawm al-ʿĪdayn</strong> (jour de l'Eid al-Fitr ou Eid al-Adha)?",
          choices:[
          {id:"a",text:"Oui et c'est même recommandé"},
          {id:"b",text:"Non — strictement interdit"},
          {id:"c",text:"Makrūh seulement"},
          {id:"d",text:"Permis si c'est un jeûne de préalablement voué"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — il est formellement interdit de jeûner les deux jours de l'Eid. C'est l'un des interdits absolus du jeûne en Islam."
        },
        {
          id:"q-saw-13",
          text:"La femme enceinte qui craint uniquement pour son <u>fœtus</u> (pas pour elle-même) doit-elle payer la?",
          choices:[
          {id:"a",text:"Oui — obligatoire pour toute femme enceinte qui rompt"},
          {id:"b",text:"Non — elle ne fait que le Qaḍāʾ sans"},
          {id:"c",text:"Oui, la ET le Qaḍāʾ ensemble"},
          {id:"d",text:"Elle peut choisir entre Qaḍāʾ et"}
          ],
          correctId:"b",
          explanation:"La Risāla distingue: femme enceinte craignant pour le FŒTUS → rompt + Qaḍāʾ seulement (PAS de ). Mère allaitante craignant pour l'enfant → rompt + Qaḍāʾ +. Ces deux cas sont différents."
        },
        {
          id:"q-saw-14",
          text:"Le qui ne peut faire Ghusl avant Fajr — son jeûne du lendemain est-il valide?",
          choices:[
          {id:"a",text:"Non — il doit être pur avant Fajr"},
          {id:"b",text:"Oui — être en au lever de l'aube n'invalide pas le jeûne"},
          {id:"c",text:"Il doit faire Ghusl avant le lever du soleil au moins"},
          {id:"d",text:"Seulement si la est involontaire (rêve)"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — être en état de au lever de l'aube ne rompt pas le jeûne. La pureté n'est pas une condition du jeûne (contrairement à la prière)."
        },
        {
          id:"q-saw-15",
          text:"La (saignée) pendant le Ramadan est:",
          choices:[
          {id:"a",text:"Interdite — rompt le jeûne"},
          {id:"b",text:"Permise sans restriction"},
          {id:"c",text:"Makrūh seulement si elle risque d'affaiblir le jeûneur au point de compromettre son jeûne"},
          {id:"d",text:"Sunna — pratiquée par le Prophète ﷺ"}
          ],
          correctId:"c",
          explanation:"La Risāla: « Ḥijāma » — la n'est makrūh QUE si on craint qu'elle affaiblisse le jeûneur au point de compromettre son jeûne. Sinon elle est permise."
        },
        {
          id:"q-saw-16",
          text:"Mariam embrasse son mari avec désir en journée de Ramadan. Aucune émission ne se produit. Que se passe-t-il ?",
          choices:[
          {id:"a",text:"Le jeûne est rompu — tout contact avec désir rompt"},
          {id:"b",text:"Il n'y a aucune conséquence si aucune émission ne survient"},
          {id:"c",text:"C'est makrūh mais le jeûne reste intact"},
          {id:"d",text:"Elle fait deux prosternations d'oubli"}
          ],
          correctId:"c",
          explanation:"La Risāla précise que le Qaḍāʾ survient si le baiser ou la caresse « » (conduit à une émission). Sans émission, c'est makrūh (déconseillé) mais le jeûne reste valide."
        },
        {
          id:"q-saw-17",
          text:"Khalid voyage sur moins de 4 bornes (environ 86 km). Peut-il rompre son jeûne ?",
          choices:[
          {id:"a",text:"Oui — tout voyage autorise la rupture"},
          {id:"b",text:"Non — seul le voyage autorisant le de la prière (~86 km) autorise la rupture"},
          {id:"c",text:"Oui si le trajet dure plus d'une journée"},
          {id:"d",text:"Oui car la fatigue justifie la rupture"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — un voyage de moins de 4 bornes n'autorise pas la rupture du jeûne. Le seuil est aligné sur celui qui autorise le de la prière."
        },
        {
          id:"q-saw-18",
          text:"La est due dans lequel de ces cas?",
          choices:[
          {id:"a",text:"Pour toute rupture du jeûne"},
          {id:"b",text:"Pour le vieillard incapable de jeûner et de rattraper, OU pour qui reporte le Qaḍāʾ jusqu'à un nouveau Ramadan sans excuse"},
          {id:"c",text:"Pour le voyageur qui rompt son jeûne"},
          {id:"d",text:"Toujours en plus du Qaḍāʾ"}
          ],
          correctId:"b",
          explanation:"La est due dans deux cas principaux: (1) le vieillard / malade chronique incapable de jeûner et de rattraper → un pauvre par jour. (2) Celui qui reporte le Qaḍāʾ sans excuse jusqu'au prochain Ramadan → en plus du Qaḍāʾ."
        },
        {
          id:"q-saw-19",
          text:"Quel est le nombre de rakʿāt pour le <strong>Qiyām Ramaḍān</strong> selon la Risāla?",
          choices:[
          {id:"a",text:"8 rakʿāt + 3"},
          {id:"b",text:"12 rakʿāt + 3"},
          {id:"c",text:"20 rakʿāt + 3"},
          {id:"d",text:"36 rakʿāt"}
          ],
          correctId:"c",
          explanation:"La Risāla: « » — 20 rakʿāt pour la tarāwīḥ, puis 3 pour le, avec un salām entre le et le."
        },
        {
          id:"q-saw-20",
          text:"Omar est en Iʿtikāf. Peut-il sortir visiter un malade?",
          choices:[
          {id:"a",text:"Oui — visiter un malade est prioritaire"},
          {id:"b",text:"Non — le muʿtakif ne sort que pour les besoins naturels"},
          {id:"c",text:"Oui s'il revient rapidement"},
          {id:"d",text:"Seulement pour la famille proche"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — le muʿtakif ne sort pas pour visiter les malades, prier sur les morts, ni pour le commerce. Il ne sort que pour ses besoins naturels."
        },
        {
          id:"q-saw-21",
          text:"Quels jours sont interdits de jeûner après?",
          choices:[
          {id:"a",text:"Aucun après l'Eid lui-même"},
          {id:"b",text:"Les 11 et 12 Dhū al-Ḥijja seulement"},
          {id:"c",text:"Les 11, 12, 13 pour tous"},
          {id:"d",text:"Les 11 et 12 sont interdits — sauf pour le pèlerin du sans"}
          ],
          correctId:"d",
          explanation:"La Risāla: « » — les 11 et 12 sont interdits sauf pour le pèlerin du qui n'a pas trouvé son (animal sacrificiel)."
        },
        {
          id:"q-saw-22",
          text:"Zayd commence un jeûne volontaire puis le rompt délibérément sans raison. Doit-il le rattraper ?",
          choices:[
          {id:"a",text:"Non — les jeûnes volontaires peuvent être rompus librement"},
          {id:"b",text:"Oui — le Qaḍāʾ est obligatoire pour un jeûne volontaire rompu délibérément"},
          {id:"c",text:"Seulement si c'était un lundi ou jeudi"},
          {id:"d",text:"Non — il peut en faire un autre à la place"}
          ],
          correctId:"b",
          explanation:"La Risāla: «... Qaḍāʾ » — rompre délibérément un jeûne volontaire impose le Qaḍāʾ. Cette règle s'applique aux une fois commencées."
        },
        {
          id:"q-saw-23",
          text:"Les enfants doivent-ils jeûner le Ramadan selon la Risāla ?",
          choices:[
          {id:"a",text:"Oui dès 10 ans"},
          {id:"b",text:"Non — obligation à la puberté seulement"},
          {id:"c",text:"Oui dès 7 ans progressivement"},
          {id:"d",text:"Oui mais seulement les premières heures"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — pas d'obligation de jeûne avant la puberté: pour le garçon, premières règles pour la fille."
        },
        {
          id:"q-saw-24",
          text:"La femme dont les règles s'arrêtent en cours de journée de Ramadan — peut-elle manger le reste de la journée ?",
          choices:[
          {id:"a",text:"Non — elle doit s'abstenir immédiatement"},
          {id:"b",text:"Oui — la Risāla le permet explicitement"},
          {id:"c",text:"Seulement si elle n'a pas encore fait Ghusl"},
          {id:"d",text:"Elle attend le lendemain"}
          ],
          correctId:"b",
          explanation:"La Risāla est claire : la femme dont les règles s'arrêtent en cours de journée peut manger le reste de la journée. Ce n'est pas comme si cette journée pouvait compter comme jeûne valide — mais elle n'est pas obligée de s'abstenir."
        },
        {
          id:"q-saw-25",
          text:"<strong>SCÉNARIO MÉDICAL :</strong> Un dentiste pose une anesthésie locale à un patient jeûneur. Le jeûne est-il rompu ?",
          choices:[
          {id:"a",text:"Oui — toute injection rompt le jeûne"},
          {id:"b",text:"Non — l'injection locale ne constitue pas une nourriture et n'atteint pas le"},
          {id:"c",text:"Oui si c'est dans une veine"},
          {id:"d",text:"Seulement si c'est du glucose"}
          ],
          correctId:"b",
          explanation:"L'anesthésie locale (injection intramusculaire, sous-cutanée ou nerveuse) ne rompt pas le jeûne selon les savants malikites contemporains — ce n'est pas de la nourriture et elle n'atteint pas le (cavité abdominale)."
        },
        {
          id:"q-saw-26",
          text:"Ibrahim reporte son Qaḍāʾ jusqu'à l'entrée du prochain Ramadan sans excuse valable. Que doit-il faire?",
          choices:[
          {id:"a",text:"Simplement rattraper les jours après le second Ramadan"},
          {id:"b",text:"Faire le Qaḍāʾ ET nourrir un pauvre par jour de retard"},
          {id:"c",text:"Faire la Kaffāra complète à la place"},
          {id:"d",text:"Aucune conséquence supplémentaire"}
          ],
          correctId:"b",
          explanation:"Celui qui reporte le Qaḍāʾ sans excuse jusqu'à l'entrée d'un nouveau Ramadan doit faire, en plus du Qaḍāʾ, une (nourrir un pauvre) par jour de retard. C'est une sanction pour la négligence."
        },
        {
          id:"q-saw-27",
          text:"L'Iʿtikāf (retraite spirituelle) est-il obligatoire ou recommandé?",
          choices:[
          {id:"a",text:"Obligatoire pour tout homme adulte en Ramadan"},
          {id:"b",text:"Obligatoire seulement le dernier tiers du Ramadan"},
          {id:"c",text:"Recommandé — obligatoire seulement si on l'a voué"},
          {id:"d",text:"Sunna ni obligation"}
          ],
          correctId:"c",
          explanation:"L' Sunna du Prophète ﷺ, notamment dans le dernier tiers du Ramadan. Il devient obligatoire uniquement si on l'a voué. Ce n'est pas une obligation pour tous."
        },
        {
          id:"q-saw-28",
          text:"La femme en peut-elle jeûner si son saignement s'arrête le 3ème jour?",
          choices:[
          {id:"a",text:"Non — le dure minimum 40 jours"},
          {id:"b",text:"Oui — dès l'arrêt du saignement et après Ghusl, elle peut jeûner"},
          {id:"c",text:"Seulement après 15 jours"},
          {id:"d",text:"Non — elle attend une semaine supplémentaire"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — dès l'arrêt du saignement, même le jour de l'accouchement, elle fait Ghusl et reprend ses obligations. Pas de durée minimale."
        },
        {
          id:"q-saw-29",
          text:"<strong>SCÉNARIO MÉDICAL :</strong> Nadia se fait poser des gouttes oculaires en Ramadan. Son jeûne est-il affecté ?",
          choices:[
          {id:"a",text:"Oui — tout ce qui entre dans le corps rompt le jeûne"},
          {id:"b",text:"Non — les gouttes oculaires n'atteignent pas le"},
          {id:"c",text:"Seulement si elle a le goût dans la gorge"},
          {id:"d",text:"Oui car les yeux communiquent avec la gorge"}
          ],
          correctId:"b",
          explanation:"Les gouttes oculaires ne rompent pas le jeûne selon les savants malikites contemporains car le (estomac/intestin) n'est pas atteint directement. Ce qui rompt le jeûne c'est ce qui pénètre dans la cavité abdominale par les voies habituelles."
        },
        {
          id:"q-saw-30",
          text:"Zayd ouvre un parfum très fort en Ramadan et en inhale l'odeur. Son jeûne est-il affecté ?",
          choices:[
          {id:"a",text:"Oui — les odeurs fortes rompent le jeûne"},
          {id:"b",text:"Non — sentir des parfums ou odeurs ne rompt pas le jeûne"},
          {id:"c",text:"Seulement si c'est intentionnel"},
          {id:"d",text:"Seulement pour l'encens brûlé directement"}
          ],
          correctId:"b",
          explanation:"Sentir des parfums, de la nourriture ou toute odeur ne rompt PAS le jeûne selon le rite malikite. Ce qui rompt c'est l'introduction de substance solide ou liquide — pas les odeurs."
        },
        {
          id:"q-saw-31",
          text:"Ibrahim a mangé juste avant Fajr en croyant sincèrement que c'était encore la nuit. Il avait tort. Que se passe-t-il?",
          choices:[
          {id:"a",text:"Son jeûne est invalide — il doit le rattraper"},
          {id:"b",text:"Son jeûne peut rester valide car il a agi de bonne foi"},
          {id:"c",text:"Il doit s'abstenir le reste de la journée sans que cela compte"},
          {id:"d",text:"Sa Niyya était corrompue donc nul"}
          ],
          correctId:"b",
          explanation:"Le rite malikite prend en compte la bonne foi et l'erreur sincère. Celui qui mange juste avant Fajr en croyant sincèrement que c'était encore la nuit peut voir son jeûne valide selon certains avis malikites — il n'est pas soumis au Qaḍāʾ."
        },
        {
          id:"q-saw-32",
          text:"Pour un jeûne volontaire, la Niyya peut-elle être faite après Fajr?",
          choices:[
          {id:"a",text:"Non — la Niyya doit être la nuit pour tout jeûne"},
          {id:"b",text:"Oui — pour les la Niyya peut être faite jusqu'au si on n'a pas encore mangé"},
          {id:"c",text:"Seulement avant la prière du Ṣubḥ"},
          {id:"d",text:"Non — le jeûne commence obligatoirement dès Fajr"}
          ],
          correctId:"b",
          explanation:"DIFFÉRENCE IMPORTANTE: pour le Ramadan (obligatoire), la Niyya doit être faite la nuit. Pour les (volontaires), la Niyya peut être faite jusqu'au (déclin du soleil) si on n'a rien mangé depuis Fajr."
        },
        {
          id:"q-saw-33",
          text:"Samir oublie la Niyya la nuit et se réveille le matin de Ramadan. Peut-il jeûner ce jour?",
          choices:[
          {id:"a",text:"Non — sans Niyya nocturne, le jeûne de Ramadan est invalide"},
          {id:"b",text:"Oui — la Niyya peut être faite jusqu'à midi pour Ramadan"},
          {id:"c",text:"Oui car c'est un oubli"},
          {id:"d",text:"Seulement si c'est la première fois"}
          ],
          correctId:"a",
          explanation:"Pour le RAMADAN (jeûne obligatoire), la Niyya doit être arrêtée la nuit. Oublier la Niyya nocturne invalide le jeûne du jour suivant. Il faut rattraper ce jour. Ne pas confondre avec les où la Niyya peut être faite jusqu'au."
        },
        {
          id:"q-saw-34",
          text:"Le voyageur arrivé à destination peut-il encore rompre son jeûne ?",
          choices:[
          {id:"a",text:"Oui — il est toujours voyageur jusqu'au retour"},
          {id:"b",text:"Non — une fois arrivé et devenu résident, il ne peut plus rompre"},
          {id:"c",text:"Seulement si son voyage était de plus de 4 bornes"},
          {id:"d",text:"Seulement si c'est son premier Ramadan dans cette ville"}
          ],
          correctId:"b",
          explanation:"Une fois arrivé à destination et devenu résident (même temporairement), la permission de rompre le jeûne liée au voyage prend fin. La permission est liée à l'ÉTAT de voyageur — l'arrivée met fin à cet état."
        },
        {
          id:"q-saw-35",
          text:"Peut-on jeûner les 6 jours de Shawwāl selon le rite malikite ?",
          choices:[
          {id:"a",text:"Non — c'est une prohibée"},
          {id:"b",text:"Oui et très recommandé"},
          {id:"c",text:"Permis mais certains savants malikites classiques les ont déconseillés juste après Ramadan"},
          {id:"d",text:"Seulement si toutes les prières sont accomplies"}
          ],
          correctId:"c",
          explanation:"Les 6 jours de Shawwāl sont établis par hadīth. Cependant, certains savants malikites classiques les ont déconseillés (non interdits) par crainte que les gens croient qu'ils font partie de Ramadan. La position actuelle de l'école les permet."
        },
        {
          id:"q-saw-36",
          text:"Pour l'Eid al-Fitr, Sunna de manger selon la Risāla ?",
          choices:[
          {id:"a",text:"Après la prière de l'Eid"},
          {id:"b",text:"Avant d'aller à la prière de l'Eid"},
          {id:"c",text:"Au coucher du soleil de la nuit de l'Eid"},
          {id:"d",text:"Indifférent — Sunna précise"}
          ],
          correctId:"b",
          explanation:"La Risāla: «, » — pour l'Eid al-Fitr, manger AVANT la prièSunna. Pour l'Eid al-Adha, on mange après (de l'animal sacrifié)."
        },
        {
          id:"q-saw-37",
          text:"Une caresse intentionnelle avec désir qui conduit à une émission en Ramadan : que se passe-t-il ?",
          choices:[
          {id:"a",text:"Rien — sans rapport complet le jeûne reste entier"},
          {id:"b",text:"Le Qaḍāʾ seulement"},
          {id:"c",text:"La Kaffāra complète"},
          {id:"d",text:"Qaḍāʾ +"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Qaḍāʾ » — si la caresse/baiser conduit à une émission: Qaḍāʾ seulement. La Kaffāra complète n'est due que pour le rapport sexuel délibéré complet."
        },
        {
          id:"q-saw-38",
          text:"La femme menstruée doit-elle rattraper ses jours de jeûne de Ramadan ?",
          choices:[
          {id:"a",text:"Non — l'excuse est totale"},
          {id:"b",text:"Oui — elle rattrape le jeûne mais PAS la prière"},
          {id:"c",text:"Oui — elle rattrape jeûne et prière"},
          {id:"d",text:"Non — mais elle fait la à la place"}
          ],
          correctId:"b",
          explanation:"La rattrape les jours de jeûne de Ramadan MAIS PAS les prières. Cette asymétrie est fondamentale: le jeûne est rattrapable, la prière est définitivement dispensée pendant le."
        },
        {
          id:"q-saw-39",
          text:"<strong>SCÉNARIO </strong> Un diabétique doit se faire des injections d'insuline. Le jeûne rompt-il ?",
          choices:[
          {id:"a",text:"Oui — l'insuline est un liquide injecté"},
          {id:"b",text:"Non — l'insuline n'est pas une nourriture ; mais si médicalement dangereux, il est excusé et fait la ou Qaḍāʾ"},
          {id:"c",text:"Oui et sans exception possible"},
          {id:"d",text:"Non et sans aucune restriction"}
          ],
          correctId:"b",
          explanation:"L'insuline en injection ne rompt pas le jeûne (ce n'est pas de la nourriture). Mais si le diabétique est médicalement en danger de jeûner, il est excusé et fait le Qaḍāʾ ou la selon son état chronique."
        },
        {
          id:"q-saw-40",
          text:"Une perfusion de <u>glucose</u> (sucre) pendant le Ramadan rompt-elle le jeûne ?",
          choices:[
          {id:"a",text:"Non — une perfusion n'est pas de la nourriture"},
          {id:"b",text:"Oui — le glucose est une substance nourrissante introduite dans le corps"},
          {id:"c",text:"Seulement si la quantité dépasse 100ml"},
          {id:"d",text:"Non si c'est prescrit médicalement"}
          ],
          correctId:"b",
          explanation:"Contrairement aux médicaments simples, une perfusion de glucose (dextrose) ou de nourriture par voie intraveineuse constitue une alimentation et peut rompre le jeûne selon les savants malikites contemporains, car elle pourvoit à l'alimentation du corps."
        },
        {
          id:"q-saw-41",
          text:"Qui quitte l'Iʿtikāf volontairement avant sa fin — doit-il le refaire?",
          choices:[
          {id:"a",text:"Non — l' volontaire peut être interrompu sans conséquence"},
          {id:"b",text:"Oui — une fois commencé, il doit être complété ou refait"},
          {id:"c",text:"Seulement si c'était un de"},
          {id:"d",text:"Seulement s'il l'a interrompu 3 fois"}
          ],
          correctId:"b",
          explanation:"L'Akhḍarī: « » — quitter délibérément un acte d'adoration volontaire commencé impose de le refaire. Cela s'applique à l' volontaire."
        },
        {
          id:"q-saw-42",
          text:"L'Iʿtikāf — le muʿtakif peut-il contracter un mariage?",
          choices:[
          {id:"a",text:"Non — il est coupé du monde"},
          {id:"b",text:"Oui — le mariage est permis pendant l'"},
          {id:"c",text:"Seulement s'il sort brièvement pour cela"},
          {id:"d",text:"Seulement s'il est"}
          ],
          correctId:"b",
          explanation:"La Risāla précise que le muʿtakif peut être de la mosquée où il est en retraite. Il peut aussi, selon certains savants malikites, contracter un mariage sans sortir. Les interdictions portent sur sortir pour commerce, visite de malade et prière funèbre."
        },
        {
          id:"q-saw-43",
          text:"Ibrahim jeûne volontairement et réalise en cours de journée qu'il a des Qaḍāʾ en dette. Doit-il interrompre ce jeûne?",
          choices:[
          {id:"a",text:"Oui — le Qaḍāʾ est prioritaire sur les"},
          {id:"b",text:"Non — il complète ce jeûne volontaire et commence le Qaḍāʾ dès le lendemain"},
          {id:"c",text:"Oui et il doit faire le Qaḍāʾ le même jour"},
          {id:"d",text:"Non car il peut choisir l'ordre"}
          ],
          correctId:"b",
          explanation:"Une fois un jeûne volontaire commencé, l'interrompre sans raison impose le Qaḍāʾ de ce jour. Il vaut mieux le compléter et commencer le rattrapage dès le lendemain plutôt que d'interrompre et devoir rattraper les deux."
        },
        {
          id:"q-saw-44",
          text:"Le malade chronique incapable de jeûner ET de rattraper doit faire :",
          choices:[
          {id:"a",text:"Rien — il est totalement excusé"},
          {id:"b",text:"Payer la Zakāt pour compenser"},
          {id:"c",text:"La: nourrir un pauvre pour chaque jour de Ramadan"},
          {id:"d",text:"Jeûner partiellement"}
          ],
          correctId:"c",
          explanation:"Le malade chronique incapable de jeûner et de rattraper paie la: nourrir un pauvre par jour de Ramadan. C'est sa compensation permanente selon la jurisprudence malikite."
        },
        {
          id:"q-saw-45",
          text:"La personne en Ighmaʾ toute la journée de Ramadan — son jeûne est-il valide si elle avait la Niyya la nuit?",
          choices:[
          {id:"a",text:"Oui — la Niyya de la nuit suffit"},
          {id:"b",text:"Non — l'Ighmaʾ prolongé toute la journée invalide le jeûne"},
          {id:"c",text:"Oui si c'est involontaire"},
          {id:"d",text:"Oui mais il doit refaire par précaution"}
          ],
          correctId:"b",
          explanation:"L'Ighmaʾ (perte totale de conscience) qui dure toute la journée invalide le jeûne selon la jurisprudence malikite. Ce n'est pas comme le sommeil — l'inconscience totale prive le jeûneur de toute intentionnalité continue."
        },
        {
          id:"q-saw-46",
          text:"Le jeûne d'ʿĀshūrāʾ (10 Muharram) est dans le rite malikite:",
          choices:[
          {id:"a",text:"Obligatoire"},
          {id:"b",text:"Sunna"},
          {id:"c",text:"Recommandé léger"},
          {id:"d",text:"Permis sans statut particulier"}
          ],
          correctId:"b",
          explanation:"Le jeûne d' Sunna forte dans le rite malikite. Le Prophète ﷺ le jeûnait et encourageait la communauté. C'est l'un des jeûnes les plus méritoires en dehors de Ramadan."
        },
        {
          id:"q-saw-47",
          text:"Peut-on commencer le jeûne volontaire du jour si on n'a pas encore mangé, même après le lever du soleil ?",
          choices:[
          {id:"a",text:"Non — la Niyya doit être la nuit pour tout jeûne"},
          {id:"b",text:"Oui — pour les, la Niyya peut être faite jusqu'au si on n'a pas mangé"},
          {id:"c",text:"Seulement avant Ṣubḥ"},
          {id:"d",text:"Non — le jeûne commence obligatoirement dès Fajr"}
          ],
          correctId:"b",
          explanation:"Pour les jeûnes volontaires, la Niyya peut être faite jusqu'au (déclin du soleil — midi islamique) si on n'a rien mangé depuis Fajr. C'est une règle distincte du jeûne de Ramadan."
        },
        {
          id:"q-saw-48",
          text:"Leila rompt son jeûne de Qaḍāʾ délibérément. A-t-elle une obligation supplémentaire?",
          choices:[
          {id:"a",text:"Non — juste refaire ce jour de Qaḍāʾ"},
          {id:"b",text:"Elle doit nourrir un pauvre en plus"},
          {id:"c",text:"Elle doit faire la Kaffāra complète"},
          {id:"d",text:"Elle doit rattraper 2 jours à la place d'1"}
          ],
          correctId:"a",
          explanation:"La Risāla: « Qaḍāʾ Kaffāra » — pas de Kaffāra ni de supplémentaire pour la rupture délibérée du Qaḍāʾ. Simplement refaire ce jour."
        },
        {
          id:"q-saw-49",
          text:"Peut-on jeûner un de jeûne si on a des Qaḍāʾ en dette?",
          choices:[
          {id:"a",text:"Oui — le a priorité sur le Qaḍāʾ"},
          {id:"b",text:"Non — le Qaḍāʾ a priorité sur tout jeûne volontaire ou voué"},
          {id:"c",text:"Oui si le est lié à un évènement passé"},
          {id:"d",text:"Dépend si le est conditionnel ou absolu"}
          ],
          correctId:"b",
          explanation:"Le Qaḍāʾ de Ramadan est prioritaire sur les y compris les. On rattrape les prières de Ramadan avant tout jeûne volontaire ou voué. Les restent une dette à honorer, mais après avoir réglé le Qaḍāʾ."
        },
        {
          id:"q-saw-50",
          text:"Nadia a mangé juste après le Fajr en croyant que c'était encore le. C'était en réalité après l'aube. Sa Niyya était faite la nuit. Selon certains avis malikites:",
          choices:[
          {id:"a",text:"Son jeûne est invalide — manger après Fajr rompt toujours"},
          {id:"b",text:"Son jeûne peut rester valide si son erreur était sincère et plausible"},
          {id:"c",text:"Elle doit faire la Kaffāra car elle a mangé"},
          {id:"d",text:"Elle doit faire le Qaḍāʾ obligatoirement"}
          ],
          correctId:"b",
          explanation:"Selon certains avis malikites, l'erreur sincère et plausible sur le début de Fajr exclut le Qaḍāʾ et a fortiori la Kaffāra. C'est un cas où la jurisprudence malikite montre sa prise en compte de la bonne foi."
        },
        {
          id:"q-saw-51",
          text:"Un médicament sous forme de gouttes oculaires (collyres) est utilisé pendant le Ramadan. Le jeûne est-il affecté ?",
          choices:[
          {id:"a",text:"Oui — tout médicament externe rompt le jeûne"},
          {id:"b",text:"Non — si le médicament n'atteint pas la gorge, le jeûne reste valide"},
          {id:"c",text:"Oui si le médicament a un goût dans la gorge"},
          {id:"d",text:"Seulement s'il est prescrit par un médecin"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Tout médicament (liquide) pris par voie de l'œil, l'oreille ou le nez et qui arrive à la gorge invalide le jeûne et oblige le rattrapage ; s'il n'arrive pas à la gorge, le jeûne reste valide. » Les collyres qui ne traversent pas la gorge ne rompent donc pas le jeûne."
        },
        {
          id:"q-saw-52",
          text:"Des gouttes nasales utilisées en journée de Ramadan — le jeûne est-il à risque ?",
          choices:[
          {id:"a",text:"Non — les gouttes nasales sont comme les oculaires"},
          {id:"b",text:"Oui — le nez est proche de la gorge ; si les gouttes l'atteignent, le jeûne est rompu → s'abstenir sauf nécessité"},
          {id:"c",text:"Non si les gouttes sont en petite quantité"},
          {id:"d",text:"Jamais — les gouttes nasales n'atteignent jamais l'estomac"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr précise : « le nez est une issue plus proche de la gorge et que par le nez les gouttes de médicaments ont plus de risque d'arriver à la gorge ». Recommandation : s'abstenir en journée sauf nécessité médicale absolue. Si nécessité : utiliser et rattraper ce jour."
        },
        {
          id:"q-saw-53",
          text:"<strong>DIVERGENCE CONTEMPORAINE :</strong> L'aérosol bronchodilatateur (Ventoline) pour les asthmatiques rompt-il le jeûne selon les savants malikites contemporains ?",
          choices:[
          {id:"a",text:"Unanimité : ne rompt pas le jeûne"},
          {id:"b",text:"Unanimité : rompt le jeûne"},
          {id:"c",text:"Divergence : certains disent non (par analogie avec le rinçage de bouche), d'autres disent oui (car la composante liquide atteint la gorge)"},
          {id:"d",text:"Seulement s'il contient du glucose"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr expose la divergence : Opinion 1 (n'invalide pas) : l'assimile au rinçage de la bouche — quantité infime de liquide, le reste est de l'air. Opinion 2 (invalide) : la composante liquide atteint la gorge/estomac. Conseil pratique : si possible, reporter avant le Fadjr ou après l'Ifṭār. En cas de nécessité, utiliser et rattraper par précaution."
        },
        {
          id:"q-saw-54",
          text:"Une prise de sang médicale en journée de Ramadan rompt-elle le jeûne ?",
          choices:[
          {id:"a",text:"Oui — extraire du sang rompt le jeûne"},
          {id:"b",text:"Non — par analogie avec la Hijāma qui n'invalide pas le jeûne"},
          {id:"c",text:"Seulement si la quantité dépasse 10ml"},
          {id:"d",text:"Oui car le corps est affaibli"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « On en déduit ainsi que la prise de sang n'annule pas le jeûne » — par analogie directe avec la Hijāma (saignée) dont l'Imām Mālik dit qu'elle n'invalide pas le jeûne. Le principe : ce qui sort du corps ne rompt pas le jeûne (sauf les vomissements délibérés). Ce qui entre rompt."
        },
        {
          id:"q-saw-55",
          text:"Un patch de nicotine (anti-tabac) posé sur la peau pendant le Ramadan rompt-il le jeûne ?",
          choices:[
          {id:"a",text:"Oui — introduit une substance dans le corps"},
          {id:"b",text:"Non — par analogie avec les injections médicales qui n'atteignent pas l'estomac"},
          {id:"c",text:"Oui car la nicotine nourrit le corps"},
          {id:"d",text:"Seulement si le patch est posé sur une veine"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : la majorité des savants contemporains assimilent le patch de nicotine aux injections médicales — il diffuse dans le sang par la peau mais n'atteint pas l'estomac/la gorge. Il n'invalide donc pas le jeûne. En revanche, fumer une cigarette en journée de Ramadan invalide toujours le jeûne."
        },
        {
          id:"q-saw-56",
          text:"Ibrahim commence le Ramadan en France puis part au Maroc qui a commencé 1 jour plus tôt. Il a jeûné 28 jours. Les Marocains font l'Eid. Que doit-il faire ?",
          choices:[
          {id:"a",text:"Faire l'Eid avec eux — il a suivi son pays d'origine"},
          {id:"b",text:"Continuer à jeûner jusqu'à 29 jours (rattraper 1 jour) car on ne peut pas jeûner moins de 29 jours"},
          {id:"c",text:"Faire l'Eid et ne rien rattraper"},
          {id:"d",text:"Attendre de rentrer en France pour finir son Ramadan"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr (Ibn Rushd, Bidāyat al-Mujtahid) : on ne peut pas avoir jeûné moins de 29 jours. Si Ibrahim a jeûné 28 jours total et que le Maroc fait l'Eid → il rompt avec eux mais RATTRAPE 1 jour pour atteindre 29. La règle : suivre le pays où on se trouve ET respecter le minimum de 29 jours."
        },
        {
          id:"q-saw-57",
          text:"Sami commence le Ramadan en France (lundi) et voyage au Maroc qui a commencé dimanche (1 jour avant). Il arrive à 25 jours de jeûne. Les Marocains font leur Eid (26ème pour eux). Que fait Sami ?",
          choices:[
          {id:"a",text:"Il fait l'Eid avec eux — il a 25 jours, c'est assez"},
          {id:"b",text:"Il continue à jeûner jusqu'à ce que la France fasse son Eid"},
          {id:"c",text:"Il fait l'Eid avec les Marocains car on suit le pays où on se trouve, mais rattrape 4 jours pour atteindre 29"},
          {id:"d",text:"Il est excusé et n'a rien à rattraper"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr : la règle est de suivre le pays où on se trouve. Si les Marocains font l'Eid après le 26ème jour du Maroc (= 25ème pour Sami), il rompt avec eux. Mais 25 < 29 → il rattrape 4 jours pour atteindre le minimum légal de 29."
        },
        {
          id:"q-saw-58",
          text:"Laylat al-Qadr est cherchée dans:",
          choices:[
          {id:"a",text:"La nuit du 27 Ramadan exclusivement"},
          {id:"b",text:"Les 10 premières nuits de Ramadan"},
          {id:"c",text:"Les nuits impaires des 10 derniers jours de Ramadan"},
          {id:"d",text:"La nuit du 15 Ramadan (Shab-e-Barat)"}
          ],
          correctId:"c",
          explanation:"D'après les hadīth authentiques, Laylat al-Qadr se trouve parmi les nuits impaires des 10 derniers jours de Ramadan (21, 23, 25, 27, 29). La nuit du 27 est la plus fréquemment citée mais elle peut varier chaque année. D'où la pratique de l'Iʿtikāf pour ces 10 derniers jours."
        },
        {
          id:"q-saw-59",
          text:"Quel duʿāʾ est authentiquement transmis pour l selon le hadīth d'Aïcha?",
          choices:[
          {id:"a",text:""},
          {id:"b",text:""},
          {id:"c",text:""},
          {id:"d",text:""}
          ],
          correctId:"a",
          explanation:"Aïcha (ra) a rapporté: je demandai au Prophète ﷺ: « Si je sais quelle nuit est Laylat al-Qadr, que dois-je dire? » Il répondit: « Dis: ». — Rapporté par Ahmad et al-Tirmidhī (sahih)."
        },
        {
          id:"q-saw-60",
          text:"Une nutrition intraveineuse (glucose + protéines) est administrée à un patient hospitalisé pendant le Ramadan. Son jeûne est-il valide ?",
          choices:[
          {id:"a",text:"Oui — une injection ne rompt jamais le jeûne"},
          {id:"b",text:"Non — la nutrition parentérale alimente le corps et invalide le jeûne"},
          {id:"c",text:"Seulement si c'est du glucose"},
          {id:"d",text:"Valide si prescrit médicalement"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Plusieurs savants considèrent que les piqûres nutritives rendent invalide le jeûne. L'argument: parmi les piliers du jeûne c'est s'abstenir de nourriture de l'aube au coucher, or ces piqûres nutritives alimentent le corps. » Le patient hospitalisé sous nutrition parentérale est excusé et fait le Qaḍāʾ ou la."
        }]}},
    {id:"al-zakāt",title:"La Zakat",arabicTitle:"الزكاة",icon:"scales",description:"Niṣāb du grain, de l'or, de l'argent et des marchandises, , animaux soumis à Zakāt et selon la Risāla d'Ibn Abī Zayd al-Qayrawānī.",source:"",badge:{id:"badge-al-zakāt",title:"Purificateur de Biens",arabicTitle:"مزكّي الأموال",icon:"scales",color:'gold',unlockCondition:"Questionnaire \"Zakāt\" avec un score ≥ 85 %"},lessons:[        {
          id:"zak-01",
          title:"Définition et Fondements de la Zakāt",
          status:'available',
          content:[
            {"t": "lead", "v": "La Risāla consacre un chapitre entier à Zakāt (aumône légale), ses différents types et leurs moments d'acquittement. Zakāt agricole (due à la récolte) Zakāt sur les biens accumulés (due après une année entière)."},
            { t:'ar', v:"بَابٌ فِي زَكَاةِ العَينِ وَالحَرثِ وَالمَاشِيَةِ وَمَا يَخرُجُ مِنَ المَعدِنِ", n:"« Chapitre sur la al-zakāt (الزَّكَاة) de l'or/argent, des récoltes, des troupeaux et de ce qui sort des mines. » — Risāla d'Ibn Abī Zayd al-Qayrawānī" },
            {"t": "h", "v": "Zakāt et leur moment d'acquittement"},
            { t:'ul', v:[
              "<strong>Zakāt des récoltes (ḥarth)</strong> : acquittée au moment de la récolte (ḥaṣād).",
              "<strong>Zakāt de l'or, de l'argent et des troupeaux</strong> : acquittée à chaque (année solunaire complète).",
              "<strong>Zakāt des mines (maʿdin)</strong> : acquittée au moment de l'extraction, si le seuil est atteint.",
              "<strong>Zakāt al-Fiṭr</strong> : acquittée à l'aube du jour de l'Eid al-Fiṭr."
            ] },
            {"t": "h", "v": "Ce qu'est le (année d'imposition)"},
            {"t": "p", "v": "Le est l'année islamique lunaire complète (12 mois). Zakāt sur l'or, l'argent et les troupeaux n'est due qu'après qu'un complet se soit écoulé depuis l'acquisition ou le dernier acquittement. Si le bien est perdu avant le, Zakāt n'est plus due."},
            {"t": "note", "v": "Important : Zakāt agricole est due à la récolte et n'exige pas de. Elle doit être acquittée immédiatement lors de la cueillette ou de la moisson."}
          ]
        },
        {
          id:"zak-02",
          title:"Niṣāb et Ḥawl — Seuils et Conditions de la Zakāt",
          status:'available',
          content:[
            {"t": "lead", "v": "Chaque type de bien soumis à Zakāt Niṣāb Zakāt n'est pas obligatoire. La Risāla précise ces seuils avec détail."},
            {"t": "h", "v": "Niṣāb des récoltes agricoles"},
            {"t": "p", "v": "\" \" — Zakāt sur les grains et les fruits en deçà de 5 awsāq. Un = 60 ṣāʿs (le ṣāʿ du Prophète ﷺ = 4 mudd). Cela représente environ 653 kg de blé selon les estimations modernes. Le taux est de 1/10 (ʿushr) si irrigué par les pluies, et 1/20 si irrigué artificiellement."},
            {"t": "h", "v": "Niṣāb de l'or"},
            {"t": "p", "v": "\" \" — Zakāt sur l'or en deçà de 20 dinars. Sur 20 dinars ou plus, on sort le rub' al-ʿushr (1/4 du dixième = 2,5%). Si le montant dépasse 20, on calcule proportionnellement."},
            { t:'ar', v:"لَا زَكَاةَ مِنَ الذَّهَبِ فِي أَقَلَّ مِن عِشرِينَ دِينَارًا", n:"« Pas de al-zakāt (الزَّكَاة) sur l'or en deçà de vingt dinars. » — Risāla" },
            {"t": "h", "v": "Niṣāb de l'argent"},
            {"t": "p", "v": "\" \" — Zakāt sur l'argent en deçà de 200 dirhams (= 5 awāqī). Sur 200 dirhams : on sort 5 dirhams (= 2,5%). Pour ce qui dépasse, on calcule proportionnellement."},
            {"t": "h", "v": "Combinaison de l'or et l'argent"},
            {"t": "p", "v": "\" Zakāt\" — l'or et l'Niṣāb. Exemple : si quelqu'un possède 100 dirhams d'argent et 10 dinars d'or, Zakāt sur l'ensemble."},
            {"t": "note", "v": "Zakāt sur l'or, l'argent et les marchandises de commerce est uniformément le rub' al-ʿushr = 2,5% du capital."}
          ]
        },
        {
          id:"zak-03",
          title:"Les Biens Soumis à Zakāt",
          status:'available',
          content:[
            {"t": "lead", "v": "La Risāla détaille les catégories de biens soumis à Zakāt, avec les règles de combinaison (ḍamm) des denrées similaires et les cas particuliers."},
            {"t": "h", "v": "Les récoltes agricoles — règles de combinaison"},
            { t:'ul', v:[
              "<strong>Combinables :</strong> le blé (qamḥ), l'orge (shaʿīr) et le sult (orge fine) Niṣāb.",
              "<strong>Combinables :</strong> toutes les variétés de légumineuses entre elles.",
              "<strong>Combinables :</strong> toutes les variétés de dattes entre elles.",
              "<strong>Non combinables entre eux :</strong> le riz, le millet (dukhn), le sorgho (dhura) — chacun est un type à part et ne se combine pas avec les autres.",
              "<strong>Olives :</strong> soumises à Zakāt si elles atteignent 5 awsāq d'huile.",
              "<strong>Fruits et légumes frais :</strong> Zakāt sur eux."
            ] },
            {"t": "h", "v": "Les marchandises de commerce (ʿurūḍ al-tijāra)"},
            {"t": "p", "v": "Zakāt sur les marchandises détenues simplement, à moins qu'elles ne soient destinées au commerce. Si elles sont vendues après un ou plus, Zakāt est due sur leur prix de vente — pour un seul, quelle que soit la durée de détention précédant la vente."},
            {"t": "h", "v": "Les mines (maʿdin)"},
            {"t": "p", "v": "Zakāt est due sur ce qui sort d'une mine d'or ou d'argent si le poids atteint 20 dinars d'or ou 5 awāqī d'argent. Elle se calcule au moment de l'extraction, au taux de rub' al-ʿushr (2,5%). Si la mine est continue, tout ce qui en sort est ajouté au précédent. Si elle s'arrête et qu'un autre en prend possession, on recommence à zéro."},
            {"t": "h", "v": "Les troupeaux"},
            { t:'ul', v:[
              "La Risāla préNiṣāb pour les chameaux, les bovins et les ovins selon des tableaux précis.",
              "Ne sont pas acceptéZakāt : les jeunes animaux, les bêtes malades, les vieux animaux, les femelles gestantes, les mâles reproducteurs et les meilleurs animaux du troupeau.",
              "Zakāt n'est pas due sur les animaux nourris artificiellement (ʿalab) uniquement."
            ] }
          ]
        },
        {
          id:"zak-04",
          title:"Zakāt al-Fiṭr",
          status:'available',
          content:[
            {"t": "lead", "v": "Zakāt al-Fiṭr est une obligation particulière liée à la fin du mois de Ramadan. La Risāla en précise le statut, le montant, les bénéficiaires et le moment d'acquittement."},
            { t:'ar', v:"وَزَكَاةُ الفِطرِ سُنَّةٌ وَاجِبَةٌ، فَرَضَهَا رَسُولُ الله ﷺ عَلَى كُلِّ كَبِيرٍ أَو صَغِيرٍ، ذَكَرٍ أَو أُنثَى، حُرٍّ أَو عَبدٍ مِنَ المُسلِمِينَ صَاعًا عَن كُلِّ نَفسٍ", n:"« La al-zakāt (الزَّكَاة) al-Fiṭr est une السُّنَّة obligatoire. Elle a été imposée par le Prophète ﷺ sur tout Muslim, grand ou petit, homme ou femme, libre ou serviteur — un ṣāʿ par personne. »" },
            {"t": "h", "v": "Statut, montant et responsabilités"},
            { t:'ul', v:[
              "<strong>Statut :</strong> Sunna Wājiba.",
              "<strong>Montant :</strong> un ṣāʿ (= 4 mudd selon le ṣāʿ du Prophète ﷺ) par personne.",
              "<strong>Responsabilité :</strong> le maîZakāt al-Fiṭr de son serviteur (mmlūk). Le père acquitte celle de son enfant mineur qui n'a pas de biens propres.",
              "Le chef de famille l'acquitte aussi pour son épouse et les personnes à sa charge."
            ] },
            {"t": "h", "v": "De quoi peut-elle être acquittée ?"},
            {"t": "p", "v": "\" \" — elle s'acquitte à partir de la nourriture principale des habitants de la région : blé, orge, sorgho, dattes, fromage sec (aqiṭ), raisins secs, millet, riz. Si le blé d'épeautre (ʿalas) est la nourriture principale d'une région, elle peut aussi être acquittée en cette denrée."},
            {"t": "h", "v": "Le moment d'acquittement"},
            { t:'ul', v:[
              "<strong>Temps d'obligation :</strong> le lever de l'aube du jour de l'Eid al-Fiṭr, selon Ibn al-Qāsim et ce que Zurrūq établit comme l'avis dominant de l'école.",
              "<strong>Il est permis</strong> de l'acquitter un ou deux jours avant l'Eid.",
              "<strong>Sunna :</strong> l'acquitter avant d'aller sur le lieu de la prière de l'Eid."
            ] },
            {"t": "h", "v": "Pratique recommandée le jour de l'Eid"},
            {"t": "p", "v": "Il est recommandé pour l'Eid al-Fiṭr de manger avant d'aller à la prière. Pour l'Eid al-Adha, on n'est pas obligé de manger avant (on attend de manger de l'animal sacrifié). Il est recommandé dans les deux Eid de prendre un chemin différent à l'aller et au retour."},
            {"t": "note", "v": "Différence entre l'Eid al-Fiṭr et l'Eid al-Adha : manger avant la prièSunna pour l'Eid al-Fiṭr, mais pas pour l'Eid al-Adha."}
          ]
        },
        {
          id:"zak-05",
          title:"Les Bénéficiaires et Règles de Distribution",
          status:'available',
          content:[
            {"t": "lead", "v": "Zakāt obéit à des règles précises. La Risāla mentionne les règles de partenariat dans les troupeaux (khulṭāʾ) et ce qui ne peut pas êZakāt."},
            {"t": "h", "v": "Les huit catégories de bénéficiaires (Coran 9:60)"},
            { t:'ul', v:[
              "<strong>1. Al-Fuqarāʾ</strong> — les pauvres (sans ressources suffisantes).",
              "<strong>2. Al-Masākīn</strong> — les nécessiteux (avec quelques ressources insuffisantes).",
              "<strong>3. Al-ʿĀmilīn ʿalayhā</strong> — Zakāt.",
              "<strong>4. Al-Muʾallafa qulūbuhum</strong> — ceux dont les cœurs sont à gagner à l'Islam.",
              "<strong>5. Al-Riqāb</strong> — l'affranchissement des esclaves.",
              "<strong>6. Al-Ghārimīn</strong> — les endettés incapables de rembourser.",
              "<strong>7. Fī sabīl Allāh</strong> — dans la voie d'Allāh (les combattants).",
              "<strong>8. Ibn al-Sabīl</strong> — le voyageur sans ressources."
            ] },
            {"t": "h", "v": "La règle des partenaires (khulṭāʾ)"},
            {"t": "p", "v": "\" \" — deux partenaires dans l'élevage se compensent mutuellement de façon équitable. Il n'Zakāt sur celui dont la part personnelle n'Niṣāb. On ne doit ni séparer ce qui est réuni ni réunir ce qui est séparé pour avantager ou déZakāt — surtout en fin de."},
            {"t": "h", "v": "Ce qui ne peut pas être prélevé Zakāt"},
            { t:'ul', v:[
              "Les veaux (ʿajājīl) dans les bovins, ni les jeunes chameaux (fiṣlān) dans les chameaux — ils sont comptabilisés mais pas pris.",
              "Le bouc reproducteur (tays).",
              "Les animaux très âgés (harima).",
              "Les femelles gestantes (mākhiḍ).",
              "Le lait (ḥalūb al-katam — la laitière réservée).",
              "La brebis nourricière.",
              "Les meilleurs animaux du troupeau."
            ] },
            {"t": "note", "v": "Principe clé : Zakāt doit être prélevée sur un animal de valeur moyenne du troupeau, sans prendre ni le meilleur ni le plus mauvais. Le collecteur ne peut pas prendre ce qu'il veut, ni le propriétaire donner le moins bon."}
          ]
        },
        {
          id:"zak-06",
          title:"Zakāt al-Māshiya — Tableaux Détaillés des Troupeaux",
          status:'available',
          content:[
            {"t": "lead", "v": "La Zakāt sur les troupeaux concerne trois types d'animaux: les chameaux, les bovins et les ovins/caprins. Chaque type a son propre tableau de Niṣāb et de ce qui est dû. Ces tableaux sont donnés par la Risāla d'Ibn Abī Zayd et développés par les savants malikites."},
            {"t": "h", "v": "Zakāt — Chameaux"},
            { t:'ul', v:[
              "<strong>1 à 4 chameaux :</strong> rien (niṣāb non atteint).",
              "<strong>5 à 9 :</strong> 1 brebis.",
              "<strong>10 à 14 :</strong> 2 brebis.",
              "<strong>15 à 19 :</strong> 3 brebis.",
              "<strong>20 à 24 :</strong> 4 brebis.",
              "<strong>25 à 35:</strong> 1 (chamelle ayant complété 1 an et entrant dans sa 2ème année).",
              "<strong>36 à 45:</strong> 1 (chamelle ayant complété 2 ans, entrant dans sa 3ème).",
              "<strong>46 à 60:</strong> 1 (chamelle ayant complété 3 ans, entrant dans sa 4ème).",
              "<strong>61 à 75:</strong> 1 (chamelle ayant complété 4 ans, entrant dans sa 5ème).",
              "<strong>76 à 90:</strong> 2.",
              "<strong>91 à 120:</strong> 2.",
              "<strong>Au-delà de 120:</strong> pour chaque 40, une supplémentaire ; pour chaque 50, une."
            ] },
            {"t": "h", "v": "Zakāt — Bovins"},
            { t:'ul', v:[
              "<strong>1 à 29 :</strong> rien (niṣāb non atteint).",
              "<strong>30 à 39:</strong> 1 (jeune bovin, mâle ou femelle, ayant complété 2 ans et entrant dans sa 3ème).",
              "<strong>40 à 59:</strong> 1 (vache ayant complété 3 ans, entrant dans sa 4ème).",
              "<strong>60 à 69:</strong> 2.",
              "<strong>70 à 79:</strong> 1 + 1.",
              "<strong>80 à 89:</strong> 2.",
              "<strong>Au-delà:</strong> pour chaque 30, un ; pour chaque 40, une."
            ] },
            {"t": "h", "v": "Zakāt — Ovins et Caprins"},
            { t:'ul', v:[
              "<strong>1 à 39 :</strong> rien.",
              "<strong>40 à 120:</strong> 1 (1 ovin ou caprin).",
              "<strong>121 à 200:</strong> 2.",
              "<strong>201 à 399:</strong> 3.",
              "<strong>400 à 499:</strong> 4.",
              "<strong>Au-delà de 400:</strong> pour chaque 100 têtes supplémentaires, 1 de plus.",
              "Ovins et caprins SE COMBINENT pour le niṣāb (ils sont du même type)."
            ] },
            {"t": "h", "v": "Règles communes aux troupeaux"},
            { t:'ul', v:[
              "<strong>Ne pas prendre :</strong> les jeunes animaux, les femelles gestantes, les animaux très vieux, le bouc reproducteur, le meilleur animal du troupeau.",
              "<strong>Prendre :</strong> un animal de valeur moyenne du troupeau — ni le meilleur ni le plus mauvais.",
              "<strong> (partenariat):</strong> deux éleveurs qui mettent leur troupeau en commun se partagent la Zakāt proportionnellement, même si individuellement aucun n'atteint le niṣāb.",
              "exige: troupeau réuni (même pâturage, même source d'eau, même berger, même trayeur), pendant tout ou la majorité du Ḥawl.",
              "Il est interdit de séparer les troupeaux réunis ou de réunir les troupeaux séparés pour diminuer ou augmenter la Zakāt."
            ] },
            {"t": "note", "v": "La Zakāt ne s'applique qu'aux animaux élevés en pâturage libre. Les animaux nourris artificiellement toute l'année: pas de Zakāt sur eux selon le rite malikite."}
          ]
        },
        {
          id:"zak-07",
          title:"Zakāt Contemporaine — Revenus, Salaires et Questions Nouvelles",
          status:'available',
          content:[
            {"t": "lead", "v": "Le contemporain a étendu les principes classiques de la Zakāt aux réalités économiques modernes: salaires, comptes bancaires, actions, assurances, etc. Ce chapitre présente les positions malikites contemporaines issues de doctrine-malikite.fr et des savants."},
            {"t": "h", "v": "Zakāt — Zakāt sur les salaires"},
            {"t": "p", "v": "La question centrale: comment appliquer le Ḥawl à des revenus perçus mensuellement? La position malikite contemporaine dominante:"},
            { t:'ul', v:[
              "On ne calcule pas le Ḥawl sur chaque salaire séparément (trop complexe en pratique).",
              "<strong>Méthode pratique adoptée:</strong> on choisit une date anniversaire fixe (début de l'année islamique ou autre). On comptabilise l'épargne disponible à cette date. Si elle dépasse le Niṣāb → Zakāt de 2,5%.",
              "On peut aussi additionner tous les salaires sur l'année, déduire les dépenses essentielles et les dettes, et zakātter sur ce qui reste si ≥ Niṣāb.",
              "Les dépenses essentielles (logement, nourriture, vêtements habituels, soins médicaux) sont déduites avant le calcul.",
              "Les dettes à court terme sont déduites — pas les dettes à long terme (selon les savants)."
            ] },
            {"t": "h", "v": "Zakāt — Actions en bourse et fonds d'investissement"},
            { t:'ul', v:[
              "<strong>Sociétés commerciales:</strong> la Zakāt est due sur la valeur totale des actions à la fin du Ḥawl (capital + bénéfices) au taux de 2,5%.",
              "<strong>Sociétés industrielles :</strong> les machines et immeubles sont exonérés (comme l'outillage personnel) ; on zakātte sur les marchandises destinées à la vente et les liquidités.",
              "<strong>Fonds islamiques:</strong> on zakātte sur la valeur liquidative de la part à la fin du Ḥawl.",
              "Actions détenues moins d'un Ḥawl: même règle que les marchandises — zakāt due sur le prix de vente à la fin du Ḥawl depuis l'acquisition."
            ] },
            {"t": "h", "v": "Zakāt — Assurances et fonds de retraite"},
            { t:'ul', v:[
              "<strong>Fonds de retraite (non récupérable avant la retraite):</strong> pas de Zakāt annuelle tant qu'on ne peut pas y accéder. Dès la réception des fonds: un seul Ḥawl de Zakāt (comme la créance).",
              "<strong>Assurance-vie à capitalisation:</strong> zakāt sur la valeur de rachat (la valeur accessible) chaque année si ≥ Niṣāb.",
              "<strong>Assurances non islamiques :</strong> question complexe — certains savants disent de zakātter sur ce qu'on paie dedans ; d'autres sur ce qu'on pourrait recevoir. Sujet de fatwas en cours."
            ] },
            {"t": "h", "v": "Zakāt — Bénéficiaires et règles supplémentaires"},
            { t:'ul', v:[
              "La Zakāt al-Fiṭr NE peut pas être donnée à un non-Muslim (contrairement à la zakāt al-māl où les peuvent inclure des non-Muslims).",
              "On ne peut pas la donner à ceux légalement à notre charge (parents, enfants, épouse).",
              "La Zakāt al-Fiṭr doit être distribuée localement en priorité — transport vers une autre ville seulement s'il y a surplus ou besoin plus grand.",
              "<strong>La répartition entre les 8 catégories:</strong> pour la Zakāt al-Fiṭr, on donne aux fuqarāʾ et masākīn en priorité — les autres catégories sont secondaires.",
              "<strong>Peut-on la payer en argent ?</strong> La majorité des savants malikites classiques dit non (en nourriture). Certains contemporains l'autorisent si la nourriture est difficile à distribuer. La sécurité est de donner en nourriture."
            ] },
            {"t": "h", "v": "Niṣāb en valeurs actuelles (estimation)"},
            { t:'ul', v:[
              "<strong>Or :</strong> 20 dinars = environ 85 grammes d'or (estimation contemporaine la plus usitée).",
              "<strong>Argent :</strong> 200 dirhams = environ 595 grammes d'argent.",
              "<strong>Utiliser lequel ?</strong> Divergence contemporaine. Utiliser le niṣāb de l'argent (plus bas) avantage les pauvres ; utiliser celui de l'or (plus haut) avantage les propriétaires. Beaucoup de savants contemporains recommandent le niṣāb de l'argent pour maximiser la zakāt."
            ] },
            {"t": "note", "v": "Point clé de la zakāt contemporaine : l'intention doit accompagner le paiement. Payer via virement bancaire ou une application est valide à condition que l'intention soit formée. Il est recommandé de préciser mentalement « ceci est ma zakāt » au moment du paiement ou lors de sa séparation du reste des fonds."}
          ]
        }],quiz:{id:"quiz-al-zakāt",title:"Questionnaire — Zakāt",status:"available",score:null,questions:[        {
          id:"q-zak-01",
          text:"La <strong>Zakāt</strong> sur les récoltes agricoles est due à quel moment?",
          choices:[
          {id:"a",text:"Après un Ḥawl (année lunaire)"},
          {id:"b",text:"À la récolte"},
          {id:"c",text:"Au début de chaque mois lunaire"},
          {id:"d",text:"En même temps que la Zakāt sur l'or"}
          ],
          correctId:"b",
          explanation:"La Risāla: «: » — la Zakāt agricole est due le jour de la récolte/moisson. Elle n'attend pas le Ḥawl, contrairement à la Zakāt sur l'or, l'argent et les troupeaux."
        },
        {
          id:"q-zak-02",
          text:"Quel est le <strong>Niṣāb</strong> des récoltes agricoles?",
          choices:[
          {id:"a",text:"3"},
          {id:"b",text:"5"},
          {id:"c",text:"10"},
          {id:"d",text:"20"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Zakāt » — le est 5. Un = 60 selon le du Prophète ﷺ."
        },
        {
          id:"q-zak-03",
          text:"Le taux de Zakāt agricole varie-t-il?",
          choices:[
          {id:"a",text:"Toujours 2,5%"},
          {id:"b",text:"Toujours 10%"},
          {id:"c",text:"10% si irrigation naturelle (pluie/source), 5% si irrigation artificielle"},
          {id:"d",text:"Toujours 5%"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr : « le dixième si la terre est irriguée naturellement (pluie, sources) ; le demi-dixième si irriguée par des moyens humains (machines) ». Le coût de l'irrigation réduit la quote-part."
        },
        {
          id:"q-zak-04",
          text:"Quel est le <strong>Niṣāb</strong> de la Zakāt sur l'or?",
          choices:[
          {id:"a",text:"10 dinars"},
          {id:"b",text:"20 dinars"},
          {id:"c",text:"40 dinars"},
          {id:"d",text:"85 grammes"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Zakāt » — le de l'or est 20 dinars. Sur ce montant on sort le (2,5%)."
        },
        {
          id:"q-zak-05",
          text:"Quel est le <strong>Niṣāb</strong> de la Zakāt sur l'argent?",
          choices:[
          {id:"a",text:"100 dirhams"},
          {id:"b",text:"200 dirhams (5 )"},
          {id:"c",text:"300 dirhams"},
          {id:"d",text:"500 dirhams"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Zakāt » — le de l'argent est 200 dirhams (= 5 ). Sur ce montant on sort 5 dirhams (2,5%)."
        },
        {
          id:"q-zak-06",
          text:"Aminata possède 19 dinars d'or et 200 dirhams d'argent. La Zakāt est-elle due?",
          choices:[
          {id:"a",text:"Non — le de l'or (20 dinars) n'est pas atteint"},
          {id:"b",text:"Oui — on combine l'or et l'argent, le de l'argent est atteint"},
          {id:"c",text:"Seulement sur les 200 dirhams d'argent"},
          {id:"d",text:"Non — 19 dinars et 200 dirhams ne forment pas un complet"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Zakāt » — or et argent se combinent. Les 200 dirhams d'argent seuls atteignent le de l'argent. Donc la Zakāt est due sur l'ensemble."
        },
        {
          id:"q-zak-07",
          text:"Omar possède des bijoux personnels en or (usage courant, non destinés au commerce). Doit-il la Zakāt?",
          choices:[
          {id:"a",text:"Oui — tout or impose la Zakāt"},
          {id:"b",text:"Non — le rite malikite exempte les bijoux personnels d'usage courant"},
          {id:"c",text:"Oui mais au taux de 1,25%"},
          {id:"d",text:"Seulement si leur valeur dépasse le"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Pas de zakât sur les bijoux (sauf s'ils sont utilisés pour le commerce ou épargnés pour augmenter leur valeur et les vendre) ». Cette exemption des bijoux personnels est une spécificité malikite importante."
        },
        {
          id:"q-zak-08",
          text:"Quand la Zakāt sur les marchandises de commerce devient-elle due?",
          choices:[
          {id:"a",text:"Dès l'achat si elles atteignent le"},
          {id:"b",text:"Après 6 mois"},
          {id:"c",text:"Après un Ḥawl depuis l'acquisition du capital — calculée sur le prix de vente"},
          {id:"d",text:"Au moment du bénéfice"}
          ],
          correctId:"c",
          explanation:"La Risāla: « Zakāt, » — due sur le prix de vente après un Ḥawl, même si les marchandises ont valu moins pendant l'année."
        },
        {
          id:"q-zak-09",
          text:"Khalid possède 2000€ en janvier, 300€ en juillet, 1500€ en décembre. La Zakāt est-elle due?",
          choices:[
          {id:"a",text:"Sur 2000€ (début d'année)"},
          {id:"b",text:"Aucune — le n'était plus atteint en juillet"},
          {id:"c",text:"Sur 1500€ si le est atteint en fin d'année"},
          {id:"d",text:"Sur la moyenne : 1266€"}
          ],
          correctId:"c",
          explanation:"Les malikites considèrent: si le est atteint au DÉBUT et à la FIN de l'année lunaire, la Zakāt est due. La clé est le montant en FIN de Ḥawl. 1500€ ≥ → Zakāt due sur 1500€."
        },
        {
          id:"q-zak-10",
          text:"La <strong>Zakāt al-Fiṭr</strong> est-elle due sur les enfants en bas âge?",
          choices:[
          {id:"a",text:"Non — les enfants n'y sont pas assujettis"},
          {id:"b",text:"Oui — le père (ou tuteur) l'acquitte pour eux"},
          {id:"c",text:"Seulement si l'enfant a plus de 7 ans"},
          {id:"d",text:"Seulement si l'enfant a des revenus propres"}
          ],
          correctId:"b",
          explanation:"La Risāla: « ﷺ » — elle est due pour tout le monde. Le père acquitte celle de son enfant mineur sans biens propres."
        },
        {
          id:"q-zak-11",
          text:"Peut-on donner la Zakāt al-Fiṭr en argent liquide selon le rite malikite?",
          choices:[
          {id:"a",text:"Oui c'est même préférable"},
          {id:"b",text:"Non — elle doit être donnée en nourriture (denrée)"},
          {id:"c",text:"Oui si l' l'autorise"},
          {id:"d",text:"Permis avec désaccord"}
          ],
          correctId:"b",
          explanation:"Selon la Risāla, la Zakāt al-Fiṭr s'acquitte en nourriture. Les savants malikites classiques n'autorisent pas le remplacement par l'argent, contrairement à l'avis hanafite. Certains contemporains ont ouvert à l'argent mais c'est minoritaire dans l'école."
        },
        {
          id:"q-zak-12",
          text:"Sur quel montant calcule-t-on la Zakāt sur un capital commercial?",
          choices:[
          {id:"a",text:"Sur le capital initial seulement"},
          {id:"b",text:"Sur le bénéfice seulement"},
          {id:"c",text:"Sur le total (capital + bénéfice net) à la fin du Ḥawl"},
          {id:"d",text:"Sur la moyenne annuelle"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr : « le montant de la zakât comprend le total du bénéfice net et du capital après l'écoulement de l'année lunaire ». On zakātte sur la totalité — pas seulement le bénéfice."
        },
        {
          id:"q-zak-13",
          text:"Farid reçoit un héritage de 10 000€. Depuis quand commence son Ḥawl?",
          choices:[
          {id:"a",text:"Depuis qu'il l'a reçu"},
          {id:"b",text:"Depuis le lendemain de la réception"},
          {id:"c",text:"Depuis le décès du testateur"},
          {id:"d",text:"Depuis la prise de possession physique"}
          ],
          correctId:"a",
          explanation:"Le Ḥawl commence à partir du moment où on est devenu propriétaire. La réception de l'héritage marque le début du Ḥawl pour l'argent liquide hérité."
        },
        {
          id:"q-zak-14",
          text:"Peut-on donner la Zakāt pour construire une mosquée?",
          choices:[
          {id:"a",text:"Oui — c'est dans la voie d'Allah"},
          {id:"b",text:"Non — la Zakāt ne peut pas servir à construire une mosquée selon le rite malikite"},
          {id:"c",text:"Oui si la mosquée est dans un pays pauvre"},
          {id:"d",text:"Seulement pour les pauvres de cette mosquée"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Chez les malikites la zakât ne peut pas être donnée pour construire une mosquée ». Les 8 catégories de bénéficiaires (Coran 9:60) sont limitatives — la construction de mosquées n'y figure pas."
        },
        {
          id:"q-zak-15",
          text:"Peut-on donner sa Zakāt à ses parents dans le besoin?",
          choices:[
          {id:"a",text:"Oui — les proches sont prioritaires"},
          {id:"b",text:"Non — on ne peut pas donner la Zakāt aux personnes légalement à sa charge"},
          {id:"c",text:"Seulement si on ne peut pas subvenir à leurs besoins"},
          {id:"d",text:"Oui si ce sont les parents du côté maternel"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Elle ne peut pas être donnée aux personnes légalement à notre charge: comme nos parents ou nos enfants. Ni à ceux qui sont à la charge obligatoire de quelqu'un d'aisé ». La légale empêche la Zakāt envers les mêmes personnes."
        },
        {
          id:"q-zak-16",
          text:"Peut-on donner sa Zakāt à des parents pauvres qui <u>ne sont pas</u> à sa charge légale?",
          choices:[
          {id:"a",text:"Non — la famille ne peut jamais recevoir la Zakāt"},
          {id:"b",text:"Oui — et c'est doublement méritoire"},
          {id:"c",text:"Seulement s'ils habitent loin"},
          {id:"d",text:"Seulement avec l'autorisation d'un savant"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Le fait de la donner aux proches pauvres implique la double récompense : celle de renouer le lien de sang et celle de l'aumône ». Les proches pauvres NON à charge légale sont même prioritaires."
        },
        {
          id:"q-zak-17",
          text:"Ibrahim possède 500€ d'épargne mais une dette de 600€. La Zakāt est-elle due?",
          choices:[
          {id:"a",text:"Oui — la dette n'annule pas la Zakāt sur la monnaie"},
          {id:"b",text:"Non — le est calculé après déduction des dettes"},
          {id:"c",text:"Partiellement — sur la différence"},
          {id:"d",text:"Oui sur 500€ complets"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « le Niçâb doit être calculé après avoir purgé les dettes et pourvu aux besoins essentiels ». Si la dette dépasse l'épargne, pas de → pas de Zakāt sur la monnaie."
        },
        {
          id:"q-zak-18",
          text:"Les dettes annulent-elles la Zakāt sur les récoltes agricoles?",
          choices:[
          {id:"a",text:"Oui — comme pour la monnaie"},
          {id:"b",text:"Non — les dettes n'annulent pas la Zakāt sur les grains, fruits et bétail"},
          {id:"c",text:"Seulement si la dette est antérieure à la récolte"},
          {id:"d",text:"Seulement pour les petits agriculteurs"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « La dette n'annule en rien la zakât lorsqu'il s'agit de la zakât sur les grains, les fruits et le bétail ». DIFFÉRENCE IMPORTANTE avec la Zakāt sur la monnaie où les dettes sont déduites."
        },
        {
          id:"q-zak-19",
          text:"Un agriculteur possède du blé et du riz. Les additionne-t-il pour atteindre le?",
          choices:[
          {id:"a",text:"Oui — toutes les céréales se combinent"},
          {id:"b",text:"Non — blé et riz sont des types différents et ne se combinent pas"},
          {id:"c",text:"Seulement si cultivés sur la même terre"},
          {id:"d",text:"Oui mais au taux de la récolte la plus faible"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — riz, millet et sorgho sont des types à part non combinables. En revanche, blé, orge et sult SE combinent entre eux."
        },
        {
          id:"q-zak-20",
          text:"Quel est le des troupeaux ovins/caprins?",
          choices:[
          {id:"a",text:"10 têtes"},
          {id:"b",text:"20 têtes"},
          {id:"c",text:"40 têtes"},
          {id:"d",text:"100 têtes"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr: pour les ovins/caprins, le est de 40 bêtes (de 40 à 120 → un ovin d'un an ; de 121 à 200 → deux ovins ; de 201 à 300 → trois)."
        },
        {
          id:"q-zak-21",
          text:"Peut-on prendre de jeunes animaux comme paiement de la Zakāt sur les bovins?",
          choices:[
          {id:"a",text:"Oui si leur valeur est équivalente"},
          {id:"b",text:"Non — ils sont comptabilisés dans le troupeau mais ne peuvent pas être prélevés"},
          {id:"c",text:"Seulement s'ils ont 6 mois ou plus"},
          {id:"d",text:"Oui si l'éleveur préfère"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — les jeunes animaux sont comptabilisés dans le troupeau MAIS ne peuvent pas être prélevés comme paiement de la Zakāt."
        },
        {
          id:"q-zak-22",
          text:"Qui acquitte la Zakāt al-Fiṭr d'un serviteur (esclave)?",
          choices:[
          {id:"a",text:"Le serviteur lui-même"},
          {id:"b",text:"Son maître"},
          {id:"c",text:"La communauté"},
          {id:"d",text:"Elle n'est pas due pour les serviteurs"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — c'est le maître qui acquitte la Zakāt al-Fiṭr pour son serviteur."
        },
        {
          id:"q-zak-23",
          text:"Depuis quand le Ḥawl des bénéfices commerciaux commence-t-il?",
          choices:[
          {id:"a",text:"Depuis le jour du bénéfice"},
          {id:"b",text:"Depuis que le capital original a été possédé"},
          {id:"c",text:"Depuis le premier jour de l'année islamique"},
          {id:"d",text:"Depuis la vente qui génère le bénéfice"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « la période annuelle comptée pour la zakât sur un profit est la période annuelle de son capital (l'origine) ». Le Ḥawl du bénéfice se calcule depuis la possession du CAPITAL, non depuis le bénéfice."
        },
        {
          id:"q-zak-24",
          text:"Khalid acquiert une marchandise pour 500€ en janvier et la revend pour 800€ en août (7 mois). Doit-il la Zakāt maintenant?",
          choices:[
          {id:"a",text:"Oui immédiatement sur 800€"},
          {id:"b",text:"Non — il attend la fin de son Ḥawl (janvier suivant) pour payer sur 800€"},
          {id:"c",text:"Oui mais seulement sur le bénéfice (300€)"},
          {id:"d",text:"Non — vendre avant le Ḥawl exempte"}
          ],
          correctId:"b",
          explanation:"Le Ḥawl commence depuis l'acquisition du capital (janvier). La vente ne déclenche pas immédiatement la Zakāt — elle révèle la valeur sur laquelle on zakāttera à la fin du Ḥawl. Il attend janvier et paye alors 2,5% sur 800€."
        },
        {
          id:"q-zak-25",
          text:"Peut-on transporter la Zakāt vers une autre ville si les gens là-bas sont plus dans le besoin?",
          choices:[
          {id:"a",text:"Non — la Zakāt ne peut jamais quitter la ville où elle est due"},
          {id:"b",text:"Oui toujours"},
          {id:"c",text:"Oui s'il y a surplus local ou besoin plus grand ailleurs"},
          {id:"d",text:"Seulement dans le même pays"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr cite la position malikite: « ». La règle par défaut est de distribuer sur place — exception si surplus local ou besoin plus grand ailleurs."
        },
        {
          id:"q-zak-26",
          text:"Ibrahim a 10 brebis et Karim 35. Ils mettent en commun leur troupeau. La Zakāt est-elle due?",
          choices:[
          {id:"a",text:"Non — aucun n'atteint 40 brebis individuellement"},
          {id:"b",text:"Oui — le troupeau combiné (45) atteint le, ils se partagent proportionnellement"},
          {id:"c",text:"Non — la n'existe que pour les bovins"},
          {id:"d",text:"Oui mais seulement sur la part dépassant 40"}
          ],
          correctId:"b",
          explanation:"La Risāla: « » — deux associés se partagent la Zakāt. 45 brebis ≥ 40 → une brebis due. Ibrahim: 10/45 ; Karim: 35/45."
        },
        {
          id:"q-zak-27",
          text:"Un créancier a 5000€ de créance non remboursée depuis 3 ans. Combien d'années de Zakāt doit-il payer?",
          choices:[
          {id:"a",text:"3 années de Zakāt"},
          {id:"b",text:"UNE SEULE année lors du remboursement"},
          {id:"c",text:"Aucune — les créances sont exemptées"},
          {id:"d",text:"Seulement les 2 premières années"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Si cette valeur est demeurée plusieurs années entre les mains du débiteur, le créancier ne paiera la zakât que pour UNE ANNÉE à partir du moment où il l'aura recouvrée ». Pas de Zakāt annuelle cumulée sur une créance inaccessible."
        },
        {
          id:"q-zak-28",
          text:"La Zakāt est-elle due sur les vêtements et meubles personnels?",
          choices:[
          {id:"a",text:"Oui si leur valeur totale dépasse le"},
          {id:"b",text:"Seulement sur les vêtements de luxe"},
          {id:"c",text:"Non — aucune Zakāt sur les biens à usage personnel"},
          {id:"d",text:"Seulement sur les meubles non utilisés régulièrement"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr : « Nul n'est tenu de payer la zakât sur son esclave, son cheval, ni sa maison, ni les acquisitions destinées à l'usage personnel ». Les biens à usage personnel sont exemptés quelle que soit leur valeur."
        },
        {
          id:"q-zak-29",
          text:"<strong>SCÉNARIO CALCUL :</strong> Ali récolte 600 kg de blé irrigué par la pluie. Combien doit-il donner ?",
          choices:[
          {id:"a",text:"6 kg (1%)"},
          {id:"b",text:"30 kg (5%)"},
          {id:"c",text:"60 kg (10%)"},
          {id:"d",text:"15 kg (2,5%)"}
          ],
          correctId:"c",
          explanation:"Irrigation naturelle (pluie/source) → = 1/10 = 10%. 600 kg × 10% = 60 kg. Si irrigation artificielle: 5% = 30 kg."
        },
        {
          id:"q-zak-30",
          text:"Doit-on dire explicitement au pauvre qu'on lui donne la Zakāt?",
          choices:[
          {id:"a",text:"Oui — transparence obligatoire"},
          {id:"b",text:"Non — c'est makrūh car cela blesse la dignité du pauvre"},
          {id:"c",text:"Seulement si le pauvre le demande"},
          {id:"d",text:"Oui car cela lui permet de faire du duʿāʾ"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « » — il est makrūh de dire aux pauvres que c'est leur Zakāt car cela brise leur dignité."
        },
        {
          id:"q-zak-31",
          text:"La Zakāt sur les mines est-elle soumise au Ḥawl?",
          choices:[
          {id:"a",text:"Oui — comme pour l'or et l'argent"},
          {id:"b",text:"Non — due immédiatement lors de l'extraction si le est atteint"},
          {id:"c",text:"Seulement si la mine est continue"},
          {id:"d",text:"Après 6 mois d'exploitation"}
          ],
          correctId:"b",
          explanation:"La Risāla: « Zakāt » — due IMMÉDIATEMENT à l'extraction, dès que le est atteint. Pas de Ḥawl pour les mines."
        },
        {
          id:"q-zak-32",
          text:"Peut-on donner la Zakāt aux Banū Hāshim (famille du Prophète ﷺ)?",
          choices:[
          {id:"a",text:"Oui — la fraternité islamique prime"},
          {id:"b",text:"Non — par respect pour cette famille, ils ne reçoivent pas la Zakāt"},
          {id:"c",text:"Seulement en cas de nécessité absolue"},
          {id:"d",text:"Oui si ce sont des femmes"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « Les pauvres et les nécessiteux qui peuvent recevoir la zakât doivent obligatoirement... ne pas faire partie de la descendance des Banî Hāshim ». Cette exception par respect est établie par hadīth."
        },
        {
          id:"q-zak-33",
          text:"Des actions en bourse représentant une activité commerciale sont-elles soumises à la Zakāt?",
          choices:[
          {id:"a",text:"À chaque dividende"},
          {id:"b",text:"Annuellement sur leur valeur totale au terme du Ḥawl"},
          {id:"c",text:"Seulement lors de la vente"},
          {id:"d",text:"Jamais — les actions ne sont pas soumises à la Zakāt"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « les entreprises de type société industrielle et/ou commerciale font l'objet du prélèvement annuel de la Zakât qui touche les marchandises destinées à la vente ». Les actions commerciales: 2,5% de leur valeur à la fin du Ḥawl."
        },
        {
          id:"q-zak-34",
          text:"Nadia reçoit son salaire en janvier (2000€). Elle dépense tout en cours d'année et garde 500€ en décembre. Niṣāb = 1000€. Doit-elle la Zakāt?",
          choices:[
          {id:"a",text:"Oui — son salaire dépassait le"},
          {id:"b",text:"Non — le n'est pas atteint à la FIN du Ḥawl"},
          {id:"c",text:"Oui sur la différence entre salaire et dépenses"},
          {id:"d",text:"Oui car elle a eu le pendant une partie de l'année"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Le montant considéré pour la zakât est celui de la FIN de l'année ». 500€ < 1000€ → pas de Zakāt. La clé est le montant en FIN du Ḥawl."
        },
        {
          id:"q-zak-35",
          text:"La Zakāt peut-elle être donnée en avance (avant la fin du Ḥawl)?",
          choices:[
          {id:"a",text:"Non — elle doit obligatoirement attendre la fin du Ḥawl"},
          {id:"b",text:"Oui — certains savants malikites permettent l'anticipation si le est atteint"},
          {id:"c",text:"Seulement pour Zakāt al-Fiṭr"},
          {id:"d",text:"Oui mais d'un mois maximum"}
          ],
          correctId:"b",
          explanation:"Certains savants malikites permettent de donner la Zakāt avant la fin du Ḥawl (si le est déjà atteint) pour faciliter les familles dans le besoin, notamment avant Ramadan."
        },
        {
          id:"q-zak-36",
          text:"Le cheval est-il soumis à la Zakāt selon le rite malikite?",
          choices:[
          {id:"a",text:"Oui — comme toute monture de valeur"},
          {id:"b",text:"Non — le rite malikite exempte les chevaux"},
          {id:"c",text:"Seulement les chevaux de course"},
          {id:"d",text:"Oui si le troupeau dépasse 5 chevaux"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Pas de zakât sur les chevaux » selon le rite malikite. Les chameaux en revanche sont soumis à la Zakāt selon un tableau détaillé de la Risāla."
        },
        {
          id:"q-zak-37",
          text:"Ibrahim possède 45 chameaux. Quel animal donne-t-il comme Zakāt?",
          choices:[
          {id:"a",text:"Une chamelle d'un an"},
          {id:"b",text:"Deux chamelles de deux ans"},
          {id:"c",text:"Une chamelle entrée dans sa troisième année"},
          {id:"d",text:"Une chamelle entrée dans sa deuxième année"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr: de 36 à 45 chameaux → une (chamelle qui a achevé 2 ans et entré dans la 3ème). Les tables des chameaux sont précises."
        },
        {
          id:"q-zak-38",
          text:"La Zakāt est-elle due sur le Māl du mineur?",
          choices:[
          {id:"a",text:"Non — le mineur est excusé"},
          {id:"b",text:"Oui — le tuteur l'acquitte à sa place"},
          {id:"c",text:"Seulement s'il approche de la puberté"},
          {id:"d",text:"Seulement sur les récoltes"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « La zakât n'est pas une obligation pour l'enfant ni le fou, mais c'est le tuteur légal qui aura obligation de s'en acquitter de leur argent ». Le mineur et le fou sont exemptés personnellement mais leur tuteur paye."
        },
        {
          id:"q-zak-39",
          text:"Aminata donne sa Zakāt à sa sœur pauvre (non à sa charge légale). Est-ce valide?",
          choices:[
          {id:"a",text:"Non — la famille ne peut jamais recevoir la Zakāt"},
          {id:"b",text:"Oui — et c'est doublement méritoire"},
          {id:"c",text:"Seulement si la sœur est dans un autre pays"},
          {id:"d",text:"Seulement avec l'autorisation du mari d'Aminata"}
          ],
          correctId:"b",
          explanation:"La sœur pauvre non à charge légale est parmi les bénéficiaires prioritaires. Doctrine-malikite.fr : « Elle est à donner de préférence aux proches dans le besoin ». C'est la famille ET la pauvre → double récompense."
        },
        {
          id:"q-zak-40",
          text:"Un homme vend sa maison principale et possède 50 000€ pendant un an. Doit-il la Zakāt?",
          choices:[
          {id:"a",text:"Non — la maison n'est pas soumise à la Zakāt"},
          {id:"b",text:"Oui — les 50 000€ sont de l'argent liquide soumis à la Zakāt après le Ḥawl"},
          {id:"c",text:"Non — c'est de l'argent destiné au logement"},
          {id:"d",text:"Seulement s'il ne rachète pas de maison dans l'année"}
          ],
          correctId:"b",
          explanation:"La maison principale habitée est exemptée. Mais une fois vendue, l'argent liquide obtenu est soumis au régime de la Zakāt sur la monnaie. 50 000€ pendant un Ḥawl → 2,5% dus."
        },
        {
          id:"q-zak-41",
          text:"La Zakāt sur le miel est-elle due selon le rite malikite?",
          choices:[
          {id:"a",text:"Oui — comme les autres productions agricoles"},
          {id:"b",text:"Non — pas de Zakāt sur le miel dans le rite malikite"},
          {id:"c",text:"Seulement si on le vend"},
          {id:"d",text:"Seulement si la production dépasse 100 kg"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Pas de zakât sur le miel » selon le rite malikite. Le miel n'est pas dans la liste des produits agricoles soumis à la Zakāt. Si vendu, on attendrait un Ḥawl sur le prix de vente."
        },
        {
          id:"q-zak-42",
          text:"Peut-on donner sa Zakāt à un non-Muslim pauvre?",
          choices:[
          {id:"a",text:"Oui — la générosité ne connaît pas de frontières religieuses"},
          {id:"b",text:"Non — la Zakāt est réservée aux Muslims (pour la plupart des catégories)"},
          {id:"c",text:"Seulement pour la catégorie"},
          {id:"d",text:"Seulement pour les Gens du Livre"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Les pauvres et les nécessiteux qui peuvent recevoir la zakât doivent être obligatoirement MUSULMANS ». Exception potentielle: peut inclure des non-Muslims selon certains savants."
        },
        {
          id:"q-zak-43",
          text:"La Zakāt al-Fiṭr peut-elle être donnée 2-3 jours avant l'Eid?",
          choices:[
          {id:"a",text:"Non — uniquement le jour de l'Eid"},
          {id:"b",text:"Oui — il est permis de la donner 1 à 2 jours avant l'Eid"},
          {id:"c",text:"Non — elle doit être donnée après la prière de l'Eid"},
          {id:"d",text:"Oui — même 2 semaines avant"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr confirme: il est permis de donner la Zakāt al-Fiṭr un ou deux jours avant l'Eid. Sunna est de la donner AVANT la prière de l'Eid."
        },
        {
          id:"q-zak-44",
          text:"Omar est voyageur loin de chez lui et a épuisé son argent alors qu'il est riche dans son pays. Peut-il recevoir la Zakāt comme?",
          choices:[
          {id:"a",text:"Non — il est riche donc non éligible"},
          {id:"b",text:"Oui — l' reçoit ce qu'il faut pour rentrer même s'il est riche dans son pays"},
          {id:"c",text:"Seulement si ce n'est pas de sa faute"},
          {id:"d",text:"Oui mais remboursement obligatoire"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: l' reçoit ce qui lui permet de rentrer chez lui même s'il est riche dans son pays — à condition qu'il ne puisse pas emprunter. S'il peut emprunter facilement, on ne lui donne pas."
        },
        {
          id:"q-zak-45",
          text:"Les légumes frais (carottes, tomates) sont-ils soumis à la Zakāt agricole?",
          choices:[
          {id:"a",text:"Oui s'ils dépassent 5"},
          {id:"b",text:"Non — aucune Zakāt sur les fruits frais et légumes"},
          {id:"c",text:"Seulement en été"},
          {id:"d",text:"Oui mais au taux de 1%"}
          ],
          correctId:"b",
          explanation:"La Risāla et doctrine-malikite.fr confirment: pas de Zakāt sur les légumes et fruits frais. Seuls les produits durables (céréales, légumineuses, dattes, olives, raisins secs...) sont soumis à la Zakāt agricole."
        },
        {
          id:"q-zak-46",
          text:"La Zakāt est-elle due sur un héritage reçu en argent liquide?",
          choices:[
          {id:"a",text:"Immédiatement après réception"},
          {id:"b",text:"Un Ḥawl après réception (nouveau Ḥawl à partir de la réception)"},
          {id:"c",text:"Jamais — les héritages sont exemptés"},
          {id:"d",text:"Seulement si l'héritage dépasse un"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: pour l'argent liquide hérité, un nouveau Ḥawl commence à la réception. On paye la Zakāt un an après, si le est maintenu à la fin du Ḥawl."
        },
        {
          id:"q-zak-47",
          text:"Ibrahim a 30 bovins (vaches). Le est-il atteint?",
          choices:[
          {id:"a",text:"Non — le des bovins est 40"},
          {id:"b",text:"Oui — le des bovins est 30"},
          {id:"c",text:"Non — le des bovins est 50"},
          {id:"d",text:"Oui mais seulement pour les vaches laitières"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr pour les bovins: = 30. De 30 à 39 → un veau de plus de 2 ans. De 40 → une vache dans sa 4ème année."
        },
        {
          id:"q-zak-48",
          text:"La Niyya est-elle requise pour la validité de la Zakāt?",
          choices:[
          {id:"a",text:"Non — le simple fait de donner suffit"},
          {id:"b",text:"Oui — il faut l'intention que c'est la Zakāt obligatoire"},
          {id:"c",text:"Seulement pour Zakāt al-Fiṭr"},
          {id:"d",text:"Non — si le montant est correct, l'intention est présumée"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « il faut au préalable émettre l'intention de donner la zakât, car les actes ne valent que par les intentions ». L'intention peut être faite au moment de distinguer la part ou lors de la distribution."
        },
        {
          id:"q-zak-49",
          text:"Farid est pauvre mais possède un troupeau de 45 moutons. Doit-il payer la Zakāt?",
          choices:[
          {id:"a",text:"Non — il est pauvre, donc exempté"},
          {id:"b",text:"Oui — la Zakāt est due sur tout bien dépassant le, même si le possesseur est pauvre"},
          {id:"c",text:"Seulement s'il les possède depuis plus de 2 ans"},
          {id:"d",text:"Non car c'est sa principale source de vie"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Les pauvres et les nécessiteux peuvent recevoir la zakât. Ceci même s'ils possèdent le. Ils donneront obligatoirement la zakât sur leur ». Paradoxe: on peut être éligible à RECEVOIR la Zakāt ET devoir la PAYER."
        },
        {
          id:"q-zak-50",
          text:"Sami reçoit un salaire mensuel de 1500€. Il dépense tout chaque mois et n'a jamais d'épargne à la fin du Ḥawl. Doit-il la Zakāt?",
          choices:[
          {id:"a",text:"Oui — ses revenus dépassent le"},
          {id:"b",text:"Non — sans épargne en fin de Ḥawl, pas de Zakāt"},
          {id:"c",text:"Oui sur le total annuel (12 × 1500€)"},
          {id:"d",text:"Oui sur chaque mois individuellement"}
          ],
          correctId:"b",
          explanation:"La clé: si à la fin du Ḥawl, il ne reste aucune épargne ≥, pas de Zakāt. La Zakāt requiert un capital stable pendant un Ḥawl. Des revenus dépensés au fur et à mesure ne génèrent pas de Zakāt."
        },
        {
          id:"q-zak-51",
          text:"Quel animal doit-on donner comme Zakāt pour un troupeau de 25 à 35 chameaux?",
          choices:[
          {id:"a",text:"1 brebis"},
          {id:"b",text:"1 (chamelle ayant complété 1 an)"},
          {id:"c",text:"1 (chamelle ayant complété 2 ans)"},
          {id:"d",text:"1 (chamelle ayant complété 3 ans)"}
          ],
          correctId:"b",
          explanation:"Pour 25 à 35 chameaux: 1 (chamelle qui a achevé 1 an et entré dans sa 2ème année). Pour 36-45: 1. Pour 46-60: 1. Pour 61-75: 1. Ces tableaux sont donnés par la Risāla d'Ibn Abī Zayd et la Mudawwana."
        },
        {
          id:"q-zak-52",
          text:"Pour 40 bovins (vaches), quelle est la Zakāt due?",
          choices:[
          {id:"a",text:"1 (jeune bovin entrant dans sa 3ème année)"},
          {id:"b",text:"1 (vache entrant dans sa 4ème année)"},
          {id:"c",text:"2 brebis"},
          {id:"d",text:"Rien — le niṣā des bovins est 50"}
          ],
          correctId:"b",
          explanation:"Pour les bovins: de 30 à 39 → 1 ; de 40 à 59 → 1 (vache ayant complété 3 ans, entrant dans sa 4ème). Avec 40 bovins on est donc dans la tranche 40-59 → 1 due."
        },
        {
          id:"q-zak-53",
          text:"Ibrahim a 45 moutons et son associé Karim a 45 chèvres. Leurs troupeaux paissent ensemble. La Zakāt est-elle due sur l'ensemble (90 têtes)?",
          choices:[
          {id:"a",text:"Non — chacun est en dessous de 40 individuellement et les espèces sont différentes"},
          {id:"b",text:"Non — les moutons et chèvres ne se combinent pas"},
          {id:"c",text:"Oui — ovins et caprins se combinent, et la (partenariat) s'applique"},
          {id:"d",text:"Seulement si les troupeaux paissent ensemble 6 mois ou plus"}
          ],
          correctId:"c",
          explanation:"Ovins et caprins sont du même type et se combinent. De plus, la (les troupeaux paissent ensemble) s'applique: 45 + 45 = 90 têtes → 1 brebis due, partagée entre Ibrahim (45/90 = moitié) et Karim (moitié). Les conditions de la: même pâturage, même source d'eau, même berger, pendant la majorité du Ḥawl."
        },
        {
          id:"q-zak-54",
          text:"La Zakāt s'applique-t-elle aux animaux nourris artificiellement toute l'année?",
          choices:[
          {id:"a",text:"Oui — comme tous les troupeaux"},
          {id:"b",text:"Non — selon l'Imām Mālik dans la Mudawwana, les (nourris artificiellement) sont exemptés"},
          {id:"c",text:"Oui mais à 1,25% au lieu de 2,5%"},
          {id:"d",text:"Seulement pour les chameaux"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: selon l'Imām Mālik dans la Mudawwana, la Zakāt ne s'applique qu'aux Māshiya (animaux qui pâturent librement la majorité de l'année). Les animaux nourris artificiellement toute l'année sont exemptés dans le rite malikite."
        },
        {
          id:"q-zak-55",
          text:"Comment calcule-t-on la Zakāt sur un salaire mensuel selon la position malikite contemporaine dominante?",
          choices:[
          {id:"a",text:"2,5% sur chaque salaire dès sa réception"},
          {id:"b",text:"On choisit une date anniversaire fixe ; on calcule l'épargne disponible à cette date ; si ≥ Niṣāb → 2,5%"},
          {id:"c",text:"2,5% sur le total des salaires annuels sans déduction"},
          {id:"d",text:"Pas de Zakāt sur les salaires — seulement sur l'épargne accumulée depuis 2 Ḥawl"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr (position contemporaine dominante): on choisit une date anniversaire fixe (début d'année islamique, etc.). On comptabilise l'épargne disponible à cette date après déduction des dépenses essentielles et des dettes à court terme. Si elle ≥ Niṣāb → 2,5% de Zakāt."
        },
        {
          id:"q-zak-56",
          text:"Nadia a un fonds de retraite auquel elle ne peut pas accéder avant 20 ans. Doit-elle la Zakāt dessus chaque année?",
          choices:[
          {id:"a",text:"Oui — 2,5% chaque année sur la valeur totale"},
          {id:"b",text:"Non — pas de Zakāt annuelle sur des fonds inaccessibles ; une seule année de Zakāt lors de la réception"},
          {id:"c",text:"Seulement si le fonds dépasse 50 000€"},
          {id:"d",text:"Oui mais au taux de 1%"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr (par analogie avec la créance inaccessible): pas de Zakāt annuelle sur des fonds auxquels on ne peut pas accéder. Dès la réception: une seule année de Zakāt sur le total reçu, même s'il a été épargné 20 ans. Même principe que la créance non récupérée."
        },
        {
          id:"q-zak-57",
          text:"Quel Niṣāb recommandent les savants malikites contemporains pour maximiser la distribution de la Zakāt?",
          choices:[
          {id:"a",text:"Le Niṣāb de l'or (85g d'or ≈ valeur élevée) — plus difficile à atteindre"},
          {id:"b",text:"Le Niṣāb de l'argent (595g d'argent ≈ valeur basse) — plus facile à atteindre, couvre plus de personnes"},
          {id:"c",text:"La moyenne entre les deux"},
          {id:"d",text:"Chaque savant choisit selon l'époque"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: il y a une divergence contemporaine. Utiliser le Niṣāb de l'argent (valeur basse) avantage les pauvres en élargissant le nombre de personnes qui doivent la Zakāt. Beaucoup de savants contemporains recommandent le Niṣāb de l'argent (environ 595g d'argent en valeur monétaire) pour maximiser la distribution."
        },
        {
          id:"q-zak-58",
          text:"Peut-on donner la Zakāt al-Fiṭr en argent liquide (espèces) selon la majorité des savants malikites classiques?",
          choices:[
          {id:"a",text:"Oui — l'argent est plus pratique et préférable"},
          {id:"b",text:"Non — la Zakāt al-Fiṭr doit être en nourriture selon la majorité des savants malikites classiques"},
          {id:"c",text:"Seulement si le destinataire préfère l'argent"},
          {id:"d",text:"Oui si le prix de la nourriture équivalente est donné"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: la majorité des savants malikites classiques ne permettent pas de remplacer la Zakāt al-Fiṭr par de l'argent — elle doit être en denrée alimentaire (nourriture principale de la région). Certains savants contemporains l'ont autorisée pour faciliter la distribution, mais ce n'est pas la position classique. La sécurité est de donner en nourriture."
        },
        {
          id:"q-zak-59",
          text:"La Zakāt al-Fiṭr peut-elle être donnée à un non-Muslim pauvre?",
          choices:[
          {id:"a",text:"Oui — comme la zakāt al-māl"},
          {id:"b",text:"Non — contrairement à la zakāt al-māl (catégorie ), la Zakāt al-Fiṭr est exclusivement pour les Muslims"},
          {id:"c",text:"Seulement dans les pays à majorité non-musulmane"},
          {id:"d",text:"Oui si aucun Muslim pauvre n'est disponible"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr: « Les pauvres et les nécessiteux qui peuvent recevoir la zakāt doivent être obligatoirement MUSULMANS » — ceci est encore plus restrictif pour la Zakāt al-Fiṭr qui n'a pas la catégorie. Elle est strictement réservée aux Muslims nécessiteux."
        },
        {
          id:"q-zak-60",
          text:"Ibrahim a des actions dans une société commerciale cotée en bourse. Quand et sur quoi paie-t-il la Zakāt?",
          choices:[
          {id:"a",text:"Seulement lors de la vente des actions"},
          {id:"b",text:"Sur les dividendes reçus uniquement"},
          {id:"c",text:"Annuellement à la fin du Ḥawl sur la valeur totale des actions (capital + bénéfices latents) au taux de 2,5%"},
          {id:"d",text:"Pas de Zakāt sur les actions en bourse"}
          ],
          correctId:"c",
          explanation:"Doctrine-malikite.fr (position contemporaine): les actions représentant un capital commercial sont soumises à la Zakāt annuelle. À la fin du Ḥawl, on calcule la valeur totale des actions (prix du marché × nombre d'actions = capital + bénéfices latents) et on verse 2,5%. Même si les actions ne sont pas vendues, leur valeur est zakāttée."
        }]}}]};