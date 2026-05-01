export interface FaqItem {
  question: string
  answer: string
}

export const useFaqData = (): FaqItem[] => [
  {
    question: "Yevroprotokol nima?",
    answer:
      "Yevroprotokol — yo'l-transport hodisasini politsiya chaqirmasdan haydovchilarning o'zlari tomonidan rasmiylashtirilgan rasmiy hujjat. U O'zbekiston Respublikasi qonunchiligi bilan mustahkamlangan va barcha sug'urta kompaniyalari tomonidan qonuniy hujjat sifatida qabul qilinadi.",
  },
  {
    question: "Yevroprotokol qachon qo'llaniladi?",
    answer:
      "Faqat quyidagi shartlar bajarilganda qo'llaniladi: yo'l-transport hodisasida shaxsiy jarohat bo'lmagan, faqat ikkita avtomobil ishtirok etgan, ikki haydovchi ham hodisa sharoitlari va aybdorlik masalasida kelishib olgan, va moddiy zarar belgilangan miqdordan oshmagan hollarda.",
  },
  {
    question: "Yevroprotokol hujjati qonuniy kuchga egami?",
    answer:
      "Ha, yevroprotokol O'zbekiston Respublikasining «Yo'l harakati xavfsizligi to'g'risida»gi qonuni bilan rasmiy tan olingan hujjat bo'lib, OSAGO sug'urta to'lovlari uchun to'liq qonuniy asos hisoblanadi. Hujjat noto'g'ri to'ldirilmasa, sudda ham foydalanish mumkin.",
  },
  {
    question: "Hujjatni to'ldirish uchun nima kerak?",
    answer:
      "Hujjatni to'ldirish uchun quyidagilar talab etiladi: haydovchilik guvohnomasi, avtomobil texnik pasporti (texpasport), OSAGO majburiy sug'urta polisi, hodisa joyining aniq fotosuratlari (kamida 4–6 ta), va avtomobillardagi shikastlanish fotosuratlari.",
  },
  {
    question: "Hujjat sug'urta kompaniyasiga qancha muddat ichida taqdim etilishi kerak?",
    answer:
      "Qonun bo'yicha hodisadan keyin 5 ish kuni ichida sug'urta kompaniyasiga taqdim etilishi lozim. Muddatni kechiktirmaslik uchun hujjatni hodisa sodir bo'lgandan so'ng imkon qadar tezroq to'ldiring.",
  },
  {
    question: "Qanday xatolardan saqlanish kerak?",
    answer:
      "Eng ko'p uchraydigan xatolar: hodisa sxemasini noaniq chizish, ikkinchi haydovchining imzosi olинмаsligi, fotosurat sifati past bo'lishi, va ma'lumotlarni noto'g'ri kiritish. Noto'g'ri yoki to'liq bo'lmagan hujjat sug'urta to'lovini rad etishga sabab bo'lishi mumkin.",
  },
  {
    question: "Zarar miqdori chegarasi qancha?",
    answer:
      "Hozirgi qonunchilikka ko'ra moddiy zarar belgilangan miqdordan (minimal ish haqining 4 barobari) oshmasligi kerak. Bu miqdor muntazam yangilab turiladi — xizmatimizda doimo so'nggi ma'lumotlar ko'rsatiladi.",
  },
  {
    question: "Xizmat bepulmi va saytda ro'yxatdan o'tish shart emasmi?",
    answer:
      "Ha, xizmat to'liq bepul. Hech qanday yashirin to'lov yo'q. Tezkor foydalanish uchun ro'yxatdan o'tmagan holda ham ariza yuborish mumkin, ammo shaxsiy kabinetda tarixni saqlash uchun ro'yxatdan o'tish tavsiya etiladi.",
  },
]
