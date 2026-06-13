'use strict';

/* ══ DATA ══ */
const REGIONS = [
  { name:'الرياض',          count:142, idx:0  },
  { name:'جدة',             count:86,  idx:1  },
  { name:'الدمام',          count:54,  idx:2  },
  { name:'المدينة المنورة', count:38,  idx:3  },
  { name:'أبها',            count:29,  idx:4  },
  { name:'تبوك',            count:24,  idx:5  },
  { name:'الطائف',          count:21,  idx:6  },
  { name:'الأحساء',         count:18,  idx:7  },
  { name:'حائل',            count:14,  idx:8  },
  { name:'نجران',           count:11,  idx:9  },
  { name:'الباحة',          count:9,   idx:10 },
  { name:'جازان',           count:8,   idx:11 },
  { name:'الجوف',           count:6,   idx:12 },
];

const PROJECTS = [
  {
    id: 0,
    img: 'img/1.webp',
    cat: 'مؤتمرات',
    title: 'LEAP 2025 — المؤتمر التقني الدولي',
    city: 'الرياض', year: '2025', visitors: '+50٬000',
    scope: 'إدارة وتنفيذ مناطق التجربة الكاملة',
    client: 'وزارة الاتصالات وتقنية المعلومات',
    duration: '4 أيام',
    team: '+180 فرد',
    desc: 'أكبر مؤتمر تقني في منطقة الشرق الأوسط وأفريقيا. أدارت أمتيا مناطق تجربة الزوار والتنسيق الكامل لأكثر من 100 جناح عارض، مع فريق غرفة عمليات مركزية على مدار الساعة.',
    tags: ['تقنية', 'دولي', 'حكومي'],
    stats: ['+50K زائر', '100+ جناح', '95% رضا', 'صفر حوادث'],
    logo: 'LEAP',
    logoColor: '#0F4C5C'
  },
  {
    id: 1,
    img: 'img/2.jpg',
    cat: 'فعاليات',
    title: 'احتفالات اليوم الوطني 93 — الدرعية',
    city: '4 مناطق', year: '2024', visitors: '+320٬000',
    scope: 'تصميم وإدارة الفعاليات الموازية',
    client: 'هيئة تطوير الدرعية',
    duration: '7 أيام',
    team: '+350 فرد',
    desc: 'إدارة الفعاليات الموازية ليوم التأسيس عبر 4 مناطق في المملكة في آنٍ واحد. تضمّنت تنسيق العروض الفنية والمعارض التراثية والفقرات الاحتفالية الكبرى.',
    tags: ['وطني', 'ثقافي', 'حكومي'],
    stats: ['+320K زائر', '4 مناطق', '7 أيام', '12 فعالية موازية'],
    logo: '93',
    logoColor: '#1a7a3c'
  },
  {
    id: 2,
    img: 'img/3.webp',
    cat: 'مؤتمرات',
    title: 'منتدى مستقبل الاستثمار FII',
    city: 'الرياض', year: '2024', visitors: '+8٬000',
    scope: 'إدارة استراتيجية وتنفيذ متكامل',
    client: 'مبادرة مستقبل الاستثمار',
    duration: '3 أيام',
    team: '+120 فرد',
    desc: 'الشريك التنفيذي لإدارة تجربة المندوبين وتنسيق الجلسات الكبرى وتوثيق الفعالية في منتدى FII، الذي يجمع صفوة قادة الاستثمار العالمي.',
    tags: ['استثمار', 'دولي', 'VIP'],
    stats: ['+8K مندوب', '65 دولة', '3 أيام', '+200 متحدث'],
    logo: 'FII',
    logoColor: '#C9A227'
  },
  {
    id: 3,
    img: 'img/4.jpg',
    cat: 'معارض',
    title: 'معرض الرياض الدولي للسيارات',
    city: 'الرياض', year: '2025', visitors: '+120٬000',
    scope: 'تصميم الجناح وتجربة الزائر',
    client: 'الشركة العربية السعودية لمعارض السيارات',
    duration: '8 أيام',
    team: '+90 فرد',
    desc: 'تصميم وتنفيذ تجربة الزائر الكاملة في معرض السيارات الأكبر بالمملكة. شمل ذلك تصميم مناطق التجربة التفاعلية وجدولة العروض التقديمية لأكثر من 40 علامة تجارية.',
    tags: ['معارض', 'سيارات', 'تجاري'],
    stats: ['+120K زائر', '40+ علامة', '8 أيام', '14,000 م²'],
    logo: 'AUTO',
    logoColor: '#0F4C5C'
  },
  {
    id: 4,
    img: 'img/5.jpg',
    cat: 'مؤتمرات',
    title: 'ملتقى قادة قطاع التعليم',
    city: 'جدة', year: '2024', visitors: '+5٬000',
    scope: 'هوية بصرية وإدارة المؤتمر',
    client: 'وزارة التعليم',
    duration: '2 يوم',
    team: '+60 فرد',
    desc: 'تنظيم الملتقى السنوي لقادة التعليم في المملكة، مع تصميم هوية بصرية متكاملة وإدارة جلسات المجموعات والورش وحفل الختام.',
    tags: ['تعليم', 'حكومي', 'قيادي'],
    stats: ['+5K مشارك', '120 متحدث', '2 يوم', '18 ورشة'],
    logo: 'EDU',
    logoColor: '#0078d4'
  },
  {
    id: 5,
    img: 'img/6.jpg',
    cat: 'معارض',
    title: 'معرض جدة الدولي للعقار',
    city: 'جدة', year: '2024', visitors: '+45٬000',
    scope: 'هوية بصرية وإدارة العارضين',
    client: 'الجمعية السعودية لإدارة وتثمين الممتلكات',
    duration: '4 أيام',
    team: '+75 فرد',
    desc: 'إدارة تجربة الزائر وتنسيق أكثر من 80 عارضاً دولياً ومحلياً في أبرز معارض العقار بالمنطقة. صُمِّمت المداخل والمسارات وتجربة المجموعات الحصرية.',
    tags: ['عقارات', 'دولي', 'تجاري'],
    stats: ['+45K زائر', '80+ عارض', '4 أيام', '28 دولة'],
    logo: 'PROP',
    logoColor: '#1a7a3c'
  },
  {
    id: 6,
    img: 'img/6.webp',
    cat: 'فعاليات',
    title: 'موسم الرياض — المنطقة الترفيهية',
    city: 'الرياض', year: '2024', visitors: '+200٬000',
    scope: 'تصميم وتشغيل منطقة ترفيهية كاملة',
    client: 'هيئة الترفيه',
    duration: '45 يوماً',
    team: '+220 فرد',
    desc: 'تصميم وتشغيل إحدى مناطق موسم الرياض على مدى 45 يوماً متواصلاً، شملت العروض المسرحية والأنشطة التفاعلية وتجارب الطعام والترفيه المتنوعة.',
    tags: ['ترفيه', 'موسم', 'حكومي'],
    stats: ['+200K زائر', '45 يوماً', '30+ عرض', '12 نشاط'],
    logo: 'RYD',
    logoColor: '#7c3aed'
  },
  {
    id: 7,
    img: 'img/7.jpg',
    cat: 'فعاليات',
    title: 'مهرجان العُلا للتراث والفنون',
    city: 'العُلا', year: '2024', visitors: '+30٬000',
    scope: 'تنظيم وإدارة المهرجان الثقافي',
    client: 'الهيئة الملكية لمحافظة العُلا',
    duration: '10 أيام',
    team: '+140 فرد',
    desc: 'تنظيم مهرجان ثقافي تراثي في قلب محافظة العُلا، ضمّ معارض الفنون والعروض الموسيقية والجولات الأثرية وورش الحرف اليدوية في بيئة طبيعية فريدة.',
    tags: ['ثقافة', 'تراث', 'سياحة'],
    stats: ['+30K زائر', '10 أيام', '25 فنان', '8 دول'],
    logo: 'AlUla',
    logoColor: '#C9A227'
  },
  {
    id: 8,
    img: 'img/8.jpeg',
    cat: 'مؤتمرات',
    title: 'القمة الصحية السعودية',
    city: 'الرياض', year: '2025', visitors: '+12٬000',
    scope: 'تنظيم وإدارة القمة السنوية',
    client: 'وزارة الصحة',
    duration: '3 أيام',
    team: '+95 فرد',
    desc: 'تنظيم القمة الصحية السنوية التي تجمع القيادات الصحية من المملكة والعالم. أشرفت أمتيا على تنسيق الجلسات العلمية والمعارض الطبية وحفلات التكريم.',
    tags: ['صحة', 'حكومي', 'علمي'],
    stats: ['+12K مشارك', '45 دولة', '3 أيام', '200+ بحث'],
    logo: 'MOH',
    logoColor: '#0F4C5C'
  },
  {
    id: 9,
    img: 'img/9.jpg',
    cat: 'معارض',
    title: 'معرض الصناعة والتقنية SAIF',
    city: 'الدمام', year: '2024', visitors: '+65٬000',
    scope: 'إدارة المعرض الصناعي وتجربة الزوار',
    client: 'الهيئة السعودية للمناطق الصناعية',
    duration: '5 أيام',
    team: '+110 فرد',
    desc: 'إدارة أبرز المعارض الصناعية في المنطقة الشرقية، مع الإشراف على التجهيز والتشغيل وتنسيق الشركات المشاركة من القطاعين العام والخاص.',
    tags: ['صناعة', 'تقنية', 'شرقية'],
    stats: ['+65K زائر', '200+ شركة', '5 أيام', '18,000 م²'],
    logo: 'SAIF',
    logoColor: '#1d4ed8'
  },
  {
    id: 10,
    img: 'img/10.webp',
    cat: 'فعاليات',
    title: 'احتفالية يوم التأسيس — أبها',
    city: 'أبها', year: '2025', visitors: '+80٬000',
    scope: 'تصميم وتنفيذ الحفل الرسمي',
    client: 'إمارة منطقة عسير',
    duration: '3 أيام',
    team: '+160 فرد',
    desc: 'الحفل الرسمي ليوم التأسيس في منطقة عسير بتصميم بصري يعكس التراث الجنوبي الأصيل، مع عروض فنية ضخمة وتجارب تراثية تشاركية.',
    tags: ['وطني', 'تراث', 'حكومي'],
    stats: ['+80K حضور', '3 أيام', '15 فرقة فنية', '6 مراحل'],
    logo: 'ABHA',
    logoColor: '#0F4C5C'
  },
  {
    id: 11,
    img: 'img/11.webp',
    cat: 'مؤتمرات',
    title: 'مؤتمر الطاقة المتجددة والاستدامة',
    city: 'الرياض', year: '2025', visitors: '+9٬000',
    scope: 'الشريك التنفيذي والهوية البصرية',
    client: 'شركة أرامكو السعودية',
    duration: '2 يوم',
    team: '+70 فرد',
    desc: 'شريك تنفيذي لمؤتمر الطاقة السنوي لأرامكو. صمّمت أمتيا الهوية البصرية الكاملة وأدارت تجربة الحضور المميز وتنسيق الجلسات الرئيسية والمعارض التقنية.',
    tags: ['طاقة', 'استدامة', 'شركات'],
    stats: ['+9K مشارك', '40 دولة', '2 يوم', '80 عارض'],
    logo: 'ARAMCO',
    logoColor: '#166534'
  }
];


const VISION_PILLARS = [
  { code:'01', title:'مجتمع حيوي',   text:'تجارب ثقافية وترفيهية تُثري جودة الحياة وتدعم الانتماء المجتمعي.',   items:['فعاليات اليوم الوطني','مهرجانات ثقافية','مبادرات مجتمعية'] },
  { code:'02', title:'اقتصاد مزدهر', text:'منتديات استثمارية ومعارض دولية تُسهم في تنشيط القطاعات الاقتصادية.',  items:['منتديات استثمار','معارض قطاعية','مؤتمرات أعمال'] },
  { code:'03', title:'وطن طموح',     text:'تمكين الحوكمة المؤسسية ودعم المبادرات الحكومية الكبرى.',               items:['لقاءات حكومية','مبادرات قيادية','تمكين الكوادر الوطنية'] },
];

const LIFECYCLE = [
  { n:'01', t:'اكتشاف',       d:'ورش عمل لفهم الأهداف والجمهور المستهدف ومؤشرات النجاح.' },
  { n:'02', t:'استراتيجية',   d:'خطة مفصّلة، رسائل رئيسية، ومصفوفة قياس الأثر.' },
  { n:'03', t:'تصميم إبداعي', d:'هوية الفعالية، التجربة المكانية، والسيناريو التفصيلي.' },
  { n:'04', t:'إنتاج',        d:'إدارة الموردين، المسرح، التقنيات، واللوجستيات الكاملة.' },
  { n:'05', t:'تنفيذ',        d:'إدارة موقع متكاملة وفريق ميداني متخصص على الأرض.' },
  { n:'06', t:'تقرير وأثر',   d:'تحليل الأثر، توصيات قابلة للتطبيق، وأرشفة المشروع.' },
];

const CAPABILITIES = [
  { label:'المؤتمرات والمنتديات',     gov:true,  priv:true,  intl:true  },
  { label:'المعارض المتخصصة',         gov:true,  priv:true,  intl:true  },
  { label:'المبادرات الوطنية',         gov:true,  priv:true,  intl:false },
  { label:'حفلات الإطلاق والتدشين',   gov:true,  priv:true,  intl:false },
  { label:'الفعاليات الترفيهية',       gov:false, priv:true,  intl:true  },
  { label:'الإنتاج المرئي والإعلامي',  gov:true,  priv:true,  intl:true  },
];

const PARTNER_GROUPS = {
  'جهات حكومية':    ['وزارة الإعلام','وزارة الثقافة','وزارة التعليم','أمانة منطقة الرياض','هيئة تطوير الرياض','هيئة الترفيه'],
  'هيئات ومجالس':   ['غرفة الرياض','مجلس الشؤون الاقتصادية','المدن الصناعية','صندوق التنمية'],
  'شركات وشركاء':   ['كيا السعودية','العثيم','بيت الإيلاف','أنسا','صحاري'],
};

const AWARDS = [
  { t:'ISO 9001:2015', s:'نظام إدارة الجودة',          icon:'fas fa-certificate' },
  { t:'ISO 20121',     s:'إدارة الفعاليات المستدامة',   icon:'fas fa-leaf'        },
  { t:'عضوية IFEA',   s:'اتحاد الفعاليات الدولي',       icon:'fas fa-globe'       },
  { t:'MICE Award',    s:'أفضل منفذ مؤتمرات 2024',      icon:'fas fa-trophy'      },
];

const INSIGHTS = [
  {
    cat: 'تحليل',
    title: 'مستقبل صناعة الفعاليات في المملكة حتى 2030',
    read: '7 دقائق',
    date: '12 مايو 2026',
    author: 'فريق أبحاث أمتيا',
    excerpt: 'تشهد صناعة الفعاليات في المملكة العربية السعودية تحولاً جذرياً تقوده رؤية 2030، حيث تتضاعف الميزانيات المخصصة للقطاع سنوياً وتتغير طبيعة الجمهور المستهدف. يستكشف هذا المقال الملامح الكبرى للمرحلة القادمة.',
    img: 'img/12.jpeg',
    sections: [
      {
        h: 'مشهد صناعي بمليارات الريالات',
        p: 'وفق أحدث بيانات الهيئة العامة للسياحة والتراث الوطني، تتجاوز القيمة السوقية لقطاع الفعاليات والمؤتمرات في المملكة 95 مليار ريال بنهاية 2025، بمعدل نمو سنوي مركّب يبلغ 12.4%. الرقم ليس مفاجئاً لمن يتابع حجم المشاريع الكبرى التي تنطلق في الرياض وجدة والعلا والدمام، لكنه يضع المملكة ضمن أكبر خمس أسواق للفعاليات في منطقة الشرق الأوسط وشمال أفريقيا.'
      },
      {
        h: 'محاور النمو الثلاثة',
        p: 'يقف خلف هذا النمو ثلاثة محاور رئيسية: أولها الفعاليات الوطنية الكبرى كرؤية السعودية 2030 ومبادرة "السعودية الخضراء"، ثانيها المعارض الدولية المتخصصة التي تستقطب الشركات العالمية، وثالثها النمو المتسارع للفعاليات الترفيهية المرتبطة بمواسم مثل موسم الرياض وموسم جدة. كل محور من هذه المحاور يخلق طلباً مختلفاً على الخبرات التشغيلية واللوجستية.'
      },
      {
        h: 'التحوّل في الجمهور المستهدف',
        p: 'لم يعد جمهور الفعاليات في المملكة محصوراً في النخبة. نحن نشهد توسّعاً ملحوظاً في الشرائح العمرية الشابة، وارتفاع نسبة الحضور النسائي إلى ما يقارب 47% في بعض الفعاليات الكبرى. هذا التحوّل يفرض على المنظمين إعادة تصميم تجربة الزائر من الصفر، مع التركيز على الإتاحة والراحة والسلامة.'
      },
      {
        h: 'متطلبات الحوكمة والاستدامة',
        p: 'مع نضوج السوق، بدأت الجهات التنظيمية تشترط معايير أكثر صرامة في الحوكمة البيئية والاجتماعية. اعتماد ISO 20121 لإدارة الفعاليات المستدامة لم يعد ميزة تنافسية، بل شرطاً للمشاركة في المناقصات الحكومية الكبرى. الاستدامة هنا تعني أيضاً إدارة الموارد المالية بشفافية وتقديم تقارير أثر قابلة للتحقق.'
      },
      {
        h: 'ماذا يعني هذا لأمتيا وللقطاع؟',
        p: 'نرى أن المرحلة القادمة ستُحدّد فيها معايير جديدة للتميّز المهني. الشركات التي ستقود لن تكون الأكبر حجماً فقط، بل الأكثر قدرة على دمج البيانات في قراراتها التشغيلية، والأسرع في تبنّي تقنيات التجربة الغامرة، والأعمق شراكة مع الجهات الوطنية. هذه هي المرتكزات التي نبني عليها استراتيجيتنا للأعوام الخمسة المقبلة.'
      }
    ]
  },
  {
    cat: 'ميداني',
    title: 'كيف تُغير التجارب التفاعلية معنى المعارض الحديثة',
    read: '5 دقائق',
    date: '28 أبريل 2026',
    author: 'م. خالد العتيبي — مدير الإنتاج',
    excerpt: 'لم تعد المعارض مكاناً لعرض المنتجات على رفوف ثابتة. الزائر اليوم يبحث عن تجربة، عن لحظة يلتقط فيها صورة ويتحدث عنها أسبوعاً كاملاً. نشارككم في هذا المقال خلاصة ما لاحظناه ميدانياً في 12 معرضاً خلال 2024 و2025.',
    img: 'img/13.jpeg',
    sections: [
      {
        h: 'الزائر يتغيّر، والمساحة تتغيّر معه',
        p: 'في كل معرض ننظمه، نقيس متوسط مدة بقاء الزائر أمام الجناح. قبل 2023 كان المتوسط 45 ثانية. اليوم، مع إضافة عنصر تفاعلي واحد على الأقل (شاشة لمس، تجربة واقع افتراضي، نقطة تصوير احترافية)، يرتفع المتوسط إلى 3 دقائق و20 ثانية. هذا الفرق الهائل يترجم مباشرة إلى فرص تحويل أعلى للعملاء وفرصة أعمق لبناء انطباع العلامة التجارية.'
      },
      {
        h: 'أنماط التفاعل الأكثر نجاحاً',
        p: 'من بين عشرات الأنماط التي جربناها، هناك ثلاثة تأتي في المقدمة باستمرار: المحاكاة التفاعلية التي تسمح للزائر بتجربة المنتج افتراضياً، والمنافذ متعددة الحواس التي تجمع بين الصوت والرائحة والحركة، وأخيراً تجارب السرد القصصي التي تأخذ الزائر في رحلة منظّمة عبر مراحل واضحة. كل نمط منها يحتاج فريق تصميم مختلف ومهارات تنفيذية متخصصة.'
      },
      {
        h: 'البيانات هي العملة الحقيقية',
        p: 'كل نقطة تفاعل في المعرض هي فرصة لجمع بيانات قابلة للتحليل. أكثر من 70% من العارضين الذين نخدمهم يطلبون اليوم لوحات تحكم تحليلية فورية تعرض من توقف أمام جناحهم، ومن أكمل رحلة التجربة، وكيف تفاعل مع كل عنصر. هذا المستوى من القياس لم يكن متاحاً قبل خمس سنوات، وهو الآن من المتطلبات الأساسية في أي مناقصة جادة.'
      },
      {
        h: 'التحديات التشغيلية',
        p: 'التجارب التفاعلية تضيف طبقات جديدة من التعقيد التشغيلي: فرق تقنية متخصصة في الموقع، خطط طوارئ للتعطّل، تكامل بين الموردين المتعددين، ومخاطر أعلى على الجدول الزمني. الحل ليس في تبسيط التجربة، بل في بناء فريق تشغيلي قادر على إدارة هذه التعقيدات بصمت تام أمام الزائر. هذا هو الفرق بين معرض "يشتغل" ومعرض "يبهر".'
      },
      {
        h: 'نصيحة لمن يخطط لمعرضه القادم',
        p: 'ابدأ من السؤال: ما الفعل الواحد الذي تريد أن يقوم به الزائر بعد خروجه؟ إذا كانت الإجابة "تصوير فيديو ومشاركته"، صمّم كل شيء حول تلك اللحظة. إذا كانت الإجابة "طلب عرض سعر"، صمّم رحلة واضحة من الانتباه إلى التحويل. التفاعل ليس هدفاً بحد ذاته، بل وسيلة لخدمة هدف محدد.'
      }
    ]
  },
  {
    cat: 'اتجاهات',
    title: 'ثلاثة اتجاهات تُعيد رسم المؤتمرات الدولية',
    read: '6 دقائق',
    date: '10 أبريل 2026',
    author: 'أ. سارة الخالدي — مديرة التطوير',
    excerpt: 'المؤتمرات الدولية تمر بأكبر تحوّل هيكلي منذ ظهور المؤتمرات الافتراضية في 2020. نستعرض في هذا المقال ثلاثة اتجاهات رئيسية نراها تتبلور بوضوح في فعاليات 2025-2026، وكيف تستجيب لها الجهات المنظمة الرائدة.',
    img: 'img/14.jpg',
    sections: [
      {
        h: 'الاتجاه الأول: النموذج الهجين المتطوّر',
        p: 'لم يعد "الهجين" مجرد بث مباشر للجلسات. النموذج الجديد يدمج الحضور الافتراضي في التصميم الفيزيائي للمؤتمر: شاشات عرض تفاعلية للحضور الافتراضي، وغرف تواصل مخصصة، ومسارات تعليمية مختلفة لكل نوع من الجمهور. بعض المؤتمرات الكبرى بدأت تحجز أكثر من 30% من مساحتها للحضور الافتراضي وحدهم، معتبرين إياهم جمهوراً كامل الأهلية وليسوا حضوراً ثانوياً.'
      },
      {
        h: 'الاتجاه الثاني: المؤتمرات كمنصّات أعمال',
        p: 'الجمهور لم يعد يكتفي بالحضور والاستماع. يطالب بفرص حقيقية لبناء علاقات عمل، لقاءات مع متحدثين، وعقود تشارك. المنظمون الأذكياء يدمجون هذه المتطلبات في التصميم: مناطق أعمال مخصصة، تطبيق مطابقة ذكي للاهتمامات، ومساحات مغلقة للاجتماعات الخاصة. الفارق في القيمة المضافة بين مؤتمر "محاضرات" ومؤتمر "منصة أعمال" يصل إلى 4 أضعاف في كثير من المؤشرات.'
      },
      {
        h: 'الاتجاه الثالث: الاستدامة كمعيار أساسي',
        p: 'أصبح قياس البصمة الكربونية للمؤتمر متطلباً تنظيمياً في أوروبا، ومتطلباً أخلاقياً في منطقتنا. الحلول تتراوح بين خيارات السفر المستدام، وتقليل المواد المطبوعة، واستخدام تقنيات العرض الرقمية، وصولاً إلى تصميم معارض قابلة لإعادة التدوير. الجهة المنظمة التي لا تملك خطة استدامة واضحة ستواجه تحديات متزايدة في استقطاب الرعاة والجهات المشاركة.'
      },
      {
        h: 'انعكاس هذه الاتجاهات على المملكة',
        p: 'المملكة في موقع قوي للاستفادة من هذه التحولات. بنيتنا التحتية الحديثة في الرياض وجدة، والاستثمار في الكوادر الوطنية الشابة، والدعم الحكومي للابتكار، كلها عوامل تعطي المنظمين المحليين أفضلية تنافسية. التحدي يبقى في بناء خبرات تشغيلية قادرة على إدارة التعقيد المتزايد لهذه النماذج الجديدة.'
      },
      {
        h: 'كيف تستعد لمؤتمرك الدولي القادم',
        p: 'أولاً: حدّد بوضوح هل تريد مؤتمراً هجيناً أم فيزيائياً أم رقمياً بالكامل. ثانياً: استثمر في بيانات الحضور منذ اليوم الأول للمشروع. ثالثاً: اختر فريقاً تشغيلياً يفهم النماذج الجديدة وليس فقط النماذج التقليدية. رابعاً: لا تتنازل عن الاستدامة، واعتبرها استثماراً طويل الأمد في سمعة الجهة وعلاقتها بالمجتمع.'
      },
      {
        h: 'خلاصة',
        p: 'المؤتمرات الدولية ليست في أزمة، بل تمر بمرحلة نضج. النموذج القديم (قاعة + متحدثين + جمهور جالس) لم يعد كافياً. المنظمون الذين يفهمون هذا التحوّل ويستثمرون فيه مبكراً، سيكونون الرواد في المرحلة القادمة. نحن في أمتيا نستثمر في هذه القدرات منذ سنوات، ونتائجنا في 2025-2026 تؤكد أن الاستثمار في الاتجاه الصحيح يؤتي ثماره.'
      }
    ]
  }
];

const FAQS = [
  { q:'ما القطاعات التي تخدمها أمتيا؟',       a:'نعمل مع الجهات الحكومية والهيئات والمؤسسات الخاصة والشركاء الدوليين، بمنهجية واحدة تختلف فقط في درجة الحوكمة المطلوبة.' },
  { q:'كم من الوقت يحتاج المشروع المتوسط؟',   a:'من 6 إلى 14 أسبوعاً حسب الحجم. نوفّر مساراً تنفيذياً مختصراً للمشاريع العاجلة دون التأثير على الجودة.' },
  { q:'هل تعملون خارج الرياض؟',               a:'نُنفّذ في 13 منطقة داخل المملكة، مع قواعد تشغيلية في الرياض وجدة والدمام، وفِرَق ميدانية متنقلة.' },
  { q:'كيف تقيسون أثر الفعاليات؟',            a:'إطار قياس مكوّن من 5 محاور: الحضور، التفاعل، التغطية الإعلامية، الأثر على الجمهور المستهدف، والعائد على الاستثمار.' },
  { q:'ما الفرق بينكم وبين شركات الفعاليات الأخرى؟', a:'نعمل كشريك استراتيجي لا منفذ. نشارك في صياغة الأهداف وقياس الأثر، ونقدم تقارير تنفيذية شاملة بعد كل مشروع.' },
];

const MARQUEE_ITEMS = [
  'وزارة الإعلام','وزارة الثقافة','هيئة الترفيه','هيئة تطوير الرياض',
  'أمانة منطقة الرياض','LEAP','منتدى مبادرة مستقبل الاستثمار','غرفة الرياض',
  'وزارة التعليم','صندوق التنمية','كيا السعودية','معرض الرياض الدولي',
];

/* ══ RENDER FUNCTIONS ══ */

function renderMarquee() {
  const track = document.getElementById('marquee-track');
  const all = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  track.innerHTML = all.map((item, i) =>
    i % 2 === 0
      ? `<span>${item}</span>`
      : `<span>${item}</span><span class="sep" aria-hidden="true">✦</span>`
  ).join('');
}

function makeLogoSVG(p) { return ''; }

function renderProjects(filter) {
  const grid     = document.getElementById('pgrid');
  const countEl  = document.getElementById('projects-count');
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <article class="pcard" tabindex="0" role="button"
      aria-label="عرض تفاصيل مشروع ${p.title}"
      style="opacity:0;animation:cardIn .6s cubic-bezier(.22,1,.36,1) ${i*70}ms forwards"
      data-pid="${p.id}" data-pc="${p.cat}"
      onclick="openProjectModal(${p.id})"
      onkeydown="if(event.key==='Enter'||event.key===' '){openProjectModal(${p.id})}">

      <div class="pcard-logo" aria-hidden="true">${makeLogoSVG(p)}</div>

      <img src="${p.img}" alt="${p.title}" loading="${i < 3 ? 'eager' : 'lazy'}"
           onerror="this.style.background='linear-gradient(135deg,#0F4C5C 0%,#1F2937 100%)';this.style.display='block';this.src='';">
      <div class="pcard-ov" aria-hidden="true"></div>
      <div class="pcard-body">
        <div class="pcard-cat">${p.cat}</div>
        <h3 class="pcard-title">${p.title}</h3>
        <div class="pcard-meta">
          <span class="pcard-mi"><i class="fas fa-location-dot" aria-hidden="true"></i> ${p.city}</span>
          <span class="pcard-mi"><i class="fas fa-calendar" aria-hidden="true"></i> ${p.year}</span>
          <span class="pcard-mi"><i class="fas fa-users" aria-hidden="true"></i> ${p.visitors}</span>
        </div>
        <div class="pcard-hint" aria-hidden="true"><i class="fas fa-eye"></i> عرض التفاصيل</div>
      </div>
    </article>
  `).join('');

  countEl.textContent = filtered.length + ' مشروع معروض';
}

function renderRegions() {
  const grid = document.getElementById('regions-grid');
  grid.innerHTML = REGIONS.map((r, i) => `
    <button class="region-btn${i===0?' active':''}" data-name="${r.name}" data-count="${r.count}" data-idx="${i}" aria-pressed="${i===0}">
      <div class="rname">${r.name}</div>
      <div class="rcnt">${r.count} مشروع</div>
    </button>
  `).join('');
  grid.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', e => activateRegion(+e.currentTarget.dataset.idx));
  });
}

function activateRegion(idx) {
  const r = REGIONS[idx];
  if (!r) return;

  document.getElementById('active-city').textContent  = r.name;
  document.getElementById('active-count').textContent = r.count;

  document.querySelectorAll('.region-btn').forEach(b => {
    const active = +b.dataset.idx === idx;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', active);
  });

  document.querySelectorAll('.city-dot').forEach(d => {
    const active = +d.dataset.idx === idx;
    d.classList.toggle('active', active);
  });

  const tt = document.getElementById('map-tooltip');
  tt.querySelector('#mtt-city').textContent  = r.name;
  tt.querySelector('#mtt-count').textContent = r.count + ' مشروع منجز';

  const dot = document.querySelector(`.city-dot[data-idx="${idx}"]`);
  if (dot) {
    const svgEl  = document.getElementById('saudi-map');
    const svgBox = svgEl.getBoundingClientRect();
    const wrap   = document.querySelector('.map-svg-wrap');
    const wBox   = wrap.getBoundingClientRect();
    const circles = dot.querySelectorAll('circle');
    const mainCircle = circles[circles.length - 1];
    const cx = parseFloat(mainCircle.getAttribute('cx'));
    const cy = parseFloat(mainCircle.getAttribute('cy'));
    const vb = svgEl.viewBox.baseVal;
    const scaleX = svgBox.width  / vb.width;
    const scaleY = svgBox.height / vb.height;
    const pxX = cx * scaleX;
    const pxY = cy * scaleY;
    const relX = svgBox.left - wBox.left + pxX;
    const relY = svgBox.top  - wBox.top  + pxY;
    tt.style.top   = Math.max(0, relY - 70) + 'px';
    tt.style.right = 'auto';
    tt.style.left  = Math.min(relX - 60, wBox.width - 200) + 'px';
    tt.classList.add('show');
    clearTimeout(tt._hideTimer);
    tt._hideTimer = setTimeout(() => tt.classList.remove('show'), 2400);
  }
}

function selectRegion(name, count) {
  const idx = REGIONS.findIndex(r => r.name === name);
  if (idx >= 0) activateRegion(idx);
}
window.selectRegion = selectRegion;

function bindMapDots() {
  document.querySelectorAll('.city-dot').forEach(dot => {
    dot.style.cursor = 'pointer';
    dot.addEventListener('click',      () => activateRegion(+dot.dataset.idx));
    dot.addEventListener('mouseenter', () => {
      activateRegion(+dot.dataset.idx);
      showHoverLine(+dot.dataset.idx);
    });
    dot.addEventListener('mouseleave', () => hideAllHoverLines());
    dot.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateRegion(+dot.dataset.idx); }
    });
  });
}

function showHoverLine(idx) {
  hideAllHoverLines();
  const line = document.getElementById('hline-' + idx);
  if (line) {
    const x1 = parseFloat(line.getAttribute('x1')), y1 = parseFloat(line.getAttribute('y1'));
    const x2 = parseFloat(line.getAttribute('x2')), y2 = parseFloat(line.getAttribute('y2'));
    const len = Math.hypot(x2 - x1, y2 - y1) || 1;
    line.style.strokeDasharray = len;
    line.style.strokeDashoffset = len;
    line.getBoundingClientRect();
    line.classList.add('show');
  }
}

function hideAllHoverLines() {
  document.querySelectorAll('.map-hover-line').forEach(l => l.classList.remove('show'));
}

document.addEventListener('DOMContentLoaded', () => {
  const mapWrap = document.querySelector('.map-svg-wrap');
  if (mapWrap) {
    mapWrap.addEventListener('mouseleave', () => {
      clearTimeout(document.getElementById('map-tooltip')._hideTimer);
      document.getElementById('map-tooltip').classList.remove('show');
      hideAllHoverLines();
    });
  }
});

function onRegionSelect(e) {
  document.querySelectorAll('.region-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
  e.currentTarget.classList.add('active');
  e.currentTarget.setAttribute('aria-pressed','true');
  activateRegion(+e.currentTarget.dataset.idx);
}

function renderVisionCards() {
  document.getElementById('vision-cards').innerHTML = VISION_PILLARS.map((p, i) => `
    <article class="vision-card rv" style="transition-delay:${i*100}ms" role="listitem">
      <div class="vision-card-head">
        <span class="vision-code">${p.code}</span>
        <span style="font-size:10px;color:var(--smoke);font-weight:700;letter-spacing:.1em;text-transform:uppercase">محور</span>
      </div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
      <ul class="vision-items" aria-label="أمثلة">
        ${p.items.map(x => `<li>${x}</li>`).join('')}
      </ul>
    </article>
  `).join('');
  observeReveal(document.querySelectorAll('#vision-cards .rv'));
}

function renderLifecycle() {
  document.getElementById('lifecycle-grid').innerHTML = LIFECYCLE.map((s, i) => `
    <li class="lifecycle-item rv" style="transition-delay:${i*70}ms">
      <div class="lifecycle-num" aria-hidden="true">${s.n}</div>
      <div class="lifecycle-title">${s.t}</div>
      <p class="lifecycle-desc-text">${s.d}</p>
    </li>
  `).join('');
  observeReveal(document.querySelectorAll('#lifecycle-grid .rv'));
}

function renderCapabilities() {
  document.getElementById('cap-tbody').innerHTML = CAPABILITIES.map(c => `
    <tr>
      <td>${c.label}</td>
      <td>${c.gov ? '<span class="cap-check" aria-label="متاح">✓</span>' : '<span class="cap-dash" aria-label="غير متاح">—</span>'}</td>
      <td>${c.priv ? '<span class="cap-check" aria-label="متاح">✓</span>' : '<span class="cap-dash" aria-label="غير متاح">—</span>'}</td>
      <td>${c.intl ? '<span class="cap-check" aria-label="متاح">✓</span>' : '<span class="cap-dash" aria-label="غير متاح">—</span>'}</td>
    </tr>
  `).join('');
}

function renderPartners(activeTab) {
  const tabs = Object.keys(PARTNER_GROUPS);
  const tabContainer = document.getElementById('partner-tabs');
  tabContainer.innerHTML = tabs.map(t => `
    <button class="tab-btn${t===activeTab?' active':''}" data-tab="${t}" role="tab" aria-selected="${t===activeTab}">${t}</button>
  `).join('');
  tabContainer.querySelectorAll('.tab-btn').forEach(btn =>
    btn.addEventListener('click', e => renderPartners(e.currentTarget.dataset.tab))
  );
  document.getElementById('partners-grid').innerHTML =
    PARTNER_GROUPS[activeTab].map(p => `
      <div class="partner-cell" role="listitem">${p}</div>
    `).join('');
}

function renderAwards() {
  document.getElementById('awards-grid').innerHTML = AWARDS.map((a, i) => `
    <div class="award-card rv" style="transition-delay:${i*80}ms" role="listitem">
      <div class="award-icon" aria-hidden="true"><i class="${a.icon}"></i></div>
      <div class="award-title">${a.t}</div>
      <div class="award-sub">${a.s}</div>
    </div>
  `).join('');
  observeReveal(document.querySelectorAll('#awards-grid .rv'));
}

function renderInsights() {
  document.getElementById('insights-grid').innerHTML = INSIGHTS.map((p, i) => `
    <article class="insight-card rv" style="transition-delay:${i*100}ms" role="listitem" tabindex="0"
      onclick="openInsightModal(${i})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openInsightModal(${i})}" aria-label="اقرأ المقال: ${p.title}">
      <div class="insight-top">
        <span class="insight-cat">${p.cat}</span>
        <span>${p.read}</span>
      </div>
      <h3 class="insight-title">${p.title}</h3>
      <div class="insight-link">اقرأ المقال <i class="fas fa-arrow-left" aria-hidden="true"></i></div>
    </article>
  `).join('');
  observeReveal(document.querySelectorAll('#insights-grid .rv'));
}

function openInsightModal(idx) {
  const a = INSIGHTS[idx];
  if (!a) return;
  const m = document.getElementById('insight-modal');

  const img = document.getElementById('insight-img');
  img.src = a.img; img.alt = a.title;
  img.onerror = function(){ this.style.background='linear-gradient(135deg,#0F4C5C,#1F2937)'; this.src=''; };

  document.getElementById('insight-modal-cat').textContent = a.cat;
  document.getElementById('insight-modal-title').textContent = a.title;
  document.getElementById('insight-modal-excerpt').textContent = a.excerpt;

  document.getElementById('insight-modal-meta').innerHTML = `
    <span><i class="fas fa-user-edit" aria-hidden="true"></i> ${a.author}</span>
    <span><i class="far fa-calendar" aria-hidden="true"></i> ${a.date}</span>
    <span><i class="far fa-clock" aria-hidden="true"></i> ${a.read}</span>
  `;

  document.getElementById('insight-modal-content').innerHTML = a.sections.map(s => `
    <h3>${s.h}</h3>
    <p>${s.p}</p>
  `).join('');

  document.getElementById('insight-modal-footer').innerHTML = `
    <div class="insight-modal-footer-note">
      <i class="fas fa-lightbulb" aria-hidden="true"></i>
      شاركنا رأيك في هذا المقال — نقدّر حوار القراء والمتخصصين.
    </div>
    <a href="#contact" class="insight-modal-cta" onclick="closeInsightModal()">
      <i class="fas fa-paper-plane" aria-hidden="true"></i>
      تواصل مع فريقنا
    </a>
  `;

  m.setAttribute('aria-hidden', 'false');
  m.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Reset scroll inside the modal sheet
  const sheet = m.querySelector('.pmodal-sheet');
  if (sheet) sheet.scrollTop = 0;

  setTimeout(() => m.querySelector('.pmodal-close').focus(), 80);
}

function closeInsightModal() {
  const m = document.getElementById('insight-modal');
  if (!m) return;
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderFaq() {
  document.getElementById('faq-list').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item${i===0?' open':''}" role="listitem">
      <button class="faq-question" aria-expanded="${i===0}" onclick="toggleFaq(this)">
        <span>${f.q}</span>
        <span class="faq-toggle" aria-hidden="true">+</span>
      </button>
      <p class="faq-answer">${f.a}</p>
    </div>
  `).join('');
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.faq-question').setAttribute('aria-expanded','false');
  });
  if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
}

/* ══ HERO SLIDESHOW ══ */
let hIdx = 0;
const hSlides = document.querySelectorAll('.hslide');
const hDots   = document.querySelectorAll('.hdot');

function gotoSlide(n) {
  hSlides[hIdx].classList.remove('active');
  hDots[hIdx].classList.remove('active');
  hIdx = ((n % hSlides.length) + hSlides.length) % hSlides.length;
  hSlides[hIdx].classList.add('active');
  hDots[hIdx].classList.add('active');
}
const heroInterval = setInterval(() => gotoSlide(hIdx + 1), 5800);
hDots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(heroInterval); gotoSlide(i); }));
hDots.forEach((d, i) => d.addEventListener('keydown', e => { if (e.key === 'Enter') gotoSlide(i); }));

/* ══ SCROLL REVEAL ══ */
function observeReveal(elements) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => io.observe(el));
}

/* ══ ANIMATED COUNTERS ══ */
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target;
      const target = +el.dataset.target;
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString('en');
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter').forEach(c => io.observe(c));
}

/* ══ PROJECT FILTER ══ */
document.getElementById('pfilter').addEventListener('click', e => {
  const btn = e.target.closest('.pfbtn');
  if (!btn) return;
  document.querySelectorAll('.pfbtn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(btn.dataset.pf);
});

/* ══ HEADER SCROLL ══ */
window.addEventListener('scroll', () => {
  document.getElementById('hdr').classList.toggle('scrolled', window.scrollY > 16);
  document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 400);
  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('#nav-links a');
  let current = '';
  sections.forEach(s => { if (window.scrollY + 100 >= s.offsetTop) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}, { passive: true });

/* ══ MOBILE MENU ══ */
document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  const open  = menu.classList.toggle('open');
  this.classList.toggle('open', open);
  this.setAttribute('aria-expanded', open);
});
function closeMobile() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded','false');
}

/* ══ SMOOTH SCROLL ══ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const h = this.getAttribute('href');
    if (!h || h === '#' || h === '#!') return;
    const target = document.querySelector(h);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 74, behavior: 'smooth' });
    }
  });
});

/* ══ MULTI-STEP FORM ══ */
let formStep = 0;
const totalSteps = 3;

function buildChips(containerId, options) {
  document.getElementById(containerId).innerHTML = options.map(x =>
    `<button type="button" class="chip-btn" onclick="toggleChip(this,'${containerId}')">${x}</button>`
  ).join('');
}
function toggleChip(btn, groupId) {
  document.querySelectorAll('#' + groupId + ' .chip-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}
buildChips('type-chips', ['مؤتمر','معرض','مبادرة','حفل إطلاق','فعالية ثقافية','أخرى']);
buildChips('size-chips', ['أقل من 500','500 – 2K','2K – 10K','أكثر من 10K']);

function updateFormUI() {
  for (let i = 0; i < totalSteps; i++) {
    const panel = document.getElementById('fpanel-' + i);
    if (panel) panel.classList.toggle('active', i === formStep);
  }
  const pct = ((formStep + 1) / totalSteps * 100).toFixed(2);
  document.getElementById('fstep-label').textContent = 'خطوة ' + (formStep + 1) + ' من ' + totalSteps;
  const pf = document.getElementById('progress-fill');
  pf.style.width = pct + '%';
  pf.parentElement.setAttribute('aria-valuenow', pct);
  document.getElementById('btn-prev').disabled = formStep === 0;
  const btnNext = document.getElementById('btn-next');
  if (formStep === totalSteps - 1) {
    btnNext.textContent = 'إرسال الطلب';
    btnNext.className = 'btn-submit';
  } else {
    btnNext.textContent = 'التالي';
    btnNext.className = 'btn-next';
  }
}
function formNext() {
  if (formStep < totalSteps - 1) { formStep++; updateFormUI(); }
  else {
    document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('success-screen').classList.add('active');
    document.getElementById('form-nav').style.display = 'none';
    document.querySelector('.form-header').style.display = 'none';
    document.querySelector('.progress-bar').style.display = 'none';
  }
}
function formPrev() {
  if (formStep > 0) { formStep--; updateFormUI(); }
}

/* ══ PROJECT MODAL ══ */
function openProjectModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  const m = document.getElementById('project-modal');

  const img = document.getElementById('pmodal-img');
  img.src = p.img; img.alt = p.title;

  document.getElementById('pmodal-logo').innerHTML = makeLogoSVG({...p, id: 'modal'});

  document.getElementById('pmodal-cat').textContent   = p.cat;
  document.getElementById('pmodal-title').textContent = p.title;
  document.getElementById('pmodal-desc').textContent  = p.desc;
  document.getElementById('pmodal-client').textContent = p.client;
  document.getElementById('pmodal-city').textContent   = p.city;
  document.getElementById('pmodal-year').textContent   = p.year;
  document.getElementById('pmodal-duration').textContent = p.duration;
  document.getElementById('pmodal-team').textContent   = p.team;
  document.getElementById('pmodal-scope').textContent  = p.scope;

  document.getElementById('pmodal-stats').innerHTML = p.stats.map(s => {
    const [val, ...rest] = s.split(' ');
    return `<div class="pmodal-stat"><div class="sv">${val}</div><div class="sk">${rest.join(' ')}</div></div>`;
  }).join('');

  document.getElementById('pmodal-tags').innerHTML =
    p.tags.map(t => `<span class="pmodal-tag">${t}</span>`).join('');

  m.setAttribute('aria-hidden', 'false');
  m.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => m.querySelector('.pmodal-close').focus(), 80);
}

function closeProjectModal() {
  const m = document.getElementById('project-modal');
  m.classList.remove('open');
  m.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeProjectModal();
    closeInsightModal();
  }
});


const cardStyle = document.createElement('style');
cardStyle.textContent = '@keyframes cardIn { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }';
document.head.appendChild(cardStyle);

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('footer-year').textContent =
    '© ' + new Date().getFullYear() + ' شركة أمتيا للحلول الإبداعية. جميع الحقوق محفوظة.';

  renderMarquee();
  renderProjects('all');
  renderRegions();
  bindMapDots();
  activateRegion(0);
  renderVisionCards();
  renderLifecycle();
  renderCapabilities();
  renderPartners('جهات حكومية');
  renderAwards();
  renderInsights();
  renderFaq();

  observeReveal(document.querySelectorAll('.rv, .rv-l, .rv-r'));
  initCounters();
  document.getElementById('hdr').classList.toggle('scrolled', window.scrollY > 16);
});
