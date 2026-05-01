<template>
  <section id="use-cases" class="py-20 md:py-28 bg-white scroll-mt-20">
    <div class="container-xl">
      <div class="text-center mb-16">
        <span class="section-tag">Qo'llanish holatlari</span>
        <h2 class="section-heading mb-4">Qachon Yevroprotokol Qo'llaniladi?</h2>
        <p class="section-sub max-w-2xl mx-auto">
          Yevroprotokol faqat ma'lum holatlarda qonuniy amal qiladi. Quyida qachon ishlatish mumkin va
          qachon politsiya chaqirish kerakligini aniq ko'ring.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- When to use -->
        <div class="bg-green-50 border border-green-200 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-green-900">Yevroprotokol Qo'llash Mumkin</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="item in canUse" :key="item" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-green-900 text-sm font-medium leading-snug">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- When NOT to use -->
        <div class="bg-red-50 border border-red-200 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-red-900">Politsiya Chaqirish Shart</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="item in mustCallPolice" :key="item" class="flex items-start gap-3">
              <svg class="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-red-900 text-sm font-medium leading-snug">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Important note -->
      <div class="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
        <svg class="w-7 h-7 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.07 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        <div>
          <strong class="text-amber-900 font-semibold text-sm block mb-1">Muhim eslatma</strong>
          <p class="text-amber-800 text-sm leading-relaxed">
            Shubha bo'lsa — politsiyani chaqiring! Yevroprotokol faqat ikki tomon mutlaq kelishgan
            va barcha shartlar bajarilgan hollarda ishlatiladi. Noto'g'ri foydalanish qonuniy oqibatlarga olib kelishi mumkin.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const canUse = [
  "Yo'l-transport hodisasida hech kim jarohat olmagan (shaxsiy zarar yo'q)",
  'Faqat ikkita avtomobil ishtirok etgan',
  "Har ikkala haydovchi ham sog'-salomat va hodisa sharoitlarida kelishgan",
  "Moddiy zarar belgilangan qonuniy chegaradan oshmagan",
  "Ikkala avtomobilda ham amaldagi OSAGO sug'urta polisi mavjud",
  "Har ikkala haydovchi ham hujjatni to'ldirishga rozi",
]

const mustCallPolice = [
  "Hodisada odam jarohatlangan yoki halok bo'lgan",
  "Uchta va undan ko'p avtomobil ishtirok etgan",
  "Bir yoki ikki haydovchida OSAGO sug'urta polisi yo'q",
  "Moddiy zarar belgilangan chegaradan oshgan",
  "Haydovchilardan biri hodisa sharoitlari yuzasidan kelishmagan",
  "Haydovchi o'z harakatlari uchun javobgar bo'lolmaydigan holda (mast, boshqa sabab)",
]
</script>
