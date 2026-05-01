<template>
  <section id="about" class="py-20 md:py-28 bg-gray-50 scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-16">
        <span class="section-tag">Afzalliklar</span>
        <h2 class="section-heading mb-4">Nima Uchun Yevroprotokol?</h2>
        <p class="section-sub max-w-2xl mx-auto">
          An'anaviy usulga nisbatan tezroq, qulay va arzon. Politsiya kelishini soatlab kutmang — hamma
          narsa telefonda hal bo'ladi.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="card group cursor-default"
        >
          <div
            :class="[
              'w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300',
              benefit.iconBg,
              `group-hover:${benefit.iconBgHover}`,
            ]"
          >
            <svg
              :class="['w-7 h-7 transition-colors duration-300', benefit.iconColor, `group-hover:${benefit.iconColorHover}`]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              v-html="benefit.iconPath"
            />
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">{{ benefit.title }}</h3>
          <p class="text-gray-500 text-sm leading-relaxed">{{ benefit.desc }}</p>
        </div>
      </div>

      <!-- Comparison table -->
      <div class="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
          <div class="p-4 text-sm font-semibold text-gray-500">Mezon</div>
          <div class="p-4 text-sm font-bold text-center text-primary-700 bg-primary-50">
            ✅ Yevroprotokol
          </div>
          <div class="p-4 text-sm font-semibold text-center text-gray-500">
            ⏳ An'anaviy usul
          </div>
        </div>
        <div
          v-for="row in comparisonRows"
          :key="row.label"
          class="grid grid-cols-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
        >
          <div class="p-4 text-sm text-gray-700 font-medium flex items-center">{{ row.label }}</div>
          <div class="p-4 text-sm text-center text-green-700 font-semibold bg-primary-50/30">{{ row.proto }}</div>
          <div class="p-4 text-sm text-center text-gray-500">{{ row.trad }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const benefits = [
  {
    title: 'Politsiya Kutish Shart Emas',
    desc: "Soatlab yo'l chetida kutib qolmang. Hujjatni o'zingiz rasmiylashtiring.",
    iconBg: 'bg-blue-50',
    iconBgHover: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconColorHover: 'text-blue-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
  },
  {
    title: '15 Daqiqada Tayyor',
    desc: 'Oddiy interfeysimiz yordamida hujjatni bir necha daqiqada to\'ldiring.',
    iconBg: 'bg-green-50',
    iconBgHover: 'bg-green-100',
    iconColor: 'text-green-600',
    iconColorHover: 'text-green-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
  },
  {
    title: "To'liq Qonuniy Kuch",
    desc: "Hujjat sud va sug'urta kompaniyalari tomonidan rasmiy tan olinadi.",
    iconBg: 'bg-purple-50',
    iconBgHover: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconColorHover: 'text-purple-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
  },
  {
    title: '24/7 Ishlaydi',
    desc: "Tun yarmida yoki dam olish kunlari ham xizmatdan foydalanish mumkin.",
    iconBg: 'bg-orange-50',
    iconBgHover: 'bg-orange-100',
    iconColor: 'text-orange-600',
    iconColorHover: 'text-orange-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>`,
  },
  {
    title: 'Mutlaqo Bepul',
    desc: "Hech qanday yashirin to'lov yo'q. Xizmat davlat manfaatida bepul ko'rsatiladi.",
    iconBg: 'bg-emerald-50',
    iconBgHover: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    iconColorHover: 'text-emerald-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`,
  },
  {
    title: 'Har Qanday Qurilmadan',
    desc: "Telefon, planshet yoki kompyuterdan — istalgan qurilmadan foydalaning.",
    iconBg: 'bg-sky-50',
    iconBgHover: 'bg-sky-100',
    iconColor: 'text-sky-600',
    iconColorHover: 'text-sky-700',
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
  },
]

const comparisonRows = [
  { label: 'Vaqt', proto: '15 daqiqa', trad: '2–4 soat' },
  { label: 'Narx', proto: 'Bepul', trad: 'Politsiya jarimasi mumkin' },
  { label: 'Mavjudlik', proto: '24/7', trad: 'Ish vaqtida' },
  { label: "Qog'oz ish", proto: "Yo'q — hammasi raqamli", trad: "Ko'p qog'oz" },
  { label: "Sug'urta", proto: 'Qabul qilinadi', trad: 'Qabul qilinadi' },
]
</script>
