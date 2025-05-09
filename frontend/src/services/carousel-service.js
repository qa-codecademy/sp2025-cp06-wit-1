export const fetchCarouselItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
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
      }, 500);
    });
  };

  // fetchPeople
export const fetchPeople = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 600);
  });
};
