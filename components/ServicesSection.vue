<template>
  <section id="services" class="pt-8 pb-10 md:pt-10 md:pb-14 bg-white scroll-mt-20">
    <div class="container-xl">

      <div class="text-center mb-8">
        <!-- <span class="section-tag">Xizmatlar</span> -->
        <h2 class="section-heading mb-4">Bizning xizmatlar</h2>
        <p class="section-sub max-w-2xl mx-auto">
          EVROPROTOKOL xizmatlari butun Toshkent shahri va Toshkent viloyati bo'ylab mavjud.
        </p>
      </div>

      <!-- Service cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <div
          v-for="service in services"
          :key="service.title"
          class="card"
        >
          <div class="flex items-center justify-between gap-3 mb-3">
            <h3 class="font-bold text-gray-900 uppercase tracking-wide text-sm">{{ service.title }}</h3>
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', service.bg]">
              <svg :class="['w-5 h-5', service.color]"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.icon" />
            </div>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
        </div>
      </div>

      <!-- Steps -->
      <div id="how-it-works" class="border-t border-gray-100 pt-10 scroll-mt-24">
        <div class="text-center mb-8">
          <span class="section-tag">Jarayon</span>
          <h3 class="text-xl md:text-3xl font-bold text-gray-900">Qanday Ishlaydi?</h3>
        </div>

        <div class="relative">
          <div
            class="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"
            aria-hidden="true"
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            <div
              v-for="(step, index) in steps"
              :key="step.title"
              class="relative flex flex-col items-center text-center"
            >
              <div class="relative w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-primary-50 border-2 border-primary-100 flex items-center justify-center mb-4 shadow-sm">
                <span class="absolute -top-2.5 -right-2.5 w-6 h-6 sm:w-7 sm:h-7 bg-primary-700 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {{ index + 1 }}
                </span>
                <svg class="w-9 h-9 sm:w-12 sm:h-12 text-primary-600"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="step.iconPath" />
              </div>
              <h4 class="text-base font-bold text-gray-900 mb-2">{{ step.title }}</h4>
              <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Sug'urta hujjatlari",
    desc: "Sug'urta kompaniyasiga topshirish uchun barcha kerakli hujjatlarni to'g'ri va to'liq tayyorlaymiz.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`,
    bg: 'bg-blue-50', bgHover: 'bg-blue-100', color: 'text-blue-600', colorHover: 'text-blue-700',
  },
  {
    title: 'Protokol',
    desc: "Yevroprotokol bayonnomasini qonun talablariga muvofiq to'liq va aniq to'ldiramiz.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>`,
    bg: 'bg-orange-50', bgHover: 'bg-orange-100', color: 'text-orange-500', colorHover: 'text-orange-600',
  },
  {
    title: 'DYH Fiksatsiyasi',
    desc: "Hodisa joyini, avtomobillar holatini va zararlangan joylarni professional ravishda qayd etamiz.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>`,
    bg: 'bg-green-50', bgHover: 'bg-green-100', color: 'text-green-600', colorHover: 'text-green-700',
  },
  {
    title: 'Ekspertiza',
    desc: "Avtomobilga yetkazilgan moddiy zararni rasmiy tartibda tekshirib, dalolatnoma tuzamiz.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
    bg: 'bg-purple-50', bgHover: 'bg-purple-100', color: 'text-purple-600', colorHover: 'text-purple-700',
  },
]

const steps = [
  {
    title: 'Hodisa joyiga borish',
    desc: "Mutaxassisimiz darhol hodisa joyiga boradi, fotosuratlar oladi va yevroprotokol blankini to'ldiradi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>`,
  },
  {
    title: 'Narkologik tekshiruv',
    desc: "Har ikkala haydovchi belgilangan muassasada alkogol va giyohvand moddalar testidan o'tkaziladi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>`,
  },
  {
    title: 'Zararni baholash',
    desc: "Avtomobillarga yetkazilgan moddiy zararni ko'zdan kechiradi va rasmiy dalolatnoma tuzadi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
  },
  {
    title: "Sug'urtaga topshirish",
    desc: "Barcha hujjatlar tayyor bo'lgach, ikki haydovchini sug'urta kompaniyasiga olib borib topshiramiz.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
  },
]
</script>
