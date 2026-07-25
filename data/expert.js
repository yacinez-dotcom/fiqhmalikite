/* Données — EXPERT — Nettoyé */
const EXPERT = {id:"expert",label:"Expert",arabicLabel:"المستوى الرابع",levelColor:"#6B2D5E",levelBadge:{"id": "badge-expert-or", "title": "Maître en Fiqh Malikite", "arabicTitle": "الفَقِيهُ المَالِكِيّ المُتَمَكِّن", "icon": "star-a", "color": "gold", "unlockCondition": "Obtenir ≥ 85 % de moyenne sur l'ensemble des questionnaires Expert"},source:"Matn d'Ibn Āshir · Muwattaʾ · Bidāyat al-Mujtahid · doctrine-malikite.fr",description:"Maîtrise théologique et méthodologique : ʿAqīda ashʿarite, Uṣūl al-Fiqh mālikī, Sīra, Fiqh des minorités, bioéthique et jurisprudence comparée.",subjects:[
    {id:"aqida",title:"La Croyance Malikite-Ashʿarite",arabicTitle:"العَقِيدَة الأَشعَرِيَّة والتَّوحِيد",icon:"star-a",description:"Le 1er pilier du Matn d'Ibn Āshir : le Tawḥīd, les 13 attributs divins, la méthode ashʿarite face aux sectes égarées et aux défis contemporains.",source:"Matn d'Ibn Āshir (1er pilier) · doctrine-malikite.fr Le Dogme · Al-Ghazālī · Al-Juwaynī",badge:{id:"badge-expert-aqida",title:"Théologien Malikite",arabicTitle:"عَالِمُ العَقِيدَة",icon:"star-a",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"aqd-01",
          title:"Tawḥīd — L'Unicité Divine et ses Trois Dimensions",
          status:'available',
          content:[
            {"t": "lead", "v": "— l'attestation de l'Unicité d'Allah — est le fondement absolu de la religion islamique. Le Matn d'Ibn Āshir al-Mālikī en fait son premier et principal pilier. L'école ashʿarite, adoptée par l'immense majorité des savants malikites, distingue trois dimensions du que tout Muslim doit connaître."},
            { t:'ar', v:"وَاجِبٌ عَلَى كُلِّ مُكَلَّفٍ شَرعًا مَعرِفَةُ مَا يَجِبُ فِي حَقِّ اللَّهِ وَمَا يَستَحِيلُ وَمَا يَجُوزُ", n:"« Il est obligatoire pour tout Muslim adulte de connaître ce qui est obligatoire concernant Allah, ce qui lui est impossible et ce qui lui est possible. » — Matn d'Ibn Āshir" },
            {"t": "h", "v": "Les trois dimensions du"},
            { t:'ul', v:[
              "<strong>1. :</strong> reconnaître qu'Allah seul est le Seigneur, le Créateur, le Maître de l'univers. Cette dimension est naturelle à l'être humain — même les polythéistes arabes l'admettaient.",
              "<strong>2. :</strong> n'adorer qu'Allah seul — la dimension pratique et la plus exigeante. C'est là que réside la signification profonde de.",
              "<strong>3. :</strong> affirmer que les Noms et Attributs divins sont parfaits, uniques, sans analogie avec les créatures."
            ] },
            {"t": "h", "v": "Signification complète de"},
            {"t": "p", "v": "La shahāda n'est pas une simple formule — c'est une déclaration à deux volets : (1) (négation) : — rien n'est digne d'adoration ; (2) (affirmation) : — sauf Allah. Cette structure signifie : j'exclus tout autre objet d'adoration ET j'affirme l'Unicité absolue d'Allah."},
            { t:'ul', v:[
              "≠ simplement « Dieu » — est ce qui mérite une adoration totale, pas seulement la reconnaissance de l'existence.",
              "Adorer autre qu'Allah tout en reconnaissant Son existence = (associationnisme) — le seul péché impardonnable si on meurt dans cet état.",
              "Coran 4:48 : « Allah ne pardonne pas qu'on Lui associe quelque chose mais pardonne tout le reste à qui Il veut. »"
            ] },
            {"t": "h", "v": "Le cadre du Matn d'Ibn Āshir"},
            {"t": "p", "v": "Ibn Āshir al-Mālikī (mort 1040 H/1631 CE) structure sa ʿaqīda selon la méthode ashʿarite : pour chaque attribut divin, on définit (1) ce qui est (obligatoire/nécessaire) pour Allah ; (2) ce qui est (impossible) pour Allah ; (3) ce qui est (possible) — ce qu'Il fait ou ne fait pas par Sa volonté libre."},
            {"t": "note", "v": "La méthode ashʿarite n'est pas une invention humaine arbitraire — elle formalise ce que le Coran lui-même établit : en affirmant les attributs d'Allah, le Coran nous invite à réfléchir sur leur nature. L'école malikite adopte cette méthode parce qu'elle protège contre les deux erreurs symétriques : le (anthropomorphisme) et le (déni des attributs)."}
          ]
        },
        {
          id:"aqd-02",
          title:"Al-Asmāʾ wa-l-Ṣifāt — Les Attributs Divins selon l'École Ashʿarite",
          status:'available',
          content:[
            {"t": "lead", "v": "L'école ashʿarite — adoptée par les malikites — distingue les attributs divins en catégories précises. Chaque attribut a son contraire impossible. La connaissance de ces attributs est une obligation religieuse selon Ibn Āshir."},
            {"t": "h", "v": "Les 13 attributs obligatoires —"},
            { t:'ul', v:[
              "— L'Existence : Allah existe nécessairement. Son contraire impossible : (non-existence).",
              "— L'Éternité a parte ante : sans commencement. Contraire impossible : (avoir un début).",
              "— L'Éternité a parte post : sans fin. Contraire impossible : (extinction).",
              "— La Dissemblance avec les créatures : rien ne Lui ressemble. Contraire : (ressembler aux créatures).",
              "— L'Auto-subsistance : Il n'a besoin de rien ni de personne. Contraire : (le besoin).",
              "— L'Unicité : un seul dans Son Essence, Ses Attributs et Ses Actes. Contraire : (multiplicité).",
              "— La Toute-Puissance : capable de tout possible. Contraire : (impuissance).",
              "— La Volonté : tout ce qui existe est selon Sa volonté. Contraire : (contrainte).",
              "— La Science parfaite : Il sait tout, le manifeste et le caché. Contraire : (ignorance).",
              "— La Vie : vivant sans être soumis à la mort. Contraire :.",
              "— L'Ouïe parfaite : entend tout sans organe. Contraire :.",
              "— La Vue parfaite : voit tout sans organe ni lumière. Contraire :.",
              "— La Parole : parole divine éternelle (le Coran) sans lettre ni son originel. Contraire : (mutisme)."
            ] },
            {"t": "h", "v": "vs"},
            {"t": "p", "v": "L'école ashʿarite distingue entre connaître Allah et connaître sur Allah. La méthode : affirmer ce que le Coran affirme, nier ce que le Coran nie, et dire pour ce qui n'est pas mentionné."},
            {"t": "h", "v": "— Ce qui est Possible"},
            {"t": "p", "v": "Les Actes d'Allah sont tous dans la catégorie du — Il peut faire ou ne pas faire, récompenser ou punir, guider ou laisser dans l'égarement. Il n'est pas soumis à une logique externe de justice humaine. Coran 21:23 : « Il ne rend pas compte de ce qu'Il fait, mais eux seront interrogés. »"},
            {"t": "note", "v": "Erreur commune à éviter : confondre la (Toute-Puissance) avec l'obligation d'agir d'une certaine façon. Les mûtazilites pensaient qu'Allah était « obligé » de faire ce qui est le meilleur pour les humains. L'école ashʿarite rejette cela : Allah agit par Sa Volonté libre, non par contrainte — même si Sa Sagesse sous-tend toujours Ses actes."}
          ]
        },
        {
          id:"aqd-03",
          title:"Al-Rasūl ﷺ — Croyances Fondamentales sur le Prophète et les Messagers",
          status:'available',
          content:[
            {"t": "lead", "v": "La seconde partie de la shahāda — — engage des croyances précises sur le Prophète ﷺ et sur la prophétie en général. Le Matn d'Ibn Āshir y consacre une section essentielle de la ʿaqīda."},
            {"t": "h", "v": "Attributs obligatoires des Prophètes"},
            { t:'ul', v:[
              "— La véracité absolue : jamais menteur dans leur message ou leurs actes. Contraire impossible : (mensonge).",
              "— L'intégrité totale dans la transmission du message. Contraire :.",
              "— La transmission complète du message sans rien dissimuler. Contraire :.",
              "— L'intelligence et la sagacité supérieures. Contraire :.",
              "— L'infaillibilité dans la transmission de la révélation et dans les péchés majeurs."
            ] },
            {"t": "h", "v": "— L'Infaillibilité : nuances malikites"},
            { t:'ul', v:[
              "Les prophètes sont infaillibles dans la <strong>transmission du message révélé</strong> — absolument.",
              "Ils sont protégés des <strong>péchés majeurs</strong> — sans exception.",
              "Des erreurs dans les <strong>jugements personnels non révélés</strong> sont possibles — Coran 80:1-2 (ʿAbasa).",
              "Les prophètes peuvent avoir des <strong>actes en deçà du plus méritoire</strong> — ce que le Coran appelle parfois du 'dhunūb' dans un sens non péjoratif.",
              "Cette nuance protège à la fois l'infaillibilité prophétique ET l'humanité des prophètes."
            ] },
            {"t": "h", "v": "Le Prophète Muhammad ﷺ — statut unique"},
            { t:'ul', v:[
              ": dernier prophète — pas de prophète après lui jusqu'au Jugement.",
              ": la plus haute créature dans la hiérarchie spirituelle — au-dessus des anges.",
              "Amour du Prophète ﷺ : obligatoire et plus fort que l'amour de soi-même et de toute créature. Hadīth : « Nul d'entre vous ne croit vraiment tant qu'il ne m'aime pas plus que son père, son fils et l'humanité entière. »",
              "Le respect du Prophète ﷺ : toute parole ou acte portant atteinte à son honneur = ridda (apostasie) selon la majorité des savants malikites."
            ] },
            {"t": "h", "v": ""},
            { t:'ul', v:[
              "Les besoins physiologiques humains (manger, dormir, tomber malade, mourir).",
              "Les affections humaines légitimes (amour, tristesse, joie) sans que cela n'affecte la transmission du message.",
              "L'ijtihād personnel (non révélé) qui peut être corrigé par la révélation."
            ] },
            {"t": "note", "v": "Doctrine-malikite.fr insiste sur un point souvent mal compris : l'amour du Prophète ﷺ n'est pas un sentiment facultatif — c'est une obligation juridique dont l'absence remet en question la réalité de l'. Cet amour se manifeste par le suivi de sa Sunna, non par les seuls sentiments."}
          ]
        },
        {
          id:"aqd-04",
          title:"Al-Bidʿa — L'Innovation en Islam : Définition et Méthode Malikite",
          status:'available',
          content:[
            {"t": "lead", "v": "Le concept de (innovation) est l'un des plus mal compris et les plus mal utilisés en Islam contemporain. L'école malikite, via doctrine-malikite.fr et les sources classiques, a une approche nuancée et précise — très différente du rejet global de tout nouveau que prônent certains courants contemporains."},
            {"t": "h", "v": "Définition précise de la"},
            {"t": "p", "v": "L'Imām al-Shāṭibī (savant malikite andalou, mort 790 H) dans son Al-Iʿtiṣām : « la est une voie inventée dans la religion qui ressemble à ce qui est légal, mais dont le but est d'exagérer dans le culte d'Allah. »"},
            { t:'ul', v:[
              "concerne la <strong>religion</strong> exclusivement — les innovations dans la vie quotidienne (technologie, médecine...) ne sont pas des bidʿa.",
              "La se caractérise par l'<strong>absence de fondement</strong> dans les textes ou la pratique des salaf.",
              "Elle prétend être une forme d'<strong>adoration améliorée</strong> — c'est cela qui la rend dangereuse."
            ] },
            {"t": "h", "v": "vs — la classification malikite"},
            {"t": "p", "v": "L'Imām al-Shāfiʿī et de nombreux savants malikites ont distingué deux types :"},
            { t:'ul', v:[
              "<strong> (bonne innovation) :</strong> ce qui n'existait pas formellement au temps du Prophète ﷺ mais se fonde sur des principes islamiques clairs — ex : rédaction du Coran en un mushaf, institution d'une prière de tarāwīḥ collective, enseignement institutionnalisé.",
              "<strong> (mauvaise innovation) :</strong> ce qui contredit un texte explicite ou dénature la religion — ex : ajouter une rakʿa à une prière, nier les attributs divins.",
              "Sayyidnā ʿUmar sur la tarāwīḥ : « » — « Quelle bonne innovation que celle-ci ! » — dans le sens linguistique (nouveauté), pas juridique (illicite)."
            ] },
            {"t": "h", "v": "La méthode malikite vs le courant salafi contemporain"},
            {"t": "p", "v": "Doctrine-malikite.fr consacre une section importante à cette divergence :"},
            { t:'ul', v:[
              "Le courant néo-wahhabite/salafi contemporain dit : « » (toute nouveauté est égarement) sans distinguer.",
              "La méthode malikite classique : distinguer innovation dans la pratique de la religion de l'organisation institutionnelle de la religion.",
              "L'adoption de la méthode malikite permet des pratiques comme : les dhikr collectifs, les célébrations du Mawlid (sous conditions), l'organisation institutionnelle des mosquées, l'enseignement islamique moderne.",
              "Le test malikite d'une pratique : « Est-ce que cela contredit un texte explicite ou la finalité de la religion ? Si non → non problématique. »"
            ] },
            { t:'ar', v:"مَن أَحدَثَ فِي أَمرِنَا هَذَا مَا لَيسَ مِنهُ فَهُوَ رَدٌّ", n:"« Quiconque invente dans notre affaire [la religion] quelque chose qui n'en fait pas partie, cela est rejeté. » — Hadīth al-Bukhārī — texte fondateur de la théorie de la bidʿa" },
            {"t": "note", "v": "Point subtil du hadīth : « » signifie « qui n'en fait pas partie » — ce qui implique que certaines choses nouvelles PEUVENT « en faire partie » par un fondement général. La clé est la méthode d'interprétation : l'école malikite utilise les et l'istiṣlāḥ pour évaluer chaque cas."}
          ]
        },
        {
          id:"aqd-05",
          title:"Al-Firaq — Les Courants Théologiques Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "L'histoire de la théologie islamique est marquée par des débats fondamentaux sur la nature d'Allah, le libre arbitre et la foi. Doctrine-malikite.fr y consacre des pages importantes — comprendre ces divergences est essentiel pour un Muslim cultivé."},
            {"t": "h", "v": "Les 4 grandes positions théologiques islamiques"},
            { t:'ul', v:[
              "<strong> :</strong> l'orthodoxie islamique en deux branches — (école ashʿarite, suivie par malikites et chāfiʿites) et (école māturīdite, suivie par hanafites). Différences mineures entre elles.",
              "<strong> :</strong> courant rationaliste fondé au 2ème siècle H — priorité de la raison, attributs divins allégorisés, « obligation d'Allah » de faire le bien. Rejeté par la majorité.",
              "<strong> :</strong> fondé par l'Imām Abū al-Ḥasan al-Ashʿarī (mort 324 H/935 CE) — ancien mutazilite converti — voie médiane entre littéralisme et rationalisme excessif.",
              "<strong>/ contemporaine :</strong> mouvement fondé par Muhammad ibn ʿAbd al-Wahhāb (1703-1792) — rejet de la tradition des 4 écoles, anthropomorphisme implicite dans les attributs,."
            ] },
            {"t": "h", "v": "Les grands débats théologiques et les positions malikites"},
            { t:'ul', v:[
              "(attributs narratifs : main, visage, yeux divins) : l'école ashʿarite-malikite dit — affirmer sans comparaison et sans interprétation littérale. Le sens littéral est impossible pour Allah.",
              ": Allah S'est établi sur le Trône — la position malikite : (le mot est connu), (la modalité est inconnue), (y croire est obligatoire). Attribué à l'Imām Mālik lui-même.",
              "(prédestination et libre arbitre) : l'école malikite = (Allah crée les actes humains) mais les humains ont une (acquisition) qui fonde la responsabilité morale.",
              "(statut du pécheur) : les malikites = ni kafir ni muʾmin parfait — gardé dans la catégorie des Muslims avec une foi imparfaite."
            ] },
            {"t": "h", "v": "Pourquoi les malikites suivent l'école ashʿarite"},
            { t:'ul', v:[
              "L'Imām al-Ashʿarī a formalisé la position de l'Imām Mālik et des premiers savants.",
              "La méthode ashʿarite utilise la raison comme outil auxiliaire des textes, non comme source primaire.",
              "Elle évite les deux extrêmes : (anthropomorphisme) et (déni des attributs).",
              "Doctrine-malikite.fr : « Les musulmans de France et d'Afrique du Nord appartiennent historiquement à la tradition ashʿarite-malikite. »"
            ] },
            { t:'ar', v:"الاستِوَاءُ مَعلُومٌ وَالكَيفُ مَجهُولٌ وَالإِيمَانُ بِهِ وَاجِبٌ وَالسُّؤَالُ عَنهُ بِدعَةٌ", n:"« Le Istiwa est connu [par le texte], la modalité est inconnue, y croire est obligatoire, et en questionner [la modalité] est une innovation. » — Imām Mālik ibn Anas (Muwattaʾ)" },
            {"t": "note", "v": "Cette citation de l'Imām Mālik est l'une des plus importantes de la théologie islamique — elle établit la méthode de l'école malikite pour tous les attributs dits « anthropomorphes » du Coran : on affirme la réalité de l'attribut, on nie toute ressemblance avec les créatures, et on s'abstient de demander comment."}
          ]
        },
        {
          id:"aqd-06",
          title:"Al-ʿAqīda et les Défis Contemporains — La Foi Islamique au XXIe Siècle",
          status:'available',
          content:[
            {"t": "lead", "v": "La ʿaqīda n'est pas une réalité figée — elle répond aux défis de chaque époque. Le Muslim contemporain doit confronter sa foi à des questions nouvelles : athéisme scientifique, pluralisme religieux, droits humains, intelligence artificielle. Doctrine-malikite.fr y apporte une réponse malikite structurée."},
            {"t": "h", "v": "L'Islam face à l'athéisme et au scientisme contemporain"},
            { t:'ul', v:[
              "L'argument cosmologique : tout ce qui commence à exister a une cause — l'univers a commencé (Big Bang) → il a une cause → cette cause est Allah. L'Imām al-Ghazālī l'a formalisé avant Descartes.",
              "La complexité irréductible comme preuve : Coran 88:17-19 — « Ne regardent-ils pas les chameaux comment ils ont été créés... ? »",
              "L'argument moral : l'existence de valeurs morales universelles (le meurtre est mal) présuppose une norme absolue externe à l'humanité.",
              "Le scientisme (« seule la science dit vrai ») est lui-même une position philosophique non scientifique."
            ] },
            {"t": "h", "v": "Islam, pluralisme religieux et tolérance"},
            { t:'ul', v:[
              "Position malikite classique : l'Islam est la voie d'Allah (Coran 3:19) — mais la contrainte en religion est interdite (Coran 2:256).",
              "Distinction : la vérité objective (l'Islam est vrai) ≠ la liberté de conscience (personne ne peut être forcé).",
              "Doctrine-malikite.fr sur le dialogue interreligieux : « Sage comme Nuh, sage comme Ibrahim, sage comme le Prophète ﷺ à Médine. »",
              "Les pactes de Médine : le Prophète ﷺ a établi une société plurielle avec des droits pour tous — modèle de coexistence islamique."
            ] },
            {"t": "h", "v": "— Foi et Raison"},
            { t:'ul', v:[
              "L'Islam n'oppose pas foi et raison — il les hiérarchise : la raison est un outil précieux mais limité.",
              "Ce que la raison ne peut pas connaître seule (l'au-delà, le détail des actes d'adoration) = domaine de la révélation exclusive.",
              "Ce que la raison confirme (existence de Dieu, nécessité de la justice) = domaine commun.",
              "Ce que la raison contredit (un Dieu limité, injuste) = critère d'invalidité de la prétention prophétique.",
              "Ibn Rushd (Averroès) : la vérité philosophique et la vérité révélée ne peuvent pas se contredire — si elles semblent le faire, c'est qu'on interprète mal l'un ou l'autre."
            ] },
            {"t": "h", "v": "L'ʿaqīda face à l'Intelligence Artificielle"},
            {"t": "p", "v": "Question théologique émergente : l'IA peut-elle avoir une conscience ? Est-elle une créature responsable ? Position malikite préliminaire (par analogie avec le droit des animaux) : l'IA n'a pas de (âme), donc pas de (responsabilité morale) — c'est un outil. La responsabilité revient à son créateur et utilisateur."},
            {"t": "note", "v": "Doctrine-malikite.fr conclut sa section sur le dogme par cette idée essentielle : « L'ʿaqīda n'est pas un catéchisme rigide — c'est une vision du monde qui donne sens à chaque détail de la vie islamique. Sans ʿaqīda solide, le fiqh reste une technique. Avec elle, il devient un chemin vers Allah. »"}
          ]
        }],quiz:{id:"quiz-expert-aqida",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-aqd-01",
          text:"Le Matn d'Ibn Āshir al-Mālikī structure la ʿaqīda selon quel cadre pour chaque attribut divin ?",
          choices:[
          {id:"a",text:"Seuls les attributs positifs d'Allah"},
          {id:"b",text:"Trois catégories : (nécessaire), (impossible), (possible)"},
          {id:"c",text:"Les 99 Noms uniquement"},
          {id:"d",text:"La comparaison avec les créatures"}
          ],
          correctId:"b",
          explanation:"Ibn Āshir al-Mālikī : « » — les trois catégories permettent de structurer la connaissance de Dieu en évitant l'anthropomorphisme et le déni des attributs."
        },
        {
          id:"q-aqd-02",
          text:"Les trois dimensions du sont :",
          choices:[
          {id:"a",text:"Prière, jeûne, zakāt"},
          {id:"b",text:"+ +"},
          {id:"c",text:"Foi, espérance et charité"},
          {id:"d",text:"Coran, Sunna et Ijmāʿ"}
          ],
          correctId:"b",
          explanation:"Les 3 dimensions : (1) — reconnaître Allah comme seul Seigneur/Créateur ; (2) — n'adorer qu'Allah seul (la plus pratique et la plus exigeante) ; (3) — affirmer Ses Noms et Attributs parfaits, uniques, sans analogie."
        },
        {
          id:"q-aqd-03",
          text:"Les polythéistes arabes croyaient-ils que « Allah existe » ?",
          choices:[
          {id:"a",text:"Non — ils niaient son existence"},
          {id:"b",text:"Oui — mais ils associaient d'autres divinités dans l'adoration, pas la Seigneurie"},
          {id:"c",text:"Non — ils croyaient en plusieurs dieux égaux"},
          {id:"d",text:"Oui — et ils étaient donc Muslims"}
          ],
          correctId:"b",
          explanation:"Coran 29:61 : « Si tu leur demandes qui a créé les cieux et la terre... ils diront : Allah. » Les polythéistes arabes admettaient la (Allah = Créateur) mais pratiquaient le shirk dans la (adoraient des idoles en intermédiaires). D'où la signification profonde de — elle visait exactement cette déviation."
        },
        {
          id:"q-aqd-04",
          text:"Combien d'attributs obligatoires pour Allah enseigne Ibn Āshir ?",
          choices:[
          {id:"a",text:"7"},
          {id:"b",text:"13"},
          {id:"c",text:"20"},
          {id:"d",text:"99"}
          ],
          correctId:"b",
          explanation:"Le Matn d'Ibn Āshir enseigne 13 attributs obligatoires :. Chacun a son contraire impossible pour Allah."
        },
        {
          id:"q-aqd-05",
          text:"L'attribut de (Éternité a parte ante) signifie :",
          choices:[
          {id:"a",text:"Allah est éternel dans le futur"},
          {id:"b",text:"Allah est sans commencement — Son existence n'a pas de début"},
          {id:"c",text:"Allah n'a pas d'âge"},
          {id:"d",text:"Allah est ancien"}
          ],
          correctId:"b",
          explanation:"= sans commencement. Contraire impossible : (avoir un début). À distinguer de qui signifie sans fin. Allah est à la fois (sans début) et (sans fin) — contrairement aux créatures qui ont un début et une fin."
        },
        {
          id:"q-aqd-06",
          text:"La citation de l'Imām Mālik sur l' (établissement sur le Trône) est :",
          choices:[
          {id:"a",text:"Il faut l'interpréter allégoriquement"},
          {id:"b",text:"— le terme est connu / — la modalité est inconnue"},
          {id:"c",text:"Il faut nier cet attribut"},
          {id:"d",text:"Il faut comprendre littéralement une assise physique"}
          ],
          correctId:"b",
          explanation:"Citation fondamentale de l'Imām Mālik : « ». C'est la méthode malikite pour tous les attributs narratifs du Coran : affirmer, ne pas anthropomorphiser, ne pas demander comment, ne pas nier."
        },
        {
          id:"q-aqd-07",
          text:"Le et le sont deux erreurs symétriques. Que sont-elles ?",
          choices:[
          {id:"a",text:"Deux pratiques cultuelles incorrectes"},
          {id:"b",text:"= attribuer un corps à Allah (anthropomorphisme). = nier Ses attributs réels"},
          {id:"c",text:"Deux écoles juridiques"},
          {id:"d",text:"Deux erreurs dans la prière"}
          ],
          correctId:"b",
          explanation:"L'école ashʿarite-malikite navigue entre deux extrêmes : (anthropomorphisme — dire qu'Allah a une main comme les humains) et (nihilisme attributif — dire que les attributs n'ont aucune réalité). La voie juste : affirmer les attributs sans modalité comparable aux créatures."
        },
        {
          id:"q-aqd-08",
          text:"L' (infaillibilité prophétique) signifie-t-elle que les prophètes n'ont jamais eu de petites erreurs de jugement ?",
          choices:[
          {id:"a",text:"Oui — infaillibilité absolue dans tous les actes"},
          {id:"b",text:"Non — l' couvre la transmission du message et les péchés majeurs ; des erreurs d'ijtihād personnel sont possibles et corrigées par la révélation"},
          {id:"c",text:"Oui — même leurs actes quotidiens étaient parfaits"},
          {id:"d",text:"Non — ils pouvaient mentir dans la vie privée"}
          ],
          correctId:"b",
          explanation:"L' est précise : infaillible dans la transmission de la révélation (absolument) et protégé des péchés majeurs. Mais des erreurs dans les jugements personnels non révélés (ijtihād) sont possibles — Coran 80:1-2 (l'épisode ʿAbasa) montre le Prophète ﷺ corrigé sur un acte non-révélé."
        },
        {
          id:"q-aqd-09",
          text:"L'amour du Prophète ﷺ est-il une obligation ou un simple sentiment recommandé ?",
          choices:[
          {id:"a",text:"Un sentiment spirituel recommandé"},
          {id:"b",text:"Une obligation juridique dont l'absence affecte la réalité de l'"},
          {id:"c",text:"Obligatoire seulement le jour de la Mawlid"},
          {id:"d",text:"Optionnel pour les savants"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr et la tradition malikite : l'amour du Prophète ﷺ est, pas simplement recommandé. Hadīth : « » — indique une condition à la réalité de l'."
        },
        {
          id:"q-aqd-10",
          text:"L'École ashʿarite a été fondée par :",
          choices:[
          {id:"a",text:"L'Imām Mālik ibn Anas"},
          {id:"b",text:"Abū al-Ḥasan al-Ashʿarī (mort 324 H), ancien mutazilite revenu à la tradition"},
          {id:"c",text:"Al-Ghazālī"},
          {id:"d",text:"Ibn Rushd"}
          ],
          correctId:"b",
          explanation:"L'Imām Abū al-Ḥasan al-Ashʿarī (874-935 CE) a fondé l'école qui porte son nom après avoir étudié chez les mutazilites puis s'en être séparé. Ses principaux ouvrages : Al-Ibāna, Maqālāt al-Islāmiyyīn, Al-Lumaʿ. L'école malikite adopte sa méthode car elle représente la voie médiane entre littéralisme et rationalisme excessif."
        },
        {
          id:"q-aqd-11",
          text:"La (bonne innovation) — concept malikite ou rejeté ?",
          choices:[
          {id:"a",text:"Rejeté — toute innovation est égarement"},
          {id:"b",text:"Concept malikite valide — distinction entre innovation ayant un fondement islamique et innovation contredisant la religion"},
          {id:"c",text:"Seulement pour les Compagnons du Prophète ﷺ"},
          {id:"d",text:"Seulement dans le domaine de la science"}
          ],
          correctId:"b",
          explanation:"L'Imām al-Shāfiʿī et de nombreux savants malikites ont établi la distinction : (fondement islamique mais forme nouvelle) vs (contredit la religion). Sayyidnā ʿUmar ﵁ a lui-même utilisé le terme « » pour la tarāwīḥ collective. Doctrine-malikite.fr confirme cette méthode."
        },
        {
          id:"q-aqd-12",
          text:"Le courant wahhabite/salafi contemporain et l'école malikite divergent sur :",
          choices:[
          {id:"a",text:"Les 5 piliers de l'Islam"},
          {id:"b",text:"La méthode d'interprétation des attributs divins et la notion de bidʿa — le salafisme tend vers l'anthropomorphisme et rejette toute innovation y compris les pratiques classiques"},
          {id:"c",text:"Le nombre de rakʿāt dans la prière"},
          {id:"d",text:"Le statut de la zakāt"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr consacre une section à ce débat. Les divergences principales : (1) méthode des attributs — les salafis tendent vers, les ashʿarites-malikites maintiennent (laisser la modalité à Allah) ; (2) bidʿa — les salafis rejettent beaucoup de pratiques classiques malikites (dhikr collectif, Mawlid, taqlīd) ; (3) méthode juridique — rejet des madhāhib par les salafis."
        },
        {
          id:"q-aqd-13",
          text:"Le statut du pécheur en ʿaqīda malikite est :",
          choices:[
          {id:"a",text:"Kāfir (incroyant) — péché majeur = sortie de l'Islam"},
          {id:"b",text:"Muʾmin kāmil (croyant parfait)"},
          {id:"c",text:"Muslim ayant une foi imparfaite — entre les deux extrêmes mutazilite et khārijite"},
          {id:"d",text:"La question est sans réponse en rite malikite"}
          ],
          correctId:"c",
          explanation:"Position malikite (et majoritaire) : le pécheur grave reste Muslim — il n'est pas kāfir (comme disent les khārijites) ni dans une « position intermédiaire » sans nom (comme disent les mutazilites). Il est dans avec une foi imparfaite. La foi augmente et diminue selon les actes."
        },
        {
          id:"q-aqd-14",
          text:"La méthode du Bidāyat al-Mujtahid d'Ibn Rushd dans les divergences théologiques est :",
          choices:[
          {id:"a",text:"Adopter toujours la position malikite"},
          {id:"b",text:"Toujours expliquer POURQUOI les savants divergent avant de conclure — identifier les racines des désaccords"},
          {id:"c",text:"Ignorer les autres écoles"},
          {id:"d",text:"Suivre toujours la majorité"}
          ],
          correctId:"b",
          explanation:"Ibn Rushd (Averroès) dans le Bidāyat al-Mujtahid : « si tu veux éviter les erreurs dans les questions de divergence, commence par connaître les SOURCES du désaccord — texte ambigu, analogie contestée, coutume locale, principe général concurrent. » Cette méthode vaut autant pour la ʿaqīda que pour le fiqh."
        },
        {
          id:"q-aqd-15",
          text:"<strong>CONTEMPORAIN :</strong> L'argument cosmologique islamique s'appuie sur :",
          choices:[
          {id:"a",text:"La complexité des langages de programmation"},
          {id:"b",text:"Tout ce qui commence à exister a une cause → l'univers a commencé (Big Bang) → il a une cause externe et nécessaire → Allah"},
          {id:"c",text:"L'existence des prophètes"},
          {id:"d",text:"La beauté de la nature uniquement"}
          ],
          correctId:"b",
          explanation:"L'argument cosmologique islamique (formulé par al-Ghazālī, al-Māturīdī, puis repris par les apologètes contemporains) : (1) tout ce qui a un début a une cause ; (2) l'univers a un début (confirmé par la cosmologie moderne — Big Bang) ; (3) donc l'univers a une cause ; (4) cette cause est nécessairement éternelle, sans début, externe à l'univers — c'est Allah."
        },
        {
          id:"q-aqd-16",
          text:"Le (prédestination) selon l'ʿaqīda malikite-ashʿarite :",
          choices:[
          {id:"a",text:"Tout est déterminé — l'humain n'a aucun choix"},
          {id:"b",text:"L'humain a un libre arbitre total indépendant d'Allah"},
          {id:"c",text:"Allah crée les actes humains (les prédestine), et l'humain a une (acquisition/responsabilité) qui fonde la récompense et la punition"},
          {id:"d",text:"La prédestination ne concerne que les catastrophes naturelles"}
          ],
          correctId:"c",
          explanation:"Position ashʿarite-malikite (voie médiane entre Jabrites = tout forcé et Qadarites = libre arbitre total) : Allah crée tout acte ET l'humain « acquiert » cet acte comme sien — d'où sa responsabilité morale. Coran 18:29 : « Celui qui veut, qu'il croie ; celui qui veut, qu'il refuse. »"
        },
        {
          id:"q-aqd-17",
          text:"La (dissemblance avec les créatures) implique :",
          choices:[
          {id:"a",text:"Que les attributs d'Allah n'existent pas réellement"},
          {id:"b",text:"Qu'Allah existe mais n'a pas de caractéristiques"},
          {id:"c",text:"Que les attributs divins (voir, entendre, parler...) sont réels mais sans aucune ressemblance ni analogie possible avec leurs équivalents chez les créatures"},
          {id:"d",text:"Que le Coran doit être interprété allégoriquement en totalité"}
          ],
          correctId:"c",
          explanation:"est l'un des 13 attributs obligatoires — Coran 42:11 : « » — « rien ne Lui ressemble ET Il est l'Entendant, le Voyant. » La première partie nie toute ressemblance ; la seconde affirme les attributs réels. Les deux ensemble = la méthode ashʿarite."
        },
        {
          id:"q-aqd-18",
          text:"Qu'est-ce que dans les attributs divins ?",
          choices:[
          {id:"a",text:"Attribuer à Allah des qualités humaines"},
          {id:"b",text:"Remettre la connaissance de la modalité des attributs divins à Allah seul, tout en affirmant leur réalité"},
          {id:"c",text:"Nier les attributs divins"},
          {id:"d",text:"Interpréter tous les attributs allégoriquement"}
          ],
          correctId:"b",
          explanation:"= « remettre » la connaissance de la modalité à Allah. On affirme : « Allah voit » (texte coranique) ; on ignore la « comment » ; on ne dit pas « voir comme les humains » ni « voir signifie autre chose ». C'est la position de l'Imām Mālik et la méthode de la majorité des anciens savants."
        },
        {
          id:"q-aqd-19",
          text:"La liberté de conscience et la vérité de l'Islam sont-elles contradictoires selon la ʿaqīda malikite ?",
          choices:[
          {id:"a",text:"Oui — si l'Islam est vrai, tout autre religion doit être interdite"},
          {id:"b",text:"Non — vérité objective (l'Islam est la voie d'Allah) et liberté de conscience coexistent"},
          {id:"c",text:"La question est moderne et sans réponse islamique"},
          {id:"d",text:"Oui — la contrainte est permise pour protéger la vérité"}
          ],
          correctId:"b",
          explanation:"Coran 2:256 : « » — pas de contrainte en religion. Coran 3:19 : « » — l'Islam est la voie d'Allah. Les deux coexistent : Allah a établi la vérité ET a donné à l'humain la liberté de l'accepter ou non. La contrainte n'est pas un outil islamique pour propager la foi."
        },
        {
          id:"q-aqd-20",
          text:"Comment Ibn Rushd (Averroès) résout-il l'apparent conflit entre raison et révélation ?",
          choices:[
          {id:"a",text:"La révélation prime toujours — la raison est inutile"},
          {id:"b",text:"La raison prime toujours — la révélation est allégorique"},
          {id:"c",text:"La vérité philosophique et la vérité révélée ne peuvent pas se contredire — si elles semblent le faire, c'est qu'on interprète mal l'une ou l'autre"},
          {id:"d",text:"Les deux opèrent dans des domaines séparés sans interaction"}
          ],
          correctId:"c",
          explanation:"Ibn Rushd (Bidāyat al-Mujtahid et Tahāfut al-Tahāfut) : « La vérité est une — elle ne peut se contredire elle-même. Si un raisonnement philosophique valide semble contredire un texte révélé, soit le raisonnement est invalide, soit le texte a une interprétation que la raison peut atteindre. » C'est la vision malikite qui permet de valoriser la philosophie sans la substituer à la révélation."
        },
        {
          id:"q-aqd-21",
          text:"<strong>SYNTHÈSE :</strong> Quels sont les deux grand dangers que la méthode ashʿarite-malikite cherche à éviter ?",
          choices:[
          {id:"a",text:"Le péché mineur et le péché majeur"},
          {id:"b",text:"/ (anthropomorphisme — assimiler Allah aux créatures) ET (déni des attributs divins réels)"},
          {id:"c",text:"L'innovation et la tradition"},
          {id:"d",text:"Le rationalisme et le mysticism"}
          ],
          correctId:"b",
          explanation:"La méthode ashʿarite-malikite navigue entre deux précipices symétriques : (1) / — dire que les attributs d'Allah sont comme ceux des humains (Allah a une main comme la nôtre) ; (2) — nier que les attributs ont une réalité (« voir » pour Allah = ne rien signifier de réel). La voie juste : affirmer les attributs, nier la ressemblance, ignorer la modalité."
        }]}},
    {id:"usul",title:"Méthodologie Juridique Malikite",arabicTitle:"أُصُول الفِقه المَالِكِيّ",icon:"pen-b",description:"Les 8 sources du Fiqh mālikī : ʿAmal al-Madanī, Maṣlaḥa, Sadd al-Dharāʾiʿ — et la méthode du Bidāyat al-Mujtahid.",source:"Bidāyat al-Mujtahid d'Ibn Rushd · Al-Muwāfaqāt d'al-Shāṭibī",badge:{id:"badge-expert-usul",title:"Expert en Uṣūl",arabicTitle:"عَالِمُ الأُصُول",icon:"pen-b",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"usul-01",
          title:"Maṣādir al-Tashrīʿ — Les 4 Sources Universelles du Fiqh",
          status:'available',
          content:[
            {"t": "lead", "v": "Uṣūl al-Fiqh — la méthodologie juridique islamique — est la science qui établit les sources du droit islamique et les règles permettant d'en extraire les jugements. L'école malikite a développé la liste la plus riche de sources, allant bien au-delà des 4 sources universelles adoptées par toutes les écoles."},
            { t:'ar', v:"وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُم عَنهُ فَانتَهُوا", n:"Coran 59:7 — Fondement de la Sunna comme source du droit islamique" },
            {"t": "h", "v": "Source 1 : Al-Qurʾān al-Karīm"},
            { t:'ul', v:[
              "Source première et absolue — chaque norme juridique qui y est explicite est définitive.",
              "Les versets se divisent en : Muḥkam (sens clair et non ambigu) et Mutashābih (sens ambigu nécessitant interprétation).",
              "Les versets juridiques (āyāt al-aḥkām) sont environ 500 sur 6236 versets.",
              "Naskh (abrogation) : certains versets en ont abrogé d'autres — connaître l'ordre chronologique est indispensable.",
              "L'Imām Mālik est célèbre pour avoir dit : « Aucun jugement n'a été rendu au Yémen avant que les versets coraniques n'y soient parvenus. »"
            ] },
            {"t": "h", "v": "Source 2 : Al-Sunna al-Nabawiyya"},
            { t:'ul', v:[
              "Tout ce qui est authentiquement établi du Prophète ﷺ : paroles (Ḥadīth — ), actes (Fiʿl — ), et approbations tacites (Taqrīr — ).",
              "Types par chaîne de transmission : Mutawātir (rapporté par tant de transmetteurs que la fabrication est impossible) → Āḥād (rapporté par moins de transmetteurs).",
              "L'Imām Mālik est parfois cité comme rejetant un hadīth Āḥād quand il contredit l'ʿAmal al-Madanī — la pratique constante des habitants de Médine.",
              "Sa Muwattaʾ est le premier grand recueil de Ḥadīth — critère rigoureux de sélection."
            ] },
            {"t": "h", "v": "Source 3 : Ijmāʿ"},
            { t:'ul', v:[
              "Le consensus des savants Muslims sur une question juridique — représente une certitude à laquelle aucun individu ne peut s'opposer.",
              "Spécificité malikite : l'Ijmāʿ le plus authentique est celui des Compagnons (Ṣaḥāba) suivi de l'ʿAmal al-Madanī.",
              "Débat : un Ijmāʿ est-il possible après la génération des Compagnons ? L'Imām Mālik était prudent sur les Ijmāʿ tardifs.",
              "Coran 4:115 : « Celui qui s'oppose au Messager après que la voie juste lui a été clairement montrée et suit une voie autre que celle des croyants... »"
            ] },
            {"t": "h", "v": "Source 4 : Qiyās"},
            { t:'ul', v:[
              "L'analogie juridique : étendre le jugement d'un cas connu (Aṣl) à un cas nouveau (Farʿ) sur la base d'une cause commune (ʿIlla).",
              "Exemple classique : le vin est prohibé pour cause d'ivresse (ʿIlla) → tout alcool enivrant (Farʿ) est également prohibé.",
              "L'Imām Mālik recourait au Qiyās mais lui préférait la Maṣlaḥa al-Mursala quand elle était disponible.",
              "Le Qiyās est limité par la condition que l'ʿIlla (cause juridique) soit clairement identifiable et extractible du texte."
            ] },
            {"t": "note", "v": "La place du Qiyās chez l'Imām Mālik : il l'utilisait avec prudence. Plusieurs hadīth de la Muwattaʾ montrent Mālik refusant le Qiyās là où la pratique des Compagnons de Médine (ʿAmal — ) était clairement établie — la pratique prime sur l'analogie théorique."}
          ]
        },
        {
          id:"usul-02",
          title:"ʿAmal al-Madanī et Maṣlaḥa — Sources Exclusivement Malikites",
          status:'available',
          content:[
            {"t": "lead", "v": "L'école malikite est la seule qui élève ʿAmal ahl al-Madīna (la pratique des habitants de Médine) au rang de source juridique majeure. Elle ajoute également la Maṣlaḥa al-Mursala — l'intérêt public non textué — comme outil puissant d'adaptation de la loi aux réalités changeantes."},
            {"t": "h", "v": "ʿAmal ahl al-Madīna — La Pratique Médinoise"},
            {"t": "p", "v": "Définition : le comportement juridique constant et transmis des habitants de Médine depuis l'époque du Prophète ﷺ et des Compagnons. Pour l'Imām Mālik, Médine était « la cité de la révélation » — sa pratique collective préserve une Sunna vivante plus fiable qu'un hadīth isolé."},
            { t:'ul', v:[
              "Exemple célèbre : le Ṣāʿ (mesure de volume) pour la Zakāt al-Fiṭr. L'Imām Mālik dit que la mesure médinoise prime sur les hadīth contradictoires car c'est une pratique transmise sans interruption.",
              "Cas d'Abū Ḥanīfa vs Mālik : pour la vente d'un bien avec Khiyār (option), Abū Ḥanīfa suivait un hadīth Āḥād ; Mālik préférait la pratique médinoise qui ne connaissait pas ce Khiyār.",
              "L'Imām al-Shāfiʿī critiquait cette source : « pourquoi la pratique médinoise aurait-elle plus d'autorité que celle des autres villes où vivaient aussi des Compagnons ? »",
              "Réponse malikite : Médine est la seule ville où le Prophète ﷺ a vécu 10 ans après la Hijra — sa pratique est donc la plus authentique."
            ] },
            {"t": "h", "v": "Maṣlaḥa al-Mursala — L'Intérêt Public Non Textué"},
            {"t": "p", "v": "La Maṣlaḥa al-Mursala est un intérêt humain réel et non mentionné par les textes — ni textuellement approuvé, ni textuellement rejeté. L'école malikite l'utilise comme source juridique légitime quand elle est en accord avec l'esprit de la Sharīʿa."},
            { t:'ul', v:[
              "Conditions malikites de validité : (1) l'intérêt est réel et général (pas individuel) ; (2) il n'entre pas en conflit avec un texte ; (3) il renforce l'une des 5 Maqāṣid al-Sharīʿa.",
              "Exemple historique : Sayyidnā ʿUmar ﵁ a imposé l'enregistrement du Dīwān (registre fiscal) — aucun texte n'en parle, mais la Maṣlaḥa de l'État islamique le justifiait.",
              "Exemple contemporain : obligation de permis de conduire pour conduire — aucun texte ne le mentionne mais la Maṣlaḥa al-ʿĀmma (intérêt général) et la protection de la vie (Ḥifẓ al-Nafs) le justifient.",
              "Al-Shāṭibī dans Al-Muwāfaqāt : « la Sharīʿa a été établie pour les Maṣāliḥ des créatures — c'est sa finalité. »"
            ] },
            { t:'ar', v:"الشَّرِيعَةُ مَوضُوعَةٌ لِمَصَالِحِ العِبَادِ فِي العَاجِلِ وَالآجِلِ", n:"Al-Shāṭibī, Al-Muwāfaqāt — « La Sharīʿa est établie pour les intérêts des créatures ici-bas et dans l'au-delà »" },
            {"t": "note", "v": "Différence avec l'Istiḥsān (préférence juridique) hanafite : la Maṣlaḥa malikite s'appuie sur des intérêts généraux OBJECTIFS et vérifiables. L'Istiḥsān hanafite peut être basé sur le sentiment du savant seul. L'Imām Mālik était méfiant vis-à-vis d'un Istiḥsān non fondé."}
          ]
        },
        {
          id:"usul-03",
          title:"Sadd al-Dharāʾiʿ et Sources Complémentaires",
          status:'available',
          content:[
            {"t": "lead", "v": "Sadd al-Dharāʾiʿ (bloquer les prétextes) est l'une des contributions les plus originales de l'école malikite à l'Uṣūl al-Fiqh. Elle reflète une vision préventive du droit islamique : interdire les actes licites qui mèneraient probablement au Ḥarām."},
            {"t": "h", "v": "Sadd al-Dharāʾiʿ — Bloquer les Prétextes"},
            {"t": "p", "v": "Si un acte en soi licite mène habituellement, directement ou probablement, à un acte Ḥarām — il devient lui-même interdit. C'est la « prophylaxie juridique » islamique."},
            { t:'ul', v:[
              "Exemple classique : cultiver des raisins pour les vendre à quelqu'un qu'on sait vinificateur → interdit par Sadd al-Dharāʾiʿ même si la vente de raisin est licite.",
              "Exemple malikite : regarder le visage d'une femme étrangère est en soi licite — mais si cela mène habituellement à la Fitnah (tentation), c'est interdit.",
              "Les conditions : la probabilité de résultat Ḥarām doit être haute, non simplement théorique.",
              "L'école chāfiʿite l'utilise moins — les hanafites encore moins. C'est une marque distinctive de la méthode malikite.",
              "Ibn al-Qayyim (hanbalite) a développé une théorie similaire : Dharāʾiʿ et Wasāʾil."
            ] },
            {"t": "h", "v": "Istiṣḥāb — Présomption de Continuité"},
            { t:'ul', v:[
              "Un état juridique établi demeure jusqu'à preuve contraire — la continuité est présumée.",
              "Exemple : une personne est présumée vivante jusqu'à preuve de sa mort (aucune décision d'héritage tant que la mort n'est pas établie).",
              "Exemple : un acte licite reste licite jusqu'à l'arrivée d'une interdiction — la licéité (Ibāḥa) est l'état par défaut.",
              "Tous les Fuqahāʾ (juristes) utilisent l'Istiṣḥāb mais les malikites l'ont systématisé."
            ] },
            {"t": "h", "v": "ʿUrf — La Coutume Locale"},
            { t:'ul', v:[
              "La coutume locale établie devient une source de jugement là où les textes sont muets.",
              "Condition : ne pas contredire un texte explicite.",
              "Exemples : les normes locales de dot (Mahr), les usages commerciaux locaux, les définitions locales de « suffisant » dans l'entretien (Nafaqa).",
              "L'Imām Mālik prenait fortement en compte le ʿUrf de Médine — c'est l'une des raisons pour lesquelles certaines de ses fatwas ne s'appliquent pas directement à d'autres régions."
            ] },
            {"t": "h", "v": "Istiḥsān — La Préférence Juridique"},
            { t:'ul', v:[
              "Déroger à un principe général au profit d'un cas particulier pour des raisons d'équité ou de nécessité.",
              "L'Imām Mālik l'utilisait prudemment — surtout quand l'application stricte d'un Qiyās aurait mené à une injustice manifeste.",
              "L'Imām al-Shāfiʿī a critiqué l'Istiḥsān : « qui pratique l'Istiḥsān légifère » — risque de subjectivité.",
              "Réponse malikite : l'Istiḥsān doit être fondé sur une Maṣlaḥa ou un Nass général — pas sur une simple préférence personnelle."
            ] },
            {"t": "note", "v": "Vue d'ensemble malikite : 8 sources de droit — Qurʾān, Sunna, Ijmāʿ, Qiyās (universelles) + ʿAmal al-Madīna, Maṣlaḥa, Sadd al-Dharāʾiʿ, Istiṣḥāb, ʿUrf, Istiḥsān (spécifiques à l'école malikite). Ce corpus étendu donne à l'école malikite une extraordinaire flexibilité pour répondre aux nouvelles situations."}
          ]
        },
        {
          id:"usul-04",
          title:"Ijtihād et Taqlīd — Effort Interprétatif et Imitation",
          status:'available',
          content:[
            {"t": "lead", "v": "Ijtihād (effort interprétatif maximal) et Taqlīd (imitation d'un savant qualifié) sont les deux pôles du rapport d'un Muslim à la connaissance juridique. La compréhension de leur interaction est fondamentale pour tout étudiant avancé."},
            {"t": "h", "v": "Ijtihād — L'Effort Interprétatif"},
            {"t": "p", "v": "L'Ijtihād est l'effort maximal d'un Mujtahid (juriste qualifié) pour extraire un jugement des sources islamiques sur une question non directement résolue par un texte. C'est la « clé de voûte » de la vie du droit islamique."},
            { t:'ul', v:[
              "Conditions du Mujtahid : maîtrise du Qurʾān, des sciences du Ḥadīth, de la langue arabe, de l'Uṣūl al-Fiqh, des positions des Compagnons et de la réalité du contexte.",
              "Types d'Ijtihād : Muṭlaq (indépendant, sans suivre un Madhhab) → impossible aujourd'hui selon la plupart des savants ; Muqayyad (dans le cadre d'un Madhhab) → encore pratiqué.",
              "Hadīth : « Quand le juge fait un effort (Ijtihād) et tombe juste, il a deux récompenses ; s'il se trompe, il en a une. » — al-Bukhārī et Muslim.",
              "L'Ijtihād collectif (Ijtihād Jamāʿī) : la méthode contemporaine — conseils de Fuqahāʾ (Majālis al-Fiqhiyya) délibèrent ensemble.",
              "Le Conseil Européen de la Fatwa : organe malikite-influencé en Europe — pratique l'Ijtihād Jamāʿī sur les questions des Muslims d'Occident."
            ] },
            {"t": "h", "v": "Taqlīd — L'Imitation Raisonnée"},
            { t:'ul', v:[
              "Pour les non-spécialistes : obligation de suivre un Madhhab reconnu plutôt que d'improviser des jugements personnels.",
              "Coran 16:43 : « Demandez aux gens du Dhikr (savants) si vous ne savez pas. »",
              "Le Taqlīd n'est pas une déformation — c'est le mécanisme normal de transmission de la connaissance dans toute civilisation complexe.",
              "L'Imām Mālik lui-même pratiquait le Taqlīd vis-à-vis des Compagnons : « aucun avis des Ṣaḥāba ne peut être contredit par le Qiyās. »"
            ] },
            {"t": "h", "v": "Talfīq — Combiner Deux Madhāhib"},
            {"t": "p", "v": "Le Talfīq est l'action de combiner des jugements de deux Madhāhib différents dans un seul acte : ex. faire ses ablutions selon le Fiqh mālikite ET prier selon le Fiqh chāfiʿite. Est-ce permis ?"},
            { t:'ul', v:[
              "Position malikite classique : Talfīq permis pour les individus en cas de besoin réel (Ḥāja) ou de difficulté.",
              "Conditions : ne pas combiner dans un seul acte pour choisir systématiquement le plus facile (Tatabbuʿ al-Rukhaṣ / — chasse aux facilités) — ce qui est interdit.",
              "Exemple permis : suivre l'avis malikite sur le Khiyār al-Majlis dans un pays non islamique pour des raisons commerciales pratiques.",
              "Doctrine-malikite.fr : « le Talfīq est toléré pour les Muslims vivant en Occident dans les domaines où leur contexte particulier le nécessite. »"
            ] },
            {"t": "note", "v": "Al-Shāṭibī dans Al-Muwāfaqāt sur Tatabbuʿ al-Rukhaṣ : c'est chercher dans chaque Madhhab la règle la plus facile pour se constituer un Islam « à la carte » minimal. C'est interdit car cela vide la religion de sa substance. Le Taqlīd est une discipline, pas un menu."}
          ]
        },
        {
          id:"usul-05",
          title:"Manhaj Ibn Rushd — La Méthode du Bidāyat al-Mujtahid",
          status:'available',
          content:[
            {"t": "lead", "v": "Ibn Rushd al-Ḥafīd (Averroès, mort 595 H/1198 CE), savant malikite andalou et philosophe, a écrit le Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid — le manuel le plus rigoureux de jurisprudence comparée islamique."},
            { t:'ar', v:"مَن أَرَادَ أَن يَكُونَ مُجتَهِدًا يَجِبُ أَن يَعرِفَ أَسبَابَ الخِلَاف", n:"Ibn Rushd, Bidāyat al-Mujtahid — « Quiconque veut être Mujtahid doit connaître les CAUSES des divergences »" },
            {"t": "h", "v": "Les 5 causes de divergence identifiées par Ibn Rushd"},
            { t:'ul', v:[
              "<strong>1. Ikhtilāf al-Riwāya :</strong> divergence sur l'authenticité d'un Ḥadīth — si l'un le considère authentique et l'autre non, leurs jugements diffèrent.",
              "<strong>2. Taʿāruḍ al-Adilla :</strong> conflit apparent entre deux textes — chaque savant privilégie un texte sur l'autre selon sa méthode.",
              "<strong>3. Ikhtilāf fī al-Qiyās :</strong> divergence sur la ʿIlla (cause juridique) qui fonde une analogie.",
              "<strong>4. Taʿaddud maʿānī al-Alfāẓ :</strong> un même mot arabe a plusieurs sens possibles — chaque école en choisit un.",
              "<strong>5. Ikhtilāf fī al-Ijmāʿ :</strong> divergence sur l'existence ou le champ d'un consensus — ce que l'un considère comme Ijmāʿ, l'autre ne le reconnaît pas."
            ] },
            {"t": "h", "v": "La méthode du Bidāyat al-Mujtahid"},
            { t:'ul', v:[
              "Chaque question commence par l'exposé de toutes les positions des grandes écoles (Aqwāl).",
              "Puis Ibn Rushd expose les ARGUMENTS de chaque position — pas seulement les conclusions.",
              "Puis il identifie la SOURCE de la divergence parmi les 5 catégories ci-dessus.",
              "Enfin, il donne son avis personnel tout en respectant les autres positions.",
              "Ibn Rushd ne dit jamais « X a tort » sans expliquer pourquoi X a raisonné ainsi.",
              "Cette méthode est unique dans l'histoire du Fiqh islamique — elle transforme la divergence en outil d'apprentissage."
            ] },
            {"t": "h", "v": "L'héritage d'Ibn Rushd en Uṣūl al-Fiqh malikite"},
            { t:'ul', v:[
              "Il a démontré que la majorité des divergences juridiques entre écoles ne sont pas arbitraires mais systématiques.",
              "Son œuvre permet de maîtriser l'ensemble du Fiqh islamique classique en une seule source.",
              "Doctrine-malikite.fr s'en inspire directement dans son approche comparative des questions contemporaines.",
              "Ibn Rushd connaissait Aristote autant que l'Imām Mālik — sa méthode est rigoureusement logique tout en restant profondément islamique."
            ] },
            {"t": "note", "v": "Application contemporaine : le Conseil Européen de la Fatwa applique une méthode proche du Bidāyat pour les questions des Muslims en Occident : (1) exposer toutes les positions islamiques sur la question ; (2) identifier la cause de la divergence ; (3) voir laquelle sert le mieux le contexte des Muslims européens. C'est l'Ijtihād Jamāʿī moderne inspiré d'Ibn Rushd."}
          ]
        }],quiz:{id:"quiz-expert-usul",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-usul-01",
          text:"Les 4 sources universelles du Fiqh islamique acceptées par toutes les écoles sont :",
          choices:[
          {id:"a",text:"Coran, Ijmāʿ, Qiyās et ʿUrf"},
          {id:"b",text:"Qurʾān, Sunna, Ijmāʿ et Qiyās"},
          {id:"c",text:"Coran, Muwattaʾ, Maṣlaḥa et Sadd al-Dharāʾiʿ"},
          {id:"d",text:"Coran, Sunna, ʿAmal al-Madanī et Maṣlaḥa"}
          ],
          correctId:"b",
          explanation:"Les 4 sources universelles : Qurʾān + Sunna + Ijmāʿ (consensus des savants) + Qiyās (analogie). Toutes les écoles sunnites les acceptent. L'école malikite y ajoute 4 à 5 sources supplémentaires qui lui sont propres."
        },
        {
          id:"q-usul-02",
          text:"Qu'est-ce que le ʿAmal ahl al-Madīna ?",
          choices:[
          {id:"a",text:"Les hadiths rapportés exclusivement par les Médinois"},
          {id:"b",text:"La pratique constante et transmise des habitants de Médine depuis l'époque du Prophète ﷺ — source juridique unique à l'école malikite"},
          {id:"c",text:"L'ensemble des fatwas de l'Imām Mālik"},
          {id:"d",text:"Le rite de la mosquée prophétique uniquement"}
          ],
          correctId:"b",
          explanation:"Le ʿAmal ahl al-Madīna est la pratique collective transmise sans interruption depuis le Prophète ﷺ. Pour l'Imām Mālik, elle préserve une Sunna vivante — parfois plus fiable qu'un Ḥadīth Āḥād isolé. C'est une source unique à l'école malikite, absente des autres écoles."
        },
        {
          id:"q-usul-03",
          text:"Si un Ḥadīth Āḥād contredit la pratique constante de Médine, que fait l'Imām Mālik ?",
          choices:[
          {id:"a",text:"Toujours suivre le Ḥadīth"},
          {id:"b",text:"Préférer la pratique médinoise (ʿAmal) au Ḥadīth Āḥād dans ce cas"},
          {id:"c",text:"Demander l'avis du Calife"},
          {id:"d",text:"Ignorer les deux et faire un Qiyās"}
          ],
          correctId:"b",
          explanation:"C'est la position distinctive de Mālik : le ʿAmal al-Madanī — pratique médinoise continue depuis les Compagnons — prime sur un Ḥadīth Āḥād isolé. Il estimait que la pratique collective préserve mieux la Sunna qu'une transmission individuelle."
        },
        {
          id:"q-usul-04",
          text:"La Maṣlaḥa al-Mursala doit satisfaire 3 conditions. Lesquelles ?",
          choices:[
          {id:"a",text:"Être mentionnée dans le Coran, unanimement reconnue et ancienne"},
          {id:"b",text:"Être un intérêt réel et général, ne pas contredire un texte, et renforcer une des 5 Maqāṣid al-Sharīʿa"},
          {id:"c",text:"Être approuvée par la majorité des Muslims"},
          {id:"d",text:"Être proposée par un Mujtahid muṭlaq uniquement"}
          ],
          correctId:"b",
          explanation:"Les 3 conditions malikites de la Maṣlaḥa al-Mursala (intérêt public non textué) : (1) intérêt RÉEL et GÉNÉRAL (pas individuel ni hypothétique) ; (2) ne pas contredire un texte explicite ; (3) renforcer l'une des 5 Maqāṣid (finalités) : vie, religion, intellect, lignée, biens."
        },
        {
          id:"q-usul-05",
          text:"Sadd al-Dharāʾiʿ signifie :",
          choices:[
          {id:"a",text:"Permettre ce qui facilite la vie"},
          {id:"b",text:"Interdire un acte licite quand il mène habituellement et probablement à un acte Ḥarām"},
          {id:"c",text:"Fermer les portes des mosquées à ceux qui transgressent"},
          {id:"d",text:"Prohiber tout ce qui est nouveau"}
          ],
          correctId:"b",
          explanation:"Sadd al-Dharāʾiʿ = « bloquer les prétextes » — source juridique préventive distinctive de l'école malikite. Si un acte licite A mène habituellement à un acte Ḥarām B, alors A devient interdit. Exemple : vendre des raisins à quelqu'un qu'on sait vinificateur → interdit."
        },
        {
          id:"q-usul-06",
          text:"L'Istiṣḥāb se base sur quel principe ?",
          choices:[
          {id:"a",text:"Un état juridique établi demeure jusqu'à preuve contraire — présomption de continuité"},
          {id:"b",text:"Tout le passé est abrogé par le présent"},
          {id:"c",text:"L'état d'une personne se base sur sa réputation actuelle"},
          {id:"d",text:"La continuité ne peut être présumée en fiqh"}
          ],
          correctId:"a",
          explanation:"Istiṣḥāb = présomption de continuité. Un état établi reste jusqu'à preuve de changement. Exemples : (1) présomption de vie d'un disparu ; (2) licéité par défaut de tout acte non explicitement interdit (Ibāḥa Aṣliyya) ; (3) la pureté rituelle est présumée jusqu'à ce qu'une impureté soit certaine."
        },
        {
          id:"q-usul-07",
          text:"Ibn Rushd dans le Bidāyat al-Mujtahid identifie combien de causes de divergence entre écoles ?",
          choices:[
          {id:"a",text:"2"},
          {id:"b",text:"3"},
          {id:"c",text:"5"},
          {id:"d",text:"7"}
          ],
          correctId:"c",
          explanation:"Ibn Rushd identifie 5 causes systématiques : (1) Ikhtilāf al-Riwāya (authenticité du Ḥadīth) ; (2) Taʿāruḍ al-Adilla (conflit entre textes) ; (3) Ikhtilāf fī al-Qiyās (divergence sur la cause analogique) ; (4) Taʿaddud maʿānī al-Alfāẓ (polysémie arabe) ; (5) Ikhtilāf fī al-Ijmāʿ (sur le consensus)."
        },
        {
          id:"q-usul-08",
          text:"Le Talfīq (combiner deux Madhāhib) est-il toujours interdit ?",
          choices:[
          {id:"a",text:"Oui — toujours haram"},
          {id:"b",text:"Non — permis en cas de besoin réel, interdit quand il vise à choisir systématiquement le plus facile (Tatabbuʿ al-Rukhaṣ)"},
          {id:"c",text:"Permis seulement pour les savants"},
          {id:"d",text:"Interdit seulement entre malikites et hanafites"}
          ],
          correctId:"b",
          explanation:"Position malikite nuancée : le Talfīq est permis pour une Ḥāja (besoin réel). Ce qui est interdit, c'est le Tatabbuʿ al-Rukhaṣ — choisir dans chaque Madhhab la règle la plus permissive pour construire un Islam minimal."
        },
        {
          id:"q-usul-09",
          text:"La méthode du Bidāyat al-Mujtahid est unique car elle :",
          choices:[
          {id:"a",text:"Ne présente que la position malikite"},
          {id:"b",text:"Expose les positions de toutes les écoles + leurs arguments + la source de divergence — transformant le désaccord en outil d'apprentissage"},
          {id:"c",text:"Est basée uniquement sur le Qurʾān"},
          {id:"d",text:"Interdit toute comparaison entre les écoles"}
          ],
          correctId:"b",
          explanation:"La méthode d'Ibn Rushd : (1) toutes les positions des grandes écoles ; (2) les arguments de chaque position ; (3) identification de la source de divergence parmi ses 5 catégories ; (4) avis personnel motivé. Cette démarche est unique — elle transforme la divergence juridique en exercice d'intelligence."
        },
        {
          id:"q-usul-10",
          text:"<strong>CONTEMPORAIN :</strong> L'obligation de permis de conduire illustre quel principe malikite ?",
          choices:[
          {id:"a",text:"Le Qiyās (analogie)"},
          {id:"b",text:"La Maṣlaḥa al-Mursala (intérêt public non textué) car aucun texte ne mentionne la conduite automobile mais la sécurité routière est un intérêt général islamiquement valide"},
          {id:"c",text:"L'Istiḥsān (préférence juridique)"},
          {id:"d",text:"Le ʿAmal al-Madanī"}
          ],
          correctId:"b",
          explanation:"Le permis de conduire = Maṣlaḥa al-Mursala. Aucun texte islamique ne le mentionne. Mais il remplit les conditions : (1) intérêt réel et général (sécurité routière) ; (2) ne contredit aucun texte ; (3) protège la vie (Ḥifẓ al-Nafs) — l'une des 5 Maqāṣid. Donc islamiquement obligatoire par Maṣlaḥa."
        },
        {
          id:"q-usul-11",
          text:"Qu'est-ce que le Naskh dans l'Uṣūl al-Fiqh ?",
          choices:[
          {id:"a",text:"La traduction du Qurʾān"},
          {id:"b",text:"L'abrogation d'un texte antérieur par un texte postérieur — certains versets coraniques ont été abrogés par des révélations ultérieures"},
          {id:"c",text:"La copie manuscrite du Qurʾān"},
          {id:"d",text:"Le consensus des Compagnons"}
          ],
          correctId:"b",
          explanation:"Naskh = abrogation. Des versets ou hadiths ont été abrogés par des textes postérieurs. Exemple classique : l'interdiction de l'alcool est venue progressivement — des versets antérieurs (moins sévères) ont été abrogés par des versets postérieurs (prohibition totale). Connaître l'ordre chronologique de la révélation est essentiel pour le Mujtahid."
        },
        {
          id:"q-usul-12",
          text:"Pourquoi l'Imām al-Shāfiʿī critiquait-il le ʿAmal al-Madanī de Mālik ?",
          choices:[
          {id:"a",text:"Parce que Médine n'était pas la ville du Prophète ﷺ"},
          {id:"b",text:"Parce que des Compagnons vivaient aussi à Kūfa, Baṣra, Damas — leur pratique aurait une valeur égale à celle de Médine"},
          {id:"c",text:"Parce que le ʿAmal al-Madanī contredisait le Qurʾān"},
          {id:"d",text:"Parce qu'il n'avait pas étudié à Médine"}
          ],
          correctId:"b",
          explanation:"Al-Shāfiʿī (qui avait étudié sous Mālik) : « Pourquoi la pratique médinoise aurait-elle priorité sur la pratique de Kūfa où vécut ʿAlī ibn Abī Ṭālib ﵁, ou de Damas où vécut Abū al-Dardāʾ ﵁ ? » Réponse malikite : Médine est unique car le Prophète ﷺ y a vécu 10 ans après la Hijra, y a transmis toute la Sharīʿa et y a formé les Compagnons."
        },
        {
          id:"q-usul-13",
          text:"L'Ijtihād Jamāʿī (collectif) est la méthode contemporaine privilégiée. Pourquoi ?",
          choices:[
          {id:"a",text:"Parce qu'un individu seul a trop de responsabilité"},
          {id:"b",text:"Parce que les questions contemporaines (bioéthique, finance, numérique) nécessitent des expertises multiples que nul savant seul ne maîtrise entièrement"},
          {id:"c",text:"Parce que l'Ijtihād individuel est interdit aujourd'hui"},
          {id:"d",text:"Pour éviter les divergences"}
          ],
          correctId:"b",
          explanation:"L'Ijtihād Jamāʿī (collectif) : les questions contemporaines (clonage, cryptomonnaies, IA...) requièrent à la fois expertise islamique ET expertise technique (médecine, finance, informatique). Un savant seul ne peut plus tout maîtriser. Les Majālis al-Fiqhiyya (conseils de jurisprudence) réunissent ces compétences."
        },
        {
          id:"q-usul-14",
          text:"Le ʿUrf (coutume locale) peut-il abroger un texte coranique explicite ?",
          choices:[
          {id:"a",text:"Oui si la coutume est ancienne et répandue"},
          {id:"b",text:"Non — le ʿUrf ne peut jamais contredire un texte explicite ; il comble uniquement les silences des textes"},
          {id:"c",text:"Oui avec accord du Muftī local"},
          {id:"d",text:"Oui en Occident uniquement"}
          ],
          correctId:"b",
          explanation:"Le ʿUrf (coutume) n'est source juridique valide QUE là où les textes sont muets. Il ne peut jamais contredire un Naṣṣ (texte explicite). Ex : la coutume locale peut définir ce qui constitue un « logement décent » pour la Nafaqa (entretien) — mais ne peut pas rendre halal l'alcool même si la société le consomme."
        },
        {
          id:"q-usul-15",
          text:"<strong>SYNTHÈSE :</strong> Quelle source rend l'école malikite particulièrement adaptée aux mutations sociales et aux nouveaux contextes ?",
          choices:[
          {id:"a",text:"Le Qurʾān uniquement"},
          {id:"b",text:"La Maṣlaḥa al-Mursala + Sadd al-Dharāʾiʿ + ʿUrf — permettent une adaptation raisonnée aux réalités nouvelles sans trahir les principes"},
          {id:"c",text:"Le rejet de toutes les innovations"},
          {id:"d",text:"L'Ijmāʿ uniquement"}
          ],
          correctId:"b",
          explanation:"La combinaison malikite est puissante pour les contextes nouveaux : Maṣlaḥa (intérêts généraux nouveaux), Sadd al-Dharāʾiʿ (prévention des dérives), ʿUrf (coutumes locales), Istiṣḥāb (présomptions raisonnées). Ces sources non textuées permettent d'aborder des questions inédites (bioéthique, numérique, finance) avec rigueur. C'est l'Ijtihād Jamāʿī contemporain."
        },
        {
          id:"q-usul-16",
          text:"Le ʿAmal al-Madanī de l'Imām Mālik est parfois comparé à quel concept moderne ?",
          choices:[
          {id:"a",text:"La common law britannique"},
          {id:"b",text:"Le droit constitutionnel"},
          {id:"c",text:"Une tradition orale vivante et ininterrompue — analogue à la jurisprudence coutumière ou aux pratiques institutionnelles continues"},
          {id:"d",text:"Les lois internationales"}
          ],
          correctId:"c",
          explanation:"Le ʿAmal al-Madanī est une forme de common law islamique : une pratique vivante, ininterrompue et unanime d'une communauté directement formée par le Prophète ﷺ. Comme la common law, elle préserve une sagesse accumulée et pratique que les textes seuls ne peuvent toujours pas transmettre."
        },
        {
          id:"q-usul-17",
          text:"La Ibāḥa Aṣliyya est un concept de l'Istiṣḥāb. Que signifie-t-il ?",
          choices:[
          {id:"a",text:"Tout est interdit par défaut sauf ce qui est explicitement permis"},
          {id:"b",text:"Tout acte est licite par défaut jusqu'à ce qu'un texte l'interdise — la permission est l'état originel des choses"},
          {id:"c",text:"Seuls les actes mentionnés dans le Coran sont licites"},
          {id:"d",text:"La liberté est absolue en Islam"}
          ],
          correctId:"b",
          explanation:"Ibāḥa Aṣliyya = licéité par défaut. Par l'Istiṣḥāb, tout acte qui n'est pas explicitement interdit reste licite — les preuves d'interdiction incombent à ceux qui interdisent, pas l'inverse. C'est pourquoi le Fiqh malikite est réputé libéral sur les questions nouvelles : l'Ibāḥa s'applique jusqu'à texte contraire."
        },
        {
          id:"q-usul-18",
          text:"L'Ijmāʿ le plus authentique selon l'Imām Mālik est :",
          choices:[
          {id:"a",text:"L'accord des 4 grandes écoles juridiques"},
          {id:"b",text:"L'Ijmāʿ des Ṣaḥāba (Compagnons) suivi de l'ʿAmal al-Madanī — car les Compagnons étaient les plus proches du Prophète ﷺ"},
          {id:"c",text:"L'accord de tous les Muslims du monde"},
          {id:"d",text:"La décision du Calife"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik hiérarchise l'Ijmāʿ : le plus authentique est celui des Ṣaḥāba (Compagnons) → puis l'ʿAmal al-Madanī (pratique médinoise transmise) → puis l'Ijmāʿ des Tābiʿīn (génération suivante). Il était très prudent sur les Ijmāʿ prétendus de savants tardifs sur des questions que les anciens avaient laissées ouvertes."
        },
        {
          id:"q-usul-19",
          text:"L'Al-Muwāfaqāt d'al-Shāṭibī est important pour quel concept central ?",
          choices:[
          {id:"a",text:"L'histoire de l'Andalousie islamique"},
          {id:"b",text:"La théorisation des Maqāṣid al-Sharīʿa (finalités de la Loi islamique) comme fondement de la Maṣlaḥa malikite"},
          {id:"c",text:"La biographie de l'Imām Mālik"},
          {id:"d",text:"Les règles de la récitation coranique"}
          ],
          correctId:"b",
          explanation:"Al-Shāṭibī (mort 790 H, savant malikite andalou) dans Al-Muwāfaqāt a systématisé les Maqāṣid al-Sharīʿa — les 5 finalités de la loi islamique. Son œuvre montre que toute la Sharīʿa vise à protéger ces 5 valeurs. Cette théorie fonde et justifie la Maṣlaḥa al-Mursala malikite sur des bases solides."
        },
        {
          id:"q-usul-20",
          text:"Qu'est-ce qui distingue fondamentalement la méthode juridique malikite des autres écoles ?",
          choices:[
          {id:"a",text:"Elle n'utilise que le Coran"},
          {id:"b",text:"L'utilisation du ʿAmal al-Madanī et de la Maṣlaḥa al-Mursala comme sources majeures — un corpus étendu permettant une adaptation rigoureuse aux contextes nouveaux sans quitter les principes islamiques"},
          {id:"c",text:"Elle rejette le Qiyās complètement"},
          {id:"d",text:"Elle suit toujours la majorité des savants"}
          ],
          correctId:"b",
          explanation:"La marque distinctive malikite : (1) ʿAmal al-Madanī — source vivante et ininterrompue de Sunna ; (2) Maṣlaḥa al-Mursala — adaptation raisonnée aux besoins généraux nouveaux ; (3) Sadd al-Dharāʾiʿ — prévention des dérives. Ces 3 sources, absentes ou peu utilisées ailleurs, donnent à l'école malikite une remarquable capacité d'adaptation sans compromis sur les principes."
        }]}},
    {id:"malikiath",title:"L'Imam Mālik et la Muwattaʾ",arabicTitle:"الإِمَام مَالِك والمُوَطَّأ",icon:"mosque-m",description:"Biographie de l'Imām Mālik, la Muwattaʾ, la Mudawwana, les grandes figures et la diffusion mondiale du Madhhab mālikī.",source:"Muwattaʾ · Mudawwana de Saḥnūn · Biographies classiques",badge:{id:"badge-expert-malikiath",title:"Héritier de Mālik",arabicTitle:"وَارِثُ الإِمَام مَالِك",icon:"mosque-m",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"mal-01",
          title:"Sīrat al-Imām Mālik — Vie et Formation du Fondateur",
          status:'available',
          content:[
            {"t": "lead", "v": "Mālik ibn Anas (l'Imām Mālik) est né et mort à Médine (93 H/712 CE – 179 H/795 CE). Sa vie tout entière est indissociable de la ville du Prophète ﷺ — il n'en est sorti que pour le Ḥajj et refusa toujours de la quitter malgré les invitations des califes."},
            {"t": "h", "v": "Formation intellectuelle"},
            { t:'ul', v:[
              "Il a étudié sous plus de 900 maîtres (Shuyūkh) selon les biographes.",
              "Maîtres principaux : Nāfiʿ (affranchi d'Ibn ʿUmar), Ibn Shihāb al-Zuhrī (plus grand Muḥaddith de son époque), Yaḥyā ibn Saʿīd al-Anṣārī.",
              "Sa chaîne d'or (al-Silsila al-Dhahabiyya) : Mālik ← Nāfiʿ ← Ibn ʿUmar ← Prophète ﷺ — unanimement considérée comme la plus fiable de toutes les chaînes de transmission.",
              "Il a mémorisé le Coran dans l'enfance et maîtrisait la langue arabe et la poésie préislamique à la perfection."
            ] },
            {"t": "h", "v": "Personnalité et méthode"},
            { t:'ul', v:[
              "Célèbre pour sa prudence — il disait souvent « » (« je ne sais pas ») quand il n'était pas sûr.",
              "Sa déférence pour Médine était absolue : il refusait de monter à cheval à Médine par respect pour le sol foulé par le Prophète ﷺ.",
              "Il résistait aux califes abbassides : il a subi des coups et l'écartèlement de son bras (par ordre du gouverneur d'al-Manṣūr) pour avoir émis une fatwa sur la légitimité de la contrainte dans le serment.",
              "Il a mis 40 ans à rédiger la Muwattaʾ — révisant et corrigeant constamment."
            ] },
            {"t": "h", "v": "Ses élèves et la diffusion de l'école"},
            { t:'ul', v:[
              "Al-Shāfiʿī (fondateur du 3ème Madhhab) a étudié sous Mālik et a dit : « Mālik est mon maître le plus précieux. »",
              "Ibn al-Qāsim (mort 191 H) : principal transmetteur des opinions de Mālik, source de la Mudawwana.",
              "ʿAbd al-Raḥmān ibn al-Qāsim transmit l'école en Égypte → Saḥnūn en ramena les enseignements en Ifriqiyya (Tunisie actuelle).",
              "Ashhab, Asbagh, Ibn Wahb : autres grands élèves directs dont les transmissions forment le Fiqh malikite historique."
            ] },
            { t:'ar', v:"كَادَ أَن يَكُونَ النَّاسُ يُضرَبُونَ إِلَيهِ أَكبَادَ الإِبِلِ فَلَا يَجِدُونَ أَعلَمَ مِن عَالِمِ المَدِينَة", n:"Al-Shāfiʿī sur Mālik : « Les gens traversaient les déserts à dos de chameau sans trouver personne de plus savant que le savant de Médine »" },
            {"t": "note", "v": "L'importance de la chaîne Mālik ← Nāfiʿ ← Ibn ʿUmar est capitale : Ibn ʿUmar était connu pour sa précision scrupuleuse dans la transmission — il reproduisait même les gestes du Prophète ﷺ. Nāfiʿ était son affranchi qui l'a accompagné toute sa vie. La transmission Mālik–Nāfiʿ–Ibn ʿUmar est donc doublement sécurisée."}
          ]
        },
        {
          id:"mal-02",
          title:"Al-Muwaṭṭaʾ — Structure, Méthode et Place dans l'Islam",
          status:'available',
          content:[
            {"t": "lead", "v": "Al-Muwaṭṭaʾ (« la route aplanie ») est le premier grand recueil de Ḥadīth et de Fiqh de l'Islam. L'Imām Mālik l'a rédigé sur 40 ans à la demande du Calife al-Manṣūr et l'a présenté à 70 juristes de Médine qui l'ont approuvé."},
            {"t": "h", "v": "Structure de la Muwattaʾ"},
            { t:'ul', v:[
              "Environ 1800 Ḥadīth transmis + environ 822 avis de Compagnons (Ṣaḥāba) et Successeurs (Tābiʿīn).",
              "Organisé par thèmes juridiques (abwāb / — chapitres) : Ṭahāra, Ṣalāt, Zakāt, Ṣiyām, Ḥajj, Buyūʿ, etc.",
              "Chaque section mêle Ḥadīth du Prophète ﷺ + avis des Compagnons + ʿAmal al-Madanī + avis de Mālik lui-même.",
              "Pas uniquement un recueil de Ḥadīth — c'est un manuel de Fiqh intégrant les sources dans leur contexte pratique."
            ] },
            {"t": "h", "v": "Critère de sélection des Ḥadīth"},
            { t:'ul', v:[
              "Mālik ne retenait que les Ḥadīth qu'il pouvait confirmer par la pratique médinoise ou l'accord des Fuqahāʾ (juristes).",
              "Il a écarté de nombreux Ḥadīth authentiques par d'autres critères car ils contredisaient le ʿAmal al-Madanī.",
              "Al-Bukhārī et Muslim ont utilisé la Muwattaʾ comme source et point de référence pour leurs propres recueils.",
              "Le hadīth de la Muwattaʾ ont 3 statuts : Musnad (chaîne complète jusqu'au Prophète ﷺ), Mursal (chaîne incomplète), Mawqūf (arrêté au Compagnon)."
            ] },
            {"t": "h", "v": "Place de la Muwattaʾ dans la hiérarchie des recueils"},
            { t:'ul', v:[
              "Al-Shāfiʿī : « Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik. »",
              "Cette opinion était vraie AVANT la rédaction des Ṣaḥīḥayn (les deux Ṣaḥīḥ : Bukhārī et Muslim).",
              "Après les Ṣaḥīḥayn, la Muwattaʾ est la 3ème source la plus fiable dans la hiérarchie des Ḥadīth.",
              "Elle reste unique car elle intègre le Ḥadīth dans son contexte juridique direct — elle enseigne le Fiqh par le Ḥadīth."
            ] },
            {"t": "note", "v": "Il existe environ 17 recensions (transmissions) de la Muwattaʾ selon les différents élèves de Mālik. La plus répandue est la recension de Yaḥyā ibn Yaḥyā al-Laythī al-Andalusī — c'est celle qu'on lit aujourd'hui dans la plupart des éditions. Les différentes recensions reflètent des variations mineures dans les avis de Mālik au fil du temps."}
          ]
        },
        {
          id:"mal-03",
          title:"Al-Mudawwana — La Grande Encyclopédie du Fiqh Malikite",
          status:'available',
          content:[
            {"t": "lead", "v": "Al-Mudawwana al-Kubrā est la seconde source fondatrice de l'école malikite après la Muwattaʾ. Compilée par Saḥnūn ibn Saʿīd (savant tunisien, mort 240 H/854 CE) à partir des réponses d'Ibn al-Qāsim — élève direct de Mālik — elle est la « Bible » pratique de l'école malikite."},
            {"t": "h", "v": "Histoire de la Mudawwana"},
            { t:'ul', v:[
              "Asad ibn al-Furāt a d'abord recueilli les réponses d'Ibn al-Qāsim en Égypte (→ Al-Asadiyya).",
              "Saḥnūn est allé en Égypte, a revu et corrigé ces réponses avec Ibn al-Qāsim lui-même.",
              "Saḥnūn a ensuite réorganisé, complété et transmis la version définitive → La Mudawwana.",
              "Elle représente l'opinion d'Ibn al-Qāsim sur ce qu'il a entendu de Mālik — avec parfois des avis personnels distingués."
            ] },
            {"t": "h", "v": "Structure et contenu"},
            { t:'ul', v:[
              "Format questions-réponses (Suʾāl / — réponse de Saḥnūn → Jawāb / d'Ibn al-Qāsim).",
              "Couvre l'ensemble du Fiqh malikite : Ṭahāra → Ḥudūd → Farāʾiḍ.",
              "Quelques milliers de questions — véritable encyclopédie pratique du Madhhab.",
              "Mukhtasar Khalīl (qu'on a étudié dans ce site) est un résumé ultérieur de la Mudawwana et de ses commentaires."
            ] },
            {"t": "h", "v": "Les Grands Commentaires de la Mudawwana"},
            { t:'ul', v:[
              "Ibn Rushd al-Jadd (grand-père d'Averroès, mort 520 H) : Al-Muqaddimāt — introduction à la Mudawwana.",
              "Al-Māzarī (savant malikite tunisien, mort 536 H) : Sharḥ al-Talqīn.",
              "Ibn ʿAbd al-Barr (Andalou, mort 463 H) : Al-Kāfī — résumé et commentaire.",
              "Ces commentaires ont étendu le Fiqh malikite de Médine et de l'Égypte à tout le Maghreb et l'Andalousie."
            ] },
            {"t": "note", "v": "La chaîne Mālik → Ibn al-Qāsim → Saḥnūn est la colonne vertébrale du Fiqh malikite tel qu'il est pratiqué au Maghreb et en Afrique. C'est pourquoi le Fiqh malikite nord-africain reflète souvent les avis d'Ibn al-Qāsim plus que les avis directs de Mālik — là où Ibn al-Qāsim divergeait, c'est souvent sa position qui prévaut dans la tradition maghrébine."}
          ]
        },
        {
          id:"mal-04",
          title:"Kibār al-Mālikiyya — Les Grandes Figures de l'École",
          status:'available',
          content:[
            {"t": "lead", "v": "L'école malikite compte parmi ses rangs certains des plus grands noms de la civilisation islamique. Connaître ces figures — leur époque, leur contexte et leur contribution — est essentiel pour comprendre comment le Fiqh malikite a évolué de Médine au Maghreb contemporain."},
            {"t": "h", "v": "Génération de Médine et d'Égypte (2ème-3ème siècles H)"},
            { t:'ul', v:[
              "<strong>Ibn al-Qāsim (, mort 191 H) :</strong> plus fidèle transmetteur des avis de Mālik — sa mémoire des fatwas de Mālik était phénoménale. Source principale de la Mudawwana.",
              "<strong>Ashhab (, mort 204 H) :</strong> considéré comme le plus grand juriste malikite d'Égypte — parfois en désaccord avec Ibn al-Qāsim.",
              "<strong>Ibn Wahb (, mort 197 H) :</strong> excellent muḥaddith malikite — a transmis de nombreux hadiths que Mālik n'avait pas inclus dans la Muwattaʾ.",
              "<strong>Saḥnūn (, mort 240 H) :</strong> compilateur de la Mudawwana, Qāḍī al-Qudāt (Juge suprême) d'Ifriqiyya — a répandu l'école malikite en Afrique du Nord."
            ] },
            {"t": "h", "v": "Les Grands Andalous et Maghrébins (4ème-9ème siècles H)"},
            { t:'ul', v:[
              "<strong>Ibn ʿAbd al-Barr (, Andalou, mort 463 H) :</strong> encyclopédiste islamique — son Al-Istidhkār est l'un des plus grands commentaires de la Muwattaʾ.",
              "<strong>Ibn Rushd al-Jadd (, Andalou, mort 520 H) :</strong> grand-père d'Averroès — Al-Bayān wa-l-Taḥṣīl, commentaire exhaustif de la Mudawwana.",
              "<strong>Ibn Rushd al-Ḥafīd (, Averroès, mort 595 H) :</strong> auteur du Bidāyat al-Mujtahid — philosophe et juriste de génie.",
              "<strong>Al-Qarāfī (, Égyptien, mort 684 H) :</strong> Al-Dhakhīra — encyclopédie du Fiqh malikite en 13 volumes. A systématisé la distinction Qāʿida / (règle générale) et Ḍābiṭ / (règle spécifique).",
              "<strong>Khalīl ibn Isḥāq (, mort 776 H) :</strong> auteur du Mukhtasar étudié dans ce site — résumé dense du Fiqh malikite, commenté des centaines de fois.",
              "<strong>Al-Shāṭibī (, Andalou, mort 790 H) :</strong> Al-Muwāfaqāt — théorie des Maqāṣid al-Sharīʿa."
            ] },
            {"t": "h", "v": "Figures contemporaines"},
            { t:'ul', v:[
              "Al-Ṣiddīq Muḥammad al-Amīn al-Ḍarīr : bioéthique islamique malikite.",
              "ʿAbd Allāh ibn Bayyah (Mauritanie/USA) : Fiqh des minorités et Maqāṣid contemporains.",
              "ʿAlī Jumʿa (Égypte) : Muftī d'Égypte, partisan de la méthode malikite-ashʿarite."
            ] },
            {"t": "note", "v": "Le Fiqh malikite est un Fiqh vivant — il a continué d'évoluer pendant 14 siècles. De Médine à Bagdad, puis à Cordoue et Fès, puis à Tombouctou et Dakar, l'école a su s'adapter aux contextes locaux tout en maintenant ses principes fondamentaux. C'est cette capacité d'adaptation — fondée sur la Maṣlaḥa et le ʿUrf — qui en fait la plus répandue géographiquement des 4 écoles."}
          ]
        },
        {
          id:"mal-05",
          title:"Al-Imtidād al-Jughrāfī — La Diffusion Mondiale du Madhhab Mālikī",
          status:'available',
          content:[
            {"t": "lead", "v": "Le Madhhab mālikī est la plus répandue géographiquement des 4 grandes écoles juridiques islamiques. De l'Andalousie médiévale à l'Afrique sub-saharienne contemporaine, il domine dans un arc géographique immense."},
            {"t": "h", "v": "Voies de diffusion historique"},
            { t:'ul', v:[
              "<strong>Médine → Égypte :</strong> Ibn al-Qāsim et Ashhab ont établi le Fiqh malikite en Égypte au 2ème siècle H — mais il sera supplanté par le Madhhab shāfiʿī plus tard.",
              "<strong>Égypte → Ifriqiyya (Tunisie/Algérie) :</strong> Saḥnūn, disciple d'Ibn al-Qāsim, a rapporté la Mudawwana à Kairouan — capitale intellectuelle du Maghreb. L'Ifriqiyya devient malikite au 3ème siècle H.",
              "<strong>Ifriqiyya → Maghreb occidental (Maroc) :</strong> l'école s'étend progressivement — Fès devient un grand centre malikite.",
              "<strong>Maghreb → Andalousie :</strong> les savants voyagent entre Kairouan, Fès, Cordoue et Séville — l'Andalousie islamique est intégralement malikite.",
              "<strong>Sahara → Afrique sub-saharienne :</strong> les routes commerciales transsahariennes permettent l'islamisation de l'Afrique de l'Ouest via le Madhab mālikī. Mali, Sénégal, Niger, Mauritanie, Burkina Faso, etc. = malikites."
            ] },
            {"t": "h", "v": "Présence géographique contemporaine"},
            { t:'ul', v:[
              "<strong>Maghreb :</strong> Maroc, Algérie, Tunisie, Libye — intégralement malikites.",
              "<strong>Afrique de l'Ouest :</strong> Sénégal, Mauritanie, Mali, Guinée, Burkina Faso, Niger, Gambie — malikites.",
              "<strong>Afrique centrale et orientale :</strong> partiellement malikite.",
              "<strong>Golfe Arabique :</strong> Koweït — majorité malikite.",
              "<strong>Occident :</strong> les Muslims d'origine maghrébine et africaine (la grande majorité des Muslims de France) sont malikites.",
              "Total estimé : environ 25-30% des Muslims dans le monde suivent le Madhhab mālikī."
            ] },
            {"t": "h", "v": "Pourquoi le Madhhab mālikī domine en Afrique"},
            { t:'ul', v:[
              "Sa flexibilité : la Maṣlaḥa et le ʿUrf permettent de s'adapter aux coutumes locales africaines sans les invalider systématiquement.",
              "Les voies commerciales transsahariennes : les marchands musulmans étaient souvent malikites — ils ont islamisé l'Afrique de l'Ouest.",
              "Les grandes écoles islamiques de Tombouctou (Djenné, Sankore) enseignaient le Fiqh malikite.",
              "La flexibilité sur les pratiques culturelles locales (ʿUrf) a facilité l'adoption de l'Islam par les peuples africains."
            ] },
            {"t": "note", "v": "Pour un Muslim français : la grande majorité des Muslims de France (d'origine algérienne, marocaine, tunisienne, sénégalaise, malienne...) sont historiquement malikites. Cette tradition est leur héritage spirituel direct. Le Fiqh malikite est donc le cadre naturel pour la pratique islamique en France — même si beaucoup ignorent le nom de leur école."}
          ]
        }],quiz:{id:"quiz-expert-malikiath",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-mal-01",
          text:"La « chaîne d'or » (Al-Silsila al-Dhahabiyya) de l'Imām Mālik est :",
          choices:[
          {id:"a",text:"Mālik ← al-Shāfiʿī ← Ahmad"},
          {id:"b",text:"Mālik ← Nāfiʿ ← Ibn ʿUmar ← Prophète ﷺ"},
          {id:"c",text:"Mālik ← Saḥnūn ← Ibn al-Qāsim"},
          {id:"d",text:"Mālik ← al-Zuhrī ← al-Baṣrī"}
          ],
          correctId:"b",
          explanation:"La Silsila Dhahabiyya (chaîne d'or) de Mālik : Prophète ﷺ → Ibn ʿUmar (précision scrupuleuse) → Nāfiʿ (affranchi et compagnon quotidien d'Ibn ʿUmar) → Mālik. Unanimement considérée comme la plus fiable de toutes les chaînes islamiques pour la transmission du Ḥadīth."
        },
        {
          id:"q-mal-02",
          text:"Al-Muwaṭṭaʾ est unique parmi les recueils de Ḥadīth car :",
          choices:[
          {id:"a",text:"Il ne contient que les hadiths mutawātir"},
          {id:"b",text:"Il intègre Ḥadīth + avis des Compagnons + ʿAmal al-Madanī + avis de Mālik — c'est un manuel de Fiqh par le Ḥadīth"},
          {id:"c",text:"Il a été écrit en une seule année"},
          {id:"d",text:"Il est le seul accepté par toutes les écoles"}
          ],
          correctId:"b",
          explanation:"La Muwattaʾ n'est pas qu'un recueil de Ḥadīth — c'est un manuel de Fiqh qui intègre : Ḥadīth du Prophète ﷺ (Musnad, Mursal, Mawqūf) + avis des Ṣaḥāba et Tābiʿīn + ʿAmal al-Madanī + avis de Mālik. Cette combinaison est unique."
        },
        {
          id:"q-mal-03",
          text:"Saḥnūn a joué quel rôle dans l'école malikite ?",
          choices:[
          {id:"a",text:"Il a fondé l'école malikite indépendamment de Mālik"},
          {id:"b",text:"Il a compilé la Mudawwana al-Kubrā à partir des réponses d'Ibn al-Qāsim — encyclopédie pratique du Fiqh malikite"},
          {id:"c",text:"Il a écrit le Mukhtasar de Khalīl"},
          {id:"d",text:"Il était le Qāḍī de Médine"}
          ],
          correctId:"b",
          explanation:"Saḥnūn (mort 240 H, Ifriqiyya/Tunisie) : il est allé en Égypte pour étudier sous Ibn al-Qāsim, a recueilli et corrigé ses réponses sur le Fiqh de Mālik, puis les a réorganisées en Al-Mudawwana al-Kubrā — la grande encyclopédie pratique du Madhhab mālikī."
        },
        {
          id:"q-mal-04",
          text:"Pourquoi l'Imām Mālik refusait-il de monter à cheval à Médine ?",
          choices:[
          {id:"a",text:"Par interdiction religieuse d'utiliser les chevaux en ville"},
          {id:"b",text:"Par respect profond pour le sol de Médine foulé par le Prophète ﷺ — manifestation de son amour"},
          {id:"c",text:"Il avait peur des chevaux"},
          {id:"d",text:"C'était une coutume médinoise générale"}
          ],
          correctId:"b",
          explanation:"Anecdote biographique célèbre de l'Imām Mālik : il refusait de monter à cheval dans les rues de Médine par respect pour la terre sainte foulée par le Prophète ﷺ. Il disait : « Je n'ose pas fouler aux sabots d'un cheval la terre où git le Messager d'Allah ﷺ. »"
        },
        {
          id:"q-mal-05",
          text:"Le Madhhab mālikī est dominant dans quelle zone géographique contemporaine ?",
          choices:[
          {id:"a",text:"Turquie, Inde et Pakistan"},
          {id:"b",text:"Maghreb (Maroc, Algérie, Tunisie), Afrique de l'Ouest et Golfe (Koweït)"},
          {id:"c",text:"Arabie Saoudite, Égypte et Syrie"},
          {id:"d",text:"Iran, Irak et Azerbaïdjan"}
          ],
          correctId:"b",
          explanation:"Le Madhhab mālikī domine : Maghreb intégral (Maroc, Algérie, Tunisie, Libye), Afrique de l'Ouest (Sénégal, Mali, Mauritanie, Burkina Faso, Niger, Guinée, Gambie), partiellement Afrique centrale et orientale, et Koweït. C'est le Madhhab de la majorité des Muslims de France (d'origine maghrébine et africaine)."
        },
        {
          id:"q-mal-06",
          text:"Quel savant est l'auteur du Bidāyat al-Mujtahid ?",
          choices:[
          {id:"a",text:"L'Imām Mālik lui-même"},
          {id:"b",text:"Saḥnūn"},
          {id:"c",text:"Ibn Rushd al-Ḥafīd (Averroès, Andalou, mort 595 H)"},
          {id:"d",text:"Al-Shāṭibī"}
          ],
          correctId:"c",
          explanation:"Ibn Rushd al-Ḥafīd (Averroès, 1126-1198 CE) — petit-fils d'Ibn Rushd al-Jadd — est l'auteur du Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid. C'est le savant malikite le plus connu en Occident grâce à ses traductions d'Aristote, mais son œuvre juridique malikite est tout aussi monumentale."
        },
        {
          id:"q-mal-07",
          text:"Pourquoi le Fiqh mālikī pratiqué au Maghreb reflète-t-il souvent les avis d'Ibn al-Qāsim plutôt que ceux directs de Mālik ?",
          choices:[
          {id:"a",text:"Parce qu'Ibn al-Qāsim était plus savant que Mālik"},
          {id:"b",text:"Parce que la Mudawwana — transmise via Ibn al-Qāsim et Saḥnūn — est devenue la référence principale du Madhhab mālikī au Maghreb"},
          {id:"c",text:"Parce que les avis de Mālik ont été perdus"},
          {id:"d",text:"Parce que Saḥnūn a corrigé les erreurs de Mālik"}
          ],
          correctId:"b",
          explanation:"La chaîne de transmission au Maghreb : Mālik → Ibn al-Qāsim (avis transmis en Égypte) → Saḥnūn (compilé en Mudawwana en Ifriqiyya) → Maghreb. Là où Ibn al-Qāsim divergeait de Mālik, c'est souvent son avis qui a prévalu dans la tradition maghrébine. C'est pourquoi la tradition malikite maghrébine est techniquement « ibnqāsimite » sur certains points."
        },
        {
          id:"q-mal-08",
          text:"Al-Shāṭibī est l'auteur d'Al-Muwāfaqāt. Quel est l'apport principal de cet ouvrage ?",
          choices:[
          {id:"a",text:"Une grammaire de la langue arabe"},
          {id:"b",text:"La théorisation systématique des Maqāṣid al-Sharīʿa comme fondement théorique de toute la Sharīʿa islamique"},
          {id:"c",text:"Un commentaire de la Muwattaʾ"},
          {id:"d",text:"Une biographie de l'Imām Mālik"}
          ],
          correctId:"b",
          explanation:"Al-Shāṭibī (mort 790 H, Grenade) : Al-Muwāfaqāt = le premier traité systématique sur les Maqāṣid al-Sharīʿa (finalités de la Loi islamique). Il démontre que toute la Sharīʿa vise à protéger les 5 valeurs fondamentales. Son œuvre est le fondement théorique de la Maṣlaḥa malikite contemporaine."
        },
        {
          id:"q-mal-09",
          text:"Le célèbre aphorisme d'al-Shāfiʿī sur la Muwattaʾ est :",
          choices:[
          {id:"a",text:"« La Muwattaʾ est le livre le moins fiable après le Coran »"},
          {id:"b",text:"« Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik » — avant la rédaction des Ṣaḥīḥayn"},
          {id:"c",text:"« La Muwattaʾ est la meilleure grammaire de l'arabe »"},
          {id:"d",text:"« Je préfère mon propre Fiqh à celui de Mālik »"}
          ],
          correctId:"b",
          explanation:"Al-Shāfiʿī (qui a étudié sous Mālik pendant des années) : « » — « Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik. » Cette affirmation est antérieure à al-Bukhārī et Muslim."
        },
        {
          id:"q-mal-10",
          text:"L'Imām Mālik est-il le fondateur du premier Madhhab islamique ?",
          choices:[
          {id:"a",text:"Oui — il est le premier à avoir fondé une école juridique"},
          {id:"b",text:"Non — Abū Ḥanīfa (, mort 150 H) était plus ancien ; mais Mālik (mort 179 H) est le fondateur du Madhhab le mieux documenté et préservé"},
          {id:"c",text:"Non — al-Shāfiʿī était avant Mālik"},
          {id:"d",text:"Non — le premier Madhhab est le Madhhab d'Ibn Masʿūd"}
          ],
          correctId:"b",
          explanation:"Abū Ḥanīfa (mort 150 H) est chronologiquement le premier des 4 imams. Mālik (mort 179 H) est le second. Mais la Muwattaʾ de Mālik est le premier RECUEIL ÉCRIT d'un Madhhab — c'est pourquoi son école est la mieux documentée parmi les premières. Le Madhhab mālikī est aussi le seul encore pratiqué dans sa région d'origine (Médine → Maghreb)."
        },
        {
          id:"q-mal-11",
          text:"Khalīl ibn Isḥāq est l'auteur de :",
          choices:[
          {id:"a",text:"La Mudawwana"},
          {id:"b",text:"Le Mukhtasar — résumé dense de tout le Fiqh mālikī étudié tout au long de ce site"},
          {id:"c",text:"Le Bidāyat al-Mujtahid"},
          {id:"d",text:"Al-Muwāfaqāt"}
          ],
          correctId:"b",
          explanation:"Khalīl ibn Isḥāq al-Jundī (mort 776 H, Égypte) : auteur du Mukhtasar Khalīl — le texte le plus commenté de l'école malikite, résumant la Mudawwana et ses commentaires en formules condensées. C'est la référence principale du Fiqh mālikī pratiqué au Maghreb et en Afrique de l'Ouest."
        },
        {
          id:"q-mal-12",
          text:"Pourquoi le Madhhab mālikī a-t-il mieux « pris » en Afrique de l'Ouest qu'ailleurs ?",
          choices:[
          {id:"a",text:"Par décision politique des califes"},
          {id:"b",text:"Sa flexibilité (Maṣlaḥa + ʿUrf) permettait d'intégrer les coutumes locales africaines sans les rejeter systématiquement"},
          {id:"c",text:"Parce que les Africains préféraient les règles malikites plus strictes"},
          {id:"d",text:"Par hasard historique seulement"}
          ],
          correctId:"b",
          explanation:"La réussite du Madhhab mālikī en Afrique sub-saharienne s'explique par : (1) les marchands Soudanais et Berbères (malikites) qui islamisaient par le commerce ; (2) la Maṣlaḥa et le ʿUrf malikites permettaient de respecter les coutumes locales qui ne contredisaient pas les principes islamiques ; (3) les grandes madrasas de Tombouctou enseignaient le Fiqh malikite."
        },
        {
          id:"q-mal-13",
          text:"Comment s'appelle la principale recension de la Muwattaʾ utilisée aujourd'hui ?",
          choices:[
          {id:"a",text:"La recension d'Ibn al-Qāsim"},
          {id:"b",text:"La recension de Yaḥyā ibn Yaḥyā al-Laythī al-Andalusī"},
          {id:"c",text:"La recension de Saḥnūn"},
          {id:"d",text:"La recension de l'Imām al-Bukhārī"}
          ],
          correctId:"b",
          explanation:"Il existe ~17 recensions (transmissions) de la Muwattaʾ selon les élèves de Mālik. La plus répandue — celle publiée dans la plupart des éditions actuelles — est la recension de Yaḥyā ibn Yaḥyā al-Laythī (mort 234 H), savant andalou qui a étudié sous Mālik à Médine. Les Andalous ont massivement adopté cette recension, d'où sa diffusion au Maghreb."
        },
        {
          id:"q-mal-14",
          text:"Al-Qarāfī est connu pour avoir systématisé quelle distinction capitale en Fiqh ?",
          choices:[
          {id:"a",text:"La distinction entre Ḥalāl et Ḥarām"},
          {id:"b",text:"La distinction entre Qāʿida Fiqhiyya (règle générale) et Ḍābiṭ (règle spécifique à un domaine)"},
          {id:"c",text:"La distinction entre Mālikī et Shāfiʿī"},
          {id:"d",text:"La distinction entre Fiqh et ʿAqīda"}
          ],
          correctId:"b",
          explanation:"Al-Qarāfī (, mort 684 H) dans Al-Furūq a systématisé : Qāʿida Fiqhiyya (principe général traversant tous les domaines du Fiqh) vs Ḍābiṭ (règle propre à un domaine particulier). Sa contribution a structuré tout le Fiqh mālikī postérieur."
        },
        {
          id:"q-mal-15",
          text:"<strong>SYNTHÈSE FINALE :</strong> Quelle est la leçon fondamentale de l'étude de la vie et de l'œuvre de l'Imām Mālik pour un Muslim contemporain ?",
          choices:[
          {id:"a",text:"Il faut aller étudier à Médine uniquement"},
          {id:"b",text:"Le Fiqh islamique est une tradition vivante, ancrée dans des sources authentiques ET capable de s'adapter à chaque contexte — Mālik l'a démontré en préservant la Sunna de Médine tout en répondant aux questions de son époque"},
          {id:"c",text:"Le Fiqh malikite est supérieur aux autres écoles"},
          {id:"d",text:"On doit mémoriser la Muwattaʾ entièrement"}
          ],
          correctId:"b",
          explanation:"La leçon de la vie de Mālik : (1) l'authenticité des sources (Muwattaʾ, chaîne d'or) ; (2) la prudence dans la fatwa (« je ne sais pas ») ; (3) la flexibilité dans les outils (ʿAmal, Maṣlaḥa) ; (4) l'adaptation locale sans compromis sur les principes. Ce modèle est directement applicable pour les Muslims contemporains qui cherchent à pratiquer un Islam authentique ET ancré dans leur réalité."
        }]}},
    {id:"sira",title:"La Sīra et son Enseignement Juridique",arabicTitle:"السِّيرَة النَّبَوِيَّة وفِقهُهَا",icon:"lantern",description:"La vie du Prophète ﷺ comme source du Fiqh mālikī : phases de la révélation, décisions prophétiques et héritage des Compagnons.",source:"Ibn Hishām · Al-Bukhārī · Muwattaʾ",badge:{id:"badge-expert-sira",title:"Connaisseur de la Sīra",arabicTitle:"عَارِفُ السِّيرَة",icon:"lantern",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"sir-01",
          title:"Marāḥil al-Waḥy — Les Phases de la Révélation et le Fiqh",
          status:'available',
          content:[
            {"t": "lead", "v": "La Sīra (vie du Prophète ﷺ) n'est pas seulement une biographie : c'est le laboratoire vivant du Fiqh islamique. Comprendre l'ordre chronologique de la Révélation — et ses implications juridiques — est une condition indispensable pour tout Mujtahid."},
            { t:'ar', v:"لَقَد كَانَ لَكُم فِي رَسُولِ اللَّهِ أُسوَةٌ حَسَنَة", n:"Coran 33:21 — « Vous avez dans le Messager d'Allah un excellent modèle »" },
            {"t": "h", "v": "Al-Marḥala al-Makkiyya — Période Mecquoise (13 ans)"},
            { t:'ul', v:[
              "Révélations centrées sur : Tawḥīd (Unicité divine), Ākhira (Vie Future), morale universelle, réfutation du polythéisme.",
              "Peu de normes juridiques détaillées — la priorité était l'Īmān (croyance).",
              "Ayāt Makkiyya (versets mecquois) : généralement courts, percutants, avec des formules d'appel.",
              "Exception : quelques normes de conduite morale — Coran 17:22-39 (la « charte morale » mecquoise).",
              "Enseignement malikite : les versets mecquois forment la base théologique sur laquelle repose tout le Fiqh de la période médinoise."
            ] },
            {"t": "h", "v": "Al-Marḥala al-Madaniyya — Période Médinoise (10 ans)"},
            { t:'ul', v:[
              "Révélations de construction sociale et juridique : Ṣalāt (prière) obligatoire, Zakāt (aumône), Ṣawm (jeûne), Ḥajj (pèlerinage), lois pénales, successions, mariage.",
              "Āyāt Madaniyya (versets médinois) : généralement plus longs, avec formule.",
              "Naskh (abrogation) : certains versets mecquois abrogés par des versets médinois (ex : interdiction de l'alcool progressive).",
              "Al-Tashawwuf al-Tashriʿī (sagesse pédagogique) : les interdictions sont venues graduellement pour ne pas choquer les Compagnons."
            ] },
            {"t": "h", "v": "Al-Naskh — L'Abrogation et ses Types"},
            { t:'ul', v:[
              "<strong>Naskh al-Ḥukm wa-l-Tilāwa :</strong> le jugement ET le texte sont abrogés.",
              "<strong>Naskh al-Tilāwa dūna l-Ḥukm :</strong> le texte est retiré mais le jugement reste (cas rare, très discuté).",
              "<strong>Naskh al-Ḥukm dūna l-Tilāwa :</strong> le plus courant — le texte reste dans le Coran mais le jugement est remplacé. Ex : Āyat al-Qibla — prière vers Jérusalem abrogée, prière vers La Mecque.",
              "L'Imām Mālik dans la Muwattaʾ est très prudent sur le Naskh — il exige des preuves solides avant de déclarer qu'un verset en a abrogé un autre.",
              "Méthode malikite : préférer la conciliation (al-Jamʿ) entre deux textes apparemment contradictoires plutôt que de recourir au Naskh."
            ] },
            {"t": "h", "v": "Al-Tashawwuf al-Tashriʿī — La Pédagogie Islamique de la Loi"},
            {"t": "p", "v": "L'interdiction de l'alcool illustre parfaitement la méthode pédagogique islamique : (1) Coran 2:219 — l'alcool a des avantages et des inconvénients (introduction) → (2) Coran 4:43 — ne pas prier en état d'ivresse → (3) Coran 5:90-91 — prohibition totale. Cette progression sur plusieurs années a permis une adoption sincère et durable."},
            {"t": "note", "v": "Application contemporaine : la méthode graduée de la Sīra inspire le Fiqh des minorités — on ne peut pas imposer tous les changements à la fois. Un Muslim nouvellement pratiquant, une famille en conversion, une communauté en développement — tous ont besoin du même Tashawwuf al-Tashriʿī (progression pédagogique) que les Compagnons ont reçu à Médine."}
          ]
        },
        {
          id:"sir-02",
          title:"Al-Qarārāt al-Fiqhiyya al-Kubrā — Les Grandes Décisions Juridiques Prophétiques",
          status:'available',
          content:[
            {"t": "lead", "v": "Plusieurs décisions du Prophète ﷺ pendant la Sīra ont établi des précédents juridiques fondamentaux. L'école malikite les étudie dans leur contexte complet — historique, politique et social — avant d'en extraire le jugement."},
            {"t": "h", "v": "Wathīqat al-Madīna — La Constitution de Médine"},
            {"t": "p", "v": "Peu après la Hijra (migration), le Prophète ﷺ a établi une charte entre les Muslim émigrés (Muhājirūn), les Helpers (Anṣār) et les tribus juives de Médine. C'est le premier document constitutionnel islamique."},
            { t:'ul', v:[
              "Établit la notion d'Umma (communauté) plurireligieuse sous autorité islamique.",
              "Protège les droits des non-Muslims (Dhimmī) et garantit leur pratique religieuse.",
              "Établit la responsabilité collective pour la défense de Médine.",
              "Modèle malikite contemporain : doctrine-malikite.fr cite cette charte comme fondement du Fiqh al-Muwāṭana (citoyenneté islamique)."
            ] },
            {"t": "h", "v": "Ṣulḥ al-Ḥudaybiyya — Le Traité de Ḥudaybiyya"},
            {"t": "p", "v": "En l'an 6 H, le Prophète ﷺ a accepté des conditions apparemment défavorables pour traiter avec Quraysh. Les Compagnons étaient déçus — mais le Coran a appelé ce traité « Fatḥ Mubīn (Victoire Évidente) » (Coran 48:1)."},
            { t:'ul', v:[
              "Enseigne la Fiqh al-Muwāzanāt (jurisprudence des équilibres) : parfois une concession ponctuelle est une victoire stratégique.",
              "Le Prophète ﷺ a délibérément accepté des termes injustes pour établir la paix et permettre la Daʿwa (appel à l'Islam).",
              "Enseignement malikite : dans le Fiqh des minorités, accepter des compromis légaux licites (Ittifāqāt) pour préserver l'essentiel est une Sunna prophétique."
            ] },
            {"t": "h", "v": "Ḥajjat al-Wadāʿ — Le Discours d'Adieu"},
            { t:'ul', v:[
              "L'an 10 H — dernier Ḥajj du Prophète ﷺ. Son discours est une synthèse du programme islamique.",
              "Principes proclamés : interdiction du Ribā (usure), protection de la vie et des biens, égalité entre les peuples, droits de la femme.",
              "« » — « Craignez Allah concernant les femmes. » — Établit les droits des femmes comme obligation religieuse.",
              "Fiqh de l'Umma mondiale : « Un Arabe n'a pas de supériorité sur un non-Arabe — la supériorité n'est que par la Taqwā (piété). »"
            ] },
            {"t": "h", "v": "Rasāʾil al-Nabī ﷺ — Les Lettres du Prophète aux Rois"},
            { t:'ul', v:[
              "Le Prophète ﷺ a envoyé des lettres à Héraclius (Byzance), Chosroès (Perse), al-Muqawqis (Égypte), Négus (Éthiopie).",
              "Formule constante : « Aslim taslam — Embrasse l'Islam, tu seras sauvé. »",
              "Enseignement juridique : la Daʿwa aux non-Muslims est une obligation prophétique — par la sagesse et sans contrainte.",
              "Al-Najāshī — le Négus d'Éthiopie — a embrassé l'Islam en privé tout en maintenant ses fonctions de roi chrétien. Modèle de coexistence institutionnelle."
            ] },
            {"t": "note", "v": "La méthode malikite d'extraction des règles de la Sīra : (1) établir l'authenticité historique de l'événement ; (2) comprendre le contexte complet ; (3) identifier ce qui est spécifique au Prophète ﷺ de ce qui est modèle universel ; (4) en extraire le principe. Cette méthode évite l'anachronisme et les applications hors contexte."}
          ]
        },
        {
          id:"sir-03",
          title:"Al-Ṣaḥāba wa-l-Tābiʿūn — Les Compagnons comme Sources Juridiques",
          status:'available',
          content:[
            {"t": "lead", "v": "L'école malikite confère aux opinions des Ṣaḥāba (Compagnons) et des Tābiʿīn (Successeurs) une autorité juridique que d'autres écoles ne reconnaissent pas au même degré. C'est l'une des sources les plus originales et les plus discutées du Fiqh mālikī."},
            {"t": "h", "v": "Statut des opinions des Ṣaḥāba"},
            { t:'ul', v:[
              "Position malikite : l'avis unanime des Ṣaḥāba (Ijmāʿ al-Ṣaḥāba) est une preuve juridique irréfutable.",
              "L'avis d'un Ṣaḥābī individuel est préféré au Qiyās (analogie) selon une position malikite.",
              "Justification : les Ṣaḥāba ont été les témoins directs du Waḥy (Révélation) — ils comprennent les textes mieux que quiconque.",
              "L'Imām Mālik dans la Muwattaʾ cite constamment : « c'est ce que j'ai trouvé nos savants pratiquant » — référence aux opinions des Compagnons à Médine."
            ] },
            {"t": "h", "v": "Les Quatre Premiers Califes comme Sources Juridiques"},
            { t:'ul', v:[
              "Abū Bakr al-Ṣiddīq : sa décision de combattre les refuseurs de Zakāt — Fitnā al-Ridda — a établi le précédent que la Zakāt est un pilier de l'État islamique.",
              "ʿUmar ibn al-Khaṭṭāb : ses innovations juridiques (Dīwān, Tarāwīḥ collective, suspension du Ḥadd al-Sariqa / pendant la famine) démontrent que le Fiqh doit répondre aux réalités sociales.",
              "ʿUthmān ibn ʿAffān : unification du Muṣḥaf (texte coranique) — décision collective majeure non textée dans le Coran.",
              "ʿAlī ibn Abī Ṭālib : ses jugements (Aqḍiya) sont des références en droit civil et pénal islamique — même l'Imām al-Shāfiʿī les cite."
            ] },
            {"t": "h", "v": "Les Fuqahāʾ al-Sabʿa — Les Sept Juristes de Médine"},
            {"t": "p", "v": "Sept grands juristes de la génération des Tābiʿīn ont formé l'école juridique médinoise qui a directement influencé l'Imām Mālik :"},
            { t:'ul', v:[
              "Saʿīd ibn al-Musayyab — le plus grand d'entre eux selon Mālik.",
              "ʿUrwa ibn al-Zubayr — neveu de ʿĀʾisha ﵂, transmetteur exceptionnel.",
              "Al-Qāsim ibn Muḥammad — petit-fils d'Abū Bakr, source directe de Mālik.",
              "Khārija ibn Zayd, Abū Bakr ibn ʿAbd al-Raḥmān, Sulaymān ibn Yasār, ʿUbaydullāh ibn ʿAbdullāh.",
              "L'Imām Mālik a étudié sous plusieurs de ces juristes ou leurs élèves directs — c'est la base de son ʿAmal al-Madanī."
            ] },
            {"t": "note", "v": "Pourquoi l'Imām Mālik citait-il les Tābiʿīn autant que les hadīths ? Parce qu'il voyait dans leur pratique la Sunna vivante — transmise de maître en maître sans rupture depuis le Prophète ﷺ. Pour lui, une chaîne de pratique continue (Silsila ʿAmaliyya) est plus solide qu'une chaîne de transmission orale isolée."}
          ]
        },
        {
          id:"sir-04",
          title:"Al-Hijra wa-Dār al-Islām — Migration et Territoires Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "La Hijra (migration) du Prophète ﷺ de La Mecque à Médine en l'an 1 H est le point de départ du calendrier islamique. Elle a aussi établi une doctrine fondamentale sur le rapport entre le Muslim et son territoire — avec des implications directes pour le Fiqh al-Aqalliyyāt (jurisprudence des minorités)."},
            {"t": "h", "v": "Aqsām al-Diyār — Classification Classique des Territoires"},
            { t:'ul', v:[
              "<strong>Dār al-Islām :</strong> territoire où la loi islamique est appliquée et les Muslims sont en sécurité.",
              "<strong>Dār al-Ḥarb :</strong> territoire ennemi en état de guerre avec les Muslims.",
              "<strong>Dār al-ʿAhd / Dār al-Ṣulḥ :</strong> territoire non-islamique lié par un traité de paix avec les Muslims. <strong>C'est la catégorie malikite contemporaine la plus pertinente pour l'Europe.</strong>",
              "Spécificité malikite : l'Imām Mālik est parmi les premiers à avoir développé la notion de Dār al-ʿAhd — qui évite la dichotomie binaire Islam/guerre."
            ] },
            {"t": "h", "v": "Ḥukm al-Hijra — L'Obligation de Migrer"},
            { t:'ul', v:[
              "Hijra obligatoire : quitter un pays où le Muslim ne peut pas pratiquer sa religion librement.",
              "Hijra recommandée : quitter un pays pour rejoindre un environnement islamiquement meilleur.",
              "Hijra non obligatoire : rester dans un pays non-islamique pour pratiquer la Daʿwa ou aider la communauté.",
              "<strong>Position malikite contemporaine :</strong> l'Europe est Dār al-ʿAhd — la Hijra vers les pays du Golfe n'est pas obligatoire pour un Muslim vivant légalement en France."
            ] },
            {"t": "h", "v": "Al-Najāshī : Modèle de Gouvernance Non-Islamique"},
            {"t": "p", "v": "Le Négus d'Éthiopie (al-Najāshī) est un cas d'école dans le Fiqh mālikī : il a embrassé l'Islam en privé tout en restant roi d'un pays chrétien, appliquant les lois de son royaume. Le Prophète ﷺ a prié sur lui à distance après sa mort."},
            { t:'ul', v:[
              "Enseigne que un Muslim peut exercer une fonction dans un État non-islamique sans perdre son Islām.",
              "Enseigne que la pratique religieuse privée peut coexister avec la fonction publique dans un État non-islamique.",
              "Doctrine-malikite.fr cite ce précédent pour les Muslims fonctionnaires en France, dans la police, l'armée, la justice."
            ] },
            {"t": "note", "v": "La question de l'hégire (Hijra) est aujourd'hui inversée pour de nombreux Muslims : leurs ancêtres ont quitté les pays musulmans pour venir en Europe. La Sīra offre des outils pour penser cette situation : le Prophète ﷺ à La Mecque avant la Hijra, les Compagnons en Éthiopie chez al-Najāshī, et le modèle de la charte de Médine — tous illustrent que les Muslims peuvent pratiquer leur religion dans des contextes non-islamiques."}
          ]
        },
        {
          id:"sir-05",
          title:"Al-Ghazawāt wa-Fiqhuhā — Les Expéditions et leur Enseignement",
          status:'available',
          content:[
            {"t": "lead", "v": "Les campagnes militaires (Ghazawāt) du Prophète ﷺ ont établi de nombreux précédents en Fiqh al-Jihād (jurisprudence de la défense islamique), en Fiqh al-Asrā (traitement des prisonniers) et en relations internationales islamiques."},
            {"t": "h", "v": "Fiqh al-Jihād — Clarifications Essentielles"},
            { t:'ul', v:[
              "Jihād signifie littéralement « effort » — le Jihād al-Nafs (effort sur soi) est qualifié par le Prophète ﷺ de « grand Jihād ».",
              "La lutte armée (Qitāl) est une modalité spécifique et conditionnée du Jihād — pas sa définition principale.",
              "Conditions du Qitāl (combat légitime) en Fiqh mālikī : légitime défense, agressions contre les Muslims ou les Dhimmī, sous autorité d'un État islamique constitué.",
              "<strong>Pas de Qitāl individuel :</strong> un Muslim individuel ne peut décider seul de la guerre. C'est une décision d'État (Ūlū al-Amr).",
              "Le terrorisme au nom de l'Islam contredit absolument ces conditions — doctrine-malikite.fr condamne fermement toute violence non justifiée."
            ] },
            {"t": "h", "v": "Aḥkām al-Asrā — Traitement des Prisonniers"},
            { t:'ul', v:[
              "Coran 76:8 : « Ils donnent à manger au pauvre, à l'orphelin et au prisonnier par amour de Lui. »",
              "Le Prophète ﷺ a libéré de nombreux prisonniers contre rançon, par grâce ou en échange d'enseignement des Compagnons.",
              "Les Conventions de Genève modernes sur le traitement des prisonniers de guerre reflètent en partie ces principes islamiques — avec 14 siècles de retard selon certains historiens.",
              "Fiqh malikite : la cruauté envers les prisonniers est Ḥarām — même en état de guerre."
            ] },
            {"t": "h", "v": "Al-Fatḥ — La Conquête : Amnistie Générale"},
            {"t": "p", "v": "À la Fatḥ Makka (Conquête de La Mecque, an 8 H), le Prophète ﷺ a proclamé une amnistie générale pour ses ennemis de 20 ans — y compris pour ceux qui l'avaient torturé et persécuté. « Idhhabū fa-antum al-ṭulaqāʾ — Allez, vous êtes libres ! »"},
            { t:'ul', v:[
              "Modèle de réconciliation : la victoire islamique n'est pas une revanche.",
              "Enseigne le Fiqh al-ʿAfw (jurisprudence du pardon) : la clémence dans la victoire est une Sunna prophétique.",
              "Doctrine-malikite.fr : dans les conflits communautaires contemporains, la réconciliation et le pardon sont islamiquement préférables à la revanche."
            ] },
            {"t": "note", "v": "Méthode malikite d'utilisation de la Sīra : l'Imām al-Shāṭibī dans Al-Muwāfaqāt rappelle qu'on ne peut pas extraire des règles d'un épisode de la Sīra sans en comprendre le Maqṣad (finalité). La Sīra est narrative — elle montre le Prophète ﷺ répondant à des situations précises. Généraliser sans contexte est une erreur méthodologique fondamentale."}
          ]
        }],quiz:{id:"quiz-expert-sira",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-sir-01",
          text:"La période mecquoise (Al-Marḥala al-Makkiyya) de la révélation est centrée sur :",
          choices:[
          {id:"a",text:"Les lois détaillées du Fiqh"},
          {id:"b",text:"Tawḥīd, Ākhira et morale universelle — construire l'Īmān avant les lois"},
          {id:"c",text:"Le mariage et les successions"},
          {id:"d",text:"La constitution de l'État islamique"}
          ],
          correctId:"b",
          explanation:"La période mecquoise (13 ans) est théologique — elle construit les fondements de l'Īmān (croyance) : Tawḥīd, Ākhira (Vie Future), morale. Peu de Fiqh détaillé — la priorité était de préparer les cœurs à recevoir la loi. Les Āyāt Makkiyya sont généralement courtes et percutantes."
        },
        {
          id:"q-sir-02",
          text:"Le Naskh (abrogation) le plus courant dans le Coran est :",
          choices:[
          {id:"a",text:"Naskh du texte ET du jugement"},
          {id:"b",text:"Naskh du jugement seul — le texte reste dans le Coran mais la règle juridique est remplacée"},
          {id:"c",text:"Naskh du texte seul — la règle reste mais le verset disparaît"},
          {id:"d",text:"Naskh n'existe pas — tous les versets sont applicables"}
          ],
          correctId:"b",
          explanation:"Le type le plus courant de Naskh : le texte reste dans le Coran MAIS son jugement juridique est remplacé par un autre verset. Ex : Āyat al-Qibla — verset ordonnant de prier vers Jérusalem reste dans le Coran, mais son jugement est abrogé par la nouvelle Qibla vers La Mecque."
        },
        {
          id:"q-sir-03",
          text:"Quelle est la méthode malikite face à deux textes apparemment contradictoires ?",
          choices:[
          {id:"a",text:"Toujours déclarer que le plus récent abroge le plus ancien"},
          {id:"b",text:"Préférer la conciliation (Al-Jamʿ) entre les textes plutôt que de recourir au Naskh"},
          {id:"c",text:"Ignorer l'un des textes"},
          {id:"d",text:"Demander l'avis du Calife"}
          ],
          correctId:"b",
          explanation:"Méthode malikite distinctive : préférer Al-Jamʿ (conciliation) entre deux textes plutôt que d'en déclarer un abrogé. Le Naskh nécessite des preuves solides. L'Imām Mālik disait : « Si tu peux concilier deux textes, ne déclare pas l'un comme abrogé. »"
        },
        {
          id:"q-sir-04",
          text:"Wathīqat al-Madīna (la Constitution de Médine) établit notamment :",
          choices:[
          {id:"a",text:"L'interdiction pour les non-Muslims de vivre à Médine"},
          {id:"b",text:"Une Umma plurireligieuse sous autorité islamique — avec protection des droits des juifs et autres communautés"},
          {id:"c",text:"L'obligation du Jihād permanent"},
          {id:"d",text:"La suprématie arabe dans l'État islamique"}
          ],
          correctId:"b",
          explanation:"Wathīqat al-Madīna est le premier document constitutionnel islamique. Elle établit une Umma plurielle incluant Muslims, juifs et autres — avec droits et devoirs pour chacun. Doctrine-malikite.fr la cite comme fondement du Fiqh al-Muwāṭana (citoyenneté islamique contemporaine)."
        },
        {
          id:"q-sir-05",
          text:"L'avis d'un Ṣaḥābī (Compagnon) individuel en Fiqh mālikī est :",
          choices:[
          {id:"a",text:"Sans valeur juridique"},
          {id:"b",text:"Préféré au Qiyās (analogie) selon une position malikite forte"},
          {id:"c",text:"Équivalent à un Ḥadīth mutawātir"},
          {id:"d",text:"Accepté seulement s'il vient des 4 premiers Califes"}
          ],
          correctId:"b",
          explanation:"Position malikite distinctive : l'avis d'un Ṣaḥābī est une source juridique majeure — préféré au Qiyās dans de nombreux cas. Les Compagnons étaient les témoins directs du Waḥy (Révélation) et comprennent les textes mieux que quiconque après le Prophète ﷺ."
        },
        {
          id:"q-sir-06",
          text:"Les Fuqahāʾ al-Sabʿa (les Sept Juristes de Médine) ont une importance particulière dans l'école malikite car :",
          choices:[
          {id:"a",text:"Ils ont écrit le Coran"},
          {id:"b",text:"Ils ont formé l'école juridique médinoise qui a directement influencé l'Imām Mālik — transmettant la Sunna vivante des Compagnons"},
          {id:"c",text:"Ils étaient les seuls juristes de l'époque"},
          {id:"d",text:"Ils ont compilé la Muwattaʾ"}
          ],
          correctId:"b",
          explanation:"Les Fuqahāʾ al-Sabʿa — Saʿīd ibn al-Musayyab et ses six collègues — ont transmis directement la pratique des Compagnons à Médine. L'Imām Mālik a étudié sous plusieurs d'entre eux ou leurs élèves. C'est la source directe de son ʿAmal al-Madanī."
        },
        {
          id:"q-sir-07",
          text:"Le Jihād en Islam signifie-t-il principalement la guerre ?",
          choices:[
          {id:"a",text:"Oui — Jihād = guerre sainte"},
          {id:"b",text:"Non — Jihād signifie « effort » et sa forme principale est Jihād al-Nafs (effort sur soi). La lutte armée est une modalité spécifique et très conditionnée"},
          {id:"c",text:"Oui mais seulement pour les savants"},
          {id:"d",text:"Oui seulement en Dār al-Ḥarb"}
          ],
          correctId:"b",
          explanation:"Jihād = effort en arabe. Le Prophète ﷺ au retour d'une bataille : « nous revenons du petit Jihād (guerre) vers le grand Jihād (Jihād al-Nafs / — maîtrise de soi). » La lutte armée (Qitāl) est une modalité spécifique et conditionnée — pas la définition principale."
        },
        {
          id:"q-sir-08",
          text:"Ṣulḥ al-Ḥudaybiyya enseigne quel principe juridique ?",
          choices:[
          {id:"a",text:"La guerre est toujours préférable à la paix"},
          {id:"b",text:"Fiqh al-Muwāzanāt (jurisprudence des équilibres) : une concession ponctuelle peut être une victoire stratégique"},
          {id:"c",text:"Le Prophète ﷺ ne pouvait jamais se tromper dans ses jugements politiques"},
          {id:"d",text:"La paix avec les non-Muslims est Ḥarām"}
          ],
          correctId:"b",
          explanation:"À Ḥudaybiyya, le Prophète ﷺ a accepté des conditions injustes — les Compagnons étaient déçus. Mais le Coran a appelé cela Fatḥ Mubīn (Victoire Évidente). Enseigne le Fiqh al-Muwāzanāt : dans certains contextes, la concession licite est la meilleure stratégie pour l'avenir de l'Islām."
        },
        {
          id:"q-sir-09",
          text:"Dār al-ʿAhd est la catégorie malikite pour :",
          choices:[
          {id:"a",text:"Les pays en guerre avec l'Islam"},
          {id:"b",text:"Les pays non-islamiques liés par un traité de paix — comme l'Europe contemporaine selon la position malikite"},
          {id:"c",text:"Les pays gouvernés par des Ahl al-Kitāb"},
          {id:"d",text:"Les pays qui paient la Jizya"}
          ],
          correctId:"b",
          explanation:"Dār al-ʿAhd (territoire de convention) est la troisième catégorie malikite, au-delà de la dichotomie binaire Dār al-Islām / Dār al-Ḥarb. C'est la catégorie la plus pertinente pour l'Europe contemporaine selon la position malikite contemporaine — doctrine-malikite.fr et le Conseil Européen de la Fatwa l'adoptent."
        },
        {
          id:"q-sir-10",
          text:"L'exemple d'al-Najāshī (le Négus d'Éthiopie) enseigne :",
          choices:[
          {id:"a",text:"Qu'un Muslim ne peut pas vivre dans un pays non-islamique"},
          {id:"b",text:"Qu'un Muslim peut exercer une fonction dans un État non-islamique sans perdre son Islām"},
          {id:"c",text:"Que les rois non-Muslims deviennent automatiquement Muslims"},
          {id:"d",text:"Que l'Éthiopie est une terre islamique"}
          ],
          correctId:"b",
          explanation:"Al-Najāshī a embrassé l'Islām en privé tout en restant roi chrétien d'Éthiopie, appliquant les lois de son royaume. Le Prophète ﷺ a prié sur lui à distance après sa mort. Ce précédent fonde le Fiqh de la participation des Muslims dans les institutions non-islamiques — applicable aux fonctionnaires, élus et officiers Muslims en Europe."
        },
        {
          id:"q-sir-11",
          text:"Al-Tashawwuf al-Tashriʿī illustré par l'interdiction progressive de l'alcool enseigne :",
          choices:[
          {id:"a",text:"Que l'alcool était licite au début de l'Islam"},
          {id:"b",text:"La sagesse pédagogique islamique : introduire les changements progressivement pour permettre une adoption sincère et durable"},
          {id:"c",text:"Que le Coran est contradictoire"},
          {id:"d",text:"Que seuls les Compagnons avaient droit à cette progression"}
          ],
          correctId:"b",
          explanation:"L'interdiction de l'alcool est venue en 3 étapes sur plusieurs années. C'est Al-Tashawwuf al-Tashriʿī (progression pédagogique légale) : Allah a guidé les Compagnons progressivement pour une adoption sincère et durable. Ce principe s'applique en Fiqh al-Aqalliyyāt : on ne peut pas imposer tous les changements à la fois."
        },
        {
          id:"q-sir-12",
          text:"La Fatḥ Makka (Conquête de La Mecque) enseigne quel Fiqh ?",
          choices:[
          {id:"a",text:"La revanche est légitime après 20 ans de persécution"},
          {id:"b",text:"Fiqh al-ʿAfw (jurisprudence du pardon) : la clémence dans la victoire est une Sunna prophétique"},
          {id:"c",text:"La conquête militaire justifie l'expulsion des non-Muslims"},
          {id:"d",text:"Les Mecquois ont dû payer la Jizya"}
          ],
          correctId:"b",
          explanation:"À la Fatḥ Makka, le Prophète ﷺ a proclamé l'amnistie générale — « Allez, vous êtes libres ! » — pour ses ennemis de 20 ans, y compris les tortionnaires de ses Compagnons. Enseigne Fiqh al-ʿAfw : le pardon et la réconciliation après la victoire sont des Sunna prophétiques."
        },
        {
          id:"q-sir-13",
          text:"Peut-on prendre des règles juridiques directement d'un épisode de la Sīra sans son contexte ?",
          choices:[
          {id:"a",text:"Oui — chaque acte prophétique est une Sunna universelle"},
          {id:"b",text:"Non — l'Imām al-Shāṭibī exige d'identifier le Maqṣad (finalité) de chaque épisode avant d'en extraire des règles"},
          {id:"c",text:"Oui si l'acte est cité dans le Coran"},
          {id:"d",text:"Seulement si deux Ṣaḥāba le confirment"}
          ],
          correctId:"b",
          explanation:"Méthode malikite (Al-Shāṭibī dans Al-Muwāfaqāt) : la Sīra est narrative — le Prophète ﷺ répondait à des situations précises. Pour extraire une règle, il faut comprendre : (1) le contexte historique ; (2) ce qui est spécifique au Prophète ﷺ (Khāṣṣ) de ce qui est universel (ʿĀmm) ; (3) la finalité (Maqṣad) de l'acte."
        },
        {
          id:"q-sir-14",
          text:"La décision d'Abū Bakr al-Ṣiddīq de combattre les refuseurs de Zakāt a établi quel précédent ?",
          choices:[
          {id:"a",text:"Que la Zakāt est optionnelle"},
          {id:"b",text:"Que la Zakāt est un pilier de l'État islamique — son refus collectif est une menace à l'ordre islamique"},
          {id:"c",text:"Que la guerre civile est permise pour des raisons fiscales"},
          {id:"d",text:"Que seul le Calife peut collecter la Zakāt"}
          ],
          correctId:"b",
          explanation:"La décision d'Abū Bakr ﵁ de combattre les tribus qui ont refusé de payer la Zakāt après la mort du Prophète ﷺ a établi que la Zakāt n'est pas un simple acte individuel — c'est un pilier de l'État islamique. Ce précédent fonde le caractère obligatoire de la Zakāt en Fiqh mālikī et dans tous les Madhāhib."
        },
        {
          id:"q-sir-15",
          text:"Les Rasāʾil al-Nabī ﷺ (les lettres du Prophète aux rois) établissent quel principe ?",
          choices:[
          {id:"a",text:"La guerre immédiate contre tout roi non-Muslim"},
          {id:"b",text:"La Daʿwa (appel à l'Islam) aux non-Muslims est une obligation prophétique — par la sagesse et sans contrainte"},
          {id:"c",text:"Les rois ont priorité sur les savants"},
          {id:"d",text:"Le commerce international est prioritaire sur la Daʿwa"}
          ],
          correctId:"b",
          explanation:"Les lettres du Prophète ﷺ à Héraclius, Chosroès, al-Muqawqis et al-Najāshī établissent la Daʿwa internationale comme obligation prophétique — par la Ḥikma (sagesse), la parole et l'exemple, sans contrainte (Coran 2:256 : ). Ce principe fonde la Daʿwa malikite contemporaine."
        },
        {
          id:"q-sir-16",
          text:"ʿUmar ibn al-Khaṭṭāb a suspendu le Ḥadd al-Sariqa (la peine pour vol) pendant la famine. Ce précédent illustre :",
          choices:[
          {id:"a",text:"Que ʿUmar avait le droit d'abroger le Coran"},
          {id:"b",text:"Que le Fiqh doit répondre aux réalités sociales — la famine crée une Shubha (doute) qui lève le Ḥadd"},
          {id:"c",text:"Que le Ḥadd al-Sariqa est optionnel"},
          {id:"d",text:"Que le Calife peut changer les lois islamiques"}
          ],
          correctId:"b",
          explanation:"ʿUmar ﵁ n'a pas abrogé le Ḥadd — il a appliqué le principe islamique que la nécessité (Ḍarūra) et le doute (Shubha) lèvent les Ḥudūd. Quelqu'un qui vole pour survivre à une famine n'est pas dans la même situation morale qu'un voleur ordinaire. Ce précédent fonde l'adaptabilité du Fiqh mālikī face aux crises."
        },
        {
          id:"q-sir-17",
          text:"<strong>CONTEMPORAIN :</strong> La Hijra vers des pays islamiques est-elle obligatoire pour les Muslims de France ?",
          choices:[
          {id:"a",text:"Oui — tout Muslim doit vivre en pays islamique"},
          {id:"b",text:"Non — la France est Dār al-ʿAhd ; la Hijra n'est pas obligatoire quand le Muslim peut pratiquer librement"},
          {id:"c",text:"Oui seulement pour les hommes"},
          {id:"d",text:"Seulement si la mosquée du coin est fermée"}
          ],
          correctId:"b",
          explanation:"Position malikite contemporaine (doctrine-malikite.fr) : l'Europe, et la France en particulier, est Dār al-ʿAhd (territoire de convention). La liberté religieuse est garantie légalement. La Hijra n'est obligatoire que si le Muslim ne peut pas pratiquer librement sa religion — ce qui n'est pas le cas en France."
        },
        {
          id:"q-sir-18",
          text:"Al-Tashawwuf al-Tashriʿī est applicable au Fiqh al-Aqalliyyāt contemporain dans quel sens ?",
          choices:[
          {id:"a",text:"On peut supprimer des obligations islamiques pour les Muslims en Occident"},
          {id:"b",text:"On guide les Muslims nouvellement pratiquants ou en conversion avec la même progressivité que les Compagnons ont reçue — sans imposer tous les changements à la fois"},
          {id:"c",text:"La Sharīʿa change selon les pays"},
          {id:"d",text:"Le Fiqh al-Aqalliyyāt peut supprimer des règles coraniques"}
          ],
          correctId:"b",
          explanation:"Al-Tashawwuf al-Tashriʿī (progression pédagogique) en Fiqh al-Aqalliyyāt : guider les Muslims en Occident progressivement — les fondamentaux d'abord (Tawḥīd, Ṣalāt, Ṣiyām), puis les détails. Ne pas décourager par l'exigence totale et immédiate. C'est la méthode prophétique appliquée au contexte contemporain."
        },
        {
          id:"q-sir-19",
          text:"Pourquoi l'Imām Mālik citait-il les pratiques des Tābiʿīn autant que les Ḥadīths ?",
          choices:[
          {id:"a",text:"Parce qu'il ne connaissait pas beaucoup de Ḥadīths"},
          {id:"b",text:"Parce qu'une chaîne de pratique continue (Silsila ʿAmaliyya) est plus fiable qu'un Ḥadīth Āḥād isolé pour préserver la Sunna vivante"},
          {id:"c",text:"Parce que les Tābiʿīn sont supérieurs aux Ṣaḥāba"},
          {id:"d",text:"Parce que c'était la coutume médinoise d'ignorer les Ḥadīths"}
          ],
          correctId:"b",
          explanation:"L'Imām Mālik voyait dans la pratique continue des Tābiʿīn à Médine — transmise de maître en maître sans rupture — une Sunna vivante plus fiable qu'un Ḥadīth Āḥād isolé. C'est la logique du ʿAmal al-Madanī : la pratique collective transmet ce qu'un transmetteur seul ne peut pas capturer."
        },
        {
          id:"q-sir-20",
          text:"<strong>SYNTHÈSE :</strong> En quoi la Sīra est-elle une source distinctive du Fiqh mālikī ?",
          choices:[
          {id:"a",text:"L'école malikite n'utilise pas la Sīra"},
          {id:"b",text:"L'école malikite utilise la Sīra pour : extraire le Fiqh al-Muwāzanāt, le Tashawwuf al-Tashriʿī, le Fiqh al-Aqalliyyāt et les précédents des Ṣaḥāba — avec méthode contextuelle"},
          {id:"c",text:"La Sīra remplace le Coran en malikite"},
          {id:"d",text:"Seuls les épisodes guerriers de la Sīra sont utilisés"}
          ],
          correctId:"b",
          explanation:"La Sīra dans le Fiqh mālikī : source de Sunna vivante (via Ṣaḥāba et Tābiʿīn), modèles de gouvernance plurielle (Wathīqat al-Madīna), de Fiqh al-Muwāzanāt (Ḥudaybiyya), de Tashawwuf al-Tashriʿī (alcool), de Fiqh al-ʿAfw (Fatḥ Makka). Avec méthode rigoureuse : contexte toujours examiné avant extraction de règles."
        }]}},
    {id:"aqalliyyat",title:"Fiqh des Minorités Musulmanes",arabicTitle:"فِقه الأَقلِّيَّات والمُوَاطَنَة",icon:"globe-m",description:"Citoyenneté, participation, défis pratiques et coexistence : l'Islam en pays non-islamique selon la méthode malikite.",source:"doctrine-malikite.fr · Conseil Européen de la Fatwa",badge:{id:"badge-expert-aqalliyyat",title:"Juriste des Minorités",arabicTitle:"فَقِيهُ الأَقلِّيَّات",icon:"globe-m",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"aqal-01",
          title:"Uṣūl Fiqh al-Aqalliyyāt — Fondements Théoriques",
          status:'available',
          content:[
            {"t": "lead", "v": "Fiqh al-Aqalliyyāt (jurisprudence des minorités) est un corpus juridique en plein développement depuis les années 1990. Il répond à une question fondamentale : comment un Muslim vivant dans une société non-islamique peut-il pratiquer son Islām pleinement tout en remplissant ses obligations civiques ? Doctrine-malikite.fr en est l'une des principales références en langue française."},
            {"t": "h", "v": "Définition et légitimité"},
            { t:'ul', v:[
              "Fiqh al-Aqalliyyāt n'est PAS un Islam allégé — c'est l'application rigoureuse des sources islamiques à des situations nouvelles.",
              "Il ne crée pas de nouvelles obligations ni ne supprime des obligations existantes — il interprète comment les appliquer dans un contexte non-islamique.",
              "Principaux promoteurs contemporains : le Cheikh Yūsuf al-Qaraḍāwī, le Dr ʿAbd Allāh ibn Bayyah — tous deux influencés par la méthode malikite.",
              "Base légale : la Maṣlaḥa al-Mursala et les Maqāṣid al-Sharīʿa — sources exclusivement malikites."
            ] },
            {"t": "h", "v": "Les 3 Questions Fondamentales"},
            { t:'ul', v:[
              "<strong>1. Ayna (Où) ?</strong> La notion de territoire : Dār al-ʿAhd (Europe), Dār al-Islām, Dār al-Ḥarb et leurs implications.",
              "<strong>2. Kayfa (Comment) ?</strong> Les modalités de pratique islamique en contexte non-islamique : quelles concessions sont permises, lesquelles ne le sont pas.",
              "<strong>3. Mādhā (Quoi) ?</strong> Les obligations qui restent incontournables en toutes circonstances (Ṣalāt, Ṣiyām, Tawḥīd...) vs celles qui peuvent être adaptées dans leur forme."
            ] },
            {"t": "h", "v": "Istiṣḥāb al-Barāʾa — Principe de Base"},
            {"t": "p", "v": "Le principe de liberté (Ibāḥa Aṣliyya) : tout est licite par défaut sauf ce qui est explicitement interdit. En Fiqh al-Aqalliyyāt, ce principe est essentiel : les institutions civiles (école, hôpital, banque...) sont par défaut permises — sauf preuve contraire."},
            {"t": "note", "v": "Doctrine-malikite.fr distingue deux approches en Fiqh al-Aqalliyyāt : (1) approche restrictive (« tout ce qui n'est pas islamique est suspect ») — rejetée ; (2) approche libérale fondée sur l'Ibāḥa Aṣliyya et les Maqāṣid al-Sharīʿa — adoptée. La seconde approche est plus fidèle à la méthode malikite historique."}
          ]
        },
        {
          id:"aqal-02",
          title:"Al-Muwāṭana wa-l-Mushāraka — Citoyenneté et Participation",
          status:'available',
          content:[
            {"t": "lead", "v": "La citoyenneté française d'un Muslim est-elle compatible avec son Islām ? La participation dans les institutions non-islamiques est-elle permise ? Ces questions fondamentales ont des réponses claires dans le Fiqh mālikī contemporain."},
            {"t": "h", "v": "Ūlū al-Amr en pays non-islamique"},
            {"t": "p", "v": "Le Coran 4:59 ordonne : « Obéissez à Allah, obéissez au Messager et à Ūlū al-Amr (ceux qui détiennent l'autorité) parmi vous. » En France, les Ūlū al-Amr sont les lois et institutions de la République — dans leur domaine."},
            { t:'ul', v:[
              "Le Muslim est tenu de respecter les lois françaises : fiscalité, droit civil, code de la route, etc.",
              "Limite islamique : l'obéissance aux Ūlū al-Amr cesse si elle implique un péché explicite (Maʿṣiya).",
              "Doctrine-malikite.fr : « L'obligation civique et l'obligation islamique se complètent dans la quasi-totalité des cas en France. »"
            ] },
            {"t": "h", "v": "Al-Tawāṭuʾ al-Siyāsī — Participation Politique"},
            { t:'ul', v:[
              "Voter aux élections françaises est permis — voire recommandé — pour choisir la moins mauvaise option (Akhfaf al-Ḍarārayn).",
              "Se présenter à des élections : permis. Un Muslim peut être conseiller municipal, député, sénateur.",
              "Doctrine-malikite.fr cite le précédent de Yūsuf (Joseph) : il a demandé et accepté une fonction dans l'État d'un pharaon non-Muslim pour servir sa communauté (Coran 12:55).",
              "Conditions : ne pas commettre de Ḥarām dans l'exercice des fonctions, rester intègre."
            ] },
            {"t": "h", "v": "Al-Khidma al-ʿAskariyya — Service Militaire"},
            { t:'ul', v:[
              "Permis en France — sous les mêmes conditions que toute autre fonction publique.",
              "Un Muslim soldat français peut refuser des missions clairement contraires à l'Islām — mais cela reste une décision individuelle grave.",
              "Le précédent d'al-Najāshī s'applique : exercer une fonction d'État non-islamique sans renier sa foi est une Sunna établie.",
              "Doctrine-malikite.fr : servir dans l'armée française pour défendre la sécurité des Français (y compris des Muslims) est islamiquement légitimable."
            ] },
            {"t": "h", "v": "Al-Taʾmīn et les Systèmes Sociaux"},
            { t:'ul', v:[
              "La Sécurité Sociale, les retraites et l'assurance chômage sont permis en France — nécessité légale (Ḍarūra) et intérêt général (Maṣlaḥa).",
              "L'assurance automobile obligatoire : permise par Ḍarūra selon la majorité des savants malikites contemporains.",
              "L'assurance vie commerciale : divergence — le Takāful (assurance islamique mutuelle) est préférable si disponible.",
              "Doctrine-malikite.fr : les obligations légales françaises (assurances, cotisations) ne constituent pas du Ribā au sens juridique islamique."
            ] },
            {"t": "note", "v": "Le principe juridique malikite du Fiqh al-Aqalliyyāt en matière civique : Al-Maʾdhdhin bi-l-Awāʾil Maʾdhdhin bi-l-Tawābiʿ (qui autorise le principal autorise l'accessoire). Si résider légalement en France est islamiquement permis, alors participer aux institutions françaises (vote, travail, école) l'est aussi — c'est la conséquence logique."}
          ]
        },
        {
          id:"aqal-03",
          title:"Al-Taḥaddiyāt al-ʿAmaliyya — Défis Pratiques du Muslim en Occident",
          status:'available',
          content:[
            {"t": "lead", "v": "Au quotidien, le Muslim en France rencontre des situations que le Fiqh classique n'a pas traitées directement. Doctrine-malikite.fr et le Conseil Européen de la Fatwa (CEF) ont développé des réponses basées sur les principes malikites."},
            {"t": "h", "v": "La Nourriture et les Produits Ḥalāl"},
            { t:'ul', v:[
              "Les viandes Ahl al-Kitāb : le Fiqh mālikī les permet en général (Coran 5:5) — s'applique aux viandes de supermarchés en France selon une position malikite.",
              "La Gélatine issue de porc après transformation chimique complète (Istiḥāla) : position malikite — licite si transformation totale.",
              "L'alcool dans les médicaments et parfums : position malikite — usage externe et quantité infime non enivrant = permis.",
              "Les restaurants non-certifiés Ḥalāl : si les viandes viennent de sources Ahl al-Kitāb et qu'on ignore si du porc est mélangé, la Ibāḥa s'applique avec prudence.",
              "Doctrine-malikite.fr : la Tazkiya (certification) islamique des produits est recommandée mais pas toujours obligatoire."
            ] },
            {"t": "h", "v": "La Ṣalāt (Prière) en Contexte Professionnel"},
            { t:'ul', v:[
              "Demander une pause pour la Ṣalāt (prière) au travail : recommandé et généralement légalement protégé en France (liberté religieuse).",
              "Ṣalāt Qaṣr (prière raccourcie) en voyage : dès 80-90 km selon les positions malikites.",
              "Jamʿ (regroupement) des prières Ẓuhr/ʿAṣr ou Maghrib/ʿIshāʾ : permis pour le travailleur qui ne peut pas prier séparément.",
              "La Jumʿa (prière du vendredi) : obligation maintenue même en Occident — si impossible, la Ẓuhr la remplace."
            ] },
            {"t": "h", "v": "Le Mariage, le Divorce Civil et l'Héritage"},
            { t:'ul', v:[
              "Mariage islamique ET civil : doctrine-malikite.fr recommande fermement les deux — le mariage civil protège les droits légaux de la femme et des enfants.",
              "Divorce civil seul : ne libère pas islamiquement l'épouse — il faut aussi le Ṭalāq islamique ou le Khulʿ.",
              "Héritage : les héritiers Muslims peuvent convenir entre eux (après règlement civil) d'appliquer les parts islamiques (Farāʾiḍ) — convention privée moralement contraignante.",
              "L'adoption plénière en France : crée des droits civils mais pas de filiation islamique (Naṣab) — les deux systèmes coexistent."
            ] },
            {"t": "h", "v": "Al-Ribā et le Financement Immobilier en France"},
            { t:'ul', v:[
              "Crédit immobilier classique : Ribā islamiquement — éviter si alternatives disponibles.",
              "Alternatives islamiques disponibles en France : Murābaḥa bancaire islamique, Ijāra Muntahiya bi-l-Tamlīk (crédit-bail), Musharaka Mutanaqiṣa.",
              "Si aucune alternative islamique n'est accessible et que le logement est une nécessité absolue : divergence parmi les savants malikites — certains permettent le crédit classique par Ḍarūra, d'autres refusent.",
              "Doctrine-malikite.fr : chercher d'abord les alternatives islamiques. La Ḍarūra n'est pas automatique — elle nécessite une vraie impossibilité, pas une simple préférence."
            ] },
            {"t": "note", "v": "Principe malikite clé du Fiqh al-Aqalliyyāt : « Al-Mashaqqa Tajlib al-Taysīr — La difficulté attire le facilité. » Quand une pratique islamique crée une difficulté disproportionnée dans le contexte français, le Fiqh mālikī offre des alternatives licites — sans abandonner le principe. Le but n'est pas de rendre tout licite, mais de trouver des voies islamiques praticables."}
          ]
        },
        {
          id:"aqal-04",
          title:"Al-Daʿwa wa-l-Taʿāyush — L'Appel à l'Islam et la Coexistence",
          status:'available',
          content:[
            {"t": "lead", "v": "Un Muslim en France a-t-il l'obligation de faire la Daʿwa (appel à l'Islam) ? Comment coexister avec des compatriotes non-Muslims ? La réponse malikite, fondée sur la Sīra et doctrine-malikite.fr, est nuancée et profondément respectueuse."},
            {"t": "h", "v": "Ḥukm al-Daʿwa — Statut de l'Appel à l'Islam"},
            { t:'ul', v:[
              "La Daʿwa est une obligation collective (Farḍ Kifāya) — si une partie de la communauté l'accomplit, tous sont exonérés.",
              "La Daʿwa par l'exemple (Uswat al-Ḥasana) — être un bon voisin, collègue, citoyen intègre — est accessible à chaque Muslim et parfois plus efficace que les paroles.",
              "La Daʿwa verbale directe : permise et recommandée — avec Ḥikma (sagesse), Mawʿiẓa (bonne parole) et dialogue (Coran 16:125).",
              "Forcer ou presser quelqu'un vers l'Islām : interdit — Coran 2:256 « »."
            ] },
            {"t": "h", "v": "Ḥuqūq al-Jīrān wa-l-Mujtamaʿ — Droits des Voisins"},
            { t:'ul', v:[
              "Les droits des voisins sont universels en Islam — Muslim ou non.",
              "Ne pas nuire : interdire à ses enfants de salir l'escalier, éviter le vacarme nocturne, respecter les espaces communs.",
              "Aider en cas de besoin : islamiquement recommandé et prophétiquement fondé.",
              "Hadīth du Prophète ﷺ sur Jibrīl : « Il m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. »",
              "Doctrine-malikite.fr : la réputation du Muslim dans son quartier est un acte de Daʿwa en soi."
            ] },
            {"t": "h", "v": "Al-Taʿāmul maʿa Ghayr al-Muslims — Relations Sociales"},
            { t:'ul', v:[
              "Offrir et recevoir des cadeaux des non-Muslims : permis et même recommandé pour renforcer les liens.",
              "Manger avec des non-Muslims (nourriture Ḥalāl) : permis.",
              "Assister aux événements non-religieux (anniversaires, fêtes civiles, mariages civils) : permis selon la majorité des savants malikites contemporains.",
              "Assister aux cérémonies religieuses non-islamiques : divergence — la présence passive (sans participation active aux actes religieux non-islamiques) est permise par certains savants malikites.",
              "Les vœux de Noël et autres fêtes : divergence — certains malikites permettent les formules de courtoisie civile ; d'autres les déconseillent."
            ] },
            {"t": "h", "v": "Wāqiʿ al-Islāmophobia — Islamophobie et Réponse Islamique"},
            { t:'ul', v:[
              "La dignité du Muslim est protégée islamiquement — il peut se défendre légalement face à la discrimination.",
              "La réponse islamique à l'Islamophobie : par la loi civile, par l'exemple exemplaire et par la Daʿwa — jamais par la violence.",
              "Doctrine-malikite.fr : « La meilleure réponse à l'Islamophobie est un Muslim exemplaire dans sa profession, sa famille et son quartier. »",
              "Coran 41:34 : « Repousse [le mal] par ce qui est meilleur — et voilà que celui avec qui tu avais une inimitié devient un ami chaleureux. »"
            ] },
            {"t": "note", "v": "La vision malikite de la coexistence : l'Islām n'a pas pour objectif de créer une société islamique homogène mais de permettre à chaque Muslim de pratiquer sa foi avec dignité et intégrité, dans un respect mutuel avec les autres composantes de la société. Wathīqat al-Madīna reste le modèle — une société plurielle et juste."}
          ]
        },
        {
          id:"aqal-05",
          title:"Al-Islām al-Faransī — L'Islam de France et ses Spécificités",
          status:'available',
          content:[
            {"t": "lead", "v": "L'Islam en France est le deuxième Islam en Europe par la taille de sa communauté. Sa spécificité historique — profondément malikite et Ṣūfī dans ses origines maghrébines et africaines — lui confère un rapport particulier à la Sharīʿa et aux institutions françaises."},
            {"t": "h", "v": "Al-Khuṣūṣiyya al-Mālikiyya li-Islam Faransā"},
            { t:'ul', v:[
              "La majorité des Muslims de France (origine magrébine et africaine) sont historiquement malikites — même s'ils l'ignorent souvent.",
              "Le Fiqh mālikī, avec sa Maṣlaḥa al-Mursala et son ʿUrf (coutume locale), est structurellement adapté pour répondre aux réalités françaises.",
              "Les Ṭuruq Ṣūfiyya (confréries soufies) — Tijāniyya, Qādiriyya, Shādhiliyya — toutes d'obédience malikite, constituent une ressource spirituelle et communautaire majeure."
            ] },
            {"t": "h", "v": "Al-Hayāʾ al-Islāmiyya al-Faransiyya — Institutions Islamiques"},
            { t:'ul', v:[
              "Le CFCM (Conseil Français du Culte Musulman) : institution de représentation officielle — rôle important mais limité.",
              "Les associations islamiques locales : ressource principale de Fiqh pratique pour les Muslims ordinaires.",
              "Les Imāms formés en France : enjeu majeur — doctrine-malikite.fr appelle à une formation qui inclut le Fiqh al-Aqalliyyāt.",
              "Les lycées et écoles islamiques privées sous contrat : instrument éducatif islamique légalement intégré."
            ] },
            {"t": "h", "v": "Al-Azmāt al-Muʿāṣira — Crises Contemporaines"},
            { t:'ul', v:[
              "La laïcité française et le Ḥijāb : doctrine-malikite.fr maintient l'obligation islamique du port du voile pour les femmes pubères tout en comprenant le cadre légal français.",
              "Dans l'espace public/scolaire français : la femme Muslim peut choisir ses modalités en tenant compte des contraintes légales et de la Ḍarūra sociale.",
              "La radicalisation : le Fiqh mālikī — avec son Tawassut (voie du milieu) et son rejet du Takfīr (anathème) — est le meilleur antidote intellectuel à l'extrémisme.",
              "La question Halāl dans les cantines scolaires : demander des menus végétariens est une solution pratique et malikitement valide."
            ] },
            {"t": "h", "v": "Ruʾya Mustaqbaliyya — Vers un Islam de France Épanoui"},
            {"t": "p", "v": "Doctrine-malikite.fr conclut sa section sur le Fiqh al-Aqalliyyāt avec une vision : un Muslim français n'a pas à choisir entre son Islām et sa citoyenneté française. Les deux identités sont complémentaires et enrichissantes. La Sīra du Prophète ﷺ, le Fiqh mālikī avec sa flexibilité et ses Maqāṣid al-Sharīʿa, et la tradition musulmane française — africaine, maghrébine, Ṣūfiyya — constituent une ressource exceptionnelle pour construire cet Islam français épanoui."},
            {"t": "note", "v": "Message final : le Fiqh al-Aqalliyyāt n'est pas une capitulation face à la France laïque — c'est la mise en œuvre intelligente, rigoureuse et courageuse de l'Islām dans un contexte spécifique. Comme l'Imām Mālik à Médine sous les Abbassides, comme al-Najāshī en Éthiopie, comme les savants de Tombouctou sous des rois non-islamiques — la tradition malikite a toujours su naviguer entre fidélité aux principes et intelligence des contextes."}
          ]
        }],quiz:{id:"quiz-expert-aqalliyyat",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-aqal-01",
          text:"Fiqh al-Aqalliyyāt est :",
          choices:[
          {id:"a",text:"Un Islam allégé pour les Muslims en Occident"},
          {id:"b",text:"L'application rigoureuse des sources islamiques à des situations nouvelles — ni allègement ni invention"},
          {id:"c",text:"Un nouveau Madhhab"},
          {id:"d",text:"Une jurisprudence qui remplace le Madhhab mālikī"}
          ],
          correctId:"b",
          explanation:"Fiqh al-Aqalliyyāt n'est PAS un Islam allégé — c'est l'Ijtihād rigoureux appliqué aux situations inédites des Muslims en Occident. Il ne crée pas de nouvelles obligations ni n'en supprime d'existantes. Il se base sur la Maṣlaḥa al-Mursala et les Maqāṣid al-Sharīʿa malikites."
        },
        {
          id:"q-aqal-02",
          text:"L'Europe est considérée comme Dār al-ʿAhd dans le Fiqh mālikī contemporain. Qu'implique cette classification ?",
          choices:[
          {id:"a",text:"Les Muslims n'ont pas d'obligations islamiques en Europe"},
          {id:"b",text:"L'Europe est un territoire de convention et de paix — ni Dār al-Islām ni Dār al-Ḥarb. Les Muslims peuvent y vivre et pratiquer librement"},
          {id:"c",text:"Les Muslims doivent quitter l'Europe pour un pays islamique"},
          {id:"d",text:"La Sharīʿa doit y être appliquée immédiatement"}
          ],
          correctId:"b",
          explanation:"La classification malikite de l'Europe comme Dār al-ʿAhd (territoire de convention) signifie : ni Dār al-Islām (gouverné par la Sharīʿa) ni Dār al-Ḥarb (en guerre). La Hijra n'est pas obligatoire — les Muslims peuvent résider légalement et pratiquer librement leur Islām."
        },
        {
          id:"q-aqal-03",
          text:"Le précédent du prophète Yūsuf (Joseph) en Fiqh al-Aqalliyyāt enseigne :",
          choices:[
          {id:"a",text:"Qu'il faut fuir les pays non-islamiques"},
          {id:"b",text:"Qu'un Muslim peut accepter une fonction dans un État non-islamique pour servir sa communauté et pratiquer la justice (Coran 12:55)"},
          {id:"c",text:"Que l'Égypte était islamique au temps de Yūsuf"},
          {id:"d",text:"Que le commerce avec les non-Muslims est interdit"}
          ],
          correctId:"b",
          explanation:"Coran 12:55 : Yūsuf a demandé et accepté un poste de ministre des finances chez un pharaon non-Muslim pour servir sa communauté. Ce précédent fonde islamiquement la participation des Muslims dans les institutions non-islamiques — gouvernement, administration, armée — pour servir le bien commun."
        },
        {
          id:"q-aqal-04",
          text:"La Ṣalāt (prière) reste-t-elle obligatoire en toutes circonstances en Occident ?",
          choices:[
          {id:"a",text:"Non — les Muslims en Occident peuvent la réduire à 2 fois par jour"},
          {id:"b",text:"Oui — la Ṣalāt est une obligation incontournable ; le Fiqh al-Aqalliyyāt propose des facilités (Jamʿ, Qaṣr) mais ne la supprime pas"},
          {id:"c",text:"Oui mais seulement pour les hommes en Occident"},
          {id:"d",text:"Non si le travail l'empêche"}
          ],
          correctId:"b",
          explanation:"La Ṣalāt (prière) est un pilier absolu — inchangeable par le Fiqh al-Aqalliyyāt. Ce qui change : les modalités pratiques. Le Fiqh mālikī offre : Jamʿ (regroupement des prières), Qaṣr (raccourcissement en voyage), Ṣalāt dans les espaces disponibles. La prière ne peut pas être abandonnée."
        },
        {
          id:"q-aqal-05",
          text:"La Daʿwa en France est :",
          choices:[
          {id:"a",text:"Obligatoire pour chaque Muslim individuellement"},
          {id:"b",text:"Un Farḍ Kifāya (obligation communautaire) — par l'exemple, la parole sage et le dialogue, jamais par la contrainte"},
          {id:"c",text:"Interdite dans les pays laïcs"},
          {id:"d",text:"Permise seulement par les imāms"}
          ],
          correctId:"b",
          explanation:"La Daʿwa est Farḍ Kifāya — collective. La méthode : Uswat al-Ḥasana (bon exemple), Ḥikma (sagesse), Mawʿiẓa (bonne parole), dialogue sincère. La contrainte est absolument interdite — Coran 2:256 : « »."
        },
        {
          id:"q-aqal-06",
          text:"Voter aux élections françaises est :",
          choices:[
          {id:"a",text:"Ḥarām — participer à un système non-islamique"},
          {id:"b",text:"Permis et même recommandé selon le Fiqh mālikī contemporain — pour choisir la moins mauvaise option (Akhfaf al-Ḍarārayn)"},
          {id:"c",text:"Permis seulement si le candidat est Muslim"},
          {id:"d",text:"Mubāḥ (neutre) mais sans aucune recommandation"}
          ],
          correctId:"b",
          explanation:"La position malikite contemporaine (doctrine-malikite.fr et ʿAbd Allāh ibn Bayyah) : voter est permis et même recommandé pour choisir Akhfaf al-Ḍarārayn (la moins mauvaise option). Le précédent de Yūsuf et d'al-Najāshī fonde la participation dans les systèmes politiques non-islamiques pour servir le bien commun."
        },
        {
          id:"q-aqal-07",
          text:"Le mariage islamique sans mariage civil en France est-il recommandé par doctrine-malikite.fr ?",
          choices:[
          {id:"a",text:"Oui — le mariage islamique suffit"},
          {id:"b",text:"Non — doctrine-malikite.fr recommande fermement les deux : le mariage civil protège les droits légaux de la femme et des enfants"},
          {id:"c",text:"Oui si deux témoins Muslims sont présents"},
          {id:"d",text:"Non — seul le mariage civil compte"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr est ferme : mariage islamique ET civil sont requis. Le mariage civil protège : (1) les droits patrimoniaux de la femme en cas de divorce ou décès ; (2) la filiation légale des enfants ; (3) les droits successoraux. Un Nikāḥ sans mariage civil expose la femme à de graves inégalités légales."
        },
        {
          id:"q-aqal-08",
          text:"La Ḍarūra (nécessité) justifie-t-elle automatiquement le crédit immobilier à intérêt en France ?",
          choices:[
          {id:"a",text:"Oui — logement = nécessité absolue"},
          {id:"b",text:"Non — la Ḍarūra nécessite une vraie impossibilité (pas de Ḥalāl disponible, situation critique). Si des alternatives islamiques existent, elles doivent être explorées d'abord"},
          {id:"c",text:"Oui si le taux est faible"},
          {id:"d",text:"Oui pour la résidence principale uniquement"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : la Ḍarūra s'applique à une VRAIE impossibilité — pas à une préférence ou une commodité. Si Murābaḥa islamique ou Ijāra Muntahiya bi-l-Tamlīk sont disponibles → les utiliser. La Ḍarūra n'est pas automatique."
        },
        {
          id:"q-aqal-09",
          text:"Al-Mashaqqa Tajlib al-Taysīr est un principe malikite qui signifie :",
          choices:[
          {id:"a",text:"La difficulté supprime les obligations"},
          {id:"b",text:"La difficulté attire la facilité — le Fiqh offre des alternatives licites en cas de réelle difficulté, sans abandonner le principe"},
          {id:"c",text:"Plus c'est difficile, plus c'est méritoire"},
          {id:"d",text:"La facilité est toujours préférable à la rigueur"}
          ],
          correctId:"b",
          explanation:"Ce Qāʿida Fiqhiyya (règle juridique générale) malikite : la réelle difficulté (Mashaqqa) ouvre la voie aux facilités (Rukhaṣ) islamiques. Mais le principe reste intact — on trouve une voie islamique praticable, on ne supprime pas l'obligation. Ex : impossible de faire Wuḍūʾ → Tayammum ; pas d'eau Ḥalāl → nourriture Ahl al-Kitāb."
        },
        {
          id:"q-aqal-10",
          text:"<strong>CONTEMPORAIN :</strong> Pourquoi l'Islam malikite est-il structurellement bien adapté au contexte français ?",
          choices:[
          {id:"a",text:"Parce qu'il est le plus facile parmi les 4 Madhāhib"},
          {id:"b",text:"Parce que sa Maṣlaḥa al-Mursala, son ʿUrf et ses Maqāṣid al-Sharīʿa permettent une adaptation rigoureuse aux réalités françaises — et la majorité des Muslims de France sont historiquement malikites"},
          {id:"c",text:"Parce que ses règles sont moins contraignantes"},
          {id:"d",text:"Parce qu'il a été développé en France"}
          ],
          correctId:"b",
          explanation:"Le Fiqh mālikī est adapté au contexte français pour des raisons méthodologiques ET historiques : (1) Maṣlaḥa al-Mursala — répond aux situations nouvelles ; (2) ʿUrf — intègre les réalités locales ; (3) Maqāṣid al-Sharīʿa — évalue les situations selon les finalités islamiques ; (4) la majorité des Muslims de France (origine maghrébine/africaine) sont historiquement malikites."
        },
        {
          id:"q-aqal-11",
          text:"Les droits des voisins non-Muslims d'un Muslim français incluent :",
          choices:[
          {id:"a",text:"Seulement le droit à ne pas être nuire par lui"},
          {id:"b",text:"Ne pas nuire, aider en cas de besoin, respecter les espaces communs — les mêmes droits que les voisins Muslims selon le Fiqh islamique"},
          {id:"c",text:"Aucun droit islamique car non-Muslims"},
          {id:"d",text:"Seulement si le quartier est majoritairement Muslim"}
          ],
          correctId:"b",
          explanation:"Hadīth du Prophète ﷺ : « Jibrīl m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. » Les droits du voisin en Islām sont universels — Muslim ou non. Doctrine-malikite.fr : la bonne réputation du Muslim dans son quartier est un acte de Daʿwa en soi."
        },
        {
          id:"q-aqal-12",
          text:"La réponse islamique à l'islamophobie selon doctrine-malikite.fr est :",
          choices:[
          {id:"a",text:"La violence en cas d'insulte grave"},
          {id:"b",text:"La défense légale civile + l'exemple exemplaire + la Daʿwa — jamais la violence"},
          {id:"c",text:"L'isolement de la société française"},
          {id:"d",text:"La réciprocité — insulte pour insulte"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr : « La meilleure réponse à l'islamophobie est un Muslim exemplaire dans sa profession, sa famille et son quartier. » Réponse islamique : (1) défense légale civile — les lois françaises protègent contre la discrimination ; (2) Daʿwa par l'exemple ; (3) jamais la violence. Coran 41:34 : « Repousse par ce qui est meilleur. »"
        },
        {
          id:"q-aqal-13",
          text:"Le Ṭalāq (divorce islamique) seul libère-t-il l'épouse en France ?",
          choices:[
          {id:"a",text:"Oui — le Ṭalāq islamique suffit"},
          {id:"b",text:"Non — le Ṭalāq libère islamiquement mais un divorce civil est nécessaire pour libérer légalement ; les deux doivent être effectués"},
          {id:"c",text:"Oui si prononcé devant deux témoins Muslims"},
          {id:"d",text:"Non — seul le divorce civil compte islamiquement en France"}
          ],
          correctId:"b",
          explanation:"En France : le Ṭalāq islamique libère la femme islamiquement (avec son ʿIdda). Mais sans divorce civil, elle reste légalement mariée aux yeux de l'État — avec des implications sur les biens, les enfants et l'état civil. Les deux procédures sont nécessaires : Ṭalāq islamique ET divorce civil."
        },
        {
          id:"q-aqal-14",
          text:"Les confréries soufies (Ṭuruq Ṣūfiyya) d'obédience malikite en France représentent :",
          choices:[
          {id:"a",text:"Une déviation de l'Islam authentique"},
          {id:"b",text:"Une ressource spirituelle et communautaire majeure pour les Muslims franco-africains et franco-maghrébins — Tijāniyya, Qādiriyya, Shādhiliyya"},
          {id:"c",text:"Une école juridique distincte du Fiqh mālikī"},
          {id:"d",text:"Un Islam non orthodoxe à éviter"}
          ],
          correctId:"b",
          explanation:"Les Ṭuruq Ṣūfiyya d'obédience malikite — Tijāniyya, Qādiriyya, Shādhiliyya — sont pleinement inscrites dans la tradition islamique malikite. Elles constituent une ressource spirituelle, éducative et communautaire essentielle pour les millions de Muslims franco-africains et franco-maghrébins."
        },
        {
          id:"q-aqal-15",
          text:"<strong>SYNTHÈSE :</strong> La vision malikite de l'Islam français est :",
          choices:[
          {id:"a",text:"L'Islam français doit créer une société islamique séparée"},
          {id:"b",text:"Un Muslim français peut pratiquer son Islām pleinement tout en étant un citoyen français pleinement engagé — les deux identités sont complémentaires selon la méthode malikite"},
          {id:"c",text:"L'Islam doit s'adapter au point de devenir un Islam sans Sharīʿa"},
          {id:"d",text:"Seuls les Maghrébins peuvent pratiquer l'Islam malikite en France"}
          ],
          correctId:"b",
          explanation:"La vision malikite : un Muslim français n'a pas à choisir entre son Islām et sa citoyenneté. Fiqh al-Aqalliyyāt + Maqāṣid al-Sharīʿa + tradition soufie malikite = ressources pour un Islam français épanoui. La Sīra du Prophète ﷺ à Médine — société plurielle, droits pour tous — reste le modèle."
        }]}},
    {id:"bioethique",title:"Bioéthique et Grandes Questions Contemporaines",arabicTitle:"البِيُوإِثِيقَا والمُسْتَجَدَّات الكُبرَى",icon:"leaf-b",description:"Don d'organes, PMA, fin de vie, IA, cryptomonnaies et écologie islamique : réponses mālikītes aux questions inédites.",source:"doctrine-malikite.fr · Majmaʿ al-Fiqh · Conseil Européen de la Fatwa",badge:{id:"badge-expert-bioethique",title:"Expert en Bioéthique",arabicTitle:"فَقِيهُ المُسْتَجَدَّات",icon:"leaf-b",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"bio-01",
          title:"Don d'Organes et Transplantation — Position Islamique",
          status:'available',
          content:[
            {"t": "lead", "v": "Le don d'organes est l'une des questions de bioéthique les plus débattues en Fiqh contemporain. Le Majmaʿ al-Fiqh al-Islāmī (Académie Internationale du Fiqh Islamique) et le Conseil Européen de la Fatwa y ont consacré des sessions entières. L'école malikite offre des outils méthodologiques précieux pour y répondre."},
            {"t": "h", "v": "Cadre général : Ḍarūra et Maṣlaḥa"},
            {"t": "p", "v": "Deux principes malikites fondamentaux s'appliquent : la Ḍarūra (nécessité vitale) et la Maṣlaḥa al-Mursala (intérêt général non textué). Si aucun texte ne mentionne explicitement la transplantation, les Maqāṣid al-Sharīʿa — notamment Ḥifẓ al-Nafs (protection de la vie) — permettent d'en déduire le jugement."},
            {"t": "h", "v": "Position du Majmaʿ al-Fiqh — Don permis sous conditions"},
            { t:'ul', v:[
              "Résolution du Majmaʿ al-Fiqh al-Islāmī (1988, session 4) : le don d'organes est permis islamiquement, de son vivant ou après la mort, sous conditions strictes.",
              "Conditions pour le don du vivant : (1) le donneur est adulte et sain d'esprit ; (2) le don ne met pas la vie du donneur en danger ; (3) le consentement est libre et éclairé ; (4) le receveur en a une nécessité vitale.",
              "Conditions pour le don post-mortem : (1) testament du défunt ou accord de la famille ; (2) constatation légale du décès ; (3) respect du corps après prélèvement.",
              "Le prélèvement sur un mort est assimilable au Daʿwa de secours — comme couper le ventre d'une mère décédée pour sauver l'enfant, ce que les fuqahāʾ classiques ont permis."
            ] },
            {"t": "h", "v": "Mort cérébrale (Mawt al-Dimāgh) — Divergence centrale"},
            {"t": "p", "v": "La controverse majeure porte sur la mort cérébrale comme critère islamique de décès. En médecine moderne, la mort cérébrale (arrêt total et irréversible des fonctions cérébrales) permet le prélèvement d'organes alors que le cœur bat encore artificiellement."},
            { t:'ul', v:[
              "Position favorable (majorité du Majmaʿ al-Fiqh) : la mort cérébrale équivaut islamiquement à la mort — les organes peuvent être prélevés.",
              "Position réservée (savants malikites traditionnels) : le Rūḥ (âme) quitte le corps à l'arrêt cardiaque — prudence sur la mort cérébrale seule.",
              "Position du CEF pour les Muslims d'Europe : permettre le don après mort cérébrale constatée par deux médecins indépendants, par Maṣlaḥa — sauver des vies est une priorité islamique.",
              "Doctrine-malikite.fr : recommande aux Muslims d'exprimer de leur vivant (testament, carte de donneur) leur choix éclairé sur le don d'organes."
            ] },
            {"t": "h", "v": "Vente d'organes — Unanimement interdite"},
            { t:'ul', v:[
              "Vendre ses organes est Ḥarām selon toutes les écoles — le corps humain n'est pas une propriété aliénable.",
              "Le Coran (17:70) : « Nous avons honoré les fils d'Adam » — la dignité corporelle est intouchable.",
              "Le don altruiste reste la seule voie islamiquement valide — avec compensation des frais médicaux possibles."
            ] },
            {"t": "note", "v": "Cas pratique fréquent en France : un Muslim dialysé depuis 5 ans attend une greffe de rein. Son Imām lui dit que le don d'organes est Ḥarām. La position correcte selon le Majmaʿ al-Fiqh et doctrine-malikite.fr : accepter la greffe est non seulement permis mais recommandé — refuser serait mettre sa vie en danger sans raison valide, ce qui est lui-même interdit."}
          ]
        },
        {
          id:"bio-02",
          title:"PMA, FIV et Procréation Assistée — Limites Islamiques",
          status:'available',
          content:[
            {"t": "lead", "v": "La Procréation Médicalement Assistée (PMA) soulève des questions fondamentales sur la filiation (Nasab), la famille islamique et les limites du corps humain. Le Fiqh islamique contemporain y a répondu avec nuance, distinguant soigneusement les techniques permises des techniques interdites."},
            {"t": "h", "v": "Principe fondateur : préserver la Nasab"},
            {"t": "p", "v": "Le Nasab (filiation légitime) est l'une des cinq finalités de la Sharīʿa (Ḥifẓ al-Nasl). Toute technique de PMA qui brouille ou supprime le Nasab est islamiquement problématique. C'est le critère discriminant principal."},
            {"t": "h", "v": "Techniques PERMISES"},
            { t:'ul', v:[
              "Insémination artificielle intra-conjugale (sperme du mari + ovule de l'épouse) : unanimement permise — pas d'atteinte au Nasab.",
              "FIV intra-conjugale (fécondation in vitro avec gamètes du couple marié) : permise selon la majorité des savants contemporains — sous condition que l'embryon soit implanté dans l'utérus de l'épouse.",
              "Médicaments stimulants l'ovulation dans le cadre du couple marié : permis par Maṣlaḥa.",
              "Ces techniques visent à réaliser la Maṣlaḥa de la famille et à combattre la stérilité — objectif islamiquement validé."
            ] },
            {"t": "h", "v": "Techniques INTERDITES"},
            { t:'ul', v:[
              "Don de sperme (d'un donneur extérieur) : Ḥarām — équivalent à un rapport extra-conjugal dans ses effets sur le Nasab.",
              "Don d'ovule : interdit selon la majorité — brouille le Nasab maternel.",
              "Mère porteuse (Gestation Pour Autrui - GPA) : interdite — brouille la maternité et le Nasab.",
              "FIV avec embryons congelés après divorce ou décès du mari : problèmes juridiques sérieux — prudence extrême requise.",
              "Clonage humain reproductif : unanimement interdit — porte atteinte à la création divine et au Nasab."
            ] },
            {"t": "h", "v": "Les Embryons Surnuméraires"},
            { t:'ul', v:[
              "La FIV produit souvent plus d'embryons que nécessaire — que faire des surnuméraires ?",
              "Détruire : déconseillé — un embryon est une vie potentielle (même si pas encore une personne).",
              "Congeler : permis temporairement pour un futur implantation dans le même couple.",
              "Don à la recherche : très discuté — certains savants permettent la recherche médicale sur des embryons très précoces (avant 14 jours) par Maṣlaḥa médicale.",
              "Résolution du Majmaʿ al-Fiqh : limiter le nombre d'embryons produits pour éviter ce dilemme."
            ] },
            {"t": "note", "v": "La PMA avec don de gamètes (sperme, ovule) d'une tierce personne n'est pas assimilable à la Zinā (fornication) car l'acte sexuel est absent — mais elle produit les mêmes effets juridiques néfastes sur le Nasab. C'est pourquoi le Fiqh l'interdit : non pas pour le péché de Zinā mais pour la protection du Nasab et de la structure familiale islamique."}
          ]
        },
        {
          id:"bio-03",
          title:"Fin de Vie — Euthanasie, Soins Palliatifs et Acharnement",
          status:'available',
          content:[
            {"t": "lead", "v": "Les questions de fin de vie — euthanasie, suicide assisté, acharnement thérapeutique, soins palliatifs — sont parmi les plus douloureuses de la bioéthique contemporaine. La position islamique est nuancée : ni l'euthanasie ni l'acharnement ne sont acceptables — la voie est les soins palliatifs de qualité."},
            { t:'ar', v:"وَلَا تَقتُلُوا أَنفُسَكُم إِنَّ اللَّهَ كَانَ بِكُم رَحِيمًا", n:"Coran 4:29 — « Ne vous tuez pas vous-mêmes — Allah est Miséricordieux envers vous »" },
            {"t": "h", "v": "Euthanasie Active — Unanimement Interdite"},
            { t:'ul', v:[
              "Mettre délibérément fin à la vie d'un patient (même mourant, même souffrant) = meurtre islamiquement.",
              "Même le patient ne peut consentir à sa propre mise à mort — la vie appartient à Allah, pas à l'individu.",
              "Le Coran 4:29 interdit explicitement l'atteinte à la vie humaine — y compris la sienne.",
              "Résolution du Majmaʿ al-Fiqh : l'euthanasie active est Ḥarām sans exception."
            ] },
            {"t": "h", "v": "Suicide Assisté — Interdit"},
            { t:'ul', v:[
              "Donner les moyens à quelqu'un de se suicider = complicité dans un acte Ḥarām.",
              "La différence juridique avec l'euthanasie active est mince islamiquement — les deux impliquent la fin délibérée d'une vie.",
              "Le médecin Muslim en France qui refuse légalement de participer est protégé par la clause de conscience — doctrine-malikite.fr confirme qu'il ne doit pas participer."
            ] },
            {"t": "h", "v": "Acharnement Thérapeutique — Interdit aussi"},
            { t:'ul', v:[
              "Maintenir artificiellement en vie une personne sans espoir de guérison et dans la souffrance n'est pas une obligation islamique — c'est même contraire à la Raḥma (miséricorde).",
              "L'Imām Mālik et les savants malikites classiques : la médecine est recommandée (Sunnah) mais pas obligatoire dans tous les cas.",
              "Débrancher un respirateur sur un patient en mort cérébrale : permis islamiquement selon la majorité — c'est cesser l'artificiel, pas tuer.",
              "Arrêter un traitement curatif inutile et passer aux soins palliatifs : recommandé islamiquement."
            ] },
            {"t": "h", "v": "Soins Palliatifs — La Voie Islamique"},
            {"t": "p", "v": "Les soins palliatifs (soulagement de la douleur, accompagnement spirituel, confort) représentent la voie islamique de fin de vie. Ils respectent simultanément : la vie (pas d'euthanasie), la dignité (pas d'acharnement), et la Raḥma (miséricorde envers la souffrance)."},
            { t:'ul', v:[
              "La morphine et les antidouleurs puissants : permis même s'ils peuvent théoriquement raccourcir la vie — l'intention est le soulagement, pas la mort (principe du double effet).",
              "Le Testament de vie islamique (Waṣiyya médicale) : recommandé pour indiquer ses préférences — doctrine-malikite.fr encourage sa rédaction.",
              "L'accompagnement spirituel du mourant : obligation islamique — lire la Shahāda, réciter le Coran, être présent.",
              "Doctrine-malikite.fr : « La mort n'est pas un échec médical — c'est un passage. Accompagner dignement vaut mieux qu'acharner artificellement. »"
            ] },
            {"t": "note", "v": "Cas concret : un Muslim en phase terminale d'un cancer souffre beaucoup. Sa famille veut tout arrêter. Position islamique : (1) arrêter les traitements curatifs inutiles est permis ; (2) les soins palliatifs (morphine, confort) sont recommandés ; (3) l'euthanasie active reste interdite ; (4) accompagner spirituellement est une obligation communautaire."}
          ]
        },
        {
          id:"bio-04",
          title:"Intelligence Artificielle, Cryptomonnaies et Numérique",
          status:'available',
          content:[
            {"t": "lead", "v": "L'IA, les cryptomonnaies et le numérique sont les grandes questions contemporaines que le Fiqh classique n'a pas abordées. Le Fiqh mālikī — avec sa Maṣlaḥa, son Qiyās et ses Maqāṣid — offre des outils robustes pour y répondre."},
            {"t": "h", "v": "Intelligence Artificielle — Statut Juridique"},
            { t:'ul', v:[
              "L'IA n'a pas de Rūḥ (âme) — elle n'est donc pas un sujet moral Mukallaf (responsable en droit islamique).",
              "L'IA est un outil (Āla) comme tout outil — sa licéité dépend de son usage : Ḥalāl si bon usage, Ḥarām si mauvais usage.",
              "Responsabilité islamique : incombe au créateur (développeur) et à l'utilisateur — pas à l'IA elle-même.",
              "Les robots-imāms, les IA qui « donnent des fatwas » : ne peuvent pas remplacer le savant humain — la Fatwā requiert un Mukallaf responsable, pas une machine.",
              "L'IA dans la médecine islamique : aide au diagnostic → permis et encouragé par Maṣlaḥa médicale."
            ] },
            {"t": "h", "v": "Cryptomonnaies — Divergence Contemporaine"},
            {"t": "p", "v": "Le Bitcoin, l'Ethereum et les autres cryptomonnaies divisent les savants islamiques. Trois positions existent :"},
            { t:'ul', v:[
              "Position interdite (Ḥarām) : les cryptos sont du Gharar (incertitude excessive) car leur valeur est purement spéculative ; elles ne sont pas adossées à un actif réel ; elles facilitent des activités illicites.",
              "Position permise : les cryptos sont une forme moderne de monnaie (Māl mutaqawwam — bien échangeable) ; l'incertitude des marchés boursiers existe aussi et n'est pas prohibée ; la Zakāt s'y applique.",
              "Position conditionnelle (majoritaire chez les savants malikites contemporains) : permis si usages non spéculatifs, usage de paiement réel, pas de Ribā dans les intérêts générés.",
              "Doctrine-malikite.fr recommande la prudence : éviter la spéculation pure (Maysir) sur les cryptos — s'en tenir à un usage de paiement et d'épargne raisonné."
            ] },
            {"t": "h", "v": "Zakāt sur les Cryptomonnaies"},
            { t:'ul', v:[
              "Si les cryptos sont permises → la Zakāt s'y applique comme sur toute richesse liquide.",
              "Niṣāb : valeur équivalente à 85g d'or ou 595g d'argent.",
              "Taux : 2.5% de la valeur possédée depuis un an (Ḥawl).",
              "Valuation : au jour du paiement de la Zakāt — pas à la valeur d'achat."
            ] },
            {"t": "h", "v": "NFT, Métavers et Réseaux Sociaux"},
            { t:'ul', v:[
              "NFT (Non-Fungible Token) représentant une oeuvre licite : permis — c'est la propriété numérique d'un bien numérique.",
              "NFT représentant des images Ḥarām ou de musique illicite : interdit.",
              "Les réseaux sociaux : outils neutres — Ḥalāl si usage bienveillant, Ḥarām si utilisés pour la Ghība (médisance), la Fitnah (trouble) ou la diffusion d'illicites.",
              "La musique islamique : vaste divergence — le Fiqh mālikī classique est restrictif sur les instruments ; le Ghinā (chant) sans instruments reste disputé."
            ] },
            {"t": "note", "v": "Le test islamique universel pour toute technologie nouvelle : (1) Est-ce que son usage réalise une Maṣlaḥa ou cause un Mafāsid (préjudice) ? (2) Est-ce que son usage viole un interdit explicite du Coran ou de la Sunna ? (3) Est-ce que son usage respecte les Maqāṣid al-Sharīʿa (5 finalités) ? Si (1) oui, (2) non, (3) oui → permis et encouragé. La technologie est islamiquement neutre par Ibāḥa Aṣliyya — seul son usage décide."}
          ]
        },
        {
          id:"bio-05",
          title:"Écologie Islamique et Ḥalāl Contemporain",
          status:'available',
          content:[
            {"t": "lead", "v": "L'écologie islamique (Fiqh al-Bīʾa) est un domaine émergent qui récupère une dimension fondatrice de l'Islam : l'Istikhlāf (vicariat terrestre de l'humain) et la protection de la Création d'Allah. Le Ḥalāl contemporain dépasse aussi la simple alimentation pour englober la finance, la mode et l'industrie."},
            {"t": "h", "v": "Al-Istikhlāf — Le Vicariat Terrestre"},
            {"t": "p", "v": "Coran 2:30 : « Nous allons établir un vicaire (Khalīfa) sur la terre. » L'humain est dépositaire (Amīn) de la Création, pas propriétaire. Détruire l'environnement = trahir cette mission."},
            { t:'ul', v:[
              "Coran 7:56 : « Ne semez pas la corruption sur terre après qu'elle a été réformée. » — interdiction explicite de la corruption environnementale.",
              "Le Prophète ﷺ a établi des Ḥimā (zones protégées) autour de Médine — précurseur islamique des réserves naturelles.",
              "Hadīth : « Même si la Fin du monde commence, plante ton plant de palmier. » — l'action écologique est une Sunna même sans espoir immédiat.",
              "Interdiction du Tabdhīr (gaspillage excessif) — Coran 17:26-27 : les gaspilleurs sont les frères des shayāṭīn."
            ] },
            {"t": "h", "v": "Fiqh al-Bīʾa — Applications Pratiques"},
            { t:'ul', v:[
              "L'eau : le Prophète ﷺ interdisait de gaspiller l'eau même lors des ablutions au bord d'un fleuve — principe d'économie maximale.",
              "Les énergies renouvelables : encouragées par Maṣlaḥa et Ḥifẓ al-Bīʾa (protection de l'environnement).",
              "Le végétarisme islamique : permis, non obligatoire — mais limiter la consommation de viande a une justification islamique (réduction de la Fasād / corruption).",
              "La pollution industrielle délibérée : ḤarĀm par Sadd al-Dharāʾiʿ (bloquer les chemins vers le mal) et Ḍarar (dommage aux autres).",
              "Le recyclage : recommandé — éviter le Tabdhīr et respecter l'Amāna (dépôt de confiance envers la Création)."
            ] },
            {"t": "h", "v": "Ḥalāl Contemporain — Au-delà de l'Alimentation"},
            { t:'ul', v:[
              "Finance Ḥalāl : produits sans Ribā, sans secteurs Ḥarām (alcool, armement, tabac, jeux d'argent).",
              "Mode Ḥalāl : vêtements fabriqués éthiquement — pas de travail forcé, respect des conditions de travail islamiques.",
              "Cosmétiques Ḥalāl : sans ingrédients Ḥarām (porc, alcool), ni testé sur animaux (divergence).",
              "Tourisme Ḥalāl : hébergements avec Ḥalāl food, sans alcool, espaces séparés.",
              "Médicaments : Tazkiya (certification) croissante — éviter les enveloppes de gélatine porcine si alternative disponible."
            ] },
            {"t": "h", "v": "Écologie et Finance Islamique"},
            { t:'ul', v:[
              "Les Ṣukūk (obligations islamiques) verts : financer des projets d'énergie renouvelable de manière Ḥalāl — convergence entre finance islamique et écologie.",
              "Le Waqf environnemental : constituer un Waqf pour la protection d'une forêt ou d'un parc — pratique émergeant dans les pays du Golfe.",
              "Doctrine-malikite.fr : l'écologie n'est pas un sujet « occidental » étranger à l'Islam — c'est une obligation islamique directement issue des textes."
            ] },
            {"t": "note", "v": "Message malikite contemporain sur l'écologie : l'Imām Mālik vivait dans une Médine où les puits et les palmeraies étaient des ressources partagées précieuses. Son Fiqh intègre naturellement la protection des ressources communes (les Ḥimā prophétiques, les règles sur l'eau, l'interdiction du gaspillage). L'Islam vert n'est pas une invention moderne — c'est le Fiqh classique lu avec les yeux d'aujourd'hui."}
          ]
        }],quiz:{id:"quiz-expert-bioethique",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-bio-01",
          text:"Le don d'organes est-il permis en Islam selon le Majmaʿ al-Fiqh al-Islāmī ?",
          choices:[
          {id:"a",text:"Non — le corps humain est sacré et inviolable après la mort"},
          {id:"b",text:"Oui, sous conditions strictes : consentement, nécessité vitale du receveur, constats médicaux appropriés"},
          {id:"c",text:"Seulement entre membres de la même famille"},
          {id:"d",text:"Uniquement dans les pays islamiques"}
          ],
          correctId:"b",
          explanation:"La résolution 4 du Majmaʿ al-Fiqh al-Islāmī (1988) : le don d'organes est permis islamiquement — tant du vivant que post-mortem — sous conditions : consentement libre, nécessité pour le receveur, respect du corps. Le principe directeur est Ḥifẓ al-Nafs (protection de la vie) comme Maqṣad de la Sharīʿa."
        },
        {
          id:"q-bio-02",
          text:"La vente d'un organe (rein, partie de foie) contre rémunération est-elle permise en Islam ?",
          choices:[
          {id:"a",text:"Oui si le prix est juste et librement négocié"},
          {id:"b",text:"Non — le corps humain n'est pas une propriété aliénable (Coran 17:70 : dignité des fils d'Adam)"},
          {id:"c",text:"Oui par Ḍarūra si le vendeur est dans le besoin"},
          {id:"d",text:"Oui dans les pays où c'est légal"}
          ],
          correctId:"b",
          explanation:"La vente d'organes est Ḥarām selon toutes les écoles islamiques. Le Coran 17:70 (« Nous avons honoré les fils d'Adam ») fonde une dignité corporelle inaliénable. Le corps est un dépôt (Amāna) confié par Allah — on ne peut pas en vendre des parties. Seul le don altruiste avec compensation des frais médicaux est permis."
        },
        {
          id:"q-bio-03",
          text:"Concernant la mort cérébrale comme critère de décès islamique, quelle est la position majoritaire du Majmaʿ al-Fiqh ?",
          choices:[
          {id:"a",text:"La mort cérébrale n'est pas un critère islamique valide — seul l'arrêt cardiaque compte"},
          {id:"b",text:"La mort cérébrale équivaut islamiquement à la mort — les prélèvements sont permis après constatation rigoureuse par deux médecins"},
          {id:"c",text:"Il n'y a pas de consensus — chaque médecin décide"},
          {id:"d",text:"La mort cérébrale est permise seulement pour les non-Muslims"}
          ],
          correctId:"b",
          explanation:"Position majoritaire du Majmaʿ al-Fiqh : la mort cérébrale (arrêt total et irréversible des fonctions cérébrales), constatée par deux médecins indépendants, équivaut islamiquement à la mort. Les organes peuvent être prélevés. Des savants malikites restent réservés (le Rūḥ quitte à l'arrêt cardiaque) — mais la majorité contemporaine suit la position du Majmaʿ."
        },
        {
          id:"q-bio-04",
          text:"Parmi les techniques de PMA suivantes, lesquelles sont permises islamiquement ? (plusieurs réponses)",
          type:'multiple',
          choices:[
          {id:"a",text:"Insémination artificielle avec sperme du mari"},
          {id:"b",text:"FIV avec gamètes du couple marié"},
          {id:"c",text:"Don de sperme d'un donneur extérieur"},
          {id:"d",text:"Mère porteuse (GPA)"}
          ],
          correctIds:["a", "b"],
          explanation:"Les techniques permises en Islam sont celles qui n'impliquent que les gamètes du couple marié : (A) insémination artificielle intra-conjugale et (B) FIV intra-conjugale — les deux préservent le Nasab. Les techniques interdites : (C) don de sperme extérieur (brouille le Nasab paternel) et (D) GPA/mère porteuse (brouille le Nasab maternel et la structure familiale)."
        },
        {
          id:"q-bio-05",
          text:"La GPA (Gestation Pour Autrui — mère porteuse) est interdite en Islam principalement pour quelle raison ?",
          choices:[
          {id:"a",text:"Le risque médical pour la mère porteuse"},
          {id:"b",text:"Elle brouille le Nasab (filiation) et la maternité islamique — compromettant une des cinq Maqāṣid al-Sharīʿa"},
          {id:"c",text:"C'est un péché assimilé à la Zinā"},
          {id:"d",text:"Elle n'est pas mentionnée dans le Coran"}
          ],
          correctId:"b",
          explanation:"La GPA est interdite car elle compromet le Nasab (Ḥifẓ al-Nasl — protection de la lignée) — l'une des cinq Maqāṣid al-Sharīʿa. L'Islam reconnaît la maternité par la gestation (« La mère est celle qui porte ») — une mère porteuse crée une ambiguïté sur qui est la vraie mère. Ce n'est pas un péché de Zinā (l'acte sexuel est absent) mais une atteinte à la structure familiale islamique."
        },
        {
          id:"q-bio-06",
          text:"Que recommande le Fiqh islamique concernant les embryons surnuméraires issus d'une FIV ?",
          choices:[
          {id:"a",text:"Les détruire systématiquement"},
          {id:"b",text:"Les donner à d'autres couples"},
          {id:"c",text:"Limiter leur production, les congeler pour usage ultérieur dans le même couple, et traiter avec prudence la question de la recherche"},
          {id:"d",text:"Ils peuvent être vendus à des laboratoires"}
          ],
          correctId:"c",
          explanation:"Résolution du Majmaʿ al-Fiqh : limiter la production d'embryons au nécessaire. Les surnuméraires peuvent être congelés pour une implantation future dans le même couple marié. La destruction est déconseillée (vie potentielle). La vente est interdite. La recherche sur des embryons très précoces est très discutée — certains savants la permettent par Maṣlaḥa médicale sous conditions strictes."
        },
        {
          id:"q-bio-07",
          text:"L'euthanasie active (administrer une substance létale à un patient souffrant à sa demande) est :",
          choices:[
          {id:"a",text:"Permise si le patient le demande clairement"},
          {id:"b",text:"Permise si les médecins confirment qu'il est incurable"},
          {id:"c",text:"Ḥarām sans exception — équivaut islamiquement à un meurtre"},
          {id:"d",text:"Permise uniquement pour les enfants en souffrance extrême"}
          ],
          correctId:"c",
          explanation:"L'euthanasie active est unanimement Ḥarām en Fiqh islamique. Coran 4:29 interdit toute atteinte délibérée à la vie humaine — y compris la sienne. La vie appartient à Allah, pas à l'individu : personne ne peut consentir à sa propre mise à mort. Résolution du Majmaʿ al-Fiqh : Ḥarām sans exception. Le consentement du patient ne change pas le jugement islamique."
        },
        {
          id:"q-bio-08",
          text:"L'arrêt des traitements curatifs inutiles et le passage aux soins palliatifs sont-ils permis en Islam ?",
          choices:[
          {id:"a",text:"Non — il faut toujours continuer à traiter jusqu'à la mort naturelle"},
          {id:"b",text:"Oui — cesser l'acharnement thérapeutique et privilégier les soins palliatifs est islamiquement recommandé"},
          {id:"c",text:"Uniquement si le patient a fait un testament"},
          {id:"d",text:"Non — abandonner un traitement = euthanasie passive Ḥarām"}
          ],
          correctId:"b",
          explanation:"Position islamique nuancée : l'acharnement thérapeutique inutile n'est pas une obligation islamique — c'est même contraire à la Raḥma (miséricorde). Arrêter les traitements curatifs qui n'apportent plus de bénéfice réel, et passer aux soins palliatifs (soulagement de la douleur, dignité, accompagnement spirituel) est recommandé. C'est la voie islamique entre l'euthanasie interdite et l'acharnement injustifié."
        },
        {
          id:"q-bio-09",
          text:"La morphine et les antidouleurs puissants sont-ils permis en fin de vie même s'ils peuvent théoriquement raccourcir la vie ?",
          choices:[
          {id:"a",text:"Non — tout ce qui raccourcit la vie est interdit"},
          {id:"b",text:"Oui — l'intention est le soulagement de la douleur, pas la mort (principe du double effet islamique)"},
          {id:"c",text:"Uniquement si administrés par un médecin Muslim"},
          {id:"d",text:"Seulement si le patient a perdu conscience"}
          ],
          correctId:"b",
          explanation:"Le principe du double effet islamique : une action dont l'intention première est bonne (soulager la douleur) et dont l'effet secondaire est involontaire (raccourcissement possible de la vie) est permise. Condition : l'intention doit être sincèrement thérapeutique. La morphine palliative n'est pas une euthanasie déguisée — c'est de la Raḥma (miséricorde) envers un être souffrant."
        },
        {
          id:"q-bio-10",
          text:"Quel est le statut juridique islamique de l'Intelligence Artificielle (IA) ?",
          choices:[
          {id:"a",text:"Un Mukallaf comme l'humain — responsable de ses actes"},
          {id:"b",text:"Un outil (Āla) sans Rūḥ ni responsabilité morale propre — sa licéité dépend uniquement de son usage"},
          {id:"c",text:"Une créature interdite car simulant la Création d'Allah"},
          {id:"d",text:"Un esclave numérique avec droits propres"}
          ],
          correctId:"b",
          explanation:"L'IA n'a pas de Rūḥ (âme) — elle n'est pas un Mukallaf (sujet moral responsable). C'est un outil (Āla) comme le couteau ou la calculatrice. Sa licéité islamique dépend uniquement de son usage : diagnostiquer des maladies (Ḥalāl et recommandé), générer des contenus obscènes (Ḥarām). La responsabilité islamique incombe au développeur et à l'utilisateur, pas à l'IA."
        },
        {
          id:"q-bio-11",
          text:"Concernant les cryptomonnaies (Bitcoin, etc.), quelle est la position majoritaire des savants malikites contemporains ?",
          choices:[
          {id:"a",text:"Unanimement Ḥarām — du pur Gharar"},
          {id:"b",text:"Unanimement Ḥalāl — une monnaie moderne"},
          {id:"c",text:"Conditionnellement permis : éviter la spéculation pure (Maysir), s'en tenir aux usages de paiement et d'épargne raisonnée"},
          {id:"d",text:"Permis seulement pour les Zakāt"}
          ],
          correctId:"c",
          explanation:"Position conditionnelle majoritaire chez les savants malikites contemporains (dont doctrine-malikite.fr) : les cryptomonnaies peuvent être permises comme moyen de paiement et d'épargne si on évite la spéculation pure (Maysir — jeu d'argent). La Zakāt s'y applique. L'usage purement spéculatif (acheter/vendre uniquement pour le profit volatil) est déconseillé voire interdit."
        },
        {
          id:"q-bio-12",
          text:"La Zakāt sur les cryptomonnaies : quel est le taux applicable et selon quelle base ?",
          choices:[
          {id:"a",text:"Pas de Zakāt — les cryptos ne sont pas de l'argent"},
          {id:"b",text:"10% sur les gains uniquement"},
          {id:"c",text:"2.5% de la valeur totale détenue depuis un Ḥawl (an), si supérieure au Niṣāb"},
          {id:"d",text:"La même Zakāt que sur les marchandises de commerce"}
          ],
          correctId:"c",
          explanation:"Si les cryptomonnaies sont permises → la Zakāt s'y applique comme sur toute richesse liquide : 2.5% de la valeur détenue depuis un Ḥawl (année lunaire complète), si la valeur dépasse le Niṣāb (équivalent de 85g d'or). La valuation se fait au jour du paiement. Cette position est soutenue par le CEF et de nombreux savants malikites contemporains."
        },
        {
          id:"q-bio-13",
          text:"Le concept islamique d'Istikhlāf fonde l'écologie islamique. Que signifie-t-il ?",
          choices:[
          {id:"a",text:"La conquête de la nature pour l'Islam"},
          {id:"b",text:"L'humain est vicaire (Khalīfa) et dépositaire (Amīn) de la Création d'Allah — en a la responsabilité, pas la propriété"},
          {id:"c",text:"La nature appartient aux Muslims"},
          {id:"d",text:"L'écologie est une invention occidentale étrangère à l'Islam"}
          ],
          correctId:"b",
          explanation:"Coran 2:30 : Allah établit un Khalīfa (vicaire) sur terre. L'humain n'est pas propriétaire de la Création — il en est gardien (Amīn). Détruire l'environnement = trahir cette mission. Le Prophète ﷺ a établi des Ḥimā (réserves protégées) autour de Médine, interdit le gaspillage de l'eau même lors des ablutions, et a dit : « Plante ton plant de palmier même si la Fin du monde commence. »"
        },
        {
          id:"q-bio-14",
          text:"Parmi ces pratiques, lesquelles sont islamiquement recommandées pour des raisons écologiques ? (plusieurs réponses)",
          type:'multiple',
          choices:[
          {id:"a",text:"Économiser l'eau lors des ablutions"},
          {id:"b",text:"Utiliser les énergies renouvelables"},
          {id:"c",text:"Éviter le gaspillage alimentaire (Tabdhīr)"},
          {id:"d",text:"Brûler les déchets industriels pour éviter la taxe"}
          ],
          correctIds:["a", "b", "c"],
          explanation:"A, B et C sont islamiquement recommandés : (A) économiser l'eau — le Prophète ﷺ l'a enseigné même pour les ablutions ; (B) énergies renouvelables — encouragées par Maṣlaḥa et Ḥifẓ al-Bīʾa ; (C) éviter le gaspillage — Coran 17:26-27 interdit le Tabdhīr. (D) Brûler les déchets industriels pour éviter la taxe = Ḍarar (dommage) et Fasād fī al-Arḍ (corruption terrestre) — Ḥarām."
        },
        {
          id:"q-bio-15",
          text:"Les Ṣukūk (obligations islamiques) verts illustrent quelle convergence importante ?",
          choices:[
          {id:"a",text:"Entre Islam et nationalisme"},
          {id:"b",text:"Entre finance islamique (sans Ribā) et écologie — financer des projets environnementaux de manière Ḥalāl"},
          {id:"c",text:"Entre la Sunna et les ONG"},
          {id:"d",text:"Entre la Zakāt et les impôts verts"}
          ],
          correctId:"b",
          explanation:"Les Ṣukūk verts (Green Sukuk) sont des obligations islamiques (sans Ribā, adossées à des actifs réels) qui financent des projets d'énergie renouvelable, de reforestation ou d'économie circulaire. Ils représentent une convergence remarquable entre l'éthique financière islamique et les objectifs environnementaux contemporains. La Malaisie et les pays du Golfe les utilisent activement."
        },
        {
          id:"q-bio-16",
          text:"Un médecin Muslim en France peut-il légalement refuser de participer à une euthanasie ?",
          choices:[
          {id:"a",text:"Non — il doit obéir à la loi française"},
          {id:"b",text:"Oui — la clause de conscience médicale protège légalement les professionnels qui refusent par conviction"},
          {id:"c",text:"Oui mais uniquement s'il est Imām en même temps"},
          {id:"d",text:"Non — le serment d'Hippocrate prime sur les convictions religieuses"}
          ],
          correctId:"b",
          explanation:"La clause de conscience médicale française (Code de déontologie médicale, Art. 47) protège tout médecin qui refuse de pratiquer un acte contraire à ses convictions — y compris religieuses. Un médecin Muslim peut légalement refuser de participer à une euthanasie ou un suicide assisté. Il doit cependant assurer la continuité des soins en orientant le patient vers un autre praticien."
        },
        {
          id:"q-bio-17",
          text:"Le clonage humain reproductif est-il permis en Islam ?",
          choices:[
          {id:"a",text:"Oui si c'est pour soigner des maladies"},
          {id:"b",text:"Non — unanimement interdit : porte atteinte à la dignité humaine, au Nasab et imite la Création divine"},
          {id:"c",text:"Permis uniquement pour recréer des individus décédés"},
          {id:"d",text:"Discuté — pas de consensus islamique"}
          ],
          correctId:"b",
          explanation:"Le clonage humain reproductif est unanimement interdit en Fiqh islamique (résolution du Majmaʿ al-Fiqh) pour trois raisons cumulatives : (1) porte atteinte au Nasab en créant un humain sans père biologique normal ; (2) imite la Création divine (Taqlīd Khalq Allah) de façon excessive ; (3) traite l'humain comme un produit manufaturé — violant sa dignité (Karāma). Le clonage thérapeutique (cellules souches) est plus discuté."
        },
        {
          id:"q-bio-18",
          text:"Un Muslim doit-il rédiger un Testament de vie islamique (Waṣiyya médicale) ?",
          choices:[
          {id:"a",text:"Non — c'est une affaire privée sans dimension religieuse"},
          {id:"b",text:"C'est fortement recommandé par doctrine-malikite.fr pour préciser ses préférences de fin de vie selon les principes islamiques"},
          {id:"c",text:"Obligatoire au-delà de 40 ans"},
          {id:"d",text:"Non — laisser la famille décider est la Sunna"}
          ],
          correctId:"b",
          explanation:"Doctrine-malikite.fr recommande fortement la rédaction d'un Testament de vie islamique (Waṣiyya médicale) : document précisant ses préférences de fin de vie (soins palliatifs oui, acharnement non, euthanasie non, accompagnement spirituel oui, ablutions rituelles et enterrement islamique). Ce document aide la famille et les médecins à respecter les souhaits islamiques du patient même s'il est inconscient."
        },
        {
          id:"q-bio-19",
          text:"L'interdiction du Tabdhīr (gaspillage) dans le Coran (17:26-27) s'applique-t-elle à l'écologie contemporaine ?",
          choices:[
          {id:"a",text:"Non — le Tabdhīr concerne uniquement l'argent"},
          {id:"b",text:"Oui — le Tabdhīr s'étend à toute ressource : eau, nourriture, énergie, matières premières — le gaspillage environnemental est islamiquement blâmable"},
          {id:"c",text:"Oui mais seulement dans les pays musulmans"},
          {id:"d",text:"Non — le Coran n'aborde pas l'environnement"}
          ],
          correctId:"b",
          explanation:"Coran 17:26-27 : « Ne gaspille pas (tubadhdhir) — les gaspilleurs sont les frères des shayāṭīn. » Le Tabdhīr s'applique à toute ressource — l'eau (le Prophète ﷺ interdisait le gaspillage même pour les ablutions), la nourriture, l'énergie. Par extension logique (Qiyās et Maṣlaḥa), le gaspillage des ressources naturelles et la pollution inutile sont islamiquement blâmables."
        },
        {
          id:"q-bio-20",
          text:"Quel test islamique universel peut-on appliquer à toute nouvelle technologie pour en évaluer la licéité ?",
          choices:[
          {id:"a",text:"Vérifier si elle est mentionnée dans le Coran"},
          {id:"b",text:"Demander si elle réalise une Maṣlaḥa, ne viole pas un interdit explicite, et respecte les Maqāṣid al-Sharīʿa — si oui : Ibāḥa Aṣliyya (permission par défaut)"},
          {id:"c",text:"Demander l'avis de l'Arabie Saoudite"},
          {id:"d",text:"La technologie est toujours Ḥarām car non existante au temps du Prophète ﷺ"}
          ],
          correctId:"b",
          explanation:"Test universel malikite pour les nouvelles technologies : (1) Réalise-t-elle une Maṣlaḥa (intérêt) ou cause-t-elle un Mafāsid (dommage) ? (2) Viole-t-elle un interdit explicite du Coran ou de la Sunna ? (3) Respecte-t-elle les Maqāṣid al-Sharīʿa (5 finalités) ? Si oui, non, oui → Ibāḥa Aṣliyya (licéité par défaut). La technologie est islamiquement neutre — seul son usage décide. C'est la méthode malikite : Maṣlaḥa + Ibāḥa Aṣliyya."
        }]}},
    {id:"muqaran",title:"Jurisprudence Comparée entre les 4 Écoles",arabicTitle:"الفِقه المُقَارَن",icon:"scale-c",description:"Méthode d'Ibn Rushd, les 5 causes de divergence, exemples pratiques comparatifs, Talfīq et points de consensus.",source:"Bidāyat al-Mujtahid d'Ibn Rushd · Al-Jazīrī · Al-Qarāfī",badge:{id:"badge-expert-muqaran",title:"Maître du Comparatisme",arabicTitle:"عَارِفُ الفِقه المُقَارَن",icon:"scale-c",color:'gold',unlockCondition:"Obtenir ≥ 85 % au questionnaire "},lessons:[        {
          id:"muq-01",
          title:"Manhaj Ibn Rushd — La Méthode du Bidāyat al-Mujtahid",
          status:'available',
          content:[
            {"t": "lead", "v": "Le Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid d'Ibn Rushd al-Ḥafīd (mort 595 H/1198 CE) est le manuel le plus rigoureux de jurisprudence comparée islamique jamais écrit. Sa méthode — expliquer les raisons des divergences avant de trancher — est la base de tout Fiqh muqāran sérieux."},
            { t:'ar', v:"مَن أَرَادَ أَن يَكُونَ مُجتَهِدًا فِي الشَّرِيعَة وَجَبَ أَن يَعرِفَ أَسبَابَ الخِلَاف", n:"Ibn Rushd, Bidāyat al-Mujtahid — « Quiconque veut être Mujtahid dans la Sharīʿa doit connaître les causes des divergences »" },
            {"t": "h", "v": "Présentation du Bidāyat al-Mujtahid"},
            { t:'ul', v:[
              "Ibn Rushd al-Ḥafīd (Averroès, 1126-1198 CE) : grand-père d'Ibn Rushd al-Jadd, savant malikite andalou et philosophe de génie.",
              "Titre complet : Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid — « Le début de celui qui fait l'effort, la fin de celui qui se contente ».",
              "Structure : chaque question est traitée selon un schéma fixe — (1) positions de toutes les écoles ; (2) arguments de chaque position ; (3) source de la divergence ; (4) avis personnel motivé.",
              "Unique en son genre : Ibn Rushd ne dit jamais « X a tort » sans expliquer pourquoi X a raisonné ainsi. Le désaccord devient un outil d'apprentissage.",
              "C'est la seule œuvre qui permet de maîtriser l'ensemble du Fiqh islamique comparé en une seule source exhaustive."
            ] },
            {"t": "h", "v": "La Méthode en 4 Étapes"},
            { t:'ul', v:[
              "<strong>1. Iḥṣāʾ al-Aqwāl (inventaire des positions) :</strong> recenser honnêtement toutes les positions connues des grandes écoles — sans omette celle avec laquelle on est en désaccord.",
              "<strong>2. Dhikr al-Adilla (exposition des arguments) :</strong> présenter les preuves de chaque position — textes, analogies, principes — tels que leurs partisans les voient.",
              "<strong>3. Bayān Sabab al-Khilāf (explication de la cause) :</strong> identifier pourquoi les savants ont divergé — c'est le cœur de la méthode et sa contribution unique.",
              "<strong>4. Al-Tarjīḥ (arbitrage) :</strong> donner son avis personnel avec motivation — tout en respectant la validité des autres positions."
            ] },
            {"t": "h", "v": "Pourquoi les savants Divergent — Vue Préliminaire"},
            {"t": "p", "v": "Ibn Rushd identifie une cause racine : les savants divergent parce qu'ils lisent les mêmes textes avec des outils intellectuels différents (langue, logique, priorité des sources) et arrivent à des conclusions différentes — tous sincèrement. Il n'y a pas de « méchants » dans la divergence juridique islamique — seulement des méthodes différentes."},
            {"t": "note", "v": "Le Bidāyat al-Mujtahid a inspiré tous les grands comparatistes islamiques postérieurs — de Al-Jazīrī (Fiqh ʿalā al-Madhāhib al-Arbaʿa, 20ème s.) au Conseil Européen de la Fatwa contemporain. Sa méthode est la seule qui transforme la divergence en richesse plutôt qu'en scandale."}
          ]
        },
        {
          id:"muq-02",
          title:"Asbāb al-Khilāf — Les 5 Causes de Divergence selon Ibn Rushd",
          status:'available',
          content:[
            {"t": "lead", "v": "La contribution la plus précieuse du Bidāyat al-Mujtahid est l'identification systématique des causes de divergence entre écoles. Ibn Rushd en recense cinq types principaux — qui couvrent la quasi-totalité des désaccords entre Ḥanafī, Mālikī, Shāfiʿī et Ḥanbalī."},
            {"t": "h", "v": "Cause 1 : Ikhtilāf al-Riwāya — Authenticité du Ḥadīth"},
            {"t": "p", "v": "Si un savant considère un Ḥadīth authentique et l'autre non, leurs jugements divergent nécessairement — même s'ils utilisent la même méthode. C'est la cause la plus fréquente."},
            { t:'ul', v:[
              "Exemple : le Ḥadīth sur le Khiyār al-Majlis (option de rétractation dans la vente). Al-Bukhārī et Muslim le rapportent (Ṣaḥīḥayn) → Shāfiʿī et Ḥanbalī le suivent et permettent le Khiyār.",
              "L'Imām Mālik ne le suit pas car il contredit le ʿAmal al-Madanī (pratique médinoise constante) → position malikite : pas de Khiyār al-Majlis.",
              "Ce n'est pas que Mālik « rejette » le Ḥadīth — il le hiérarchise différemment dans sa méthode.",
              "Les savants de Hadīth (Muḥaddithūn) et les juristes (Fuqahāʾ) ont des critères d'authenticité différents — source majeure de divergence."
            ] },
            {"t": "h", "v": "Cause 2 : Taʿāruḍ al-Adilla — Conflit Apparent entre Textes"},
            { t:'ul', v:[
              "Deux textes authentiques semblent se contredire → chaque école choisit un texte sur l'autre ou les concilie différemment.",
              "Exemple : la Basmala dans la Fātiḥa (Ṣalāt). Ḥadīth A dit de ne pas la réciter à voix haute. Ḥadīth B dit de la réciter à voix haute. → Mālik suit A (silencieuse), Shāfiʿī suit B (à voix haute).",
              "Méthode de résolution en cas de conflit : (1) Jamʿ — concilier les deux ; (2) Naskh — l'un abroge l'autre ; (3) Tarjīḥ — préférer le plus fort. Les écoles diffèrent dans l'ordre de ces opérations."
            ] },
            {"t": "h", "v": "Cause 3 : Polysémie Arabe — Taʿaddud Maʿānī al-Alfāẓ"},
            { t:'ul', v:[
              "Un même mot arabe a plusieurs sens → chaque école choisit un sens différent.",
              "Exemple : Coran 2:228 « wal-muṭallaqātu yatarabbaṣna bi-anfusihinna thalāthata qurūʾin ». Le mot Qurʾ désigne soit la Ḥayḍ (menstruation), soit le Tuhr (période de pureté entre menstruations). → Ḥanafī et Ḥanbalī : Ḥayḍ (ʿIdda = 3 menstruations). Mālikī et Shāfiʿī : Tuhr (ʿIdda = 3 périodes de pureté).",
              "Ce type de divergence est irréductible par nature — la langue arabe est intrinsèquement polysémique dans certains termes juridiques."
            ] },
            {"t": "h", "v": "Cause 4 : Divergence sur la ʿIlla du Qiyās"},
            { t:'ul', v:[
              "Même accord sur les faits → désaccord sur la cause (ʿIlla) qui fonde l'analogie → règles différentes.",
              "Exemple : l'interdiction du vin (Khamr). ʿIlla = l'ivresse selon les uns → tout alcool enivrant est interdit. ʿIlla = le raisin fermenté selon d'autres (position plus restrictive historiquement). L'Imām Mālik suit la première ʿIlla — toute substance enivrante est Ḥarām.",
              "La méthode de détermination de la ʿIlla est elle-même source de divergence interne aux écoles."
            ] },
            {"t": "h", "v": "Cause 5 : Ikhtilāf fī al-Ijmāʿ — Divergence sur l'Existence d'un Consensus"},
            { t:'ul', v:[
              "Un savant affirme qu'il y a Ijmāʿ sur une question → l'autre ne reconnaît pas ce consensus.",
              "Exemple : l'héritage du grand-père avec les frères. L'Imām Mālik ne reconnaît pas l'Ijmāʿ affirmé par certains — et maintient sa position particulière (l'Akdariyya).",
              "L'Ijmāʿ des Ṣaḥāba (Compagnons) est reconnu par tous. L'Ijmāʿ des Tābiʿīn (Successeurs) : plus discuté. L'Ijmāʿ des savants ultérieurs : encore plus discuté."
            ] },
            {"t": "note", "v": "Utilité pratique de cette classification : quand deux savants sont en désaccord, identifier la cause de leur désaccord parmi ces 5 catégories permet de comprendre si la divergence est théoriquement réductible (authentification d'un Ḥadīth → peut se résoudre avec la critique hadīthique) ou structurelle (polysémie arabe → irréductible). Cela évite les débats futiles et oriente vers les solutions possibles."}
          ]
        },
        {
          id:"muq-03",
          title:"Khilāfāt ʿAmaliyya — Divergences Pratiques Majeures entre Écoles",
          status:'available',
          content:[
            {"t": "lead", "v": "La jurisprudence comparée n'est pas un exercice théorique — elle a des implications pratiques directes pour tout Muslim. Ce chapitre présente les divergences pratiques les plus courantes entre les 4 Madhāhib, avec les arguments et la position malikite."},
            {"t": "h", "v": "Divergences dans la Ṭahāra (Purification)"},
            { t:'ul', v:[
              "<strong>Naqḍ al-Wuḍūʾ par le toucher de la femme :</strong> Mālikī et Shāfiʿī — invalide le Wuḍūʾ (avec Shāfiʿī plus strict). Ḥanafī et Ḥanbalī — ne l'invalide pas. Cause : sens du verset Coran 4:43 (« ou si vous avez touché des femmes »).",
              "<strong>Naqḍ al-Wuḍūʾ par le rire dans la Ṣalāt :</strong> Ḥanafī — invalide le Wuḍūʾ (position unique). Mālikī, Shāfiʿī, Ḥanbalī — n'invalide que la Ṣalāt, pas le Wuḍūʾ.",
              "<strong>Quantité minimale d'eau pour le Wuḍūʾ :</strong> Mālikī — pas de minimum fixe, la Niyya et le mouvement suffisent. Shāfiʿī — chaque organe doit être mouillé intégralement.",
              "<strong>Saignement de nez et Wuḍūʾ :</strong> Ḥanafī — invalide le Wuḍūʾ. Mālikī, Shāfiʿī, Ḥanbalī — ne l'invalide pas."
            ] },
            {"t": "h", "v": "Divergences dans la Ṣalāt (Prière)"},
            { t:'ul', v:[
              "<strong>Basmala à voix haute dans la Fātiḥa :</strong> Mālikī — à voix basse (voire non récitée dans la Ṣalāt obligatoire selon une position). Shāfiʿī — à voix haute dans les prières vocales.",
              "<strong>Récitation de la Fātiḥa par le Maʾmūm (fidèle derrière l'Imām) :</strong> Mālikī — non obligatoire pour le Maʾmūm dans les prières vocales (l'Imām suffit). Shāfiʿī et Ḥanbalī — obligatoire même derrière l'Imām. Ḥanafī — non récitée du tout par le Maʾmūm.",
              "<strong>Khuyūr al-Rajulayn (ouverture des pieds dans la prosternation) :</strong> différences mineures sur la posture exacte.",
              "<strong>Dépôt des mains (gauche/droite) pendant la Ṣalāt :</strong> Mālikī (Madanī) — mains le long du corps (Sadl). Autres écoles — mains croisées sur la poitrine ou le ventre (Qabd). Position malikite fondée sur le ʿAmal al-Madanī."
            ] },
            {"t": "h", "v": "Divergences dans le Nikāḥ et les Transactions"},
            { t:'ul', v:[
              "<strong>Nikāḥ al-Mutʿa (mariage temporaire) :</strong> unanimement interdit par les 4 Madhāhib sunnites — seul le Fiqh douzimiste (Jaʿfarī) le permet.",
              "<strong>Mahr al-Mithl (dot selon la coutume) :</strong> Mālikī — référence aux sœurs et cousines. Ḥanafī — référence aux proches du côté paternel.",
              "<strong>Khiyār al-Majlis (option de rétractation après vente) :</strong> Shāfiʿī et Ḥanbalī — permis (Ḥadīth des Ṣaḥīḥayn). Mālikī — non permis (ʿAmal al-Madanī l'ignore). Ḥanafī — non permis (principe de fermeté du contrat).",
              "<strong>Vente de l'or contre l'argent à crédit (Ṣarf) :</strong> toutes les écoles interdisent le Ribā dans l'échange — mais divergent sur les détails des conditions d'échange immédiat."
            ] },
            {"t": "h", "v": "Divergences dans le Fiqh de la Famille"},
            { t:'ul', v:[
              "<strong>Garde des enfants (Ḥaḍāna) après divorce :</strong> Mālikī — la mère garde jusqu'à puberté pour le fils, jusqu'au mariage pour la fille. Ḥanafī — mère jusqu'à 7 ans (fils) et 9 ans (fille). Shāfiʿī — l'enfant choisit à 7 ans.",
              "<strong>Allaitement prohibant le mariage (Raḍāʿ) :</strong> Mālikī — 5 fois ou plus d'allaitement établissent la prohibition. Ḥanafī — même une seule tétée. Shāfiʿī — 5 tétées distinctes complètes.",
              "<strong>Mariage du Walī (tuteur) d'office — Ijbār :</strong> Mālikī permet le Walī d'imposer le mariage à une vierge. Ḥanafī — la vierge adulte peut se marier sans Walī. Shāfiʿī — Walī obligatoire mais pas d'Ijbār pour l'adulte."
            ] },
            {"t": "note", "v": "Leçon de méthode malikite sur les divergences pratiques : quand un Muslim déménage dans un pays où un autre Madhhab est dominant, peut-il adopter les pratiques locales ? La position malikite : oui pour les actes quotidiens où la divergence est authentique et les deux positions sont défendables. Ce n'est pas du Talfīq interdit — c'est reconnaître la légitimité de l'autre Madhhab. L'Imām Mālik lui-même disait : « Chaque Mujtahid qui a atteint son degré a raison à ses yeux — et Allah sait mieux. »"}
          ]
        },
        {
          id:"muq-04",
          title:"Al-Talfīq wa-Tağyīr al-Madhhab — Combiner et Changer d'École",
          status:'available',
          content:[
            {"t": "lead", "v": "Peut-on combiner deux Madhāhib dans un seul acte ? Peut-on changer de Madhhab définitivement ou sur une question particulière ? Ces questions — Talfīq et Tağyīr al-Madhhab — sont centrales pour les Muslims contemporains vivant dans des contextes pluriels."},
            {"t": "h", "v": "Définitions Préliminaires"},
            { t:'ul', v:[
              "<strong>Talfīq (combinaison) :</strong> suivre deux Madhāhib différents dans deux aspects d'un même acte — ex. faire le Wuḍūʾ selon Mālik (sans Niyya explicite) et la Ṣalāt selon Shāfiʿī (avec Basmala à voix haute).",
              "<strong>Tatabbuʿ al-Rukhaṣ (chasse aux facilités) :</strong> chercher systématiquement dans chaque Madhhab la règle la plus permissive pour construire un Islam minimal — interdit.",
              "<strong>Tağyīr al-Madhhab (changement d'école) :</strong> quitter définitivement son Madhhab pour un autre — ou adopter temporairement la position d'un autre Madhhab sur une question précise."
            ] },
            {"t": "h", "v": "Positions sur le Talfīq"},
            { t:'ul', v:[
              "<strong>Position classique restrictive :</strong> le Talfīq dans un seul acte composé est invalide — on ne peut pas additionner des positions pour créer un acte qui ne serait valide dans aucun Madhhab pris individuellement.",
              "<strong>Position contemporaine majoritaire :</strong> le Talfīq est permis s'il ne résulte pas d'un Tatabbuʿ al-Rukhaṣ (chasse aux facilités) et si chaque partie de l'acte est valide dans son Madhhab respectif.",
              "<strong>Exemple permis :</strong> un médecin mālikī en voyage suit la position ḥanafī sur la ṣalāt dans le train (permise sans Qibla exacte) — par nécessité, pas par chasse aux facilités.",
              "<strong>Exemple interdit :</strong> choisir la position mālikī sur le Mahr (dot minimale basse) ET la position ḥanafī sur le Khiyār al-Majlis (pas d'option de rétractation) uniquement parce que les deux arrangent le même partie dans un contrat de mariage."
            ] },
            {"t": "h", "v": "Changement de Madhhab — Tağyīr"},
            { t:'ul', v:[
              "Changer de Madhhab définitivement : permis selon la grande majorité des Fuqahāʾ — le Taqlīd est une facilité, pas une obligation contractuelle.",
              "Conditions : le changement doit être motivé par une conviction sincère (connaissance des arguments), pas par la commodité seule.",
              "Changer sur une question particulière : plus largement permis — suivre une fatwa d'un savant d'un autre Madhhab sur un point précis est le Talfīq léger, généralement accepté.",
              "Position malikite classique (Al-Qarāfī dans Al-Furūq) : le simple particulier (Muqallid) peut suivre tout savant qualifié — la fidélité au Madhhab est une facilité, non une prison."
            ] },
            {"t": "h", "v": "Al-Madhhab wa-l-Mujtahid — Pour qui la fidélité est-elle obligatoire ?"},
            { t:'ul', v:[
              "Pour le Mujtahid : pas de Taqlīd — il suit ses propres conclusions après effort.",
              "Pour le savant intermédiaire : suit généralement son Madhhab mais peut en sortir sur des questions bien documentées.",
              "Pour le Muslim ordinaire (Muqallid) : suit un savant de confiance — la fidélité à un Madhhab est recommandée pour la cohérence mais pas absolument obligatoire.",
              "Principe de Al-Shāṭibī dans Al-Muwāfaqāt : le Madhhab est un outil de régularité et de cohérence dans la pratique — pas une fin en soi."
            ] },
            {"t": "note", "v": "Application contemporaine pour les Muslims de France : la plupart sont Muqallid (non-savants) qui suivent les fatwas d'imams ou de savants accessibles. Doctrine-malikite.fr recommande de rester fidèle à l'école malikite (héritage naturel des Muslims franco-africains et franco-maghrébins) tout en acceptant les positions d'autres écoles quand la nécessité ou la clarté l'exige. Ce n'est ni du Talfīq aveugle ni du sectarisme."}
          ]
        },
        {
          id:"muq-05",
          title:"Al-Ijmāʿ wa-l-Taqārrub — Consensus et Points de Convergence",
          status:'available',
          content:[
            {"t": "lead", "v": "Si les divergences entre écoles sont nombreuses et documentées, les points de consensus (Ijmāʿ) et de convergence sont encore plus nombreux. Connaître ce qui est unanimement convenu est aussi essentiel que de connaître les divergences — c'est ce qui fonde l'unité de la Umma face à la diversité des Madhāhib."},
            {"t": "h", "v": "Les Points d'Accord Absolu entre les 4 Madhāhib"},
            { t:'ul', v:[
              "<strong>Les 5 piliers de l'Islam :</strong> Shahāda, Ṣalāt (5 prières), Ṣawm (Ramadan), Zakāt, Ḥajj — unanimement obligatoires.",
              "<strong>Interdictions fondamentales :</strong> Zinā, meurtre injuste, vol qualifié, alcool, nourriture Ḥarām (porc, charognes) — unanimement Ḥarām.",
              "<strong>Mariage et famille :</strong> conditions essentielles du Nikāḥ valide (Walī, Mahr, consentement, témoins) — convergence sur les principes fondamentaux malgré divergences de détails.",
              "<strong>Successions :</strong> les parts coraniques fixées (Farāʾiḍ) sont unanimement reconnues — les divergences portent sur des cas particuliers (grand-père + frères, Radd...).",
              "<strong>Ḥudūd fondamentaux :</strong> les principes du Qiṣāṣ, de la Diya et des Ḥudūd coraniques sont unanimement reconnus — les divergences portent sur les conditions d'application."
            ] },
            {"t": "h", "v": "Zones de Convergence Pratique Contemporaine"},
            { t:'ul', v:[
              "<strong>Finance islamique :</strong> toutes les écoles s'accordent sur l'interdiction du Ribā et les principes de la Murābaḥa, Musharaka, Muḍāraba — avec divergences sur certains détails.",
              "<strong>Bioéthique :</strong> toutes les écoles interdisent l'euthanasie active et la vente d'organes — et permettent le don sous conditions.",
              "<strong>Fiqh des minorités :</strong> toutes les écoles reconnaissent que les Muslims en pays non-islamique peuvent pratiquer librement et n'ont pas l'obligation d'émigrer si la pratique est possible.",
              "<strong>Ḥalāl alimentaire :</strong> accord sur les grandes catégories interdites (porc, alcool, bête non égorgée) — divergences sur les détails (poissons sans écailles, crustacés, animaux marins)."
            ] },
            {"t": "h", "v": "Le Fiqh Muqāran Comme Outil d'Unité"},
            {"t": "p", "v": "La jurisprudence comparée ne mène pas au relativisme (tout se vaut) mais à la compréhension (chaque position a ses raisons). Ibn Rushd conclut le Bidāyat en soulignant que la diversité des Madhāhib est une Raḥma (miséricorde) pour la Umma — elle permet la flexibilité sans trahir les principes."},
            { t:'ul', v:[
              "Les divergences entre Madhāhib concernent principalement les détails pratiques (Furūʿ) — pas les principes fondamentaux (Uṣūl).",
              "Le Coran et la Sunna authentique forment un socle commun que toutes les écoles respectent.",
              "Attitude islamique face aux divergences : ni sectarisme (seul mon Madhhab est valide) ni indifférence (toutes les positions sont équivalentes).",
              "Ibn Taymiyya (Ḥanbalī) : « La divergence des Imāms est une Raḥma Allah — elle montre la largeur de la Sharīʿa et la richesse de l'intellect musulman. »"
            ] },
            {"t": "h", "v": "Synthèse Finale — L'Héritage du Fiqh Mālikī dans ce Contexte"},
            {"t": "p", "v": "L'école malikite occupe une position particulière dans le Fiqh muqāran : son insistance sur le ʿAmal al-Madanī (pratique médinoise) et la Maṣlaḥa al-Mursala lui confère une adaptabilité que les autres écoles n'ont pas au même degré. Elle est la moins dogmatique dans ses fondements — ce qui l'a rendue la plus répandue géographiquement et la plus durable historiquement."},
            {"t": "note", "v": "Message final du niveau Expert : la maîtrise du Fiqh mālikī — de ses sources (ST-2), de son histoire (ST-2), de la Sīra qui le nourrit (ST-3), de son application aux minorités (ST-3), de ses réponses bioéthiques (ST-4) et de sa place dans le panorama comparatif (ST-4) — n'est pas une fin en soi. C'est un outil au service d'une seule finalité : worshipping Allah with knowledge and sincerity, wherever one lives. Comme l'Imām Mālik l'a fait à Médine, à travers ses fatwas, ses doutes exprimés et son Lā Adrī (je ne sais pas) face aux questions sans réponse certaine."}
          ]
        }],quiz:{id:"quiz-expert-muqaran",title:"Questionnaire —  ",status:"available",score:null,questions:[        {
          id:"q-muq-01",
          text:"Ibn Rushd al-Ḥafīd est l'auteur du Bidāyat al-Mujtahid. Quelle est sa contribution méthodologique unique ?",
          choices:[
          {id:"a",text:"Il a compilé toutes les fatwas de l'Imām Mālik"},
          {id:"b",text:"Il identifie systématiquement les CAUSES des divergences entre écoles avant de trancher — transformant le désaccord en outil d'apprentissage"},
          {id:"c",text:"Il a déclaré que toutes les positions islamiques sont équivalentes"},
          {id:"d",text:"Il a fondé une 5ème école juridique islamique"}
          ],
          correctId:"b",
          explanation:"La contribution unique du Bidāyat al-Mujtahid : pour chaque question, Ibn Rushd (1) recense les positions de toutes les écoles ; (2) expose leurs arguments ; (3) identifie la CAUSE de la divergence parmi ses 5 catégories ; (4) donne son avis personnel motivé. Il ne dit jamais « X a tort » sans expliquer pourquoi X a raisonné ainsi. Cette approche est unique dans l'histoire du Fiqh islamique."
        },
        {
          id:"q-muq-02",
          text:"La première cause de divergence selon Ibn Rushd est Ikhtilāf al-Riwāya. Que signifie-t-elle ?",
          choices:[
          {id:"a",text:"Divergence sur les noms des chapitres"},
          {id:"b",text:"Un savant considère un Ḥadīth authentique et l'autre non — leurs jugements divergent même avec la même méthode"},
          {id:"c",text:"Divergence sur la langue du Ḥadīth"},
          {id:"d",text:"Différence dans les chaînes de transmission des versets coraniques"}
          ],
          correctId:"b",
          explanation:"Ikhtilāf al-Riwāya : si deux savants évaluent différemment l'authenticité d'un Ḥadīth, ils arrivent à des conclusions juridiques différentes — même en utilisant la même méthode. Exemple concret : le Ḥadīth sur le Khiyār al-Majlis est dans les Ṣaḥīḥayn → Shāfiʿī et Ḥanbalī le suivent. Mālik lui préfère le ʿAmal al-Madanī → position malikite différente. Ce n'est pas un rejet du Ḥadīth mais une hiérarchisation différente des sources."
        },
        {
          id:"q-muq-03",
          text:"La polysémie du mot arabe Qurʾ (dans Coran 2:228) illustre quelle cause de divergence ?",
          choices:[
          {id:"a",text:"Ikhtilāf al-Riwāya"},
          {id:"b",text:"Taʿaddud Maʿānī al-Alfāẓ — un mot arabe à plusieurs sens valides donne des règles différentes"},
          {id:"c",text:"Taʿāruḍ al-Adilla"},
          {id:"d",text:"Ikhtilāf fī al-Ijmāʿ"}
          ],
          correctId:"b",
          explanation:"Qurʾ signifie soit Ḥayḍ (menstruation) soit Tuhr (pureté inter-menstruelle). → Ḥanafī et Ḥanbalī : Qurʾ = Ḥayḍ → ʿIdda = 3 menstruations complètes. Mālikī et Shāfiʿī : Qurʾ = Tuhr → ʿIdda = 3 périodes de pureté. La divergence est irréductible par la nature de la langue arabe — les deux lectures sont linguistiquement valides. C'est Taʿaddud Maʿānī al-Alfāẓ."
        },
        {
          id:"q-muq-04",
          text:"Concernant le dépôt des mains pendant la Ṣalāt, quelle est la position malikite spécifique et sa raison ?",
          choices:[
          {id:"a",text:"Mains croisées sur la poitrine — Sunna prophétique"},
          {id:"b",text:"Mains le long du corps (Sadl) — fondé sur le ʿAmal al-Madanī (pratique médinoise transmise ininterrompue)"},
          {id:"c",text:"Mains sur le ventre — position du Prophète ﷺ"},
          {id:"d",text:"Aucune position définie — au choix du fidèle"}
          ],
          correctId:"b",
          explanation:"La position malikite distincte : Sadl (mains le long du corps) — fondée sur le ʿAmal al-Madanī. Les autres écoles (Ḥanafī, Shāfiʿī, Ḥanbalī) pratiquent le Qabd (mains croisées) basé sur des Ḥadīths du Qabd. L'Imām Mālik a préféré la pratique médinoise ininterrompue au Ḥadīth isolé sur le Qabd — application directe de sa méthode des sources."
        },
        {
          id:"q-muq-05",
          text:"Le Khiyār al-Majlis (option de rétractation après vente) illustre quelle cause de divergence entre Mālikī et Shāfiʿī ?",
          choices:[
          {id:"a",text:"Taʿaddud Maʿānī al-Alfāẓ"},
          {id:"b",text:"Ikhtilāf al-Riwāya — Mālik préfère le ʿAmal al-Madanī qui ignore ce Ḥadīth ; Shāfiʿī suit le Ḥadīth des Ṣaḥīḥayn"},
          {id:"c",text:"Divergence sur la ʿIlla du Qiyās"},
          {id:"d",text:"Ikhtilāf fī al-Ijmāʿ"}
          ],
          correctId:"b",
          explanation:"Khiyār al-Majlis : le Ḥadīth « les deux parties ont l'option tant qu'ils ne se séparent pas » est dans al-Bukhārī et Muslim → Shāfiʿī le suit. L'Imām Mālik : ce Ḥadīth contredit le ʿAmal al-Madanī (les Médinois ne pratiquaient pas ce Khiyār) → il préfère la pratique médinoise. Cause = Ikhtilāf al-Riwāya/hiérarchisation des sources, pas une question d'authenticité pure."
        },
        {
          id:"q-muq-06",
          text:"Parmi ces divergences pratiques, lesquelles concernent la Ṣalāt entre les 4 Madhāhib ? (plusieurs réponses)",
          type:'multiple',
          choices:[
          {id:"a",text:"Récitation de la Basmala à voix haute dans la Fātiḥa"},
          {id:"b",text:"Obligation ou non de la Fātiḥa pour le Maʾmūm"},
          {id:"c",text:"Nombre de Rakʿāt dans la Ṣalāt obligatoire"},
          {id:"d",text:"Dépôt des mains (Sadl ou Qabd)"}
          ],
          correctIds:["a", "b", "d"],
          explanation:"Les divergences réelles dans la Ṣalāt entre Madhāhib : (A) Basmala à voix haute — Shāfiʿī oui, Mālikī non ; (B) Fātiḥa du Maʾmūm — obligatoire selon Shāfiʿī et Ḥanbalī, non selon Mālikī et Ḥanafī ; (D) Sadl (Mālikī) vs Qabd (autres). En revanche : (C) le nombre de Rakʿāt est unanimement établi — 2/4/3/4/4 — et n'est PAS une divergence entre Madhāhib."
        },
        {
          id:"q-muq-07",
          text:"Le Talfīq (combinaison de deux Madhāhib) est-il toujours interdit ?",
          choices:[
          {id:"a",text:"Oui — on ne peut jamais combiner deux positions"},
          {id:"b",text:"Non — le Talfīq est permis si chaque partie reste valide dans son Madhhab et qu'il n'y a pas de Tatabbuʿ al-Rukhaṣ (chasse aux facilités)"},
          {id:"c",text:"Oui sauf si validé par les 4 Imāms"},
          {id:"d",text:"Non — on peut toujours choisir la position la plus commode"}
          ],
          correctId:"b",
          explanation:"Le Talfīq légitime : chaque partie de l'acte reste valide dans son Madhhab respectif, la combinaison ne crée pas un acte invalide dans tous les Madhāhib, et la motivation n'est pas la simple facilité. Le Talfīq interdit (Tatabbuʿ al-Rukhaṣ) : choisir systématiquement dans chaque Madhhab la règle la plus permissive pour construire un Islam minimal. C'est Al-Shāṭibī qui a systématisé cette distinction dans Al-Muwāfaqāt."
        },
        {
          id:"q-muq-08",
          text:"Al-Qarafī (savant malikite, mort 684 H) dans Al-Furūq enseigne que le Muqallid (non-savant) est :",
          choices:[
          {id:"a",text:"Absolument tenu de rester dans son Madhhab de naissance"},
          {id:"b",text:"Libre de suivre tout savant qualifié — la fidélité au Madhhab est une facilité, non une obligation contractuelle"},
          {id:"c",text:"Interdit de suivre un savant d'un autre Madhhab"},
          {id:"d",text:"Obligé de suivre le Madhhab de son pays de résidence"}
          ],
          correctId:"b",
          explanation:"Al-Qarāfī dans Al-Furūq : le Taqlīd est une facilité accordée au non-savant — il peut suivre tout Mujtahid qualifié. La fidélité à un Madhhab est recommandée pour la cohérence et la régularité dans la pratique, mais elle n'est pas une obligation absolue pour le Muqallid. Cette position libérale est caractéristique de l'école malikite par rapport à d'autres."
        },
        {
          id:"q-muq-09",
          text:"Parmi ces questions, lesquelles font l'objet d'un accord (Ijmāʿ) entre les 4 Madhāhib sunnites ? (plusieurs réponses)",
          type:'multiple',
          choices:[
          {id:"a",text:"L'obligation des 5 Ṣalawāt quotidiennes"},
          {id:"b",text:"L'interdiction de la Zinā"},
          {id:"c",text:"L'interdiction de la consommation du porc"},
          {id:"d",text:"La position exacte des mains pendant la Ṣalāt"}
          ],
          correctIds:["a", "b", "c"],
          explanation:"A, B et C : unanimement établis par les 4 Madhāhib. (A) Les 5 Ṣalawāt — aucune divergence. (B) Interdiction de la Zinā — unanime. (C) Interdiction du porc — unanime. (D) Position des mains (Sadl vs Qabd) — c'est précisément une divergence pratique majeure entre Mālikī (Sadl) et les autres écoles (Qabd). L'accord porte sur les Uṣūl (principes) — les Furūʿ (détails) sont souvent divergents."
        },
        {
          id:"q-muq-10",
          text:"Concernant le droit de garde (Ḥaḍāna) des enfants après divorce, quelle est la différence entre Mālikī et Shāfiʿī ?",
          choices:[
          {id:"a",text:"Aucune — les deux accordent la garde à la mère jusqu'à puberté"},
          {id:"b",text:"Mālikī : mère garde jusqu'à puberté (fils) et mariage (fille). Shāfiʿī : l'enfant choisit à 7 ans"},
          {id:"c",text:"Mālikī donne toujours la garde au père. Shāfiʿī à la mère"},
          {id:"d",text:"Les deux demandent l'avis du juge à chaque cas"}
          ],
          correctId:"b",
          explanation:"Divergence sur la Ḥaḍāna : Mālikī — la mère garde le fils jusqu'à puberté et la fille jusqu'au mariage. Ḥanafī — mère jusqu'à 7 ans (fils) et 9 ans (fille). Shāfiʿī — à 7 ans, l'enfant choisit entre ses parents. Ḥanbalī — proche du Shāfiʿī mais avec des nuances. Cause de la divergence : interprétation des Ḥadīths sur la Ḥaḍāna et le bien de l'enfant."
        },
        {
          id:"q-muq-11",
          text:"Sur le nombre de tétées établissant la prohibition matrimoniale par Raḍāʿ (allaitement), quelle est la position malikite ?",
          choices:[
          {id:"a",text:"Une seule tétée suffit — même que Ḥanafī"},
          {id:"b",text:"5 tétées distinctes et complètes — même que Shāfiʿī"},
          {id:"c",text:"5 fois ou plus d'allaitement, sans exiger que chaque fois soit complète dans la définition stricte"},
          {id:"d",text:"L'allaitement ne crée aucune prohibition matrimoniale"}
          ],
          correctId:"c",
          explanation:"Divergence sur le Raḍāʿ : Ḥanafī — toute tétée, même une, crée la prohibition (position la plus large). Mālikī — 5 fois ou plus, avec une définition inclusive. Shāfiʿī — 5 tétées distinctes et complètes (position la plus stricte). Ḥanbalī — 5 tétées distinctes. Cause : le Ḥadīth (Muslim) qui dit « 5 tétées connues » est interprété différemment selon les Madhāhib."
        },
        {
          id:"q-muq-12",
          text:"Pourquoi Ibn Rushd et d'autres savants considèrent-ils la diversité des Madhāhib comme une Raḥma (miséricorde) ?",
          choices:[
          {id:"a",text:"Parce qu'on peut choisir la règle la plus facile dans chaque situation"},
          {id:"b",text:"Parce qu'elle montre la largeur de la Sharīʿa et sa capacité à s'adapter à différents contextes — sans trahir les principes fondamentaux"},
          {id:"c",text:"Parce qu'elle permet aux Muslims de se diviser selon leurs origines"},
          {id:"d",text:"Parce qu'elle prouve que les règles islamiques sont arbitraires"}
          ],
          correctId:"b",
          explanation:"Ibn Taymiyya et Ibn Rushd (dans des perspective différentes) : la diversité des Madhāhib est une Raḥma car elle révèle la richesse de la Sharīʿa — capable de répondre à des contextes différents tout en restant fidèle aux textes. Elle ne signifie pas que tout se vaut (relativisme) mais que plusieurs interprétations rigoureuses des mêmes textes sont possibles et légitimes. C'est le génie du Fiqh islamique classique."
        },
        {
          id:"q-muq-13",
          text:"La ʿIlla (cause juridique) dans le Qiyās : comment son interprétation crée-t-elle des divergences ?",
          choices:[
          {id:"a",text:"Les Madhāhib divergent sur ce qu'est l'arabe"},
          {id:"b",text:"Choisir une ʿIlla différente pour étendre un jugement conduit à des règles différentes — ex. l'interdiction du vin : ʿIlla = ivresse (tout alcool Ḥarām) ou ʿIlla = raisin fermenté (position restrictive)"},
          {id:"c",text:"La ʿIlla ne joue aucun rôle dans les divergences"},
          {id:"d",text:"Les Madhāhib s'accordent toujours sur la ʿIlla"}
          ],
          correctId:"b",
          explanation:"Divergence sur la ʿIlla du Qiyās : si l'interdiction du vin est due à l'ivresse (ʿIlla = Iskār) → tout alcool enivrant est Ḥarām (position de Mālik et de la majorité). Si l'interdiction est due au fait d'être du raisin fermenté (ʿIlla plus étroite) → seul le khamr de raisin est concerné (position historiquement attribuée à certains Ḥanafī mais abandonnée). Choisir une ʿIlla large ou étroite change considérablement le champ d'application d'une règle."
        },
        {
          id:"q-muq-14",
          text:"Quelle est la spécificité de l'école malikite dans le panorama de la jurisprudence comparée qui lui confère une adaptabilité particulière ?",
          choices:[
          {id:"a",text:"Elle n'utilise que le Coran"},
          {id:"b",text:"Son insistance sur le ʿAmal al-Madanī et la Maṣlaḥa al-Mursala lui confère une flexibilité structurelle unique parmi les 4 Madhāhib"},
          {id:"c",text:"Elle est la plus stricte des 4 écoles"},
          {id:"d",text:"Elle permet le Talfīq sans aucune condition"}
          ],
          correctId:"b",
          explanation:"L'école malikite est structurellement la plus flexible : (1) ʿAmal al-Madanī — intégration de la pratique collective vivante comme source ; (2) Maṣlaḥa al-Mursala — réponse aux nouveaux besoins sans texte explicite ; (3) ʿUrf (coutume locale) — intégration des réalités locales. Ces trois sources, quasi-absentes dans les autres écoles, expliquent pourquoi le Madhhab mālikī s'est répandu dans des contextes aussi différents que l'Andalousie, le Maghreb, l'Afrique sub-saharienne et maintenant l'Europe."
        },
        {
          id:"q-muq-15",
          text:"Quelle attitude islamique face aux divergences entre Madhāhib le Fiqh muqāran enseigne-t-il ?",
          choices:[
          {id:"a",text:"Sectarisme : seul son Madhhab est valide, les autres sont dans l'erreur"},
          {id:"b",text:"Indifférence : toutes les positions sont équivalentes, peu importe ce qu'on choisit"},
          {id:"c",text:"Compréhension respectueuse : reconnaître la légitimité des positions basées sur des Ijtihād rigoureux, sans pour autant les considérer toutes équivalentes"},
          {id:"d",text:"Éviter complètement les questions qui font l'objet de divergence"}
          ],
          correctId:"c",
          explanation:"L'attitude correcte enseignée par le Fiqh muqāran : ni sectarisme (mon Madhhab seul est valide) ni relativisme (tout se vaut). La position juste : comprendre que les divergences ont des causes intellectuelles légitimes (Ibn Rushd le démontre), reconnaître la validité des Ijtihād rigoureux qui aboutissent à des positions différentes des nôtres, rester fidèle à son Madhhab par cohérence et régularité tout en respectant les autres. L'Imām Mālik : « Chaque Mujtahid qui a atteint son degré a raison à ses yeux — et Allah sait mieux. »"
        }]}}]};