<template>
  <section id="hero" class="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-700 overflow-hidden scroll-mt-16">
    <!-- Background decoration -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"
      />
      <div
        class="absolute bottom-0 left-0 w-64 h-64 bg-orange-400 rounded-full translate-y-1/2 -translate-x-1/2"
      />
    </div>
    <div
      class="absolute inset-0"
      style="background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.06) 0%, transparent 40%)"
    />

    <div class="container-xl relative z-10 pt-28 pb-28 md:pt-36 md:pb-36">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Trust badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          <span class="text-white/90 text-sm font-medium">
            Rasmiy va qonuniy xizmat
          </span>
        </div>

        <!-- H1 — single keyword-rich headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          <!-- Yevroprotokol — -->
          <span class="text-orange-400">Yo'l transport hodisasini</span>
          <br class="hidden sm:block" />
          biz bilan Rasmiylashtiring
        </h1>

        <p class="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto">
          <strong class="text-white font-bold">15 daqiqada</strong>
          rasmiy avtohalokat hujjati tayyorlang.
          <span class="text-white font-semibold">tez va qonuniy.</span>
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#services" class="btn-outline-white !text-sm !px-5 !py-3 sm:!text-xl sm:!px-10 sm:!py-5 !rounded-xl sm:!rounded-2xl">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Qanday ishlaydi?
          </a>
        </div>

        <!-- Trust signals -->
        <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16">
          <div v-for="trust in trustSignals" :key="trust" class="flex items-center gap-2 text-white/90">
            <svg class="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="font-medium text-sm md:text-base">{{ trust }}</span>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 md:gap-8 border-t border-white/20 pt-10">
          <div v-for="stat in stats" :key="stat.value" class="text-center">
            <div class="text-3xl md:text-4xl font-extrabold text-white mb-1">{{ stat.value }}</div>
            <div class="text-blue-200 text-xs md:text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Wave divider -->
    <div class="absolute bottom-0 left-0 right-0 leading-none">
      <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          d="M0 56L60 49C120 42 240 28 360 21C480 14 600 14 720 17.5C840 21 960 28 1080 31.5C1200 35 1320 35 1380 35L1440 35V56H0Z"
          fill="white"
        />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustSignals = [
  'Qonuniy hujjat',
  '24/7 ishlaydi',
  '15 daqiqada tayyor',
]

const stats = [
  { value: '50 000+', label: 'Muvaffaqiyatli hodisalar' },
  { value: '15 daq', label: "O'rtacha vaqt" },
  { value: '100%', label: 'Qonuniy kuch' },
]
</script>
