export const fetchNewsData = (lang = 'mk') => {
  return new Promise((resolve) => {
    const data = {
      mk: [
        {
          id: 0,
          title: "Помогнете ни да обезбедиме одмор за едно семејство",
          summary: `Донирајте преку донацискиот број 143 404 и бидете дел од оваа хумана приказна! Вашата донација од 100 денари може да донесе радост и надеж во животите на оние кои имаат најголема потреба. Секое дете заслужува да се радува на летото и да има можност за мирен одмор во природа, далеку од секојдневните предизвици и грижи.

Целна група:
- Семејства во социјален ризик кои немаат финансиски средства за одмор
- Семејства со лица со посебни потреби кои бараат дополнителна поддршка
- Еднокреветни родители и безработни семејства

Вашата поддршка може да промени животи и да донесе среќа и позитивни емоции кај најранливите категории. Заедно можеме да изградиме општество во кое никој не е оставен сам. Заеднички, за подобро утре! 🌞 Донирајте и станете дел од промена! 🌞`
        },
        {
          id: 1,
          title: "Денес доручкувавме во SimFil Bakery",
          summary: `Со голема благодарност го споделуваме нашиот договор со SimFil Bakery, која секој ден ќе нуди свеж и здрав леб за семејството Новакоски, семејство кое се наоѓа во тешка животна ситуација. Овој гест на солидарност и хуманост е пример за тоа како заедно можеме да направиме разлика.

Во денешно време, кога многу семејства се борат со недостиг на основни потреби, ваквите иницијативи се светол пример на социјална одговорност и грижа кон заедницата. Освен што обезбедуваме храна, ние градиме доверба и надеж.

Ги повикуваме и другите бизниси и поединци да се приклучат во овие иницијативи за помош на семејствата кои се најранливи. Заедно сме посилни и можеме да промениме многу! Благодариме на SimFil Bakery за нивната несебична поддршка.`
        },
        {
          id: 2,
          title: "Денеска, во Советот на Гостивар, бевме домаќини на најдрагите гости – децата со попреченост и нивните родители",
          summary: `Ме радува континуираната поддршка што како општина, им ја даваме на овие лица. Овој настан беше посветен на промоција на инклузивното општество и зајакнување на свеста за потребите на лицата со попреченост.

Нашите заложби се јасни – инклузија, а не ограничување! Преку различни активности и проекти, работиме на обезбедување пристапност, еднакви можности и подобрување на квалитетот на животот за децата и нивните семејства.

Вклучувањето на лицата со посебни потреби во сите аспекти од општеството е наше заедничко задолжение. На овие деца им треба наша поддршка, разбирање и љубов. Заедно можеме да создадеме општество каде што секој ќе има шанса да го оствари својот потенцијал и да биде прифатен и почитуван.`
        },
        {
          id: 3,
          title: "Хуманитарна акција: Топол оброк за сите",
          summary: `Започнавме иницијатива за секојдневна распределба на топли оброци за бездомни лица и стари лица без семејство. Во овие тежок период, кога многу луѓе се соочуваат со недостиг на храна и основни услови за живот, оваа акција е од огромна важност за нивната благосостојба.

Апелираме до сите хумани луѓе да се вклучат – било со донации, волонтерство или со ширење на оваа порака. Секоја помош, колку и да е мала, има големо значење.

Наша цел е да им овозможиме достапност до барем еден топол оброк дневно на оние кои најмногу го имаат потреба, како и да им вратиме надеж и чувство дека не се сами во борбата. Заедно можеме да направиме голема разлика.`
        },
        {
          id: 4,
          title: "Донација на училишен прибор за ученици во рурални средини",
          summary: `Поделивме ранци, тетратки, пенкала и боички на над 150 деца од рурални и социјално загрозени средини. Образованието е право, а не луксуз, и сакаме да им помогнеме на децата да имаат еднакви можности за учење и развој.

Ваквите донации не само што го олеснуваат пристапот до образовни материјали, туку и ги мотивираат децата да останат во училиште и да ги следат своите соништа.

Благодарност до сите донатори и волонтери кои го направија ова можно. Заедно го градамe идното поколение и го засилуваме темелот на нашата заедница. Знаењето е моќ – а со ваша помош, ние ја шириме таа моќ кон сите.`
        },
        {
          id: 5,
          title: "Нова инвалидска количка за малиот Артур",
          summary: `Со донациите собрани минатата недела, успеавме да обезбедиме специјализирана инвалидска количка за 6-годишниот Артур од Врапчиште, кој има потреба од посебна поддршка за својата мобилност.

Овој гест ја покажува моќта на заедницата кога се обединува за хумани цели. Количката му овозможува на Артур подобро и полесно секојдневие, повеќе слобода и самостојност.

Им благодариме на сите кои учествуваа со донации и помогнаа да се реализира оваа акција. Вашата поддршка има огромно значење и го подобрува квалитетот на животот на најранливите. Заедно правиме светот поубав и повреден.`
        },
        {
          id: 6,
          title: "Крводарителска акција со Црвен крст",
          summary: `Во соработка со Црвениот крст – Гостивар, организиравме крводарителска акција во која учествуваа 48 дарители, обезбедувајќи 48 шанси за живот на лица кои итно имаат потреба од крв.

Крводарувањето е најхуман и наједноставен начин да спасите животи, и оваа акција е доказ дека заедно можеме да направиме голема разлика.

Ви благодариме на сите хумани луѓе кои се одважија да даруваат крв и да бидат дел од оваа животно важна иницијатива. Вашата хуманост е пример за сите нас и поттик да продолжиме со овие активности.`
        },
        {
          id: 7,
          title: "Волонтерска акција – Чистење на Вруток",
          summary: `40 волонтери, 3 часа и 28 вреќи отпад. Денеска го чистевме езерото Вруток и со тоа испративме силна порака: природата е нашиот дом и треба да ја чуваме и негувараме.

Оваа акција не само што придонесе за уредување на природната средина, туку и ги зближи луѓето во заедничка цел и грижа за животната средина.

Ги повикуваме сите граѓани да се вклучат во слични иницијативи, да го зачуваме Вруток и сите наши природни убавини за идните генерации. Природата ни дава многу, а нашата должност е да ѝ вратиме грижа и почит.`
        }
      ],
      alb: [
        {
          id: 0,
          title: "Na ndihmoni të sigurojmë pushime për një familje",
          summary: `Dhuro përmes numrit të donacioneve 143 404 dhe bëhu pjesë e kësaj historie humane! Donacioni juaj prej 100 denarëve mund të sjellë gëzim dhe shpresë në jetët e atyre që kanë më së shumti nevojë. Çdo fëmijë meriton të gëzojë verën dhe të ketë mundësinë për pushime të qeta në natyrë, larg sfidave dhe shqetësimeve të përditshme.

Grupi i synuar:
- Familje në rrezik social që nuk kanë mjete financiare për pushime
- Familje me persona me nevoja të veçanta që kërkojnë mbështetje shtesë
- Prindër të vetëm dhe familje pa punë

Mbështetja juaj mund të ndryshojë jetën dhe të sjellë lumturi dhe emocione pozitive tek kategoritë më të ndjeshme. Së bashku mund të ndërtojmë një shoqëri ku askush nuk mbetet vetëm. Bashkë, për një të ardhme më të mirë! 🌞 Dhuro dhe bëhu pjesë e ndryshimit! 🌞`
        },
        {
          id: 1,
          title: "Sot hëngrëm mëngjes në SimFil Bakery",
          summary: `Me shumë falënderim ndaj SimFil Bakery, ju njoftojmë se kemi arritur marrëveshje që çdo ditë të na dorëzojnë bukë të freskët për familjen Novakoski, një familje në situatë të vështirë.

Ky akt solidariteti dhe humanizmi është një shembull i asaj se si së bashku mund të bëjmë ndryshim.

Në kohët e sotme, kur shumë familje përballen me mungesë të nevojave bazë, iniciativa të tilla janë shembull i përgjegjësisë sociale dhe kujdesit ndaj komunitetit. Përveç sigurimit të ushqimit, ne ndërtojmë besim dhe shpresë.

Ftojmë bizneset dhe individët tjerë të bashkohen në këto iniciativa për ndihmë ndaj familjeve më të rrezikuara. Së bashku jemi më të fortë dhe mund të bëjmë shumë ndryshime! Faleminderit SimFil Bakery për mbështetjen tuaj të pa rezervë.`
        },
        {
          id: 2,
          title: "Sot, në Këshillin e Gostivarit, ishim nikoqirë të mysafirëve më të dashur – fëmijëve me aftësi të kufizuara dhe prindërve të tyre",
          summary: `Më gëzon mbështetja e vazhdueshme që si komunë ua japim këtyre personave. Ky ngjarje ishte dedikuar promovimit të shoqërisë inkluzive dhe forcimit të vetëdijes për nevojat e personave me aftësi të kufizuara.

Angazhimet e mia janë të qarta – përfshirje, jo kufizim! Përmes aktiviteteve dhe projekteve të ndryshme, punojmë për sigurimin e aksesit, mundësive të barabarta dhe përmirësimit të cilësisë së jetës për fëmijët dhe familjet e tyre.

Përfshirja e personave me nevoja të veçanta në të gjitha aspektet e shoqërisë është detyrë jonë e përbashkët. Këtyre fëmijëve u duhet mbështetja jonë, kuptimi dhe dashuria. Së bashku mund të krijojmë një shoqëri ku secili do të ketë mundësi të arrijë potencialin e vet dhe të jetë i pranuar dhe i respektuar.`
        },
        {
          id: 3,
          title: "Fushatë humanitare: Vakt i ngrohtë për të gjithë",
          summary: `Kemi nisur një iniciativë për shpërndarjen e përditshme të vakteve të ngrohta për persona të pastrehë dhe të moshuar pa familje. Në këtë periudhë të vështirë, kur shumë njerëz përballen me mungesë ushqimi dhe kushte bazë jetese, kjo fushatë është shumë e rëndësishme për mirëqenien e tyre.

Bëjmë apel për të gjithë njerëzit humanë të përfshihen – me donacione, vullnetarizëm apo me shpërndarje të mesazhit. Çdo ndihmë, pavarësisht madhësisë, ka rëndësi të madhe.

Qëllimi ynë është t'u sigurojmë së paku një vakt të ngrohtë në ditë atyre që kanë më shumë nevojë, dhe t'u rikthejmë shpresën dhe ndjenjën se nuk janë vetëm në luftën e tyre. Së bashku mund të bëjmë ndryshim të madh.`
        },
        {
          id: 4,
          title: "Donacion i materialeve shkollore për nxënës në zona rurale",
          summary: `Kemi shpërndarë çanta, fletore, stilolapsa dhe bojëra për mbi 150 fëmijë nga zonat rurale dhe familjet në nevojë sociale. Arsimi është e drejtë, jo luks, dhe duam t'i ndihmojmë fëmijët të kenë mundësi të barabarta për të mësuar dhe për t'u zhvilluar.

Këto donacione jo vetëm që e lehtësojnë qasjen në materiale arsimore, por edhe i motivojnë fëmijët të vazhdojnë shkollimin dhe të ndjekin ëndrrat e tyre.

Faleminderit të gjithë donatorëve dhe vullnetarëve që e bënë këtë të mundur. Së bashku po ndërtojmë gjeneratën e ardhshme dhe po forcojmë themelet e komunitetit tonë. Dija është fuqi – dhe me ndihmën tuaj, po e përhapim këtë fuqi tek të gjithë.`
        },
        {
          id: 5,
          title: "Karrige e re me rrota për vogëlushin Artur",
          summary: `Me donacionet e mbledhura javën e kaluar, arritëm të sigurojmë një karrige të specializuar për Arturin 6-vjeçar nga Vrapçishti, i cili ka nevojë për mbështetje të veçantë për lëvizshmërinë e tij.

Ky veprim tregon fuqinë e komunitetit kur bashkohet për kauza humane. Karrigia i mundëson Arturit një jetë më të mirë dhe më të lehtë, më shumë liri dhe pavarësi.

Faleminderit të gjithë atyre që kontribuuan me donacione dhe ndihmuan të realizohet kjo iniciativë. Mbështetja juaj ka një rëndësi të madhe dhe përmirëson cilësinë e jetës së më të dobëtve. Së bashku bëjmë botën më të bukur dhe më humane.`
        },
        {
          id: 6,
          title: "Aksion dhurimi gjaku me Kryqin e Kuq",
          summary: `Në bashkëpunim me Kryqin e Kuq – Gostivar, organizuam një aksion dhurimi gjaku ku morën pjesë 48 dhurues, duke siguruar 48 mundësi për jetë për persona që kanë nevojë urgjente për gjak.

Dhurimi i gjakut është mënyra më humane dhe më e thjeshtë për të shpëtuar jetë, dhe kjo fushatë është dëshmi se së bashku mund të bëjmë ndryshim të madh.

Faleminderit të gjithë njerëzve humanë që guxuan të dhurojnë gjak dhe të jenë pjesë e kësaj iniciative jetësore. Humanizmi juaj është shembull për të gjithë ne dhe nxitje për të vazhduar me këto aktivitete.`
        },
        {
          id: 7,
          title: "Aksion vullnetar – Pastrimi i Vrutokut",
          summary: `40 vullnetarë, 3 orë dhe 28 thasë mbeturina. Sot pastruam liqenin e Vrutokut dhe dërguam një mesazh të fortë: natyra është shtëpia jonë dhe duhet ta kujdesim dhe ta ruajmë atë.

Ky aksion jo vetëm që ndihmoi në përmirësimin e mjedisit natyror, por gjithashtu afroi njerëzit për një qëllim të përbashkët dhe përkujdesje për ambientin jetësor.

Ftojmë të gjithë qytetarët të bashkohen në iniciativa të ngjashme, për të ruajtur Vrutokun dhe gjithë bukuritë tona natyrore për brezat që vijnë. Natyra na jep shumë, dhe detyra jonë është t'i kthejmë kujdes dhe respekt.`
        }
      ]
    };

    const selectedLang = lang === 'alb' ? 'alb' : 'mk';
    setTimeout(() => resolve(data[selectedLang]), 400);
  });
};
