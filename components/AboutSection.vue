<template>
  <section id="about" class="py-20 md:py-28 bg-gray-50 scroll-mt-20">
    <div class="container-xl">

      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-tag">Biz haqimizda</span>
        <h2 class="section-heading mb-4">Nima Uchun Bizni Tanlashadi?</h2>
        <p class="section-sub max-w-2xl mx-auto">
          Evroprotakol24 — O'zbekiston haydovchilari uchun yaratilgan, tez va ishonchli
          yo'l-transport hodisasini rasmiylashtirishga yordam beruvchi xizmat.
        </p>
      </div>

      <!-- Split layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">

        <!-- Left: text content -->
        <div class="space-y-6">
          <div
            v-for="item in aboutItems"
            :key="item.title"
            class="flex items-start gap-4 group"
          >
            <div
              :class="['w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200', item.bg, `group-hover:${item.bgHover}`]"
            >
              <svg
                :class="['w-6 h-6 transition-colors duration-200', item.color, `group-hover:${item.colorHover}`]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                v-html="item.icon"
              />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-lg mb-1">{{ item.title }}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Right: stats card -->
        <div class="bg-primary-900 rounded-3xl p-8 text-white">
          <p class="text-primary-200 text-sm font-medium uppercase tracking-widest mb-8">
            Bizning natijalarimiz
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors"
            >
              <div class="text-3xl font-extrabold text-white mb-1">{{ stat.value }}</div>
              <div class="text-primary-200 text-sm leading-snug">{{ stat.label }}</div>
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-white/20">
            <!-- <p class="text-primary-100 text-sm leading-relaxed italic">
              "Mijozlarimizning 98% sug'urta kompaniyasiga hujjatini muvaffaqiyatli topshirgan."
            </p> -->
          </div>
        </div>
      </div>

      <!-- Values row -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div
          v-for="val in values"
          :key="val.title"
          class="card text-center group"
        >
          <div :class="['text-4xl mb-3 transition-transform duration-300 group-hover:scale-110 inline-block']">
            {{ val.emoji }}
          </div>
          <h3 class="font-bold text-gray-900 mb-2">{{ val.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ val.desc }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const aboutItems = [
  {
    title: 'Tezkor xizmat',
    desc: "Hodisa sodir bo'lgandan so'ng 15 daqiqada rasmiy hujjatni tayyor qilamiz. Hech qanday kutish yo'q.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
    bg: 'bg-orange-50', bgHover: 'bg-orange-100',
    color: 'text-orange-500', colorHover: 'text-orange-600',
  },
  {
    title: 'Huquqiy kafolat',
    desc: "Barcha hujjatlar O'zbekiston qonunchiligi asosida tuziladi va sug'urta kompaniyalari tomonidan qabul qilinadi.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
    bg: 'bg-green-50', bgHover: 'bg-green-100',
    color: 'text-green-600', colorHover: 'text-green-700',
  },
  {
    title: "24/7 qo'llab-quvvatlash",
    desc: "Tun yarmida yoki dam olish kunlari ham mutaxassislarimiz sizga yordam berishga tayyor.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>`,
    bg: 'bg-blue-50', bgHover: 'bg-blue-100',
    color: 'text-blue-600', colorHover: 'text-blue-700',
  },
  {
    title: 'Tajribali mutaxassislar',
    desc: "Jamoamizda yuridik va sug'urta sohasida 5+ yil tajribaga ega mutaxassislar ishlaydi.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    bg: 'bg-purple-50', bgHover: 'bg-purple-100',
    color: 'text-purple-600', colorHover: 'text-purple-700',
  },
]

const stats = [
  { value: '50 000+', label: 'Rasmiylashtirilgan hodisalar' },
  { value: '98%', label: "Sug'urta qabul qilgan" },
  { value: '15 daq', label: "O'rtacha vaqt" },
  { value: '5 yil', label: 'Bozordagi tajriba' },
]

const values = [
  {
    emoji: '⚡',
    title: 'Tezlik',
    desc: "Vaqtingiz qimmat — jarayonni imkon qadar tez hal qilamiz.",
  },
  {
    emoji: '🔒',
    title: 'Ishonchlilik',
    desc: "Ma'lumotlaringiz xavfsiz, hujjatlar qonuniy kuchga ega.",
  },
  {
    emoji: '💙',
    title: "G'amxo'rlik",
    desc: "Har bir mijozga individual yondashuv va to'liq yordam.",
  },
]
</script>
