import { NewsComponent } from "../components/news/news-component.js";
import languageService from "../services/language-service.js";
import { renderAdminPanel } from "./news-adminview.js";
import renderNewsDetail from "./news-detail.js";

export default function NewsView(params) {
  let newsData = [
    {
      "id": 0,
      "title": "Помогнете ни да обезбедиме одмор за едно семејство",
      "summary": "Донирајте преку донацискиот број 143 404 и бидете дел од оваа хумана приказна! Вашата донација од 100 денари може да донесе радост...\n\nСекое дете заслужува да се радува на летото...\n\nЦелна група:\n- Семејства во социјален ризик\n- Семејства со лица со посебни потреби\n...\n🌞Донесете им лето на дечињата! 🌞"
    },
    {
      "id": 1,
      "title": "Денес доручкувавме во SimFil Bakery",
      "summary": "Се договоривме секој ден да нѝ доставуваат тазе лебче за семејството Новакоски!\nБлагодариме за овој хуман гест, заедно сме најсилни."
    },
    {
      "id": 2,
      "title": "Денеска, во Советот на Гостивар, бевме домаќини на најдрагите гости – децата со попреченост и нивните родители",
      "summary": "Ме радува континуираната поддршка што како општина, им ја даваме на овие лица.\nМоите заложби се јасни – инклузија, а не ограничување!\n..."
    },
    {
      "id": 3,
      "title": "Хуманитарна акција: Топол оброк за сите",
      "summary": "Започнавме иницијатива за секојдневна распределба на топли оброци за бездомни лица и стари лица без семејство. Секоја помош е добредојдена – донирајте или волонтирајте!"
    },
    {
      "id": 4,
      "title": "Донација на училишен прибор за ученици во рурални средини",
      "summary": "Поделивме ранци, тетратки, пенкала и боички на над 150 деца. Благодарност до сите донатори – знаењето е моќ, а образованието е право, не луксуз!"
    },
    {
      "id": 5,
      "title": "Нова инвалидска количка за малиот Артур",
      "summary": "Со донациите собрани минатата недела, успеавме да обезбедиме специјализирана количка за 6-годишниот Артур од Врапчиште. Благодариме од срце!"
    },
    {
      "id": 6,
      "title": "Крводарителска акција со Црвен крст",
      "summary": "Во соработка со Црвениот крст – Гостивар, организиравме крводарителска акција. 48 дарители, 48 можности за живот. Ви благодариме!"
    },
    {
      "id": 7,
      "title": "Волонтерска акција – Чистење на Вруток",
      "summary": "40 волонтери, 3 часа, 28 вреќи отпад. Денеска го чистевме езерото Вруток и испративме порака: Природата е наш дом, да ја чуваме!"
    }
  ]


  const t = languageService.getAllTranslations().newsfeed;

  // try {
  //   newsData = JSON.parse(localStorage.getItem("newsData") || "[]");
  //   if (!Array.isArray(newsData)) throw new Error();
  // } catch (err) {
  //   console.error("Invalid JSON in localStorage.newsData", err);
  //   newsData = [];
  // }

  const container = document.createElement("div");
  container.id = "newsPageContent";

  const { id, admin } = params;

  if (admin === "true") {
    container.innerHTML = renderAdminPanel(t);
  } else if (id !== undefined) {
    container.innerHTML = renderNewsDetail({ id }, t);
  } else {
    container.innerHTML = NewsComponent(t, newsData);
  }

  return { html: container.outerHTML, setup: () => { } };

}