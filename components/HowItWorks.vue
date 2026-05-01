<template>
  <section id="services" class="py-20 md:py-28 bg-white scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-16">
        <span class="section-tag">Jarayon</span>
        <h2 class="section-heading mb-4">Qanday Ishlaydi?</h2>
        <p class="section-sub max-w-2xl mx-auto">
          Avtohalokat hujjatini rasmiylashtirishga atigi <strong>4 qadam</strong> — barchasi
          telefoningizdan, hech qanday kutish va politsiyasiz.
        </p>
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
          <span class="section-tag">Galereya</span>
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900">Mijozlarimiz bilan</h3>
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
    title: "Ma'lumot Kiriting",
    desc: "Haydovchilik guvohnomasi, avtomobil raqami va hodisa joyini kiriting.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>`,
  },
  {
    title: 'Voqeani Tasvirlab Bering',
    desc: "Zararlangan joylarni fotosuratga oling va hodisa sxemasini chizing.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>`,
  },
  {
    title: 'Ikkinchi Tomon Imzolaydi',
    desc: "Ikkinchi haydovchi ma'lumotlarni tekshiradi va raqamli imzo qo'yadi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>`,
  },
  {
    title: 'Hujjatni Oling',
    desc: "Tayyor PDF hujjat elektron pochtangizga yuboriladi va sug'urtaga taqdim etiladi.",
    iconPath: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>`,
  },
]
</script>
