<template>
  <section id="services" class="py-20 md:py-28 bg-white scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-16">
        <h2 class="section-heading mb-4">Qanday Ishlaydi?</h2>
      </div>

      <div class="relative">
        <!-- Connector line (desktop) -->
        <div
          class="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"
          aria-hidden="true"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div
            v-for="(step, index) in steps"
            :key="step.title"
            class="relative flex flex-col items-center text-center group"
          >
            <!-- Step number circle -->
            <div
              class="relative w-28 h-28 rounded-2xl bg-primary-50 border-2 border-primary-100 flex items-center justify-center mb-6
                     group-hover:bg-primary-700 group-hover:border-primary-700 transition-all duration-300 shadow-sm group-hover:shadow-primary-200 group-hover:shadow-lg"
            >
              <span
                class="absolute -top-3 -right-3 w-7 h-7 bg-primary-700 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md group-hover:bg-orange-500 transition-colors"
              >
                {{ index + 1 }}
              </span>
              <svg
                class="w-12 h-12 text-primary-600 group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                v-html="step.iconPath"
              />
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Photo carousel -->
      <div class="mt-20">
        <div class="text-center mb-8">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">Bizning mijozlarimiz</h3>
        </div>

        <div class="relative overflow-hidden rounded-3xl shadow-xl bg-gray-100 select-none">
          <!-- Slides -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <div
              v-for="(img, i) in images"
              :key="i"
              class="w-full flex-shrink-0 aspect-[16/7] relative"
            >
              <img
                :src="img.src"
                :alt="img.alt"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <!-- Caption -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-8 py-5">
                <p class="text-white font-semibold text-lg">{{ img.caption }}</p>
                <p class="text-white/70 text-sm">{{ img.sub }}</p>
              </div>
            </div>
          </div>

          <!-- Prev / Next arrows -->
          <button
            @click="prev"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
            aria-label="Oldingi"
          >
            <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="next"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm"
            aria-label="Keyingi"
          >
            <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- Dots -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              v-for="(_, i) in images"
              :key="i"
              @click="goTo(i)"
              :class="[
                'h-2 rounded-full transition-all duration-300',
                current === i ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80',
              ]"
              :aria-label="`Slayd ${i + 1}`"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const current = ref(0)

const images = [
  {
    src: 'https://picsum.photos/seed/car-uz-1/1200/525',
    alt: 'Mijoz avtomobili 1',
    caption: 'Toshkent, 2024',
    sub: 'Yevroprotokol yordamida 12 daqiqada hujjat tayyor',
  },
  {
    src: 'https://picsum.photos/seed/car-uz-2/1200/525',
    alt: 'Mijoz avtomobili 2',
    caption: 'Samarqand, 2024',
    sub: 'Politsiyasiz, stresssiz hal qilindi',
  },
  {
    src: 'https://picsum.photos/seed/car-uz-3/1200/525',
    alt: 'Mijoz avtomobili 3',
    caption: "Farg'ona, 2025",
    sub: "Ikki tomon ham mamnun — 10 daqiqada kelishildi",
  },
  {
    src: 'https://picsum.photos/seed/car-uz-4/1200/525',
    alt: 'Mijoz avtomobili 4',
    caption: 'Toshkent, 2025',
    sub: "Sug'urta kompaniyasi hujjatni muammosiz qabul qildi",
  },
  {
    src: 'https://picsum.photos/seed/car-uz-5/1200/525',
    alt: 'Mijoz avtomobili 5',
    caption: 'Namangan, 2025',
    sub: 'Kechqurun soat 22:00 da — 24/7 xizmat ishladi',
  },
]

let timer: ReturnType<typeof setInterval>

const next = () => { current.value = (current.value + 1) % images.length }
const prev = () => { current.value = (current.value - 1 + images.length) % images.length }
const goTo = (i: number) => { current.value = i }

onMounted(() => { timer = setInterval(next, 4000) })
onUnmounted(() => clearInterval(timer))
const steps = [
  {
    title: 'Hodisa joyiga borish',
    desc: "Mutaxassisimiz darhol hodisa joyiga boradi, fotosuratlar oladi, sxema chizadi va yevroprotokol blankini to'ldiradi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>`,
  },
  {
    title: 'Narkologik tekshiruv',
    desc: "Har ikkala haydovchi belgilangan narkologik muassasada alkogol va giyohvand moddalar testidan o'tkaziladi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>`,
  },
  {
    title: "Zararni baholash",
    desc: "Mutaxassis avtomobillarga yetkazilgan moddiy zararni ko'zdan kechiradi va rasmiy dalolatnoma tuzadi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>`,
  },
  {
    title: "Sug'urtaga topshirish",
    desc: "Barcha hujjatlar tayyor bo'lgach, ikki haydovchini sug'urta kompaniyasiga olib boramiz va hujjatlarni birga topshiramiz.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>`,
  },
]
</script>
