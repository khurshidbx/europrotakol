export type Lang = 'uz' | 'ru'

const uz = {
  nav: {
    home: 'Asosiy',
    services: 'Bizning xizmatlar',
    conditions: 'Yevroprotokol shartlari',
    faq: 'Savollar',
    contact: 'Aloqa',
  },
  hero: {
    badge1: '24/7',
    badge2: 'Toshkent',
    h1a: 'Yevroprotokol',
    h1b: '15 daqiqada yetib boramiz.',
    sub: "Vaqtingizni va Sog'ligingizni asrang",
    cta: 'Qanday ishlaydi?',
  },
  services: {
    heading: 'Bizning xizmatlar',
    sub: "EVROPROTOKOL xizmatlari butun Toshkent shahri va Toshkent viloyati bo'ylab mavjud.",
    cards: [
      {
        title: "Sug'urta hujjatlari",
        desc: "Sug'urta kompaniyasiga topshirish uchun barcha kerakli hujjatlarni to'g'ri va to'liq tayyorlaymiz.",
      },
      {
        title: 'Protokol',
        desc: "Yevroprotokol bayonnomasini qonun talablariga muvofiq to'liq va aniq to'ldiramiz.",
      },
      {
        title: 'DYH Fiksatsiyasi',
        desc: "Hodisa joyini, avtomobillar holatini va zararlangan joylarni professional ravishda qayd etamiz.",
      },
      {
        title: 'Ekspertiza',
        desc: "Avtomobilga yetkazilgan moddiy zararni rasmiy tartibda tekshirib, dalolatnoma tuzamiz.",
      },
    ],
    stepsHeading: 'Qanday Ishlaydi?',
    steps: [
      {
        title: 'Hodisa joyiga borish',
        desc: "Mutaxassisimiz darhol hodisa joyiga boradi, fotosuratlar oladi va yevroprotokol blankini to'ldiradi.",
      },
      {
        title: 'Narkologik tekshiruv',
        desc: "Har ikkala haydovchi belgilangan muassasada alkogol va giyohvand moddalar testidan o'tkaziladi.",
      },
      {
        title: 'Zararni baholash',
        desc: "Avtomobillarga yetkazilgan moddiy zararni ko'zdan kechiradi va rasmiy dalolatnoma tuzadi.",
      },
      {
        title: "Sug'urtaga topshirish",
        desc: "Barcha hujjatlar tayyor bo'lgach, ikki haydovchini sug'urta kompaniyasiga olib borib topshiramiz.",
      },
    ],
  },
  conditions: {
    tag: 'Shartlar',
    heading: 'Yevroprotokol Shartlari',
    cardTitle: "O'zbekistonda yevroprotokol shartlari",
    items: [
      "DYH da ishtirok etgan haydovchilar mast yoki giyohvand ta'sirida emas",
      "DYH da ishtirok etgan haydovchilardan biri o'z aybini to'liq tan olgan",
      "Hodisada shaxsiy jarohat yoki halokat sodir bo'lmagan",
      "DYH piyodaning ishtiroki siz sodir bo'lgan",
      "Faqat 2 ta avtomobil ishtirok etgan, uchinchi tomon mulkiga zarar yetkazilmagan",
      "Har ikkala avtomobil egasining fuqarolik javobgarligi (OSAGO) DYH gacha sug'urtalangan",
      'Moddiy zarar belgilangan qonuniy miqdordan oshmagan',
    ],
    warningBold: 'Diqqat:',
    warning:
      "Yuqoridagi shartlardan biri bajarilmasa — yevroprotokol qo'llab bo'lmaydi. Bunday hollarda yo'l harakati xodimlarini (GAYI) chaqirish shart.",
  },
  faq: {
    heading: "Ko'p So'raladigan Savollar",
    items: [
      {
        question: 'Yevroprotokol nima?',
        answer:
          "Yevroprotokol yo'l-transport hodisalarini hujjatlashtirishning soddalashtirilgan tartibi bo'lib, unda haydovchilar yo'l harakati xodimlarining (GAYI) ishtirokisiz mustaqil ravishda maxsus baxtsiz hodisa bayonnomasini to'ldiradilar. Ushbu tizim O'zbekistonda 2021-yil 25-noyabrda joriy etilgan.",
      },
      {
        question: "Yevroprotokol qachon qo'llaniladi?",
        answer:
          "Faqat quyidagi shartlar bajarilganda: aynan 2 ta transport vositasi ishtirok etganda, jarohatlar yo'q va uchinchi tomon mulkiga zarar yetkazilmaganda, ikki haydovchi ham hodisa sharoitlari va aybdorlik masalasida kelishib olgan, va moddiy zarar belgilangan miqdordan oshmagan hollarda.",
      },
      {
        question: 'Yevroprotokol hujjati qonuniy kuchga egami?',
        answer:
          "Ha, yevroprotokol O'zbekiston Respublikasining «Yo'l harakati xavfsizligi to'g'risida»gi qonuni bilan rasmiy tan olingan hujjat bo'lib, OSAGO sug'urta to'lovlari uchun to'liq qonuniy asos hisoblanadi.",
      },
      {
        question: "Hujjatni to'ldirish uchun nima kerak?",
        answer:
          "Haydovchilik guvohnomasi, avtomobil texnik pasporti (texpasport), OSAGO majburiy sug'urta polisi, hodisa joyining aniq fotosuratlari (kamida 4–6 ta), va avtomobillardagi shikastlanish fotosuratlari.",
      },
      {
        question: "Hujjat sug'urta kompaniyasiga qancha muddat ichida taqdim etilishi kerak?",
        answer:
          "Qonun bo'yicha hodisadan keyin 5 ish kuni ichida sug'urta kompaniyasiga taqdim etilishi lozim. Muddatni kechiktirmaslik uchun hujjatni hodisa sodir bo'lgandan so'ng imkon qadar tezroq to'ldiring.",
      },
    ],
  },
  cta: {
    heading: 'Yordam kerakmi?',
    sub: "Bizga qo'ng'iroq qiling yoki Telegram orqali yozing!",
    call: "Qo'ng'iroq Qilish",
    telegram: 'Telegram',
    instagram: 'Instagram',
  },
}

const ru = {
  nav: {
    home: 'Главная',
    services: 'Наши услуги',
    conditions: 'Условия',
    faq: 'Вопросы',
    contact: 'Контакты',
  },
  hero: {
    badge1: '24/7',
    badge2: 'Ташкент',
    h1a: 'Европротокол',
    h1b: 'Приедем за 15 минут.',
    sub: 'Сберегите своё время и здоровье',
    cta: 'Как работает?',
  },
  services: {
    heading: 'Наши услуги',
    sub: 'Услуги ЕВРОПРОТОКОЛА доступны по всему Ташкенту и Ташкентской области.',
    cards: [
      {
        title: 'Документы для СК',
        desc: 'Готовим все необходимые документы для подачи в страховую компанию правильно и в полном объёме.',
      },
      {
        title: 'Протокол',
        desc: 'Заполняем извещение о ДТП строго в соответствии с требованиями действующего законодательства.',
      },
      {
        title: 'Фиксация ДТП',
        desc: 'Профессионально фиксируем место ДТП, состояние автомобилей и характер повреждений.',
      },
      {
        title: 'Экспертиза',
        desc: 'Официально оцениваем материальный ущерб, причинённый автомобилю, и составляем акт.',
      },
    ],
    stepsHeading: 'Как это работает?',
    steps: [
      {
        title: 'Выезд на место',
        desc: 'Наш специалист немедленно выезжает на место ДТП, делает фотографии и заполняет бланк Европротокола.',
      },
      {
        title: 'Нарколог. освидетельствование',
        desc: 'Оба водителя проходят тест на алкоголь и наркотики в уполномоченном медицинском учреждении.',
      },
      {
        title: 'Оценка ущерба',
        desc: 'Специалист осматривает повреждения автомобилей и составляет официальный акт об ущербе.',
      },
      {
        title: 'Подача в страховую',
        desc: 'После готовности документов сопровождаем обоих водителей в страховую компанию для подачи.',
      },
    ],
  },
  conditions: {
    tag: 'Условия',
    heading: 'Условия Европротокола',
    cardTitle: 'Условия Европротокола в Узбекистане',
    items: [
      'Водители, участвовавшие в ДТП, не находятся в состоянии опьянения',
      'Один из водителей, участвовавших в ДТП, полностью признал свою вину',
      'В ДТП нет пострадавших или погибших',
      'ДТП произошло без участия пешехода',
      'В ДТП участвуют только 2 автомобиля, ущерб третьим лицам не нанесён',
      'Гражданская ответственность обоих водителей застрахована по ОСАГО до ДТП',
      'Материальный ущерб не превышает установленного законом лимита',
    ],
    warningBold: 'Внимание:',
    warning:
      'Если хотя бы одно условие не выполнено — оформить Европротокол нельзя. В таком случае необходимо вызвать сотрудников ГИБДД.',
  },
  faq: {
    heading: 'Часто задаваемые вопросы',
    items: [
      {
        question: 'Что такое Европротокол?',
        answer:
          'Европротокол — это упрощённый порядок оформления ДТП без участия сотрудников ГИБДД. Водители самостоятельно заполняют специальный бланк извещения о ДТП. Система введена в Узбекистане 25 ноября 2021 года.',
      },
      {
        question: 'Когда применяется Европротокол?',
        answer:
          'Применяется только при следующих условиях: в ДТП участвуют ровно 2 транспортных средства, нет пострадавших, не нанесён ущерб имуществу третьих лиц, оба водителя согласны с обстоятельствами и виной, материальный ущерб не превышает установленного лимита.',
      },
      {
        question: 'Имеет ли документ юридическую силу?',
        answer:
          'Да, Европротокол — официально признанный документ в Республике Узбекистан. Он является полным правовым основанием для страховых выплат по ОСАГО и может быть использован в суде.',
      },
      {
        question: 'Что нужно для оформления?',
        answer:
          'Водительское удостоверение, техпаспорт транспортного средства, страховой полис ОСАГО, чёткие фотографии места ДТП (не менее 4–6 штук) и фотографии повреждений автомобилей.',
      },
      {
        question: 'В течение какого срока нужно предоставить документ в страховую?',
        answer:
          'По закону — в течение 5 рабочих дней с момента ДТП. Не откладывайте оформление, чтобы не пропустить установленный срок.',
      },
    ],
  },
  cta: {
    heading: 'Нужна помощь?',
    sub: 'Позвоните нам или напишите в Telegram!',
    call: 'Позвонить',
    telegram: 'Telegram',
    instagram: 'Instagram',
  },
}

const all = { uz, ru }

export const useLang = () => {
  const lang = useState<Lang>('app:lang', () => 'uz')
  const setLang = (l: Lang) => { lang.value = l }
  const tr = computed(() => all[lang.value])
  return { lang, setLang, tr }
}
