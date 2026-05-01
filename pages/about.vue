<script setup lang="ts">
useSeoMeta({
  title: "Biz Haqimizda — Yevroprotokol",
  description:
    "Yevroprotokol — O'zbekiston haydovchilari uchun avtohalokat hujjatini onlayn rasmiylashtirishga yordam beruvchi rasmiy xizmat. Missiya, jamoa va qiymatlar.",
  ogTitle: "Biz Haqimizda — Yevroprotokol",
  ogUrl: 'https://yevroprotokol.uz/about',
  robots: 'index, follow',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://yevroprotokol.uz/about' }],
})

const values = [
  {
    title: 'Shaffoflik',
    desc: "Hamma narsa ochiq — yashirin to'lovlar yo'q, murakkab shartlar yo'q.",
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>`,
  },
  {
    title: 'Ishonchlilik',
    desc: "Barcha hujjatlar qonuniy kuchga ega va sug'urta kompaniyalari tomonidan qabul qilinadi.",
    color: 'text-green-600',
    bg: 'bg-green-50',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
  },
  {
    title: 'Tezkorlik',
    desc: "Haydovchilarga vaqt qimmat — shu sababli biz jarayonni 15 daqiqaga tushirdik.",
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
  },
]
</script>

<template>
  <div class="pt-20">
    <!-- Hero -->
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-24">
      <div class="container-xl text-center">
        <nav aria-label="breadcrumb" class="mb-6">
          <ol class="flex justify-center items-center gap-2 text-sm">
            <li><NuxtLink to="/" class="text-blue-200 hover:text-white transition-colors">Bosh sahifa</NuxtLink></li>
            <li class="text-blue-400">›</li>
            <li class="text-white font-medium">Biz haqimizda</li>
          </ol>
        </nav>
        <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4">Biz Haqimizda</h1>
        <p class="text-xl text-blue-100 max-w-2xl mx-auto">
          O'zbekiston haydovchilari uchun yaratilgan, bepul va qonuniy xizmat.
        </p>
      </div>
    </div>

    <!-- Mission -->
    <section class="py-16 md:py-20 bg-white">
      <div class="container-xl">
        <div class="max-w-3xl mx-auto text-center">
          <span class="section-tag">Missiyamiz</span>
          <h2 class="section-heading mb-6">Nima Uchun Bu Xizmatni Yaratdik?</h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            O'zbekistonda har yili minglab kichik yo'l-transport hodisalari sodir bo'ladi. Ko'p haydovchilar
            an'anaviy jarayonda soatlab politsiya kutib, ishdan qoladi va ortiqcha stress boshidan kechiradi.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Yevroprotokol xizmati bu muammoni hal qilish uchun yaratildi — <strong>avtohalokat hujjati</strong>ni
            rasmiylashtirishni sodda, tez va <strong>bepul</strong> qilish.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16 bg-gray-50">
      <div class="container-xl">
        <div class="text-center mb-12">
          <span class="section-tag">Qadriyatlarimiz</span>
          <h2 class="section-heading">Biz Nimani Ustun Ko'ramiz</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div v-for="val in values" :key="val.title" class="card text-center">
            <div :class="['w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4', val.bg]">
              <svg :class="['w-7 h-7', val.color]" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="val.icon" />
            </div>
            <h3 class="font-bold text-gray-900 text-lg mb-2">{{ val.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaSection />
  </div>
</template>
