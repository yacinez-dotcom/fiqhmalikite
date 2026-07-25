/* ════════════════════════════════════════════════════════
   BRIQUE: Données — Niveau Expert (expert.js)
   Sources : Matn d'Ibn Āshir · Muwattaʾ · Bidāyat al-Mujtahid
             doctrine-malikite.fr · Al-Ghazālī · Al-Shāṭibī
   ST-1 (aqida) ✅ · ST-2 (usul + malikiath) ✅ · ST-3 à ST-5 en attente
   ════════════════════════════════════════════════════════ */

const EXPERT = {
  id: 'expert',
  label: 'Expert',
  arabicLabel: 'المستوى الرابع',
  levelColor: '#6B2D5E',
  source: 'Matn d\'Ibn Āshir · Muwattaʾ · Bidāyat al-Mujtahid · doctrine-malikite.fr',
  description: 'Maîtrise théologique et méthodologique : ʿAqīda ashʿarite, Uṣūl al-Fiqh mālikī, Sīra, Fiqh des minorités, bioéthique et jurisprudence comparée.',

  levelBadge: {
    id: 'badge-expert-or',
    title: 'Maître en Fiqh Malikite',
    arabicTitle: 'الفَقِيهُ المَالِكِيّ المُتَمَكِّن',
    icon: 'star8',
    color: 'gold',
    unlockCondition: 'Obtenir ≥ 85 % de moyenne sur l\'ensemble des questionnaires du niveau Expert'
  },

  subjects: [

    /* ═══ العَقِيدَة الأَشعَرِيَّة وTawḥīd (التَّوحِيد) ═══ */
    {
      id: "aqida",
      title: "La Croyance Malikite-Ashʿarite",
      arabicTitle: "العَقِيدَة الأَشعَرِيَّة والتَّوحِيد",
      icon: "star8",
      description: "Le 1er pilier du Matn d'Ibn Āshir : Tawḥīd (التَّوحِيد), les 13 attributs divins, la méthode ashʿarite face aux sectes égarées et aux défis contemporains.",
      source: "Matn d'Ibn Āshir (1er pilier) · doctrine-malikite.fr Le Dogme · Al-Ghazālī · Al-Juwaynī",
      badge: {
        id: 'badge-expert-aqida',
        title: "Théologien Malikite",
        arabicTitle: "عَالِمُ العَقِيدَة",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "العَقِيدَة الأَشعَرِيَّة وTawḥīd (التَّوحِيد)"
      },
      lessons: [      {
        id: "aqd-01",
        title: "Tawḥīd (التَّوحِيد) — L'Unicité Divine et ses Trois Dimensions",
        status: 'available',
        content: [
        {"t": "lead", "v": "Tawḥīd (التَّوحِيد) — l'attestation de l'Unicité d'Allah — est le fondement absolu de la religion islamique. Le Matn d'Ibn Āshir al-Mālikī en fait son premier et principal pilier. L'école ashʿarite, adoptée par l'immense majorité des savants malikites, Tawḥīd (التَّوحِيد) que tout Muslim doit connaître."},
        { t:'ar', v:"وَاجِبٌ عَلَى كُلِّ مُكَلَّفٍ شَرعًا مَعرِفَةُ مَا يَجِبُ فِي حَقِّ اللَّهِ وَمَا يَستَحِيلُ وَمَا يَجُوزُ", n:"« Il est obligatoire pour tout Muslim adulte de connaître ce qui est obligatoire concernant Allah, ce qui lui est impossible et ce qui lui est possible. » — Matn d'Ibn Āshir" },
        {"t": "h", "v": "Les trois dimensions du Tawḥīd (التَّوحِيد)"},
        { t:'ul', v:[
          "<strong>1. Tawḥīd al-Rubūbiyya (تَوحِيدُ الرُّبُوبِيَّة) :</strong> reconnaître qu'Allah seul est le Seigneur, le Créateur, le Maître de l'univers. Cette dimension est naturelle à l'êFiṭra (الفِطرَة) — même les polythéistes arabes l'admettaient.",
          "<strong>2. Tawḥīd al-Ulūhiyya (تَوحِيدُ الأُلُوهِيَّة) :</strong> n'adorer qu'Allah seul — la dimension pratique et la plus exigeante. C'est là que réside la signification profonde de لَا إِلَهَ إِلَّا الله.",
          "<strong>3. Tawḥīd al-Asmāʾ wa-l-ṢTawḥīd al-Asmāʾ wa-l-Ṣifāt (تَوحِيدُ الأَسمَاء والصِّفَات) :</strong> affirmer que les Noms et Attributs divins sont parfaits, uniques, sans analogie avec les créatures."
        ] },
        {"t": "h", "v": "Signification complète de لَا إِلَهَ إِلَّا الله"},
        {"t": "p", "v": "La shahāda n'est pas une simple formule — c'est une déclaration à deux volets : (1) نَفي (négation) : لَا إِلَهَ — rien n'est digne d'adoration ; (2) إِثبَات (affirmation) : إِلَّا الله — sauf Allah. Cette structure signifie : j'exclus tout autre objet d'adoration ET j'affirme l'Unicité absolue d'Allah."},
        { t:'ul', v:[
          "الإِله ≠ simplement « Dieu » — الإِله est ce qui mérite une adoration totale, pas seulement la reconnaissance de l'existence.",
          "Adorer autre qu'Allah tout en reconnaissant Son existence = الشِّرك (associationnisme) — le seul péché impardonnable si on meurt dans cet état.",
          "Coran 4:48 : « Allah ne pardonne pas qu'on Lui associe quelque chose mais pardonne tout le reste à qui Il veut. »"
        ] },
        {"t": "h", "v": "Le cadre du Matn d'Ibn Āshir"},
        {"t": "p", "v": "Ibn Āshir al-Mālikī (mort 1040 H/1631 CE) structure sa ʿaqīda selon la méthode ashʿarite : pour chaque attribut divin, on définit (1) Wājib (وَاجِب) (obligatoire/nécessaire) pour Allah ; (2) ce qui est مُحَال (impossible) pour Allah ; (3) ce qui est جَائِز (possible) — ce qu'Il fait ou ne fait pas par Sa volonté libre."},
        {"t": "note", "v": "La méthode ashʿarite n'est pas une invention humaine arbitraire — elle formalise ce que le Coran lui-même établit : en affirmant les attributs d'Allah (سَمِيع، بَصِير، عَلِيم...), le Coran nous invite à réfléchir sur leur nature. L'école malikite adopte cette méthode parce qu'elle protège contre les deux erreurs symétriques : Tashbīh (التَّشبِيه) (anthropomorphisme) Taʿṭīl (التَّعطِيل) (déni des attributs)."}
        ]
      },
      {
        id: "aqd-02",
        title: "الأَسمَاء والصِّفَات — Les Attributs Divins selon l'École Ashʿarite",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'école ashʿarite — adoptée par les malikites — distingue les attributs divins en catégories précises. Chaque attribut a son contraire impossible. La connaissance de ces attributs est une obligation religieuse selon Ibn Āshir."},
        {"t": "h", "v": "Les 13 attributs obligatoires — واجب في حق الله"},
        { t:'ul', v:[
          "<strong>Wujūd (الوُجُود)</strong> — L'Existence : Allah existe nécessairement (وَاجِبُ الوُجُود). Son contraire impossible : العَدَم (non-existence).",
          "<strong>Qidam (القِدَم)</strong> — L'Éternité a parte ante : sans commencement. Contraire impossible : الحُدُوث (avoir un début).",
          "<strong>Baqāʾ (البَقَاء)</strong> — L'Éternité a parte post : sans fin. Contraire impossible : الفَنَاء (extinction).",
          "<strong>Mukhālafa lil-Ḥawādith (المُخَالَفَة للحَوَادِث)</strong> — La Dissemblance avec les créatures : rien ne Lui ressemble (لَيسَ كَمِثلِهِ شَيء). Contraire : المُمَاثَلَة (ressembler aux créatures).",
          "<strong>Qiyām bi-l-Nafs (القِيَام بِالنَّفس)</strong> — L'Auto-subsistance : Il n'a besoin de rien ni de personne. Contraire : الاحتِيَاج (le besoin).",
          "<strong>Waḥdāniyya (الوَحدَانِيَّة)</strong> — L'Unicité : un seul dans Son Essence, Ses Attributs et Ses Actes. Contraire : التَّعدُّد (multiplicité).",
          "<strong>Qudra (القُدرَة)</strong> — La Toute-Puissance : capable de tout possible. Contraire : العَجز (impuissance).",
          "<strong>Irāda (الإِرَادَة)</strong> — La Volonté : tout ce qui existe est selon Sa volonté. Contraire : الكَرَاهَة (contrainte).",
          "<strong>ʿIlm (العِلم)</strong> — La Science parfaite : Il sait tout, le manifeste et le caché. Contraire : الجَهل (ignorance).",
          "<strong>Ḥayāt (الحَيَاة)</strong> — La Vie : vivant sans être soumis à la mort. Contraire : المَوت.",
          "<strong>Samʿ (السَّمع)</strong> — L'Ouïe parfaite : entend tout sans organe. Contraire : الصَّمَم.",
          "<strong>Baṣar (البَصَر)</strong> — La Vue parfaite : voit tout sans organe ni lumière. Contraire : العَمَى.",
          "<strong>Kalām (الكَلَام)</strong> — La Parole : parole divine éternelle (le Coran) sans lettre ni son originel. Contraire : البَكَم (mutisme)."
        ] },
        {"t": "h", "v": "العِلم بِالله vs العِلم عَن الله"},
        {"t": "p", "v": "L'école ashʿarite distingue entre connaître Allah (العِلم بِالله — ce qu'Il est) et connaître sur Allah (العِلم عَن الله — ce que les textes disent). La méthode : affirmer ce que le Coran affirme, nier ce que le Coran nie, et dire لَا أَعلَم pour ce qui n'est pas mentionné."},
        {"t": "h", "v": "الجَائِز في حق الله — Ce qui est Possible"},
        {"t": "p", "v": "Les Actes d'Allah sont tous dans la catégorie du جَائِز — Il peut faire ou ne pas faire, récompenser ou punir, guider ou laisser dans l'égarement. Il n'est pas soumis à une logique externe de justice humaine. Coran 21:23 : « Il ne rend pas compte de ce qu'Il fait, mais eux seront interrogés. »"},
        {"t": "note", "v": "Erreur commune à éviter : confondre la Qudra (القُدرَة) (Toute-Puissance) avec l'obligation d'agir d'une certaine façon. Les mûtazilites pensaient qu'Allah était « obligé » de faire ce qui est le meilleur pour les humains. L'école ashʿarite rejette cela : Allah agit par Sa Volonté libre, non par contrainte — même si Sa Sagesse (الحِكمَة) sous-tend toujours Ses actes."}
        ]
      },
      {
        id: "aqd-03",
        title: "الرَّسُول ﷺ — Croyances Fondamentales sur le Prophète et les Messagers",
        status: 'available',
        content: [
        {"t": "lead", "v": "La seconde partie de la shahāda — محمدٌ رسولُ الله — engage des croyances précises sur le Prophète ﷺ et sur la prophétie en général. Le Matn d'Ibn Āshir y consacre une section essentielle de la ʿaqīda."},
        {"t": "h", "v": "Attributs obligatoires des Prophètes"},
        { t:'ul', v:[
          "<strong>الصِّدق</strong> — La véracité absolue : jamais menteur dans leur message ou leurs actes. Contraire impossible : الكَذِب (mensonge).",
          "<strong>الأَمَانَة</strong> — L'intégrité totale dans la transmission du message. Contraire : الخِيَانَة.",
          "<strong>التَّبلِيغ</strong> — La transmission complète du message sans rien dissimuler. Contraire : الكِتمَان.",
          "<strong>الفَطَانَة</strong> — L'intelligence et la sagacité supérieures. Contraire : البَلَادَة.",
          "<strong>ʿIṣma (العِصمَة)</strong> — L'infaillibilité dans la transmission de la révélation et dans les péchés majeurs."
        ] },
        {"t": "h", "v": "ʿIṣma (العِصمَة) — L'Infaillibilité : nuances malikites"},
        { t:'ul', v:[
          "Les prophètes sont infaillibles dans la <strong>transmission du message révélé</strong> — absolument.",
          "Ils sont protégés des <strong>péchés majeurs</strong> (الكَبَائِر) — sans exception.",
          "Des erreurs dans les <strong>jugements personnels non révélés</strong> (الاجتِهَاد البَشَرِيّ) sont possibles — Coran 80:1-2 (ʿAbasa).",
          "Les prophètes peuvent avoir des <strong>actes en deçà du plus méritoire</strong> (الأَولَى) — ce que le Coran appelle parfois du 'dhunūb' dans un sens non péjoratif.",
          "Cette nuance protège à la fois l'infaillibilité prophétique ET l'humanité des prophètes."
        ] },
        {"t": "h", "v": "Le Prophète Muhammad ﷺ — statut unique"},
        { t:'ul', v:[
          "خَاتَمُ الأَنبِيَاء والمُرسَلِين : dernier prophète — pas de prophète après lui jusqu'au Jugement.",
          "أَفضَلُ المَخلُوقَات : la plus haute créature dans la hiérarchie spirituelle — au-dessus des anges.",
          "Amour du Prophète ﷺ : obligatoire et plus fort que l'amour de soi-même et de toute créature. Hadīth : « Nul d'entre vous ne croit vraiment tant qu'il ne m'aime pas plus que son père, son fils et l'humanité entière. »",
          "Le respect du Prophète ﷺ : toute parole ou acte portant atteinte à son honneur = ridda (apostasie) selon la majorité des savants malikites."
        ] },
        {"t": "h", "v": "الجَائِز في حق الأَنبِيَاء"},
        { t:'ul', v:[
          "Les besoins physiologiques humains (manger, dormir, tomber malade, mourir).",
          "Les affections humaines légitimes (amour, tristesse, joie) sans que cela n'affecte la transmission du message.",
          "L'ijtihād personnel (non révélé) qui peut être corrigé par la révélation."
        ] },
        {"t": "note", "v": "Doctrine-malikite.fr insiste sur un point souvent mal compris : l'amour du Prophète ﷺ n'est pas un sentiment facultatif — c'Wājib (وَاجِب) dont l'absence remet en question la réalité de l'ĪĪmān (الإِيمَان). Cet amour se manifeste par le suivi de sa Sunna, non par les seuls sentiments."}
        ]
      },
      {
        id: "aqd-04",
        title: "Bidʿa (البِدعَة) — L'Innovation en Islam : Définition et Méthode Malikite",
        status: 'available',
        content: [
        {"t": "lead", "v": "Bidʿa (البِدعَة) (innovation) est l'un des plus mal compris et les plus mal utilisés en Islam contemporain. L'école malikite, via doctrine-malikite.fr et les sources classiques, a une approche nuancée et précise — très différente du rejet global de tout nouveau que prônent certains courants contemporains."},
        {"t": "h", "v": "Définition précise de la Bidʿa (البِدعَة)"},
        {"t": "p", "v": "L'Imām al-Shāṭibī (savant malikite andalou, mort 790 H) dans son Al-Iʿtiṣām : « Bidʿa (البِدعَة) est une voie inventée dans la religion qui ressemble à ce qui est légal, mais dont le but est d'exagérer dans le culte d'Allah. »"},
        { t:'ul', v:[
          "Bidʿa (البِدعَة) concerne la <strong>religion</strong> exclusivement — les innovations dans la vie quotidienne (technologie, médecine...) ne sont pas des bidʿa.",
          "Bidʿa (البِدعَة) se caractérise par l'<strong>absence de fondement</strong> dans les textes ou la pratique des salaf.",
          "Elle prétend être une forme d'<strong>adoration améliorée</strong> — c'est cela qui la rend dangereuse."
        ] },
        {"t": "h", "v": "Bidʿa Ḥasana (البِدعَة الحَسَنَة) vs Bidʿa Sayyi'a (البِدعَة السَّيِّئَة) — la classification malikite"},
        {"t": "p", "v": "L'Imām al-Shāfiʿī et de nombreux savants malikites ont distingué deux types :"},
        { t:'ul', v:[
          "<strong>Bidʿa ḤBidʿa Ḥasana (البِدعَة الحَسَنَة) (bonne innovation) :</strong> ce qui n'existait pas formellement au temps du Prophète ﷺ mais se fonde sur des principes islamiques clairs — ex : rédaction du Coran en un mushaf, institution d'une prière de tarāwīḥ collective, enseignement institutionnalisé.",
          "<strong>Bidʿa Sayyi'Bidʿa Sayyi'a (البِدعَة السَّيِّئَة) (mauvaise innovation) :</strong> ce qui contredit un texte explicite ou dénature la religion — ex : ajouter une rakʿa à une prière, nier les attributs divins.",
          "Sayyidnā ʿUmar sur la tarāwīḥ : « نِعمَت Bidʿa (البِدعَة)ُ هَذِهِ » — « Quelle bonne innovation que celle-ci ! » — dans le sens linguistique (nouveauté), pas juridique (illicite)."
        ] },
        {"t": "h", "v": "La méthode malikite vs le courant salafi contemporain"},
        {"t": "p", "v": "Doctrine-malikite.fr consacre une section importante à cette divergence :"},
        { t:'ul', v:[
          "Le courant néo-wahhabite/salafi contemporain dit : « كُلُّ بِدعَةٍ ضَلَالَة » (toute nouveauté est égarement) sans distinguer.",
          "La méthode malikite classique : distinguer innovation dans la pratique de la religion (potentiellement إِضَافَة للعِبَادَة) de l'organisation institutionnelle de la religion.",
          "L'adoption de la méthode malikite permet des pratiques comme : les dhikr collectifs, les célébrations du Mawlid (sous conditions), l'organisation institutionnelle des mosquées, l'enseignement islamique moderne.",
          "Le test malikite d'une pratique : « Est-ce que cela contredit un texte explicite ou la finalité de la religion ? Si non → non problématique. »"
        ] },
        { t:'ar', v:"مَن أَحدَثَ فِي أَمرِنَا هَذَا مَا لَيسَ مِنهُ فَهُوَ رَدٌّ", n:"« Quiconque invente dans notre affaire [la religion] quelque chose qui n'en fait pas partie, cela est rejeté. » — Hadīth al-Bukhārī — texte fondateur de la théorie de la bidʿa" },
        {"t": "note", "v": "Point subtil du hadīth : « مَا لَيسَ مِنهُ » signifie « qui n'en fait pas partie » — ce qui implique que certaines choses nouvelles PEUVENT « en faire partie » par un fondement général. La clé est la méthode d'interprétation : l'école malikite utilise les مَقَاصِد et l'istiṣlāḥ pour évaluer chaque cas."}
        ]
      },
      {
        id: "aqd-05",
        title: "الفِرَق والمَذَاهِب الكَلَامِيَّة — Les Courants Théologiques Islamiques",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'histoire de la théologie islamique est marquée par des débats fondamentaux sur la nature d'Allah, le libre arbitre et la foi. Doctrine-malikite.fr y consacre des pages importantes — comprendre ces divergences est essentiel pour un Muslim cultivé."},
        {"t": "h", "v": "Les 4 grandes positions théologiques islamiques"},
        { t:'ul', v:[
          "<strong>أَهلُ Sunna (السُّنَّة) والجَمَاعَة :</strong> l'orthodoxie islamique en deux branches — Ashāʿira (الأَشَاعِرَة) (école ashʿarite, suivie par malikites et chāfiʿites) et Māturīdiyya (المَاتُرِيدِيَّة) (école māturīdite, suivie par hanafites). Différences mineures entre elles.",
          "<strong>Muʿtazila (المُعتَزِلَة) :</strong> courant rationaliste fondé au 2ème siècle H — priorité de la raison, attributs divins allégorisés, « obligation d'Allah » de faire le bien. Rejeté par la majorité.",
          "<strong>Ashāʿira (الأَشَاعِرَة) :</strong> fondé par l'Imām Abū al-Ḥasan al-Ashʿarī (mort 324 H/935 CE) — ancien mutazilite converti — voie médiane entre littéralisme et rationalisme excessif.",
          "<strong>Wahhābiyya (الوَهَّابِيَّة)/السَّلَفِيَّة contemporaine :</strong> mouvement fondé par Muhammad ibn ʿAbd al-Wahhāb (1703-1792) — rejet de la tradition des 4 écoles, anthropomorphisme implicite dans les attributs, الجَهل بِطَرِيقَة Tafwīḍ (التَّفوِيض)."
        ] },
        {"t": "h", "v": "Les grands débats théologiques et les positions malikites"},
        { t:'ul', v:[
          "<strong>الصِّفَات الخَبَرِيَّة</strong> (attributs narratifs : main, visage, yeux divins) : l'école ashʿarite-malikite dit — affirmer sans comparaison (إِثبَات بِلَا تَشبِيه) et sans interprétation littérale (بِلَا تَجسِيم). Le sens littéral est impossible pour Allah.",
          "<strong>Istiwāʾ (الاستِوَاء) على العَرش</strong> : Allah S'est établi sur le Trône — la position malikite : Istiwāʾ (الاستِوَاء) معلوم (le mot est connu), Kayfiyya (الكَيفِيَّة) مجهولة (la modalité est inconnue), وĪĪmān (الإِيمَان) به واجب (y croire est obligatoire). Attribué à l'Imām Mālik lui-même.",
          "<strong>Qaḍāʾ wa-Qadar (القَضَاء والقَدَر)</strong> (prédestination et libre arbitre) : l'école malikite = الله يَخلُق أَفعَال العِبَاد (Allah crée les actes humains) mais les humains ont une كَسب (acquisition) qui fonde la responsabilité morale.",
          "<strong>مَنزِلَة الفَاسِق</strong> (statut du pécheur) : les malikites = ni kafir ni muʾmin parfait — gardé dans la catégorie des Muslims avec une foi imparfaite."
        ] },
        {"t": "h", "v": "Pourquoi les malikites suivent l'école ashʿarite"},
        { t:'ul', v:[
          "L'Imām al-Ashʿarī a formalisé la position de l'Imām Mālik et des premiers savants.",
          "La méthode ashʿarite utilise la raison (العَقل) comme outil auxiliaire des textes (النَّقل), non comme source primaire.",
          "Elle évite les deux extrêmes : Tajsīm (التَّجسِيم) (anthropomorphisme) Taʿṭīl (التَّعطِيل) (déni des attributs).",
          "Doctrine-malikite.fr : « Les musulmans de France et d'Afrique du Nord appartiennent historiquement à la tradition ashʿarite-malikite. »"
        ] },
        { t:'ar', v:"الاستِوَاءُ مَعلُومٌ وَالكَيفُ مَجهُولٌ وَالإِيمَانُ بِهِ وَاجِبٌ وَالسُّؤَالُ عَنهُ بِدعَةٌ", n:"« Le Istiwa est connu [par le texte], la modalité est inconnue, y croire est obligatoire, et en questionner [la modalité] est une innovation. » — Imām Mālik ibn Anas (Muwattaʾ)" },
        {"t": "note", "v": "Cette citation de l'Imām Mālik est l'une des plus importantes de la théologie islamique — elle établit la méthode de l'école malikite pour tous les attributs dits « anthropomorphes » du Coran : on affirme la réalité de l'attribut (لَيسَ التَّعطِيل), on nie toute ressemblance avec les créatures (لَيسَ التَّجسِيم), et on s'abstient de demander comment (الكَيفِيَّة مجهولة)."}
        ]
      },
      {
        id: "aqd-06",
        title: "العَقِيدَة والتَّحدِّيَات المُعَاصِرَة — La Foi Islamique face aux Défis Contemporains",
        status: 'available',
        content: [
        {"t": "lead", "v": "La ʿaqīda n'est pas une réalité figée — elle répond aux défis de chaque époque. Le Muslim contemporain doit confronter sa foi à des questions nouvelles : athéisme scientifique, pluralisme religieux, droits humains, intelligence artificielle. Doctrine-malikite.fr y apporte une réponse malikite structurée."},
        {"t": "h", "v": "L'Islam face à l'athéisme et au scientisme contemporain"},
        { t:'ul', v:[
          "L'argument cosmologique (دَلِيل الحُدُوث) : tout ce qui commence à exister a une cause — l'univers a commencé (Big Bang) → il a une cause → cette cause est Allah. L'Imām al-Ghazālī l'a formalisé avant Descartes.",
          "La complexité irréductible comme preuve (دَلِيل الإِتقَان) : Coran 88:17-19 — « Ne regardent-ils pas les chameaux comment ils ont été créés... ? »",
          "L'argument moral : l'existence de valeurs morales universelles (le meurtre est mal) présuppose une norme absolue externe à l'humanité.",
          "Le scientisme (« seule la science dit vrai ») est lui-même une position philosophique non scientifique."
        ] },
        {"t": "h", "v": "Islam, pluralisme religieux et tolérance"},
        { t:'ul', v:[
          "Position malikite classique : l'Islam est la voie d'Allah (Coran 3:19) — mais la contrainte en religion est interdite (Coran 2:256).",
          "Distinction : la vérité objective (l'Islam est vrai) ≠ la liberté de conscience (personne ne peut être forcé).",
          "Doctrine-malikite.fr sur le dialogue interreligieux : « Sage comme Nuh, sage comme Ibrahim, sage comme le Prophète ﷺ à Médine. »",
          "Les pactes de Médine (المِيثَاق المَدَنِيّ) : le Prophète ﷺ a établi une société plurielle avec des droits pour tous — modèle de coexistence islamique."
        ] },
        {"t": "h", "v": "ĪĪmān (الإِيمَان) والعَقل — Foi et Raison"},
        { t:'ul', v:[
          "L'Islam n'oppose pas foi et raison — il les hiérarchise : la raison est un outil précieux mais limité.",
          "Ce que la raison ne peut pas connaître seule (l'au-delà, le détail des actes d'adoration) = domaine de la révélation exclusive.",
          "Ce que la raison confirme (existence de Dieu, nécessité de la justice) = domaine commun.",
          "Ce que la raison contredit (un Dieu limité, injuste) = critère d'invalidité de la prétention prophétique.",
          "Ibn Rushd (Averroès) : la vérité philosophique et la vérité révélée ne peuvent pas se contredire — si elles semblent le faire, c'est qu'on interprète mal l'un ou l'autre."
        ] },
        {"t": "h", "v": "L'ʿaqīda face à l'Intelligence Artificielle"},
        {"t": "p", "v": "Question théologique émergente : l'IA peut-elle avoir une conscience ? Est-elle une créature responsable ? Position malikite préliminaire (par analogie avec le droit des animaux) : l'IA n'a pas de روح (âme), donc pas de مُكَلَّف (responsabilité morale) — c'est un outil. La responsabilité revient à son créateur et utilisateur."},
        {"t": "note", "v": "Doctrine-malikite.fr conclut sa section sur le dogme par cette idée essentielle : « L'ʿaqīda n'est pas un catéchisme rigide — c'est une vision du monde qui donne sens à chaque détail de la vie islamique. Sans ʿaqīda solide, le fiqh reste une technique. Avec elle, il devient un chemin vers Allah. »"}
        ]
      }],
      quiz: {
        id: 'quiz-expert-aqida',
        title: 'Questionnaire — ' + "العَقِيدَة الأَشعَرِيَّة وTawḥīd (التَّوحِيد)",
        status: "available",
        score: null,
        questions: [        {
          id: "q-aqd-01",
          text: "Le Matn d'Ibn Āshir al-Mālikī structure la ʿaqīda selon quel cadre pour chaque attribut divin ?",
          choices: [
          { id:"a", text:"Seuls les attributs positifs d'Allah" },
          { id:"b", text:"Trois catégories : Wājib (وَاجِب) (nécessaire), مُحَال (impossible), جَائِز (possible)" },
          { id:"c", text:"Les 99 Noms uniquement" },
          { id:"d", text:"La comparaison avec les créatures" }
          ],
          correctId: "b",
          explanation: "Ibn Āshir al-Mālikī : « Wājib (وَاجِب)ٌ عَلَى كُلِّ مُكَلَّفٍ شَرعًا مَعرِفَةُ مَا يَجِبُ فِي حَقِّ اللَّهِ وَمَا يَستَحِيلُ وَمَا يَجُوزُ » — les trois catégories permettent de structurer la connaissance de Dieu en évitant l'Tashbīh (التَّشبِيه) et le déTaʿṭīl (التَّعطِيل)."
        },
        {
          id: "q-aqd-02",
          text: "Tawḥīd (التَّوحِيد) sont :",
          choices: [
          { id:"a", text:"Prière, jeûne, zakāt" },
          { id:"b", text:"Tawḥīd al-Rubūbiyya (تَوحِيدُ الرُّبُوبِيَّة) + الأُلُوهِيَّة + الأَسمَاء والصِّفَات" },
          { id:"c", text:"Foi, espérance et charité" },
          { id:"d", text:"Coran, Sunna et Ijmāʿ" }
          ],
          correctId: "b",
          explanation: "Les 3 dimensions : (1) الرُّبُوبِيَّة — reconnaître Allah comme seul Seigneur/Créateur ; (2) الأُلُوهِيَّة — n'adorer qu'Allah seul (la plus pratique et la plus exigeante) ; (3) الأَسمَاء والصِّفَات — affirmer Ses Noms et Attributs parfaits, uniques, sans analogie."
        },
        {
          id: "q-aqd-03",
          text: "<strong>PIÈGE :</strong> Les polythéistes arabes croyaient-ils que « Allah existe » ?",
          choices: [
          { id:"a", text:"Non — ils niaient son existence" },
          { id:"b", text:"Oui — mais ils associaient d'autres divinités dans l'adoration (الأُلُوهِيَّة), pas la Seigneurie (الرُّبُوبِيَّة)" },
          { id:"c", text:"Non — ils croyaient en plusieurs dieux égaux" },
          { id:"d", text:"Oui — et ils étaient donc Muslims" }
          ],
          correctId: "b",
          explanation: "Coran 29:61 : « Si tu leur demandes qui a créé les cieux et la terre... ils diront : Allah. » Les polythéistes arabes admettaient la الرُّبُوبِيَّة (Allah = Créateur) mais pratiquaient le shirk dans la الأُلُوهِيَّة (adoraient des idoles en intermédiaires). D'où la signification profonde de لَا إِلَهَ إِلَّا الله — elle visait exactement cette déviation."
        },
        {
          id: "q-aqd-04",
          text: "Combien d'Wājib (وَاجِب) pour Allah enseigne Ibn Āshir ?",
          choices: [
          { id:"a", text:"7" },
          { id:"b", text:"13" },
          { id:"c", text:"20" },
          { id:"d", text:"99" }
          ],
          correctId: "b",
          explanation: "Le Matn d'Ibn Āshir enseigne 13 attributs obligatoires : Wujūd (الوُجُود)، Qidam (القِدَم)، Baqāʾ (البَقَاء)، Mukhālafa lil-Ḥawādith (المُخَالَفَة للحَوَادِث)، Qiyām bi-l-Nafs (القِيَام بِالنَّفس)، Waḥdāniyya (الوَحدَانِيَّة)، Qudra (القُدرَة)، Irāda (الإِرَادَة)، ʿIlm (العِلم)، Ḥayāt (الحَيَاة)، Samʿ (السَّمع)، Baṣar (البَصَر)، Kalām (الكَلَام). Chacun a son contraire impossible pour Allah."
        },
        {
          id: "q-aqd-05",
          text: "L'attribut de Qidam (القِدَم) (Éternité a parte ante) signifie :",
          choices: [
          { id:"a", text:"Allah est éternel dans le futur" },
          { id:"b", text:"Allah est sans commencement — Son existence n'a pas de début" },
          { id:"c", text:"Allah n'a pas d'âge" },
          { id:"d", text:"Allah est ancien" }
          ],
          correctId: "b",
          explanation: "Qidam (القِدَم) = sans commencement (أَزَلِيّ). Contraire impossible : الحُدُوث (avoir un début). À distinguer de Baqāʾ (البَقَاء) qui signifie sans fin (أَبَدِيّ). Allah est à la fois أَزَلِيّ (sans début) et أَبَدِيّ (sans fin) — contrairement aux créatures qui ont un début et une fin."
        },
        {
          id: "q-aqd-06",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> La citation de l'Imām Mālik sur l'Istiwāʾ (الاستِوَاء) (établissement sur le Trône) est :",
          choices: [
          { id:"a", text:"Il faut l'interpréter allégoriquement" },
          { id:"b", text:"Istiwāʾ (الاستِوَاء) مَعلُوم — le terme est connu / الكَيفُ مَجهُول — la modalité est inconnue / ĪĪmān (الإِيمَان) به Wājib (وَاجِب)" },
          { id:"c", text:"Il faut nier cet attribut" },
          { id:"d", text:"Il faut comprendre littéralement une assise physique" }
          ],
          correctId: "b",
          explanation: "Citation fondamentale de l'Imām Mālik : « Istiwāʾ (الاستِوَاء) مَعلُوم وَالكَيفُ مَجهُول وَĪĪmān (الإِيمَان) بِهِ Wājib (وَاجِب) وَالسُّؤَال عَنهُ بِدعَة ». C'est la méthode malikite pour tous les attributs narratifs du Coran : affirmer, ne pas anthropomorphiser, ne pas demander comment, ne pas nier."
        },
        {
          id: "q-aqd-07",
          text: "Tajsīm (التَّجسِيم) Taʿṭīl (التَّعطِيل) sont deux erreurs symétriques. Que sont-elles ?",
          choices: [
          { id:"a", text:"Deux pratiques cultuelles incorrectes" },
          { id:"b", text:"Tajsīm (التَّجسِيم) = attribuer un corps à Allah (anthropomorphisme). Taʿṭīl (التَّعطِيل) = nier Ses attributs réels" },
          { id:"c", text:"Deux écoles juridiques" },
          { id:"d", text:"Deux erreurs dans la prière" }
          ],
          correctId: "b",
          explanation: "L'école ashʿarite-malikite navigue entre deux extrêmes : Tajsīm (التَّجسِيم) (anthropomorphisme — dire qu'Allah a une main comme les humains) Taʿṭīl (التَّعطِيل) (nihilisme attributif — dire que les attributs n'ont aucune réalité). La voie juste : affirmer les attributs sans modalité comparable aux créatures."
        },
        {
          id: "q-aqd-08",
          text: "<strong>PIÈGE :</strong> L'ʿIṣma (العِصمَة) (infaillibilité prophétique) signifie-t-elle que les prophètes n'ont jamais eu de petites erreurs de jugement ?",
          choices: [
          { id:"a", text:"Oui — infaillibilité absolue dans tous les actes" },
          { id:"b", text:"Non — l'ʿIṣma (العِصمَة) couvre la transmission du message et les péchés majeurs ; des erreurs d'ijtihād personnel sont possibles et corrigées par la révélation" },
          { id:"c", text:"Oui — même leurs actes quotidiens étaient parfaits" },
          { id:"d", text:"Non — ils pouvaient mentir dans la vie privée" }
          ],
          correctId: "b",
          explanation: "L'ʿIṣma (العِصمَة) est précise : infaillible dans la transmission de la révélation (absolument) et protégé des péchés majeurs. Mais des erreurs dans les jugements personnels non révélés (ijtihād) sont possibles — Coran 80:1-2 (l'épisode ʿAbasa) montre le Prophète ﷺ corrigé sur un acte non-révélé."
        },
        {
          id: "q-aqd-09",
          text: "L'amour du Prophète ﷺ est-il une obligation ou un simple sentiment recommandé ?",
          choices: [
          { id:"a", text:"Un sentiment spirituel recommandé" },
          { id:"b", text:"Wājib (وَاجِب) dont l'absence affecte la réalité de l'ĪĪmān (الإِيمَان)" },
          { id:"c", text:"Obligatoire seulement le jour de la Mawlid" },
          { id:"d", text:"Optionnel pour les savants" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr et la tradition malikite : l'amour du Prophète ﷺ Wājib (وَاجِب), pas simplement recommandé. Hadīth : « لَا يُؤمِنُ أَحَدُكُم حَتَّى أَكُونَ أَحَبَّ إِلَيهِ مِن وَلَدِهِ وَوَالِدِهِ وَالنَّاسِ أَجمَعِين » — indique une condition (حَتَّى) à la réalité de l'ĪĪmān (الإِيمَان)."
        },
        {
          id: "q-aqd-10",
          text: "L'École ashʿarite a été fondée par :",
          choices: [
          { id:"a", text:"L'Imām Mālik ibn Anas" },
          { id:"b", text:"Abū al-Ḥasan al-Ashʿarī (mort 324 H), ancien mutazilite revenu à la tradition" },
          { id:"c", text:"Al-Ghazālī" },
          { id:"d", text:"Ibn Rushd" }
          ],
          correctId: "b",
          explanation: "L'Imām Abū al-Ḥasan al-Ashʿarī (874-935 CE) a fondé l'école qui porte son nom après avoir étudié chez les mutazilites puis s'en être séparé. Ses principaux ouvrages : Al-Ibāna, Maqālāt al-Islāmiyyīn, Al-Lumaʿ. L'école malikite adopte sa méthode car elle représente la voie médiane entre littéralisme et rationalisme excessif."
        },
        {
          id: "q-aqd-11",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> La Bidʿa ḤBidʿa Ḥasana (البِدعَة الحَسَنَة) (bonne innovation) — concept malikite ou rejeté ?",
          choices: [
          { id:"a", text:"Rejeté — toute innovation est égarement" },
          { id:"b", text:"Concept malikite valide — distinction entre innovation ayant un fondement islamique et innovation contredisant la religion" },
          { id:"c", text:"Seulement pour les Compagnons du Prophète ﷺ" },
          { id:"d", text:"Seulement dans le domaine de la science" }
          ],
          correctId: "b",
          explanation: "L'Imām al-Shāfiʿī et de nombreux savants malikites ont établi la distinction : Bidʿa ḤBidʿa Ḥasana (البِدعَة الحَسَنَة) (fondement islamique mais forme nouvelle) vs Bidʿa Sayyi'Bidʿa Sayyi'a (البِدعَة السَّيِّئَة) (contredit la religion). Sayyidnā ʿUmar ﵁ a lui-même utilisé le terme « نِعمَة Bidʿa (البِدعَة) » pour la tarāwīḥ collective. Doctrine-malikite.fr confirme cette méthode."
        },
        {
          id: "q-aqd-12",
          text: "<strong>PIÈGE :</strong> Le courant wahhabite/salafi contemporain et l'école malikite divergent sur :",
          choices: [
          { id:"a", text:"Les 5 piliers de l'Islam" },
          { id:"b", text:"La méthode d'interprétation des attributs divins et la notion de bidʿa — le salafisme tend vers l'Tajsīm (التَّجسِيم) et rejette toute innovation y compris les pratiques classiques" },
          { id:"c", text:"Le nombre de rakʿāt dans la prière" },
          { id:"d", text:"Le statut de la zakāt" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr consacre une section à ce débat. Les divergences principales : (1) méthode des attributs — Tajsīm (التَّجسِيم), Tafwīḍ (التَّفوِيض) (laisser la modalité à Allah) ; (2) bidʿa — les salafis rejettent beaucoup de pratiques classiques malikites (dhikr collectif, Mawlid, taqlīd) ; (3) méthode juridique — rejet des madhāhib par les salafis."
        },
        {
          id: "q-aqd-13",
          text: "Le statut du pécheur (الفَاسِق) en ʿaqīda malikite est :",
          choices: [
          { id:"a", text:"Kāfir (incroyant) — péché majeur = sortie de l'Islam" },
          { id:"b", text:"Muʾmin kāmil (croyant parfait)" },
          { id:"c", text:"Muslim ayant une foi imparfaite — entre les deux extrêmes mutazilite et khārijite" },
          { id:"d", text:"La question est sans réponse en rite malikite" }
          ],
          correctId: "c",
          explanation: "Position malikite (et majoritaire) : le pécheur grave (فَاسِق) reste Muslim — il n'est pas kāfir (comme disent les khārijites) ni dans une « position intermédiaire » sans nom (comme disent les mutazilites). Il est dans ĪĪmān (الإِيمَان) avec une foi imparfaite.  La foi augmente et diminue selon les actes."
        },
        {
          id: "q-aqd-14",
          text: "La méthode du Bidāyat al-Mujtahid d'Ibn Rushd dans les divergences théologiques est :",
          choices: [
          { id:"a", text:"Adopter toujours la position malikite" },
          { id:"b", text:"Toujours expliquer POURQUOI les savants divergent avant de conclure — identifier les racines des désaccords" },
          { id:"c", text:"Ignorer les autres écoles" },
          { id:"d", text:"Suivre toujours la majorité" }
          ],
          correctId: "b",
          explanation: "Ibn Rushd (Averroès) dans le Bidāyat al-Mujtahid : « si tu veux éviter les erreurs dans les questions de divergence, commence par connaître les SOURCES du désaccord — texte ambigu, analogie contestée, coutume locale, principe général concurrent. » Cette méthode vaut autant pour la ʿaqīda que pour le fiqh."
        },
        {
          id: "q-aqd-15",
          text: "<strong>CONTEMPORAIN :</strong> L'argument cosmologique islamique (دَلِيل الحُدُوث) s'appuie sur :",
          choices: [
          { id:"a", text:"La complexité des langages de programmation" },
          { id:"b", text:"Tout ce qui commence à exister a une cause → l'univers a commencé (Big Bang) → il a une cause externe et nécessaire → Allah" },
          { id:"c", text:"L'existence des prophètes" },
          { id:"d", text:"La beauté de la nature uniquement" }
          ],
          correctId: "b",
          explanation: "L'argument cosmologique islamique (formulé par al-Ghazālī, al-Māturīdī, puis repris par les apologètes contemporains) : (1) tout ce qui a un début a une cause ; (2) l'univers a un début (confirmé par la cosmologie moderne — Big Bang) ; (3) donc l'univers a une cause ; (4) cette cause est nécessairement éternelle, sans début, externe à l'univers — c'est Allah."
        },
        {
          id: "q-aqd-16",
          text: "Le قَضَاء والقَدَر (prédestination) selon l'ʿaqīda malikite-ashʿarite :",
          choices: [
          { id:"a", text:"Tout est déterminé — l'humain n'a aucun choix" },
          { id:"b", text:"L'humain a un libre arbitre total indépendant d'Allah" },
          { id:"c", text:"Allah crée les actes humains (les prédestine), et l'humain a une كَسب (acquisition/responsabilité) qui fonde la récompense et la punition" },
          { id:"d", text:"La prédestination ne concerne que les catastrophes naturelles" }
          ],
          correctId: "c",
          explanation: "Position ashʿarite-malikite (voie médiane entre Jabrites = tout forcé et Qadarites = libre arbitre total) : Allah crée tout acte (الخَالِق هو الله) ET l'humain « acquiert » Kasb (الكَسب) — d'où sa responsabilité morale. Coran 18:29 : « Celui qui veut, qu'il croie ; celui qui veut, qu'il refuse. »"
        },
        {
          id: "q-aqd-17",
          text: "<strong>AVANCÉ :</strong> La Mukhālafa lil-Ḥawādith (المُخَالَفَة للحَوَادِث) (dissemblance avec les créatures) implique :",
          choices: [
          { id:"a", text:"Que les attributs d'Allah n'existent pas réellement" },
          { id:"b", text:"Qu'Allah existe mais n'a pas de caractéristiques" },
          { id:"c", text:"Que les attributs divins (voir, entendre, parler...) sont réels mais sans aucune ressemblance ni analogie possible avec leurs équivalents chez les créatures" },
          { id:"d", text:"Que le Coran doit être interprété allégoriquement en totalité" }
          ],
          correctId: "c",
          explanation: "Mukhālafa lil-Ḥawādith (المُخَالَفَة للحَوَادِث) est l'un des 13 attributs obligatoires — Coran 42:11 : « لَيسَ كَمِثلِهِ شَيء وَهُوَ السَّمِيعُ البَصِير » — « rien ne Lui ressemble ET Il est l'Entendant, le Voyant. » La première partie nie toute ressemblance ; la seconde affirme les attributs réels. Les deux ensemble = la méthode ashʿarite."
        },
        {
          id: "q-aqd-18",
          text: "Qu'Tafwīḍ (التَّفوِيض) dans les attributs divins ?",
          choices: [
          { id:"a", text:"Attribuer à Allah des qualités humaines" },
          { id:"b", text:"Remettre la connaissance de la modalité (الكَيفِيَّة) des attributs divins à Allah seul, tout en affirmant leur réalité" },
          { id:"c", text:"Nier les attributs divins" },
          { id:"d", text:"Interpréter tous les attributs allégoriquement" }
          ],
          correctId: "b",
          explanation: "Tafwīḍ (التَّفوِيض) = « remettre » la connaissance de la modalité à Allah. On affirme : « Allah voit » (texte coranique) ; on ignore la « comment » (الكَيفِيَّة) ; on ne dit pas « voir comme les humains » ni « voir signifie autre chose ». C'est la position de l'Imām Mālik (الكَيف مجهول) et la méthode de la majorité des anciens savants."
        },
        {
          id: "q-aqd-19",
          text: "<strong>PIÈGE :</strong> La liberté de conscience et la vérité de l'Islam sont-elles contradictoires selon la ʿaqīda malikite ?",
          choices: [
          { id:"a", text:"Oui — si l'Islam est vrai, tout autre religion doit être interdite" },
          { id:"b", text:"Non — vérité objective (l'Islam est la voie d'Allah) et liberté de conscience (lَا إِكرَاه) coexistent" },
          { id:"c", text:"La question est moderne et sans réponse islamique" },
          { id:"d", text:"Oui — la contrainte est permise pour protéger la vérité" }
          ],
          correctId: "b",
          explanation: "Coran 2:256 : « لَا إِكرَاهَ فِي الدِّين » — pas de contrainte en religion. Coran 3:19 : « إِنَّ الدِّينَ عِندَ اللَّهِ Islām (الإِسلَام) » — l'Islam est la voie d'Allah. Les deux coexistent : Allah a établi la vérité ET a donné à l'humain la liberté de l'accepter ou non. La contrainte n'est pas un outil islamique pour propager la foi."
        },
        {
          id: "q-aqd-20",
          text: "Comment Ibn Rushd (Averroès) résout-il l'apparent conflit entre raison et révélation ?",
          choices: [
          { id:"a", text:"La révélation prime toujours — la raison est inutile" },
          { id:"b", text:"La raison prime toujours — la révélation est allégorique" },
          { id:"c", text:"La vérité philosophique et la vérité révélée ne peuvent pas se contredire — si elles semblent le faire, c'est qu'on interprète mal l'une ou l'autre" },
          { id:"d", text:"Les deux opèrent dans des domaines séparés sans interaction" }
          ],
          correctId: "c",
          explanation: "Ibn Rushd (Bidāyat al-Mujtahid et Tahāfut al-Tahāfut) : « La vérité est une — elle ne peut se contredire elle-même. Si un raisonnement philosophique valide semble contredire un texte révélé, soit le raisonnement est invalide, soit le texte a une interprétation que la raison peut atteindre. » C'est la vision malikite qui permet de valoriser la philosophie sans la substituer à la révélation."
        },
        {
          id: "q-aqd-21",
          text: "<strong>SYNTHÈSE :</strong> Quels sont les deux grand dangers que la méthode ashʿarite-malikite cherche à éviter ?",
          choices: [
          { id:"a", text:"Le péché mineur et le péché majeur" },
          { id:"b", text:"Tashbīh (التَّشبِيه)/Tajsīm (التَّجسِيم) (anthropomorphisme — assimiler Allah aux créatures) ET Taʿṭīl (التَّعطِيل) (déni des attributs divins réels)" },
          { id:"c", text:"L'innovation et la tradition" },
          { id:"d", text:"Le rationalisme et le mysticism" }
          ],
          correctId: "b",
          explanation: "La méthode ashʿarite-malikite navigue entre deux précipices symétriques : (1) Tashbīh (التَّشبِيه)/Tajsīm (التَّجسِيم) — dire que les attributs d'Allah sont comme ceux des humains (Allah a une main comme la nôtre) ; (2) Taʿṭīl (التَّعطِيل) — nier que les attributs ont une réalité (« voir » pour Allah = ne rien signifier de réel). La voie juste : affirmer les attributs, nier la ressemblance, ignorer la modalité."
        }]
      }
    },

    /* ═══ أُصُول Fiqh (الفِقه) المَالِكِيّ ═══ */
    {
      id: "usul",
      title: "Méthodologie Juridique Malikite",
      arabicTitle: "أُصُول الفِقه المَالِكِيّ",
      icon: "scroll",
      description: "Les 8 sources du Fiqh mālikī — dont l'ʿAmal al-Madanī (عَمَل المَدِينَة), Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة), Sadd al-Dharāʾiʿ (سَدّ الذَّرَائِع) — et la méthode du Bidāyat al-Mujtahid.",
      source: "Bidāyat al-Mujtahid d'Ibn Rushd · Al-Muwāfaqāt d'al-Shāṭibī · Mukhtasar Khalīl (intro)",
      badge: {
        id: 'badge-expert-usul',
        title: "Expert en Uṣūl",
        arabicTitle: "عَالِمُ الأُصُول",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "أُصُول Fiqh (الفِقه) المَالِكِيّ"
      },
      lessons: [      {
        id: "usul-01",
        title: "Maṣādir al-Tashrīʿ — Les 4 Sources Universelles du Fiqh",
        status: 'available',
        content: [
        {"t": "lead", "v": "Uṣūl al-Fiqh (أُصُول الفِقه) — la méthodologie juridique islamique — est la science qui établit les sources du droit islamique et les règles permettant d'en extraire les jugements. L'école malikite a développé la liste la plus riche de sources, allant bien au-delà des 4 sources universelles adoptées par toutes les écoles."},
        { t:'ar', v:"وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُم عَنهُ فَانتَهُوا", n:"Coran 59:7 — Fondement de la Sunna comme source du droit islamique" },
        {"t": "h", "v": "Source 1 : Al-Qurʾān al-Karīm (القُرآن الكَرِيم)"},
        { t:'ul', v:[
          "Source première et absolue — chaque norme juridique qui y est explicite est définitive.",
          "Les versets se divisent en : Muḥkam (مُحكَم — sens clair et non ambigu) et Mutashābih (مُتَشَابِه — sens ambigu nécessitant interprétation).",
          "Les versets juridiques (āyāt al-aḥkām / آيَات الأَحكَام) sont environ 500 sur 6236 versets.",
          "Naskh (النَّسخ — abrogation) : certains versets en ont abrogé d'autres — connaître l'ordre chronologique est indispensable.",
          "L'Imām Mālik est célèbre pour avoir dit : « Aucun jugement n'a été rendu au Yémen avant que les versets coraniques n'y soient parvenus. »"
        ] },
        {"t": "h", "v": "Source 2 : Al-Sunna al-Nabawiyya (السُّنَّة النَّبَوِيَّة)"},
        { t:'ul', v:[
          "Tout ce qui est authentiquement établi du Prophète ﷺ : paroles (Ḥadīth — حَدِيث), actes (Fiʿl — فِعل), et approbations tacites (Taqrīr — تَقرِير).",
          "Types par chaîne de transmission : Mutawātir (مُتَوَاتِر — rapporté par tant de transmetteurs que la fabrication est impossible) → Āḥād (آحَاد — rapporté par moins de transmetteurs).",
          "L'Imām Mālik est parfois cité comme rejetant un hadīth Āḥād quand il contredit l'ʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة) — la pratique constante des habitants de Médine.",
          "Muwattaʾ (المُوَطَّأ) est le premier grand recueil de Ḥadīth — critère rigoureux de sélection."
        ] },
        {"t": "h", "v": "Source 3 : Ijmāʿ (الإِجمَاع)"},
        { t:'ul', v:[
          "Le consensus des savants Muslims sur une question juridique — représente une certitude à laquelle aucun individu ne peut s'opposer.",
          "Spécificité malikite : l'Ijmāʿ le plus authentique est celui des Compagnons (Ṣaḥāba / الصَّحَابَة) suivi de l'ʿAmal al-Madanī (عَمَل المَدِينَة).",
          "Débat : un Ijmāʿ est-il possible après la génération des Compagnons ? L'Imām Mālik était prudent sur les Ijmāʿ tardifs.",
          "Coran 4:115 : « Celui qui s'oppose au Messager après que la voie juste lui a été clairement montrée et suit une voie autre que celle des croyants... »"
        ] },
        {"t": "h", "v": "Source 4 : Qiyās (القِيَاس)"},
        { t:'ul', v:[
          "L'analogie juridique : étendre le jugement d'un cas connu (Aṣl / أَصل) à un cas nouveau (Farʿ / فَرع) sur la base d'une cause commune (ʿIlla / عِلَّة).",
          "Exemple classique : le vin est prohibé pour cause d'ivresse (ʿIlla) → tout alcool enivrant (Farʿ) est également prohibé.",
          "L'Imām Mālik recourait au Qiyās mais lui préféMaṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) quand elle était disponible.",
          "Le Qiyās est limité par la condition que l'ʿIlla (عِلَّة — cause juridique) soit clairement identifiable et extractible du texte."
        ] },
        {"t": "note", "v": "La place du Qiyās chez l'Imām Mālik : il l'utilisait avec prudence. Plusieurs hadīth de la Muwattaʾ montrent Mālik refusant le Qiyās là où la pratique des Compagnons de Médine (ʿAmal — عَمَل) était clairement établie — la pratique prime sur l'analogie théorique."}
        ]
      },
      {
        id: "usul-02",
        title: "ʿAmal al-Madanī et Maṣlaḥa — Sources Exclusivement Malikites",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'école malikite est la seule qui élève ʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة — la pratique des habitants de Médine) au rang de source juridique majeure. Elle ajoute éMaṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) — l'intérêt public non textué — comme outil puissant d'adaptation de la loi aux réalités changeantes."},
        {"t": "h", "v": "ʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة) — La Pratique Médinoise"},
        {"t": "p", "v": "Définition : le comportement juridique constant et transmis des habitants de Médine depuis l'époque du Prophète ﷺ et des Compagnons. Pour l'Imām Mālik, Médine était « la cité de la révélation » — sa pratique collective préserve une Sunna vivante plus fiable qu'un hadīth isolé."},
        { t:'ul', v:[
          "Exemple célèbre : le Ṣāʿ (صَاع — mesure de volume) pour la Zakāt al-Fiṭr. L'Imām Mālik dit que la mesure médinoise prime sur les hadīth contradictoires car c'est une pratique transmise sans interruption.",
          "Cas d'Abū Ḥanīfa vs Mālik : pour la vente d'un bien avec Khiyār (خِيَار — option), Abū Ḥanīfa suivait un hadīth Āḥād ; Mālik préférait la pratique médinoise qui ne connaissait pas ce Khiyār.",
          "L'Imām al-Shāfiʿī critiquait cette source : « pourquoi la pratique médinoise aurait-elle plus d'autorité que celle des autres villes où vivaient aussi des Compagnons ? »",
          "Réponse malikite : Médine est la seule ville où le Prophète ﷺ a vécu 10 ans après la Hijra (هِجرَة) — sa pratique est donc la plus authentique."
        ] },
        {"t": "h", "v": "Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) — L'Intérêt Public Non Textué"},
        {"t": "p", "v": "La Maṣlaḥa al-Mursala est un intérêt humain réel et non mentionné par les textes — ni textuellement approuvé, ni textuellement rejeté. L'école malikite l'utilise comme source juridique légitime quand elle est en accord avec l'esprit de la Sharīʿa (شَرِيعَة)."},
        { t:'ul', v:[
          "Conditions malikites de validité : (1) l'intérêt est réel et général (pas individuel) ; (2) il n'entre pas en conflit avec un texte ; (3) il renforce l'une des 5 Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة).",
          "Exemple historique : Sayyidnā ʿUmar ﵁ a imposé l'enregistrement du Dīwān (دِيوَان — registre fiscal) — aucun texte n'en parle, mais la Maṣlaḥa de l'État islamique le justifiait.",
          "Exemple contemporain : obligation de permis de conduire pour conduire — aucun texte ne le mentionne mais la Maṣlaḥa al-ʿĀmma (المَصلَحَة العَامَّة — intérêt général) et la protection de la vie (Ḥifẓ al-Nafs / حِفظ النَّفس) le justifient.",
          "Al-Shāṭibī (الشَّاطِبِيّ) dans Al-Muwāfaqāt (المُوَافَقَات) : « la Sharīʿa a été établie pour les Maṣāliḥ (مَصَالِح) des créatures — c'est sa finalité. »"
        ] },
        { t:'ar', v:"الشَّرِيعَةُ مَوضُوعَةٌ لِمَصَالِحِ العِبَادِ فِي العَاجِلِ وَالآجِلِ", n:"Al-Shāṭibī, Al-Muwāfaqāt — « La Sharīʿa est établie pour les intérêts des créatures ici-bas et dans l'au-delà »" },
        {"t": "note", "v": "Différence avec l'Istiḥsān (الاستِحسَان — préférence juridique) hanafite : la Maṣlaḥa malikite s'appuie sur des intérêts généraux OBJECTIFS et vérifiables. L'Istiḥsān hanafite peut être basé sur le sentiment du savant seul. L'Imām Mālik était méfiant vis-à-vis d'un Istiḥsān non fondé."}
        ]
      },
      {
        id: "usul-03",
        title: "Sadd al-Dharāʾiʿ et Sources Complémentaires",
        status: 'available',
        content: [
        {"t": "lead", "v": "Sadd al-Dharāʾiʿ (سَدّ الذَّرَائِع — bloquer les prétextes) est l'une des contributions les plus originales de l'école malikite à l'Uṣūl al-Fiqh (أُصُول الفِقه). Elle reflète une vision préventive du droit islamique : interdire les actes licites qui mèneraient probablement au Ḥarām (حَرَام)."},
        {"t": "h", "v": "Sadd al-Dharāʾiʿ (سَدّ الذَّرَائِع) — Bloquer les Prétextes"},
        {"t": "p", "v": "Si un acte en soi licite mène habituellement, directement ou probablement, à un acte Ḥarām — il devient lui-même interdit. C'est la « prophylaxie juridique » islamique."},
        { t:'ul', v:[
          "Exemple classique : cultiver des raisins pour les vendre à quelqu'un qu'on sait vinificateur → interdit par Sadd al-Dharāʾiʿ même si la vente de raisin est licite.",
          "Exemple malikite : regarder le visage d'une femme étrangère est en soi licite — mais si cela mène habituellement à la Fitnah (فِتنَة — tentation), c'est interdit.",
          "Les conditions : la probabilité de résultat Ḥarām doit être haute, non simplement théorique.",
          "L'école chāfiʿite l'utilise moins — les hanafites encore moins. C'est une marque distinctive de la méthode malikite.",
          "Ibn al-Qayyim (hanbalite) a développé une théorie similaire : Dharāʾiʿ (ذَرَائِع) et Wasāʾil (وَسَائِل)."
        ] },
        {"t": "h", "v": "Istiṣḥāb (الاستِصحَاب) — Présomption de Continuité"},
        { t:'ul', v:[
          "Un état juridique établi demeure jusqu'à preuve contraire — la continuité est présumée.",
          "Exemple : une personne est présumée vivante jusqu'à preuve de sa mort (aucune décision d'héritage tant que la mort n'est pas établie).",
          "Exemple : un acte licite reste licite jusqu'à l'arrivée d'une interdiction — la licéité (Ibāḥa / إِبَاحَة) est l'état par défaut.",
          "Tous les Fuqahāʾ (فُقَهَاء — juristes) utilisent l'Istiṣḥāb mais les malikites l'ont systématisé."
        ] },
        {"t": "h", "v": "ʿUrf (العُرف) — La Coutume Locale"},
        { t:'ul', v:[
          "La coutume locale établie devient une source de jugement là où les textes sont muets.",
          "Condition : ne pas contredire un texte explicite.",
          "Exemples : les normes locales de dot (Mahr / مَهر), les usages commerciaux locaux, les définitions locales de « suffisant » dans l'entretien (Nafaqa / نَفَقَة).",
          "L'Imām Mālik prenait fortement en compte le ʿUrf de Médine — c'est l'une des raisons pour lesquelles certaines de ses fatwas ne s'appliquent pas directement à d'autres régions."
        ] },
        {"t": "h", "v": "Istiḥsān (الاستِحسَان) — La Préférence Juridique"},
        { t:'ul', v:[
          "Déroger à un principe général au profit d'un cas particulier pour des raisons d'équité ou de nécessité.",
          "L'Imām Mālik l'utilisait prudemment — surtout quand l'application stricte d'un Qiyās (قِيَاس) aurait mené à une injustice manifeste.",
          "L'Imām al-Shāfiʿī a critiqué l'Istiḥsān : « qui pratique l'Istiḥsān légifère » — risque de subjectivité.",
          "Réponse malikite : l'Istiḥsān doit être fondé sur une Maṣlaḥa (مَصلَحَة) ou un Nass (نَصّ) général — pas sur une simple préférence personnelle."
        ] },
        {"t": "note", "v": "Vue d'ensemble malikite : 8 sources de droit — Qurʾān, Sunna, Ijmāʿ, Qiyās (universelles) + ʿAmal al-Madīna, Maṣlaḥa, Sadd al-Dharāʾiʿ, Istiṣḥāb, ʿUrf, Istiḥsān (spécifiques à l'école malikite). Ce corpus étendu donne à l'école malikite une extraordinaire flexibilité pour répondre aux nouvelles situations."}
        ]
      },
      {
        id: "usul-04",
        title: "Ijtihād et Taqlīd — Effort Interprétatif et Imitation",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ijtihād (اجتِهَاد — effort interprétatif maximal) et Taqlīd (تَقلِيد — imitation d'un savant qualifié) sont les deux pôles du rapport d'un Muslim à la connaissance juridique. La compréhension de leur interaction est fondamentale pour tout étudiant avancé."},
        {"t": "h", "v": "Ijtihād (اجتِهَاد) — L'Effort Interprétatif"},
        {"t": "p", "v": "L'Ijtihād est l'effort maximal d'un Mujtahid (مُجتَهِد — juriste qualifié) pour extraire un jugement des sources islamiques sur une question non directement résolue par un texte. C'est la « clé de voûte » de la vie du droit islamique."},
        { t:'ul', v:[
          "Conditions du Mujtahid : maîtrise du Qurʾān, des sciences du Ḥadīth, de la langue arabe, de l'Uṣūl al-Fiqh (أُصُول الفِقه), des positions des Compagnons et de la réalité du contexte.",
          "Types d'Ijtihād : Muṭlaq (مُطلَق — indépendant, sans suivre un Madhhab / مَذهَب) → impossible aujourd'hui selon la plupart des savants ; Muqayyad (مُقَيَّد — dans le cadre d'un Madhhab) → encore pratiqué.",
          "Hadīth : « Quand le juge fait un effort (Ijtihād) et tombe juste, il a deux récompenses ; s'il se trompe, il en a une. » — al-Bukhārī et Muslim.",
          "L'Ijtihād collectif (Ijtihād Jamāʿī / اجتِهَاد جَمَاعِيّ) : la méthode contemporaine — conseils de Fuqahāʾ (Majālis al-Fiqhiyya / مَجَالِس فِقهِيَّة) délibèrent ensemble.",
          "Le Conseil Européen de la Fatwa : organe malikite-influencé en Europe — pratique l'Ijtihād Jamāʿī sur les questions des Muslims d'Occident."
        ] },
        {"t": "h", "v": "Taqlīd (تَقلِيد) — L'Imitation Raisonnée"},
        { t:'ul', v:[
          "Pour les non-spécialistes : obligation de suivre un Madhhab reconnu plutôt que d'improviser des jugements personnels.",
          "Coran 16:43 : « Demandez aux gens du Dhikr (أَهل الذِّكر — savants) si vous ne savez pas. »",
          "Le Taqlīd n'est pas une déformation — c'est le mécanisme normal de transmission de la connaissance dans toute civilisation complexe.",
          "L'Imām Mālik lui-même pratiquait le Taqlīd vis-à-vis des Compagnons : « aucun avis des Ṣaḥāba (الصَّحَابَة) ne peut être contredit par le Qiyās. »"
        ] },
        {"t": "h", "v": "Talfīq (التَّلفِيق) — Combiner Deux Madhāhib"},
        {"t": "p", "v": "Le Talfīq est l'action de combiner des jugements de deux Madhāhib différents dans un seul acte : ex. faire ses ablutions selon le Fiqh mālikite ET prier selon le Fiqh chāfiʿite. Est-ce permis ?"},
        { t:'ul', v:[
          "Position malikite classique : Talfīq permis pour les individus en cas de besoin réel (Ḥāja / حَاجَة) ou de difficulté.",
          "Conditions : ne pas combiner dans un seul acte pour choisir systématiquement le plus facile (Tatabbuʿ al-Rukhaṣ / تَتَبُّع الرُّخَص — chasse aux facilités) — ce qui est interdit.",
          "Exemple permis : suivre l'avis malikite sur le Khiyār al-Majlis (خِيَار المَجلِس) dans un pays non islamique pour des raisons commerciales pratiques.",
          "Doctrine-malikite.fr : « le Talfīq est toléré pour les Muslims vivant en Occident dans les domaines où leur contexte particulier le nécessite. »"
        ] },
        {"t": "note", "v": "Al-Shāṭibī (الشَّاطِبِيّ) dans Al-Muwāfaqāt sur Tatabbuʿ al-Rukhaṣ : c'est chercher dans chaque Madhhab la règle la plus facile pour se constituer un Islam « à la carte » minimal. C'est interdit car cela vide la religion de sa substance. Le Taqlīd est une discipline, pas un menu."}
        ]
      },
      {
        id: "usul-05",
        title: "Manhaj Ibn Rushd — La Méthode du Bidāyat al-Mujtahid",
        status: 'available',
        content: [
        {"t": "lead", "v": "Ibn Rushd al-Ḥafīd (اِبن رُشد الحَفِيد — Averroès, mort 595 H/1198 CE), savant malikite andalou et philosophe, a écrit le Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid (بِدَايَة Mujtahid (المُجتَهِد) وَنِهَايَة المُقتَصِد) — le manuel le plus rigoureux de jurisprudence comparée islamique."},
        { t:'ar', v:"مَن أَرَادَ أَن يَكُونَ مُجتَهِدًا يَجِبُ أَن يَعرِفَ أَسبَابَ الخِلَاف", n:"Ibn Rushd, Bidāyat al-Mujtahid — « Quiconque veut être Mujtahid doit connaître les CAUSES des divergences »" },
        {"t": "h", "v": "Les 5 causes de divergence identifiées par Ibn Rushd"},
        { t:'ul', v:[
          "<strong>1. Ikhtilāf al-Riwāya (اختِلَاف الرِّوَايَة) :</strong> divergence sur l'authenticité d'un Ḥadīth — si l'un le considère authentique et l'autre non, leurs jugements diffèrent.",
          "<strong>2. Taʿāruḍ al-Adilla (تَعَارُض الأَدِلَّة) :</strong> conflit apparent entre deux textes — chaque savant privilégie un texte sur l'autre selon sa méthode.",
          "<strong>3. Ikhtilāf fī al-Qiyās (اختِلَاف فِي القِيَاس) :</strong> divergence sur la ʿIlla (عِلَّة — cause juridique) qui fonde une analogie.",
          "<strong>4. Taʿaddud maʿānī al-Alfāẓ (تَعَدُّد مَعَانِي الأَلفَاظ) :</strong> un même mot arabe a plusieurs sens possibles — chaque école en choisit un.",
          "<strong>5. Ikhtilāf fī al-Ijmāʿ (اختِلَاف فِي الإِجمَاع) :</strong> divergence sur l'existence ou le champ d'un consensus — ce que l'un considère comme Ijmāʿ, l'autre ne le reconnaît pas."
        ] },
        {"t": "h", "v": "La méthode du Bidāyat al-Mujtahid"},
        { t:'ul', v:[
          "Chaque question commence par l'exposé de toutes les positions des grandes écoles (Aqwāl / أَقوَال).",
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
      }],
      quiz: {
        id: 'quiz-expert-usul',
        title: 'Questionnaire — ' + "أُصُول Fiqh (الفِقه) المَالِكِيّ",
        status: "available",
        score: null,
        questions: [        {
          id: "q-usul-01",
          text: "Les 4 sources universelles du Fiqh islamique acceptées par toutes les écoles sont :",
          choices: [
          { id:"a", text:"Coran, Ijmāʿ, Qiyās et ʿUrf" },
          { id:"b", text:"Qurʾān, Sunna, Ijmāʿ (الإِجمَاع) Qiyās (القِيَاس)" },
          { id:"c", text:"Coran, Muwattaʾ, Maṣlaḥa et Sadd al-Dharāʾiʿ" },
          { id:"d", text:"Coran, Sunna, ʿAmal al-Madanī et Maṣlaḥa" }
          ],
          correctId: "b",
          explanation: "Les 4 sources universelles : Qurʾān (الكِتَاب) + Sunna (السُّنَّة) + Ijmāʿ (الإِجمَاع — consensus des savants) + Qiyās (القِيَاس — analogie). Toutes les écoles sunnites les acceptent. L'école malikite y ajoute 4 à 5 sources supplémentaires qui lui sont propres."
        },
        {
          id: "q-usul-02",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Qu'ʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة) ?",
          choices: [
          { id:"a", text:"Les hadiths rapportés exclusivement par les Médinois" },
          { id:"b", text:"La pratique constante et transmise des habitants de Médine depuis l'époque du Prophète ﷺ — source juridique unique à l'école malikite" },
          { id:"c", text:"L'ensemble des fatwas de l'Imām Mālik" },
          { id:"d", text:"Le rite de la mosquée prophétique uniquement" }
          ],
          correctId: "b",
          explanation: "Le ʿAmal ahl al-Madīna (عَمَل المَدِينَة) est la pratique collective transmise sans interruption depuis le Prophète ﷺ. Pour l'Imām Mālik, elle préserve une Sunna vivante — parfois plus fiable qu'un Ḥadīth Āḥād isolé. C'est une source unique à l'école malikite, absente des autres écoles."
        },
        {
          id: "q-usul-03",
          text: "<strong>PIÈGE :</strong> Si un Ḥadīth Āḥād contredit la pratique constante de Médine, que fait l'Imām Mālik ?",
          choices: [
          { id:"a", text:"Toujours suivre le Ḥadīth" },
          { id:"b", text:"Préférer la pratique médinoise (ʿAmal / عَمَل) au Ḥadīth Āḥād dans ce cas" },
          { id:"c", text:"Demander l'avis du Calife" },
          { id:"d", text:"Ignorer les deux et faire un Qiyās (قِيَاس)" }
          ],
          correctId: "b",
          explanation: "C'est la position distinctive de Mālik : le ʿAmal al-Madanī (عَمَل المَدَنِيّ) — pratique médinoise continue depuis les Compagnons — prime sur un Ḥadīth Āḥād isolé. Il estimait que la pratique collective préserve mieux la Sunna qu'une transmission individuelle."
        },
        {
          id: "q-usul-04",
          text: "Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) doit satisfaire 3 conditions. Lesquelles ?",
          choices: [
          { id:"a", text:"Être mentionnée dans le Coran, unanimement reconnue et ancienne" },
          { id:"b", text:"Être un intérêt réel et général, ne pas contredire un texte, et renforcer une des 5 Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة)" },
          { id:"c", text:"Être approuvée par la majorité des Muslims" },
          { id:"d", text:"Être proposée par un Mujtahid muṭlaq uniquement" }
          ],
          correctId: "b",
          explanation: "Les 3 conditions malikites de la Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة — intérêt public non textué) : (1) intérêt RÉEL et GÉNÉRAL (pas individuel ni hypothétique) ; (2) ne pas contredire un texte explicite ; (3) renforcer l'une des 5 Maqāṣid (مَقَاصِد — finalités) : vie, religion, intellect, lignée, biens."
        },
        {
          id: "q-usul-05",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Sadd al-Dharāʾiʿ (سَدّ الذَّرَائِع) signifie :",
          choices: [
          { id:"a", text:"Permettre ce qui facilite la vie" },
          { id:"b", text:"Interdire un acte licite quand il mène habituellement et probablement à un acte Ḥarām (حَرَام)" },
          { id:"c", text:"Fermer les portes des mosquées à ceux qui transgressent" },
          { id:"d", text:"Prohiber tout ce qui est nouveau" }
          ],
          correctId: "b",
          explanation: "Sadd al-Dharāʾiʿ = « bloquer les prétextes » — source juridique préventive distinctive de l'école malikite. Si un acte licite A mène habituellement à un acte Ḥarām B, alors A devient interdit. Exemple : vendre des raisins à quelqu'un qu'on sait vinificateur → interdit."
        },
        {
          id: "q-usul-06",
          text: "L'Istiṣḥāb (الاستِصحَاب) se base sur quel principe ?",
          choices: [
          { id:"a", text:"Un état juridique établi demeure jusqu'à preuve contraire — présomption de continuité" },
          { id:"b", text:"Tout le passé est abrogé par le présent" },
          { id:"c", text:"L'état d'une personne se base sur sa réputation actuelle" },
          { id:"d", text:"La continuité ne peut être présumée en fiqh" }
          ],
          correctId: "a",
          explanation: "Istiṣḥāb (الاستِصحَاب) = présomption de continuité. Un état établi reste jusqu'à preuve de changement. Exemples : (1) présomption de vie d'un disparu ; (2) licéité par défaut de tout acte non explicitement interdit (Ibāḥa Aṣliyya / إِبَاحَة أَصلِيَّة) ; (3) la pureté rituelle est présumée jusqu'à ce qu'une impureté soit certaine."
        },
        {
          id: "q-usul-07",
          text: "Ibn Rushd dans le Bidāyat al-Mujtahid identifie combien de causes de divergence entre écoles ?",
          choices: [
          { id:"a", text:"2" },
          { id:"b", text:"3" },
          { id:"c", text:"5" },
          { id:"d", text:"7" }
          ],
          correctId: "c",
          explanation: "Ibn Rushd identifie 5 causes systématiques : (1) Ikhtilāf al-Riwāya (اختِلَاف الرِّوَايَة — authenticité du Ḥadīth) ; (2) Taʿāruḍ al-Adilla (تَعَارُض الأَدِلَّة — conflit entre textes) ; (3) Ikhtilāf fī al-Qiyās (اختِلَاف فِي Qiyās (القِيَاس) — divergence sur la cause analogique) ; (4) Taʿaddud maʿānī al-Alfāẓ (تَعَدُّد المَعَانِي — polysémie arabe) ; (5) Ikhtilāf fī al-Ijmāʿ (اختِلَاف فِي Ijmāʿ (الإِجمَاع) — sur le consensus)."
        },
        {
          id: "q-usul-08",
          text: "<strong>PIÈGE :</strong> Le Talfīq (التَّلفِيق — combiner deux Madhāhib) est-il toujours interdit ?",
          choices: [
          { id:"a", text:"Oui — toujours haram" },
          { id:"b", text:"Non — permis en cas de besoin réel, interdit quand il vise à choisir systématiquement le plus facile (Tatabbuʿ al-Rukhaṣ / تَتَبُّع الرُّخَص)" },
          { id:"c", text:"Permis seulement pour les savants" },
          { id:"d", text:"Interdit seulement entre malikites et hanafites" }
          ],
          correctId: "b",
          explanation: "Position malikite nuancée : Talfīq (التَّلفِيق) est permis pour une Ḥāja (حَاجَة — besoin réel). Ce qui est interdit, c'est le Tatabbuʿ al-Rukhaṣ (تَتَبُّع الرُّخَص) — choisir dans chaque Madhhab la règle la plus permissive pour construire un Islam minimal."
        },
        {
          id: "q-usul-09",
          text: "La méthode du Bidāyat al-Mujtahid est unique car elle :",
          choices: [
          { id:"a", text:"Ne présente que la position malikite" },
          { id:"b", text:"Expose les positions de toutes les écoles + leurs arguments + la source de divergence — transformant le désaccord en outil d'apprentissage" },
          { id:"c", text:"Est basée uniquement sur le Qurʾān" },
          { id:"d", text:"Interdit toute comparaison entre les écoles" }
          ],
          correctId: "b",
          explanation: "La méthode d'Ibn Rushd : (1) toutes les positions des grandes écoles ; (2) les arguments de chaque position ; (3) identification de la source de divergence parmi ses 5 catégories ; (4) avis personnel motivé. Cette démarche est unique — elle transforme la divergence juridique en exercice d'intelligence."
        },
        {
          id: "q-usul-10",
          text: "<strong>CONTEMPORAIN :</strong> L'obligation de permis de conduire illustre quel principe malikite ?",
          choices: [
          { id:"a", text:"Le Qiyās (القِيَاس — analogie)" },
          { id:"b", text:"La Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة — intérêt public non textué) car aucun texte ne mentionne la conduite automobile mais la sécurité routière est un intérêt général islamiquement valide" },
          { id:"c", text:"L'Istiḥsān (الاستِحسَان — préférence juridique)" },
          { id:"d", text:"Le ʿAmal al-Madanī (عَمَل المَدَنِيّ)" }
          ],
          correctId: "b",
          explanation: "Le permis de conduire = Maṣlaḥa al-Mursala (مَصلَحَة مُرسَلَة). Aucun texte islamique ne le mentionne. Mais il remplit les conditions : (1) intérêt réel et général (sécurité routière) ; (2) ne contredit aucun texte ; (3) protège la vie (Ḥifẓ al-Nafs / حِفظ النَّفس) — l'une des 5 Maqāṣid (مَقَاصِد). Donc islamiquement obligatoire par Maṣlaḥa."
        },
        {
          id: "q-usul-11",
          text: "Qu'est-ce que le Naskh (النَّسخ) dans l'Uṣūl al-Fiqh ?",
          choices: [
          { id:"a", text:"La traduction du Qurʾān" },
          { id:"b", text:"L'abrogation d'un texte antérieur par un texte postérieur — certains versets coraniques ont été abrogés par des révélations ultérieures" },
          { id:"c", text:"La copie manuscrite du Qurʾān" },
          { id:"d", text:"Le consensus des Compagnons" }
          ],
          correctId: "b",
          explanation: "Naskh (النَّسخ) = abrogation. Des versets ou hadiths ont été abrogés par des textes postérieurs. Exemple classique : l'interdiction de l'alcool est venue progressivement — des versets antérieurs (moins sévères) ont été abrogés par des versets postérieurs (prohibition totale). Connaître l'ordre chronologique de la révélation est essentiel pour le Mujtahid."
        },
        {
          id: "q-usul-12",
          text: "<strong>AVANCÉ :</strong> Pourquoi l'Imām al-Shāfiʿī critiquait-il le ʿAmal al-Madanī de Mālik ?",
          choices: [
          { id:"a", text:"Parce que Médine n'était pas la ville du Prophète ﷺ" },
          { id:"b", text:"Parce que des Compagnons vivaient aussi à Kūfa, Baṣra, Damas — leur pratique aurait une valeur égale à celle de Médine" },
          { id:"c", text:"Parce que le ʿAmal al-Madanī contredisait le Qurʾān" },
          { id:"d", text:"Parce qu'il n'avait pas étudié à Médine" }
          ],
          correctId: "b",
          explanation: "Al-Shāfiʿī (qui avait étudié sous Mālik) : « Pourquoi la pratique médinoise aurait-elle priorité sur la pratique de Kūfa où vécut ʿAlī ibn Abī Ṭālib ﵁, ou de Damas où vécut Abū al-Dardāʾ ﵁ ? » Réponse malikite : Médine est unique car le Prophète ﷺ y a vécu 10 ans après la Hijra (هِجرَة), y a transmis toute la Sharīʿa (شَرِيعَة) et y a formé les Compagnons."
        },
        {
          id: "q-usul-13",
          text: "L'Ijtihād Jamāʿī (اجتِهَاد جَمَاعِيّ — collectif) est la méthode contemporaine privilégiée. Pourquoi ?",
          choices: [
          { id:"a", text:"Parce qu'un individu seul a trop de responsabilité" },
          { id:"b", text:"Parce que les questions contemporaines (bioéthique, finance, numérique) nécessitent des expertises multiples que nul savant seul ne maîtrise entièrement" },
          { id:"c", text:"Parce que l'Ijtihād individuel est interdit aujourd'hui" },
          { id:"d", text:"Pour éviter les divergences" }
          ],
          correctId: "b",
          explanation: "L'Ijtihād Jamāʿī (collectif) : les questions contemporaines (clonage, cryptomonnaies, IA...) requièrent à la fois expertise islamique ET expertise technique (médecine, finance, informatique). Un savant seul ne peut plus tout maîtriser. Les Majālis al-Fiqhiyya (مَجَالِس فِقهِيَّة — conseils de jurisprudence) réunissent ces compétences."
        },
        {
          id: "q-usul-14",
          text: "<strong>PIÈGE :</strong> Le ʿUrf (العُرف — coutume locale) peut-il abroger un texte coranique explicite ?",
          choices: [
          { id:"a", text:"Oui si la coutume est ancienne et répandue" },
          { id:"b", text:"Non — le ʿUrf ne peut jamais contredire un texte explicite ; il comble uniquement les silences des textes" },
          { id:"c", text:"Oui avec accord du Muftī local" },
          { id:"d", text:"Oui en Occident uniquement" }
          ],
          correctId: "b",
          explanation: "Le ʿUrf (العُرف — coutume) n'est source juridique valide QUE là où les textes sont muets. Il ne peut jamais contredire un Naṣṣ (نَصّ — texte explicite). Ex : la coutume locale peut définir ce qui constitue un « logement décent » pour la Nafaqa (نَفَقَة — entretien) — mais ne peut pas rendre halal l'alcool même si la société le consomme."
        },
        {
          id: "q-usul-15",
          text: "<strong>SYNTHÈSE :</strong> Quelle source rend l'école malikite particulièrement adaptée aux mutations sociales et aux nouveaux contextes ?",
          choices: [
          { id:"a", text:"Le Qurʾān uniquement" },
          { id:"b", text:"Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) + Sadd al-Dharāʾiʿ (سَدّ الذَّرَائِع) + ʿUrf (العُرف) — permettent une adaptation raisonnée aux réalités nouvelles sans trahir les principes" },
          { id:"c", text:"Le rejet de toutes les innovations" },
          { id:"d", text:"L'Ijmāʿ (الإِجمَاع) uniquement" }
          ],
          correctId: "b",
          explanation: "La combinaison malikite est puissante pour les contextes nouveaux : Maṣlaḥa (intérêts généraux nouveaux), Sadd al-Dharāʾiʿ (prévention des dérives), ʿUrf (coutumes locales), Istiṣḥāb (présomptions raisonnées). Ces sources non textuées permettent d'aborder des questions inédites (bioéthique, numérique, finance) avec rigueur. C'est l'Ijtihād Jamāʿī contemporain."
        },
        {
          id: "q-usul-16",
          text: "ʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة) de l'Imām Mālik est parfois comparé à quel concept moderne ?",
          choices: [
          { id:"a", text:"La common law britannique" },
          { id:"b", text:"Le droit constitutionnel" },
          { id:"c", text:"Une tradition orale vivante et ininterrompue — analogue à la jurisprudence coutumière ou aux pratiques institutionnelles continues" },
          { id:"d", text:"Les lois internationales" }
          ],
          correctId: "c",
          explanation: "Le ʿAmal al-Madanī est une forme de common law islamique : une pratique vivante, ininterrompue et unanime d'une communauté directement formée par le Prophète ﷺ. Comme la common law, elle préserve une sagesse accumulée et pratique que les textes seuls ne peuvent toujours pas transmettre."
        },
        {
          id: "q-usul-17",
          text: "<strong>AVANCÉ :</strong> La Ibāḥa Aṣliyya (إِبَاحَة أَصلِيَّة) est un concept de l'Istiṣḥāb (الاستِصحَاب). Que signifie-t-il ?",
          choices: [
          { id:"a", text:"Tout est interdit par défaut sauf ce qui est explicitement permis" },
          { id:"b", text:"Tout acte est licite par défaut jusqu'à ce qu'un texte l'interdise — la permission est l'état originel des choses" },
          { id:"c", text:"Seuls les actes mentionnés dans le Coran sont licites" },
          { id:"d", text:"La liberté est absolue en Islam" }
          ],
          correctId: "b",
          explanation: "Ibāḥa Aṣliyya (إِبَاحَة أَصلِيَّة) = licéité par défaut. Par l'Istiṣḥāb, tout acte qui n'est pas explicitement interdit reste licite — les preuves d'interdiction incombent à ceux qui interdisent, pas l'inverse. C'est pourquoi le Fiqh malikite est réputé libéral sur les questions nouvelles : l'Ibāḥa s'applique jusqu'à texte contraire."
        },
        {
          id: "q-usul-18",
          text: "L'Ijmāʿ (الإِجمَاع) le plus authentique selon l'Imām Mālik est :",
          choices: [
          { id:"a", text:"L'accord des 4 grandes écoles juridiques" },
          { id:"b", text:"L'Ijmāʿ des Ṣaḥāba (الصَّحَابَة — Compagnons) suivi de l'ʿAmal al-Madanī — car les Compagnons étaient les plus proches du Prophète ﷺ" },
          { id:"c", text:"L'accord de tous les Muslims du monde" },
          { id:"d", text:"La décision du Calife" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik hiérarchise l'Ijmāʿ : le plus authentique est celui des Ṣaḥāba (Compagnons) → puis l'ʿAmal al-Madanī (pratique médinoise transmise) → puis l'Ijmāʿ des Tābiʿīn (تَابِعِين — génération suivante). Il était très prudent sur les Ijmāʿ prétendus de savants tardifs sur des questions que les anciens avaient laissées ouvertes."
        },
        {
          id: "q-usul-19",
          text: "L'Al-Muwāfaqāt (المُوَافَقَات) d'al-Shāṭibī (الشَّاطِبِيّ) est important pour quel concept central ?",
          choices: [
          { id:"a", text:"L'histoire de l'Andalousie islamique" },
          { id:"b", text:"La théorisation des Maqāṣid al-Sharīʿa (مَقَاصِد Sharīʿa (الشَّرِيعَة) — finalités de la Loi islamique) comme fondement de la Maṣlaḥa malikite" },
          { id:"c", text:"La biographie de l'Imām Mālik" },
          { id:"d", text:"Les règles de la récitation coranique" }
          ],
          correctId: "b",
          explanation: "Al-Shāṭibī (mort 790 H, savant malikite andalou) dans Al-Muwāfaqāt a systématisé les Maqāṣid al-Sharīʿa — les 5 finalités de la loi islamique. Son œuvre montre que toute la Sharīʿa (شَرِيعَة) vise à protéger ces 5 valeurs. Cette théorie fonde et justifie la Maṣlaḥa al-Mursala malikite sur des bases solides."
        },
        {
          id: "q-usul-20",
          text: "<strong>QUESTION FINALE :</strong> Qu'est-ce qui distingue fondamentalement la méthode juridique malikite des autres écoles ?",
          choices: [
          { id:"a", text:"Elle n'utilise que le Coran" },
          { id:"b", text:"L'utilisation du ʿAmal al-Madanī et de la Maṣlaḥa al-Mursala comme sources majeures — un corpus étendu permettant une adaptation rigoureuse aux contextes nouveaux sans quitter les principes islamiques" },
          { id:"c", text:"Qiyās (القِيَاس) complètement" },
          { id:"d", text:"Elle suit toujours la majorité des savants" }
          ],
          correctId: "b",
          explanation: "La marque distinctive malikite : (1) ʿAmal al-Madanī — source vivante et ininterrompue de Sunna ; (2) Maṣlaḥa al-Mursala — adaptation raisonnée aux besoins généraux nouveaux ; (3) Sadd al-Dharāʾiʿ — prévention des dérives. Ces 3 sources, absentes ou peu utilisées ailleurs, donnent à l'école malikite une remarquable capacité d'adaptation sans compromis sur les principes."
        }]
      }
    },

    /* ═══ الإِمَام مَالِك وMuwattaʾ (المُوَطَّأ) ═══ */
    {
      id: "malikiath",
      title: "L'Imam Mālik et la Muwattaʾ",
      arabicTitle: "الإِمَام مَالِك والمُوَطَّأ",
      icon: "moon",
      description: "Biographie de l'Imām Mālik, Muwattaʾ (المُوَطَّأ), Mudawwana (المُدَوَّنَة), les grandes figures et la diffusion mondiale du Madhhab mālikī.",
      source: "Muwattaʾ de l'Imām Mālik · Mudawwana de Saḥnūn · Biographies classiques",
      badge: {
        id: 'badge-expert-malikiath',
        title: "Héritier de Mālik",
        arabicTitle: "وَارِثُ الإِمَام مَالِك",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "الإِمَام مَالِك وMuwattaʾ (المُوَطَّأ)"
      },
      lessons: [      {
        id: "mal-01",
        title: "Sīrat al-Imām Mālik — Vie et Formation du Fondateur",
        status: 'available',
        content: [
        {"t": "lead", "v": "Mālik ibn Anas (مَالِك بن أَنَس — l'Imām Mālik) est né et mort à Médine (93 H/712 CE – 179 H/795 CE). Sa vie tout entière est indissociable de la ville du Prophète ﷺ — il n'en est sorti que pour le Ḥajj (حَجّ) et refusa toujours de la quitter malgré les invitations des califes."},
        {"t": "h", "v": "Formation intellectuelle"},
        { t:'ul', v:[
          "Il a étudié sous plus de 900 maîtres (Shuyūkh / شُيُوخ) selon les biographes.",
          "Maîtres principaux : Nāfiʿ (نَافِع — affranchi d'Ibn ʿUmar), Ibn Shihāb al-Zuhrī (اِبن شِهَاب الزُّهرِيّ — plus grand Muḥaddith de son époque), Yaḥyā ibn Saʿīd al-Anṣārī (يَحيَى بن سَعِيد الأَنصَارِيّ).",
          "Sa chaîne d'or (al-Silsila al-Dhahabiyya / السِّلسِلَة الذَّهَبِيَّة) : Mālik ← Nāfiʿ ← Ibn ʿUmar ← Prophète ﷺ — unanimement considérée comme la plus fiable de toutes les chaînes de transmission.",
          "Il a mémorisé le Coran dans l'enfance et maîtrisait la langue arabe et la poésie préislamique à la perfection."
        ] },
        {"t": "h", "v": "Personnalité et méthode"},
        { t:'ul', v:[
          "Célèbre pour sa prudence — il disait souvent « لَا أَدرِي » (« je ne sais pas ») quand il n'était pas sûr.",
          "Sa déférence pour Médine était absolue : il refusait de monter à cheval à Médine par respect pour le sol foulé par le Prophète ﷺ.",
          "Il résistait aux califes abbassides : il a subi des coups et l'écartèlement de son bras (par ordre du gouverneur d'al-Manṣūr) pour avoir émis une fatwa sur la légitimité de la contrainte dans le serment.",
          "Il a mis 40 ans à rédiger la Muwattaʾ — révisant et corrigeant constamment."
        ] },
        {"t": "h", "v": "Ses élèves et la diffusion de l'école"},
        { t:'ul', v:[
          "Al-Shāfiʿī (الشَّافِعِيّ — fondateur du 3ème Madhhab) a étudié sous Mālik et a dit : « Mālik est mon maître le plus précieux. »",
          "Ibn al-Qāsim (اِبن القَاسِم — mort 191 H) : principal transmetteur des opinions de Mālik, Mudawwana (المُدَوَّنَة).",
          "ʿAbd al-Raḥmān ibn al-Qāsim transmit l'école en Égypte → Saḥnūn (سَحنُون) en ramena les enseignements en Ifriqiyya (Tunisie actuelle).",
          "Ashhab, Asbagh, Ibn Wahb : autres grands élèves directs dont les transmissions forment le Fiqh malikite historique."
        ] },
        { t:'ar', v:"كَادَ أَن يَكُونَ النَّاسُ يُضرَبُونَ إِلَيهِ أَكبَادَ الإِبِلِ فَلَا يَجِدُونَ أَعلَمَ مِن عَالِمِ المَدِينَة", n:"Al-Shāfiʿī sur Mālik : « Les gens traversaient les déserts à dos de chameau sans trouver personne de plus savant que le savant de Médine »" },
        {"t": "note", "v": "L'importance de la chaîne Mālik ← Nāfiʿ ← Ibn ʿUmar est capitale : Ibn ʿUmar (اِبن عُمَر) était connu pour sa précision scrupuleuse dans la transmission — il reproduisait même les gestes du Prophète ﷺ. Nāfiʿ était son affranchi qui l'a accompagné toute sa vie. La transmission Mālik–Nāfiʿ–Ibn ʿUmar est donc doublement sécurisée."}
        ]
      },
      {
        id: "mal-02",
        title: "Al-Muwaṭṭaʾ — Structure, Méthode et Place dans l'Islam",
        status: 'available',
        content: [
        {"t": "lead", "v": "Al-Muwaṭṭaʾ (المُوَطَّأ — « la route aplanie ») est le premier grand recueil de Ḥadīth et de Fiqh de l'Islam. L'Imām Mālik l'a rédigé sur 40 ans à la demande du Calife al-Manṣūr et l'a présenté à 70 juristes de Médine qui l'ont approuvé."},
        {"t": "h", "v": "Structure de la Muwattaʾ"},
        { t:'ul', v:[
          "Environ 1800 Ḥadīth transmis + environ 822 avis de Compagnons (Ṣaḥāba / الصَّحَابَة) et Successeurs (Tābiʿīn / تَابِعِين).",
          "Organisé par thèmes juridiques (abwāb / أَبوَاب — chapitres) : Ṭahāra (طَهَارَة), Ṣalāt (صَلَاة), Zakāt (زَكَاة), Ṣiyām (صِيَام), Ḥajj (حَجّ), Buyūʿ (بُيُوع), etc.",
          "Chaque section mêle Ḥadīth du Prophète ﷺ + avis des Compagnons + ʿAmal al-Madanī (عَمَل المَدِينَة) + avis de Mālik lui-même.",
          "Pas uniquement un recueil de Ḥadīth — c'est un manuel de Fiqh intégrant les sources dans leur contexte pratique."
        ] },
        {"t": "h", "v": "Critère de sélection des Ḥadīth"},
        { t:'ul', v:[
          "Mālik ne retenait que les Ḥadīth qu'il pouvait confirmer par la pratique médinoise ou l'accord des Fuqahāʾ (فُقَهَاء — juristes).",
          "Il a écarté de nombreux Ḥadīth authentiques par d'autres critèʿAmal ahl al-Madīna (عَمَل أَهل المَدِينَة).",
          "Al-Bukhārī (البُخَارِيّ) et Muslim (مُسلِم) ont utilisé la Muwattaʾ comme source et point de référence pour leurs propres recueils.",
          "Le hadīth de la Muwattaʾ ont 3 statuts : Musnad (مُسنَد — chaîne complète jusqu'au Prophète ﷺ), Mursal (مُرسَل — chaîne incomplète), Mawqūf (مَوقُوف — arrêté au Compagnon)."
        ] },
        {"t": "h", "v": "Place de la Muwattaʾ dans la hiérarchie des recueils"},
        { t:'ul', v:[
          "Al-Shāfiʿī : « Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik. »",
          "Cette opinion était vraie AVANT la rédaction des Ṣaḥīḥayn (صَحِيحَيْن — les deux Ṣaḥīḥ : Bukhārī et Muslim).",
          "Après les Ṣaḥīḥayn, la Muwattaʾ est la 3ème source la plus fiable dans la hiérarchie des Ḥadīth.",
          "Elle reste unique car elle intègre le Ḥadīth dans son contexte juridique direct — elle enseigne le Fiqh par le Ḥadīth."
        ] },
        {"t": "note", "v": "Il existe environ 17 recensions (transmissions) de la Muwattaʾ selon les différents élèves de Mālik. La plus répandue est la recension de Yaḥyā ibn Yaḥyā al-Laythī al-Andalusī (يَحيَى بن يَحيَى اللَّيثِيّ الأَندَلُسِيّ) — c'est celle qu'on lit aujourd'hui dans la plupart des éditions. Les différentes recensions reflètent des variations mineures dans les avis de Mālik au fil du temps."}
        ]
      },
      {
        id: "mal-03",
        title: "Al-Mudawwana — La Grande Encyclopédie du Fiqh Malikite",
        status: 'available',
        content: [
        {"t": "lead", "v": "Al-Mudawwana al-Kubrā (المُدَوَّنَة الكُبرَى) est la seconde source fondatrice de l'école malikite aprèMuwattaʾ (المُوَطَّأ). Compilée par Saḥnūn ibn Saʿīd (سَحنُون بن سَعِيد — savant tunisien, mort 240 H/854 CE) à partir des réponses d'Ibn al-Qāsim (اِبن القَاسِم) — élève direct de Mālik — elle est la « Bible » pratique de l'école malikite."},
        {"t": "h", "v": "Histoire de la Mudawwana"},
        { t:'ul', v:[
          "Asad ibn al-Furāt (أَسَد بن الفُرَات) a d'abord recueilli les réponses d'Ibn al-Qāsim en Égypte (→ Al-Asadiyya / الأَسَدِيَّة).",
          "Saḥnūn est allé en Égypte, a revu et corrigé ces réponses avec Ibn al-Qāsim lui-même.",
          "Saḥnūn a ensuite réorganisé, complété et transmis la version définitive → La Mudawwana.",
          "Elle représente l'opinion d'Ibn al-Qāsim sur ce qu'il a entendu de Mālik — avec parfois des avis personnels distingués."
        ] },
        {"t": "h", "v": "Structure et contenu"},
        { t:'ul', v:[
          "Format questions-réponses (Suʾāl / سُؤَال — réponse de Saḥnūn → Jawāb / جَوَاب d'Ibn al-Qāsim).",
          "Couvre l'ensemble du Fiqh malikite : Ṭahāra (طَهَارَة) → Ḥudūd (حُدُود) → Farāʾiḍ (فَرَائِض).",
          "Quelques milliers de questions — véritable encyclopédie pratique du Madhhab.",
          "Mukhtasar Khalīl (مُختَصَر خَلِيل — qu'on a étudié dans ce site) est un résumé ultérieur de la Mudawwana et de ses commentaires."
        ] },
        {"t": "h", "v": "Les Grands Commentaires de la Mudawwana"},
        { t:'ul', v:[
          "Ibn Rushd al-Jadd (اِبن رُشد الجَدّ — grand-père d'Averroès, mort 520 H) : Al-Muqaddimāt (المُقَدِّمَات) — introduction à la Mudawwana.",
          "Al-Māzarī (المَازَرِيّ — savant malikite tunisien, mort 536 H) : Sharḥ al-Talqīn (شَرح التَّلقِين).",
          "Ibn ʿAbd al-Barr (اِبن عَبد البَرّ — Andalou, mort 463 H) : Al-Kāfī (الكَافِي) — résumé et commentaire.",
          "Ces commentaires ont étendu le Fiqh malikite de Médine et de l'Égypte à tout le Maghreb et l'Andalousie."
        ] },
        {"t": "note", "v": "La chaîne Mālik → Ibn al-Qāsim → Saḥnūn est la colonne vertébrale du Fiqh malikite tel qu'il est pratiqué au Maghreb et en Afrique. C'est pourquoi le Fiqh malikite nord-africain reflète souvent les avis d'Ibn al-Qāsim plus que les avis directs de Mālik — là où Ibn al-Qāsim divergeait, c'est souvent sa position qui prévaut dans la tradition maghrébine."}
        ]
      },
      {
        id: "mal-04",
        title: "Kibār al-Mālikiyya — Les Grandes Figures de l'École",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'école malikite compte parmi ses rangs certains des plus grands noms de la civilisation islamique. Connaître ces figures — leur époque, leur contexte et leur contribution — est essentiel pour comprendre comment le Fiqh malikite a évolué de Médine au Maghreb contemporain."},
        {"t": "h", "v": "Génération de Médine et d'Égypte (2ème-3ème siècles H)"},
        { t:'ul', v:[
          "<strong>Ibn al-Qāsim (اِبن القَاسِم, mort 191 H) :</strong> plus fidèle transmetteur des avis de Mālik — sa mémoire des fatwas de Mālik était phénoménale. Source principale de la Mudawwana.",
          "<strong>Ashhab (أَشهَب, mort 204 H) :</strong> considéré comme le plus grand juriste malikite d'Égypte — parfois en désaccord avec Ibn al-Qāsim.",
          "<strong>Ibn Wahb (اِبن وَهب, mort 197 H) :</strong> excellent muḥaddith malikite — a transmis de nombreux hadiths que Mālik n'avait pas inclus dans la Muwattaʾ.",
          "<strong>Saḥnūn (سَحنُون, mort 240 H) :</strong> compilateur de la Mudawwana, Qāḍī al-Qudāt (قَاضِي القُضَاة — Juge suprême) d'Ifriqiyya — a répandu l'école malikite en Afrique du Nord."
        ] },
        {"t": "h", "v": "Les Grands Andalous et Maghrébins (4ème-9ème siècles H)"},
        { t:'ul', v:[
          "<strong>Ibn ʿAbd al-Barr (اِبن عَبد البَرّ, Andalou, mort 463 H) :</strong> encyclopédiste islamique — son Al-Istidhkār (الاستِذكَار) est l'un des plus grands commentaires de la Muwattaʾ.",
          "<strong>Ibn Rushd al-Jadd (اِبن رُشد الجَدّ, Andalou, mort 520 H) :</strong> grand-père d'Averroès — Al-Bayān wa-l-Taḥṣīl (البَيَان والتَّحصِيل), commentaire exhaustif de la Mudawwana.",
          "<strong>Ibn Rushd al-Ḥafīd (اِبن رُشد الحَفِيد, Averroès, mort 595 H) :</strong> auteur du Bidāyat al-Mujtahid — philosophe et juriste de génie.",
          "<strong>Al-Qarāfī (القَرَافِيّ, Égyptien, mort 684 H) :</strong> Al-Dhakhīra (الذَّخِيرَة) — encyclopédie du Fiqh malikite en 13 volumes. A systématisé la distinction Qāʿida / قَاعِدَة (règle générale) et Ḍābiṭ / ضَابِط (règle spécifique).",
          "<strong>Khalīl ibn Isḥāq (خَلِيل بن إِسحَاق, mort 776 H) :</strong> auteur du Mukhtasar (المُختَصَر) étudié dans ce site — résumé dense du Fiqh malikite, commenté des centaines de fois.",
          "<strong>Al-Shāṭibī (الشَّاطِبِيّ, Andalou, mort 790 H) :</strong> Al-Muwāfaqāt (المُوَافَقَات) — théMaqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة)."
        ] },
        {"t": "h", "v": "Figures contemporaines"},
        { t:'ul', v:[
          "Al-Ṣiddīq Muḥammad al-Amīn al-Ḍarīr (السُّودَان) : bioéthique islamique malikite.",
          "ʿAbd Allāh ibn Bayyah (عَبد اللَّه بن بَيَّه — Mauritanie/USA) : Fiqh des minorités et Maqāṣid contemporains.",
          "ʿAlī Jumʿa (عَلِيّ جُمعَة — Égypte) : Muftī d'Égypte, partisan de la méthode malikite-ashʿarite."
        ] },
        {"t": "note", "v": "Le Fiqh malikite est un Fiqh vivant — il a continué d'évoluer pendant 14 siècles. De Médine à Bagdad, puis à Cordoue et Fès, puis à Tombouctou et Dakar, l'école a su s'adapter aux contextes locaux tout en maintenant ses principes fondamentaux. C'est cette capacité d'adaptation — fondée sur la Maṣlaḥa et le ʿUrf — qui en fait la plus répandue géographiquement des 4 écoles."}
        ]
      },
      {
        id: "mal-05",
        title: "Al-Imtidād al-Jughrāfī — La Diffusion Mondiale du Madhhab Mālikī",
        status: 'available',
        content: [
        {"t": "lead", "v": "Madhhab Mālikī (المَذهَب المَالِكِيّ) est la plus répandue géographiquement des 4 grandes écoles juridiques islamiques. De l'Andalousie médiévale à l'Afrique sub-saharienne contemporaine, il domine dans un arc géographique immense."},
        {"t": "h", "v": "Voies de diffusion historique"},
        { t:'ul', v:[
          "<strong>Médine → Égypte :</strong> Ibn al-Qāsim et Ashhab ont établi le Fiqh malikite en Égypte au 2ème siècle H — mais il sera supplanté par le Madhhab shāfiʿī plus tard.",
          "<strong>Égypte → Ifriqiyya (Tunisie/Algérie) :</strong> Saḥnūn, disciple d'Ibn al-Qāsim, a rapporté la Mudawwana à Kairouan (القَيرَوَان) — capitale intellectuelle du Maghreb. L'Ifriqiyya devient malikite au 3ème siècle H.",
          "<strong>Ifriqiyya → Maghreb occidental (Maroc) :</strong> l'école s'étend progressivement — Fès (فَاس) devient un grand centre malikite.",
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
          "Les grandes écoles islamiques de Tombouctou (Djenné / جِنِّي, Sankore / سَانكُور) enseignaient le Fiqh malikite.",
          "La flexibilité sur les pratiques culturelles locales (ʿUrf) a facilité l'adoption de l'Islam par les peuples africains."
        ] },
        {"t": "note", "v": "Pour un Muslim français : la grande majorité des Muslims de France (d'origine algérienne, marocaine, tunisienne, sénégalaise, malienne...) sont historiquement malikites. Cette tradition est leur héritage spirituel direct. Le Fiqh malikite est donc le cadre naturel pour la pratique islamique en France — même si beaucoup ignorent le nom de leur école."}
        ]
      }],
      quiz: {
        id: 'quiz-expert-malikiath',
        title: 'Questionnaire — ' + "الإِمَام مَالِك وMuwattaʾ (المُوَطَّأ)",
        status: "available",
        score: null,
        questions: [        {
          id: "q-mal-01",
          text: "La « chaîne d'or » (Al-Silsila al-Dhahabiyya / السِّلسِلَة الذَّهَبِيَّة) de l'Imām Mālik est :",
          choices: [
          { id:"a", text:"Mālik ← al-Shāfiʿī ← Ahmad" },
          { id:"b", text:"Mālik ← Nāfiʿ (نَافِع) ← Ibn ʿUmar ← Prophète ﷺ" },
          { id:"c", text:"Mālik ← Saḥnūn ← Ibn al-Qāsim" },
          { id:"d", text:"Mālik ← al-Zuhrī ← al-Baṣrī" }
          ],
          correctId: "b",
          explanation: "La Silsila Dhahabiyya (السِّلسِلَة الذَّهَبِيَّة — chaîne d'or) de Mālik : Prophète ﷺ → Ibn ʿUmar (اِبن عُمَر — précision scrupuleuse) → Nāfiʿ (نَافِع — affranchi et compagnon quotidien d'Ibn ʿUmar) → Mālik. Unanimement considérée comme la plus fiable de toutes les chaînes islamiques pour la transmission du Ḥadīth."
        },
        {
          id: "q-mal-02",
          text: "Muwattaʾ (المُوَطَّأ) est unique parmi les recueils de Ḥadīth car :",
          choices: [
          { id:"a", text:"Il ne contient que les hadiths mutawātir" },
          { id:"b", text:"Il intègre Ḥadīth + avis des Compagnons + ʿAmal al-Madanī (عَمَل المَدِينَة) + avis de Mālik — c'est un manuel de Fiqh par le Ḥadīth" },
          { id:"c", text:"Il a été écrit en une seule année" },
          { id:"d", text:"Il est le seul accepté par toutes les écoles" }
          ],
          correctId: "b",
          explanation: "La Muwattaʾ n'est pas qu'un recueil de Ḥadīth — c'est un manuel de Fiqh qui intègre : Ḥadīth du Prophète ﷺ (Musnad / مُسنَد, Mursal / مُرسَل, Mawqūf / مَوقُوف) + avis des Ṣaḥāba (الصَّحَابَة) et Tābiʿīn (التَّابِعِين) + ʿAmal al-Madanī + avis de Mālik. Cette combinaison est unique."
        },
        {
          id: "q-mal-03",
          text: "Saḥnūn (سَحنُون) a joué quel rôle dans l'école malikite ?",
          choices: [
          { id:"a", text:"Il a fondé l'école malikite indépendamment de Mālik" },
          { id:"b", text:"Il a compilé la Mudawwana al-Kubrā (المُدَوَّنَة الكُبرَى) à partir des réponses d'Ibn al-Qāsim — encyclopédie pratique du Fiqh malikite" },
          { id:"c", text:"Il a écrit le Mukhtasar de Khalīl" },
          { id:"d", text:"Il était le Qāḍī (قَاضِي) de Médine" }
          ],
          correctId: "b",
          explanation: "Saḥnūn (mort 240 H, Ifriqiyya/Tunisie) : il est allé en Égypte pour étudier sous Ibn al-Qāsim (اِبن القَاسِم), a recueilli et corrigé ses réponses sur le Fiqh de Mālik, puis les a réorganisées en Al-Mudawwana al-Kubrā (المُدَوَّنَة الكُبرَى) — la grande encyclopédie pratique du Madhhab mālikī."
        },
        {
          id: "q-mal-04",
          text: "Pourquoi l'Imām Mālik refusait-il de monter à cheval à Médine ?",
          choices: [
          { id:"a", text:"Par interdiction religieuse d'utiliser les chevaux en ville" },
          { id:"b", text:"Par respect profond pour le sol de Médine foulé par le Prophète ﷺ — manifestation de son amour" },
          { id:"c", text:"Il avait peur des chevaux" },
          { id:"d", text:"C'était une coutume médinoise générale" }
          ],
          correctId: "b",
          explanation: "Anecdote biographique célèbre de l'Imām Mālik : il refusait de monter à cheval dans les rues de Médine par respect pour la terre sainte foulée par le Prophète ﷺ. Il disait : « Je n'ose pas fouler aux sabots d'un cheval la terre où git le Messager d'Allah ﷺ. »"
        },
        {
          id: "q-mal-05",
          text: "Le Madhhab mālikī est dominant dans quelle zone géographique contemporaine ?",
          choices: [
          { id:"a", text:"Turquie, Inde et Pakistan" },
          { id:"b", text:"Maghreb (Maroc, Algérie, Tunisie), Afrique de l'Ouest et Golfe (Koweït)" },
          { id:"c", text:"Arabie Saoudite, Égypte et Syrie" },
          { id:"d", text:"Iran, Irak et Azerbaïdjan" }
          ],
          correctId: "b",
          explanation: "Le Madhhab mālikī domine : Maghreb intégral (Maroc, Algérie, Tunisie, Libye), Afrique de l'Ouest (Sénégal, Mali, Mauritanie, Burkina Faso, Niger, Guinée, Gambie), partiellement Afrique centrale et orientale, et Koweït. C'est le Madhhab de la majorité des Muslims de France (d'origine maghrébine et africaine)."
        },
        {
          id: "q-mal-06",
          text: "Quel savant est l'auteur du Bidāyat al-Mujtahid (بِدَايَة المُجتَهِد) ?",
          choices: [
          { id:"a", text:"L'Imām Mālik lui-même" },
          { id:"b", text:"Saḥnūn" },
          { id:"c", text:"Ibn Rushd al-Ḥafīd (اِبن رُشد الحَفِيد — Averroès, Andalou, mort 595 H)" },
          { id:"d", text:"Al-Shāṭibī" }
          ],
          correctId: "c",
          explanation: "Ibn Rushd al-Ḥafīd (Averroès, 1126-1198 CE) — petit-fils d'Ibn Rushd al-Jadd — est l'auteur du Bidāyat al-Mujtahid wa-Nihāyat al-Muqtaṣid (بِدَايَة المُجتَهِد). C'est le savant malikite le plus connu en Occident grâce à ses traductions d'Aristote, mais son œuvre juridique malikite est tout aussi monumentale."
        },
        {
          id: "q-mal-07",
          text: "<strong>AVANCÉ :</strong> Pourquoi le Fiqh mālikī pratiqué au Maghreb reflète-t-il souvent les avis d'Ibn al-Qāsim plutôt que ceux directs de Mālik ?",
          choices: [
          { id:"a", text:"Parce qu'Ibn al-Qāsim était plus savant que Mālik" },
          { id:"b", text:"Mudawwana (المُدَوَّنَة) — transmise via Ibn al-Qāsim et Saḥnūn — est devenue la référence principale du Madhhab mālikī au Maghreb" },
          { id:"c", text:"Parce que les avis de Mālik ont été perdus" },
          { id:"d", text:"Parce que Saḥnūn a corrigé les erreurs de Mālik" }
          ],
          correctId: "b",
          explanation: "La chaîne de transmission au Maghreb : Mālik → Ibn al-Qāsim (avis transmis en Égypte) → Saḥnūn (compilé en Mudawwana en Ifriqiyya) → Maghreb. Là où Ibn al-Qāsim (اِبن القَاسِم) divergeait de Mālik, c'est souvent son avis qui a prévalu dans la tradition maghrébine. C'est pourquoi la tradition malikite maghrébine est techniquement « ibnqāsimite » sur certains points."
        },
        {
          id: "q-mal-08",
          text: "Al-Shāṭibī (الشَّاطِبِيّ) est l'auteur d'Al-Muwāfaqāt (المُوَافَقَات). Quel est l'apport principal de cet ouvrage ?",
          choices: [
          { id:"a", text:"Une grammaire de la langue arabe" },
          { id:"b", text:"La théorisation systéMaqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) comme fondement théorique de toute la Sharīʿa islamique" },
          { id:"c", text:"Un commentaire de la Muwattaʾ" },
          { id:"d", text:"Une biographie de l'Imām Mālik" }
          ],
          correctId: "b",
          explanation: "Al-Shāṭibī (mort 790 H, Grenade) : Al-Muwāfaqāt (المُوَافَقَات) = le premier traité systématique sur les Maqāṣid al-Sharīʿa (مَقَاصِد Sharīʿa (الشَّرِيعَة) — finalités de la Loi islamique). Il démontre que toute la Sharīʿa vise à protéger les 5 valeurs fondamentales. Son œuvre est le fondement théorique de la Maṣlaḥa malikite contemporaine."
        },
        {
          id: "q-mal-09",
          text: "Le célèbre aphorisme d'al-Shāfiʿī sur la Muwattaʾ est :",
          choices: [
          { id:"a", text:"« La Muwattaʾ est le livre le moins fiable après le Coran »" },
          { id:"b", text:"« Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik » — avant la rédaction des Ṣaḥīḥayn (صَحِيحَيْن)" },
          { id:"c", text:"« La Muwattaʾ est la meilleure grammaire de l'arabe »" },
          { id:"d", text:"« Je préfère mon propre Fiqh à celui de Mālik »" }
          ],
          correctId: "b",
          explanation: "Al-Shāfiʿī (الشَّافِعِيّ — qui a étudié sous Mālik pendant des années) : « لَيسَ بَعدَ كِتَابِ اللَّهِ كِتَابٌ أَصَحُّ مِن مُوَطَّأِ مَالِكٍ » — « Il n'y a pas de livre plus authentique après le Livre d'Allah que la Muwattaʾ de Mālik. » Cette affirmation est antérieure à al-Bukhārī et Muslim."
        },
        {
          id: "q-mal-10",
          text: "<strong>PIÈGE :</strong> L'Imām Mālik est-il le fondateur du premier Madhhab islamique ?",
          choices: [
          { id:"a", text:"Oui — il est le premier à avoir fondé une école juridique" },
          { id:"b", text:"Non — Abū Ḥanīfa (أَبُو حَنِيفَة, mort 150 H) était plus ancien ; mais Mālik (mort 179 H) est le fondateur du Madhhab le mieux documenté et préservé" },
          { id:"c", text:"Non — al-Shāfiʿī était avant Mālik" },
          { id:"d", text:"Non — le premier Madhhab est le Madhhab d'Ibn Masʿūd" }
          ],
          correctId: "b",
          explanation: "Abū Ḥanīfa (mort 150 H) est chronologiquement le premier des 4 imams. Mālik (mort 179 H) est le second. Mais la Muwattaʾ de Mālik est le premier RECUEIL ÉCRIT d'un Madhhab — c'est pourquoi son école est la mieux documentée parmi les premières. Le Madhhab mālikī est aussi le seul encore pratiqué dans sa région d'origine (Médine → Maghreb)."
        },
        {
          id: "q-mal-11",
          text: "Khalīl ibn Isḥāq (خَلِيل بن إِسحَاق) est l'auteur de :",
          choices: [
          { id:"a", text:"La Mudawwana" },
          { id:"b", text:"Le Mukhtasar (المُختَصَر) — résumé dense de tout le Fiqh mālikī étudié tout au long de ce site" },
          { id:"c", text:"Le Bidāyat al-Mujtahid" },
          { id:"d", text:"Al-Muwāfaqāt" }
          ],
          correctId: "b",
          explanation: "Khalīl ibn Isḥāq al-Jundī (mort 776 H, Égypte) : auteur du Mukhtasar Khalīl (مُختَصَر خَلِيل) — le texte le plus commenté de l'école malikite, résumant la Mudawwana et ses commentaires en formules condensées. C'est la référence principale du Fiqh mālikī pratiqué au Maghreb et en Afrique de l'Ouest."
        },
        {
          id: "q-mal-12",
          text: "<strong>AVANCÉ :</strong> Pourquoi le Madhhab mālikī a-t-il mieux « pris » en Afrique de l'Ouest qu'ailleurs ?",
          choices: [
          { id:"a", text:"Par décision politique des califes" },
          { id:"b", text:"Sa flexibilité (Maṣlaḥa + ʿUrf) permettait d'intégrer les coutumes locales africaines sans les rejeter systématiquement" },
          { id:"c", text:"Parce que les Africains préféraient les règles malikites plus strictes" },
          { id:"d", text:"Par hasard historique seulement" }
          ],
          correctId: "b",
          explanation: "La réussite du Madhhab mālikī en Afrique sub-saharienne s'explique par : (1) les marchands Soudanais et Berbères (malikites) qui islamisaient par le commerce ; (2) la Maṣlaḥa et le ʿUrf malikites permettaient de respecter les coutumes locales qui ne contredisaient pas les principes islamiques ; (3) les grandes madrasas de Tombouctou enseignaient le Fiqh malikite."
        },
        {
          id: "q-mal-13",
          text: "Comment s'appelle la principale recension de la Muwattaʾ utilisée aujourd'hui ?",
          choices: [
          { id:"a", text:"La recension d'Ibn al-Qāsim" },
          { id:"b", text:"La recension de Yaḥyā ibn Yaḥyā al-Laythī al-Andalusī (يَحيَى بن يَحيَى اللَّيثِيّ الأَندَلُسِيّ)" },
          { id:"c", text:"La recension de Saḥnūn" },
          { id:"d", text:"La recension de l'Imām al-Bukhārī" }
          ],
          correctId: "b",
          explanation: "Il existe ~17 recensions (transmissions) de la Muwattaʾ selon les élèves de Mālik. La plus répandue — celle publiée dans la plupart des éditions actuelles — est la recension de Yaḥyā ibn Yaḥyā al-Laythī (mort 234 H), savant andalou qui a étudié sous Mālik à Médine. Les Andalous ont massivement adopté cette recension, d'où sa diffusion au Maghreb."
        },
        {
          id: "q-mal-14",
          text: "Al-Qarāfī (القَرَافِيّ) est connu pour avoir systématisé quelle distinction capitale en Fiqh ?",
          choices: [
          { id:"a", text:"La distinction entre Ḥalāl et Ḥarām" },
          { id:"b", text:"La distinction entre Qāʿida Fiqhiyya (قَاعِدَة فِقهِيَّة — règle générale) et Ḍābiṭ (ضَابِط — règle spécifique à un domaine)" },
          { id:"c", text:"La distinction entre Mālikī et Shāfiʿī" },
          { id:"d", text:"La distinction entre Fiqh et ʿAqīda" }
          ],
          correctId: "b",
          explanation: "Al-Qarāfī (الفَقِيه المَالِكِيّ المِصرِيّ, mort 684 H) dans Al-Furūq (الفُرُوق) a systématisé : Qāʿida Fiqhiyya (قَاعِدَة فِقهِيَّة — principe général traversant tous les domaines du Fiqh) vs Ḍābiṭ (ضَابِط — règle propre à un domaine particulier). Sa contribution a structuré tout le Fiqh mālikī postérieur."
        },
        {
          id: "q-mal-15",
          text: "<strong>SYNTHÈSE FINALE :</strong> Quelle est la leçon fondamentale de l'étude de la vie et de l'œuvre de l'Imām Mālik pour un Muslim contemporain ?",
          choices: [
          { id:"a", text:"Il faut aller étudier à Médine uniquement" },
          { id:"b", text:"Le Fiqh islamique est une tradition vivante, ancrée dans des sources authentiques ET capable de s'adapter à chaque contexte — Mālik l'a démontré en préservant la Sunna de Médine tout en répondant aux questions de son époque" },
          { id:"c", text:"Le Fiqh malikite est supérieur aux autres écoles" },
          { id:"d", text:"On doit mémoriser la Muwattaʾ entièrement" }
          ],
          correctId: "b",
          explanation: "La leçon de la vie de Mālik : (1) l'authenticité des sources (Muwattaʾ, chaîne d'or) ; (2) la prudence dans la fatwa (« je ne sais pas ») ; (3) la flexibilité dans les outils (ʿAmal, Maṣlaḥa) ; (4) l'adaptation locale sans compromis sur les principes. Ce modèle est directement applicable pour les Muslims contemporains qui cherchent à pratiquer un Islam authentique ET ancré dans leur réalité."
        }]
      }
    },

    /* ═══ السِّيرَة النَّبَوِيَّة وفِقهُهَا ═══ */
    {
      id: "sira",
      title: "La Sīra et son Enseignement Juridique",
      arabicTitle: "السِّيرَة النَّبَوِيَّة وفِقهُهَا",
      icon: "arch",
      description: "La vie du Prophète ﷺ comme source du Fiqh mālikī : phases de la révélation, grandes décisions juridiques prophétiques et héritage des Compagnons.",
      source: "Ibn Hishām · Al-Bukhārī · Muwattaʾ · Sources hadiths",
      badge: {
        id: 'badge-expert-sira',
        title: "Connaisseur de la Sīra",
        arabicTitle: "عَارِفُ السِّيرَة",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "السِّيرَة النَّبَوِيَّة وفِقهُهَا"
      },
      lessons: [
      {
        id: "sir-01",
        title: "Marāḥil al-Waḥy — Les Phases de la Révélation et le Fiqh",
        status: 'available',
        content: [
        {"t": "lead", "v": "La Sīra (السِّيرَة — vie du Prophète ﷺ) n'est pas seulement une biographie : c'est le laboratoire vivant du Fiqh (فِقه) islamique. Comprendre l'ordre chronologique de la Révélation — et ses implications juridiques — est une condition indispensable pour tout Mujtahid (مُجتَهِد)."},
        { t:'ar', v:"لَقَد كَانَ لَكُم فِي رَسُولِ اللَّهِ أُسوَةٌ حَسَنَة", n:"Coran 33:21 — « Vous avez dans le Messager d'Allah un excellent modèle »" },
        {"t": "h", "v": "Al-Marḥala al-Makkiyya (المَرحَلَة المَكِّيَّة) — Période Mecquoise (13 ans)"},
        { t:'ul', v:[
          "Révélations centrées sur : Tawḥīd (التَّوحِيد — Unicité divine), Ākhira (الآخِرَة — Vie Future), morale universelle, réfutation du polythéisme.",
          "Peu de normes juridiques détaillées — la priorité était l'Īmān (الإِيمَان — croyance).",
          "Ayāt Makkiyya (آيَات مَكِّيَّة — versets mecquois) : généralement courts, percutants, avec des formules d'appel (يَا أَيُّهَا النَّاسُ).",
          "Exception : quelques normes de conduite morale — Coran 17:22-39 (la « charte morale » mecquoise).",
          "Enseignement malikite : les versets mecquois forment la base théologique sur laquelle repose tout le Fiqh (فِقه) de la période médinoise."
        ] },
        {"t": "h", "v": "Al-Marḥala al-Madaniyya (المَرحَلَة المَدَنِيَّة) — Période Médinoise (10 ans)"},
        { t:'ul', v:[
          "Révélations de construction sociale et juridique : Ṣalāt (الصَّلَاة — prière) obligatoire, Zakāt (الزَّكَاة — aumône), Ṣawm (الصَّوم — jeûne), Ḥajj (الحَجّ — pèlerinage), lois pénales, successions, mariage.",
          "Āyāt Madaniyya (آيَات مَدَنِيَّة — versets médinois) : généralement plus longs, avec formule يَا أَيُّهَا الَّذِينَ آمَنُوا.",
          "Naskh (النَّسخ — abrogation) : certains versets mecquois abrogés par des versets médinois (ex : interdiction de l'alcool progressive).",
          "Al-Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ — sagesse pédagogique) : les interdictions sont venues graduellement pour ne pas choquer les Compagnons."
        ] },
        {"t": "h", "v": "Al-Naskh (النَّسخ) — L'Abrogation et ses Types"},
        { t:'ul', v:[
          "<strong>Naskh al-Ḥukm wa-l-Tilāwa :</strong> le jugement ET le texte sont abrogés.",
          "<strong>Naskh al-Tilāwa dūna l-Ḥukm :</strong> le texte est retiré mais le jugement reste (cas rare, très discuté).",
          "<strong>Naskh al-Ḥukm dūna l-Tilāwa :</strong> le plus courant — le texte reste dans le Coran mais le jugement est remplacé. Ex : Āyat al-Qibla (آيَة القِبلَة) — prière vers Jérusalem abrogée, prière vers La Mecque.",
          "L'Imām Mālik dans la Muwattaʾ (المُوَطَّأ) est très prudent sur le Naskh — il exige des preuves solides avant de déclarer qu'un verset en a abrogé un autre.",
          "Méthode malikite : préférer la conciliation (al-Jamʿ / الجَمع) entre deux textes apparemment contradictoires plutôt que de recourir au Naskh."
        ] },
        {"t": "h", "v": "Al-Tashawwuf al-Tashriʿī — La Pédagogie Islamique de la Loi"},
        {"t": "p", "v": "L'interdiction de l'alcool illustre parfaitement la méthode pédagogique islamique : (1) Coran 2:219 — l'alcool a des avantages et des inconvénients (introduction) → (2) Coran 4:43 — ne pas prier en état d'ivresse → (3) Coran 5:90-91 — prohibition totale. Cette progression sur plusieurs années a permis une adoption sincère et durable."},
        {"t": "note", "v": "Application contemporaine : la méthode graduée de la Sīra (السِّيرَة) inspire le Fiqh (فِقه) des minorités — on ne peut pas imposer tous les changements à la fois. Un Muslim nouvellement pratiquant, une famille en conversion, une communauté en développement — tous ont besoin du même Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ — progression pédagogique) que les Compagnons ont reçu à Médine."}
        ]
      },
      {
        id: "sir-02",
        title: "Al-Qarārāt al-Fiqhiyya al-Kubrā — Les Grandes Décisions Juridiques Prophétiques",
        status: 'available',
        content: [
        {"t": "lead", "v": "Plusieurs décisions du Prophète ﷺ pendant la Sīra (السِّيرَة) ont établi des précédents juridiques fondamentaux. L'école malikite les étudie dans leur contexte complet — historique, politique et social — avant d'en extraire le jugement."},
        {"t": "h", "v": "Wathīqat al-Madīna (وَثِيقَة المَدِينَة) — La Constitution de Médine"},
        {"t": "p", "v": "Peu après la Hijra (هِجرَة — migration), le Prophète ﷺ a établi une charte entre les Muslim émigrés (Muhājirūn / مُهَاجِرُون), les Helpers (Anṣār / أَنصَار) et les tribus juives de Médine. C'est le premier document constitutionnel islamique."},
        { t:'ul', v:[
          "Établit la notion d'Umma (أُمَّة — communauté) plurireligieuse sous autorité islamique.",
          "Protège les droits des non-Muslims (Dhimmī / ذِمِّيّ) et garantit leur pratique religieuse.",
          "Établit la responsabilité collective pour la défense de Médine.",
          "Modèle malikite contemporain : doctrine-malikite.fr cite cette charte comme fondement du Fiqh al-Muwāṭana (فِقه المُوَاطَنَة — citoyenneté islamique)."
        ] },
        {"t": "h", "v": "Ṣulḥ al-Ḥudaybiyya (صُلح الحُدَيبِيَّة) — Le Traité de Ḥudaybiyya"},
        {"t": "p", "v": "En l'an 6 H, le Prophète ﷺ a accepté des conditions apparemment défavorables pour traiter avec Quraysh. Les Compagnons étaient déçus — mais le Coran a appelé ce traité « Fatḥ Mubīn (فَتح مُبِين — Victoire Évidente) » (Coran 48:1)."},
        { t:'ul', v:[
          "Enseigne la Fiqh al-Muwāzanāt (فِقه المُوَازَنَات — jurisprudence des équilibres) : parfois une concession ponctuelle est une victoire stratégique.",
          "Le Prophète ﷺ a délibérément accepté des termes injustes pour établir la paix et permettre la Daʿwa (الدَّعوَة — appel à l'Islam).",
          "Enseignement malikite : dans le Fiqh des minorités, accepter des compromis légaux licites (Ittifāqāt / اتِّفَاقَات) pour préserver l'essentiel est une Sunna (سُنَّة) prophétique."
        ] },
        {"t": "h", "v": "Ḥajjat al-Wadāʿ (حَجَّة الوَدَاع) — Le Discours d'Adieu"},
        { t:'ul', v:[
          "L'an 10 H — dernier Ḥajj (الحَجّ) du Prophète ﷺ. Son discours est une synthèse du programme islamique.",
          "Principes proclamés : interdiction du Ribā (الرِّبَا — usure), protection de la vie et des biens, égalité entre les peuples, droits de la femme.",
          "« اِتَّقُوا اللَّهَ فِي النِّسَاء » — « Craignez Allah concernant les femmes. » — Établit les droits des femmes comme obligation religieuse.",
          "Fiqh de l'Umma (فِقه الأُمَّة) mondiale : « Un Arabe n'a pas de supériorité sur un non-Arabe — la supériorité n'est que par la Taqwā (التَّقوَى — piété). »"
        ] },
        {"t": "h", "v": "Rasāʾil al-Nabī ﷺ — Les Lettres du Prophète aux Rois"},
        { t:'ul', v:[
          "Le Prophète ﷺ a envoyé des lettres à Héraclius (Byzance), Chosroès (Perse), al-Muqawqis (Égypte), Négus (Éthiopie).",
          "Formule constante : « Aslim taslam (أَسلِم تَسلَم) — Embrasse l'Islam, tu seras sauvé. »",
          "Enseignement juridique : la Daʿwa (الدَّعوَة) aux non-Muslims est une obligation prophétique — par la sagesse et sans contrainte.",
          "Al-Najāshī (النَّجَاشِيّ) — le Négus d'Éthiopie — a embrassé l'Islam en privé tout en maintenant ses fonctions de roi chrétien. Modèle de coexistence institutionnelle."
        ] },
        {"t": "note", "v": "La méthode malikite d'extraction des règles de la Sīra (السِّيرَة) : (1) établir l'authenticité historique de l'événement ; (2) comprendre le contexte complet ; (3) identifier ce qui est spécifique au Prophète ﷺ (لَا يُقتَدَى به) de ce qui est modèle universel ; (4) en extraire le principe. Cette méthode évite l'anachronisme et les applications hors contexte."}
        ]
      },
      {
        id: "sir-03",
        title: "Al-Ṣaḥāba wa-l-Tābiʿūn — Les Compagnons comme Sources Juridiques",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'école malikite confère aux opinions des Ṣaḥāba (الصَّحَابَة — Compagnons) et des Tābiʿīn (التَّابِعِين — Successeurs) une autorité juridique que d'autres écoles ne reconnaissent pas au même degré. C'est l'une des sources les plus originales et les plus discutées du Fiqh mālikī."},
        {"t": "h", "v": "Statut des opinions des Ṣaḥāba (الصَّحَابَة)"},
        { t:'ul', v:[
          "Position malikite : l'avis unanime des Ṣaḥāba (Ijmāʿ al-Ṣaḥāba / إِجمَاع الصَّحَابَة) est une preuve juridique irréfutable.",
          "L'avis d'un Ṣaḥābī individuel est préféré au Qiyās (القِيَاس — analogie) selon une position malikite.",
          "Justification : les Ṣaḥāba ont été les témoins directs du Waḥy (الوَحي — Révélation) — ils comprennent les textes mieux que quiconque.",
          "L'Imām Mālik dans la Muwattaʾ (المُوَطَّأ) cite constamment : « c'est ce que j'ai trouvé nos savants pratiquant » — référence aux opinions des Compagnons à Médine."
        ] },
        {"t": "h", "v": "Les Quatre Premiers Califes comme Sources Juridiques"},
        { t:'ul', v:[
          "Abū Bakr al-Ṣiddīq (أَبُو بَكر الصِّدِّيق) : sa décision de combattre les refuseurs de Zakāt (الزَّكَاة) — Fitnā al-Ridda (فِتنَة الرِّدَّة) — a établi le précédent que la Zakāt est un pilier de l'État islamique.",
          "ʿUmar ibn al-Khaṭṭāb (عُمَر بن الخَطَّاب) : ses innovations juridiques (Dīwān / الدِّيوَان, Tarāwīḥ collective, suspension du Ḥadd al-Sariqa / حَدّ السَّرِقَة pendant la famine) démontrent que le Fiqh (فِقه) doit répondre aux réalités sociales.",
          "ʿUthmān ibn ʿAffān (عُثمَان بن عَفَّان) : unification du Muṣḥaf (المُصحَف — texte coranique) — décision collective majeure non textée dans le Coran.",
          "ʿAlī ibn Abī Ṭālib (عَلِيّ بن أَبِي طَالِب) : ses jugements (Aqḍiya / أَقضِيَة) sont des références en droit civil et pénal islamique — même l'Imām al-Shāfiʿī les cite."
        ] },
        {"t": "h", "v": "Les Fuqahāʾ al-Sabʿa (فُقَهَاء السَّبعَة) — Les Sept Juristes de Médine"},
        {"t": "p", "v": "Sept grands juristes de la génération des Tābiʿīn (التَّابِعِين) ont formé l'école juridique médinoise qui a directement influencé l'Imām Mālik :"},
        { t:'ul', v:[
          "Saʿīd ibn al-Musayyab (سَعِيد بن المُسَيَّب) — le plus grand d'entre eux selon Mālik.",
          "ʿUrwa ibn al-Zubayr (عُروَة بن الزُّبَير) — neveu de ʿĀʾisha ﵂, transmetteur exceptionnel.",
          "Al-Qāsim ibn Muḥammad (القَاسِم بن مُحَمَّد) — petit-fils d'Abū Bakr, source directe de Mālik.",
          "Khārija ibn Zayd (خَارِجَة بن زَيد), Abū Bakr ibn ʿAbd al-Raḥmān (أَبُو بَكر بن عَبد الرَّحمَان), Sulaymān ibn Yasār (سُلَيمَان بن يَسَار), ʿUbaydullāh ibn ʿAbdullāh (عُبَيدُ اللَّه بن عَبدِ اللَّه).",
          "L'Imām Mālik a étudié sous plusieurs de ces juristes ou leurs élèves directs — c'est la base de son ʿAmal al-Madanī (عَمَل المَدَنِيّ)."
        ] },
        {"t": "note", "v": "Pourquoi l'Imām Mālik citait-il les Tābiʿīn (التَّابِعِين) autant que les hadīths ? Parce qu'il voyait dans leur pratique la Sunna (السُّنَّة) vivante — transmise de maître en maître sans rupture depuis le Prophète ﷺ. Pour lui, une chaîne de pratique continue (Silsila ʿAmaliyya / سِلسِلَة عَمَلِيَّة) est plus solide qu'une chaîne de transmission orale isolée."}
        ]
      },
      {
        id: "sir-04",
        title: "Al-Hijra wa-Dār al-Islām — Migration et Territoires Islamiques",
        status: 'available',
        content: [
        {"t": "lead", "v": "La Hijra (هِجرَة — migration) du Prophète ﷺ de La Mecque à Médine en l'an 1 H est le point de départ du calendrier islamique. Elle a aussi établi une doctrine fondamentale sur le rapport entre le Muslim et son territoire — avec des implications directes pour le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات — jurisprudence des minorités)."},
        {"t": "h", "v": "Aqsām al-Diyār (أَقسَام الدِّيَار) — Classification Classique des Territoires"},
        { t:'ul', v:[
          "<strong>Dār al-Islām (دَار الإِسلَام) :</strong> territoire où la loi islamique est appliquée et les Muslims sont en sécurité.",
          "<strong>Dār al-Ḥarb (دَار الحَرب) :</strong> territoire ennemi en état de guerre avec les Muslims.",
          "<strong>Dār al-ʿAhd (دَار العَهد) / Dār al-Ṣulḥ (دَار الصُّلح) :</strong> territoire non-islamique lié par un traité de paix avec les Muslims. <strong>C'est la catégorie malikite contemporaine la plus pertinente pour l'Europe.</strong>",
          "Spécificité malikite : l'Imām Mālik est parmi les premiers à avoir développé la notion de Dār al-ʿAhd — qui évite la dichotomie binaire Islam/guerre."
        ] },
        {"t": "h", "v": "Ḥukm al-Hijra (حُكم الهِجرَة) — L'Obligation de Migrer"},
        { t:'ul', v:[
          "Hijra obligatoire : quitter un pays où le Muslim ne peut pas pratiquer sa religion librement.",
          "Hijra recommandée : quitter un pays pour rejoindre un environnement islamiquement meilleur.",
          "Hijra non obligatoire : rester dans un pays non-islamique pour pratiquer la Daʿwa (الدَّعوَة) ou aider la communauté.",
          "<strong>Position malikite contemporaine :</strong> l'Europe est Dār al-ʿAhd (دَار العَهد) — la Hijra vers les pays du Golfe n'est pas obligatoire pour un Muslim vivant légalement en France."
        ] },
        {"t": "h", "v": "Al-Najāshī : Modèle de Gouvernance Non-Islamique"},
        {"t": "p", "v": "Le Négus d'Éthiopie (al-Najāshī / النَّجَاشِيّ) est un cas d'école dans le Fiqh mālikī : il a embrassé l'Islam en privé tout en restant roi d'un pays chrétien, appliquant les lois de son royaume. Le Prophète ﷺ a prié sur lui à distance après sa mort."},
        { t:'ul', v:[
          "Enseigne que un Muslim peut exercer une fonction dans un État non-islamique sans perdre son Islām (الإِسلَام).",
          "Enseigne que la pratique religieuse privée peut coexister avec la fonction publique dans un État non-islamique.",
          "Doctrine-malikite.fr cite ce précédent pour les Muslims fonctionnaires en France, dans la police, l'armée, la justice."
        ] },
        {"t": "note", "v": "La question de l'hégire (Hijra / هِجرَة) est aujourd'hui inversée pour de nombreux Muslims : leurs ancêtres ont quitté les pays musulmans pour venir en Europe. La Sīra (السِّيرَة) offre des outils pour penser cette situation : le Prophète ﷺ à La Mecque avant la Hijra, les Compagnons en Éthiopie chez al-Najāshī, et le modèle de la charte de Médine — tous illustrent que les Muslims peuvent pratiquer leur religion dans des contextes non-islamiques."}
        ]
      },
      {
        id: "sir-05",
        title: "Al-Ghazawāt wa-Fiqhuhā — Les Expéditions et leur Enseignement",
        status: 'available',
        content: [
        {"t": "lead", "v": "Les campagnes militaires (Ghazawāt / غَزَوَات) du Prophète ﷺ ont établi de nombreux précédents en Fiqh al-Jihād (فِقه الجِهَاد — jurisprudence de la défense islamique), en Fiqh al-Asrā (فِقه الأُسَرَاء — traitement des prisonniers) et en relations internationales islamiques."},
        {"t": "h", "v": "Fiqh al-Jihād (فِقه الجِهَاد) — Clarifications Essentielles"},
        { t:'ul', v:[
          "Jihād (جِهَاد) signifie littéralement « effort » — le Jihād al-Nafs (جِهَاد النَّفس — effort sur soi) est qualifié par le Prophète ﷺ de « grand Jihād ».",
          "La lutte armée (Qitāl / قِتَال) est une modalité spécifique et conditionnée du Jihād — pas sa définition principale.",
          "Conditions du Qitāl (القِتَال — combat légitime) en Fiqh mālikī : légitime défense, agressions contre les Muslims ou les Dhimmī (الذِّمِّيّ), sous autorité d'un État islamique constitué.",
          "<strong>Pas de Qitāl individuel :</strong> un Muslim individuel ne peut décider seul de la guerre. C'est une décision d'État (Ūlū al-Amr / أُولُو الأَمر).",
          "Le terrorisme au nom de l'Islam contredit absolument ces conditions — doctrine-malikite.fr condamne fermement toute violence non justifiée."
        ] },
        {"t": "h", "v": "Aḥkām al-Asrā (أَحكَام الأُسَرَاء) — Traitement des Prisonniers"},
        { t:'ul', v:[
          "Coran 76:8 : « Ils donnent à manger au pauvre, à l'orphelin et au prisonnier par amour de Lui. »",
          "Le Prophète ﷺ a libéré de nombreux prisonniers contre rançon, par grâce ou en échange d'enseignement des Compagnons.",
          "Les Conventions de Genève modernes sur le traitement des prisonniers de guerre reflètent en partie ces principes islamiques — avec 14 siècles de retard selon certains historiens.",
          "Fiqh malikite : la cruauté envers les prisonniers est Ḥarām (حَرَام) — même en état de guerre."
        ] },
        {"t": "h", "v": "Al-Fatḥ (الفَتح) — La Conquête : Amnistie Générale"},
        {"t": "p", "v": "À la Fatḥ Makka (فَتح مَكَّة — Conquête de La Mecque, an 8 H), le Prophète ﷺ a proclamé une amnistie générale pour ses ennemis de 20 ans — y compris pour ceux qui l'avaient torturé et persécuté. « Idhhabū fa-antum al-ṭulaqāʾ (اِذهَبُوا فَأَنتُم الطُّلَقَاء) — Allez, vous êtes libres ! »"},
        { t:'ul', v:[
          "Modèle de réconciliation : la victoire islamique n'est pas une revanche.",
          "Enseigne le Fiqh al-ʿAfw (فِقه العَفو — jurisprudence du pardon) : la clémence dans la victoire est une Sunna (سُنَّة) prophétique.",
          "Doctrine-malikite.fr : dans les conflits communautaires contemporains, la réconciliation et le pardon sont islamiquement préférables à la revanche."
        ] },
        {"t": "note", "v": "Méthode malikite d'utilisation de la Sīra (السِّيرَة) : l'Imām al-Shāṭibī (الشَّاطِبِيّ) dans Al-Muwāfaqāt rappelle qu'on ne peut pas extraire des règles d'un épisode de la Sīra sans en comprendre le Maqṣad (مَقصَد — finalité). La Sīra est narrative — elle montre le Prophète ﷺ répondant à des situations précises. Généraliser sans contexte est une erreur méthodologique fondamentale."}
        ]
      }
      ],
      quiz: {
        id: 'quiz-expert-sira',
        title: 'Questionnaire — ' + "السِّيرَة النَّبَوِيَّة وفِقهُهَا",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-sir-01",
          text: "La période mecquoise (Al-Marḥala al-Makkiyya / المَرحَلَة المَكِّيَّة) de la révélation est centrée sur :",
          choices: [
          { id:"a", text:"Les lois détaillées du Fiqh (فِقه)" },
          { id:"b", text:"Tawḥīd (التَّوحِيد), Ākhira (الآخِرَة) et morale universelle — construire l'Īmān (الإِيمَان) avant les lois" },
          { id:"c", text:"Le mariage et les successions" },
          { id:"d", text:"La constitution de l'État islamique" }
          ],
          correctId: "b",
          explanation: "La période mecquoise (13 ans) est théologique — elle construit les fondements de l'Īmān (الإِيمَان — croyance) : Tawḥīd (التَّوحِيد), Ākhira (الآخِرَة — Vie Future), morale. Peu de Fiqh (فِقه) détaillé — la priorité était de préparer les cœurs à recevoir la loi. Les Āyāt Makkiyya (آيَات مَكِّيَّة) sont généralement courtes et percutantes."
        },
        {
          id: "q-sir-02",
          text: "Le Naskh (النَّسخ — abrogation) le plus courant dans le Coran est :",
          choices: [
          { id:"a", text:"Naskh du texte ET du jugement" },
          { id:"b", text:"Naskh du jugement seul — le texte reste dans le Coran mais la règle juridique est remplacée" },
          { id:"c", text:"Naskh du texte seul — la règle reste mais le verset disparaît" },
          { id:"d", text:"Naskh n'existe pas — tous les versets sont applicables" }
          ],
          correctId: "b",
          explanation: "Le type le plus courant de Naskh (النَّسخ) : le texte reste dans le Coran MAIS son jugement juridique est remplacé par un autre verset. Ex : Āyat al-Qibla (آيَة القِبلَة) — verset ordonnant de prier vers Jérusalem reste dans le Coran, mais son jugement est abrogé par la nouvelle Qibla (القِبلَة) vers La Mecque."
        },
        {
          id: "q-sir-03",
          text: "<strong>PIÈGE :</strong> Quelle est la méthode malikite face à deux textes apparemment contradictoires ?",
          choices: [
          { id:"a", text:"Toujours déclarer que le plus récent abroge le plus ancien" },
          { id:"b", text:"Préférer la conciliation (Al-Jamʿ / الجَمع) entre les textes plutôt que de recourir au Naskh (النَّسخ)" },
          { id:"c", text:"Ignorer l'un des textes" },
          { id:"d", text:"Demander l'avis du Calife" }
          ],
          correctId: "b",
          explanation: "Méthode malikite distinctive : préférer Al-Jamʿ (الجَمع — conciliation) entre deux textes plutôt que d'en déclarer un abrogé. Le Naskh (النَّسخ) nécessite des preuves solides. L'Imām Mālik disait : « Si tu peux concilier deux textes, ne déclare pas l'un comme abrogé. »"
        },
        {
          id: "q-sir-04",
          text: "Wathīqat al-Madīna (وَثِيقَة المَدِينَة — la Constitution de Médine) établit notamment :",
          choices: [
          { id:"a", text:"L'interdiction pour les non-Muslims de vivre à Médine" },
          { id:"b", text:"Une Umma (أُمَّة) plurireligieuse sous autorité islamique — avec protection des droits des juifs et autres communautés" },
          { id:"c", text:"L'obligation du Jihād (جِهَاد) permanent" },
          { id:"d", text:"La suprématie arabe dans l'État islamique" }
          ],
          correctId: "b",
          explanation: "Wathīqat al-Madīna (وَثِيقَة المَدِينَة) est le premier document constitutionnel islamique. Elle établit une Umma (أُمَّة) plurielle incluant Muslims, juifs et autres — avec droits et devoirs pour chacun. Doctrine-malikite.fr la cite comme fondement du Fiqh al-Muwāṭana (فِقه المُوَاطَنَة — citoyenneté islamique contemporaine)."
        },
        {
          id: "q-sir-05",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> L'avis d'un Ṣaḥābī (صَحَابِيّ — Compagnon) individuel en Fiqh mālikī est :",
          choices: [
          { id:"a", text:"Sans valeur juridique" },
          { id:"b", text:"Préféré au Qiyās (القِيَاس — analogie) selon une position malikite forte" },
          { id:"c", text:"Équivalent à un Ḥadīth mutawātir" },
          { id:"d", text:"Accepté seulement s'il vient des 4 premiers Califes" }
          ],
          correctId: "b",
          explanation: "Position malikite distinctive : l'avis d'un Ṣaḥābī (صَحَابِيّ) est une source juridique majeure — préféré au Qiyās (القِيَاس) dans de nombreux cas. Les Compagnons étaient les témoins directs du Waḥy (الوَحي — Révélation) et comprennent les textes mieux que quiconque après le Prophète ﷺ."
        },
        {
          id: "q-sir-06",
          text: "Les Fuqahāʾ al-Sabʿa (فُقَهَاء السَّبعَة — les Sept Juristes de Médine) ont une importance particulière dans l'école malikite car :",
          choices: [
          { id:"a", text:"Ils ont écrit le Coran" },
          { id:"b", text:"Ils ont formé l'école juridique médinoise qui a directement influencé l'Imām Mālik — transmettant la Sunna (السُّنَّة) vivante des Compagnons" },
          { id:"c", text:"Ils étaient les seuls juristes de l'époque" },
          { id:"d", text:"Ils ont compilé la Muwattaʾ (المُوَطَّأ)" }
          ],
          correctId: "b",
          explanation: "Les Fuqahāʾ al-Sabʿa (فُقَهَاء السَّبعَة) — Saʿīd ibn al-Musayyab et ses six collègues — ont transmis directement la pratique des Compagnons à Médine. L'Imām Mālik a étudié sous plusieurs d'entre eux ou leurs élèves. C'est la source directe de son ʿAmal al-Madanī (عَمَل المَدَنِيّ)."
        },
        {
          id: "q-sir-07",
          text: "<strong>PIÈGE :</strong> Le Jihād (جِهَاد) en Islam signifie-t-il principalement la guerre ?",
          choices: [
          { id:"a", text:"Oui — Jihād = guerre sainte" },
          { id:"b", text:"Non — Jihād signifie « effort » et sa forme principale est Jihād al-Nafs (جِهَاد النَّفس — effort sur soi). La lutte armée est une modalité spécifique et très conditionnée" },
          { id:"c", text:"Oui mais seulement pour les savants" },
          { id:"d", text:"Oui seulement en Dār al-Ḥarb (دَار الحَرب)" }
          ],
          correctId: "b",
          explanation: "Jihād (جِهَاد) = effort en arabe. Le Prophète ﷺ au retour d'une bataille : « nous revenons du petit Jihād (guerre) vers le grand Jihād (Jihād al-Nafs / جِهَاد النَّفس — maîtrise de soi). » La lutte armée (Qitāl / قِتَال) est une modalité spécifique et conditionnée — pas la définition principale."
        },
        {
          id: "q-sir-08",
          text: "Ṣulḥ al-Ḥudaybiyya (صُلح الحُدَيبِيَّة) enseigne quel principe juridique ?",
          choices: [
          { id:"a", text:"La guerre est toujours préférable à la paix" },
          { id:"b", text:"Fiqh al-Muwāzanāt (فِقه المُوَازَنَات — jurisprudence des équilibres) : une concession ponctuelle peut être une victoire stratégique" },
          { id:"c", text:"Le Prophète ﷺ ne pouvait jamais se tromper dans ses jugements politiques" },
          { id:"d", text:"La paix avec les non-Muslims est Ḥarām (حَرَام)" }
          ],
          correctId: "b",
          explanation: "À Ḥudaybiyya, le Prophète ﷺ a accepté des conditions injustes — les Compagnons étaient déçus. Mais le Coran a appelé cela Fatḥ Mubīn (فَتح مُبِين — Victoire Évidente). Enseigne le Fiqh al-Muwāzanāt (فِقه المُوَازَنَات) : dans certains contextes, la concession licite est la meilleure stratégie pour l'avenir de l'Islām (الإِسلَام)."
        },
        {
          id: "q-sir-09",
          text: "Dār al-ʿAhd (دَار العَهد) est la catégorie malikite pour :",
          choices: [
          { id:"a", text:"Les pays en guerre avec l'Islam" },
          { id:"b", text:"Les pays non-islamiques liés par un traité de paix — comme l'Europe contemporaine selon la position malikite" },
          { id:"c", text:"Les pays gouvernés par des Ahl al-Kitāb" },
          { id:"d", text:"Les pays qui paient la Jizya (الجِزيَة)" }
          ],
          correctId: "b",
          explanation: "Dār al-ʿAhd (دَار العَهد — territoire de convention) est la troisième catégorie malikite, au-delà de la dichotomie binaire Dār al-Islām / Dār al-Ḥarb. C'est la catégorie la plus pertinente pour l'Europe contemporaine selon la position malikite contemporaine — doctrine-malikite.fr et le Conseil Européen de la Fatwa l'adoptent."
        },
        {
          id: "q-sir-10",
          text: "L'exemple d'al-Najāshī (النَّجَاشِيّ — le Négus d'Éthiopie) enseigne :",
          choices: [
          { id:"a", text:"Qu'un Muslim ne peut pas vivre dans un pays non-islamique" },
          { id:"b", text:"Qu'un Muslim peut exercer une fonction dans un État non-islamique sans perdre son Islām (الإِسلَام)" },
          { id:"c", text:"Que les rois non-Muslims deviennent automatiquement Muslims" },
          { id:"d", text:"Que l'Éthiopie est une terre islamique" }
          ],
          correctId: "b",
          explanation: "Al-Najāshī (النَّجَاشِيّ) a embrassé l'Islām (الإِسلَام) en privé tout en restant roi chrétien d'Éthiopie, appliquant les lois de son royaume. Le Prophète ﷺ a prié sur lui à distance après sa mort. Ce précédent fonde le Fiqh de la participation des Muslims dans les institutions non-islamiques — applicable aux fonctionnaires, élus et officiers Muslims en Europe."
        },
        {
          id: "q-sir-11",
          text: "Al-Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ) illustré par l'interdiction progressive de l'alcool enseigne :",
          choices: [
          { id:"a", text:"Que l'alcool était licite au début de l'Islam" },
          { id:"b", text:"La sagesse pédagogique islamique : introduire les changements progressivement pour permettre une adoption sincère et durable" },
          { id:"c", text:"Que le Coran est contradictoire" },
          { id:"d", text:"Que seuls les Compagnons avaient droit à cette progression" }
          ],
          correctId: "b",
          explanation: "L'interdiction de l'alcool est venue en 3 étapes sur plusieurs années. C'est Al-Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ — progression pédagogique légale) : Allah a guidé les Compagnons progressivement pour une adoption sincère et durable. Ce principe s'applique en Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) : on ne peut pas imposer tous les changements à la fois."
        },
        {
          id: "q-sir-12",
          text: "<strong>AVANCÉ :</strong> La Fatḥ Makka (فَتح مَكَّة — Conquête de La Mecque) enseigne quel Fiqh ?",
          choices: [
          { id:"a", text:"La revanche est légitime après 20 ans de persécution" },
          { id:"b", text:"Fiqh al-ʿAfw (فِقه العَفو — jurisprudence du pardon) : la clémence dans la victoire est une Sunna (سُنَّة) prophétique" },
          { id:"c", text:"La conquête militaire justifie l'expulsion des non-Muslims" },
          { id:"d", text:"Les Mecquois ont dû payer la Jizya (الجِزيَة)" }
          ],
          correctId: "b",
          explanation: "À la Fatḥ Makka (فَتح مَكَّة), le Prophète ﷺ a proclamé l'amnistie générale — « Allez, vous êtes libres ! » — pour ses ennemis de 20 ans, y compris les tortionnaires de ses Compagnons. Enseigne Fiqh al-ʿAfw (فِقه العَفو) : le pardon et la réconciliation après la victoire sont des Sunna (سُنَّة) prophétiques."
        },
        {
          id: "q-sir-13",
          text: "<strong>PIÈGE :</strong> Peut-on prendre des règles juridiques directement d'un épisode de la Sīra (السِّيرَة) sans son contexte ?",
          choices: [
          { id:"a", text:"Oui — chaque acte prophétique est une Sunna (سُنَّة) universelle" },
          { id:"b", text:"Non — l'Imām al-Shāṭibī (الشَّاطِبِيّ) exige d'identifier le Maqṣad (مَقصَد — finalité) de chaque épisode avant d'en extraire des règles" },
          { id:"c", text:"Oui si l'acte est cité dans le Coran" },
          { id:"d", text:"Seulement si deux Ṣaḥāba (الصَّحَابَة) le confirment" }
          ],
          correctId: "b",
          explanation: "Méthode malikite (Al-Shāṭibī dans Al-Muwāfaqāt) : la Sīra (السِّيرَة) est narrative — le Prophète ﷺ répondait à des situations précises. Pour extraire une règle, il faut comprendre : (1) le contexte historique ; (2) ce qui est spécifique au Prophète ﷺ (Khāṣṣ / خَاصّ) de ce qui est universel (ʿĀmm / عَامّ) ; (3) la finalité (Maqṣad / مَقصَد) de l'acte."
        },
        {
          id: "q-sir-14",
          text: "La décision d'Abū Bakr al-Ṣiddīq (أَبُو بَكر الصِّدِّيق) de combattre les refuseurs de Zakāt (الزَّكَاة) a établi quel précédent ?",
          choices: [
          { id:"a", text:"Que la Zakāt (الزَّكَاة) est optionnelle" },
          { id:"b", text:"Que la Zakāt (الزَّكَاة) est un pilier de l'État islamique — son refus collectif est une menace à l'ordre islamique" },
          { id:"c", text:"Que la guerre civile est permise pour des raisons fiscales" },
          { id:"d", text:"Que seul le Calife peut collecter la Zakāt (الزَّكَاة)" }
          ],
          correctId: "b",
          explanation: "La décision d'Abū Bakr ﵁ de combattre les tribus qui ont refusé de payer la Zakāt (الزَّكَاة) après la mort du Prophète ﷺ a établi que la Zakāt n'est pas un simple acte individuel — c'est un pilier de l'État islamique. Ce précédent fonde le caractère obligatoire de la Zakāt (زَكَاة) en Fiqh mālikī et dans tous les Madhāhib."
        },
        {
          id: "q-sir-15",
          text: "Les Rasāʾil al-Nabī ﷺ (رَسَائِل النَّبِيّ — les lettres du Prophète aux rois) établissent quel principe ?",
          choices: [
          { id:"a", text:"La guerre immédiate contre tout roi non-Muslim" },
          { id:"b", text:"La Daʿwa (الدَّعوَة — appel à l'Islam) aux non-Muslims est une obligation prophétique — par la sagesse et sans contrainte" },
          { id:"c", text:"Les rois ont priorité sur les savants" },
          { id:"d", text:"Le commerce international est prioritaire sur la Daʿwa (الدَّعوَة)" }
          ],
          correctId: "b",
          explanation: "Les lettres du Prophète ﷺ à Héraclius, Chosroès, al-Muqawqis et al-Najāshī établissent la Daʿwa (الدَّعوَة) internationale comme obligation prophétique — par la Ḥikma (الحِكمَة — sagesse), la parole et l'exemple, sans contrainte (Coran 2:256 : لَا إِكرَاهَ فِي الدِّين). Ce principe fonde la Daʿwa malikite contemporaine."
        },
        {
          id: "q-sir-16",
          text: "ʿUmar ibn al-Khaṭṭāb (عُمَر بن الخَطَّاب) a suspendu le Ḥadd al-Sariqa (حَدّ السَّرِقَة — la peine pour vol) pendant la famine. Ce précédent illustre :",
          choices: [
          { id:"a", text:"Que ʿUmar avait le droit d'abroger le Coran" },
          { id:"b", text:"Que le Fiqh (فِقه) doit répondre aux réalités sociales — la famine crée une Shubha (شُبهَة — doute) qui lève le Ḥadd (حَدّ)" },
          { id:"c", text:"Que le Ḥadd al-Sariqa (حَدّ السَّرِقَة) est optionnel" },
          { id:"d", text:"Que le Calife peut changer les lois islamiques" }
          ],
          correctId: "b",
          explanation: "ʿUmar ﵁ n'a pas abrogé le Ḥadd (حَدّ) — il a appliqué le principe islamique que la nécessité (Ḍarūra / ضَرُورَة) et le doute (Shubha / شُبهَة) lèvent les Ḥudūd (حُدُود). Quelqu'un qui vole pour survivre à une famine n'est pas dans la même situation morale qu'un voleur ordinaire. Ce précédent fonde l'adaptabilité du Fiqh mālikī face aux crises."
        },
        {
          id: "q-sir-17",
          text: "<strong>CONTEMPORAIN :</strong> La Hijra (هِجرَة) vers des pays islamiques est-elle obligatoire pour les Muslims de France ?",
          choices: [
          { id:"a", text:"Oui — tout Muslim doit vivre en pays islamique" },
          { id:"b", text:"Non — la France est Dār al-ʿAhd (دَار العَهد) ; la Hijra (هِجرَة) n'est pas obligatoire quand le Muslim peut pratiquer librement" },
          { id:"c", text:"Oui seulement pour les hommes" },
          { id:"d", text:"Seulement si la mosquée du coin est fermée" }
          ],
          correctId: "b",
          explanation: "Position malikite contemporaine (doctrine-malikite.fr) : l'Europe, et la France en particulier, est Dār al-ʿAhd (دَار العَهد — territoire de convention). La liberté religieuse est garantie légalement. La Hijra (هِجرَة) n'est obligatoire que si le Muslim ne peut pas pratiquer librement sa religion — ce qui n'est pas le cas en France."
        },
        {
          id: "q-sir-18",
          text: "Al-Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ) est applicable au Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) contemporain dans quel sens ?",
          choices: [
          { id:"a", text:"On peut supprimer des obligations islamiques pour les Muslims en Occident" },
          { id:"b", text:"On guide les Muslims nouvellement pratiquants ou en conversion avec la même progressivité que les Compagnons ont reçue — sans imposer tous les changements à la fois" },
          { id:"c", text:"La Sharīʿa (الشَّرِيعَة) change selon les pays" },
          { id:"d", text:"Le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) peut supprimer des règles coraniques" }
          ],
          correctId: "b",
          explanation: "Al-Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ — progression pédagogique) en Fiqh al-Aqalliyyāt : guider les Muslims en Occident progressivement — les fondamentaux d'abord (Tawḥīd / التَّوحِيد, Ṣalāt / الصَّلَاة, Ṣiyām / الصِّيَام), puis les détails. Ne pas décourager par l'exigence totale et immédiate. C'est la méthode prophétique appliquée au contexte contemporain."
        },
        {
          id: "q-sir-19",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Pourquoi l'Imām Mālik citait-il les pratiques des Tābiʿīn (التَّابِعِين) autant que les Ḥadīths ?",
          choices: [
          { id:"a", text:"Parce qu'il ne connaissait pas beaucoup de Ḥadīths" },
          { id:"b", text:"Parce qu'une chaîne de pratique continue (Silsila ʿAmaliyya / سِلسِلَة عَمَلِيَّة) est plus fiable qu'un Ḥadīth Āḥād isolé pour préserver la Sunna (السُّنَّة) vivante" },
          { id:"c", text:"Parce que les Tābiʿīn (التَّابِعِين) sont supérieurs aux Ṣaḥāba (الصَّحَابَة)" },
          { id:"d", text:"Parce que c'était la coutume médinoise d'ignorer les Ḥadīths" }
          ],
          correctId: "b",
          explanation: "L'Imām Mālik voyait dans la pratique continue des Tābiʿīn (التَّابِعِين) à Médine — transmise de maître en maître sans rupture — une Sunna (سُنَّة) vivante plus fiable qu'un Ḥadīth Āḥād (آحَاد) isolé. C'est la logique du ʿAmal al-Madanī (عَمَل المَدَنِيّ) : la pratique collective transmet ce qu'un transmetteur seul ne peut pas capturer."
        },
        {
          id: "q-sir-20",
          text: "<strong>SYNTHÈSE :</strong> En quoi la Sīra (السِّيرَة) est-elle une source distinctive du Fiqh mālikī ?",
          choices: [
          { id:"a", text:"L'école malikite n'utilise pas la Sīra (السِّيرَة)" },
          { id:"b", text:"L'école malikite utilise la Sīra (السِّيرَة) pour : extraire le Fiqh al-Muwāzanāt (فِقه المُوَازَنَات), le Tashawwuf al-Tashriʿī (التَّشَوُّف التَّشرِيعِيّ), le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) et les précédents des Ṣaḥāba (الصَّحَابَة) — avec méthode contextuelle" },
          { id:"c", text:"La Sīra (السِّيرَة) remplace le Coran en malikite" },
          { id:"d", text:"Seuls les épisodes guerriers de la Sīra (السِّيرَة) sont utilisés" }
          ],
          correctId: "b",
          explanation: "La Sīra (السِّيرَة) dans le Fiqh mālikī : source de Sunna (سُنَّة) vivante (via Ṣaḥāba et Tābiʿīn), modèles de gouvernance plurielle (Wathīqat al-Madīna / وَثِيقَة المَدِينَة), de Fiqh al-Muwāzanāt (Ḥudaybiyya), de Tashawwuf al-Tashriʿī (alcool), de Fiqh al-ʿAfw (Fatḥ Makka). Avec méthode rigoureuse : contexte toujours examiné avant extraction de règles."
        }
        ]
      }
    },

    /* ═══ فِقه الأَقلِّيَّات والمُوَاطَنَة ═══ */
    {
      id: "aqalliyyat",
      title: "Fiqh des Minorités Musulmanes",
      arabicTitle: "فِقه الأَقلِّيَّات والمُوَاطَنَة",
      icon: "scales",
      description: "Vivre et pratiquer l'Islam en pays non-islamique : citoyenneté, participation politique, Talfīq (التَّلفِيق), gestion des divergences et coexistence.",
      source: "doctrine-malikite.fr · Conseil Européen de la Fatwa · Fatāwā contemporaines",
      badge: {
        id: 'badge-expert-aqalliyyat',
        title: "Juriste des Minorités",
        arabicTitle: "فَقِيهُ الأَقلِّيَّات",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "فِقه الأَقلِّيَّات والمُوَاطَنَة"
      },
      lessons: [
      {
        id: "aqal-01",
        title: "Uṣūl Fiqh al-Aqalliyyāt — Fondements Théoriques",
        status: 'available',
        content: [
        {"t": "lead", "v": "Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات — jurisprudence des minorités) est un corpus juridique en plein développement depuis les années 1990. Il répond à une question fondamentale : comment un Muslim vivant dans une société non-islamique peut-il pratiquer son Islām (الإِسلَام) pleinement tout en remplissant ses obligations civiques ? Doctrine-malikite.fr en est l'une des principales références en langue française."},
        {"t": "h", "v": "Définition et légitimité"},
        { t:'ul', v:[
          "Fiqh al-Aqalliyyāt n'est PAS un Islam allégé — c'est l'application rigoureuse des sources islamiques à des situations nouvelles.",
          "Il ne crée pas de nouvelles obligations ni ne supprime des obligations existantes — il interprète comment les appliquer dans un contexte non-islamique.",
          "Principaux promoteurs contemporains : le Cheikh Yūsuf al-Qaraḍāwī (يُوسُف القَرَضَاوِيّ), le Dr ʿAbd Allāh ibn Bayyah (عَبد اللَّه بن بَيَّه) — tous deux influencés par la méthode malikite.",
          "Base légale : la Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) et les Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) — sources exclusivement malikites."
        ] },
        {"t": "h", "v": "Les 3 Questions Fondamentales"},
        { t:'ul', v:[
          "<strong>1. Ayna (أَين — Où) ?</strong> La notion de territoire : Dār al-ʿAhd (دَار العَهد — Europe), Dār al-Islām (دَار الإِسلَام), Dār al-Ḥarb (دَار الحَرب) et leurs implications.",
          "<strong>2. Kayfa (كَيف — Comment) ?</strong> Les modalités de pratique islamique en contexte non-islamique : quelles concessions sont permises, lesquelles ne le sont pas.",
          "<strong>3. Mādhā (مَاذَا — Quoi) ?</strong> Les obligations qui restent incontournables en toutes circonstances (Ṣalāt / الصَّلَاة, Ṣiyām / الصِّيَام, Tawḥīd / التَّوحِيد...) vs celles qui peuvent être adaptées dans leur forme."
        ] },
        {"t": "h", "v": "Istiṣḥāb al-Barāʾa (استِصحَاب البَرَاءَة) — Principe de Base"},
        {"t": "p", "v": "Le principe de liberté (Ibāḥa Aṣliyya / إِبَاحَة أَصلِيَّة) : tout est licite par défaut sauf ce qui est explicitement interdit. En Fiqh al-Aqalliyyāt, ce principe est essentiel : les institutions civiles (école, hôpital, banque...) sont par défaut permises — sauf preuve contraire."},
        {"t": "note", "v": "Doctrine-malikite.fr distingue deux approches en Fiqh al-Aqalliyyāt : (1) approche restrictive (« tout ce qui n'est pas islamique est suspect ») — rejetée ; (2) approche libérale fondée sur l'Ibāḥa Aṣliyya (إِبَاحَة أَصلِيَّة) et les Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) — adoptée. La seconde approche est plus fidèle à la méthode malikite historique."}
        ]
      },
      {
        id: "aqal-02",
        title: "Al-Muwāṭana wa-l-Mushāraka — Citoyenneté et Participation",
        status: 'available',
        content: [
        {"t": "lead", "v": "La citoyenneté française d'un Muslim est-elle compatible avec son Islām (الإِسلَام) ? La participation dans les institutions non-islamiques est-elle permise ? Ces questions fondamentales ont des réponses claires dans le Fiqh mālikī contemporain."},
        {"t": "h", "v": "Ūlū al-Amr (أُولُو الأَمر) en pays non-islamique"},
        {"t": "p", "v": "Le Coran 4:59 ordonne : « Obéissez à Allah, obéissez au Messager et à Ūlū al-Amr (أُولُو الأَمر — ceux qui détiennent l'autorité) parmi vous. » En France, les Ūlū al-Amr sont les lois et institutions de la République — dans leur domaine."},
        { t:'ul', v:[
          "Le Muslim est tenu de respecter les lois françaises : fiscalité, droit civil, code de la route, etc.",
          "Limite islamique : l'obéissance aux Ūlū al-Amr cesse si elle implique un péché explicite (Maʿṣiya / مَعصِيَة).",
          "Doctrine-malikite.fr : « L'obligation civique et l'obligation islamique se complètent dans la quasi-totalité des cas en France. »"
        ] },
        {"t": "h", "v": "Al-Tawāṭuʾ al-Siyāsī (التَّوَاطُؤ السِّيَاسِيّ) — Participation Politique"},
        { t:'ul', v:[
          "Voter aux élections françaises est permis — voire recommandé — pour choisir la moins mauvaise option (Akhfaf al-Ḍarārayn / أَخَفُّ الضَّرَرَيْن).",
          "Se présenter à des élections : permis. Un Muslim peut être conseiller municipal, député, sénateur.",
          "Doctrine-malikite.fr cite le précédent de Yūsuf (يُوسُف — Joseph) : il a demandé et accepté une fonction dans l'État d'un pharaon non-Muslim pour servir sa communauté (Coran 12:55).",
          "Conditions : ne pas commettre de Ḥarām (حَرَام) dans l'exercice des fonctions, rester intègre."
        ] },
        {"t": "h", "v": "Al-Khidma al-ʿAskariyya (الخِدمَة العَسكَرِيَّة) — Service Militaire"},
        { t:'ul', v:[
          "Permis en France — sous les mêmes conditions que toute autre fonction publique.",
          "Un Muslim soldat français peut refuser des missions clairement contraires à l'Islām (الإِسلَام) — mais cela reste une décision individuelle grave.",
          "Le précédent d'al-Najāshī (النَّجَاشِيّ) s'applique : exercer une fonction d'État non-islamique sans renier sa foi est une Sunna (سُنَّة) établie.",
          "Doctrine-malikite.fr : servir dans l'armée française pour défendre la sécurité des Français (y compris des Muslims) est islamiquement légitimable."
        ] },
        {"t": "h", "v": "Al-Taʾmīn (التَّأمِين) et les Systèmes Sociaux"},
        { t:'ul', v:[
          "La Sécurité Sociale, les retraites et l'assurance chômage sont permis en France — nécessité légale (Ḍarūra / ضَرُورَة) et intérêt général (Maṣlaḥa / مَصلَحَة).",
          "L'assurance automobile obligatoire : permise par Ḍarūra (ضَرُورَة) selon la majorité des savants malikites contemporains.",
          "L'assurance vie commerciale : divergence — le Takāful (التَّكَافُل — assurance islamique mutuelle) est préférable si disponible.",
          "Doctrine-malikite.fr : les obligations légales françaises (assurances, cotisations) ne constituent pas du Ribā (الرِّبَا) au sens juridique islamique."
        ] },
        {"t": "note", "v": "Le principe juridique malikite du Fiqh al-Aqalliyyāt en matière civique : Al-Maʾdhdhin bi-l-Awāʾil Maʾdhdhin bi-l-Tawābiʿ (الآذِن بالأَوَائِل آذِنٌ بِالتَّوَابِع — qui autorise le principal autorise l'accessoire). Si résider légalement en France est islamiquement permis, alors participer aux institutions françaises (vote, travail, école) l'est aussi — c'est la conséquence logique."}
        ]
      },
      {
        id: "aqal-03",
        title: "Al-Taḥaddiyāt al-ʿAmaliyya — Défis Pratiques du Muslim en Occident",
        status: 'available',
        content: [
        {"t": "lead", "v": "Au quotidien, le Muslim en France rencontre des situations que le Fiqh (فِقه) classique n'a pas traitées directement. Doctrine-malikite.fr et le Conseil Européen de la Fatwa (CEF) ont développé des réponses basées sur les principes malikites."},
        {"t": "h", "v": "La Nourriture et les Produits Ḥalāl"},
        { t:'ul', v:[
          "Les viandes Ahl al-Kitāb (أَهل الكِتَاب) : le Fiqh mālikī les permet en général (Coran 5:5) — s'applique aux viandes de supermarchés en France selon une position malikite.",
          "La Gélatine issue de porc après transformation chimique complète (Istiḥāla / استِحَالَة) : position malikite — licite si transformation totale.",
          "L'alcool dans les médicaments et parfums : position malikite — usage externe et quantité infime non enivrant = permis.",
          "Les restaurants non-certifiés Ḥalāl : si les viandes viennent de sources Ahl al-Kitāb (أَهل الكِتَاب) et qu'on ignore si du porc est mélangé, la Ibāḥa (الإِبَاحَة) s'applique avec prudence.",
          "Doctrine-malikite.fr : la Tazkiya (تَزكِيَة — certification) islamique des produits est recommandée mais pas toujours obligatoire."
        ] },
        {"t": "h", "v": "La Ṣalāt (الصَّلَاة — Prière) en Contexte Professionnel"},
        { t:'ul', v:[
          "Demander une pause pour la Ṣalāt (الصَّلَاة — prière) au travail : recommandé et généralement légalement protégé en France (liberté religieuse).",
          "Ṣalāt Qaṣr (صَلَاة القَصر — prière raccourcie) en voyage : dès 80-90 km selon les positions malikites.",
          "Jamʿ (جَمع — regroupement) des prières Ẓuhr/ʿAṣr ou Maghrib/ʿIshāʾ : permis pour le travailleur qui ne peut pas prier séparément.",
          "La Jumʿa (الجُمُعَة — prière du vendredi) : obligation maintenue même en Occident — si impossible, la Ẓuhr (الظُّهر) la remplace."
        ] },
        {"t": "h", "v": "Le Mariage, le Divorce Civil et l'Héritage"},
        { t:'ul', v:[
          "Mariage islamique ET civil : doctrine-malikite.fr recommande fermement les deux — le mariage civil protège les droits légaux de la femme et des enfants.",
          "Divorce civil seul : ne libère pas islamiquement l'épouse — il faut aussi le Ṭalāq (الطَّلَاق) islamique ou le Khulʿ (الخُلع).",
          "Héritage : les héritiers Muslims peuvent convenir entre eux (après règlement civil) d'appliquer les parts islamiques (Farāʾiḍ / فَرَائِض) — convention privée moralement contraignante.",
          "L'adoption plénière en France : crée des droits civils mais pas de filiation islamique (Naṣab / نَسَب) — les deux systèmes coexistent."
        ] },
        {"t": "h", "v": "Al-Ribā (الرِّبَا) et le Financement Immobilier en France"},
        { t:'ul', v:[
          "Crédit immobilier classique : Ribā (الرِّبَا) islamiquement — éviter si alternatives disponibles.",
          "Alternatives islamiques disponibles en France : Murābaḥa (المُرَابَحَة) bancaire islamique, Ijāra Muntahiya bi-l-Tamlīk (إِجَارَة مُنتَهِيَة بِالتَّمليك — crédit-bail), Musharaka Mutanaqiṣa (مُشَارَكَة مُتَنَاقِصَة).",
          "Si aucune alternative islamique n'est accessible et que le logement est une nécessité absolue : divergence parmi les savants malikites — certains permettent le crédit classique par Ḍarūra (ضَرُورَة), d'autres refusent.",
          "Doctrine-malikite.fr : chercher d'abord les alternatives islamiques. La Ḍarūra (ضَرُورَة) n'est pas automatique — elle nécessite une vraie impossibilité, pas une simple préférence."
        ] },
        {"t": "note", "v": "Principe malikite clé du Fiqh al-Aqalliyyāt : « Al-Mashaqqa Tajlib al-Taysīr (المَشَقَّة تَجلِبُ التَّيسِير) — La difficulté attire le facilité. » Quand une pratique islamique crée une difficulté disproportionnée dans le contexte français, le Fiqh mālikī offre des alternatives licites — sans abandonner le principe. Le but n'est pas de rendre tout licite, mais de trouver des voies islamiques praticables."}
        ]
      },
      {
        id: "aqal-04",
        title: "Al-Daʿwa wa-l-Taʿāyush — L'Appel à l'Islam et la Coexistence",
        status: 'available',
        content: [
        {"t": "lead", "v": "Un Muslim en France a-t-il l'obligation de faire la Daʿwa (الدَّعوَة — appel à l'Islam) ? Comment coexister avec des compatriotes non-Muslims ? La réponse malikite, fondée sur la Sīra (السِّيرَة) et doctrine-malikite.fr, est nuancée et profondément respectueuse."},
        {"t": "h", "v": "Ḥukm al-Daʿwa (حُكم الدَّعوَة) — Statut de l'Appel à l'Islam"},
        { t:'ul', v:[
          "La Daʿwa (الدَّعوَة) est une obligation collective (Farḍ Kifāya / فَرض كِفَايَة) — si une partie de la communauté l'accomplit, tous sont exonérés.",
          "La Daʿwa par l'exemple (Uswat al-Ḥasana / أُسوَة حَسَنَة) — être un bon voisin, collègue, citoyen intègre — est accessible à chaque Muslim et parfois plus efficace que les paroles.",
          "La Daʿwa verbale directe : permise et recommandée — avec Ḥikma (الحِكمَة — sagesse), Mawʿiẓa (مَوعِظَة — bonne parole) et dialogue (Coran 16:125).",
          "Forcer ou presser quelqu'un vers l'Islām (الإِسلَام) : interdit — Coran 2:256 « لَا إِكرَاهَ فِي الدِّين »."
        ] },
        {"t": "h", "v": "Ḥuqūq al-Jīrān wa-l-Mujtamaʿ (حُقُوق الجِيرَان والمُجتَمَع) — Droits des Voisins"},
        { t:'ul', v:[
          "Les droits des voisins sont universels en Islam — Muslim ou non.",
          "Ne pas nuire : interdire à ses enfants de salir l'escalier, éviter le vacarme nocturne, respecter les espaces communs.",
          "Aider en cas de besoin : islamiquement recommandé et prophétiquement fondé.",
          "Hadīth du Prophète ﷺ sur Jibrīl (جِبرِيل) : « Il m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. »",
          "Doctrine-malikite.fr : la réputation du Muslim dans son quartier est un acte de Daʿwa (الدَّعوَة) en soi."
        ] },
        {"t": "h", "v": "Al-Taʿāmul maʿa Ghayr al-Muslims (التَّعَامُل مَع غَير المُسلِمِين) — Relations Sociales"},
        { t:'ul', v:[
          "Offrir et recevoir des cadeaux des non-Muslims : permis et même recommandé pour renforcer les liens.",
          "Manger avec des non-Muslims (nourriture Ḥalāl) : permis.",
          "Assister aux événements non-religieux (anniversaires, fêtes civiles, mariages civils) : permis selon la majorité des savants malikites contemporains.",
          "Assister aux cérémonies religieuses non-islamiques : divergence — la présence passive (sans participation active aux actes religieux non-islamiques) est permise par certains savants malikites.",
          "Les vœux de Noël et autres fêtes : divergence — certains malikites permettent les formules de courtoisie civile ; d'autres les déconseillent."
        ] },
        {"t": "h", "v": "Wāqiʿ al-Islāmophobia (وَاقِع الإِسلَامُوفُوبِيَا) — Islamophobie et Réponse Islamique"},
        { t:'ul', v:[
          "La dignité du Muslim est protégée islamiquement — il peut se défendre légalement face à la discrimination.",
          "La réponse islamique à l'Islamophobie : par la loi civile, par l'exemple exemplaire et par la Daʿwa (الدَّعوَة) — jamais par la violence.",
          "Doctrine-malikite.fr : « La meilleure réponse à l'Islamophobie est un Muslim exemplaire dans sa profession, sa famille et son quartier. »",
          "Coran 41:34 : « Repousse [le mal] par ce qui est meilleur — et voilà que celui avec qui tu avais une inimitié devient un ami chaleureux. »"
        ] },
        {"t": "note", "v": "La vision malikite de la coexistence : l'Islām (الإِسلَام) n'a pas pour objectif de créer une société islamique homogène mais de permettre à chaque Muslim de pratiquer sa foi avec dignité et intégrité, dans un respect mutuel avec les autres composantes de la société. Wathīqat al-Madīna (وَثِيقَة المَدِينَة) reste le modèle — une société plurielle et juste."}
        ]
      },
      {
        id: "aqal-05",
        title: "Al-Islām al-Faransī — L'Islam de France et ses Spécificités",
        status: 'available',
        content: [
        {"t": "lead", "v": "L'Islam en France est le deuxième Islam en Europe par la taille de sa communauté. Sa spécificité historique — profondément malikite et Ṣūfī (صُوفِيّ) dans ses origines maghrébines et africaines — lui confère un rapport particulier à la Sharīʿa (الشَّرِيعَة) et aux institutions françaises."},
        {"t": "h", "v": "Al-Khuṣūṣiyya al-Mālikiyya li-Islam Faransā (الخُصُوصِيَّة المَالِكِيَّة لإِسلَام فَرَنسَا)"},
        { t:'ul', v:[
          "La majorité des Muslims de France (origine magrébine et africaine) sont historiquement malikites — même s'ils l'ignorent souvent.",
          "Le Fiqh mālikī, avec sa Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) et son ʿUrf (العُرف — coutume locale), est structurellement adapté pour répondre aux réalités françaises.",
          "Les Ṭuruq Ṣūfiyya (الطُّرُق الصُّوفِيَّة — confréries soufies) — Tijāniyya (التِّيجَانِيَّة), Qādiriyya (القَادِرِيَّة), Shādhiliyya (الشَّاذِلِيَّة) — toutes d'obédience malikite, constituent une ressource spirituelle et communautaire majeure."
        ] },
        {"t": "h", "v": "Al-Hayāʾ al-Islāmiyya al-Faransiyya (الهَيئَات الإِسلَامِيَّة الفَرَنسِيَّة) — Institutions Islamiques"},
        { t:'ul', v:[
          "Le CFCM (Conseil Français du Culte Musulman) : institution de représentation officielle — rôle important mais limité.",
          "Les associations islamiques locales : ressource principale de Fiqh (فِقه) pratique pour les Muslims ordinaires.",
          "Les Imāms (الأَئِمَّة) formés en France : enjeu majeur — doctrine-malikite.fr appelle à une formation qui inclut le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات).",
          "Les lycées et écoles islamiques privées sous contrat : instrument éducatif islamique légalement intégré."
        ] },
        {"t": "h", "v": "Al-Azmāt al-Muʿāṣira (الأَزمَات المُعَاصِرَة) — Crises Contemporaines"},
        { t:'ul', v:[
          "La laïcité française et le Ḥijāb (الحِجَاب) : doctrine-malikite.fr maintient l'obligation islamique du port du voile pour les femmes pubères tout en comprenant le cadre légal français.",
          "Dans l'espace public/scolaire français : la femme Muslim peut choisir ses modalités en tenant compte des contraintes légales et de la Ḍarūra (ضَرُورَة) sociale.",
          "La radicalisation : le Fiqh mālikī — avec son Tawassut (تَوَسُّط — voie du milieu) et son rejet du Takfīr (التَّكفِير — anathème) — est le meilleur antidote intellectuel à l'extrémisme.",
          "La question Halāl dans les cantines scolaires : demander des menus végétariens est une solution pratique et malikitement valide."
        ] },
        {"t": "h", "v": "Ruʾya Mustaqbaliyya (رُؤيَة مُستَقبَلِيَّة) — Vers un Islam de France Épanoui"},
        {"t": "p", "v": "Doctrine-malikite.fr conclut sa section sur le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) avec une vision : un Muslim français n'a pas à choisir entre son Islām (الإِسلَام) et sa citoyenneté française. Les deux identités sont complémentaires et enrichissantes. La Sīra (السِّيرَة) du Prophète ﷺ, le Fiqh mālikī avec sa flexibilité et ses Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة), et la tradition musulmane française — africaine, maghrébine, Ṣūfiyya (صُوفِيَّة) — constituent une ressource exceptionnelle pour construire cet Islam français épanoui."},
        {"t": "note", "v": "Message final : le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) n'est pas une capitulation face à la France laïque — c'est la mise en œuvre intelligente, rigoureuse et courageuse de l'Islām (الإِسلَام) dans un contexte spécifique. Comme l'Imām Mālik à Médine sous les Abbassides, comme al-Najāshī (النَّجَاشِيّ) en Éthiopie, comme les savants de Tombouctou sous des rois non-islamiques — la tradition malikite a toujours su naviguer entre fidélité aux principes et intelligence des contextes."}
        ]
      }
      ],
      quiz: {
        id: 'quiz-expert-aqalliyyat',
        title: 'Questionnaire — ' + "فِقه الأَقلِّيَّات والمُوَاطَنَة",
        status: 'available',
        score: null,
        questions: [
        {
          id: "q-aqal-01",
          text: "Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) est :",
          choices: [
          { id:"a", text:"Un Islam allégé pour les Muslims en Occident" },
          { id:"b", text:"L'application rigoureuse des sources islamiques à des situations nouvelles — ni allègement ni invention" },
          { id:"c", text:"Un nouveau Madhhab (مَذهَب)" },
          { id:"d", text:"Une jurisprudence qui remplace le Madhhab mālikī" }
          ],
          correctId: "b",
          explanation: "Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) n'est PAS un Islam allégé — c'est l'Ijtihād (اجتِهَاد) rigoureux appliqué aux situations inédites des Muslims en Occident. Il ne crée pas de nouvelles obligations ni n'en supprime d'existantes. Il se base sur la Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) et les Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) malikites."
        },
        {
          id: "q-aqal-02",
          text: "L'Europe est considérée comme Dār al-ʿAhd (دَار العَهد) dans le Fiqh mālikī contemporain. Qu'implique cette classification ?",
          choices: [
          { id:"a", text:"Les Muslims n'ont pas d'obligations islamiques en Europe" },
          { id:"b", text:"L'Europe est un territoire de convention et de paix — ni Dār al-Islām (دَار الإِسلَام) ni Dār al-Ḥarb (دَار الحَرب). Les Muslims peuvent y vivre et pratiquer librement" },
          { id:"c", text:"Les Muslims doivent quitter l'Europe pour un pays islamique" },
          { id:"d", text:"La Sharīʿa (الشَّرِيعَة) doit y être appliquée immédiatement" }
          ],
          correctId: "b",
          explanation: "La classification malikite de l'Europe comme Dār al-ʿAhd (دَار العَهد — territoire de convention) signifie : ni Dār al-Islām (gouverné par la Sharīʿa / الشَّرِيعَة) ni Dār al-Ḥarb (en guerre). La Hijra (هِجرَة) n'est pas obligatoire — les Muslims peuvent résider légalement et pratiquer librement leur Islām (الإِسلَام)."
        },
        {
          id: "q-aqal-03",
          text: "Le précédent du prophète Yūsuf (يُوسُف — Joseph) en Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) enseigne :",
          choices: [
          { id:"a", text:"Qu'il faut fuir les pays non-islamiques" },
          { id:"b", text:"Qu'un Muslim peut accepter une fonction dans un État non-islamique pour servir sa communauté et pratiquer la justice (Coran 12:55)" },
          { id:"c", text:"Que l'Égypte était islamique au temps de Yūsuf (يُوسُف)" },
          { id:"d", text:"Que le commerce avec les non-Muslims est interdit" }
          ],
          correctId: "b",
          explanation: "Coran 12:55 : Yūsuf (يُوسُف) a demandé et accepté un poste de ministre des finances chez un pharaon non-Muslim pour servir sa communauté. Ce précédent fonde islamiquement la participation des Muslims dans les institutions non-islamiques — gouvernement, administration, armée — pour servir le bien commun."
        },
        {
          id: "q-aqal-04",
          text: "<strong>PIÈGE :</strong> La Ṣalāt (الصَّلَاة — prière) reste-t-elle obligatoire en toutes circonstances en Occident ?",
          choices: [
          { id:"a", text:"Non — les Muslims en Occident peuvent la réduire à 2 fois par jour" },
          { id:"b", text:"Oui — la Ṣalāt (الصَّلَاة) est une obligation incontournable ; le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) propose des facilités (Jamʿ / جَمع, Qaṣr / قَصر) mais ne la supprime pas" },
          { id:"c", text:"Oui mais seulement pour les hommes en Occident" },
          { id:"d", text:"Non si le travail l'empêche" }
          ],
          correctId: "b",
          explanation: "La Ṣalāt (الصَّلَاة — prière) est un pilier absolu — inchangeable par le Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات). Ce qui change : les modalités pratiques. Le Fiqh mālikī offre : Jamʿ (جَمع — regroupement des prières), Qaṣr (قَصر — raccourcissement en voyage), Ṣalāt dans les espaces disponibles. La prière ne peut pas être abandonnée."
        },
        {
          id: "q-aqal-05",
          text: "La Daʿwa (الدَّعوَة) en France est :",
          choices: [
          { id:"a", text:"Obligatoire pour chaque Muslim individuellement" },
          { id:"b", text:"Un Farḍ Kifāya (فَرض كِفَايَة — obligation communautaire) — par l'exemple, la parole sage et le dialogue, jamais par la contrainte" },
          { id:"c", text:"Interdite dans les pays laïcs" },
          { id:"d", text:"Permise seulement par les imāms (الأَئِمَّة)" }
          ],
          correctId: "b",
          explanation: "La Daʿwa (الدَّعوَة) est Farḍ Kifāya (فَرض كِفَايَة) — collective. La méthode : Uswat al-Ḥasana (أُسوَة حَسَنَة — bon exemple), Ḥikma (الحِكمَة — sagesse), Mawʿiẓa (مَوعِظَة — bonne parole), dialogue sincère. La contrainte est absolument interdite — Coran 2:256 : « لَا إِكرَاهَ فِي الدِّين »."
        },
        {
          id: "q-aqal-06",
          text: "<strong>SPÉCIFICITÉ MALIKITE :</strong> Voter aux élections françaises est :",
          choices: [
          { id:"a", text:"Ḥarām (حَرَام) — participer à un système non-islamique" },
          { id:"b", text:"Permis et même recommandé selon le Fiqh mālikī contemporain — pour choisir la moins mauvaise option (Akhfaf al-Ḍarārayn / أَخَفُّ الضَّرَرَيْن)" },
          { id:"c", text:"Permis seulement si le candidat est Muslim" },
          { id:"d", text:"Mubāḥ (مُبَاح — neutre) mais sans aucune recommandation" }
          ],
          correctId: "b",
          explanation: "La position malikite contemporaine (doctrine-malikite.fr et ʿAbd Allāh ibn Bayyah) : voter est permis et même recommandé pour choisir Akhfaf al-Ḍarārayn (أَخَفُّ الضَّرَرَيْن — la moins mauvaise option). Le précédent de Yūsuf (يُوسُف) et d'al-Najāshī (النَّجَاشِيّ) fonde la participation dans les systèmes politiques non-islamiques pour servir le bien commun."
        },
        {
          id: "q-aqal-07",
          text: "Le mariage islamique sans mariage civil en France est-il recommandé par doctrine-malikite.fr ?",
          choices: [
          { id:"a", text:"Oui — le mariage islamique suffit" },
          { id:"b", text:"Non — doctrine-malikite.fr recommande fermement les deux : le mariage civil protège les droits légaux de la femme et des enfants" },
          { id:"c", text:"Oui si deux témoins Muslims sont présents" },
          { id:"d", text:"Non — seul le mariage civil compte" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr est ferme : mariage islamique ET civil sont requis. Le mariage civil protège : (1) les droits patrimoniaux de la femme en cas de divorce ou décès ; (2) la filiation légale des enfants ; (3) les droits successoraux. Un Nikāḥ (النِّكَاح) sans mariage civil expose la femme à de graves inégalités légales."
        },
        {
          id: "q-aqal-08",
          text: "<strong>PIÈGE :</strong> La Ḍarūra (ضَرُورَة — nécessité) justifie-t-elle automatiquement le crédit immobilier à intérêt en France ?",
          choices: [
          { id:"a", text:"Oui — logement = nécessité absolue" },
          { id:"b", text:"Non — la Ḍarūra (ضَرُورَة) nécessite une vraie impossibilité (pas de Ḥalāl disponible, situation critique). Si des alternatives islamiques existent, elles doivent être explorées d'abord" },
          { id:"c", text:"Oui si le taux est faible" },
          { id:"d", text:"Oui pour la résidence principale uniquement" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : la Ḍarūra (ضَرُورَة) s'applique à une VRAIE impossibilité — pas à une préférence ou une commodité. Si Murābaḥa (المُرَابَحَة) islamique ou Ijāra Muntahiya bi-l-Tamlīk (إِجَارَة مُنتَهِيَة بِالتَّمليك) sont disponibles → les utiliser. La Ḍarūra (ضَرُورَة) n'est pas automatique."
        },
        {
          id: "q-aqal-09",
          text: "Al-Mashaqqa Tajlib al-Taysīr (المَشَقَّة تَجلِبُ التَّيسِير) est un principe malikite qui signifie :",
          choices: [
          { id:"a", text:"La difficulté supprime les obligations" },
          { id:"b", text:"La difficulté attire la facilité — le Fiqh (فِقه) offre des alternatives licites en cas de réelle difficulté, sans abandonner le principe" },
          { id:"c", text:"Plus c'est difficile, plus c'est méritoire" },
          { id:"d", text:"La facilité est toujours préférable à la rigueur" }
          ],
          correctId: "b",
          explanation: "Ce Qāʿida Fiqhiyya (قَاعِدَة فِقهِيَّة — règle juridique générale) malikite : la réelle difficulté (Mashaqqa / مَشَقَّة) ouvre la voie aux facilités (Rukhaṣ / رُخَص) islamiques. Mais le principe reste intact — on trouve une voie islamique praticable, on ne supprime pas l'obligation. Ex : impossible de faire Wuḍūʾ (وُضُوء) → Tayammum (التَّيَمُّم) ; pas d'eau Ḥalāl → nourriture Ahl al-Kitāb (أَهل الكِتَاب)."
        },
        {
          id: "q-aqal-10",
          text: "<strong>CONTEMPORAIN :</strong> Pourquoi l'Islam malikite est-il structurellement bien adapté au contexte français ?",
          choices: [
          { id:"a", text:"Parce qu'il est le plus facile parmi les 4 Madhāhib" },
          { id:"b", text:"Parce que sa Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة), son ʿUrf (العُرف) et ses Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) permettent une adaptation rigoureuse aux réalités françaises — et la majorité des Muslims de France sont historiquement malikites" },
          { id:"c", text:"Parce que ses règles sont moins contraignantes" },
          { id:"d", text:"Parce qu'il a été développé en France" }
          ],
          correctId: "b",
          explanation: "Le Fiqh mālikī est adapté au contexte français pour des raisons méthodologiques ET historiques : (1) Maṣlaḥa al-Mursala (المَصلَحَة المُرسَلَة) — répond aux situations nouvelles ; (2) ʿUrf (العُرف) — intègre les réalités locales ; (3) Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) — évalue les situations selon les finalités islamiques ; (4) la majorité des Muslims de France (origine maghrébine/africaine) sont historiquement malikites."
        },
        {
          id: "q-aqal-11",
          text: "Les droits des voisins non-Muslims d'un Muslim français incluent :",
          choices: [
          { id:"a", text:"Seulement le droit à ne pas être nuire par lui" },
          { id:"b", text:"Ne pas nuire, aider en cas de besoin, respecter les espaces communs — les mêmes droits que les voisins Muslims selon le Fiqh islamique" },
          { id:"c", text:"Aucun droit islamique car non-Muslims" },
          { id:"d", text:"Seulement si le quartier est majoritairement Muslim" }
          ],
          correctId: "b",
          explanation: "Hadīth du Prophète ﷺ : « Jibrīl (جِبرِيل) m'a tant recommandé le voisin que j'ai cru qu'il allait en faire un héritier. » Les droits du voisin en Islām (الإِسلَام) sont universels — Muslim ou non. Doctrine-malikite.fr : la bonne réputation du Muslim dans son quartier est un acte de Daʿwa (الدَّعوَة) en soi."
        },
        {
          id: "q-aqal-12",
          text: "La réponse islamique à l'islamophobie selon doctrine-malikite.fr est :",
          choices: [
          { id:"a", text:"La violence en cas d'insulte grave" },
          { id:"b", text:"La défense légale civile + l'exemple exemplaire + la Daʿwa (الدَّعوَة) — jamais la violence" },
          { id:"c", text:"L'isolement de la société française" },
          { id:"d", text:"La réciprocité — insulte pour insulte" }
          ],
          correctId: "b",
          explanation: "Doctrine-malikite.fr : « La meilleure réponse à l'islamophobie est un Muslim exemplaire dans sa profession, sa famille et son quartier. » Réponse islamique : (1) défense légale civile — les lois françaises protègent contre la discrimination ; (2) Daʿwa (الدَّعوَة) par l'exemple ; (3) jamais la violence. Coran 41:34 : « Repousse par ce qui est meilleur. »"
        },
        {
          id: "q-aqal-13",
          text: "<strong>PIÈGE :</strong> Le Ṭalāq (الطَّلَاق — divorce islamique) seul libère-t-il l'épouse en France ?",
          choices: [
          { id:"a", text:"Oui — le Ṭalāq (الطَّلَاق) islamique suffit" },
          { id:"b", text:"Non — le Ṭalāq (الطَّلَاق) libère islamiquement mais un divorce civil est nécessaire pour libérer légalement ; les deux doivent être effectués" },
          { id:"c", text:"Oui si prononcé devant deux témoins Muslims" },
          { id:"d", text:"Non — seul le divorce civil compte islamiquement en France" }
          ],
          correctId: "b",
          explanation: "En France : le Ṭalāq (الطَّلَاق) islamique libère la femme islamiquement (avec son ʿIdda / عِدَّة). Mais sans divorce civil, elle reste légalement mariée aux yeux de l'État — avec des implications sur les biens, les enfants et l'état civil. Les deux procédures sont nécessaires : Ṭalāq islamique ET divorce civil."
        },
        {
          id: "q-aqal-14",
          text: "Les confréries soufies (Ṭuruq Ṣūfiyya / الطُّرُق الصُّوفِيَّة) d'obédience malikite en France représentent :",
          choices: [
          { id:"a", text:"Une déviation de l'Islam authentique" },
          { id:"b", text:"Une ressource spirituelle et communautaire majeure pour les Muslims franco-africains et franco-maghrébins — Tijāniyya, Qādiriyya, Shādhiliyya" },
          { id:"c", text:"Une école juridique distincte du Fiqh mālikī" },
          { id:"d", text:"Un Islam non orthodoxe à éviter" }
          ],
          correctId: "b",
          explanation: "Les Ṭuruq Ṣūfiyya (الطُّرُق الصُّوفِيَّة) d'obédience malikite — Tijāniyya (التِّيجَانِيَّة), Qādiriyya (القَادِرِيَّة), Shādhiliyya (الشَّاذِلِيَّة) — sont pleinement inscrites dans la tradition islamique malikite. Elles constituent une ressource spirituelle, éducative et communautaire essentielle pour les millions de Muslims franco-africains et franco-maghrébins."
        },
        {
          id: "q-aqal-15",
          text: "<strong>SYNTHÈSE :</strong> La vision malikite de l'Islam français est :",
          choices: [
          { id:"a", text:"L'Islam français doit créer une société islamique séparée" },
          { id:"b", text:"Un Muslim français peut pratiquer son Islām (الإِسلَام) pleinement tout en étant un citoyen français pleinement engagé — les deux identités sont complémentaires selon la méthode malikite" },
          { id:"c", text:"L'Islam doit s'adapter au point de devenir un Islam sans Sharīʿa (الشَّرِيعَة)" },
          { id:"d", text:"Seuls les Maghrébins peuvent pratiquer l'Islam malikite en France" }
          ],
          correctId: "b",
          explanation: "La vision malikite : un Muslim français n'a pas à choisir entre son Islām (الإِسلَام) et sa citoyenneté. Fiqh al-Aqalliyyāt (فِقه الأَقلِّيَّات) + Maqāṣid al-Sharīʿa (مَقَاصِد الشَّرِيعَة) + tradition soufie malikite = ressources pour un Islam français épanoui. La Sīra (السِّيرَة) du Prophète ﷺ à Médine — société plurielle, droits pour tous — reste le modèle."
        }
        ]
      }
    },

    /* ═══ البِيُوإِثِيقَا والمُسْتَجَدَّات الكُبرَى ═══ */
    {
      id: "bioethique",
      title: "Bioéthique et Grandes Questions Contemporaines",
      arabicTitle: "البِيُوإِثِيقَا والمُسْتَجَدَّات الكُبرَى",
      icon: "heart",
      description: "Don d'organes, FIV, euthanasie, cryptomonnaies, IA et écologie : réponses mālikītes aux questions inédites du Fiqh contemporain.",
      source: "doctrine-malikite.fr · Conseil Européen de la Fatwa · Fatāwā contemporaines",
      badge: {
        id: 'badge-expert-bioethique',
        title: "Expert en Bioéthique",
        arabicTitle: "فَقِيهُ المُسْتَجَدَّات",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "البِيُوإِثِيقَا والمُسْتَجَدَّات الكُبرَى"
      },
      lessons: [],
      quiz: {
        id: 'quiz-expert-bioethique',
        title: 'Questionnaire — ' + "البِيُوإِثِيقَا والمُسْتَجَدَّات الكُبرَى",
        status: 'locked',
        score: null,
        questions: []
      }
    },

    /* ═══ Fiqh (الفِقه) المُقَارَن ═══ */
    {
      id: "muqaran",
      title: "Jurisprudence Comparée entre les 4 Écoles",
      arabicTitle: "الفِقه المُقَارَن",
      icon: "balance",
      description: "Méthode d'Ibn Rushd, les 5 types de divergences entre écoles, Talfīq (التَّلفِيق).",
      source: "Bidāyat al-Mujtahid d'Ibn Rushd · Al-Jazīrī (Fiqh ʿalā al-madhāhib al-arbaʿa)",
      badge: {
        id: 'badge-expert-muqaran',
        title: "Maître du Comparatisme",
        arabicTitle: "عَارِفُ الفِقه المُقَارَن",
        icon: 'star8', color: 'gold',
        unlockCondition: 'Obtenir ≥ 85 % au questionnaire ' + "Fiqh (الفِقه) المُقَارَن"
      },
      lessons: [],
      quiz: {
        id: 'quiz-expert-muqaran',
        title: 'Questionnaire — ' + "Fiqh (الفِقه) المُقَارَن",
        status: 'locked',
        score: null,
        questions: []
      }
    }
  ]
}  /* fin EXPERT */