export const fetchCarouselItems = (lang = 'mk') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (lang === 'alb') {
        resolve([
          {
            image: 'https://picsum.photos/800/400?random=1',
            alt: 'Fëmijë që merr ndihmë mjekësore',
            title: 'Së Bashku Shpëtojmë Jeta',
            description: 'Mbështetja juaj siguron trajtime jetike për fëmijët në nevojë.',
            buttonText: 'Dhuro Tani',
          },
          {
            image: 'https://picsum.photos/800/400?random=2',
            alt: 'Vullnetarë që ndihmojnë komunitetin',
            title: 'Bëhu Pjesë e Misionit Tonë',
            description: 'Bëhu pjesë e familjes sonë të vullnetarëve që bëjnë ndryshim çdo ditë.',
            buttonText: 'Bashkohu',
          },
          {
            image: 'https://picsum.photos/800/400?random=3',
            alt: 'Doktor me pacient',
            title: 'Ndihmë Mjekësore për të Gjithë',
            description: 'Sigurojmë kujdes shëndetësor për më të cenueshmit.',
            buttonText: 'Mëso Më Shumë',
          },
          {
            image: 'https://picsum.photos/800/400?random=4',
            alt: 'Event komunitar',
            title: 'Fuqizojmë Komunitetin',
            description: 'Krijojmë një të ardhme më të mirë përmes humanitetit, arsimit dhe shëndetit.',
            buttonText: 'Na Mbështet',
          },
          {
            image: 'https://picsum.photos/800/400?random=5',
            alt: 'Fëmijë të buzëqeshur',
            title: 'Çdo Buzëqeshje Ka Vlerë',
            description: 'Me ndihmën tuaj, sjellim gëzim dhe shpresë për më të vegjlit.',
            buttonText: 'Shiko Më Shumë',
          },
        ]);
      } else {
        // default: Macedonian
        resolve([
          {
            image: 'https://picsum.photos/800/400?random=1',
            alt: 'Дете добива медицинска помош',
            title: 'Заедно Спасуваме Животи',
            description: 'Вашата поддршка обезбедува животоспасувачки третмани за децата во потреба.',
            buttonText: 'Донирај Сега',
          },
          {
            image: 'https://picsum.photos/800/400?random=2',
            alt: 'Волонтери помагаат во заедницата',
            title: 'Придружи се на Нашата Мисија',
            description: 'Биди дел од нашето семејство на волонтери кои прават промена секој ден.',
            buttonText: 'Вклучи се',
          },
          {
            image: 'https://picsum.photos/800/400?random=3',
            alt: 'Доктор со пациент',
            title: 'Медицинска Помош за Сите',
            description: 'Овозможуваме основна здравствена грижа за најранливите.',
            buttonText: 'Дознај Повеќе',
          },
          {
            image: 'https://picsum.photos/800/400?random=4',
            alt: 'Настан во заедницата',
            title: 'Ја Зајакнуваме Заедницата',
            description: 'Создаваме подобра иднина преку хуманост, образование и здравје.',
            buttonText: 'Поддржи Не',
          },
          {
            image: 'https://picsum.photos/800/400?random=5',
            alt: 'Насмеани деца',
            title: 'Секоја Насмевка Е Важна',
            description: 'Со вашата помош, носиме радост и надеж кај најмладите.',
            buttonText: 'Погледни Повеќе',
          },
        ]);
      }
    }, 500);
  });
};


// fetchPeople
export const fetchPeople = (lang = "mk") => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        mk: [
          {
            name: 'Ана Петрова',
            description: 'Има потреба од итна операција на срце.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            name: 'Марко Јованов',
            description: 'Потребна е терапија за лекување на леукемија.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          {
            name: 'Ивана Стојанова',
            description: 'Терапија за ретка болест.',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
          },
          {
            name: 'Даниел Крстев',
            description: 'Средства за рехабилитација по сообраќајна несреќа.',
            image: 'https://randomuser.me/api/portraits/men/21.jpg'
          },
          {
            name: 'Елена Христова',
            description: 'Потребни средства за лекување на карцином.',
            image: 'https://randomuser.me/api/portraits/women/15.jpg'
          }
        ],
        sq: [
          {
            name: 'Ana Petrova',
            description: 'Ka nevojë për një operacion urgjent në zemër.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            name: 'Marko Jovanov',
            description: 'Kërkohet terapi për trajtimin e leukemisë.',
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          {
            name: 'Ivana Stojanova',
            description: 'Terapia për një sëmundje të rrallë.',
            image: 'https://randomuser.me/api/portraits/women/68.jpg'
          },
          {
            name: 'Daniel Krstev',
            description: 'Fonde për rehabilitim pas një aksidenti në trafik.',
            image: 'https://randomuser.me/api/portraits/men/21.jpg'
          },
          {
            name: 'Elena Hristova',
            description: 'Nevojiten fonde për trajtimin e kancerit.',
            image: 'https://randomuser.me/api/portraits/women/15.jpg'
          }
        ]
      };

      // Normalize lang if it's 'alb' instead of 'sq'
      const normalizedLang = lang === 'alb' ? 'sq' : lang;
      resolve(data[normalizedLang] || data.mk);
    }, 600);
  });
};
