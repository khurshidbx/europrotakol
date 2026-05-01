<template>
  <section id="cta" class="py-20 md:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 relative overflow-hidden">
    <!-- Background shapes -->
    <div class="absolute inset-0 opacity-10" aria-hidden="true">
      <div class="absolute top-0 right-0 w-80 h-80 bg-orange-400 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div class="absolute bottom-0 left-0 w-60 h-60 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
    </div>

    <div class="container-xl relative z-10 text-center">
      <div class="max-w-2xl mx-auto">
        <span class="inline-block bg-orange-500/20 text-orange-300 font-semibold text-sm uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          Hoziroq Boshlang
        </span>

        <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Vaqt Yo'qotmang —<br />
          <span class="text-orange-400">15 Daqiqada</span> Tayyor
        </h2>

        <p class="text-xl text-blue-100 mb-10 leading-relaxed">
          Avtohalokat hujjatini rasmiylashtirishga endi saatlab kutish shart emas.
          Yevroprotokol bilan hamma narsa <strong class="text-white">tez, oson va bepul</strong>.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:+998712000000"
            class="btn-cta !text-xl !px-12 !py-5 !rounded-2xl shadow-2xl shadow-orange-900/30"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Ariza Yuborish
          </a>
          <a
            href="tel:+998712000000"
            class="btn-outline-white !text-xl !px-12 !py-5 !rounded-2xl"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Qo'ng'iroq Qilish
          </a>
        </div>

        <!-- Mini trust signals -->
        <div class="flex flex-wrap justify-center gap-6">
          <span
            v-for="trust in ['100% Bepul', 'Qonuniy', 'Tez', '24/7']"
            :key="trust"
            class="flex items-center gap-1.5 text-white/80 text-sm"
          >
            <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            {{ trust }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
