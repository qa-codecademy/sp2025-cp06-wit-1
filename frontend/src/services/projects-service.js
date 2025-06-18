const mkProjects = [
  {
    id: 1,
    title: "Топол оброк за бездомници",
    description: `Овој проект започна како иницијатива од група волонтери кои беа длабоко загрижени за судбината на бездомниците во Битола, особено во зимските месеци кога студот е најжесток. Мисијата е да се обезбеди топол, нутритивен оброк секој ден, за оние кои немаат дом и основни услови за живот. Освен што ги хранат, волонтерите секогаш сакаат да им подадат рака, да разговараат и да понудат поддршка во форма на облека и хигиенски материјали. За поддршка на проектот, јавете се на телефон: +389 47 123 456 или донирајте на сметка: 300000000111222 - НЛБ Банка, на име на фондацијата “Топол оброк”. Вашата помош значи живот.`,
    image: "https://picsum.photos/800/400?random=1",
    typeId: 1,
    isActive: true,
    datePosted: "2025-04-29",
    endDate: "2025-06-15",
    collected: 1200,
    goal: 2000,
    phone: "+389 47 123 456",
    bankAccount: "300000000111222",
  },
  {
    id: 2,
    title: "Книги за секое дете",
    description: `Во многу рурални средини децата немаат пристап до книги и училишни материјали, што ја ограничава нивната шанса за образование и развој. Овој проект има цел да собере што повеќе книги, тетратки, моливи и боички за деца од таквите села, за да можат да учат со радост и да ја развиваат својата имагинација. Доброволци патуваат по руралните региони, од село до село, носејќи насмевки и надеж. Контакт: +389 75 987 654. Банкарска сметка за донации: 310000000222333 - Стопанска Банка.`,
    image: "https://picsum.photos/800/400?random=2",
    typeId: 2,
    isActive: true,
    datePosted: "2025-02-15",
    endDate: "2025-05-01",
    collected: 790,
    goal: 800,
    phone: "+389 75 987 654",
    bankAccount: "310000000222333",
  },
  {
    id: 3,
    title: "Зелена површина за паркот",
    description: `Во Битола, јавните паркови се оази на свеж воздух и простор за релаксација. Но, со текот на годините, многу зелени површини се занемарени и загадени. Овој проект има за цел да обнови и прошири зелените површини преку садење нови дрвја, цвеќиња и чистење на теренот. Се вклучуваат граѓани, училишта и локални компании во акцијата за подобар животен простор. За волонтирање и донации, јавете се на +389 47 222 333 или уплатете на 320000000444555 - Комерцијална Банка.`,
    image: "https://picsum.photos/800/400?random=3",
    typeId: 5,
    isActive: true,
    datePosted: "2025-03-10",
    endDate: "2025-07-01",
    collected: 1500,
    goal: 3000,
    phone: "+389 47 222 333",
    bankAccount: "320000000444555",
  },
  {
    id: 4,
    title: "Поддршка за млади претприемачи",
    description: `Младите луѓе со идеи за бизнис често се соочуваат со финансиски и организациски пречки. Овој проект обезбедува финансиска поддршка, обуки и менторство за оние кои сакаат да започнат сопствен бизнис. Покрај тоа, се организираат работилници и конференции каде претприемачите можат да ги развијат своите вештини и да се поврзат со инвеститори. Ако сте заинтересирани, контактирајте на +389 70 111 222. За донации: 330000000555666 - ТТК Банка.`,
    image: "https://picsum.photos/800/400?random=4",
    typeId: 1,
    isActive: true,
    datePosted: "2025-04-05",
    endDate: "2025-08-01",
    collected: 100,
    goal: 2500,
    phone: "+389 70 111 222",
    bankAccount: "330000000555666",
  },
  {
    id: 5,
    title: "Спортска опрема за училишта",
    description: `Физичката активност е клучна за здрави деца, но многу училишта во руралните подрачја немаат доволно спортска опрема. Овој проект собира средства за набавка на фудбалски топки, рекети, конуси и друга спортска опрема која ќе им овозможи на учениците да учествуваат во спортски активности и да ја развиваат својата кондиција и тимска работа. За поддршка јавете се на +389 42 789 012 или уплатете на 340000000666777 - Шпаркасе Банка.`,
    image: "https://picsum.photos/800/400?random=5",
    typeId: 2,
    isActive: false,
    datePosted: "2024-12-20",
    endDate: "2025-03-15",
    collected: 1800,
    goal: 1800,
    phone: "+389 42 789 012",
    bankAccount: "340000000666777",
  },
  {
    id: 6,
    title: "Поддршка на локални уметници",
    description: `Локалните уметници често имаат проблем да ги продадат своите дела и да добијат признание. Овој проект помага преку организирање изложби, маркетинг кампањи и продажба на уметнички дела. Целта е да се поддржи културниот развој и да се зачува богатството на локалната уметничка сцена. За повеќе информации или донации, јавете се на +389 75 333 444. Банкарска сметка: 350000000777888 - Охридска Банка.`,
    image: "https://picsum.photos/800/400?random=6",
    typeId: 1,
    isActive: true,
    datePosted: "2025-01-15",
    endDate: "2025-05-30",
    collected: 700,
    goal: 1500,
    phone: "+389 75 333 444",
    bankAccount: "350000000777888",
  },
  {
    id: 7,
    title: "Чисти реки - здрава природа",
    description: `Загадувањето на реките има негативно влијание врз екосистемот и здравјето на луѓето. Овој проект е посветен на редовно чистење на речните корита, отстранување на отпад и подигање на свеста кај граѓаните преку едукација и акции за собирање отпадоци. Придружете ни се во акцијата и помогнете да ги заштитиме природните ресурси. Контакт телефон: +389 47 555 666, сметка за донации: 360000000888999 - Унибанка.`,
    image: "https://picsum.photos/800/400?random=7",
    typeId: 5,
    isActive: false,
    datePosted: "2025-02-01",
    endDate: "2025-04-15",
    collected: 900,
    goal: 900,
    phone: "+389 47 555 666",
    bankAccount: "360000000888999",
  },
  {
    id: 8,
    title: "Помош за постари лица",
    description: `Постарите лица, особено оние без семејна поддршка, често се соочуваат со проблеми како недостиг на храна, лекови и основни потреби. Овој проект има за цел да обезбеди редовна помош преку доставување на храна, лекови и хигиенски средства. Волонтерите исто така организираат посети и дружење за намалување на осаменоста. За поддршка јавете се на +389 70 555 777 или донирајте на 370000000999000 - Халкбанк.`,
    image: "https://picsum.photos/800/400?random=8",
    typeId: 1,
    isActive: true,
    datePosted: "2025-03-25",
    endDate: "2025-06-30",
    collected: 1300,
    goal: 2200,
    phone: "+389 70 555 777",
    bankAccount: "370000000999000",
  },
  {
    id: 9,
    title: "Техничка обука за млади",
    description: `Во современиот свет, дигиталните вештини се клуч за успешна кариера. Овој проект овозможува обука за млади луѓе од руралните средини кои немаат пристап до вакви програми. Обуките вклучуваат програмирање, основи на информатика и користење на дигитални алатки. Проектот е поддржан од експерти и локални училишта, а целта е да се зголемат шансите за вработување и иновација. За пријавување и донации, јавете се на +389 42 123 789, сметка: 380000001000111 - Триглав Банка.`,
    image: "https://picsum.photos/800/400?random=9",
    typeId: 2,
    isActive: true,
    datePosted: "2025-04-10",
    endDate: "2025-09-01",
    collected: 500,
    goal: 2000,
    phone: "+389 42 123 789",
    bankAccount: "380000001000111",
  },
  {
    id: 10,
    title: "Заштита на дивите животни",
    description: `Дивите животни се неизоставен дел од природата и еко-системот. Овој проект се фокусира на заштита, рехабилитација и едукација поврзана со зачувување на овие животни. Се работи на спасување на повредени животни, заштита на нивните живеалишта и организирање на јавни предавања и кампањи. Секој може да се приклучи и да помогне преку донации или волонтирање. Контакт телефон: +389 70 444 555, сметка за донации: 390000001111222 - ПроКредит Банка.`,
    image: "https://picsum.photos/800/400?random=10",
    typeId: 5,
    isActive: false,
    datePosted: "2024-11-30",
    endDate: "2025-03-31",
    collected: 1100,
    goal: 1100,
    phone: "+389 70 444 555",
    bankAccount: "390000001111222",
  },
];



const albProjects = [
  {
    id: 1,
    title: "Vakt i ngrohtë për të pastrehët",
    description: `Ky projekt nisi si një iniciativë nga një grup vullnetarësh të shqetësuar thellë për fatin e të pastrehëve në Bitola, veçanërisht gjatë muajve të ftohtë të dimrit kur temperaturat janë më të ulëta. Qëllimi është të ofrohet një vakt i ngrohtë dhe ushqyes çdo ditë për ata që nuk kanë strehim apo kushte themelore jetese. Përveç ushqimit, vullnetarët gjithmonë përpiqen të ofrojnë edhe përkrahje emocionale, biseda të ngrohta dhe ndihmë me rroba apo produkte higjienike.

Për të ndihmuar këtë projekt, kontaktoni në: +389 47 123 456 ose bëni një donacion në llogarinë: 300000000111222 - NLB Banka në emër të fondacionit “Vakt i ngrohtë”. Ndihma juaj do të thotë jetë.`,
    image: "https://picsum.photos/800/400?random=1",
    typeId: 1,
    isActive: true,
    datePosted: "2025-04-29",
    endDate: "2025-06-15",
    collected: 1200,
    goal: 2000,
    phone: "+389 47 123 456",
    bankAccount: "300000000111222",
  },
  {
    id: 2,
    title: "Libra për çdo fëmijë",
    description: `Në shumë zona rurale fëmijët nuk kanë qasje në libra apo materiale shkollore, gjë që kufizon mundësitë për arsim dhe zhvillim. Ky projekt synon të mbledhë sa më shumë libra, fletore, lapsa dhe bojëra për fëmijët në këto fshatra që ata të mund të mësojnë me gëzim dhe të zhvillojnë imagjinatën e tyre.

Vullnetarë udhëtojnë nga fshati në fshat duke shpërndarë buzëqeshje dhe shpresë. Kontakti: +389 75 987 654. Llogari bankare për donacione: 310000000222333 - Stopanska Banka.`,
    image: "https://picsum.photos/800/400?random=2",
    typeId: 2,
    isActive: true,
    datePosted: "2025-02-15",
    endDate: "2025-05-01",
    collected: 790,
    goal: 800,
    phone: "+389 75 987 654",
    bankAccount: "310000000222333",
  },
  {
    id: 3,
    title: "Hapësirë e gjelbër për parkun",
    description: `Në Bitola, parqet publikë janë oaze ajri të pastër dhe vende për relaksim, por me kalimin e viteve shumë nga këto hapësira janë lënë pas dore dhe janë ndotur. Ky projekt ka për qëllim të rifreskojë dhe zgjerojë hapësirat e gjelbra duke mbjellë pemë të reja, lule dhe duke pastruar ambientin.

Qytetarët, shkollat dhe bizneset lokale janë ftuar të marrin pjesë në këtë iniciativë për një mjedis më të mirë. Për të kontribuar ose për të marrë pjesë si vullnetar, kontaktoni në +389 47 222 333 ose bëni një pagesë në 320000000444555 - Komercijalna Banka.`,
    image: "https://picsum.photos/800/400?random=3",
    typeId: 5,
    isActive: true,
    datePosted: "2025-03-10",
    endDate: "2025-07-01",
    collected: 1500,
    goal: 3000,
    phone: "+389 47 222 333",
    bankAccount: "320000000444555",
  },
  {
    id: 4,
    title: "Mbështetje për sipërmarrësit e rinj",
    description: `Të rinjtë plot ide shpesh ndeshen me pengesa të mëdha për të filluar biznesin e tyre – qoftë mungesë financimi, qasje në mentorë apo mjedise për zhvillim. Ky projekt është krijuar për t’u dhënë atyre pikërisht këtë: trajnim, mbështetje monetare dhe mundësi për të krijuar rrjete profesionale.

Përmes seminareve, bootcamp-eve dhe mentorimit individual, të rinjtë zhvillojnë aftësi praktike dhe ndërtojnë plane konkrete biznesi. Ata që tregojnë përkushtim marrin fonde fillestare për të nisur projektet e tyre në mënyrë të qëndrueshme. Në konferenca të hapura, investitorë dhe ekspertë ndihmojnë të rinjtë që të prezantojnë idetë e tyre dhe të bashkëpunojnë për zhvillim të mëtejshëm.

Qëllimi është të krijojmë një brez të ri inovatorësh që nuk presin punë – por e krijojnë atë.

Kontaktoni në +389 70 111 222. Për donacione: 330000000555666 - TTK Banka.`,
    image: "https://picsum.photos/800/400?random=4",
    typeId: 1,
    isActive: true,
    datePosted: "2025-04-05",
    endDate: "2025-08-01",
    collected: 100,
    goal: 2500,
    phone: "+389 70 111 222",
    bankAccount: "330000000555666",
  },
  {
    id: 5,
    title: "Pajisje sportive për shkolla",
    description: `Aktiviteti fizik është çelësi i një fëmijërie të shëndetshme, por shumë shkolla në zonat rurale nuk kanë pajisjet më të thjeshta sportive. Ky projekt mbledh fonde për të furnizuar këto shkolla me topa futbolli, reketë, konuse dhe mjete të tjera që u mundësojnë nxënësve të marrin pjesë në sport me dinjitet dhe gëzim.

Përmes kësaj nisme janë pajisur 5 shkolla me mbi 700 nxënës të përfshirë në aktivitete të reja. Mësuesit janë trajnuar për të zhvilluar orë sportive më dinamike, ndërsa komuniteti është afruar më shumë rreth edukimit fizik.

Për të ndihmuar këtë mision, kontaktoni: +389 42 789 012 ose kontribuoni në: 340000000666777 - Shparkase Banka.`,
    image: "https://picsum.photos/800/400?random=5",
    typeId: 2,
    isActive: false,
    datePosted: "2024-12-20",
    endDate: "2025-03-15",
    collected: 1800,
    goal: 1800,
    phone: "+389 42 789 012",
    bankAccount: "340000000666777",
  },
  {
    id: 6,
    title: "Mbështetje për artistët lokalë",
    description: `Artistët vendas shpesh punojnë në heshtje, larg syve të publikut, me pak mundësi për të ekspozuar veprat e tyre apo për të fituar nga krijimtaria. Ky projekt i jep atyre mundësinë të dalin në pah përmes ekspozitave, marketingut dhe shitjeve artistike.

Nga Bitola në Ohër, janë organizuar aktivitete kulturore që kanë bashkuar artdashës dhe artistë në një atmosferë festive dhe e përkushtuar ndaj kulturës. Veprat janë prezantuar edhe online, duke i dhënë artistëve më shumë mundësi ekspozimi. Projekti ofron gjithashtu materiale artistike për ata që nuk mund t’i përballojnë.

Mbështetni talentin dhe pasurinë kulturore – sepse arti ka nevojë për hapësirë për të jetuar.

Kontakti: +389 75 333 444. Llogaria bankare: 350000000777888 - Ohridska Banka.`,
    image: "https://picsum.photos/800/400?random=6",
    typeId: 1,
    isActive: true,
    datePosted: "2025-01-15",
    endDate: "2025-05-30",
    collected: 700,
    goal: 1500,
    phone: "+389 75 333 444",
    bankAccount: "350000000777888",
  },
  {
    id: 7,
    title: "Lumenj të pastër – natyrë e shëndetshme",
    description: `Ndotja e lumenjve është një nga kërcënimet më të mëdha për mjedisin dhe shëndetin publik. Ky projekt është një thirrje për veprim të drejtpërdrejtë: pastrim i shtretërve të lumenjve, mbledhje e mbetjeve, dhe ngritje e vetëdijes mes qytetarëve për rëndësinë e mbrojtjes së ujërave tona të ëmbla.

Aksionet përfshijnë ekipe vullnetarësh të pajisur me doreza, thasë, kamionë dhe dronë për monitorim. Shkollat organizojnë orë edukative në natyrë, ndërsa komuniteti lokal bashkëpunon për krijimin e stacioneve për riciklim buzë lumit. Gjithçka dokumentohet me fotografi, kronika dhe mesazhe që tregojnë se çfarë do të ndodhë kur veprojmë bashkë.

Në fund të çdo aksioni, bregu është më i pastër, por më e rëndësishme – është ndërgjegjja e rinovuar që ky mjedis është pasuri e përbashkët.

Për t’u përfshirë: +389 47 555 666. Donacionet pranohen në llogarinë: 360000000888999 - Unibanka.`,
    image: "https://picsum.photos/800/400?random=7",
    typeId: 5,
    isActive: false,
    datePosted: "2025-02-01",
    endDate: "2025-04-15",
    collected: 900,
    goal: 900,
    phone: "+389 47 555 666",
    bankAccount: "360000000888999"
  },
  {
    id: 8,
    title: "Ndihmë për të moshuarit",
    description: `Të moshuarit pa mbështetje familjare shpesh përballen me mungesë ushqimi, ilaçesh dhe mjeteve themelore për jetesë. Ky projekt kujdeset që ata të mos mbesin të vetëm. Vullnetarët shpërndajnë pako me ushqime, medikamente, materiale higjienike dhe – më e rëndësishmja – kohë dhe shoqëri.

Shpesh, një bisedë e ngrohtë është më me vlerë sesa një ndihmë materiale. Aksionet zhvillohen me ndihmën e farmacive dhe tregtarëve lokalë që ofrojnë ulje për pako sociale. Përveç kësaj, organizohen evente si “dita e gjyshërve” ku të moshuarit ndihen të respektuar dhe pjesë e komunitetit.

Kontribuoni në këtë nismë dhe ndihmoni dikë që dikur ndihmoi të tjerët.

Për informacione: +389 70 555 777. Llogari bankare: 370000000999000 - Halkbank.`,
    image: "https://picsum.photos/800/400?random=8",
    typeId: 1,
    isActive: true,
    datePosted: "2025-03-25",
    endDate: "2025-06-30",
    collected: 1300,
    goal: 2200,
    phone: "+389 70 555 777",
    bankAccount: "370000000999000"
  },
  {
    id: 9,
    title: "Trajnim teknik për të rinjtë",
    description: `Në epokën digjitale, aftësitë teknologjike nuk janë më luksi – por domosdoshmëri. Ky projekt u jep të rinjve nga zonat rurale mundësinë për të mësuar bazat e programimit, përdorimit të teknologjive moderne dhe ndërtimit të karrierës në botën digjitale.

Kurset ofrohen falas në qendra komunitare dhe shkolla bashkëpunëtore. Materialet për mësim dhe kompjuterët sigurohen nga donatorë dhe partnerë arsimorë. Nxënësit më të përkushtuar ftohen në gara të kodimit dhe marrin certifikata për të ndihmuar në punësim të ardhshëm.

Në çdo klasë ka histori të rinjsh që zbulojnë pasione të reja dhe guxim për të ëndërruar më shumë.

Për regjistrim apo mbështetje, telefononi: +389 42 123 789. Llogari për donacione: 380000001000111 - Triglav Banka.`,
    image: "https://picsum.photos/800/400?random=9",
    typeId: 2,
    isActive: true,
    datePosted: "2025-04-10",
    endDate: "2025-09-01",
    collected: 500,
    goal: 2000,
    phone: "+389 42 123 789",
    bankAccount: "380000001000111"
  },
  {
    id: 10,
    title: "Mbrojtja e kafshëve të egra",
    description: `Kafshët e egra janë një pjesë e pazëvendësueshme e biodiversitetit tonë. Por përballen me shumë rreziqe – nga ndotja, humbja e habitatit, deri tek incidentet me njerëzit. Ky projekt synon të mbrojë, të rehabilitojë dhe të edukojë në lidhje me këto specie të mrekullueshme.

Me ndihmën e biologëve, janë krijuar zona të mbrojtura për shërimin e kafshëve të plagosura, ndërsa fushatat publike nxisin respektin për jetën e egër dhe rëndësinë e saj në ekosistem. Fëmijët marrin pjesë në ekskursione ekologjike dhe mësojnë sesi të jenë kujdestarë të natyrës që nga fëmijëria.

Çdo ndihmë, qoftë financiare apo përmes angazhimit si vullnetar, ndihmon për të ruajtur një botë më të pasur dhe më të gjallë.

Kontaktoni: +389 70 444 555. Llogaria për donacione: 390000001111222 - ProCredit Banka.`,
    image: "https://picsum.photos/800/400?random=10",
    typeId: 5,
    isActive: false,
    datePosted: "2024-11-30",
    endDate: "2025-03-31",
    collected: 1100,
    goal: 1100,
    phone: "+389 70 444 555",
    bankAccount: "390000001111222"
  }
];
function seedInitialProjects() {
  try {
    const mk = JSON.parse(localStorage.getItem("projects_mk") || "[]");
    const alb = JSON.parse(localStorage.getItem("projects_alb") || "[]");

    if (!mk.length) {
      localStorage.setItem("projects_mk", JSON.stringify(mkProjects));
      console.log("Seeded MK projects.");
    }

    if (!alb.length) {
      localStorage.setItem("projects_alb", JSON.stringify(albProjects));
      console.log("Seeded ALB projects.");
    }
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}
seedInitialProjects();

export async function getProjects(lang) {
  const key = lang === "mk" ? "projects_mk" : "projects_alb";
  const projectsJSON = localStorage.getItem(key);
  return projectsJSON ? JSON.parse(projectsJSON) : [];
}

export async function deleteProjectById(id) {
  const storageKeys = ["projects_alb", "projects_mk"];
  for (const key of storageKeys) {
    const projects = JSON.parse(localStorage.getItem(key)) || [];
    const updated = projects.filter((p) => p.id != id);
    localStorage.setItem(key, JSON.stringify(updated));
  }
}

export async function getProjectTypes(lang = "mk") {
  const types = {
    mk: [
      { id: 1, value: "Заедница" },
      { id: 2, value: "Образование" },
      { id: 3, value: "Животни" },
      { id: 4, value: "Медицина" },
      { id: 5, value: "Животна средина" },
      { id: 6, value: "Социјално" },
    ],
    alb: [
      { id: 1, value: "Komunitet" },
      { id: 2, value: "Arsim" },
      { id: 3, value: "Kafshë" },
      { id: 4, value: "Mjekësi" },
      { id: 5, value: "Mjedis" },
      { id: 6, value: "Sociale" },
    ],
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(types[lang]);
    }, 200);
  });
}
