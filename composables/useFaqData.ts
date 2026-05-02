export interface FaqItem {
  question: string
  answer: string
}

export const useFaqData = (): FaqItem[] => [
  {
    question: "Yevroprotokol nima?",
    answer:
      "Yevroprotokol yo'l-transport hodisalarini hujjatlashtirishning soddalashtirilgan tartibi bo'lib, unda haydovchilar yo'l harakati xodimlarining (GAYI) ishtirokisiz mustaqil ravishda maxsus baxtsiz hodisa bayonnomasini to'ldiradilar. Ushbu tizim O'zbekistonda 2021-yil 25-noyabrda joriy etilgan",
  },
  {
    question: "Yevroprotokol qachon qo'llaniladi?",
    answer:
      `Faqat quyidagi shartlar bajarilganda qo'llaniladi: Aynan 2 ta transport vositasi ishtirok etdganda, Jarohatlar yo'q, uchinchi tomon mulkiga zarar yetkazilmaganda
      ikki haydovchi ham hodisa sharoitlari va aybdorlik masalasida kelishib olgan, va moddiy zarar belgilangan miqdordan oshmagan hollarda.`,
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
]
