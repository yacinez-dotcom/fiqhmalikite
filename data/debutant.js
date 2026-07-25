/* ════════════════════════════════════════════════════════
   BRIQUE: Données — Niveau Débutant (debutant.js)
   Source : Mukhtaṣar ʿAbd al-Raḥmān al-Akhḍarī
            في العبادات على مذهب Imām (الإمام) مالك
   Auteur : Abū Zayd ʿAbd al-Raḥmān al-Akhḍarī (m. 983 H)
   Format : content = tableau de blocs { t, v, n? }
            t:'lead'|'h'|'p'|'ul'|'ar'|'note'
   ════════════════════════════════════════════════════════ */

const DEBUTANT = {
  id: 'debutant',
  label: 'Débutant',
  arabicLabel: 'المستوى الأوّل',
  levelColor: '#1A6B68',
  source: 'Mukhtaṣar al-Akhḍarī — مختصر الأخضري',
  description: 'Maîtrisez les fondements de la pratique islamique selon l\'école malikite, de la purification rituelle aux obligations financières.',

  levelBadge: {
    id: 'badge-debutant-or',
    title: 'Érudit Débutant',
    arabicTitle: 'المتعلّم المبتدئ',
    icon: 'star8',
    color: 'gold',
    unlockCondition: 'Obtenir ≥ 85 % de moyenne sur l\'ensemble des questionnaires du niveau Débutant'
  },

  subjects: [

    /* ═══════════════════════════════════════════════════
       SUJET 1 — La Purification (الطهارة)
       ═══════════════════════════════════════════════════ */
    {
      id: 'purification',
      title: 'La Purification',
      arabicTitle: 'الطهارة',
      icon: 'water',
      description: 'Types d\'eau, ablutions (الوُضُوء\'), purification complète (الغُسْل), Tayammum (التَّيَمُّم), الحَيْض Nifās (النِّفَاس) selon le rite malikite.',

      lessons: [

        /* ── Leçon 1 ── */
        {
          id: 'pur-01',
          title: 'Ṭahāra (الطَّهَارَة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Selon l\'école malikite, Ṭahāra (الطَّهَارَة) se divise en deux grandes catégories ayant chacune ses règles propres. Toutes deux sont nécessaires pour accomplir valablement les actes d\'adoration.' },
            { t: 'h', v: '1. Ṭahāra (الطَّهَارَة)t al-ḤḤadath (الحَدَث) — Pureté de l\'impureté rituelle' },
            { t: 'p', v: 'Le ḤḤadath (الحَدَث) est un état d\'impureté rituelle qui survient indépendamment de toute souillure visible. Il existe deux niveaux : le حَدَثٌ أَصْغَر (rompu par certains actes corporels, relevé Wuḍūʾ (الوُضُوء)\') et le حَدَثٌ أَكْبَر (الجَنَابَة, الحَيْض, Nifās (النِّفَاس), relevé par le Ghusl (الغُسْل) ou le التَّيَمُّم).' },
            { t: 'h', v: '2. Ṭahāra (الطَّهَارَة)t al-الخَبَث — Pureté des souillures physiques' },
            { t: 'p', v: 'Le الخَبَث désigne une souillure physique concrèNajāsa (النَّجَاسَة) qui se trouve sur le corps, le vêtement ou le lieu de prière. Elle est visible ou palpable et doit être éliminée par lavage pour que la prière soit valide.' },
            { t: 'h', v: 'L\'eau pure et purifiante (māʾ ṭāhir muṭahhir)' },
            { t: 'p', v: 'Aucune des deux purifications n\'est valide que par une eau pure et purifiante : une eau dont la nature propre n\'a pas été altérée dans sa couleur, son goût ou son odeur par une substance étrangère habituellement séparable de l\'eau — comme l\'huile, la graisse, le beurre, le savon ou la saleté.' },
            { t: 'ul', v: ['Le contact avec de la terre, de la boue ou du sol salin (sabkha) ne remet pas en cause la validité de l\'eau.', 'L\'eau altérée uniquement par de la vase ou de l\'argile naturelle reste valide.', 'Seule l\'altération par des substances séparables de l\'eau par nature (corps gras, produits ménagers…) est problématique.'] },
            { t: 'ar', v: 'الطهارةُ قِسمانِ : طهارةُ حَدَثٍ وطهارةُ خَبَثٍ. ولا يصحُّ الجميعُ إلّا بالماءِ الطاهرِ المُطهِّر', n: '« La purification est de deux types : purification du الحَدَث et purification du الخَبَث. Aucune des deux n\'est valide que par l\'eau pure et purifiante. » — Mukhtaṣar al-Akhḍarī' }
          ]
        },

        /* ── Leçon 2 ── */
        {
          id: 'pur-02',
          title: 'La Gestion des Souillures Physiques (الخَبَث)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Lorsqu\'Najāsa (النَّجَاسَة) atteint le corps, le vêtement ou le lieu de prière, l\'école malikite prescrit des règles précises selon que la souillure est certaine, localisée ou incertaine.' },
            { t: 'h', v: 'Souillure localisée avec certitude' },
            { t: 'p', v: 'Si l\'Najāsa (النَّجَاسَة) est connu et délimité, il suffit de laver cet emplacement précis. Inutile de laver l\'ensemble du vêtement ou du corps.' },
            { t: 'h', v: 'Souillure incertaine ou dispersée' },
            { t: 'p', v: 'Si l\'on sait qu\'Najāsa (النَّجَاسَة) a atteint le vêtement mais qu\'on ne peut pas en localiser l\'endroit exact, il faut laver l\'ensemble du vêtement.' },
            { t: 'h', v: 'Najāsa (النَّجَاسَة)' },
            { t: 'p', v: 'Si l\'on doute d\'avoir été Najāsa (النَّجَاسَة) (sans certitude), il suffit d\'asperger la zone d\'eau (naḍḥ). En revanche, si l\'on doute qu\'Najāsa (النَّجَاسَة) ou non, aucun naḍḥ n\'est requis.' },
            { t: 'h', v: 'Découverte d\'Najāsa (النَّجَاسَة) pendant ou après la prière' },
            { t: 'ul', v: [
              'Découverte pendant la prière : interrompre la prière, sauf si l\'on craint la sortie du temps — dans ce cas on la continue.',
              'Prié Najāsa (النَّجَاسَة) par oubli, souvenu après le salām : répéter la prière dans son temps (avant la fin du temps de cette prière).',
              'Après sortie du temps : la prière n\'est pas répétée.'
            ] },
            { t: 'note', v: 'Principe clé : le doute ne crée pas d\'impureté. Seule la certitude (ou la quasi-certitude) Najāsa (النَّجَاسَة) impose de laver.' }
          ]
        },

        /* ── Leçon 3 ── */
        {
          id: 'pur-03',
          title: 'Wuḍūʾ (الوُضُوء)\' — Farāʾiḍ (الفَرَائِض)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Wuḍūʾ (الوُضُوء)\' (ablutions mineures) est l\'acte de purification rituelle qui remet en éṬahāra (الطَّهَارَة) après un حَدَثٌ أَصْغَر. Selon l\'école malikite, Farāʾiḍ (الفَرَائِض) incontournables.' },
            { t: 'ar', v: 'فرائضُ الوضوءِ سَبعٌ : النيّةُ، وغسلُ الوجهِ، وغسلُ اليدينِ إلى المِرفَقَينِ، ومسحُ الرأسِ، وغسلُ الرِّجلَينِ إلى الكَعبَينِ، والدَّلكُ، والفَورُ', n: '« Les obligations du al-wuḍūʾ (الوُضُوء)\' sont au nombre de sept. » — Mukhtaṣar al-Akhḍarī' },
            { t: 'h', v: 'Farāʾiḍ (الفَرَائِض)' },
            { t: 'ul', v: [
              '<strong>1. L\'Niyya (النِّيَّة)</strong> — formée dans le cœur au moment de commencer.',
              '<strong>2. Le lavage du visage</strong> — de la racine des cheveux au bas du menton, d\'une oreille à l\'autre.',
              '<strong>3. Le lavage des deux bras jusqu\'aux coudes</strong> — les coudes inclus.',
              '<strong>4. L\'essuyage de la tête (masḥ)</strong> — l\'ensemble de la tête, non une partie seulement.',
              '<strong>5. Le lavage des deux pieds jusqu\'aux chevilles</strong> — les chevilles incluses.',
              '<strong>6. Le frottement (الدَّلْك)</strong> — passer la main sur les membres lors du lavage, contrairement à d\'autres écoles.',
              '<strong>7. L\'enchaînement immédiat (الفَوْر)</strong> — enchainer les membres sans laisser le premier sécher avant de passer au suivant.'
            ] },
            { t: 'h', v: 'Sunna (السُّنَّة) Wuḍūʾ (الوُضُوء)\'' },
            { t: 'ul', v: [
              'Laver les mains jusqu\'aux poignets (kuʿayn) avant de commencer.',
              'Se rincer la bouche (maḍmaḍa) et les narines (istinshāq), puis les expulser (istinthār).',
              'Reprendre le masḥ en sens inverse (aller-retour sur la tête).',
              'Essuyer les deux oreilles avec une eau renouvelée.',
              'Respecter l\'ordre entre les obligations (tartīb).'
            ] },
            { t: 'h', v: 'Les vertus et recommandations (faḍāʾil)' },
            { t: 'ul', v: [
              'Dire la Basmala (بسم الله) au début.',
              'Utiliser le siwāk (brosse à dents naturelle).',
              'Passer plus d\'une fois sur le visage et les bras (jusqu\'à 3 fois).',
              'Commencer le masḥ par l\'avant de la tête.',
              'Économiser l\'eau et donner la priorité au côté droit sur le gauche.'
            ] },
            { t: 'h', v: 'Obligation d\'entrelacement des doigts' },
            { t: 'p', v: 'Il est obligatoire d\'Wuḍūʾ (الوُضُوء)\' (recommandé pour les orteils). La barbe légère (خَفِيفَة, où la peau est visible) doit être peignéWuḍūʾ (الوُضُوء)\' ; la barbe épaisse, non. En revanche, lors du Ghusl (الغُسْل), même la barbe épaisse doit être traversée par l\'eau.' },
            { t: 'note', v: 'Si l\'on oublie une obligation et s\'en souvient rapidement : on l\'exécute ainsi que ce qui la suit. Si c\'est après un long délai : on exécute uniquement cet acte et on répète les prières accomplies entre-temps.' }
          ]
        },

        /* ── Leçon 4 ── */
        {
          id: 'pur-04',
          title: 'Wuḍūʾ (الوُضُوء)\' (Nawāqiḍ)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Certains actes et éWuḍūʾ (الوُضُوء)\' et nécessitent de le renouveler avant toute prière ou acte soumis à la condition de pureté rituelle. L\'école malikite les divise en deux catégories : les الأَحْدَاث (causes directes) et les أَسبَاب (causes indirectes).' },
            { t: 'h', v: 'Les الأَحْدَاث — Causes directes' },
            { t: 'ul', v: [
              '<strong>L\'urine (البَوْل)</strong> et <strong>les matières fécales (الغَائِط)</strong>.',
              '<strong>Le vent (rīḥ)</strong> — gaz intestinaux.',
              '<strong>Le المَذْي</strong> — liquide clair qui s\'écoule lors d\'un désir léger (pensée, regard…).',
              '<strong>Le الوَدْي</strong> — liquide blanc épais qui suit parfois l\'urine.'
            ] },
            { t: 'h', v: 'Les أَسبَاب — Causes indirectes (occasionnelles)' },
            { t: 'ul', v: [
              '<strong>Le sommeil profond (النَّوم الثَّقِيل)</strong> — le sommeil léWuḍūʾ (الوُضُوء)\'.',
              '<strong>L\'évanouissement (ighmaʾ)</strong>, <strong>l\'ivresse (sukr)</strong> et <strong>la folie (junūn)</strong>.',
              '<strong>Le baiser</strong> avec désir ou plaisir ressenti.',
              '<strong>Le toucher d\'une femme</strong> si l\'on cherche le plaisir ou qu\'on le ressent.',
              '<strong>Le toucher du pénis</strong> avec l\'intérieur de la paume ou des doigts.'
            ] },
            { t: 'h', v: 'Règle sur le doute' },
            { t: 'p', v: 'Si l\'on doute d\'avoir eu un ḤḤadath (الحَدَث), on est obligé Wuḍūʾ (الوُضُوء)\'. Exception : celui qui souffre de scrupules obsessionnels (الوَسْوَاس) — il n\'est pas astreint à Wuḍūʾ (الوُضُوء)\' à chaque doute, car agir ainsi aggraverait son état.' },
            { t: 'h', v: 'Le المَذْي — règle spécifique' },
            { t: 'p', v: 'Après le المَذْي, il est obligatoire de laver l\'ensemble du pénis, mais pas les testicules. Wuḍūʾ (الوُضُوء)\' doit être renouvelé.' },
            { t: 'h', v: 'Wuḍūʾ (الوُضُوء)\'' },
            { t: 'ul', v: [
              'La prièṢalāt (الصَّلَاة) et le ṬṬawāf (الطَّوَاف).',
              'Toucher le texte du Coran — de la main, d\'un stylet ou d\'un autre objet. Seul le fascicule utilisé par un étudiant (juzʾ en cours d\'apprentissage) est exempté.',
              'Toucher une tablette coranique — sauf pour l\'enseignant qui corrige ou l\'élève en train d\'apprendre.',
              'Prier délibéréWuḍūʾ (الوُضُوء)\' est un acte de kufr (incrédulité) — qu\'Allāh nous en préserve.'
            ] },
            { t: 'ar', v: 'مَن صلّى بغيرِ وضوءٍ عامداً فهو كافرٌ والعياذُ بالله', n: '« Celui qui prie délibérément sans ablutions est un infidèle — qu\'Allāh nous en préserve. » — al-Akhḍarī' }
          ]
        },

        /* ── Leçon 5 ── */
        {
          id: 'pur-05',
          title: 'La Purification Complète — Le Ghusl (الغُسْل)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Le Ghusl (الغُسْل) est la purification majeure qui consiste à se laver entièrement le corps. Il est obligatoire dans trois situations. L\'éFarāʾiḍ (الفَرَائِض).' },
            { t: 'h', v: 'Les trois causes qui rendent le Ghusl (الغُسْل) obligatoire' },
            { t: 'ul', v: [
              '<strong>Janāba (الجَنَابَة)</strong> — impureté sexuelle majeure, qui survient dans deux cas :<br>① L\'émission de المَنِي (semence) avec un plaisir habituel, en sommeil ou en état d\'éveil, par rapport sexuel ou autrement.<br>② La pénétration (ighyāb al-ḥashafa fi\'l-farj) même sans émission.',
              '<strong>Le الحَيْض</strong> — les menstrues, à leur arrêt.',
              '<strong>Nifās (النِّفَاس)</strong> — le saignement post-natal, à son arrêt.'
            ] },
            { t: 'h', v: 'Janāba (الجَنَابَة)' },
            { t: 'ul', v: [
              'Rêve de rapport sexuel sans émission de المَنِي : aucun Ghusl (الغُسْل) requis.',
              'Trouver du المَنِي sec dans son vêtement sans savoir quand il est survenu : faire le Ghusl (الغُسْل) et répéter les prières accomplies depuis le dernier sommeil dans ce vêtement.'
            ] },
            { t: 'h', v: 'Farāʾiḍ (الفَرَائِض) du Ghusl (الغُسْل)' },
            { t: 'ul', v: [
              '<strong>1. L\'Niyya (النِّيَّة)</strong> — au moment de commencer.',
              '<strong>2. L\'enchaînement immédiat (الفَوْر)</strong> — laver tout le corps de suite, sans interruption qui ferait sécher un membre.',
              '<strong>3. Le frottement (الدَّلْك)</strong> — frotter la peau avec la main lors du lavage.',
              '<strong>4. La généralisation (ʿumūm)</strong> — l\'eau doit atteindre tout le corps sans exception, y compris les cheveux même épais (Wuḍūʾ (الوُضُوء)\').'
            ] },
            { t: 'h', v: 'Sunna (السُّنَّة) du Ghusl (الغُسْل)' },
            { t: 'ul', v: [
              'Laver les mains jusqu\'Wuḍūʾ (الوُضُوء)\'.',
              'Se rincer la bouche, les narines et les expulser.',
              'Laver le conduit auditif (ṣamākh) — le trou interne de l\'oreille.',
              'Quant au pavillon de l\'oreille (ṣafḥa), il est obligatoire de laver son extérieur et son intérieur.'
            ] },
            { t: 'h', v: 'L\'ordre recommandé (faḍāʾil)' },
            { t: 'ul', v: [
              'Najāsa (النَّجَاسَة) éventuelle.',
              'Puis les organes génitaux — c\'est le moment de formuler l\'intention.',
              'Wuḍūʾ (الوُضُوء)\' une fois.',
              'Puis le reste du corps en commençant par la partie supérieure.',
              'Tripler le lavage de la tête et commencer par le côté droit.'
            ] },
            { t: 'h', v: 'Oubli d\'un membre ou d\'une zone' },
            { t: 'p', v: 'Si l\'on a oublié de laver une zone lors du Ghusl (الغُسْل), on se précipite pour la laver dès qu\'on s\'en souvient — même après un mois — et on répète les prières accomplies depuis. Si l\'on diffère après s\'en être souvenu, le Ghusl (الغُسْل) entier est invalidé.' },
            { t: 'h', v: 'Interdictions pour le junub (en état de الجَنَابَة)' },
            { t: 'ul', v: [
              'Entrer dans la mosquée.',
              'Réciter le Coran (sauf un verset isolé pour le taʿawwudh ou la protection).'
            ] },
            { t: 'ar', v: 'فرائضُ al-ghusl (الغُسل)ِ : النيّةُ عندَ الشروعِ، والفَورُ، والدَّلكُ، والعُمومُ', n: '« Les obligations du Ghusl (الغُسْل) : l\'intention au moment de commencer, l\'enchaînement immédiat, le frottement et la généralisation. » — Mukhtaṣar al-Akhḍarī' }
          ]
        },

        /* ── Leçon 6 ── */
        {
          id: 'pur-06',
          title: 'Tayammum (التَّيَمُّم) — Purification par le Sol',
          status: 'available',
          content: [
            { t: 'lead', v: 'Tayammum (التَّيَمُّم) est la purification rituelle de substitution utilisant un sol pur (الصَّعِيد) en l\'absence d\'eau ou en cas d\'incapacité à l\'utiliser. L\'école malikite en précise les bénéficiaires, les matières valides et les obligations.' },
            { t: 'h', v: 'Tayammum (التَّيَمُّم) ?' },
            { t: 'ul', v: [
              '<strong>Le voyageur</strong> ne voyageant pas dans un but illicite — pour toute prière obligatoire ou surérogatoire.',
              '<strong>Le malade</strong> — pour toute prière obligatoire ou surérogatoire.',
              '<strong>Le résidant en bonne santé</strong> — uniquement pour les prières obligatoires dont il craint la sortie du temps si l\'on attend l\'eau.',
              'Le résidant en bonne santé <em>ne peut pas</em> Tayammum (التَّيَمُّم) pour une prière surérogatoire, la prière du vendredi (jumuʿa) ou la prière funéraire, sauf si la prière funéraire est obligatoire de son fait spécifiquement.'
            ] },
            { t: 'h', v: 'Farāʾiḍ (الفَرَائِض) Tayammum (التَّيَمُّم)' },
            { t: 'ul', v: [
              '<strong>L\'Niyya (النِّيَّة)</strong>.',
              '<strong>Un sol pur (الصَّعِيد ṭāhir)</strong>.',
              '<strong>L\'essuyage du visage</strong>.',
              '<strong>L\'essuyage des deux mains jusqu\'aux poignets (kuʿayn)</strong>.',
              '<strong>Une première frappe sur le sol</strong>.',
              '<strong>L\'enchaînement immédiat (الفَوْر)</strong>.',
              '<strong>L\'entrée dans le temps de la prière</strong> et la continuité avec celle-ci.'
            ] },
            { t: 'h', v: 'Les matières valides pour le الصَّعِيد' },
            { t: 'ul', v: [
              '<strong>Valides :</strong> la terre, la brique crue, la pierre, la neige, la boue humide (khakhdāẓ).',
              '<strong>Non valides :</strong> le plâtre cuit (jiss maṭbūkh), la natte, le bois, l\'herbe.',
              'Exception : le malade peut utiliser un mur de pierre ou de brique crue s\'il ne peut faire amener autre chose.'
            ] },
            { t: 'h', v: 'Ce qu\'Tayammum (التَّيَمُّم) permet' },
            { t: 'ul', v: [
              'Tayammum (التَّيَمُّم) obligatoire (pour une farīḍa) permet aussi les prières surérogatoires après, et de toucher le Coran, le ṬṬawāf (الطَّوَاف) et la récitation — à condition que cela ait été dans l\'intention et que le temps ne soit pas sorti.',
              'Tayammum (التَّيَمُّم) ne permet pas d\'accomplir deux prières obligatoires.',
              'Janāba (الجَنَابَة) : l\'intention doit spéJanāba (الجَنَابَة).'
            ] },
            { t: 'h', v: 'Tayammum (التَّيَمُّم)' },
            { t: 'p', v: 'Les mêWuḍūʾ (الوُضُوء)\', avec en plus : trouver de l\'eau ou avoir la capacité de l\'utiliser.' },
            { t: 'ar', v: 'ويتيمّمُ المسافرُ في غيرِ معصيةٍ، والمريضُ لفريضةٍ أو نافلةٍ، ويتيمّمُ الحاضرُ الصحيحُ للفرائضِ إذا خافَ خروجَ وقتِها', n: '« Le al-tayammum (التَّيَمُّم) est permis au voyageur non en état de désobéissance, au malade pour toute prière, et au résidant sain pour les prières obligatoires dont il craint la sortie du temps. » — al-Akhḍarī' }
          ]
        },

        /* ── Leçon 7 ── */
        {
          id: 'pur-07',
          title: 'Le الحَيْض Nifās (النِّفَاس)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Le الحَيْض (menstrues) Nifās (النِّفَاس) (saignement post-natal) sont deux états féminins qui entraînent un حَدَثٌ أَكْبَر et imposent de nombreuses interdictions temporaires. L\'école malikite définit leurs durées et leurs règles en détail.' },
            { t: 'h', v: 'Les trois catégories de femmes en matière de الحَيْض' },
            { t: 'ul', v: [
              '<strong>La mubiadaʾa</strong> (première expérience) : durée maximale du الحَيْض = 15 jours.',
              '<strong>La muʿtāda</strong> (cycle habituel établi) : elle suit son cycle habituel. Si le sang persiste, elle peut ajouter 3 jours, sans dépasser 15 jours au total.',
              '<strong>La ḥāmil</strong> (femme enceinte) : après 3 mois de grossesse, maximum 15 jours ; après 6 mois, maximum 20 jours. Si le sang s\'interrompt, elle cumule les jours jusqu\'à atteindre son cycle habituel.'
            ] },
            { t: 'h', v: 'Interdictions pendant le الحَيْض' },
            { t: 'ul', v: [
              'La prièṢalāt (الصَّلَاة) — pas de rattrapage.',
              'Le jeûne (الصَّوْم) — à rattraper obligatoirement.',
              'Le ṬṬawāf (الطَّوَاف).',
              'Toucher le Coran.',
              'Entrer dans la mosquée.',
              'Le rapport sexuel, et tout contact entre le nombril et les genoux — jusqu\'au Ghusl (الغُسْل).'
            ] },
            { t: 'h', v: 'Ce qui est permis pendant le الحَيْض' },
            { t: 'p', v: 'La récitation du Coran de mémoire (sans le toucher) est permise à la femme menstruée selon l\'école malikite. Elle doit rattraper les jours de jeûne mais pas les prières.' },
            { t: 'h', v: 'Nifās (النِّفَاس) — saignement post-natal' },
            { t: 'ul', v: [
              'Nifās (النِّفَاس) sont identiques à celles du الحَيْض.',
              'Durée maximale : <strong>60 jours</strong>.',
              'Si le sang s\'arrête avant — même le jour de l\'accouchement — la femme fait le Ghusl (الغُسْل) et reprend ses prières immédiatement.',
              'Si le sang revient après un arrêt : s\'il s\'est écoulé 15 jours ou plus entre les deux saignements → le second est un nouveau الحَيْض ; s\'il s\'est écoulé moins de 15 jours → il s\'Nifās (النِّفَاس).'
            ] },
            { t: 'ar', v: 'النفاسُ كالحيضِ في مَنعِه. وأكثرُه ستّونَ يوماً', n: '« Le النِّفَاس est identique au الحَيْض dans ses interdictions. Sa durée maximale est de soixante jours. » — Mukhtaṣar al-Akhḍarī' },
            { t: 'note', v: 'Important : dans le rite malikite, la femme menstruée n\'a pas à rattraper les prières manquées pendant ses règles, à la différence du jeûne. C\'est une miséricorde divine pour alléger sa situation.' }
          ]
        },

        {
          id: "pur-08",
          title: "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u2014 Nettoyage Intime apr\u00e8s le Passage aux Toilettes",
          status: "available",
          content: [
          {"t": "lead", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 est le nettoyage obligatoire des parties intimes apr\u00e8s la sortie d'urine (\u0628\u064e\u0648\u0652\u0644) ou de selles (\u063a\u064e\u0627\u0626\u0650\u0637). Il constitue le pr\u00e9alable indispensable au \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 et au \u0627\u0644\u063a\u064f\u0633\u0652\u0644 selon l'Akh\u1e0dar\u012b. Il s'effectue soit \u00e0 l'eau (\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u0628\u0650\u0627\u0644\u0645\u064e\u0627\u0621) soit avec des pierres ou \u00e9quivalents (\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631)."},
          {"t": "h", "v": "Obligation de l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621"},
          {"t": "p", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 est obligatoire (\u0648\u064e\u0627\u062c\u0650\u0628) apr\u00e8s toute sortie d'urine ou de selles. Il est accompli AVANT le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 c'est la s\u00e9quence correcte : \u0642\u0636\u0627\u0621 \u0627\u0644\u062d\u0627\u062c\u0629 \u2192 \u0627\u0633\u062a\u0646\u062c\u0627\u0621 \u2192 \u0648\u0636\u0648\u0621. Omettre l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 alors que la zone est souill\u00e9e rend le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 insuffisant pour la pri\u00e8re."},
          {"t": "h", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u00e0 l'eau"},
          {"t":"ul","v":[
            "M\u00e9thode pr\u00e9f\u00e9r\u00e9e et la plus compl\u00e8te.",
            "Utiliser de l'eau propre pour laver la zone souill\u00e9e jusqu'\u00e0 \u00e9limination compl\u00e8te de la souillure.",
            "La main gauche (uniquement) est utilis\u00e9e pour le lavage \u2014 il est makr\u016bh d'utiliser la main droite pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621.",
            "On peut combiner eau et pierres : commencer par les pierres (\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631) pour enlever la mati\u00e8re, puis finir \u00e0 l'eau pour nettoyer."
          ]},
          {"t": "h", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 \u2014 pierres, papier et \u00e9quivalents"},
          {"t": "p", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 consiste \u00e0 utiliser des mati\u00e8res s\u00e8ches solides (pierres, papier non glac\u00e9, tissu propre\u2026) \u00e0 la place de l'eau. Il est permis mais l'eau reste pr\u00e9f\u00e9rable."},
          {"t":"ul","v":[
            "<strong>Nombre minimum :</strong> 3 essuyages (trois pierres ou trois passages), en nombre impair. Si 3 ne suffisent pas \u00e0 nettoyer, on continue jusqu'\u00e0 propret\u00e9.",
            "<strong>Interdictions :</strong> utiliser un os (\u0646\u0647\u064a \u0627\u0644\u0646\u0628\u064a \ufdfa \u2014 nourriture des djinns), de la nourriture, du fumier s\u00e9ch\u00e9, des mati\u00e8res sacr\u00e9es, des objets pr\u00e9cieux.",
            "<strong>Interdiction :</strong> utiliser la main droite pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631.",
            "<strong>Condition :</strong> la mati\u00e8re doit absorber et nettoyer r\u00e9ellement \u2014 pas de verre, m\u00e9tal ou surface non absorbante.",
            "Si la souillure a d\u00e9pass\u00e9 la zone habituelle (\u0630\u064e\u0631\u064e\u0648\u0631 \u2014 \u00e9tendue), l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 seul ne suffit plus : l'eau est obligatoire."
          ]},
          {"t": "h", "v": "R\u00e8gles concernant la \u0642\u0650\u0628\u0652\u0644\u064e\u0629 (direction de pri\u00e8re)"},
          {"t": "p", "v": "Il est interdit de faire face \u00e0 la \u0642\u0650\u0628\u0652\u0644\u064e\u0629 ou de lui tourner le dos lors du \u0642\u0636\u0627\u0621 \u0627\u0644\u062d\u0627\u062c\u0629 en plein air. Dans un b\u00e2timent (WC), les savants malikites ont g\u00e9n\u00e9ralement lev\u00e9 cette interdiction, bien que le respect de la \u0642\u0650\u0628\u0652\u0644\u064e\u0629 reste recommand\u00e9."},
          {"t": "ar", "v": "\u0644\u064e\u0627 \u062a\u064e\u0633\u0652\u062a\u064e\u0642\u0628\u0650\u0644\u064f\u0648\u0627 \u0627\u0644\u0642\u0650\u0628\u0644\u064e\u0629\u064e \u0628\u0650\u063a\u064e\u0627\u0626\u0650\u0637\u064d \u0648\u064e\u0644\u064e\u0627 \u0628\u064e\u0648\u0644\u064d \u0648\u064e\u0644\u064e\u0627 \u062a\u064e\u0633\u062a\u064e\u062f\u0628\u0650\u0631\u064f\u0648\u0647\u064e\u0627", "n": "\u00ab Ne faites pas face \u00e0 la القِبْلَة ni ne lui tournez le dos lors du passage aux toilettes. \u00bb \u2014 Had\u012bth rapport\u00e9 par al-Bukh\u0101r\u012b et Muslim"},
          {"t": "h", "v": "Autres r\u00e8gles pratiques"},
          {"t":"ul","v":[
            "Ne pas uriner dans de l'eau stagnante.",
            "Ne pas uriner debout sauf n\u00e9cessit\u00e9 \u2014 le rite malikite recommande la position accroupie.",
            "S'\u00e9loigner et se cacher des regards.",
            "Il est makr\u016bh de parler pendant le \u0642\u0636\u0627\u0621 \u0627\u0644\u062d\u0627\u062c\u0629 sauf n\u00e9cessit\u00e9.",
            "Il est d\u00e9conseill\u00e9 de porter sur soi une mention d'Allah ou le Coran lors du passage aux toilettes \u2014 on peut le poser ou le prot\u00e9ger."
          ]},
          {"t": "note", "v": "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u00e9l\u00e8ve l'impuret\u00e9 physique (\u0627\u0644\u062e\u064e\u0628\u064e\u062b) \u2014 il ne l\u00e8ve pas l'impuret\u00e9 rituelle (\u0627\u0644\u062d\u064e\u062f\u064e\u062b). Il faut ensuite faire le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 pour lever le \u062d\u064e\u062f\u064e\u062b. Les deux \u00e9tapes sont distinctes et s\u00e9quentielles."}
          ]
        },
        {
          id: "pur-09",
          title: "\u0627\u0644\u0645\u064e\u0633\u0652\u062d \u0639\u0644\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 \u0648\u0627\u0644\u062c\u064e\u0628\u0650\u064a\u0631\u064e\u0629 \u2014 Essuyage sur les Chaussures et Pansements",
          status: "available",
          content: [
          {"t": "lead", "v": "Le rite malikite autorise deux formes d'essuyage (\u0645\u064e\u0633\u0652\u062d) qui remplacent le lavage habituel : le \u0645\u064e\u0633\u0652\u062d sur les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 (chaussures de cuir) pour les pieds, et le \u0645\u064e\u0633\u0652\u062d sur la \u062c\u064e\u0628\u0650\u064a\u0631\u064e\u0629 (pansement/pl\u00e2tre) pour un membre bless\u00e9. Ces deux dispenses reposent sur des textes authentiques et r\u00e9pondent \u00e0 des besoins pratiques r\u00e9els."},
          {"t": "h", "v": "\u0627\u0644\u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 \u2014 Essuyage sur les chaussures de cuir"},
          {"t": "p", "v": "Il est permis de remplacer le lavage des pieds dans le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 par le passage des mains mouill\u00e9es (\u0645\u064e\u0633\u0652\u062d) sur les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 (chaussures en cuir cousu couvrant les chevilles). <strong>Sp\u00e9cificit\u00e9 malikite fondamentale : ce mash n'est pas limit\u00e9 dans le temps</strong> \u2014 contrairement aux \u00e9coles hanafite et ch\u0101fi\u02bfite qui fixent 24h pour le r\u00e9sident et 72h pour le voyageur."},
          {"t": "ar", "v": "\u0627\u0644\u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646\u0650 \u062c\u064e\u0627\u0626\u0650\u0632\u064c \u0644\u0650\u0644\u0645\u064f\u0633\u064e\u0627\u0641\u0650\u0631\u0650 \u0648\u064e\u0627\u0644\u062d\u064e\u0627\u0636\u0650\u0631\u0650 \u0648\u064e\u0644\u064e\u0627 \u064a\u064e\u062a\u064e\u0642\u064e\u064a\u064e\u0651\u062f\u064f \u0628\u0650\u0645\u064f\u062f\u064e\u0651\u0629\u064d \u0641\u0650\u064a \u0627\u0644\u0645\u064e\u0630\u0647\u064e\u0628\u0650 \u0627\u0644\u0645\u064e\u0627\u0644\u0650\u0643\u0650\u064a", "n": "\u00ab L'essuyage sur les الخُفَّيْن est permis pour le voyageur et le r\u00e9sident, sans \u00eatre limit\u00e9 dans le temps dans le rite malikite. \u00bb \u2014 Al-Jaz\u012br\u012b, الفِقْه \u02bfal\u0101 al-madh\u0101hib al-arba\u02bfa"},
          {"t": "h", "v": "Conditions des \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646"},
          {"t":"ul","v":[
            "<strong>1. Mati\u00e8re :</strong> le cuir doit \u00eatre pr\u00e9dominant \u2014 au minimum le dessous (semelle) et le dessus en cuir cousu (\u0645\u064e\u062e\u0631\u064f\u0648\u0632), non coll\u00e9.",
            "<strong>2. Couverture :</strong> doivent couvrir les chevilles et les inclure.",
            "<strong>3. \u00c9tat d'ablution \u00e0 l'enfilage :</strong> avoir les pieds lav\u00e9s (en \u00e9tat de \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 humide) au moment o\u00f9 on les enfile \u2014 pas de mash si enfil\u00e9s sans ablution.",
            "<strong>4. Propret\u00e9 :</strong> ne pas contenir de souillure (\u0646\u064e\u062c\u064e\u0627\u0633\u064e\u0629).",
            "<strong>5. Int\u00e9grit\u00e9 :</strong> non d\u00e9chir\u00e9s sur 1/3 du pied ou plus.",
            "<strong>6. Continuit\u00e9 :</strong> ne plus les enlever (si on les enl\u00e8ve, les r\u00e8gles de r\u00e9enfilage s'appliquent)."
          ]},
          {"t": "h", "v": "Comment effectuer le \u0645\u064e\u0633\u0652\u062d"},
          {"t":"ul","v":[
            "Passer les mains mouill\u00e9es UNE FOIS sur le dessus des \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 (pas en dessous).",
            "C'est suffisant \u2014 pas besoin de laver ni d'essuyer le dessous.",
            "La main droite essuie le \u0643\u064f\u0641\u0651 droit, la main gauche essuie le \u0643\u064f\u0641\u0651 gauche."
          ]},
          {"t": "h", "v": "Ce qui invalide le \u0645\u064e\u0633\u0652\u062d"},
          {"t":"ul","v":[
            "<strong>Enlever les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 :</strong> si on les enl\u00e8ve apr\u00e8s avoir fait le \u0645\u064e\u0633\u0652\u062d \u2192 laver imm\u00e9diatement les pieds (sinon refaire \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 complet si long d\u00e9lai).",
            "<strong>\u00c9tat de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 :</strong> le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 oblige \u00e0 laver les pieds directement \u2014 plus de \u0645\u064e\u0633\u0652\u062d sur les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646.",
            "<strong>D\u00e9chirure d\u00e9passant 1/3 :</strong> invalide les conditions.",
            "Le \u0645\u064e\u0633\u0652\u062d reste valide tant que les conditions sont r\u00e9unies, sans limite de temps."
          ]},
          {"t": "h", "v": "\u0627\u0644\u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062c\u064e\u0628\u0650\u064a\u0631\u064e\u0629 \u2014 Essuyage sur le pansement ou pl\u00e2tre"},
          {"t": "p", "v": "En cas de blessure, fracture ou plaie qui emp\u00eache d'utiliser l'eau sur un membre, on fait l'ablution normalement sur tous les membres sains et on essuie (\u0645\u064e\u0633\u0652\u062d) le pansement/bandage/pl\u00e2tre sur le membre malade au lieu de le laver."},
          {"t":"ul","v":[
            "On fait l'ablution (\u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ou \u0627\u0644\u063a\u064f\u0633\u0652\u0644) normalement pour tous les autres membres.",
            "Arriv\u00e9 au membre bless\u00e9 : passer la main mouill\u00e9e UNE FOIS sur le pansement/pl\u00e2tre.",
            "Si m\u00eame l'essuyage direct sur le pansement risque de nuire \u00e0 la blessure : essuyer le bandage qui le recouvre.",
            "<strong>Le pansement doit rester en place jusqu'\u00e0 la fin de la pri\u00e8re</strong> \u2014 si retir\u00e9 avant la fin, refaire le \u0645\u064e\u0633\u0652\u062d et reprendre la pri\u00e8re.",
            "D\u00e8s que la blessure gu\u00e9rit et qu'on enl\u00e8ve le pl\u00e2tre : revenir au lavage normal avec l'eau.",
            "Cette dispense s'applique aussi bien dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 que dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          ]},
          {"t": "h", "v": "Fronti\u00e8re entre \u0645\u064e\u0633\u0652\u062d et \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour le bless\u00e9"},
          {"t":"ul","v":[
            "Si le fait de laver les membres SAINS eux-m\u00eames provoque un pr\u00e9judice ou un risque \u2192 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645.",
            "Si la grande majorit\u00e9 du corps est bless\u00e9e et qu'il ne reste qu'un pied ou une main de sain \u2192 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 est obligatoire.",
            "Sinon : \u0645\u064e\u0633\u0652\u062d sur le pansement, lavage du reste."
          ]},
          {"t": "note", "v": "La le\u00e7on de l'Im\u0101m M\u0101lik (d'apr\u00e8s la المُدَوَّنَة) : il lave les membres qu'il peut laver, essuie ce qui est bless\u00e9, ou essuie le bandage s'il ne peut pas essuyer directement la blessure. Le principe est la gradation : eau \u2192 \u0645\u064e\u0633\u0652\u062d direct \u2192 \u0645\u064e\u0633\u0652\u062d sur bandage \u2192 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645."}
          ]
        },

      ], /* fin lessons purification */

      quiz: {
        id: 'quiz-purification',
        title: 'Questionnaire — La Purification',
        status: 'available',
        score: null,
        questions: [
          {
            id: "q-pur-01",
            text: "En combien de types la <strong>\u0627\u0644\u0637\u064e\u0651\u0647\u064e\u0627\u0631\u064e\u0629</strong> est-elle divis\u00e9e selon le rite malikite ?",
            choices: [
              {id:"a",text:"Un seul : la puret\u00e9 rituelle"},
              {id:"b",text:"Deux : <strong>\u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062d\u064e\u062f\u064e\u062b\u0650</strong> (impuret\u00e9 rituelle) et <strong>\u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062e\u064e\u0628\u064e\u062b\u0650</strong> (souillure physique)"},
              {id:"c",text:"Trois : corporelle, vestimentaire et spatiale"},
              {id:"d",text:"Quatre, selon les quatre membres du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            ],
            correctId: "b",
            explanation: "La \u0627\u0644\u0637\u064e\u0651\u0647\u064e\u0627\u0631\u064e\u0629 comprend deux types : \u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062d\u064e\u062f\u064e\u062b\u0650 \u2014 \u00e9limination de l'impuret\u00e9 rituelle par \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, \u0627\u0644\u063a\u064f\u0633\u0652\u0644 ou \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 ; et \u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062e\u064e\u0628\u064e\u062b\u0650 \u2014 \u00e9limination des souillures physiques (\u0627\u0644\u0646\u064e\u0651\u062c\u064e\u0627\u0633\u064e\u0629) du corps, v\u00eatement et lieu de pri\u00e8re."
          },
          {
            id: "q-pur-02",
            text: "Combien d'obligations (\u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636) compte le <strong>\u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621</strong> selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"5"},
              {id:"b",text:"6"},
              {id:"c",text:"7"},
              {id:"d",text:"9"},
            ],
            correctId: "c",
            explanation: "Les sept \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629, \u063a\u0633\u0644 \u0627\u0644\u0648\u062c\u0647, \u063a\u0633\u0644 \u0627\u0644\u064a\u062f\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0641\u0642\u064a\u0646, \u0645\u0633\u062d \u0627\u0644\u0631\u0623\u0633, \u063a\u0633\u0644 \u0627\u0644\u0631\u062c\u0644\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u0643\u0639\u0628\u064a\u0646, \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643 (frottement) et \u0627\u0644\u0641\u064e\u0648\u0652\u0631 (encha\u00eenement imm\u00e9diat sans laisser s\u00e9cher un membre)."
          },
          {
            id: "q-pur-03",
            text: "Le <strong>\u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643</strong> (frottement de la peau lors du lavage) est dans le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 malikite :",
            choices: [
              {id:"a",text:"Sunna (السُّنَّة)"},
              {id:"b",text:"Une vertu (\u0641\u064e\u0636\u0650\u064a\u0644\u064e\u0629)"},
              {id:"c",text:"Une obligation (\u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629)"},
              {id:"d",text:"Un acte d\u00e9conseill\u00e9 dans certains cas"},
            ],
            correctId: "c",
            explanation: "Le \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643 est une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629 du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 selon le rite malikite, \u00e0 la diff\u00e9rence des \u00e9coles hanafite et ch\u0101fi\u02bfite. Ne pas frotter ses membres intentionnellement invalide le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. C'est l'une des particularit\u00e9s les plus importantes du rite malikite."
          },
          {
            id: "q-pur-04",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim a fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 et oubli\u00e9 d'essuyer ses oreilles. Doit-il refaire sa pri\u00e8re ?",
            choices: [
              {id:"a",text:"Oui, l'essuyage des oreilles est une obligation du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"b",text:"Non, c'Sunna (السُّنَّة) \u2014 la pri\u00e8re reste valide"},
              {id:"c",text:"Oui s'il s'en souvient encore dans le temps de cette pri\u00e8re"},
              {id:"d",text:"Oui car il faut refaire le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 complet"},
            ],
            correctId: "b",
            explanation: "L'essuyage des oreilles (\u0645\u0633\u062d \u0627\u0644\u0623\u0630\u0646\u064a\u0646) Sunna (السُّنَّة) du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, non une obligation. Sunna (السُّنَّة) n'invalide ni les ablutions ni la pri\u00e8re. Seules les sept \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 sont obligatoires."
          },
          {
            id: "q-pur-05",
            text: "Le <strong>\u0627\u0644\u0641\u064e\u0648\u0652\u0631</strong> (encha\u00eenement imm\u00e9diat entre les membres) est dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 :",
            choices: [
              {id:"a",text:"Sunna (السُّنَّة)"},
              {id:"b",text:"Une vertu"},
              {id:"c",text:"Une obligation (la 7\u00e8me des \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636)"},
              {id:"d",text:"Indiff\u00e9rent si on reste concentr\u00e9"},
            ],
            correctId: "c",
            explanation: "Le \u0627\u0644\u0641\u064e\u0648\u0652\u0631 est la septi\u00e8me obligation du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Il consiste \u00e0 ne pas laisser s\u00e9cher un membre avant de passer au suivant (en climat temp\u00e9r\u00e9). Si les membres s\u00e8chent avant d'\u00eatre tous lav\u00e9s, \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est invalide et doit \u00eatre refait depuis le d\u00e9but."
          },
          {
            id: "q-pur-06",
            text: "Qu'est-ce que le <strong>\u0627\u0644\u0645\u064e\u0630\u0652\u064a</strong> ?",
            choices: [
              {id:"a",text:"La semence (\u0627\u0644\u0645\u064e\u0646\u0650\u064a) \u00e9mise lors de l'orgasme"},
              {id:"b",text:"Le liquide blanc \u00e9pais qui suit parfois l'urine"},
              {id:"c",text:"Le liquide clair et l\u00e9ger \u00e9mis lors d'un d\u00e9sir mineur (pens\u00e9e, regard\u2026)"},
              {id:"d",text:"La sueur abondante apr\u00e8s un effort physique"},
            ],
            correctId: "c",
            explanation: "Le \u0627\u0644\u0645\u064e\u0630\u0652\u064a est un liquide clair et l\u00e9ger \u00e9mis lors d'un d\u00e9sir sexuel mineur. Il impose le renouvellement du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 et le lavage du p\u00e9nis en entier (mais pas des testicules). \u00c0 distinguer de \u0627\u0644\u0645\u064e\u0646\u0650\u064a (impose \u0627\u0644\u063a\u064f\u0633\u0652\u0644) et du \u0627\u0644\u0648\u064e\u062f\u0652\u064a (liquide blanc \u00e9pais apr\u00e8s l'urine, impose uniquement \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621)."
          },
          {
            id: "q-pur-07",
            text: "Apr\u00e8s une \u00e9mission de <strong>\u0627\u0644\u0645\u064e\u0630\u0652\u064a</strong>, que doit laver un homme selon le rite malikite ?",
            choices: [
              {id:"a",text:"Uniquement la zone souill\u00e9e visible"},
              {id:"b",text:"Le p\u00e9nis en entier ET les testicules"},
              {id:"c",text:"Le p\u00e9nis en entier SEULEMENT \u2014 pas les testicules"},
              {id:"d",text:"Rien de sp\u00e9cifique \u2014 \u0627\u0644\u0645\u064e\u0630\u0652\u064a ne n\u00e9cessite pas de lavage"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u064a\u062c\u0628 \u0639\u0644\u064a\u0647 \u063a\u0633\u0644 \u0627\u0644\u0630\u0643\u0631 \u0643\u0644\u0647 \u0645\u0646 \u0627\u0644\u0645\u0630\u064a\u060c \u0648\u0644\u0627 \u064a\u063a\u0633\u0644 \u0627\u0644\u0623\u0646\u062b\u064a\u064a\u0646 \u00bb \u2014 on lave le p\u00e9nis en entier mais PAS les testicules. Puis on renouvelle le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. C'est un point de pr\u00e9cision fr\u00e9quemment mal compris."
          },
          {
            id: "q-pur-08",
            text: "<strong>PI\u00c8GE \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633 :</strong> Aminata souffre de scrupules obsessionnels (\u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633). Apr\u00e8s son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, elle croit avoir eu un vent mais n'en est pas certaine. Doit-elle refaire le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ?",
            choices: [
              {id:"a",text:"Oui, le doute impose toujours de refaire"},
              {id:"b",text:"Non \u2014 la r\u00e8gle du doute ne s'applique pas \u00e0 celui qui souffre de \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633"},
              {id:"c",text:"Seulement si elle peut rep\u00e9rer le moment exact"},
              {id:"d",text:"Oui, mais seulement pour la prochaine pri\u00e8re"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b \u00e9tablit une exception explicite : \u00ab \u0625\u0644\u0627 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0645\u0648\u0633\u0648\u0633\u0627\u064b \u0641\u0644\u0627 \u0634\u064a\u0621 \u0639\u0644\u064a\u0647 \u00bb \u2014 celui qui souffre de \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633 ne doit PAS renouveler ses ablutions sur la base de simples doutes. Cela aggraverait son \u00e9tat et est une ruse du diable. Pour une personne normale, le doute d'un \u062d\u064e\u062f\u064e\u062b impose le renouvellement."
          },
          {
            id: "q-pur-09",
            text: "Quelle est la condition de l'eau pour qu'elle soit valide pour la \u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629 ?",
            choices: [
              {id:"a",text:"Qu'elle soit froide et propre"},
              {id:"b",text:"Qu'elle provienne d'une source naturelle ou du ciel"},
              {id:"c",text:"Qu'elle n'ait pas \u00e9t\u00e9 alt\u00e9r\u00e9e dans sa couleur, go\u00fbt ou odeur par une substance habituellement s\u00e9parable d'elle"},
              {id:"d",text:"Qu'elle soit sans couleur, odeur ni go\u00fbt"},
            ],
            correctId: "c",
            explanation: "L'eau est \u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629 \u0645\u064f\u0637\u064e\u0647\u0650\u0651\u0631\u064e\u0629 si elle n'a pas \u00e9t\u00e9 alt\u00e9r\u00e9e dans ses trois qualit\u00e9s (couleur, go\u00fbt, odeur) par une substance s\u00e9parable (huile, savon, etc.). La boue, la terre et les sels naturels ne l'invalident pas car ils ne s'en s\u00e9parent pas habituellement."
          },
          {
            id: "q-pur-10",
            text: "<strong>PI\u00c8GE :</strong> L'eau du robinet de Khalid est l\u00e9g\u00e8rement brun\u00e2tre \u00e0 cause de vieilles canalisations rouill\u00e9es. Peut-il l'utiliser pour \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ?",
            choices: [
              {id:"a",text:"Non, toute eau alt\u00e9r\u00e9e en couleur est invalide"},
              {id:"b",text:"Oui \u2014 l'alt\u00e9ration par la rouille n'est pas due \u00e0 une substance s\u00e9parable"},
              {id:"c",text:"Seulement pour \u0627\u0644\u063a\u064f\u0633\u0652\u0644, pas pour \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"d",text:"Oui mais c'est makr\u016bh"},
            ],
            correctId: "b",
            explanation: "La rouille se dissout dans l'eau naturellement \u2014 ce n'est pas une substance s\u00e9parable comme de l'huile ou du savon. L'alt\u00e9ration de couleur n'invalide l'eau QUE si elle est due \u00e0 une substance s\u00e9parable. L'eau reste valide m\u00eame si sa couleur est modifi\u00e9e par la rouille."
          },
          {
            id: "q-pur-11",
            text: "<strong>NUANCE :</strong> L'entrelacement des doigts (\u062a\u064e\u062e\u0644\u0650\u064a\u0644 \u0627\u0644\u0623\u064e\u0635\u064e\u0627\u0628\u0650\u0639) : quelle r\u00e8gle s'applique pour les mains et les pieds ?",
            choices: [
              {id:"a",text:"Obligatoire pour les deux (mains et pieds)"},
              {id:"b",text:"Obligatoire pour les mains, Sunna (السُّنَّة) pour les pieds"},
              {id:"c",text:"Sunna (السُّنَّة) pour les deux"},
              {id:"d",text:"Obligatoire pour les pieds, Sunna (السُّنَّة) pour les mains"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u064a\u062c\u0628 \u062a\u062e\u0644\u064a\u0644 \u0623\u0635\u0627\u0628\u0639 \u0627\u0644\u064a\u062f\u064a\u0646, \u0648\u064a\u0633\u062a\u062d\u0628 \u0641\u064a \u0623\u0635\u0627\u0628\u0639 \u0627\u0644\u0631\u062c\u0644\u064a\u0646 \u00bb \u2014 entrecroiser les doigts des MAINS est une obligation (\u0648\u0627\u062c\u0628), entrecroiser les orteils des PIEDS est recommand\u00e9 (\u0645\u0633\u062a\u062d\u0628). Ne pas confondre les deux r\u00e8gles."
          },
          {
            id: "q-pur-12",
            text: "<strong>NUANCE :</strong> La barbe \u00e9paisse (\u0643\u064e\u062b\u0650\u064a\u0641\u064e\u0629 \u2014 peau non visible) dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 vs \u0627\u0644\u063a\u064f\u0633\u0652\u0644 : quelle est la diff\u00e9rence ?",
            choices: [
              {id:"a",text:"M\u00eame r\u00e8gle dans les deux : la barbe \u00e9paisse est exempt\u00e9e"},
              {id:"b",text:"Dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : barbe \u00e9paisse exempt\u00e9e. Dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644 : barbe \u00e9paisse doit \u00eatre travers\u00e9e"},
              {id:"c",text:"Dans les deux : la barbe \u00e9paisse doit \u00eatre travers\u00e9e"},
              {id:"d",text:"Dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : doit \u00eatre travers\u00e9e. Dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644 : exempt\u00e9e"},
            ],
            correctId: "b",
            explanation: "DIFF\u00c9RENCE CLEF : dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, seule la barbe l\u00e9g\u00e8re (\u062e\u064e\u0641\u0650\u064a\u0641\u064e\u0629 \u2014 peau visible) doit \u00eatre travers\u00e9e. Dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644, m\u00eame la barbe \u00e9paisse (\u0643\u064e\u062b\u0650\u064a\u0641\u064e\u0629 \u2014 peau non visible) doit \u00eatre travers\u00e9e. C'est l'une des distinctions \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621/\u0627\u0644\u063a\u064f\u0633\u0652\u0644 les plus importantes."
          },
          {
            id: "q-pur-13",
            text: "<strong>PI\u00c8GE :</strong> Hassan oublie une obligation du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 et s'en souvient longtemps apr\u00e8s. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Rien \u2014 un long d\u00e9lai pardonne l'oubli"},
              {id:"b",text:"Refaire \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 complet depuis le d\u00e9but"},
              {id:"c",text:"Accomplir UNIQUEMENT l'obligation oubli\u00e9e, puis r\u00e9p\u00e9ter les pri\u00e8res accomplies entre-temps"},
              {id:"d",text:"Refaire l'obligation oubli\u00e9e et toutes les obligations qui la suivent dans l'ordre"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0625\u0646 \u0637\u0627\u0644 \u0641\u0639\u0644\u0647 \u0648\u062d\u062f\u0647 \u0648\u0623\u0639\u0627\u062f \u0645\u0627 \u0635\u0644\u0649 \u0642\u0628\u0644\u0647 \u00bb \u2014 si le d\u00e9lai est long (membres s\u00e9ch\u00e9s), on ex\u00e9cute uniquement l'obligation oubli\u00e9e puis on r\u00e9p\u00e8te les pri\u00e8res du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 incomplet. Ce n'est PAS le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 entier \u00e0 refaire si le d\u00e9lai est long."
          },
          {
            id: "q-pur-14",
            text: "<strong>PI\u00c8GE :</strong> Sa\u00efd se souvient d'une obligation oubli\u00e9e du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ALORS QU'IL EST ENCORE EN TRAIN DE FAIRE le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Que fait-il ?",
            choices: [
              {id:"a",text:"Il reprend \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 depuis le d\u00e9but"},
              {id:"b",text:"Il ex\u00e9cute l'obligation manquante, puis toutes les obligations qui la suivent dans l'ordre"},
              {id:"c",text:"Il continue sans rien changer \u2014 le d\u00e9lai est court"},
              {id:"d",text:"Il ex\u00e9cute l'obligation manquante seulement"},
            ],
            correctId: "b",
            explanation: "Si l'oubli est r\u00e9cent (les membres n'ont pas s\u00e9ch\u00e9), on ex\u00e9cute l'obligation manquante PUIS toutes les obligations qui la suivent dans l'ordre. C'est diff\u00e9rent du cas du long d\u00e9lai (o\u00f9 on fait seulement l'obligation manquante)."
          },
          {
            id: "q-pur-15",
            text: "Sunna (السُّنَّة) compte le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"5"},
              {id:"b",text:"7"},
              {id:"c",text:"9"},
              {id:"d",text:"12"},
            ],
            correctId: "b",
            explanation: "Sunna (السُّنَّة) du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : (1) laver les mains jusqu'aux poignets, (2) \u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629 (rin\u00e7age de bouche), (3) \u0627\u0633\u0652\u062a\u0650\u0646\u0652\u0634\u064e\u0627\u0642 (aspiration d'eau dans le nez), (4) \u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062b\u064e\u0627\u0631 (expulsion), (5) revenir en arri\u00e8re sur le mas\u1e25 de la t\u00eate, (6) essuyer les oreilles avec de l'eau renouvel\u00e9e, (7) \u0627\u0644\u062a\u0631\u062a\u064a\u0628 (respecter l'ordre entre les obligations)."
          },
          {
            id: "q-pur-16",
            text: "<strong>DIFF\u00c9RENCE CLEF :</strong> Celui sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 et le \u062c\u064f\u0646\u064f\u0628 \u2014 lequel peut lire le Coran de m\u00e9moire (sans le toucher) ?",
            choices: [
              {id:"a",text:"Les deux peuvent lire sans toucher"},
              {id:"b",text:"Ni l'un ni l'autre"},
              {id:"c",text:"Celui sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 peut lire de m\u00e9moire, le \u062c\u064f\u0646\u064f\u0628 NE peut pas"},
              {id:"d",text:"Le \u062c\u064f\u0646\u064f\u0628 peut lire de m\u00e9moire, celui sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ne peut pas"},
            ],
            correctId: "c",
            explanation: "DIFF\u00c9RENCE FONDAMENTALE : celui sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 peut lire le Coran de m\u00e9moire (sans le toucher). Le \u062c\u064f\u0646\u064f\u0628 ne peut ni lire ni toucher le Coran (sauf un verset isol\u00e9 pour \u0627\u0644\u062a\u064e\u0651\u0639\u064e\u0648\u064f\u0651\u0630). Pour TOUCHER le Coran physiquement, le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est requis pour tous."
          },
          {
            id: "q-pur-17",
            text: "<strong>PI\u00c8GE :</strong> Un \u00e9tudiant sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 peut-il toucher son fascicule du Coran qu'il utilise pour apprendre ?",
            choices: [
              {id:"a",text:"Non, il lui faut toujours le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"b",text:"Oui \u2014 exception pour le fascicule d'apprentissage (\u0627\u0644\u062c\u064f\u0632\u0621 \u0627\u0644\u0645\u062a\u0639\u0644\u064e\u0651\u0645)"},
              {id:"c",text:"Seulement avec des gants propres"},
              {id:"d",text:"Seulement s'il lit, pas s'il m\u00e9morise"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b pr\u00e9cise : le fascicule utilis\u00e9 pour l'apprentissage (\u062c\u064f\u0632\u0621\u064f \u0627\u0644\u0645\u064f\u062a\u064e\u0639\u064e\u0644\u064e\u0651\u0645\u0650) peut \u00eatre touch\u00e9 sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 par l'\u00e9tudiant. Doctrine-malikite.fr confirme : l'enseignement et l'apprentissage constituent une exception l\u00e9gitime \u00e0 l'interdiction de toucher le Coran sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621."
          },
          {
            id: "q-pur-18",
            text: "<strong>SC\u00c9NARIO :</strong> Yusuf touche affectueusement la main de sa femme sans aucun d\u00e9sir sexuel. Son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est-il rompu ?",
            choices: [
              {id:"a",text:"Oui, tout contact avec la femme rompt le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"b",text:"Non \u2014 seul le toucher avec d\u00e9sir (\u0642\u064e\u0635\u062f\u064f \u0627\u0644\u0644\u064e\u0651\u0630\u064e\u0651\u0629) ou ressenti de plaisir rompt"},
              {id:"c",text:"Oui, mais seulement si c'est la peau directe"},
              {id:"d",text:"Oui, car il l'a touch\u00e9e avec la paume"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0644\u0645\u0633 \u0627\u0644\u0645\u0631\u0623\u0629 \u0625\u0646 \u0642\u0635\u062f \u0627\u0644\u0644\u0630\u0629 \u0623\u0648 \u0648\u062c\u062f\u0647\u0627 \u00bb \u2014 le toucher ne rompt le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 QUE si on cherche le plaisir (\u0642\u064e\u0635\u062f\u064f \u0627\u0644\u0644\u064e\u0651\u0630\u064e\u0651\u0629) ou qu'on le ressent effectivement (\u0648\u062c\u062f\u0647\u0627). Un contact affectueux sans d\u00e9sir ne rompt rien."
          },
          {
            id: "q-pur-19",
            text: "<strong>PI\u00c8GE :</strong> Sa\u00efd touche son p\u00e9nis avec le <u>dos</u> de la main (\u0638\u064e\u0627\u0647\u0650\u0631\u064f \u0627\u0644\u0643\u064e\u0641). Son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est-il rompu ?",
            choices: [
              {id:"a",text:"Oui, tout contact avec le p\u00e9nis rompt le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"b",text:"Non \u2014 seul le contact avec l'int\u00e9rieur de la paume (\u0628\u064e\u0627\u0637\u0650\u0646\u064f \u0627\u0644\u0643\u064e\u0641) ou l'int\u00e9rieur des doigts rompt"},
              {id:"c",text:"Oui mais seulement si intentionnel"},
              {id:"d",text:"Non, les zones similaires au p\u00e9nis ne rompent pas"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b est pr\u00e9cis : \u00ab \u0645\u0633\u0651 \u0627\u0644\u0630\u0643\u0631 \u0628\u0628\u0627\u0637\u0646 \u0627\u0644\u0643\u0641 \u0623\u0648 \u0628\u0627\u0637\u0646 \u0627\u0644\u0623\u0635\u0627\u0628\u0639 \u00bb \u2014 seul le toucher avec l'INT\u00c9RIEUR de la paume ou des doigts rompt le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Le dos de la main (\u0638\u064e\u0627\u0647\u0650\u0631\u064f \u0627\u0644\u0643\u064e\u0641) ne rompt pas."
          },
          {
            id: "q-pur-20",
            text: "Lequel de ces actes <strong>ne rompt PAS</strong> le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 selon le rite malikite ?",
            choices: [
              {id:"a",text:"Un sommeil profond (perdre conscience des alentours)"},
              {id:"b",text:"Le \u0627\u0644\u0645\u064e\u0630\u0652\u064a (liquide du d\u00e9sir)"},
              {id:"c",text:"Un rot (\u00e9ructation)"},
              {id:"d",text:"Le \u0627\u0644\u0648\u064e\u062f\u0652\u064a (liquide blanc \u00e9pais apr\u00e8s l'urine)"},
            ],
            correctId: "c",
            explanation: "L'\u00e9ructation (rot) n'est PAS parmi les \u0646\u064e\u0648\u064e\u0627\u0642\u0650\u0636 du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 dans le rite malikite. Les nullificateurs incluent : \u0627\u0644\u0628\u0648\u0644, \u0627\u0644\u063a\u0627\u0626\u0637, \u0627\u0644\u0631\u064a\u062d intestinal, \u0627\u0644\u0645\u064e\u0630\u0652\u064a, \u0627\u0644\u0648\u064e\u062f\u0652\u064a, \u0627\u0644\u0646\u0648\u0645 \u0627\u0644\u062b\u0642\u064a\u0644, \u0627\u0644\u0625\u063a\u0645\u0627\u0621, \u0627\u0644\u0633\u0643\u0631, \u0627\u0644\u062c\u0646\u0648\u0646, \u0627\u0644\u0642\u064f\u0628\u0644\u0629 avec d\u00e9sir, \u0644\u0645\u0633 \u0627\u0644\u0645\u0631\u0623\u0629 avec d\u00e9sir, \u0645\u0633 \u0627\u0644\u0630\u0643\u0631 avec la paume."
          },
          {
            id: "q-pur-21",
            text: "Quelle est la diff\u00e9rence juridique entre <strong>\u0627\u0644\u0645\u064e\u0630\u0652\u064a</strong> et <strong>\u0627\u0644\u0648\u064e\u062f\u0652\u064a</strong> ?",
            choices: [
              {id:"a",text:"Aucune \u2014 les deux n\u00e9cessitent \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"b",text:"\u0627\u0644\u0645\u064e\u0630\u0652\u064a : liquide d\u00e9sir l\u00e9ger \u2192 \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 + laver le p\u00e9nis. \u0627\u0644\u0648\u064e\u062f\u0652\u064a : \u00e9pais apr\u00e8s urine \u2192 \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 + laver la zone souill\u00e9e"},
              {id:"c",text:"\u0627\u0644\u0645\u064e\u0630\u0652\u064a n\u00e9cessite \u0627\u0644\u063a\u064f\u0633\u0652\u0644, \u0627\u0644\u0648\u064e\u062f\u0652\u064a uniquement \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"d",text:"Les deux n\u00e9cessitent \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            ],
            correctId: "b",
            explanation: "Les deux (\u0627\u0644\u0645\u064e\u0630\u0652\u064a et \u0627\u0644\u0648\u064e\u062f\u0652\u064a) n'imposent que le renouvellement du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 PAS \u0627\u0644\u063a\u064f\u0633\u0652\u0644. Mais leur nature diff\u00e8re : \u0627\u0644\u0645\u064e\u0630\u0652\u064a est clair et l\u00e9ger (d\u00e9sir mineur), \u0627\u0644\u0648\u064e\u062f\u0652\u064a est blanc et \u00e9pais (suit l'urine). Seul \u0627\u0644\u0645\u064e\u0646\u0650\u064a (semence avec plaisir habituel) n\u00e9cessite \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          },
          {
            id: "q-pur-22",
            text: "<strong>SC\u00c9NARIO :</strong> Karim doute d'avoir eu un \u062d\u064e\u062f\u064e\u062b apr\u00e8s son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Il ne souffre pas de \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Ignorer le doute \u2014 la certitude ant\u00e9rieure prime toujours"},
              {id:"b",text:"Renouveler le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 le doute d'un \u062d\u064e\u062f\u064e\u062b chez une personne normale impose le renouvellement"},
              {id:"c",text:"Attendre la prochaine pri\u00e8re et d\u00e9cider"},
              {id:"d",text:"Demander \u00e0 un savant"},
            ],
            correctId: "b",
            explanation: "La r\u00e8gle g\u00e9n\u00e9rale malikite : \u00ab \u0645\u0646 \u0634\u0643 \u0641\u064a \u062d\u062f\u062b \u0648\u062c\u0628 \u0639\u0644\u064a\u0647 \u0627\u0644\u0648\u0636\u0648\u0621 \u00bb \u2014 celui qui doute d'un \u062d\u064e\u062f\u064e\u062b doit renouveler le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. L'exception ne s'applique QU'AU \u0645\u064f\u0648\u0633\u0652\u0648\u064e\u0633 (atteint de \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633). Pour une personne normale, le doute impose le renouvellement."
          },
          {
            id: "q-pur-23",
            text: "Combien d'obligations (\u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636) compte le <strong>\u0627\u0644\u063a\u064f\u0633\u0652\u0644</strong> selon le rite malikite ?",
            choices: [
              {id:"a",text:"2 : intention + g\u00e9n\u00e9ralisation"},
              {id:"b",text:"3 : intention + frottement + g\u00e9n\u00e9ralisation"},
              {id:"c",text:"4 : \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 + \u0627\u0644\u0641\u064e\u0648\u0652\u0631 + \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643 + \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645"},
              {id:"d",text:"7 comme le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            ],
            correctId: "c",
            explanation: "Les quatre \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 du \u0627\u0644\u063a\u064f\u0633\u0652\u0644 : (1) \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 au d\u00e9but, (2) \u0627\u0644\u0641\u064e\u0648\u0652\u0631 (encha\u00eenement), (3) \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643 (frottement), (4) \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645 (g\u00e9n\u00e9raliser l'eau \u00e0 tout le corps). Contrairement au \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, il n'y a pas de \u062a\u0631\u062a\u064a\u0628 obligatoire entre les membres du corps."
          },
          {
            id: "q-pur-24",
            text: "<strong>PI\u00c8GE :</strong> Lors du \u0627\u0644\u063a\u064f\u0633\u0652\u0644, doit-on traverser la barbe <u>\u00e9paisse</u> (\u0643\u064e\u062b\u0650\u064a\u0641\u064e\u0629) avec les doigts ?",
            choices: [
              {id:"a",text:"Non \u2014 comme dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, la barbe \u00e9paisse est exempt\u00e9e"},
              {id:"b",text:"Oui \u2014 dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644 m\u00eame la barbe \u00e9paisse doit \u00eatre travers\u00e9e"},
              {id:"c",text:"Seulement si la peau du visage n'est pas visible"},
              {id:"d",text:"C'Sunna (السُّنَّة) dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644, pas une obligation"},
            ],
            correctId: "b",
            explanation: "R\u00c8GLE DIFF\u00c9RENTE DE \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : \u00ab \u064a\u062c\u0628 \u062a\u062e\u0644\u064a\u0644\u0647\u0627 \u0641\u064a \u0627\u0644\u063a\u0633\u0644 \u0648\u0644\u0648 \u0643\u0627\u0646\u062a \u0643\u062b\u064a\u0641\u0629 \u00bb \u2014 dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644, m\u00eame la barbe \u00e9paisse doit \u00eatre travers\u00e9e. Dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621, seule la barbe l\u00e9g\u00e8re (\u062e\u064e\u0641\u0650\u064a\u0641\u064e\u0629 \u2014 peau visible) est travers\u00e9e."
          },
          {
            id: "q-pur-25",
            text: "<strong>SC\u00c9NARIO :</strong> Farid oublie de laver son coude gauche lors du \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et s'en souvient 2 mois plus tard. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Rien \u2014 un long d\u00e9lai pardonne l'oubli dans \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"b",text:"Laver imm\u00e9diatement cette zone, et r\u00e9p\u00e9ter toutes les pri\u00e8res accomplies depuis"},
              {id:"c",text:"Refaire le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 complet"},
              {id:"d",text:"Seulement refaire les pri\u00e8res douteuses"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0628\u0627\u062f\u0631 \u0625\u0644\u0649 \u063a\u0633\u0644\u0647 \u062d\u064a\u0646 \u062a\u0630\u0643\u0631\u0647 \u0648\u0644\u0648 \u0628\u0639\u062f \u0634\u0647\u0631, \u0648\u0623\u0639\u0627\u062f \u0645\u0627 \u0635\u0644\u0649 \u00bb \u2014 on lave imm\u00e9diatement la zone oubli\u00e9e (m\u00eame des mois plus tard) et on r\u00e9p\u00e8te TOUTES les pri\u00e8res depuis le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 incomplet. Si on diff\u00e8re apr\u00e8s s'en \u00eatre souvenu, le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 entier est invalid\u00e9."
          },
          {
            id: "q-pur-26",
            text: "<strong>PI\u00c8GE :</strong> Nadia fait le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 parfaitement mais oublie le rin\u00e7age de la bouche (\u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629). Son \u0627\u0644\u063a\u064f\u0633\u0652\u0644 est-il invalide ?",
            choices: [
              {id:"a",text:"Oui \u2014 la \u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629 est une obligation du \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"b",text:"Non \u2014 la \u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629 Sunna (السُّنَّة) du \u0627\u0644\u063a\u064f\u0633\u0652\u0644, non une obligation"},
              {id:"c",text:"Oui, mais seulement pour le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 de \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629"},
              {id:"d",text:"Oui elle doit refaire les pri\u00e8res"},
            ],
            correctId: "b",
            explanation: "La \u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629 Sunna (السُّنَّة) du \u0627\u0644\u063a\u064f\u0633\u0652\u0644, pas ses \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636. Les quatre \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 sont : \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629, \u0627\u0644\u0641\u064e\u0648\u0652\u0631, \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643, \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645. Sunna (السُّنَّة) n'invalide pas le \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          },
          {
            id: "q-pur-27",
            text: "Quelles sont les deux cat\u00e9gories de <strong>\u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629</strong> selon le rite malikite ?",
            choices: [
              {id:"a",text:"Intentionnelle et involontaire"},
              {id:"b",text:"\u00c9mission de \u0627\u0644\u0645\u064e\u0646\u0650\u064a avec plaisir habituel OU p\u00e9n\u00e9tration m\u00eame sans \u00e9mission"},
              {id:"c",text:"Seule l'\u00e9mission lors du rapport sexuel compte"},
              {id:"d",text:"Tout contact intime m\u00eame sans p\u00e9n\u00e9tration"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0627\u0644\u062c\u0646\u0627\u0628\u0629 \u0642\u0633\u0645\u0627\u0646 : \u062e\u0631\u0648\u062c \u0627\u0644\u0645\u0646\u064a \u0628\u0644\u0630\u0629 \u0645\u0639\u062a\u0627\u062f\u0629 \u0641\u064a \u0646\u0648\u0645 \u0623\u0648 \u064a\u0642\u0638\u0629, \u0648\u0627\u0644\u062b\u0627\u0646\u064a \u0645\u063a\u064a\u0628 \u0627\u0644\u062d\u0634\u0641\u0629 \u0641\u064a \u0627\u0644\u0641\u0631\u062c \u00bb \u2014 \u00e9mission de \u0627\u0644\u0645\u064e\u0646\u0650\u064a avec plaisir habituel (m\u00eame en r\u00eave), OU p\u00e9n\u00e9tration (m\u00eame sans \u00e9mission, m\u00eame partielle). Les deux imposent le \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          },
          {
            id: "q-pur-28",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim r\u00eave d'un rapport sexuel mais ne trouve aucune trace de \u0627\u0644\u0645\u064e\u0646\u0650\u064a au r\u00e9veil. Doit-il faire \u0627\u0644\u063a\u064f\u0633\u0652\u0644 ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout r\u00eave \u00e0 caract\u00e8re sexuel impose \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"b",text:"Non \u2014 seule l'\u00e9mission effective de \u0627\u0644\u0645\u064e\u0646\u0650\u064a impose \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"c",text:"Seulement s'il se souvient du r\u00eave distinctement"},
              {id:"d",text:"Oui, par pr\u00e9caution"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0645\u0646 \u0631\u0623\u0649 \u0641\u064a \u0645\u0646\u0627\u0645\u0647 \u0643\u0623\u0646\u0647 \u064a\u062c\u0627\u0645\u0639 \u0648\u0644\u0645 \u064a\u062e\u0631\u062c \u0645\u0646\u0647 \u0645\u0646\u064a \u0641\u0644\u0627 \u0634\u064a\u0621 \u0639\u0644\u064a\u0647 \u00bb \u2014 si quelqu'un r\u00eave de rapport sexuel SANS \u00e9mission de \u0627\u0644\u0645\u064e\u0646\u0650\u064a, il n'y a rien \u00e0 faire. Seule l'\u00e9mission effective impose \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          },
          {
            id: "q-pur-29",
            text: "<strong>PI\u00c8GE :</strong> Le\u00efla trouve du \u0627\u0644\u0645\u064e\u0646\u0650\u064a sec dans son v\u00eatement sans savoir quand il est survenu. Que doit-elle faire ?",
            choices: [
              {id:"a",text:"Ignorer \u2014 incertitude totale donc aucune obligation"},
              {id:"b",text:"Faire le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et r\u00e9p\u00e9ter les pri\u00e8res depuis le dernier sommeil dans ce v\u00eatement"},
              {id:"c",text:"Seulement laver le v\u00eatement"},
              {id:"d",text:"R\u00e9p\u00e9ter toutes les pri\u00e8res des derniers jours"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0645\u0646 \u0648\u062c\u062f \u0641\u064a \u062b\u0648\u0628\u0647 \u0645\u0646\u064a\u0627\u064b \u0644\u0627 \u064a\u062f\u0631\u064a \u0645\u062a\u0649 \u0623\u0635\u0627\u0628\u0647 \u0627\u063a\u062a\u0633\u0644 \u0648\u0623\u0639\u0627\u062f \u0645\u0627 \u0635\u0644\u0649 \u0645\u0646 \u0622\u062e\u0631 \u0646\u0648\u0645 \u0646\u0627\u0645\u0647\u0627 \u0641\u064a\u0647 \u00bb \u2014 \u0627\u0644\u063a\u064f\u0633\u0652\u0644 + r\u00e9p\u00e9ter les pri\u00e8res depuis le DERNIER SOMMEIL dans CE v\u00eatement sp\u00e9cifique. Pas depuis plus longtemps."
          },
          {
            id: "q-pur-30",
            text: "Qu'est-il interdit de faire pour le <strong>\u062c\u064f\u0646\u064f\u0628</strong> selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"Uniquement la pri\u00e8re"},
              {id:"b",text:"La pri\u00e8re et le je\u00fbne"},
              {id:"c",text:"Entrer dans la mosqu\u00e9e et r\u00e9citer le Coran (sauf un verset isol\u00e9 pour protection)"},
              {id:"d",text:"Tout acte d'adoration sans exception"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0644\u0627 \u064a\u062d\u0644 \u0644\u0644\u062c\u0646\u0628 \u062f\u062e\u0648\u0644 \u0627\u0644\u0645\u0633\u062c\u062f\u060c \u0648\u0644\u0627 \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0642\u0631\u0622\u0646 \u0625\u0644\u0627 \u0627\u0644\u0622\u064a\u0629 \u0648\u0646\u062d\u0648\u0647\u0627 \u0644\u0644\u062a\u0639\u0648\u0630 \u00bb. Le je\u00fbne et le \u0630\u0650\u0643\u0652\u0631 sont permis au \u062c\u064f\u0646\u064f\u0628. Seuls l'entr\u00e9e dans la mosqu\u00e9e et la r\u00e9citation du Coran (plus de quelques versets) sont interdits."
          },
          {
            id: "q-pur-31",
            text: "Pour qui le <strong>\u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645</strong> est-il permis pour les pri\u00e8res sur\u00e9rogatoires (\u0627\u0644\u0646\u064e\u0651\u0648\u064e\u0627\u0641\u0650\u0644) ?",
            choices: [
              {id:"a",text:"Tout le monde"},
              {id:"b",text:"Uniquement le malade"},
              {id:"c",text:"Le voyageur (en d\u00e9placement licite) ET le malade \u2014 mais PAS le r\u00e9sidant sain"},
              {id:"d",text:"Personne \u2014 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 est r\u00e9serv\u00e9 aux pri\u00e8res obligatoires"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u064a\u062a\u064a\u0645\u0645 \u0627\u0644\u0645\u0633\u0627\u0641\u0631 \u0641\u064a \u063a\u064a\u0631 \u0645\u0639\u0635\u064a\u0629 \u0648\u0627\u0644\u0645\u0631\u064a\u0636 \u0644\u0641\u0631\u064a\u0636\u0629 \u0623\u0648 \u0646\u0627\u0641\u0644\u0629. \u0648\u0644\u0627 \u064a\u062a\u064a\u0645\u0645 \u0627\u0644\u062d\u0627\u0636\u0631 \u0627\u0644\u0635\u062d\u064a\u062d \u0644\u0646\u0627\u0641\u0644\u0629 \u00bb \u2014 le voyageur et le malade peuvent faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour les \u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644. Le r\u00e9sidant sain NE peut PAS faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour les \u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644."
          },
          {
            id: "q-pur-32",
            text: "<strong>PI\u00c8GE :</strong> Khalid fait \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631. Peut-il prier \u0627\u0644\u0639\u064e\u0635\u0652\u0631 avec ce m\u00eame \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 ?",
            choices: [
              {id:"a",text:"Oui \u2014 un \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 suffit pour plusieurs pri\u00e8res obligatoires"},
              {id:"b",text:"Non \u2014 un \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 obligatoire ne sert que pour une seule pri\u00e8re obligatoire"},
              {id:"c",text:"Oui s'il n'a pas eu de \u062d\u064e\u062f\u064e\u062b entre-temps"},
              {id:"d",text:"Oui mais seulement si les deux temps sont proches"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0644\u0627 \u062a\u0635\u0644\u0649 \u0641\u0631\u064a\u0636\u062a\u0627\u0646 \u0628\u062a\u064a\u0645\u0645 \u0648\u0627\u062d\u062f \u00bb \u2014 deux pri\u00e8res obligatoires NE peuvent pas \u00eatre accomplies avec un seul \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645. En revanche, les \u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644 apr\u00e8s une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629 peuvent \u00eatre faites avec ce m\u00eame \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645."
          },
          {
            id: "q-pur-33",
            text: "Parmi ces mati\u00e8res, laquelle est valide pour le <strong>\u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645</strong> ?",
            choices: [
              {id:"a",text:"Le pl\u00e2tre cuit (\u062c\u0650\u0635\u0651 \u0645\u064e\u0637\u0628\u064f\u0648\u062e)"},
              {id:"b",text:"La natte (\u062d\u064e\u0635\u0650\u064a\u0631)"},
              {id:"c",text:"La pierre, la brique crue non cuite, la neige"},
              {id:"d",text:"Le bois et l'herbe s\u00e8che"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0627\u0644\u0635\u0639\u064a\u062f : \u0647\u0648 \u0627\u0644\u062a\u0631\u0627\u0628 \u0648\u0627\u0644\u0637\u0648\u0628 \u0648\u0627\u0644\u062d\u062c\u0631 \u0648\u0627\u0644\u062b\u0644\u062c \u0648\u0627\u0644\u062e\u0636\u062e\u0627\u0636 \u00bb. Valides : sable, terre, pierre, brique crue, neige. Invalides : pl\u00e2tre cuit (\u062c\u0650\u0635\u0651 \u0645\u064e\u0637\u0628\u064f\u0648\u062e), natte (\u062d\u064e\u0635\u0650\u064a\u0631), bois, herbe."
          },
          {
            id: "q-pur-34",
            text: "Le <strong>\u0645\u064e\u0633\u0652\u062d \u0627\u0644\u0631\u064e\u0651\u0623\u0633</strong> dans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 : aller et retour \u2014 lequel est une obligation, Sunna (السُّنَّة) ?",
            choices: [
              {id:"a",text:"L'aller seul est l'obligation. Sunna (السُّنَّة)"},
              {id:"b",text:"Les deux allers sont obligatoires"},
              {id:"c",text:"Le retour est l'obligation, l'Sunna (السُّنَّة)"},
              {id:"d",text:"C'est selon la taille de la t\u00eate"},
            ],
            correctId: "a",
            explanation: "L'aller (de l'avant vers la nuque) est l'OBLIGATION. Le retour (de la nuque vers l'avant) est la SOUNNAH. L'Akh\u1e0dar\u012b pr\u00e9cise qu'il est d\u00e9conseill\u00e9 de d\u00e9passer trois fois. Ne pas prendre l'habitude de trop r\u00e9p\u00e9ter le mas\u1e25."
          },
          {
            id: "q-pur-35",
            text: "<strong>PI\u00c8GE :</strong> Mariam est en \u062d\u064e\u064a\u0652\u0636 et enseigne le Coran \u00e0 ses \u00e9l\u00e8ves. Elle touche l'exemplaire du Coran. Est-ce permis ?",
            choices: [
              {id:"a",text:"Non \u2014 la \u062d\u064e\u0627\u0626\u0650\u0636 ne peut jamais toucher le Coran"},
              {id:"b",text:"Oui \u2014 l'exception pour l'enseignement s'applique m\u00eame \u00e0 la \u062d\u064e\u0627\u0626\u0650\u0636"},
              {id:"c",text:"Seulement si elle porte des gants"},
              {id:"d",text:"Seulement si les \u00e9l\u00e8ves sont ses propres enfants"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0644\u0627 \u0645\u0633 \u0644\u0648\u062d \u0627\u0644\u0642\u0631\u0622\u0646 \u0639\u0644\u0649 \u063a\u064a\u0631 \u0627\u0644\u0648\u0636\u0648\u0621 \u0625\u0644\u0627 \u0644\u0645\u062a\u0639\u0644\u0645 \u0641\u064a\u0647 \u0623\u0648 \u0645\u0639\u0644\u0645 \u064a\u0635\u062d\u062d \u00bb. L'enseignement l\u00e8ve l'interdiction pour la \u062d\u064e\u0627\u0626\u0650\u0636 comme pour celle sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. L'enseignement constitue une exception l\u00e9gitime reconnue par l'Akh\u1e0dar\u012b."
          },
          {
            id: "q-pur-36",
            text: "La dur\u00e9e maximale du <strong>\u0627\u0644\u062d\u064e\u064a\u0652\u0636</strong> pour une \u0645\u064f\u0628\u062a\u064e\u062f\u0650\u0626\u064e\u0629 (premi\u00e8re exp\u00e9rience) est :",
            choices: [
              {id:"a",text:"7 jours"},
              {id:"b",text:"10 jours"},
              {id:"c",text:"15 jours"},
              {id:"d",text:"30 jours"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0623\u0643\u062b\u0631 \u0627\u0644\u062d\u064a\u0636 \u0644\u0644\u0645\u0628\u062a\u062f\u0623\u0629 \u062e\u0645\u0633\u0629 \u0639\u0634\u0631 \u064a\u0648\u0645\u064b\u0627 \u00bb \u2014 maximum 15 jours pour la premi\u00e8re exp\u00e9rience. Pour la femme habitu\u00e9e (\u0645\u064f\u0639\u062a\u064e\u0627\u062f\u064e\u0629), la dur\u00e9e de r\u00e9f\u00e9rence est sa dur\u00e9e habituelle (avec possibilit\u00e9 d'ajout de 3 jours sans d\u00e9passer 15)."
          },
          {
            id: "q-pur-37",
            text: "<strong>PI\u00c8GE :</strong> La femme en \u062d\u064e\u064a\u0652\u0636 peut-elle r\u00e9citer le Coran de m\u00e9moire (sans le toucher) ?",
            choices: [
              {id:"a",text:"Non \u2014 la r\u00e9citation du Coran est interdite pendant \u0627\u0644\u062d\u064e\u064a\u0652\u0636"},
              {id:"b",text:"Oui \u2014 seul le toucher est interdit, la r\u00e9citation de m\u00e9moire est permise"},
              {id:"c",text:"Seulement les courtes sourates"},
              {id:"d",text:"Seulement pour la supplication (\u062f\u064f\u0639\u064e\u0627\u0621)"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0642\u0631\u0627\u0621\u062a\u0647\u0627 \u062c\u0627\u0626\u0632\u0629 \u00bb \u2014 la r\u00e9citation du Coran de m\u00e9moire est permise pour la \u062d\u064e\u0627\u0626\u0650\u0636. Seul le toucher physique est interdit. \u00c0 ne pas confondre r\u00e9citation orale et contact physique."
          },
          {
            id: "q-pur-38",
            text: "Quelle est la dur\u00e9e maximale du <strong>\u0627\u0644\u0646\u0650\u0651\u0641\u064e\u0627\u0633</strong> selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"15 jours"},
              {id:"b",text:"40 jours"},
              {id:"c",text:"60 jours"},
              {id:"d",text:"90 jours"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0623\u0643\u062b\u0631\u0647 \u0633\u062a\u0648\u0646 \u064a\u0648\u0645\u064b\u0627 \u00bb \u2014 la dur\u00e9e maximale du \u0627\u0644\u0646\u0650\u0651\u0641\u064e\u0627\u0633 est 60 jours. Si le saignement s'arr\u00eate avant \u2014 m\u00eame le jour de l'accouchement \u2014 la femme fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et reprend ses pri\u00e8res imm\u00e9diatement."
          },
          {
            id: "q-pur-39",
            text: "<strong>PI\u00c8GE :</strong> Khadija accouche et le saignement s'arr\u00eate le JOUR m\u00eame de l'accouchement. Doit-elle attendre un minimum avant de prier ?",
            choices: [
              {id:"a",text:"Oui \u2014 minimum 3 jours de \u0627\u0644\u0646\u0650\u0651\u0641\u064e\u0627\u0633"},
              {id:"b",text:"Oui \u2014 minimum 7 jours"},
              {id:"c",text:"Non \u2014 d\u00e8s l'arr\u00eat du saignement, elle fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et prie"},
              {id:"d",text:"Oui \u2014 minimum 10 jours par pr\u00e9caution"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0641\u0625\u0630\u0627 \u0627\u0646\u0642\u0637\u0639 \u0627\u0644\u062f\u0645 \u0642\u0628\u0644\u0647\u0627 \u0648\u0644\u0648 \u0641\u064a \u064a\u0648\u0645 \u0627\u0644\u0648\u0644\u0627\u062f\u0629 \u0627\u063a\u062a\u0633\u0644\u062a \u0648\u0635\u0644\u062a \u00bb \u2014 il n'y a PAS de dur\u00e9e minimale pour le \u0627\u0644\u0646\u0650\u0651\u0641\u064e\u0627\u0633. D\u00e8s l'arr\u00eat du saignement, m\u00eame le jour de l'accouchement, elle fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et reprend ses obligations."
          },
          {
            id: "q-pur-40",
            text: "<strong>SC\u00c9NARIO :</strong> Omar a fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644 de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 correctement. A-t-il encore besoin de faire s\u00e9par\u00e9ment \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 pour prier ?",
            choices: [
              {id:"a",text:"Oui \u2014 \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 sont toujours s\u00e9par\u00e9s"},
              {id:"b",text:"Non \u2014 un \u0627\u0644\u063a\u064f\u0633\u0652\u0644 complet englobe le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 si les membres du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ont \u00e9t\u00e9 lav\u00e9s"},
              {id:"c",text:"Seulement si l'intention couvre les deux"},
              {id:"d",text:"Seulement si \u0627\u0644\u063a\u064f\u0633\u0652\u0644 a \u00e9t\u00e9 fait dans l'ordre du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            ],
            correctId: "b",
            explanation: "Un \u0627\u0644\u063a\u064f\u0633\u0652\u0644 complet (avec \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629, \u0627\u0644\u0641\u064e\u0648\u0652\u0631, \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643, \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645) couvre les obligations du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 tous les membres ont \u00e9t\u00e9 lav\u00e9s. L'Akh\u1e0dar\u012b recommande de commencer par les membres du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 lors du \u0627\u0644\u063a\u064f\u0633\u0652\u0644 pour optimiser les deux en m\u00eame temps."
          },
          {
            id: "q-pur-41",
            text: "<strong>PI\u00c8GE AVANC\u00c9 :</strong> Youssef fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 dans l'ordre : visage \u2192 bras gauche \u2192 bras droit \u2192 t\u00eate \u2192 pieds. Son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est-il valide ?",
            choices: [
              {id:"a",text:"Oui \u2014 l'Sunna (السُّنَّة), pas une obligation dans le rite malikite"},
              {id:"b",text:"Non \u2014 l'ordre des membres est une obligation (\u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629) dans le rite malikite"},
              {id:"c",text:"Oui mais il doit refaire la pri\u00e8re"},
              {id:"d",text:"Partiellement valide"},
            ],
            correctId: "a",
            explanation: "L'Akh\u1e0dar\u012b classe le \u062a\u0631\u062a\u064a\u0628 (ordre entre les membres du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621) parmi les SOUNNAH, pas les \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636. L'omettre ne rend pas le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 Sunna (السُّنَّة). Attention : respecter l'ordre reste fortement recommand\u00e9."
          },
          {
            id: "q-pur-42",
            text: "<strong>PI\u00c8GE GRAVE :</strong> Prier d\u00e9lib\u00e9r\u00e9ment sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 quel est son statut selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"Un grand p\u00e9ch\u00e9 mais la pri\u00e8re est \u00e0 refaire seulement"},
              {id:"b",text:"Qualifi\u00e9 de \u0643\u064f\u0641\u0652\u0631 (incr\u00e9dulit\u00e9) par l'Akh\u1e0dar\u012b"},
              {id:"c",text:"Simplement makr\u016bh"},
              {id:"d",text:"La pri\u00e8re est invalide sans autre cons\u00e9quence"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0645\u0646 \u0635\u0644\u0649 \u0628\u063a\u064a\u0631 \u0648\u0636\u0648\u0621 \u0639\u0627\u0645\u062f\u0627\u064b \u0641\u0647\u0648 \u0643\u0627\u0641\u0631 \u0648\u0627\u0644\u0639\u064a\u0627\u0630 \u0628\u0627\u0644\u0644\u0647 \u00bb \u2014 prier D\u00c9LIB\u00c9R\u00c9MENT sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est qualifi\u00e9 de \u0643\u064f\u0641\u0652\u0631. C'est l'une des affirmations les plus graves du texte. L'oubli ou l'erreur sinc\u00e8re excusent, mais l'acte d\u00e9lib\u00e9r\u00e9 est extr\u00eamement grave."
          },
          {
            id: "q-pur-43",
            text: "<strong>NUANCE :</strong> Une personne sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 peut-elle toucher une traduction du Coran en fran\u00e7ais ?",
            choices: [
              {id:"a",text:"Non \u2014 toute traduction du Coran est soumise aux m\u00eames r\u00e8gles"},
              {id:"b",text:"Oui \u2014 les traductions dans d'autres langues peuvent \u00eatre touch\u00e9es sans \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"c",text:"Seulement si c'est une traduction annot\u00e9e scientifiquement"},
              {id:"d",text:"Non \u2014 mais elle peut la regarder sans la toucher"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab On peut toucher le Coran traduit en fran\u00e7ais m\u00eame si on n'a pas ses petites ablutions \u00bb. Seul le texte arabe du Coran est soumis \u00e0 la condition du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Les traductions ne constituent pas le Coran proprement dit au sens juridique."
          },
          {
            id: "q-pur-44",
            text: "<strong>SC\u00c9NARIO :</strong> Ismail commence \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 puis l'eau se renverse. Il en trouve d'autre apr\u00e8s un court d\u00e9lai (membres pas s\u00e9ch\u00e9s). Que fait-il ?",
            choices: [
              {id:"a",text:"Il ne peut pas prier \u2014 il attend de trouver de l'eau"},
              {id:"b",text:"Il fait \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 imm\u00e9diatement"},
              {id:"c",text:"Il reprend \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 l\u00e0 o\u00f9 il l'a laiss\u00e9 \u2014 les membres n'ont pas s\u00e9ch\u00e9"},
              {id:"d",text:"Il refait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 depuis le d\u00e9but"},
            ],
            correctId: "c",
            explanation: "Si l'eau est retrouv\u00e9e rapidement (membres pas s\u00e9ch\u00e9s = \u0627\u0644\u0641\u064e\u0648\u0652\u0631 est maintenu) : on reprend l\u00e0 o\u00f9 on s'est arr\u00eat\u00e9. Si long d\u00e9lai (membres s\u00e9ch\u00e9s = \u0627\u0644\u0641\u064e\u0648\u0652\u0631 rompu) : refaire depuis le d\u00e9but. L'Akh\u1e0dar\u012b : \u00ab \u0625\u0646 \u0648\u062c\u062f \u0627\u0644\u0645\u0627\u0621 \u0642\u0628\u0644 \u0637\u0648\u0644 \u0627\u0644\u0632\u0645\u0646 \u062a\u0645\u0651\u0645 \u0648\u0636\u0648\u0621\u0647 \u00bb."
          },
          {
            id: "q-pur-45",
            text: "<strong>PI\u00c8GE :</strong> Naomie a du vernis \u00e0 ongles (qui forme un film imperm\u00e9able). Elle fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Est-il valide ?",
            choices: [
              {id:"a",text:"Oui \u2014 le vernis ne pose aucun probl\u00e8me"},
              {id:"b",text:"Oui \u00e0 condition qu'il soit de couleur naturelle"},
              {id:"c",text:"Non \u2014 tout film imperm\u00e9able emp\u00eachant l'eau d'atteindre la peau invalide le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
              {id:"d",text:"Oui si le vernis est ancien et fissur\u00e9"},
            ],
            correctId: "c",
            explanation: "L'obligation du \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645 (g\u00e9n\u00e9ralisation de l'eau) exige que l'eau atteigne toute la surface des membres. Un vernis imperm\u00e9able forme une barri\u00e8re emp\u00eachant l'eau d'atteindre la peau. Sans contact direct avec la peau, le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est invalide."
          },
          {
            id: "q-pur-46",
            text: "<strong>NUANCE :</strong> Fatima porte une bague serr\u00e9e lors du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Est-ce suffisant de frotter dessus ?",
            choices: [
              {id:"a",text:"Oui \u2014 frotter le dessus suffit"},
              {id:"b",text:"Non \u2014 il faut faire tourner la bague pour que l'eau atteigne la peau dessous"},
              {id:"c",text:"Oui si la bague est en m\u00e9tal pr\u00e9cieux"},
              {id:"d",text:"Cela d\u00e9pend si la bague est dor\u00e9e ou argent\u00e9e"},
            ],
            correctId: "b",
            explanation: "Le \u0627\u0644\u062f\u064e\u0651\u0644\u0652\u0643 et \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645 obligent l'eau \u00e0 atteindre toute la surface. Une bague serr\u00e9e cr\u00e9e une zone o\u00f9 l'eau n'atteint pas la peau. Il faut la faire tourner ou l'enlever temporairement pour assurer le \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645 du membre."
          },
          {
            id: "q-pur-47",
            text: "Pour quels actes l'\u00e9tat de <strong>\u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629</strong> est-il un obstacle absolu (sans exception) ?",
            choices: [
              {id:"a",text:"La pri\u00e8re et le je\u00fbne"},
              {id:"b",text:"La pri\u00e8re, le \u1e6daw\u0101f et l'entr\u00e9e dans la mosqu\u00e9e"},
              {id:"c",text:"Entrer dans la mosqu\u00e9e et r\u00e9citer le Coran (plus de quelques versets)"},
              {id:"d",text:"Tout acte d'adoration"},
            ],
            correctId: "c",
            explanation: "Pour le \u062c\u064f\u0646\u064f\u0628, les deux interdictions absolues sont : (1) entrer dans la mosqu\u00e9e, (2) r\u00e9citer le Coran (plus d'un verset isol\u00e9). La pri\u00e8re est aussi interdite mais \u00e0 cause du \u062d\u064e\u062f\u064e\u062b majeur, pas seulement de \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629. Le je\u00fbne et le \u0630\u0650\u0643\u0652\u0631 sont permis."
          },
          {
            id: "q-pur-48",
            text: "<strong>SC\u00c9NARIO PI\u00c8GE :</strong> Ahmad fait \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 sans sp\u00e9cifier dans son intention que c'est pour \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629. Son \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 est-il valide ?",
            choices: [
              {id:"a",text:"Oui \u2014 l'intention g\u00e9n\u00e9rale de purification suffit"},
              {id:"b",text:"Non \u2014 pour \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629, il faut obligatoirement la sp\u00e9cifier dans l'intention"},
              {id:"c",text:"Oui si c'est la seule impuret\u00e9 qu'il a"},
              {id:"d",text:"Non \u2014 le \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 ne couvre jamais \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u062a\u064a\u0645\u0645 \u0645\u0646 \u062c\u0646\u0627\u0628\u0629 \u0641\u0644\u0627\u0628\u062f \u0645\u0646 \u0646\u064a\u062a\u0647\u0627 \u00bb \u2014 pour \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629, il faut OBLIGATOIREMENT mentionner \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 dans l'intention. Une intention g\u00e9n\u00e9rale de purification ne suffit pas dans ce cas pr\u00e9cis."
          },
          {
            id: "q-pur-49",
            text: "<strong>COMPLEXE :</strong> Quel est l'\u00e9tat l\u00e9gal de l'eau ayant d\u00e9j\u00e0 servi aux ablutions (\u0627\u0644\u0645\u064e\u0627\u0621 \u0627\u0644\u0645\u064f\u0633\u062a\u064e\u0639\u0645\u064e\u0644) ?",
            choices: [
              {id:"a",text:"Impure (\u0646\u064e\u062c\u0650\u0633\u064e\u0629) \u2014 ne peut \u00eatre r\u00e9utilis\u00e9e"},
              {id:"b",text:"Pure (\u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629) mais makr\u016bh de r\u00e9utiliser si une autre eau est disponible"},
              {id:"c",text:"Pure et parfaitement valide comme n'importe quelle eau"},
              {id:"d",text:"Ne peut servir que pour \u0627\u0644\u063a\u064f\u0633\u0652\u0644, pas pour \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            ],
            correctId: "b",
            explanation: "L'eau ayant servi \u00e0 la purification rituelle (\u0627\u0644\u0645\u064e\u0627\u0621 \u0627\u0644\u0645\u064f\u0633\u062a\u064e\u0639\u0645\u064e\u0644) est pure (\u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629) mais son utilisation est makr\u016bh si une autre eau est disponible. Doctrine-malikite.fr : \u00ab la cause du makr\u016bh est qu'il y a divergence des savants sur sa puret\u00e9 \u00bb. En cas de n\u00e9cessit\u00e9, on peut l'utiliser."
          },
          {
            id: "q-pur-50",
            text: "<strong>PI\u00c8GE FINAL :</strong> Ibrahim fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 puis se couche pour une sieste. Il se r\u00e9veille sans \u00eatre s\u00fbr de l'intensit\u00e9 de son sommeil. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est rompu \u2014 tout sommeil rompt les ablutions"},
              {id:"b",text:"Son \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 est intact \u2014 seul le sommeil PROFOND (perte de conscience des alentours) rompt"},
              {id:"c",text:"Il \u00e9value : si ses membres sont d\u00e9contract\u00e9s et repos\u00e9s = sommeil profond = renouveler"},
              {id:"d",text:"Il renouvelle syst\u00e9matiquement par pr\u00e9caution"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b distingue \u0627\u0644\u0646\u0648\u0645 \u0627\u0644\u062b\u0642\u064a\u0644 (sommeil profond = rompt \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621) du sommeil l\u00e9ger (ne rompt pas). L'indicateur pratique : si la personne n'a pas perdu conscience de son environnement, c'est l\u00e9ger. En cas de doute r\u00e9el chez une personne normale (hors \u0627\u0644\u0648\u064e\u0633\u0652\u0648\u064e\u0627\u0633), le renouvellement est prudent."
          }
        ,
          {
            id: "q-pur-51",
            text: "Qu'est-ce que l'<strong>\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621</strong> ?",
            choices: [
            {id:"a",text:"Le nettoyage du corps avant la pri\u00e8re"},
            {id:"b",text:"Le nettoyage des parties intimes apr\u00e8s l'urine ou les selles, avant le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"},
            {id:"c",text:"Un substitut du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 en voyage"},
            {id:"d",text:"L'\u00e9quivalent du \u0627\u0644\u063a\u064f\u0633\u0652\u0644 pour les femmes"}
            ],
            correctId: "b",
            explanation: "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 est le nettoyage obligatoire des parties intimes apr\u00e8s \u0642\u0636\u0627\u0621 \u0627\u0644\u062d\u0627\u062c\u0629 (urine ou selles). Il s'effectue AVANT le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 \u2014 la s\u00e9quence correcte est : passage aux toilettes \u2192 \u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u2192 \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Omettre l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 alors que la zone est souill\u00e9e compromet le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 pour la pri\u00e8re."
          },
          {
            id: "q-pur-52",
            text: "Dans l'<strong>\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631</strong> (essuyage avec pierres/papier), quel est le nombre minimum de passages ?",
            choices: [
            {id:"a",text:"1 passage suffit"},
            {id:"b",text:"2 passages"},
            {id:"c",text:"3 passages minimum, en nombre impair"},
            {id:"d",text:"5 passages minimum"}
            ],
            correctId: "c",
            explanation: "L'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 exige au minimum 3 passages (en nombre impair). Si 3 ne suffisent pas \u00e0 nettoyer compl\u00e8tement, on continue jusqu'\u00e0 propret\u00e9. Le Proph\u00e8te \ufdfa a interdit moins de 3 pierres. Le nombre doit rester impair (3, 5, 7\u2026)."
          },
          {
            id: "q-pur-53",
            text: "<strong>PI\u00c8GE :</strong> Peut-on utiliser des os pour l'<strong>\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631</strong> ?",
            choices: [
            {id:"a",text:"Oui \u2014 os propres uniquement"},
            {id:"b",text:"Oui s'ils sont secs"},
            {id:"c",text:"Non \u2014 le Proph\u00e8te \ufdfa l'a formellement interdit"},
            {id:"d",text:"Oui en cas de n\u00e9cessit\u00e9 absolue"}
            ],
            correctId: "c",
            explanation: "Le Proph\u00e8te \ufdfa a interdit l'utilisation d'os pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 : \u00ab \u0644\u0627 \u062a\u0633\u062a\u0646\u062c\u0648\u0627 \u0628\u0627\u0644\u0639\u0638\u0627\u0645 \u0641\u0625\u0646\u0647\u0627 \u0632\u0627\u062f \u0625\u062e\u0648\u0627\u0646\u0643\u0645 \u0645\u0646 \u0627\u0644\u062c\u0646 \u00bb \u2014 les os sont la nourriture des djinns. Sont \u00e9galement interdits : la nourriture, le fumier, les mati\u00e8res sacr\u00e9es, la main droite."
          },
          {
            id: "q-pur-54",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim fait l'<strong>\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631</strong> avec sa main droite. Est-ce correct ?",
            choices: [
            {id:"a",text:"Oui \u2014 il n'y a pas de r\u00e8gle sur la main"},
            {id:"b",text:"Oui si la main gauche est bless\u00e9e"},
            {id:"c",text:"Non \u2014 il est makr\u016bh d'utiliser la main droite pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 ou \u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621"},
            {id:"d",text:"Oui mais seulement pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 \u00e0 l'eau"}
            ],
            correctId: "c",
            explanation: "Il est makr\u016bh (d\u00e9conseill\u00e9 et interdit selon certains) d'utiliser la main droite pour l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0646\u0652\u062c\u064e\u0627\u0621 ou l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631. Le Proph\u00e8te \ufdfa : \u00ab \u0644\u0627 \u064a\u0645\u0633\u062d \u0623\u062d\u062f\u0643\u0645 \u0630\u0643\u0631\u0647 \u0628\u064a\u0645\u064a\u0646\u0647 \u00bb. La main gauche est r\u00e9serv\u00e9e \u00e0 cette fonction de nettoyage."
          },
          {
            id: "q-pur-55",
            text: "<strong>NUANCE :</strong> La souillure a d\u00e9pass\u00e9 la zone intime habituelle. L'<strong>\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631</strong> seul suffit-il ?",
            choices: [
            {id:"a",text:"Oui \u2014 l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 suffit toujours"},
            {id:"b",text:"Non \u2014 si la souillure s'est \u00e9tendue, l'eau devient obligatoire"},
            {id:"c",text:"Oui mais avec 5 passages minimum"},
            {id:"d",text:"Seulement si les traces sont visibles"}
            ],
            correctId: "b",
            explanation: "Si la souillure a d\u00e9pass\u00e9 la zone habituelle (\u0627\u0644\u0630\u0631\u0648\u0631), l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 seul ne suffit plus selon le rite malikite \u2014 l'eau devient obligatoire. Pour la zone habituelle non \u00e9tendue, l'\u0627\u0644\u0627\u0633\u0652\u062a\u0650\u062c\u0652\u0645\u064e\u0627\u0631 seul suffit."
          },
          {
            id: "q-pur-56",
            text: "Quelles sont les conditions des <strong>\u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646</strong> (chaussures) pour que le \u0645\u064e\u0633\u0652\u062d dessus soit valide ?",
            choices: [
            {id:"a",text:"Juste \u00eatre propres et couvrir le pied"},
            {id:"b",text:"Cuir pr\u00e9dominant, couvrir les chevilles, enfil\u00e9s en \u00e9tat d'ablution, propres, non d\u00e9chir\u00e9s sur 1/3 ou plus"},
            {id:"c",text:"N'importe quelle chaussette ferm\u00e9e couvrant les chevilles"},
            {id:"d",text:"Cuir uniquement, sans condition suppl\u00e9mentaire"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr d\u00e9taille les conditions : (1) mati\u00e8re : cuir pr\u00e9dominant cousu (non coll\u00e9) ; (2) couvrir les chevilles en les incluant ; (3) enfil\u00e9s en \u00e9tat de \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 humide ; (4) propres (sans \u0646\u062c\u0627\u0633\u0629) ; (5) non d\u00e9chir\u00e9s sur 1/3 du pied ou plus. Toutes ces conditions sont simultan\u00e9ment requises."
          },
          {
            id: "q-pur-57",
            text: "<strong>SP\u00c9CIFICIT\u00c9 MALIKITE :</strong> Le \u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 est-il limit\u00e9 dans le temps dans le rite malikite ?",
            choices: [
            {id:"a",text:"Oui \u2014 24h pour le r\u00e9sident, 72h pour le voyageur"},
            {id:"b",text:"Non \u2014 il n'est pas limit\u00e9 dans le temps selon le rite malikite"},
            {id:"c",text:"Oui \u2014 une semaine maximum"},
            {id:"d",text:"Non \u2014 mais seulement pour le voyageur"}
            ],
            correctId: "b",
            explanation: "SP\u00c9CIFICIT\u00c9 MALIKITE FONDAMENTALE : le \u0645\u064e\u0633\u0652\u062d \u0639\u0644\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 n'est pas limit\u00e9 dans le temps dans le rite malikite, contrairement aux \u00e9coles hanafite et ch\u0101fi\u02bfite (24h r\u00e9sident, 72h voyageur). Doctrine-malikite.fr cite Al-Jaz\u012br\u012b : il est pr\u00e9f\u00e9rable de les enlever chaque vendredi ou semaine pour faire le \u0627\u0644\u063a\u064f\u0633\u0652\u0644, mais sans obligation de d\u00e9lai."
          },
          {
            id: "q-pur-58",
            text: "<strong>PI\u00c8GE :</strong> Khalid a fait le \u0645\u064e\u0633\u0652\u062d \u0639\u0644\u0649 \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0647 puis enl\u00e8ve ses chaussures. Que doit-il faire imm\u00e9diatement ?",
            choices: [
            {id:"a",text:"Rien \u2014 le \u0645\u064e\u0633\u0652\u062d reste valide"},
            {id:"b",text:"Laver imm\u00e9diatement les pieds pour que le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 reste valide"},
            {id:"c",text:"Refaire \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 complet depuis le d\u00e9but"},
            {id:"d",text:"Seulement s'il veut prier"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr (Al-Jaz\u012br\u012b) : si on enl\u00e8ve les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 apr\u00e8s avoir fait le \u0645\u064e\u0633\u0652\u062d \u2192 laver IMM\u00c9DIATEMENT les pieds aux chevilles pour que le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 reste valide. Si on oublie de les laver imm\u00e9diatement et qu'un long d\u00e9lai passe \u2192 refaire \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 complet."
          },
          {
            id: "q-pur-59",
            text: "Peut-on faire le \u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646 si on est en \u00e9tat de <strong>\u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629</strong> ?",
            choices: [
            {id:"a",text:"Oui \u2014 le \u0645\u064e\u0633\u0652\u062d couvre tout"},
            {id:"b",text:"Non \u2014 l'\u00e9tat de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 exige le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 qui oblige \u00e0 laver les pieds directement"},
            {id:"c",text:"Seulement si on fait le \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645"},
            {id:"d",text:"Oui mais avec renouvellement chaque jour"}
            ],
            correctId: "b",
            explanation: "En \u00e9tat de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629, le \u0627\u0644\u063a\u064f\u0633\u0652\u0644 est obligatoire et exige le \u0627\u0644\u0639\u064f\u0645\u064f\u0648\u0645 (g\u00e9n\u00e9ralisation de l'eau \u00e0 tout le corps, dont les pieds). On ne peut pas se contenter du \u0645\u064e\u0633\u0652\u062d sur les \u062e\u064f\u0641\u064e\u0651\u064a\u0652\u0646. Le \u0645\u064e\u0633\u0652\u062d n'est valide que dans le cadre du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 mineur, pas du \u0627\u0644\u063a\u064f\u0633\u0652\u0644."
          },
          {
            id: "q-pur-60",
            text: "La <strong>\u062c\u064e\u0628\u0650\u064a\u0631\u064e\u0629</strong> (pansement/pl\u00e2tre) \u2014 que fait-on lors du \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ?",
            choices: [
            {id:"a",text:"On ignore ce membre et on fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 sur les autres seulement"},
            {id:"b",text:"On fait \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour tout le corps"},
            {id:"c",text:"On fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 normalement sur les membres sains et on essuie (\u0645\u064e\u0633\u0652\u062d) le pansement sur le membre bless\u00e9"},
            {id:"d",text:"On attend la gu\u00e9rison pour faire le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.Mudawwana (المُدَوَّنَة) : on fait \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 normalement sur tous les membres sains, et arriv\u00e9 au membre bless\u00e9, on passe la main mouill\u00e9e UNE FOIS sur le pansement (\u0645\u064e\u0633\u0652\u062d). Si m\u00eame le \u0645\u064e\u0633\u0652\u062d direct risque de nuire : on essuie le bandage qui couvre la blessure."
          },
          {
            id: "q-pur-61",
            text: "<strong>PI\u00c8GE :</strong> Farid enl\u00e8ve son pl\u00e2tre au milieu de sa pri\u00e8re. Que se passe-t-il ?",
            choices: [
            {id:"a",text:"La pri\u00e8re est valide \u2014 le pl\u00e2tre n'affect pas la pri\u00e8re"},
            {id:"b",text:"Il doit remettre le pl\u00e2tre, refaire le \u0645\u064e\u0633\u0652\u062d et reprendre la pri\u00e8re"},
            {id:"c",text:"Il continue sa pri\u00e8re normalement"},
            {id:"d",text:"Il doit seulement compl\u00e9ter sa pri\u00e8re et en refaire une autre apr\u00e8s"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : le pansement/pl\u00e2tre DOIT \u00eatre gard\u00e9 jusqu'\u00e0 la fin de la pri\u00e8re. S'il est retir\u00e9 ou tombe avant la fin \u2192 remettre le bandage, refaire le \u0645\u064e\u0633\u0652\u062d et reprendre la pri\u00e8re. La pri\u00e8re accomplie avec un pl\u00e2tre non fix\u00e9 correctement est invalide."
          },
          {
            id: "q-pur-62",
            text: "Quand le membre bless\u00e9 gu\u00e9rit et qu'on retire le pl\u00e2tre, que fait-on pour le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 ?",
            choices: [
            {id:"a",text:"On continue \u00e0 faire le \u0645\u064e\u0633\u0652\u062d par habitude"},
            {id:"b",text:"On revient obligatoirement au lavage avec l'eau pour ce membre"},
            {id:"c",text:"On peut choisir entre \u0645\u064e\u0633\u0652\u062d et lavage"},
            {id:"d",text:"On fait \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 par prudence"}
            ],
            correctId: "b",
            explanation: "D\u00e8s que le membre est gu\u00e9ri et que le pl\u00e2tre est retir\u00e9, la dispense du \u0645\u064e\u0633\u0652\u062d prend fin. On revient obligatoirement au lavage avec l'eau (\u063a\u0633\u0644 \u0627\u0644\u0639\u0636\u0648) pour ce membre dans les ablutions suivantes."
          },
          {
            id: "q-pur-63",
            text: "Quand doit-on passer au <strong>\u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645</strong> plut\u00f4t qu'au \u0645\u064e\u0633\u0652\u062d \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u062c\u064e\u0628\u0650\u064a\u0631\u064e\u0629 selon doctrine-malikite.fr ?",
            choices: [
            {id:"a",text:"Toujours quand il y a un pansement"},
            {id:"b",text:"Quand le lavage des membres SAINS eux-m\u00eames provoque un pr\u00e9judice, ou quand la majorit\u00e9 du corps est bless\u00e9e"},
            {id:"c",text:"Uniquement si le m\u00e9decin le prescrit"},
            {id:"d",text:"Apr\u00e8s 3 jours d'utilisation du pansement"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr distingue deux seuils : (1) si laver les membres sains eux-m\u00eames provoque un pr\u00e9judice \u2192 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 ; (2) si la grande majorit\u00e9 du corps est bless\u00e9e (ex: ne reste qu'une main ou un pied de sain) \u2192 \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 est obligatoire. Sinon : \u0645\u064e\u0633\u0652\u062d sur le pansement, lavage du reste."
          },
          {
            id: "q-pur-64",
            text: "Quelles sont les trois cat\u00e9gories d'eau selon leur statut l\u00e9gal en الفِقْه malikite ?",
            choices: [
            {id:"a",text:"Eau du ciel, eau de source, eau de mer"},
            {id:"b",text:"Eau pure et purifiante (\u0645\u064f\u0637\u064e\u0647\u0650\u0651\u0631\u064e\u0629) / eau pure mais non purifiante / eau impure (\u0646\u064e\u062c\u0650\u0633\u064e\u0629)"},
            {id:"c",text:"Eau froide, eau ti\u00e8de, eau chaude"},
            {id:"d",text:"Eau courante, eau stagnante, eau stock\u00e9e"}
            ],
            correctId: "b",
            explanation: "Les trois cat\u00e9gories : (1) \u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629 \u0645\u064f\u0637\u064e\u0647\u0650\u0651\u0631\u064e\u0629 \u2014 eau pure et apte \u00e0 purifier (pluie, rivi\u00e8res, puits, mer, neige\u2026) ; (2) \u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629 \u063a\u064e\u064a\u0631\u064f \u0645\u064f\u0637\u064e\u0647\u0650\u0651\u0631\u064e\u0629 \u2014 eau pure mais inapte \u00e0 purifier (eau ayant d\u00e9j\u00e0 servi aux ablutions, eau de rose, eau tr\u00e8s alt\u00e9r\u00e9e par une substance pure comme du savon excessif) ; (3) \u0646\u064e\u062c\u0650\u0633\u064e\u0629 \u2014 eau impure (souill\u00e9e par une \u0646\u064e\u062c\u064e\u0627\u0633\u064e\u0629)."
          },
          {
            id: "q-pur-65",
            text: "<strong>PI\u00c8GE :</strong> Hassan se demande si l'eau dans laquelle son chat a bu est valide pour le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621. Quelle est la r\u00e8gle malikite ?",
            choices: [
            {id:"a",text:"Impure \u2014 les animaux souillent l'eau"},
            {id:"b",text:"Pure et valide \u2014 le chat (\u0648\u062d\u064a\u0648\u0627\u0646 \u0645\u0623\u0643\u0648\u0644 \u0627\u0644\u0644\u062d\u0645) est pur et son contact ne souille pas l'eau"},
            {id:"c",text:"Makr\u016bh d'utiliser cette eau"},
            {id:"d",text:"Valide seulement si l'eau est abondante"}
            ],
            correctId: "b",
            explanation: "Les animaux dont la chair est licite (comme le chat) sont purs (\u0637\u0627\u0647\u0631) et leur salive ne souille pas l'eau. Le Proph\u00e8te \ufdfa a valid\u00e9 l'eau apr\u00e8s qu'un chat en ait bu. Exception : le porc et les animaux impurs. L'eau reste \u0637\u064e\u0627\u0647\u0650\u0631\u064e\u0629 \u0645\u064f\u0637\u064e\u0647\u0650\u0651\u0631\u064e\u0629 apr\u00e8s contact avec un animal licite."
          }
        ]
      },

      badge: {
        id: 'badge-purification',
        title: 'MaîṬahāra (الطَّهَارَة)',
        arabicTitle: 'إتقان الطهارة',
        icon: 'water',
        color: 'silver',
        unlockCondition: 'Questionnaire "La Purification" avec un score ≥ 85 %'
      }
    },

    /* ═══════════════════════════════════════════════════
       SUJET 2 — La Prière (الصلاة)
       ═══════════════════════════════════════════════════ */
    {
      id: 'priere',
      title: 'La Prière',
      arabicTitle: 'الصلاة',
      icon: 'arch',
      description: 'Horaires des prières, conditions, Farāʾiḍ (الفَرَائِض), Sunna (السُّنَّة), rattrapage des prières et prosternation d\'oubli selon le rite malikite.',

      lessons: [

        /* ── Leçon 1 ── */
        {
          id: 'sal-01',
          title: 'Les Heures des Cinq Prières',
          status: 'available',
          content: [
            { t: 'lead', v: 'La prière ne peut être accomplie que dans son temps légal. L\'école malikite distingue pour chaque prière un temps préféré (mukhtār) — dans lequel la prière a sa pleine valeur — et un temps de nécessité (ḍarūrī) — dans lequel elle reste valide mais hors du temps préféré.' },
            { t: 'h', v: 'الظُّهْر (Déjeuner)' },
            { t: 'ul', v: [
              '<strong>Temps préféré :</strong> du déclin du soleil (zawāl) jusqu\'à ce que l\'ombre d\'un objet atteigne sa propre longueur (qāma).',
              '<strong>Temps de nécessité :</strong> jusqu\'au coucher du soleil (partagé avec العَصْر).'
            ] },
            { t: 'h', v: 'العَصْر (Après-midi)' },
            { t: 'ul', v: [
              '<strong>Temps préféré :</strong> depuis la fin du temps préféré du الظُّهْر (une qāma) jusqu\'au rougissement du soleil (iṣfirār).',
              '<strong>Temps de nécessité :</strong> jusqu\'au coucher du soleil.'
            ] },
            { t: 'h', v: 'المَغْرِب (Coucher)' },
            { t: 'ul', v: [
              '<strong>Temps préféré :</strong> très court — le temps strictement nécessaire pour accomplir la prière après le coucher du soleil, avec toutes ses conditions. C\'est une spécificité du rite malikite.',
              '<strong>Temps de nécessité :</strong> jusqu\'à la disparition du crépuscule rouge (shafaq), partagé avec العِشَاء.'
            ] },
            { t: 'h', v: 'العِشَاء (Nuit)' },
            { t: 'ul', v: [
              '<strong>Temps préféré :</strong> de la disparition du crépuscule rouge jusqu\'au premier tiers de la nuit.',
              '<strong>Temps de nécessité :</strong> jusqu\'à l\'aube (الفَجْر).'
            ] },
            { t: 'h', v: 'الصُّبْح (Aube)' },
            { t: 'ul', v: [
              '<strong>Temps préféré :</strong> de l\'apparition du الفَجْر jusqu\'à la forte clarté (isfār aʿlā).',
              '<strong>Temps de nécessité :</strong> jusqu\'au lever du soleil.'
            ] },
            { t: 'h', v: 'Avertissement important' },
            { t: 'p', v: 'Al-Akhḍarī précise clairement : « Celui qui retarde la prière jusqu\'à ce que son temps soit sorti commet un grand péché, à moins qu\'il n\'ait oublié ou dormit. »' },
            { t: 'h', v: 'Prières surérogatoires interdites à certains moments' },
            { t: 'ul', v: [
              'Après la prière de الصُّبْح jusqu\'au lever du soleil.',
              'Après la prière de العَصْر jusqu\'à la prière du المَغْرِب.',
              'Après l\'entrée de l\'aube — sauf la prière habituelle de la nuit pour celui qui l\'a manquée.',
              'Quand l\'الإِمَام de la Jumuʿa s\'asseoit sur le minbar.',
              'Après la Jumuʿa jusqu\'à la sortie de la mosquée.'
            ] },
            { t: 'ar', v: 'ومَن أخّرَ الصلاةَ حتّى خرجَ وقتُها فعليهِ ذَنبٌ عظيمٌ إلّا أن يكونَ ناسياً أو نائماً', n: '« Celui qui retarde la prière jusqu\'à la sortie de son temps commet un grand péché, à moins qu\'il n\'ait oublié ou dormi. » — al-Akhḍarī' }
          ]
        },

        /* ── Leçon 2 ── */
        {
          id: 'sal-02',
          title: 'Les Conditions de la Prière (Shurūṭ)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Avant d\'entrer en prière, sept conditions (shurūṭ) doivent être réunies. Leur absence invalide la prière.' },
            { t: 'h', v: 'Les sept conditions de la prière' },
            { t: 'ul', v: [
              '<strong>1. La pureté du ḤḤadath (الحَدَث)</strong> — Wuḍūʾ (الوُضُوء)\' ou le Ghusl (الغُسْل) si nécessaire.',
              '<strong>2. La pureté du الخَبَث</strong> — Najāsa (النَّجَاسَة) sur le corps, le vêtement et le lieu de prière.',
              '<strong>3. Couvrir la ʿawra</strong>.',
              '<strong>4. Faire face à la القِبْلَة</strong> (direction de La Mecque).',
              '<strong>5. Éviter la parole</strong>.',
              '<strong>6. Éviter les actions nombreuses</strong>.',
              '(Implicitement : l\'entrée dans le temps de la prière.)'
            ] },
            { t: 'h', v: 'La ʿawra de l\'homme et de la femme' },
            { t: 'ul', v: [
              '<strong>L\'homme</strong> : ce qui se trouve entre le nombril et les genoux (tous deux exclus selon la règle classique).',
              '<strong>La femme</strong> : tout le corps est ʿawra à l\'exception du visage et des deux paumes. L\'auteur note qu\'Makrūh (مَكرُوه) (déconseillé) de prier en sous-vêtements seuls, sauf si un autre vêtement les recouvre.'
            ] },
            { t: 'h', v: 'Situations d\'exception' },
            { t: 'ul', v: [
              'Vêtement souillé sans autre vêtement disponible ni eau pour le laver, et risque de sortie du temps de prière : Najāsa (النَّجَاسَة).',
              'Pas de vêtement du tout pour couvrir la ʿawra : on prie nu.',
              'Direction de la القِبْلَة mal estimée : on répète la prière dans le temps.',
              '<strong>On ne peut jamais différer la prière à cause du manque de pureté.</strong> Celui qui le fait est en désobéissance.'
            ] },
            { t: 'note', v: 'Principe fondamental : l\'absence de condition n\'annule la prière que si elle est constatée avec certitude. Les doutes à ce sujet ne suffisent généralement pas à invalider la prière accomplie.' }
          ]
        },

        /* ── Leçon 3 ── */
        {
          id: 'sal-03',
          title: 'Les Obligations de la Prière (الفَرَائِض al-الصَّلَاة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Farāʾiḍ (الفَرَائِض) (obligations) de la prière sont les éléments constitutifs essentiels sans lesquels elle est nulle et doit être recommencée. Al-Akhḍarī en dresse la liste complète.' },
            { t: 'h', v: 'Farāʾiḍ (الفَرَائِض) de la prière' },
            { t: 'ul', v: [
              '<strong>1. L\'intention de la prière spécifiéNiyya (النِّيَّة)</strong> — savoir quelle prière l\'on accomplit.',
              '<strong>2. La تَكْبِيرَةُ الإِحْرَام</strong> (Allāhu Akbar d\'entrée) <strong>et le fait d\'être debout lors de son énonciation</strong>.',
              '<strong>3. Fātiḥa (الفَاتِحَة)</strong> (la sourate d\'ouverture) <strong>et le fait d\'être debout lors de sa récitation</strong>.',
              '<strong>4. Rukūʿ (الرُّكُوع)ʿ</strong> (inclination) et le relèvement (rafʿ) Rukūʿ (الرُّكُوع)ʿ.',
              '<strong>5. La prosternation sur le front (السُّجُود ʿalā al-jabha)</strong> et le relèvement.',
              '<strong>6. L\'ʿitidāl</strong> (être bien droit aprèRukūʿ (الرُّكُوع)ʿ).',
              '<strong>7. La ṭumaʾnīna</strong> — la tranquillité des membres à chaque posture.',
              '<strong>8. Le tartīb</strong> — respecter l\'ordre des obligations.',
              '<strong>9. Le salām</strong> et la position assise (julūs) qui l\'accompagne.'
            ] },
            { t: 'h', v: 'La condition de l\'Niyya (النِّيَّة)' },
            { t: 'p', v: 'L\'auteur précise : « La condition de l\'intention est d\'être simultanée à la تَكْبِيرَةُ الإِحْرَام. » Elle doit être présente dans le cœur au moment exact où l\'on prononce le premier Allāhu Akbar.' },
            { t: 'h', v: 'La dimension spirituelle de la prière' },
            { t: 'ar', v: 'للصلاةِ نورٌ عظيمٌ تُشرقُ به قلوبُ المصلّينَ ولا ينالُه إلّا الخاشعون', n: '« La prière est une lumière immense qui illumine les cœurs de ceux qui prient — et seuls les humbles et recueillis l\'atteignent. » — al-Akhḍarī' },
            { t: 'p', v: 'Al-Akhḍarī rappelle que lorsque tu viens à la prière, tu dois libérer ton cœur de toute préoccupation mondaine et t\'occuper à contempler ton Seigneur. La prière est humilité et soumission à Allāh par la station debout, l\'inclination et la prosternation — et glorification par le التَّكْبِير, le tasbīḥ et le dhikr.' },
            { t: 'note', v: 'Quiconque accomplit délibérément une prière obligatoire debout alors qu\'il peut rester assis, ou assis alors qu\'il peut rester debout — sa prière est invalide. L\'ordre de ces états est lui-même obligatoire.' }
          ]
        },

        /* ── Leçon 4 ── */
        {
          id: 'sal-04',
          title: 'Sunna (السُّنَّة) Makrūh (مَكرُوه)āt de la Prière',
          status: 'available',
          content: [
            { t: 'lead', v: 'Au-delà des obligations, la prièSunna (السُّنَّة) qui la complètent et l\'embellissent, Makrūh (مَكرُوه) (déconseillés) qui en diminuent la valeur.' },
            { t: 'h', v: 'Sunna (السُّنَّة) de la prière (principales)' },
            { t: 'ul', v: [
              'L\'Iqāma (الإِقَامَة) (appel à la prière intérieur avant de commencer).',
              'La sourate aprèFātiḥa (الفَاتِحَة), et être debout lors de sa récitation.',
              'Réciter à voix basse dans les prières silencieuses, à voix haute dans les prières vocales.',
              'Dire « samiʿa Allāhu li-man ḥamidah » lors du relèRukūʿ (الرُّكُوع)ʿ.',
              'Tous les التَّكْبِيرāt de transition — sauf le premier, qui est une obligation.',
              'Tashahhud (التَّشَهُّد)s et la position assise pour eux.',
              'PrécéFātiḥa (الفَاتِحَة) avant la sourate.',
              'La deuxième et troisième salām.',
              'Ṣalāt (الصَّلَاة) sur le Prophète ﷺ.',
              'La prosternation sur le nez, les paumes, les genoux et les orteils.',
              'La السُّتْرَة (obstacle placé devant le priant) pour le priant seul (non pour le المَأمُوم).'
            ] },
            { t: 'h', v: 'Les vertus (faḍāʾil) de la prière' },
            { t: 'ul', v: [
              'Lever les mains au niveau des oreilles lors du تَكْبِيرَةُ الإِحْرَام.',
              'Dire « Rabbanā wa-laka\'l-ḥamd » (المَأمُوم et priant seul).',
              'L\'Āmīn aprèFātiḥa (الفَاتِحَة) — l\'الإِمَام le dit en silence dans les prières vocales.',
              'Rukūʿ (الرُّكُوع)ʿ et la supplication (duʿāʾ) dans la prosternation.',
              'Allonger la récitation dans le الصُّبْح et le الظُّهْر, raccourcir dans le العَصْر et le المَغْرِب, modérer dans le العِشَاء.',
              'Qunūt (القُنُوت) à Rukūʿ (الرُّكُوع)ʿ.',
              'Déplacer le doigt (index) Tashahhud (التَّشَهُّد).'
            ] },
            { t: 'h', v: 'Makrūh (مَكرُوه) (déconseillés) dans la prière' },
            { t: 'ul', v: [
              'Se tourner (même légèrement) pendant la prière.',
              'Fermer les yeux.',
              'Dire la Basmala et le Taʿawwudh dans la prière obligatoire (permis en prière surérogatoire).',
              'Se tenir sur un seul pied — sauf si le priant debout doit rester longtemps.',
              'Joindre les pieds.',
              'Mettre un objet dans la bouche.',
              'Penser aux affaires mondaines et tout ce qui nuit au khushūʿ.'
            ] }
          ]
        },

        /* ── Leçon 5 ── */
        {
          id: 'sal-05',
          title: 'Les Positions de la Prière selon la Capacité',
          status: 'available',
          content: [
            { t: 'lead', v: 'Islam facilite la prière pour les malades et les incapables. L\'école malikite établit une hiérarchie de 7 positions pour la prière obligatoire, dont 4 sont ordonnées obligatoirement et 3 sont recommandées.' },
            { t: 'h', v: 'Les 4 positions obligatoires (dans l\'ordre)' },
            { t: 'ul', v: [
              '<strong>1. Debout sans appui</strong> — position de base.',
              '<strong>2. Debout avec appui</strong> — si l\'on ne peut se tenir sans aide.',
              '<strong>3. Assis sans appui</strong> — si l\'on ne peut se tenir debout.',
              '<strong>4. Assis avec appui</strong> — si l\'on ne peut s\'asseoir sans aide.'
            ] },
            { t: 'p', v: 'Si quelqu\'un est capable d\'une position supérieure mais prie dans une position inférieure — sa prière est invalide. L\'ordre est obligatoire.' },
            { t: 'h', v: 'Les 3 positions recommandées (l\'ordre n\'est pas obligatoire)' },
            { t: 'ul', v: [
              '<strong>5. Sur le côté droit</strong>.',
              '<strong>6. Sur le côté gauche</strong>.',
              '<strong>7. Sur le dos</strong> (face à la القِبْلَة, pieds vers elle).'
            ] },
            { t: 'p', v: 'Si l\'on ne respecte pas l\'ordre dans ces trois positions, la prière n\'est pas invalidée.' },
            { t: 'h', v: 'L\'appui qui invalide la prière' },
            { t: 'p', v: 'L\'appui qui invalide la prière de celui qui peut s\'en passer est celui sur lequel on s\'effondrerait si on l\'enlevait. Si l\'enlèvement de l\'appui ne ferait pas tomber l\'individu, Makrūh (مَكرُوه) (déconseillé).' },
            { t: 'h', v: 'La prière surérogatoire (نَافِلَة)' },
            { t: 'ul', v: [
              'Il est permis à celui qui peut se tenir debout de prier la نَافِلَة assis — mais il reçoit la moitié de la récompense du priant debout.',
              'On peut entrer en prière assis puis se lever, ou entrer debout puis s\'asseoir.',
              'Exception : si l\'on entre avec l\'intention explicite de prier debout, il est alors interdit de s\'asseoir par la suite.'
            ] }
          ]
        },

        /* ── Leçon 6 ── */
        {
          id: 'sal-06',
          title: 'Le Rattrapage des PrièQaḍāʾ (القَضَاء)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Le rattrapage des prièQaḍāʾ (القَضَاء) est une obligation. L\'école malikite en précise les règles d\'ordre, la priorité et les restrictions sur les prières optionnelles pour celui qui a des dettes de prières.' },
            { t: 'h', v: 'Obligation de rattrapage' },
            { t: 'p', v: 'Al-Akhḍarī est formel : « Il est obligatoire de rattraper toutes les prières en dette, et il n\'est pas permis d\'y être négligent. » Celui qui accomplit 5 prières par jour à raison d\'une par temps n\'est pas considéré comme négligent.' },
            { t: 'h', v: 'Comment les rattraper ?' },
            { t: 'p', v: 'La prière de rattrapage est accomplie comme elle aurait dû l\'être : une prière de résidant est rattrapée comme une prière de résidant, une prière de voyageur est rattrapée comme une prière de voyage — même si l\'on se trouve alors dans l\'état opposé au moment du rattrapage.' },
            { t: 'h', v: 'L\'ordre entre rattrapage et prière présente' },
            { t: 'ul', v: [
              'L\'ordre (tartīb) entre deux prières présentes et entre un petit nombre de rattrapages et la prière présente est obligatoire — à condition de s\'en souvenir.',
              '« Petit nombre » (yasīr) = 4 prières ou moins.',
              '<strong>Si l\'on a 4 prières ou moins en dette : les rattraper avant la prière présente, même si le temps de cette dernière sort.</strong>',
              'Le rattrapage peut être accompli à n\'importe quel moment.'
            ] },
            { t: 'h', v: 'Restrictions pour celui qui a des prières en dette' },
            { t: 'ul', v: [
              'Ne pas faire de prières surérogatoires.',
              'Ne pas faire la prière de Ḍuḥā ni le Qiyām du Ramadan.',
              'Autorisé uniquement : le الشَّفْع, le الوِتْر, la prière de الفَجْر (rattrapée), les deux ʿĪdain, la prière des éclipses (Kusūf) et la prière pour la pluie (Istisqāʾ).'
            ] },
            { t: 'h', v: 'Oubli du nombre de prières en dette' },
            { t: 'p', v: 'Si l\'on ne se souvient plus du nombre exact de prières manquées, on en accomplit un nombre suffisant pour ne plus avoir de doute.' },
            { t: 'note', v: 'Les rattrapages peuvent être accomplis en groupe (jamāʿa) si les prières à rattraper sont identiques entre les participants.' }
          ]
        },

        /* ── Leçon 7 ── */
        {
          id: 'sal-07',
          title: 'La Prosternation d\'Oubli (السُّجُود al-السَّهْو)',
          status: 'available',
          content: [
            { t: 'lead', v: 'La prosternation d\'oubli est un acte de miséricorde divine pour le priant qui oublie ou ajoute quelque chose par inadvertance. Selon l\'école malikite, c\'Sunna (السُّنَّة), et son moment varie selon la nature de l\'erreur.' },
            { t: 'ar', v: 'وسجودُ السهوِ في الصلاةِ سُنّةٌ', n: '« La prosternation d\'oubli dans la prière est une السُّنَّة. » — Mukhtaṣar al-Akhḍarī' },
            { t: 'h', v: 'Pour un manque (naqṣ) : avant le salām' },
            { t: 'p', v: 'Deux prosternations avant le salām, après avoir complété Tashahhud (التَّشَهُّد)s, suivies d\'un troisièTashahhud (التَّشَهُّد).' },
            { t: 'h', v: 'Pour un excès (ziyāda) : après le salām' },
            { t: 'p', v: 'Deux prosternations après le salām, suivies d\'Tashahhud (التَّشَهُّد), puis d\'un autre salām.' },
            { t: 'h', v: 'Si l\'on a à la fois manqué et ajouté' },
            { t: 'p', v: 'On prosterne avant le salām (le manque prime).' },
            { t: 'h', v: 'Règles sur l\'oubli des prosternations' },
            { t: 'ul', v: [
              '<strong>Prosternation avant le salām oubliée</strong> : si le souvenir vient rapidement → on prosterne ; si l\'on a tardé ou quitté la mosquée → les prosternations sont nulles, et si elles couvrent 3 Sunna (السُّنَّة) ou plus → la prière est nulle aussi.',
              '<strong>Prosternation après le salām oubliée</strong> : on peut la faire même après un an.',
              'Aucune prosternation ne peut compenser l\'omission d\'une obligation (farīḍa).'
            ] },
            { t: 'h', v: 'Cas spéciaux importants' },
            { t: 'ul', v: [
              'Oublier la voix haute au lieu du silence (ou vice versa) → prosternation avant le salām pour la voix haute, après pour le silence.',
              'Parler par inadvertance → prosternation après le salām.',
              'Terminer la prière (salām) après 2 رَكَعَات par inadvertance → prosternation après le salām.',
              'Ajouter une رَكْعَة ou deux → prosternation après le salām.',
              '<strong>Rire dans la prière (pas sourire) : la prière est nulle</strong>, qu\'on soit distrait ou intentionnel.',
              'La somnolence légère → rien à faire. Sommeil lourd → Wuḍūʾ (الوُضُوء)\' et prière.'
            ] },
            { t: 'note', v: 'Principe à retenir : le manque → avant le salām ; l\'excès → après le salām ; les deux → avant le salām.' },

            { t: 'h', v: 'البِنَاء عَلَى اليَقِين — Construire sur la certitude (doute sur le nombre de رَكَعَات)' },
            { t: 'p', v: 'Si le priant doute en cours de prière du nombre de رَكَعَات accompli (2 ou 3 ? 3 ou 4 ?), il applique le principe du بِنَاء عَلَى اليَقِين : il assume le chiffre dont il est certain, c\'est-à-dire le plus petit. Il complète en conséquence, puis prosterne deux fois avant le salām (car il a peut-être ajouté une رَكْعَة — précaution contre le نَقْص présumé).' },
            { t: 'ar', v: 'إِذَا شَكَّ فِي عَدَدِ رَكَعَاتِهِ بَنَى عَلَى اليَقِينِ وَهُوَ الأَقَل', n: '« S\'il doute du nombre de ses رَكَعَات, il construit sur la certitude, qui est le chiffre le plus petit. » — Akhḍarī' },
            { t: 'ul', v: [
              '<strong>Exemple :</strong> Ibrahim ne sait pas s\'il en est à sa 2ème ou 3ème رَكْعَة du الظُّهْر → il compte 2 (le minimum certain) → continue → complète → prosterne AVANT le salām.',
              'Ce principe s\'applique à tout moment pendant la prière, même si le doute survient juste avant le salām.',
              '<strong>Exception الوَسْوَاس :</strong> celui atteint de scrupules obsessionnels n\'applique pas cette règle — il ignore ses doutes et continue sans prosternation d\'oubli.'
            ] },

            { t: 'h', v: 'البِنَاء لِلمَسبُوق — La reconstruction du retardataire (مَسبُوق)' },
            { t: 'p', v: 'Principe malikite fondamental : <strong>مَا أَدرَكَ المَسبُوقُ فَهُوَ آخِرُ صَلَاتِهِ</strong> — « Ce que le retardataire attrape avec l\'الإِمَام est la FIN de sa prière. » Il complète le DÉBUT de manière indépendante après le salām de l\'الإِمَام. Ce principe est propre au rite malikite ; l\'école chāfiʿite adopte l\'inverse (ce qu\'il attrape = son début).' },
            { t: 'ar', v: 'مَا أَدرَكَ المَسبُوقُ فَهُوَ آخِرُ صَلَاتِهِ وَيَقضِي أَوَّلَهَا', n: '« Ce que le retardataire attrape est la fin de sa prière ; il rattrape son début. » — Akhḍarī' },
            { t: 'h', v: 'Application concrète selon le rite malikite' },
            { t: 'ul', v: [
              '<strong>Attrape 3 رَكَعَات sur 4 (الظُّهْر) :</strong> les 3 رَكَعَات avec l\'الإِمَام = ses 2ème, 3ème, 4ème. Après le salām de l\'الإِمَام, il se lève et prie 1 رَكْعَة (sa 1ère). Tashahhud (التَّشَهُّد) final + salām directement — Tashahhud (التَّشَهُّد) intermédiaire.',
              '<strong>Attrape 2 رَكَعَات sur 4 :</strong> les 2 avec l\'الإِمَام = ses 3ème et 4ème. Après le salām, il prie 2 رَكَعَات (sa 1ère et 2ème). Ces 2 رَكَعَات indépendantes n\'Tashahhud (التَّشَهُّد) entre elles (Tashahhud (التَّشَهُّد) est entre la 2ème et la 3ème, et la 3ème est déjà faite). → Tashahhud (التَّشَهُّد) final après la 2ème رَكْعَة indépendante.',
              '<strong>Attrape 1 رَكْعَة sur 4 :</strong> cette رَكْعَة avec l\'الإِمَام = sa 4ème. Après le salām, il prie 3 رَكَعَات (1ère, 2ème, 3ème). Tashahhud (التَّشَهُّد) après sa 2ème رَكْعَة indépendante (car c\'est sa 2ème globale), puis continue pour la 3èTashahhud (التَّشَهُّد) final.',
              '<strong>Attrape 2 رَكَعَات sur 3 (المَغْرِب) :</strong> avec l\'الإِمَام = sa 2ème et 3ème. Après le salām, il prie 1 رَكْعَة (sa 1ère) directement → Tashahhud (التَّشَهُّد) final → salām.',
              '<strong>Attrape 1 رَكْعَة sur 3 (المَغْرِب) :</strong> avec l\'الإِمَام = sa 3ème. Après le salām, il prie 2 رَكَعَات (sa 1ère et 2ème). Tashahhud (التَّشَهُّد) entre les deux → Tashahhud (التَّشَهُّد) final + salām.'
            ] },
            { t: 'note', v: 'RèTashahhud (التَّشَهُّد) pour le مسبوق (rite malikite) : Tashahhud (التَّشَهُّد) intermédiaire n\'apparaît dans la phase indépendante QUE si la 2ème رَكْعَة indépendante est la 2ème globale de la prière (position habituelle du premier التَّشَهُّد). Si les رَكَعَات rattrapées indépendamment sont la 1ère et la 2ème globales d\'une prière de 4, Tashahhud (التَّشَهُّد) vient après la 2ème indépendante. Si elles sont la 1ère et la 2ème globales d\'une prière de 3 (المَغْرِب), il n\'Tashahhud (التَّشَهُّد) entre elles car la 3ème est déjà faite. Ce point est techniquement difficile et mérite d\'être pratiqué concrètement.' },

            { t: 'h', v: 'Ce qui constitue une رَكْعَة valide pour le مسبوق' },
            { t: 'ul', v: [
              'Dans le rite malikite, attraper l\'الإِمَام en <strong>Rukūʿ (الرُّكُوع)</strong> avant qu\'il se relève suffit pour que cette رَكْعَة compte. Fātiḥa (الفَاتِحَة) lui est pardonnée.',
              'Si le مسبوق arrive alors que l\'الإِمَام est déjà redressé du رُكُوع (i-e، en i\'tidāl ou en سُجُود), cette رَكْعَة ne compte PAS — il suit l\'الإِمَام et rattrapera une رَكْعَة de plus.',
              'Il ne réFātiḥa (الفَاتِحَة) pendant le رُكُوع — il entre directement en رُكُوع avec l\'الإِمَام dès son تَكْبِيرَةُ Iḥrām (الإِحرَام).'
            ] }
          ]
        },

        {
          id: "sal-08",
          title: "\u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644\u060c \u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0635\u064e\u0651\u0648\u0652\u062a \u0648\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 \u2014 Sp\u00e9cificit\u00e9s Malikites",
          status: "available",
          content: [
          {"t": "lead", "v": "Ce chapitre couvre trois sp\u00e9cificit\u00e9s importantes du rite malikite souvent m\u00e9connues : le \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 (position des bras), les r\u00e8gles pr\u00e9cises de la voix haute et basse, et les d\u00e9tails de l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629."},
          {"t": "h", "v": "\u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 \u2014 La position des bras dans la pri\u00e8re"},
          {"t": "p", "v": "<strong>Sp\u00e9cificit\u00e9 malikite majeure :</strong> dans les pri\u00e8res obligatoires (\u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636), le priant laisse ses bras le long du corps (\u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644) \u2014 il NE croise PAS les mains sur la poitrine (\u0627\u0644\u0625\u0650\u0631\u0633\u064e\u0627\u0644 ou \u0644\u064e\u0627 \u0642\u064e\u0628\u0652\u0636). Ceci est la position malikite dans les pri\u00e8res obligatoires."},
          {"t":"ul","v":[
            "<strong>Dans les pri\u00e8res obligatoires :</strong> \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 \u2014 bras le long du corps, d\u00e9contract\u00e9s.",
            "<strong>Dans les pri\u00e8res sur\u00e9rogatoires (\u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644) :</strong> le \u0642\u064e\u0628\u0652\u0636 (croiser les mains) est permis et certains savants malikites le pratiquent pour les \u0646\u0648\u0627\u0641\u0644.",
            "Le d\u00e9bat interne \u00e0 l'\u00e9cole : certains savants malikites tardifs ont aussi permis le \u0642\u064e\u0628\u0652\u0636 dans les \u0641\u0631\u0627\u0626\u0636. L'opinion dominante reste \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 pour les pri\u00e8res obligatoires.",
            "Cette diff\u00e9rence est visible et identifiable \u2014 c'est un marqueur du rite malikite."
          ]},
          {"t": "ar", "v": "\u0627\u0644\u0625\u0650\u0631\u0633\u064e\u0627\u0644\u064f \u0641\u0650\u064a \u0627\u0644\u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629\u0650 \u0648\u064e\u0627\u0644\u0642\u064e\u0628\u0636\u064f \u0641\u0650\u064a \u0627\u0644\u0646\u064e\u0651\u0627\u0641\u0650\u0644\u064e\u0629\u0650 \u0645\u064f\u0633\u062a\u064e\u062d\u064e\u0628\u064c\u0651", "n": "\u00ab Le السَّدْل (bras d\u00e9contract\u00e9s) dans la pri\u00e8re obligatoire et le qab\u1e0d (mains crois\u00e9es) dans la pri\u00e8re sur\u00e9rogatoire sont recommand\u00e9s. \u00bb \u2014 Position dominante malikite"},
          {"t": "h", "v": "\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u062c\u064e\u0647\u0652\u0631 \u0648\u0627\u0644\u0633\u0650\u0651\u0631\u0651 \u2014 Voix haute et voix basse (r\u00e8gles pr\u00e9cises)"},
          {"t": "p", "v": "La distinction entre r\u00e9citation \u00e0 voix haute (\u0627\u0644\u062c\u064e\u0647\u0652\u0631) et silencieuse (\u0627\u0644\u0633\u0650\u0651\u0631\u0651) est une r\u00e8gle de la pri\u00e8re, non une simple pr\u00e9f\u00e9rence."},
          {"t":"ul","v":[
            "<strong>Pri\u00e8res \u00e0 voix haute :</strong> \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d, \u0627\u0644\u0645\u064e\u063a\u0631\u0650\u0628 (2 premi\u00e8res rak\u02bf\u0101t), \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621 (2 premi\u00e8res rak\u02bf\u0101t), \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629, \u0627\u0644\u0639\u0650\u064a\u062f\u064e\u0627\u0646, \u0627\u0644\u0627\u0633\u0652\u062a\u0650\u0633\u0652\u0642\u064e\u0627\u0621, \u0627\u0644\u062e\u064f\u0633\u064f\u0648\u0641.",
            "<strong>Pri\u00e8res \u00e0 voix basse (silencieuses) :</strong> \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631, \u0627\u0644\u0639\u064e\u0635\u0652\u0631, \u0627\u0644\u0645\u064e\u063a\u0631\u0650\u0628 (3\u00e8me rak\u02bfa), \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621 (3\u00e8me et 4\u00e8me)."
          ]},
          {"t": "h", "v": "D\u00e9finition de la voix haute et voix basse selon le rite malikite"},
          {"t":"ul","v":[
            "<strong>Pour l'homme \u2014 voix basse (\u0633\u0650\u0631\u0651) :</strong> limite inf\u00e9rieure = bouger la langue obligatoirement (sans \u00e7a, la r\u00e9citation n'est pas valide) ; limite sup\u00e9rieure = se faire entendre soi-m\u00eame.",
            "<strong>Pour l'homme \u2014 voix haute (\u062c\u064e\u0647\u0652\u0631) :</strong> limite inf\u00e9rieure = se faire entendre celui qui est \u00e0 c\u00f4t\u00e9 ; pas de limite sup\u00e9rieure.",
            "<strong>Pour la femme \u2014 voix basse :</strong> bouger la langue sans se faire entendre elle-m\u00eame.",
            "<strong>Pour la femme \u2014 voix haute :</strong> se faire entendre elle-m\u00eame uniquement (sans faire entendre les autres).",
            "Important : m\u00eame en s\u0650\u0631\u0651, ne pas simplement penser les mots dans sa t\u00eate \u2014 la langue doit bouger."
          ]},
          {"t": "h", "v": "\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 \u2014 Formule, statut et d\u00e9tails pratiques"},
          {"t": "p", "v": "L'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 est l'appel int\u00e9rieur qui marque l'entr\u00e9e dans la pri\u00e8re. Sa formule selon la Mudawwana (المُدَوَّنَة) de Sahn\u00fbn :"},
          {"t": "ar", "v": "\u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u2014 \u0623\u0634\u0647\u062f \u0623\u0646 \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647 \u2014 \u0623\u0634\u0647\u062f \u0623\u0646 \u0645\u062d\u0645\u062f\u064b\u0627 \u0631\u0633\u0648\u0644 \u0627\u0644\u0644\u0647 \u2014 \u062d\u064e\u064a\u064e\u0651 \u0639\u0644\u0649 \u0627\u0644\u0635\u0644\u0627\u0629 \u2014 \u062d\u064e\u064a\u064e\u0651 \u0639\u0644\u0649 \u0627\u0644\u0641\u0644\u0627\u062d \u2014 \u0642\u062f \u0642\u0627\u0645\u062a \u0627\u0644\u0635\u0644\u0627\u0629 \u2014 \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u2014 \u0644\u0627 \u0625\u0644\u0647 \u0625\u0644\u0627 \u0627\u0644\u0644\u0647", "n": "Formule de l'Iq\u0101ma selon la Mudawwana (المُدَوَّنَة) de Sahn\u016bn (version malikite)"},
          {"t":"ul","v":[
            "<strong>Statut :</strong> Sunna (السُّنَّة) pour l'homme qui prie seul ; mand\u00fbb (السُّنَّة moins appuy\u00e9e) pour la femme seule.",
            "<strong>Voix :</strong> \u00e0 voix basse pour l'homme qui prie seul ; \u00e0 voix haute si l'homme prie en groupe.",
            "<strong>La femme :</strong> ne fait pas l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 pour les autres \u2014 si un homme adulte est pr\u00e9sent, c'est lui qui la fait.",
            "<strong>Si oubli\u00e9 :</strong> la pri\u00e8re reste valide, que ce soit par oubli ou d\u00e9lib\u00e9r\u00e9ment (d'apr\u00e8s l'Im\u0101m M\u0101lik dans la المُدَوَّنَة).",
            "<strong>D\u00e9lib\u00e9r\u00e9ment omise :</strong> valide, mais on demande le pardon d'Allah (\u0627\u0633\u062a\u063a\u0641\u0627\u0631).",
            "<strong>Ne pas confondre</strong> l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 avec l'\u0623\u064e\u0630\u064e\u0627\u0646 \u2014 l'\u0627\u0630\u0627\u0646 est \u0641\u0631\u0636 \u0643\u0641\u0627\u064a\u0629 pour la communaut\u00e9, tandis que l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 Sunna (السُّنَّة) individuelle."
          ]},
          {"t": "note", "v": "La \u0628\u064e\u0633\u0645\u064e\u0644\u064e\u0629 (Bismillah) et l'\u0627\u0633\u062a\u0639\u0627\u0630\u0629 (A'\u016bdhu bill\u0101h) avant la F\u0101ti\u1e25a dans les pri\u00e8res OBLIGATOIRES sont makr\u016bh selon le rite malikite (d'apr\u00e8s l'Akh\u1e0dar\u012b). Ce n'est pas interdit, mais c'est d\u00e9conseill\u00e9 dans les \u0641\u0631\u0627\u0626\u0636. En \u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644, elles sont permises."}
          ]
        }

,

        {
          id: "sal-09",
          title: "\u0633\u064f\u0646\u064e\u0651\u0629 \u0627\u0644\u0641\u064e\u062c\u0652\u0631\u060c \u0647\u064a\u0626\u0627\u062a \u0627\u0644\u0635\u064e\u0651\u0644\u064e\u0627\u0629 \u0648\u0627\u0644\u0648\u0650\u062a\u0652\u0631 \u2014 D\u00e9tails Pratiques Essentiels",
          status: "available",
          content: [
          {"t": "lead", "v": "Ce chapitre couvre les d\u00e9tails pratiques fondamentaux souvent enseign\u00e9s tardivement : Sunna (السُّنَّة) du Fadjr selon la Mudawwana (المُدَوَّنَة), les postures corporelles pr\u00e9cises (prosternation, assise, index), la structure du الوِتْر et du Shaf\u02bf, et les r\u00e8gles du second sal\u0101m."},
          {"t": "h", "v": "\u0633\u064f\u0646\u064e\u0651\u0629\u064f \u0627\u0644\u0641\u064e\u062c\u0652\u0631 \u2014 Sunna (السُّنَّة) de l'aube et ses sp\u00e9cificit\u00e9s malikites"},
          {"t": "p", "v": "Sunna (السُّنَّة) du Fadjr (2 rak\u02bf\u0101t avant \u0627\u0644\u0635\u064f\u0651\u0628\u062d) a une particularit\u00e9 malikite importante : on ne r\u00e9cite QUE la F\u0101ti\u1e25a dans chacune des deux rak\u02bf\u0101t \u2014 sans ajouter de sourate suppl\u00e9mentaire."},
          {"t": "ar", "v": "\u0644\u064e\u0627 \u0623\u064e\u0632\u0650\u064a\u062f\u064f \u0639\u064e\u0644\u064e\u0649 \u0623\u064f\u0645\u0650\u0651 \u0627\u0644\u0642\u064f\u0631\u0622\u0646\u0650 \u0648\u064e\u062d\u062f\u064e\u0647\u064e\u0627", "n": "\u00ab Je ne lis que la F\u0101ti\u1e25a seule (dans les deux rak\u02bf\u0101t du Fadjr). \u00bb \u2014 Im\u0101m M\u0101lik, Mudawwana (المُدَوَّنَة)"},
          {"t":"ul","v":[
            "C'Sunna (السُّنَّة) rattrapable jusqu'au Zawal (d\u00e9clin du soleil) selon le rite malikite.",
            "<strong>Important :</strong> si on rate la pri\u00e8re du \u0627\u0644\u0635\u064f\u0651\u0628\u062d et qu'on se r\u00e9veille apr\u00e8s le lever du soleil, on rattrape d'abord \u0627\u0644\u0635\u064f\u0651\u0628\u062d (l'obligation), Sunna (السُّنَّة) du Fadjr.",
            "Ne pas inverser l'ordre : obligation d'abord, Sunna (السُّنَّة) ensuite.",
            "Sunna (السُّنَّة) du Fadjr se fait \u00e0 voix basse (silencieusement)."
          ]},
          {"t": "h", "v": "\u0647\u064a\u0626\u0629 \u0627\u0644\u0633\u064f\u0651\u062c\u064f\u0648\u062f \u2014 Posture dans la prosternation"},
          {"t": "p", "v": "La prosternation (\u0633\u064f\u062c\u064f\u0648\u062f) a des exigences physiques pr\u00e9cises selon le rite malikite :"},
          {"t":"ul","v":[
            "<strong>OBLIGATION :</strong> le front ET le nez doivent tous deux toucher le sol \u2014 le nez est obligatoire dans le rite malikite (certains autres rites ne l'exigent pas).",
            "Les deux paumes des mains, les deux genoux et les orteils doivent \u00e9galement toucher le sol.",
            "<strong>Pour l'homme :</strong> ne pas coller le ventre contre les cuisses (les garder s\u00e9par\u00e9s), \u00e9loigner les coudes des genoux.",
            "<strong>Pour la femme :</strong> se recroqueviller en ramenant tous ses membres (inverser des r\u00e8gles de l'homme pour la pudeur).",
            "La position des pieds en \u0627\u0644\u0633\u064f\u0651\u062c\u064f\u0648\u062f : orteils pointant vers la \u0642\u0650\u0628\u0652\u0644\u064e\u0629."
          ]},
          {"t": "h", "v": "\u062a\u064e\u062d\u0631\u0650\u064a\u0643\u064f \u0627\u0644\u0623\u064f\u0635\u0628\u064f\u0639 \u2014 L'Tashahhud (التَّشَهُّد)"},
          {"t": "p", "v": "Il est recommand\u00e9 (musta\u1e25abb/pr\u00e9f\u00e9rable) de bouger l'Tashahhud (التَّشَهُّد). La fa\u00e7on malikite selon la Mudawwana (المُدَوَّنَة) et Ibn Ab\u012b Zayd :"},
          {"t":"ul","v":[
            "L'index et le pouce de la main droite sont tendus (dress\u00e9s).",
            "Les trois autres doigts sont ferm\u00e9s.",
            "L'index bouge seul (l\u00e9g\u00e8rement, sans mouvements brusques).",
            "La main droite est pos\u00e9e sur la cuisse pr\u00e8s du genou, \u00e0 plat.",
            "Il est pr\u00e9f\u00e9rable de bouger l'Tashahhud (التَّشَهُّد) (pas uniquement \u00e0 la shah\u0101da selon certains)."
          ]},
          {"t": "h", "v": "\u0647\u064a\u0626\u0629 \u0627\u0644\u062c\u064f\u0644\u064f\u0648\u0633 \u2014 Tashahhud (التَّشَهُّد)"},
          {"t": "p", "v": "Ibn Ab\u012b Zayd al-Qayraw\u0101n\u012b d\u00e9crit la position assise : le pied droit dress\u00e9 (orteils touchant le sol), le pied gauche repli\u00e9 sous la fesse gauche (ne pas s'asseoir dessus). Ces d\u00e9tails n'ont pas de caract\u00e8re strict (\u0644\u0627 \u062a\u0636\u064a\u064a\u0642 \u0641\u064a \u0630\u0644\u0643) selon les sources malikites."},
          {"t": "h", "v": "\u0627\u0644\u0648\u0650\u062a\u0652\u0631 \u0648\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639 \u2014 Structure et caract\u00e9ristiques"},
          {"t": "p", "v": "Apr\u00e8s la pri\u00e8re de \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621, il est recommand\u00e9 de prier le Shaf\u02bf et le الوِتْر :"},
          {"t":"ul","v":[
            "<strong>\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639 (2 rak\u02bf\u0101t) :</strong> r\u00e9citation de la F\u0101ti\u1e25a + sourate, \u00e0 voix haute (comme \u0627\u0644\u0635\u064f\u0651\u0628\u062d), Tashahhud (التَّشَهُّد) final + sal\u0101m.",
            "<strong>\u0627\u0644\u0648\u0650\u062a\u0652\u0631 (1 rak\u02bfa) :</strong> r\u00e9citation de la F\u0101ti\u1e25a + sourate, \u00e0 voix haute, Tashahhud (التَّشَهُّد) final + sal\u0101m.",
            "Ils forment deux pri\u00e8res distinctes (un sal\u0101m s\u00e9pare le shaf\u02bf du الوِتْر).",
            "Le الوِتْر Sunna (السُّنَّة) d'un grand m\u00e9rite (السُّنَّة mu\u02beakkada).",
            "Ils font partie des pri\u00e8res autoris\u00e9es pour celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621 en dette."
          ]},
          {"t": "h", "v": "\u0642\u0627\u0639\u062f\u0629 \u0627\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645 \u2014 R\u00e8gle du second sal\u0101m"},
          {"t":"ul","v":[
            "<strong>L'الإِمَام et celui qui prie seul :</strong> 1 seul sal\u0101m (\u00e0 droite) \u2014 pas de second sal\u0101m \u00e0 gauche.",
            "<strong>Le \u0645\u064e\u0623\u0645\u064f\u0648\u0645 :</strong> peut faire 3 sal\u0101ms : (1) \u00e0 droite obligatoire, (2) en face (vers l'الإِمَام) Sunna (السُّنَّة), (3) \u00e0 gauche \u2014 Sunna (السُّنَّة) si quelqu'un \u00e0 sa gauche a fait au moins 1 rak\u02bfa avec l'الإِمَام.",
            "Le second sal\u0101m (en face + \u00e0 gauche) est mand\u00fbb pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645 uniquement.",
            "Ceci est une sp\u00e9cificit\u00e9 malikite \u2014 dans d'autres rites, le second sal\u0101Sunna (السُّنَّة) pour tous."
          ]},
          {"t": "note", "v": "R\u00e9capitulatif des sp\u00e9cificit\u00e9s malikites pratiques : \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 (bras le long du corps dans les far\u0101\u02bei\u1e0d) \u00b7 nez obligatoire dans \u0627\u0644\u0633\u064f\u0651\u062c\u064f\u0648\u062f \u00b7 pas de \u0628\u064e\u0633\u0645\u064e\u0644\u064e\u0629 ni \u062a\u064e\u0639\u064e\u0648\u064f\u0651\u0630 dans les far\u0101\u02bei\u1e0d \u00b7 pas de \u062a\u064e\u0623\u0645\u0650\u064a\u0646 \u00e0 voix haute par l'الإِمَام \u00b7 1 sal\u0101m pour l'الإِمَام et le priant seul \u00b7 Sunna (السُّنَّة) du Fadjr avec F\u0101ti\u1e25a seulement."}
          ]
        },

      ], /* fin lessons prière */

      quiz: {
        id: 'quiz-priere',
        title: 'Questionnaire — La Prière',
        status: 'available',
        score: null,
        questions: [
          {
            id: "q-sal-01",
            text: "Le temps pr\u00e9f\u00e9r\u00e9 (\u0645\u064f\u062e\u0652\u062a\u064e\u0627\u0631) du <strong>\u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631</strong> commence :",
            choices: [
              {id:"a",text:"\u00c0 midi solaire exact"},
              {id:"b",text:"Au d\u00e9clin du soleil (\u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644)"},
              {id:"c",text:"Quand l'ombre atteint la hauteur de l'objet"},
              {id:"d",text:"Une heure apr\u00e8s le lever du soleil"},
            ],
            correctId: "b",
            explanation: "Le temps pr\u00e9f\u00e9r\u00e9 du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 d\u00e9bute au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644 (le soleil commence \u00e0 d\u00e9cliner apr\u00e8s son z\u00e9nith) et dure jusqu'\u00e0 ce que l'ombre atteigne une fois la hauteur de l'objet. Le temps de n\u00e9cessit\u00e9 s'\u00e9tend jusqu'au coucher du soleil."
          },
          {
            id: "q-sal-02",
            text: "<strong>SP\u00c9CIFICIT\u00c9 MALIKITE :</strong> Le temps du <strong>\u0627\u0644\u0645\u064e\u063a\u0652\u0631\u0650\u0628</strong> dans le rite malikite :",
            choices: [
              {id:"a",text:"S'\u00e9tend jusqu'au coucher du cr\u00e9puscule rouge"},
              {id:"b",text:"S'\u00e9tend jusqu'au premier tiers de la nuit"},
              {id:"c",text:"Son temps pr\u00e9f\u00e9r\u00e9 est extr\u00eamement court : juste le temps d'accomplir la pri\u00e8re"},
              {id:"d",text:"Commence d\u00e8s l'apparition du cr\u00e9puscule rouge"},
            ],
            correctId: "c",
            explanation: "Sp\u00e9cificit\u00e9 malikite : le temps pr\u00e9f\u00e9r\u00e9 du \u0627\u0644\u0645\u064e\u063a\u0652\u0631\u0650\u0628 est \u00ab \u0642\u062f\u0631 \u0645\u0627 \u062a\u064f\u0635\u0644\u0651\u0649 \u0641\u064a\u0647 \u0628\u0639\u062f \u0634\u0631\u0648\u0637\u0647\u0627 \u00bb \u2014 juste le temps d'accomplir la pri\u00e8re. C'est l'\u00e9cole la plus stricte sur ce point. Tarder sans raison fait entrer dans le temps de n\u00e9cessit\u00e9."
          },
          {
            id: "q-sal-03",
            text: "Quelles sont les conditions (\u0634\u064f\u0631\u064f\u0648\u0637) de validit\u00e9 de la pri\u00e8re selon l'Akh\u1e0dar\u012b ?",
            choices: [
              {id:"a",text:"La puret\u00e9 seulement"},
              {id:"b",text:"La puret\u00e9, l'habillement et la القِبْلَة"},
              {id:"c",text:"\u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062d\u064e\u062f\u064e\u062b\u0650, \u0637\u064e\u0647\u064e\u0627\u0631\u064e\u0629\u064f \u0627\u0644\u062e\u064e\u0628\u064e\u062b\u0650 (corps/v\u00eatement/lieu), couvrir la \u0639\u064e\u0648\u0652\u0631\u064e\u0629, faire face \u00e0 la \u0642\u0650\u0628\u0652\u0644\u064e\u0629, \u00e9viter la parole et les mouvements nombreux"},
              {id:"d",text:"La puret\u00e9, la القِبْلَة et la pr\u00e9sence mentale"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b \u00e9num\u00e8re les \u0634\u064f\u0631\u064f\u0648\u0637 : \u0637\u0647\u0627\u0631\u0629 \u0627\u0644\u062d\u062f\u064a\u062b, \u0637\u0647\u0627\u0631\u0629 \u0627\u0644\u062e\u0628\u062b (corps, v\u00eatement, lieu), \u0633\u062a\u0631 \u0627\u0644\u0639\u0648\u0631\u0629, \u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0627\u0644\u0642\u0628\u0644\u0629, \u062a\u0631\u0643 \u0627\u0644\u0643\u0644\u0627\u0645, \u062a\u0631\u0643 \u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u0643\u062b\u064a\u0631\u0629. Ce sont les CONDITIONS pr\u00e9alables, distinctes des obligations (\u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636) internes de la pri\u00e8re."
          },
          {
            id: "q-sal-04",
            text: "<strong>PI\u00c8GE :</strong> La \u0639\u064e\u0648\u0652\u0631\u064e\u0629 d'une femme dans la pri\u00e8re comprend-elle ses poignets ?",
            choices: [
              {id:"a",text:"Non \u2014 les poignets font partie des mains, exempt\u00e9s comme le visage"},
              {id:"b",text:"Oui \u2014 tout sauf le visage et les deux paumes (\u0627\u0644\u0643\u064e\u0641\u064e\u0651\u0627\u0646) est \u0639\u064e\u0648\u0652\u0631\u064e\u0629"},
              {id:"c",text:"Seulement si le tissu est transparent"},
              {id:"d",text:"Non \u2014 les manches habituelles couvrent les poignets de facto"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0627\u0644\u0645\u0631\u0623\u0629 \u0643\u0644\u0647\u0627 \u0639\u0648\u0631\u0629 \u0645\u0627 \u0639\u062f\u0627 \u0627\u0644\u0648\u062c\u0647 \u0648\u0627\u0644\u0643\u0641\u064a\u0646 \u00bb \u2014 tout le corps de la femme est \u0639\u064e\u0648\u0652\u0631\u064e\u0629 sauf le visage et les deux paumes. Les poignets, avant-bras, chevilles, cheveux \u2014 tout doit \u00eatre couvert. Une manche laissant voir les poignets invalide la pri\u00e8re."
          },
          {
            id: "q-sal-05",
            text: "La <strong>\u0627\u0644\u0637\u064f\u0651\u0645\u064e\u0623\u0646\u0650\u064a\u0646\u064e\u0629</strong> (stabilit\u00e9 des membres \u00e0 chaque posture) est :",
            choices: [
              {id:"a",text:"Sunna (السُّنَّة) \u2014 son omission ne rend pas la pri\u00e8re invalide"},
              {id:"b",text:"Une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629 \u2014 son omission invalide la pri\u00e8re"},
              {id:"c",text:"Une vertu m\u00e9ritoire"},
              {id:"d",text:"Obligatoire seulement dans \u0627\u0644\u0631\u064f\u0651\u0643\u064f\u0648\u0639"},
            ],
            correctId: "b",
            explanation: "La \u0627\u0644\u0637\u064f\u0651\u0645\u064e\u0623\u0646\u0650\u064a\u0646\u064e\u0629 est parmi les \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 de la pri\u00e8re selon l'Akh\u1e0dar\u012b. Passer en coup de vent d'une posture \u00e0 l'autre invalide la pri\u00e8re. Les membres doivent se stabiliser dans chaque posture (\u0631\u064f\u0643\u064f\u0648\u0639, \u0631\u064e\u0641\u0639, \u0633\u064f\u062c\u064f\u0648\u062f, \u062c\u064e\u0644\u0633\u064e\u0629 \u0628\u064a\u0646 \u0627\u0644\u0633\u062c\u062f\u062a\u064a\u0646)."
          },
          {
            id: "q-sal-06",
            text: "La \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 dans la pri\u00e8re doit \u00eatre simultan\u00e9e \u00e0 :",
            choices: [
              {id:"a",text:"L'entr\u00e9e dans la mosqu\u00e9e"},
              {id:"b",text:"La r\u00e9citation de la F\u0101ti\u1e25a"},
              {id:"c",text:"La \u062a\u064e\u0643\u0652\u0628\u0650\u064a\u0631\u064e\u0629\u064f \u0627\u0644\u0625\u0650\u062d\u0652\u0631\u064e\u0627\u0645 (premier All\u0101hu Akbar)"},
              {id:"d",text:"Elle peut pr\u00e9c\u00e9der la pri\u00e8re de quelques secondes"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0634\u0631\u0648\u0637 \u0627\u0644\u0646\u064a\u0629 \u0645\u0642\u0627\u0631\u0646\u062a\u0647\u0627 \u0644\u062a\u0643\u0628\u064a\u0631\u0629 \u0627\u0644\u0625\u062d\u0631\u0627\u0645 \u00bb \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre concomitante \u00e0 la \u062a\u064e\u0643\u0652\u0628\u0650\u064a\u0631\u064e\u0629\u064f \u0627\u0644\u0625\u0650\u062d\u0652\u0631\u064e\u0627\u0645. Elle doit \u00eatre dans le c\u0153ur au moment pr\u00e9cis du premier takb\u012br."
          },
          {
            id: "q-sal-07",
            text: "<strong>PI\u00c8GE :</strong> Sana constate une tache de sang (environ 1cm\u00b2) sur son v\u00eatement en cours de pri\u00e8re. Sa pri\u00e8re est-elle invalide ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout sang invalide la pri\u00e8re"},
              {id:"b",text:"Non \u2014 une tr\u00e8s petite quantit\u00e9 de sang est tol\u00e9r\u00e9e dans le rite malikite"},
              {id:"c",text:"Seulement si c'est son propre sang"},
              {id:"d",text:"Oui elle doit interrompre imm\u00e9diatement"},
            ],
            correctId: "b",
            explanation: "Le rite malikite tol\u00e8re de petites quantit\u00e9s de sang (\u062f\u0645) sur le v\u00eatement. Le seuil de r\u00e9f\u00e9rence classique est le \u062f\u0631\u0647\u0645 \u0628\u064f\u063a\u0644\u064a. Les quantit\u00e9s inf\u00e9rieures \u00e0 ce seuil sont tol\u00e9r\u00e9es et ne rendent pas la pri\u00e8re invalide, \u00e0 la diff\u00e9rence d'autres \u00e9coles."
          },
          {
            id: "q-sal-08",
            text: "Sunna (السُّنَّة) de la <strong>\u0633\u064f\u0648\u0631\u064e\u0629</strong> (sourate apr\u00e8s la F\u0101ti\u1e25a) concerne quelles rak\u02bf\u0101t ?",
            choices: [
              {id:"a",text:"Toutes les rak\u02bf\u0101t"},
              {id:"b",text:"Uniquement la premi\u00e8re"},
              {id:"c",text:"Les deux premi\u00e8res rak\u02bf\u0101t (السُّنَّة dans les deux)"},
              {id:"d",text:"Uniquement la premi\u00e8re \u2014 la deuxi\u00e8me est makr\u016bh"},
            ],
            correctId: "c",
            explanation: "Sunna (السُّنَّة) est de r\u00e9citer une sourate apr\u00e8s la F\u0101ti\u1e25a dans les DEUX premi\u00e8res rak\u02bf\u0101t. Dans les deux derni\u00e8res, on ne r\u00e9cite que la F\u0101ti\u1e25a. Il est makr\u016bh de syst\u00e9matiquement ajouter une sourate dans les 3\u00e8me et 4\u00e8me rak\u02bf\u0101t."
          },
          {
            id: "q-sal-09",
            text: "<strong>PI\u00c8GE :</strong> Omar prie et entend son nom appel\u00e9. Il dit \u00ab \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0647 \u00bb pour signaler qu'il prie. Sa pri\u00e8re est-elle invalide ?",
            choices: [
              {id:"a",text:"Non \u2014 \u00ab \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0647 \u00bb est un dhikr qui ne rompt pas la pri\u00e8re"},
              {id:"b",text:"Oui \u2014 tout son intentionnel rompt la pri\u00e8re"},
              {id:"c",text:"Seulement s'il voulait clairement communiquer"},
              {id:"d",text:"Non car c'est autoris\u00e9 pour avertir d'un danger"},
            ],
            correctId: "a",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0645\u0646 \u0646\u0627\u062f\u0627\u0647 \u0623\u062d\u062f \u0641\u0642\u0627\u0644 \u0644\u0647 \u0633\u0628\u062d\u0627\u0646 \u0627\u0644\u0644\u0647 \u0643\u064f\u0631\u0647 \u0648\u0635\u062d\u0651\u062a \u0635\u0644\u0627\u062a\u0647 \u00bb \u2014 c'est makr\u016bh mais la pri\u00e8re reste VALIDE. \u00ab \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0647 \u00bb est un dhikr \u2014 l'intention de communiquer ne change pas son statut puisque c'est un acte de culte en soi."
          },
          {
            id: "q-sal-10",
            text: "La <strong>\u0627\u0644\u0635\u064e\u0651\u0644\u064e\u0627\u0629 \u0641\u064a \u0627\u0644\u0633\u064e\u0651\u0631\u064e\u0627\u0648\u0650\u064a\u0644</strong> (pri\u00e8re en pantalon seul sans v\u00eatement du dessus) est :",
            choices: [
              {id:"a",text:"Interdite \u2014 invalide la pri\u00e8re"},
              {id:"b",text:"Permise sans restriction"},
              {id:"c",text:"Makr\u016bh \u2014 d\u00e9conseill\u00e9e sauf si un v\u00eatement la recouvre"},
              {id:"d",text:"Makr\u016bh uniquement pour l'الإِمَام"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u062a\u0643\u0631\u0647 \u0627\u0644\u0635\u0644\u0627\u0629 \u0641\u064a \u0627\u0644\u0633\u0631\u0627\u0648\u064a\u0644, \u0644\u0627 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0641\u0648\u0642\u0647\u0627 \u0634\u064a\u0621 \u00bb \u2014 prier en pantalon seul est makr\u016bh. Si un autre v\u00eatement le recouvre (chemise, robe, etc.), il n'y a pas de probl\u00e8me. La pri\u00e8re reste valide dans les deux cas."
          },
          {
            id: "q-sal-11",
            text: "<strong>SC\u00c9NARIO :</strong> Bilal r\u00e9alise apr\u00e8s sa pri\u00e8re qu'il a pri\u00e9 dans la mauvaise direction. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Jamais refaire \u2014 l'effort d'estimation (\u0627\u0644\u0627\u062c\u062a\u0647\u0627\u062f) dispense toujours"},
              {id:"b",text:"Toujours refaire"},
              {id:"c",text:"R\u00e9p\u00e9ter la pri\u00e8re DANS SON TEMPS (\u0625\u0639\u0627\u062f\u0629 \u0641\u064a \u0627\u0644\u0648\u0642\u062a)"},
              {id:"d",text:"Seulement s'il a d\u00e9lib\u00e9r\u00e9ment pris la mauvaise direction"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0623\u062e\u0637\u0623 \u0627\u0644\u0642\u0628\u0644\u0629 \u0623\u0639\u0627\u062f \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u00bb \u2014 la r\u00e9p\u00e9tition (\u0625\u0639\u0627\u062f\u0629) est dans le temps de cette pri\u00e8re seulement. Hors du temps, aucune r\u00e9p\u00e9tition n'est requise. C'est une \u0625\u0639\u0627\u062f\u0629 de \u0641\u064e\u0636\u0650\u064a\u0644\u064e\u0629, pas une obligation absolue."
          },
          {
            id: "q-sal-12",
            text: "<strong>PI\u00c8GE :</strong> Nora n'a aucun v\u00eatement pour couvrir sa \u0639\u064e\u0648\u0652\u0631\u064e\u0629. Que doit-elle faire ?",
            choices: [
              {id:"a",text:"Attendre d'avoir un v\u00eatement"},
              {id:"b",text:"Reporter la pri\u00e8re"},
              {id:"c",text:"Prier nue (\u0639\u064f\u0631\u064a\u0627\u0646\u0627\u064b) \u2014 omettre la pri\u00e8re est plus grave"},
              {id:"d",text:"Ne prier que les pri\u00e8res qu'elle peut combiner"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0644\u0645 \u064a\u062c\u062f \u0645\u0627 \u064a\u0633\u062a\u0631 \u0628\u0647 \u0639\u0648\u0631\u062a\u0647 \u0635\u0644\u0649 \u0639\u064f\u0631\u064a\u0627\u0646\u0627\u064b \u00bb \u2014 sans v\u00eatement, on prie nu. L'obligation de la pri\u00e8re dans son temps prime sur la condition du voilement de la \u0639\u064e\u0648\u0652\u0631\u064e\u0629 quand c'est impossible. La pri\u00e8re dans son temps est prioritaire."
          },
          {
            id: "q-sal-13",
            text: "La <strong>\u0627\u0644\u0633\u064f\u0651\u062a\u0652\u0631\u064e\u0629</strong> (obstacle devant le priant) : Sunna (السُّنَّة) ?",
            choices: [
              {id:"a",text:"Pour tout priant"},
              {id:"b",text:"Sunna (السُّنَّة) pour le priant seul (\u0627\u0644\u0641\u064e\u0630\u0651) et l'الإِمَام \u2014 pas pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645"},
              {id:"c",text:"Obligation seulement pour l'الإِمَام"},
              {id:"d",text:"Makr\u016bh \u2014 elle d\u00e9limite un espace privatif"},
            ],
            correctId: "b",
            explanation: "La \u0633\u064f\u062a\u0652\u0631\u064e\u0629 Sunna (السُّنَّة) pour le \u0641\u064e\u0630\u0651 (priant seul) et l'الإِمَام. Pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645, elle n'est pas requise car l'الإِمَام lui sert de \u0633\u064f\u062a\u0652\u0631\u064e\u0629. Elle doit avoir au moins la grosseur d'une lance et la hauteur d'une coud\u00e9e."
          },
          {
            id: "q-sal-14",
            text: "Le <strong>\u0633\u064f\u062c\u064f\u0648\u062f\u064f \u0627\u0644\u0633\u064e\u0651\u0647\u0652\u0648</strong> (prosternation d'oubli) est dans la pri\u00e8re :",
            choices: [
              {id:"a",text:"Une obligation absolue"},
              {id:"b",text:"Sunna (السُّنَّة)"},
              {id:"c",text:"Une expiation"},
              {id:"d",text:"Obligatoire seulement apr\u00e8s une \u0632\u064a\u0627\u062f\u0629 (exc\u00e8s)"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b ouvre le chapitre : \u00ab \u0648\u0633\u062c\u0648\u062f \u0627\u0644\u0633\u0647\u0648 \u0641\u064a \u0627\u0644\u0635\u0644\u0627\u0629 \u0633\u0646\u0629 \u00bb \u2014 c'Sunna (السُّنَّة). L'omettre ne rend pas la pri\u00e8re invalide mais constitue une n\u00e9gligence d'Sunna (السُّنَّة) importante."
          },
          {
            id: "q-sal-15",
            text: "Pour un manque (\u0646\u064e\u0642\u0652\u0635) dans la pri\u00e8re, les deux prosternations d'oubli se font :",
            choices: [
              {id:"a",text:"Apr\u00e8s le sal\u0101m"},
              {id:"b",text:"Avant le sal\u0101m, apr\u00e8Tashahhud (التَّشَهُّد)s"},
              {id:"c",text:"Tashahhud (التَّشَهُّد)"},
              {id:"d",text:"Imm\u00e9diatement apr\u00e8s s'\u00eatre souvenu du manque"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0641\u0644\u0644\u0646\u0642\u0635\u0627\u0646 \u0633\u062c\u062f\u062a\u0627\u0646 \u0642\u0628\u0644 \u0627\u0644\u0633\u0644\u0627\u0645 \u0628\u0639\u062f \u062a\u0645\u0627\u0645 \u0627\u0644\u062a\u0634\u0647\u062f\u064a\u0646 \u064a\u0632\u064a\u062f \u0628\u0639\u062f\u0647\u0645\u0627 \u062a\u0634\u0647\u062f\u0627\u064b \u0622\u062e\u0631 \u00bb \u2014 pour le \u0646\u064e\u0642\u0652\u0635 : deux prosternations AVANT le sal\u0101m, apr\u00e8Tashahhud (التَّشَهُّد)s, suivies d'un troisi\u00e8Tashahhud (التَّشَهُّد). Mn\u00e9motechnique : manque = AVANT."
          },
          {
            id: "q-sal-16",
            text: "Pour un exc\u00e8s (\u0632\u0650\u064a\u064e\u0627\u062f\u064e\u0629) involontaire dans la pri\u00e8re, les prosternations d'oubli se font :",
            choices: [
              {id:"a",text:"Avant le sal\u0101m"},
              {id:"b",text:"Apr\u00e8s le sal\u0101m"},
              {id:"c",text:"Imm\u00e9diatement"},
              {id:"d",text:"Pas de prosternation pour l'exc\u00e8s"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0644\u0644\u0632\u064a\u0627\u062f\u0629 \u0633\u062c\u062f\u062a\u0627\u0646 \u0628\u0639\u062f \u0627\u0644\u0633\u0644\u0627\u0645 \u00bb \u2014 pour la \u0632\u064a\u0627\u062f\u0629 : deux prosternations APR\u00c8S le sal\u0101m. Mn\u00e9motechnique : manque = AVANT le sal\u0101m, exc\u00e8s = APR\u00c8S le sal\u0101m."
          },
          {
            id: "q-sal-17",
            text: "<strong>PI\u00c8GE :</strong> Khalid rit aux \u00e9clats (\u0627\u0644\u0636\u064e\u0651\u062d\u0650\u0643) en pri\u00e8re, par distraction involontaire. Sa pri\u00e8re est-elle invalide ?",
            choices: [
              {id:"a",text:"Non \u2014 seul le rire intentionnel invalide la pri\u00e8re"},
              {id:"b",text:"Oui \u2014 le rire aux \u00e9clats invalide la pri\u00e8re qu'il soit intentionnel ou involontaire"},
              {id:"c",text:"Non \u2014 il fait deux prosternations d'oubli"},
              {id:"d",text:"Oui seulement si des lettres sonores sont prononc\u00e9es"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0636\u062d\u0643 \u0641\u064a \u0627\u0644\u0635\u0644\u0627\u0629 \u0628\u0637\u0644\u062a \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u0633\u0627\u0647\u064a\u0627\u064b \u0623\u0648 \u0639\u0627\u0645\u062f\u0627\u064b \u00bb \u2014 le rire (\u0627\u0644\u0636\u064e\u0651\u062d\u0650\u0643) invalide la pri\u00e8re dans TOUS les cas, intentionnel ou distrait. Seul le sourire (\u0627\u0644\u062a\u064e\u0651\u0628\u064e\u0633\u064f\u0651\u0645) est inoffensif."
          },
          {
            id: "q-sal-18",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim prie et un scorpion appara\u00eet. Il l'\u00e9crase du pied. Sa pri\u00e8re est-elle valide ?",
            choices: [
              {id:"a",text:"Non \u2014 tout mouvement non n\u00e9cessaire invalide la pri\u00e8re"},
              {id:"b",text:"Oui \u2014 tuer un animal nuisible en pri\u00e8re est excus\u00e9"},
              {id:"c",text:"Seulement avec un seul geste"},
              {id:"d",text:"Non, il doit d'abord terminer la pri\u00e8re"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u062c\u0627\u0621\u062a\u0647 \u062d\u0628\u0629 \u0623\u0648 \u0639\u0642\u0631\u0628 \u0641\u0642\u062a\u0644\u0647\u0627 \u0641\u0644\u0627 \u0634\u064a\u0621 \u0639\u0644\u064a\u0647 \u0625\u0644\u0627 \u0623\u0646 \u064a\u0637\u0648\u0644 \u0641\u0639\u0644\u0647 \u0623\u0648 \u064a\u0633\u062a\u062f\u0628\u0631 \u0627\u0644\u0642\u0628\u0644\u0629 \u00bb \u2014 tuer un insecte ou scorpion est permis tant que l'acte ne s'\u00e9ternise pas et qu'on ne tourne pas le dos \u00e0 la \u0642\u0650\u0628\u0652\u0644\u064e\u0629."
          },
          {
            id: "q-sal-19",
            text: "Le <strong>\u0627\u0644\u0642\u064f\u0646\u064f\u0648\u062a</strong> dans la pri\u00e8re du \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d est :",
            choices: [
              {id:"a",text:"Une obligation"},
              {id:"b",text:"Sunna (السُّنَّة)"},
              {id:"c",text:"Une vertu (\u0641\u064e\u0636\u0650\u064a\u0644\u064e\u0629) \u2014 niveau inf\u00e9rieur \u00e0 Sunna (السُّنَّة)"},
              {id:"d",text:"Une \u0628\u0650\u062f\u0639\u064e\u0629 selon les malikites"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b classe le \u0627\u0644\u0642\u064f\u0646\u064f\u0648\u062a parmi les \u0641\u064e\u0636\u064e\u0627\u0626\u0650\u0644 (vertus) : \u00ab \u0648\u0627\u0644\u0642\u0646\u0648\u062a \u0633\u0631\u0627\u064b \u0642\u0628\u0644 \u0627\u0644\u0631\u0643\u0648\u0639 \u00bb. R\u00e9cit\u00e9 silencieusement avant le \u0627\u0644\u0631\u064f\u0651\u0643\u064f\u0648\u0639 dans la derni\u00e8re rak\u02bfa du \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d. C'est une \u0641\u064e\u0636\u0650\u064a\u0644\u064e\u0629, niveau inf\u00e9rieur \u00e0 Sunna (السُّنَّة)."
          },
          {
            id: "q-sal-20",
            text: "<strong>PI\u00c8GE :</strong> La premi\u00e8re \u062a\u064e\u0633\u0652\u0644\u0650\u064a\u0645\u064e\u0629 (salutation finale) Sunna (السُّنَّة) ?",
            choices: [
              {id:"a",text:"La premi\u00e8re est une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629, la deuxi\u00e8Sunna (السُّنَّة)"},
              {id:"b",text:"Sunna (السُّنَّة)"},
              {id:"c",text:"La premi\u00e8Sunna (السُّنَّة), la seconde est \u0641\u064e\u0636\u0650\u064a\u0644\u064e\u0629"},
              {id:"d",text:"Les deux sont des obligations"},
            ],
            correctId: "a",
            explanation: "L'Akh\u1e0dar\u012b liste parmi les \u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636 : \u00ab \u0627\u0644\u0633\u0644\u0627\u0645 \u0648\u062c\u0644\u0648\u0633\u0647 \u0627\u0644\u0630\u064a \u064a\u0642\u0627\u0631\u0646\u0647 \u00bb \u2014 la premi\u00e8re \u062a\u064e\u0633\u0652\u0644\u0650\u064a\u0645\u064e\u0629 est une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629. Sunna (السُّنَّة) : \u00ab \u0648\u0627\u0644\u062a\u0633\u0644\u064a\u0645\u0629 \u0627\u0644\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u0644\u062b\u0627\u0644\u062b\u0629 \u0644\u0644\u0645\u0623\u0645\u0648\u0645 \u00bb."
          },
          {
            id: "q-sal-21",
            text: "<strong>PI\u00c8GE AVANC\u00c9 :</strong> Tashahhud (التَّشَهُّد) (\u0627\u0644\u062a\u064e\u0651\u0634\u064e\u0647\u064f\u0651\u062f \u0627\u0644\u0623\u064e\u0648\u064e\u0651\u0644) et commence \u00e0 se lever. Ses mains n'ont pas encore quitt\u00e9 le sol. Que fait-il ?",
            choices: [
              {id:"a",text:"Il continue \u2014 il est trop tard pour revenir"},
              {id:"b",text:"Il revient s'asseoir SANS prosternation d'oubli"},
              {id:"c",text:"Il revient s'asseoir PUIS fait deux prosternations d'oubli"},
              {id:"d",text:"Il continue et fait deux prosternations avant le sal\u0101m"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0625\u0646 \u062a\u0630\u0643\u0631\u0647 \u0642\u0628\u0644 \u0623\u0646 \u064a\u0641\u0627\u0631\u0642 \u0627\u0644\u0623\u0631\u0636 \u0628\u064a\u062f\u064a\u0647 \u0648\u0631\u0643\u0628\u062a\u064a\u0647 \u0631\u062c\u0639 \u0625\u0644\u0649 \u0627\u0644\u062c\u0644\u0648\u0633 \u0648\u0644\u0627 \u0633\u062c\u0648\u062f \u0639\u0644\u064a\u0647 \u00bb \u2014 s'il se souvient AVANT que les mains et genoux aient quitt\u00e9 le sol \u2192 retour SANS prosternation d'oubli. S'il a d\u00e9j\u00e0 quitt\u00e9 le sol \u2192 continue et prosterne avant le sal\u0101m."
          },
          {
            id: "q-sal-22",
            text: "<strong>SC\u00c9NARIO :</strong> Dawud a 3 pri\u00e8res de \u0642\u064e\u0636\u064e\u0627\u0621 non rattrap\u00e9es et le temps du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 est l\u00e0. Que fait-il ?",
            choices: [
              {id:"a",text:"Il prie le \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 en premier \u2014 la pri\u00e8re pr\u00e9sente est prioritaire"},
              {id:"b",text:"Il prie ses 3 \u0642\u064e\u0636\u064e\u0627\u0621 d'abord, m\u00eame si le temps du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 sort"},
              {id:"c",text:"Il peut choisir l'ordre librement"},
              {id:"d",text:"Il combine rattrapage et pr\u00e9sent"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0643\u0627\u0646\u062a \u0639\u0644\u064a\u0647 \u0623\u0631\u0628\u0639 \u0635\u0644\u0648\u0627\u062a \u0641\u0623\u0642\u0644 \u0635\u0644\u0627\u0647\u0627 \u0642\u0628\u0644 \u0627\u0644\u062d\u0627\u0636\u0631\u0629 \u0648\u0644\u0648 \u062e\u0631\u062c \u0648\u0642\u062a\u0647\u0627 \u00bb \u2014 4 pri\u00e8res ou moins en \u0642\u064e\u0636\u064e\u0627\u0621 doivent \u00eatre rattrap\u00e9es AVANT la pri\u00e8re pr\u00e9sente, m\u00eame si le temps de cette derni\u00e8re expire. Au-del\u00e0 de 4, la pr\u00e9sente est prioritaire."
          },
          {
            id: "q-sal-23",
            text: "<strong>PI\u00c8GE :</strong> Celui qui a des pri\u00e8res de \u0642\u064e\u0636\u064e\u0627\u0621 en dette peut-il prier la \u0635\u064e\u0644\u064e\u0627\u0629 \u0627\u0644\u0636\u064f\u0651\u062d\u064e\u0649 ?",
            choices: [
              {id:"a",text:"Oui \u2014 \u0636\u064f\u062d\u064e\u0649 et \u0642\u064e\u0636\u064e\u0627\u0621 ne sont pas li\u00e9s"},
              {id:"b",text:"Non \u2014 l'Akh\u1e0dar\u012b l'interdit explicitement"},
              {id:"c",text:"Seulement si c'est une pri\u00e8re habituelle"},
              {id:"d",text:"Oui car \u0636\u064f\u062d\u064e\u0649 est tr\u00e8s m\u00e9ritoire"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b est pr\u00e9cis : \u00ab \u0644\u0627 \u064a\u062a\u0646\u0641\u0644 \u0645\u0646 \u0639\u0644\u064a\u0647 \u0627\u0644\u0642\u0636\u0627\u0621 \u0648\u0644\u0627 \u064a\u0635\u0644\u064a \u0627\u0644\u0636\u062d\u0649 \u0648\u0644\u0627 \u0642\u064a\u0627\u0645 \u0631\u0645\u0636\u0627\u0646 \u00bb \u2014 \u0636\u064f\u062d\u064e\u0649 et \u0642\u064a\u0627\u0645 \u0631\u0645\u0636\u0627\u0646 sont explicitement interdits \u00e0 celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621. Seules la \u0627\u0644\u0634\u0641\u0639 \u0648\u0627\u0644\u0648\u062a\u0631 \u0648\u0627\u0644\u0641\u062c\u0631 \u0648\u0627\u0644\u0639\u064a\u062f\u0627\u0646 \u0648\u0627\u0644\u062e\u0633\u0648\u0641 \u0648\u0627\u0644\u0627\u0633\u062a\u0633\u0642\u0627\u0621 sont permises."
          },
          {
            id: "q-sal-24",
            text: "<strong>NUANCE :</strong> La pri\u00e8re de voyage (\u0642\u064e\u0635\u0652\u0631) d'un voyageur maintenant rentr\u00e9 \u2014 comment doit-il la rattraper ?",
            choices: [
              {id:"a",text:"En 4 rak\u02bf\u0101t (pri\u00e8re de r\u00e9sident)"},
              {id:"b",text:"En 2 rak\u02bf\u0101t (pri\u00e8re de voyage) m\u00eame s'il est maintenant r\u00e9sident"},
              {id:"c",text:"Selon les circonstances au moment du rattrapage"},
              {id:"d",text:"Il peut choisir 2 ou 4 rak\u02bf\u0101t"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0625\u0646 \u0643\u0627\u0646 \u0633\u0641\u0631\u064a\u0629 \u0642\u0636\u0627\u0647\u0627 \u0633\u0641\u0631\u064a\u0629 \u0633\u0648\u0627\u0621 \u0643\u0627\u0646 \u062d\u064a\u0646 \u0627\u0644\u0642\u0636\u0627\u0621 \u0641\u064a \u062d\u0636\u0631 \u0623\u0648 \u0633\u0641\u0631 \u00bb \u2014 la pri\u00e8re de voyage est rattrap\u00e9e comme pri\u00e8re de voyage, m\u00eame si le priant est maintenant r\u00e9sident. La forme de la pri\u00e8re manqu\u00e9e est d\u00e9termin\u00e9e par les circonstances AU MOMENT o\u00f9 elle aurait d\u00fb \u00eatre accomplie."
          },
          {
            id: "q-sal-25",
            text: "<strong>PI\u00c8GE :</strong> Peut-on prier une n\u0101fila assis volontairement alors qu'on peut se tenir debout ?",
            choices: [
              {id:"a",text:"Non \u2014 prier assis invalide la pri\u00e8re"},
              {id:"b",text:"Oui et la r\u00e9compense est identique"},
              {id:"c",text:"Oui mais avec seulement la moiti\u00e9 de la r\u00e9compense du priant debout"},
              {id:"d",text:"Seulement pour les \u0646\u0648\u0627\u0641\u0644 sur\u00e9rogatoires tardives"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u064a\u062c\u0648\u0632 \u0644\u0644\u0642\u0627\u062f\u0631 \u0639\u0644\u0649 \u0627\u0644\u0642\u064a\u0627\u0645 \u0623\u0646 \u064a\u0635\u0644\u064a\u0647\u0627 \u062c\u0627\u0644\u0633\u0627\u064b \u0648\u0644\u0647 \u0646\u0635\u0641 \u0623\u062c\u0631 \u0627\u0644\u0642\u0627\u0626\u0645 \u00bb \u2014 pour les \u0646\u0648\u0627\u0641\u0644, prier assis est permis m\u00eame si on peut se tenir debout, mais on re\u00e7oit la MOITI\u00c9 de la r\u00e9compense. Pour les \u0641\u0631\u0627\u0626\u0636, c'est invalide si on peut se tenir debout."
          },
          {
            id: "q-sal-26",
            text: "<strong>PI\u00c8GE :</strong> Khalid est \u0645\u064e\u0633\u0652\u0628\u064f\u0648\u0642 (retardataire) et attrape l'الإِمَام en \u0627\u0644\u0631\u064f\u0651\u0643\u064f\u0648\u0639. Cette rak\u02bfa lui compte-t-elle ?",
            choices: [
              {id:"a",text:"Seulement s'il a le temps de lire la F\u0101ti\u1e25a"},
              {id:"b",text:"Non \u2014 une rak\u02bfa n'est compl\u00e8te qu'avec la F\u0101ti\u1e25a"},
              {id:"c",text:"Oui \u2014 s'il entre en \u0631\u064f\u0643\u064f\u0648\u0639 avant que l'الإِمَام se rel\u00e8ve, la rak\u02bfa est compt\u00e9e"},
              {id:"d",text:"Seulement si l'الإِمَام n'a pas encore dit '\u0633\u0645\u0639 \u0627\u0644\u0644\u0647 \u0644\u0645\u0646 \u062d\u0645\u062f\u0647'"},
            ],
            correctId: "c",
            explanation: "En rite malikite, si le \u0645\u064e\u0633\u0652\u0628\u064f\u0648\u0642 entre en \u0631\u064f\u0643\u064f\u0648\u0639 AVANT que l'الإِمَام se rel\u00e8ve, cette rak\u02bfa est compt\u00e9e \u2014 la F\u0101ti\u1e25a lui est pardonn\u00e9e. C'est diff\u00e9rent de certains avis qui exigent le temps de r\u00e9citer la F\u0101ti\u1e25a."
          },
          {
            id: "q-sal-27",
            text: "Les temps interdits aux pri\u00e8res sur\u00e9rogatoires (\u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644) selon l'Akh\u1e0dar\u012b sont :",
            choices: [
              {id:"a",text:"Seulement apr\u00e8s \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d jusqu'au lever du soleil"},
              {id:"b",text:"Apr\u00e8s \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d jusqu'au lever complet, et apr\u00e8s \u0627\u0644\u0639\u064e\u0635\u0652\u0631 jusqu'au \u0627\u0644\u0645\u064e\u063a\u0652\u0631\u0650\u0628"},
              {id:"c",text:"\u00c0 midi (\u0627\u0644\u0627\u0633\u062a\u0648\u0627\u0621)"},
              {id:"d",text:"Apr\u00e8s minuit"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0644\u0627 \u062a\u0635\u0644\u0649 \u0646\u0627\u0641\u0644\u0629 \u0628\u0639\u062f \u0635\u0644\u0627\u0629 \u0627\u0644\u0635\u0628\u062d \u0625\u0644\u0649 \u0627\u0631\u062a\u0641\u0627\u0639 \u0627\u0644\u0634\u0645\u0633\u060c \u0648\u0628\u0639\u062f \u0635\u0644\u0627\u0629 \u0627\u0644\u0639\u0635\u0631 \u0625\u0644\u0649 \u0635\u0644\u0627\u0629 \u0627\u0644\u0645\u063a\u0631\u0628 \u00bb \u2014 deux p\u00e9riodes interdites aux \u0646\u0648\u0627\u0641\u0644."
          },
          {
            id: "q-sal-28",
            text: "<strong>PI\u00c8GE :</strong> Peut-on prier des \u0646\u064e\u0648\u064e\u0627\u0641\u0650\u0644 juste apr\u00e8s la \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629, encore dans la mosqu\u00e9e ?",
            choices: [
              {id:"a",text:"Oui imm\u00e9diatement"},
              {id:"b",text:"Non \u2014 interdit apr\u00e8s \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 comme apr\u00e8s \u0627\u0644\u0639\u064e\u0635\u0652\u0631"},
              {id:"c",text:"Non \u2014 interdit tant qu'on est dans la mosqu\u00e9e"},
              {id:"d",text:"Sunna (السُّنَّة) de \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 (quatre rak\u02bf\u0101t)"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0628\u0639\u062f \u0627\u0644\u062c\u0645\u0639\u0629 \u062d\u062a\u0649 \u064a\u062e\u0631\u062c \u0645\u0646 \u0627\u0644\u0645\u0633\u062c\u062f \u00bb \u2014 interdit de prier des \u0646\u0648\u0627\u0641\u0644 apr\u00e8s \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 tant qu'on est dans la mosqu\u00e9e. D\u00e8s la sortie, c'est permis. C'est un cas particulier diff\u00e9rent de \u0627\u0644\u0639\u064e\u0635\u0652\u0631."
          },
          {
            id: "q-sal-29",
            text: "La <strong>\u062a\u064e\u0643\u0652\u0628\u0650\u064a\u0631\u064e\u0627\u062a\u064f \u0627\u0644\u0627\u0646\u062a\u0650\u0642\u064e\u0627\u0644</strong> (takb\u012br entre les postures) sont :",
            choices: [
              {id:"a",text:"Des obligations \u2014 leur omission invalide la pri\u00e8re"},
              {id:"b",text:"Sunna (السُّنَّة) \u2014 sauf la \u062a\u064e\u0643\u0652\u0628\u0650\u064a\u0631\u064e\u0629\u064f \u0627\u0644\u0625\u0650\u062d\u0652\u0631\u064e\u0627\u0645 qui est \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629"},
              {id:"c",text:"Sunna (السُّنَّة) seulement dans les 2 premi\u00e8res rak\u02bf\u0101t"},
              {id:"d",text:"Des \u0641\u064e\u0636\u064e\u0627\u0626\u0650\u0644 sans cons\u00e9quence si omises"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0643\u0644 \u062a\u0643\u0628\u064a\u0631\u0629 \u0633\u0646\u0629 \u0625\u0644\u0627 \u0627\u0644\u0623\u0648\u0644\u0649 \u00bb \u2014 toutes les takb\u012br\u0101t de transition sont des SOUNNAH, SAUF la \u062a\u064e\u0643\u0652\u0628\u0650\u064a\u0631\u064e\u0629\u064f \u0627\u0644\u0625\u0650\u062d\u0652\u0631\u064e\u0627\u0645 qui est une \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629. Les omettre ne rend pas la pri\u00e8Sunna (السُّنَّة)."
          },
          {
            id: "q-sal-30",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim \u00e9ternue en pri\u00e8re et dit \u00ab \u0627\u0644\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0647 \u00bb. Sa pri\u00e8re est-elle invalid\u00e9e ?",
            choices: [
              {id:"a",text:"Oui \u2014 toute parole intelligible invalide la pri\u00e8re"},
              {id:"b",text:"Non \u2014 \u0627\u0644\u062d\u064e\u0645\u0652\u062f \u0644\u0644\u0647 est un dhikr licite en pri\u00e8re"},
              {id:"c",text:"Seulement si dit \u00e0 voix haute"},
              {id:"d",text:"Oui car ce n'est pas un dhikr de pri\u00e8re"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0641\u0625\u0646 \u062d\u0645\u062f \u0627\u0644\u0644\u0647 \u0641\u0644\u0627 \u0634\u064a\u0621 \u0639\u0644\u064a\u0647 \u00bb \u2014 dire \u0627\u0644\u062d\u064e\u0645\u0652\u062f\u064f \u0644\u0650\u0644\u0647 apr\u00e8s un \u00e9ternuement en pri\u00e8re ne pose aucun probl\u00e8me. C'est un dhikr licite. En revanche, r\u00e9pondre \u00e0 quelqu'un qui \u00e9ternue (\u0648\u064a\u0631\u062d\u0645\u0643 \u0627\u0644\u0644\u0647) \u2014 parole adress\u00e9e \u00e0 un humain \u2014 invaliderait la pri\u00e8re."
          },
          {
            id: "q-sal-31",
            text: "Le \u0627\u0644\u062a\u064e\u0651\u0634\u064e\u0647\u064f\u0651\u062f\u064f \u0627\u0644\u0623\u064e\u0648\u064e\u0651\u0644 (premier assis) Sunna (السُّنَّة) ?",
            choices: [
              {id:"a",text:"Une obligation \u2014 invalide la pri\u00e8re si omis intentionnellement"},
              {id:"b",text:"Sunna (السُّنَّة) \u2014 avec \u0633\u064f\u062c\u064f\u0648\u062f \u0627\u0644\u0633\u064e\u0651\u0647\u0652\u0648 si oubli\u00e9"},
              {id:"c",text:"Une vertu m\u00e9ritoire"},
              {id:"d",text:"Obligation seulement dans les pri\u00e8res de 4 rak\u02bf\u0101t"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b liste \u0627\u0644\u062a\u064e\u0651\u0634\u064e\u0647\u064f\u0651\u062f\u064e\u0627\u0646 \u0648\u0627\u0644\u062c\u0644\u0648\u0633 \u0644\u0647\u0645\u0627 Sunna (السُّنَّة). Tashahhud (التَّشَهُّد) impose le \u0633\u064f\u062c\u064f\u0648\u062f \u0627\u0644\u0633\u064e\u0651\u0647\u0652\u0648 avant le sal\u0101m. L'omettre intentionnellement est grave (n\u00e9gliger une السُّنَّة) mais ne rend pas la pri\u00e8re nulle."
          },
          {
            id: "q-sal-32",
            text: "La <strong>\u0627\u0644\u0635\u064e\u0651\u0644\u064e\u0627\u0629\u064f \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0646\u064e\u0651\u0628\u0650\u064a\u0650\u0651 \ufdfa</strong> Tashahhud (التَّشَهُّد) est dans le rite malikite :",
            choices: [
              {id:"a",text:"Tashahhud (التَّشَهُّد) final"},
              {id:"b",text:"Sunna (السُّنَّة) Tashahhud (التَّشَهُّد)s"},
              {id:"c",text:"Tashahhud (التَّشَهُّد)s"},
              {id:"d",text:"Recommand\u00e9Tashahhud (التَّشَهُّد)"},
            ],
            correctId: "b",
            explanation: "La \u0627\u0644\u0635\u064e\u0651\u0644\u064e\u0627\u0629\u064f \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0646\u064e\u0651\u0628\u0650\u064a\u0650\u0651 \Sunna (السُّنَّة) de la pri\u00e8re dans le rite malikite \u2014 CE N'EST PAS UNE \u0641\u064e\u0631\u0650\u064a\u0636\u064e\u0629 (contrairement \u00e0 l'\u00e9cole ch\u0101fi\u02bfite qui la classe comme obligation). Son omission ne rend pas la pri\u00e8re invalide."
          },
          {
            id: "q-sal-33",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim dit la \u0628\u064e\u0633\u0645\u064e\u0644\u064e\u0629 avant la F\u0101ti\u1e25a dans une pri\u00e8re obligatoire. Est-ce correct ?",
            choices: [
              {id:"a",text:"Oui \u2014 recommand\u00e9 avant toute r\u00e9citation"},
              {id:"b",text:"Non \u2014 la \u0628\u064e\u0633\u0645\u064e\u0644\u064e\u0629 est makr\u016bh dans les pri\u00e8res obligatoires selon le rite malikite"},
              {id:"c",text:"Obligatoire \u2014 sans elle la F\u0101ti\u1e25a est incompl\u00e8te"},
              {id:"d",text:"Permis seulement \u00e0 voix tr\u00e8s basse"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u064a\u0643\u0631\u0647... \u0627\u0644\u0628\u0633\u0645\u0644\u0629 \u0648\u0627\u0644\u062a\u0639\u0648\u0630 \u0641\u064a \u0627\u0644\u0641\u0631\u064a\u0636\u0629 \u00bb \u2014 la \u0628\u064e\u0633\u0645\u064e\u0644\u064e\u0629 est makr\u016bh dans les pri\u00e8res obligatoires selon le rite malikite. C'est une sp\u00e9cificit\u00e9 notable diff\u00e9rente de la position sh\u0101fi\u02bfite."
          },
          {
            id: "q-sal-34",
            text: "La pri\u00e8re du <strong>vendredi (\u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629)</strong> se compose de :",
            choices: [
              {id:"a",text:"4 rak\u02bf\u0101t + 2 khu\u1e6dba"},
              {id:"b",text:"2 rak\u02bf\u0101t pr\u00e9c\u00e9d\u00e9es de 2 khu\u1e6dba"},
              {id:"c",text:"2 rak\u02bf\u0101t sans khu\u1e6dba"},
              {id:"d",text:"4 rak\u02bf\u0101t suivies de 2 khu\u1e6dba"},
            ],
            correctId: "b",
            explanation: "La \u0635\u064e\u0644\u064e\u0627\u0629\u064f \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 remplace \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 le vendredi et se compose de 2 rak\u02bf\u0101t pr\u00e9c\u00e9d\u00e9es de 2 khu\u1e6dba. Elle est due aux hommes libres, r\u00e9sidants, sans excuse valable."
          },
          {
            id: "q-sal-35",
            text: "<strong>PI\u00c8GE :</strong> Salima (r\u00e9sidante, en bonne sant\u00e9) veut faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour la \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629. Est-ce permis ?",
            choices: [
              {id:"a",text:"Oui si elle ne trouve pas d'eau facilement"},
              {id:"b",text:"Non \u2014 le r\u00e9sidant sain ne peut pas faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour la \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629"},
              {id:"c",text:"Oui si elle est press\u00e9e"},
              {id:"d",text:"Permis car \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 est une pri\u00e8re sp\u00e9ciale"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0644\u0627 \u064a\u062a\u064a\u0645\u0645 \u0627\u0644\u062d\u0627\u0636\u0631 \u0627\u0644\u0635\u062d\u064a\u062d \u0644\u0646\u0627\u0641\u0644\u0629 \u0648\u0644\u0627 \u062c\u0645\u0639\u0629 \u0648\u0644\u0627 \u062c\u0646\u0627\u0632\u0629 \u00bb \u2014 le r\u00e9sidant sain ne peut pas faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour \u0627\u0644\u0646\u0648\u0627\u0641\u0644, \u0627\u0644\u062c\u064f\u0645\u064f\u0639\u064e\u0629 ou \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629."
          },
          {
            id: "q-sal-36",
            text: "<strong>SC\u00c9NARIO :</strong> Un homme est \u00e0 la 3\u00e8me rak\u02bfa du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 et r\u00e9alise que le temps du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 vient d'expirer. Doit-il interrompre ?",
            choices: [
              {id:"a",text:"Oui \u2014 la pri\u00e8re hors temps est invalide"},
              {id:"b",text:"Non \u2014 il compl\u00e8te la pri\u00e8re valablement car elle a \u00e9t\u00e9 commenc\u00e9e dans le temps"},
              {id:"c",text:"Oui s'il peut encore rattraper en allant vite"},
              {id:"d",text:"Seulement les rak\u02bf\u0101t dans le temps sont valides"},
            ],
            correctId: "b",
            explanation: "Une pri\u00e8re commenc\u00e9e dans le temps peut \u00eatre compl\u00e9t\u00e9e m\u00eame si elle se termine hors temps. Interrompre une pri\u00e8re commenc\u00e9e serait invalider ce qui a \u00e9t\u00e9 accompli."
          },
          {
            id: "q-sal-37",
            text: "L'<strong>\u0627\u0644\u0623\u064e\u0630\u064e\u0627\u0646</strong> Sunna (السُّنَّة) dans le rite malikite ?",
            choices: [
              {id:"a",text:"Obligation individuelle (\u0641\u0631\u0636 \u0639\u064a\u0646) pour chaque priant"},
              {id:"b",text:"Obligation collective (\u0641\u0631\u0636 \u0643\u0641\u0627\u064a\u0629) pour la communaut\u00e9"},
              {id:"c",text:"Sunna (السُّنَّة) mu\u02beakkada"},
              {id:"d",text:"Sunna (السُّنَّة) simple (\u0645\u0646\u062f\u0648\u0628)"},
            ],
            correctId: "b",
            explanation: "L'\u0627\u0644\u0623\u064e\u0630\u064e\u0627\u0646 est \u0641\u064e\u0631\u0652\u0636\u064f \u0643\u0650\u0641\u064e\u0627\u064a\u064e\u0629 pour la communaut\u00e9 \u2014 si personne ne le fait, toute la communaut\u00e9 est en p\u00e9ch\u00e9. Pour l'individu priant seul, c'Sunna (السُّنَّة). L'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 Sunna (السُّنَّة) individuellement."
          },
          {
            id: "q-sal-38",
            text: "<strong>NUANCE :</strong> La longueur de r\u00e9citation recommand\u00e9e dans \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d est :",
            choices: [
              {id:"a",text:"Courte \u2014 comme \u0627\u0644\u0639\u064e\u0635\u0652\u0631"},
              {id:"b",text:"Moyenne \u2014 comme \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621"},
              {id:"c",text:"Longue \u2014 parmi les r\u00e9citations les plus longues"},
              {id:"d",text:"Tr\u00e8s courte \u2014 seulement la F\u0101ti\u1e25a"},
            ],
            correctId: "c",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u062a\u0637\u0648\u064a\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0641\u064a \u0627\u0644\u0635\u0628\u062d \u0648\u0627\u0644\u0638\u0647\u0631 \u062a\u0644\u064a\u0647\u0627 \u0648\u062a\u0642\u0635\u064a\u0631\u0647\u0627 \u0641\u064a \u0627\u0644\u0639\u0635\u0631 \u0648\u0627\u0644\u0645\u063a\u0631\u0628 \u0648\u062a\u0648\u0633\u0637\u0647\u0627 \u0641\u064a \u0627\u0644\u0639\u0634\u0627\u0621 \u00bb \u2014 \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d et \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 ont les r\u00e9citations les plus longues. \u0627\u0644\u0639\u064e\u0635\u0652\u0631 et \u0627\u0644\u0645\u064e\u063a\u0652\u0631\u0650\u0628 sont courtes. \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621 est moyenne."
          },
          {
            id: "q-sal-39",
            text: "<strong>PI\u00c8GE :</strong> Le \u0645\u064e\u0633\u0652\u0628\u064f\u0648\u0642 (retardataire) a-t-il suivi l'الإِمَام dans le \u0633\u064f\u062c\u064f\u0648\u062f\u064f \u0627\u0644\u0628\u064e\u0639\u0652\u062f\u0650\u064a (apr\u00e8s le sal\u0101m) ?",
            choices: [
              {id:"a",text:"Il suit toujours l'الإِمَام"},
              {id:"b",text:"Il ne suit jamais l'الإِمَام \u2014 il finit sa propre pri\u00e8re d'abord"},
              {id:"c",text:"Il suit l'الإِمَام dans le \u0642\u064e\u0628\u0652\u0644\u0650\u064a mais reporte le \u0627\u0644\u0628\u064e\u0639\u0652\u062f\u0650\u064a \u00e0 la fin de sa propre pri\u00e8re"},
              {id:"d",text:"Il suit si et seulement si l'الإِمَام le demande explicitement"},
            ],
            correctId: "c",
            explanation: "Le \u0645\u064e\u0633\u0652\u0628\u064f\u0648\u0642 qui a rattrap\u00e9 au moins une rak\u02bfa compl\u00e8te suit l'الإِمَام dans le \u0633\u064f\u062c\u064f\u0648\u062f\u064f \u0627\u0644\u0642\u064e\u0628\u0652\u0644\u0650\u064a. Pour le \u0633\u064f\u062c\u064f\u0648\u062f\u064f \u0627\u0644\u0628\u064e\u0639\u0652\u062f\u0650\u064a, il l'accomplit \u00e0 la FIN de sa propre pri\u00e8re, apr\u00e8s avoir compl\u00e9t\u00e9 les rak\u02bf\u0101t manqu\u00e9es."
          },
          {
            id: "q-sal-40",
            text: "<strong>PI\u00c8GE :</strong> L'الإِمَام se l\u00e8ve par erreur pour une 5\u00e8me rak\u02bfa. Que font les personnes derri\u00e8re ?",
            choices: [
              {id:"a",text:"Ils suivent toujours l'الإِمَام"},
              {id:"b",text:"Celui CERTAIN de la \u0632\u064a\u0627\u062f\u0629 reste assis \u2014 celui qui DOUTE suit l'الإِمَام"},
              {id:"c",text:"Ils disent \u0633\u064f\u0628\u0652\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0647 et restent assis"},
              {id:"d",text:"Ils compl\u00e8tent leur pri\u00e8re ind\u00e9pendamment"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0625\u0630\u0627 \u0642\u0627\u0645 \u0627\u0644\u0625\u0645\u0627\u0645 \u0625\u0644\u0649 \u062e\u0627\u0645\u0633\u0629 \u062a\u0628\u0639\u0647 \u0645\u0646 \u062a\u064a\u0642\u0646 \u0645\u0648\u062c\u0628\u0647\u0627 \u0623\u0648 \u0634\u0643 \u0641\u064a\u0647 \u0648\u062c\u0644\u0633 \u0645\u0646 \u062a\u064a\u0642\u0646 \u0632\u064a\u0627\u062f\u062a\u0647\u0627 \u00bb \u2014 certitude de l'erreur = rester assis ; doute = suivre l'الإِمَام."
          },
          {
            id: "q-sal-41",
            text: "<strong>SC\u00c9NARIO :</strong> Ibrahim prie le \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 et se rappelle avoir une ancienne pri\u00e8re de \u0642\u064e\u0636\u064e\u0627\u0621. Doit-il interrompre sa pri\u00e8re ?",
            choices: [
              {id:"a",text:"Non \u2014 la souvenance pendant la pri\u00e8re n'oblige pas \u00e0 l'interrompre"},
              {id:"b",text:"Oui \u2014 l'ordre (\u0627\u0644\u062a\u0631\u062a\u064a\u0628) oblige \u00e0 faire le \u0642\u064e\u0636\u064e\u0627\u0621 d'abord"},
              {id:"c",text:"Seulement si le temps de la pri\u00e8re pr\u00e9sente n'expire pas"},
              {id:"d",text:"Seulement si c'est la m\u00eame pri\u00e8re"},
            ],
            correctId: "a",
            explanation: "Le \u0627\u0644\u062a\u0631\u062a\u064a\u0628 est une condition AVEC LE SOUVENIR au moment de COMMENCER la pri\u00e8re. Si le souvenir survient EN COURS de pri\u00e8re, on la compl\u00e8te. Il n'y a pas d'obligation d'interrompre la pri\u00e8re en cours."
          },
          {
            id: "q-sal-42",
            text: "<strong>AVANC\u00c9 :</strong> La pri\u00e8re de l'\u0627\u0644\u0627\u0633\u062a\u0633\u0642\u0627\u0621 (demande de pluie) est-elle autoris\u00e9e pour celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621 en dette ?",
            choices: [
              {id:"a",text:"Non \u2014 comme toute \u0646\u0627\u0641\u0644\u0629"},
              {id:"b",text:"Oui \u2014 elle figure dans la liste des exceptions autoris\u00e9es"},
              {id:"c",text:"Seulement en cas de s\u00e9cheresse grave"},
              {id:"d",text:"Seulement si l'الإِمَام l'ordonne"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b liste les pri\u00e8res autoris\u00e9es pour celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621 : \u00ab \u0627\u0644\u0634\u0641\u0639 \u0648\u0627\u0644\u0648\u062a\u0631 \u0648\u0627\u0644\u0641\u062c\u0631 \u0648\u0627\u0644\u0639\u064a\u062f\u0627\u0646 \u0648\u0627\u0644\u062e\u0633\u0648\u0641 \u0648\u0627\u0644\u0627\u0633\u062a\u0633\u0642\u0627\u0621 \u00bb \u2014 \u0627\u0644\u0627\u0633\u062a\u0633\u0642\u0627\u0621 est dans la liste des exceptions permises."
          },
          {
            id: "q-sal-43",
            text: "<strong>PI\u00c8GE :</strong> La femme souffrant d'incontinence urinaire chronique doit-elle interrompre sa pri\u00e8re \u00e0 chaque \u062d\u064e\u062f\u064e\u062b ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout \u062d\u064e\u062f\u064e\u062b interrompt la pri\u00e8re"},
              {id:"b",text:"Non \u2014 l'incontinence chronique est une excuse permettant de continuer"},
              {id:"c",text:"Elle doit refaire \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 entre chaque rak\u02bfa"},
              {id:"d",text:"Elle ne peut pas prier"},
            ],
            correctId: "b",
            explanation: "Le rite malikite reconna\u00eet l'excuse pour les personnes souffrant d'incontinence ou de saignement chronique (\u0627\u0644\u0627\u0633\u062a\u062d\u0627\u0636\u0629). Elle prie avec le \u0627\u0644\u0648\u064f\u0636\u064f\u0648\u0621 accompli pour chaque pri\u00e8re et son \u062d\u064e\u062f\u064e\u062b chronique ne l'interrompt pas pendant la pri\u00e8re."
          },
          {
            id: "q-sal-44",
            text: "<strong>NUANCE :</strong> Peut-on interrompre une pri\u00e8re sur\u00e9rogatoire (\u0646\u0627\u0641\u0644\u0629) en cours ?",
            choices: [
              {id:"a",text:"Oui librement \u2014 c'est volontaire"},
              {id:"b",text:"Oui mais il faut la rattraper (\u0642\u064e\u0636\u064e\u0627\u0621)"},
              {id:"c",text:"Non \u2014 une \u0646\u0627\u0641\u0644\u0629 commenc\u00e9e doit \u00eatre compl\u00e9t\u00e9e"},
              {id:"d",text:"Seulement si c'est une pri\u00e8re de \u0636\u064f\u062d\u064e\u0649"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0642\u0637\u0639 \u062a\u0637\u0648\u0639\u0627\u064b \u0639\u0627\u0645\u062f\u0627\u064b \u0623\u0639\u0627\u062f\u0647 \u0623\u0628\u062f\u0627\u064b \u00bb \u2014 interrompre d\u00e9lib\u00e9r\u00e9ment une \u0646\u0627\u0641\u0644\u0629 impose de la rattraper. C'est le m\u00eame principe que pour le je\u00fbne volontaire interrompu."
          },
          {
            id: "q-sal-45",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim est en pri\u00e8re et son t\u00e9l\u00e9phone sonne. Il r\u00e9pond par erreur en disant \u00ab Allo \u00bb. Sa pri\u00e8re est-elle invalide ?",
            choices: [
              {id:"a",text:"Non \u2014 une erreur sinc\u00e8re ne rompt pas la pri\u00e8re"},
              {id:"b",text:"Oui \u2014 toute parole adress\u00e9e \u00e0 un humain invalide la pri\u00e8re, m\u00eame par erreur sinc\u00e8re"},
              {id:"c",text:"Seulement si une conversation s'ensuit"},
              {id:"d",text:"Non si c'\u00e9tait une parole d'une seule syllabe"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b distingue deux cas : (1) parole par OUBLI total (\u0646\u0627\u0633\u064a\u0627\u064b) \u2014 la pri\u00e8re peut rester valide avec deux prosternations d'oubli. (2) Parole d\u00e9lib\u00e9r\u00e9e ou par inadvertance sans oubli complet \u2014 invalide la pri\u00e8re. \u00ab Allo \u00bb conscient invalide la pri\u00e8re."
          },
          {
            id: "q-sal-46",
            text: "<strong>AVANC\u00c9 :</strong> Les \u0627\u0644\u0623\u064e\u064a\u064e\u0651\u0627\u0645\u064f \u0627\u0644\u0628\u0650\u064a\u0636 (13, 14, 15 de chaque mois) \u2014 leur je\u00fbne est-il autoris\u00e9 pour celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621 ?",
            choices: [
              {id:"a",text:"Oui \u2014 c'est un je\u00fbne hautement m\u00e9ritoire"},
              {id:"b",text:"Non \u2014 comme toute \u0646\u0627\u0641\u0644\u0629, interdit \u00e0 celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621"},
              {id:"c",text:"Oui car ce sont des jours sp\u00e9ciaux"},
              {id:"d",text:"Seulement si le \u0642\u064e\u0636\u064e\u0627\u0621 date de moins d'un mois"},
            ],
            correctId: "b",
            explanation: "Les je\u00fbnes de l'\u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0628\u064a\u0636 sont des \u0646\u0648\u0627\u0641\u0644. Comme toutes les \u0646\u0648\u0627\u0641\u0644, ils sont interdits \u00e0 celui ayant des \u0642\u064e\u0636\u064e\u0627\u0621 en dette. L'Akh\u1e0dar\u012b est clair : seules les pri\u00e8res/je\u00fbnes list\u00e9s explicitement sont autoris\u00e9s."
          },
          {
            id: "q-sal-47",
            text: "<strong>PI\u00c8GE :</strong> La\u00efla a ses r\u00e8gles (\u062d\u064e\u064a\u0652\u0636) et r\u00e9alise qu'elle a des pri\u00e8res de \u0642\u064e\u0636\u064e\u0627\u0621. Doit-elle les rattraper ?",
            choices: [
              {id:"a",text:"Oui \u2014 le \u0642\u064e\u0636\u064e\u0627\u0621 s'accumule pendant le \u062d\u064e\u064a\u0652\u0636"},
              {id:"b",text:"Non \u2014 la \u062d\u064e\u0627\u0626\u0650\u0636 ne rattrape pas les pri\u00e8res manqu\u00e9es pendant ses r\u00e8gles"},
              {id:"c",text:"Seulement les pri\u00e8res faites apr\u00e8s la pubert\u00e9"},
              {id:"d",text:"Seulement \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d et \u0627\u0644\u0645\u064e\u063a\u0652\u0631\u0650\u0628"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0639\u0644\u064a\u0647\u0627 \u0642\u0636\u0627\u0621 \u0627\u0644\u0635\u0648\u0645 \u062f\u0648\u0646 \u0627\u0644\u0635\u0644\u0627\u0629 \u00bb \u2014 la \u062d\u064e\u0627\u0626\u0650\u0636 rattrape le JE\u00dbNE mais PAS la pri\u00e8re. Les pri\u00e8res manqu\u00e9es pendant le \u062d\u064e\u064a\u0652\u0636 sont d\u00e9finitivement dispens\u00e9es et ne sont jamais rattrap\u00e9es."
          },
          {
            id: "q-sal-48",
            text: "<strong>SC\u00c9NARIO :</strong> L'الإِمَام dit le sal\u0101m puis r\u00e9alise qu'il a manqu\u00e9 une rak\u02bfa. Il est averti par deux personnes \u00e9quitables. Que fait-il ?",
            choices: [
              {id:"a",text:"Sa pri\u00e8re est invalide \u2014 on ne peut pas revenir apr\u00e8s le sal\u0101m"},
              {id:"b",text:"Il compl\u00e8te la rak\u02bfa manquante si les deux t\u00e9moins sont \u00e9quitables"},
              {id:"c",text:"Il refait toute la pri\u00e8re"},
              {id:"d",text:"Il fait seulement deux prosternations d'oubli"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0625\u0630\u0627 \u0633\u0644\u0645 \u0642\u0628\u0644 \u0643\u0645\u0627\u0644 \u0627\u0644\u0635\u0644\u0627\u0629... \u0648\u0625\u0646 \u0634\u0643 \u0641\u064a \u062e\u0628\u0631\u0647 \u0633\u0623\u0644 \u0639\u062f\u0644\u064a\u0646 \u0648\u062c\u0627\u0632 \u0644\u0647\u0645\u0627 \u0627\u0644\u0643\u0644\u0627\u0645 \u0641\u064a \u0630\u0644\u0643 \u00bb \u2014 deux t\u00e9moins \u00e9quitables (\u0639\u064e\u062f\u0652\u0644\u064e\u0627\u0646) peuvent confirmer l'erreur et l'الإِمَام compl\u00e8te sa pri\u00e8re."
          },
          {
            id: "q-sal-49",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim a 5 pri\u00e8res de \u0642\u064e\u0636\u064e\u0627\u0621 en dette. Le temps du \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 arrive. Que fait-il ?",
            choices: [
              {id:"a",text:"Il prie ses 5 \u0642\u064e\u0636\u064e\u0627\u0621 d'abord"},
              {id:"b",text:"Il prie le \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 d'abord \u2014 au-del\u00e0 de 4 \u0642\u064e\u0636\u064e\u0627\u0621, la pr\u00e9sente est prioritaire"},
              {id:"c",text:"Il peut choisir"},
              {id:"d",text:"Il prie 4 \u0642\u064e\u0636\u064e\u0627\u0621 puis le \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : 4 pri\u00e8res ou moins \u2192 rattraper avant la pr\u00e9sente. 5 ou plus \u2192 la pri\u00e8re pr\u00e9sente est prioritaire, on rattrape le reste ensuite. Avec 5 \u0642\u064e\u0636\u064e\u0627\u0621, il prie le \u0627\u0644\u0638\u064f\u0651\u0647\u0652\u0631 en premier."
          },
          {
            id: "q-sal-50",
            text: "<strong>QUESTION FINALE :</strong> La \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629 (pri\u00e8re fun\u00e8bre) peut-elle \u00eatre accomplie par \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour un r\u00e9sidant sain ?",
            choices: [
              {id:"a",text:"Oui \u2014 la \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629 est une obligation urgente"},
              {id:"b",text:"Non \u2014 sauf si c'est \u0641\u0631\u0636 \u0639\u064a\u0646 (obligation personnelle) sur lui"},
              {id:"c",text:"Oui si la \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629 est imminente"},
              {id:"d",text:"Oui car c'est une pri\u00e8re diff\u00e9rente des \u0646\u0648\u0627\u0641\u0644"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0644\u0627 \u064a\u062a\u064a\u0645\u0645 \u0627\u0644\u062d\u0627\u0636\u0631 \u0627\u0644\u0635\u062d\u064a\u062d \u0644\u062c\u0646\u0627\u0632\u0629 \u00bb sauf si elle lui est \u0641\u064e\u0631\u0652\u0636\u064f \u0639\u064e\u064a\u0652\u0646 (personne d'autre ne peut l'accomplir). Dans ce cas exceptionnel, le r\u00e9sidant sain peut faire \u0627\u0644\u062a\u064e\u0651\u064a\u064e\u0645\u064f\u0651\u0645 pour la \u0627\u0644\u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629."
          }
        ,
          {
            id: "q-sal-51",
            text: "<strong>SP\u00c9CIFICIT\u00c9 MALIKITE :</strong> Quelle est la position des bras dans les pri\u00e8res obligatoires (\u0641\u064e\u0631\u064e\u0627\u0626\u0650\u0636) selon le rite malikite ?",
            choices: [
            {id:"a",text:"Les mains crois\u00e9es sur la poitrine (\u0627\u0644\u0642\u064e\u0628\u0652\u0636) comme dans les autres rites"},
            {id:"b",text:"Les bras le long du corps (\u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644) \u2014 mains non crois\u00e9es"},
            {id:"c",text:"La main droite sur le poignet gauche sur le bas-ventre"},
            {id:"d",text:"Les deux mains jointes devant soi"}
            ],
            correctId: "b",
            explanation: "\u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 est la position malikite pour les pri\u00e8res obligatoires : les bras restent le long du corps, non crois\u00e9s. C'est l'un des marqueurs identitaires les plus visibles du rite malikite. Le \u0642\u064e\u0628\u0652\u0636 (mains crois\u00e9es) est permis dans les \u0646\u0648\u0627\u0641\u0644 selon certains savants malikites, mais pas dans les \u0641\u0631\u0627\u0626\u0636."
          },
          {
            id: "q-sal-52",
            text: "<strong>PI\u00c8GE :</strong> Peut-on croiser les mains (\u0627\u0644\u0642\u064e\u0628\u0652\u0636) dans une pri\u00e8re sur\u00e9rogatoire (\u0646\u064e\u0627\u0641\u0650\u0644\u064e\u0629) selon certains savants malikites ?",
            choices: [
            {id:"a",text:"Non \u2014 \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 est obligatoire pour toutes les pri\u00e8res dans le rite malikite"},
            {id:"b",text:"Oui \u2014 certains savants malikites permettent le \u0642\u064e\u0628\u0652\u0636 dans les \u0646\u0648\u0627\u0641\u0644"},
            {id:"c",text:"Seulement pour les femmes"},
            {id:"d",text:"Seulement pour le الوِتْر et le Shaf\u02bf"}
            ],
            correctId: "b",
            explanation: "Il y a un d\u00e9bat interne \u00e0 l'\u00e9cole : la position dominante est \u0627\u0644\u0633\u064e\u0651\u062f\u0652\u0644 dans les \u0641\u0631\u0627\u0626\u0636. Pour les \u0646\u0648\u0627\u0641\u0644, certains savants malikites permettent le \u0642\u064e\u0628\u0652\u0636. Ce n'est pas une question de \u062d\u0644\u0627\u0644/\u062d\u0631\u0627\u0645 mais de pratique pr\u00e9f\u00e9r\u00e9e selon le contexte."
          },
          {
            id: "q-sal-53",
            text: "La limite inf\u00e9rieure de la voix basse (\u0627\u0644\u0633\u0650\u0651\u0631\u0651) pour l'homme dans la pri\u00e8re est :",
            choices: [
            {id:"a",text:"Aucune limite \u2014 on peut juste penser les mots"},
            {id:"b",text:"Se faire entendre soi-m\u00eame"},
            {id:"c",text:"Bouger la langue obligatoirement \u2014 m\u00eame sans son audible"},
            {id:"d",text:"Murmurer si faiblement qu'on ne s'entend pas soi-m\u00eame"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr (Al-Jaz\u012br\u012b) : la limite INF\u00c9RIEURE de la voix basse pour l'homme = bouger la langue obligatoirement. Sans bouger la langue (simple pens\u00e9e int\u00e9rieure), la r\u00e9citation n'est pas valide. La limite sup\u00e9rieure du \u0633\u0650\u0631\u0651 = se faire entendre soi-m\u00eame. Si on fait entendre quelqu'un \u00e0 c\u00f4t\u00e9 \u2192 on est pass\u00e9 en \u062c\u064e\u0647\u0652\u0631."
          },
          {
            id: "q-sal-54",
            text: "La limite de la voix haute (\u0627\u0644\u062c\u064e\u0647\u0652\u0631) pour la femme dans la pri\u00e8re est :",
            choices: [
            {id:"a",text:"M\u00eame que l'homme \u2014 elle peut \u00e9lever la voix autant qu'elle veut"},
            {id:"b",text:"Se faire entendre elle-m\u00eame sans faire entendre les autres"},
            {id:"c",text:"Aucun son \u2014 la femme prie toujours en silence total"},
            {id:"d",text:"Elle ne peut prier qu'en silence si un homme non-mahram est \u00e0 port\u00e9e"}
            ],
            correctId: "b",
            explanation: "Pour la femme, sa voix haute = se faire entendre elle-m\u00eame uniquement (sans faire entendre les autres hommes non-mahram). Sa voix basse = bouger la langue sans se faire entendre. Cette r\u00e8gle prot\u00e8ge \u00e0 la fois la validit\u00e9 de sa pri\u00e8re et la pudeur."
          },
          {
            id: "q-sal-55",
            text: "<strong>SP\u00c9CIFICIT\u00c9 MALIKITE :</strong> Que r\u00e9cite-t-on dans les 2 rak\u02bf\u0101Sunna (السُّنَّة) du Fadjr selon la Mudawwana (المُدَوَّنَة) ?",
            choices: [
            {id:"a",text:"La F\u0101ti\u1e25a + une sourate choisie, comme pour le Subh"},
            {id:"b",text:"Uniquement la F\u0101ti\u1e25a (sans sourate) dans chacune des deux rak\u02bf\u0101t"},
            {id:"c",text:"La F\u0101ti\u1e25a + Sourate al-Ikhl\u0101\u1e63 dans chacune"},
            {id:"d",text:"Uniquement Sourate al-K\u0101fir\u016bn et al-Ikhl\u0101\u1e63"}
            ],
            correctId: "b",
            explanation: "Sp\u00e9cificit\u00e9 malikite d'apr\u00e8s la Mudawwana (المُدَوَّنَة) : l'Im\u0101m M\u0101lik dit qu'il ne r\u00e9cite que la F\u0101ti\u1e25a seule dans les 2 rak\u02bf\u0101Sunna (السُّنَّة) du Fadjr \u2014 rien de plus. Raison : le Proph\u00e8te \ufdfa les all\u00e9geait tellement qu'on se demandait s'il avait m\u00eame lu la F\u0101ti\u1e25a. Contrairement \u00e0 ce qu'on fait dans d'autres rites."
          },
          {
            id: "q-sal-56",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim rate la pri\u00e8re du \u0627\u0644\u0635\u064f\u0651\u0628\u062d et se r\u00e9veille apr\u00e8s le lever du soleil. Dans quel ordre doit-il agir ?",
            choices: [
            {id:"a",text:"D'Sunna (السُّنَّة) du Fadjr (2 rak\u02bf\u0101t), puis le \u0627\u0644\u0635\u064f\u0651\u0628\u062d obligatoire"},
            {id:"b",text:"D'abord \u0627\u0644\u0635\u064f\u0651\u0628\u062d obligatoire, Sunna (السُّنَّة) du Fadjr"},
            {id:"c",text:"Uniquement \u0627\u0644\u0635\u064f\u0651\u0628\u062d \u2014 Sunna (السُّنَّة) du Fadjr est caduque"},
            {id:"d",text:"Indiff\u00e9rent \u2014 dans l'un ou l'autre ordre"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Si on rate la pri\u00e8re de Subh et qu'on se l\u00e8ve le matin apr\u00e8s le lever du soleil : Sunna (السُّنَّة) du Fadjr \u00bb. L'Sunna (السُّنَّة). Sunna (السُّنَّة) peut \u00eatre rattrap\u00e9e jusqu'au Zawal."
          },
          {
            id: "q-sal-57",
            text: "Jusqu'\u00e0 Sunna (السُّنَّة) du Fadjr selon le rite malikite ?",
            choices: [
            {id:"a",text:"Elle ne se rattrape jamais"},
            {id:"b",text:"Seulement avant le lever du soleil"},
            {id:"c",text:"Jusqu'au Zawal (d\u00e9clin du soleil \u2014 midi islamique)"},
            {id:"d",text:"Jusqu'\u00e0 la pri\u00e8re du \u0627\u0644\u0639\u064e\u0635\u0652\u0631"}
            ],
            correctId: "c",
            explanation: "Sunna (السُّنَّة) du Fadjr est la seule pri\u00e8re sur\u00e9rogatoire qui se rattrape jusqu'au Zawal (d\u00e9clin du soleil) dans le rite malikite. Apr\u00e8s le Zawal, elle ne se rattrape plus. C'est une r\u00e8gle propre au rite malikite \u2014 \u00e0 noter car les autres pri\u00e8res sur\u00e9rogatoires ne se rattrapent g\u00e9n\u00e9ralement pas."
          },
          {
            id: "q-sal-58",
            text: "Dans la prosternation (\u0627\u0644\u0633\u064f\u0651\u062c\u064f\u0648\u062f), le nez doit-il obligatoirement toucher le sol selon le rite malikite ?",
            choices: [
            {id:"a",text:"Non \u2014 seul le front est obligatoire"},
            {id:"b",text:"Oui \u2014 front ET nez doivent tous deux toucher le sol dans le rite malikite"},
            {id:"c",text:"Oui mais seulement dans \u0627\u0644\u0635\u064f\u0651\u0628\u062d"},
            {id:"d",text:"Non \u2014 c'Sunna (السُّنَّة) seulement"}
            ],
            correctId: "b",
            explanation: "Dans le rite malikite, le front ET le nez doivent tous deux toucher le sol dans la prosternation. C'est diff\u00e9rent de certains autres rites o\u00f9 seul le front est obligatoire. Doctrine-malikite.fr : \u00ab Pendant la prosternation (Suj\u00fbd), il faut que le front, le nez et les paumes des mains touchent le sol \u00bb."
          },
          {
            id: "q-sal-59",
            text: "<strong>PI\u00c8GE :</strong> Pour la position dans la prosternation, quelle est la diff\u00e9rence entre l'homme et la femme ?",
            choices: [
            {id:"a",text:"Aucune diff\u00e9rence \u2014 m\u00eame posture pour tous"},
            {id:"b",text:"L'homme : ventre s\u00e9par\u00e9 des cuisses, coudes \u00e9loign\u00e9s des genoux. La femme : se recroqueviller en ramenant ses membres"},
            {id:"c",text:"La femme prie assise uniquement en \u0627\u0644\u0633\u064f\u0651\u062c\u064f\u0648\u062f"},
            {id:"d",text:"L'homme pose les mains \u00e0 plat, la femme ferme les poings"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr pr\u00e9cise les deux postures : Pour l'homme : ne pas coller le ventre contre les cuisses, \u00e9loigner les coudes des genoux (ouverture). Pour la femme : se recroqueviller en ramenant ses membres contre elle (fermeture \u2014 pour la pudeur). Ces diff\u00e9rences s'appliquent aussi \u00e0 la position assise."
          },
          {
            id: "q-sal-60",
            text: "L'<strong>Tashahhud (التَّشَهُّد)</strong> : quel est le geste recommand\u00e9 dans le rite malikite ?",
            choices: [
            {id:"a",text:"Ne pas bouger l'index \u2014 le garder immobile tendu"},
            {id:"b",text:"Faire tourner l'index en cercles"},
            {id:"c",text:"Bouger l'index (l\u00e9g\u00e8rement) Tashahhud (التَّشَهُّد), index et pouce tendus, autres doigts ferm\u00e9s"},
            {id:"d",text:"Lever bri\u00e8vement l'index uniquement \u00e0 la Shah\u0101da"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr (d'apr\u00e8s la المُدَوَّنَة) : il est pr\u00e9f\u00e9rable (musta\u1e25abb) de bouger l'Tashahhud (التَّشَهُّد). Index et pouce tendus, les trois autres doigts ferm\u00e9s. La main pos\u00e9e \u00e0 plat sur la cuisse pr\u00e8s du genou. C'est un signe de monotheisme (\u0627\u0644\u062a\u0648\u062d\u064a\u062f) Tashahhud (التَّشَهُّد)."
          },
          {
            id: "q-sal-61",
            text: "L'الإِمَام prie. Combien de sal\u0101ms fait-il pour conclure sa pri\u00e8re ?",
            choices: [
            {id:"a",text:"Deux sal\u0101ms : un \u00e0 droite, un \u00e0 gauche"},
            {id:"b",text:"Un seul sal\u0101m (\u00e0 droite)"},
            {id:"c",text:"Trois sal\u0101ms : \u00e0 droite, en face, \u00e0 gauche"},
            {id:"d",text:"Cela d\u00e9pend du nombre de personnes derri\u00e8re lui"}
            ],
            correctId: "b",
            explanation: "Sp\u00e9cificit\u00e9 malikite : l'الإِمَام et celui qui prie seul ne font qu'UN SEUL sal\u0101m (\u00e0 droite). Le second sal\u0101m (en face de l'الإِمَام, puis \u00e0 gauche) n'est prescrit que pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645 (celui qui prie derri\u00e8re l'الإِمَام). Doctrine-malikite.fr confirme : \u00ab si on prie seul ou si on est Im\u00e2m, on s'arr\u00eatera au Sal\u00e2m \u00e0 droite \u00bb."
          },
          {
            id: "q-sal-62",
            text: "<strong>PI\u00c8GE :</strong> Karim prie derri\u00e8re un الإِمَام. Quand doit-il faire le sal\u0101m \u00e0 gauche ?",
            choices: [
            {id:"a",text:"Jamais \u2014 seul le sal\u0101m \u00e0 droite est prescrit pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645"},
            {id:"b",text:"Toujours, m\u00eame s'il est seul derri\u00e8re l'الإِمَام"},
            {id:"c",text:"Seulement si quelqu'un \u00e0 sa gauche a fait au moins 1 rak\u02bfa avec l'الإِمَام"},
            {id:"d",text:"Seulement si l'الإِمَام fait 3 sal\u0101ms"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : le sal\u0101m \u00e0 gauche pour le \u0645\u064e\u0623\u0645\u064f\u0648\u0645 Sunna (السُّنَّة) (mand\u00fbb) SEULEMENT si quelqu'un \u00e0 sa gauche a fait au moins une rak\u02bfa compl\u00e8te avec l'الإِمَام. S'il est seul ou si son voisin de gauche n'a pas fait de rak\u02bfa avec l'الإِمَام \u2192 pas de sal\u0101m \u00e0 gauche."
          },
          {
            id: "q-sal-63",
            text: "Le <strong>\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639 \u0648\u0627\u0644\u0648\u0650\u062a\u0652\u0631</strong> (apr\u00e8s \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621) \u2014 combien de rak\u02bf\u0101t au total et \u00e0 voix haute ou basse ?",
            choices: [
            {id:"a",text:"3 rak\u02bf\u0101t d'un bloc, \u00e0 voix basse"},
            {id:"b",text:"\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639 = 2 rak\u02bf\u0101t \u00e0 voix haute + \u0627\u0644\u0648\u0650\u062a\u0652\u0631 = 1 rak\u02bfa \u00e0 voix haute, avec sal\u0101m s\u00e9parant les deux"},
            {id:"c",text:"\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639 = 4 rak\u02bf\u0101t + \u0627\u0644\u0648\u0650\u062a\u0652\u0631 = 3 rak\u02bf\u0101t"},
            {id:"d",text:"\u0627\u0644\u0648\u0650\u062a\u0652\u0631 = 1 rak\u02bfa silencieuse uniquement"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : apr\u00e8s \u0627\u0644\u0639\u0650\u0634\u064e\u0627\u0621, il est pr\u00e9f\u00e9rable de prier 2 rak\u02bf\u0101t (\u0627\u0644\u0634\u064e\u0651\u0641\u0652\u0639) puis 1 rak\u02bfa (\u0627\u0644\u0648\u0650\u062a\u0652\u0631). Chacun avec sa propre F\u0101ti\u1e25a + sourate \u00e0 voix haute (comme le Subh), Tashahhud (التَّشَهُّد) final et son sal\u0101m. Un sal\u0101m s\u00e9pare le Shaf\u02bf du الوِتْر \u2014 ce sont deux pri\u00e8res distinctes."
          },
          {
            id: "q-sal-64",
            text: "<strong>AVANC\u00c9 :</strong> La formule de l'<strong>\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629</strong> dans le rite malikite est-elle identique \u00e0 l'adh\u0101n ?",
            choices: [
            {id:"a",text:"Oui \u2014 m\u00eame formule compl\u00e8te"},
            {id:"b",text:"Non \u2014 l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 est plus courte : pas de r\u00e9p\u00e9titions doubles et ajout de \u0642\u062f \u0642\u0627\u0645\u062a \u0627\u0644\u0635\u0644\u0627\u0629"},
            {id:"c",text:"L'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 est identique mais r\u00e9cit\u00e9e deux fois plus vite"},
            {id:"d",text:"L'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 n'a pas de formule fixe dans le rite malikite"}
            ],
            correctId: "b",
            explanation: "La formule malikite de l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 (المُدَوَّنَة) est abr\u00e9g\u00e9e par rapport \u00e0 l'adh\u0101n : chaque phrase est dite UNE fois (pas deux) sauf \u0627\u0644\u0644\u0647 \u0623\u0643\u0628\u0631 \u00d7 2 au d\u00e9but, et on ajoute \u0642\u064e\u062f \u0642\u064e\u0627\u0645\u064e\u062a\u0650 \u0627\u0644\u0635\u064e\u0651\u0644\u064e\u0627\u0629. L'adh\u0101n est plus long avec des r\u00e9p\u00e9titions (\u0645\u062b\u0646\u0649/\u0645\u0631\u0628\u0639). Les deux sont des appels distincts avec des formules distinctes."
          },
          {
            id: "q-sal-65",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim oublie d\u00e9lib\u00e9r\u00e9ment de faire l'<strong>\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629</strong> avant sa pri\u00e8re. Sa pri\u00e8re est-elle invalide ?",
            choices: [
            {id:"a",text:"Oui \u2014 l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 est une condition de validit\u00e9 de la pri\u00e8re"},
            {id:"b",text:"Oui si c'est d\u00e9lib\u00e9r\u00e9 \u2014 invalide en cas d'intention volontaire"},
            {id:"c",text:"Non \u2014 la pri\u00e8re reste valide, mais il demande pardon \u00e0 Allah"},
            {id:"d",text:"Non \u2014 l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 est facultative sans cons\u00e9quence"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr (المُدَوَّنَة, avis de l'Im\u0101m M\u0101lik) : que ce soit par oubli ou d\u00e9lib\u00e9r\u00e9ment, l'oubli de l'\u0627\u0644\u0625\u0650\u0642\u064e\u0627\u0645\u064e\u0629 ne rend pas la pri\u00e8re invalide. En cas d'omission d\u00e9lib\u00e9r\u00e9e : la pri\u00e8re reste valide, mais il est recommand\u00e9 de demander le pardon d'Allah (\u0627\u0633\u062a\u063a\u0641\u0627\u0631). C'Sunna (السُّنَّة), non une condition de validit\u00e9."
          }
        ]
      },

      badge: {
        id: 'badge-priere',
        title: 'Ṣalāt (الصَّلَاة)',
        arabicTitle: 'محافظ الصلاة',
        icon: 'arch',
        color: 'silver',
        unlockCondition: 'Questionnaire "La Prière" avec un score ≥ 85 %'
      }
    },

    /* ═══════════════════════════════════════════════════
       SUJET 3 — Le JeûṢawm (الصوم) — PDF à venir
       ═══════════════════════════════════════════════════ */
    {
      id: 'jeune',
      title: 'Le Jeûne',
      arabicTitle: 'الصوم',
      icon: 'crescent',
      description: 'Obligation du Ramadan, Niyya (النِّيَّة), nullificateurs, Kaffāra (الكَفَّارَة), Qaḍāʾ (القَضَاء) et qiyām al-ramaḍān selon la Risāla d\'Ibn Abī Zayd al-Qayrawānī.',

      lessons: [

        {
          id: 'saw-01',
          title: 'L\'Obligation du JeûNiyya (النِّيَّة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Le jeûne du mois de Ramadan est une farīḍa (obligation). La Risāla expose ses conditions d\'entrée, la rèNiyya (النِّيَّة) (intention) et quelques cas pratiques fondamentaux.' },
            { t: 'h', v: 'Établissement du mois de Ramadan' },
            { t: 'p', v: 'On entre en Ramadan à la vue du croissant de lune (الهِلَال) et on le termine à sa vue. Si le ciel est couvert, on complète trente jours à partir du début du mois précédent — puis on commence à jeûner. Il en est de même pour la sortie du Ramadan (ʿĪd al-Fiṭr).' },
            { t: 'ar', v: 'وَصَوْمُ شَهرِ رَمَضَانَ فَرِيضَةٌ، يُصَامُ لِرُؤيَةِ الهِلَالِ وَيُفطَرُ لِرُؤيَتِهِ', n: '« Le jeûne du mois de Ramadan est une obligation. On le commence à la vue du croissant et on le termine à sa vue. » — Risāla d\'Ibn Abī Zayd al-Qayrawānī' },
            { t: 'h', v: 'Niyya (النِّيَّة) (intention) du jeûne' },
            { t: 'p', v: 'L\'intention doit être arrêtée (التَّبيِيت al-النِّيَّة) chaque nuit, dès le début du mois. Elle n\'est pas requise pour le reste de la journée. L\'intention se fait par le cœur, en sachant que l\'on jeûne le lendemain pour Allāh.' },
            { t: 'h', v: 'Sunna (السُّنَّة) dans le suhūr et l\'ifṭār' },
            { t: 'ul', v: [
              '<strong>Avancer l\'ifṭār</strong> (rompre le jeûne dès la tombée de la nuit) Sunna (السُّنَّة).',
              '<strong>Retarder le suhūr</strong> (le repas de pré-aube) jusqu\'à juste avant le الفَجْر Sunna (السُّنَّة).',
              'En cas de doute sur l\'arrivée de l\'aube, on peut encore manger.'
            ] },
            { t: 'h', v: 'Le jour de doute (yawm al-shakk)' },
            { t: 'p', v: 'Le 30e jour de Shaʿbān, lorsqu\'on doute de l\'entrée de Ramadan, ne doit pas être jeûné par précaution pour Ramadan. Celui qui le jeûne avec cette intention n\'est pas validé, même si ce jour coïncide effectivement avec le premier Ramadan. Il est permis de le jeûner comme jeûne volontaire habituel.' },
            { t: 'ar', v: 'وَلَا يُصَامُ يَومُ الشَّكِّ لِيُحتَاطَ بِهِ مِن رَمَضَانَ، وَمَن صَامَهُ كَذَلِكَ لَم يُجزِه وَإِن وَافَقَهُ مِن رَمَضَان', n: '« On ne jeûne pas le jour du doute en guise de précaution pour Ramadan. Quiconque le jeûne dans cet esprit n\'est pas validé, même si ce jour coïncide avec Ramadan. »' },
            { t: 'note', v: 'Celui qui se lève sans avoir mangé et sans avoir bu — et qui n\'avait pas encore décidé de jeûner — peut décider de jeûner cette journée de Ramadan si cette décision est prise suffisamment tôt.' }
          ]
        },

        {
          id: 'saw-02',
          title: 'Les Nullificateurs du Jeûne',
          status: 'available',
          content: [
            { t: 'lead', v: 'Certains actes ou états invalident le jeûQaḍāʾ (القَضَاء) Kaffāra (الكَفَّارَة). La Risāla distingue soigneusement les cas.' },
            { t: 'h', v: 'Ce qui n\'invalide pas le jeûne' },
            { t: 'ul', v: [
              '<strong>Le siwāk</strong> est permis tout au long de la journée du jeûne.',
              '<strong>La saignée (ḥijāma)</strong> n\'est déconseillée que si elle risque d\'affaiblir le jeûneur au point de le faire rompre son jeûne par nécessité.',
              '<strong>Les vomissements involontaires (qayʾ maglūb)</strong> : "من ذرعه القيء فلا قضاء عليه" — si l\'on est submergé involontairement par des vomissements, Qaḍāʾ (القَضَاء).',
              '<strong>Se réveiller en éJanāba (الجَنَابَة)</strong> (impureté majeure due au rapport sexuel de la nuit) n\'invalide pas le jeûne de la journée.',
              '<strong>Le voyageur qui rentre en cours de journée</strong> en état d\'ifrār (ayant rompu le jeûne) et la femme qui se purifies de ses règles en cours de journée : tous deux peuvent manger le reste de cette journée sans être tenus à l\'imsāk.'
            ] },
            { t: 'h', v: 'Qaḍāʾ (القَضَاء)' },
            { t: 'ul', v: [
              '<strong>Rompre délibérément son jeûne surérogatoire</strong> : Qaḍāʾ (القَضَاء).',
              '<strong>Se vomir délibérément</strong> : "وإن استقاء قضاء" — Qaḍāʾ (القَضَاء).',
              '<strong>La caresse ou le baiser avec désir</strong> qui amène à une émission : Qaḍāʾ (القَضَاء).',
              '<strong>Manger ou boire par oubli</strong> ne rompt pas le jeûne selon l\'école malikite (contrairement à d\'autres).'
            ] },
            { t: 'h', v: 'La femme enceinte et la mère allaitante' },
            { t: 'ul', v: [
              'Femme enceinte qui craint pour son fœtus : rompt le jeûQaḍāʾ (القَضَاء), sans الفِدْيَة.',
              'Mère allaitante qui craint pour l\'enfant : rompt le jeûne et doit nourrir un pauvre par jour de rattrapage (الفِدْيَة).'
            ] },
            { t: 'h', v: 'Cas particulier : junub réveillé après le الفَجْر' },
            { t: 'p', v: 'Si quelqu\'un se retrouve en éJanāba (الجَنَابَة) et ne peut se purifier qu\'après le الفَجْر (aube), son jeûne de cette journée reste valide. De même pour la femme qui constate la fin de ses règles avant le الفَجْر et ne peut faire le Ghusl (الغُسْل) qu\'après : son jeûne est valide.' },
            { t: 'ar', v: 'وَمَن أَصبَحَ جُنُبًا وَلَم يَتَطَهَّر أو امرأَةٌ حَائِضٌ طَهُرَت قَبلَ الفَجرِ فَلَم يَغتَسِلَا إِلَّا بَعدَ الفَجرِ أَجزَأَهُمَا صَومُ ذَلِكَ اليَومِ', n: '« Celui qui se réveille en état de الجَنَابَة, ou la femme dont les règles se sont arrêtées avant le الفَجْر mais qui ne s\'est pas purifiée qu\'après : le jeûne de ce jour leur est validé. »' }
          ]
        },

        {
          id: 'saw-03',
          title: 'Kaffāra (الكَفَّارَة) Qaḍāʾ (القَضَاء)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Kaffāra (الكَفَّارَة) (expiation) ne s\'applique que dans des cas précis et bien délimités. La Risāla en définit les conditions et la forme, ainsi que les rèQaḍāʾ (القَضَاء).' },
            { t: 'h', v: 'Kaffāra (الكَفَّارَة) est-elle obligatoire ?' },
            { t: 'p', v: 'Kaffāra (الكَفَّارَة) n\'est obligatoire que pour celui qui rompt délibérément (mutaʿammidan) par mangeage, boisson ou rapport sexuel, tout en sachant qu\'il est dans le mois de Ramadan et en plein état de jeûne (maʿa al-maḍāʾ). Toute rupture due à une interprétation ou à une erreur sincère ne donne lieu à Kaffāra (الكَفَّارَة).' },
            { t: 'ar', v: 'وَإِنَّمَا al-kaffāra (الكَفَّارَة)ُ عَلَى مَن أَفطَرَ مُتَعَمِّدًا بِأَكلٍ أَو شُربٍ أَو جِمَاعٍ مَعَ المَضَاءِ', n: '« La al-kaffāra (الكَفَّارَة) n\'est due que pour celui qui rompt délibérément par le manger, le boire ou le rapport sexuel, avec résolution ferme. »' },
            { t: 'h', v: 'Kaffāra (الكَفَّارَة) (par ordre de préférence)' },
            { t: 'ul', v: [
              '<strong>1. Nourrir 60 pauvres</strong> — un mudd (mesure du Prophète ﷺ) pour chacun. C\'est la forme préférée selon l\'auteur.',
              '<strong>2. Libérer un esclave</strong> — une personne en captivité valide.',
              '<strong>3. Jeûner deux mois consécutifs</strong> — Kaffāra (الكَفَّارَة).'
            ] },
            { t: 'note', v: 'Celui qui rompt délibérément son jeûne de rattrapage (القَضَاء de Ramadan) n\'Kaffāra (الكَفَّارَة) — Qaḍāʾ (القَضَاء).' },
            { t: 'h', v: 'Le voyageur et le jeûne' },
            { t: 'ul', v: [
              'Le voyageur pour un trajet qui raccourcit la prière a le droit de rompre le jeûne même sans nécessité absolue.',
              'Qaḍāʾ (القَضَاء).',
              '<strong>Jeûner est néanmoins préféré</strong> selon l\'auteur : "وṢawm (الصوم) أحب إلينا".',
              'Si le trajet est inférieur à 4 bornes (environ 86 km), il n\'a pas le droit de rompre le jeûne — et s\'il le fait quand même, il n\'Kaffāra (الكَفَّارَة) Qaḍāʾ (القَضَاء) reste obligatoire.'
            ] },
            { t: 'h', v: 'Penalty pour tardiveté dans le rattrapage' },
            { t: 'p', v: 'Qaḍāʾ (القَضَاء) de Ramadan jusqu\'à l\'entrée du prochain Ramadan sans excuse valable doit, en plus du rattrapage, nourrir un pauvre par jour de retard.' }
          ]
        },

        {
          id: 'saw-04',
          title: 'Les Personnes Exemptées et Cas Particuliers',
          status: 'available',
          content: [
            { t: 'lead', v: 'La Risāla précise les catégories de personnes non tenues de jeûner, les jours interdits au jeûne, et quelques règles pratiques importantes.' },
            { t: 'h', v: 'Les enfants (aṭfāl)' },
            { t: 'p', v: '"لا صيام على الصبيان حتى يحتلم الغلام وتحيض الجارية" — le jeûne n\'est pas obligatoire pour les enfants tant que le garçon n\'a pas atteint la puberté et la fille ses premières règles. À la puberté, les actes d\'adoration deviennent obligatoires.' },
            { t: 'h', v: 'Jours où le jeûne est interdit' },
            { t: 'ul', v: [
              '<strong>Le jour de l\'Eid al-Fiṭr</strong> (1er Shawwāl) — interdit de jeûner.',
              '<strong>Le jour de l\'Eid al-Adha</strong> (10 Dhū al-Ḥijja) — interdit de jeûner.',
              '<strong>Les deux jours qui suivent l\'Eid al-Adha</strong> (11 et 12 Dhū al-Ḥijja) — interdits. Exception : le pèlerin qui n\'a pas trouvé l\'animal sacrificiel (hadī) pour le hady al-tamattuʿ peut jeûner le 4e jour.'
            ] },
            { t: 'h', v: 'Rapport sexuel en journée de Ramadan' },
            { t: 'ul', v: [
              'Simple plaisir par attouchement ou baiser sans que cela aille plus loin : Qaḍāʾ (القَضَاء).',
              'Si cela va jusqu\'à l\'acte complet délibérément : Kaffāra (الكَفَّارَة).'
            ] },
            { t: 'h', v: 'L\'évanouissement (ighmaʾ)' },
            { t: 'p', v: 'Celui qui perd connaissance pendant la journée de Ramadan : son jeûne peut être invalidé si l\'inconscience dure et le prive de toute conscience pendant la journée entière. Les détails sont précisés par les commentateurs.' },
            { t: 'note', v: 'Point important : le jeûneur qui ressent un plaisir par contact intime en journée de Ramadan et que cela entraîne une éQaḍāʾ (القَضَاء). S\'il va jusqu\'à l\'acte intentionnellement : Kaffāra (الكَفَّارَة) obligatoire.' }
          ]
        },

        {
          id: 'saw-05',
          title: 'Le Qiyām al-Ramaḍān et l\'Iʿtikāf (الاعتِكَاف)',
          status: 'available',
          content: [
            { t: 'lead', v: 'La Risāla mentionne deux pratiques majeures liées à Ramadan : le qiyām (prières nocturnes de Ramadan) et l\'Iʿtikāf (الاعتِكَاف) (retraite spirituelle dans la mosquée). Elle en précise les modalités selon la tradition des pieux ancêtres (salaf ṣāliḥ).' },
            { t: 'h', v: 'La valeur du qiyām al-Ramaḍān' },
            { t: 'ar', v: 'وَمَن قَامَ رَمَضَانَ إِيمَانًا وَاحتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِن ذَنبِهِ', n: '« Quiconque accomplit le qiyām de Ramadan par foi et dans l\'attente de la récompense divine, ses péchés antérieurs lui sont pardonnés. »' },
            { t: 'h', v: 'La modalité du qiyām al-Ramaḍān' },
            { t: 'ul', v: [
              'On peut le faire dans la mosquée avec un الإِمَام (tarawīḥ en communauté) ou à la maison.',
              '<strong>La prière à la maison est préférable</strong> pour celui dont l\'intention et la dévotion sont fortes.',
              'Les pieux ancêtres (salaf ṣāliḥ) priaient <strong>20 رَكَعَات</strong> dans les mosquées, suivies du الوِتْر en 3 رَكَعَات.',
              'Un salām sépare le الشَّفْع (2 رَكَعَات) du الوِتْر (1 رَكْعَة).',
              'Ils faisaient ensuite encore des prières supplémentaires.'
            ] },
            { t: 'h', v: 'L\'Iʿtikāf (الاعتِكَاف) (retraite dans la mosquée)' },
            { t: 'ul', v: [
              '<strong>Quand entrer :</strong> avant le coucher du soleil de la nuit où commence l\'Iʿtikāf (الاعتِكَاف).',
              '<strong>Quand sortir :</strong> après le coucher du soleil du dernier jour.',
              '<strong>Interdit à Iʿtikāf (الاعتِكَاف) :</strong> rendre visite aux malades, prier sur les morts, faire des affaires commerciales. Il ne sort que pour les besoins naturels.',
              '<strong>Permis :</strong> être l\'الإِمَام de la mosquée, se marier ou contracter le mariage de quelqu\'un d\'autre.',
              'Iʿtikāf (الاعتِكَاف) a ses règles ou si le retraitant tombe malade : ils sortent et rentrent dès la guérison ou la pureté retrouvée.'
            ] },
            { t: 'note', v: 'La Risāla d\'Ibn Abī Zayd al-Qayrawānī (310-386 H) est l\'une des œuvres fondatrices du rite malikite. Elle a été composée à l\'âge de 17 ans et s\'est répandue dans tout le monde musulman jusqu\'à être copiée en lettres d\'or.' }
          ]
        },

        {
          id: "saw-06",
          title: "\u0627\u0644\u0645\u064f\u0633\u0652\u062a\u064e\u062c\u064e\u062f\u064e\u0651\u0627\u062a \u0627\u0644\u0637\u0650\u0651\u0628\u0650\u0651\u064a\u064e\u0651\u0629 \u0648\u0644\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631 \u2014 Cas M\u00e9dicaux Contemporains et Dimension Spirituelle",
          status: "available",
          content: [
          {"t": "lead", "v": "Le الفِقْه malikite contemporain s'est prononc\u00e9 sur de nombreux cas m\u00e9dicaux qui n'existaient pas \u00e0 l'\u00e9poque des sources classiques. Ce chapitre synth\u00e9tise ces fatwas \u00e0 partir de doctrine-malikite.fr et des savants malikites contemporains, et pr\u00e9sente la \u0644\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631."},
          {"t": "h", "v": "M\u00e9dicaments par voie oculaire, auriculaire et nasale"},
          {"t":"ul","v":[
            "<strong>Voie oculaire (gouttes pour les yeux) :</strong> si le m\u00e9dicament n'arrive pas \u00e0 la gorge \u2192 le je\u00fbne reste valide.",
            "<strong>Voie auriculaire (gouttes pour les oreilles) :</strong> si le m\u00e9dicament n'arrive pas \u00e0 la gorge \u2192 le je\u00fbne reste valide.",
            "<strong>Voie nasale (gouttes pour le nez) :</strong> ATTENTION \u2014 le nez est une issue proche de la gorge \u2192 risque que le m\u00e9dicament l'atteigne \u2192 s'abstenir en journ\u00e9e sauf n\u00e9cessit\u00e9 m\u00e9dicale absolue.",
            "Si un m\u00e9dicament nasal arrive \u00e0 la gorge : invalide le je\u00fbne, impose le \u0642\u064e\u0636\u064e\u0627\u0621.",
            "M\u00e9dicament oral (par la bouche) : invalide toujours le je\u00fbne."
          ]},
          {"t": "ar", "v": "\u0643\u064f\u0644\u064f\u0651 \u062f\u064e\u0648\u064e\u0627\u0621\u064d \u0623\u064f\u062e\u0650\u0630\u064e \u0645\u0650\u0646 \u0637\u064e\u0631\u0650\u064a\u0642\u0650 \u0627\u0644\u0639\u064e\u064a\u0646\u0650 \u0623\u064e\u0648\u0650 \u0627\u0644\u0623\u064f\u0630\u064f\u0646\u0650 \u0648\u064e\u0644\u064e\u0645 \u064a\u064e\u0635\u0650\u0644 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u062d\u064e\u0644\u0642\u0650 \u0635\u0650\u064a\u064e\u0627\u0645\u064f\u0647\u064f \u0635\u064e\u062d\u0650\u064a\u062d", "n": "\u00ab Tout m\u00e9dicament pris par les yeux ou les oreilles sans atteindre la gorge \u2014 le je\u00fbne reste valide. \u00bb \u2014 Fatwa doctrine-malikite.fr"},
          {"t": "h", "v": "L'a\u00e9rosol (Ventoline/inhalateur) pour les asthmatiques"},
          {"t": "p", "v": "Cette question fait l'objet d'une divergence r\u00e9elle entre savants malikites contemporains :"},
          {"t":"ul","v":[
            "<strong>Opinion 1 (n'invalide pas) :</strong> certains savants assimilent l'inhalateur au rin\u00e7age de la bouche (\u0645\u064e\u0636\u0652\u0645\u064e\u0636\u064e\u0629) \u2014 la quantit\u00e9 de liquide est infime et les autres composants sont principalement de l'air qui va aux poumons. \u2192 Je\u00fbne valide.",
            "<strong>Opinion 2 (invalide) :</strong> d'autres estiment que la composante liquide arrive \u00e0 la gorge et l'estomac. \u2192 Je\u00fbne invalide, impose le \u0642\u064e\u0636\u064e\u0627\u0621.",
            "Si invalide (opinion 2) et la maladie est chronique : الفِدْيَة \u00e0 la place du \u0642\u064e\u0636\u064e\u0627\u0621.",
            "Recommandation pratique : si possible, prendre l'inhalateur avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631 ou apr\u00e8s \u0627\u0644\u0625\u0650\u0641\u0637\u064e\u0627\u0631. En cas de n\u00e9cessit\u00e9 en journ\u00e9e, utiliser et rattraper par pr\u00e9caution."
          ]},
          {"t": "h", "v": "Injections m\u00e9dicales et je\u00fbne"},
          {"t":"ul","v":[
            "<strong>Injections sous-cutan\u00e9es ou intraveineuses (m\u00e9dicaments simples) :</strong> n'invalident pas le je\u00fbne \u2014 elles ne d\u00e9posent pas dans l'estomac.",
            "<strong>Injections nutritives (nutrition parent\u00e9rale) :</strong> invalident le je\u00fbne \u2014 elles alimentent le corps et contredisent la finalit\u00e9 m\u00eame du je\u00fbne.",
            "<strong>Injections rectales/anales :</strong> invalident le je\u00fbne selon la majorit\u00e9 des savants \u2014 la substance atteint l'estomac.",
            "<strong>Prises de sang :</strong> n'invalident pas le je\u00fbne \u2014 par analogie avec la Hij\u0101ma qui est seulement makr\u016bh.",
            "L'insuline (injection) : n'invalide pas le je\u00fbne (ce n'est pas de la nourriture). Si m\u00e9dicalement dangereux de je\u00fbner : excuse m\u00e9dicale + \u0642\u064e\u0636\u064e\u0627\u0621 ou الفِدْيَة selon l'\u00e9tat."
          ]},
          {"t": "h", "v": "Je\u00fbner dans un pays, rompre dans un autre"},
          {"t": "p", "v": "Doctrine-malikite.fr, d'apr\u00e8s Ibn Rushd (Bid\u0101yat al-Mujtahid) : quand on voyage en cours de Ramadan dans un autre pays, on suit le pays de destination pour l'Eid. R\u00e8gles essentielles :"},
          {"t":"ul","v":[
            "On ne peut pas avoir je\u00fbn\u00e9 moins de 29 jours \u2014 c'est le minimum l\u00e9gal du mois.",
            "Si en rompant avec le pays de destination le total de jours je\u00fbn\u00e9s est de 28 : rattraper un jour.",
            "Si on a je\u00fbn\u00e9 29 ou 30 jours et le pays de destination rompt : on rompt avec eux, rien \u00e0 rattraper.",
            "La r\u00e8gle : <strong>on suit le pays o\u00f9 on se trouve</strong> pour le d\u00e9but et la fin du Ramadan \u2014 m\u00eame si on doit je\u00fbner plus de 30 jours au total dans un cas extr\u00eame."
          ]},
          {"t": "h", "v": "\u0644\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631 \u2014 La Nuit de la Valeur"},
          {"t": "p", "v": "Laylat al-Qadr est la nuit la plus sacr\u00e9e de l'ann\u00e9e islamique, li\u00e9e directement au Ramadan et \u00e0 l'\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 :"},
          {"t": "ar", "v": "\u0644\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631\u0650 \u062e\u064e\u064a\u0631\u064c \u0645\u0650\u0646 \u0623\u064e\u0644\u0641\u0650 \u0634\u064e\u0647\u0631", "n": "\u00ab La Nuit de la Valeur est meilleure que mille mois. \u00bb \u2014 Coran 97:3"},
          {"t":"ul","v":[
            "<strong>Moment :</strong> parmi les nuits impaires des 10 derniers jours de Ramadan (21, 23, 25, 27, 29). La 27\u00e8me est la plus souvent cit\u00e9e mais elle peut varier.",
            "<strong>Comment la reconna\u00eetre :</strong> selon certains had\u012bth, la nuit est douce, le lendemain le soleil se l\u00e8ve sans rayons (p\u00e2le). Mais l'essentiel est de la chercher par l'adoration.",
            "<strong>Lien avec l'\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 :</strong> le Proph\u00e8te \ufdfa faisait l'\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 les 10 derniers jours de Ramadan pr\u00e9cis\u00e9ment pour rencontrer Laylat al-Qadr.",
            "<strong>Du\u02bf\u0101\u02be recommand\u00e9 :</strong> \u00ab \u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0625\u0650\u0646\u064e\u0651\u0643\u064e \u0639\u064e\u0641\u064f\u0648\u064c\u0651 \u062a\u064f\u062d\u0650\u0628\u064f\u0651 \u0627\u0644\u0639\u064e\u0641\u0648\u064e \u0641\u064e\u0627\u0639\u0641\u064f \u0639\u064e\u0646\u0650\u0651\u064a \u00bb \u2014 had\u012bth authentique."
          ]},
          {"t": "note", "v": "Point de الفِقْه contemporain cl\u00e9 : le patch de nicotine (anti-tabac) pos\u00e9 sur la peau et dont la substance diffuse dans le sang \u2014 la majorit\u00e9 des savants contemporains l'assimilent aux injections m\u00e9dicales (n'invalide pas le je\u00fbne car n'atteint pas l'estomac). Fumer une cigarette en journ\u00e9e de Ramadan, en revanche, invalide toujours le je\u00fbne."}
          ]
        },

      ],

      quiz: {
        id: 'quiz-jeune',
        title: 'Questionnaire — Le Jeûne',
        status: 'available',
        score: null,
        questions: [
          {
            id: "q-saw-01",
            text: "Le je\u00fbne du Ramadan est \u00e9tabli par :",
            choices: [
              {id:"a",text:"Le calendrier islamique officiel"},
              {id:"b",text:"La vue du croissant de lune (\u0631\u064f\u0624\u064a\u064e\u0629\u064f \u0627\u0644\u0647\u0650\u0644\u064e\u0627\u0644)"},
              {id:"c",text:"Le calcul astronomique"},
              {id:"d",text:"L'annonce gouvernementale"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u064a\u064f\u0635\u064e\u0627\u0645\u064f \u0644\u0650\u0631\u064f\u0624\u064a\u064e\u0629\u0650 \u0627\u0644\u0647\u0650\u0644\u064e\u0627\u0644\u0650 \u0648\u064e\u064a\u064f\u0641\u0637\u064e\u0631\u064f \u0644\u0650\u0631\u064f\u0624\u064a\u064e\u062a\u0650\u0647\u0650 \u00bb \u2014 on commence \u00e0 la vue du croissant, on termine \u00e0 sa vue. Si le ciel est couvert, on compl\u00e8te 30 jours depuis le d\u00e9but du mois pr\u00e9c\u00e9dent."
          },
          {
            id: "q-saw-02",
            text: "La \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 du je\u00fbne : quand doit-elle \u00eatre arr\u00eat\u00e9e selon la Ris\u0101la ?",
            choices: [
              {id:"a",text:"Au lever du soleil"},
              {id:"b",text:"\u00c0 midi au plus tard"},
              {id:"c",text:"Chaque nuit avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631 (\u0627\u0644\u062a\u064e\u0651\u0628\u064a\u0650\u064a\u062a)"},
              {id:"d",text:"Une seule fois au d\u00e9but du mois pour tout Ramadan"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u064a\u064f\u0628\u064e\u064a\u0650\u0651\u062a\u064f \u0627\u0644\u0635\u0650\u0651\u064a\u064e\u0627\u0645\u064e \u0641\u0650\u064a \u0623\u064e\u0648\u064e\u0651\u0644\u0650\u0647\u0650 \u00bb \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre arr\u00eat\u00e9e (\u0627\u0644\u062a\u064e\u0651\u0628\u064a\u0650\u064a\u062a) chaque nuit avant le \u0627\u0644\u0641\u064e\u062c\u0652\u0631. Contrairement aux \u062c\u0648\u0627\u0641\u0644 o\u00f9 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644."
          },
          {
            id: "q-saw-03",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim avale de la salive pendant son je\u00fbne. Est-ce probl\u00e9matique ?",
            choices: [
              {id:"a",text:"Oui \u2014 avaler tout liquide rompt le je\u00fbne"},
              {id:"b",text:"Non \u2014 avaler sa propre salive ne rompt pas le \u062c\u0650\u064a\u064e\u0627\u0645"},
              {id:"c",text:"Seulement si la salive est abondante"},
              {id:"d",text:"Seulement si elle est m\u00e9lang\u00e9e \u00e0 autre chose"},
            ],
            correctId: "b",
            explanation: "Avaler sa propre salive (\u0631\u064a\u0642) ne rompt pas le je\u00fbne selon le rite malikite. Ce qui rompt le je\u00fbne, c'est l'introduction d\u00e9lib\u00e9r\u00e9e de substances alimentaires ou boissons depuis l'ext\u00e9rieur."
          },
          {
            id: "q-saw-04",
            text: "<strong>PI\u00c8GE :</strong> Fatima mange par <u>oubli</u> (\u0646\u064e\u0627\u0633\u0650\u064a\u064b\u0627) en Ramadan. Que doit-elle faire ?",
            choices: [
              {id:"a",text:"Faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 compl\u00e8te"},
              {id:"b",text:"Faire le \u0642\u064e\u0636\u064e\u0627\u0621 d'un jour seulement"},
              {id:"c",text:"Ne rien faire \u2014 l'oubli est une excuse totale"},
              {id:"d",text:"Faire le \u0642\u064e\u0636\u064e\u0627\u0621 et la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629"},
            ],
            correctId: "c",
            explanation: "Manger ou boire par oubli sinc\u00e8re ne constitue pas une rupture intentionnelle. La \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 n'est pas due. Selon certains avis malikites, le je\u00fbne est m\u00eame enti\u00e8rement valide (pas de \u0642\u064e\u0636\u064e\u0627\u0621). C'est une diff\u00e9rence notable avec d'autres \u00e9coles."
          },
          {
            id: "q-saw-05",
            text: "Peut-on je\u00fbner le <strong>\u064a\u064e\u0648\u0652\u0645\u064f \u0627\u0644\u0634\u064e\u0651\u0643\u0651</strong> (30e Sha\u02bfb\u0101n) par pr\u00e9caution pour Ramadan ?",
            choices: [
              {id:"a",text:"Oui, par pr\u00e9caution"},
              {id:"b",text:"Oui si le ciel est nuageux"},
              {id:"c",text:"Non \u2014 interdit et ne compte pas m\u00eame si c'est r\u00e9ellement le premier Ramadan"},
              {id:"d",text:"Oui si c'est un jour de je\u00fbne habituel"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u064a\u064f\u0635\u064e\u0627\u0645\u064f \u064a\u064e\u0648\u0645\u064f \u0627\u0644\u0634\u064e\u0651\u0643\u0650\u0651 \u0644\u0650\u064a\u064f\u062d\u062a\u064e\u0627\u0637\u064e \u0628\u0650\u0647\u0650 \u0645\u0650\u0646 \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e, \u0648\u064e\u0645\u064e\u0646 \u0635\u064e\u0627\u0645\u064e\u0647\u064f \u0643\u064e\u0630\u064e\u0644\u0650\u0643\u064e \u0644\u064e\u0645 \u064a\u064f\u062c\u0632\u0650\u0647 \u0648\u064e\u0625\u0650\u0646 \u0648\u064e\u0627\u0641\u064e\u0642\u064e\u0647\u064f \u00bb \u2014 ce pi\u00e8ge classique : m\u00eame si ce jour co\u00efncide r\u00e9ellement avec Ramadan, il ne compte pas si l'intention \u00e9tait l'anticipation."
          },
          {
            id: "q-saw-06",
            text: "Le <strong>\u0633\u0650\u0648\u064e\u0627\u0643</strong> est-il permis au je\u00fbneur ?",
            choices: [
              {id:"a",text:"Interdit \u2014 risque d'avaler quelque chose"},
              {id:"b",text:"Permis uniquement avant le d\u00e9clin du soleil"},
              {id:"c",text:"Permis tout au long de la journ\u00e9e"},
              {id:"d",text:"Makr\u016bh apr\u00e8s le \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u0628\u064e\u0623\u0633\u064e \u0628\u0650\u0627\u0644\u0633\u0650\u0651\u0648\u064e\u0627\u0643\u0650 \u0644\u0650\u0644\u0635\u064e\u0651\u0627\u0626\u0650\u0645\u0650 \u0641\u0650\u064a \u062c\u064e\u0645\u0650\u064a\u0639\u0650 \u0646\u064e\u0647\u064e\u0627\u0631\u0650\u0647\u0650 \u00bb \u2014 aucun inconv\u00e9nient \u00e0 utiliser le \u0633\u0650\u0648\u064e\u0627\u0643 toute la journ\u00e9e. C'est une pr\u00e9cision importante car certains pensent qu'il faut l'\u00e9viter apr\u00e8s le Zawal."
          },
          {
            id: "q-saw-07",
            text: "Quelqu'un est submerg\u00e9 par des vomissements involontaires (<strong>\u0630\u064e\u0631\u064e\u0639\u064e\u0647\u064f \u0627\u0644\u0642\u064e\u064a\u0621</strong>). Son je\u00fbne est-il rompu ?",
            choices: [
              {id:"a",text:"Oui \u2014 \u0642\u064e\u0636\u064e\u0627\u0621 obligatoire"},
              {id:"b",text:"Oui \u2014 \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 obligatoire"},
              {id:"c",text:"Non \u2014 son je\u00fbne reste valide"},
              {id:"d",text:"Il doit refaire la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0645\u064e\u0646 \u0630\u064e\u0631\u064e\u0639\u064e\u0647\u064f \u0627\u0644\u0642\u064e\u064a\u0621\u064f \u0641\u064e\u0644\u064e\u0627 \u0642\u064e\u0636\u064e\u0627\u0621\u064e \u0639\u064e\u0644\u064e\u064a\u0647\u0650 \u00bb \u2014 vomissements involontaires = rien \u00e0 faire. En revanche \u00ab \u0648\u064e\u0625\u0650\u0646 \u0627\u0633\u062a\u064e\u0642\u064e\u0627\u0621\u064e \u0642\u064e\u0636\u064e\u0627\u0621 \u00bb \u2014 vomissements d\u00e9lib\u00e9r\u00e9s = \u0642\u064e\u0636\u064e\u0627\u0621 seulement."
          },
          {
            id: "q-saw-08",
            text: "<strong>PI\u00c8GE :</strong> Hassan se vomit volontairement en Ramadan. Doit-il faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout acte volontaire rompant le je\u00fbne impose la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629"},
              {id:"b",text:"Non \u2014 la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 n'est due que pour manger, boire ou rapport sexuel d\u00e9lib\u00e9r\u00e9"},
              {id:"c",text:"Oui avec la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 l\u00e9g\u00e8re"},
              {id:"d",text:"Seulement s'il le fait souvent"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0625\u0650\u0646\u064e\u0651\u0645\u064e\u0627 \u0627\u0644\u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629\u064f \u0639\u064e\u0644\u064e\u0649 \u0645\u064e\u0646 \u0623\u064e\u0641\u0637\u064e\u0631\u064e \u0645\u064f\u062a\u064e\u0639\u064e\u0645\u0650\u0651\u062f\u064b\u0627 \u0628\u0650\u0623\u064e\u0643\u0644\u064d \u0623\u064e\u0648 \u0634\u064f\u0631\u0628\u064d \u0623\u064e\u0648 \u062c\u0650\u0645\u064e\u0627\u0639\u064d \u0645\u064e\u0639\u064e \u0627\u0644\u0645\u064e\u0636\u064e\u0627\u0621\u0650 \u00bb \u2014 la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 ne s'applique QUE pour manger, boire ou rapport sexuel d\u00e9lib\u00e9r\u00e9. Les vomissements d\u00e9lib\u00e9r\u00e9s \u2192 \u0642\u064e\u0636\u064e\u0627\u0621 seulement."
          },
          {
            id: "q-saw-09",
            text: "Dans quel ordre la <strong>\u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629</strong> est-elle pr\u00e9f\u00e9rentiellement accomplie selon la Ris\u0101la ?",
            choices: [
              {id:"a",text:"Je\u00fbner 2 mois \u2192 nourrir 60 pauvres \u2192 lib\u00e9rer un esclave"},
              {id:"b",text:"Lib\u00e9rer un esclave \u2192 je\u00fbner 2 mois \u2192 nourrir 60 pauvres"},
              {id:"c",text:"Nourrir 60 pauvres (pr\u00e9f\u00e9r\u00e9) \u2192 lib\u00e9rer un esclave \u2192 je\u00fbner 2 mois cons\u00e9cutifs"},
              {id:"d",text:"Formes \u00e9quivalentes sans pr\u00e9f\u00e9rence"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0625\u0650\u0637\u0639\u064e\u0627\u0645\u064f \u0633\u0650\u062a\u0650\u0651\u064a\u0646\u064e \u0645\u0650\u0633\u0643\u0650\u064a\u0646\u064b\u0627... \u0648\u064e\u0623\u064e\u062d\u064e\u0628\u064f\u0651 \u0625\u0650\u0644\u064e\u064a\u0646\u064e\u0627 \u00bb \u2014 nourrir 60 pauvres est la forme PR\u00c9F\u00c9R\u00c9E selon le rite malikite (un mudd par pauvre). C'est diff\u00e9rent de l'ordre ch\u0101fi\u02bfite qui commence par lib\u00e9rer un esclave."
          },
          {
            id: "q-saw-10",
            text: "<strong>PI\u00c8GE :</strong> Khalid rompt d\u00e9lib\u00e9r\u00e9ment son je\u00fbne de \u0642\u064e\u0636\u064e\u0627\u0621. Doit-il faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout je\u00fbne obligatoire rompu d\u00e9lib\u00e9r\u00e9ment impose la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629"},
              {id:"b",text:"Non \u2014 la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 n'est due que pour la rupture de Ramadan lui-m\u00eame"},
              {id:"c",text:"Oui mais seulement la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 l\u00e9g\u00e8re"},
              {id:"d",text:"Seulement si c'est un je\u00fbne de نَذْر"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0644\u064e\u064a\u0633\u064e \u0639\u064e\u0644\u064e\u0649 \u0645\u064e\u0646 \u0623\u064e\u0641\u0637\u064e\u0631\u064e \u0641\u0650\u064a \u0642\u064e\u0636\u064e\u0627\u0621\u0650 \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e \u0645\u064f\u062a\u064e\u0639\u064e\u0645\u0650\u0651\u062f\u064b\u0627 \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629\u064c \u00bb \u2014 pas de \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 pour la rupture d\u00e9lib\u00e9r\u00e9e du \u0642\u064e\u0636\u064e\u0627\u0621. Seulement le renouvellement du \u0642\u064e\u0636\u064e\u0627\u0621. La \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 est sp\u00e9cifique \u00e0 Ramadan."
          },
          {
            id: "q-saw-11",
            text: "<strong>SC\u00c9NARIO :</strong> Un voyageur rentre en ville en cours de journ\u00e9e en \u00e9tat d'ifr\u0101r (n'ayant pas je\u00fbn\u00e9). Que peut-il faire ?",
            choices: [
              {id:"a",text:"S'abstenir de manger d\u00e8s son retour"},
              {id:"b",text:"Continuer \u00e0 manger le reste de la journ\u00e9e"},
              {id:"c",text:"Faire le \u0642\u064e\u0636\u064e\u0627\u0621 d'une demi-journ\u00e9e"},
              {id:"d",text:"Je\u00fbner d\u00e8s le lendemain pour compenser"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0625\u0650\u0630\u064e\u0627 \u0642\u064e\u062f\u0650\u0645\u064e \u0627\u0644\u0645\u064f\u0633\u064e\u0627\u0641\u0650\u0631\u064f \u0645\u064f\u0641\u0637\u0650\u0631\u064b\u0627... \u0641\u064e\u0644\u064e\u0647\u064f\u0645\u064e\u0627 \u0627\u0644\u0623\u064e\u0643\u0644\u064f \u0641\u0650\u064a \u064a\u064e\u0648\u0645\u0650\u0647\u064e\u0627 \u00bb \u2014 le voyageur arrivant en \u00e9tat d'ifr\u0101r peut manger le reste de la journ\u00e9e. M\u00eame r\u00e8gle pour la femme dont les r\u00e8gles s'arr\u00eatent en cours de journ\u00e9e."
          },
          {
            id: "q-saw-12",
            text: "Peut-on je\u00fbner le <strong>\u064a\u064e\u0648\u0652\u0645\u064f \u0627\u0644\u0639\u0650\u064a\u062f\u064e\u064a\u0652\u0646</strong> (jour de l'Eid al-Fitr ou Eid al-Adha) ?",
            choices: [
              {id:"a",text:"Oui et c'est m\u00eame recommand\u00e9"},
              {id:"b",text:"Non \u2014 strictement interdit (\u062d\u064e\u0631\u064e\u0627\u0645)"},
              {id:"c",text:"Makr\u016bh seulement"},
              {id:"d",text:"Permis si c'est un je\u00fbne de نَذْر pr\u00e9alablement vou\u00e9"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u064a\u064e\u062c\u064f\u0648\u0632\u064f \u0635\u0650\u064a\u064e\u0627\u0645\u064f \u064a\u064e\u0648\u0645\u0650 \u0627\u0644\u0641\u0650\u0637\u0631\u0650 \u0648\u064e\u0644\u064e\u0627 \u064a\u064e\u0648\u0645\u0650 \u0627\u0644\u0646\u064e\u0651\u062d\u0631\u0650 \u00bb \u2014 il est formellement interdit de je\u00fbner les deux jours de l'Eid. C'est l'un des interdits absolus du je\u00fbne en Islam."
          },
          {
            id: "q-saw-13",
            text: "<strong>PI\u00c8GE :</strong> La femme enceinte qui craint uniquement pour son <u>f\u0153tus</u> (pas pour elle-m\u00eame) doit-elle payer la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 \u0641\u0650\u062f\u0652\u064a\u064e\u0629 obligatoire pour toute femme enceinte qui rompt"},
              {id:"b",text:"Non \u2014 elle ne fait que le \u0642\u064e\u0636\u064e\u0627\u0621 sans \u0641\u0650\u062f\u0652\u064a\u064e\u0629"},
              {id:"c",text:"Oui, la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 ET le \u0642\u064e\u0636\u064e\u0627\u0621 ensemble"},
              {id:"d",text:"Elle peut choisir entre \u0642\u064e\u0636\u064e\u0627\u0621 et \u0641\u0650\u062f\u0652\u064a\u064e\u0629"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la distingue : femme enceinte craignant pour le F\u0152TUS \u2192 rompt + \u0642\u064e\u0636\u064e\u0627\u0621 seulement (PAS de \u0641\u0650\u062f\u0652\u064a\u064e\u0629). M\u00e8re allaitante craignant pour l'enfant \u2192 rompt + \u0642\u064e\u0636\u064e\u0627\u0621 + \u0641\u0650\u062f\u0652\u064a\u064e\u0629. Ces deux cas sont diff\u00e9rents."
          },
          {
            id: "q-saw-14",
            text: "<strong>NUANCE :</strong> Le \u062c\u064f\u0646\u064f\u0628 qui ne peut faire \u0627\u0644\u063a\u064f\u0633\u0652\u0644 avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631 \u2014 son je\u00fbne du lendemain est-il valide ?",
            choices: [
              {id:"a",text:"Non \u2014 il doit \u00eatre pur avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631"},
              {id:"b",text:"Oui \u2014 \u00eatre en \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 au lever de l'aube n'invalide pas le je\u00fbne"},
              {id:"c",text:"Il doit faire \u0627\u0644\u063a\u064f\u0633\u0652\u0644 avant le lever du soleil au moins"},
              {id:"d",text:"Seulement si la \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 est involontaire (r\u00eave)"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u064a\u064e\u062e\u0631\u064f\u0645\u064f \u0630\u064e\u0644\u0650\u0643\u064e \u0639\u064e\u0644\u064e\u064a\u0647\u0650 \u0641\u0650\u064a \u064a\u064e\u0648\u0645\u0650\u0647\u0650 \u00bb \u2014 \u00eatre en \u00e9tat de \u062c\u064e\u0646\u064e\u0627\u0628\u064e\u0629 au lever de l'aube ne rompt pas le je\u00fbne. La puret\u00e9 n'est pas une condition du je\u00fbne (contrairement \u00e0 la pri\u00e8re)."
          },
          {
            id: "q-saw-15",
            text: "La <strong>\u062d\u0650\u062c\u064e\u0627\u0645\u064e\u0629</strong> (saign\u00e9e) pendant le Ramadan est :",
            choices: [
              {id:"a",text:"Interdite \u2014 rompt le je\u00fbne"},
              {id:"b",text:"Permise sans restriction"},
              {id:"c",text:"Makr\u016bh seulement si elle risque d'affaiblir le je\u00fbneur au point de compromettre son je\u00fbne"},
              {id:"d",text:"Sunna (السُّنَّة) \u2014 pratiqu\u00e9e par le Proph\u00e8te \ufdfa"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0644\u064e\u0627 \u064a\u064f\u0643\u0631\u064e\u0647\u064f \u0627\u0644\u062d\u0650\u062c\u064e\u0627\u0645\u064e\u0629\u064f \u0625\u0650\u0644\u064e\u0651\u0627 \u062e\u0650\u064a\u0641\u064e\u0629\u064e \u0627\u0644\u062a\u064e\u0651\u063a\u0631\u0650\u064a\u0631\u0650 \u00bb \u2014 la \u062d\u0650\u062c\u064e\u0627\u0645\u064e\u0629 n'est makr\u016bh QUE si on craint qu'elle affaiblisse le je\u00fbneur au point de compromettre son je\u00fbne. Sinon elle est permise."
          },
          {
            id: "q-saw-16",
            text: "<strong>PI\u00c8GE :</strong> Mariam embrasse son mari avec d\u00e9sir en journ\u00e9e de Ramadan. Aucune \u00e9mission ne se produit. Que se passe-t-il ?",
            choices: [
              {id:"a",text:"Le je\u00fbne est rompu \u2014 tout contact avec d\u00e9sir rompt"},
              {id:"b",text:"Il n'y a aucune cons\u00e9quence si aucune \u00e9mission ne survient"},
              {id:"c",text:"C'est makr\u016bh mais le je\u00fbne reste intact"},
              {id:"d",text:"Elle fait deux prosternations d'oubli"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la pr\u00e9cise que le \u0642\u064e\u0636\u064e\u0627\u0621 survient si le baiser ou la caresse \u00ab \u0623\u064e\u062f\u064e\u0651\u0649 \u0644\u0650\u0630\u064e\u0644\u0650\u0643\u064e \u00bb (conduit \u00e0 une \u00e9mission). Sans \u00e9mission, c'est makr\u016bh (d\u00e9conseill\u00e9) mais le je\u00fbne reste valide."
          },
          {
            id: "q-saw-17",
            text: "<strong>PI\u00c8GE :</strong> Khalid voyage sur moins de 4 bornes (environ 86 km). Peut-il rompre son je\u00fbne ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout voyage autorise la rupture"},
              {id:"b",text:"Non \u2014 seul le voyage autorisant le \u0642\u064e\u0635\u0652\u0631 de la pri\u00e8re (~86 km) autorise la rupture"},
              {id:"c",text:"Oui si le trajet dure plus d'une journ\u00e9e"},
              {id:"d",text:"Oui car la fatigue justifie la rupture"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0645\u064e\u0646 \u0633\u064e\u0627\u0641\u064e\u0631\u064e \u0623\u064e\u0642\u064e\u0644\u064e\u0651 \u0645\u0650\u0646 \u0623\u064e\u0631\u0628\u064e\u0639\u064e\u0629\u0650 \u0628\u064f\u0631\u064f\u062f\u064d \u0641\u064e\u0644\u064e\u064a\u0633\u064e \u0644\u064e\u0647\u064f \u0623\u064e\u0646 \u064a\u064f\u0641\u0637\u0650\u0631\u064e \u00bb \u2014 un voyage de moins de 4 bornes n'autorise pas la rupture du je\u00fbne. Le seuil est align\u00e9 sur celui qui autorise le \u0642\u064e\u0635\u0652\u0631 de la pri\u00e8re."
          },
          {
            id: "q-saw-18",
            text: "La <strong>\u0641\u0650\u062f\u0652\u064a\u064e\u0629</strong> est due dans lequel de ces cas ?",
            choices: [
              {id:"a",text:"Pour toute rupture du je\u00fbne"},
              {id:"b",text:"Pour le vieillard incapable de je\u00fbner et de rattraper, OU pour qui reporte le \u0642\u064e\u0636\u064e\u0627\u0621 jusqu'\u00e0 un nouveau Ramadan sans excuse"},
              {id:"c",text:"Pour le voyageur qui rompt son je\u00fbne"},
              {id:"d",text:"Toujours en plus du \u0642\u064e\u0636\u064e\u0627\u0621"},
            ],
            correctId: "b",
            explanation: "La \u0641\u0650\u062f\u0652\u064a\u064e\u0629 est due dans deux cas principaux : (1) le vieillard / malade chronique incapable de je\u00fbner et de rattraper \u2192 un pauvre par jour. (2) Celui qui reporte le \u0642\u064e\u0636\u064e\u0627\u0621 sans excuse jusqu'au prochain Ramadan \u2192 \u0641\u0650\u062f\u0652\u064a\u064e\u0629 en plus du \u0642\u064e\u0636\u064e\u0627\u0621."
          },
          {
            id: "q-saw-19",
            text: "Quel est le nombre de rak\u02bf\u0101t pour le <strong>\u0642\u0650\u064a\u064e\u0627\u0645\u064f \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646</strong> selon la Ris\u0101la ?",
            choices: [
              {id:"a",text:"8 rak\u02bf\u0101t + 3 الوِتْر"},
              {id:"b",text:"12 rak\u02bf\u0101t + 3 الوِتْر"},
              {id:"c",text:"20 rak\u02bf\u0101t + 3 الوِتْر"},
              {id:"d",text:"36 rak\u02bf\u0101t"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0643\u064e\u0627\u0646\u064e \u0627\u0644\u0633\u064e\u0651\u0644\u064e\u0641\u064f \u0627\u0644\u0635\u064e\u0651\u0627\u0644\u0650\u062d\u064f \u064a\u064e\u0642\u064f\u0648\u0645\u064f\u0648\u0646\u064e \u0641\u0650\u064a\u0647\u0650 \u0628\u0650\u0639\u0650\u0634\u0631\u0650\u064a\u0646\u064e \u0631\u064e\u0643\u0639\u064e\u0629\u064b \u062b\u064f\u0645\u064e\u0651 \u064a\u064f\u0648\u062a\u0650\u0631\u064f\u0648\u0646\u064e \u0628\u0650\u062b\u064e\u0644\u064e\u0627\u062b\u064d \u00bb \u2014 20 rak\u02bf\u0101t pour la tar\u0101w\u012b\u1e25, puis 3 pour le الوِتْر, avec un sal\u0101m entre le \u0634\u064e\u0641\u0652\u0639 et le \u0648\u0650\u062a\u0652\u0631."
          },
          {
            id: "q-saw-20",
            text: "<strong>PI\u00c8GE :</strong> Omar est en \u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641. Peut-il sortir visiter un malade ?",
            choices: [
              {id:"a",text:"Oui \u2014 visiter un malade est prioritaire"},
              {id:"b",text:"Non \u2014 le mu\u02bftakif ne sort que pour les besoins naturels"},
              {id:"c",text:"Oui s'il revient rapidement"},
              {id:"d",text:"Seulement pour la famille proche"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0644\u064e\u0627 \u064a\u064e\u0639\u064f\u0648\u062f\u064f \u0645\u064e\u0631\u0650\u064a\u0636\u064b\u0627 \u0648\u064e\u0644\u064e\u0627 \u064a\u064f\u0635\u064e\u0644\u0650\u0651\u064a \u0639\u064e\u0644\u064e\u0649 \u062c\u064e\u0646\u064e\u0627\u0632\u064e\u0629\u064d \u0648\u064e\u0644\u064e\u0627 \u064a\u064e\u062e\u0631\u064f\u062c\u064f \u0644\u0650\u062a\u0650\u062c\u064e\u0627\u0631\u064e\u0629\u064d \u00bb \u2014 le mu\u02bftakif ne sort pas pour visiter les malades, prier sur les morts, ni pour le commerce. Il ne sort que pour ses besoins naturels."
          },
          {
            id: "q-saw-21",
            text: "Quels jours sont interdits de je\u00fbner apr\u00e8s \u0627\u0644\u0639\u0650\u064a\u062f\u064f \u0627\u0644\u0623\u064e\u0636\u062d\u064e\u0649 ?",
            choices: [
              {id:"a",text:"Aucun apr\u00e8s l'Eid lui-m\u00eame"},
              {id:"b",text:"Les 11 et 12 Dh\u016b al-\u1e24ijja seulement"},
              {id:"c",text:"Les 11, 12, 13 pour tous"},
              {id:"d",text:"Les 11 et 12 sont interdits \u2014 sauf pour le p\u00e8lerin du \u062a\u064e\u0645\u064e\u062a\u064f\u0651\u0639 sans \u0647\u064e\u062f\u064a"},
            ],
            correctId: "d",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u064a\u064e\u0635\u064f\u0648\u0645\u064f \u0627\u0644\u064a\u064e\u0648\u0645\u064e\u064a\u0646\u0650 \u0627\u0644\u0644\u064e\u0651\u0630\u064e\u064a\u0646\u0650 \u0628\u064e\u0639\u062f\u064e \u064a\u064e\u0648\u0645\u0650 \u0627\u0644\u0646\u064e\u0651\u062d\u0631\u0650 \u0625\u0650\u0644\u064e\u0651\u0627 \u0627\u0644\u0645\u064f\u062a\u064e\u0645\u064e\u062a\u0650\u0651\u0639\u064f \u0627\u0644\u064e\u0651\u0630\u0650\u064a \u0644\u064e\u0627 \u064a\u064e\u062c\u0650\u062f\u064f \u0647\u064e\u062f\u064a\u064b\u0627 \u00bb \u2014 les 11 et 12 sont interdits sauf pour le p\u00e8lerin du \u062d\u064e\u062c\u0651 \u0627\u0644\u062a\u064e\u0651\u0645\u064e\u062a\u064f\u0651\u0639 qui n'a pas trouv\u00e9 son \u0647\u064e\u062f\u064a (animal sacrificiel)."
          },
          {
            id: "q-saw-22",
            text: "<strong>PI\u00c8GE :</strong> Zayd commence un je\u00fbne volontaire (\u0646\u0627\u0641\u0644\u0629) puis le rompt d\u00e9lib\u00e9r\u00e9ment sans raison. Doit-il le rattraper ?",
            choices: [
              {id:"a",text:"Non \u2014 les je\u00fbnes volontaires peuvent \u00eatre rompus librement"},
              {id:"b",text:"Oui \u2014 le \u0642\u064e\u0636\u064e\u0627\u0621 est obligatoire pour un je\u00fbne volontaire rompu d\u00e9lib\u00e9r\u00e9ment"},
              {id:"c",text:"Seulement si c'\u00e9tait un lundi ou jeudi"},
              {id:"d",text:"Non \u2014 il peut en faire un autre \u00e0 la place"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0645\u064e\u0646 \u0623\u064e\u0641\u0637\u064e\u0631\u064e \u0641\u0650\u064a \u062a\u064e\u0637\u064e\u0648\u064f\u0651\u0639\u0650\u0647\u0650 \u0639\u064e\u0627\u0645\u0650\u062f\u064b\u0627... \u0639\u064e\u0644\u064e\u064a\u0647\u0650 \u0627\u0644\u0642\u064e\u0636\u064e\u0627\u0621 \u00bb \u2014 rompre d\u00e9lib\u00e9r\u00e9ment un je\u00fbne volontaire impose le \u0642\u064e\u0636\u064e\u0627\u0621. Cette r\u00e8gle s'applique aux \u0646\u0648\u0627\u0641\u0644 une fois commenc\u00e9es."
          },
          {
            id: "q-saw-23",
            text: "Les enfants (\u0627\u0644\u0635\u0650\u0651\u0628\u064a\u064e\u0627\u0646) doivent-ils je\u00fbner le Ramadan selon la Ris\u0101la ?",
            choices: [
              {id:"a",text:"Oui d\u00e8s 10 ans"},
              {id:"b",text:"Non \u2014 obligation \u00e0 la pubert\u00e9 seulement"},
              {id:"c",text:"Oui d\u00e8s 7 ans progressivement"},
              {id:"d",text:"Oui mais seulement les premi\u00e8res heures"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0644\u064e\u0627 \u0635\u0650\u064a\u064e\u0627\u0645\u064e \u0639\u064e\u0644\u064e\u0649 \u0627\u0644\u0635\u0650\u0651\u0628\u064a\u064e\u0627\u0646\u0650 \u062d\u064e\u062a\u064e\u0651\u0649 \u064a\u064e\u062d\u062a\u064e\u0644\u0650\u0645\u064e \u0627\u0644\u063a\u064f\u0644\u064e\u0627\u0645\u064f \u0648\u064e\u062a\u064e\u062d\u0650\u064a\u0636\u064e \u0627\u0644\u062c\u064e\u0627\u0631\u0650\u064a\u064e\u0629\u064f \u00bb \u2014 pas d'obligation de je\u00fbne avant la pubert\u00e9 : \u0627\u062d\u062a\u0644\u0627\u0645 pour le gar\u00e7on, premi\u00e8res r\u00e8gles pour la fille."
          },
          {
            id: "q-saw-24",
            text: "<strong>PI\u00c8GE :</strong> La femme dont les r\u00e8gles s'arr\u00eatent en cours de journ\u00e9e de Ramadan \u2014 peut-elle manger le reste de la journ\u00e9e ?",
            choices: [
              {id:"a",text:"Non \u2014 elle doit s'abstenir imm\u00e9diatement"},
              {id:"b",text:"Oui \u2014 la Ris\u0101la le permet explicitement"},
              {id:"c",text:"Seulement si elle n'a pas encore fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644"},
              {id:"d",text:"Elle attend le lendemain"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la est claire : la femme dont les r\u00e8gles s'arr\u00eatent en cours de journ\u00e9e peut manger le reste de la journ\u00e9e. Ce n'est pas comme si cette journ\u00e9e pouvait compter comme je\u00fbne valide \u2014 mais elle n'est pas oblig\u00e9e de s'abstenir."
          },
          {
            id: "q-saw-25",
            text: "<strong>SC\u00c9NARIO M\u00c9DICAL :</strong> Un dentiste pose une anesth\u00e9sie locale \u00e0 un patient je\u00fbneur. Le je\u00fbne est-il rompu ?",
            choices: [
              {id:"a",text:"Oui \u2014 toute injection rompt le je\u00fbne"},
              {id:"b",text:"Non \u2014 l'injection locale ne constitue pas une nourriture et n'atteint pas le \u0627\u0644\u062c\u064e\u0648\u0652\u0641"},
              {id:"c",text:"Oui si c'est dans une veine"},
              {id:"d",text:"Seulement si c'est du glucose"},
            ],
            correctId: "b",
            explanation: "L'anesth\u00e9sie locale (injection intramusculaire, sous-cutan\u00e9e ou nerveuse) ne rompt pas le je\u00fbne selon les savants malikites contemporains \u2014 ce n'est pas de la nourriture et elle n'atteint pas le \u0627\u0644\u062c\u064e\u0648\u0652\u0641 (cavit\u00e9 abdominale)."
          },
          {
            id: "q-saw-26",
            text: "<strong>PI\u00c8GE AVANC\u00c9 :</strong> Ibrahim reporte son \u0642\u064e\u0636\u064e\u0627\u0621 jusqu'\u00e0 l'entr\u00e9e du prochain Ramadan sans excuse valable. Que doit-il faire ?",
            choices: [
              {id:"a",text:"Simplement rattraper les jours apr\u00e8s le second Ramadan"},
              {id:"b",text:"Faire le \u0642\u064e\u0636\u064e\u0627\u0621 ET nourrir un pauvre par jour de retard"},
              {id:"c",text:"Faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 compl\u00e8te \u00e0 la place"},
              {id:"d",text:"Aucune cons\u00e9quence suppl\u00e9mentaire"},
            ],
            correctId: "b",
            explanation: "Celui qui reporte le \u0642\u064e\u0636\u064e\u0627\u0621 sans excuse jusqu'\u00e0 l'entr\u00e9e d'un nouveau Ramadan doit faire, en plus du \u0642\u064e\u0636\u064e\u0627\u0621, une \u0641\u0650\u062f\u0652\u064a\u064e\u0629 (nourrir un pauvre) par jour de retard. C'est une sanction pour la n\u00e9gligence."
          },
          {
            id: "q-saw-27",
            text: "L'\u0627\u0644\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 (retraite spirituelle) est-il obligatoire ou recommand\u00e9 ?",
            choices: [
              {id:"a",text:"Obligatoire pour tout homme adulte en Ramadan"},
              {id:"b",text:"Obligatoire seulement le dernier tiers du Ramadan"},
              {id:"c",text:"Recommand\u00e9 (السُّنَّة) \u2014 obligatoire seulement si on l'a vou\u00e9 (\u0646\u064e\u0630\u0652\u0631)"},
              {id:"d",text:"Sunna (السُّنَّة) ni obligation"},
            ],
            correctId: "c",
            explanation: "L'\u0627\u0639\u062a\u0643\u0627\u0641 Sunna (السُّنَّة) du Proph\u00e8te \ufdfa, notamment dans le dernier tiers du Ramadan. Il devient obligatoire uniquement si on l'a vou\u00e9 (\u0646\u064e\u0630\u0631). Ce n'est pas une obligation pour tous."
          },
          {
            id: "q-saw-28",
            text: "<strong>PI\u00c8GE :</strong> La femme en \u0646\u0650\u0641\u064e\u0627\u0633 peut-elle je\u00fbner si son saignement s'arr\u00eate le 3\u00e8me jour ?",
            choices: [
              {id:"a",text:"Non \u2014 le \u0646\u0650\u0641\u064e\u0627\u0633 dure minimum 40 jours"},
              {id:"b",text:"Oui \u2014 d\u00e8s l'arr\u00eat du saignement et apr\u00e8s \u0627\u0644\u063a\u064f\u0633\u0652\u0644, elle peut je\u00fbner"},
              {id:"c",text:"Seulement apr\u00e8s 15 jours"},
              {id:"d",text:"Non \u2014 elle attend une semaine suppl\u00e9mentaire"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0641\u064e\u0625\u0650\u0630\u064e\u0627 \u0627\u0646\u0642\u064e\u0637\u064e\u0639\u064e \u0627\u0644\u062f\u064e\u0651\u0645\u064f \u0642\u064e\u0628\u0644\u064e\u0647\u064e\u0627 \u0648\u064e\u0644\u064e\u0648 \u0641\u0650\u064a \u064a\u064e\u0648\u0645\u0650 \u0627\u0644\u0648\u0650\u0644\u064e\u0627\u062f\u064e\u0629\u0650 \u0627\u063a\u062a\u064e\u0633\u064e\u0644\u064e\u062a \u0648\u064e\u0635\u064e\u0644\u064e\u0651\u062a \u00bb \u2014 d\u00e8s l'arr\u00eat du saignement, m\u00eame le jour de l'accouchement, elle fait \u0627\u0644\u063a\u064f\u0633\u0652\u0644 et reprend ses obligations. Pas de dur\u00e9e minimale."
          },
          {
            id: "q-saw-29",
            text: "<strong>SC\u00c9NARIO M\u00c9DICAL :</strong> Nadia se fait poser des gouttes oculaires en Ramadan. Son je\u00fbne est-il affect\u00e9 ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout ce qui entre dans le corps rompt le je\u00fbne"},
              {id:"b",text:"Non \u2014 les gouttes oculaires n'atteignent pas le \u0627\u0644\u062c\u064e\u0648\u0652\u0641"},
              {id:"c",text:"Seulement si elle a le go\u00fbt dans la gorge"},
              {id:"d",text:"Oui car les yeux communiquent avec la gorge"},
            ],
            correctId: "b",
            explanation: "Les gouttes oculaires ne rompent pas le je\u00fbne selon les savants malikites contemporains car le \u0627\u0644\u062c\u064e\u0648\u0652\u0641 (estomac/intestin) n'est pas atteint directement. Ce qui rompt le je\u00fbne c'est ce qui p\u00e9n\u00e8tre dans la cavit\u00e9 abdominale par les voies habituelles."
          },
          {
            id: "q-saw-30",
            text: "<strong>PI\u00c8GE :</strong> Zayd ouvre un parfum tr\u00e8s fort en Ramadan et en inhale l'odeur. Son je\u00fbne est-il affect\u00e9 ?",
            choices: [
              {id:"a",text:"Oui \u2014 les odeurs fortes rompent le je\u00fbne"},
              {id:"b",text:"Non \u2014 sentir des parfums ou odeurs ne rompt pas le je\u00fbne"},
              {id:"c",text:"Seulement si c'est intentionnel"},
              {id:"d",text:"Seulement pour l'encens br\u00fbl\u00e9 directement"},
            ],
            correctId: "b",
            explanation: "Sentir des parfums, de la nourriture ou toute odeur ne rompt PAS le je\u00fbne selon le rite malikite. Ce qui rompt c'est l'introduction de substance solide ou liquide \u2014 pas les odeurs."
          },
          {
            id: "q-saw-31",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim a mang\u00e9 juste avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631 en croyant sinc\u00e8rement que c'\u00e9tait encore la nuit. Il avait tort. Que se passe-t-il ?",
            choices: [
              {id:"a",text:"Son je\u00fbne est invalide \u2014 il doit le rattraper"},
              {id:"b",text:"Son je\u00fbne peut rester valide car il a agi de bonne foi (\u0627\u0644\u062a\u064e\u0651\u0623\u0648\u0650\u064a\u0644)"},
              {id:"c",text:"Il doit s'abstenir le reste de la journ\u00e9e sans que cela compte"},
              {id:"d",text:"Sa \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 \u00e9tait corrompue donc nul"},
            ],
            correctId: "b",
            explanation: "Le rite malikite prend en compte la bonne foi et l'erreur sinc\u00e8re. Celui qui mange juste avant \u0627\u0644\u0641\u064e\u062c\u0652\u0631 en croyant sinc\u00e8rement que c'\u00e9tait encore la nuit peut voir son je\u00fbne valide selon certains avis malikites \u2014 il n'est pas soumis au \u0642\u064e\u0636\u064e\u0627\u0621."
          },
          {
            id: "q-saw-32",
            text: "<strong>DISTINCTION CLEF :</strong> Pour un je\u00fbne volontaire (\u0646\u0627\u0641\u0644\u0629), la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut-elle \u00eatre faite apr\u00e8s \u0627\u0644\u0641\u064e\u062c\u0652\u0631 ?",
            choices: [
              {id:"a",text:"Non \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre la nuit pour tout je\u00fbne"},
              {id:"b",text:"Oui \u2014 pour les \u0646\u0648\u0627\u0641\u0644 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644 si on n'a pas encore mang\u00e9"},
              {id:"c",text:"Seulement avant la pri\u00e8re du \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d"},
              {id:"d",text:"Non \u2014 le je\u00fbne commence obligatoirement d\u00e8s \u0627\u0644\u0641\u064e\u062c\u0652\u0631"},
            ],
            correctId: "b",
            explanation: "DIFF\u00c9RENCE IMPORTANTE : pour le Ramadan (obligatoire), la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre faite la nuit (\u0627\u0644\u062a\u064e\u0651\u0628\u064a\u0650\u064a\u062a). Pour les \u0646\u0648\u0627\u0641\u0644 (volontaires), la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644 (d\u00e9clin du soleil) si on n'a rien mang\u00e9 depuis \u0627\u0644\u0641\u064e\u062c\u0652\u0631."
          },
          {
            id: "q-saw-33",
            text: "<strong>PI\u00c8GE :</strong> Samir oublie la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 la nuit et se r\u00e9veille le matin de Ramadan. Peut-il je\u00fbner ce jour ?",
            choices: [
              {id:"a",text:"Non \u2014 sans \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 nocturne, le je\u00fbne de Ramadan est invalide"},
              {id:"b",text:"Oui \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'\u00e0 midi pour Ramadan"},
              {id:"c",text:"Oui car c'est un oubli"},
              {id:"d",text:"Seulement si c'est la premi\u00e8re fois"},
            ],
            correctId: "a",
            explanation: "Pour le RAMADAN (je\u00fbne obligatoire), la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre arr\u00eat\u00e9e la nuit (\u0627\u0644\u062a\u064e\u0651\u0628\u064a\u0650\u064a\u062a). Oublier la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 nocturne invalide le je\u00fbne du jour suivant. Il faut rattraper ce jour. Ne pas confondre avec les \u0646\u0648\u0627\u0641\u0644 o\u00f9 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644."
          },
          {
            id: "q-saw-34",
            text: "Le voyageur arriv\u00e9 \u00e0 destination peut-il encore rompre son je\u00fbne ?",
            choices: [
              {id:"a",text:"Oui \u2014 il est toujours voyageur jusqu'au retour"},
              {id:"b",text:"Non \u2014 une fois arriv\u00e9 et devenu r\u00e9sident, il ne peut plus rompre"},
              {id:"c",text:"Seulement si son voyage \u00e9tait de plus de 4 bornes"},
              {id:"d",text:"Seulement si c'est son premier Ramadan dans cette ville"},
            ],
            correctId: "b",
            explanation: "Une fois arriv\u00e9 \u00e0 destination et devenu r\u00e9sident (m\u00eame temporairement), la permission de rompre le je\u00fbne li\u00e9e au voyage prend fin. La permission est li\u00e9e \u00e0 l'\u00c9TAT de voyageur \u2014 l'arriv\u00e9e met fin \u00e0 cet \u00e9tat."
          },
          {
            id: "q-saw-35",
            text: "<strong>AVANC\u00c9 :</strong> Peut-on je\u00fbner les 6 jours de Shaww\u0101l selon le rite malikite ?",
            choices: [
              {id:"a",text:"Non \u2014 c'est une \u0628\u0650\u062f\u0639\u064e\u0629 prohib\u00e9e"},
              {id:"b",text:"Oui et tr\u00e8s recommand\u00e9"},
              {id:"c",text:"Permis mais certains savants malikites classiques les ont d\u00e9conseill\u00e9s juste apr\u00e8s Ramadan"},
              {id:"d",text:"Seulement si toutes les pri\u00e8res sont accomplies"},
            ],
            correctId: "c",
            explanation: "Les 6 jours de Shaww\u0101l sont \u00e9tablis par had\u012bth. Cependant, certains savants malikites classiques les ont d\u00e9conseill\u00e9s (non interdits) par crainte que les gens croient qu'ils font partie de Ramadan. La position actuelle de l'\u00e9cole les permet."
          },
          {
            id: "q-saw-36",
            text: "<strong>SC\u00c9NARIO :</strong> Pour l'Eid al-Fitr, Sunna (السُّنَّة) de manger selon la Ris\u0101la ?",
            choices: [
              {id:"a",text:"Apr\u00e8s la pri\u00e8re de l'Eid"},
              {id:"b",text:"Avant d'aller \u00e0 la pri\u00e8re de l'Eid"},
              {id:"c",text:"Au coucher du soleil de la nuit de l'Eid"},
              {id:"d",text:"Indiff\u00e9rent \u2014 Sunna (السُّنَّة) pr\u00e9cise"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u064a\u064f\u0633\u062a\u064e\u062d\u064e\u0628\u064f\u0651 \u0627\u0644\u0641\u0650\u0637\u0631\u064f \u0641\u0650\u064a\u0647\u0650 \u0642\u064e\u0628\u0644\u064e \u0627\u0644\u063a\u064f\u062f\u064f\u0648\u0650\u0651 \u0625\u0650\u0644\u064e\u0649 \u0627\u0644\u0645\u064f\u0635\u064e\u0644\u064e\u0651\u0649, \u0648\u064e\u0644\u064e\u064a\u0633\u064e \u0630\u064e\u0644\u0650\u0643\u064e \u0641\u0650\u064a \u0627\u0644\u0623\u064e\u0636\u062d\u064e\u0649 \u00bb \u2014 pour l'Eid al-Fitr, manger AVANT la pri\u00e8Sunna (السُّنَّة). Pour l'Eid al-Adha, on mange apr\u00e8s (de l'animal sacrifi\u00e9)."
          },
          {
            id: "q-saw-37",
            text: "<strong>PI\u00c8GE AVANC\u00c9 :</strong> Une caresse (\u0645\u064f\u0628\u064e\u0627\u0634\u064e\u0631\u064e\u0629) intentionnelle avec d\u00e9sir qui conduit \u00e0 une \u00e9mission en Ramadan : que se passe-t-il ?",
            choices: [
              {id:"a",text:"Rien \u2014 sans rapport complet le je\u00fbne reste entier"},
              {id:"b",text:"Le \u0642\u064e\u0636\u064e\u0627\u0621 seulement"},
              {id:"c",text:"La \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 compl\u00e8te"},
              {id:"d",text:"\u0642\u064e\u0636\u064e\u0627\u0621 + الفِدْيَة"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0648\u064e\u0645\u064e\u0646 \u0627\u0644\u062a\u064e\u0630\u064e\u0651 \u0628\u0650\u0645\u064f\u0628\u064e\u0627\u0634\u064e\u0631\u064e\u0629\u064d \u0623\u064e\u0648 \u0642\u064f\u0628\u0644\u064e\u0629\u064d \u0643\u064e\u0623\u064e\u062f\u064e\u0651\u0649 \u0644\u0650\u0630\u064e\u0644\u0650\u0643\u064e \u0643\u064e\u0639\u064e\u0644\u064e\u064a\u0647\u0650 \u0627\u0644\u0642\u064e\u0636\u064e\u0627\u0621 \u00bb \u2014 si la caresse/baiser conduit \u00e0 une \u00e9mission : \u0642\u064e\u0636\u064e\u0627\u0621 seulement. La \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 compl\u00e8te n'est due que pour le rapport sexuel d\u00e9lib\u00e9r\u00e9 complet."
          },
          {
            id: "q-saw-38",
            text: "La femme menstru\u00e9e (\u062d\u064e\u0627\u0626\u0650\u0636) doit-elle rattraper ses jours de je\u00fbne de Ramadan ?",
            choices: [
              {id:"a",text:"Non \u2014 l'excuse est totale"},
              {id:"b",text:"Oui \u2014 elle rattrape le je\u00fbne mais PAS la pri\u00e8re"},
              {id:"c",text:"Oui \u2014 elle rattrape je\u00fbne et pri\u00e8re"},
              {id:"d",text:"Non \u2014 mais elle fait la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 \u00e0 la place"},
            ],
            correctId: "b",
            explanation: "La \u062d\u064e\u0627\u0626\u0650\u0636 rattrape les jours de je\u00fbne de Ramadan MAIS PAS les pri\u00e8res. Cette asym\u00e9trie est fondamentale : le je\u00fbne est rattrapable, la pri\u00e8re est d\u00e9finitivement dispens\u00e9e pendant le \u062d\u064e\u064a\u0652\u0636."
          },
          {
            id: "q-saw-39",
            text: "<strong>SC\u00c9NARIO COMPLEXE :</strong> Un diab\u00e9tique doit se faire des injections d'insuline. Le je\u00fbne rompt-il ?",
            choices: [
              {id:"a",text:"Oui \u2014 l'insuline est un liquide inject\u00e9"},
              {id:"b",text:"Non \u2014 l'insuline n'est pas une nourriture ; mais si m\u00e9dicalement dangereux, il est excus\u00e9 et fait la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 ou \u0627\u0644\u0642\u064e\u0636\u064e\u0627\u0621"},
              {id:"c",text:"Oui et sans exception possible"},
              {id:"d",text:"Non et sans aucune restriction"},
            ],
            correctId: "b",
            explanation: "L'insuline en injection ne rompt pas le je\u00fbne (ce n'est pas de la nourriture). Mais si le diab\u00e9tique est m\u00e9dicalement en danger de je\u00fbner, il est excus\u00e9 et fait le \u0642\u064e\u0636\u064e\u0627\u0621 ou la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 selon son \u00e9tat chronique."
          },
          {
            id: "q-saw-40",
            text: "<strong>PI\u00c8GE :</strong> Une perfusion de <u>glucose</u> (sucre) pendant le Ramadan rompt-elle le je\u00fbne ?",
            choices: [
              {id:"a",text:"Non \u2014 une perfusion n'est pas de la nourriture"},
              {id:"b",text:"Oui \u2014 le glucose est une substance nourrissante introduite dans le corps"},
              {id:"c",text:"Seulement si la quantit\u00e9 d\u00e9passe 100ml"},
              {id:"d",text:"Non si c'est prescrit m\u00e9dicalement"},
            ],
            correctId: "b",
            explanation: "Contrairement aux m\u00e9dicaments simples, une perfusion de glucose (dextrose) ou de nourriture par voie intraveineuse constitue une alimentation et peut rompre le je\u00fbne selon les savants malikites contemporains, car elle pourvoit \u00e0 l'alimentation du corps."
          },
          {
            id: "q-saw-41",
            text: "Qui quitte l'\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 volontairement avant sa fin \u2014 doit-il le refaire ?",
            choices: [
              {id:"a",text:"Non \u2014 l'\u0627\u0639\u062a\u0643\u0627\u0641 volontaire peut \u00eatre interrompu sans cons\u00e9quence"},
              {id:"b",text:"Oui \u2014 une fois commenc\u00e9, il doit \u00eatre compl\u00e9t\u00e9 ou refait"},
              {id:"c",text:"Seulement si c'\u00e9tait un \u0627\u0639\u062a\u0643\u0627\u0641 de نَذْر"},
              {id:"d",text:"Seulement s'il l'a interrompu 3 fois"},
            ],
            correctId: "b",
            explanation: "L'Akh\u1e0dar\u012b : \u00ab \u0648\u0645\u0646 \u0642\u0637\u0639 \u0627\u0644\u0646\u0627\u0641\u0644\u0629 \u0639\u0627\u0645\u062f\u0627\u064b \u0623\u0639\u0627\u062f\u0647\u0627 \u00bb \u2014 quitter d\u00e9lib\u00e9r\u00e9ment un acte d'adoration volontaire commenc\u00e9 impose de le refaire. Cela s'applique \u00e0 l'\u0627\u0639\u062a\u0643\u0627\u0641 volontaire."
          },
          {
            id: "q-saw-42",
            text: "<strong>NUANCE :</strong> L'\u0627\u0644\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 \u2014 le mu\u02bftakif peut-il contracter un mariage ?",
            choices: [
              {id:"a",text:"Non \u2014 il est coup\u00e9 du monde"},
              {id:"b",text:"Oui \u2014 le mariage est permis pendant l'\u0627\u0639\u062a\u0643\u0627\u0641"},
              {id:"c",text:"Seulement s'il sort bri\u00e8vement pour cela"},
              {id:"d",text:"Seulement s'il est الإِمَام"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la pr\u00e9cise que le mu\u02bftakif peut \u00eatre الإِمَام de la mosqu\u00e9e o\u00f9 il est en retraite. Il peut aussi, selon certains savants malikites, contracter un mariage sans sortir. Les interdictions portent sur sortir pour commerce, visite de malade et pri\u00e8re fun\u00e8bre."
          },
          {
            id: "q-saw-43",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim je\u00fbne volontairement et r\u00e9alise en cours de journ\u00e9e qu'il a des \u0642\u064e\u0636\u064e\u0627\u0621 en dette. Doit-il interrompre ce je\u00fbne ?",
            choices: [
              {id:"a",text:"Oui \u2014 le \u0642\u064e\u0636\u064e\u0627\u0621 est prioritaire sur les \u0646\u0648\u0627\u0641\u0644"},
              {id:"b",text:"Non \u2014 il compl\u00e8te ce je\u00fbne volontaire et commence le \u0642\u064e\u0636\u064e\u0627\u0621 d\u00e8s le lendemain"},
              {id:"c",text:"Oui et il doit faire le \u0642\u064e\u0636\u064e\u0627\u0621 le m\u00eame jour"},
              {id:"d",text:"Non car il peut choisir l'ordre"},
            ],
            correctId: "b",
            explanation: "Une fois un je\u00fbne volontaire commenc\u00e9, l'interrompre sans raison impose le \u0642\u064e\u0636\u064e\u0627\u0621 de ce jour. Il vaut mieux le compl\u00e9ter et commencer le rattrapage d\u00e8s le lendemain plut\u00f4t que d'interrompre et devoir rattraper les deux."
          },
          {
            id: "q-saw-44",
            text: "Le malade chronique incapable de je\u00fbner ET de rattraper doit faire :",
            choices: [
              {id:"a",text:"Rien \u2014 il est totalement excus\u00e9"},
              {id:"b",text:"Payer la \u0632\u064e\u0643\u064e\u0627\u0629 pour compenser"},
              {id:"c",text:"La \u0641\u0650\u062f\u0652\u064a\u064e\u0629 : nourrir un pauvre pour chaque jour de Ramadan"},
              {id:"d",text:"Je\u00fbner partiellement"},
            ],
            correctId: "c",
            explanation: "Le malade chronique incapable de je\u00fbner et de rattraper paie la \u0641\u0650\u062f\u0652\u064a\u064e\u0629 : nourrir un pauvre par jour de Ramadan. C'est sa compensation permanente selon la jurisprudence malikite."
          },
          {
            id: "q-saw-45",
            text: "<strong>PI\u00c8GE :</strong> La personne en \u0625\u063a\u0645\u0627\u0621 (\u00e9vanouissement) toute la journ\u00e9e de Ramadan \u2014 son je\u00fbne est-il valide si elle avait la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 la nuit ?",
            choices: [
              {id:"a",text:"Oui \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 de la nuit suffit"},
              {id:"b",text:"Non \u2014 l'\u0625\u063a\u0645\u0627\u0621 prolong\u00e9 toute la journ\u00e9e invalide le je\u00fbne"},
              {id:"c",text:"Oui si c'est involontaire"},
              {id:"d",text:"Oui mais il doit refaire par pr\u00e9caution"},
            ],
            correctId: "b",
            explanation: "L'\u0625\u063a\u0645\u0627\u0621 (perte totale de conscience) qui dure toute la journ\u00e9e invalide le je\u00fbne selon la jurisprudence malikite. Ce n'est pas comme le sommeil \u2014 l'inconscience totale prive le je\u00fbneur de toute intentionnalit\u00e9 continue."
          },
          {
            id: "q-saw-46",
            text: "<strong>AVANC\u00c9 :</strong> Le je\u00fbne d'\u0639\u064e\u0627\u0634\u064f\u0648\u0631\u064e\u0627\u0621 (10 Muharram) est dans le rite malikite :",
            choices: [
              {id:"a",text:"Obligatoire"},
              {id:"b",text:"Sunna (السُّنَّة) (السُّنَّة mu\u02beakkada)"},
              {id:"c",text:"Recommand\u00e9 l\u00e9ger (\u0645\u0646\u062f\u0648\u0628)"},
              {id:"d",text:"Permis sans statut particulier"},
            ],
            correctId: "b",
            explanation: "Le je\u00fbne d'\u0639\u0627\u0634\u0648\u0631\u0627\u0621 Sunna (السُّنَّة) forte dans le rite malikite. Le Proph\u00e8te \ufdfa le je\u00fbnait et encourageait la communaut\u00e9. C'est l'un des je\u00fbnes les plus m\u00e9ritoires en dehors de Ramadan."
          },
          {
            id: "q-saw-47",
            text: "<strong>PI\u00c8GE :</strong> Peut-on commencer le je\u00fbne volontaire du jour si on n'a pas encore mang\u00e9, m\u00eame apr\u00e8s le lever du soleil ?",
            choices: [
              {id:"a",text:"Non \u2014 la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 doit \u00eatre la nuit pour tout je\u00fbne"},
              {id:"b",text:"Oui \u2014 pour les \u0646\u0648\u0627\u0641\u0644, la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644 si on n'a pas mang\u00e9"},
              {id:"c",text:"Seulement avant \u0627\u0644\u0635\u064f\u0651\u0628\u0652\u062d"},
              {id:"d",text:"Non \u2014 le je\u00fbne commence obligatoirement d\u00e8s \u0627\u0644\u0641\u064e\u062c\u0652\u0631"},
            ],
            correctId: "b",
            explanation: "Pour les je\u00fbnes volontaires (\u0646\u0648\u0627\u0641\u0644), la \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 peut \u00eatre faite jusqu'au \u0627\u0644\u0632\u064e\u0651\u0648\u064e\u0627\u0644 (d\u00e9clin du soleil \u2014 midi islamique) si on n'a rien mang\u00e9 depuis \u0627\u0644\u0641\u064e\u062c\u0652\u0631. C'est une r\u00e8gle distincte du je\u00fbne de Ramadan."
          },
          {
            id: "q-saw-48",
            text: "<strong>PI\u00c8GE :</strong> Leila rompt son je\u00fbne de \u0642\u064e\u0636\u064e\u0627\u0621 d\u00e9lib\u00e9r\u00e9ment. A-t-elle une obligation suppl\u00e9mentaire ?",
            choices: [
              {id:"a",text:"Non \u2014 juste refaire ce jour de \u0642\u064e\u0636\u064e\u0627\u0621"},
              {id:"b",text:"Elle doit nourrir un pauvre en plus"},
              {id:"c",text:"Elle doit faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 compl\u00e8te"},
              {id:"d",text:"Elle doit rattraper 2 jours \u00e0 la place d'1"},
            ],
            correctId: "a",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u064a\u0633\u064e \u0639\u064e\u0644\u064e\u0649 \u0645\u064e\u0646 \u0623\u064e\u0641\u0637\u064e\u0631\u064e \u0641\u0650\u064a \u0642\u064e\u0636\u064e\u0627\u0621\u0650 \u0631\u064e\u0645\u064e\u0636\u064e\u0627\u0646\u064e \u0645\u064f\u062a\u064e\u0639\u064e\u0645\u0650\u0651\u062f\u064b\u0627 \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629\u064c \u00bb \u2014 pas de \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 ni de \u0641\u0650\u062f\u0652\u064a\u064e\u0629 suppl\u00e9mentaire pour la rupture d\u00e9lib\u00e9r\u00e9e du \u0642\u064e\u0636\u064e\u0627\u0621. Simplement refaire ce jour."
          },
          {
            id: "q-saw-49",
            text: "<strong>AVANC\u00c9 :</strong> Peut-on je\u00fbner un نَذْر de je\u00fbne si on a des \u0642\u064e\u0636\u064e\u0627\u0621 en dette ?",
            choices: [
              {id:"a",text:"Oui \u2014 le نَذْر a priorit\u00e9 sur le \u0642\u064e\u0636\u064e\u0627\u0621"},
              {id:"b",text:"Non \u2014 le \u0642\u064e\u0636\u064e\u0627\u0621 a priorit\u00e9 sur tout je\u00fbne volontaire ou vou\u00e9"},
              {id:"c",text:"Oui si le نَذْر est li\u00e9 \u00e0 un \u00e9v\u00e8nement pass\u00e9"},
              {id:"d",text:"D\u00e9pend si le نَذْر est conditionnel ou absolu"},
            ],
            correctId: "b",
            explanation: "Le \u0642\u064e\u0636\u064e\u0627\u0621 de Ramadan est prioritaire sur les \u0646\u0648\u0627\u0641\u0644 y compris les نَذْر. On rattrape les pri\u00e8res de Ramadan avant tout je\u00fbne volontaire ou vou\u00e9. Les نَذْر restent une dette \u00e0 honorer, mais apr\u00e8s avoir r\u00e9gl\u00e9 le \u0642\u064e\u0636\u064e\u0627\u0621."
          },
          {
            id: "q-saw-50",
            text: "<strong>QUESTION FINALE :</strong> Nadia a mang\u00e9 juste apr\u00e8s le \u0627\u0644\u0641\u064e\u062c\u0652\u0631 en croyant que c'\u00e9tait encore le \u0633\u064f\u062d\u064f\u0648\u0631. C'\u00e9tait en r\u00e9alit\u00e9 apr\u00e8s l'aube. Sa \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 \u00e9tait faite la nuit. Selon certains avis malikites :",
            choices: [
              {id:"a",text:"Son je\u00fbne est invalide \u2014 manger apr\u00e8s \u0627\u0644\u0641\u064e\u062c\u0652\u0631 rompt toujours"},
              {id:"b",text:"Son je\u00fbne peut rester valide si son erreur \u00e9tait sinc\u00e8re et plausible (\u0627\u0644\u062a\u064e\u0651\u0623\u0648\u0650\u064a\u0644)"},
              {id:"c",text:"Elle doit faire la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629 car elle a mang\u00e9"},
              {id:"d",text:"Elle doit faire le \u0642\u064e\u0636\u064e\u0627\u0621 obligatoirement"},
            ],
            correctId: "b",
            explanation: "Selon certains avis malikites, l'erreur sinc\u00e8re et plausible (\u0627\u0644\u062a\u064e\u0651\u0623\u0648\u0650\u064a\u0644) sur le d\u00e9but de \u0627\u0644\u0641\u064e\u062c\u0652\u0631 exclut le \u0642\u064e\u0636\u064e\u0627\u0621 et a fortiori la \u0643\u064e\u0641\u064e\u0651\u0627\u0631\u064e\u0629. C'est un cas o\u00f9 la jurisprudence malikite montre sa prise en compte de la bonne foi."
          }
        ,
          {
            id: "q-saw-51",
            text: "<strong>CONTEMPORAIN :</strong> Un m\u00e9dicament sous forme de gouttes oculaires (collyres) est utilis\u00e9 pendant le Ramadan. Le je\u00fbne est-il affect\u00e9 ?",
            choices: [
            {id:"a",text:"Oui \u2014 tout m\u00e9dicament externe rompt le je\u00fbne"},
            {id:"b",text:"Non \u2014 si le m\u00e9dicament n'atteint pas la gorge, le je\u00fbne reste valide"},
            {id:"c",text:"Oui si le m\u00e9dicament a un go\u00fbt dans la gorge"},
            {id:"d",text:"Seulement s'il est prescrit par un m\u00e9decin"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Tout m\u00e9dicament (liquide) pris par voie de l'\u0153il, l'oreille ou le nez et qui arrive \u00e0 la gorge invalide le je\u00fbne et oblige le rattrapage ; s'il n'arrive pas \u00e0 la gorge, le je\u00fbne reste valide. \u00bb Les collyres qui ne traversent pas la gorge ne rompent donc pas le je\u00fbne."
          },
          {
            id: "q-saw-52",
            text: "<strong>PI\u00c8GE M\u00c9DICAL :</strong> Des gouttes nasales utilis\u00e9es en journ\u00e9e de Ramadan \u2014 le je\u00fbne est-il \u00e0 risque ?",
            choices: [
            {id:"a",text:"Non \u2014 les gouttes nasales sont comme les oculaires"},
            {id:"b",text:"Oui \u2014 le nez est proche de la gorge ; si les gouttes l'atteignent, le je\u00fbne est rompu \u2192 s'abstenir sauf n\u00e9cessit\u00e9"},
            {id:"c",text:"Non si les gouttes sont en petite quantit\u00e9"},
            {id:"d",text:"Jamais \u2014 les gouttes nasales n'atteignent jamais l'estomac"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr pr\u00e9cise : \u00ab le nez est une issue plus proche de la gorge et que par le nez les gouttes de m\u00e9dicaments ont plus de risque d'arriver \u00e0 la gorge \u00bb. Recommandation : s'abstenir en journ\u00e9e sauf n\u00e9cessit\u00e9 m\u00e9dicale absolue. Si n\u00e9cessit\u00e9 : utiliser et rattraper ce jour."
          },
          {
            id: "q-saw-53",
            text: "<strong>DIVERGENCE CONTEMPORAINE :</strong> L'a\u00e9rosol bronchodilatateur (Ventoline) pour les asthmatiques rompt-il le je\u00fbne selon les savants malikites contemporains ?",
            choices: [
            {id:"a",text:"Unanimit\u00e9 : ne rompt pas le je\u00fbne"},
            {id:"b",text:"Unanimit\u00e9 : rompt le je\u00fbne"},
            {id:"c",text:"Divergence : certains disent non (par analogie avec le rin\u00e7age de bouche), d'autres disent oui (car la composante liquide atteint la gorge)"},
            {id:"d",text:"Seulement s'il contient du glucose"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr expose la divergence : Opinion 1 (n'invalide pas) : l'assimile au rin\u00e7age de la bouche \u2014 quantit\u00e9 infime de liquide, le reste est de l'air. Opinion 2 (invalide) : la composante liquide atteint la gorge/estomac. Conseil pratique : si possible, reporter avant le Fadjr ou apr\u00e8s l'If\u1e6d\u0101r. En cas de n\u00e9cessit\u00e9, utiliser et rattraper par pr\u00e9caution."
          },
          {
            id: "q-saw-54",
            text: "<strong>PI\u00c8GE :</strong> Une prise de sang m\u00e9dicale en journ\u00e9e de Ramadan rompt-elle le je\u00fbne ?",
            choices: [
            {id:"a",text:"Oui \u2014 extraire du sang rompt le je\u00fbne"},
            {id:"b",text:"Non \u2014 par analogie avec la Hij\u0101ma qui n'invalide pas le je\u00fbne"},
            {id:"c",text:"Seulement si la quantit\u00e9 d\u00e9passe 10ml"},
            {id:"d",text:"Oui car le corps est affaibli"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab On en d\u00e9duit ainsi que la prise de sang n'annule pas le je\u00fbne \u00bb \u2014 par analogie directe avec la Hij\u0101ma (saign\u00e9e) dont l'Im\u0101m M\u0101lik dit qu'elle n'invalide pas le je\u00fbne. Le principe : ce qui sort du corps ne rompt pas le je\u00fbne (sauf les vomissements d\u00e9lib\u00e9r\u00e9s). Ce qui entre rompt."
          },
          {
            id: "q-saw-55",
            text: "<strong>CONTEMPORAIN :</strong> Un patch de nicotine (anti-tabac) pos\u00e9 sur la peau pendant le Ramadan rompt-il le je\u00fbne ?",
            choices: [
            {id:"a",text:"Oui \u2014 introduit une substance dans le corps"},
            {id:"b",text:"Non \u2014 par analogie avec les injections m\u00e9dicales qui n'atteignent pas l'estomac"},
            {id:"c",text:"Oui car la nicotine nourrit le corps"},
            {id:"d",text:"Seulement si le patch est pos\u00e9 sur une veine"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : la majorit\u00e9 des savants contemporains assimilent le patch de nicotine aux injections m\u00e9dicales \u2014 il diffuse dans le sang par la peau mais n'atteint pas l'estomac/la gorge. Il n'invalide donc pas le je\u00fbne. En revanche, fumer une cigarette en journ\u00e9e de Ramadan invalide toujours le je\u00fbne."
          },
          {
            id: "q-saw-56",
            text: "<strong>COMPLEXE :</strong> Ibrahim commence le Ramadan en France puis part au Maroc qui a commenc\u00e9 1 jour plus t\u00f4t. Il a je\u00fbn\u00e9 28 jours. Les Marocains font l'Eid. Que doit-il faire ?",
            choices: [
            {id:"a",text:"Faire l'Eid avec eux \u2014 il a suivi son pays d'origine"},
            {id:"b",text:"Continuer \u00e0 je\u00fbner jusqu'\u00e0 29 jours (rattraper 1 jour) car on ne peut pas je\u00fbner moins de 29 jours"},
            {id:"c",text:"Faire l'Eid et ne rien rattraper"},
            {id:"d",text:"Attendre de rentrer en France pour finir son Ramadan"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr (Ibn Rushd, Bid\u0101yat al-Mujtahid) : on ne peut pas avoir je\u00fbn\u00e9 moins de 29 jours. Si Ibrahim a je\u00fbn\u00e9 28 jours total et que le Maroc fait l'Eid \u2192 il rompt avec eux mais RATTRAPE 1 jour pour atteindre 29. La r\u00e8gle : suivre le pays o\u00f9 on se trouve ET respecter le minimum de 29 jours."
          },
          {
            id: "q-saw-57",
            text: "<strong>PI\u00c8GE :</strong> Sami commence le Ramadan en France (lundi) et voyage au Maroc qui a commenc\u00e9 dimanche (1 jour avant). Il arrive \u00e0 25 jours de je\u00fbne. Les Marocains font leur Eid (26\u00e8me pour eux). Que fait Sami ?",
            choices: [
            {id:"a",text:"Il fait l'Eid avec eux \u2014 il a 25 jours, c'est assez"},
            {id:"b",text:"Il continue \u00e0 je\u00fbner jusqu'\u00e0 ce que la France fasse son Eid"},
            {id:"c",text:"Il fait l'Eid avec les Marocains car on suit le pays o\u00f9 on se trouve, mais rattrape 4 jours pour atteindre 29"},
            {id:"d",text:"Il est excus\u00e9 et n'a rien \u00e0 rattraper"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : la r\u00e8gle est de suivre le pays o\u00f9 on se trouve. Si les Marocains font l'Eid apr\u00e8s le 26\u00e8me jour du Maroc (= 25\u00e8me pour Sami), il rompt avec eux. Mais 25 < 29 \u2192 il rattrape 4 jours pour atteindre le minimum l\u00e9gal de 29."
          },
          {
            id: "q-saw-58",
            text: "\u0644\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631 est cherch\u00e9e dans :",
            choices: [
            {id:"a",text:"La nuit du 27 Ramadan exclusivement"},
            {id:"b",text:"Les 10 premi\u00e8res nuits de Ramadan"},
            {id:"c",text:"Les nuits impaires des 10 derniers jours de Ramadan"},
            {id:"d",text:"La nuit du 15 Ramadan (Shab-e-Barat)"}
            ],
            correctId: "c",
            explanation: "D'apr\u00e8s les had\u012bth authentiques, Laylat al-Qadr se trouve parmi les nuits impaires des 10 derniers jours de Ramadan (21, 23, 25, 27, 29). La nuit du 27 est la plus fr\u00e9quemment cit\u00e9e mais elle peut varier chaque ann\u00e9e. D'o\u00f9 la pratique de l'\u0627\u0639\u062a\u0650\u0643\u064e\u0627\u0641 pour ces 10 derniers jours."
          },
          {
            id: "q-saw-59",
            text: "Quel du\u02bf\u0101\u02be est authentiquement transmis pour l\u064e\u064a\u0644\u064e\u0629\u064f \u0627\u0644\u0642\u064e\u062f\u0631 selon le had\u012bth d'A\u00efcha ?",
            choices: [
            {id:"a",text:"\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0625\u0650\u0646\u064e\u0651\u0643\u064e \u0639\u064e\u0641\u064f\u0648\u064c\u0651 \u062a\u064f\u062d\u0650\u0628\u064f\u0651 \u0627\u0644\u0639\u064e\u0641\u0648\u064e \u0641\u064e\u0627\u0639\u0641\u064f \u0639\u064e\u0646\u0650\u0651\u064a"},
            {id:"b",text:"\u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0623\u064e\u062c\u0650\u0631\u0646\u0650\u064a \u0645\u0650\u0646\u064e \u0627\u0644\u0646\u064e\u0651\u0627\u0631\u0650"},
            {id:"c",text:"\u0633\u064f\u0628\u062d\u064e\u0627\u0646\u064e \u0627\u0644\u0644\u0647 \u0648\u064e\u0628\u0650\u062d\u064e\u0645\u062f\u0650\u0647\u0650 \u0639\u064e\u062f\u064e\u062f\u064e \u062e\u064e\u0644\u0642\u0650\u0647\u0650"},
            {id:"d",text:"\u0644\u064e\u0627 \u0625\u0650\u0644\u064e\u0647\u064e \u0625\u0650\u0644\u064e\u0651\u0627 \u0623\u064e\u0646\u062a\u064e \u0633\u064f\u0628\u062d\u064e\u0627\u0646\u064e\u0643\u064e \u0625\u0650\u0646\u0650\u0651\u064a \u0643\u064f\u0646\u062a\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0638\u064e\u0651\u0627\u0644\u0650\u0645\u0650\u064a\u0646\u064e"}
            ],
            correctId: "a",
            explanation: "A\u00efcha (ra) a rapport\u00e9 : je demandai au Proph\u00e8te \ufdfa : \u00ab Si je sais quelle nuit est Laylat al-Qadr, que dois-je dire ? \u00bb Il r\u00e9pondit : \u00ab Dis : \u0627\u0644\u0644\u064e\u0651\u0647\u064f\u0645\u064e\u0651 \u0625\u0650\u0646\u064e\u0651\u0643\u064e \u0639\u064e\u0641\u064f\u0648\u064c\u0651 \u062a\u064f\u062d\u0650\u0628\u064f\u0651 \u0627\u0644\u0639\u064e\u0641\u0648\u064e \u0641\u064e\u0627\u0639\u0641\u064f \u0639\u064e\u0646\u0650\u0651\u064a \u00bb (\u00d4 Allah, Tu es le Pardonneur, Tu aimes le pardon, pardonne-moi). \u2014 Rapport\u00e9 par Ahmad et al-Tirmidh\u012b (sahih)."
          },
          {
            id: "q-saw-60",
            text: "<strong>PI\u00c8GE M\u00c9DICAL :</strong> Une nutrition intraveineuse (glucose + prot\u00e9ines) est administr\u00e9e \u00e0 un patient hospitalis\u00e9 pendant le Ramadan. Son je\u00fbne est-il valide ?",
            choices: [
            {id:"a",text:"Oui \u2014 une injection ne rompt jamais le je\u00fbne"},
            {id:"b",text:"Non \u2014 la nutrition parent\u00e9rale alimente le corps et invalide le je\u00fbne"},
            {id:"c",text:"Seulement si c'est du glucose"},
            {id:"d",text:"Valide si prescrit m\u00e9dicalement"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Plusieurs savants consid\u00e8rent que les piq\u00fbres nutritives rendent invalide le je\u00fbne. L'argument : parmi les piliers du je\u00fbne c'est s'abstenir de nourriture de l'aube au coucher, or ces piq\u00fbres nutritives alimentent le corps. \u00bb Le patient hospitalis\u00e9 sous nutrition parent\u00e9rale est excus\u00e9 (\u0645\u0631\u064a\u0636) et fait le \u0642\u064e\u0636\u064e\u0627\u0621 ou la \u0641\u0650\u062f\u0652\u064a\u064e\u0629."
          }
        ]
      },

      badge: {
        id: 'badge-jeune',
        title: 'Croyant du Ramadan',
        arabicTitle: 'صائم رمضان',
        icon: 'crescent',
        color: 'silver',
        unlockCondition: 'Questionnaire "Le Jeûne" avec un score ≥ 85 %'
      }
    },

    {
      id: 'al-zakāt (الزَّكَاة)',
      title: 'La Zakat',
      arabicTitle: 'الزكاة',
      icon: 'scales',
      description: 'Niṣāb (النِّصَاب) du grain, de l\'or, de l\'argent et des marchandises, الحَوْل, animaux soumis à Zakāt (الزَّكَاة) et زَكَاةُ الفِطْر selon la Risāla d\'Ibn Abī Zayd al-Qayrawānī.',

      lessons: [

        {
          id: 'zak-01',
          title: 'DéZakāt (الزَّكَاة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'La Risāla consacre un chapitre entier à Zakāt (الزَّكَاة) (aumône légale), ses différents types et leurs moments d\'acquittement. Zakāt (الزَّكَاة) agricole (due à la récolte) Zakāt (الزَّكَاة) sur les biens accumulés (due après une année entière).' },
            { t: 'ar', v: 'بَابٌ فِي زَكَاةِ العَينِ وَالحَرثِ وَالمَاشِيَةِ وَمَا يَخرُجُ مِنَ المَعدِنِ', n: '« Chapitre sur la al-zakāt (الزَّكَاة) de l\'or/argent, des récoltes, des troupeaux et de ce qui sort des mines. » — Risāla d\'Ibn Abī Zayd al-Qayrawānī' },
            { t: 'h', v: 'Zakāt (الزَّكَاة) et leur moment d\'acquittement' },
            { t: 'ul', v: [
              '<strong>Zakāt (الزَّكَاة) des récoltes (ḥarth)</strong> : acquittée au moment de la récolte (ḥaṣād).',
              '<strong>Zakāt (الزَّكَاة) de l\'or, de l\'argent et des troupeaux (المَاشِيَة)</strong> : acquittée à chaque الحَوْل (année solunaire complète).',
              '<strong>Zakāt (الزَّكَاة) des mines (maʿdin)</strong> : acquittée au moment de l\'extraction, si le seuil est atteint.',
              '<strong>Zakāt (الزَّكَاة) al-Fiṭr</strong> : acquittée à l\'aube du jour de l\'Eid al-Fiṭr.'
            ] },
            { t: 'h', v: 'Ce qu\'est le الحَوْل (année d\'imposition)' },
            { t: 'p', v: 'Le الحَوْل est l\'année islamique lunaire complète (12 mois). Zakāt (الزَّكَاة) sur l\'or, l\'argent et les troupeaux n\'est due qu\'après qu\'un الحَوْل complet se soit écoulé depuis l\'acquisition ou le dernier acquittement. Si le bien est perdu avant le الحَوْل, Zakāt (الزَّكَاة) n\'est plus due.' },
            { t: 'note', v: 'Important : Zakāt (الزَّكَاة) agricole est due à la récolte et n\'exige pas de الحَوْل. Elle doit être acquittée immédiatement lors de la cueillette ou de la moisson.' }
          ]
        },

        {
          id: 'zak-02',
          title: 'Niṣāb (النِّصَاب) — Zakāt (الزَّكَاة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'Chaque type de bien soumis à Zakāt (الزَّكَاة) Niṣāb (النِّصَاب) Zakāt (الزَّكَاة) n\'est pas obligatoire. La Risāla précise ces seuils avec détail.' },
            { t: 'h', v: 'Niṣāb (النِّصَاب) des récoltes agricoles' },
            { t: 'p', v: '"لا زكاة من الحب والثمر في أقل من خمسة أوسق" — Zakāt (الزَّكَاة) sur les grains et les fruits en deçà de 5 awsāq. Un الوَسق = 60 ṣāʿs (le ṣāʿ du Prophète ﷺ = 4 mudd). Cela représente environ 653 kg de blé selon les estimations modernes. Le taux est de 1/10 (ʿushr) si irrigué par les pluies, et 1/20 si irrigué artificiellement.' },
            { t: 'h', v: 'Niṣāb (النِّصَاب) de l\'or' },
            { t: 'p', v: '"لا زكاة من الذهب في أقل من عشرين دينارًا" — Zakāt (الزَّكَاة) sur l\'or en deçà de 20 dinars. Sur 20 dinars ou plus, on sort le rub\' al-ʿushr (1/4 du dixième = 2,5%). Si le montant dépasse 20, on calcule proportionnellement.' },
            { t: 'ar', v: 'لَا زَكَاةَ مِنَ الذَّهَبِ فِي أَقَلَّ مِن عِشرِينَ دِينَارًا', n: '« Pas de al-zakāt (الزَّكَاة) sur l\'or en deçà de vingt dinars. » — Risāla' },
            { t: 'h', v: 'Niṣāb (النِّصَاب) de l\'argent' },
            { t: 'p', v: '"لا زكاة من الفضة في أقل من مائتي درهم" — Zakāt (الزَّكَاة) sur l\'argent en deçà de 200 dirhams (= 5 awāqī). Sur 200 dirhams : on sort 5 dirhams (= 2,5%). Pour ce qui dépasse, on calcule proportionnellement.' },
            { t: 'h', v: 'Combinaison de l\'or et l\'argent' },
            { t: 'p', v: '"يُجمع الذهب والفضة في Zakāt (الزكاة)" — l\'or et l\'Niṣāb (النِّصَاب). Exemple : si quelqu\'un possède 100 dirhams d\'argent et 10 dinars d\'or, Zakāt (الزَّكَاة) sur l\'ensemble.' },
            { t: 'note', v: 'Zakāt (الزَّكَاة) sur l\'or, l\'argent et les marchandises de commerce est uniformément le rub\' al-ʿushr = 2,5% du capital.' }
          ]
        },

        {
          id: 'zak-03',
          title: 'Les Biens Soumis à Zakāt (الزَّكَاة)',
          status: 'available',
          content: [
            { t: 'lead', v: 'La Risāla détaille les catégories de biens soumis à Zakāt (الزَّكَاة), avec les règles de combinaison (ḍamm) des denrées similaires et les cas particuliers.' },
            { t: 'h', v: 'Les récoltes agricoles — règles de combinaison' },
            { t: 'ul', v: [
              '<strong>Combinables :</strong> le blé (qamḥ), l\'orge (shaʿīr) et le sult (orge fine) Niṣāb (النِّصَاب).',
              '<strong>Combinables :</strong> toutes les variétés de légumineuses (qiṭالنِّيَّة) entre elles.',
              '<strong>Combinables :</strong> toutes les variétés de dattes entre elles.',
              '<strong>Non combinables entre eux :</strong> le riz, le millet (dukhn), le sorgho (dhura) — chacun est un type à part et ne se combine pas avec les autres.',
              '<strong>Olives :</strong> soumises à Zakāt (الزَّكَاة) si elles atteignent 5 awsāq d\'huile.',
              '<strong>Fruits et légumes frais :</strong> Zakāt (الزَّكَاة) sur eux.'
            ] },
            { t: 'h', v: 'Les marchandises de commerce (ʿurūḍ al-tijāra)' },
            { t: 'p', v: 'Zakāt (الزَّكَاة) sur les marchandises détenues simplement, à moins qu\'elles ne soient destinées au commerce. Si elles sont vendues après un الحَوْل ou plus, Zakāt (الزَّكَاة) est due sur leur prix de vente — pour un seul الحَوْل, quelle que soit la durée de détention précédant la vente.' },
            { t: 'h', v: 'Les mines (maʿdin)' },
            { t: 'p', v: 'Zakāt (الزَّكَاة) est due sur ce qui sort d\'une mine d\'or ou d\'argent si le poids atteint 20 dinars d\'or ou 5 awāqī d\'argent. Elle se calcule au moment de l\'extraction, au taux de rub\' al-ʿushr (2,5%). Si la mine est continue, tout ce qui en sort est ajouté au précédent. Si elle s\'arrête et qu\'un autre en prend possession, on recommence à zéro.' },
            { t: 'h', v: 'Les troupeaux (المَاشِيَة)' },
            { t: 'ul', v: [
              'La Risāla préNiṣāb (النِّصَاب) pour les chameaux, les bovins et les ovins selon des tableaux précis.',
              'Ne sont pas acceptéZakāt (الزَّكَاة) : les jeunes animaux, les bêtes malades, les vieux animaux, les femelles gestantes, les mâles reproducteurs et les meilleurs animaux du troupeau.',
              'Zakāt (الزَّكَاة) n\'est pas due sur les animaux nourris artificiellement (ʿalab) uniquement.'
            ] }
          ]
        },

        {
          id: 'zak-04',
          title: 'Zakāt (الزَّكَاة) al-Fiṭr',
          status: 'available',
          content: [
            { t: 'lead', v: 'Zakāt (الزَّكَاة) al-Fiṭr est une obligation particulière liée à la fin du mois de Ramadan. La Risāla en précise le statut, le montant, les bénéficiaires et le moment d\'acquittement.' },
            { t: 'ar', v: 'وَزَكَاةُ الفِطرِ سُنَّةٌ وَاجِبَةٌ، فَرَضَهَا رَسُولُ الله ﷺ عَلَى كُلِّ كَبِيرٍ أَو صَغِيرٍ، ذَكَرٍ أَو أُنثَى، حُرٍّ أَو عَبدٍ مِنَ المُسلِمِينَ صَاعًا عَن كُلِّ نَفسٍ', n: '« La al-zakāt (الزَّكَاة) al-Fiṭr est une السُّنَّة obligatoire. Elle a été imposée par le Prophète ﷺ sur tout Muslim, grand ou petit, homme ou femme, libre ou serviteur — un ṣāʿ par personne. »' },
            { t: 'h', v: 'Statut, montant et responsabilités' },
            { t: 'ul', v: [
              '<strong>Statut :</strong> Sunna (السُّنَّة) Wājib (وَاجِب)a (السُّنَّة obligatoire).',
              '<strong>Montant :</strong> un ṣāʿ (= 4 mudd selon le ṣāʿ du Prophète ﷺ) par personne.',
              '<strong>Responsabilité :</strong> le maîZakāt (الزَّكَاة) al-Fiṭr de son serviteur (mmlūk). Le père acquitte celle de son enfant mineur qui n\'a pas de biens propres.',
              'Le chef de famille l\'acquitte aussi pour son épouse et les personnes à sa charge.'
            ] },
            { t: 'h', v: 'De quoi peut-elle être acquittée ?' },
            { t: 'p', v: '"تُؤدَّى من جُلِّ عيش أهل ذلك البلد" — elle s\'acquitte à partir de la nourriture principale des habitants de la région : blé, orge, sorgho, dattes, fromage sec (aqiṭ), raisins secs, millet, riz. Si le blé d\'épeautre (ʿalas) est la nourriture principale d\'une région, elle peut aussi être acquittée en cette denrée.' },
            { t: 'h', v: 'Le moment d\'acquittement' },
            { t: 'ul', v: [
              '<strong>Temps d\'obligation :</strong> le lever de l\'aube (الفَجْر) du jour de l\'Eid al-Fiṭr, selon Ibn al-Qāsim et ce que Zurrūq établit comme l\'avis dominant de l\'école.',
              '<strong>Il est permis</strong> de l\'acquitter un ou deux jours avant l\'Eid.',
              '<strong>Sunna (السُّنَّة) :</strong> l\'acquitter avant d\'aller sur le lieu de la prière de l\'Eid.'
            ] },
            { t: 'h', v: 'Pratique recommandée le jour de l\'Eid' },
            { t: 'p', v: 'Il est recommandé pour l\'Eid al-Fiṭr de manger avant d\'aller à la prière. Pour l\'Eid al-Adha, on n\'est pas obligé de manger avant (on attend de manger de l\'animal sacrifié). Il est recommandé dans les deux Eid de prendre un chemin différent à l\'aller et au retour.' },
            { t: 'note', v: 'Différence entre l\'Eid al-Fiṭr et l\'Eid al-Adha : manger avant la prièSunna (السُّنَّة) pour l\'Eid al-Fiṭr, mais pas pour l\'Eid al-Adha.' }
          ]
        },

        {
          id: 'zak-05',
          title: 'Les Bénéficiaires et Règles de Distribution',
          status: 'available',
          content: [
            { t: 'lead', v: 'Zakāt (الزَّكَاة) obéit à des règles précises. La Risāla mentionne les règles de partenariat dans les troupeaux (khulṭāʾ) et ce qui ne peut pas êZakāt (الزَّكَاة).' },
            { t: 'h', v: 'Les huit catégories de bénéficiaires (Coran 9:60)' },
            { t: 'ul', v: [
              '<strong>1. Al-Fuqarāʾ</strong> — les pauvres (sans ressources suffisantes).',
              '<strong>2. Al-Masākīn</strong> — les nécessiteux (avec quelques ressources insuffisantes).',
              '<strong>3. Al-ʿĀmilīn ʿalayhā</strong> — Zakāt (الزَّكَاة).',
              '<strong>4. Al-Muʾallafa qulūbuhum</strong> — ceux dont les cœurs sont à gagner à l\'Islam.',
              '<strong>5. Al-Riqāb</strong> — l\'affranchissement des esclaves.',
              '<strong>6. Al-Ghārimīn</strong> — les endettés incapables de rembourser.',
              '<strong>7. Fī sabīl Allāh</strong> — dans la voie d\'Allāh (les combattants).',
              '<strong>8. Ibn al-Sabīl</strong> — le voyageur sans ressources.'
            ] },
            { t: 'h', v: 'La règle des partenaires (khulṭāʾ)' },
            { t: 'p', v: '"كل خليطين فإنهما يتزادان بينهما بالسوية" — deux partenaires dans l\'élevage se compensent mutuellement de façon équitable. Il n\'Zakāt (الزَّكَاة) sur celui dont la part personnelle n\'Niṣāb (النِّصَاب). On ne doit ni séparer ce qui est réuni ni réunir ce qui est séparé pour avantager ou déZakāt (الزَّكَاة) — surtout en fin de الحَوْل.' },
            { t: 'h', v: 'Ce qui ne peut pas être prélevé Zakāt (الزَّكَاة)' },
            { t: 'ul', v: [
              'Les veaux (ʿajājīl) dans les bovins, ni les jeunes chameaux (fiṣlān) dans les chameaux — ils sont comptabilisés mais pas pris.',
              'Le bouc reproducteur (tays).',
              'Les animaux très âgés (harima).',
              'Les femelles gestantes (mākhiḍ).',
              'Le lait (ḥalūb al-katam — la laitière réservée).',
              'La brebis nourricière.',
              'Les meilleurs animaux du troupeau.'
            ] },
            { t: 'note', v: 'Principe clé : Zakāt (الزَّكَاة) doit être prélevée sur un animal de valeur moyenne du troupeau, sans prendre ni le meilleur ni le plus mauvais. Le collecteur ne peut pas prendre ce qu\'il veut, ni le propriétaire donner le moins bon.' }
          ]
        },

        {
          id: "zak-06",
          title: "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0645\u064e\u0627\u0634\u0650\u064a\u064e\u0629 \u2014 Tableaux D\u00e9taill\u00e9s des Troupeaux",
          status: "available",
          content: [
          {"t": "lead", "v": "La \u0632\u064e\u0643\u064e\u0627\u0629 sur les troupeaux (\u0627\u0644\u0645\u064e\u0627\u0634\u0650\u064a\u064e\u0629) concerne trois types d'animaux : les chameaux (\u0625\u0650\u0628\u0650\u0644), les bovins (\u0628\u064e\u0642\u064e\u0631) et les ovins/caprins (\u063a\u064e\u0646\u064e\u0645). Chaque type a son propre tableau de \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 et de ce qui est d\u00fb. Ces tableaux sont donn\u00e9s par la Ris\u0101la d'Ibn Ab\u012b Zayd et d\u00e9velopp\u00e9s par les savants malikites."},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0625\u0650\u0628\u0650\u0644 \u2014 Chameaux"},
          {"t":"ul","v":[
            "<strong>1 \u00e0 4 chameaux :</strong> rien (ni\u1e63\u0101b non atteint).",
            "<strong>5 \u00e0 9 :</strong> 1 brebis (\u0634\u064e\u0627\u0629).",
            "<strong>10 \u00e0 14 :</strong> 2 brebis.",
            "<strong>15 \u00e0 19 :</strong> 3 brebis.",
            "<strong>20 \u00e0 24 :</strong> 4 brebis.",
            "<strong>25 \u00e0 35 :</strong> 1 \u0628\u0650\u0646\u062a\u064f \u0645\u064e\u062e\u064e\u0627\u0636 (chamelle ayant compl\u00e9t\u00e9 1 an et entrant dans sa 2\u00e8me ann\u00e9e).",
            "<strong>36 \u00e0 45 :</strong> 1 \u0628\u0650\u0646\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646 (chamelle ayant compl\u00e9t\u00e9 2 ans, entrant dans sa 3\u00e8me).",
            "<strong>46 \u00e0 60 :</strong> 1 \u062d\u0650\u0642\u064e\u0651\u0629 (chamelle ayant compl\u00e9t\u00e9 3 ans, entrant dans sa 4\u00e8me).",
            "<strong>61 \u00e0 75 :</strong> 1 \u062c\u064e\u0630\u064e\u0639\u064e\u0629 (chamelle ayant compl\u00e9t\u00e9 4 ans, entrant dans sa 5\u00e8me).",
            "<strong>76 \u00e0 90 :</strong> 2 \u0628\u0650\u0646\u062a\u064e\u0627 \u0644\u064e\u0628\u064f\u0648\u0646.",
            "<strong>91 \u00e0 120 :</strong> 2 \u062d\u0650\u0642\u064e\u0651\u062a\u064e\u0627\u0646.",
            "<strong>Au-del\u00e0 de 120 :</strong> pour chaque 40, une \u0628\u0650\u0646\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646 suppl\u00e9mentaire ; pour chaque 50, une \u062d\u0650\u0642\u064e\u0651\u0629."
          ]},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0628\u064e\u0642\u064e\u0631 \u2014 Bovins"},
          {"t":"ul","v":[
            "<strong>1 \u00e0 29 :</strong> rien (ni\u1e63\u0101b non atteint).",
            "<strong>30 \u00e0 39 :</strong> 1 \u062a\u064e\u0628\u0650\u064a\u0639 (jeune bovin, m\u00e2le ou femelle, ayant compl\u00e9t\u00e9 2 ans et entrant dans sa 3\u00e8me).",
            "<strong>40 \u00e0 59 :</strong> 1 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629 (vache ayant compl\u00e9t\u00e9 3 ans, entrant dans sa 4\u00e8me).",
            "<strong>60 \u00e0 69 :</strong> 2 \u062a\u064e\u0628\u0650\u064a\u0639.",
            "<strong>70 \u00e0 79 :</strong> 1 \u062a\u064e\u0628\u0650\u064a\u0639 + 1 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629.",
            "<strong>80 \u00e0 89 :</strong> 2 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629.",
            "<strong>Au-del\u00e0 :</strong> pour chaque 30, un \u062a\u064e\u0628\u0650\u064a\u0639 ; pour chaque 40, une \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629."
          ]},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u063a\u064e\u0646\u064e\u0645 \u2014 Ovins et Caprins"},
          {"t":"ul","v":[
            "<strong>1 \u00e0 39 :</strong> rien.",
            "<strong>40 \u00e0 120 :</strong> 1 \u0634\u064e\u0627\u0629 (1 ovin ou caprin).",
            "<strong>121 \u00e0 200 :</strong> 2 \u0634\u0650\u064a\u064e\u0627\u0647.",
            "<strong>201 \u00e0 399 :</strong> 3 \u0634\u0650\u064a\u064e\u0627\u0647.",
            "<strong>400 \u00e0 499 :</strong> 4 \u0634\u0650\u064a\u064e\u0627\u0647.",
            "<strong>Au-del\u00e0 de 400 :</strong> pour chaque 100 t\u00eates suppl\u00e9mentaires, 1 \u0634\u064e\u0627\u0629 de plus.",
            "Ovins et caprins SE COMBINENT pour le ni\u1e63\u0101b (ils sont du m\u00eame type)."
          ]},
          {"t": "h", "v": "R\u00e8gles communes aux troupeaux"},
          {"t":"ul","v":[
            "<strong>Ne pas prendre :</strong> les jeunes animaux (\u0639\u064e\u062c\u064e\u0627\u062c\u0650\u064a\u0644 chez les bovins, \u0641\u0650\u0635\u064e\u0627\u0644 chez les chameaux), les femelles gestantes (\u0645\u064e\u0627\u062e\u0650\u0636), les animaux tr\u00e8s vieux (\u0647\u064e\u0631\u0650\u0645\u064e\u0629), le bouc reproducteur (\u062a\u064e\u064a\u0633), le meilleur animal du troupeau.",
            "<strong>Prendre :</strong> un animal de valeur moyenne du troupeau \u2014 ni le meilleur ni le plus mauvais.",
            "<strong>\u0627\u0644\u062e\u064f\u0644\u0637\u064e\u0629 (partenariat) :</strong> deux \u00e9leveurs qui mettent leur troupeau en commun se partagent la \u0632\u064e\u0643\u064e\u0627\u0629 proportionnellement, m\u00eame si individuellement aucun n'atteint le ni\u1e63\u0101b.",
            "\u0627\u0644\u062e\u064f\u0644\u0637\u064e\u0629 exige : troupeau r\u00e9uni (m\u00eame p\u00e2turage, m\u00eame source d'eau, m\u00eame berger, m\u00eame trayeur), pendant tout ou la majorit\u00e9 du \u062d\u064e\u0648\u0652\u0644.",
            "Il est interdit de s\u00e9parer les troupeaux r\u00e9unis ou de r\u00e9unir les troupeaux s\u00e9par\u00e9s pour diminuer ou augmenter la \u0632\u064e\u0643\u064e\u0627\u0629."
          ]},
          {"t": "note", "v": "La \u0632\u064e\u0643\u064e\u0627\u0629 ne s'applique qu'aux animaux \u00e9lev\u00e9s en p\u00e2turage libre (\u0627\u0644\u0645\u0627\u0634\u064a\u0629 \u0627\u0644\u0633\u0627\u0626\u0645\u0629 \u2014 qui paissent la majorit\u00e9 de l'ann\u00e9e). Les animaux nourris artificiellement toute l'ann\u00e9e (\u0627\u0644\u0645\u0639\u0644\u0648\u0641\u0629) : pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur eux selon le rite malikite (position du Im\u0101m M\u0101lik dans la المُدَوَّنَة)."}
          ]
        }

,

        {
          id: "zak-07",
          title: "\u0627\u0644\u0632\u064e\u0651\u0643\u064e\u0627\u0629 \u0641\u064a \u0627\u0644\u0639\u064e\u0635\u0652\u0631 \u0627\u0644\u062d\u064e\u062f\u0650\u064a\u062b \u2014 Revenus, Salaires et Questions Contemporaines",
          status: "available",
          content: [
          {"t": "lead", "v": "Le الفِقْه contemporain a \u00e9tendu les principes classiques de la \u0632\u064e\u0643\u064e\u0627\u0629 aux r\u00e9alit\u00e9s \u00e9conomiques modernes : salaires, comptes bancaires, actions, assurances, etc. Ce chapitre pr\u00e9sente les positions malikites contemporaines issues de doctrine-malikite.fr et des savants."},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0631\u064e\u0651\u0648\u064e\u0627\u062a\u0650\u0628 \u2014 Zak\u0101t sur les salaires"},
          {"t": "p", "v": "La question centrale : comment appliquer le \u062d\u064e\u0648\u0652\u0644 \u00e0 des revenus per\u00e7us mensuellement ? La position malikite contemporaine dominante :"},
          {"t":"ul","v":[
            "On ne calcule pas le \u062d\u064e\u0648\u0652\u0644 sur chaque salaire s\u00e9par\u00e9ment (trop complexe en pratique).",
            "<strong>M\u00e9thode pratique adopt\u00e9e :</strong> on choisit une date anniversaire fixe (d\u00e9but de l'ann\u00e9e islamique ou autre). On comptabilise l'\u00e9pargne disponible \u00e0 cette date. Si elle d\u00e9passe le \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 \u2192 \u0632\u064e\u0643\u064e\u0627\u0629 de 2,5%.",
            "On peut aussi additionner tous les salaires sur l'ann\u00e9e, d\u00e9duire les d\u00e9penses essentielles et les dettes, et zak\u0101tter sur ce qui reste si \u2265 \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628.",
            "Les d\u00e9penses essentielles (logement, nourriture, v\u00eatements habituels, soins m\u00e9dicaux) sont d\u00e9duites avant le calcul.",
            "Les dettes \u00e0 court terme sont d\u00e9duites \u2014 pas les dettes \u00e0 long terme (selon les savants)."
          ]},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0623\u064e\u0633\u0647\u064f\u0645 \u0648\u0627\u0644\u0635\u064f\u0651\u0646\u062f\u064f\u0648\u0642 \u2014 Actions en bourse et fonds d'investissement"},
          {"t":"ul","v":[
            "<strong>Soci\u00e9t\u00e9s commerciales :</strong> la \u0632\u064e\u0643\u064e\u0627\u0629 est due sur la valeur totale des actions \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644 (capital + b\u00e9n\u00e9fices) au taux de 2,5%.",
            "<strong>Soci\u00e9t\u00e9s industrielles :</strong> les machines et immeubles sont exon\u00e9r\u00e9s (comme l'outillage personnel) ; on zak\u0101tte sur les marchandises destin\u00e9es \u00e0 la vente et les liquidit\u00e9s.",
            "<strong>Fonds islamiques :</strong> on zak\u0101tte sur la valeur liquidative de la part \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644.",
            "Actions d\u00e9tenues moins d'un \u062d\u064e\u0648\u0652\u0644 : m\u00eame r\u00e8gle que les marchandises \u2014 zak\u0101t due sur le prix de vente \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644 depuis l'acquisition."
          ]},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u062a\u064e\u0651\u0623\u0645\u0650\u064a\u0646 \u0648\u0627\u0644\u062a\u064e\u0651\u0642\u064e\u0627\u0639\u064f\u062f \u2014 Assurances et fonds de retraite"},
          {"t":"ul","v":[
            "<strong>Fonds de retraite (non r\u00e9cup\u00e9rable avant la retraite) :</strong> pas de \u0632\u064e\u0643\u064e\u0627\u0629 annuelle tant qu'on ne peut pas y acc\u00e9der. D\u00e8s la r\u00e9ception des fonds : un seul \u062d\u064e\u0648\u0652\u0644 de \u0632\u064e\u0643\u064e\u0627\u0629 (comme la cr\u00e9ance).",
            "<strong>Assurance-vie \u00e0 capitalisation :</strong> zak\u0101t sur la valeur de rachat (la valeur accessible) chaque ann\u00e9e si \u2265 \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628.",
            "<strong>Assurances non islamiques :</strong> question complexe \u2014 certains savants disent de zak\u0101tter sur ce qu'on paie dedans ; d'autres sur ce qu'on pourrait recevoir. Sujet de fatwas en cours."
          ]},
          {"t": "h", "v": "\u0632\u064e\u0643\u064e\u0627\u0629 \u0627\u0644\u0641\u0650\u0637\u0631 \u2014 B\u00e9n\u00e9ficiaires et r\u00e8gles suppl\u00e9mentaires"},
          {"t":"ul","v":[
            "La \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 NE peut pas \u00eatre donn\u00e9e \u00e0 un non-Muslim (contrairement \u00e0 la zak\u0101t al-m\u0101l o\u00f9 les \u0627\u0644\u0645\u064f\u0624\u064e\u0644\u064e\u0651\u0641\u064e\u0629 \u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645 peuvent inclure des non-Muslims).",
            "On ne peut pas la donner \u00e0 ceux l\u00e9galement \u00e0 notre charge (parents, enfants, \u00e9pouse).",
            "La \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 doit \u00eatre distribu\u00e9e localement en priorit\u00e9 \u2014 transport vers une autre ville seulement s'il y a surplus ou besoin plus grand.",
            "<strong>La r\u00e9partition entre les 8 cat\u00e9gories :</strong> pour la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631, on donne aux fuqar\u0101\u02be et mas\u0101k\u012bn en priorit\u00e9 \u2014 les autres cat\u00e9gories sont secondaires.",
            "<strong>Peut-on la payer en argent ?</strong> La majorit\u00e9 des savants malikites classiques dit non (en nourriture). Certains contemporains l'autorisent si la nourriture est difficile \u00e0 distribuer. La s\u00e9curit\u00e9 est de donner en nourriture."
          ]},
          {"t": "h", "v": "\u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 en valeurs actuelles (estimation)"},
          {"t":"ul","v":[
            "<strong>Or :</strong> 20 dinars = environ 85 grammes d'or (estimation contemporaine la plus usit\u00e9e).",
            "<strong>Argent :</strong> 200 dirhams = environ 595 grammes d'argent.",
            "<strong>Utiliser lequel ?</strong> Divergence contemporaine. Utiliser le ni\u1e63\u0101b de l'argent (plus bas) avantage les pauvres ; utiliser celui de l'or (plus haut) avantage les propri\u00e9taires. Beaucoup de savants contemporains recommandent le ni\u1e63\u0101b de l'argent pour maximiser la zak\u0101t."
          ]},
          {"t": "note", "v": "Point cl\u00e9 de la zak\u0101t contemporaine : l'intention doit accompagner le paiement. Payer via virement bancaire ou une application est valide \u00e0 condition que l'intention soit form\u00e9e. Il est recommand\u00e9 de pr\u00e9ciser mentalement \u00ab ceci est ma zak\u0101t \u00bb au moment du paiement ou lors de sa s\u00e9paration du reste des fonds."}
          ]
        },

      ],

      quiz: {
        id: 'quiz-al-zakāt (الزَّكَاة)',
        title: 'Questionnaire — Zakāt (الزَّكَاة)',
        status: 'available',
        score: null,
        questions: [
          {
            id: "q-zak-01",
            text: "La <strong>\u0632\u064e\u0643\u064e\u0627\u0629</strong> sur les r\u00e9coltes agricoles (\u0627\u0644\u062d\u064e\u0631\u0652\u062b) est due \u00e0 quel moment ?",
            choices: [
              {id:"a",text:"Apr\u00e8s un \u062d\u064e\u0648\u0652\u0644 (ann\u00e9e lunaire)"},
              {id:"b",text:"\u00c0 la r\u00e9colte (\u064a\u064e\u0648\u0652\u0645\u064e \u0627\u0644\u062d\u064e\u0635\u064e\u0627\u062f)"},
              {id:"c",text:"Au d\u00e9but de chaque mois lunaire"},
              {id:"d",text:"En m\u00eame temps que la \u0632\u064e\u0643\u064e\u0627\u0629 sur l'or"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0627\u0644\u062d\u064e\u0631\u062b\u064f : \u0641\u064e\u064a\u064e\u0648\u0645\u064e \u062d\u064e\u0635\u064e\u0627\u062f\u0650\u0647\u0650 \u00bb \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629 agricole est due le jour de la r\u00e9colte/moisson. Elle n'attend pas le \u062d\u064e\u0648\u0652\u0644, contrairement \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 sur l'or, l'argent et les troupeaux."
          },
          {
            id: "q-zak-02",
            text: "Quel est le <strong>\u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628</strong> des r\u00e9coltes agricoles ?",
            choices: [
              {id:"a",text:"3 \u0623\u064e\u0648\u0633\u064f\u0642 (\u0648\u064e\u0633\u0652\u0642)"},
              {id:"b",text:"5 \u0623\u064e\u0648\u0633\u064f\u0642"},
              {id:"c",text:"10 \u0623\u064e\u0648\u0633\u064f\u0642"},
              {id:"d",text:"20 \u0623\u064e\u0648\u0633\u064f\u0642"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u0632\u064e\u0643\u064e\u0627\u0629\u064e \u0645\u0650\u0646\u064e \u0627\u0644\u062d\u064e\u0628\u0650\u0651 \u0648\u064e\u0627\u0644\u062b\u064e\u0651\u0645\u064e\u0631\u0650 \u0641\u0650\u064a \u0623\u064e\u0642\u064e\u0644\u064e\u0651 \u0645\u0650\u0646 \u062e\u064e\u0645\u0633\u064e\u0629\u0650 \u0623\u064e\u0648\u0633\u064f\u0642\u064d \u00bb \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 est 5 \u0623\u064e\u0648\u0633\u064f\u0642. Un \u0648\u064e\u0633\u0652\u0642 = 60 \u0635\u064e\u0627\u0639 selon le \u0635\u064e\u0627\u0639 du Proph\u00e8te \ufdfa."
          },
          {
            id: "q-zak-03",
            text: "Le taux de \u0632\u064e\u0643\u064e\u0627\u0629 agricole varie-t-il ?",
            choices: [
              {id:"a",text:"Toujours 2,5%"},
              {id:"b",text:"Toujours 10% (\u0639\u064f\u0634\u0652\u0631)"},
              {id:"c",text:"10% si irrigation naturelle (pluie/source), 5% si irrigation artificielle"},
              {id:"d",text:"Toujours 5%"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : \u00ab le dixi\u00e8me si la terre est irrigu\u00e9e naturellement (pluie, sources) ; le demi-dixi\u00e8me si irrigu\u00e9e par des moyens humains (machines) \u00bb. Le co\u00fbt de l'irrigation r\u00e9duit la quote-part."
          },
          {
            id: "q-zak-04",
            text: "Quel est le <strong>\u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628</strong> de la \u0632\u064e\u0643\u064e\u0627\u0629 sur l'or ?",
            choices: [
              {id:"a",text:"10 dinars"},
              {id:"b",text:"20 dinars"},
              {id:"c",text:"40 dinars"},
              {id:"d",text:"85 grammes"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u0632\u064e\u0643\u064e\u0627\u0629\u064e \u0645\u0650\u0646\u064e \u0627\u0644\u0630\u064e\u0651\u0647\u064e\u0628\u0650 \u0641\u0650\u064a \u0623\u064e\u0642\u064e\u0644\u064e\u0651 \u0645\u0650\u0646 \u0639\u0650\u0634\u0631\u0650\u064a\u0646\u064e \u062f\u0650\u064a\u0646\u064e\u0627\u0631\u064b\u0627 \u00bb \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 de l'or est 20 dinars. Sur ce montant on sort le \u0631\u064f\u0628\u064f\u0639\u064f \u0627\u0644\u0639\u064f\u0634\u0652\u0631 (2,5%)."
          },
          {
            id: "q-zak-05",
            text: "Quel est le <strong>\u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628</strong> de la \u0632\u064e\u0643\u064e\u0627\u0629 sur l'argent ?",
            choices: [
              {id:"a",text:"100 dirhams"},
              {id:"b",text:"200 dirhams (5 \u0623\u064e\u0648\u064e\u0627\u0642\u0650\u064a)"},
              {id:"c",text:"300 dirhams"},
              {id:"d",text:"500 dirhams"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u0632\u064e\u0643\u064e\u0627\u0629\u064e \u0645\u0650\u0646\u064e \u0627\u0644\u0641\u0650\u0636\u064e\u0651\u0629\u0650 \u0641\u0650\u064a \u0623\u064e\u0642\u064e\u0644\u064e\u0651 \u0645\u0650\u0646 \u0645\u0650\u0627\u0626\u064e\u062a\u064e\u064a \u062f\u0650\u0631\u0647\u064e\u0645\u064d \u00bb \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 de l'argent est 200 dirhams (= 5 \u0623\u064e\u0648\u064e\u0627\u0642\u0650\u064a). Sur ce montant on sort 5 dirhams (2,5%)."
          },
          {
            id: "q-zak-06",
            text: "<strong>PI\u00c8GE :</strong> Aminata poss\u00e8de 19 dinars d'or et 200 dirhams d'argent. La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due ?",
            choices: [
              {id:"a",text:"Non \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 de l'or (20 dinars) n'est pas atteint"},
              {id:"b",text:"Oui \u2014 on combine l'or et l'argent, le \u0646\u0650\u0635\u064e\u0627\u0628 de l'argent est atteint"},
              {id:"c",text:"Seulement sur les 200 dirhams d'argent"},
              {id:"d",text:"Non \u2014 19 dinars et 200 dirhams ne forment pas un \u0646\u0650\u0635\u064e\u0627\u0628 complet"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u064a\u064f\u062c\u0645\u064e\u0639\u064f \u0627\u0644\u0630\u064e\u0651\u0647\u064e\u0628\u064f \u0648\u064e\u0627\u0644\u0641\u0650\u0636\u064e\u0651\u0629\u064f \u0641\u0650\u064a \u0627\u0644\u0632\u064e\u0651\u0643\u064e\u0627\u0629\u0650 \u00bb \u2014 or et argent se combinent. Les 200 dirhams d'argent seuls atteignent le \u0646\u0650\u0635\u064e\u0627\u0628 de l'argent. Donc la \u0632\u064e\u0643\u064e\u0627\u0629 est due sur l'ensemble."
          },
          {
            id: "q-zak-07",
            text: "<strong>PI\u00c8GE MALIKITE :</strong> Omar poss\u00e8de des bijoux personnels en or (usage courant, non destin\u00e9s au commerce). Doit-il la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 tout or impose la \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"b",text:"Non \u2014 le rite malikite exempte les bijoux personnels d'usage courant"},
              {id:"c",text:"Oui mais au taux de 1,25%"},
              {id:"d",text:"Seulement si leur valeur d\u00e9passe le \u0646\u0650\u0635\u064e\u0627\u0628"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Pas de zak\u00e2t sur les bijoux (sauf s'ils sont utilis\u00e9s pour le commerce ou \u00e9pargn\u00e9s pour augmenter leur valeur et les vendre) \u00bb. Cette exemption des bijoux personnels est une sp\u00e9cificit\u00e9 malikite importante."
          },
          {
            id: "q-zak-08",
            text: "Quand la \u0632\u064e\u0643\u064e\u0627\u0629 sur les marchandises de commerce (\u0639\u064f\u0631\u064f\u0648\u0636\u064f \u0627\u0644\u062a\u0650\u0651\u062c\u064e\u0627\u0631\u064e\u0629) devient-elle due ?",
            choices: [
              {id:"a",text:"D\u00e8s l'achat si elles atteignent le \u0646\u0650\u0635\u064e\u0627\u0628"},
              {id:"b",text:"Apr\u00e8s 6 mois"},
              {id:"c",text:"Apr\u00e8s un \u062d\u064e\u0648\u0652\u0644 depuis l'acquisition du capital \u2014 calcul\u00e9e sur le prix de vente"},
              {id:"d",text:"Au moment du b\u00e9n\u00e9fice"},
            ],
            correctId: "c",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u0632\u064e\u0643\u064e\u0627\u0629\u064e \u0641\u0650\u064a \u0627\u0644\u0639\u064f\u0631\u064f\u0648\u0636\u0650 \u062d\u064e\u062a\u064e\u0651\u0649 \u062a\u064e\u0643\u064f\u0648\u0646\u064e \u0644\u0650\u0644\u062a\u0650\u0651\u062c\u064e\u0627\u0631\u064e\u0629\u0650, \u0641\u064e\u0625\u0650\u0630\u064e\u0627 \u0628\u0650\u064a\u0639\u064e\u062a \u0628\u064e\u0639\u062f\u064e \u062d\u064e\u0648\u0644\u064d \u0623\u064e\u0648 \u0623\u064e\u0643\u062b\u064e\u0631\u064e \u00bb \u2014 due sur le prix de vente apr\u00e8s un \u062d\u064e\u0648\u0652\u0644, m\u00eame si les marchandises ont valu moins pendant l'ann\u00e9e."
          },
          {
            id: "q-zak-09",
            text: "<strong>PI\u00c8GE COMPLEXE :</strong> Khalid poss\u00e8de 2000\u20ac en janvier, 300\u20ac en juillet, 1500\u20ac en d\u00e9cembre. La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due ?",
            choices: [
              {id:"a",text:"Sur 2000\u20ac (d\u00e9but d'ann\u00e9e)"},
              {id:"b",text:"Aucune \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 n'\u00e9tait plus atteint en juillet"},
              {id:"c",text:"Sur 1500\u20ac si le \u0646\u0650\u0635\u064e\u0627\u0628 est atteint en fin d'ann\u00e9e"},
              {id:"d",text:"Sur la moyenne : 1266\u20ac"},
            ],
            correctId: "c",
            explanation: "Les malikites consid\u00e8rent : si le \u0646\u0650\u0635\u064e\u0627\u0628 est atteint au D\u00c9BUT et \u00e0 la FIN de l'ann\u00e9e lunaire, la \u0632\u064e\u0643\u064e\u0627\u0629 est due. La cl\u00e9 est le montant en FIN de \u062d\u064e\u0648\u0652\u0644. 1500\u20ac \u2265 \u0646\u0650\u0635\u064e\u0627\u0628 \u2192 \u0632\u064e\u0643\u064e\u0627\u0629 due sur 1500\u20ac."
          },
          {
            id: "q-zak-10",
            text: "La <strong>\u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631</strong> est-elle due sur les enfants en bas \u00e2ge ?",
            choices: [
              {id:"a",text:"Non \u2014 les enfants n'y sont pas assujettis"},
              {id:"b",text:"Oui \u2014 le p\u00e8re (ou tuteur) l'acquitte pour eux"},
              {id:"c",text:"Seulement si l'enfant a plus de 7 ans"},
              {id:"d",text:"Seulement si l'enfant a des revenus propres"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0641\u064e\u0631\u064e\u0636\u064e\u0647\u064e\u0627 \u0631\u064e\u0633\u064f\u0648\u0644\u064f \u0627\u0644\u0644\u0647 \ufdfa \u0639\u064e\u0644\u064e\u0649 \u0643\u064f\u0644\u0650\u0651 \u0643\u064e\u0628\u0650\u064a\u0631\u064d \u0623\u064e\u0648 \u0635\u064e\u063a\u0650\u064a\u0631\u064d \u00bb \u2014 elle est due pour tout le monde. Le p\u00e8re acquitte celle de son enfant mineur sans biens propres."
          },
          {
            id: "q-zak-11",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 en argent liquide selon le rite malikite ?",
            choices: [
              {id:"a",text:"Oui c'est m\u00eame pr\u00e9f\u00e9rable"},
              {id:"b",text:"Non \u2014 elle doit \u00eatre donn\u00e9e en nourriture (denr\u00e9e)"},
              {id:"c",text:"Oui si l'الإِمَام l'autorise"},
              {id:"d",text:"Permis avec d\u00e9saccord"},
            ],
            correctId: "b",
            explanation: "Selon la Ris\u0101la, la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 s'acquitte en nourriture. Les savants malikites classiques n'autorisent pas le remplacement par l'argent, contrairement \u00e0 l'avis hanafite. Certains contemporains ont ouvert \u00e0 l'argent mais c'est minoritaire dans l'\u00e9cole."
          },
          {
            id: "q-zak-12",
            text: "Sur quel montant calcule-t-on la \u0632\u064e\u0643\u064e\u0627\u0629 sur un capital commercial ?",
            choices: [
              {id:"a",text:"Sur le capital initial seulement"},
              {id:"b",text:"Sur le b\u00e9n\u00e9fice seulement"},
              {id:"c",text:"Sur le total (capital + b\u00e9n\u00e9fice net) \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644"},
              {id:"d",text:"Sur la moyenne annuelle"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : \u00ab le montant de la zak\u00e2t comprend le total du b\u00e9n\u00e9fice net et du capital apr\u00e8s l'\u00e9coulement de l'ann\u00e9e lunaire \u00bb. On zak\u0101tte sur la totalit\u00e9 \u2014 pas seulement le b\u00e9n\u00e9fice."
          },
          {
            id: "q-zak-13",
            text: "<strong>PI\u00c8GE :</strong> Farid re\u00e7oit un h\u00e9ritage de 10 000\u20ac. Depuis quand commence son \u062d\u064e\u0648\u0652\u0644 ?",
            choices: [
              {id:"a",text:"Depuis qu'il l'a re\u00e7u"},
              {id:"b",text:"Depuis le lendemain de la r\u00e9ception"},
              {id:"c",text:"Depuis le d\u00e9c\u00e8s du testateur"},
              {id:"d",text:"Depuis la prise de possession physique"},
            ],
            correctId: "a",
            explanation: "Le \u062d\u064e\u0648\u0652\u0644 commence \u00e0 partir du moment o\u00f9 on est devenu propri\u00e9taire. La r\u00e9ception de l'h\u00e9ritage marque le d\u00e9but du \u062d\u064e\u0648\u0652\u0644 pour l'argent liquide h\u00e9rit\u00e9."
          },
          {
            id: "q-zak-14",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner la \u0632\u064e\u0643\u064e\u0627\u0629 pour construire une mosqu\u00e9e ?",
            choices: [
              {id:"a",text:"Oui \u2014 c'est dans la voie d'Allah"},
              {id:"b",text:"Non \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629 ne peut pas servir \u00e0 construire une mosqu\u00e9e selon le rite malikite"},
              {id:"c",text:"Oui si la mosqu\u00e9e est dans un pays pauvre"},
              {id:"d",text:"Seulement pour les pauvres de cette mosqu\u00e9e"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Chez les malikites la zak\u00e2t ne peut pas \u00eatre donn\u00e9e pour construire une mosqu\u00e9e \u00bb. Les 8 cat\u00e9gories de b\u00e9n\u00e9ficiaires (Coran 9:60) sont limitatives \u2014 la construction de mosqu\u00e9es n'y figure pas."
          },
          {
            id: "q-zak-15",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner sa \u0632\u064e\u0643\u064e\u0627\u0629 \u00e0 ses parents dans le besoin ?",
            choices: [
              {id:"a",text:"Oui \u2014 les proches sont prioritaires"},
              {id:"b",text:"Non \u2014 on ne peut pas donner la \u0632\u064e\u0643\u064e\u0627\u0629 aux personnes l\u00e9galement \u00e0 sa charge"},
              {id:"c",text:"Seulement si on ne peut pas subvenir \u00e0 leurs besoins"},
              {id:"d",text:"Oui si ce sont les parents du c\u00f4t\u00e9 maternel"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Elle ne peut pas \u00eatre donn\u00e9e aux personnes l\u00e9galement \u00e0 notre charge : comme nos parents ou nos enfants. Ni \u00e0 ceux qui sont \u00e0 la charge obligatoire de quelqu'un d'ais\u00e9 \u00bb. La \u0646\u064e\u0641\u064e\u0642\u064e\u0629 l\u00e9gale emp\u00eache la \u0632\u064e\u0643\u064e\u0627\u0629 envers les m\u00eames personnes."
          },
          {
            id: "q-zak-16",
            text: "<strong>NUANCE :</strong> Peut-on donner sa \u0632\u064e\u0643\u064e\u0627\u0629 \u00e0 des parents pauvres qui <u>ne sont pas</u> \u00e0 sa charge l\u00e9gale ?",
            choices: [
              {id:"a",text:"Non \u2014 la famille ne peut jamais recevoir la \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"b",text:"Oui \u2014 et c'est doublement m\u00e9ritoire (\u0635\u0644\u0629 \u0627\u0644\u0631\u062d\u0645 + \u0635\u062f\u0642\u0629)"},
              {id:"c",text:"Seulement s'ils habitent loin"},
              {id:"d",text:"Seulement avec l'autorisation d'un savant"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Le fait de la donner aux proches pauvres implique la double r\u00e9compense : celle de renouer le lien de sang (\u0635\u0644\u0629 \u0627\u0644\u0631\u062d\u0645) et celle de l'aum\u00f4ne \u00bb. Les proches pauvres NON \u00e0 charge l\u00e9gale sont m\u00eame prioritaires."
          },
          {
            id: "q-zak-17",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim poss\u00e8de 500\u20ac d'\u00e9pargne mais une dette de 600\u20ac. La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due ?",
            choices: [
              {id:"a",text:"Oui \u2014 la dette n'annule pas la \u0632\u064e\u0643\u064e\u0627\u0629 sur la monnaie"},
              {id:"b",text:"Non \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 est calcul\u00e9 apr\u00e8s d\u00e9duction des dettes"},
              {id:"c",text:"Partiellement \u2014 sur la diff\u00e9rence"},
              {id:"d",text:"Oui sur 500\u20ac complets"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab le Ni\u00e7\u00e2b doit \u00eatre calcul\u00e9 apr\u00e8s avoir purg\u00e9 les dettes et pourvu aux besoins essentiels \u00bb. Si la dette d\u00e9passe l'\u00e9pargne, pas de \u0646\u0650\u0635\u064e\u0627\u0628 \u2192 pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur la monnaie."
          },
          {
            id: "q-zak-18",
            text: "<strong>NUANCE :</strong> Les dettes annulent-elles la \u0632\u064e\u0643\u064e\u0627\u0629 sur les r\u00e9coltes agricoles ?",
            choices: [
              {id:"a",text:"Oui \u2014 comme pour la monnaie"},
              {id:"b",text:"Non \u2014 les dettes n'annulent pas la \u0632\u064e\u0643\u064e\u0627\u0629 sur les grains, fruits et b\u00e9tail"},
              {id:"c",text:"Seulement si la dette est ant\u00e9rieure \u00e0 la r\u00e9colte"},
              {id:"d",text:"Seulement pour les petits agriculteurs"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab La dette n'annule en rien la zak\u00e2t lorsqu'il s'agit de la zak\u00e2t sur les grains, les fruits et le b\u00e9tail \u00bb. DIFF\u00c9RENCE IMPORTANTE avec la \u0632\u064e\u0643\u064e\u0627\u0629 sur la monnaie o\u00f9 les dettes sont d\u00e9duites."
          },
          {
            id: "q-zak-19",
            text: "<strong>PI\u00c8GE :</strong> Un agriculteur poss\u00e8de du bl\u00e9 et du riz. Les additionne-t-il pour atteindre le \u0646\u0650\u0635\u064e\u0627\u0628 ?",
            choices: [
              {id:"a",text:"Oui \u2014 toutes les c\u00e9r\u00e9ales se combinent"},
              {id:"b",text:"Non \u2014 bl\u00e9 et riz sont des types diff\u00e9rents et ne se combinent pas"},
              {id:"c",text:"Seulement si cultiv\u00e9s sur la m\u00eame terre"},
              {id:"d",text:"Oui mais au taux de la r\u00e9colte la plus faible"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0627\u0644\u0623\u0631\u0632 \u0648\u0627\u0644\u062f\u064f\u0651\u062e\u0646 \u0648\u0627\u0644\u0630\u064f\u0651\u0631\u0629 \u0643\u0644 \u0648\u0627\u062d\u062f \u0645\u0646\u0647\u0627 \u0635\u0646\u0641 \u0644\u0627 \u064a\u0636\u0645 \u0625\u0644\u0649 \u0627\u0644\u0622\u062e\u0631 \u00bb \u2014 riz, millet et sorgho sont des types \u00e0 part non combinables. En revanche, bl\u00e9 (\u0642\u064e\u0645\u062d), orge (\u0634\u064e\u0639\u0650\u064a\u0631) et sult SE combinent entre eux."
          },
          {
            id: "q-zak-20",
            text: "Quel est le <strong>\u0646\u0650\u0635\u064e\u0627\u0628</strong> des troupeaux ovins/caprins ?",
            choices: [
              {id:"a",text:"10 t\u00eates"},
              {id:"b",text:"20 t\u00eates"},
              {id:"c",text:"40 t\u00eates"},
              {id:"d",text:"100 t\u00eates"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : pour les ovins/caprins, le \u0646\u0650\u0635\u064e\u0627\u0628 est de 40 b\u00eates (de 40 \u00e0 120 \u2192 un ovin d'un an ; de 121 \u00e0 200 \u2192 deux ovins ; de 201 \u00e0 300 \u2192 trois)."
          },
          {
            id: "q-zak-21",
            text: "<strong>PI\u00c8GE :</strong> Peut-on prendre de jeunes animaux (\u0639\u064e\u062c\u064e\u0627\u062c\u0650\u064a\u0644) comme paiement de la \u0632\u064e\u0643\u064e\u0627\u0629 sur les bovins ?",
            choices: [
              {id:"a",text:"Oui si leur valeur est \u00e9quivalente"},
              {id:"b",text:"Non \u2014 ils sont comptabilis\u00e9s dans le troupeau mais ne peuvent pas \u00eatre pr\u00e9lev\u00e9s"},
              {id:"c",text:"Seulement s'ils ont 6 mois ou plus"},
              {id:"d",text:"Oui si l'\u00e9leveur pr\u00e9f\u00e8re"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0644\u064e\u0627 \u062a\u064f\u0624\u062e\u064e\u0630\u064f \u0627\u0644\u0639\u064e\u062c\u064e\u0627\u062c\u0650\u064a\u0644\u064f \u0641\u0650\u064a \u0627\u0644\u0628\u064e\u0642\u064e\u0631\u0650 \u0648\u064e\u0644\u064e\u0627 \u0627\u0644\u0641\u0650\u0635\u0644\u064e\u0627\u0646\u064f \u0641\u0650\u064a \u0627\u0644\u0625\u0650\u0628\u0650\u0644\u0650 \u0648\u064e\u062a\u064f\u0639\u064e\u062f\u064f\u0651 \u0639\u064e\u0644\u064e\u064a\u0647\u0650\u0645 \u00bb \u2014 les jeunes animaux sont comptabilis\u00e9s dans le troupeau MAIS ne peuvent pas \u00eatre pr\u00e9lev\u00e9s comme paiement de la \u0632\u064e\u0643\u064e\u0627\u0629."
          },
          {
            id: "q-zak-22",
            text: "<strong>PI\u00c8GE :</strong> Qui acquitte la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 d'un serviteur (esclave) ?",
            choices: [
              {id:"a",text:"Le serviteur lui-m\u00eame"},
              {id:"b",text:"Son ma\u00eetre"},
              {id:"c",text:"La communaut\u00e9"},
              {id:"d",text:"Elle n'est pas due pour les serviteurs"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u064a\u064f\u062e\u0631\u064e\u062c\u064f \u0639\u064e\u0646\u0650 \u0627\u0644\u0645\u064e\u0645\u0644\u064f\u0648\u0643\u0650 \u0633\u064e\u064a\u0650\u0651\u062f\u064f\u0647\u064f \u00bb \u2014 c'est le ma\u00eetre qui acquitte la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 pour son serviteur."
          },
          {
            id: "q-zak-23",
            text: "Depuis quand le \u062d\u064e\u0648\u0652\u0644 des b\u00e9n\u00e9fices commerciaux commence-t-il ?",
            choices: [
              {id:"a",text:"Depuis le jour du b\u00e9n\u00e9fice"},
              {id:"b",text:"Depuis que le capital original a \u00e9t\u00e9 poss\u00e9d\u00e9"},
              {id:"c",text:"Depuis le premier jour de l'ann\u00e9e islamique"},
              {id:"d",text:"Depuis la vente qui g\u00e9n\u00e8re le b\u00e9n\u00e9fice"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab la p\u00e9riode annuelle compt\u00e9e pour la zak\u00e2t sur un profit est la p\u00e9riode annuelle de son capital (l'origine) \u00bb. Le \u062d\u064e\u0648\u0652\u0644 du b\u00e9n\u00e9fice se calcule depuis la possession du CAPITAL, non depuis le b\u00e9n\u00e9fice."
          },
          {
            id: "q-zak-24",
            text: "<strong>SC\u00c9NARIO :</strong> Khalid acquiert une marchandise pour 500\u20ac en janvier et la revend pour 800\u20ac en ao\u00fbt (7 mois). Doit-il la \u0632\u064e\u0643\u064e\u0627\u0629 maintenant ?",
            choices: [
              {id:"a",text:"Oui imm\u00e9diatement sur 800\u20ac"},
              {id:"b",text:"Non \u2014 il attend la fin de son \u062d\u064e\u0648\u0652\u0644 (janvier suivant) pour payer sur 800\u20ac"},
              {id:"c",text:"Oui mais seulement sur le b\u00e9n\u00e9fice (300\u20ac)"},
              {id:"d",text:"Non \u2014 vendre avant le \u062d\u064e\u0648\u0652\u0644 exempte"},
            ],
            correctId: "b",
            explanation: "Le \u062d\u064e\u0648\u0652\u0644 commence depuis l'acquisition du capital (janvier). La vente ne d\u00e9clenche pas imm\u00e9diatement la \u0632\u064e\u0643\u064e\u0627\u0629 \u2014 elle r\u00e9v\u00e8le la valeur sur laquelle on zak\u0101ttera \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644. Il attend janvier et paye alors 2,5% sur 800\u20ac."
          },
          {
            id: "q-zak-25",
            text: "<strong>PI\u00c8GE :</strong> Peut-on transporter la \u0632\u064e\u0643\u064e\u0627\u0629 vers une autre ville si les gens l\u00e0-bas sont plus dans le besoin ?",
            choices: [
              {id:"a",text:"Non \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629 ne peut jamais quitter la ville o\u00f9 elle est due"},
              {id:"b",text:"Oui toujours"},
              {id:"c",text:"Oui s'il y a surplus local ou besoin plus grand ailleurs"},
              {id:"d",text:"Seulement dans le m\u00eame pays"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr cite la position malikite : \u00ab \u0644\u0627 \u062a\u0646\u0642\u0644 \u0627\u0644\u0632\u0643\u0627\u0629 \u0639\u0646 \u0627\u0644\u0628\u0644\u062f \u0627\u0644\u0630\u064a \u0648\u062c\u0628\u062a \u0641\u064a\u0647 \u0625\u0644\u0627 \u0625\u0646 \u0641\u0636\u0644\u062a \u0623\u0648 \u0643\u0627\u0646 \u0623\u0647\u0644 \u0627\u0644\u0628\u0644\u062f \u0627\u0644\u0645\u0646\u0642\u0648\u0644\u0629 \u0625\u0644\u064a\u0647 \u0623\u0634\u062f \u062d\u0627\u062c\u0629 \u00bb. La r\u00e8gle par d\u00e9faut est de distribuer sur place \u2014 exception si surplus local ou besoin plus grand ailleurs."
          },
          {
            id: "q-zak-26",
            text: "<strong>PI\u00c8GE AVANC\u00c9 :</strong> Ibrahim a 10 brebis et Karim 35. Ils mettent en commun leur troupeau (\u062e\u064f\u0644\u0637\u064e\u0629). La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due ?",
            choices: [
              {id:"a",text:"Non \u2014 aucun n'atteint 40 brebis individuellement"},
              {id:"b",text:"Oui \u2014 le troupeau combin\u00e9 (45) atteint le \u0646\u0650\u0635\u064e\u0627\u0628, ils se partagent proportionnellement"},
              {id:"c",text:"Non \u2014 la \u062e\u064f\u0644\u0637\u064e\u0629 n'existe que pour les bovins"},
              {id:"d",text:"Oui mais seulement sur la part d\u00e9passant 40"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0643\u064f\u0644\u064f\u0651 \u062e\u064e\u0644\u0650\u064a\u0637\u064e\u064a\u0646\u0650 \u0641\u064e\u0625\u0650\u0646\u064e\u0651\u0647\u064f\u0645\u064e\u0627 \u064a\u064e\u062a\u064e\u0632\u064e\u0627\u062f\u064e\u0627\u0646\u0650 \u0628\u064e\u064a\u0646\u064e\u0647\u064f\u0645\u064e\u0627 \u0628\u0650\u0627\u0644\u0633\u064e\u0651\u0648\u0650\u064a\u064e\u0651\u0629\u0650 \u00bb \u2014 deux associ\u00e9s se partagent la \u0632\u064e\u0643\u064e\u0627\u0629. 45 brebis \u2265 40 (\u0646\u0650\u0635\u064e\u0627\u0628) \u2192 une brebis due. Ibrahim : 10/45 ; Karim : 35/45."
          },
          {
            id: "q-zak-27",
            text: "<strong>PI\u00c8GE :</strong> Un cr\u00e9ancier a 5000\u20ac de cr\u00e9ance non rembours\u00e9e depuis 3 ans. Combien d'ann\u00e9es de \u0632\u064e\u0643\u064e\u0627\u0629 doit-il payer ?",
            choices: [
              {id:"a",text:"3 ann\u00e9es de \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"b",text:"UNE SEULE ann\u00e9e lors du remboursement"},
              {id:"c",text:"Aucune \u2014 les cr\u00e9ances sont exempt\u00e9es"},
              {id:"d",text:"Seulement les 2 premi\u00e8res ann\u00e9es"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Si cette valeur est demeur\u00e9e plusieurs ann\u00e9es entre les mains du d\u00e9biteur, le cr\u00e9ancier ne paiera la zak\u00e2t que pour UNE ANN\u00c9E \u00e0 partir du moment o\u00f9 il l'aura recouvr\u00e9e \u00bb. Pas de \u0632\u064e\u0643\u064e\u0627\u0629 annuelle cumul\u00e9e sur une cr\u00e9ance inaccessible."
          },
          {
            id: "q-zak-28",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due sur les v\u00eatements et meubles personnels ?",
            choices: [
              {id:"a",text:"Oui si leur valeur totale d\u00e9passe le \u0646\u0650\u0635\u064e\u0627\u0628"},
              {id:"b",text:"Seulement sur les v\u00eatements de luxe"},
              {id:"c",text:"Non \u2014 aucune \u0632\u064e\u0643\u064e\u0627\u0629 sur les biens \u00e0 usage personnel"},
              {id:"d",text:"Seulement sur les meubles non utilis\u00e9s r\u00e9guli\u00e8rement"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : \u00ab Nul n'est tenu de payer la zak\u00e2t sur son esclave, son cheval, ni sa maison, ni les acquisitions destin\u00e9es \u00e0 l'usage personnel \u00bb. Les biens \u00e0 usage personnel sont exempt\u00e9s quelle que soit leur valeur."
          },
          {
            id: "q-zak-29",
            text: "<strong>SC\u00c9NARIO CALCUL :</strong> Ali r\u00e9colte 600 kg de bl\u00e9 irrigu\u00e9 par la pluie. Combien doit-il donner ?",
            choices: [
              {id:"a",text:"6 kg (1%)"},
              {id:"b",text:"30 kg (5%)"},
              {id:"c",text:"60 kg (10%)"},
              {id:"d",text:"15 kg (2,5%)"},
            ],
            correctId: "c",
            explanation: "Irrigation naturelle (pluie/source) \u2192 \u0627\u0644\u0639\u064f\u0634\u0652\u0631 = 1/10 = 10%. 600 kg \u00d7 10% = 60 kg. Si irrigation artificielle : 5% = 30 kg."
          },
          {
            id: "q-zak-30",
            text: "<strong>PI\u00c8GE :</strong> Doit-on dire explicitement au pauvre qu'on lui donne la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 transparence obligatoire"},
              {id:"b",text:"Non \u2014 c'est makr\u016bh car cela blesse la dignit\u00e9 du pauvre"},
              {id:"c",text:"Seulement si le pauvre le demande"},
              {id:"d",text:"Oui car cela lui permet de faire du du\u02bf\u0101\u02be"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab \u064a\u0643\u0631\u0647 \u0625\u0639\u0644\u0627\u0645 \u0627\u0644\u0641\u0642\u064a\u0631 \u0648\u0627\u0644\u0645\u0633\u0643\u064a\u0646 \u0628\u0623\u0646 \u0645\u0627 \u064a\u0639\u0637\u064a\u0627\u0646 \u0632\u0643\u0627\u0629\u060c \u0644\u0623\u0646 \u0630\u0644\u0643 \u064a\u0643\u0633\u0631 \u0642\u0644\u0628\u064a\u0647\u0645\u0627 \u00bb \u2014 il est makr\u016bh de dire aux pauvres que c'est leur \u0632\u064e\u0643\u064e\u0627\u0629 car cela brise leur dignit\u00e9."
          },
          {
            id: "q-zak-31",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629 sur les mines (\u0645\u064e\u0639\u062f\u0650\u0646) est-elle soumise au \u062d\u064e\u0648\u0652\u0644 ?",
            choices: [
              {id:"a",text:"Oui \u2014 comme pour l'or et l'argent"},
              {id:"b",text:"Non \u2014 due imm\u00e9diatement lors de l'extraction si le \u0646\u0650\u0635\u064e\u0627\u0628 est atteint"},
              {id:"c",text:"Seulement si la mine est continue"},
              {id:"d",text:"Apr\u00e8s 6 mois d'exploitation"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la : \u00ab \u0641\u0650\u064a\u0645\u064e\u0627 \u064a\u064e\u062e\u0631\u064f\u062c\u064f \u0645\u0650\u0646\u064e \u0627\u0644\u0645\u064e\u0639\u062f\u0650\u0646\u0650 \u0627\u0644\u0632\u064e\u0651\u0643\u064e\u0627\u0629\u064f \u0625\u0650\u0630\u064e\u0627 \u0628\u064e\u0644\u064e\u063a\u064e \u0648\u064e\u0632\u0646\u064e \u0639\u0650\u0634\u0631\u0650\u064a\u0646\u064e \u062f\u0650\u064a\u0646\u064e\u0627\u0631\u064b\u0627 \u00bb \u2014 due IMM\u00c9DIATEMENT \u00e0 l'extraction, d\u00e8s que le \u0646\u0650\u0635\u064e\u0627\u0628 est atteint. Pas de \u062d\u064e\u0648\u0652\u0644 pour les mines."
          },
          {
            id: "q-zak-32",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner la \u0632\u064e\u0643\u064e\u0627\u0629 aux Ban\u016b H\u0101shim (famille du Proph\u00e8te \ufdfa) ?",
            choices: [
              {id:"a",text:"Oui \u2014 la fraternit\u00e9 islamique prime"},
              {id:"b",text:"Non \u2014 par respect pour cette famille, ils ne re\u00e7oivent pas la \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"c",text:"Seulement en cas de n\u00e9cessit\u00e9 absolue"},
              {id:"d",text:"Oui si ce sont des femmes"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Les pauvres et les n\u00e9cessiteux qui peuvent recevoir la zak\u00e2t doivent obligatoirement... ne pas faire partie de la descendance des Ban\u00ee H\u0101shim \u00bb. Cette exception par respect est \u00e9tablie par had\u012bth."
          },
          {
            id: "q-zak-33",
            text: "<strong>AVANC\u00c9 :</strong> Des actions en bourse repr\u00e9sentant une activit\u00e9 commerciale sont-elles soumises \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"\u00c0 chaque dividende"},
              {id:"b",text:"Annuellement sur leur valeur totale au terme du \u062d\u064e\u0648\u0652\u0644"},
              {id:"c",text:"Seulement lors de la vente"},
              {id:"d",text:"Jamais \u2014 les actions ne sont pas soumises \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab les entreprises de type soci\u00e9t\u00e9 industrielle et/ou commerciale font l'objet du pr\u00e9l\u00e8vement annuel de la Zak\u00e2t qui touche les marchandises destin\u00e9es \u00e0 la vente \u00bb. Les actions commerciales : 2,5% de leur valeur \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644."
          },
          {
            id: "q-zak-34",
            text: "<strong>SC\u00c9NARIO :</strong> Nadia re\u00e7oit son salaire en janvier (2000\u20ac). Elle d\u00e9pense tout en cours d'ann\u00e9e et garde 500\u20ac en d\u00e9cembre. \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 = 1000\u20ac. Doit-elle la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 son salaire d\u00e9passait le \u0646\u0650\u0635\u064e\u0627\u0628"},
              {id:"b",text:"Non \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 n'est pas atteint \u00e0 la FIN du \u062d\u064e\u0648\u0652\u0644"},
              {id:"c",text:"Oui sur la diff\u00e9rence entre salaire et d\u00e9penses"},
              {id:"d",text:"Oui car elle a eu le \u0646\u0650\u0635\u064e\u0627\u0628 pendant une partie de l'ann\u00e9e"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Le montant consid\u00e9r\u00e9 pour la zak\u00e2t est celui de la FIN de l'ann\u00e9e \u00bb. 500\u20ac < 1000\u20ac (\u0646\u0650\u0635\u064e\u0627\u0628) \u2192 pas de \u0632\u064e\u0643\u064e\u0627\u0629. La cl\u00e9 est le montant en FIN du \u062d\u064e\u0648\u0652\u0644."
          },
          {
            id: "q-zak-35",
            text: "<strong>NUANCE :</strong> La \u0632\u064e\u0643\u064e\u0627\u0629 peut-elle \u00eatre donn\u00e9e en avance (avant la fin du \u062d\u064e\u0648\u0652\u0644) ?",
            choices: [
              {id:"a",text:"Non \u2014 elle doit obligatoirement attendre la fin du \u062d\u064e\u0648\u0652\u0644"},
              {id:"b",text:"Oui \u2014 certains savants malikites permettent l'anticipation si le \u0646\u0650\u0635\u064e\u0627\u0628 est atteint"},
              {id:"c",text:"Seulement pour \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631"},
              {id:"d",text:"Oui mais d'un mois maximum"},
            ],
            correctId: "b",
            explanation: "Certains savants malikites permettent de donner la \u0632\u064e\u0643\u064e\u0627\u0629 avant la fin du \u062d\u064e\u0648\u0652\u0644 (si le \u0646\u0650\u0635\u064e\u0627\u0628 est d\u00e9j\u00e0 atteint) pour faciliter les familles dans le besoin, notamment avant Ramadan."
          },
          {
            id: "q-zak-36",
            text: "<strong>PI\u00c8GE :</strong> Le cheval est-il soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 selon le rite malikite ?",
            choices: [
              {id:"a",text:"Oui \u2014 comme toute monture de valeur"},
              {id:"b",text:"Non \u2014 le rite malikite exempte les chevaux"},
              {id:"c",text:"Seulement les chevaux de course"},
              {id:"d",text:"Oui si le troupeau d\u00e9passe 5 chevaux"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Pas de zak\u00e2t sur les chevaux \u00bb selon le rite malikite. Les chameaux en revanche sont soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 selon un tableau d\u00e9taill\u00e9 de la Ris\u0101la."
          },
          {
            id: "q-zak-37",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim poss\u00e8de 45 chameaux. Quel animal donne-t-il comme \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Une chamelle d'un an"},
              {id:"b",text:"Deux chamelles de deux ans"},
              {id:"c",text:"Une chamelle entr\u00e9e dans sa troisi\u00e8me ann\u00e9e (\u0628\u0650\u0646\u0652\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646)"},
              {id:"d",text:"Une chamelle entr\u00e9e dans sa deuxi\u00e8me ann\u00e9e (\u0628\u0650\u0646\u0652\u062a\u064f \u0645\u064e\u062e\u064e\u0627\u0636)"},
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr : de 36 \u00e0 45 chameaux \u2192 une \u0628\u0650\u0646\u0652\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646 (chamelle qui a achev\u00e9 2 ans et entr\u00e9 dans la 3\u00e8me). Les tables des chameaux sont pr\u00e9cises."
          },
          {
            id: "q-zak-38",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due sur le \u0645\u064e\u0627\u0644 du mineur ?",
            choices: [
              {id:"a",text:"Non \u2014 le mineur est excus\u00e9"},
              {id:"b",text:"Oui \u2014 le tuteur (\u0648\u064e\u0644\u0650\u064a) l'acquitte \u00e0 sa place"},
              {id:"c",text:"Seulement s'il approche de la pubert\u00e9"},
              {id:"d",text:"Seulement sur les r\u00e9coltes"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab La zak\u00e2t n'est pas une obligation pour l'enfant ni le fou, mais c'est le tuteur l\u00e9gal qui aura obligation de s'en acquitter de leur argent \u00bb. Le mineur et le fou sont exempt\u00e9s personnellement mais leur tuteur paye."
          },
          {
            id: "q-zak-39",
            text: "<strong>SC\u00c9NARIO :</strong> Aminata donne sa \u0632\u064e\u0643\u064e\u0627\u0629 \u00e0 sa s\u0153ur pauvre (non \u00e0 sa charge l\u00e9gale). Est-ce valide ?",
            choices: [
              {id:"a",text:"Non \u2014 la famille ne peut jamais recevoir la \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"b",text:"Oui \u2014 et c'est doublement m\u00e9ritoire (\u0635\u0644\u0629 \u0627\u0644\u0631\u062d\u0645 + aum\u00f4ne)"},
              {id:"c",text:"Seulement si la s\u0153ur est dans un autre pays"},
              {id:"d",text:"Seulement avec l'autorisation du mari d'Aminata"},
            ],
            correctId: "b",
            explanation: "La s\u0153ur pauvre non \u00e0 charge l\u00e9gale est parmi les b\u00e9n\u00e9ficiaires prioritaires. Doctrine-malikite.fr : \u00ab Elle est \u00e0 donner de pr\u00e9f\u00e9rence aux proches dans le besoin \u00bb. C'est la famille ET la pauvre \u2192 double r\u00e9compense."
          },
          {
            id: "q-zak-40",
            text: "<strong>PI\u00c8GE :</strong> Un homme vend sa maison principale et poss\u00e8de 50 000\u20ac pendant un an. Doit-il la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Non \u2014 la maison n'est pas soumise \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"b",text:"Oui \u2014 les 50 000\u20ac sont de l'argent liquide soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 apr\u00e8s le \u062d\u064e\u0648\u0652\u0644"},
              {id:"c",text:"Non \u2014 c'est de l'argent destin\u00e9 au logement"},
              {id:"d",text:"Seulement s'il ne rach\u00e8te pas de maison dans l'ann\u00e9e"},
            ],
            correctId: "b",
            explanation: "La maison principale habit\u00e9e est exempt\u00e9e. Mais une fois vendue, l'argent liquide obtenu est soumis au r\u00e9gime de la \u0632\u064e\u0643\u064e\u0627\u0629 sur la monnaie. 50 000\u20ac pendant un \u062d\u064e\u0648\u0652\u0644 \u2192 2,5% dus."
          },
          {
            id: "q-zak-41",
            text: "<strong>AVANC\u00c9 :</strong> La \u0632\u064e\u0643\u064e\u0627\u0629 sur le miel est-elle due selon le rite malikite ?",
            choices: [
              {id:"a",text:"Oui \u2014 comme les autres productions agricoles"},
              {id:"b",text:"Non \u2014 pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur le miel dans le rite malikite"},
              {id:"c",text:"Seulement si on le vend"},
              {id:"d",text:"Seulement si la production d\u00e9passe 100 kg"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Pas de zak\u00e2t sur le miel \u00bb selon le rite malikite. Le miel n'est pas dans la liste des produits agricoles soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629. Si vendu, on attendrait un \u062d\u064e\u0648\u0652\u0644 sur le prix de vente."
          },
          {
            id: "q-zak-42",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner sa \u0632\u064e\u0643\u064e\u0627\u0629 \u00e0 un non-Muslim pauvre ?",
            choices: [
              {id:"a",text:"Oui \u2014 la g\u00e9n\u00e9rosit\u00e9 ne conna\u00eet pas de fronti\u00e8res religieuses"},
              {id:"b",text:"Non \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629 est r\u00e9serv\u00e9e aux Muslims (pour la plupart des cat\u00e9gories)"},
              {id:"c",text:"Seulement pour la cat\u00e9gorie \u0627\u0644\u0645\u064f\u0624\u064e\u0644\u064e\u0651\u0641\u064e\u0629 \u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645"},
              {id:"d",text:"Seulement pour les Gens du Livre"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Les pauvres et les n\u00e9cessiteux qui peuvent recevoir la zak\u00e2t doivent \u00eatre obligatoirement MUSULMANS \u00bb. Exception potentielle : \u0627\u0644\u0645\u064f\u0624\u064e\u0644\u064e\u0651\u0641\u064e\u0629 \u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645 peut inclure des non-Muslims selon certains savants."
          },
          {
            id: "q-zak-43",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 peut-elle \u00eatre donn\u00e9e 2-3 jours avant l'Eid ?",
            choices: [
              {id:"a",text:"Non \u2014 uniquement le jour de l'Eid"},
              {id:"b",text:"Oui \u2014 il est permis de la donner 1 \u00e0 2 jours avant l'Eid"},
              {id:"c",text:"Non \u2014 elle doit \u00eatre donn\u00e9e apr\u00e8s la pri\u00e8re de l'Eid"},
              {id:"d",text:"Oui \u2014 m\u00eame 2 semaines avant"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr confirme : il est permis de donner la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631 un ou deux jours avant l'Eid. Sunna (السُّنَّة) est de la donner AVANT la pri\u00e8re de l'Eid."
          },
          {
            id: "q-zak-44",
            text: "<strong>SC\u00c9NARIO :</strong> Omar est voyageur loin de chez lui et a \u00e9puis\u00e9 son argent alors qu'il est riche dans son pays. Peut-il recevoir la \u0632\u064e\u0643\u064e\u0627\u0629 comme \u0627\u0628\u0646\u064f \u0627\u0644\u0633\u064e\u0651\u0628\u0650\u064a\u0644 ?",
            choices: [
              {id:"a",text:"Non \u2014 il est riche donc non \u00e9ligible"},
              {id:"b",text:"Oui \u2014 l'\u0627\u0628\u0646 \u0627\u0644\u0633\u064e\u0651\u0628\u0650\u064a\u0644 re\u00e7oit ce qu'il faut pour rentrer m\u00eame s'il est riche dans son pays"},
              {id:"c",text:"Seulement si ce n'est pas de sa faute"},
              {id:"d",text:"Oui mais remboursement obligatoire"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : l'\u0627\u0628\u0646 \u0627\u0644\u0633\u064e\u0651\u0628\u0650\u064a\u0644 re\u00e7oit ce qui lui permet de rentrer chez lui m\u00eame s'il est riche dans son pays \u2014 \u00e0 condition qu'il ne puisse pas emprunter. S'il peut emprunter facilement, on ne lui donne pas."
          },
          {
            id: "q-zak-45",
            text: "<strong>PI\u00c8GE :</strong> Les l\u00e9gumes frais (carottes, tomates) sont-ils soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 agricole ?",
            choices: [
              {id:"a",text:"Oui s'ils d\u00e9passent 5 \u0623\u064e\u0648\u0633\u064f\u0642"},
              {id:"b",text:"Non \u2014 aucune \u0632\u064e\u0643\u064e\u0627\u0629 sur les fruits frais et l\u00e9gumes"},
              {id:"c",text:"Seulement en \u00e9t\u00e9"},
              {id:"d",text:"Oui mais au taux de 1%"},
            ],
            correctId: "b",
            explanation: "La Ris\u0101la et doctrine-malikite.fr confirment : pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur les l\u00e9gumes et fruits frais. Seuls les produits durables (c\u00e9r\u00e9ales, l\u00e9gumineuses, dattes, olives, raisins secs...) sont soumis \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 agricole."
          },
          {
            id: "q-zak-46",
            text: "<strong>AVANC\u00c9 :</strong> La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due sur un h\u00e9ritage re\u00e7u en argent liquide ?",
            choices: [
              {id:"a",text:"Imm\u00e9diatement apr\u00e8s r\u00e9ception"},
              {id:"b",text:"Un \u062d\u064e\u0648\u0652\u0644 apr\u00e8s r\u00e9ception (nouveau \u062d\u064e\u0648\u0652\u0644 \u00e0 partir de la r\u00e9ception)"},
              {id:"c",text:"Jamais \u2014 les h\u00e9ritages sont exempt\u00e9s"},
              {id:"d",text:"Seulement si l'h\u00e9ritage d\u00e9passe un \u0633\u064f\u062f\u064f\u0633"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : pour l'argent liquide h\u00e9rit\u00e9, un nouveau \u062d\u064e\u0648\u0652\u0644 commence \u00e0 la r\u00e9ception. On paye la \u0632\u064e\u0643\u064e\u0627\u0629 un an apr\u00e8s, si le \u0646\u0650\u0635\u064e\u0627\u0628 est maintenu \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644."
          },
          {
            id: "q-zak-47",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim a 30 bovins (vaches). Le \u0646\u0650\u0635\u064e\u0627\u0628 est-il atteint ?",
            choices: [
              {id:"a",text:"Non \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 des bovins est 40"},
              {id:"b",text:"Oui \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 des bovins est 30"},
              {id:"c",text:"Non \u2014 le \u0646\u0650\u0635\u064e\u0627\u0628 des bovins est 50"},
              {id:"d",text:"Oui mais seulement pour les vaches laiti\u00e8res"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr pour les bovins : \u0646\u0650\u0635\u064e\u0627\u0628 = 30. De 30 \u00e0 39 \u2192 un veau (\u062a\u064e\u0628\u0650\u064a\u0639) de plus de 2 ans. De 40 \u2192 une vache (\u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629) dans sa 4\u00e8me ann\u00e9e."
          },
          {
            id: "q-zak-48",
            text: "<strong>NUANCE :</strong> La \u0627\u0644\u0646\u0650\u0651\u064a\u064e\u0651\u0629 est-elle requise pour la validit\u00e9 de la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Non \u2014 le simple fait de donner suffit"},
              {id:"b",text:"Oui \u2014 il faut l'intention que c'est la \u0632\u064e\u0643\u064e\u0627\u0629 obligatoire"},
              {id:"c",text:"Seulement pour \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0652\u0631"},
              {id:"d",text:"Non \u2014 si le montant est correct, l'intention est pr\u00e9sum\u00e9e"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab il faut au pr\u00e9alable \u00e9mettre l'intention de donner la zak\u00e2t, car les actes ne valent que par les intentions \u00bb. L'intention peut \u00eatre faite au moment de distinguer la part ou lors de la distribution."
          },
          {
            id: "q-zak-49",
            text: "<strong>PI\u00c8GE :</strong> Farid est pauvre mais poss\u00e8de un troupeau de 45 moutons. Doit-il payer la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Non \u2014 il est pauvre, donc exempt\u00e9"},
              {id:"b",text:"Oui \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629 est due sur tout bien d\u00e9passant le \u0646\u0650\u0635\u064e\u0627\u0628, m\u00eame si le possesseur est pauvre"},
              {id:"c",text:"Seulement s'il les poss\u00e8de depuis plus de 2 ans"},
              {id:"d",text:"Non car c'est sa principale source de vie"},
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Les pauvres et les n\u00e9cessiteux peuvent recevoir la zak\u00e2t. Ceci m\u00eame s'ils poss\u00e8dent le \u0646\u0650\u0635\u064e\u0627\u0628. Ils donneront obligatoirement la zak\u00e2t sur leur \u0646\u0650\u0635\u064e\u0627\u0628 \u00bb. Paradoxe : on peut \u00eatre \u00e9ligible \u00e0 RECEVOIR la \u0632\u064e\u0643\u064e\u0627\u0629 ET devoir la PAYER."
          },
          {
            id: "q-zak-50",
            text: "<strong>QUESTION FINALE :</strong> Sami re\u00e7oit un salaire mensuel de 1500\u20ac. Il d\u00e9pense tout chaque mois et n'a jamais d'\u00e9pargne \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644. Doit-il la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
              {id:"a",text:"Oui \u2014 ses revenus d\u00e9passent le \u0646\u0650\u0635\u064e\u0627\u0628"},
              {id:"b",text:"Non \u2014 sans \u00e9pargne en fin de \u062d\u064e\u0648\u0652\u0644, pas de \u0632\u064e\u0643\u064e\u0627\u0629"},
              {id:"c",text:"Oui sur le total annuel (12 \u00d7 1500\u20ac)"},
              {id:"d",text:"Oui sur chaque mois individuellement"},
            ],
            correctId: "b",
            explanation: "La cl\u00e9 : si \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644, il ne reste aucune \u00e9pargne \u2265 \u0646\u0650\u0635\u064e\u0627\u0628, pas de \u0632\u064e\u0643\u064e\u0627\u0629. La \u0632\u064e\u0643\u064e\u0627\u0629 requiert un capital stable pendant un \u062d\u064e\u0648\u0652\u0644. Des revenus d\u00e9pens\u00e9s au fur et \u00e0 mesure ne g\u00e9n\u00e8rent pas de \u0632\u064e\u0643\u064e\u0627\u0629."
          }
        ,
          {
            id: "q-zak-51",
            text: "Quel animal doit-on donner comme \u0632\u064e\u0643\u064e\u0627\u0629 pour un troupeau de 25 \u00e0 35 chameaux ?",
            choices: [
            {id:"a",text:"1 brebis"},
            {id:"b",text:"1 \u0628\u0650\u0646\u062a\u064f \u0645\u064e\u062e\u064e\u0627\u0636 (chamelle ayant compl\u00e9t\u00e9 1 an)"},
            {id:"c",text:"1 \u0628\u0650\u0646\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646 (chamelle ayant compl\u00e9t\u00e9 2 ans)"},
            {id:"d",text:"1 \u062d\u0650\u0642\u064e\u0651\u0629 (chamelle ayant compl\u00e9t\u00e9 3 ans)"}
            ],
            correctId: "b",
            explanation: "Pour 25 \u00e0 35 chameaux : 1 \u0628\u0650\u0646\u062a\u064f \u0645\u064e\u062e\u064e\u0627\u0636 (chamelle qui a achev\u00e9 1 an et entr\u00e9 dans sa 2\u00e8me ann\u00e9e). Pour 36-45 : 1 \u0628\u0650\u0646\u062a\u064f \u0644\u064e\u0628\u064f\u0648\u0646. Pour 46-60 : 1 \u062d\u0650\u0642\u064e\u0651\u0629. Pour 61-75 : 1 \u062c\u064e\u0630\u064e\u0639\u064e\u0629. Ces tableaux sont donn\u00e9s par la Ris\u0101la d'Ibn Ab\u012b Zayd et la Mudawwana (المُدَوَّنَة)."
          },
          {
            id: "q-zak-52",
            text: "Pour 40 bovins (vaches), quelle est la \u0632\u064e\u0643\u064e\u0627\u0629 due ?",
            choices: [
            {id:"a",text:"1 \u062a\u064e\u0628\u0650\u064a\u0639 (jeune bovin entrant dans sa 3\u00e8me ann\u00e9e)"},
            {id:"b",text:"1 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629 (vache entrant dans sa 4\u00e8me ann\u00e9e)"},
            {id:"c",text:"2 brebis"},
            {id:"d",text:"Rien \u2014 le ni\u1e63\u0101\u0628 des bovins est 50"}
            ],
            correctId: "b",
            explanation: "Pour les bovins : de 30 \u00e0 39 \u2192 1 \u062a\u064e\u0628\u0650\u064a\u0639 ; de 40 \u00e0 59 \u2192 1 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629 (vache ayant compl\u00e9t\u00e9 3 ans, entrant dans sa 4\u00e8me). Avec 40 bovins on est donc dans la tranche 40-59 \u2192 1 \u0645\u064f\u0633\u0650\u0646\u064e\u0651\u0629 due."
          },
          {
            id: "q-zak-53",
            text: "<strong>PI\u00c8GE :</strong> Ibrahim a 45 moutons et son associ\u00e9 Karim a 45 ch\u00e8vres. Leurs troupeaux paissent ensemble. La \u0632\u064e\u0643\u064e\u0627\u0629 est-elle due sur l'ensemble (90 t\u00eates) ?",
            choices: [
            {id:"a",text:"Non \u2014 chacun est en dessous de 40 individuellement et les esp\u00e8ces sont diff\u00e9rentes"},
            {id:"b",text:"Non \u2014 les moutons et ch\u00e8vres ne se combinent pas"},
            {id:"c",text:"Oui \u2014 ovins et caprins se combinent, et la \u062e\u064f\u0644\u0637\u064e\u0629 (partenariat) s'applique"},
            {id:"d",text:"Seulement si les troupeaux paissent ensemble 6 mois ou plus"}
            ],
            correctId: "c",
            explanation: "Ovins et caprins sont du m\u00eame type (\u0627\u0644\u063a\u064e\u0646\u064e\u0645) et se combinent. De plus, la \u062e\u064f\u0644\u0637\u064e\u0629 (les troupeaux paissent ensemble) s'applique : 45 + 45 = 90 t\u00eates \u2192 1 brebis due, partag\u00e9e entre Ibrahim (45/90 = moiti\u00e9) et Karim (moiti\u00e9). Les conditions de la \u062e\u064f\u0644\u0637\u064e\u0629 : m\u00eame p\u00e2turage, m\u00eame source d'eau, m\u00eame berger, pendant la majorit\u00e9 du \u062d\u064e\u0648\u0652\u0644."
          },
          {
            id: "q-zak-54",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629 s'applique-t-elle aux animaux nourris artificiellement (\u0627\u0644\u0645\u064e\u0639\u0644\u064f\u0648\u0641\u064e\u0629) toute l'ann\u00e9e ?",
            choices: [
            {id:"a",text:"Oui \u2014 comme tous les troupeaux"},
            {id:"b",text:"Non \u2014 selon l'Im\u0101m M\u0101lik dans la Mudawwana (المُدَوَّنَة), les \u0627\u0644\u0645\u0639\u0644\u0648\u0641\u0629 (nourris artificiellement) sont exempt\u00e9s"},
            {id:"c",text:"Oui mais \u00e0 1,25% au lieu de 2,5%"},
            {id:"d",text:"Seulement pour les chameaux"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : selon l'Im\u0101m M\u0101lik dans la Mudawwana (المُدَوَّنَة), la \u0632\u064e\u0643\u064e\u0627\u0629 ne s'applique qu'aux \u0627\u0644\u0645\u064e\u0627\u0634\u0650\u064a\u064e\u0629 \u0627\u0644\u0633\u064e\u0651\u0627\u0626\u0650\u0645\u064e\u0629 (animaux qui p\u00e2turent librement la majorit\u00e9 de l'ann\u00e9e). Les animaux nourris artificiellement toute l'ann\u00e9e (\u0645\u0639\u0644\u0648\u0641\u0629) sont exempt\u00e9s dans le rite malikite."
          },
          {
            id: "q-zak-55",
            text: "<strong>CONTEMPORAIN :</strong> Comment calcule-t-on la \u0632\u064e\u0643\u064e\u0627\u0629 sur un salaire mensuel selon la position malikite contemporaine dominante ?",
            choices: [
            {id:"a",text:"2,5% sur chaque salaire d\u00e8s sa r\u00e9ception"},
            {id:"b",text:"On choisit une date anniversaire fixe ; on calcule l'\u00e9pargne disponible \u00e0 cette date ; si \u2265 \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 \u2192 2,5%"},
            {id:"c",text:"2,5% sur le total des salaires annuels sans d\u00e9duction"},
            {id:"d",text:"Pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur les salaires \u2014 seulement sur l'\u00e9pargne accumul\u00e9e depuis 2 \u062d\u064e\u0648\u0652\u0644"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr (position contemporaine dominante) : on choisit une date anniversaire fixe (d\u00e9but d'ann\u00e9e islamique, etc.). On comptabilise l'\u00e9pargne disponible \u00e0 cette date apr\u00e8s d\u00e9duction des d\u00e9penses essentielles et des dettes \u00e0 court terme. Si elle \u2265 \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 \u2192 2,5% de \u0632\u064e\u0643\u064e\u0627\u0629."
          },
          {
            id: "q-zak-56",
            text: "<strong>PI\u00c8GE :</strong> Nadia a un fonds de retraite auquel elle ne peut pas acc\u00e9der avant 20 ans. Doit-elle la \u0632\u064e\u0643\u064e\u0627\u0629 dessus chaque ann\u00e9e ?",
            choices: [
            {id:"a",text:"Oui \u2014 2,5% chaque ann\u00e9e sur la valeur totale"},
            {id:"b",text:"Non \u2014 pas de \u0632\u064e\u0643\u064e\u0627\u0629 annuelle sur des fonds inaccessibles ; une seule ann\u00e9e de \u0632\u064e\u0643\u064e\u0627\u0629 lors de la r\u00e9ception"},
            {id:"c",text:"Seulement si le fonds d\u00e9passe 50 000\u20ac"},
            {id:"d",text:"Oui mais au taux de 1%"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr (par analogie avec la cr\u00e9ance inaccessible) : pas de \u0632\u064e\u0643\u064e\u0627\u0629 annuelle sur des fonds auxquels on ne peut pas acc\u00e9der. D\u00e8s la r\u00e9ception (\u00e0 la retraite) : une seule ann\u00e9e de \u0632\u064e\u0643\u064e\u0627\u0629 sur le total re\u00e7u, m\u00eame s'il a \u00e9t\u00e9 \u00e9pargn\u00e9 20 ans. M\u00eame principe que la cr\u00e9ance non r\u00e9cup\u00e9r\u00e9e."
          },
          {
            id: "q-zak-57",
            text: "<strong>CONTEMPORAIN :</strong> Quel \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 recommandent les savants malikites contemporains pour maximiser la distribution de la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
            {id:"a",text:"Le \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 de l'or (85g d'or \u2248 valeur \u00e9lev\u00e9e) \u2014 plus difficile \u00e0 atteindre"},
            {id:"b",text:"Le \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 de l'argent (595g d'argent \u2248 valeur basse) \u2014 plus facile \u00e0 atteindre, couvre plus de personnes"},
            {id:"c",text:"La moyenne entre les deux"},
            {id:"d",text:"Chaque savant choisit selon l'\u00e9poque"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : il y a une divergence contemporaine. Utiliser le \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 de l'argent (valeur basse) avantage les pauvres en \u00e9largissant le nombre de personnes qui doivent la \u0632\u064e\u0643\u064e\u0627\u0629. Beaucoup de savants contemporains recommandent le \u0627\u0644\u0646\u0650\u0651\u0635\u064e\u0627\u0628 de l'argent (environ 595g d'argent en valeur mon\u00e9taire) pour maximiser la distribution."
          },
          {
            id: "q-zak-58",
            text: "<strong>PI\u00c8GE :</strong> Peut-on donner la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 en argent liquide (esp\u00e8ces) selon la majorit\u00e9 des savants malikites classiques ?",
            choices: [
            {id:"a",text:"Oui \u2014 l'argent est plus pratique et pr\u00e9f\u00e9rable"},
            {id:"b",text:"Non \u2014 la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 doit \u00eatre en nourriture selon la majorit\u00e9 des savants malikites classiques"},
            {id:"c",text:"Seulement si le destinataire pr\u00e9f\u00e8re l'argent"},
            {id:"d",text:"Oui si le prix de la nourriture \u00e9quivalente est donn\u00e9"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : la majorit\u00e9 des savants malikites classiques ne permettent pas de remplacer la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 par de l'argent \u2014 elle doit \u00eatre en denr\u00e9e alimentaire (nourriture principale de la r\u00e9gion). Certains savants contemporains l'ont autoris\u00e9e pour faciliter la distribution, mais ce n'est pas la position classique. La s\u00e9curit\u00e9 est de donner en nourriture."
          },
          {
            id: "q-zak-59",
            text: "La \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 peut-elle \u00eatre donn\u00e9e \u00e0 un non-Muslim pauvre ?",
            choices: [
            {id:"a",text:"Oui \u2014 comme la zak\u0101t al-m\u0101l"},
            {id:"b",text:"Non \u2014 contrairement \u00e0 la zak\u0101t al-m\u0101l (cat\u00e9gorie \u0627\u0644\u0645\u064f\u0624\u064e\u0644\u064e\u0651\u0641\u064e\u0629 \u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645), la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 est exclusivement pour les Muslims"},
            {id:"c",text:"Seulement dans les pays \u00e0 majorit\u00e9 non-musulmane"},
            {id:"d",text:"Oui si aucun Muslim pauvre n'est disponible"}
            ],
            correctId: "b",
            explanation: "Doctrine-malikite.fr : \u00ab Les pauvres et les n\u00e9cessiteux qui peuvent recevoir la zak\u0101t doivent \u00eatre obligatoirement MUSULMANS \u00bb \u2014 ceci est encore plus restrictif pour la \u0632\u064e\u0643\u064e\u0627\u0629\u064f \u0627\u0644\u0641\u0650\u0637\u0631 qui n'a pas la cat\u00e9gorie \u0627\u0644\u0645\u064f\u0624\u064e\u0644\u064e\u0651\u0641\u064e\u0629 \u0642\u064f\u0644\u064f\u0648\u0628\u064f\u0647\u064f\u0645. Elle est strictement r\u00e9serv\u00e9e aux Muslims n\u00e9cessiteux."
          },
          {
            id: "q-zak-60",
            text: "<strong>PI\u00c8GE FINAL :</strong> Ibrahim a des actions dans une soci\u00e9t\u00e9 commerciale cot\u00e9e en bourse. Quand et sur quoi paie-t-il la \u0632\u064e\u0643\u064e\u0627\u0629 ?",
            choices: [
            {id:"a",text:"Seulement lors de la vente des actions"},
            {id:"b",text:"Sur les dividendes re\u00e7us uniquement"},
            {id:"c",text:"Annuellement \u00e0 la fin du \u062d\u064e\u0648\u0652\u0644 sur la valeur totale des actions (capital + b\u00e9n\u00e9fices latents) au taux de 2,5%"},
            {id:"d",text:"Pas de \u0632\u064e\u0643\u064e\u0627\u0629 sur les actions en bourse"}
            ],
            correctId: "c",
            explanation: "Doctrine-malikite.fr (position contemporaine) : les actions repr\u00e9sentant un capital commercial sont soumises \u00e0 la \u0632\u064e\u0643\u064e\u0627\u0629 annuelle. \u00c0 la fin du \u062d\u064e\u0648\u0652\u0644, on calcule la valeur totale des actions (prix du march\u00e9 \u00d7 nombre d'actions = capital + b\u00e9n\u00e9fices latents) et on verse 2,5%. M\u00eame si les actions ne sont pas vendues, leur valeur est zak\u0101tt\u00e9e."
          }
        ]
      },

      badge: {
        id: 'badge-al-zakāt (الزَّكَاة)',
        title: 'Purificateur de Biens',
        arabicTitle: 'مزكّي الأموال',
        icon: 'scales',
        color: 'silver',
        unlockCondition: 'Questionnaire "Zakāt (الزَّكَاة) (الزَّكَاة)" avec un score ≥ 85 %'
      }
    }

  ] /* fin subjects */
}; /* fin DEBUTANT */

/* ── Niveaux (structure placeholder niveaux 2-4) ─────────── */
const LEVELS = [
  {
    id: 'debutant',
    label: 'Débutant',
    arabicLabel: 'المستوى الأوّل',
    color: '#1A6B68',
    description: 'Les fondements de la pratique islamique : purification, prière, jeûZakāt (الزَّكَاة) selon le rite malikite.',
    subjectCount: 4,
    locked: false
  },
  {
    id: 'intermediaire',
    label: 'Intermédiaire',
    arabicLabel: 'المستوى الثاني',
    color: '#8A620A',
    description: 'Approfondissement de la jurisprudence : pèlerinage, dispositions funéraires, mariage, alimentation et transactions commerciales.',
    subjectCount: 7,
    locked: false
  },
  {
    id: 'avance',
    label: 'Avancé',
    arabicLabel: 'المستوى الثالث',
    color: '#2A5080',
    description: 'Contrats avancés, droit successoral (فَرَائِض), droit judiciaire et pénal islamique, et spiritualité selon le Matn d\'Ibn Āshir.',
    subjectCount: 7,
    locked: false
  },
  {
    id: 'expert',
    label: 'Expert',
    arabicLabel: 'المستوى الرابع',
    color: '#6A1A6A',
    description: 'Maîtrise complète : uṣūl al-الفِقْه malikite, divergences au sein de l\'école et ijtihād.',
    subjectCount: 7,
    locked: false
  }
];
