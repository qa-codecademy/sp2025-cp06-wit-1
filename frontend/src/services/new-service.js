export const fetchNewsData = (lang = 'mk') => {
  return new Promise((resolve) => {
    const data = {
      mk: [
        {
          id: 0,
          title: "Помогнете ни да обезбедиме одмор за едно семејство",
          summary: "Донирајте преку донацискиот број 143 404 и бидете дел од оваа хумана приказна! Вашата донација од 100 денари може да донесе радост...\n\nСекое дете заслужува да се радува на летото...\n\nЦелна група:\n- Семејства во социјален ризик\n- Семејства со лица со посебни потреби\n...\n🌞Донесете им лето на дечињата! 🌞"
        },
        {
          id: 1,
          title: "Денес доручкувавме во SimFil Bakery",
          summary: "Се договоривме секој ден да нѝ доставуваат тазе лебче за семејството Новакоски!\nБлагодариме за овој хуман гест, заедно сме најсилни."
        },
        {
          id: 2,
          title: "Денеска, во Советот на Гостивар, бевме домаќини на најдрагите гости – децата со попреченост и нивните родители",
          summary: "Ме радува континуираната поддршка што како општина, им ја даваме на овие лица.\nМоите заложби се јасни – инклузија, а не ограничување!\n..."
        },
        {
          id: 3,
          title: "Хуманитарна акција: Топол оброк за сите",
          summary: "Започнавме иницијатива за секојдневна распределба на топли оброци за бездомни лица и стари лица без семејство. Секоја помош е добредојдена – донирајте или волонтирајте!"
        },
        {
          id: 4,
          title: "Донација на училишен прибор за ученици во рурални средини",
          summary: "Поделивме ранци, тетратки, пенкала и боички на над 150 деца. Благодарност до сите донатори – знаењето е моќ, а образованието е право, не луксуз!"
        },
        {
          id: 5,
          title: "Нова инвалидска количка за малиот Артур",
          summary: "Со донациите собрани минатата недела, успеавме да обезбедиме специјализирана количка за 6-годишниот Артур од Врапчиште. Благодариме од срце!"
        },
        {
          id: 6,
          title: "Крводарителска акција со Црвен крст",
          summary: "Во соработка со Црвениот крст – Гостивар, организиравме крводарителска акција. 48 дарители, 48 можности за живот. Ви благодариме!"
        },
        {
          id: 7,
          title: "Волонтерска акција – Чистење на Вруток",
          summary: "40 волонтери, 3 часа, 28 вреќи отпад. Денеска го чистевме езерото Вруток и испративме порака: Природата е наш дом, да ја чуваме!"
        }
      ],
      alb: [
        {
          id: 0,
          title: "Na ndihmoni të sigurojmë pushime për një familje",
          summary: "Dhuro përmes numrit të donacioneve 143 404 dhe bëhu pjesë e kësaj historie humane! Donacioni juaj prej 100 denarëve mund të sjellë gëzim...\n\nÇdo fëmijë meriton të gëzojë verën...\n\nGrupi i synuar:\n- Familje në rrezik social\n- Familje me persona me nevoja të veçanta\n...\n🌞 Sjellu verë fëmijëve! 🌞"
        },
        {
          id: 1,
          title: "Sot hëngrëm mëngjes në SimFil Bakery",
          summary: "U dakorduam që çdo ditë të dorëzojnë bukë të freskët për familjen Novakoski!\nFaleminderit për këtë gjest human – së bashku jemi më të fortë."
        },
        {
          id: 2,
          title: "Sot, në Këshillin e Gostivarit, ishim nikoqirë të mysafirëve më të dashur – fëmijëve me aftësi të kufizuara dhe prindërve të tyre",
          summary: "Më gëzon mbështetja e vazhdueshme që si komunë ua japim këtyre personave.\nAngazhimet e mia janë të qarta – përfshirje, jo kufizim!\n..."
        },
        {
          id: 3,
          title: "Fushatë humanitare: Vakt i ngrohtë për të gjithë",
          summary: "Filluam një iniciativë për shpërndarjen e përditshme të vakteve të ngrohta për persona të pastrehë dhe të moshuar pa familje. Çdo ndihmë është e mirëpritur – dhuroni ose bëhuni vullnetarë!"
        },
        {
          id: 4,
          title: "Donacion i materialeve shkollore për nxënës në zona rurale",
          summary: "Shpërndamë çanta, fletore, stilolapsa dhe bojëra për mbi 150 fëmijë. Falënderim për të gjithë donatorët – dija është fuqi, arsimi është e drejtë, jo luks!"
        },
        {
          id: 5,
          title: "Karrige e re me rrota për vogëlushin Artur",
          summary: "Me donacionet e mbledhura javën e kaluar, arritëm të sigurojmë një karrige të specializuar për Arturin 6-vjeçar nga Vrapçishti. Faleminderit nga zemra!"
        },
        {
          id: 6,
          title: "Aksion dhurimi gjaku me Kryqin e Kuq",
          summary: "Në bashkëpunim me Kryqin e Kuq – Gostivar, organizuam një aksion dhurimi gjaku. 48 dhurues, 48 mundësi për jetë. Ju faleminderit!"
        },
        {
          id: 7,
          title: "Aksion vullnetar – Pastrimi i Vrutokut",
          summary: "40 vullnetarë, 3 orë, 28 thasë mbeturina. Sot pastruam liqenin e Vrutokut dhe dërguam një mesazh: Natyra është shtëpia jonë, ta ruajmë!"
        }
      ]
    };

    const selectedLang = lang === 'alb' ? 'alb' : 'mk';
    setTimeout(() => resolve(data[selectedLang]), 400);
  });
};
