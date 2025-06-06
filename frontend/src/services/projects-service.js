// const mkProjects = [
//   {
//     id: 1,
//     title: "Топол оброк за бездомници",
//     description: "Локална акција за доставување на бесплатни оброци за луѓето на улица во Битола.",
//     image: "https://picsum.photos/800/400?random=1",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-04-29",
//     endDate: "2025-06-15",
//     collected: 1200,
//     goal: 2000
//   },
//   {
//     id: 2,
//     title: "Книги за секое дете",
//     description: "Собирање книги и прибор за деца од руралните средини.",
//     image: "https://picsum.photos/800/400?random=2",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-02-15",
//     endDate: "2025-05-01",
//     collected: 790,
//     goal: 800
//   },
//   {
//     id: 3,
//     title: "Зелена површина за паркот",
//     description: "Проект за засадување дрвја и грижа за јавните паркови во градот.",
//     image: "https://picsum.photos/800/400?random=3",
//     typeId: 5,
//     isActive: true,
//     datePosted: "2025-03-10",
//     endDate: "2025-07-01",
//     collected: 1500,
//     goal: 3000
//   },
//   {
//     id: 4,
//     title: "Поддршка за млади претприемачи",
//     description: "Финансиска и менторска поддршка за млади луѓе кои започнуваат бизнис.",
//     image: "https://picsum.photos/800/400?random=4",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-04-05",
//     endDate: "2025-08-01",
//     collected: 100,
//     goal: 2500
//   },
//   {
//     id: 5,
//     title: "Спортска опрема за училишта",
//     description: "Донација на спортска опрема за основните училишта во руралните региони.",
//     image: "https://picsum.photos/800/400?random=5",
//     typeId: 2,
//     isActive: false,
//     datePosted: "2024-12-20",
//     endDate: "2025-03-15",
//     collected: 1800,
//     goal: 1800
//   },
//   {
//     id: 6,
//     title: "Поддршка на локални уметници",
//     description: "Организирање на изложби и продажба на дела од локални уметници.",
//     image: "https://picsum.photos/800/400?random=6",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-01-15",
//     endDate: "2025-05-30",
//     collected: 700,
//     goal: 1500
//   },
//   {
//     id: 7,
//     title: "Чисти реки - здрава природа",
//     description: "Проект за чистење на речните корита и едукација на граѓаните.",
//     image: "https://picsum.photos/800/400?random=7",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2025-02-01",
//     endDate: "2025-04-15",
//     collected: 900,
//     goal: 900
//   },
//   {
//     id: 8,
//     title: "Помош за постари лица",
//     description: "Обезбедување на храна и лекови за социјално загрозени постари лица.",
//     image: "https://picsum.photos/800/400?random=8",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-03-25",
//     endDate: "2025-06-30",
//     collected: 1300,
//     goal: 2200
//   },
//   {
//     id: 9,
//     title: "Техничка обука за млади",
//     description: "Обука за основи на програмирање и дигитални вештини за млади од руралните средини.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 10,
//     title: "Заштита на дивите животни",
//     description: "Акции за заштита и рехабилитација на диви животни во националните паркови.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 11,
//     title: "Техничка обука за млади",
//     description: "Обука за основи на програмирање и дигитални вештини за млади од руралните средини.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 12,
//     title: "Заштита на дивите животни",
//     description: "Акции за заштита и рехабилитација на диви животни во националните паркови.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 13,
//     title: "Техничка обука за млади",
//     description: "Обука за основи на програмирање и дигитални вештини за млади од руралните средини.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 14,
//     title: "Заштита на дивите животни",
//     description: "Акции за заштита и рехабилитација на диви животни во националните паркови.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 15,
//     title: "Техничка обука за млади",
//     description: "Обука за основи на програмирање и дигитални вештини за млади од руралните средини.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 16,
//     title: "Заштита на дивите животни",
//     description: "Акции за заштита и рехабилитација на диви животни во националните паркови.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },

// ];

// const albProjects = [
//   {
//     id: 1,
//     title: "Ushqim i ngrohtë për të pastrehët",
//     description: "Fushatë lokale për të shpërndarë ushqime falas për njerëzit në rrugë në Bitola.",
//     image: "https://picsum.photos/800/400?random=1",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-04-29",
//     endDate: "2025-06-15",
//     collected: 1200,
//     goal: 2000
//   },
//   {
//     id: 2,
//     title: "Libra për çdo fëmijë",
//     description: "Mbledhje librash dhe materialesh shkollore për fëmijët në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=2",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-02-15",
//     endDate: "2025-05-01",
//     collected: 790,
//     goal: 800
//   },
//   {
//     id: 3,
//     title: "Hapësira e gjelbër në park",
//     description: "Projekt për mbjelljen e pemëve dhe mirëmbajtjen e hapësirave publike në qytet.",
//     image: "https://picsum.photos/800/400?random=3",
//     typeId: 5,
//     isActive: true,
//     datePosted: "2025-03-10",
//     endDate: "2025-07-01",
//     collected: 1500,
//     goal: 3000
//   },
//   {
//     id: 4,
//     title: "Mbështetje për sipërmarrësit e rinj",
//     description: "Mbështetje financiare dhe mentorim për të rinjtë që fillojnë biznes.",
//     image: "https://picsum.photos/800/400?random=4",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-04-05",
//     endDate: "2025-08-01",
//     collected: 100,
//     goal: 2500
//   },
//   {
//     id: 5,
//     title: "Pajisje sportive për shkollat",
//     description: "Donacion i pajisjeve sportive për shkollat fillore në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=5",
//     typeId: 2,
//     isActive: false,
//     datePosted: "2024-12-20",
//     endDate: "2025-03-15",
//     collected: 1800,
//     goal: 1800
//   },
//   {
//     id: 6,
//     title: "Mbështetje për artistët lokalë",
//     description: "Organizim ekspozitash dhe shitje të veprave të artistëve lokalë.",
//     image: "https://picsum.photos/800/400?random=6",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-01-15",
//     endDate: "2025-05-30",
//     collected: 700,
//     goal: 1500
//   },
//   {
//     id: 7,
//     title: "Lumi i pastër - natyrë e shëndetshme",
//     description: "Projekt për pastrimin e lumenjve dhe edukimin e qytetarëve.",
//     image: "https://picsum.photos/800/400?random=7",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2025-02-01",
//     endDate: "2025-04-15",
//     collected: 900,
//     goal: 900
//   },
//   {
//     id: 8,
//     title: "Ndihmë për të moshuarit",
//     description: "Sigurimi i ushqimit dhe ilaçeve për të moshuarit në nevojë sociale.",
//     image: "https://picsum.photos/800/400?random=8",
//     typeId: 1,
//     isActive: true,
//     datePosted: "2025-03-25",
//     endDate: "2025-06-30",
//     collected: 1300,
//     goal: 2200
//   },
//   {
//     id: 9,
//     title: "Trajnim teknik për të rinjtë",
//     description: "Trajnim në bazat e programimit dhe aftësive digjitale për të rinjtë në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 10,
//     title: "Mbrojtja e kafshëve të egra",
//     description: "Veprime për mbrojtjen dhe rehabilitimin e kafshëve të egra në parqet kombëtare.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 11,
//     title: "Trajnim teknik për të rinjtë",
//     description: "Trajnim në bazat e programimit dhe aftësive digjitale për të rinjtë në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 12,
//     title: "Mbrojtja e kafshëve të egra",
//     description: "Veprime për mbrojtjen dhe rehabilitimin e kafshëve të egra në parqet kombëtare.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 13,
//     title: "Trajnim teknik për të rinjtë",
//     description: "Trajnim në bazat e programimit dhe aftësive digjitale për të rinjtë në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 14,
//     title: "Mbrojtja e kafshëve të egra",
//     description: "Veprime për mbrojtjen dhe rehabilitimin e kafshëve të egra në parqet kombëtare.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   },
//   {
//     id: 15,
//     title: "Trajnim teknik për të rinjtë",
//     description: "Trajnim në bazat e programimit dhe aftësive digjitale për të rinjtë në zonat rurale.",
//     image: "https://picsum.photos/800/400?random=9",
//     typeId: 2,
//     isActive: true,
//     datePosted: "2025-04-10",
//     endDate: "2025-09-01",
//     collected: 500,
//     goal: 2000
//   },
//   {
//     id: 16,
//     title: "Mbrojtja e kafshëve të egra",
//     description: "Veprime për mbrojtjen dhe rehabilitimin e kafshëve të egra në parqet kombëtare.",
//     image: "https://picsum.photos/800/400?random=10",
//     typeId: 5,
//     isActive: false,
//     datePosted: "2024-11-30",
//     endDate: "2025-03-31",
//     collected: 1100,
//     goal: 1100
//   }
// ];

// localStorage.setItem("projects_mk", JSON.stringify(mkProjects));
// localStorage.setItem("projects_alb", JSON.stringify(albProjects));

export async function getProjects(lang) {
  const key = lang === "mk" ? "projects_mk" : "projects_alb";
  const projectsJSON = localStorage.getItem(key);
  return projectsJSON ? JSON.parse(projectsJSON) : [];
}

export async function deleteProjectById(id) {
  const storageKeys = ["projects_alb", "projects_mk"];
  for (const key of storageKeys) {
    const projects = JSON.parse(localStorage.getItem(key)) || [];
    const updated = projects.filter(p => p.id !== Number(id));
    localStorage.setItem(key, JSON.stringify(updated));
    console.log(updated)
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
      { id: 6, value: "Социјално" }
    ],
    alb: [
      { id: 1, value: "Komunitet" },
      { id: 2, value: "Arsim" },
      { id: 3, value: "Kafshë" },
      { id: 4, value: "Mjekësi" },
      { id: 5, value: "Mjedis" },
      { id: 6, value: "Sociale" }
    ]
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(types[lang]);
    }, 200);
  });
}

